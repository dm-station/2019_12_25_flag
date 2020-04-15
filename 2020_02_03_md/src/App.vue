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
    wx.getSystemInfo({
      success: (res) => {
        console.log(res.statusBarHeight, 44 + res.statusBarHeight)
        ExchangeData.statusBarHeight = res.statusBarHeight
        let isiOS = res.system.indexOf('iOS') > -1
        if (!isiOS) {
          ExchangeData.navBarHeight = 48
        } else {
          ExchangeData.navBarHeight = 44
        }

        // this.globalData.statusBarHeight = res.statusBarHeight
        // this.globalData.navBarHeight = 44 + res.statusBarHeight
      }
    })
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
#main{
  width: 100%;
  height: 100%;
  /* background: #fff; */
  text-align: center;
}
.none{
  display: none;
}
.abs {
  position: absolute;
  top: 0;
}
.left{
  float: left;
}
.right{
  float: right;
}
image{
  display: block;
}
*{
  font-family: Arial;
  -webkit-overflow-scrolling: touch;
}
button::after{ border: none;}
/* 去除输入框最小高度 */
input, button, select, textarea {
  min-height:auto;
}
</style>
