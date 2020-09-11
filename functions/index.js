const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
"sk_test_51HPzWbAmXkxEmHuudhtRYJ6NiYJCyKMwTHZL1RuPp4aqclFIBajr76QzEH8SMtrV6L8FZm9gO741Sv8A3yWajEEh00NkRF3yuL"
);

// API Setup the api

// - API Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send ("Hello World"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    
    console.log("Payment request recieved boom! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency: "usd",
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

// This is the setup needed to get the backend express account.

// Example endpoint
// http://localhost:5001/challenge-cb568/us-central1/api