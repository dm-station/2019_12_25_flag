var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var WebGL = laya.webgl.WebGL;
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

//x缩放比例=舞台宽度/设计宽度
var scaleRateW;
//y缩放比例=舞台高度/设计高度
var scaleRateH;

function rotation(obj,time,rotate){
	Tween.to(obj,{rotation:rotate},time,Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{rotation:-rotate},time*2,Ease.linearIn, Handler.create(self, function(){
			Tween.to(obj,{rotation:0},time,Ease.linearIn, Handler.create(self, function(){
				rotation(obj,time,rotate);  
			}));
		}));
	}));
}

function fly(type,obj,num,time) {
    var json = {};
    if(type==1){
        type = 0;
        json.scaleX =num;
        // json.scaleY =num;
    }else{
        type = 1;
        json.scaleX =1;
        json.scaleY =1;
    }
    Tween.to(obj,json,time,Ease.linearIn, Handler.create(self, function(){fly(type,obj,num,time);}));
}

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
    Tween.to(obj,json,time,Ease.linearIn, Handler.create(self, function(){sf(type,obj,num,time);}));
}

function jump(obj,r,t1,t2){
	var getY = obj.y;
	Tween.to(obj,{y:getY-r}, t1, Ease.linearIn, Handler.create(self, function(){
		Tween.to(obj,{y:getY}, t2, Ease.bounceOut, Handler.create(self, function(){
			jump(obj,r,t1,t2);
		}), 60);
	}), 200);
}

