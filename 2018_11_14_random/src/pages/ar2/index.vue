<template>
  <div class="container">

    <canvas
      canvas-id="canvas"
      :style="{width:width+'px',height:height+'px'}"
    >
    </canvas>

    <camera
      id="camera"
      device-position="back"
      flash="off"
      style="width: 192px; height: 144px;"
      frame-size="small"
    ></camera>

  </div>


</template>

<script>
// import ExchangeData from '../../logic/ExchangeData'
// import BackendManager from '../../logic/BackendManager'

export default {
  data () {
    return {
      width: 288,
      height: 358,
      flag: false,
      counter: 0
    }
  },
  created () {

  },
  onReady: function () {
    this.init()
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'AR像素cpu绘制'
    })
  },
  onShow: function () {
    console.log('onShow')
  },
  onHide: function () {
    console.log('onHide')
  },
  onUnload: function () {
    console.log('onUnload')
  },

  methods: {
    init (res) {
      console.log('res', res)
      // 创建 camera 上下文 CameraContext 对象
      const camera = wx.createCameraContext()
      const listener = camera.onCameraFrame((frame) => {
        // console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
        if (this.flag) return
        // this.flag = true
        if (this.counter === 0) {
          wx.canvasPutImageData({
            canvasId: 'canvas',
            x: 0,
            y: 0,
            width: frame.width,
            height: frame.height,
            data: new Uint8ClampedArray(frame.data)
          })
        }

        this.counter++
        if (this.counter >= 10) {
          this.counter = 0
        }
      })
      listener.start()
      console.log('camera', camera)
    },
    saveCanvas () {
      console.log('saveCanvas')
    }

  }
}
</script>

<style>

.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffe5ea;
  position: absolute;
}
#camera{
  position: absolute;
  bottom: 100rpx;
  right: 0;
}
</style>
