const mongoose =require('mongoose')
const Schema=mongoose.Schema
const RegisterSchema =new Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const  registerModel =mongoose.model('loginModel', RegisterSchema)
module.exports = registerModel