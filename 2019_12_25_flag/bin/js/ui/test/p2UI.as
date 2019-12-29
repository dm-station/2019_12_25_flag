/**Created by the LayaAirIDE,do not modify.*/
package ui.test {
	import laya.ui.*;
	import laya.display.*; 

	public class p2UI extends View {
		public var p2_box1:Box;
		public var p2_t1:Image;
		public var p2_t2:Image;
		public var p2_t4:Image;
		public var p2_star:Image;
		public var p2_star2:Image;
		public var p2_btn:Image;
		public var hand1:Panel;
		public var p2_hand1:Image;
		public var p2_hand2:Image;
		public var p2_box2:Box;
		public var p2s_t1:Image;
		public var p2s_t2:Image;
		public var p2s_hand2:Image;
		public var p2s_t4:Image;
		public var p2s_btn:Image;
		public var hand1s:Panel;
		public var p2s_hand1:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p2_bg.jpg"}},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p2_box1","height":1500},"child":[{"type":"Image","props":{"y":458,"x":17,"width":628,"var":"p2_t1","skin":"p2/p2_t1.png","pivotY":242,"pivotX":-41,"height":218}},{"type":"Image","props":{"y":493,"x":99,"skin":"p2/p2_photo.png"}},{"type":"Image","props":{"y":662,"x":215,"width":194,"var":"p2_t2","skin":"p2/p2_t2.png","pivotY":115,"pivotX":154,"height":97}},{"type":"Image","props":{"y":1105,"x":51,"var":"p2_t4","skin":"p2/p2_t4.png"}},{"type":"Image","props":{"y":616,"x":600,"width":36,"var":"p2_star","skin":"p2/p2_star.png","pivotY":24,"pivotX":23,"height":43}},{"type":"Image","props":{"y":714,"x":177,"width":36,"var":"p2_star2","skin":"p2/p2_star2.png","pivotY":23,"pivotX":18,"height":42}},{"type":"Image","props":{"y":1305,"x":377,"width":169,"var":"p2_btn","skin":"p2/p2_btn.png","pivotY":52,"pivotX":89,"height":108}},{"type":"Panel","props":{"y":581,"x":730,"width":114,"var":"hand1","pivotY":71,"pivotX":111,"height":100},"child":[{"type":"Image","props":{"y":0,"x":0,"width":114,"var":"p2_hand1","skin":"p2/p2_hand1.png","height":90}}]},{"type":"Image","props":{"y":955,"x":40,"width":95,"var":"p2_hand2","skin":"p2/p2_hand2.png","pivotY":84,"pivotX":28,"height":120}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p2_box2","height":1500},"child":[{"type":"Image","props":{"y":522,"x":85,"width":700,"var":"p2s_t1","skin":"p2/p2s_t1.png","pivotY":285,"pivotX":60,"height":176}},{"type":"Image","props":{"y":636,"x":237,"width":190,"var":"p2s_t2","skin":"p2/p2s_t2.png","pivotY":93,"pivotX":143,"height":93}},{"type":"Image","props":{"y":535,"x":87,"skin":"p2/p2s_photo.png"}},{"type":"Image","props":{"y":907,"x":17,"width":80,"var":"p2s_hand2","skin":"p2/p2s_hand2.png","pivotY":55,"pivotX":2,"height":130}},{"type":"Image","props":{"y":1105,"x":55,"var":"p2s_t4","skin":"p2/p2_t4.png"}},{"type":"Image","props":{"y":1307,"x":376,"width":227,"var":"p2s_btn","skin":"p2/p2s_btn.png","pivotY":55,"pivotX":114,"height":108}},{"type":"Panel","props":{"y":505,"x":730,"width":94,"var":"hand1s","pivotY":14,"pivotX":90,"height":100},"child":[{"type":"Image","props":{"var":"p2s_hand1","skin":"p2/p2s_hand1.png"}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}