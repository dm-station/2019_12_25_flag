/**Created by the LayaAirIDE,do not modify.*/
package ui.test {
	import laya.ui.*;
	import laya.display.*; 

	public class p3UI extends View {
		public var p3_box1:Box;
		public var p3_t1:Image;
		public var p3_t2:Image;
		public var p3_t4:Image;
		public var p3_btn:Image;
		public var p3_box2:Box;
		public var p3s_t1:Image;
		public var p3s_heart1:Image;
		public var p3s_heart2:Image;
		public var p3s_t2:Image;
		public var p3s_t4:Image;
		public var p3s_btn:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p3_box1","height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3_bg.jpg"}},{"type":"Image","props":{"y":456,"x":14,"width":691,"var":"p3_t1","skin":"p3/p3_t1.png","pivotY":230,"pivotX":-15,"height":181}},{"type":"Image","props":{"y":655,"x":541,"width":194,"var":"p3_t2","skin":"p3/p3_t2.png","pivotY":109,"pivotX":58,"height":97}},{"type":"Image","props":{"y":825,"x":81,"var":"p3_t4","skin":"p3/p3_t4.png"}},{"type":"Image","props":{"y":1310,"x":376,"width":169,"var":"p3_btn","skin":"p2/p2_btn.png","pivotY":57,"pivotX":88,"height":108}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"p3_box2","height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p3s_bg.jpg"}},{"type":"Image","props":{"y":433,"x":10,"var":"p3s_t1","skin":"p3/p3s_t1.png","pivotY":200,"pivotX":-20}},{"type":"Image","props":{"y":588,"x":475,"var":"p3s_heart1","skin":"p3/p3s_heart1.png"}},{"type":"Image","props":{"y":605,"x":504,"var":"p3s_heart2","skin":"p3/p3s_heart2.png"}},{"type":"Image","props":{"y":610,"x":533,"width":190,"var":"p3s_t2","skin":"p3/p3s_t2.png","pivotY":105,"pivotX":79,"height":93}},{"type":"Image","props":{"y":874,"x":61,"var":"p3s_t4","skin":"p3/p3_t4.png"}},{"type":"Image","props":{"y":1318,"x":375,"width":227,"var":"p3s_btn","skin":"p2/p2s_btn.png","pivotY":65,"pivotX":112,"height":108}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}