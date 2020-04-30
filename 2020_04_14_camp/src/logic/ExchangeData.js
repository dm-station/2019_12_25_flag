// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'

const ExchangeData = new Vue({
  created: function () {
    this.getSystemInfo()
    console.log('ExchangeData created!')
  },
  data () {
    return {
      env: 'online', // 区分线上线下，默认线上。online，offline
      serverUrl: '',
      // serverUrl: 'https://cdn.campaign.realh5.cn/2020/maidong',
      userInfo: {
        // avatarUrl: 'https://campaign.realh5.cn/_test2018/jdage/img/icon.png',
        // city: 'Chaoyang',
        // country: 'China',
        // gender:1
        // language: "zh_CN"
        // nickName: '测试ABD',
      },
      stage: {// 舞台信息
        // 舞台宽
        stageWidth: 750,
        // 舞台高
        stageHeight: 1500,
        // x缩放比
        scaleRateW: 1,
        // y缩放比
        scaleRateH: 1,
        // 屏幕与设计尺寸比
        scaleRate: 0.5
      },
      // 当前选中的栏目，card=我的卡券，camp=30天训练营，welfare=专享福利，test=一分钟测试
      boxName: 'camp',
      addtimestr: '2020-04-2', // 入营时间
      clock_day: [// 打卡记录
        '2020-04-12',
        '2020-04-15',
        '2020-04-16',
        '2020-04-17',
        '2020-04-23'
      ]

    }
  },
  methods: {
    init () {

    },

    getPath (url) {
      return this.serverUrl + url
    },

    /**
    * userInfo赋值并存入storage
    */
    setUserInfo (obj) {
      if (this.userInfo === null) this.userInfo = {}
      for (let item in obj) {
        // console.log('setUserInfo', item, obj[item])
        this.$set(this.userInfo, item, obj[item])
      }
      console.log('userInfo', this.userInfo)
      // 本地存储
      wx.setStorageSync('userInfo', this.userInfo)
    },

    /**
    * 本地存储
    */
    saveUserInfo () {
      wx.setStorageSync('userInfo', this.userInfo)
    },

    /**
    * @method 显示消息提示框
    * @param {string} title 提示的内容。必选参数
    * @param {number} duration 提示的显示时间，默认1500。可选参数
    * @param {boolean} mask 是否显示透明蒙层，防止触摸穿透，默认true。可选参数
    * @param {string} icon 图标，默认none，可选值为loading、success。可选参数
    * @returns {Object}
    */
    showToast (title, duration, mask, icon) {
      wx.showToast({
        title: title,
        duration: duration || 1500,
        mask: mask || true,
        icon: icon || 'none'
      })
    },

    /**
    * @method 获取手机信息
    * @returns {Object}
    */
    getSystemInfo () {
      var that = this
      wx.getSystemInfo({
        success: function (res) {
          console.log('获取手机信息', res)
          let windowWidth = res.windowWidth
          let windowHeight = res.windowHeight
          let scaleRate = windowWidth / 750
          let stageWidth = windowWidth / scaleRate
          let stageHeight = windowHeight / scaleRate
          that.stage = {
            stageWidth: stageWidth,
            stageHeight: stageHeight,
            scaleRateW: stageWidth / 750,
            scaleRateH: stageHeight / 1206,
            scaleRate: scaleRate
          }
          console.log(res.model, 'scaleRate:' + scaleRate, ',stageWidth:' + stageWidth, ',stageHeight:' + stageHeight, 'scaleRateW:' + stageWidth / 750, ',scaleRateH:' + stageHeight / 1206)
        }
      })
    },

    /**
    * @method 获取手机信息
    * @returns {Object}
    */
    subscribeMessage () {
      wx.requestSubscribeMessage({
        tmplIds: ['LpkIERwQU9M-H29AjeBXpVf6hgxiej0eKgt8-ZKzOL0'],
        success (res) {
          console.log('res', res)
        },
        fail (res) {
          console.log('fail', res)
        }
      })
    }

  }

})

export default ExchangeData
