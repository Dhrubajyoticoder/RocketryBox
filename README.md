# RocketryBox

RocketryBox is a web application that provides an interface for user registration, login, and various functionalities such as consignment booking and order tracking. This project includes both the backend server setup using Node.js and Express, and the frontend using React.

## Table of Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/RocketryBox.git
    cd RocketryBox/server
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add the following:
    ```env
    MONGO_URL=mongodb://localhost:27017/your-database-name
    PORT=8001
    ```

### Frontend Setup

1. Navigate to the `client` directory:
    ```bash
    cd ../client
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

## Dependencies

### Backend Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `mongoose`: Elegant MongoDB object modeling for Node.js
- `dotenv`: Loads environment variables from a `.env` file
- `cors`: Provides Express middleware to enable CORS
- `bcryptjs`: Library to hash passwords
- `jsonwebtoken`: JSON Web Token implementation for token-based authentication
- `nodemailer`: Module for Node.js applications to send emails

### Frontend Dependencies

- `react`: A JavaScript library for building user interfaces
- `react-dom`: Serves as the entry point to the DOM and server renderers for React
- `react-router-dom`: DOM bindings for React Router

## Configuration

### Environment Variables

The `.env` file should include the following:
```env
PORT=8001
MONGO_URL=mongodb://localhost:27017/rocketrybox
JWT_SECRET=c2ec2b71aba7ddf95fed760fea8fb371a7733cc028f62d713d510ab96398361786e677cf9ef283dc7197bb410377b1493bc82a1a8fc850b4c8ea1f002787a03b8de3cbad97554c04f4d619547248a1ae68c65d9f66eead9ca4d1d101ac3dbc43389af9df536d06503a228032938d36329568b69564c9f68d2c0921d80ea86d116fa3d9a74fdc24648b9e1a6f6b9084de0a035fb482020eadf6fc5a52b8c8011e62ec2fb3d49eae93f553f6ae9e9f8ca3a640f30f53d2df33e63a58e239ef772f754e82dda9aaa27556aa1f6257eac4735a32022e3cd74d48eb3a19c39a06d6eb5f43e6141d5a157dd0bdf8e54eb6d6457e68c0efd072a07f11e6f4819b970a85
