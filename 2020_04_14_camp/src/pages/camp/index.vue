<template>

<div id="container">

  <div id="main">
    
    <img class="camp" :src='img.camp'>
    <img v-if="selected=='welfare'" class="welfare" mode="widthFix" src='/static/welfare/welfare.jpg'>
    <!-- <img v-if="selected=='camp'" class="camp" :src='img.campbg'> -->

    <swiper class="banner" :indicator-dots="swiper.indicatorDots" :indicator-color='swiper.indicatorColor' :autoplay='swiper.autoplay' 
    :indicator-active-color='swiper.activeColor' :circular='swiper.circular'>
      <block v-for="(item, index) in bannerUrls" v-bind:key="index">
          <swiper-item>
            <image class="slide-banner" :src="item" mode="aspectFill"/>
          </swiper-item>
        </block>
    </swiper>

    <div id="icon">
      <div class="icon_cen">
        <img class="icon1" @click="icon('card')" :style="{opacity:selected=='card'?0.3:1}" :src='img.icon1'>
        <img class="icon2" @click="icon('camp')" :style="{opacity:selected=='camp'?0.3:1}" :src='img.icon2'>
        <img class="icon3" @click="icon('welfare')" :style="{opacity:selected=='welfare'?0.3:1}" :src='img.icon3'>
        <img class="icon4" @click="icon('test')" :style="{opacity:selected=='test'?0.3:1}" :src='img.icon4'>
      </div>
      <img class="icon_bg" :src='img.icon_bg'>
    </div>

    <div v-if="selected=='camp'" id="camp_box">
      <img class="rule_btn" :src='img.rule_btn'>
      <img class="photo_bg" :src='img.photo_bg'>
      <img class="photo" :src='img.photo'>

      <input class="name" :value='babyInfo.name' maxlength="10" placeholder-style="color:#214e9a" placeholder="请输入宝宝名字" @input="onNameChange"/>
      <p class="name1">的宝宝</p>
      <img class="modify_btn" :src='img.modify_btn'>

      <!-- 宝宝信息 -->
      <div id="baby_box">
        <img class="baby_info" :src='img.calendar_info'>
        <div class="inp">
          <p>年龄：</p>
          <input :value='babyInfo.age' maxlength="6" placeholder-style="color:#214e9a" placeholder="请输入宝宝年龄" @input="onNameChange"/>
          <p>岁</p>
        </div>

        <div class="inp">
          <p>体重：</p>
          <input :value='babyInfo.weight' maxlength="6" placeholder-style="color:#214e9a" placeholder="请输入宝宝年龄" @input="onNameChange"/>
          <p>kg</p>
        </div>

        <div class="inp">
          <p>身高：</p>
          <input :value='babyInfo.height' maxlength="6" placeholder-style="color:#214e9a" placeholder="请输入宝宝年龄" @input="onNameChange"/>
          <p>cm</p>
        </div>
        <div class="clear"></div>
      </div>

      <!-- 日历 -->
      <div id="calendar_box">
        <!-- 主题内容 -->
        <div class="calendar_content">
          <!-- 打卡统计 -->
          <div class="calendar_score">
            <p class="fl">你已入营01天</p>
            <p class="fr">完成01天打卡</p>
            <div class="clear"></div>
          </div>

          <!-- 选择月份 -->
          <div class="calendar_sel">
            <img class="calendar_left fl" :src='img.calendar_left'>
            <div class="sel_moneth fl">
              <div class="fl" @click="getMonth('5')">
                <img class="month5" :src='img.month5'>
                <p class="month5_p">5月</p>
              </div>

              <div class="fl" @click="getMonth('6')">
                <img class="month6" :src='img.month6'>
                <p class="month6_p">6月</p>
              </div>
            </div>
            <img class="calendar_right fr" :src='img.calendar_right'>
            <div class="clear"></div>
          </div>

          <!-- 日期 -->
          <div class="calendar_day">
            <div class="day_small">Mo</div>
            <div class="day_small">Tu</div>
            <div class="day_small">We</div>
            <div class="day_small">Th</div>
            <div class="day_small">Fr</div>
            <div class="day_small">Sa</div>
            <div class="day_small">Su</div>
            <!-- <div><img :src='img.calendar_selected'><p>1</p></div> -->
            <div v-for="(site, index) in dayArr" v-bind:key="index" @click="onClick(index,site)">
              <img :style="{opacity:site.signed?1:0}" :src='img.calendar_selected'><p class="color_gray" :class="{color_blue:site.sel,color_yellow:site.selected}">{{site.date}}</p>
            </div>
          </div>
          
          <!-- 点此加入新记录 -->
          <img class="add" :src='img.add'>
          <!-- 礼盒 -->
          <div class="gift_box">
            <img class="gift" :src='img.gift2'>
            <img class="gift" :src='img.gift2'>
            <img class="gift" :src='img.gift2'>
            <img class="gift" :src='img.gift2'>
          </div>

        </div>
        
        <img class="calendar_bg" :src='img.calendar_bg'>
      </div>

      <!-- 图表 -->
      <div id="chart" class="">
        <div class="chart_con">
          <div class="chart_cli">
            <div @click="chart('day')" :class="[selTime=='day'?'charted':'']">每日</div>
            <div @click="chart('month')" :class="[selTime=='month'?'charted':'']">每月</div>
            <div @click="chart('week')" :class="[selTime=='week'?'charted':'']">每周</div>
          </div>

          <p>平均标准：</p>
          <p class="chart_desc">{{babyInfo.name}}的宝宝：</p>
          <canvas canvas-id="myCanvas"></canvas>
        </div>
        <!-- 折线 -->
        
        <img class="chart" :src='img.chart'>
      </div>
      <!-- tips -->
      <div id="tips" class="">
        <img class="tips" :src='img.tips'>
        <img class="more" :src='img.more'>
        <img class="hand" :src='img.hand'>
        <img class="expert_logo" :src='img.expert_logo'>
      </div>
      <!-- 底部banner -->

      <div id="bottom" class="">
        <swiper class="bottom" :indicator-dots="swiper.indicatorDots" :indicator-color='swiper.indicatorColor' :autoplay='swiper.autoplay' :indicator-active-color='swiper.activeColor' :circular='swiper.circular'>
          <block v-for="(item, index) in bottomUrls" v-bind:key="index">
              <swiper-item>
                <image class="bottom" :src="item" mode="aspectFill"/>
              </swiper-item>
            </block>
        </swiper>
        <img class="expert_mask" :src='img.expert_mask'>
      </div>

    </div>
    
    <welfare v-if="selected=='welfare'"></welfare>


  </div>
  
