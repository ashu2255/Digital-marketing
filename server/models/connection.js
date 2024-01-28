const express = require('express');
const app =express();

const mongoose = require('mongoose');

app.listen(8000, function check(err){ // to check if node is working on cmd type 'node connection.js'
  if(err)
  console.log('error')
else
console.log("started node js");
});

mongoose.connect("mongodb://localhost:27017/users")
.then(sucess=> app.listen(3000), console.log("Connected to DB successfully"))
.catch((error)=>console.log(error.message));
