const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  User.find({}).exec(function(error, doc) {
    if (error) {
      console.log(error);
    } else {
      res.json(doc);
    }
  });
});

router.post("/", async (req, res) => {
  const newUser = new User({
    name: "Kelvin",
    email: "flowershirtsman@gmail.con",
    password: "noobslayer429"
  });

  try {
    const newUserSaved = await newUser.save();
    res.json(newUserSaved);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error, Possibly a duplicate User");
  }
});

module.exports = router;
