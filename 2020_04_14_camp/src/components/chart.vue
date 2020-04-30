<template>
  <div class="temBox">
    <canvas id="myCanvas" :style="{opacity:opacity}" canvas-id="myCanvas"></canvas>
  </div>
</template>

<script>
import ExchangeData from '../logic/ExchangeData'
import BackendManager from '../logic/BackendManager'
export default {
  props: ['opacity'],
  data () {
    return {
      pos: [0, 0, 0, 0, 0, 0],
      context: null
    }
  },
  created: function () {
    console.log('this is chart', this.pos)
    this.draw()

    BackendManager.$on('postchart', item => {
      this.pos = item
      this.draw()
    })
  },
  methods: {
    draw () {
      let arr = [270, 218, 164, 109, 58, 0]
      let s = ExchangeData.stage.scaleRate
      let posX = [0 * s, 110 * s, 214 * s, 319 * s, 419 * s, 519 * s]
      let posY = [arr[this.pos[0]] * s, arr[this.pos[1]] * s, arr[this.pos[2]] * s, arr[this.pos[3]] * s, arr[this.pos[4]] * s, arr[this.pos[5]] * s]

      if (!this.context) {
        this.context = wx.createCanvasContext('myCanvas')
      }

      console.log('-----------', posY)

      // 开始绘制
      this.context.beginPath()
      // 设置描边颜色
      this.context.setStrokeStyle('#000')
      // 设置线条的宽度
      this.context.setLineWidth(1)
      // 定义直线的起点坐标为(10,10)
      this.context.moveTo(posX[0], posY[0])
      // 折线的折点坐标
      this.context.lineTo(posX[1], posY[4])
      this.context.lineTo(posX[2], posY[3])
      this.context.lineTo(posX[3], posY[3])
      this.context.lineTo(posX[4], posY[2])
      this.context.lineTo(posX[5], posY[5])
      // 开始绘制
      this.context.stroke()
      this.context.draw(false, function () {
        console.log('drawwwwwwwwwwwwwww')
      })
      // 结束绘制
      this.context.closePath()
    }
  }
}
</script>

<style>
.temBox{
  position: absolute;
  top: 0;
}
#myCanvas{
  width: 560rpx;
  height: 335rpx;
  position: absolute;
  top: 190rpx;
  left: 125rpx;
}

</style>
