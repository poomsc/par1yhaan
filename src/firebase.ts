import firebase from 'firebase/app'
import "firebase/database"
const config = {
  apiKey: 'AIzaSyBX9KhWtXnupjWuvqmPspBxWK1VefvJitI',
  authDomain: 'par1yhaan.firebaseapp.com',
  databaseURL: 'https://par1yhaan-default-rtdb.firebaseio.com',
  projectId: 'par1yhaan',
  storageBucket: 'par1yhaan.appspot.com',
  messagingSenderId: '34727186609',
  appId: '1:34727186609:web:3f1ed028f2673ab93ad290',
  measurementId: 'G-JC2F10TWT6',
};

firebase.initializeApp(config);
export const database = firebase.database();

export default firebase;
