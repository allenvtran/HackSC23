// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { collection, query, where } from "firebase/firestore";
import { getText } from "./chatGPTapi.js";
const firebase = require(`@firebase/testing`);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxEIjvw5uLhyIoABsOMm93fTVK4Twkac0",
    authDomain: "webliftai.firebaseapp.com",
    projectId: "webliftai",
    storageBucket: "webliftai.appspot.com",
    messagingSenderId: "314977331271",
    appId: "1:314977331271:web:5ae18c92e9a832b1f36962",
    measurementId: "G-6SYN7C0XK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Create a reference to the clients collection
const clients = collection(db, "clients");

// reading from firestore?
var website_text, website_img;
// Create a query against the collection.
const q = query(clients, where("Document ID", "==", "lgUT3sbSax2SZujaF6Js"));
q.once("modules").then(function (modules) {
    //get text
    modules.once("text").then(function (text) {
        website_text = text;
        console.log(website_text);
    });
    //get images and store in a list
    modules.once("images").then(function (imgs) {
        imgs.forEach((img) => {
            //print each imageurl
            console.log(img.imageUrl);
        });
    });
});

// Get the data from the text node
// q.once("value").then(function (snapshot) {
//     document.getElementById("firebaseData").innerHTML = snapshot.val();
// });

// write to firestore?
