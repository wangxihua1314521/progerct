var obj = {
    title: '微信',
    desc: '微信内容',
    //分享链接
    link: "http://wx.jscook.cn/",
    //分享的图片
    imgUrl: "http://www.jscss.cc/static/images/jscss.cc.ico",
    success: function() {
    	//分享成功的回调函数
   	}
};
$(function(){
	
	$.post("/wechat/jssdk",{
		//需要签名的 url 地址
		url : window.location.href.replace(/#.*/g,""),
		apilist : [
			'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onGetNetworkType'
		].join(",")
	},function(resp){
		wx.config({
            debug: true,
            appId: resp.appId,
            timestamp: resp.timestamp,
            nonceStr: resp.nonceStr,
            signature: resp.signature,
            jsApiList: resp.jsApiList
        });

        wx.ready(function() {
            // alert("wx ready");
            // 在这里调用 API
                // 2. 分享接口
                // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                wx.onMenuShareAppMessage(obj);
                // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
                wx.onMenuShareTimeline(obj);
        });
	},"json");
	$("#getNetworkType").on("click",function(){
		wx.getNetworkType({
		    success: function (res) {
		    	// 返回网络类型2g，3g，4g，wifi
		        var networkType = res.networkType;
		        alert(networkType);
		    }
		});
	});

})
