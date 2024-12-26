<<<<<<< HEAD
# Micro Instagram - Posts Management App

A backend application for managing users and their posts using **Node.js**, **Express.js**, **MySQL**, and **Sequelize**. This project provides RESTful APIs for CRUD operations on users and posts, with proper database normalization.

---

## Features

- User Management (Create, Retrieve, Update, Delete)
- Post Management (Create, Retrieve, Update, Delete)
- Tracks post counts for users
- RESTful APIs for managing users and posts
- Database normalization using Sequelize ORM

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Installation](#installation)
3. [Setting Up Environment Variables](#setting-up-environment-variables)
4. [Database Setup](#database-setup)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
7. [Steps to Run the Code](#steps-to-run-the-code)

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Environment Variables**: Dotenv

---

## Installation

1. **Clone the repository**:
   ```bash
    git clone https://github.com/your-username/micro-instagram.git
    cd micro-instagram
    npm install

---

## Setting Up Environment Variables
 **Create a .env file in the root directory.**
**Add the following configuration:**
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=posts_app
    DB_PORT=3306
    PORT=3000

---

## Database Setup
**Log in to MySQL:**
mysql -u root -p

**Create the database:**
CREATE DATABASE posts_app;

**Run migrations: Use Sequelize CLI to create tables:**
npx sequelize-cli db:migrate

---

## Running the Application
**Start the server:**
npm start

**Testing the application: Use tools like Postman or cURL to interact with the APIs.**

---

## API Endpoints
**Users API**
    GET /users
**Create a User**
    POST /users

**Update a User**
    PUT /users/:userId

**Delete a User**
    DELETE /users/:userId

**Posts API**

**Get All Posts**
    GET /posts

**Create a Post**
    POST /users/:userId/posts

**Update a Post**
    PUT /posts/:postId

**Delete a Post**
    DELETE /posts/:postId

---

## Steps to Run the Code
**Clone the repository:**
    git clone https://github.com/your-username/micro-instagram.git

**Navigate to the directory:**
    cd micro-instagram

**Install dependencies:**
    npm install

**Set up the .env file:**

**Create the database:**
    CREATE DATABASE posts_app;

**Run migrations:**
    npx sequelize-cli db:migrate

**Start the server:**
    npm start

**Test the APIs:**
    Use Postman or cURL to interact with the endpoints.

=======
# micro-instagram
>>>>>>> 03404acf1eb5990cbc33bf4699e16e1593d10885
