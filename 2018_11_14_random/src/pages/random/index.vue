<template>

  <view class="bg" id="conter">

    <div class="tips">
      <div class="left tips_l">提交的选项：</div>
      <div class="left tips_r"><span class="red">{{motto}}</span></div>
    </div>
    <div class="tips">
      <div class="left tips_l">结&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果：</div>
      <div class="left tips_r"><span class="red">{{result}}</span></div>
    </div>


    <div class="tips text_center">请分次提交选项，提交完毕后点击Go计算</div>

    <input class="input" placeholder="请输入选项" v-model="model" @input="onInputChange" :value='telValue' />

    <view id="button">
      <!-- <button class="mini-btn" type="primary" size="mini">按钮</button> -->
      <button class="btn left" type="primary" @click="submit">提交选项</button>
      <button class="btn right" type="warn" @click="clear">清空选项</button>
    </view>

    <button class="go" type="primary" :disabled="time!=='Go！！！'" @click="go">{{time}}</button>


  </view>


</template>

<script>
import ExchangeData from '../../logic/ExchangeData'
// import { clearInterval, setInterval } from 'timers'
// import BackendManager from '../../logic/BackendManager'

export default {
  data () {
    return {
      motto: 'Hello ，拒绝强迫症！',
      savaArr: [],
      model: '',
      telValue: '',
      result: '',
      isPlay: true,
      time: 'Go！！！'
    }
  },
  // 调用应用实例的方法获取全局数据
  created () {

  },
  // 生命周期函数--监听页面加载--一个页面只会调用一次
  onLoad: function (options) {
    this.savaArr = wx.getStorageSync('key') || []
    if (this.savaArr.length > 0) {
      this.motto = this.savaArr.join('，')
    }
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function (res) {

  },
  // 生命周期函数--监听页面显示--每次打开页面都会调用一次
  onShow: function () {

  },

  // 生命周期函数--监听页面隐藏
  onHide: function () {

  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {

  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  // 用户点击右上角分享
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '燃烧我的卡路里，逆生长实锤就是我！',
      path: 'pages/index/main'
    }
  },

  methods: {
    submit () {
      if (this.telValue === '') {
        ExchangeData.showToast('选项不能为空！', 2000)
        return false
      }
      this.savaArr.push(this.telValue)
      this.telValue = ''
      this.motto = this.savaArr.join('，')

      console.log(this.telValue, 'telValue')
      console.log(this.savaArr, 'savaArr')
      console.log(this.motto, 'motto')
    },
    go () {
      if (this.time !== 'Go！！！') return
      if (this.savaArr.length <= 0) {
        ExchangeData.showToast('选项不能为空！', 2000)
        return
      }
      wx.setStorage({
        key: 'key',
        data: this.savaArr
      })

      let random = Math.floor(Math.random() * this.savaArr.length)
      this.result = this.savaArr[random]

      console.log(this.motto, random, this.result, 'this.result')
      var that = this
      that.time = 3
      var tm = setInterval(function () {
        that.time--
        console.log(that.time, that.time <= 0)
        if (that.time <= 0) {
          clearInterval(tm)
          that.time = 'Go！！！'
        }
      }, 1000)
    },
    clear () {
      wx.clearStorage()
      this.savaArr = []
      this.telValue = ''
      this.motto = 'Hello ，拒绝强迫症！'
      this.result = ''
    },
    onInputChange: function (e) {
      let inputChange = e.mp.detail.value
      // console.log(e.mp.detail.value, 'onInputChange', inputChange.length, 'onInputChange.lenght')
      // console.log(this.model, 'model')
      this.telValue = inputChange
    }
  }
}
</script>

<style scoped>

#conter{
  /* text-align: center */
}
.tips{
  padding:30rpx 0;
  background-color:#FFFFFF;
  font-size:30rpx;
  color:#353535;
  width: 646rpx;
  margin: 0 auto;
  overflow: hidden;
}
.tips_l{
  width: 200rpx;
}
.tips_r{
  width: 446rpx;
}
.text_center{
  text-align: center;
}
.red{
  color: firebrick;
}
input{
  width: 646rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  color: #000;
  border: 2rpx solid gray;
  border-radius: 12rpx;
  margin: 0 auto;
  padding: 0 10rpx;
  /* background:rgba(0, 0, 0, 0.3); */
}
#button{
  width: 646rpx;
  margin: 50rpx auto 0 auto;
  overflow: hidden;
}
.btn{
  width: 200rpx;
  height: 80rpx;
  font-size: 28rpx;
  line-height: 80rpx;
}
.go{
  /* position: fixed; */
  width: 400rpx;
  height: 80rpx;
  font-size: 28rpx;
  line-height: 80rpx;
  margin: 100rpx auto 0 auto;
}

</style>
