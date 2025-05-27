# How to load F1 Essentials Store on local machine

## To install and run the application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal in the project directory.
3. Run `npm install` command to install the dependencies.
4. Run the `npx expo start` command to start the application.
5. Open your browser and navigate to http://localhost:8081 to see the app in action.

## Parameters Configuration

### To use the application, you must add a `.env` file in the root directory. It should contain the following:
```EXPO_PUBLIC_FIREBASE_DATABASE_URL=FirebaseDBURL
EXPO_PUBLIC_FIREBASE_API_KEY=FirebaseAPIKey
EXPO_PUBLIC_FIREBASE_AUTH_URL=FireBaseAuthURL
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=GoogleMapsAPIKey
```
