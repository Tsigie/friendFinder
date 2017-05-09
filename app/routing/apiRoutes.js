var friendsData = require("../data/friendsData");
var surveyData = require("../data/surveyData");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });

  app.post("/api/friends", function(req, res) {
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      surveyData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function() {
    friendsData = [];
    surveyData = [];

    console.log(friendsData);
  });
};
