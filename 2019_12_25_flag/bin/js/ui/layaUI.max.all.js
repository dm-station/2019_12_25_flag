var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var loadUI=(function(_super){
		function loadUI(){
			
		    this.load_photo=null;
		    this.percent=null;
		    this.load_prg1=null;
		    this.load_prg2=null;

			loadUI.__super.call(this);
		}

		CLASS$(loadUI,'ui.test.loadUI',_super);
		var __proto__=loadUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadUI.uiView);

		}

		loadUI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/load_bg.jpg"}},{"type":"Image","props":{"y":836,"x":113,"skin":"loading/load_t1.png"}},{"type":"Image","props":{"y":613,"x":375,"var":"load_photo","skin":"loading/load_photo.png","pivotX":41}},{"type":"Label","props":{"y":766,"x":321,"width":108,"var":"percent","text":"0%","styleSkin":"loading/label.png","height":23,"fontSize":22,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Image","props":{"y":740,"x":114,"var":"load_prg1","skin":"loading/load_prg1.png"}},{"type":"Image","props":{"y":740,"x":114,"var":"load_prg2","skin":"loading/load_prg2.png","scaleX":0}}]};
		return loadUI;
	})(View);
var p1UI=(function(_super){
		function p1UI(){
			
		    this.p1_top=null;
		    this.p1_icon3=null;
		    this.p1_icon4=null;
		    this.p1_icon5=null;
		    this.p1_star1=null;
		    this.p1_star2=null;
		    this.p1_star3=null;
		    this.p1_icon1=null;
		    this.p1_icon2=null;
		    this.p1_t1=null;
		    this.p1_t2=null;
		    this.p1_t3=null;
		    this.p1_t4=null;
		    this.p1_t5=null;
		    this.p1_t6=null;
		    this.p1_btn=null;

			p1UI.__super.call(this);
		}

		CLASS$(p1UI,'ui.test.p1UI',_super);
		var __proto__=p1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p1UI.uiView);

		}

		p1UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p1_bg.jpg"}},{"type":"Image","props":{"y":0,"x":0,"var":"p1_top","skin":"p1/p1_top.png"}},{"type":"Image","props":{"y":74,"x":0,"var":"p1_icon3","skin":"p1/p1_icon3.png"}},{"type":"Image","props":{"y":1054,"x":0,"var":"p1_icon4","skin":"p1/p1_icon4.png"}},{"type":"Image","props":{"y":996,"x":463,"var":"p1_icon5","skin":"p1/p1_icon5.png"}},{"type":"Image","props":{"y":205,"x":16,"skin":"p1/p1_television.png"}},{"type":"Image","props":{"y":441,"x":41,"var":"p1_star1","skin":"p1/p1_star1.png"}},{"type":"Image","props":{"y":502,"x":183,"var":"p1_star2","skin":"p1/p1_star2.png"}},{"type":"Image","props":{"y":464,"x":523,"var":"p1_star3","skin":"p1/p1_star3.png"}},{"type":"Image","props":{"y":298,"x":594,"var":"p1_icon1","skin":"p1/p1_icon1.png"}},{"type":"Image","props":{"y":776,"x":-30,"var":"p1_icon2","skin":"p1/p1_icon2.png"}},{"type":"Image","props":{"y":736,"x":-137,"width":637,"var":"p1_t1","skin":"p1/p1_t1.png","pivotY":311,"pivotX":-194,"height":357}},{"type":"Image","props":{"y":736,"x":-137,"width":637,"var":"p1_t2","skin":"p1/p1_t2.png","pivotY":311,"pivotX":-194,"height":357}},{"type":"Image","props":{"y":736,"x":-137,"width":637,"var":"p1_t3","skin":"p1/p1_t3.png","pivotY":311,"pivotX":-194,"height":357}},{"type":"Image","props":{"y":736,"x":-137,"width":637,"var":"p1_t4","skin":"p1/p1_t4.png","pivotY":311,"pivotX":-194,"height":357}},{"type":"Image","props":{"y":736,"x":-137,"width":637,"var":"p1_t5","skin":"p1/p1_t5.png","pivotY":311,"pivotX":-194,"height":357}},{"type":"Image","props":{"y":1208,"x":127,"var":"p1_t6","skin":"p1/p1_t6.png"}},{"type":"Image","props":{"y":1233,"x":244,"width":510,"var":"p1_btn","skin":"p1/p1_btn.png","pivotY":397,"pivotX":123,"height":419}}]};
		return p1UI;
	})(View);
