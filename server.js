// Dependencies Connecting 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//Port 
var PORT = process.env.PORT || 3000;


//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//CSS
app.use(express.static(path.join(__dirname, "./FriendFinder/app/public")));

//Router
require('./FriendFinder/app/routing/apiRoutes.js')(app);
require('./FriendFinder/app/routing/htmlRoutes.js')(app);

// Displays all characters
app.listen(PORT, function () {
    console.log('Running on PORT ' + PORT);
});
