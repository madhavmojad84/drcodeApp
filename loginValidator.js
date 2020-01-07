const validator=require('validator')
const loginValidator=(info)=>{
    var err={}
     if(!info.email){
         err.email="Please Enter Email"
     } else if(!validator.default.isEmail){
         err.email="Please Enter a Valid Email "
     }
     if(!info.password){
         err.password="Please Enter Password"
     }
     return {
         err:err,
         isValid:Object.keys(err).length===0
     }
}

module.exports=loginValidator

