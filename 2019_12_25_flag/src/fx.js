
var urlTitle='http://api.slb.moneplus.cn/ci/auth/make?url=f5eac4b6c0061f52667bc8900560e799bf51173d'
document.addEventListener("WeixinJSBridgeReady", function () {
	WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
		document.getElementById('audio').play();
		// document.getElementById('audio').pause();
	});
}, false);

var audio=document.getElementById("audio");
audio.addEventListener('ended', function () {
	audio.play();
}, false);
$.ajax({
		url: "//api.slb.moneplus.cn/jssdk/real_list.php",
		type: "GET",
		dataType: 'jsonp',
		jsonp: 'callback',
		data: {
			'url':window.location.protocol+'//'+ location.hostname + location.pathname + location.search
			//  'url': location.hostname + location.pathname + location.search
		},
		success: function(result){
			console.log(result)
			wx.config({
				debug: false,
				appId: result.appId,
				timestamp: result.timestamp,
				nonceStr: result.nonceStr,
				signature: result.signature,
				jsApiList: [
					'onMenuShareTimeline',
					'onMenuShareAppMessage'
				]
			})
			updata();
		},
		error:function(res){
			alert(res);
		}
	});
	
// 微信分享
function updata(){
	console.log('urlTitle',urlTitle)
	wx.ready(function (e) {
		// wxReady();
		wx.onMenuShareTimeline({//分享到朋友圈
			title:'解锁你的财富潜能',
			desc: '生财指南在此，猛戳~',
			link: urlTitle,
			imgUrl: 'http://cdn.campaign.realh5.cn/2019/spdb/share.jpg',
			success: function () {
				// _hmt.push(['_trackEvent', '微信分享', '朋友圈', '成功']);
				// _czc.push(['_trackEvent', '微信分享', '朋友圈','成功'])
				console.log('朋友圈success')
				
			},
			cancel: function () {
				// _hmt.push(['_trackEvent', '微信分享', '朋友圈', '取消']);
				console.log('朋友圈cancel')
			}
		})
		
		wx.onMenuShareAppMessage({//分享好友
			title: '解锁你的财富潜能',
			desc: '生财指南在此，猛戳~',
			link: urlTitle,
			imgUrl: 'http://cdn.campaign.realh5.cn/2019/spdb/share.jpg',
			success: function () {
				// 用户确认分享后执行的回调函数
				// _hmt.push(['_trackEvent', '微信分享', '好友', '成功']);
				// _czc.push(['_trackEvent', '微信分享', '好友','成功'])
				console.log('分享好友success')
			},
			cancel: function () {
				console.log('分享好友cancel')
				// 用户取消分享后执行的回调函数
				// _hmt.push(['_trackEvent', '微信分享', '好友', '取消']);
			}
		});
	});
}