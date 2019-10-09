const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const axios = require("axios");
const app = express();

connectDB();

app.use(express.json({ extended: false })); // we can now accept info from req.body

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/cons", require("./routes/cons"));

app.get("/", (req, res) => res.json({ msg: "Welcome to ConGoers!" }));
app.get("/scrape", function(req, res) {
  //axios gets info from the ticketmaster discovery API to find events with the keyword="comic con";
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
        var eventVenue = "Undetermined";
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
        //shoots out relevant info such as the event name, description, start date, end date, and venue info.
        //just makes it easier to use this info for later as opposed to using the actual API
        var obj = {
          name: resp[i].name,
          eventID: resp[i].id,
          description: resp[i].description,
          start: resp[i].dates.start.localDate,
          venueInfo: eventVenue,
          end: endDate
        };
        array.push(obj);
      }
      res.send(array);
    });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
