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

var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

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

		 document.body.scrollTop = 0
    	 document.documentElement.scrollTop = 0
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
var posterId=Math.floor(Math.random()*6)+1

var p6Arr=[
	'全马PB',
	'健身房每周打卡3次',
	'全年减重20斤',
	'自我突破，开始尝试跑步',
	'每天跑五公里',
	'跑人生第一个全马',
	'完成国内5大满贯马拉松',
	'练出马甲线',
	'跑一场国外马拉松',
	'每日步数突破1万步',
	'月跑量过100公里',
	'月跑量过200公里',
	'月跑量过300公里',
	'开始挑战国际6大满贯',
	'打败赖床症，6点起床',
	'买专业䨻跑鞋，跑得更快',
	'马拉松跑进300',
	'找到同样爱跑步的另一半',
	'全家一起参加马拉松',
	'跑人生第一个半马',
	'获得世界马拉松大满贯六星奖牌',
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
	'练出马甲线',
	'每日步数突破1万步',
	'找到同样爱跑步的另一半',
	'打败赖床症，6点起床',
]

var saveArr=[]

function p1() {
	p1UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	hideArr=['p1_t1','p1_t2','p1_t3','p1_t4','p1_t5']
	self['p1_btn'].alpha=0;
	self['p1_t6'].alpha=0;
	for(var yi = 0;yi<hideArr.length;yi++){
		// self[hideArr[yi]].scale(0,0);
		self[hideArr[yi]].alpha=0;
		Tween.to(self['p1_t'+(yi+1)],{alpha:1}, 800, Ease.linearIn, null, 600+yi*800);
	}
	// Tween.to(self['p1_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+0*200);
	// Tween.to(self['p1_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+1*200);
	// Tween.to(self['p1_t3'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+2*200);
	// Tween.to(self['p1_t4'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+3*200);
	// Tween.to(self['p1_t5'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 600+4*200);

	Tween.to(self['p1_btn'],{scaleX:1,scaleY:1}, 700, Ease.backOut, Handler.create(self, function(){
		alpha(0,self.p1_btn,0.6,600)
		Tween.to(self['p1_t'+6],{alpha:1}, 800, Ease.linearIn, null, 300);
	}), 600+5*800);

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
		_czc.push(['_trackEvent', '首页', '按钮','开始游戏'])
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p2(), 0);
	})
}

