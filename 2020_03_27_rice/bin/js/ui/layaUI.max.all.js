var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var p1UI=(function(_super){
		function p1UI(){
			
		    this.bg=null;
		    this.yun1=null;
		    this.yun2=null;
		    this.light=null;
		    this.light2=null;
		    this.light3=null;
		    this.light4=null;
		    this.light5=null;
		    this.light6=null;
		    this.p1_bottom=null;
		    this.p1_guan=null;
		    this.p1_btn=null;
		    this.p1_jump=null;
		    this.rule_btn=null;
		    this.p1_t3=null;
		    this.p1_t2=null;
		    this.p1_t4=null;
		    this.rule=null;
		    this.rule_x=null;

			p1UI.__super.call(this);
		}

		CLASS$(p1UI,'ui.test.p1UI',_super);
		var __proto__=p1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p1UI.uiView);

		}

		p1UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"p1/p1_bg1.png"}},{"type":"Image","props":{"y":366,"x":371,"width":750,"var":"yun1","skin":"p1/yun1.png","pivotY":366,"pivotX":371,"height":732}},{"type":"Image","props":{"y":504,"x":378,"width":750,"var":"yun2","skin":"p1/yun2.png","pivotY":353,"pivotX":379,"height":678}},{"type":"Image","props":{"y":432,"x":0,"skin":"p1/p1_bg2.png"}},{"type":"Image","props":{"y":577,"x":0,"var":"light","skin":"p1/light.png"}},{"type":"Image","props":{"y":307,"x":213,"var":"light2","skin":"p1/light2.png"}},{"type":"Image","props":{"y":276,"x":392,"var":"light3","skin":"p1/light2.png"}},{"type":"Image","props":{"y":393,"x":178,"var":"light4","skin":"p1/light2.png"}},{"type":"Image","props":{"y":376,"x":374,"var":"light5","skin":"p1/light2.png"}},{"type":"Image","props":{"y":446,"x":498,"var":"light6","skin":"p1/light2.png"}},{"type":"Image","props":{"y":1609,"x":376,"width":750,"var":"p1_bottom","skin":"p1/p1_bottom.png","pivotY":593,"pivotX":376,"height":484}},{"type":"Image","props":{"y":215,"x":170,"skin":"p1/p1_t1.png"}},{"type":"Image","props":{"y":1194,"x":385,"width":277,"var":"p1_guan","skin":"p1/p1_guan.png","pivotY":426,"pivotX":139,"height":438}},{"type":"Image","props":{"y":1268,"x":378,"width":239,"var":"p1_btn","skin":"p1/p1_btn.png","pivotY":43,"pivotX":120,"height":80}},{"type":"Image","props":{"y":1212,"x":618,"var":"p1_jump","skin":"p1/p1_jump.png"}},{"type":"Image","props":{"y":151,"x":606,"var":"rule_btn","skin":"p1/p1_btn2.png"}},{"type":"Image","props":{"y":323,"x":140,"var":"p1_t3","skin":"p1/p1_t3.png"}},{"type":"Image","props":{"y":323,"x":206,"var":"p1_t2","skin":"p1/p1_t2.png"}},{"type":"Image","props":{"y":476,"x":434,"width":101,"var":"p1_t4","skin":"p1/p1_t4.png","pivotY":54,"pivotX":57,"height":104}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"rule","height":1500},"child":[{"type":"Image","props":{"y":209,"x":98,"skin":"p1/p1_rule.png"}},{"type":"Image","props":{"y":205,"x":592,"var":"rule_x","skin":"p1/p1_x.png"}}]}]};
		return p1UI;
	})(View);
