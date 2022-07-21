import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyDBC7ABMNXKu1feBlIqwcsB3IcoICulrxw",
    authDomain: "todo-list-firebase-demo.firebaseapp.com",
    projectId: "todo-list-firebase-demo",
    storageBucket: "todo-list-firebase-demo.appspot.com",
    messagingSenderId: "5246073285",
    appId: "1:5246073285:web:d555e50bcf93bfdac273ac"
};

const app = initializeApp(firebaseConfig);