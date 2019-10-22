<template>
  <div>
    <div class="imgContent">
      <img src="../assets/chargeDisplayPage.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.pageId = this.$route.query.displayPageId;

    // console.log(this.pageId);
  },
  data() {
    return {
      pageId: 0,
      srcList: [
        "../assets/indexDisplayPage.png",
        "../assets/inforDisplayPage.png",
        "../assets/chargeDisplayPage.png"
      ]
    };
  }
};
</script>

<style>
</style>