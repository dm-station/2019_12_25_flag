<template>

  <div class="container">

    <div class="motto" @click="change">
      {{motto}}
    </div>

    <div class="motto2" @click="change2">
      {{motto2}}
    </div>

  </div>


</template>

<script>
// import ExchangeData from '../../logic/ExchangeData'
// import BackendManager from '../../logic/BackendManager'

export default {
  data () {
    return {
      motto: 'Hello World',
      motto2: ''
    }
  },
  created () {

  },
  onLoad: function (options) {
    // 数据初始化--reLaunch,redirectTo,navigateTo导致的页面卸载并不会卸载data数据
    this.motto = 'Hello World'
    this.motto2 = 'Hello'
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
    change (e) {
      console.log('change：', this.motto)
      this.motto = '我叫数据绑定！'
      wx.navigateTo({ url: '../index/main' })
    },
    change2 (e) {
      console.log('change2', this.motto2)
      this.motto2 = '我叫数据测试！'
      wx.redirectTo({ url: '../rotate/main' })
    }

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
