<template>
  <div>
    <!-- <h2>Marketing customer service management system</h2> -->
    <h2>登录页</h2>
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

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
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
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if(this.form.username==='test'&&this.form.password==='1'){
          alert('登录成功')
          this.$router.push('./')
      }else{
          alert('用户名或密码错误')
      }
    },
    onClearInput(){
        this.form.username=''
        this.form.password=''
    },
    onRegister(){
        this.$router.push('/register')
    }
  }
};
</script>

<style>
</style>