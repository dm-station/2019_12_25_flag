<template>
<div id="main">
  
  <div class="banner">
    
    <img class="index_bg" :src='img.index_bg' alt="">
    <card :text="motto"></card>

    <img class="slide-banner" :src='bannerUrls[0]' alt="">
    <!-- <div class="slide-box">
      <swiper class="slide-banner" :indicator-dots='dots' :autoplay='autoplay' :circular='circular' :interval='banInterval' @change="bannerChange">
        <block v-for="(item, index) in bannerUrls" v-bind:key="index">
          <swiper-item>
            <image class="slide-banner" :src="item" mode="aspectFill"/>
          </swiper-item>
        </block>
      </swiper>

      <view class="dots_banner">  
          <block v-for="(item, index) in bannerUrls" v-bind:key="index"> 
              <view class="dot" v-bind:class="[index == bannerSwiper ? ' active' : '']"></view>
          </block>  
      </view>
    </div> -->

    <div id="video">
      <video id="myVideo" src="https://cdn.campaign.realh5.cn/2020/maidong/video.mp4"></video>
      <img :hidden='isPoster' class="poster" :src="img.poster" alt="">
      <img :hidden='isPoster' class="start" :src="img.start" @click="start">
    </div>

    <img class="rtb" :src="img.rtb" alt="">

    <div class="slide-box">
      <swiper class="slide-img" :indicator-dots='dots' :autoplay='autoplay' :circular='circular' :interval='interval' @change="imgChange">
        <block v-for="(item, index) in imgUrls" v-bind:key="index">
          <swiper-item>
            <image class="slide-img" :src="item" width="375" height='516' mode="aspectFill"/>
          </swiper-item>
        </block>
      </swiper>

      <view class="dots">  
          <block v-for="(item, index) in imgUrls" v-bind:key="index"> 
              <view class="dot" v-bind:class="[index == currentSwiper ? ' active' : '']"></view>
          </block>  
      </view>
    
    </div> 

    <div>
      <img class="buy_bg" :src="img.buy_bg" alt="">
      <img class="buy" :src="img.buy" @click="buy">
    </div>

    <div id="follow">
      <official-account :hidden='isFollow'></official-account>
    </div>
    
  </div>
  
</div>
  
</template>

<script>
import ExchangeData from '../../logic/ExchangeData'
import card from '@/components/card'

export default {
  data () {
    return {
      motto: '',
      img: {
        index_bg: ExchangeData.getPath('/static/index/index_bg.jpg'),
        poster: ExchangeData.getPath('/static/index/poster.png'),
        start: ExchangeData.getPath('/static/index/start.png'),
        rtb: ExchangeData.getPath('/static/index/rtb.jpg'),
        buy_bg: ExchangeData.getPath('/static/index/buy_bg.jpg'),
        buy: ExchangeData.getPath('/static/index/buy.png')
      },
      dots: false,
      autoplay: true,
      circular: true,
      banInterval: 3000,
      interval: 2000,
      bannerSwiper: 0, // 记录指示点id
      currentSwiper: 0, // 记录指示点id
      bannerUrls: [
        ExchangeData.getPath('/static/index/banner1.jpg')
        // ExchangeData.getPath('/static/index/banner2.jpg')
      ],
      imgUrls: [
        ExchangeData.getPath('/static/index/slide1.jpg'),
        ExchangeData.getPath('/static/index/slide2.jpg'),
        ExchangeData.getPath('/static/index/slide3.jpg'),
        ExchangeData.getPath('/static/index/slide4.jpg'),
        ExchangeData.getPath('/static/index/slide5.jpg'),
        ExchangeData.getPath('/static/index/slide6.jpg')
      ],
      videoContext: '',
      isPoster: false,
      isFollow: true
    }
  },
  components: {
    card
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onLoad: function () {
    this.isFollow = true
    wx.setNavigationBarTitle({
      title: ''
    })
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('onReachBottom')
    this.isFollow = false
  },
  onShareAppMessage: function (res) {
    return {
      title: '全新脉动 畅享美味',
      imageUrl: '/static/share.jpg'
    }
  },

  methods: {
    bannerChange (e) {
      this.bannerSwiper = e.mp.detail.current
    },
    imgChange (e) {
      this.currentSwiper = e.mp.detail.current
    },
    start () {
      console.log('播放视频')
      this.videoContext.play()
      this.isPoster = true
    },
    buy () {
      wx.navigateToMiniProgram({
        appId: 'wx91d27dbf599dff74',
        path: 'pages/shop/index/index?shopId=1000008983',
        success (res) {
          // 打开成功
          console.log('打开成功！')
        }
      })
    }
  }
}
</script>

<style scoped>
  .banner{
    /* background: url('/static/index/index_bg.jpg') no-repeat 0px 0px;
    background-size: cover;
    min-height:2270rpx;
    position:relative; */
    position: relative;
  }
  .index_bg{
    width: 100%;
    height: 300rpx;
    position: absolute;
    top: 0;
    z-index:-1;
  }
  h1{
    color: brown;
  }
  
  #video{
    margin-top: 0rpx;
    position: relative;
  }
  #myVideo{
    width: 750rpx;
    height: 437rpx;
    display: block;
  }
  .poster{
    width: 750rpx;
    height: 437rpx;
    /* margin-top: 87rpx; */
    position: absolute;
    top: 0;
  }
  .start{
    width: 148rpx;
    height: 148rpx;
    position: absolute;
    top: 158rpx;
    left: 300rpx;
  }
  .clear{
    clear:both;
  }
  .rtb{
    width: 750rpx;
    height: 1323rpx;
  }
  .slide-box{
    position: relative;
  }
  .slide-banner{
    width: 100%;
    height: 422rpx;
  }
   .slide-img{
    width: 100%;
    height: 1033rpx;
  }
  .buy_bg{
    width: 750rpx;
    height: 425rpx;
  }
  .buy{
    width: 186rpx;
    height: 80rpx;
    margin: -83rpx 0 0 281rpx;
  }
  .dots_banner{
    width: 750rpx;
    height: 36rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
  }

  /*用来包裹所有的小圆点  */
.dots {
  width: 750rpx;
  height: 36rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 80rpx;
}
/*未选中时的小圆点样式 */
.dot {
  width: 40rpx;
  height: 4rpx;
  background-color: #c6c4dc;
  margin-right: 15rpx;
}
/*选中以后的小圆点样式  */
.active {
  width: 40rpx;
  height: 4rpx;
  background-color: #10069f;
}
#follow{
  width: 724rpx;
  height: 180rpx;
  margin: 35rpx auto;
  text-align: left;
}
</style>
