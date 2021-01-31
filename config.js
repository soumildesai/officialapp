import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyApbkqmz3bLRee-OjjuayZUhGydDNGpdWM",
    authDomain: "officialapp-fd2b0.firebaseapp.com",
    projectId: "officialapp-fd2b0",
    storageBucket: "officialapp-fd2b0.appspot.com",
    messagingSenderId: "1093287635354",
    appId: "1:1093287635354:web:4e8020851ef6a9c370f223"
};
//init firebase
firebase.initializeApp(firebaseConfig)
const appAuth = firebase.auth()
const appFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()
export { appFirestore, appAuth, timestamp }