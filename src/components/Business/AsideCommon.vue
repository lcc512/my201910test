<template>
  <el-aside width="100px">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu @select="handleSelect" default-active="1" class="el-menu-vertical-demo">
          <el-menu-item v-for="(item,index) in asideList" v-bind:key="index" :index="item.index">
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  props: ["asideListData"],
  data() {
    return {
      asideList: this.asideListData
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      switch (key) {
        case "1-1":
          this.$router.push("/infor/new");
          break;
        case "1-2":
          this.$router.push("/infor/edit");
          break;
        case "2-1":
          this.$router.push("/charge/ready");
          break;

        case "2-2":
          this.$router.push("/charge/enter");
          break;
        case "2-3":
          this.$router.push("/charge/check");
          break;
        case "2-4":
          this.$router.push("/charge/calcu");
          break;
        case "2-5":
          this.$router.push("/charge/audit");
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style>
</style>