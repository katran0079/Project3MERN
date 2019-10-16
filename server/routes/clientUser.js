const express = require("express");
const router = express.Router();
const axios = require("axios");

//hides password

router.get("/", function(req, res) {
  axios.get("http://localhost:5000/api/users").then(function(response) {
    var resp = response.data;
    var array = [];
    for (var i = 0; i < resp.length; i++) {
      var obj = {
        name: resp[i].name,
        id: resp[i]._id,
        dateJoined: resp[i].dateJoined,
        tags: resp[i].tags
      };
      array.push(obj);
    }
    res.send(array);
  });
});

module.exports = router;
