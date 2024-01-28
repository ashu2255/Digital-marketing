import express from 'express';
const app = express();


import mongoose from 'mongoose';

app.listen(8000, ()=>
{
  console.log("Conneted to backend!");
})
