//导入 express 模块
var express = require('express');
//post 请求处理模块
var bodyparser = require("body-parser");
//实例化
var app = express();

//处理 post 请求，将 post 请求的数据封装为 json 
app.use(bodyparser.urlencoded({
	extended: true
}));
var path = require("path");

//加载 token 模块
require("./token.js")(app);
require("./jssdk.js")(app);
var saticpath = path.join(__dirname,"../static");

app.use(express.static(saticpath));

app.listen(8000,function(){
	console.log("open http://127.0.0.1:8000");
})
