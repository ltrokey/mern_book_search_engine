# MERN Stack Search Book Engine Refactor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Link to live deploy](https://mern-book-search-24-46c131976f67.herokuapp.com/)

## Description

This application is a search engine for Google Books, originally built with a RESTful API and later refactored to utilize GraphQL with Apollo Server. The transition to GraphQL enhances the efficiency and flexibility of data retrieval and manipulation. The application follows the MERN stack architecture, featuring a React front end, MongoDB database, and a Node.js/Express.js server and API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Badges](#badges)
- [Features](#features)
- [Questions](#questions)

## Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/ltrokey/portfoilo_react
   cd portfoilo_react
   ```

2. **Install Dependencies**

   ```
   npm i
   ```

3. **Configuration**
   - Update the connection settings as necessary in the Heroku Config Vars using MongoDb Atlas.

## Usage

1. Run the Application

   - After following the installation instructions, execute the application by running the following command:

   ```
   npm run develop
   ```

2. Explore Application

   ![Home Page](./client/src/assets/homePage.png)

   **Login/Sign Up:**

   ![Login or Sign Up](./client/src/assets/login.png)

   **Search Books & Save Favorites:**

   ![Searched Books](./client/src/assets/searchAddBook.png)

   **See Your Books:**

   ![Saved Books](./client/src/assets/savedBooks.png)

## Badges

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Features

- GraphQL Integration: Replaced the original RESTful API with GraphQL queries and mutations using Apollo Server, allowing for more precise and efficient data fetching and modification.

- Authentication Middleware: Adapted the existing authentication middleware to seamlessly function within the context of a GraphQL API, ensuring secure and authenticated access to resources.

- Apollo Provider: Established an Apollo Provider to facilitate communication between the client-side application and the Apollo Server, ensuring smooth data flow and interaction.

## Questions

[GitHub Profile](https://github.com/ltrokey)

Please feel free to contact me via the email link below.

[Email](mailto:trokeyln@gmail.com)