var p2UI=(function(_super){
		function p2UI(){
			
		    this.p2_box1=null;
		    this.p2_t1=null;
		    this.p2_t2=null;
		    this.p2_t4=null;
		    this.p2_star=null;
		    this.p2_star2=null;
		    this.p2_btn=null;
		    this.hand1=null;
		    this.p2_hand1=null;
		    this.p2_hand2=null;
		    this.p2_box2=null;
		    this.p2s_t1=null;
		    this.p2s_t2=null;
		    this.p2_p1=null;
		    this.p2_p2=null;
		    this.p2s_hand2=null;
		    this.p2s_t4=null;
		    this.p2s_btn=null;
		    this.hand1s=null;
		    this.p2s_hand1=null;

			p2UI.__super.call(this);
		}

		CLASS$(p2UI,'ui.test.p2UI',_super);
		var __proto__=p2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p2UI.uiView);

		}

		p2UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p2_bg.jpg"}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p2_box1","height":1500},"child":[{"type":"Image","props":{"y":458,"x":17,"width":628,"var":"p2_t1","skin":"p2/p2_t1.png","pivotY":242,"pivotX":-41,"height":218}},{"type":"Image","props":{"y":493,"x":99,"skin":"p2/p2_photo.png"}},{"type":"Image","props":{"y":662,"x":215,"width":194,"var":"p2_t2","skin":"p2/p2_t2.png","pivotY":115,"pivotX":154,"height":97}},{"type":"Image","props":{"y":1105,"x":51,"var":"p2_t4","skin":"p2/p2_t4.png"}},{"type":"Image","props":{"y":616,"x":600,"width":36,"var":"p2_star","skin":"p2/p2_star.png","pivotY":24,"pivotX":23,"height":43}},{"type":"Image","props":{"y":714,"x":177,"width":36,"var":"p2_star2","skin":"p2/p2_star2.png","pivotY":23,"pivotX":18,"height":42}},{"type":"Image","props":{"y":1305,"x":377,"width":169,"var":"p2_btn","skin":"p2/p2_btn.png","pivotY":52,"pivotX":89,"height":108}},{"type":"Panel","props":{"y":581,"x":747,"width":114,"var":"hand1","pivotY":71,"pivotX":111,"height":100},"child":[{"type":"Image","props":{"y":0,"x":0,"width":114,"var":"p2_hand1","skin":"p2/p2_hand1.png","height":90}}]},{"type":"Image","props":{"y":955,"x":28,"width":95,"var":"p2_hand2","skin":"p2/p2_hand2.png","pivotY":84,"pivotX":28,"height":120}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p2_box2","height":1500},"child":[{"type":"Image","props":{"y":522,"x":85,"width":700,"var":"p2s_t1","skin":"p2/p2s_t1.png","pivotY":285,"pivotX":60,"height":176}},{"type":"Image","props":{"y":636,"x":237,"width":190,"var":"p2s_t2","skin":"p2/p2s_t2.png","pivotY":93,"pivotX":143,"height":93}},{"type":"Image","props":{"y":535,"x":126,"skin":"p2/p2s_photo.png"}},{"type":"Image","props":{"y":832,"x":302,"width":100,"var":"p2_p1","skin":"p2/p2_p1.png","pivotY":81,"pivotX":49,"height":97}},{"type":"Image","props":{"y":902,"x":476,"width":108,"var":"p2_p2","skin":"p2/p2_p2.png","pivotY":79,"pivotX":24,"height":101}},{"type":"Image","props":{"y":907,"x":2,"width":80,"var":"p2s_hand2","skin":"p2/p2s_hand2.png","pivotY":55,"pivotX":2,"height":130}},{"type":"Image","props":{"y":1105,"x":55,"var":"p2s_t4","skin":"p2/p2_t4.png"}},{"type":"Image","props":{"y":1307,"x":376,"width":227,"var":"p2s_btn","skin":"p2/p2s_btn.png","pivotY":55,"pivotX":114,"height":108}},{"type":"Panel","props":{"y":505,"x":746,"width":94,"var":"hand1s","pivotY":14,"pivotX":90,"height":100},"child":[{"type":"Image","props":{"var":"p2s_hand1","skin":"p2/p2s_hand1.png"}}]}]}]};
		return p2UI;
	})(View);
