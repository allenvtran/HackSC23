
// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
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
   measurementId: "G-6SYN7C0XK5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();



// Get a reference to the text node
var textRef = database.ref("/clients/lgUT3sbSax2SZujaF6Js/modules/amsjDVGXSfIEeRsELOT3/text");

// Get the data from the text node
textRef.once("value")
  .then(function(snapshot) {
    document.getElementById("firebaseData").innerHTML = snapshot.val();
  });
