const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors');
const router = express.Router()
const bodyParser = require('body-parser');

const User=require('../models/user.model')
const app=express()


app.use(express.json());
app.use(cors())


router.post('/register',async(req,res)=>{
    try{
        const userfind=await User.findOne(
            {
                email:req.body.email,
                password:req.body.password
            })
            if(userfind)
            {
                throw("duplicate")
            }
            else
            {
    const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
            }
    res.json({status:'ok'})
    }
    catch(err)
    {
        res.json({status:'error',error:'duplicate email'})
    }
})
router.post('/login',async(req,res)=>{
    try{
    const user=await User.findOne(
        {
            email:req.body.email,
            password:req.body.password
        }
    )
    if(user)
    {
    res.json({status:'ok',user:true})
    }
    else
    {
        res.json({status:'error',user:false})
    }
    }
    catch(err)
    {
        res.json({status:'error',error:'duplicate email'})
    }
})
router.get('/login',(req,res)=>{
    res.send('hello')
    console.log('dgd')
})
module.exports = router;