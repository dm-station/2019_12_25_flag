<template>
  <div class="container">

    <canvas type="webgl" id="myCanvas" style="width: 300px; height: 300px;"></canvas>

  </div>


</template>

<script>
// import ExchangeData from '../../logic/ExchangeData'
// import BackendManager from '../../logic/BackendManager'

const vs = `
  precision mediump float;

  attribute vec2 vertPosition;
  attribute vec3 vertColor;
  varying vec3 fragColor;

  void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
    fragColor = vertColor;
  }
`

const fs = `
  precision mediump float;

  varying vec3 fragColor;
  void main() {
    gl_FragColor = vec4(fragColor, 1.0);
  }
`

const triangleVertices = [
  0.0, 0.5, 1.0, 1.0, 0.0,
  -0.5, -0.5, 0.7, 0.0, 1.0,
  0.5, -0.5, 0.1, 1.0, 0.6
]

export default {
  data () {
    return {
    }
  },
  created () {

  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'webgl绘制图形'
    })
    const query = wx.createSelectorQuery()
    query.select('#myCanvas').node().exec((res) => {
      const canvas = res[0].node
      this._render(canvas)
    })
  },

  methods: {
    _render (canvas) {
      if (!canvas) {
        console.error('gl init failed', canvas)
        return
      }
      const gl = canvas.getContext('webgl')
      if (!gl) {
        console.error('gl init failed', gl)
        return
      }
      gl.viewport(0, 0, 300, 300)
      // 创建顶点着色器对象
      const vertShader = gl.createShader(gl.VERTEX_SHADER)
      gl.shaderSource(vertShader, vs)
      gl.compileShader(vertShader)

      // 创建片着色器对象
      const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
      gl.shaderSource(fragShader, fs)
      gl.compileShader(fragShader)

      // 创建一个程序对象，赋值到 WebGLProgram 上
      const prog = gl.createProgram()
      gl.attachShader(prog, vertShader)
      gl.attachShader(prog, fragShader)
      gl.deleteShader(vertShader)
      gl.deleteShader(fragShader)
      gl.linkProgram(prog)
      gl.useProgram(prog)

      const draw = () => {
        console.log('----')
        // 通过 createBuffer() 方法创建一个缓冲区对象
        const triangleVertexBufferObject = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW)

        // 从刚才创建的GLSL着色程序中找到这个属性值所在的位置
        const positionAttribLocation = gl.getAttribLocation(prog, 'vertPosition')
        const colorAttribLocation = gl.getAttribLocation(prog, 'vertColor')
        // 缓冲区中的数据按照一定的规律传递给位置变量
        gl.vertexAttribPointer(
          positionAttribLocation,
          2,
          gl.FLOAT,
          gl.FALSE,
          5 * Float32Array.BYTES_PER_ELEMENT,
          0
        )
        gl.vertexAttribPointer(
          colorAttribLocation,
          3,
          gl.FLOAT,
          gl.FALSE,
          5 * Float32Array.BYTES_PER_ELEMENT, // 代表一个顶点占的字节数
          2 * Float32Array.BYTES_PER_ELEMENT// 偏移量
        )
        // 告诉WebGL我们想从缓冲中提供数据
        gl.enableVertexAttribArray(positionAttribLocation)
        gl.enableVertexAttribArray(colorAttribLocation)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
        // canvas.requestAnimationFrame(draw)
      }
      // 在下次进行重绘时执行。（仅支持在 WebGL 中使用）
      // canvas.requestAnimationFrame(draw)
      draw()
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
