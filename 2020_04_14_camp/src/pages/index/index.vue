<template>

<div id="container" :class="[stage.stageHeight>1400 ? 'vf' : 'sf']">
  <img class="index_bg" :src='img.index_bg'>

  <div id="main">
    <img class="p1_t1" :src='img.p1_t1'>
    <img class="p1_t2" :src='img.p1_t2'>
    <img class="p1_body" :src='img.p1_body'>
    <img class="p1_btn" :src='img.p1_btn' @click="test">
    <p @click="join" style="margin-top:30rpx">{{stage.stageHeight}}</p>
  </div>

  
</div>
  
</template>

<script>
import ExchangeData from '../../logic/ExchangeData'

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
  },
  onReady: function (res) {

  },
  onLoad: function () {

  },
  onShareAppMessage: function (res) {
    return {
      title: '全新脉动 畅享美味',
      imageUrl: '/static/share.jpg'
    }
  },

  methods: {
    test (e) {
      ExchangeData.showToast('儿童成长测试')
    },
    join () {
      ExchangeData.showToast('直接入营')
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

  .vf{
    overflow: hidden;
  }
  .sf{
    overflow: auto;
  }
</style>
