const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// A basic HTTP function you can test in the browser
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from DEN Cloud Functions!");
});
