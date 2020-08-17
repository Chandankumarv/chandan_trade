# Chandan Trade

## Steps to setup

1. Run `npm ci` for frozen dependencies or
2. Run `npm install` for latest version.

## Running the application

1. Run `npm start`
2. The application will be running on port 8000
3. To run the application in any other port, set port value to desired port in package.json as shown below.
    ```
    "scripts": {
        "start": "PORT=4000 node src/index.js"
    }
    ```