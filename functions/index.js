const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IBTgKHXY4W1g84lSDfgAvKzuM2NuwRGChcHjv9fsuarJtDCpknvdF3A1SNHzyhJwUxyE1aQLv1y4Yz2C8IHu2UQ00daOKmvvy"
);
//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, respons) => respons.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //cREated
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//Ex end point
//http://localhost:5001/ch-482f8/us-central1/api
