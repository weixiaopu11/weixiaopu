const express = require('express')
const router = express.Router()
const Vip = require('../control/vipController')

//查询接口（分页查询  分类查询 关键字查询）
router.post('/getVips',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  Vip.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.post('/getVipsByType',(req,res)=>{
  let {vipType} = req.body 
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||2
  Vip.getByType(vipType,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.post('/getVipsByKw',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||2
  let {kw} = req.body
  Vip.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.post('/delVip',(req,res)=>{
  let  {vipId}=req.body
  Vip.del(vipId)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})
//添加数据
router.post('/addVip',(req,res)=>{
  let {name,img,vipType,desc} = req.body 
  Vip.add(name,img,vipType,desc)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.post('/updateVip',(req,res)=>{
  let {vipId,name,img,vipType,desc} = req.body 
  Vip.update(vipId,name,img,vipType,desc)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router