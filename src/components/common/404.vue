<template>
  <div class="box">
    <div>
      <svg
        viewBox="0 0 837 1045"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <path
            d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
            id="Polygon-1"
            stroke="#007FB2"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
            id="Polygon-2"
            stroke="#EF4A5B"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
            id="Polygon-3"
            stroke="#795D9C"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
            id="Polygon-4"
            stroke="#F2773F"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
            id="Polygon-5"
            stroke="#36B455"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
        </g>
      </svg>
      <div class="message-box">
        <h1>404</h1>
        <p>不好！你好像迷路了</p>
        <div class="buttons-con">
          <div class="action-link-wrap">
            <a @click="$router.push({path: '/'})" class="layui-btn">返回首页</a>
            <a onclick="history.back(-1)" class="layui-btn layui-btn-normal">返回上一页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 100%;
  background-color: #2f3242;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message-box > .action-link-wrap > a {
  color: #fff !important;
}
#Polygon-1,
#Polygon-2,
#Polygon-3,
#Polygon-4,
#Polygon-4,
#Polygon-5 {
  -webkit-animation: float 1s infinite ease-in-out alternate;
  animation: float 1s infinite ease-in-out alternate;
}
#Polygon-2 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
#Polygon-3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
#Polygon-4 {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
#Polygon-5 {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

@-webkit-keyframes float {
  100% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}

@keyframes float {
  100% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@media (max-width: 768px) {
  svg {
    width: 235px;
    height: 315px;
    margin: auto;
    display: block;
  }
  .message-box {
    color: #fff;
    font-weight: 500;
  }
  .message-box > h1 {
    font-size: 40px;
  }
  .message-box > p {
    font-size: 12px;
    padding: 15px 0;
    font-weight: 300;
  }
  .layui-btn-normal {
    margin-left: 25px;
  }
}
@media (min-width: 768px) {
  .box > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 300px;
    height: 420px;
    margin-right: 40px;
  }
  .message-box {
    color: #fff;
    font-weight: 500;
  }
  .message-box > h1 {
    font-size: 80px;
  }
  .message-box > p {
    font-size: 20px;
    padding: 30px 0;
    font-weight: 300;
  }
}
</style>