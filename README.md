# VCard Generator API

This README documents the VCard Generator API used in Commcepta's frontend / fullstack testing.

## Dependencies

The projects dependencies are:

- Node 14 LTS
- npm 6

## Installing

To install the API, go to project's folder and execute `npm install`. All project's dependencies should be installed with this command.

## Configure

Configuration should be on an `.env` file. To start configure, create a copy from `.env.example` file and rename it to `.env`. The possible environment variables to configure are:

- `NODE_ENV`: define the project's running environment. It should be `development` for development environments, and `production` for deploy.
- `PORT`: Define the port that project will run. The default value is `3000`.

## Running the project

### Development server

To run a development server, type and run the command `npm run dev` on console. It will starts a `nodemon` auto-reload process.

### Production server

To run a production server, type and run the command `npm start`. It will run a sucrase instance of `server.js` entrypoint.

## API Docs

To visit the api docs, just start it in development mode and visit http://localhost:3000/docs