var p3UI=(function(_super){
		function p3UI(){
			
		    this.p3_box1=null;
		    this.p3_t1=null;
		    this.p3_t2=null;
		    this.p3_t4=null;
		    this.p3_btn=null;
		    this.p3_box2=null;
		    this.p3s_t1=null;
		    this.p3s_heart1=null;
		    this.p3s_heart2=null;
		    this.p3s_t2=null;
		    this.p3s_t4=null;
		    this.p3s_btn=null;
		    this.p3_p1=null;
		    this.p3_p2=null;

			p3UI.__super.call(this);
		}

		CLASS$(p3UI,'ui.test.p3UI',_super);
		var __proto__=p3UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p3UI.uiView);

		}

		p3UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p3_box1","height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3_bg.jpg"}},{"type":"Image","props":{"y":456,"x":14,"width":691,"var":"p3_t1","skin":"p3/p3_t1.png","pivotY":230,"pivotX":-15,"height":181}},{"type":"Image","props":{"y":655,"x":541,"width":194,"var":"p3_t2","skin":"p3/p3_t2.png","pivotY":109,"pivotX":58,"height":97}},{"type":"Image","props":{"y":825,"x":81,"var":"p3_t4","skin":"p3/p3_t4.png"}},{"type":"Image","props":{"y":1310,"x":376,"width":169,"var":"p3_btn","skin":"p2/p2_btn.png","pivotY":57,"pivotX":88,"height":108}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p3_box2","height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3s_bg.jpg"}},{"type":"Image","props":{"y":433,"x":10,"var":"p3s_t1","skin":"p3/p3s_t1.png","pivotY":200,"pivotX":-20}},{"type":"Image","props":{"y":588,"x":475,"var":"p3s_heart1","skin":"p3/p3s_heart1.png"}},{"type":"Image","props":{"y":605,"x":504,"var":"p3s_heart2","skin":"p3/p3s_heart2.png"}},{"type":"Image","props":{"y":610,"x":533,"width":190,"var":"p3s_t2","skin":"p3/p3s_t2.png","pivotY":105,"pivotX":79,"height":93}},{"type":"Image","props":{"y":874,"x":61,"var":"p3s_t4","skin":"p3/p3_t4.png"}},{"type":"Image","props":{"y":1318,"x":375,"width":227,"var":"p3s_btn","skin":"p2/p2s_btn.png","pivotY":65,"pivotX":112,"height":108}},{"type":"Image","props":{"y":863,"x":296,"width":96,"var":"p3_p1","skin":"p3/p3_pa1.png","pivotY":66,"pivotX":72,"height":89}},{"type":"Image","props":{"y":788,"x":463,"width":89,"var":"p3_p2","skin":"p3/p3_pa2.png","pivotY":73,"pivotX":42,"height":88}}]}]};
		return p3UI;
	})(View);