var p2UI=(function(_super){
		function p2UI(){
			
		    this.light2=null;
		    this.light3=null;
		    this.light4=null;
		    this.light5=null;
		    this.p2_t1=null;
		    this.p2_t2=null;
		    this.p2_t3=null;
		    this.p2_t4=null;
		    this.p2_t5=null;
		    this.p2_t6=null;
		    this.p2_rice=null;
		    this.p2_grass=null;
		    this.p2_hand=null;

			p2UI.__super.call(this);
		}

		CLASS$(p2UI,'ui.test.p2UI',_super);
		var __proto__=p2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p2UI.uiView);

		}

		p2UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p2bg.jpg"}},{"type":"Image","props":{"y":154,"x":212,"var":"light2","skin":"p1/light2.png"}},{"type":"Image","props":{"y":228,"x":248,"var":"light3","skin":"p1/light2.png"}},{"type":"Image","props":{"y":312,"x":205,"var":"light4","skin":"p1/light2.png"}},{"type":"Image","props":{"y":279,"x":402,"var":"light5","skin":"p1/light2.png"}},{"type":"Image","props":{"y":188,"x":172,"var":"p2_t1","skin":"p2/p2_t1.png"}},{"type":"Image","props":{"y":907,"x":303,"width":249,"var":"p2_t2","skin":"p2/p2_t2.png","pivotY":346,"pivotX":261,"height":183}},{"type":"Image","props":{"y":899,"x":304,"width":241,"var":"p2_t3","skin":"p2/p2_t4.png","pivotY":350,"pivotX":-190,"height":187}},{"type":"Image","props":{"y":904,"x":309,"width":206,"var":"p2_t4","skin":"p2/p2_t3.png","pivotY":210,"pivotX":6,"height":138}},{"type":"Image","props":{"y":1026,"x":499,"width":230,"var":"p2_t5","skin":"p2/p2_t5.png","pivotY":207,"pivotX":-14,"height":183}},{"type":"Image","props":{"y":363,"x":467,"width":78,"var":"p2_t6","skin":"p2/p2_t6.png","pivotY":38,"pivotX":44,"height":81}},{"type":"Image","props":{"y":1059,"x":402,"width":423,"var":"p2_rice","skin":"p2/p2_rice.png","pivotY":191,"pivotX":233,"height":415}},{"type":"Image","props":{"y":1586,"x":385,"width":750,"var":"p2_grass","skin":"p2/p2_grass.png","pivotY":869,"pivotX":385,"height":783}},{"type":"Image","props":{"y":1189,"x":427,"width":122,"var":"p2_hand","skin":"p2/p2_hand.png","pivotY":33,"pivotX":51,"height":143}}]};
		return p2UI;
	})(View);
var p3UI=(function(_super){
		function p3UI(){
			
		    this.p3_t1=null;
		    this.p3_bird=null;
		    this.p3_road=null;
		    this.p3_tractor=null;
		    this.lun1=null;
		    this.lun2=null;
		    this.p3_rice=null;
		    this.arrow=null;
		    this.p3_wheat=null;
		    this.p3_bird2=null;
		    this.p3_bird1=null;

			p3UI.__super.call(this);
		}

		CLASS$(p3UI,'ui.test.p3UI',_super);
		var __proto__=p3UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p3UI.uiView);

		}

		p3UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3bg.jpg"}},{"type":"Image","props":{"y":193,"x":161,"var":"p3_t1","skin":"p3/p3_t1.png"}},{"type":"Image","props":{"y":608,"x":377,"width":344,"var":"p3_bird","skin":"p3/p3_bird.png","pivotY":196,"pivotX":195,"height":217}},{"type":"Image","props":{"y":882,"x":305,"var":"p3_road","skin":"p3/p3_road.png"}},{"type":"Image","props":{"y":880,"x":491,"var":"p3_tractor","skin":"p3/p3_tractor.png"},"child":[{"type":"Image","props":{"y":125,"x":16,"var":"lun1","skin":"p3/lun1.png","pivotY":21,"pivotX":21.5}},{"type":"Image","props":{"y":113,"x":124,"var":"lun2","skin":"p3/lun2.png","pivotY":33,"pivotX":33}}]},{"type":"Image","props":{"y":1277,"x":258,"width":432,"var":"p3_rice","skin":"p3/p3_rice.png","pivotY":434,"pivotX":230,"height":484}},{"type":"Image","props":{"y":1027,"x":568,"var":"arrow","skin":"p3/arrow.png"}},{"type":"Image","props":{"y":1522,"x":296,"width":750,"var":"p3_wheat","skin":"p3/p3_wheat.png","pivotY":600,"pivotX":296,"height":578}},{"type":"Image","props":{"y":930,"x":0,"skin":"p3/p3_grass.png"}},{"type":"Image","props":{"y":555,"x":495,"width":56,"var":"p3_bird2","skin":"p3/p3_bird2.png","pivotY":26,"pivotX":25,"height":32}},{"type":"Image","props":{"y":618,"x":387,"width":70,"var":"p3_bird1","skin":"p3/p3_bird1.png","pivotY":43,"pivotX":30,"height":54}}]};
		return p3UI;
	})(View);
