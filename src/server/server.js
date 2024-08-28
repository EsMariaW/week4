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
app.post('/api/login', require('./router/postLogin'));
app.post('/loginafter', require('./router/postLoginafter'));

const http = require('http').Server(app);
http.listen(3000, ()=>{
    console.log("Server listening on port 3000");
}
);