var p4UI=(function(_super){
		function p4UI(){
			
		    this.p4_box1=null;
		    this.p4_t1=null;
		    this.p4_t2=null;
		    this.p4_t4=null;
		    this.p2_hand2=null;
		    this.p2_star=null;
		    this.p2_star2=null;
		    this.p4_btn=null;
		    this.hand1=null;
		    this.p2_hand1=null;
		    this.p4_box2=null;
		    this.p4s_t1=null;
		    this.p4s_t2=null;
		    this.p4s_t4=null;
		    this.p2s_hand2=null;
		    this.p4s_btn=null;
		    this.hand1s=null;
		    this.p2s_hand1=null;
		    this.p4_p1=null;
		    this.p4_p2=null;

			p4UI.__super.call(this);
		}

		CLASS$(p4UI,'ui.test.p4UI',_super);
		var __proto__=p4UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p4UI.uiView);

		}

		p4UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p4_bg.jpg"}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p4_box1","height":1500},"child":[{"type":"Image","props":{"y":485,"x":34,"width":631,"var":"p4_t1","skin":"p4/p4_t1.png","pivotY":269,"pivotX":-27,"height":218}},{"type":"Image","props":{"y":527,"x":113,"skin":"p4/p4_photo.png"}},{"type":"Image","props":{"y":660,"x":220,"width":194,"var":"p4_t2","skin":"p4/p4_t2.png","pivotY":113,"pivotX":156,"height":97}},{"type":"Image","props":{"y":1105,"x":54,"var":"p4_t4","skin":"p4/p4_t4.png"}},{"type":"Image","props":{"y":959,"x":24,"width":95,"var":"p2_hand2","skin":"p2/p2_hand2.png","pivotY":84,"pivotX":24,"height":120}},{"type":"Image","props":{"y":614,"x":599,"width":36,"var":"p2_star","skin":"p2/p2_star.png","pivotY":22,"pivotX":22,"height":43}},{"type":"Image","props":{"y":710,"x":182,"width":36,"var":"p2_star2","skin":"p2/p2_star2.png","pivotY":19,"pivotX":20,"height":42}},{"type":"Image","props":{"y":1311,"x":378,"width":169,"var":"p4_btn","skin":"p2/p2_btn.png","pivotY":58,"pivotX":88,"height":108}},{"type":"Panel","props":{"y":575,"x":748,"width":111,"var":"hand1","pivotY":64,"pivotX":109,"height":100},"child":[{"type":"Image","props":{"var":"p2_hand1","skin":"p2/p2_hand1.png"}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p4_box2","height":1500},"child":[{"type":"Image","props":{"y":442,"x":39,"width":652,"var":"p4s_t1","skin":"p4/p4s_t1.png","pivotY":205,"pivotX":-10,"height":179}},{"type":"Image","props":{"y":556,"x":101,"skin":"p4/p4s_photo.png"}},{"type":"Image","props":{"y":643,"x":467,"width":190,"var":"p4s_t2","skin":"p4/p4s_t2.png","pivotY":100,"pivotX":81,"height":93}},{"type":"Image","props":{"y":1107,"x":76,"var":"p4s_t4","skin":"p4/p4_t4.png"}},{"type":"Image","props":{"y":618,"x":3,"width":80,"var":"p2s_hand2","skin":"p2/p2s_hand2.png","pivotY":41,"pivotX":3,"height":130}},{"type":"Image","props":{"y":1305,"x":377,"width":227,"var":"p4s_btn","skin":"p4/p4s_btn.png","pivotY":69,"pivotX":114,"height":125}},{"type":"Panel","props":{"y":513,"x":751,"width":96,"var":"hand1s","pivotY":23,"pivotX":97,"height":100},"child":[{"type":"Image","props":{"var":"p2s_hand1","skin":"p2/p2s_hand1.png"}}]},{"type":"Image","props":{"y":972,"x":327,"width":93,"var":"p4_p1","skin":"p3/p3_pa1.png","pivotY":67,"pivotX":77,"height":86}},{"type":"Image","props":{"y":904,"x":455,"width":85,"var":"p4_p2","skin":"p3/p3_pa2.png","pivotY":80,"pivotX":34,"height":84}}]}]};
		return p4UI;
	})(View);
var p5UI=(function(_super){
		function p5UI(){
			
		    this.lightning=null;
		    this.face=null;
		    this.p5_t7=null;
		    this.p5_t8=null;
		    this.p5_t9=null;
		    this.p5_t1=null;
		    this.p5_t2=null;
		    this.p5_t3=null;
		    this.p5_t4=null;
		    this.p5_t5=null;
		    this.p5_t6=null;
		    this.horn=null;
		    this.p5_box=null;
		    this.p5_tips=null;
		    this.p5_flag=null;
		    this.moveBox=null;

			p5UI.__super.call(this);
		}

		CLASS$(p5UI,'ui.test.p5UI',_super);
		var __proto__=p5UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p5UI.uiView);

		}

		p5UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p5_bg.jpg"}},{"type":"Image","props":{"y":316,"x":126,"width":63,"var":"lightning","skin":"p5/p5_icon1.png","pivotY":67,"pivotX":67,"height":125}},{"type":"Image","props":{"y":594,"x":58,"width":182,"var":"face","skin":"p5/p5_icon3.png","pivotY":364,"pivotX":-341,"height":150}},{"type":"Image","props":{"y":637,"x":52,"width":53,"var":"p5_t7","skin":"p5/p5_t7.png","pivotY":127,"pivotX":-402,"height":59}},{"type":"Image","props":{"y":645,"x":42,"width":60,"var":"p5_t8","skin":"p5/p5_t8.png","pivotY":147,"pivotX":-464,"height":67}},{"type":"Image","props":{"y":646,"x":35,"width":70,"var":"p5_t9","skin":"p5/p5_t9.png","pivotY":160,"pivotX":-531,"height":77}},{"type":"Image","props":{"y":632,"x":45,"width":276,"var":"p5_t1","skin":"p5/p5_t1.png","pivotY":364,"pivotX":-87,"height":94}},{"type":"Image","props":{"y":633,"x":63,"width":363,"var":"p5_t2","skin":"p5/p5_t2.png","pivotY":253,"pivotX":-157,"height":50}},{"type":"Image","props":{"y":608,"x":40,"width":247,"var":"p5_t3","skin":"p5/p5_t3.png","pivotY":167,"pivotX":-74,"height":83}},{"type":"Image","props":{"y":617,"x":56,"width":208,"var":"p5_t4","skin":"p5/p5_t4.png","pivotY":169,"pivotX":-314,"height":69}},{"type":"Image","props":{"y":655,"x":33,"width":337,"var":"p5_t5","skin":"p5/p5_t5.png","pivotY":126,"pivotX":-86,"height":82}},{"type":"Image","props":{"y":677,"x":360,"width":621,"var":"p5_t6","skin":"p5/p5_t6.png","pivotY":96,"pivotX":287,"height":163}},{"type":"Image","props":{"y":537,"x":619,"width":73,"var":"horn","skin":"p5/p5_icon2.png","pivotY":58,"pivotX":-6,"height":66}},{"type":"Box","props":{"y":763,"x":0,"var":"p5_box"},"child":[{"type":"Image","props":{"y":365,"x":94,"skin":"p5/p5_t10.png"}},{"type":"Image","props":{"y":148,"x":203,"var":"p5_tips","skin":"p5/p5_flag1.png","alpha":0.4}},{"type":"Image","props":{"y":285,"x":345,"width":321,"var":"p5_flag","skin":"p5/p5_flag3.png","pivotY":218,"pivotX":11,"height":265}},{"type":"Image","props":{"y":266,"x":244,"skin":"p5/p5_flag2.png"}},{"type":"Image","props":{"width":750,"var":"moveBox","height":438}}]}]};
		return p5UI;
	})(View);
