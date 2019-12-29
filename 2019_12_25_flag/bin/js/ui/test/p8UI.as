/**Created by the LayaAirIDE,do not modify.*/
package ui.test {
	import laya.ui.*;
	import laya.display.*; 

	public class p8UI extends View {
		public var name:Label;
		public var p8_t1:Image;
		public var photo:Image;
		public var p7_n1:Image;
		public var p7_n2:Image;
		public var p7_n3:Image;
		public var p7_n4:Image;
		public var p7_n5:Image;
		public var p7_n6:Image;
		public var p7_t1:Label;
		public var p7_t2:Label;
		public var p7_t3:Label;
		public var p7_t4:Label;
		public var p7_t5:Label;
		public var p7_t6:Label;
		public var p8_save:Image;
		public var p8_saves:Image;
		public var p6_logo:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Image","props":{"y":612,"x":30,"skin":"p7/p7_bg1.png","alpha":0.1}},{"type":"Label","props":{"y":216,"x":372,"width":226,"var":"name","text":"鹿憨憨","styleSkin":"loading/label.png","height":47,"fontSize":45,"font":"SimSun","color":"#333333"}},{"type":"Image","props":{"y":204,"x":262,"var":"p8_t1","skin":"p8/p8_t1.png"}},{"type":"Image","props":{"y":227,"x":121,"width":153,"var":"photo","skin":"p6/p6_photo.png","height":153},"child":[{"type":"Image","props":{"y":0,"x":0,"width":153,"skin":"p6/p6_mask.png","renderType":"mask","height":153}}]},{"type":"Image","props":{"y":227,"x":121,"skin":"p6/p6_photo_bg.png"}},{"type":"Image","props":{"y":428,"x":119,"skin":"p7/p7_bg2.png"}},{"type":"Image","props":{"y":494,"x":146,"var":"p7_n1","skin":"p7/p7_num1.png"}},{"type":"Image","props":{"y":580,"x":146,"var":"p7_n2","skin":"p7/p7_num2.png"}},{"type":"Image","props":{"y":666,"x":146,"var":"p7_n3","skin":"p7/p7_num3.png"}},{"type":"Image","props":{"y":751,"x":146,"var":"p7_n4","skin":"p7/p7_num4.png"}},{"type":"Image","props":{"y":839,"x":146,"var":"p7_n5","skin":"p7/p7_num5.png"}},{"type":"Image","props":{"y":923,"x":146,"var":"p7_n6","skin":"p7/p7_num6.png"}},{"type":"Label","props":{"y":504,"x":267,"width":315,"var":"p7_t1","text":"实现人生第一个全马","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":591,"x":267,"width":315,"var":"p7_t2","text":"健身房每周至少打卡三次","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":676,"x":267,"width":315,"var":"p7_t3","text":"走出国门，挑战外国马拉松","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":761,"x":267,"width":315,"var":"p7_t4","text":"买专业䨻跑鞋，跑得更快","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":848,"x":267,"width":315,"var":"p7_t5","text":"每年都参加马拉松，跑到80岁！ ","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":934,"x":267,"width":315,"var":"p7_t6","text":"拔草李宁全套最新款跑训产品 ","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Image","props":{"y":1055,"x":119,"skin":"p8/p8_copy.png"}},{"type":"Image","props":{"y":1101,"x":326,"var":"p8_save","skin":"p8/p8_save.png"}},{"type":"Image","props":{"y":1065,"x":291,"var":"p8_saves","skin":"p8/p8_saves.png"}},{"type":"Image","props":{"y":1301,"x":286,"var":"p6_logo","skin":"p6/p6_logo.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}