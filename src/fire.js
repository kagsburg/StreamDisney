import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCyvbAMff197Y7XtnGIwoVkbqc6N6DABGQ",

  authDomain: "disney-stream-25d78.firebaseapp.com",

  projectId: "disney-stream-25d78",

  storageBucket: "disney-stream-25d78.appspot.com",

  messagingSenderId: "1908658697",

  appId: "1:1908658697:web:66983d937dd7da700a5ed8",

  measurementId: "G-GZMS8HRS5K"

}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
 