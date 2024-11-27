const express=require('express')
const mongoose=require('mongoose')
const app=express()

mongoose.connect("mongodb+srv://madhumitha:madhu263@madhu.ugnzz.mongodb.net/crud") //connects the mongodb atlas
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

