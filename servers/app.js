//导入 express 模块
var express = require('express');
//实例化
var app = express();

//加载 token 模块
require("./token")(app);


var server = require('http').Server(app);
server.listen(80, "0.0.0.0", function () {
	var _host  = server.address().address;
  	var _port  = server.address().port;
  	console.log('Example app listening at http://%s:%s', _host, _port);
});