var p4UI=(function(_super){
		function p4UI(){
			
		    this.p4Box=null;
		    this.door_left=null;
		    this.door_right=null;
		    this.p4_t1=null;
		    this.p4_tractor=null;
		    this.p4_bird1=null;
		    this.p4_bird2=null;
		    this.p4_bird3=null;
		    this.p4_bird4=null;
		    this.p4_bottom=null;
		    this.arrow=null;
		    this.enter=null;

			p4UI.__super.call(this);
		}

		CLASS$(p4UI,'ui.test.p4UI',_super);
		var __proto__=p4UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p4UI.uiView);

		}

		p4UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Box","props":{"y":982,"x":370,"width":750,"var":"p4Box","pivotY":982,"pivotX":370,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"img/p4bg.jpg","height":1500}},{"type":"Panel","props":{"y":918,"x":266,"width":104,"height":119},"child":[{"type":"Image","props":{"var":"door_left","skin":"p4/p4_left.png"}}]},{"type":"Panel","props":{"y":918,"x":371,"width":104,"height":119},"child":[{"type":"Image","props":{"var":"door_right","skin":"p4/p4_right.png"}}]},{"type":"Image","props":{"y":213,"x":168,"var":"p4_t1","skin":"p4/p4_t1.png"}},{"type":"Image","props":{"y":979,"x":320,"skin":"p4/p4_road.png"}},{"type":"Image","props":{"y":979,"x":320,"var":"p4_tractor","skin":"p4/p4_tractor.png"}},{"type":"Image","props":{"y":548,"x":447,"width":69,"var":"p4_bird1","skin":"p4/p4_bird1.png","pivotY":31,"pivotX":38,"height":45}},{"type":"Image","props":{"y":603,"x":587,"width":43,"var":"p4_bird2","skin":"p4/p4_bird2.png","pivotY":17,"pivotX":22,"height":28}},{"type":"Image","props":{"y":497,"x":563,"width":51,"var":"p4_bird3","skin":"p4/p4_bird3.png","pivotY":10,"pivotX":27,"height":16}},{"type":"Image","props":{"y":434,"x":663,"width":51,"var":"p4_bird4","skin":"p4/p4_bird4.png","pivotY":11,"pivotX":26,"height":16}},{"type":"Image","props":{"y":1632,"x":360,"width":772,"var":"p4_bottom","skin":"p4/p4_bottom.png","pivotY":538,"pivotX":384,"height":543}},{"type":"Image","props":{"y":953,"x":245,"width":91,"var":"arrow","skin":"p3/arrow.png","height":75}},{"type":"Image","props":{"y":909,"x":37,"width":173,"var":"enter","height":274}}]}]};
		return p4UI;
	})(View);
