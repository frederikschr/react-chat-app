const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.captureSignUp = functions.auth.user().onCreate((user) => {
  // console.log(`User Logged in: ${user}`);
//});

exports.addMessage = functions.https.onRequest(async (req, res) => {
  res.json({result: `Message with added.`});
});

