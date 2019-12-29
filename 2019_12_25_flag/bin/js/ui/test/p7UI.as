/**Created by the LayaAirIDE,do not modify.*/
package ui.test {
	import laya.ui.*;
	import laya.display.*; 

	public class p7UI extends View {
		public var name:Label;
		public var photo:Image;
		public var p7_num1:Image;
		public var p7_num2:Image;
		public var p7_num3:Image;
		public var p7_num4:Image;
		public var p7_num5:Image;
		public var p7_num:Image;
		public var p7_t1:Label;
		public var p7_t2:Label;
		public var p7_t3:Label;
		public var p7_t4:Label;
		public var p7_t5:Label;
		public var p7_t6:Label;
		public var p7_btn1:Image;
		public var p7_btn2:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":750,"height":1500},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/p6_bg.jpg"}},{"type":"Image","props":{"y":612,"x":30,"skin":"p7/p7_bg1.png","alpha":0.1}},{"type":"Label","props":{"y":371,"x":359,"width":160,"var":"name","text":"鹿憨憨","styleSkin":"loading/label.png","height":47,"fontSize":45,"font":"SimSun","color":"#333333"}},{"type":"Image","props":{"y":387,"x":231,"skin":"p7/p7_t1.png"}},{"type":"Image","props":{"y":206,"x":299,"width":153,"var":"photo","skin":"p6/p6_photo.png","height":153},"child":[{"type":"Image","props":{"y":0,"x":0,"width":153,"skin":"p6/p6_mask.png","renderType":"mask","height":153}}]},{"type":"Image","props":{"y":206,"x":299,"skin":"p6/p6_photo_bg.png"}},{"type":"Image","props":{"y":513,"x":119,"skin":"p7/p7_bg2.png"}},{"type":"Image","props":{"y":579,"x":146,"var":"p7_num1","skin":"p7/p7_num1.png"}},{"type":"Image","props":{"y":665,"x":146,"var":"p7_num2","skin":"p7/p7_num2.png"}},{"type":"Image","props":{"y":751,"x":146,"var":"p7_num3","skin":"p7/p7_num3.png"}},{"type":"Image","props":{"y":836,"x":146,"var":"p7_num4","skin":"p7/p7_num4.png"}},{"type":"Image","props":{"y":924,"x":146,"var":"p7_num5","skin":"p7/p7_num5.png"}},{"type":"Image","props":{"y":1008,"x":146,"var":"p7_num","skin":"p7/p7_num6.png"}},{"type":"Label","props":{"y":589,"x":267,"width":315,"var":"p7_t1","text":"实现人生第一个全马","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":676,"x":267,"width":315,"var":"p7_t2","text":"健身房每周至少打卡三次","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":761,"x":267,"width":315,"var":"p7_t3","text":"走出国门，挑战外国马拉松","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":846,"x":267,"width":315,"var":"p7_t4","text":"买专业䨻跑鞋，跑得更快","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":933,"x":267,"width":315,"var":"p7_t5","text":"每年都参加马拉松，跑到80岁！ ","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Label","props":{"y":1019,"x":267,"width":315,"var":"p7_t6","text":"拔草李宁全套最新款跑训产品 ","styleSkin":"loading/label.png","height":47,"fontSize":25,"font":"SimSun","color":"#333333"}},{"type":"Image","props":{"y":1138,"x":120,"var":"p7_btn1","skin":"p7/p7_btn1.png"}},{"type":"Image","props":{"y":1138,"x":412,"var":"p7_btn2","skin":"p7/p7_btn2.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}