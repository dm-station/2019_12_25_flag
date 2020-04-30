<template>

  <view id="container">

    <view class="index-bd">
    <view class="kind-list">
 
      <block v-for="(item, index) in list" v-bind:key="index"> 
          <view :id="index" class="kind-list-item" @click="kindToggle">
            <view class='kind-list-item-hd'> 
              {{item.title}}
            </view>
        </view>
      </block>  

    </view>
  </view>


  </view>


</template>

<script>
// import ExchangeData from '../../logic/ExchangeData'
// import { clearInterval, setInterval } from 'timers'
// import BackendManager from '../../logic/BackendManager'

export default {
  data () {
    return {
      model: 'page1',
      list: [
        {title: 'random', url: 'random'},
        {title: 'demo', url: 'demo'},
        {title: 'counter', url: 'counter'},
        {title: 'webview', url: 'webview'},
        {title: 'AR示例demo', url: 'ar'},
        {title: 'AR像素cpu绘制', url: 'ar2'},
        {title: 'webgl绘制图形', url: 'ar3'},
        {title: 'webgl绘制三角形', url: 'ar4'},
        {title: 'webgl绘制矩形', url: 'ar5'},
        {title: 'webgl绘制图像', url: 'ar6'},
        {title: 'webgl摄像头绘制图像', url: 'ar7'},
        {title: '视频滑动', url: 'nike'},
        {title: 'cdn缓存', url: 'cache'}

      ]
    }
  },
  // 调用应用实例的方法获取全局数据
  created () {

  },
  onLoad: function (options) {
    console.log('model', this.model)
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
    kindToggle (e) {
      const id = e.mp.currentTarget.id
      console.log('id', id)
      wx.navigateTo({ url: '../' + this.list[id].url + '/main' })
    }
  }
}
</script>

<style>
.index-bd {
  padding: 0 30rpx 40rpx;
}
.kind-list-item {
  margin: 20rpx 0;
  background-color: #FFFFFF;
  border-radius: 4rpx;
  overflow: hidden;
  width: 100%;
}
.kind-list-item-hd {
 padding:30rpx;
}

</style>
