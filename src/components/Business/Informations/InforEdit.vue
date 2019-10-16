<template>
  <div>
    <InforEditList v-if="pageStatus==1" v-on:listPageEmit="changePageStatus"></InforEditList>
    <InforEditApply v-if="pageStatus==2" v-on:applyPageEmit="changePageStatus" :userid="userid"></InforEditApply>
    <InforEditMain v-if="pageStatus==3" v-on:mainPageEmit="changePageStatus" :userid="userid"></InforEditMain>
  </div>
</template>

<script>
import InforEditList from "./InfotEditList";
import InforEditApply from "./InforEditApply";
import InforEditMain from "./InforEditMain";
export default {
  data() {
    return {
      /**
       * 页面切换码
       * 1，用户列表页
       * 2，信息确认页
       * 3，信息编辑页
       */
      pageStatus: 1
    };
  },
  components: {
    InforEditList,
    InforEditApply,
    InforEditMain
  },
  methods: {

      changePageStatus(data){
        this.pageStatus=data.pageStatus
        this.userid=data.userid||this.userid
      }
  }
};
</script>

<style>
</style>