var p5UI=(function(_super){
		function p5UI(){
			
		    this.p5_main=null;
		    this.dai1=null;
		    this.dai3=null;
		    this.p5_fe1=null;
		    this.p5_fe2=null;
		    this.p5_fe3=null;
		    this.p5_line1=null;
		    this.p5_line2=null;
		    this.p5_line3=null;
		    this.p5_line4=null;
		    this.p5_circle1=null;
		    this.p5_circle2=null;
		    this.p5_circle3=null;
		    this.p5_c1=null;
		    this.p5_c2=null;
		    this.p5_c3=null;
		    this.p5_c4=null;
		    this.p5_c5=null;
		    this.p5_c6=null;
		    this.p5_c7=null;
		    this.p5_people=null;
		    this.p5_text1=null;
		    this.p5_text2=null;
		    this.p5_box=null;
		    this.p5_tips=null;
		    this.p2_hand=null;

			p5UI.__super.call(this);
		}

		CLASS$(p5UI,'ui.test.p5UI',_super);
		var __proto__=p5UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p5UI.uiView);

		}

		p5UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Box","props":{"y":0,"x":-1,"var":"p5_main"},"child":[{"type":"Image","props":{"x":1,"skin":"img/p5bg.jpg"}},{"type":"Image","props":{"y":707,"x":346,"var":"dai1","skin":"p5/dai1.png"}},{"type":"Image","props":{"y":948,"var":"dai3","skin":"p5/dai4.png"}},{"type":"Image","props":{"y":970,"x":1,"var":"p5_fe1","skin":"p5/p5_fe1.png"}},{"type":"Image","props":{"y":1005,"x":163,"var":"p5_fe2","skin":"p5/p5_fe2.png"}},{"type":"Image","props":{"y":1092,"x":424,"var":"p5_fe3","skin":"p5/p5_fe3.png"}},{"type":"Image","props":{"y":980,"x":1,"skin":"p5/p5_bom3.png"}},{"type":"Image","props":{"y":134,"x":278,"skin":"p5/p5_bom4.png"}},{"type":"Image","props":{"y":1218,"x":1,"skin":"p5/p5_bom2.png"}},{"type":"Image","props":{"x":1,"skin":"p5/p5_bom1.png"}},{"type":"Image","props":{"y":493,"x":2,"var":"p5_line1","skin":"p5/p5_line.png"}},{"type":"Image","props":{"y":751,"x":299,"var":"p5_line2","skin":"p5/p5_line2.png"}},{"type":"Image","props":{"y":519,"x":149,"var":"p5_line3","skin":"p5/p5_door.png"}},{"type":"Image","props":{"y":773,"x":492,"var":"p5_line4","skin":"p5/p5_light.png"}},{"type":"Image","props":{"y":645,"x":19,"var":"p5_circle1","skin":"p5/p5_circle1.png"}},{"type":"Image","props":{"y":645,"x":54,"var":"p5_circle2","skin":"p5/p5_circle2.png"}},{"type":"Image","props":{"y":645,"x":92,"var":"p5_circle3","skin":"p5/p5_circle3.png"}},{"type":"Image","props":{"y":746,"x":21,"var":"p5_c1","skin":"p5/p5_circle4.png"}},{"type":"Image","props":{"y":746,"x":76,"width":40,"var":"p5_c2","skin":"p5/p5_circle4.png","height":40}},{"type":"Image","props":{"y":746,"x":131,"var":"p5_c3","skin":"p5/p5_circle4.png"}},{"type":"Image","props":{"y":746,"x":186,"var":"p5_c4","skin":"p5/p5_circle4.png"}},{"type":"Image","props":{"y":746,"x":241,"var":"p5_c5","skin":"p5/p5_circle4.png"}},{"type":"Image","props":{"y":746,"x":296,"var":"p5_c6","skin":"p5/p5_circle4.png"}},{"type":"Image","props":{"y":746,"x":351,"var":"p5_c7","skin":"p5/p5_circle4.png"}},{"type":"Image","props":{"y":483,"x":196,"var":"p5_people","skin":"p5/p5_people.png"}},{"type":"Image","props":{"y":424,"x":380,"var":"p5_text1","skin":"p5/p5_text1.png"}},{"type":"Image","props":{"y":825,"x":190,"var":"p5_text2","skin":"p5/p5_text2.png"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"p5_box"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p5bg1.jpg"}},{"type":"Image","props":{"y":428,"x":23,"var":"p5_tips","skin":"p5/p5_tips.png"}},{"type":"Image","props":{"y":826,"x":403,"width":122,"var":"p2_hand","skin":"p2/p2_hand.png","pivotY":33,"pivotX":51,"height":143}}]}]};
		return p5UI;
	})(View);
