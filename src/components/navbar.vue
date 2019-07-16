<template>
  <div id="navbar">
    <div class="navbar-header">股票查询 | Stock Searching</div>
    <div class="navbar-list">
      <div class="navber-item" v-for="(item, key) in nav" :key="key">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["全部", "上证", "深证", "港股", "美股"]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>

