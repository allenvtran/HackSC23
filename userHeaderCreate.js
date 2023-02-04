
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



firebase.initializeApp(firebaseConfig);

// Get reference to Firestore database
var db = firebase.firestore();

// Get client's tracking ID from Firestore
var clientId = "some_client_id";
var trackingIdRef = db.collection("clients").doc(clientId).collection("ga_info").doc("tracking_id");
trackingIdRef.get().then(function(doc) {
  if (doc.exists) {
    var trackingId = doc.data().tracking_id;

    // Generate tracking code with client's tracking ID
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', trackingId, 'auto');

    // Set values for custom dimensions
    ga('set', 'dimension1', gender);
    ga('set', 'dimension2', location);
    ga('set', 'dimension3', ageGroup);
    ga('set', 'dimension4', interests);

    ga('send', 'pageview');
  } else {
    // Document for client's tracking ID does not exist
  }
}).catch(function(error) {
  console.log("Error getting tracking ID:", error);
});