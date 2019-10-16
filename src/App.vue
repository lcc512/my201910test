<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <h2 class="main-title">
      <i class="el-icon-help"></i>
      Marketing CSMS
    </h2>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

body {
  font-size: 14px;
  margin: 0;
  padding: 0;
  min-width: 1170px;
}

h2,
h3 {
  text-align: left;
}

h2 {
  font-size: 18px;
}
h3 {
  font-size: 16px;
}

.main-title {
  font-size: 26px;
  font-style: italic;
  /* color: #409eff; */
  color: #545c64;
}

.el-header {
  padding: 0;
}
.el-table td,
.el-table th {
  padding: 2px 0;
}

table td {
  padding-left: 10px;
}
</style>