var p7UI=(function(_super){
		function p7UI(){
			
		    this.p7_left=null;
		    this.p7_right=null;
		    this.p7_rice=null;
		    this.p7_t2=null;
		    this.p7_t3=null;
		    this.p7_hand=null;

			p7UI.__super.call(this);
		}

		CLASS$(p7UI,'ui.test.p7UI',_super);
		var __proto__=p7UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p7UI.uiView);

		}

		p7UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p7bg.jpg"}},{"type":"Image","props":{"y":855,"x":209,"width":265,"var":"p7_left","skin":"p7/p7_left.png","pivotY":133,"pivotX":133,"height":266}},{"type":"Image","props":{"y":855,"x":545,"width":264,"var":"p7_right","skin":"p7/p7_right.png","pivotY":133,"pivotX":133,"height":266}},{"type":"Image","props":{"y":834,"x":188,"skin":"p7/p7_t1.png"}},{"type":"Image","props":{"y":819,"x":383,"width":53,"var":"p7_rice","skin":"p7/p7_rice.png","pivotY":54,"pivotX":30,"height":100}},{"type":"Image","props":{"y":986,"x":125,"var":"p7_t2","skin":"p7/p7_t2.png"}},{"type":"Image","props":{"y":986,"x":454,"var":"p7_t3","skin":"p7/p7_t3.png"}},{"type":"Image","props":{"y":934,"x":224,"width":122,"var":"p7_hand","skin":"p2/p2_hand.png","pivotY":33,"pivotX":51,"height":143}}]};
		return p7UI;
	})(View);
var p8UI=(function(_super){
		function p8UI(){
			
		    this.p8_bg2=null;
		    this.p8_ship1=null;
		    this.p8_bg1=null;
		    this.p8_element1=null;
		    this.p8_element2=null;
		    this.p8_element3=null;
		    this.p8_t1=null;
		    this.p8_bottle=null;
		    this.p8_cap=null;
		    this.p8_bottom=null;

			p8UI.__super.call(this);
		}

		CLASS$(p8UI,'ui.test.p8UI',_super);
		var __proto__=p8UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(p8UI.uiView);

		}

		p8UI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"p8_bg2","skin":"img/p8bg2.jpg"}},{"type":"Image","props":{"y":724,"x":27,"var":"p8_ship1","skin":"p8/p8_ship1.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"p8_bg1","skin":"img/p8bg1.jpg"}},{"type":"Image","props":{"y":550,"x":343,"width":231,"var":"p8_element1","skin":"p8/p8_element1.png","pivotY":31,"pivotX":116,"height":74}},{"type":"Image","props":{"y":621,"x":378,"width":331,"var":"p8_element2","skin":"p8/p8_element2.png","pivotY":86,"pivotX":162,"height":154}},{"type":"Image","props":{"y":729,"x":379,"width":236,"var":"p8_element3","skin":"p8/p8_element3.png","pivotY":79,"pivotX":114,"height":155}},{"type":"Image","props":{"y":211,"x":116,"var":"p8_t1","skin":"p8/p8_t1.png"}},{"type":"Image","props":{"y":802,"x":72,"var":"p8_bottle","skin":"p8/p8_bottle.png"}},{"type":"Image","props":{"y":874,"x":526,"width":190,"var":"p8_cap","skin":"p8/p8_cap.png","pivotY":241,"pivotX":5,"height":262}},{"type":"Image","props":{"y":1576,"x":374,"width":750,"var":"p8_bottom","skin":"p8/p8_bottom.png","pivotY":496,"pivotX":374,"height":420}}]};
		return p8UI;
	})(View);
