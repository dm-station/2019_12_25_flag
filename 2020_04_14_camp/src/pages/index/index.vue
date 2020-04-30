<template>

<div id="container">

  <div v-if="isHideRule" id="main">
    <img class="index_bg" :style="{top:poss.index_bg}" :src='img.index_bg'>

    <img class="p1_t1 abs" :style="{top:poss.p1_t1}" :src='img.p1_t1'>
    <img class="p1_t2 abs" :style="{top:poss.p1_t2}" :src='img.p1_t2'>
    <img class="p1_btn abs" :style="{top:poss.p1_btn}" :src='img.p1_btn' @click="test">
    <img class="p1_jion abs" :style="{top:poss.p1_jion}" :src='img.p1_jion' @click="join">

  </div>

  <div v-else id="rule">
    <img class="rule_on" :src='img.rule_on'>
    <div class="abs rule">
      <img class="rule_btn" :src='img.rule_btn' @click="rule_btn">
      <getUserInfo v-if="isGetUserInfo" @get-info='getUserInfoSuccess' :opacity='0.1'></getUserInfo>
    </div>
    
   
  </div>
  
  
  <!-- <getUserInfo @get-info='getUserInfoSuccess' :opacity='0.1'></getUserInfo> -->
  <!-- <button class="getPhoneNumber" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button> -->

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
        index_bg: ExchangeData.getPath('/static/index/index_bg.jpg'),
        p1_t1: ExchangeData.getPath('/static/index/p1_t1.png'),
        p1_t2: ExchangeData.getPath('/static/index/p1_t2.png'),
        p1_jion: ExchangeData.getPath('/static/index/p1_jion.png'),
        p1_btn: ExchangeData.getPath('/static/index/p1_btn.png'),
        rule_on: ExchangeData.getPath('/static/index/rule_on.jpg'),
        rule_btn: ExchangeData.getPath('/static/index/rule_btn.png')
      },
      isHideRule: true, // 是否隐藏活动规则
      stage: ExchangeData.stage,
      poss: {
        index_bg: 0,
        p1_t1: 31,
        p1_t2: 80,
        p1_btn: 972,
        p1_jion: 1012
      },
      isGetUserInfo: true
    }
  },
  components: {
    getUserInfo
  },
  onLoad: function () {
    console.log('stage', this.stage, ExchangeData.userInfo)
    // 适配
    for (const key in this.poss) {
      this.poss[key] = this.poss[key] * this.stage.scaleRateH + 'rpx'
    }
    this.poss.p1_jion = this.stage.stageHeight - 188 + 'rpx'
    this.poss.p1_btn = this.stage.stageHeight - 188 - 40 + 'rpx'

    // this.isGetUserInfo = !ExchangeData.userInfo
    console.log(this.isGetUserInfo, 'isGetUserInfo', ExchangeData.userInfo)
  },
  onShow: function () {
  },
  onReady: function (res) {
  },

  // onShareAppMessage: function (res) {
  //   return {
  //     title: '全新脉动 畅享美味',
  //     imageUrl: '/static/share.jpg'
  //   }
  // },

  methods: {
    test (e) {
      wx.navigateTo({url: '../test/main'})
    },
    join () { // 直接入营
      // 流程---跳转到规则页，授权用户信息和订阅消息
      this.isHideRule = false

      // wx.navigateTo({url: '../camp/main'})
    },
    rule_btn () {
      console.log('rule_btn')
    }
  }
}
</script>

<style scoped>

  #main{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
  }
  .index_bg{
    width: 750rpx;
    height: 1200rpx;
    position: absolute;
  }
  .p1_t1{
    width: 480rpx;
    height: 60rpx;
    left: 139rpx;
    top: 31rpx;
  }
  .p1_t2{
    width: 596rpx;
    height: 288rpx;
    left: 79rpx;
    top: 80rpx;
  }
  .p1_btn{
    width: 329rpx;
    height: 79rpx;
    left: 211rpx;
    top: 972rpx;
  }
  .p1_jion{
    width: 750rpx;
    height: 188rpx;
    top: 1012rpx;
  }
  .jion{
    width: 483rpx;
    height: 96rpx;
    margin: 30rpx auto 0;
    position: relative;
  }

  .rule_on{
    width: 750rpx;
    height: 1608rpx;
  }
  .rule{
    width: 207rpx;
    height: 80rpx;
    left: 271rpx;
    top: 1518rpx;
  }
  .rule_btn{
    width: 100%;
    height: 100%;
  }
 
</style>