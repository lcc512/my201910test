<template>
  <div>
    <!-- <h2>Marketing customer service management system</h2> -->
    <h2>注册页</h2>
    <el-form ref="form" :model="form" label-width="100px">
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-form-item label="重复录入密码">
            <el-input v-model="form.password2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button @click="onClearInput">清空</el-button>
        <el-button type="primary" @click="onRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        password2: ""
      }
    };
  },
  methods: {
    onClearInput() {
      this.form.username = "";
      this.form.password = "";
    },
    onRegister() {
      //判断是否成功注册
      alert("注册成功，即将跳入登录页");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>