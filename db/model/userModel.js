const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let  userSchema=new Schema({
    user:  {type:String,default:null},
    pass:  {type:String,default:null},
    ctime: { type: Date, default: Date.now }
})

let userModel=mongoose.model('users',userSchema)
module.exports=userModel