 
  // Initialize Firebase
  var firebase = require('firebase');
  var $ = require("jquery");

  var config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    databaseURL: process.env.FIREBASE_URL,
    projectId: process.env.FIREBASE_ID,
    storageBucket: process.env.FIREBASE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDERID
  };

  firebase.initializeApp(config);

  module.exports = firebase;

