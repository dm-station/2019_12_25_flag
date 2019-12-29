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

var p6Arr=[
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
	'每日步数突破1万步',
	'找到同样爱跑步的另一半',
	'全年减重20斤',
	'月跑量过300公里',
]

var saveArr=[]

var tempArr=[
	{name:'p6list_b1',pos:596,index:0,text:''},
	{name:'p6list_b2',pos:666,index:1,text:''},
	{name:'p6list_b3',pos:736,index:2,text:''},
	{name:'p6list_b4',pos:806,index:3,text:''},
	{name:'p6list_b5',pos:876,index:4,text:''},
	{name:'p6list_b6',pos:846,index:5,text:''},
]
var tempIndex=0

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
		Tween.to(self['p2s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
		Tween.to(self['p2s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

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
		Tween.to(self['p3s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
		Tween.to(self['p3s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

		// self.p3s_t4.alpha=0;
		self.p3s_btn.scale(0,0)
		
		Tween.to(self['p3s_t4'],{alpha:1}, 100, Ease.linearIn, Handler.create(self, function(){
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
		Tween.to(self['p4s_t1'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+0*200);
		Tween.to(self['p4s_t2'],{scaleX:1,scaleY:1}, 700, Ease.backOut, null, 300+1*400);

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
		console.log(downX,'MOUSE_DOWN')
	}


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

	self.p6_box.visible=false;

	self.num.text=0;
	
	// console.log(p6Arr)

	sf(1,self.p6_tips,1.2,500)

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
		index==7?saveArr.push(self.enter.text):saveArr.push(result[p6Id][index-1])
		self.num.text=saveArr.length
		console.log(saveArr)
	}

	self.definite.on(Event.CLICK,this,function(){
		if(self.enter.text==''){
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
	})

	function openList(){
		for(var n = 0;n<6;n++){
			// self.p6_box.getChildByName('b'+(n+1)).visible = false;
			self['p6list_b'+(n+1)].visible = false;
			self['p6list_b'+(n+1)].y=596+70*n;
			tempArr[n].text='';
			if(n<saveArr.length){
				self['p6list_b'+(n+1)].visible = true;
				self['p6list_t'+(n+1)].text = saveArr[n];
				tempArr[n].text=saveArr[n];
			}
		}
		console.log('tempArr',tempArr)
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
		openList()
		// console.log(saveArr)
	}

	// 拖动
	//按下坐标
	var downY=0;
	//偏移量
	var offsetY=0;
	//当前选项索引+1
	var nowId;
	//数组交换位置
	var temp;

	var spArr=['',self.p6list_b1,self.p6list_b2,self.p6list_b3,self.p6list_b4,self.p6list_b5,self.p6list_b6]

	self.p6_box.on(Event.MOUSE_DOWN,this, dragDown)

	function dragDown(e){
		console.log('name:',e.target.name,spArr)
		if(e.target.name=='b1'||e.target.name=='b2'||e.target.name=='b3'||e.target.name=='b4'||e.target.name=='b5'||e.target.name=='b6'){
			offsetY=0
			downY=e.stageY
			nowId=e.target.name.substr(e.target.name.length-1,1)*1
			console.log(nowId,'nowId')
			self['p6list_t'+nowId].color='#ff0400'
			self['p6list_b'+nowId].zOrder=1
			self.p6_box.on(Event.MOUSE_MOVE,this, dragMove)
			self.p6_box.on(Event.MOUSE_UP,this, dragUp)
			self.p6_box.on(Event.MOUSE_OUT,this, dragUp)
		}
	}
	function dragMove(e){
		// console.log('name:',e.target.name)
		offsetY=e.stageY-downY
		downY=e.stageY
		//超出上边界
		if(self['p6list_b'+nowId].y<596&&offsetY<0){
			offsetY=0
		}
		//超出下边界
		if(self['p6list_b'+nowId].y>596+(saveArr.length-1)*70&&offsetY>0){
			offsetY=0
		}
		self['p6list_b'+nowId].y+=offsetY;
		changePos()
	}
	var posArr=[0,596,666,736,806,876,946]
	function changePos(){
		//往下
		var sp_y=spArr[nowId].y-posArr[nowId]
		tempIndex=parseInt(sp_y/70)
		console.log(sp_y,nowId,spArr[nowId].y,'超过第'+tempIndex+'个元素')

		if(tempIndex>0){
			for(var l=0;l<tempIndex;l++){
				// console.log(spArr[nowId+l+1].name,l+1,posArr[nowId+l])
				spArr[nowId+l+1].y=posArr[nowId+l]
				spArr[nowId+l].y=posArr[nowId]
				swapArr(saveArr,nowId+l,nowId+l-1)
			}
		}
		if(tempIndex<0){
			for(var l=0;l<-tempIndex;l++){
				// console.log(spArr[nowId-l-1].name,l-1,posArr[nowId-l],nowId-l-1)
				spArr[nowId-l-1].y=posArr[nowId-l]
				swapArr(saveArr,nowId-l-1,nowId-l)
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
		self['p6list_t'+nowId].color='#666666'
		self['p6list_b'+nowId].zOrder=0
		if(tempIndex==0){
			spArr[nowId].y=posArr[nowId]
		}else{
			
		}

		// console.log('dragUp')
	}
	

	self.p6_close.on(Event.CLICK,this,function(){
		self.p6_box.visible=false;
	})

	self.next.on(Event.CLICK,this,function () {
		if(saveArr.length<1||saveArr.length>5){
			alert('请选择1-5个flag！')
			return
		}
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

	for(var g = 0;g<6;g++){
		self['p7_num'+(g+1)].visible = false;
		console.log('p7_t'+(g+1))
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

	function jump(){
		self.p7_btn1.off(Event.CLICK,this,back)
		self.p7_btn2.off(Event.CLICK,this,jump)
		console.log('原地生效')
		Laya.stage.addChildAt(new p8(), 0);
		Tween.to(self.count,{scaleX: 1,scaleY:1}, 100, Ease['cubicOut']);
		self.count.skin = 'p7/count_3.png';
		Laya.timer.loop(1000,self, delTime)
	}

	function delTime(){
		del--
		console.log(del)
		if(del<=0){
			Laya.stage.removeChild(self);
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

	console.log('p888888')

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
		var htmlCanvas = self.drawToCanvas(688,1253,-35,-125);//把精灵绘制到canvas上面
		htmlCanvas.toBase64("image/png",0.92,function(base64){
			// console.log(base64);//打印图片base64信息，可以发给服务器或者保存为图片
			$('#img').attr('src',base64).css('display','block');
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
	Tween.to(loadView,{alpha:0}, 600, Ease.linearIn, Handler.create(self, function(){
		Laya.stage.removeChild(loadView);
	}), 300);

	shareId?Laya.stage.addChildAt(new share(), 0):Laya.stage.addChildAt(new p6(), 0);
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