function faceTween(obj,sc,time1,time2){
	obj.scale(sc,sc)
	obj.alpha=0

	Tween.to(obj,{scaleX:1,scaleY:1}, time1, Ease.backOut);
	Tween.to(obj,{alpha:1}, time2, Ease.linearIn);
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
	// self.p2_t4.alpha=0;
	self.p2_btn.scale(0,0)
	
	Tween.to(self['p2_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
		rotation(self.hand1,300,5)
		sf(0,self.p2_hand2,1.1,300)
		sf(1,self.p2_star,0,500)
		sf(0,self.p2_star2,0,500)
		Tween.to(self['p2_t4'],{alpha:1}, 100, Ease.linearIn, Handler.create(self, function(){
			sf(0,self.p2_btn,0.9,450)
		}), 400);
	}), 300+2*400);

	self.p2_btn.on(Event.CLICK,this,function () {
		showBox2()
	})

	function showBox2(){
		Laya.SoundManager.playSound("media/face.mp3", 1);
		self.p2_box1.visible=false;
		self.p2_box2.visible=true;

		self.p2s_t1.scale(0,0);
		self.p2s_t2.scale(0,0);
		Tween.to(self['p2s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 500+0*200);
		Tween.to(self['p2s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 500+1*400);

		faceTween(self.p2_p1,4,400,200)
		faceTween(self.p2_p2,4,400,200)

		self.p2s_hand1.x=120;
		self.p2s_hand2.scale(0,0);
		// self.p2s_t4.alpha=0;
		self.p2s_btn.scale(0,0)
		
		Tween.to(self['p2s_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
			rotation(self.hand1s,300,5)
			// self.p2s_hand2.scale(1,1)
			Tween.to(self['p2s_hand2'],{scaleX:1,scaleY:1}, 300);
			rotation(self.p2s_hand2,500,5)
			Tween.to(self['p2s_t4'],{alpha:1}, 100, Ease.linearIn, Handler.create(self, function(){
				sf(0,self.p2s_btn,0.9,450)
			}), 400);
		}), 500+2*400);
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

	// self.p3_t4.alpha=0;
	self.p3_btn.scale(0,0)
	Tween.to(self['p3_t4'],{alpha:1}, 100, Ease.linearIn, Handler.create(self, function(){
		sf(0,self.p3_btn,0.9,450)
	}), 300+2*400);

	self.p3_btn.on(Event.CLICK,this,function () {
		showBox3()
	})

	function showBox3(){
		Laya.SoundManager.playSound("media/face.mp3", 1);
		self.p3_box1.visible=false;
		self.p3_box2.visible=true;

		self.p3s_t1.scale(0,0);
		self.p3s_t2.scale(0,0);
		Tween.to(self['p3s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 500+0*200);
		Tween.to(self['p3s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 500+1*400);

		faceTween(self.p3_p1,4,400,200)
		faceTween(self.p3_p2,4,400,200)

		// self.p3s_t4.alpha=0;
		self.p3s_btn.scale(0,0)
		
		Tween.to(self['p3s_t4'],{alpha:1}, 100, Ease.linearIn, Handler.create(self, function(){
			sf(0,self.p3s_btn,0.9,450)
		}), 500+2*400);
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
	// self.p4_t4.alpha=0;
	self.p4_btn.scale(0,0)
	
	Tween.to(self['p2_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
		rotation(self.hand1,300,5)
		sf(0,self.p2_hand2,1.1,300)
		sf(1,self.p2_star,0,500)
		sf(0,self.p2_star2,0,500)
		Tween.to(self['p4_t4'],{alpha:1}, 100, Ease.linearIn, Handler.create(self, function(){
			sf(0,self.p4_btn,0.9,450)
		}), 400);
	}), 300+2*400);

	self.p4_btn.on(Event.CLICK,this,function () {
		showBox4()
	})

	function showBox4(){
		Laya.SoundManager.playSound("media/face.mp3", 1);
		self.p4_box1.visible=false;
		self.p4_box2.visible=true;

		self.p4s_t1.scale(0,0);
		self.p4s_t2.scale(0,0);
		Tween.to(self['p4s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 500+0*200);
		Tween.to(self['p4s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 500+1*400);

		faceTween(self.p4_p1,4,400,200)
		faceTween(self.p4_p2,4,400,200)

		self.p2s_hand1.x=120;
		self.p2s_hand2.scale(0,0);
		// self.p4s_t4.alpha=0;
		self.p4s_btn.scale(0,0)
		
		Tween.to(self['p2s_hand1'],{x:0}, 300, Ease.linearIn, Handler.create(self, function(){
			rotation(self.hand1s,300,5)
			// self.p2s_hand2.scale(1,1)
			Tween.to(self['p2s_hand2'],{scaleX:1,scaleY:1}, 300);
			rotation(self.p2s_hand2,500,5)
			Tween.to(self['p4s_t4'],{alpha:1}, 100, Ease.linearIn, Handler.create(self, function(){
				sf(0,self.p4s_btn,0.9,450)
			}), 400);
		}), 500+2*400);
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

	console.log('5过渡页','RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL,'stage:'+self.width,self.height)

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
	self.p5_box.alpha=0;

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
		Tween.to(self['p5_t6'],{alpha:1}, 500,Ease.linearIn,Handler.create(self, function(){
			Tween.to(self['p5_box'],{alpha:1}, 500,Ease.linearIn,Handler.create(self, function(){
				self.moveBox.on(Event.MOUSE_DOWN, this, onStartFlag);
				self.moveBox.on(Event.MOUSE_MOVE, this, onMoveFlag);
			}));
		}));
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
	
	function onStartFlag(e){
		p5Bool=true
		downX=e.stageX
		self.p5_tips.visible=false
		// console.log(downX,'MOUSE_DOWN')
	}


	function onMoveFlag(e){
		if(!p5Bool)return
		moveR-=downX-e.stageX
		downX=e.stageX
		
		if(moveR<-41*multiple){
			self.moveBox.off(Event.MOUSE_MOVE, this, onMoveFlag);
			Laya.SoundManager.playSound("media/flag.mp3", 1);
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
	
	console.log('6立flag页','RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL,'stage:'+self.width,self.height)
	self.name.text=name;
	self.photo.skin=photo;

	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.p6_box.visible=false;

	self.num.text=0;

	$('#flag').removeClass('none')

	self.p6_t1.text=p6Arr[0]
	self.p6_t2.text=p6Arr[1]
	self.p6_t3.text=p6Arr[2]
	self.p6_t4.text=p6Arr[3]
	self.p6_t5.text=p6Arr[4]
	self.p6_t6.text=p6Arr[5]
	
	// console.log(p6Arr)

	sf(0,self.p6_tips,1.2,500)

	var p6Id=0;
	saveArr=[]

	var result = [];
	for(var i=0;i<p6Arr.length;i+=6){
		result.push(p6Arr.slice(i,i+6));
	}

	self.on(Event.CLICK,this,function(){
		self.p6_tips.visible=false;
	})
	self.p6_change.on(Event.MOUSE_DOWN,this,function(){
		self.p6_change.scale(0.8,0.8)
	})
	self.p6_change.on(Event.MOUSE_UP,this,function(){
		self.p6_change.scale(1,1)
		changeText()
	})

	self.p6_box1.on(Event.CLICK,this,function(){
		opt(1)
	})
	self.p6_box2.on(Event.CLICK,this,function(){
		opt(2)
	})
	self.p6_box3.on(Event.CLICK,this,function(){
		opt(3)
	})
	self.p6_box4.on(Event.CLICK,this,function(){
		opt(4)
	})
	self.p6_box5.on(Event.CLICK,this,function(){
		opt(5)
	})
	self.p6_box6.on(Event.CLICK,this,function(){
		opt(6)
	})

	function opt(index){
		if(saveArr.length>=5){
			alert('最多只能立5个哦！')
			return
		}
		Laya.SoundManager.playSound("media/add.mp3", 1);
		index==7?saveArr.push($('#flag').val()):saveArr.push(result[p6Id][index-1])
		self.num.text=saveArr.length
		// console.log(saveArr)
	}

	self.definite.on(Event.CLICK,this,function(){
		if($('#flag').val()==''){
			alert('请输入flag！')
			return
		}
		opt(7)
	})
	

	function changeText(){
		p6Id++
		if(p6Id>=p6Arr.length/6){
			p6Id=0;
		}
		console.log('p6Id',p6Id)

		Tween.clearAll(self.p6_t1)
		Tween.clearAll(self.p6_t2)
		Tween.clearAll(self.p6_t3)
		Tween.clearAll(self.p6_t4)
		Tween.clearAll(self.p6_t5)
		Tween.clearAll(self.p6_t6)
		
		Tween.to(self.p6_t1,{alpha:0}, 500, Ease.linearIn, Handler.create(self, function(){
			self.p6_t1.text=result[p6Id][0]
			Tween.to(self.p6_t1,{alpha:1}, 500);
		}));

		Tween.to(self.p6_t2,{alpha:0}, 500, Ease.linearIn, Handler.create(self, function(){
			self.p6_t2.text=result[p6Id][1]
			Tween.to(self.p6_t2,{alpha:1}, 500);
		}));

		Tween.to(self.p6_t3,{alpha:0}, 500, Ease.linearIn, Handler.create(self, function(){
			self.p6_t3.text=result[p6Id][2]
			Tween.to(self.p6_t3,{alpha:1}, 500);
		}));

		Tween.to(self.p6_t4,{alpha:0}, 500, Ease.linearIn, Handler.create(self, function(){
			self.p6_t4.text=result[p6Id][3]
			Tween.to(self.p6_t4,{alpha:1}, 500);
		}));

		Tween.to(self.p6_t5,{alpha:0}, 500, Ease.linearIn, Handler.create(self, function(){
			self.p6_t5.text=result[p6Id][4]
			Tween.to(self.p6_t5,{alpha:1}, 500);
		}));

		Tween.to(self.p6_t6,{alpha:0}, 500, Ease.linearIn, Handler.create(self, function(){
			self.p6_t6.text=result[p6Id][5]
			Tween.to(self.p6_t6,{alpha:1}, 500);
		}));
	}

	self.p6_open.on(Event.CLICK,this,function(){
		openList()
		self.p6_box.visible=true;
		$('#flag').addClass('none')
	})

	function openList(){
		for(var n = 0;n<6;n++){
			// self.p6_box.getChildByName('b'+(n+1)).visible = false;
			self['p6list_b'+n].visible = false;
			self['p6list_b'+n].y=616+105*n;
			self['p6list_t'+(n+1)].text='';
			if(n<saveArr.length){
				self['p6list_b'+n].visible = true;
				self['p6list_i'+(n+1)].skin = 'p6/p6list_t'+(n+1)+'.png';
				self['p6list_t'+(n+1)].text = saveArr[n];
			}
		}
	}

	// 删除
	self.p6list_x1.on(Event.CLICK,this,function(){
		delFun(0)
	})
	self.p6list_x2.on(Event.CLICK,this,function(){
		delFun(1)
	})
	self.p6list_x3.on(Event.CLICK,this,function(){
		delFun(2)
	})
	self.p6list_x4.on(Event.CLICK,this,function(){
		delFun(3)
	})
	self.p6list_x5.on(Event.CLICK,this,function(){
		delFun(4)
	})
	self.p6list_x6.on(Event.CLICK,this,function(){
		delFun(5)
	})

	function delFun(index){
		saveArr.splice(index,1)
		self.num.text=saveArr.length
		Laya.SoundManager.playSound("media/del.mp3", 1);
		openList()
		// console.log(saveArr)
	}

	// 拖动
	//按下坐标
	var startY=0;
	//移动坐标
	var offsetY=0;
	//当前选项
	var active;
	//当前选项索引+1
	var activeIndex;
	//当前y
	var activeY;

	var value=0;

	var posArr=[616,721,826,931,1036,1141]
	self.p6_box.on(Event.MOUSE_DOWN,this, dragDown)

	function dragDown(e){
		// console.log('name:',e.target.name,spArr)
		if(e.target.name=='b0'||e.target.name=='b1'||e.target.name=='b2'||e.target.name=='b3'||e.target.name=='b4'||e.target.name=='b5'){
			startY = e.stageY
			activeIndex = e.target.name.substr(e.target.name.length-1,1)*1
			active = self['p6list_b'+activeIndex]
			activeY = active.y

			// console.log(activeIndex,'activeIndex',active)
			// console.log(active.getChildAt(1))

			//active.getChildAt(1)文字
			//active.getChildAt(0)序号
			active.getChildAt(1).color='#ff0400'
			active.zOrder=1
			value = 0

			self.p6_box.on(Event.MOUSE_MOVE,this, dragMove)
			self.p6_box.on(Event.MOUSE_UP,this, dragUp)
			// self.p6_box.on(Event.MOUSE_OUT,this, dragUp)
		}
	}
	function dragMove(e){
		// console.log('name:',e.target.name)
		offsetY=e.stageY-startY
		startY=e.stageY

		//超出上边界
		if(active.y<616&&offsetY<0)offsetY=0
		//超出下边界
		if(active.y>616+(saveArr.length-1)*105&&offsetY>0)offsetY=0

		active.y+=offsetY

		checkScroll()
		// active.y=s;
		// changePos()
	}
	function checkScroll() {
		var t = active.y
		var e = 0;
		//向上
		for (n = 0; n < activeIndex; n++){
			if(active.y<posArr[n]+50){
				// self['p6list_b'+n].getChildAt(1).text = n + 2 + "."
				self['p6list_b'+n].y = posArr[n+1]
				self['p6list_b'+n].getChildAt(0).skin='p6/p6list_t'+(n + 2)+'.png'
			}else{
				e = n + 1
				// self['p6list_b'+n].getChildAt(1).text = n + 1 + "."
				self['p6list_b'+n].getChildAt(0).skin='p6/p6list_t'+(n +1)+'.png'
				self['p6list_b'+n].y = posArr[n]
			}
		}

		//向下
		for (var n = activeIndex + 1; n < saveArr.length; n++){
			if(active.y+70>posArr[n]+50){
				e = n
				// self['p6list_b'+n].getChildAt(1).text = n + "."
				self['p6list_b'+n].y = posArr[n-1]
				self['p6list_b'+n].getChildAt(0).skin='p6/p6list_t'+n+'.png'
			}else{
				// self['p6list_b'+n].getChildAt(1).text = n + 1 + "."
				self['p6list_b'+n].y = posArr[n]
				self['p6list_b'+n].getChildAt(0).skin='p6/p6list_t'+(n+1)+'.png'
			}
		}

		currentIndex = e
		// active.getChildAt(1).text = e + 1 + "."
		active.getChildAt(0).skin='p6/p6list_t'+(e + 1)+'.png'
		
	}
	function changePos(){
		//往下
		var sp_y=spArr[activeIndex].y-posArr[activeIndex]
		tempIndex=parseInt(sp_y/70)
		console.log(sp_y,activeIndex,spArr[activeIndex].y,'超过第'+tempIndex+'个元素')

		if(tempIndex>0){
			for(var l=0;l<tempIndex;l++){
				// console.log(spArr[activeIndex+l+1].name,l+1,posArr[activeIndex+l])
				spArr[activeIndex+l+1].y=posArr[activeIndex+l]
				// activeIndex++
				// swapArr(saveArr,activeIndex+l,activeIndex+l-1)
			}
		}
		if(tempIndex<0){
			for(var l=0;l<-tempIndex;l++){
				// console.log(spArr[activeIndex-l-1].name,l-1,posArr[activeIndex-l],activeIndex-l-1)
				spArr[activeIndex-l-1].y=posArr[activeIndex-l]
				// activeIndex
				// swapArr(saveArr,activeIndex-l-1,activeIndex-l)
			}
		}
	}

	function swapArr(arr, index1, index2) {
		arr[index1] = arr.splice(index2, 1, arr[index1])[0];
		console.log(arr)
		return arr;
	}
	// swapArr(saveArr,0,1)
	function dragUp(e){
		self.p6_box.off(Event.MOUSE_MOVE,this, dragMove)
		self.p6_box.off(Event.MOUSE_UP,this, dragUp)
		self.p6_box.off(Event.MOUSE_OUT,this, dragUp)
		active.getChildAt(1).color='#666666'
		active.zOrder=0

		var n = saveArr[activeIndex];
		saveArr.splice(activeIndex, 1),
		saveArr.splice(currentIndex, 0, n);

		openList()
		console.log('dragUp',saveArr)

	}
	

	self.p6_close.on(Event.CLICK,this,function(){
		self.p6_box.visible=false;
		$('#flag').removeClass('none')
	})

	self.next.on(Event.CLICK,this,function () {
		if(saveArr.length<1||saveArr.length>5){
			alert('请选择1-5个flag！')
			return
		}
		_czc.push(['_trackEvent', '立Flag页', '按钮','下一步'])
		self.next.mouseEnabled=false;
		$.ajax({
			type : 'post',
			async : true,
			url :  '//api.slb.moneplus.cn/api/web/lining/add',
			dataType: 'json',
			data:{
				token:token,
				flag1:saveArr[0],
				flag2:saveArr[1],
				flag3:saveArr[2],
				flag4:saveArr[3],
				flag5:saveArr[4],
				flag6:saveArr[5],
				title:posterId
			},
			success : function(res) {
				console.log('add:',res);
				if(res.code==0){
					$('#flag').addClass('none')
					id=res.data.id
					Laya.stage.removeChild(self);
					Laya.stage.addChildAt(new p7(), 0);
				}else{
					self.next.mouseEnabled=true;
					alert(res.msg)
				}
			},
			error : function(msg) {
				self.next.mouseEnabled=true;
				alert(msg);
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

	console.log('7展示页','RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL,'stage:'+self.width,self.height)

	for(var g = 0;g<6;g++){
		self['p7_num'+(g+1)].visible = false;
		// console.log('p7_t'+(g+1))
		self['p7_t'+(g+1)].text = '';
		if(g<saveArr.length){
			self['p7_num'+(g+1)].visible = true;
			self['p7_t'+(g+1)].text = saveArr[g];
		}
	}

	self.p7_btn1.on(Event.CLICK,this,back)

	function back(){
		console.log('返回重立')
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p6(), 0);
	}

	var del=3;
	self.count.scale(0,0);
	self.p7_btn2.on(Event.CLICK,this,jump)

	self.time.skin = '';

	function jump(){
		self.p7_btn1.off(Event.CLICK,this,back)
		self.p7_btn2.off(Event.CLICK,this,jump)
		_czc.push(['_trackEvent', '展示页', '按钮','原地生效'])
		console.log('原地生效')
		Laya.stage.addChildAt(new p8(), 0);
		// Tween.to(self.count,{scaleX: 1,scaleY:1}, 100, Ease['cubicOut']);
		// self.count.skin = 'p7/count_3.png';
		Laya.SoundManager.playSound("media/time.mp3", 1);
		// Laya.timer.loop(1000,self, delTime)
		Laya.timer.loop(3000/39,self, timeFun)
	}

	var td=1
	function timeFun(){
		td++
		if(td>=39){
			Laya.stage.removeChild(self);
			$('#img,.p8_btn1,.p8_btn2').removeClass('none')
			Laya.timer.clear(self,timeFun);
			return
		}
		self.time.skin='time/time'+td+'.jpg'
	}

	function delTime(){
		del--
		console.log(del)
		if(del<=0){
			// Laya.stage.removeChild(self);
			$('#main').css('display','block')
			Laya.timer.clear(self,delTime);
		}
		self.count.scale(0,0);
        Tween.to(self.count,{scaleX: 1,scaleY:1}, 100, Ease['cubicOut']);
		self.count.skin = 'p7/count_'+del+'.png';
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

	console.log('保存页','RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL,'stage:'+self.width,self.height)

	for(var g = 0;g<6;g++){
		self['p7_n'+(g+1)].visible = false;
		self['p7_t'+(g+1)].text = '';
		if(g<saveArr.length){
			self['p7_n'+(g+1)].visible = true;
			self['p7_t'+(g+1)].text = saveArr[g];
		}
	}

	self.name.text=name;
	self.photo.skin=photo;
	self.p8_save.visible=false;

	self.p8_t1.skin='p8/p8_t'+posterId+'.png'

	setTimeout(function(){
		onClick();
	},500)

	function onClick(){
		// var htmlCanvas = self.drawToCanvas(688,1253,-35,-125);//把精灵绘制到canvas上面
		var htmlCanvas = self.drawToCanvas(750,1500);//把精灵绘制到canvas上面
		htmlCanvas.toBase64("image/png",0.92,function(base64){
			// console.log(base64);//打印图片base64信息，可以发给服务器或者保存为图片
			$('#img').attr('src',base64);
			self.p8_save.visible=true;
			self.p8_saves.visible=false;
			self.p6_logo.visible=false;
		});
	}

}

function share(res) {
	shareUI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	for(var u = 0;u<6;u++){
		self['share_num'+(u+1)].visible = false;
		self['share_t'+(u+1)].text = '';
		if(u<saveArr.length){
			self['share_num'+(u+1)].visible = true;
			self['share_t'+(u+1)].text = saveArr[u];
		}
	}

	self.p8_go.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p1(), 0);
	})

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
	
	}
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

	loadFace()
	function loadFace(){
		Tween.to(self.load_photo,{scaleX:-1}, 10, Ease.linearIn, Handler.create(self, function(){
			Tween.to(self.load_photo,{scaleX:1}, 10, Ease.linearIn, Handler.create(self, function(){
				loadFace();
			}), 400);
		}), 400);
	}

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

	// if(Laya.Browser.onWeiXin){
	// 	console.log('wx')
	// 	$.ajax({
	// 		type : 'post',
	// 		async : true,
	// 		url :  '//api.slb.moneplus.cn/wechat/index.php?r=common/token/info',
	// 		dataType: 'json',
	// 		data:{
	// 			token:token
	// 		},
	// 		success : function(res) {
	// 			console.log('info',res);
	// 			name=res.data.nickname
	// 			photo=res.data.headimgurl
	// 		}
	// 	});
	// }else{
	// 	console.log('nowx')
	// 	name='晓'
	// 	photo='p6/p6_photo.png'
	// 	token=''
	// 	var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	// 	for (var i = 0; i < 28; i++) {
	// 		token += arr[Math.floor(Math.random() * arr.length)]
	// 	}
	// }

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
// Laya.stage.alignV='top';
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

var loadTm;
var progress=0;
var loadNum=0;
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
	{url:'img/p8_btn1.png',type:Laya.Loader.IMAGE},
	{url:'img/p8_btn2.png',type:Laya.Loader.IMAGE},
	{url:'img/share.png',type:Laya.Loader.IMAGE},

	{url:'time/time1.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time2.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time3.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time4.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time5.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time6.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time7.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time8.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time9.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time10.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time11.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time12.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time13.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time14.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time15.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time16.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time17.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time18.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time19.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time20.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time21.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time22.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time23.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time24.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time25.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time26.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time27.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time28.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time29.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time30.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time31.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time32.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time33.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time34.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time35.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time36.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time37.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time38.jpg',type:Laya.Loader.IMAGE},
	{url:'time/time39.jpg',type:Laya.Loader.IMAGE},
];
function loading() {
	Laya.stage.addChildAt(new load(),0);
	Laya.loader.load(assets, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
	loadTm=setInterval(function(){
		progress++;
		if(progress>=3000/100){
			loadNum++
			loadEnd()
			clearInterval(loadTm)
		}
		loadView.percent.text= parseInt(progress/0.3)+"%";//文字百分比
		loadView.load_prg2.scaleX=progress/30
	},100)
}

// 加载结束侦听器
function onAssetLoaded(texture) {
	console.log("加载结束",texture);

	if(Laya.stage.height<1300){
		 $(".p8_btn1,.p8_btn2").css("top","12.68rem");
	}

	// Laya.stage.removeChild(loadView);
	// shareId?Laya.stage.addChildAt(new share(), 0):Laya.stage.addChildAt(new p6(), 0);
	loadNum++
	loadEnd()
}

function loadEnd(){
	if(loadNum<2)return
	Tween.to(loadView,{alpha:0}, 600, Ease.linearIn, Handler.create(self, function(){
		Laya.stage.removeChild(loadView);	
	}), 300);

	if(shareId){
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
					Laya.stage.addChildAt(new share(res), 0)
				}else{
					Laya.stage.addChildAt(new p1(), 0)
					// alert(res.msg)
				}
			}
		});
	}else{
		Laya.stage.addChildAt(new p1(), 0)
	}
}

// 加载进度侦听器
function onLoading(progress) {
	// console.log("加载进度: " + progress*100,parseInt(progress*100));
	// loadView.percent.text= parseInt(progress*100)+"%";//文字百分比
	// loadView.load_prg2.scaleX=progress
}
