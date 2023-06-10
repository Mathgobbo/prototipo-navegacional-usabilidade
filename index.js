const cors = require("cors");
const express = require("express");
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.use(express.static("public"));
// app.get("/", (req, res) => res.send("Ola mundo"));

app.listen(3000, () => console.log("Listening"));
