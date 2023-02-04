

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

// Reference to the client's document in the Firebase Firestore
var clientRef = firebase.firestore().collection("clients").doc(clientId);

// Reference to the client's modules collection in the Firebase Firestore
var modulesRef = clientRef.collection("modules");

// Reference to a specific module document in the Firebase Firestore
var moduleRef = modulesRef.doc(moduleId);

// Reference to the module's images collection in the Firebase Firestore
var imagesRef = moduleRef.collection("images");

// Query to retrieve images with a specific label
var query = imagesRef.where("label", "==", gender === "Male" ? "Male" : "Female");

// Get the image data
query.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var image = doc.data();
    console.log(image.imageUrl);
  });
});

