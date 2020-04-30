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
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;

  void main() {
    gl_Position = a_Position;
    v_TexCoord = a_TexCoord;
  }
`

// 片元着色器
const FSHADER_SOURCE = `
  precision mediump float;
  uniform sampler2D u_Sampler;
  varying vec2 v_TexCoord;

  void main() {
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    gl_FragColor = texture2D(u_Sampler, v_TexCoord);
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
      title: 'webgl绘制图像'
    })

    // 先获取Canvas对象，接着从Canvas对象获取webgl对象。
    // 方式3
    const query = wx.createSelectorQuery()
    query.select('#webgl').node().exec((res) => {
      const canvas = res[0].node
      this.init(canvas)
      // const context = wx.createCameraContext()
      // const listener = context.onCameraFrame((frame) => {
      //   console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
      //   const arrayBuffer = new Uint8Array(frame.data)
      //   this.init(canvas, arrayBuffer)
      // })
      // listener.start()
    })
  },

  methods: {
    init (canvas, arrayBuffer) {
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
      if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
        console.error('Error compiling shader: ' + gl.getShaderInfoLog(vertShader))
      }

      // 创建片着色器对象
      var fragShader = gl.createShader(gl.FRAGMENT_SHADER)
      gl.shaderSource(fragShader, FSHADER_SOURCE)
      gl.compileShader(fragShader)
      if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
        console.error('Error compiling shader: ' + gl.getShaderInfoLog(fragShader))
      }

      // 创建一个程序对象，赋值到 WebGLProgram 上
      var shaderProgram = gl.createProgram()
      gl.attachShader(shaderProgram, vertShader)
      gl.attachShader(shaderProgram, fragShader)
      gl.linkProgram(shaderProgram)
      gl.useProgram(shaderProgram)
      gl.program = shaderProgram
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('创建Program失败')
        return
      }

      const draw = () => {
        console.log('draw:')
        var vertices = new Float32Array([
          -0.5, 0.5, 0.0, 1.0,
          -0.5, -0.5, 0.0, 0.0,
          0.5, 0.5, 1.0, 1.0,
          0.5, -0.5, 1.0, 0.0
        ])
        var n = 4 // 坐标点个数

        // 通过 createBuffer() 方法创建一个缓冲区对象
        var vertexBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        if (!vertexBuffer) {
          console.log('创建缓冲区对象失败')
          return
        }

        // 获取数组一个值所占的字节数
        var fsize = vertices.BYTES_PER_ELEMENT

        // 将顶点坐标的位置赋值
        var aPosition = gl.getAttribLocation(shaderProgram, 'a_Position')
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, fsize * 4, 0)
        gl.enableVertexAttribArray(aPosition)
        if (aPosition < 0) {
          console.log('无法获取变量aPosition的存储位置')
          return
        }

        var aTexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord')
        // 将纹理坐标赋值
        gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, fsize * 4, fsize * 2)
        gl.enableVertexAttribArray(aTexCoord)
        if (aTexCoord < 0) {
          console.log('无法获取变量aTexCoord的存储位置')
          return
        }
        console.log('arrayBuffer', arrayBuffer)

        if (arrayBuffer) {
          loadTexture(gl, n, arrayBuffer)
        } else {
          var img = canvas.createImage({})
          img.onload = (res) => {
            console.log('Works!', res)
            loadTexture(gl, n, res.path[0])
          }
          img.src = '/static//ar/test.png'
        }

        function loadTexture (gl, n, image) {
          // 获取u_Sampler的存储位置
          var uSampler = gl.getUniformLocation(gl.program, 'u_Sampler')
          if (uSampler < 0) {
            console.log('无法获取变量uSampler的存储位置')
            return
          }
          // 对纹理图像进行y轴反转
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
          // 创建纹理对象
          var texture = gl.createTexture()
          if (!texture) {
            console.log('无法创建纹理对象')
            return
          }
          // 开启0号纹理单元
          gl.activeTexture(gl.TEXTURE0)
          // 向target绑定纹理对象
          gl.bindTexture(gl.TEXTURE_2D, texture)
          // 配置纹理参数
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)// 纹理放大方式
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)// 纹理缩小方式
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)// 纹理水平填充方式
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)// 纹理垂直填充方式
          // 配置纹理图像
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
          // 将0号纹理传递给着色器
          gl.uniform1i(uSampler, 0)

          // 绘制
          gl.clearColor(0.0, 0.0, 0.0, 1.0)

          gl.clear(gl.COLOR_BUFFER_BIT)

          gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)

          console.log('xx:', gl.TEXTURE7)
        }
        // gl.clearColor(0.0, 0.0, 0.0, 1.0)
        // gl.clear(gl.COLOR_BUFFER_BIT)

        // 通过 drawArrays(gl.TRIANGLES, 0, n) 绘制三角形
        // 第一个参数是指定绘制方式，第二个参数指定从哪个顶点开始绘制，第三个参数指定绘制需要多少个顶点
        // gl.POINTS 点 一系列的点绘制在v0，v1，v2等处。
        // gl.LINES 线段 一系列单独线段。
        // gl.LINE_STRIP 连线 一个相连的线段。
        // gl.LINE_LOOP 回路 一个相连接的回路。
        // gl.TRIANGLES 三角形 一系列单独的三角形。
        // gl.TRIANGLE_STRIP 三角带 一个相邻三角形组成的图形。
        // gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)
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
