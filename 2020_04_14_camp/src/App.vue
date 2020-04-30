<script>
import ExchangeData from './logic/ExchangeData'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
    // 调用API从本地缓存中获取数据
    ExchangeData.userInfo = wx.getStorageSync('userInfo') || null
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
#container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  background: #d9ebf7;
}
page {
  background-color: #F8F8F8;
  height: 100%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

.abs {
  position: absolute;
  top: 0;
}
.none{display: none; }
.fl{float: left;}
.fr{float: right;}
.clear{ clear:both}
.po{pointer-events: none;}
image{display: block;}
/* 原地翻转180 */
.sknw{
  transform: rotate(180deg);
}
*{
  /* 必须指定一个字体，否则安卓机数字类型会跟随手机设定字体执行，导致宽窄不一 */
  font-family: Arial;
  /* ios滚动回弹效果 */
  -webkit-overflow-scrolling: touch;
  /* ios点击闪屏 */
  -webkit-tap-highlight-color:transparent;
}
/* 去除button边框 */
button::after{ border: none;}
/* 去除输入框最小高度 */
input, button, select, textarea {
  min-height:auto;
}

/* 动画 */
/* opacity: 0;
animation: flipInX 0.8s linear 1 forwards 0.3s; */
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    opacity: 1;
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
/* 单行超出省略号 */
.ellipsis{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/* 多行超出省略号 */
.ellipsis3{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
