const express = require('express')
const router = express.Router()
const checkin = require('../control/checkinControl')

/**
 * @api {post} /admin/checkin/in 客户入住
 * @apiName in
 * @apiGroup Checkin
 *
 * @apiParam {String} name 客户姓名
 * @apiParam {String} idCard 客户身份证号 
 * @apiParam {String} sex 客户性别
 * @apiParam {String} state 入住状态
 * @apiParam {Number} price 入住价格 
 * @apiParam {Number} roomNum 房间号 
 * @apiParam {Number} tel 手机号
 * @apiParam {Date} ctime 入住时间 
 * @apiParam {Date} ntime 退房时间 
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.post('/in', (req, res)=>{
  let {name, idCard, sex, price, roomNum, tel} = req.body.data
  checkin.add(name, idCard, sex, price, roomNum, tel)
  .then((data)=>{
    res.send({err: 0, msg: '添加成功'})    
  })
  .catch((err)=>{
    res.send({err: -1, msg:'添加失败', info: err})
  })
})

/**
 * @api {post} /admin/checkin/del 删除入住信息客户
 * @apiName del
 * @apiGroup Checkin
 *
 * @apiParam {String} _id 客户id
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.post('/del', (req, res) => {
  let {_id} = req.body.data
  checkin.del(_id)
  .then((data)=>{
    res.send({err: 0, msg: '删除成功', info: data})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '删除失败', info: err})
  })
})

/**
 * @api {post} /admin/checkin/update 客户入住信息修改
 * @apiName update
 * @apiGroup Checkin
 *
 * @apiParam {String} _id 客户id
 * @apiParam {String} name 客户姓名
 * @apiParam {String} idCard 客户身份证号 
 * @apiParam {String} sex 客户性别
 * @apiParam {Number} price 入住价格 
 * @apiParam {Number} roomNum 房间号 
 * @apiParam {Number} tel 手机号
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.post('/update', (req, res) => {
  let {_id, sex, price, roomNum, tel} = req.body.data
  checkin.update(_id, sex, price, roomNum, tel)
  .then((data)=>{
    res.send({err: 0, msg: '修改成功', info: data})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '修改失败', info: err})
  })
})

/**
 * @api {post} /admin/checkin/get 客户入住信息获取
 * @apiName get
 * @apiGroup Checkin
 *
 * @apiParam {String} page 当前页数
 * @apiParam {String} pageSize 每页数据数量
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.post('/get', (req, res) => {
  let page = Number(req.body.data.page)||1
  let pageSize = Number(req.body.data.pageSize)||5
  checkin.get(page,pageSize)
  .then((data)=>{
    res.send({err: 0, msg: '查询成功', info: {list: data}})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '查询失败', info: err})
  })
})
/**
 * @api {post} /admin/checkin/getByType 分类客户入住信息获取
 * @apiName getByType
 * @apiGroup Checkin
 *
 * @apiParam {Number} page 当前页数
 * @apiParam {Number} pageSize 每页数据数量
 * @apiParam {Number} type 类别 2=全部 0=正在入住 1=已退房 
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.post('/getByType', (req, res) => {
  let page = Number(req.body.data.page)||1
  let pageSize = Number(req.body.data.pageSize)||5
  let {type} = req.body.data
  checkin.getByType(page,pageSize,type)
  .then((data)=>{
    res.send({err: 0, msg: '查询成功', info: {list: data}})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '查询失败', info: err})
  })
})
/**
 * @api {post} /admin/checkin/getByKw 关键词客户入住信息获取
 * @apiName getByKw
 * @apiGroup Checkin
 *
 * @apiParam {Number} page 当前页数
 * @apiParam {Number} pageSize 每页数据数量
 * @apiParam {Number} kw 关键词
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.post('/getByKw', (req, res) => {
  let page = Number(req.body.data.page)||1
  let pageSize = Number(req.body.data.pageSize)||5
  let {kw} = req.body.data
  checkin.getByKw(page,pageSize,kw)
  .then((data)=>{
    res.send({err: 0, msg: '查询成功', info: {list: data}})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '查询失败', info: err})
  })
})

/**
 * @api {post} /admin/checkin/out 客户退房
 * @apiName out
 * @apiGroup Checkin
 *
 * @apiParam {String} _id 客户id
 * 
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  是否成功信息.
 * @apiSuccess {String} info  返回信息.
 */
router.post('/out', (req, res) => {
  let { _id } = req.body.data
  let ntime = Date.now()
  checkin.out(_id,ntime)
  .then((data)=>{
    res.send({err: 0, msg: '退房成功', info: data})
  })
  .catch((err)=>{
    res.send({err: -1, msg: '退房失败', info: err})
  })
})

module.exports = router