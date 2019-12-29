/**Created by the LayaAirIDE,do not modify.*/
package ui.test {
	import laya.ui.*;
	import laya.display.*; 

	public class p6UI extends View {
		public var photo:Image;
		public var name:Label;
		public var num:Label;
		public var p6_change:Image;
		public var next:Image;
		public var p6_t1:Label;
		public var p6_t2:Label;
		public var p6_t3:Label;
		public var p6_t4:Label;
		public var p6_t5:Label;
		public var p6_t6:Label;
		public var p6_tips:Image;
		public var p6_box:Box;
		public var p6list_b1:Box;
		public var p6list_t1:Label;
		public var p6list_x1:Image;
		public var p6list_b2:Box;
		public var p6list_t2:Label;
		public var p6list_b3:Box;
		public var p6list_t3:Label;
		public var p6list_b4:Box;
		public var p6list_t4:Label;
		public var p6list_b5:Box;
		public var p6list_t5:Label;
		public var p6list_b6:Box;
		public var p6list_t6:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Image","props":{"y":1301,"x":286,"skin":"p6/p6_logo.png"}},{"type":"Image","props":{"y":206,"x":288,"width":153,"var":"photo","skin":"p6/p6_photo.png","height":153},"child":[{"type":"Image","props":{"y":0,"x":0,"width":153,"skin":"p6/p6_mask.png","renderType":"mask","height":153}}]},{"type":"Image","props":{"y":206,"x":288,"skin":"p6/p6_photo_bg.png"}},{"type":"Image","props":{"y":381,"x":208,"skin":"p6/p6_name.png"}},{"type":"Label","props":{"y":368,"x":383,"width":160,"var":"name","text":"鹿憨憨","styleSkin":"loading/label.png","height":47,"fontSize":45,"font":"SimSun","color":"#333333"}},{"type":"Image","props":{"y":474,"x":105,"skin":"p6/p6_num.png"}},{"type":"Label","props":{"y":489,"x":192,"width":31,"var":"num","text":"4","styleSkin":"loading/label.png","height":36,"fontSize":34,"color":"#333333"}},{"type":"Image","props":{"y":979,"x":274,"var":"p6_change","skin":"p6/p6_change.png"}},{"type":"Image","props":{"y":1078,"x":168,"skin":"p6/p6_input.png"}},{"type":"TextInput","props":{"y":1079,"x":170,"width":363,"prompt":"也能自己立哦","height":41,"fontSize":25,"color":"#888888"}},{"type":"Image","props":{"y":1146,"x":528,"var":"next","skin":"p6/next.png"}},{"type":"Image","props":{"y":1141,"x":288,"skin":"p6/p6_t1.png"}},{"type":"Image","props":{"y":594,"x":103,"skin":"p6/p6_icon.png"}},{"type":"Label","props":{"y":635,"x":104,"wordWrap":true,"width":256,"visible":false,"var":"p6_t1","text":"实现人生第一个全马","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":25,"color":"#ea6047"}},{"type":"Label","props":{"y":635,"x":400,"wordWrap":true,"width":256,"visible":false,"var":"p6_t2","text":"走出国门， \\n挑战外国马拉松 ","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":25,"font":"SimSun","color":"#ea6047"}},{"type":"Label","props":{"y":760,"x":104,"wordWrap":true,"width":256,"visible":false,"var":"p6_t3","text":"买专业䨻跑鞋\\n跑得更快 ","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":25,"color":"#ea6047"}},{"type":"Label","props":{"y":760,"x":400,"wordWrap":true,"width":256,"visible":false,"var":"p6_t4","text":"更新更多专业跑步知识 避免受伤 ","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":25,"font":"SimSun","color":"#ea6047"}},{"type":"Label","props":{"y":889,"x":104,"wordWrap":true,"width":256,"visible":false,"var":"p6_t5","text":"全家一起\\n参加一次马拉松 ","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":25,"color":"#ea6047"}},{"type":"Label","props":{"y":889,"x":400,"wordWrap":true,"width":256,"visible":false,"var":"p6_t6","text":"欧气加持\\n马拉松次次中签 ","styleSkin":"loading/label.png","leading":6,"height":76,"fontSize":25,"font":"SimSun","color":"#ea6047"}},{"type":"Image","props":{"y":668,"x":219,"width":121,"var":"p6_tips","skin":"p6/p6_tips.png","pivotY":19,"pivotX":12,"height":33}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p6_box","height":1500},"child":[{"type":"Image","props":{"y":522,"x":86,"skin":"p6/p6list.png"}},{"type":"Image","props":{"y":543,"x":100,"skin":"p6/p6_close.png"}},{"type":"Image","props":{"y":1045,"x":288,"skin":"p6/p6_t1.png"}},{"type":"Box","props":{"y":596,"x":138,"var":"p6list_b1"},"child":[{"type":"Image","props":{"skin":"p6/p6list_t1.png"}},{"type":"Label","props":{"y":9,"x":64,"width":411,"var":"p6list_t1","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":40,"fontSize":25,"color":"#666666"}},{"type":"Image","props":{"y":6,"x":430,"width":57,"var":"p6list_x1","height":44}}]},{"type":"Box","props":{"y":666,"x":138,"var":"p6list_b2"},"child":[{"type":"Image","props":{"skin":"p6/p6list_t2.png"}},{"type":"Label","props":{"y":9,"x":64,"width":411,"var":"p6list_t2","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":40,"fontSize":25,"color":"#666666"}},{"type":"Image","props":{"y":6,"x":430,"width":57,"height":44}}]},{"type":"Box","props":{"y":739,"x":138,"var":"p6list_b3"},"child":[{"type":"Image","props":{"skin":"p6/p6list_t3.png"}},{"type":"Label","props":{"y":9,"x":64,"width":411,"var":"p6list_t3","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":40,"fontSize":25,"color":"#666666"}},{"type":"Image","props":{"y":6,"x":430,"width":57,"height":44}}]},{"type":"Box","props":{"y":810,"x":138,"var":"p6list_b4"},"child":[{"type":"Image","props":{"skin":"p6/p6list_t4.png"}},{"type":"Label","props":{"y":9,"x":64,"width":411,"var":"p6list_t4","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":40,"fontSize":25,"color":"#666666"}},{"type":"Image","props":{"y":6,"x":430,"width":57,"height":44}}]},{"type":"Box","props":{"y":881,"x":138,"var":"p6list_b5"},"child":[{"type":"Image","props":{"skin":"p6/p6list_t5.png"}},{"type":"Label","props":{"y":9,"x":64,"width":411,"var":"p6list_t5","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":40,"fontSize":25,"color":"#666666"}},{"type":"Image","props":{"y":6,"x":430,"width":57,"height":44}}]},{"type":"Box","props":{"y":951,"x":138,"var":"p6list_b6"},"child":[{"type":"Image","props":{"skin":"p6/p6list_t6.png"}},{"type":"Label","props":{"y":9,"x":64,"width":411,"var":"p6list_t6","valign":"middle","text":"跑人生第一个半马","styleSkin":"loading/label.png","overflow":"hidden","leading":6,"height":40,"fontSize":25,"color":"#666666"}},{"type":"Image","props":{"y":6,"x":430,"width":57,"height":44}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}