var p6UI=(function(_super){
		function p6UI(){
			
		    this.photo=null;
		    this.name=null;
		    this.p6_open=null;
		    this.num=null;
		    this.p6_change=null;
		    this.next=null;
		    this.p6_box1=null;
		    this.p6_t1=null;
		    this.p6_box2=null;
		    this.p6_t2=null;
		    this.p6_box3=null;
		    this.p6_t3=null;
		    this.p6_box4=null;
		    this.p6_t4=null;
		    this.p6_box5=null;
		    this.p6_t5=null;
		    this.p6_box6=null;
		    this.p6_t6=null;
		    this.p6_tips=null;
		    this.enter=null;
		    this.definite=null;
		    this.p6_box=null;
		    this.p6_close=null;
		    this.p6list_b0=null;
		    this.p6list_i1=null;
		    this.p6list_t1=null;
		    this.p6list_x1=null;
		    this.p6list_b1=null;
		    this.p6list_i2=null;
		    this.p6list_t2=null;
		    this.p6list_x2=null;
		    this.p6list_b2=null;
		    this.p6list_i3=null;
		    this.p6list_t3=null;
		    this.p6list_x3=null;
		    this.p6list_b3=null;
		    this.p6list_i4=null;
		    this.p6list_t4=null;
		    this.p6list_x4=null;
		    this.p6list_b4=null;
		    this.p6list_i5=null;
		    this.p6list_t5=null;
		    this.p6list_x5=null;
		    this.p6list_b5=null;
		    this.p6list_i6=null;
		    this.p6list_t6=null;
		    this.p6list_x6=null;

			p6UI.__super.call(this);
		}

		CLASS$(p6UI,'ui.test.p6UI',_super);
		var __proto__=p6UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p6UI.uiView);

		}

		p6UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Image","props":{"y":1349,"x":277,"skin":"p6/p6_logo.png"}},{"type":"Image","props":{"y":153,"x":280,"width":168,"var":"photo","skin":"p6/p6_photo.png","height":169},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"p6/p6_mask.png","renderType":"mask"}}]},{"type":"Image","props":{"y":153,"x":280,"width":168,"skin":"p6/p6_photo_bg.png","height":169}},{"type":"Image","props":{"y":290,"x":343,"skin":"p6/p6_photos.png"}},{"type":"Image","props":{"y":346,"x":193,"skin":"p6/p6_name.png"}},{"type":"Label","props":{"y":354,"x":387,"width":284,"var":"name","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":26,"color":"#333333","bold":true}},{"type":"Image","props":{"y":449,"x":78,"var":"p6_open","skin":"p6/p6_num.png"}},{"type":"Label","props":{"y":464,"x":174,"width":31,"var":"num","text":"4","styleSkin":"loading/label.png","height":36,"fontSize":38,"color":"#333333"}},{"type":"Image","props":{"y":1056,"x":375,"width":223,"var":"p6_change","skin":"p6/p6_change.png","pivotY":40,"pivotX":110,"height":80}},{"type":"Image","props":{"y":1203,"x":545,"var":"next","skin":"p6/next.png"}},{"type":"Image","props":{"y":1185,"x":280,"skin":"p6/p6_t1.png"}},{"type":"Box","props":{"y":577,"x":74,"var":"p6_box1"},"child":[{"type":"Image","props":{"skin":"p6/p6_icon1.png"}},{"type":"Label","props":{"y":46,"x":4,"wordWrap":true,"width":256,"var":"p6_t1","text":"跑人生第一个全马","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":27,"color":"#e55d6f","bold":true}}]},{"type":"Box","props":{"y":577,"x":403,"var":"p6_box2"},"child":[{"type":"Image","props":{"skin":"p6/p6_icon2.png"}},{"type":"Label","props":{"y":46,"x":3,"wordWrap":true,"width":256,"var":"p6_t2","text":"跑人生第一个半马","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":27,"color":"#e55d6f","bold":true}}]},{"type":"Box","props":{"y":716,"x":74,"var":"p6_box3"},"child":[{"type":"Image","props":{"skin":"p6/p6_icon3.png"}},{"type":"Label","props":{"y":45,"x":4,"wordWrap":true,"width":256,"var":"p6_t3","text":"健身房每周打卡3次","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":27,"color":"#e55d6f","bold":true}}]},{"type":"Box","props":{"y":716,"x":403,"var":"p6_box4"},"child":[{"type":"Image","props":{"skin":"p6/p6_icon4.png"}},{"type":"Label","props":{"y":45,"x":3,"wordWrap":true,"width":256,"var":"p6_t4","text":"开始挑战国际6大满贯","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":27,"color":"#e55d6f","bold":true}}]},{"type":"Box","props":{"y":857,"x":74,"var":"p6_box5"},"child":[{"type":"Image","props":{"skin":"p6/p6_icon5.png"}},{"type":"Label","props":{"y":46,"x":4,"wordWrap":true,"width":256,"var":"p6_t5","text":"完成国内5大满贯马拉松","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":27,"color":"#e55d6f","bold":true}}]},{"type":"Box","props":{"y":857,"x":403,"var":"p6_box6"},"child":[{"type":"Image","props":{"skin":"p6/p6_icon6.png"}},{"type":"Label","props":{"y":45,"x":3,"wordWrap":true,"width":256,"var":"p6_t6","text":"练出马甲线","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":27,"color":"#e55d6f","bold":true}}]},{"type":"Image","props":{"y":665,"x":215,"width":137,"var":"p6_tips","skin":"p6/p6_tips.png","pivotY":20,"pivotX":11,"height":37}},{"type":"Image","props":{"y":1100,"x":147,"skin":"p6/p6_input.png"}},{"type":"TextInput","props":{"y":1116,"x":148,"width":371,"visible":false,"var":"enter","prompt":"我要自己写","height":49,"fontSize":25,"color":"#888888"}},{"type":"Image","props":{"y":1108,"x":519,"width":97,"var":"definite","height":62}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p6_box","height":1500},"child":[{"type":"Image","props":{"y":526,"x":52,"skin":"p6/p6list.png"}},{"type":"Image","props":{"y":521,"x":66,"var":"p6_close","skin":"p6/p6_close.png"}},{"type":"Image","props":{"y":1117,"x":279,"skin":"p6/p6_t1.png"}},{"type":"Box","props":{"y":616,"x":100,"width":498,"var":"p6list_b0","name":"b0","height":55},"child":[{"type":"Image","props":{"var":"p6list_i1","skin":"p6/p6list_t1.png","name":"i1"}},{"type":"Label","props":{"y":5,"x":64,"width":434,"var":"p6list_t1","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":44,"fontSize":28,"color":"#666666"}},{"type":"Image","props":{"y":4,"x":498,"width":57,"var":"p6list_x1","height":44}}]},{"type":"Box","props":{"y":721,"x":100,"width":498,"var":"p6list_b1","name":"b1","height":55},"child":[{"type":"Image","props":{"var":"p6list_i2","skin":"p6/p6list_t2.png"}},{"type":"Label","props":{"y":5,"x":64,"width":434,"var":"p6list_t2","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":44,"fontSize":28,"color":"#666666"}},{"type":"Image","props":{"y":4,"x":498,"width":57,"var":"p6list_x2","height":44}}]},{"type":"Box","props":{"y":826,"x":100,"width":498,"var":"p6list_b2","name":"b2"},"child":[{"type":"Image","props":{"var":"p6list_i3","skin":"p6/p6list_t3.png"}},{"type":"Label","props":{"y":5,"x":64,"width":434,"var":"p6list_t3","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":44,"fontSize":28,"color":"#666666"}},{"type":"Image","props":{"y":4,"x":498,"width":57,"var":"p6list_x3","height":44}}]},{"type":"Box","props":{"y":931,"x":100,"width":498,"var":"p6list_b3","name":"b3"},"child":[{"type":"Image","props":{"var":"p6list_i4","skin":"p6/p6list_t4.png"}},{"type":"Label","props":{"y":5,"x":64,"width":434,"var":"p6list_t4","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":44,"fontSize":28,"color":"#666666"}},{"type":"Image","props":{"y":4,"x":498,"width":57,"var":"p6list_x4","height":44}}]},{"type":"Box","props":{"y":1036,"x":100,"width":498,"var":"p6list_b4","name":"b4"},"child":[{"type":"Image","props":{"var":"p6list_i5","skin":"p6/p6list_t5.png"}},{"type":"Label","props":{"y":5,"x":64,"width":434,"var":"p6list_t5","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":44,"fontSize":28,"color":"#666666"}},{"type":"Image","props":{"y":4,"x":498,"width":57,"var":"p6list_x5","height":44}}]},{"type":"Box","props":{"y":1141,"x":100,"width":498,"var":"p6list_b5","name":"b5","height":55},"child":[{"type":"Image","props":{"var":"p6list_i6","skin":"p6/p6list_t6.png"}},{"type":"Label","props":{"y":5,"x":64,"width":434,"var":"p6list_t6","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":44,"fontSize":28,"color":"#666666"}},{"type":"Image","props":{"y":4,"x":498,"width":57,"var":"p6list_x6","height":44}}]}]}]};
		return p6UI;
	})(View);
