const express = require('express')
const router =express.Router()
const jwt = require('../utils/jwt')
const adminModel = require('../db/model/personModel')
router.post('/login',(req,res)=>{
  let {account,pwd} = req.body 
  let rootList=[]
  let token=null
  let _id=''
  let name = '' 
  adminModel.findOne({account,pwd})
  .then((db)=>{
    if(!db) return  res.send({err:-1,msg:'login nook'})
    rootList=db.rootList
    _id=db._id
    name = db.name
    token =jwt.createToken({},60*60)
    return adminModel.updateMany({_id},{token})
  })
  .then((db)=>{
    res.send({err:0,msg:'ok',token,rootList,uid:_id,name:name})
  })
})
router.post('/logout',(req,res)=>{
  let {uid} = req.body 
  let rootList=[]
  let token=null
  adminModel.updateMany({_id:uid},{token:''})
  .then(()=>{
    res.send({err:0,msg:'logout ok'})
  })

})

module.exports=router