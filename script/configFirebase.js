import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
    push,
    onChildAdded,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmDVgn1w2e2mtP95-zUyh48xFc-jpRD4E",
    authDomain: "clinica-saude-chat.firebaseapp.com",
    databaseURL: "https://clinica-saude-chat-default-rtdb.firebaseio.com/",
    projectId: "clinica-saude-chat",
    storageBucket: "clinica-saude-chat.appspot.com",
    messagingSenderId: "856598122743",
    appId: "1:856598122743:web:9acf51953fb10d7e9843f2",
    measurementId: "G-GV93ZSYVQR",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
    db,
    set,
    ref,
    push,
    onChildAdded,
    getAuth,
    auth,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
};