var p7UI=(function(_super){
		function p7UI(){
			
		    this.photo=null;
		    this.name=null;
		    this.p7_num1=null;
		    this.p7_num2=null;
		    this.p7_num3=null;
		    this.p7_num4=null;
		    this.p7_num5=null;
		    this.p7_num6=null;
		    this.p7_t1=null;
		    this.p7_t2=null;
		    this.p7_t3=null;
		    this.p7_t4=null;
		    this.p7_t5=null;
		    this.p7_t6=null;
		    this.p7_btn1=null;
		    this.p7_btn2=null;
		    this.count=null;
		    this.time=null;

			p7UI.__super.call(this);
		}

		CLASS$(p7UI,'ui.test.p7UI',_super);
		var __proto__=p7UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p7UI.uiView);

		}

		p7UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Image","props":{"y":135,"x":288,"width":168,"var":"photo","skin":"p6/p6_photo.png","height":169},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"p6/p6_mask.png","renderType":"mask"}}]},{"type":"Image","props":{"y":135,"x":288,"width":168,"skin":"p6/p6_photo_bg.png","height":169}},{"type":"Image","props":{"y":272,"x":351,"skin":"p6/p6_photos.png"}},{"type":"Image","props":{"y":595,"x":70,"skin":"p7/p7_bg1.png","alpha":0.1}},{"type":"Label","props":{"y":342,"x":368,"width":305,"var":"name","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":26,"color":"#333333","bold":true}},{"type":"Image","props":{"y":338,"x":190,"skin":"p7/p7_t1.png"}},{"type":"Image","props":{"y":549,"x":57,"var":"p7_num1","skin":"p7/p7_num1.png"}},{"type":"Image","props":{"y":653,"x":57,"var":"p7_num2","skin":"p7/p7_num2.png"}},{"type":"Image","props":{"y":757,"x":57,"var":"p7_num3","skin":"p7/p7_num3.png"}},{"type":"Image","props":{"y":861,"x":57,"var":"p7_num4","skin":"p7/p7_num4.png"}},{"type":"Image","props":{"y":965,"x":57,"var":"p7_num5","skin":"p7/p7_num5.png"}},{"type":"Image","props":{"y":1069,"x":57,"var":"p7_num6","skin":"p7/p7_num6.png"}},{"type":"Label","props":{"y":559,"x":203,"width":492,"var":"p7_t1","text":"实现人生第一个全马","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":36,"color":"#333333","bold":true}},{"type":"Label","props":{"y":663,"x":203,"width":492,"var":"p7_t2","text":"健身房每周至少打卡三次","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":36,"color":"#333333","bold":true}},{"type":"Label","props":{"y":767,"x":203,"width":492,"var":"p7_t3","text":"走出国门，挑战外国马拉松","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":36,"color":"#333333","bold":true}},{"type":"Label","props":{"y":871,"x":203,"width":492,"var":"p7_t4","text":"买专业䨻跑鞋，跑得更快","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":36,"color":"#333333","bold":true}},{"type":"Label","props":{"y":975,"x":203,"width":492,"var":"p7_t5","text":"每年都参加马拉松，跑到80岁！ ","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":36,"color":"#333333","bold":true}},{"type":"Label","props":{"y":1079,"x":203,"width":492,"var":"p7_t6","text":"拔草李宁全套最新款跑训产品 ","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":36,"color":"#333333","bold":true}},{"type":"Image","props":{"y":1193,"x":85,"var":"p7_btn1","skin":"p7/p7_btn1.png"}},{"type":"Image","props":{"y":1193,"x":416,"var":"p7_btn2","skin":"p7/p7_btn2.png"}},{"type":"Image","props":{"y":1363,"x":274,"skin":"p6/p6_logo.png"}},{"type":"Image","props":{"y":754,"x":381,"width":250,"var":"count","skin":"p7/count_3.png","pivotY":129,"pivotX":131,"height":250}},{"type":"Image","props":{"y":0,"x":0,"var":"time","skin":"time/time1.jpg"}}]};
		return p7UI;
	})(View);
