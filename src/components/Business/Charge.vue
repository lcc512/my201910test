<template>
  <el-container>
    <AsideCommon :asideListData="asideList"></AsideCommon>
    <el-main>
      <router-view/>
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
          index: "2-1",
          title: "数据准备"
        },
        {
          index: "2-2",
          title: "数据录入"
        },
        {
          index: "2-3",
          title: "数据复核"
        },
        {
          index: "2-4",
          title: "电费核算"
        },
        {
          index: "2-5",
          title: "电费审核"
        },
      ]
    };
  },
  components:{
      AsideCommon
  }
};
</script>

<style>
</style>