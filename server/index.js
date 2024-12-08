const express=require('express')
const mongoose=require('mongoose')
const app=express()

require('dotenv').config(); //load environment variables


mongoose.connect(process.env.MONGO_URI) //connects to MongoDB Atlas
    
const userSchema=new mongoose.Schema({
        name:String,
        age:Number
})

const userModel=mongoose.model("emp",userSchema) //creates a collection

const emp1= new userModel({
    name:"madhu",
    age:22
})

emp1.save() //updates in the mongodb atlas


app.listen("3001",()=>{
    console.log("SERVER IS RUNNING!!");
})

