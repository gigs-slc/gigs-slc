import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBxkOt8CvvYpGl-emd-iBivMIAE7tJzNHg",
    authDomain: "gigs-c0643.firebaseapp.com",
    databaseURL: "https://gigs-c0643.firebaseio.com",
    projectId: "gigs-c0643",
    storageBucket: "gigs-c0643.appspot.com",
    messagingSenderId: "221485044861",
    appId: "1:221485044861:web:2bcc549dcba46b696f8d14",
    measurementId: "G-2BWKWT2J6P"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();