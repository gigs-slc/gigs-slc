import * as firebase from 'firebase';
import {API_KEY,AUTH_DOMAIN,DATABASE_URL,PROJECT_ID,STORAGE_BUCKET,MESSAGE_SENDER_ID,APP_ID,MEASUREMENT_ID} from 'react-native-dotenv';


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: gigs-c0643,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();