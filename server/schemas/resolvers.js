const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user_id }).select(
          "-__v -password"
        );
        return userData;
      }

      throw new AuthenticationError("Oops, user not logged in");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          "Invalid email or password. Please try again."
        );
      }

      const isPasswordValid = await user.isCorrectPassword(password);

      if (!isPasswordValid) {
        throw new AuthenticationError(
          "Invalid email or password. Please try again."
        );
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("User with this email already exists.");
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
          throw new Error("User with this username already exists.");
        }

        const user = await User.create({ username, email, password });
        const token = signToken(user);
        console.log("Sever Side Token", token);

        return { token, user };
      } catch (error) {
        return { error: error.message };
      }
    },
    saveBook: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please login to save this book.");
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please login to remove this book.");
    },
  },
};

module.exports = resolvers;
