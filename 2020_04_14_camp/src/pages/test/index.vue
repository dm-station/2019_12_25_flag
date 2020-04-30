<template>

<div id="container">
  
  <div id="main">
    <img class="abs test_bg" :style="{top:poss.test_bg}" :src='img.test_bg'>
    <img class="abs test_logo" :style="{top:poss.test_logo}" :src='img.test_logo'>
    <!-- 答题box -->
    <div class="abs test_box">
      <img class="abs test_bg1" :src='img.test_bg1'>
      <img class="abs test_cover" :src='img.test_cover'>
      <!-- 填写信息 -->
      <div v-if="btnType=='start'" class="info_box abs">
        <img class="abs test_info" :src='img.test_info'>
        <!-- 出生年月 -->
        <picker class="age" @change="ageChange" :value='ageIndex' :range='ageArray'>
          <view>{{ageArray[ageIndex]}}</view>
        </picker>
        <!-- 身高 -->
        <picker class="height" @change="heightChange" :value='heightIndex' :range='heightArray'>
          <view>{{heightArray[heightIndex]}}</view>
        </picker>
        <!-- 体重 -->
        <picker class="weight" @change="weightChange" :value='weightIndex' :range='weightArray'>
          <view>{{weightArray[weightIndex]}}</view>
        </picker>
      </div>
      <!-- 答题 -->
      <div v-if="btnType!=='start'" class="info_box abs">
        <img class="abs q1" :src='img.q1'>
        <div class="abs q_box">
          <img class="q_a1" @click="qSeled(0)" :src='img.q_a1'>
          <img class="q_a2" @click="qSeled(1)" :src='img.q_a2'>
          <img v-if="questionId < 7" class="q_a3" @click="qSeled(2)" :src="img.q_a3">
          <img v-if="questionId < 7" class="q_a4" @click="qSeled(3)" :src="img.q_a4">
        </div>
      </div>
      <img class="abs test_start" v-if="btnType=='start'" :class="[isClick?'':'po']" :src='img.test_start' @click="testStart()">
      <img class="abs test_start" v-if="btnType=='next'" :class="[isClick?'':'po']" :src='img.test_next' @click="testNext()">
      <img class="abs test_start" v-if="btnType=='complete'" :class="[isClick?'':'po']" :src='img.test_complete' @click="testComplete()">
    </div>

  </div>
  
</div>
  
</template>

