var Loader  = Laya.Loader;
var Handler = Laya.Handler;
var Tween = Laya.Tween;
var Ease = Laya.Ease;

window.alert = function(name){
  var iframe = document.createElement("IFRAME");
  iframe.style.display="none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
};

document.body.addEventListener('focusout', function() {
	if (isAndroid) return
	var currentPosition,timer;
	var speed=1;//页面滚动距离
	timer=setInterval(function(){
		currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
		currentPosition-=speed;
		window.scrollTo(0,currentPosition);//页面向上滚动
		currentPosition+=speed; //speed变量
		window.scrollTo(0,currentPosition);//页面向下滚动
		clearInterval(timer);
	},1);
})

function getRequestParams(strname) {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		}
	}
	return theRequest[strname];
}
var token = getRequestParams('token')||'testToken';
var shareId = getRequestParams('shareId')||'';

var name='晓'
var photo=''

function sf(type,obj,num,time) {
	var json = {};
	if(type==1){
		type = 0;
		json.scaleX =num;
		json.scaleY =num;
	}else{
		type = 1;
		json.scaleX =1;
		json.scaleY =1;
	}
	Tween.to(obj,json,time,Ease.linearIn,Handler.create(self, function(){sf(type,obj,num,time);}));
}

function alpha(type,obj,num,time) {
	var json = {};
	if(type==1){
		type = 0;
		json.alpha =num;
		json.alpha =num;
	}else{
		type = 1;
		json.alpha =1;
		json.alpha =1;
	}
	Tween.to(obj,json,time,Ease.linearIn, Handler.create(self, function(){
		alpha(type,obj,num,time);			
	}));
}


function move(type,obj,num,time) {
	var json = {};
	if(type==1){
		type = 0;
		json.y =obj.y+num;
	}else{
		type = 1;
		json.y =obj.y-num;
	}
	Tween.to(obj,json,time,Ease.linearIn, Handler.create(self, function(){move(type,obj,num,time);}));
}

function rotation(obj,time,rotate){
	Tween.to(obj,{rotation:rotate},time,Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{rotation:-rotate},time*2,Ease.linearIn, Handler.create(self, function(){
			Tween.to(obj,{rotation:0},time,Ease.linearIn, Handler.create(self, function(){
				rotation(obj,time,rotate);  
			}));
		}));
	}));
}

//x缩放比例=舞台宽度/设计宽度
var scaleRateW;
//y缩放比例=舞台高度/设计高度
var scaleRateH;

//需要隐藏的元素
var hideArr=[];
//flag唯一ID
var id='';
//海报页文案id
var posterId=Math.floor(Math.random()*5)+1

var textArr=[
	'跑人生第一个全马',
	'跑人生第一个半马',
	'健身房每周打卡3次',
	'开始挑战国际6大满贯',
	'完成国内5大满贯马拉松',
	'练出马甲线',
	'全年减重20斤',
	'跑一场国外马拉松',
	'获得世界马拉松大满贯六星奖牌',
	'全马PB',
	'每天跑五公里',
	'每日步数突破1万步',
	'月跑量过100公里',
	'月跑量过200公里',
	'月跑量过300公里',
	'打败赖床症，6点起床',
	'买专业䨻跑鞋，跑得更快',
	'马拉松跑进300',
	'找到同样爱跑步的另一半',
	'全家一起参加马拉松',
	'自我突破，开始尝试跑步',
	'坚持每年5场马拉松',
	'和爱人一起跑个全马',
	'10公里突破1小时',
	'去另一个城市跑马',
	'北马中签',
	'上马中签',
	'场场中签',
	'年跑量突破1000公里',
	'年跑量突破2000公里',
	'年跑量突破3000公里',
	'佛系坚持跑步',
]

