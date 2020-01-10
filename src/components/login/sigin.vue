<template>
  <div class="box">
    <form @submit.prevent="submit()">
      <div class="ner">
        <h2>layuiAdmin</h2>
        <div class="login">
          <label>
            <i class="el-icon-user"></i>
          </label>
          <el-input placeholder="用户名" v-model="from.username" clearable></el-input>
        </div>
        <div class="login">
          <label>
            <i class="layui-icon layui-icon-password"></i>
          </label>
          <el-input placeholder="密码" v-model="from.password" show-password></el-input>
        </div>
        <div class="login">
          <label>
            <i class="layui-icon layui-icon-vercode"></i>
          </label>
          <el-input placeholder="验证码" v-model="from.vercode" clearable style="width:58%;"></el-input>
          <Code class="code" @event="canves=$event"></Code>
        </div>
        <div class="login">
          <el-checkbox v-model="from.type">记住密码</el-checkbox>
          <span>忘记密码？</span>
        </div>
        <div class="login">
          <button class="layui-btn layui-btn-fluid" lay-filter="LAY-user-login-submit">登 入</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Code from '@/components/assembly/Code'
export default {
  props: {},
  components: {'Code':Code},
  data() {
    return {
      from: {
        username: null,
        password: null,
        vercode: null,
        type: null
      },
      canves: null
    };
  },
  computed: {},
  methods: {
    submit() {
      let a = this.from;
      if (a.username == null || a.username == "") {
        this.$message({
          showClose: true,
          message: "用户名不能为空",
          type: "warning"
        });
        return false;
      }
      if (a.password == null || a.password == "") {
        this.$message({
          showClose: true,
          message: "密码不能为空",
          type: "warning"
        });
        return false;
      }
      if (a.vercode == null || a.vercode == "") {
        this.$message({
          showClose: true,
          message: "验证码不能为空",
          type: "warning"
        });
        return false;
      }
      if (a.vercode.toLowerCase()!=this.canves.toLowerCase()) {
        this.$message({
          showClose: true,
          message: "验证码不正确",
          type: "error"
        });
        return false;
      }
      this.$axios({
        methods:'post',
        url:'http://localhost:8000/user',
        data:this.from,
      }).then(res=>{
        console.log(res)
      })
    },
  },
  created() {},
  mounted() {
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
}
.ner {
  width: 315px;
  padding: 15px;
}
.ner > h2 {
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 30px;
  color: #000;
  text-align: center;
}
.login {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  margin-bottom: 15px;
  clear: both;
  position: relative;
  overflow: hidden;
}
.login > label {
  position: absolute;
  left: 0;
  top: 0;
  width: 38px;
  height: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
.code {
  width: calc(42% - 15px);
  height: 38px;
  float: right;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #fff;
}
.login > span {
  color: #029789;
  float: right;
}
.login > .el-checkbox {
  height: 100%;
  margin-left: 21px;
  float: left;
}
</style>
<style>
.login > .el-input > .el-input__inner {
  padding-left: 38px;
}
</style>