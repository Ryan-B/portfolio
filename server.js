var express = require('express');
var app = express();
var server = app.listen(1991, function() {
  console.log('Go Dawgs on: 1991');
});

//Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
app.use(express.static(__dirname+'/static'));

//Mongoose
// require('./server/config/mongoose.js');
//HTTP Routes
// require('./server/config/routes.js')(app);