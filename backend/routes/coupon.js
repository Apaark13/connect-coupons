const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const router=express.Router()
const Coupon=require('../models/coupon.model')


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
module.exports = router;