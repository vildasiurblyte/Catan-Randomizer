const express = require("express");
const fetch = require("node-fetch");
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
const path = require("path");



const app = express();

console.log(JSON.stringify(url));


app.use("/", express.static(path.join(__dirname, "public")));


app.listen(3000);
console.log("server is running on port 3000");