const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let checkinSchema = new Schema({
  name: { type: String, default: null },
  account: { type: String, default: null },
  pwd: { type: String, default: null },
  sex: { type: String, default: null },
  idCard: { type: String, default: null },
  section: { type: String, default: null },
  tel: { type: Number, default: null },
  ctime: { type: Date, default: Date.now },
})

let checkinModel = mongoose.model('persons', checkinSchema)
module.exports = checkinModel