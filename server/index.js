import express from 'express';
import mongoose from 'mongoose';

const app=express();

mongoose.connect("mongodb+srv://AryanJ:%40shokNEHA123@merntodo.8hyddy1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(8000))
.then(()=>console.log("Connected to mongoDB"))
.catch((err)=>console.log(err));