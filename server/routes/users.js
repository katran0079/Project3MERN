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

router.get("/:id", async (req, res) => {
  User.findOne({ _id: req.params.id }).exec(function(error, doc) {
    if (error) {
      console.log(error);
    } else {
      res.json(doc);
    }
  });
});

router.post("/:id", async (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      profile: req.body.profile,
      twitter: req.body.twitter,
      insta: req.body.insta,
      status: req.body.status
    }
  ).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

router.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  console.log("NEW USER: " + newUser);

  try {
    const newUserSaved = await newUser.save();
    res.json(newUserSaved);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error, Possibly a duplicate User");
  }
});

module.exports = router;
