// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express = require('express');
// Dependencies
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express ();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080;
const server = app.listen(port, listening);
function listening (){
    //console.log ('server running');
    console.log(`running on localhost:${port}`);
};

//GET route to return the projectData object
app.get('/all', function(req, res){
  res.send(projectData);
});

//POST route to receive data
app.post('/add',function(req, res){
    newEntry = {
     date: req.body.date,
     temp: req.body.temp,
     content: req.body.content
    }
    projectData.push(newEntry)
    console.log(projectData)

});