var p8UI=(function(_super){
		function p8UI(){
			
		    this.photo=null;
		    this.name=null;
		    this.p8_t1=null;
		    this.p7_n1=null;
		    this.p7_n2=null;
		    this.p7_n3=null;
		    this.p7_n4=null;
		    this.p7_n5=null;
		    this.p7_n6=null;
		    this.p7_t1=null;
		    this.p7_t2=null;
		    this.p7_t3=null;
		    this.p7_t4=null;
		    this.p7_t5=null;
		    this.p7_t6=null;
		    this.p8_save=null;
		    this.p8_saves=null;
		    this.p6_logo=null;

			p8UI.__super.call(this);
		}

		CLASS$(p8UI,'ui.test.p8UI',_super);
		var __proto__=p8UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p8UI.uiView);

		}

		p8UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Image","props":{"y":594,"x":53,"skin":"p8/p8_bg1.png","alpha":0.1}},{"type":"Image","props":{"y":176,"x":96,"width":168,"var":"photo","skin":"p6/p6_photo.png","height":169},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"p6/p6_mask.png","renderType":"mask"}}]},{"type":"Image","props":{"y":176,"x":96,"width":168,"skin":"p6/p6_photo_bg.png","height":169}},{"type":"Image","props":{"y":313,"x":159,"skin":"p6/p6_photos.png"}},{"type":"Label","props":{"y":183,"x":378,"width":239,"var":"name","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":26,"color":"#333333","bold":true}},{"type":"Image","props":{"y":130,"x":253,"var":"p8_t1","skin":"p8/p8_t1.png"}},{"type":"Image","props":{"y":481,"x":83,"var":"p7_n1","skin":"p7/p7_num1.png"}},{"type":"Image","props":{"y":596,"x":81,"var":"p7_n2","skin":"p7/p7_num2.png"}},{"type":"Image","props":{"y":711,"x":83,"var":"p7_n3","skin":"p7/p7_num3.png"}},{"type":"Image","props":{"y":826,"x":83,"var":"p7_n4","skin":"p7/p7_num4.png"}},{"type":"Image","props":{"y":941,"x":83,"var":"p7_n5","skin":"p7/p7_num5.png"}},{"type":"Image","props":{"y":1056,"x":83,"var":"p7_n6","skin":"p7/p7_num6.png"}},{"type":"Label","props":{"y":495,"x":219,"width":480,"var":"p7_t1","text":"实现人生第一个全马","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":610,"x":219,"width":480,"var":"p7_t2","text":"健身房每周至少打卡三次","styleSkin":"loading/label.png","overflow":"visible","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":725,"x":219,"width":480,"var":"p7_t3","text":"走出国门，挑战外国马拉松","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":840,"x":219,"width":480,"var":"p7_t4","text":"买专业䨻跑鞋，跑得更快","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":955,"x":219,"width":480,"var":"p7_t5","text":"每年都参加马拉松，跑到80岁！ ","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":1070,"x":219,"width":480,"var":"p7_t6","text":"拔草李宁全套最新款跑训产品 ","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Image","props":{"y":1038,"x":82,"skin":"p8/p8_copy.png"}},{"type":"Image","props":{"y":1136,"x":323,"var":"p8_save","skin":"p8/p8_save.png"}},{"type":"Image","props":{"y":1117,"x":304,"var":"p8_saves","skin":"p8/p8_saves.png"}},{"type":"Image","props":{"y":1370,"x":279,"var":"p6_logo","skin":"p6/p6_logo.png"}}]};
		return p8UI;
	})(View);
