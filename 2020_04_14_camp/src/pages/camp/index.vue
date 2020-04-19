<template>

<div id="container">

  <img class="camp" :src='img.camp'>
  <img class="camp" :src='img.campbg'>

  <div id="main">

    <swiper class="banner" :indicator-dots="swiper.indicatorDots" :indicator-color='swiper.indicatorColor' :autoplay='swiper.autoplay' 
    :indicator-active-color='swiper.activeColor' :circular='swiper.circular'>
      <block v-for="(item, index) in bannerUrls" v-bind:key="index">
          <swiper-item>
            <image class="slide-banner" :src="item" mode="aspectFill"/>
          </swiper-item>
        </block>
    </swiper>

    <div class="icon">
      <img class="icon_bg" :src='img.icon_bg'>
      <img class="icon1" :src='img.icon1'>
      <img class="icon2" :src='img.icon2'>
      <img class="icon3" :src='img.icon3'>
      <img class="icon4" :src='img.icon4'>
    </div>

    <div class="camp_box">
      <div class="pos_box">
        <img class="rule_btn" :src='img.rule_btn'>
        <img class="photo_bg" :src='img.photo_bg'>
        <img class="photo" :src='img.photo'>
        <p class="name">XXXX的宝宝</p>
        <img class="modify_btn" :src='img.modify_btn'>
      </div>

      <!-- 个人信息 -->
      <div class="calendar_info_box">
        <img class="calendar_info" :src='img.calendar_info'>
        <p>年龄：4岁</p>
        <p>体重：6.6kg</p>
        <p>身高：104cm</p>
      </div>

      <!-- 日历 -->
      <div class="calendar_box">
        <img class="calendar_bg" :src='img.calendar_bg'>
        <!-- 主题内容 -->
        <div class="calendar_content">
          <img class="calendar_title" :src='img.calendar_title'>
          <!-- 打卡统计 -->
          <div class="calendar_score">
            <p class="fl">你已入营01天</p>
            <p class="fr">完成01天打卡</p>
          </div>

          <!-- 选择月份 -->
          <div class="calendar_sel">
            <img class="calendar_left fl" :src='img.calendar_left'>
            <div class="sel_moneth fl">
              <div class="fl">
                <img class="month5" :src='img.month5'>
                <p class="month5_p">5月</p>
              </div>

              <div class="fl">
                <img class="month6" :src='img.month6'>
                <p class="month6_p">6月</p>
              </div>
            </div>
            <img class="calendar_right fr" :src='img.calendar_right'>
          </div>

          <!-- 日期 -->
          <div class="calendar_day">
            <div class="day_small">Su</div>
            <div class="day_small">Mo</div>
            <div class="day_small">Tu</div>
            <div class="day_small">We</div>
            <div class="day_small">Th</div>
            <div class="day_small">Fr</div>
            <div class="day_small">Sa</div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
            <div><img :src='img.calendar_selected'><p>1</p></div>
          </div>
    
          <!-- 礼品 -->
          <div class="calendar_gift">
            <img class="gift_bg" :src='img.gift_bg'>
            <img class="add" :src='img.add'>

            <div class="gift_box">
              <img class="gift" :src='img.gift2'>
              <img class="gift" :src='img.gift2'>
              <img class="gift" :src='img.gift2'>
              <img class="gift" :src='img.gift2'>
            </div>
            
          </div>

        </div>
        
      </div>

      <!-- 图表 -->
      <div id="chart">
        <img class="chart" :src='img.chart'>
        <div class="chart_box">
          <div>每日</div>
          <div>每月</div>
          <div>每周</div>
        </div>
      </div>


    </div>

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
        camp: ExchangeData.getPath('/static/camp/camp.jpg'),
        campbg: ExchangeData.getPath('/static/camp/campbg.jpg'),
        icon_bg: ExchangeData.getPath('/static/camp/icon_bg.png'),
        icon1: ExchangeData.getPath('/static/camp/icon1.png'),
        icon2: ExchangeData.getPath('/static/camp/icon2.png'),
        icon3: ExchangeData.getPath('/static/camp/icon3.png'),
        icon4: ExchangeData.getPath('/static/camp/icon4.png'),
        rule_btn: ExchangeData.getPath('/static/camp/rule_btn.png'),
        photo_bg: ExchangeData.getPath('/static/camp/photo_bg.png'),
        photo: ExchangeData.getPath('/static/camp/photo.png'),
        modify_btn: ExchangeData.getPath('/static/camp/modify_btn.png'),
        calendar_info: ExchangeData.getPath('/static/camp/calendar_info.png'),
        calendar_bg: ExchangeData.getPath('/static/camp/calendar_bg.png'),
        calendar_title: ExchangeData.getPath('/static/camp/calendar_title.png'),
        calendar_left: ExchangeData.getPath('/static/camp/calendar_left.png'),
        calendar_right: ExchangeData.getPath('/static/camp/calendar_right.png'),
        month5: ExchangeData.getPath('/static/camp/month5.png'),
        month6: ExchangeData.getPath('/static/camp/month6.png'),
        calendar_selected: ExchangeData.getPath('/static/camp/calendar_selected.png'),
        gift_bg: ExchangeData.getPath('/static/camp/gift_bg.png'),
        add: ExchangeData.getPath('/static/camp/add.png'),
        gift1: ExchangeData.getPath('/static/camp/gift1.png'),
        gift2: ExchangeData.getPath('/static/camp/gift2.png'),
        chart: ExchangeData.getPath('/static/camp/chart.png')

      },
      stage: ExchangeData.stage,
      swiper: {
        indicatorDots: true, // 是否显示面板指示点
        autoplay: true, // 是否自动切换
        indicatorColor: 'rgb(199, 199, 199)', // 指示点颜色
        activeColor: '#395ea2', // 当前选中的指示点颜色
        circular: true// 是否采用衔接滑动
      },
      bannerUrls: [
        ExchangeData.getPath('/static/camp/swiper1.png'),
        ExchangeData.getPath('/static/camp/swiper1.png'),
        ExchangeData.getPath('/static/camp/swiper1.png')
      ]
    }
  },
  components: {
  },
  onReady: function (res) {

  },
  onLoad: function () {
    this.img.photo = ExchangeData.getPath('/static/camp/calendar_left.png')
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
  .camp{
    width: 750rpx;
    height: 3693rpx;
    position: absolute;
  }
  .banner{
    width: 100%;
    height: 422rpx;
  }
  .slide-banner{
    width: 100%;
    height: 422rpx;
  }
  .icon{
    margin-top: -14rpx;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .icon_bg{
    width: 100%;
    height: 255rpx;
    position: absolute;
    z-index: -1;
  }
  .icon1,.icon2,.icon3,.icon4{
    width: 175rpx;
    height: 166rpx;
    margin-top: 38rpx;
  }
  .camp_box{
    /* position: relative; */
  }
  .pos_box{
    position: relative; 
  }
  .rule_btn{
    width: 142rpx;
    height: 80rpx;
    position: absolute;
    top: 53rpx;
    left: 32rpx;
  }
  .photo_bg{
    width: 541rpx;
    height: 529rpx;
    position: absolute;
    top: -50px;
    left: 111rpx;
  }
  .photo{
    width: 162rpx;
    height: 162rpx;
    position: absolute;
    top: 74rpx;
    left: 294rpx;
    border-radius: 50%;
  }
  .name{
    width: 418rpx;
    position: absolute;
    top: 262rpx;
    color: #214e9a;
    font-size: 22rpx;
    text-align: right;
  }
  .modify_btn{
    width: 80rpx;
    height: 80rpx;
    position: absolute;
    top: 230rpx;
    left: 411rpx;
  }
  .calendar_info_box{
    padding: 308rpx 70rpx 0;
  }
  .calendar_info{
    width: 602rpx;
    height: 53rpx;
    font-weight: bold;
  }
  .calendar_info_box p {
    font-size: 19rpx;
    color: #214e9a;
    float: left;
    width: 160rpx;
    padding-left: 36rpx;
    text-align: left;
    margin-top: -40rpx;
    height: 50rpx;
  }
  .calendar_box{
    /* background-image:url('/static/camp/calendar_bg.png'); */

  }
  .calendar_bg{
    width: 710rpx;
    height: 914rpx;
    margin-left: 20rpx;
    padding-top: 65px;
  }
  .calendar_content{
    margin-top: -1032rpx;
  }
  .calendar_title{
    width: 529rpx;
    height: 163rpx;
    margin: 0 auto;
    padding-top: 24rpx;
  }
  .calendar_score{
    width: 660rpx;
    margin: 20rpx auto 0;
    overflow: hidden;
  }
  .calendar_score p{
    width: 243rpx;
    height: 51rpx;
    color: #214e9a;
    background-color: #ecf7ff;
    font-size: 32rpx;
    border-radius: 34rpx;
  }

  .calendar_sel{
    overflow: hidden;
    width: 540rpx;
    margin: 27rpx auto 0;
  }
  .calendar_left{
    width: 80rpx;
    height: 80rpx;
  }
  .calendar_right{
    width: 80rpx;
    height: 80rpx;
  }
  .sel_moneth{
    padding-left: 52rpx;
    padding-top: 11rpx;
  }
  .month5,.month6{
    width: 135rpx;
    height: 64rpx;
  }
  .month5_p,.month6_p{
    font-size: 36rpx;
    float: left;
    width: 135rpx;
    height: 40rpx;
    margin-top: -67rpx;
    color: #ffffff;
    font-weight: bold;
    line-height: 64rpx;
  }
  .calendar_day{
    padding-top: 3rpx;
    padding-left: 44rpx;
    width: 700rpx;
    overflow: hidden;
  }
  .calendar_day div{
    float: left;
    width: 95rpx;
    height: 59rpx;
  }
  .calendar_day .day_small{
    font-size: 36rpx;
  }
  .calendar_day div img{
    width: 62rpx;
    height: 67rpx;
    margin-top: -7rpx;
    margin-left: 33rpx;
  }
  .calendar_day div p{
    color: #064d98;
    font-size: 46rpx;
    line-height: 60rpx;
    margin-top: -60rpx;
  }
  .day_color{
    color: #cea564;
  }

  .calendar_gift{
    overflow: hidden;
  }
  .gift_bg{
    width: 649rpx;
    height: 215rpx;
    margin: 30rpx 0 0 52rpx;
  }
  .add{
    width: 368rpx;
    height: 80rpx;
    margin-top: -188rpx;
    margin-left: 195rpx;
  }
  .gift_box{
    margin-top: 59rpx;
    margin-left: 35rpx;
  }
  .gift{
    width: 81rpx;
    height: 81rpx;
    float: left;
    margin-left: 36px;
  }

  .chart{
    width: 750rpx;
    height: 831rpx;
  }
  .chart_box{
    margin-top: -831rpx;
    width: 750rpx;
    height: 831rpx;
  }
  .chart_box div{
    width: 250rpx;
    float: left;
    height: 40rpx;
    border-radius: 20rpx;
  }
</style>
