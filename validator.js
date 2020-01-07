const validator=require('validator')
const BuyerInfoValidator=(info)=>{
    var err={}
     if(!info.name){
         err.name="Please Enter  Name"
     }
     if(!info.email){
         err.email="Please Enter Email"
     } else if(!validator.default.isEmail){
         err.email="Please Enter a Valid Email "
     }
     if(!info.productID){
         err.productID="Please Enter Product ID"
     }
     return {
         err:err,
         isValid:Object.keys(err).length===0
     }
}

module.exports=BuyerInfoValidator