var shareUI=(function(_super){
		function shareUI(){
			
		    this.photo=null;
		    this.p8_t1=null;
		    this.name=null;
		    this.share_num1=null;
		    this.share_num2=null;
		    this.share_num3=null;
		    this.share_num4=null;
		    this.share_num5=null;
		    this.share_num6=null;
		    this.share_t1=null;
		    this.share_t2=null;
		    this.share_t3=null;
		    this.share_t4=null;
		    this.share_t5=null;
		    this.share_t6=null;
		    this.p8_go=null;

			shareUI.__super.call(this);
		}

		CLASS$(shareUI,'ui.test.shareUI',_super);
		var __proto__=shareUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(shareUI.uiView);

		}

		shareUI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Image","props":{"y":612,"x":30,"skin":"p7/p7_bg1.png","alpha":0.1}},{"type":"Image","props":{"y":193,"x":80,"width":168,"var":"photo","skin":"p6/p6_photo.png","height":169},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"p6/p6_mask.png","renderType":"mask"}}]},{"type":"Image","props":{"y":193,"x":80,"width":168,"skin":"p6/p6_photo_bg.png","height":169}},{"type":"Image","props":{"y":330,"x":143,"skin":"p6/p6_photos.png"}},{"type":"Image","props":{"y":147,"x":249,"var":"p8_t1","skin":"p8/p8_t1.png"}},{"type":"Label","props":{"y":203,"x":375,"width":247,"var":"name","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":26,"color":"#333333","bold":true}},{"type":"Image","props":{"y":481,"x":83,"var":"share_num1","skin":"p7/p7_num1.png"}},{"type":"Image","props":{"y":596,"x":81,"var":"share_num2","skin":"p7/p7_num2.png"}},{"type":"Image","props":{"y":711,"x":83,"var":"share_num3","skin":"p7/p7_num3.png"}},{"type":"Image","props":{"y":826,"x":83,"var":"share_num4","skin":"p7/p7_num4.png"}},{"type":"Image","props":{"y":941,"x":83,"var":"share_num5","skin":"p7/p7_num5.png"}},{"type":"Image","props":{"y":1056,"x":83,"var":"share_num6","skin":"p7/p7_num6.png"}},{"type":"Label","props":{"y":495,"x":219,"width":480,"var":"share_t1","text":"实现人生第一个全马","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":610,"x":219,"width":480,"var":"share_t2","text":"健身房每周至少打卡三次","styleSkin":"loading/label.png","overflow":"visible","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":725,"x":219,"width":480,"var":"share_t3","text":"走出国门，挑战外国马拉松","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":840,"x":219,"width":480,"var":"share_t4","text":"买专业䨻跑鞋，跑得更快","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":955,"x":219,"width":480,"var":"share_t5","text":"每年都参加马拉松，跑到80岁！ ","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Label","props":{"y":1070,"x":219,"width":480,"var":"share_t6","text":"拔草李宁全套最新款跑训产品 ","styleSkin":"loading/label.png","overflow":"hidden","height":47,"fontSize":32,"color":"#333333","bold":true}},{"type":"Image","props":{"y":1159,"x":234,"var":"p8_go","skin":"p8/p8_go.png"}},{"type":"Image","props":{"y":1375,"x":274,"skin":"p6/p6_logo.png"}}]};
		return shareUI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
		return TestPageUI;
	})(View);