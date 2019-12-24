<template>
  <div class="box">
    <!-- 左侧 -->
    <div class="layui-col-md8">
      <div class="layui-col-md6">
        <div class="content">
          <div class="header">快捷方式</div>
          <div class="column">
            <ul class="Quick">
              <li class="layui-col-xs3" v-for="(item,index) in Quick" :key="index">
                <i class="layui-icon" :class="item.icon"></i>
                <p>{{item.tite}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="layui-col-md6">
        <div class="content">
          <div class="header">待办事项</div>
          <div class="column">
            <div class="layui-carousel" id="To-do">
              <div carousel-item>
                <div class="To-do-list" v-for="(item,index) in planting" :key="index">
                  <ul>
                    <li class="layui-col-xs6" v-for="(items,indexs) in item.children" :key="indexs">
                      <div>
                        <h3>{{items.text}}</h3>
                        <p>{{items.number}}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md12">
        <div class="content">
          <div class="header">数据概览</div>
          <div class="column">
            <!-- <div
              class="layui-carousel layadmin-carousel layadmin-dataview"
              id="test2">
              <div carousel-item>
                <div>
                  <div class="overview" id="overview"></div>
                </div>                                   
                <div>
                  <div class="overview" id="overview1"></div>
                </div>
                <div>
                  <div class="overview" id="overview3"></div>
                </div>
              </div>
            </div>-->
            <div class="overview">
              <ul>
                <li @mouseover="overview=0" :class="overview==0? 'active':''"></li>
                <li @mouseover="overview=1" :class="overview==1? 'active':''"></li>
                <li @mouseover="overview=2" :class="overview==2? 'active':''"></li>
              </ul>
              <!-- <transition name="el-fade-in"> -->                                
              <div class="overview" id="overview" v-show="overview==0"></div>
              <div class="overview" id="overview1" v-show="overview==1"></div>
              <div class="overview" id="overview3" v-show="overview==2"></div>
              <!-- </transition> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧 -->
    <div class="layui-col-md4">
      <div class="layui-col-md12">
        <div class="content">
          <div class="header">版本信息</div>
          <div class="column">
            <table class="layui-table">
              <tr>
                <td>当前版本</td>
                <td>Amin -1.0.0</td>
              </tr>
              <tr>
                <td>基于框架</td>
                <td>Vue ^2.5.2</td>
              </tr>
              <tr>
                <td>主要特色</td>
                <td>零门槛 / 响应式 / 清爽 / 极简</td>
              </tr>
              <tr>
                <td>获取渠道</td>
                <td>
                  <button
                    target="_blank"
                    class="layui-btn layui-btn-danger"
                    @click="grant('已授权')"
                  >获取授权</button>
                  <button target="_blank" class="layui-btn" @click="grant('已是最新版')">下载新版</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="layui-col-md12">
        <div class="content">
          <div class="header">效果报告</div>
          <div class="column">
            <div class="layui-progress" lay-showPercent="true">
              <div
                class="layui-progress-bar layui-bg-red"
                lay-percent="1/3"
                style="width:calc(100% / 3)"
              >
                <span class="layui-progress-text">1/3</span>
              </div>
            </div>

            <div class="layui-progress" lay-showPercent="yes">
              <div class="layui-progress-bar layui-bg-red" lay-percent="30%" style="width: 30%;">
                <span class="layui-progress-text">30%</span>
              </div>
            </div>

            <div class="layui-progress layui-progress-big" lay-showPercent="yes">
              <div class="layui-progress-bar layui-bg-green" lay-percent="50%" style="width: 50%;">
                <span class="layui-progress-text">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md12">
        <div class="content">
          <div class="header">实时监控</div>
          <div class="column">
            <el-progress :percentage="parseInt(Math.random() * (1 - 100)) + 100"></el-progress>
            <el-progress :percentage="parseInt(Math.random() * (1 - 100)) + 100" :format="format"></el-progress>
            <el-progress :percentage="parseInt(Math.random() * (1 - 100)) + 100" status="success"></el-progress>
            <el-progress :percentage="parseInt(Math.random() * (1 - 100)) + 100" status="warning"></el-progress>
            <el-progress :percentage="parseInt(Math.random() * (1 - 100)) + 100" status="exception"></el-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      planting: [
        {
          children: [
            {
              text: "待审评论",
              number: "66"
            },
            {
              text: "待审帖子",
              number: "15"
            },
            {
              text: "待审商品",
              number: "99+"
            },
            {
              text: "待发货",
              number: "66"
            }
          ]
        },
        {
          children: [
            {
              text: "待审友情链接",
              number: "5"
            }
          ]
        }
      ],
      Quick: [
        {
          icon: "layui-icon-console",
          tite: "主页一",
          url: ""
        },
        {
          icon: "layui-icon-chart",
          tite: "主页二",
          url: ""
        },
        {
          icon: "layui-icon-template-1",
          tite: "弹框",
          url: ""
        },
        {
          icon: "layui-icon-chat",
          tite: "聊天",
          url: ""
        },
        {
          icon: "layui-icon-find-fill",
          tite: "进度条",
          url: ""
        },
        {
          icon: "layui-icon-survey",
          tite: "工单",
          url: ""
        },
        {
          icon: "layui-icon-user",
          tite: "用户",
          url: ""
        },
        {
          icon: "layui-icon-set",
          tite: "设置",
          url: ""
        }
      ],
      overview: 0,
      // 图表
      seven_chart: {},
      seven_chart_two: {},
      seven_chart_three: {}
    };
  },
  computed: {},
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    // 弹框
    grant(a) {
      layui.use(["laypage", "layer"], function() {
        let laypage = layui.laypage,
          layer = layui.layer;
        layer.msg(a, { icon: 1 });
      });
    },
    // 图表
    data_echarts(val) {
      let a = [];
      for (let i in val) {
        a.push(parseInt(Math.random() * (1 - 1000)) + 1000);
      }
      return a;
    },
    getBeforeDate(n) {
      let date = new Date();
      let year, month, day;
      date.setDate(date.getDate() + n);
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();
      let s =
        year +
        "-" +
        (month < 10 ? "0" + month : month) +
        "-" +
        (day < 10 ? "0" + day : day);
      return s;
    },
    get_echarts() {
      this.seven_chart = echarts.init(document.getElementById("overview"));
      let data1 = [
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30"
      ];
      this.seven_chart.setOption({
        title: {
          text: "今日流量趋势"
        },
        color: ["#009688", "#1E9FFF"],
        legend: {
          data: ["PV", "UV"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            //折线图，柱形图，堆积图，平铺切换
            restore: { show: true }, //还原
            saveAsImage: { show: true }
          }
        },
        xAxis: [
          {
            type: "value",
            type: "category",
            boundaryGap: false,
            data: data1
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        yAxis: [
          {
            type: "value"
          }
        ],
        calculable: true,
        series: [
          {
            name: "PV",
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                color: "#009688"
              }
            },
            itemStyle: {
              normal: {
                areaStyle: { type: "default", color: "#009688", opacity: 0.5 }
              }
            },
            data: this.data_echarts(data1)
          },
          {
            name: "UV",
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                color: "#1E9FFF"
              }
            },
            itemStyle: {
              normal: {
                areaStyle: { type: "default", color: "#1E9FFF", opacity: 0.5 }
              }
            },
            data: this.data_echarts(data1)
          }
        ]
      });
    },
    get_echarts_two() {
      let data = ["Chrome", "Firefox", "IE 8.0", "Safari", "其他浏览器"];
      this.seven_chart_two = echarts.init(document.getElementById("overview1"));
      this.seven_chart_two.setOption({
        title: {
          text: "访客浏览器分布",
          x: "center"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          left: 10,
          data: data
        },
        calculable: true,
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            label: {
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0,0,0,0.5)"
              }
            },
            data: [
              {
                name: "Chrome",
                value: parseInt(Math.random() * (1 - 1000)) + 1000
              },
              {
                name: "Firefox",
                value: parseInt(Math.random() * (1 - 1000)) + 1000
              },
              {
                name: "IE 8.0",
                value: parseInt(Math.random() * (1 - 1000)) + 1000
              },
              {
                name: "Safari",
                value: parseInt(Math.random() * (1 - 1000)) + 1000
              },
              {
                name: "其他浏览器",
                value: parseInt(Math.random() * (1 - 1000)) + 1000
              }
            ]
          }
        ]
      });
    },
    get_echarts_three() {
      let data = [
        this.getBeforeDate(-6),
        this.getBeforeDate(-5),
        this.getBeforeDate(-4),
        this.getBeforeDate(-3),
        this.getBeforeDate(-2),
        this.getBeforeDate(-1),
        this.getBeforeDate(0)
      ];
      this.seven_chart_three = echarts.init(
        document.getElementById("overview3")
      );
      this.seven_chart_three.setOption({
        title: {
          text: "最近一周新增的用户量",
          x: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        color: "#009688",
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data,
          axisLine: {
            lineStyle: {
              color: "#009688"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              widthColor: "#009688"
            }
          }
        },
        series: [
          {
            name: "新增用户",
            type: "line",
            data: this.data_echarts(data)
          }
        ]
      });
    }
  },
  created() {
  },
  mounted() {
    layui.use(["carousel"], function() {
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: "#To-do",
        width: "100%", //设置容器宽度
        height: "100%",
        arrow: "none", //始终显示箭头
        anim: "default", //切换动画方式
        autoplay: false,
        trigger: "hover"
      });

      carousel.render({
        elem: "#test2",
        width: "100%", //设置容器宽度
        arrow: "none", //始终显示箭头
        height: "100%",
        anim: "fade", //切换动画方式
        autoplay: false,
        trigger: "click"
      });
    });
    this.$nextTick(() => {
      this.get_echarts();
      this.get_echarts_two();
      this.get_echarts_three();
    });
    window.onresize = () => {
      console.log('123')
      this.seven_chart.resize();
      this.seven_chart_two.resize();
      this.seven_chart_three.resize();
    };
  },
  watch: {
    overview() {
      let a = this.overview;
      if (a == 0) {
        let t = setTimeout(() => {
          this.seven_chart.resize();
          clearTimeout(t);
        });
      } else if (a == 1) {
        let t = setTimeout(() => {
          this.seven_chart_two.resize();
          clearTimeout(t);
        });
      } else if (a == 2) {
        let t = setTimeout(() => {
          this.seven_chart_three.resize();
          clearTimeout(t);
        });
      }
    }
  }
};
</script>
<style scoped>
.box {
  padding: 15px;
  background: #f2f2f2;
  overflow: hidden;
}
.layui-col-md8 > div,
.layui-col-md4 > div {
  padding: 7.5px;
}
.layui-col-md8 > div > .content,
.layui-col-md4 > div > .content {
  background: #fff;
}
.header {
  border-radius: 2px 2px 0 0;
  font-size: 14px;
  color: #333;
  padding: 15px;
  border-bottom: 1px solid #f6f6f6;
}
.column {
  padding: 10px 15px;
}
.Quick {
  width: 100%;
  overflow: hidden;
}
.Quick > li {
  padding: 5px;
  cursor: pointer;
}
.Quick > li:hover i {
  background: #f2f2f2;
}
.Quick > li > i {
  display: inline-block;
  width: 100%;
  font-size: 30px;
  color: #333;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border-radius: 2px;
  background: #f8f8f8;
  transition: all 0.2s;
}
.Quick > li > p {
  color: #666;
  text-align: center;
  font-size: 14px;
  padding: 5px 0;
}
.layui-btn {
  margin-bottom: 9px;
}
.layui-btn + .layui-btn {
  margin-left: 0;
}
.layui-progress {
  margin: 20px 0;
}
#To-do {
  height: 185px !important;
  background: #fff;
}
.To-do-list {
  background: transparent;
}
.To-do-list ul li {
  padding: 5px;
}
.To-do-list ul li > div {
  padding: 10px 15px;
  background: #f8f8f8;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
  color: #999;
}
.To-do-list ul li > div:hover {
  background: #f2f2f2;
  color: #888;
}
.To-do-list ul li > div h3 {
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
}
.To-do-list ul li > div p {
  font-size: 30px;
  color: #009688;
  padding-bottom: 5px;
}

.layui-carousel > [carousel-item]:before {
  display: none;
}
#test2 {
  width: 100%;
  height: 332px !important;
  background: #fff;
}
#test2 > div > div {
  background: #fff;
}
.overview {
  width: 100% !important;
  height: 332px;
}
</style>
<style>
#To-do .layui-carousel-ind,
#test2 .layui-carousel-ind {
  position: absolute;
  right: 0;
  top: -42px;
}
#To-do .layui-carousel-ind > ul,
#test2 .layui-carousel-ind > ul {
  float: right;
  background: 0, 0;
}
#To-do .layui-carousel-ind li,
#test2 .layui-carousel-ind li {
  background-color: #e2e2e2;
}
#To-do .layui-carousel-ind li.layui-this,
#test2 .layui-carousel-ind li.layui-this {
  background-color: #999;
}

.overview {
  width: 100%;
}
.overview > ul {
  position: absolute;
  right: 18px;
  top: 25px;
}
.overview > ul > li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e2e2e2;
  margin: 0 3px;
  float: left;
  cursor: pointer;
  transition: 0.2s all;
}
.overview > ul > li.active {
  background: #999;
}
</style>









