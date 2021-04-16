import firebase from 'firebase/app'
import "firebase/database"
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APP__API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_APP_MEASUREMENT_ID,
};

const app = firebase.initializeApp(config);
export const database = firebase.database();
export const auth = firebase.auth();

export default app;
