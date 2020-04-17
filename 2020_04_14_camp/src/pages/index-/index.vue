<template>

<div id="container">
  <img class="index_bg" :src='img.index_bg'>

  <div id="main">
    <img class="p1_t1" :src='img.p1_t1'>
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
        p1_t1: ExchangeData.getPath('/static/index/p1_t1.png')
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

  methods: {

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
</style>
