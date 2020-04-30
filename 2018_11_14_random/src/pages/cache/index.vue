<template>

  <div class="container">

    <img class="cache" :src="cache" alt="">

    <img class="cache2" :src="cache2" alt="">
  </div>


</template>

<script>
// import ExchangeData from '../../logic/ExchangeData'
// import BackendManager from '../../logic/BackendManager'

export default {
  data () {
    return {
      cache: 'https://cdn.campaign.realh5.cn/2020/rice/static/ar/cache.png',
      cache2: 'https://cdn.campaign.realh5.cn/2020/rice/static/ar/cache2.png'
    }
  },
  created () {

  },
  onLoad: function (options) {

  },
  onShow: function () {
    console.log('onShow', this.cache)
  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

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
.cache{
  width: 750rpx;
  height: 800rpx;
}
.cache2{
  margin-top: 30rpx;
  width: 750rpx;
  height: 600rpx;
}
</style>
