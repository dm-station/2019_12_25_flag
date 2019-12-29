/**Created by the LayaAirIDE,do not modify.*/
package ui.test {
	import laya.ui.*;
	import laya.display.*; 

	public class loadUI extends View {
		public var load_photo:Image;
		public var percent:Label;
		public var load_prg1:Image;
		public var load_prg2:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/load_bg.jpg"}},{"type":"Image","props":{"y":836,"x":113,"skin":"loading/load_t1.png"}},{"type":"Image","props":{"y":613,"x":334,"var":"load_photo","skin":"loading/load_photo.png"}},{"type":"Label","props":{"y":766,"x":321,"width":108,"var":"percent","text":"0%","styleSkin":"loading/label.png","height":23,"fontSize":22,"color":"#ffffff","bold":true,"align":"center"}},{"type":"Image","props":{"y":740,"x":114,"var":"load_prg1","skin":"loading/load_prg1.png"}},{"type":"Image","props":{"y":740,"x":114,"var":"load_prg2","skin":"loading/load_prg2.png","scaleX":0}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}