<template>
  <view id="welfare">
    <img class="welfare_bg" :src='img.welfare_bg'>

    <div class="welfare_box">
      <img class="welfare1" :src='img.welfare1'>
      <img class="welfare1" :src='img.welfare1'>
    </div>
    
    <img class="welfare_icon" :src='img.welfare_icon'>
  </view>
</template>

<script>
import ExchangeData from '@/logic/ExchangeData'
export default {

  props: ['select'],

  data () {
    return {
      img: {
        welfare_bg: ExchangeData.getPath('/static/welfare/welfare_bg.png'),
        welfare_icon: ExchangeData.getPath('/static/welfare/welfare_icon.png'),
        welfare1: ExchangeData.getPath('/static/welfare/welfare1.png')
      },
      selectIndex: '01'
    }
  },

  onLoad () {
    this.selectIndex = this.select
  },
  onShow () {
    console.log('onShow----------------------------------------')
  },

  methods: {
    onCancel () {
      this.$emit('styleClose', this.select)
    }
  }
}
</script>

<style scoped>
#welfare {
    position: relative;
}
.welfare_bg{
  width: 750rpx;
  height: 1071rpx;
  position: absolute;
  top: -150rpx;
  z-index: -1;
}
.welfare_icon{
  width: 601rpx;
  height: 636rpx;
  position: absolute;
  top: 89rpx;
  left: 60rpx;
}
.welfare_box{
  padding-top: 129px;
  margin-left: 12px;
}
.welfare1{
  width: 704rpx;
  height: 317rpx;
}
</style>
