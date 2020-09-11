const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express"); // Node.js
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HPzWbAmXkxEmHuudhtRYJ6NiYJCyKMwTHZL1RuPp4aqclFIBajr76QzEH8SMtrV6L8FZm9gO741Sv8A3yWajEEh00NkRF3yuL");

// API

// - App config

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"))

// - Listen Command
exports.api = functions.https.onRequest(app)

// This is the setup needed to get a backend express