function p1() {
	p1UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	hideArr=['p1_t1','p1_t2','p1_t3','p1_t4','p1_t5','p1_btn']

	for(var yi = 0;yi<hideArr.length;yi++){
		self[hideArr[yi]].scale(0,0);
	}
	Tween.to(self['p1_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+0*200);
	Tween.to(self['p1_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+1*200);
	Tween.to(self['p1_t3'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+2*200);
	Tween.to(self['p1_t4'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+3*200);
	Tween.to(self['p1_t5'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+4*200);

	Tween.to(self['p1_btn'],{scaleX:1,scaleY:1}, 700, Ease.backOut, Handler.create(self, function(){
		alpha(0,self.p1_btn,0.6,600)
	}), 600+5*200);

	alpha(0,self.p1_top,0,500)
	alpha(1,self.p1_star1,0.3,500)
	alpha(0,self.p1_star2,0.4,500)
	alpha(1,self.p1_star3,0.5,600)
	move(1,self.p1_icon3,10,900)
	move(0,self.p1_icon4,15,900)
	move(1,self.p1_icon5,20,900)
	move(0,self.p1_icon1,20,900)
	move(1,self.p1_icon2,20,900)
	
// move(1,self.p2_dai,8,1200);
	// Tween.to(self.p1_top,{alpha:1}, 700, Ease.linearIn, null, 300);

	self.p1_btn.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p2(), 0);
	})
}

function p2() {
	p2UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.p2_box2.visible=false;

	self.p2_t1.scale(0,0);
	self.p2_t2.scale(0,0);
	Tween.to(self['p2_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
	Tween.to(self['p2_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

	self.p2_hand1.x=120;
	self.p2_hand2.scale(0,0);
	self.p2_star.scale(0,0)
	self.p2_star2.scale(0,0)
	self.p2_t4.alpha=0;
	self.p2_btn.scale(0,0)
	
	Tween.to(self['p2_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
		rotation(self.hand1,300,5)
		sf(0,self.p2_hand2,1.1,300)
		sf(1,self.p2_star,0,500)
		sf(0,self.p2_star2,0,500)
		Tween.to(self['p2_t4'],{alpha:1}, 600, Ease.linearIn, Handler.create(self, function(){
			sf(0,self.p2_btn,0.9,450)
		}), 400);
	}), 300+2*400);

	self.p2_btn.on(Event.CLICK,this,function () {
		showBox2()
	})

	function showBox2(){
		self.p2_box1.visible=false;
		self.p2_box2.visible=true;

		self.p2s_t1.scale(0,0);
		self.p2s_t2.scale(0,0);
		Tween.to(self['p2s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
		Tween.to(self['p2s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

		self.p2s_hand1.x=120;
		self.p2s_hand2.scale(0,0);
		self.p2s_t4.alpha=0;
		self.p2s_btn.scale(0,0)
		
		Tween.to(self['p2s_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
			rotation(self.hand1s,300,5)
			self.p2s_hand2.scale(1,1)
			rotation(self.p2s_hand2,500,5)
			Tween.to(self['p2s_t4'],{alpha:1}, 600, Ease.linearIn, Handler.create(self, function(){
				sf(0,self.p2s_btn,0.9,450)
			}), 400);
		}), 300+2*400);
	}

	self.p2s_btn.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p3(), 0);
	})
}

function p3() {
	p3UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.p3_box2.visible=false;

	self.p3_t1.scale(0,0);
	self.p3_t2.scale(0,0);
	Tween.to(self['p3_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
	Tween.to(self['p3_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

	self.p3_t4.alpha=0;
	self.p3_btn.scale(0,0)
	Tween.to(self['p3_t4'],{alpha:1}, 600, Ease.linearIn, Handler.create(self, function(){
		sf(0,self.p3_btn,0.9,450)
	}), 300+2*400);

	self.p3_btn.on(Event.CLICK,this,function () {
		showBox3()
	})

	function showBox3(){
		self.p3_box1.visible=false;
		self.p3_box2.visible=true;

		self.p3s_t1.scale(0,0);
		self.p3s_t2.scale(0,0);
		Tween.to(self['p3s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
		Tween.to(self['p3s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

		self.p3s_t4.alpha=0;
		self.p3s_btn.scale(0,0)
		
		Tween.to(self['p3s_t4'],{alpha:1}, 600, Ease.linearIn, Handler.create(self, function(){
			sf(0,self.p3s_btn,0.9,450)
		}), 300+2*400);
	}

	self.p3s_btn.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p4(), 0);
	})
}

function p4() {
	p4UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.p4_box2.visible=false;

	self.p4_t1.scale(0,0);
	self.p4_t2.scale(0,0);
	Tween.to(self['p4_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
	Tween.to(self['p4_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

	self.p2_hand1.x=120;
	self.p2_hand2.scale(0,0);
	self.p2_star.scale(0,0)
	self.p2_star2.scale(0,0)
	self.p4_t4.alpha=0;
	self.p4_btn.scale(0,0)
	
	Tween.to(self['p2_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
		rotation(self.hand1,300,5)
		sf(0,self.p2_hand2,1.1,300)
		sf(1,self.p2_star,0,500)
		sf(0,self.p2_star2,0,500)
		Tween.to(self['p4_t4'],{alpha:1}, 600, Ease.linearIn, Handler.create(self, function(){
			sf(0,self.p4_btn,0.9,450)
		}), 400);
	}), 300+2*400);

	self.p4_btn.on(Event.CLICK,this,function () {
		showBox4()
	})

	function showBox4(){
		self.p4_box1.visible=false;
		self.p4_box2.visible=true;

		self.p4s_t1.scale(0,0);
		self.p4s_t2.scale(0,0);
		Tween.to(self['p4s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
		Tween.to(self['p4s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

		self.p2s_hand1.x=120;
		self.p2s_hand2.scale(0,0);
		self.p4s_t4.alpha=0;
		self.p4s_btn.scale(0,0)
		
		Tween.to(self['p2s_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
			rotation(self.hand1s,300,5)
			self.p2s_hand2.scale(1,1)
			rotation(self.p2s_hand2,500,5)
			Tween.to(self['p4_t4'],{alpha:1}, 600, Ease.linearIn, Handler.create(self, function(){
				sf(0,self.p4s_btn,0.9,450)
			}), 400);
		}), 300+2*400);
	}

	self.p4s_btn.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p5(), 0);
	})
}

function p5() {
	p5UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	function lb(obj,num,time,time2) {
		Tween.to(obj,{scaleX:num,scaleY:num},time,Ease.linearIn,Handler.create(self, function(){
			Tween.to(obj,{scaleX:1,scaleY:1},time2,Ease.linearIn,Handler.create(self, function(){lb(obj,num,time,time2)}))
		}));
	}

	lb(self.lightning,1.3,500,300)

	self.p5_t1.scale(0,0)
	self.p5_t2.scale(0,0)
	self.p5_t3.scale(0,0)
	self.p5_t4.scale(0,0)
	self.p5_t5.scale(0,0)
	self.p5_t6.alpha=0;
	self.p5_t7.scale(0,0)
	self.p5_t8.scale(0,0)
	self.p5_t9.scale(0,0)
	self.horn.scale(0,0)
	self.face.scale(0,0)

	function rotationAni(){
		Tween.to(self.p5_t6,{rotation:5},200,Ease.linearIn,Handler.create(self, function(){
			Tween.to(self.p5_t6,{rotation:-5},400,Ease.linearIn,Handler.create(self, function(){
				Tween.to(self.p5_t6,{rotation:3},200,Ease.linearIn,Handler.create(self, function(){
					Tween.to(self.p5_t6,{rotation:-3},400,Ease.linearIn,Handler.create(self, function(){
						rotationAni();
					}));
				}));
			}));
		}));
	}
	
	Tween.to(self['p5_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
	Tween.to(self['face'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*200);
	Tween.to(self['p5_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+2*400);
	Tween.to(self['p5_t3'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+3*400);
	Tween.to(self['p5_t4'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+4*400);
	Tween.to(self['p5_t5'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+5*400);
	Tween.to(self['p5_t7'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+6*400);
	Tween.to(self['p5_t8'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+7*400);
	Tween.to(self['p5_t9'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+8*400);
	Tween.to(self['horn'],{scaleX:1,scaleY:1}, 700, Ease.backOut, Handler.create(self, function(){
		lb(self.horn,1.2,400,300)
		Tween.to(self['p5_t6'],{alpha:1}, 500);
		rotationAni()
	}), 300+9*400);
	
	arrow();
    function arrow(){
		Tween.clearTween(arrow);
		self.p5_tips.x =203;
		self.p5_tips.alpha =0;
		Tween.to(self.p5_tips,{x:203-60,alpha:1},1200,Ease.linearOut,Handler.create(this,arrow));
	}

	var p5Bool=false;
	var moveR=0;
	var downX=0
	var multiple=5;
	self.moveBox.on(Event.MOUSE_DOWN, this, onStartFlag);

	function onStartFlag(e){
		p5Bool=true
		downX=e.stageX
		self.p5_tips.visible=false
		console.log(downX,'MOUSE_DOWN')
	}

	self.moveBox.on(Event.MOUSE_MOVE, this, onMoveFlag);

	function onMoveFlag(e){
		if(!p5Bool)return
		moveR-=downX-e.stageX
		downX=e.stageX
		
		if(moveR<-40*multiple){
			self.moveBox.off(Event.MOUSE_MOVE, this, onMoveFlag);
			setTimeout(function() {
				Laya.stage.removeChild(self);
				Laya.stage.addChildAt(new p6(), 0);
			}, 1000);
			return
		}
		self.p5_flag.rotation=moveR/multiple
	}
}

function p6() {
	p6UI.super(this);
	var self = this;
	
	console.log('66666666666')
	self.name.text=name;
	self.photo.skin=photo;

	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.on(Event.CLICK,this,function () {
		$.ajax({
			type : 'post',
			async : true,
			url :  '//api.slb.moneplus.cn/api/web/lining/add',
			dataType: 'json',
			data:{
				token:token,
				flag1:'11111',
				flag2:'2222',
				flag3:'333',
				flag4:'444',
				flag5:'555',
				flag6:'666',
				title:posterId
			},
			success : function(res) {
				console.log('add:',res);
				if(res.code==0){
					id=res.data.id
					Laya.stage.removeChild(self);
					Laya.stage.addChildAt(new p7(), 0);
				}else{
					alert(res.msg)
				}
			}
		});
	})
}

function p7() {
	p7UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.name.text=name;
	self.photo.skin=photo;

	self.p7_btn1.on(Event.CLICK,this,function () {
		console.log('返回重立')
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p6(), 0);
	})

	self.p7_btn2.on(Event.CLICK,this,jump)

	function jump(){
		self.p7_btn2.off(Event.CLICK,this,jump)
		console.log('原地生效')
		Laya.stage.addChildAt(new p8(), 0);
		setTimeout(function() {
			Laya.stage.removeChild(self);
			$('#main').css('display','block')
		}, 2000);
	}

}

$('.p8_btn1').on('click', function(){
	// _czc.push(['_trackEvent', '按钮', '呼朋唤友',''])
	$('.share').removeClass('none');
	urlTitle='http://api.slb.moneplus.cn/ci/auth/make?url=f5eac4b6c0061f52667bc8900560e799bf51173d,shareId='+id;
	updata()
});
$('.share').on('click', function(){
	$('.share').addClass('none');
});

$('.p8_btn2').on('click', function(){
	location.replace('http://www.lining.com/running/index.html');
});

function p8() {
	p8UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	console.log('p888888')

	self.name.text=name;
	self.photo.skin=photo;
	self.p8_save.visible=false;

	self.p8_t1.skin='p8/p8_t'+posterId+'.png'

	setTimeout(function(){
		onClick();
	},500)

	function onClick(){
		var htmlCanvas = self.drawToCanvas(750,1500);//把精灵绘制到canvas上面
		htmlCanvas.toBase64("image/png",0.92,function(base64){
			// console.log(base64);//打印图片base64信息，可以发给服务器或者保存为图片
			$('#img').attr('src',base64).css('display','block');
			self.p8_save.visible=true;
			self.p8_saves.visible=false;
			self.p6_logo.visible=false;
		});
	}

}

function share() {
	shareUI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.share_num1.visible=false
	self.share_num2.visible=false
	self.share_num3.visible=false
	self.share_num4.visible=false
	self.share_num5.visible=false
	self.share_num6.visible=false

	self.p8_go.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p1(), 0);
	})

	$.ajax({
		type : 'post',
		async : true,
		url :  '//api.slb.moneplus.cn/api/web/lining/loading',
		dataType: 'json',
		data:{
			id:shareId
		},
		success : function(res) {
			console.log('loading:',res);
			if(res.code==0){
				self.name.text=res.data.nickname;
				self.photo.skin=res.data.headimgurl;
				posterId=res.data.title||'1'
				
				self.p8_t1.skin='p8/p8_t'+posterId+'.png'
				
				if(res.data.flag1){
					self.share_t1.text=res.data.flag1
					self.share_num1.visible=true
				}
				if(res.data.flag2){
					self.share_t2.text=res.data.flag2
					self.share_num2.visible=true
				}
				if(res.data.flag3){
					self.share_t3.text=res.data.flag3
					self.share_num3.visible=true
				}
				if(res.data.flag4){
					self.share_t4.text=res.data.flag4
					self.share_num4.visible=true
				}
				if(res.data.flag5){
					self.share_t5.text=res.data.flag5
					self.share_num5.visible=true
				}
				if(res.data.flag6){
					self.share_t6.text=res.data.flag6
					self.share_num6.visible=true
				}
			
			}else{
				alert(res.msg)
			}
		}
	});

}



var loadView = null;
function load() {
	var self = this;
	loadUI.super(this);
	loadView = this;
	
	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	console.log('loading：'+Laya.stage.width+','+Laya.stage.height,scaleRateW,scaleRateH)
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	if(Laya.Browser.onWeiXin){
		console.log('wx')
		$.ajax({
			type : 'post',
			async : true,
			url :  '//api.slb.moneplus.cn/wechat/index.php?r=common/token/info',
			dataType: 'json',
			data:{
				token:token
			},
			success : function(res) {
				console.log('info',res);
				name=res.data.nickname
				photo=res.data.headimgurl
			}
		});
	}else{
		console.log('nowx')
		name='晓'
		photo='p6/p6_photo.png'
		token=''
		var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
		for (var i = 0; i < 28; i++) {
			token += arr[Math.floor(Math.random() * arr.length)]
		}
	}

}

Laya.class(load, "load", loadUI);
Laya.class(p1, "p1", p1UI);
Laya.class(p2, "p2", p2UI);
Laya.class(p3, "p3", p3UI);
Laya.class(p4, "p4", p4UI);
Laya.class(p5, "p5", p5UI);
Laya.class(p6, "p6", p6UI);
Laya.class(p7, "p7", p7UI);
Laya.class(p8, "p8", p8UI);
Laya.class(share, "share", shareUI);

Laya.init(750, 1500, Laya.WebGL);
Laya.stage.scaleMode='fixedwidth';
//自动竖屏
Laya.stage.screenMode = "vertical";
//对齐方式
Laya.stage.alignV='top';
// Laya.Stat.show(0,0);
Laya.stage.bgColor='#fff';

//设置背景颜色为none
// Laya.stage.bgColor = "none";
//canvas下设置背景颜色为null
// Laya.stage.bgColor = null;
if (Laya.Render.isWebGL) {
	Laya.stage.bgColor = "none";//背景透明
} else {
	Laya.stage.bgColor = null;//背景透明
}

Laya.stage.on(Laya.Event.RESIZE, this, stageResize);
function stageResize(event){
	Laya.stage.off(Laya.Event.RESIZE, this, stageResize);
	trace('RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL)
	Laya.loader.load(['res/atlas/loading.atlas','img/load_bg.jpg'], Handler.create(this, loading));
}

var assets = [
	{url:'res/atlas/p1.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p2.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p3.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p4.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p5.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p6.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p7.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p8.atlas',type:Laya.Loader.ATLAS},
	{url:'img/p1_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p2_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3s_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p4_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p5_bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p6_bg.jpg',type:Laya.Loader.IMAGE},
];
function loading() {
	Laya.stage.addChildAt(new load(),0);
	Laya.loader.load(assets, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
}

// 加载结束侦听器
function onAssetLoaded(texture) {
	console.log("加载结束",texture);
	Tween.to(loadView,{alpha:0}, 600, Ease.linearIn, Handler.create(self, function(){
		Laya.stage.removeChild(loadView);	
	}), 300);

	shareId?Laya.stage.addChildAt(new share(), 0):Laya.stage.addChildAt(new p5(), 0);
	
}

// 加载进度侦听器
function onLoading(progress) {
	console.log("加载进度: " + progress*100,parseInt(progress*100));
	loadView.percent.text= parseInt(progress*100)+"%";//文字百分比
	loadView.load_prg2.scaleX=progress
}
