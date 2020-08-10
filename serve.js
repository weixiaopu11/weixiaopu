const express = require('express')
const app = express()
const cors = require('cors')
const  bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//cors
app.use(cors())

// mongo
const db = require('./db/connect')

// router
const adminRouter = require('./router/index')
const tokenMiddleWare = require('./middleware/token')
app.use('/admin', tokenMiddleWare ,adminRouter)

app.listen(3000,()=>{
  console.log('serve start')
})