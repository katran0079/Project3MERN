const express = require("express");
const router = express.Router();
const axios = require("axios");
const Con = require("../models/Com");

router.get("/", function(req, res) {
  //axios gets info from the ticketmaster discovery API to find events with the keyword="comic con";
  //we can change this and break it down further so that users can search
  axios
    .get(
      "https://app.ticketmaster.com/discovery/v2/events.json?keyword=%22comic%20con&apikey=wUlFh0QCDQ9Q1wbTtzoeQYDdWUT8xBRb"
    )
    .then(function(response) {
      console.log(response.data);
      var resp = response.data._embedded.events;
      var array = [];
      for (var i = 0; i < resp.length; i++) {
        //empty variable that will hold some data which may or may not be provided
        var endDate;
        var eventVenue;
        var description;
        console.log(eventVenue);
        //checks if there is an end date provided, if not it will list the end date as "Undetermined"
        if (typeof resp[i].dates.end === "undefined") {
          endDate = "Undetermined";
        } else {
          endDate = resp[i].dates.end.localDate;
        }
        if (typeof resp[i]._embedded === "undefined") {
          eventVenue = "Undetermined";
        } else {
          eventVenue = resp[i]._embedded.venues;
          console.log(eventVenue);
        }
        if (typeof resp[i].description === "undefined") {
          description = "No description available";
        } else {
          description = resp[i].description;
        }
        //shoots out relevant info such as the event name, description, start date, end date, and venue info.
        //just makes it easier to use this info for later as opposed to using the actual API
        var obj = {
          name: resp[i].name,
          url: resp[i].url,
          img: resp[i].images[0],
          eventID: resp[i].id,
          description: description,
          start: resp[i].dates.start.localDate,
          venueInfo: eventVenue,
          end: endDate,
          attendees: []
        };
        array.push(obj);
        var entry = new Con(obj);
        entry.save(function(err, doc) {
          if (err) {
            console.log(err);
          } else {
            console.log(doc);
          }
        });
      }
      res.send(array);
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
      attendees: req.body.attendees
    }
  ).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;