function lb(obj,num,time,time2) {
	Tween.to(obj,{scaleY:num},time,Ease.linearIn,Handler.create(self, function(){
		Tween.to(obj,{scaleY:1},time2,Ease.linearIn,Handler.create(self, function(){lb(obj,num,time,time2)}))
	}));
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

function p1() {
	p1UI.super(this);
	var self = this;

	console.log('p11111111')
	
	var Event = laya.events.Event;

	scaleRateW = (Laya.stage.width / Laya.stage.designWidth);//x缩放比例=舞台宽度/设计宽度
	scaleRateH = (Laya.stage.height / Laya.stage.designHeight);//y缩放比例=舞台高度/设计高度

	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	// for(var i=1;i<self._childs.length;i++){
	// 	self._childs[i].y=parseInt(self._childs[i].y*scaleRateH);
	// }

	self.rule.visible = self.rule_btn.visible = false;
	
	self.p1_t2.alpha = self.p1_t3.alpha = self.p1_t4.alpha = 0;
	self.light2.alpha = self.light3.alpha = self.light4.alpha = self.light5.alpha = self.light6.alpha = 0;
	var T = Tween.to(self.p1_t2,{alpha:1}, 900, Ease.linearIn, null, 300);
	Tween.to(self.p1_t3,{alpha:1}, 900, Ease.linearIn, null, 1300);
	Tween.to(self.p1_t4,{alpha:1}, 900, Ease.linearIn, Handler.create(self,function(){
		sf(1,self.p1_t4,1.1,360)
		alpha(0,self.light2,0.4,600)
		alpha(0,self.light3,0.4,600)
		alpha(0,self.light4,0.4,600)
		alpha(0,self.light5,0.4,600)
		alpha(0,self.light6,0.4,600)
	}), 1300);

	rotation(self.p1_guan,400,3)
	rotation(self.p1_bottom,360,0.3)
	jump(self.p1_btn,20,400,800);

	alpha(0,self.light,0.3,600)

	sf(1,self.yun1,1.01,900)
	sf(1,self.yun2,1.016,900)

	self.rule_btn.on(Event.CLICK,this,function () {
		self.rule.visible = true;
	})
	self.rule_x.on(Event.CLICK,this,function () {
		self.rule.visible = false;
	})
	self.p1_jump.on(Event.CLICK,this,function () {
		Laya.stage.addChildAt(new rank(), 1);
	})

	self.p1_btn.on(Event.CLICK,this,function () {
		console.log('开启旅程')
		Laya.stage.removeChild(self);
		Laya.stage.addChildAt(new p2(), 0);
	})
	
}

function p2() {
	p2UI.super(this);
	var self = this;

	console.log('p22222222')
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.p2_t1.alpha = self.p2_t2.alpha = self.p2_t3.alpha = self.p2_t4.alpha = self.p2_t5.alpha = self.p2_t6.alpha = 0;
	Tween.to(self.p2_t1,{alpha:1}, 800, Ease.linearIn, null, 300);
	Tween.to(self.p2_t6,{alpha:1}, 800, Ease.linearIn, Handler.create(self,function(){
		sf(1,self.p2_t6,1.1,360)
		alpha(1,self.light2,0.4,600)
		alpha(1,self.light3,0.4,600)
		alpha(1,self.light4,0.4,600)
		alpha(1,self.light5,0.4,600)
	}), 300);
	sf(1,self.p2_rice,1.04,460)
	rotation(self.p2_grass,360,0.2)
	sf(1,self.p2_hand,0.9,460)

	self.light2.alpha = self.light3.alpha = self.light4.alpha = self.light5.alpha = 0;

	var n = 0;
	self.p2_rice.once(Event.CLICK,this,function () {
		self.removeChild(self.p2_hand)
		for(var i = 2;i<=5;i++){
			Tween.to(self['p2_t'+i],{alpha:1}, 800, Ease.linearIn, Handler.create(self,function(){
				n++;
				console.log('n',i,n)
				if(n==4)downPage();
			}), (i-2)*1200+200);
		}
	})

	function downPage (){
		setTimeout(function() {
			Laya.stage.removeChild(self);
			Laya.stage.addChildAt(new p3(), 0);
		}, 2000);
	}

}

var p3Obj = null;
function p3() {
	p3UI.super(this);
	var self = this;
	p3Obj = this;

	console.log('p333333')
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.p3_t1.alpha = 0;
	Tween.to(self.p3_t1,{alpha:1}, 800, Ease.linearIn, null, 300);
	
	fly(1,self.p3_bird1,1.46,600)
	fly(1,self.p3_bird2,1.46,600)

	rotation(self.p3_wheat,360,0.4)

	// jump(self.p3_rice,10,400,800);
	rotation(self.p3_rice,400,2.6)
	
	lb(self.p3_rice,1.06,800,800)

	Laya.timer.frameLoop(1,self,lun)
	function lun(){
		self.lun1.rotation -= 2;
		self.lun2.rotation -= 2;
	}

	self.arrow.alpha =0;
    arrowX=self.arrow.x;
	arrow();
    function arrow(){
		Tween.clearTween(self.arrow);
		self.arrow.x =arrowX;
		self.arrow.alpha =0;
		Tween.to(self.arrow,{x:arrowX-50,alpha:1},1200,Ease.linearOut,Handler.create(this,arrow));
	}

	self.p3_tractor.x = 830;
	var tractorY = self.p3_tractor.y;
	//315
	self.mouseEnabled = false;
	Tween.to(self.p3_tractor,{x:570}, 2000, Ease.linearIn, Handler.create(self,function(){
		Tween.to(self.p3_tractor,{y:tractorY-10}, 300, Ease.linearIn, Handler.create(self,function(){
			Tween.to(self.p3_tractor,{y:tractorY}, 600, Ease.elasticOut, Handler.create(self,function(){
				
			}));
		}));
		Tween.to(self.p3_tractor,{x:310}, 2000, Ease.linearIn, Handler.create(self,function(){
			Laya.timer.clear(self,lun)
			Tween.to(self.p3_tractor,{y:tractorY-6}, 300, Ease.linearIn, Handler.create(self,function(){
				Tween.to(self.p3_tractor,{y:tractorY}, 600, Ease.elasticOut, Handler.create(self,function(){
					self.mouseEnabled = true;
				}));
			}));
		}));
	}));

	self.on(Event.CLICK,this,function () {
		console.log('开启旅程')
		self.mouseEnabled = false;
		Laya.stage.addChildAt(new p4(), 1);
	})

}

function p4() {
	p4UI.super(this);
	var self = this;

	console.log('p4444444')
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.alpha=0;
	Tween.to(self,{alpha:1}, 600, Ease.linearIn, Handler.create(self,function(){
		Laya.stage.removeChild(p3Obj);
	}), 0);

	self.p4_t1.alpha = 0;
	self.enter.visible = false;
	Tween.to(self.p4_t1,{alpha:1}, 800, Ease.linearIn, null, 300);

	fly(1,self.p4_bird1,1.3,600)
	fly(1,self.p4_bird2,1.3,600)
	fly(1,self.p4_bird3,1.2,600)
	fly(1,self.p4_bird4,1.3,600)

	self.p4_tractor.x = 775;
	Tween.to(self.p4_tractor,{x:320}, 2600, Ease.linearIn, Handler.create(self,function(){
		arrow();
		self.enter.visible = true;
	}),800);

	self.enter.once(Event.CLICK,this,function () {
		Tween.to(self.door_left,{x:-104}, 2000, Ease.linearIn);
		Tween.to(self.door_right,{x:104}, 2000, Ease.linearIn);
		Tween.to(self.p4Box,{scaleX:6.6,scaleY:6.6,alpha:0.3}, 1800, Ease.linearIn, Handler.create(self,function(){
			Laya.stage.removeChild(self);
			Laya.stage.addChildAt(new p5(), 0);
		}),300);
	})

	self.arrow.alpha =0;
    arrowX=self.arrow.x;
    function arrow(){
		Tween.clearTween(self.arrow);
		self.arrow.x =arrowX;
		self.arrow.alpha =0;
		Tween.to(self.arrow,{x:arrowX-50,alpha:1},1100,Ease.linearOut,Handler.create(this,arrow));
	}

}

function p5() {
	p5UI.super(this);
	var self = this;

	console.log('p55555555')
	
	var Event = laya.events.Event;
	self.y=Laya.stage.height/2-Laya.stage.designHeight/2;

	self.p5_main.visible = false;

	self.p5_tips.y = -550;
	self.p2_hand.visible = false;
	Tween.to(self.p5_tips,{y:428}, 600, Ease.circOut, Handler.create(self,function(){
		self.p2_hand.visible = true;
		sf(1,self.p2_hand,0.9,500)
	}), 600);
	
	var isShow = false;
	self.p5_tips.once(Event.CLICK,this,function () {
		self.p5_main.visible = true;
		self.p5_box.visible = false;
		circle1(3,'p5_circle',true);
		circle1(7,'p5_c',false);
		//是否开始显示对话框
		self.p5_fe1.alpha = self.p5_fe2.alpha = self.p5_fe3.alpha = self.p5_text1.alpha = self.p5_text2.alpha = self.p5_people.alpha = 0;
		Tween.to(self.p5_fe1,{alpha:1}, 800, Ease.linearIn, null, 300);
		Tween.to(self.p5_fe2,{alpha:1}, 800, Ease.linearIn, null, 900);
		Tween.to(self.p5_fe3,{alpha:1}, 800, Ease.linearIn, Handler.create(self,function(){
			isShow = true;
		}), 600);
	})

	function circle1(n,start,loop){
		for(var n2 = 1; n2<=n; n2++){
			self[start+n2].alpha = 0;
			Tween.clearAll(self[start+n2])
		}
		for(var n1 = 1; n1<=n; n1++){
			var k1 = 0;
			Tween.to(self[start+n1],{alpha:1}, 200, Ease.linearIn, Handler.create(self,function(){
				k1++;
				if(k1==n&&loop){
					setTimeout(function() {
						circle1(n,start,loop)
					}, 600);
				}
				// console.log(n1,k1)
			}),n1*600);
		}
	}

	alpha(1,self.p5_line1,0.3,800)
	alpha(0,self.p5_line3,0.6,600)
	// alpha(1,self.p5_line2,0.3,800)
	alpha(1,self.p5_line4,0.2,600)
	
	var lunBool = true;
	Laya.timer.frameLoop(10,self,dai)
	// Laya.timer.clear(self,dai)
	function dai(){
		lunBool = !lunBool;
		self.dai1.skin = lunBool?'p5/dai1.png':'p5/dai2.png';
		self.dai3.skin = lunBool?'p5/dai3.png':'p5/dai4.png';
	}

	self.p5_fe1.on(Event.CLICK,this,showText)
	self.p5_fe2.on(Event.CLICK,this,showText)
	self.p5_fe3.on(Event.CLICK,this,showText)

	function showText(){
		if(!isShow)return;
		isShow = false;
		Tween.to(self.p5_text2,{alpha:1}, 800, Ease.linearIn, Handler.create(self,function(){
			Tween.to(self.p5_people,{alpha:1}, 600, Ease.linearIn, Handler.create(self,function(){
				Tween.to(self.p5_text1,{alpha:1}, 800, Ease.linearIn, Handler.create(self,function(){
					Laya.stage.removeChild(self);
					Laya.stage.addChildAt(new p7(), 0);
				}), 800);
			}), 800);
		}), 300);
	}
}

function p7() {
	p7UI.super(this);
	var self = this;
	
	console.log('p7777777')
	var Event = laya.events.Event;
	self.y = Laya.stage.height/2 - Laya.stage.designHeight/2;

	sf(1,self.p7_hand,0.95,500)
	self.p7_t2.alpha = self.p7_t3.alpha = 0;
	function left() {
		self.p7_left.rotation -= 2;
	}
	function right() {
		self.p7_right.rotation += 2;
	}
	
	self.once(Event.CLICK,this,function () {
		self.removeChild(self.p7_hand)
		Laya.timer.frameLoop(1,self,left)
		Tween.to(self.p7_t2,{alpha:1}, 800, Ease.linearIn, Handler.create(self,function(){
			Laya.timer.frameLoop(1,self,right)
			Tween.to(self.p7_t3,{alpha:1}, 800, Ease.linearIn, Handler.create(self,function(){
					Tween.to(self.p7_rice,{y:1080,alpha:0}, 1600, Ease.linearIn, Handler.create(self,function(){
						//清理定时器
						Laya.timer.clear(self,left)
						Laya.timer.clear(self,right)
						Laya.stage.removeChild(self);
						Laya.stage.addChildAt(new p8(), 0);
					}), 1200);
			}), 800);
		}), 800);

	})
}

function p8() {
	p8UI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y = Laya.stage.height/2 - Laya.stage.designHeight/2;

	console.log('p888888')

	rotation(self.p8_bottom,360,0.4)
	
	Tween.to(self.p8_element3,{y:950,scaleX:0.9,scaleY:0.9}, 1500, Ease.linearIn,null,100);
	Tween.to(self.p8_element2,{y:950,scaleX:0.7,scaleY:0.7}, 1700, Ease.linearIn,null,100);
	Tween.to(self.p8_element1,{y:950,scaleX:0.7,scaleY:0.7}, 1900, Ease.linearIn,Handler.create(self,function(){
		Tween.to(self.p8_cap,{rotation:-120}, 400, Ease.linearIn, Handler.create(self,function(){
			Tween.to(self.p8_bg1,{alpha:0}, 1200, Ease.linearIn, Handler.create(self,function(){
				ship();
			}), 500);
		}));
	}),100);

	function ship(){
		Laya.timer.once(1000, this, function(){
			self.p8_ship1.skin = 'p8/p8_ship2.png'
		});
		Laya.timer.once(2000, this, function(){
			self.p8_ship1.skin = 'p8/p8_ship3.png'
		});
		Tween.to(self.p8_ship1,{x:-320}, 3200, Ease.linearIn, Handler.create(self,function(){
			Laya.stage.removeChild(self);
			Laya.stage.addChildAt(new photo(), 0);
		}), 500);
	}
}

function rectFun(obj,offset){
	var rectObj={}
	rectObj.top=(obj.y+offset)/Laya.stage.height*100+'%'
	rectObj.left=obj.x/Laya.stage.width*100+'%'
	rectObj.width=obj.width/Laya.stage.width*100+'%'
	rectObj.height=obj.height/Laya.stage.height*100+'%'
	return rectObj;
}
function photo() {
	photoUI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y = Laya.stage.height/2 - Laya.stage.designHeight/2;

	self.boy.visible = false;
	var rect = rectFun(self.photo_up,self.y);
	$('#file').css('top',rect.top).css('left',rect.left).css('height',rect.height).css('display','block');

	var isMove = false;
	var getBase64=''
	var ipt = document.getElementById('file'),
	img = document.getElementById('img'),
	Orientation = null;
	ipt.onchange = function () {
		var file = ipt.files[0],
			reader = new FileReader(),
			image = new Image();

		if(file){
			EXIF.getData(file, function() {  
				Orientation = EXIF.getTag(this, 'Orientation');
			});
			reader.onload = function (ev) {
				image.src = ev.target.result;
				image.onload = function () {
					var imgWidth = this.width,
						imgHeight = this.height;
					// 控制上传图片的宽高
					if(imgWidth > imgHeight && imgWidth > 768){
						imgWidth = 768;
						imgHeight = Math.ceil(768 * this.height / this.width);
					}else if(imgWidth < imgHeight && imgHeight > 1500){
						imgWidth = Math.ceil(1500 * this.width / this.height);
						imgHeight = 1500;
					}

					var canvas = document.createElement("canvas"),
					ctx = canvas.getContext('2d');
					canvas.width = imgWidth;
					canvas.height = imgHeight;
					if(Orientation && Orientation != 1){
						switch(Orientation){
							case 6:     // 旋转90度
								canvas.width = imgHeight;    
								canvas.height = imgWidth;    
								ctx.rotate(Math.PI / 2);
								// (0,-imgHeight) 从旋转原理图那里获得的起始点
								ctx.drawImage(this, 0, -imgHeight, imgWidth, imgHeight);
								break;
							case 3:     // 旋转180度
								ctx.rotate(Math.PI);    
								ctx.drawImage(this, -imgWidth, -imgHeight, imgWidth, imgHeight);
								break;
							case 8:     // 旋转-90度
								canvas.width = imgHeight;    
								canvas.height = imgWidth;    
								ctx.rotate(3 * Math.PI / 2);    
								ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight);
								break;
						}
					}else{
						ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
					}
					// img.src = canvas.toDataURL("image/jpeg", 0.8);
					isMove=true
					$('#file').css('display','none')
					self.boy.visible = true;
					getBase64=canvas.toDataURL("image/jpeg", 1);
					changePovit(getBase64,self.sex1_face,300,247,0,0)
				}
			}
			reader.readAsDataURL(file);
		}
	}

	function changePovit(base64,obj,w,h,x,y){
		var ratio;
		var ape = new Laya.Sprite();
		// Laya.stage.addChild(ape);
		ape.loadImage(base64,0,0,0,0,Laya.Handler.create(self,function(){
			console.log('ape2:',ape.width,ape.height,ape.getBounds())
			var wh = ape.getBounds();
			var imgWidth = wh.width;
			var imgheight = wh.height;
			obj.x=x;
			obj.y=y;
			if(imgWidth>imgheight){
				ratio=h/imgheight;
				obj.width=parseInt(w*ratio);
				obj.height=h;
				// obj.x=-(obj.width-w)/2
			}else{
				ratio=w/imgWidth;
				obj.width=w;
				obj.height=parseInt(imgheight*ratio);
				// obj.y=-(obj.height-h)/2
			}
			obj.skin=base64;
			// self.bg.skin=photoPath;
			console.log('photo:',obj.x,obj.y,obj.width,obj.height)
		}));
		
	}

	//判断鼠标是否按下
	var isDown = false;
	//实时监听鼠标位置
	var moveX = 0;
	var moveY = 0;
	//记录鼠标按下瞬间的位置
	var x = 0;
	var y = 0;
	//鼠标按下时移动的偏移量
	var mouseMoveX = 0;
	var mouseMoveY = 0;
	//e.touches
	var points;
	var lastDistance = 0;
	var minScale=1;
	var maxScale=3;

	self.faceBox.on(Event.MOUSE_UP, this, onMouseUp);
	self.faceBox.on(Event.MOUSE_OUT, this, onMouseUp);
	self.faceBox.on(Event.MOUSE_DOWN, this, onMouseDown);

	function onMouseDown(e) {
		if(!isMove)return
		self.faceBox.on(Event.MOUSE_MOVE, this, onMouseMove);
		
		if (e.touches && e.touches.length == 1) {
			x = e.stageX;
			y = e.stageY;
			isDown = true;
		}
	
		if (e.touches && e.touches.length == 2) {
			lastDistance = getDistance(e.touches);
		}
	}
	function onMouseUp(e) {
		if (e.touches && e.touches.length == 1) {
			isDown = false;
			mouseMoveX = 0;
			mouseMoveY = 0;
		}
		self.faceBox.off(Event.MOUSE_MOVE, this, onMouseMove);
	}
	function onMouseMove(e) {
		points=e.touches
		//单指
		if (points && points.length == 1){
			moveX = e.stageX;
			moveY = e.stageY;
			//计算鼠标移动偏移量
			mouseMoveX = moveX - x;
			mouseMoveY = moveY - y;
			x = e.stageX;
			y = e.stageY;
			if(isDown){
				console.log('mouseMoveX:',self.sex1_face.x)
				self.sex1_face.x+=mouseMoveX
				self.sex1_face.y+=mouseMoveY
				if(self.sex1_face.x>self.sex1_face.width){
					self.sex1_face.x=self.sex1_face.width
				}
				if(self.sex1_face.x<-self.sex1_face.width){
					self.sex1_face.x=-self.sex1_face.width
				}
				if(self.sex1_face.y>self.sex1_face.height){
					self.sex1_face.y=self.sex1_face.height
				}
				if(self.sex1_face.y<-self.sex1_face.height){
					self.sex1_face.y=-self.sex1_face.height
				}
			}
		}
		//双指
		if (points && points.length == 2){
			
			// var distance = getDistance(e.touches);

			// //判断当前距离与上次距离变化，确定是放大还是缩小
			// var factor = 0.01;

			// var X_= self.sex1_face.scaleX;

			// this.sex1_face.scaleX += (distance - lastDistance) * factor;
			// this.sex1_face.scaleY += (distance - lastDistance) * factor;

			// if(self.sex1_face.scaleY <minScale){
			// 	self.sex1_face.scaleX=minScale;
			// 	self.sex1_face.scaleY=minScale;
			// }else if(self.sex1_face.scaleY>maxScale){
			// 	self.sex1_face.scaleX=maxScale;
			// 	self.sex1_face.scaleY=maxScale;
			// }
			
			// lastDistance = distance;
		
		}

	}

	/**计算两个触摸点之间的距离*/
	function getDistance(points) {
		
		var distance = 0;
		if (points && points.length == 2) {
			var dx = points[0].stageX - points[1].stageX;
			var dy = points[0].stageY - points[1].stageY;

			distance = Math.sqrt(dx * dx + dy * dy);
		}
		return distance;
	}

	self.share_poster.once(Event.CLICK,this,function () {
		alert('share_poster')
	})

}

