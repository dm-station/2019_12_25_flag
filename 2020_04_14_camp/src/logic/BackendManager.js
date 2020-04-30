
import Vue from 'vue'
import ExchangeData from './ExchangeData'

const BackendManager = new Vue({
  data () {
    return {
      EVENT: {

        login: 'lb-login',
        ranking: 'lb-event-ranking'
      },

      API: {
        login: 'libu/entry',
        ranking: 'libuqm/ranking'
      },

      onlineUrl: 'https://school-season.firstleap.cn/libu/index.php?r='
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('BackendManager created!')
  },

  methods: {
    init () {

    },
    // 用户login
    login () {
      wx.login({
        success: function (res) {
          ExchangeData.usercode = res.code
          if (res.code) {
            ExchangeData.setUserInfo(res)
            console.log('登陆成功=>ExchangeData.userInfo', ExchangeData.userInfo)

            // 请求自己的登录接口
            wx.request({
              url: BackendManager.onlineUrl + BackendManager.API.login,
              data: {
                code: res.code
              },
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
              },

              success: function (res) {
                console.log(res)
                if (res.data.code === 0) {
                  ExchangeData.usertoken = res.data.data
                } else {
                  res.data.code = res.code
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
          } else {
            console.log('wx登录失败！' + res.errMsg)
            BackendManager.showInfo('wx登录失败', JSON.stringify(res.errMsg))
          }
        }
      })
    },

    // 查询排行榜信息接口
    ranking () {
      wx.request({
        url: BackendManager.onlineUrl + BackendManager.API.ranking,
        method: 'POST',
        data: {
          token: ExchangeData.usertoken
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },

        success: function (res) {
          if (res.data.code === 0) {
            BackendManager.$emit(BackendManager.EVENT.ranking, res.data)
          } else {
            BackendManager.showInfo(res.data.msg)
          }

          console.log('查询排行榜信息接口', res)
        },

        fail: function (res) {
          console.log('查询排行榜信息接口fail', res)
          BackendManager.showInfo('查询排行榜信息接口fail', JSON.stringify(res))
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
