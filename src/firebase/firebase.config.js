// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpynbVEo2YNZ_5zK31mWjVlNa2UK3QFzg",
    authDomain: "web-development-tutorial-d6d5b.firebaseapp.com",
    projectId: "web-development-tutorial-d6d5b",
    storageBucket: "web-development-tutorial-d6d5b.appspot.com",
    messagingSenderId: "326575457057",
    appId: "1:326575457057:web:519a6331c1bf78f2b83460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;