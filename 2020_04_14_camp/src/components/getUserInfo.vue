<template>
  <div class="infoBox">
    <button class="infoBtn" :style="{opacity:opacity}" type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">123</button>
  </div>
</template>

<script>
import ExchangeData from '../logic/ExchangeData'
export default {
  props: ['opacity'],
  data () {
    return {
      statusBarHeight: ExchangeData.statusBarHeight,
      navBarHeight: ExchangeData.navBarHeight
    }
  },
  methods: {
    // 授权成功
    getUserInfo (e) {
      if (e.mp.detail.userInfo) {
        ExchangeData.setUserInfo(e.mp.detail.userInfo)
        console.log('授权成功', e.mp.detail.userInfo)
        this.$emit('get-info', 'success')
        // 获取经纬度
        // wx.getLocation({
        //   type: 'wgs84',
        //   success (res) {
        //     console.log('----------')
        //   }
        // })
      }
    }
  }
}
</script>

<style>
.infoBox{
  position: absolute;
  top: 0;
}
.infoBox,.infoBtn{
  width: 100%;
  height: 100%;
}

</style>