<script>
import ExchangeData from '../../logic/ExchangeData'
export default {
  data () {
    return {
      img: {
        test_bg: ExchangeData.getPath('/static/test/test_bg.jpg'),
        test_logo: ExchangeData.getPath('/static/test/test_logo.png'),
        test_bg1: ExchangeData.getPath('/static/test/test_bg1.png'),
        test_cover: ExchangeData.getPath('/static/test/test_cover0.png'),
        test_info: ExchangeData.getPath('/static/test/test_info.png'),
        test_start: ExchangeData.getPath('/static/test/test_start.png'),
        test_next: ExchangeData.getPath('/static/test/test_next.png'),
        test_complete: ExchangeData.getPath('/static/test/test_complete.png'),
        q1: ExchangeData.getPath('/static/test/q1.png'),
        q_a1: ExchangeData.getPath('/static/test/q_a1.png'),
        q_a2: ExchangeData.getPath('/static/test/q_a2.png'),
        q_a3: ExchangeData.getPath('/static/test/q_a3.png'),
        q_a4: ExchangeData.getPath('/static/test/q_a4.png')
      },
      stage: ExchangeData.stage,
      poss: {
        test_bg: 0,
        test_logo: 70,
        test_box: 199
      },
      btnType: 'start', // start=开始答题，next=下一题，complete=完成测试
      isClick: true,
      ageArray: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'], // 年龄
      ageIndex: 3,
      heightArray: ['0cm', '1cm', '2cm', '3cm', '4cm', '5cm', '6cm', '7cm', '8cm', '9cm', '10cm', '11cm', '12cm', '13cm', '14cm', '15cm'], // 身高
      heightIndex: 5,
      weightArray: ['0kg', '1kg', '2kg', '3kg', '4kg', '5kg', '6kg', '7kg', '8kg', '9kg', '10kg', '11kg', '12kg', '13kg', '14kg', '15kg'], // 体重
      weightIndex: 8,
      questionId: 0, // 当前题目索引
      isAge: '', // 选择的是1类还是2类题目
      saveScore: {// 保存分数
        // name: ['总是', '经常', '经常', '经常', '有时', '从不'],
        name: [],
        // score: [0, 3, 6, 10],
        score: [0, 3, 6, 3, 6, 10]
      }
    }
  },
  components: {},
  onLoad: function () {
    // 适配
    for (const key in this.poss) {
      this.poss[key] = this.poss[key] * this.stage.scaleRateH + 'rpx'
    }
    // this.initQuestion()
  },
  onShow: function () {
  },
  onReady: function (res) {
  },

  methods: {
    ageChange (e) {
      this.ageIndex = e.mp.detail.value
      console.log('ageIndex:', e.mp.detail.value, '年龄：', this.ageArray[this.ageIndex])
    },
    heightChange (e) {
      this.heightIndex = e.mp.detail.value
      console.log('heightIndex:', e.mp.detail.value, '身高：', this.heightArray[this.heightIndex])
    },
    weightChange (e) {
      this.weightIndex = e.mp.detail.value
      console.log('weightIndex:', e.mp.detail.value, '体重：', this.weightArray[this.weightIndex])
    },
    initQuestion () {
      console.log('initQuestion：', this.questionId)
      this.btnType = 'next'
      this.questionId = 0
      // 测试用，跳题
      // this.questionId = 6
      this.saveScore = {
        name: [],
        score: []
      }
      this.getQuestion()
    },
    getQuestion () {
      console.log('questionId', this.questionId, '第' + (this.questionId + 1) + '题')
      if (this.questionId > 8) {
        console.log('已经是最后一题拉')
        return
      }
      let age = 2
      let isAge = this.isAge
      let type = 'a'// 8,9题选项的类型

      switch (this.questionId) {
        case 4:
          // 小于6岁追逐进食
          age < 6 ? isAge = 's' : isAge = ''
          type = 'a'
          break
        case 5:
          // 小于2岁超过半小时
          age < 2 ? isAge = 's' : isAge = ''
          type = 'a'
          break
        case 7:
          // 小于2岁--2小时
          age < 2 ? isAge = 's' : isAge = ''
          age < 2 ? type = 'c' : type = 'b'
          break
        case 8:
          type = 'd'
          break
        default:
          isAge = ''
          type = 'a'
      }

      // console.log('isAge', isAge, type)
      this.img.q1 = ExchangeData.getPath('/static/test/q' + this.questionId + isAge + '.png')
      this.img.q_a1 = ExchangeData.getPath('/static/test/q_' + type + '1.png')
      this.img.q_a2 = ExchangeData.getPath('/static/test/q_' + type + '2.png')
      // 1-8题才有3，4选项
      if (this.questionId < 7) {
        this.img.q_a3 = ExchangeData.getPath('/static/test/q_' + type + '3.png')
        this.img.q_a4 = ExchangeData.getPath('/static/test/q_' + type + '4.png')
      } else {
        this.img.q_a3 = ''
        this.img.q_a4 = ''
      }
    },
    qSeled (index) {
      let scores = {
        'q6name': ['总是', '经常', '有时', '从不'],
        'q6score': [0, 3, 6, 10],
        'q7name1': ['不超过20分钟', '20分钟以上'],
        'q7score1': [0, 20],
        'q7name2': ['不超过2小时', '2小时以上'],
        'q7score2': [0, 20],
        'q8name': ['不超过1小时', '1小时以上'],
        'q8score': [0, 10]
      }
      let name = ''
      let score = ''
      switch (this.questionId) {
        case 8:
          name = scores.q8name[index]
          score = scores.q8score[index]
          break
        case 7:
          if (this.isAge === 's') {
            name = scores.q7name1[index]
            score = scores.q7score1[index]
          } else {
            name = scores.q7name2[index]
            score = scores.q7score2[index]
          }
          break
        default:
          name = scores.q6name[index]
          score = scores.q6score[index]
      }
      this.saveScore.name[this.questionId] = name
      this.saveScore.score[this.questionId] = score
      console.log(name, score, this.saveScore)
    },
    testStart () {
      console.log('开始答题')
      if (!this.ageArray[this.ageIndex]) {
        ExchangeData.showToast('请选择年龄', 1000)
        return false
      } else if (!this.heightArray[this.heightIndex]) {
        ExchangeData.showToast('请选择身高', 1000)
      } else if (!this.weightArray[this.weightIndex]) {
        ExchangeData.showToast('请选择体重', 1000)
      } else {
        ExchangeData.showToast('通过', 1000)
        // 防止连点并ajax
        this.isClick = false
        // 成功
        this.isClick = true
        this.btnType = 'next'
      }
    },
    testNext () {
      if (this.saveScore.name.length !== this.questionId + 1) {
        console.log('请选择答案')
        // ExchangeData.showToast('请选择答案', 1000)
        return
      }
      // console.log('下一题', this.questionId,this.saveScore.name)
      if (this.questionId < 8) {
        this.questionId++
        this.getQuestion()
      }
      if (this.questionId === 8) {
        this.btnType = 'complete'
      }
    },
    testComplete () {
      console.log('完成测试')
      // 防止连点并ajax
      this.isClick = false
      // 成功
      this.isClick = true
    }
  }
}
</script>

<style scoped>

#main{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
}
.test_bg{
  width: 100%;
  height: 1480rpx;
  left: 0;
  top: 0;
}
.test_logo{
  width: 503rpx;
  height: 85rpx;
  left: 131rpx;
  top: 70rpx;
}
.test_box{
  width: 655rpx;
  height: 1088rpx;
  left: 62rpx;
  top: 199rpx;
}
.test_bg1{
  width: 655rpx;
  height: 1088rpx;
}
.test_cover{
  width: 542rpx;
  height: 476rpx;
  left: 42rpx;
  top: 32rpx;
}

.question_box,.info_box{
  width: 750rpx;
  height: 358rpx;
  top: 601rpx;
  left: -62rpx;
}
.test_info{
  width: 750rpx;
  height: 358rpx;
}
.test_start{
  width: 216rpx;
  height: 80rpx;
  left: 206rpx;
  top: 942rpx;
}
.age,.height,.weight{
  width: 173rpx;
  font-size: 30rpx;
  color: #b2b2b2;
  height: 50rpx;
  line-height: 50rpx;
  position: absolute;
  top: 136rpx;
  /* background: red; */
  left: 366rpx;
}
.height{
  top: 198rpx;
}
.weight{
  top: 264rpx;
}

.q1{
  width: 750rpx;
  height: 358rpx;
}
.q_box{
  width: 540rpx;
  top: 245rpx;
  left: 93rpx;
}
.q_a1,.q_a2,.q_a3,.q_a4{
  width: 134rpx;
  height: 80rpx;
  float: left;
}
 
</style>
