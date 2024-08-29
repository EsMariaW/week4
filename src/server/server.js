const express = require('express');
const app = express(); //create application
const cors = require('cors');

// for different origins 
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// define ports
// for how to respond to data from this port
// require: get the function from the file
// ./ => paths relative the the path of the file calling them, i.e. relative to location of server.js

// It will require 1 route “/api/auth” that will respond to a login request.
app.post('/api/login', require('./router/Login'));

app.post('/afterLogin', require('./router/afterLogin'));

const http = require('http').Server(app);
http.listen(3000, ()=>{
    console.log("Server listening on port 3000");
}
);
