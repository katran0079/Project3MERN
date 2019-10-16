const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const axios = require("axios");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");

var Con = require("./models/Com.js");
var User = require("./models/User.js");
app.use(cors());
connectDB();

app.use(express.json({ extended: false })); // we can now accept info from req.body

//Define Routes
// client route is just a way to get user info without displaying password information
app.use("/api/client", require("./routes/clientUser"));
// user route is where all user info is stored at
app.use("/api/users", require("./routes/users"));
// con app is where saved con info is stored at
app.use("/api/cons", require("./routes/cons"));
// scrape route grabs the ticketmaster API and helps to extract the info we'll need and then dumps it into the db
app.use("/scrape", require("./routes/scrape"));
app.get("/", (req, res) => res.json({ msg: "Welcome to ConGoers!" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
