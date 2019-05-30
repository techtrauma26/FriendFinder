// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");
// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
var public = require("path").join(__dirname,"app/public");
app.use(express.static(public));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ================================================================================
// ROUTER
// ======================================ds==========================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
