//Include the Firebase JavaScript library
 src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"
 src="https://www.gstatic.com/firebasejs/7.14.0/firebase-firestore.js"

 
// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);



// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();



// Initialize Firebase
var firebaseConfig = {
  // Your firebase config goes here
};
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