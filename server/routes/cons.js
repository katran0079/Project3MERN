const express = require("express");
const router = express.Router();

const Con = require("../models/Com");

router.get("/", async (req, res) => {
  Con.find({}).exec(function(error, doc) {
    if (error) {
      console.log(error);
    } else {
      res.json(doc);
    }
  });
});

router.post("/", async (req, res) => {
  const newCon = new Con({
    name: req.body.name,
    description: req.body.description,
    venueInfo: req.body.venueInfo
  });

  try {
    const newConAdded = await newCon.save();
    res.json(newConAdded);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error, Possibly a duplicate Con");
  }
});

module.exports = router;
