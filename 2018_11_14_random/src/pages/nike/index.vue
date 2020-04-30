<template>

  <view class="bg" id="conter">
    <video v-if="showVideo" id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" controls></video>
  
    <img @click="open" :src='nike' alt="">
    <img @click="open" :src='nike' alt="">
    <img @click="open" :src='nike' alt="">
    <img @click="opens" :src='nike' alt="">
    <img class="copy" :src='copy' alt="">
  </view>


</template>

<script>
// import ExchangeData from '../../logic/ExchangeData'

export default {
  data () {
    return {
      motto: 'Hello ，拒绝强迫症！',
      nike: '/static/nike/nike.jpg',
      copy: '/static/nike/maidong.png',
      showVideo: true
    }
  },
  // 调用应用实例的方法获取全局数据
  created () {

  },
  // 生命周期函数--监听页面加载--一个页面只会调用一次
  onLoad: function (options) {
    let now = new Date()

    let month = now.getMonth() + 1 // 月(0-11)
    console.log('month', month)
    month > 4 ? this.showVideo = true : this.showVideo = false
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function (res) {

  },
  // 生命周期函数--监听页面显示--每次打开页面都会调用一次
  onShow: function () {

  },

  // 生命周期函数--监听页面隐藏
  onHide: function () {

  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {

  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  // 用户点击右上角分享
  onShareAppMessage: function (res) {

  },

  methods: {
    open () {
      wx.navigateToMiniProgram({
        appId: 'wx91d27dbf599dff74',
        path: 'pages/item/detail/detail?sku=100008348542',
        extraData: {
          foo: 'bar'
        },
        envVersion: '',
        success (res) {
          // 打开成功
        }
      })
    }
  }
}
</script>

<style scoped>
  #conter img{
    width: 100%;
    height: 270rpx;
    margin-top: 10rpx;
  }
  #conter .copy{
    width: 430rpx;
    height: 430rpx;
    margin-bottom: 30rpx;
  }
  #myVideo{
    width: 100%;
    height: 424rpx;
  }
</style>
