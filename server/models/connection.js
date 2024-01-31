//this is my server / connection file
const express = require('express');
const app =express();
var routes = require('../controller/userRouter');
const mongoose = require('mongoose');

const cors = require('cors');


app.use(cors(
  {
    origin : 'http://localhost:4200'
  }
));

mongoose.connect("mongodb://localhost:27017/users")
.then(sucess=> app.listen(4200), console.log("Connected to DB successfully"))
.catch((error)=>console.log(error.message));


app.listen(4200, function check(err){ // to check if node is working on cmd type 'node connection.js'
  if(err)
  console.log('error')
else
console.log("started node js");
});

app.use(express.json());
app.use(routes);
