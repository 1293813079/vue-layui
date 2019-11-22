<template>
  <div class="app">
    <!-- 头部导航 -->
    <div class="nav">
      <div class="nav_left">
        <div class="nav_logo">
          <span>layuiAdmin</span>
        </div>
        <ul class="nav_ul" id="nav_ul1">
          <li>
            <i class="layui-icon layui-icon-spread-left"></i>
          </li>
          <li>
            <i class="layui-icon layui-icon-website"></i>
          </li>
          <li>
            <i class="layui-icon layui-icon-refresh-3"></i>
          </li>
          <li>
            <input type="text" placeholder="搜索..."  class="layui-input"  v-model="input">
          </li>
          <span class="layui-nav-bar" id="layui-nav-bar1"></span>
        </ul>
      </div>
      <div class="nav_right">
        <ul class="nav_ul" id="nav_ul2">
          <li>
            <i class="layui-icon layui-icon-notice"></i>
          </li>
          <li>
            <i class="layui-icon layui-icon-theme"></i>
          </li>
          <li>
            <i class="layui-icon layui-icon-note"></i>
          </li>
          <li>
            <i class="layui-icon layui-icon-screen-full"></i>
          </li>
          <span class="layui-nav-bar" id="layui-nav-bar2"></span>
        </ul>
      </div>
    </div>
    <!-- 头部导航 end-->
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      input:''
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
$(function() {
  function Movein(a, b,c,d) {
    $(a).css({
      left: $(b).position().left + d,
      width: $(b).innerWidth()+c,
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
  $("#nav_ul1 li").hover(function() {
    let d= parseInt($(this).css("marginLeft"))
    Movein("#layui-nav-bar1", this,0,d);
  });
  $("#nav_ul1").mouseleave(function() {
    Moveout("#layui-nav-bar1", this);
  });

  $("#nav_ul2 li").hover(function() {
    let cur_width = parseInt($(this).css("marginLeft"))*2;
    Movein("#layui-nav-bar2", this,cur_width,0);
  });
  $("#nav_ul2").mouseleave(function() {
    Moveout("#layui-nav-bar2", this);
  });
});
</script>
<style scoped>
.app {
  width: 100%;
  overflow: hidden;
}
.nav {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  box-sizing: border-box;
  background-color: #009688;
  display: flex;
  justify-content: space-between;
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
.nav_ul {
  display: inline-block;
  padding: 0 10px;
  position: relative;
}
.nav_ul li {
  margin: 0 20px;
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
.layui-input{
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    border: none;
    cursor: text;
    font-size:12px;
    color: #333;
}
</style>