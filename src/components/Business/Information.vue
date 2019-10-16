<template>
  <el-container>
    <AsideCommon :asideListData="asideList"></AsideCommon>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import AsideCommon from "./AsideCommon";
export default {
  data() {
    return {
      asideList: [
        {
          index: "1-1",
          title: "新装"
        },
        {
          index: "1-2",
          title: "档案编辑"
        }
      ]
    };
  },
  components: {
    AsideCommon
  }
};
</script>

<style>
</style>