// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDb from "./db/index.js";
dotenv.config({path:'./env'})
connectDb()
/*
import express from "express"
const app=express()
 
// always remeber when we talk to database use try and catch and database sai baat krn mai lgta time toh use async await use kro 
// function connectDb (){}

// connectDb()
//  this can be improved by uysing iffy because bas index.js chlne pr run hoje 
;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`);
       app.on('error',(e3rror)=>{
        console.log(error)
        throw error 
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on Port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("Here is the error",error)
        throw error 
    }
})()
*/