const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000; 

// Serve static content for the app from the "public" directory 
// in the application directory.
app.use(express.static(process.cwd() + '/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// require("./controllers/burgers_controller.js")(app);

app.listen(port, function() {
    console.log("App listening on PORT: " + port);
});