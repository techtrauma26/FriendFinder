// ===============================================================================
// LOAD DATA

// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // ---------------------------------------------------------------------------
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------
  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
  
    console.log(req.body.scores);

    // To recieve the data from friends and parseInt for scores; must find the match prior to adding the friend to the array, 
     var friend = req.body;

     for(var i = 0; i < friend.scores.length; i++) {
       friend.scores[i] = parseInt(friend.scores[i]);
     }
 
     var bestMatch = 0;
     var lowestDiff= 100000;
 
     for(var i = 0; i < friendsData.length; i++) {
       var totDiff = 0;
       for(var x = 0; x < friendsData[i].scores.length; x++) {
         var difference = Math.abs(friend.scores[x] - friendsData[i].scores[x]);
         totDiff += difference;
       }
 
       if(totDiff < lowestDiff) {
         bestMatch = i;
         lowestDiff = totDiff;
       }
     }
 
     friendsData.push(friend);
 
     res.json(friendsData[bestMatch]);
   });
 };







 











  // ---------------------------------------------------------------------------
 