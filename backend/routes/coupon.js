const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const router=express.Router()
const Coupon=require('../models/coupon.model')
const {deleteOne} = require('../models/user.model')


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
router.get('/get',async(req,res)=>{
  try{
          const usercoupons=await Coupon.find()
          res.send(usercoupons)
  }
  catch(err)
  {
      console.log(err)
  }
})
router.post('/post',async(req,res)=>{
  try{
    const coupon=await Coupon.create({
        email:req.body.email,
        title:req.body.title,
        description:req.body.description,
        end_date:req.body.description
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