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

const vs = `
  attribute vec3 aPos;
  attribute vec2 aVertexTextureCoord;
  varying highp vec2 vTextureCoord;

  void main(void){
    gl_Position = vec4(aPos, 1);
    vTextureCoord = aVertexTextureCoord;
  }
`

const fs = `
  varying highp vec2 vTextureCoord;
  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
`

const vertex = [
  -1, -1, 0.0,
  1, -1, 0.0,
  1, 1, 0.0,
  -1, 1, 0.0
]

const vertexIndice = [
  0, 1, 2,
  0, 2, 3
]

const texCoords = [
  0.0, 0.0,
  1.0, 0.0,
  1.0, 1.0,
  0.0, 1.0
]

/*
*@method 创建着色器
*@param gl 渲染上下文
*@param src 数据源
*@param type 着色器类型
*/
function createShader (gl, src, type) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Error compiling shader: ' + gl.getShaderInfoLog(shader))
  }
  return shader
}

const buffers = {}

function createRenderer (canvas, width, height) {
  // 返回 Canvas 的绘图上下文
  const gl = canvas.getContext('webgl')
  console.log(gl, 'gl1')
  if (!gl) {
    console.error('Unable to get webgl context.')
    return
  }
  // 获取系统信息
  const info = wx.getSystemInfoSync()
  gl.canvas.width = info.pixelRatio * width
  gl.canvas.height = info.pixelRatio * height
  // 设置视口
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)

  // 创建一个顶点着色器
  const vertexShader = createShader(gl, vs, gl.VERTEX_SHADER)
  // 创建一个片元着色器
  const fragmentShader = createShader(gl, fs, gl.FRAGMENT_SHADER)

  // 创建着色程序
  const program = gl.createProgram()
  // 附加着色器
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  // 链接着色器
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program.')
    return
  }
  // 使用着色器
  gl.useProgram(program)

  // 创建并初始化了一个纹理信息
  const texture = gl.createTexture()
  // 用来激活指定的纹理单元
  gl.activeTexture(gl.TEXTURE0)
  // 向target绑定纹理对象
  gl.bindTexture(gl.TEXTURE_2D, texture)
  // 对纹理图像进行y轴反转
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  // 配置纹理参数
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  // 向target绑定纹理对象
  gl.bindTexture(gl.TEXTURE_2D, null)

  // 通过 createBuffer() 方法创建一个缓冲区对象
  buffers.vertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW)

  buffers.vertexIndiceBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexIndiceBuffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertexIndice), gl.STATIC_DRAW)

  // getAttribLocation从刚才创建的GLSL着色程序中找到这个属性值所在的位置
  const aVertexPosition = gl.getAttribLocation(program, 'aPos')
  // 告诉显卡从当前绑定的缓冲区（bindBuffer()指定的缓冲区）中读取顶点数据
  gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0)
  // 将指定索引处的通用顶点属性数组打开到属性数组列表中
  gl.enableVertexAttribArray(aVertexPosition)

  buffers.trianglesTexCoordBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.trianglesTexCoordBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW)

  const vertexTexCoordAttribute = gl.getAttribLocation(program, 'aVertexTextureCoord')
  gl.enableVertexAttribArray(vertexTexCoordAttribute)
  gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0)

  // 获取u_Sampler的存储位置
  const samplerUniform = gl.getUniformLocation(program, 'uSampler')
  // 将0号纹理传递给着色器
  gl.uniform1i(samplerUniform, 0)

  return (arrayBuffer, width, height) => {
    // 向target绑定纹理对象
    gl.bindTexture(gl.TEXTURE_2D, texture)
    // 配置纹理图像
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, arrayBuffer)
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
  }
}

export default {
  data () {
    return {
      width: 288,
      height: 358
    }
  },
  created () {

  },
  onReady: function () {
    // 新增了requestAnimationFrame方法，但只能在Canvas组件的WebGL模式中使用。
    // function draw () {
    //   // todo
    //   canvas.requestAnimationFrame(draw)
    // }
    // canvas.requestAnimationFrame(draw)

    // 先获取Canvas对象，接着从Canvas对象获取webgl对象。
    // 方式1
    const selector = wx.createSelectorQuery()
    selector.select('#webgl')
      .node(this.init.bind(this))
      .exec()
    // 方式2
    // selector.select('#webgl').node().exec((res) => {
    //   console.log(res)
    //   const canvas = res[0].node
    //   const gl = canvas.getContext('webgl')
    //   console.log(gl)
    //   this.init(res[0])
    // })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'AR示例demo'
    })
    // const context = wx.createCameraContext()
    // const listener = context.onCameraFrame((frame) => {
    //   console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
    // ArrayBuffer转为base64
    // const arrayBuffer = new Uint8Array(frame.data)
    // const base64 = wx.arrayBufferToBase64(frame.data)
    // })
    // listener.start()
    // console.log(context)
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
      const canvas = res.node
      // 创建 camera 上下文 CameraContext 对象
      const context = wx.createCameraContext()
      const render = createRenderer(canvas, this.width, this.height)

      if (!render || typeof render !== 'function') return
      // 获取 Camera 实时帧数据
      const listener = context.onCameraFrame((frame) => {
        render(new Uint8Array(frame.data), frame.width, frame.height)
      })

      listener.start()
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
