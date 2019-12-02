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
          <div class="column"></div>
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
              <div class="layui-progress-bar layui-bg-red" lay-percent="1/3" style="width:calc(100% / 3)"><span class="layui-progress-text">1/3</span></div>
            </div>

            <div class="layui-progress" lay-showPercent="yes">
              <div class="layui-progress-bar layui-bg-red" lay-percent="30%" style="width: 30%;"><span class="layui-progress-text">30%</span></div>
            </div>

            <div class="layui-progress layui-progress-big" lay-showPercent="yes">
              <div class="layui-progress-bar layui-bg-green" lay-percent="50%" style="width: 50%;"><span class="layui-progress-text">50%</span></div>
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
  mounted() {}
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
.layui-progress{
  margin: 20px 0;
}
</style>