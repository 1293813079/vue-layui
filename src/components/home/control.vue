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
          <div class="column"></div>
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
      ]
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
    }
  },
  created() {},
  mounted() {
    layui.use(["carousel"], function() {
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: "#To-do",
        width: "100%", //设置容器宽度
        arrow: "none", //始终显示箭头
        anim: "default", //切换动画方式
        autoplay: false,
        trigger: "hover"
      });
    });
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
.To-do-list ul li >div{
  padding: 10px 15px;
  background: #f8f8f8;
  border-radius: 2px;
  cursor: pointer;
  transition:all .2s;
  color: #999;
}
.To-do-list ul li>div:hover{
  background: #f2f2f2;
  color: #888;
}
.To-do-list ul li >div h3 {
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
}
.To-do-list ul li >div p {
  font-size: 30px;
  color: #009688;
  padding-bottom: 5px;
}
</style>
<style>
#To-do .layui-carousel-ind {
  position: absolute;
  right: 0;
  top: -42px;
}
#To-do .layui-carousel-ind > ul {
  float: right;
  background: 0, 0;
}
#To-do .layui-carousel-ind li {
  background-color: #e2e2e2;
}
#To-do .layui-carousel-ind li.layui-this {
  background-color: #999;
}
</style>









