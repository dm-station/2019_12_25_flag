<template>

  <view class="bg">

    <view v-if="canIUse">

      <button v-if="!hasUserInfo" class="infoBtn" size="1" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">授权登录</button>

    </view>
    
    <view v-else class="infoBody">请升级到最新微信版本</view>

  </view>


</template>

<script>
import ExchangeData from '../../logic/ExchangeData'
// import BackendManager from '../../logic/BackendManager'

export default {
  data () {
    return {
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      hasUserInfo: true
    }
  },
  // 调用应用实例的方法获取全局数据
  created () {

  },
  // 生命周期函数--监听页面加载--一个页面只会调用一次
  onLoad: function (options) {
    var that = this
    wx.login({
      success (res) {
        if (res.code) {
          // 获取code
          ExchangeData.code = res.code
          console.log(res, 'res.code')
          // 查看是否授权
          that.isAuthorize()
        } else {
          console.log('login登录失败！' + res.errMsg)
        }
      }
    })
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
  onShareAppMessage: function () {

  },
  components: {
  },
  methods: {
    isAuthorize () {
      var that = this
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                console.log(res, '已经授权')
                that.authorizeSuccess(res.userInfo)
              }
            })
          } else {
            // 没有授权
            console.log(res.authSetting['scope.userInfo'], '没有授权')
            that.hasUserInfo = false
          }
        }
      })
    },
    getUserInfo (e) {
      console.log('e', e.mp.detail)
      // var that = this
      if (e.mp.detail.userInfo) {
        // 用户按了允许授权按钮
        console.log('e.mp.detail.userInfo-----', e.mp.detail.userInfo)
        this.authorizeSuccess(e.mp.detail.userInfo)
        wx.showToast({
          title: 'loading',
          icon: 'loading'
        })
      } else {
        // 用户按了拒绝授权按钮
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          success: function (res) {
            // if (res.confirm) {
            //   wx.openSetting({
            //     success: (res) => {
            //       console.log(res, 'openSetting')
            //       if (res.authSetting['scope.userInfo']) { // 用户重新同意了授权登录
            //         console.log('设置为同意授权！')
            //         that.getUserInfo()
            //       }
            //     },
            //     fail: function (res) {

            //     }
            //   })
            // }
          }
        })
      }
    },
    authorizeSuccess (userInfo) {
      ExchangeData.setUserInfo(userInfo)
      console.log('request api.login', ExchangeData.userInfo)
      this.onLoginSuccess()
      // BackendManager.$once(BackendManager.EVENT.login, this.onLoginSuccess, this)
      // BackendManager.login(ExchangeData.userInfo.nickName, ExchangeData.userInfo.gender, ExchangeData.userInfo.avatarUrl)
    },
    onLoginSuccess (event) {
      // console.log('onLoginSuccess', event)
      wx.hideToast()
      wx.redirectTo({ url: '../index/main' })
      // if (event.resCode === '0000') {
      //   wx.redirectTo({ url: '../index/main' })
      // }
    }
  }
}
</script>

<style scoped>
.infoBtn {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    /* opacity: 0; */
}
.infoBody{
  width: 750rpx;
  text-align: center;
}
</style>
