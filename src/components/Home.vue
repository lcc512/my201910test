<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <h2 class="main-title">
          <i class="el-icon-help"></i>
          Marketing CSMS
        </h2>
      </el-col>
      <el-col :span="6">
        <span>
          <i class="el-icon-user-solid"></i>
          {{currUser}}
        </span>
        <el-button
          type="text"
          v-show="switchLoginBtn"
          style="padding:0px 15px;"
          icon="el-icon-warning"
          @click="onLogin"
        >登录</el-button>
        <el-button
          type="text"
          v-show="!switchLoginBtn"
          style="padding:0px 15px;"
          icon="el-icon-warning"
          @click="onLogout"
        >注销</el-button>
      </el-col>
    </el-row>

    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="0">首页</el-menu-item>
          <el-menu-item index="1" v-show="switchBusinessModule==='1'">业扩</el-menu-item>
          <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
          </el-submenu>-->
          <el-menu-item index="2" v-show="switchBusinessModule==='2'">算费</el-menu-item>
        </el-menu>
      </el-header>

      <!-- 侧边栏变化，内容栏变化 -->
      <router-view />
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeIndex: "0"
    };
  },
  created() {
    // 默认访问首页
    this.$router.push("/");
  },
  computed: {
    currUser() {
      const user = this.$store.state.user || {
        company_name: "未登录"
      };

      // console.log(user);

      return user.company_name;
    },
    switchLoginBtn() {
      if (this.currUser === "未登录") {
        return true;
      }

      return false;
    },
    switchBusinessModule() {
      const user = this.$store.state.user || {
        permission: "0"
      };

      return user.permission;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);

      if (key === "1") {
        this.$router.push("/infor");
      } else if (key === "2") {
        this.$router.push("/charge");
      } else if (key === "0") {
        this.$router.push("/");
      }
    },
    async onLogout() {
      if (!window.confirm("确认退出？")) {
        return;
      }

      this.$store.commit("LOGOUT");
      window.alert("退出成功，即将转向登录页");
      this.$router.push("/login");
      // try {
      //   await axios.delete('/api/session')
      //
      //   this.$router.push('/login')
      // } catch (err) {
      //   console.log(err)
      //   window.alert('注销失败，请稍后重试')
      // }
    },
    async onLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.main-title {
  font-size: 26px;
  font-style: italic;
  /* color: #409eff; */
  text-align: center;
  color: #545c64;
}
</style>