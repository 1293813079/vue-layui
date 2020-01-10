<template>
  <div>
    <canvas id="code" width="115" height="38" @click="cod()"></canvas>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      vercode:null
    };
  },
  computed: {},
  methods: {
    code() {
      let canvasW = $("#code").width();
      let canvasH = $("#code").height();
      let cars = [];
      //获取任意区间随机数
      let getRandom = function(maxNum) {
        return Math.floor(Math.random() * maxNum);
      };
      //随机颜色
      let getColor = function() {
        let r = getRandom(256),
          g = getRandom(256),
          b = getRandom(256);
        return "rgb(" + [r, g, b].join(",") + ")";
      };
      let ctx = $("#code")[0].getContext("2d");
      let lineNum = 3,
        arcNum = 20;

      //绘制线
      for (let i = 0; i < lineNum; i++) {
        ctx.beginPath();
        ctx.moveTo(getRandom(canvasW), getRandom(canvasH));
        ctx.lineTo(getRandom(canvasW), getRandom(canvasH));
        ctx.strokeStyle = getColor();
        ctx.closePath();
        ctx.stroke();
      }
      //绘制点
      for (let i = 0; i < arcNum; i++) {
        ctx.beginPath();
        ctx.arc(getRandom(canvasW), getRandom(canvasH), 1, 0, 2 * Math.PI);
        ctx.fillStyle = getColor();
        ctx.closePath();
        ctx.fill();
      }
      //绘制验证码
      let codeTxt = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
      for (let i = 0; i < 4; i++) {
        let txt = codeTxt.split("")[getRandom(codeTxt.length)];
        //绘制验证码
        ctx.beginPath();
        ctx.font = "23px AlibabaSans-light-Italics";
        ctx.fillStyle = getColor();
        cars.push(txt);
        ctx.fillText(txt, 20 * i + 20, 25);
        ctx.closePath();
      }
      let cars1 = "";
      cars.forEach(val => {
        cars1 += val;
      });
      this.vercode = cars1;
    },
    cod() {
      let ctx = $("#code")[0].getContext("2d");
      ctx.clearRect(0, 0, $("#code").width(), $("#code").height());
      this.code();
      this.$emit('event', this.vercode)
    }
  },
  created() {},
  mounted() {
    this.code()
    this.$emit('event', this.vercode)
  }
};
</script>
<style scoped>
</style>