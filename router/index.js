// router
const express = require('express')
const router = express.Router()
const userRouter = require('./adminUserRouter')
const checkinRouter = require('./checkinRouter')
const personRouter = require('./personRouter')
const roomRouter = require('./roomRouter')
const vipRouter = require('./adminVipModel')

router.use('/user', userRouter)
router.use('/checkin', checkinRouter)
router.use('/person',personRouter)
router.use('/room',roomRouter)
router.use('/vip',vipRouter)

module.exports = router