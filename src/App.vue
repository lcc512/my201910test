<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    
    <transition name="fade">
    <router-view />
    </transition>
  </div>
</template>

<script>



export default {
  name: "App"
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
}

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


/* 路由跳转时动画 */
.fade-enter-active, .fade-leave-avtive {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}


/* 各模块首页图片 */
.imgContent img{
 height: 600px;
}

/* etable标题列文件居中 */
.el-table th>.cell{
  text-align: center;
}
</style>
