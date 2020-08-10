// 存放和食品 数据操作的相关信息 数据库的操作
const VipModel= require('../db/model/vipModel')
async function  add(name,img,vipType,desc){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await VipModel.insertMany({name,img,vipType,desc})
   console.log(result)
}
async function get(page,pageSize){
  // 获取总的食品数据数组
  let allVips =await VipModel.find()
  // 获取视食品数据 总数量
  let allCount =allVips.length 
  let vips = await VipModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {vips,allCount}
}

// 分类查询+分页
async function getByType(vipType,page,pageSize){
  let allVips=await VipModel.find({vipType})
  let allCount=allVips.length 
  let  vips=await VipModel.find({vipType}).skip((page-1)*pageSize).limit(pageSize)
  return {vips,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则 
 let  allVips=await VipModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
 let  allCount = allVips.length
 let  vips=await VipModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {vips,allCount}
}

// 删除
async function del(vipId){
  let result = await  VipModel.deleteOne({_id:vipId})
  return result
}

// 修改
async function  update(vipId,name,img,vipType,desc){
  
  let result  = await VipModel.updateOne({_id:vipId},{name,img,vipType,desc})
   console.log(result)
   return  result
}
module.exports={add,get,getByType,getByKw,del,update}