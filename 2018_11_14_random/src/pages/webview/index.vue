<template>

  <div class="container">
    <web-view :src='jumpUrl'></web-view>
  </div>


</template>

<script>
// import ExchangeData from '../../logic/ExchangeData'
// import BackendManager from '../../logic/BackendManager'

export default {
  data () {
    return {
      jumpUrl: 'http://campaign.realh5.cn/_test2018/testcopy/testcopy.html'
    }
  },
  created () {

  },
  onLoad: function (options) {
    // 数据初始化--reLaunch,redirectTo,navigateTo导致的页面卸载并不会卸载data数据
    console.log('onLoad:', options, this.motto, this.motto2)
  },
  onShow: function () {
    console.log('onShow')
  },
  onHide: function () {
    console.log('onHide')
  },
  onUnload: function () {
    console.log('onUnload')
  },
  onPullDownRefresh: function () {
    console.log('用户下拉刷新')
  },
  onReachBottom: function () {
    console.log('上拉触底')
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {

  },

  methods: {

  }
}
</script>

<style>

.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffe5ea;
  position: absolute;
}
.motto{
  margin: 100rpx auto;
}
.motto2{
   margin: 300rpx auto;
}
</style>
