import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
    push,
    onChildAdded,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAafmJc1qbQevKHSgvAx2ngHYAXQyi01bE",
    authDomain: "chatclinicadeploy.firebaseapp.com",
    databaseURL: "https://chatclinicadeploy-default-rtdb.firebaseio.com",
    projectId: "chatclinicadeploy",
    storageBucket: "chatclinicadeploy.appspot.com",
    messagingSenderId: "1095622371501",
    appId: "1:1095622371501:web:f22dd7fe42ee4251c3fe24",
    measurementId: "G-BYWW0LTYLC",
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
