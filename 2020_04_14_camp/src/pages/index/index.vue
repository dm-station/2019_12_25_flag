<template>

<div id="container" :class="[stage.stageHeight>1400 ? 'vf' : 'sf']">
  <img class="index_bg" :src='img.index_bg'>

  <div id="main">
    <img class="p1_t1" :src='img.p1_t1'>
    <img class="p1_t2" :src='img.p1_t2'>
    <img class="p1_body" :src='img.p1_body'>
    <img class="p1_btn" :src='img.p1_btn' @click="test">
    <!-- <button class="info_btn" open-type="getUserInfo" @getuserinfo="getUserInfo"></button> -->
    
    <div class="jion" @click="join">
      <p>直接入营{{stage.stageHeight}}</p>
       <getUserInfo @get-info='getUserInfoSuccess' :opacity='0.1'></getUserInfo>
    </div>

    <!-- <button class="getPhoneNumber" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button> -->
    
  </div>

  
</div>
  
</template>

<script>
import ExchangeData from '../../logic/ExchangeData'
import getUserInfo from '../../components/getUserInfo'

export default {
  data () {
    return {
      motto: '',
      img: {
        index_bg: ExchangeData.getPath('/static/index/p1_bg.jpg'),
        p1_t1: ExchangeData.getPath('/static/index/p1_t1.png'),
        p1_t2: ExchangeData.getPath('/static/index/p1_t2.png'),
        p1_body: ExchangeData.getPath('/static/index/p1_body.png'),
        p1_btn: ExchangeData.getPath('/static/index/p1_btn.png')
      },
      stage: ExchangeData.stage
    }
  },
  components: {
    getUserInfo
  },
  onReady: function (res) {
  },
  onLoad: function () {
  },
  onShow: function () {
  },

  onShareAppMessage: function (res) {
    return {
      title: '全新脉动 畅享美味',
      imageUrl: '/static/share.jpg'
    }
  },

  methods: {
    test (e) {
      ExchangeData.showToast('敬请期待')
    },
    join () {
      // 线上流程---按钮隐藏
      // 线下流程---登录，获取昵称，跳转打卡页
      // ExchangeData.showToast('直接入营')
      // wx.navigateTo({url: '../camp/main'})

    },
    getPhoneNumber (e) {
      // 获取手机号
      console.log(e.detail.errMsg)
      console.log(e.detail.iv)
      console.log(e.detail.encryptedData)
    },
    getUserInfoSuccess (value) {
      ExchangeData.selected = 'camp'
      wx.navigateTo({url: '../camp/main'})
    }
  }
}
</script>

<style scoped>

  #main{
    width: 100%;
    position: absolute;
    top: 0;
  }
  .index_bg{
    width: 750rpx;
    height: 1484rpx;
    position: absolute;
  }
  .p1_t1{
    width: 471rpx;
    height: 75rpx;
    margin: 22rpx 0 0 153rpx;
  }
  .p1_t2{
    width: 612rpx;
    height: 289rpx;
    margin: 12rpx 0 0 60rpx;
  }
  .p1_body{
    width: 750rpx;
    height: 659rpx;
    margin: 34rpx 0 0 0;
  }
  .p1_btn{
    width: 483rpx;
    height: 96rpx;
    margin: 108rpx 0 0 133rpx;
  }
  .jion{
    width: 483rpx;
    height: 96rpx;
    margin: 30rpx auto 0;
    position: relative;
  }

  .vf{
    overflow: hidden;
  }
  .sf{
    overflow: auto;
  }

  .getPhoneNumber{
    width: 500rpx;
    height: 200rpx;
    background: red;
  }
 
</style>
