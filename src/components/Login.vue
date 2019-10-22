<template>
  <div>
    <form action class="login-form">
      <h1>Marketing CSMS</h1>

      <div class="txtb">
        <input type="text" @focus="focusfns" @blur="blurfns" v-model="formData.username" />
        <span data-placeholder="Username"></span>
      </div>
      <div class="txtb">
        <input type="password" @focus="focusfns" @blur="blurfns" v-model="formData.password" />
        <span data-placeholder="Password"></span>
      </div>

      <input type="button" class="logbtn" value="Login" @click="onSubmit" />

      <div class="bottom-text">
        Don't have account?
        <a href="#/register">Sign up</a>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },
  
  methods: {
    focusfns(e) {
      e.srcElement.classList.add("focus");
    },
    blurfns(e) {
      if (e.srcElement.value === "") {
        e.srcElement.classList.remove("focus");
      }
    },
    async onSubmit() {
      try {
        const formData = this.formData;
        const res = await axios.post("/api/session", formData);
        alert("登录成功");

        this.$store.commit('SET_USER',res.data) 

        this.$router.back();
      } catch (err) {
        // dir 获取错误对象，里面response属性包含错误码401,500等
        // 等，和自己写的接口错误信息
        const { status } = err.response;
        switch (status) {
          case 404:
            window.alert("用户名或密码错误");
            break;
        }
      }
    },
    onClearInput() {
      this.form.username = "";
      this.form.password = "";
    },
    onRegister() {
      this.$router.push("/register");
    }
  }
};
</script>

<style scoped>
.login-form {
  width: 360px;
  height: 580px;
  background-color: #f1f1f1;
  padding: 80px 40px;
  border-radius: 10px;

  box-shadow: 5px 5px 10px #ccc;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-form h1 {
  text-align: center;
  margin-bottom: 60px;
}

.txtb {
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
  position: relative;
}

.txtb input {
  width: 100%;
  color: #333;
  border: none;
  outline: none;
  height: 40px;
  background: none;
  padding: 0 5px;
}

.txtb span::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #adadad;
  z-index: -1;
  transition: 0.5s;
}

.txtb span::after {
  content: "";
  position: absolute;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(120deg, #3498db, #8e44ad);
  transition: 0.5s;
}

.focus + span::before {
  top: -5px;
}

.focus + span::after {
  width: 100%;
}

.logbtn {
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: linear-gradient(120deg, #3498db, #8e44ad, #3498db);
  background-size: 200%;
  cursor: pointer;
  transition: 0.5s;
}

.logbtn:hover {
  background-position: right;
}

.bottom-text {
  margin-top: 60px;
  text-align: center;
  font-size: 13px;
}
</style>