var photoUI=(function(_super){
		function photoUI(){
			
		    this.photo_up=null;
		    this.photo_btn=null;
		    this.boy=null;
		    this.faceBox=null;
		    this.sex1_face=null;
		    this.share_poster=null;

			photoUI.__super.call(this);
		}

		CLASS$(photoUI,'ui.test.photoUI',_super);
		var __proto__=photoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(photoUI.uiView);

		}

		photoUI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/photobg.jpg"}},{"type":"Image","props":{"y":256,"x":166,"skin":"photo/photo_t1.png"}},{"type":"Image","props":{"y":393,"x":163,"var":"photo_up","skin":"photo/photo_up.png"}},{"type":"Image","props":{"y":883,"x":179,"skin":"photo/sex1.png"}},{"type":"Image","props":{"y":883,"x":419,"skin":"photo/sex2.png"}},{"type":"Image","props":{"y":1145,"x":177,"var":"photo_btn","skin":"photo/photo_btn.png"}},{"type":"Box","props":{"y":0,"x":0,"var":"boy"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/photobg2.jpg"}},{"type":"Image","props":{"y":208,"x":105,"skin":"photo/sex1_t1.png"}},{"type":"Box","props":{"y":643,"x":260,"var":"faceBox"},"child":[{"type":"Image","props":{"var":"sex1_face","skin":"photo/sex1_face.png"}},{"type":"Image","props":{"y":0,"x":0,"skin":"photo/sex1_face.png","renderType":"mask"}}]},{"type":"Image","props":{"y":594,"x":52,"skin":"photo/sex1_t2.png"}},{"type":"Image","props":{"y":1094,"x":0,"skin":"photo/sex1_grass.png"}},{"type":"Image","props":{"y":1182,"x":254,"var":"share_poster","skin":"photo/sex1_btn.png"}}]}]};
		return photoUI;
	})(View);
var rankUI=(function(_super){
		function rankUI(){
			
		    this.myPhoto=null;
		    this.myName=null;
		    this.zan=null;
		    this.list=null;
		    this.rank_btn=null;

			rankUI.__super.call(this);
		}

		CLASS$(rankUI,'ui.test.rankUI',_super);
		var __proto__=rankUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rankUI.uiView);

		}

		rankUI.uiView={"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/rankbg.jpg"}},{"type":"Image","props":{"y":199,"x":89,"skin":"rank/rank_di.png"}},{"type":"Image","props":{"y":248,"x":138,"width":139,"var":"myPhoto","skin":"rank/rank_btn.png","height":139},"child":[{"type":"Image","props":{"skin":"rank/rank_photo.png","renderType":"mask"}}]},{"type":"Image","props":{"y":286,"x":310,"skin":"rank/rank_name.png"}},{"type":"Label","props":{"y":339,"x":311,"width":204,"var":"myName","underlineColor":"#4193d8","underline":true,"text":"MEDUSA","styleSkin":"rank/label.png","height":38,"fontSize":36,"color":"#4193d8"}},{"type":"Image","props":{"y":270,"x":528,"var":"zan","skin":"rank/zan.png"}},{"type":"Image","props":{"y":456,"x":266,"skin":"rank/rank_t1.png"}},{"type":"List","props":{"y":535,"x":175,"width":476,"var":"list","vScrollBarSkin":"rank/vscroll.png","repeatX":1,"height":605},"child":[{"type":"Box","props":{"y":0,"x":0,"width":432,"name":"render","height":68},"child":[{"type":"Image","props":{"width":50,"skin":"rank/rank_btn.png","name":"photo","height":50},"child":[{"type":"Image","props":{"skin":"rank/rank_photo2.png","renderType":"mask"}}]},{"type":"Label","props":{"y":24,"x":89,"width":210,"text":"RICH.TANG","skin":"comp/label.png","overflow":"hidden","name":"name","height":32,"fontSize":28,"color":"#4193d8"}},{"type":"Image","props":{"y":53,"x":74,"skin":"rank/rank_line.png"}},{"type":"Image","props":{"y":15,"x":308,"skin":"rank/rank_heart.png","name":"heart"}},{"type":"Label","props":{"y":28,"x":358,"width":68,"text":"+666","skin":"comp/label.png","overflow":"hidden","name":"num","height":26,"fontSize":18,"color":"#ec737a"}}]}]},{"type":"Image","props":{"y":1161,"x":219,"var":"rank_btn","skin":"rank/rank_btn.png"}}]};
		return rankUI;
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