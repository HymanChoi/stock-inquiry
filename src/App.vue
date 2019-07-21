<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Navbar from "./components/navbar";

export default {
  name: "app",
  components: {
    navbar: Navbar
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  color: #ffffff;
}

/* 全局样式 */
.part {
  height: 708px;
}

.part2 {
  width: 100%;
  height: 236px;
}

.title {
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.content {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20%;
}

/* 展示区 */
img {
  width: 100px;
  height: 100px;
  margin-left: 40px;
  cursor: pointer;
}

span {
  display: block;
}

.showHeader {
  height: 130px;
}

.showImg {
  width: 50%;
  float: left;
  margin-top: 30px;
}

.showName {
  width: 50%;
  height: 70px;
  float: left;
  padding-top: 30px;
  padding-left: 10px;
  font-size: 36px;
}

.showGid {
  width: 50%;
  height: 60px;
  float: left;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 18px;
}

.showMain {
  height: 106px;
  font-size: 16px;
}

.showData1 {
  padding-top: 25px;
  padding-left: 40px;
  width: 50%;
  float: left;
}

.showData2 {
  padding-top: 25px;
  padding-left: 10px;
  width: 50%;
  float: left;
}

.showData3 {
  padding-top: 15px;
  padding-left: 40px;
  width: 50%;
  float: left;
}

.showData4 {
  padding-top: 15px;
  padding-left: 10px;
  width: 50%;
  float: left;
}
</style>
