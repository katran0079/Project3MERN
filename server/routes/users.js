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
  let id = req.params.id;
  User.findById({
    id,
    function(err, theUser) {
      res.json(theUser);
    }
  });
});

router.post("/", async (req, res) => {
  const newUser = new User({
    name: "kelv",
    password: "test",
    email: "fakeemail@gmail.com"
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
