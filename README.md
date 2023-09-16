# Simple Node.js Express API

### Introduction

This repository contains a simple Node.js Express project that serves as a basic API. The API provides a single route that displays a name when accessed.

Access in: https://show-ronaldinho-cse341.onrender.com/

### Prerequisites

Before running this project, ensure you have the following software installed on your machine:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/alissoninacio1/cse-341-web-services.git

### Project Overview

This project is a simple Node.js Express API that provides a single endpoint returning the name "Ronaldinho Gaucho."

### Usage

The server will start on a default port (usually 5000) or on the port specified in the `process.env.PORT` environment variable. You can access the service in the following ways:

- **Web Browser:** Open a web browser and navigate to `http://localhost:5000/`.

- **cURL:** Use the cURL command to make a GET request:
  
  ```bash
  curl http://localhost:5000/

### Project Structure

This project follows a simple structure:

- **server.js**: The main entry point of the application, responsible for setting up the Express.js server.

- **routes.js**: Defines the application routes and utilizes a controller to handle requests.

- **controllers/showName.js**: Contains the controller function that sends the "Ronaldinho Gaucho" response.

- **package.json**: Contains project metadata, dependencies, and scripts.

### License

This project is licensed under the ISC License. For more details, please see the [LICENSE](LICENSE) file.