</div>
  
</template>

<script>
import ExchangeData from '../../logic/ExchangeData'
import welfare from '../../components/welfare'

export default {
  data () {
    return {
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
        calendar_left: ExchangeData.getPath('/static/camp/calendar_left.png'),
        calendar_right: ExchangeData.getPath('/static/camp/calendar_right.png'),
        month5: ExchangeData.getPath('/static/camp/month5.png'),
        month6: ExchangeData.getPath('/static/camp/month6.png'),
        calendar_selected: ExchangeData.getPath('/static/camp/calendar_selected.png'),
        gift_bg: ExchangeData.getPath('/static/camp/gift_bg.png'),
        add: ExchangeData.getPath('/static/camp/add.png'),
        gift1: ExchangeData.getPath('/static/camp/gift1.png'),
        gift2: ExchangeData.getPath('/static/camp/gift2.png'),
        chart: ExchangeData.getPath('/static/camp/chart.png'),
        tips: ExchangeData.getPath('/static/camp/tips.png'),
        more: ExchangeData.getPath('/static/camp/more.png'),
        hand: ExchangeData.getPath('/static/camp/hand.png'),
        expert_logo: ExchangeData.getPath('/static/camp/expert_logo.png'),
        expert_mask: ExchangeData.getPath('/static/camp/expert_mask.png')

      },
      stage: ExchangeData.stage,
      swiper: {
        indicatorDots: true, // 是否显示面板指示点
        autoplay: true, // 是否自动切换
        indicatorColor: 'rgb(199, 199, 199)', // 指示点颜色
        activeColor: '#395ea2', // 当前选中的指示点颜色
        circular: true// 是否采用衔接滑动
      },
      bannerUrls: [// 顶部轮播图
        ExchangeData.getPath('/static/camp/swiper1.png'),
        ExchangeData.getPath('/static/camp/swiper1.png'),
        ExchangeData.getPath('/static/camp/swiper1.png')
      ],
      bottomUrls: [// 底部轮播图
        ExchangeData.getPath('/static/camp/expert1.png'),
        ExchangeData.getPath('/static/camp/expert1.png'),
        ExchangeData.getPath('/static/camp/expert1.png')
      ],
      selected: null,
      babyInfo: {
        name: 'XXX',
        age: '4',
        weight: '16.6',
        height: '104'
      },
      selTime: 'month', // month月，day日，week周
      dayArr: []// 日历数据

    }
  },
  components: {
    welfare
  },
  onReady: function (res) {
  },
  onLoad: function () {
  },
  onShow: function () {
    this.img.photo = ExchangeData.userInfo.avatarUrl
    this.babyInfo.name = ExchangeData.userInfo.nickName
    this.selected = ExchangeData.selected

    let s = ExchangeData.stage.scaleRate
    let posX = [0 * s, 110 * s, 214 * s, 319 * s, 419 * s, 519 * s]
    let posY = [270 * s, 218 * s, 164 * s, 109 * s, 58 * s, 0 * s]

    const ctx = wx.createCanvasContext('myCanvas')

    // 开始绘制
    ctx.beginPath()
    // 设置描边颜色
    ctx.setStrokeStyle('#000')
    // 设置线条的宽度
    ctx.setLineWidth(1)
    // 定义直线的起点坐标为(10,10)
    ctx.moveTo(posX[0], posY[0])
    // 折线的折点坐标
    ctx.lineTo(posX[1], posY[4])
    ctx.lineTo(posX[2], posY[3])
    ctx.lineTo(posX[3], posY[3])
    ctx.lineTo(posX[4], posY[2])
    ctx.lineTo(posX[5], posY[5])
    // 开始绘制
    ctx.stroke()
    ctx.draw()
    // 结束绘制
    ctx.closePath()
  },

  methods: {
    onNameChange: function (e) {
      let nameChange = e.mp.detail.value
      console.log(nameChange)
    },
    icon (val) {
      if (val === 'card' || val === 'test') {
        ExchangeData.showToast('暂未开放')
        return
      }
      this.selected = ExchangeData.selected = val
      console.log('selected', val, this.selected, ExchangeData.selected)
    },
    chart (val) {
      this.selTime = val
      console.log('日月周', val, this.selTime)
    },
    getMonth (month) {
      console.log(month, 'month', new Date('2020-05-01').toLocaleDateString())
      this.getMonthDaysCurrent(new Date('2020-04-01'))
    },
    // 获取当前数据
    getMonthDaysCurrent (e) {
      let year = e.getFullYear()// 年
      let month = e.getMonth() + 1 // 月(0-11)
      let date = e.getDate()// 日
      let week = e.getDay() // 周(星期天为 0, 星期一为 1)
      // 初始年月下的天数(即下个月0号=当月最后一天)
      let days = new Date(year, month, 0).getDate()

      let firstDayDate = new Date(year, month - 1, 1) // 当月1号
      let firstDay = firstDayDate.getDay()// 当月1号对应的星期

      let lastDate = new Date(year, month - 1, days)// 当月最后一天
      let lastDay = lastDate.getDay() // 当月最后一天对应的星期

      console.log('年', year, '月', month, '日', date, ' week', week, 'days', days, 'firstDay', firstDay, 'lastDay', lastDay)

      let calendarTitle = this.formatDate(year, month, date)
      console.log(calendarTitle)

      let calendarDays = []

      // 上个月显示的天数及日期
      let before = (firstDay + 6) % 7
      for (let i = before - 1; i >= 0; i--) {
        let date = new Date(year, month - 1, -i)
        console.log(i, month - 1, date.toLocaleDateString())
        calendarDays.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'week': date.getDay(),
          'title': this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()),
          'current': false, // 不在当月
          'selected': false // 当天
        })
      }
      console.log(calendarDays)

      // 当月显示的日期
      for (let i = 1; i <= days; i++) {
        calendarDays.push({
          'year': year,
          'month': month,
          'date': i,
          'week': new Date(year, month - 1, i).getDay(),
          'title': this.formatDate(year, month, i),
          'current': true,
          'selected': i === date && calendarTitle === this.formatDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())// 判断当前日期
        })
        console.log(this.formatDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()), i, date)
      }

      // 下个月显示的天数及日期
      let after = (7 - lastDay) % 7
      for (let i = 1; i <= after; i++) {
        let date = new Date(year, month, i)
        console.log(i, month, date.toLocaleDateString())
        calendarDays.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'week': date.getDay(),
          'title': this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()),
          'current': false,
          'selected': false
        })
      }

      this.calendarInit(calendarDays)
    },
    // 年月日转换格式
    formatDate (year, month, date) {
      return year + '-' + (month > 9 ? month : '0' + month) + '-' + (date > 9 ? date : '0' + date)
    },
    // 初始化日历状态
    calendarInit (calendarDays) {
      let data = calendarDays
      let add = ExchangeData.addtimestr// 入营时间
      let signed = ExchangeData.clock_day// 已签到日期
      // let str2
      console.log('add', add, data[7].title)
      // 处理日历状态
      for (let i = 0; i < data.length; i++) {
        let str = data[i]

        // 当月并且大于等于入营日期标记为可以签到
        if (new Date(str.title).getTime() >= new Date(add).getTime() && str.current) {
          data[i].sel = true
        } else {
          data[i].sel = false
        }
        // 标记已打卡记录
        for (let j = 0; j < signed.length; j++) {
          if (new Date(str.title).getTime() === new Date(signed[j]).getTime()) {
            data[i].signed = true
            console.log('title', str.title)
          }
        }
      }
      this.dayArr = data
      console.log(data)
    },
    onClick (index, item) {
      console.log(index, item)
      if (!item.sel) {
        ExchangeData.showToast('不可打卡', 800)
        return
      }
      if (item.signed) {
        ExchangeData.showToast('已经打卡', 800)
        return
      }
      if (item.sel && !item.signed) { // 可以打卡并且未打卡
        this.$set(this.dayArr[index], 'signed', true)
        ExchangeData.showToast(this.dayArr[index].title + '打卡', 800)
      }
    }
  }
}
</script>

