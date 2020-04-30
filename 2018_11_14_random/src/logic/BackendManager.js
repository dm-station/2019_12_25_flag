
import Vue from 'vue'
import ExchangeData from './ExchangeData'

const BackendManager = new Vue({
  data () {
    return {
      EVENT: {
        fail: 'je-fail',
        login: 'je-login'

      },

      API: {
        login: 'login'

      },

      // 测试
      jdUrl: 'http://campaign.realh5.cn/_test2018/jdage/api/wx/'

      // 正式
      // jdUrl: 'http://59.151.64.31:8303/wx/'
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('BackendManager created!')
  },

  methods: {
    init () {

    },

    // 用户登陆接口
    login (nickName, gender, avatarUrl) {
      // 发起网络请求
      wx.request({
        url: BackendManager.jdUrl + BackendManager.API.login,

        data: {
          code: ExchangeData.code,
          nickName: nickName,
          gender: gender,
          avatarUrl: avatarUrl
        },

        method: 'POST',

        success: function (res) {
          if (res.data.resCode === '0000') {
            ExchangeData.setUserInfo(res.data.resData)
            wx.setStorageSync('userInfo', ExchangeData.userInfo)
            console.log('登陆成功=>ExchangeData.userInfo', ExchangeData.userInfo)
          } else {
            res.data.code = res.code
            res.data.nickName = nickName
            res.data.gender = gender
            console.log('登陆接口失败', res)
            BackendManager.showInfo('登陆接口失败', JSON.stringify(res))
          }

          BackendManager.$emit(BackendManager.EVENT.login, res.data)
        },

        fail: function (res) {
          console.log('登陆接口失败', res)
          BackendManager.showInfo('登陆接口失败', JSON.stringify(res))
        }

      })
    },

    // showInfo
    showInfo (title, content) {
      wx.showModal({
        title: title,
        content: content || '',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }

  }
})

export default BackendManager
