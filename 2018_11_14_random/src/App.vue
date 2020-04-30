<script>

import ExchangeData from './logic/ExchangeData'

export default {
  created () {
    // 调用API从本地缓存中获取数据
    ExchangeData.userInfo = wx.getStorageSync('userInfo') || null
    ExchangeData.fromShare = wx.getStorageSync('fromShare') || null
    console.log('SDKVersion', wx.getSystemInfoSync().SDKVersion)
    console.log('userInfo', ExchangeData.userInfo)
  }
}
</script>

<style>
/* .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} */
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

#container{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #F8F8F8;
  position: absolute;
}
.none{
  display: none;
}
.block{
  display: block;
}
.abs {
  position: absolute;
  top: 0;
}
.rel {
  position: relative;
  top: 0;
}
.left{
  float: left;
}
.right{
  float: right;
}
.hide{
  overflow: hidden;
}
.show{
  overflow-y: auto;
}
/* ios滚动回弹效果 */
* {
    -webkit-overflow-scrolling: touch;
}
/* 解决图片img和div下方的缝隙问题 */
image{
  display: block;
}
/* 必须指定一个字体，否则安卓机数字类型会跟随手机设定字体执行 */
*{
  font-family: Microsoft YaHei,Arial;
}
/* ios点击闪屏 */
*{
    -webkit-tap-highlight-color:transparent;
}
/* 去除小程序button边框 */
button::after{ border: none;}
</style>
