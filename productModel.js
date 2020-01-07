const mongoose =require('mongoose')
const Schema=mongoose.Schema
const productSchema =new Schema({
    name:{
        type:String,
        required:'',
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    productID:{
        type:Number,
        required:true
    }
})

const  productModel =mongoose.model('productModel', productSchema)
module.exports = productModel