function rank() {
	rankUI.super(this);
	var self = this;
	
	var Event = laya.events.Event;
	self.y = Laya.stage.height/2 - Laya.stage.designHeight/2;

	var tPhoto = 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLRGp5mjrNR0Wmibh4CRc7BrehicNM6zS2sLjKQ7DeU0EKb6dYGEVKf4Ox4sNF525O9dhtOfRk6zt2A/132'

	self.myName.text = '忘记拥抱'
	self.myPhoto.skin = tPhoto

	var rank = [
		{photo:tPhoto,name:'忘记拥抱1',money:'666'},
		{photo:tPhoto,name:'忘记拥抱2',money:'66'},
		{photo:tPhoto,name:'忘记拥抱3',money:'6'},
		{photo:tPhoto,name:'忘记拥抱4',money:'66'},
		{photo:tPhoto,name:'忘记拥抱5',money:'666'},
		{photo:tPhoto,name:'忘记拥抱6',money:'num'},
		{photo:tPhoto,name:'忘记拥抱7',money:'num'},
		{photo:tPhoto,name:'忘记拥抱8',money:'num'},
		{photo:tPhoto,name:'忘记拥抱9',money:'num'},
		{photo:tPhoto,name:'忘记拥抱10',money:'num'},
		{photo:tPhoto,name:'忘记拥抱11',money:'num'},
		{photo:tPhoto,name:'忘记拥抱12',money:'num'},
		{photo:tPhoto,name:'忘记拥抱13',money:'num'},
		{photo:tPhoto,name:'忘记拥抱14',money:'num'},
		{photo:tPhoto,name:'忘记拥抱15',money:'num'},
	]

	self.list.array = rank

	console.log(self.list.scrollBar)

	//隐藏上按钮
    self.list.scrollBar.upButton.visible = false;
    //隐藏下按钮
    self.list.scrollBar.downButton.visible = false;
	//设置橡皮筋回弹时间。单位为毫秒。
	self.list.scrollBar.elasticBackTime = 150;
	//设置橡皮筋极限距离。
	self.list.scrollBar.elasticDistance = 100;

	self.rank_btn.on(Event.CLICK,this,function () {
		Laya.stage.removeChild(self);
	})

	self.zan.on(Event.CLICK,this,function () {
		alert('为你点赞')
	})

}



