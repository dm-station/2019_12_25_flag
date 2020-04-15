<template>
  <div>
    <view class='nav-wrap'>
      <view :style="{height:statusBarHeight+'px'}"></view>
      <view class='content' :style="{height:navBarHeight+'px'}">
        <p  :style="{lineHeight:navBarHeight+'px'}">{{text}}</p>
        <!-- <img class="nav_log abs" src="/static/index/nav_log.png" alt=""> -->
      </view>
  </view>
  <view :style="{height:statusBarHeight+navBarHeight+'px'}"></view>
  </div>
</template>

<script>
import ExchangeData from '../logic/ExchangeData'
export default {
  props: ['text'],
  data () {
    return {
      statusBarHeight: ExchangeData.statusBarHeight,
      navBarHeight: ExchangeData.navBarHeight
    }
  }
}
</script>

<style>

.nav-wrap {
    width: 750rpx;
    z-index: 1;
    /* background: pink; */
    position: fixed;
}

.content {
    width: 100%;
    text-align: center;
    position: relative;
}
.content p{
  height: 100%;
  line-height: 100%
}
.nav_log{
  width: 138rpx;
  height: 62rpx;
  position: absolute; 
  transform: translateY(-50%); 
  top: 50%; 
  display: flex;
}

</style>
