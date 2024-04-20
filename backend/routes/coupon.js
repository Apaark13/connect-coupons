const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const router=express.Router()
const Coupon=require('../models/coupon.model')
const User=require('../models/user.model')


 router.get('/get/:email',async(req,res)=>{
  try{
          const usercoupons=await Coupon.find({email:req.params.email})
          res.send(usercoupons)
          
  }
  catch(err)
  {
      console.log(err)
  }
})
router.get('/allusers',async(req,res)=>{
  try{
    const users=await User.find()
    console.log(users)
    res.json(users)
  }
  catch(err)
  {
    console.log(err)
  }
  
})
router.get('/get',async(req,res)=>{
  try{
          const usercoupons=await Coupon.find()
          res.json(usercoupons)
  }
  catch(err)
  {
      console.log(err)
  }
})
router.post('/post',async(req,res)=>{
  console.log('he')
  try{
    const coupon=await Coupon.create({
        email:req.body.email,
        title:req.body.title,
        code:req.body.code,
        description:req.body.description,
        end_date:req.body.end_date,
        category:req.body.category,
        website:req.body.website
    })
    res.json({status:'ok'})
  }
  catch(err)
  {
      console.log(err)
      res.json({status:'error'})
  }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
          const id1=req.params.id;
          const del=await Coupon.deleteOne({_id:id1})
           if(del.acknowledged==true)
           res.send({status:'ok'})
           else
           res.send({status:'error'})
    }
    catch(err)
    {
        res.send({status:'error'})
    }
})
module.exports = router;