Laya.class(p1, "p1", p1UI);
Laya.class(p2, "p2", p2UI);
Laya.class(p3, "p3", p3UI);
Laya.class(p4, "p4", p4UI);
Laya.class(p5, "p5", p5UI);
Laya.class(p7, "p7", p7UI);
Laya.class(p8, "p8", p8UI);
Laya.class(photo, "photo", photoUI);
Laya.class(rank, "rank", rankUI);

//程序入口
Laya.init(750, 1500, Laya.WebGL);

Laya.stage.scaleMode='fixedwidth';
//自动竖屏
Laya.stage.screenMode = "vertical";
//对齐方式
// Laya.stage.alignV='top';
// Laya.Stat.show(0,0);
Laya.stage.bgColor='#fff';

//背景透明
Laya.Render.isWebGL ? Laya.stage.bgColor = "none" : Laya.stage.bgColor = null;

var assets = [
	{url:'img/p2bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p3bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p4bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p5bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p7bg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p8bg1.jpg',type:Laya.Loader.IMAGE},
	{url:'img/p8bg2.jpg',type:Laya.Loader.IMAGE},
	{url:'img/photobg.jpg',type:Laya.Loader.IMAGE},
	{url:'img/photobg2.jpg',type:Laya.Loader.IMAGE},
	{url:'img/rankbg.jpg',type:Laya.Loader.IMAGE},
	{url:'res/atlas/p2.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p3.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p4.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p5.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p7.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/p8.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/photo.atlas',type:Laya.Loader.ATLAS},
	{url:'res/atlas/rank.atlas',type:Laya.Loader.ATLAS},
];

Laya.stage.on(Laya.Event.RESIZE, this, stageResize);
function stageResize(event){
	Laya.stage.off(Laya.Event.RESIZE, this, stageResize);
	trace('RESIZE:'+Laya.stage.width,Laya.stage.height,'Browser:'+Laya.Browser.clientWidth,Laya.Browser.clientHeight,'isWebGL:'+Laya.Render.isWebGL)
	Laya.loader.load(['res/atlas/p1.atlas'], Handler.create(this, loading), null, Laya.Loader.ATLAS);
}

function loading() {
	Laya.stage.addChildAt(new p1(),0);
	Laya.loader.load(assets, Handler.create(this, onAssetLoaded), Handler.create(this, onLoading, null, false));
}

// 加载结束侦听器
function onAssetLoaded(texture) {
	console.log("加载结束",texture);
	// Laya.stage.addChildAt(new photo(),1);
}

// 加载进度侦听器
function onLoading(progress) {
	console.log("加载进度: " + progress*100,parseInt(progress*100));
	// loadView.percent.text= parseInt(progress*100)+"%";//文字百分比
}



