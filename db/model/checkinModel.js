const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let  checkinSchema=new Schema({
    name:  {type:String,default:null},
    idCard:  {type:String,default:null},
    sex: {type:String,default:null},
    state: {type:Number,default:0},
    price: {type:Number,default:null},
    roomNum: {type:Number,default:null},
    tel: {type:Number,default:null},
    ctime: { type: Date, default: Date.now },
    ntime: { type: Date, default: null }
  })

let checkinModel=mongoose.model('checkins',checkinSchema)
module.exports=checkinModel