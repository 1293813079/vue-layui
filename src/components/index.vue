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
          <li @click="sidebar()">
            <i
              class="layui-icon"
              :class="[flexible? 'layui-icon-shrink-right' :'layui-icon-spread-left']"
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
            <span class="layui-badge-dot"></span>
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
      <!-- 左边栏 -->
      <div class="leftsidebar" :class="[flexible? '' :'nav_logo1']">
        <ul class="leftsidebar_ul">
          <li v-for="(item,index) in three" :key="index">
            <!-- 一层 -->
            <div
              class="leftsidebar_ul_One"
              @click="Open(index)"
              :class="three_index_s==index ? 'Selection':''"
              v-if="flexible"
            >
              <i class="layui-icon" :class="item.icon"></i>
              <em>{{item.title}}</em>
              <span
                class="layui-nav-more"
                v-if="item.children"
                :class="three_index==index? 'layui-nav-more-s':''"
              ></span>
            </div>

            <el-tooltip class="item" :content="item.title" placement="right" v-else>
              <div
                class="leftsidebar_ul_One"
                @click="shrink(index)"
                :class="three_index_s==index ? 'Selection':three_index==index?'Selection1':''"
              >
                <i class="layui-icon" :class="item.icon"></i>
              </div>
            </el-tooltip>
            <!-- 二层 -->
            <transition name="myWrap" class="myWrap" v-if="flexible">
              <dl class="leftsidebar_ul_Two" v-if="item.children && three_index==index">
                <dd v-for="(item_two,index_two) in item.children" :key="index_two">
                  <p
                    @click="Open_two(index_two,index)"
                    :class="three_indextwo==index+'-'+index_two&&item_two.children ? 'Selectiontwo':three_indextwo_s==index+'-'+index_two?'Selection':''"
                  >
                    <em>{{item_two.title}}</em>
                    <span
                      v-if="item_two.children"
                      :class="three_indextwo==index+'-'+index_two? 'layui-nav-more-s':''"
                    ></span>
                  </p>
                  <!-- 三层 -->
                  <dl
                    class="leftsidebar_ul_Three"
                    v-if="item_two.children && three_indextwo==index+'-'+index_two"
                  >
                    <dd
                      v-for="(item_three,index_three) in item_two.children"
                      :key="index_three"
                      @click="Open_Three(index+'-'+index_two+'-'+index_three)"
                      :class="three_indexthree==index+'-'+index_two+'-'+index_three? 'Selection':''"
                    >{{item_three.title}}</dd>
                  </dl>
                </dd>
              </dl>
            </transition>
          </li>
          <span id="layui-nav-bar3"></span>
        </ul>
      </div>
      <!-- 左边栏 end-->
      <!-- 路由 -->
      <div  :class="[flexible? 'ner' :'ner1']"> 
        <router-view></router-view>
      </div>
      <!-- 路由 end -->
      <!-- 右边栏 -->
      <div class="vertical_ui" :class="[vertical? 'vertical_ui1' :'vertical_ui2']" v-if="vertical">
        <div v-if="timer">
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

        <div class="vertical_timer" v-else>
          <div class="vertical_ui_top">
            <i class="layui-icon layui-icon-about"></i>获得产品
          </div>
          <div class="vertical_ui_top">
            <i class="layui-icon layui-icon-theme"></i>设置主题
          </div>
          <div class="vertical_ui_top">
            <i class="layui-icon layui-icon-note"></i>本地便签
          </div>
        </div>
      </div>
      <!-- 右边栏 end-->
    </div>
    <!-- 主体内容 end-->
    <div class="layer" v-if="vertical" @click="vertical=!vertical"></div>
    <div class="layer" v-if="flexibles" @click="flexibles=!flexibles,flexible=!flexible"></div>
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
      timer: true,
      // 导航栏 end
      // 侧边栏
      flexibles: false,
      three_index: 0,
      three_index_s: null,
      three_indextwo: null,
      three_indextwo_s: 0,
      three_indexthree: null,
      three: [
        {
          title: "首页",
          url: "",
          icon: "layui-icon-home",
          children: [
            {
              title: "控制台",
              url: ""
            },
            {
              title: "主页1",
              url: ""
            },
            {
              title: "主页2",
              url: ""
            }
          ]
        },
        {
          title: "组件",
          url: "",
          icon: "layui-icon-component",
          children: [
            {
              title: "栅格",
              url: "",
              children: [
                {
                  title: "等比例列表排列",
                  url: ""
                }
              ]
            },
            {
              title: "按钮",
              url: ""
            },
            {
              title: "表单",
              url: "",
              children: [
                {
                  title: "表单",
                  url: ""
                }
              ]
            }
          ]
        },
        {
          title: "页面",
          url: "",
          icon: "layui-icon-template",
          children: [
            {
              title: "个人主页",
              url: ""
            }
          ]
        },
        {
          title: "应用",
          icon: "layui-icon-app",
          url: ""
        },
        {
          title: "授权",
          url: "",
          icon: "layui-icon-auz"
        }
      ]
      // 侧边栏 end
    };
  },
  computed: {},
  methods: {
    sidebar() {
      this.flexible = !this.flexible;
      if (this.screenWidth < 768) {
        this.flexibles = !this.flexibles;
      }
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

    // 弹框
    grant(a) {
      layui.use(["laypage", "layer"], function() {
        let laypage = layui.laypage,
          layer = layui.layer;
        layer.msg(a, { icon: 1 });
      });
    },
    // 侧边栏
    shrink(val) {
      let a = this.three_index;
      if (val != a && val != this.three_index_s) {
        this.three_index = val;
        if (this.three[val].children != undefined) {
          this.flexible = !this.flexible;
        }
      }
      if (val == a) {
        this.flexible = !this.flexible;
      }
      if (this.three[val].children == undefined) {
        this.three_index_s = val;
        this.three_indextwo_s = null;
        this.three_indexthree = null;
      }
    },
    Open(val) {
      let a = this.three_index;
      if (val != a && val != this.three_index_s) {
        this.three_index = val;
      }
      if (val == a) {
        this.three_index = null;
      }
      if (this.three[val].children == undefined) {
        this.three_index_s = val;
        this.three_indextwo_s = null;
        this.three_indexthree = null;
      }
    },
    Open_two(val, index) {
      let a = this.three_indextwo;
      let vals = index + "-" + val;
      if (vals != a && vals != this.three_indextwo_s) {
        this.three_indextwo = vals;
      }
      if (vals == a) {
        this.three_indextwo = null;
      }
      if (this.three[this.three_index].children[val].children == undefined) {
        this.three_indextwo_s = vals;
        this.three_index_s = null;
        this.three_indexthree = null;
      }
    },
    Open_Three(val) {
      let a = this.three_indexthree;
      if (val != a) {
        this.three_indexthree = val;
        this.three_index_s = null;
        this.three_indextwo_s = null;
      }
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
          this.flexibles = false;
        }
        if (this.screenWidth > 768) {
          this.timer = true;
        }
        if (this.screenWidth < 985) {
          this.flexible = false;
          this.flexibles = false;
        }
      })();
    };
    if (this.screenWidth < 768) {
      this.flexible = false;
      this.flexibles = false;
      this.timer = false;
    }
    if (this.screenWidth > 768) {
      this.timer = true;
    }
    if (this.screenWidth < 985) {
      this.flexible = false;
      this.flexibles = false;
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
  // 侧边栏
  $(".leftsidebar_ul li").hover(
    function() {
      $("#layui-nav-bar3").css({
        top: $(this)
          .find(".leftsidebar_ul_One")
          .position().top,
        height: $(this)
          .find(".leftsidebar_ul_One")
          .innerHeight(),
        opacity: 1
      });
    },
    function() {
      let cur_width = $(this)
        .find("li .leftsidebar_ul_One")
        .innerHeight();
      $("#layui-nav-bar3").css({
        height: 0,
        paddingTop: cur_width / 2,
        paddingBotton: cur_width / 2,
        opacity: 0
      });
    }
  );
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
  z-index: 999;
}
.nav_logo1 {
  width: 60px !important;
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
  width: 180px;
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
.layui-badge-dot {
  position: absolute;
  top: 50%;
  margin: -10px 10px 0;
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
  display: flex;
}

/* 左边栏 */
.Selection {
  color: #fff;
  background: #009688;
}
.Selection1 {
  background: rgba(0, 0, 0, 0.3);
}
.Selectiontwo {
  color: #fff;
}
.Selection > i {
  color: #fff !important;
}
.leftsidebar {
  background-color: #20222a;
  width: 220px;
  height: 100%;
  transition: all 0.3s;
  overflow-y: auto;
  z-index: 999;
  position: relative;
}
.vertical_timer > .vertical_ui_top:hover {
  background: #f2f2f2;
}
.vertical_timer > .vertical_ui_top {
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
}
.vertical_timer > div > i {
  margin: 0 10px;
  font-size: 20px;
}
.leftsidebar_ul {
  width: 100%;
  user-select: none;
  position: relative;
}
.leftsidebar_ul > li {
  line-height: 25px;
  background: #28333e;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s;
}
.leftsidebar_ul_One:hover em,
.leftsidebar_ul_One:hover i {
  color: #fff;
}
.leftsidebar_ul_One:hover .layui-nav-more,
.leftsidebar_ul_Two > dd > p:hover > span {
  border-top-color: rgba(255, 255, 255, 0.993);
}
.layui-nav-more-s {
  transform: rotate(-180deg);
  margin-top: 6px !important;
}
.leftsidebar_ul_One {
  padding: 15px;
  transition: all 0.3s;
}
.leftsidebar_ul_One > i {
  display: inline-block;
  width: 30px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
.leftsidebar_ul_One > span,
.leftsidebar_ul_Two > dd > p > span {
  content: "";
  width: 0;
  height: 0;
  border-style: solid dashed dashed;
  border-color: #fff transparent transparent;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  float: right;
  border-width: 6px;
  border-top-color: rgba(255, 255, 255, 0.7);
  margin-top: 12px;
}
#layui-nav-bar3 {
  position: absolute;
  width: 5px;
  left: 0;
  background-color: #009688;
  transition: all 0.2s;
}
/* 二级 */
.leftsidebar_ul_Two {
  padding: 5px 0;
  background-color: rgba(0, 0, 0, 0.3);
}
/* .myWrap{ transition: height .2s all;}
.myWrap-enter-active { animation: identifier .2s;    overflow: hidden; }
.myWrap-leave-active { animation: against .2s ; overflow: hidden; }
@keyframes identifier {
  from { height: 0; }
  to { height: auto; }
}
 
@keyframes against {
  from { height: auto; }
  to { height: 0; }
} */

.leftsidebar_ul_Two > dd > p {
  line-height: 40px;
  padding-left: 45px;
  padding-right: 30px;
  transition: all 0.3s;
}
.leftsidebar_ul_Two > dd > .leftsidebar_ul_Three > dd {
  line-height: 40px;
  padding-left: 55px;
  padding-right: 40px;
  transition: all 0.3s;
}
.leftsidebar_ul_Two > dd > p:hover em {
  color: #fff;
}

.leftsidebar_ul_Two > dd > p > span {
  margin-top: 18px;
}
.leftsidebar_ul_Three {
  padding: 5px 0;
}
.leftsidebar_ul_Three > dd {
  padding: 0 10px;
}
.leftsidebar_ul_Three > dd:hover {
  color: #fff;
}


.ner{
  width: calc(100% - 220px);
  height: 100%;
  overflow-y: auto;
}
.ner1{
  width: calc(100% - 60px);
  height: 100%;
  overflow-y: auto;
}


*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>