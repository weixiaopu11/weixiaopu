const model = require('../db/model/checkinModel')

async function add(name, idCard, sex, price, roomNum, tel){
  let res = await model.insertMany({name, idCard, sex, price, roomNum, tel})
}
async function del(_id){
  let  res = await model.deleteOne({_id:_id})
  return res
}
async function update(_id, sex, price, roomNum, tel){
  let  res = await model.updateOne({_id:_id},{ sex, price, roomNum, tel})
  return res
}
async function get(page,pageSize){
  let all = await model.find()
  let allCount = all.length
  let res = await model.find().skip((page-1)*pageSize).limit(pageSize)
  return {res,allCount}
}
async function getByKw(page,pageSize,kw){
  let regex=new RegExp(kw)
  let all = await model.find({name:{$regex:regex}})
  let allCount = all.length
  let res = await model.find({name:{$regex:regex}}).skip((page-1)*pageSize).limit(pageSize)
  return {res,allCount}
}
async function out(_id, ntime){
  let res = await model.updateOne({_id: _id}, {state: 1,ntime})
  return res
}
async function getByType(page,pageSize,type){
  let all = await model.find(type==2?{}:{state:type})
  let res = await model.find(type==2?{}:{state:type}).skip((page-1)*pageSize).limit(pageSize)
  let allCount = all.length
  return {res,allCount}
}
module.exports = {add, del, update, get, out, getByType,getByKw}