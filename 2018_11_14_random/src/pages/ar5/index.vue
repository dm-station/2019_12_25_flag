<template>
  <div class="container">

    <canvas
      id="webgl"
      type="webgl"
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
// 顶点着色器(存储着色器)
const VSHADER_SOURCE = `
  attribute vec4 a_Position;

  void main() {
    gl_Position = a_Position;
    gl_PointSize = 20.0;
  }
`

// 片元着色器
const FSHADER_SOURCE = `
  precision mediump float;

  void main() {
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);;
  }
`

export default {
  data () {
    return {
      width: 288,
      height: 358
    }
  },
  created () {

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'webgl绘制矩形'
    })

    // 先获取Canvas对象，接着从Canvas对象获取webgl对象。
    // 方式3
    const query = wx.createSelectorQuery()
    query.select('#webgl').node().exec((res) => {
      const canvas = res[0].node
      this.init(canvas)
    })
  },

  methods: {
    init (canvas) {
      if (!canvas) {
        console.error('canvas init failed', canvas)
        return
      }
      const gl = canvas.getContext('webgl')
      if (!gl) {
        console.error('webgl init failed', gl)
        return
      }

      // 获取系统信息
      const info = wx.getSystemInfoSync()
      console.log(info)
      gl.canvas.width = info.pixelRatio * this.width
      gl.canvas.height = info.pixelRatio * this.height
      console.log(gl.canvas.width, gl.canvas.height)
      // 设置视口
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
      // gl.viewport(0, 0, 300, 300)
      // 创建顶点着色器对象
      var vertShader = gl.createShader(gl.VERTEX_SHADER)
      gl.shaderSource(vertShader, VSHADER_SOURCE)
      gl.compileShader(vertShader)

      // 创建片着色器对象
      var fragShader = gl.createShader(gl.FRAGMENT_SHADER)
      gl.shaderSource(fragShader, FSHADER_SOURCE)
      gl.compileShader(fragShader)

      // 创建一个程序对象，赋值到 WebGLProgram 上
      var shaderProgram = gl.createProgram()
      gl.attachShader(shaderProgram, vertShader)
      gl.attachShader(shaderProgram, fragShader)
      gl.linkProgram(shaderProgram)
      gl.useProgram(shaderProgram)
      gl.program = shaderProgram

      const draw = () => {
        console.log('draw:')
        var vertices = new Float32Array([-0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5])
        var n = 4 // 坐标点个数

        // 通过 createBuffer() 方法创建一个缓冲区对象
        var vertexBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

        // 将顶点坐标的位置赋值
        var aPosition = gl.getAttribLocation(shaderProgram, 'a_Position')
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(aPosition)

        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        // 通过 drawArrays(gl.TRIANGLES, 0, n) 绘制三角形
        // 第一个参数是指定绘制方式，第二个参数指定从哪个顶点开始绘制，第三个参数指定绘制需要多少个顶点
        // gl.POINTS 点 一系列的点绘制在v0，v1，v2等处。
        // gl.LINES 线段 一系列单独线段。
        // gl.LINE_STRIP 连线 一个相连的线段。
        // gl.LINE_LOOP 回路 一个相连接的回路。
        // gl.TRIANGLES 三角形 一系列单独的三角形。
        // gl.TRIANGLE_STRIP 三角带 一个相邻三角形组成的图形。
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
      }
      draw()
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
  bottom: 0;
}
</style>
