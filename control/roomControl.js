const model = require('../db/model/roomModel')

async function add(roomNum, type, price, area, desc, state){
  let res = await model.insertMany({roomNum, type, price, area, desc, state})
}
async function del(_id){
  let  res = await model.deleteOne({_id:_id})
  return res
}
async function update(_id, type, price, desc){
  let  res = await model.updateOne({_id:_id},{type, price, desc})
  return res
}
async function get(page,pageSize){
  let all = await model.find()
  let allCount = all.length
  let res = await model.find().skip((page-1)*pageSize).limit(pageSize)
  return {res,allCount}
}
module.exports = {add, del, update, get}