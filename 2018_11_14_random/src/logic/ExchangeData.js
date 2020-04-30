// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'

const ExchangeData = new Vue({
  created: function () {
    console.log('ExchangeData created!')
  },
  data () {
    return {
      serverUrl: '',
      userInfo: {
        // nickName: '测试ABD',
        // gender: '01',
        // avatarUrl: 'https://campaign.realh5.cn/_test2018/jdage/img/icon.png',
        // servKey: '111',
        // userId: '111'
      },
      code: ''
    }
  },
  methods: {
    init () {

    },

    getPath (url) {
      return this.serverUrl + url
    },

    setUserInfo (obj) {
      if (this.userInfo === null) this.userInfo = {}
      for (let item in obj) {
        console.log('setUserInfo', item, obj[item])
        this.$set(this.userInfo, item, obj[item])
      }
      // wx.setStorageSync('userInfo', this.userInfo)
    },

    saveUserInfo () {
      wx.setStorageSync('userInfo', this.userInfo)
    },

    // 微信提示，title:内容,duration:消失时间,icon:success,loading,none,mask:false是否显示透明蒙层
    showToast (title, duration, icon, mask) {
      wx.showToast({
        title: title,
        duration: duration,
        icon: icon || 'none',
        mask: mask || true
      })
    }
  }

})

export default ExchangeData
