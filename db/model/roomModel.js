const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let checkinSchema = new Schema({
  roomNum: { type: Number, default: null },
  type: { type: String, default: null },
  price: { type: Number, default: null },
  area: { type: String, default: null },
  desc: { type: String, default: null },
  state: { type: Number, default: 0 },
  ctime: { type: Date, default: Date.now }
})

let checkinModel = mongoose.model('rooms', checkinSchema)
module.exports = checkinModel