<style scoped>

  #main{
    width: 100%;
    position: absolute;
    top: 0;
    /* 短页面超出隐藏 */
    overflow: hidden;
  }
  .camp{
    width: 750rpx;
    height: 3578rpx;
    position: absolute;
  }
  .welfare{
    width: 750rpx;
    position: absolute;
    z-index: -1;
  }
  .banner{
    width: 100%;
    height: 422rpx;
  }
  .slide-banner{
    width: 100%;
    height: 422rpx;
  }
  #icon{
    margin-top: -7px;
    position: relative;
    z-index: 1;
  }
  .icon_bg{
    width: 100%;
    height: 255rpx;
  }
  .icon_cen{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 750rpx;
  }
  .icon1,.icon2,.icon3,.icon4{
    width: 175rpx;
    height: 166rpx;
    margin-top: 38rpx;
  }
  #camp_box{
    position: relative;
  }
  .rule_btn{
    width: 142rpx;
    height: 80rpx;
    position: absolute;
    left: 32rpx;
  }
  .photo_bg{
    width: 541rpx;
    height: 529rpx;
    position: absolute;
    top: -150rpx;
    left: 111rpx;
  }
  .photo{
    width: 162rpx;
    height: 162rpx;
    position: absolute;
    top: 26rpx;
    left: 294rpx;
    border-radius: 50%;
  }
  .name,.name1{
    width: 418rpx;
    position: absolute;
    top: 212rpx;
    color: #214e9a;
    font-size: 22rpx;
    text-align: right;
  }
  .name{
    top: 204rpx;
    width: 350rpx;
  }
  .modify_btn{
    width: 80rpx;
    height: 80rpx;
    position: absolute;
    top: 180rpx;
    left: 411rpx;
  }
  #baby_box{
    padding: 260rpx 70rpx 0;
  }
  .baby_info{
    width: 602rpx;
    height: 53rpx;
    font-weight: bold;
  }
  .inp {
    font-size: 19rpx;
    color: #214e9a;
    float: left;
    width: 160rpx;
    padding-left: 36rpx;
    text-align: left;
    margin-top: -42rpx;
    height: 50rpx;
  }
  .inp p{
    float: left;
    height: 50rpx;
  }
  .inp input{
    float: left;
    width: 50rpx;
    height: 50rpx;
    margin-top: -12rpx;
    text-align: center;
  }
  #calendar_box{
    position: relative;
  }
  .calendar_bg{
    width: 710rpx;
    height: 1006rpx;
    margin-left: 20rpx;
  }
  .calendar_content{
    position: absolute;
    top: 174rpx;
  }
  .calendar_score{
    width: 660rpx;
    margin: 0 auto;
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
    padding-top: 12rpx;
    padding-left: 40rpx;
    width: 700rpx;
    height: 348rpx;
  }
  .calendar_day div{
    float: left;
    width: 95rpx;
    height: 58rpx;
  }
  .calendar_day .day_small{
    font-size: 36rpx;
  }
  .calendar_day div img{
    width: 52rpx;
    height: 54rpx;
    margin-left: 30rpx;
  }
  .calendar_day div p{
    font-size: 46rpx;
    line-height: 60rpx;
    margin-top: -60rpx;
  }
    /* 不可打卡颜色 */
  .color_gray{
    color: #9c9c9c;
  }
  /* 可打卡颜色 */
  .color_blue{
    color: #064d98;
  }
  /* 当天的颜色 */
  .color_yellow{
    color: #cea564;
  }
  .gift_bg{
    width: 649rpx;
    height: 215rpx;
    margin: 30rpx 0 0 52rpx;
  }
  .add{
    width: 368rpx;
    height: 80rpx;
    margin-left: 195rpx;
  }
  .gift_box{
    margin-top: 95rpx;
    margin-left: 35rpx;
    overflow: hidden;
  }
  .gift{
    width: 81rpx;
    height: 81rpx;
    float: left;
    margin-left: 36px;
  }

  #chart{
    margin-top: -18rpx;
    position: relative;
  }
  .chart{
    width: 750rpx;
    height: 892rpx;
  }
  .chart_con{
    top: 56rpx;
    position: absolute;
  }
  .chart_cli{
    width: 602rpx;
    margin-left: 74rpx;
  }
  
  .charted{/* 日月周选中状态 */
    color: #fff !important;
    background: #234f9b;
  }
  .chart_cli div{
    width: 200rpx;
    float: left;
    height: 50rpx;
    border-radius: 20rpx;
    font-size: 24rpx;
    color: #234f9b;
    line-height: 50rpx;
    font-weight: bold;
  }
  .chart_con > p{
    margin-top: 128rpx;
    width: 625rpx;
    text-align: right;
    color: #214e9a;
    font-size: 15rpx;
  }
  .chart_desc{
    margin-top: 12rpx !important;
  }
  .chart_con canvas{
    width: 560rpx;
    height: 335rpx;
    position: absolute;
    top: 190rpx;
    left: 125rpx;
  }
  #tips{
    margin-top: -242rpx;
  }
  #tips .tips{
    width: 630rpx;
    height: 178rpx;
    margin: 0 auto;
  }
  #tips .more{
    width: 533rpx;
    height: 280rpx;
    margin-left: 50rpx;
  }
  #tips .hand{
    width: 90rpx;
    height: 91rpx;
    margin-top: -116rpx;
    margin-left: 542rpx;
  }
  .expert_logo{
    width: 363rpx;
    height: 57rpx;
    margin-top: 110rpx;
    margin-left: 36rpx;
  }
  #bottom{
    margin-top: 30rpx;
    margin-left: 44rpx;
  }
  .bottom{
    width: 680rpx;
    height: 289rpx;
  }
  #bottom .expert_mask{
    width: 750rpx;
    height: 359rpx;
    margin-top: -320rpx;
    margin-left: -44rpx;
    position: absolute;
  }
</style>
