<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        
      >
        <el-menu-item index="1">业扩</el-menu-item>
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
        <el-menu-item index="2">算费</el-menu-item>
      </el-menu>
    </el-header>

    <!-- 侧边栏变化，内容栏变化 -->
    <router-view />
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  created() {
    this.$router.push("/infor");
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      if (key === "1") {
        this.$router.push("/infor");
      } else if (key === "2") {
        this.$router.push("/charge");
      }
    }
  }
};
</script>

<style>
</style>