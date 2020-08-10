// mongo
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true });
//链接本地数据库
var db = mongoose.connection;
db.on('error', () => {
    console.log("数据库链接失败")
});
db.once('open', function () {
    console.log("数据库链接成功")
});