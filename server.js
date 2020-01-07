const express =require ('express')
const app=express()
const morgan=require('morgan')
const jwt =require('jsonwebtoken')
const PORT =process.env.PORT ||8080
const cors =require('cors')
// imprt buyer info  validator
const BuyerInfoValidator=require('./validator')

// import model   to store buyer informaiton in  database 
 const  productModel =require('./productModel')

// connect mongoodb database
const mongoose=require('mongoose')

const loginValidator=require('./loginValidator')
const registerValidator=require('./registerValidator')
const adminRegister=require('./adminRegister')
const bcrypt =require('bcryptjs')

mongoose.connect('mongodb://selim12:selim12@ds243501.mlab.com:43501/selim12', {useNewUrlParser:true, useUnifiedTopology:true})
// mongoose.connect('mongodb://localhost/myapp', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Database connected') )
.catch(err=>{console.log(err)})



// use body parser 
const bodyParser =require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))


// user cors 
app.use(cors())
// test server 
app.get('/welcome', (req, res)=>{
    res.json({massage:"Welcome "})
    console.log('welcome')
})

// register Product  
app.post ('/registerProduct', (req,res)=>{
    const validate=BuyerInfoValidator(req.body)
    if(!validate.isValid){
        res.status(400).json(validate.err)
    } else{
        const addInfo=new productModel({
            name:req.body.name,
            email:req.body.email,
            productID:req.body.productID
        })
        .save()
        .then(data=>{
            res.json({massage:"Submit successfull"})
        })
        .catch(err=>{
            console.log(err)
            
            res.json({massage:"Server Error occurd "})
        })
    }
})
// get all post 
app.get('/all', (req, res)=>{
    productModel.find()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({massage:"Server error occurd "})
    })
})
app.post('/register', (req, res)=>{
    const registerValidate=registerValidator(req.body)
    if(!registerValidate.isValid){
        res.status(400).json(registerValidate.err)
        return
    }else{
        bcrypt.hash(req.body.password , 11)
        .then(hash=>{
            
        const registered=new adminRegister({name:req.body.name, email:req.body.email, password:hash})
        registered.save()
        .then(data=>{
            res.status(200).json({massage:"Registerd success "})
        })
        })
    }
})

app.post('/login', (req, res)=>{
    const  loginValidate=loginValidator(req.body)
    if(!loginValidate.isValid){
        res.status(400).json(loginValidate.err)
        return
    }else{
        adminRegister.findOne({email:req.body.email})
        .then(data=>{
            if(!data){
                res.status(400).json({massage:"User Not Found "})
                return
            }
            bcrypt.compare(req.body.password, data.password)
            .then(reesult=>{
                if(!reesult){
                    res.status(404).json({massage:"Wrong password"})
                }
                if(reesult){
                    const token=jwt.sign({name:req.body.name, email:req.body.email},'secret', {expiresIn:'4h'})
                    res.status(200).json(token)
                }
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json(err)
        })
    }
})
 
app.listen(PORT, () =>{
    console.log(`Server connected on Port no : ${ PORT}`)
})

