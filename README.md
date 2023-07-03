# Starter React App

This is a starter React application built with the latest standards and Typescript. The application is an online raffle system with user and admin registration, and raffles.

## Features

- User Authentication using Firebase Authentication
- Admin and User Registration
- Online Raffles

## Project Structure

The frontend is structured as follows:

- `src/index.tsx`: The entry point of the React application.
- `src/App.tsx`: The main application component.
- `src/components/`: Contains all the React components.
- `src/services/`: Contains services for authentication, firebase, raffles, users, and admins.
- `src/types/`: Contains all the Typescript type definitions.
- `src/utils/`: Contains utility functions.
- `src/styles/`: Contains all the CSS styles.

The backend is structured as follows:

- `backend/index.js`: The entry point of the Node.js server.
- `backend/routes/`: Contains all the route definitions.
- `backend/models/`: Contains all the data models.
- `backend/config/`: Contains configuration files.

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the server with `npm start`

## Environment Variables

You need to set the following environment variables in `.env` file:

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)