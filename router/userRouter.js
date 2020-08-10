const express = require('express')
const router = express.Router()
const model = require('../db/model/userModel')


/**
 * @api {get} /admin/user/reg 用户注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {String} us 用户账号
 * @apiParam {String} ps 用户密码.
 *
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} msg  返回信息.
 */

router.get('/reg', (req,res) => {
  res.send('链接成功')
})

module.exports = router