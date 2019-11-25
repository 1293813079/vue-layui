<template>
  <div class="app">
    <!-- 头部导航 -->
    <div class="nav">
      <div class="nav_left">
        <div class="nav_logo" :class="[flexible? '' :'nav_logo1']">
          <span v-if="flexible">layuiAdmin</span>
          <el-tooltip class="item" content="首页" placement="bottom" v-if="!flexible">
            <i class="el-icon-s-grid" @click="home()"></i>
          </el-tooltip>
        </div>
        <ul class="nav_ul" id="nav_ul1">
          <li>
            <i
              class="layui-icon"
              :class="[flexible? 'layui-icon-shrink-right' :'layui-icon-spread-left']"
              @click="sidebar()"
            ></i>
          </li>
          <li v-if="timer">
            <i class="layui-icon layui-icon-website"></i>
          </li>
          <li>
            <i class="layui-icon layui-icon-refresh-3"></i>
          </li>
          <li v-if="timer">
            <input type="text" placeholder="搜索..." class="layui-input" v-model="input" />
          </li>
          <span class="layui-nav-bar" id="layui-nav-bar1"></span>
        </ul>
      </div>
      <div class="nav_right">
        <ul class="nav_ul" id="nav_ul2">
          <li>
            <i class="layui-icon layui-icon-notice"></i>
          </li>
          <li v-if="timer">
            <i class="layui-icon layui-icon-theme"></i>
          </li>
          <li v-if="timer">
            <i class="layui-icon layui-icon-note"></i>
          </li>
          <li v-if="timer" @click="screen()">
            <i
              class="layui-icon"
              :class="[fullscreen? 'layui-icon-screen-restore' :'layui-icon-screen-full']"
            ></i>
          </li>
          <li class="personal">
            <span>管理员</span>
            <span class="el-icon-caret-bottom"></span>
            <div class="personal_ul">
              <div>基本信息</div>
              <div>修改密码</div>
              <hr />
              <div>退出</div>
            </div>
          </li>
          <li @click="vertical=!vertical">
            <i class="layui-icon layui-icon-more-vertical"></i>
          </li>
          <span class="layui-nav-bar" id="layui-nav-bar2"></span>
        </ul>
      </div>
    </div>
    <!-- 头部导航 end-->

    <!-- 主体内容 -->
    <div class="container">
      <!-- 右边栏 -->
      <div class="vertical_ui" :class="[vertical? 'vertical_ui1' :'vertical_ui2']" v-if="vertical">
        <div>
          <div class="vertical_ui_top">版本信息</div>
          <div class="vertical_ui_box">
            <p>
              当前版本：Amin
              <em>-1.0.0</em>
            </p>
            <p>
              基于框架：Vue
              <em>^2.5.2</em>
            </p>
            <div class="vertical_ui_box_btn">
              <button target="_blank" class="layui-btn layui-btn-danger" @click="grant('已授权')">获取授权</button>
              <button target="_blank" class="layui-btn" @click="grant('已是最新版')">下载新版</button>
            </div>
          </div>
          <div class="vertical_ui_top">关于版权</div>
          <div class="vertical_ui_box">
            <p>
              © 2019
              <em>admin.com</em> 版权所有
            </p>
          </div>
        </div>
      </div>
      <!-- 右边栏 end-->
    </div>
    <!-- 主体内容 end-->
    <div class="layer" v-if="vertical" @click="vertical=!vertical"></div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      // 导航栏
      input: "",
      flexible: true,
      fullscreen: false,
      vertical: false,
      screenWidth: document.body.clientWidth, // 屏幕宽度
      timer: true
      // 导航栏 end
    };
  },
  computed: {},
  methods: {
    sidebar() {
      this.flexible = !this.flexible;
    },
    home() {
      this.$router.push({ path: "/index" });
    },
    // 全屏功能
    screen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },

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
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        if (this.screenWidth < 768) {
          this.flexible = false;
          this.timer = false;
        }
        if (this.screenWidth > 768) {
          this.timer = true;
        }
        if (this.screenWidth < 985) {
          this.flexible = false;
        }
      })();
    };
    if (this.screenWidth < 768) {
      this.flexible = false;
      this.timer = false;
    }
    if (this.screenWidth > 768) {
      this.timer = true;
    }
    if (this.screenWidth < 985) {
      this.flexible = false;
    }
  }
};
$(function() {
  function Movein(a, b, c) {
    $(a).css({
      left: $(b).position().left + c / 2,
      width: $(b).innerWidth() - c,
      top: 0,
      marginRight: 0,
      marginLeft: 0,
      opacity: 1
    });
  }
  function Moveout(a, b) {
    let cur_width = $(b)
      .find("li")
      .innerWidth();
    $(a).css({
      width: 0,
      marginRight: cur_width / 2,
      marginLeft: cur_width / 2,
      opacity: 0
    });
  }
  // 导航流动
  $("#nav_ul1 li").hover(function() {
    let cur_width = parseInt($(this).css("paddingLeft")) * 2;
    Movein("#layui-nav-bar1", this, cur_width);
  });
  $("#nav_ul1").mouseleave(function() {
    Moveout("#layui-nav-bar1", this);
  });

  $("#nav_ul2 li").hover(function() {
    Movein("#layui-nav-bar2", this, 0);
  });
  $("#nav_ul2").mouseleave(function() {
    Moveout("#layui-nav-bar2", this);
  });
});
</script>
<style scoped>
.app {
  width: 100%;
  height: 100%;
}
.nav {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  box-sizing: border-box;
  background-color: #009688;
  display: -webkit-box;
  justify-content: space-between;
  transition: all 0.3s;
}
.nav_left > .nav_logo {
  width: 220px;
  height: 49px;
  padding: 0 15px;
  font-weight: 400;
  box-sizing: border-box;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  line-height: 49px;
  float: left;
}
.nav_left > .nav_logo1 {
  width: 60px;
}
.nav_ul {
  display: inline-block;
  padding: 0 10px;
  position: relative;
}
.nav_ul li {
  padding: 0 15px;
  transition: all 0.3s;
  font-size: 14px;
  color: #fff;
  float: left;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.layui-nav-bar {
  position: absolute;
  height: 3px;
  bottom: auto;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
}
.layui-input {
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  border: none;
  cursor: text;
  font-size: 12px;
  color: #333;
}
.el-icon-s-grid {
  cursor: pointer;
}

.personal {
  position: relative;
}
.el-icon-caret-bottom {
  transition: all 0.3s;
}
.personal:hover .el-icon-caret-bottom {
  transform: rotate(-180deg);
}

.personal_ul {
  display: none;
  position: absolute;
  left: 0;
  top: 50px;
  min-width: 100%;
  line-height: 36px;
  padding: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border: 1px solid #d2d2d2;
  background-color: #fff;
  z-index: 100;
  border-radius: 2px;
  white-space: nowrap;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.personal_ul > div {
  color: #333;
  padding: 0 20px;
}
.personal_ul > div:hover {
  background: #f2f2f2;
}
.personal:hover .personal_ul {
  display: block;
  animation-name: layui-upbit;
}
@keyframes layui-upbit {
  from {
    transform: translate3d(0, 30px, 0);
    opacity: 0.3;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.vertical_ui {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 300px;
  height: calc(100% - 50px);
  background: #fff;
  border-radius: 2px;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  z-index: 999;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  overflow-y: auto;
}
.vertical_ui1 {
  animation-name: vertical_ui;
}
.vertical_ui2 {
  animation-name: vertical_ui1;
}
.vertical_ui_top {
  text-align: left;
  height: 42px;
  line-height: 42px;
  border-bottom: 2px solid #f6f6f6;
  color: #333;
  border-radius: 2px 2px 0 0;
  font-size: 14px;
  padding: 0 15px;
}
.vertical_ui_box {
  line-height: 22px;
  font-size: 14px;
  color: #666;
  padding: 10px 15px;
}
.vertical_ui_box > p {
  margin-bottom: 10px;
}
.vertical_ui_box > p > em {
  font-size: 12px;
}
@keyframes vertical_ui {
  from {
    transform: translate3d(300px, 0, 0);
    opacity: 0.3;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes vertical_ui1 {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    transform: translate3d(300px, 0, 0);
    opacity: 0.3;
  }
}
/* 遮挡层 */
.layer {
  position: fixed;
  pointer-events: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  background-color: rgb(0, 0, 0);
  opacity: 0.1;
}
/* 主体 */
.container {
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
}
</style>