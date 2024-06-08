# Full Stack Blog Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Welcome to the Full Stack Blog Application! This project is a full-stack web application that allows users to create and read blog posts. It's built with modern web technologies, ensuring a smooth and interactive user experience.

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Create and Read Posts**: Users can write and publish blog posts and read posts from other users.
- **Data Security**: User passwords are securely hashed using Bcrypt.

## Follow this link to see the Live demo- 

https://www.linkedin.com/posts/shikhar-singh-79492821b_fullstack-fullstackwebsite-project-activity-7196171460724363265-_nXX?utm_source=share&utm_medium=member_desktop

## Technologies

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Password Security**: Bcrypt

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ShikharSinghKushwaha/CODSOFT.git
    cd CODSOFT
    ```

2. **Install dependencies**:
    ```bash
    cd server
    npm install
    cd ../client
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the `backend` directory with the following content:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the application**:
    ```
    # Start the backend server
    cd server
    node app.js

    # Start the frontend server
    cd ../client
    npm start
    ```

The application will be running on `http://localhost:3000`.

## Usage

1. **Register and Log In**:
    - Visit `http://localhost:3000/register` to create an account.
    - Log in at `http://localhost:3000/login`.
    - 
2. **Create a Blog Post**:
    - Go to `Blog` to write a new blog post.

3. **View Blog Posts**:
    - To View your blog posts go to the `Posts` page.
      
4. **View all Blogs**
    - Go to Home page to see all blogs 

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes and commit them**:
    ```bash
    git commit -m 'Add some feature'
    ```
4. **Push to your branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Create a pull request**.

## License

This project is licensed under the MIT License.

## Contact

- **Shikhar Singh Kushwaha**
    - Email: shikharsinghkushwaha6@gmail.com

---


