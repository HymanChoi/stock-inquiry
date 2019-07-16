<template>
  <div id="navbar">
    <div class="navbar-header">股票查询 | Stock Searching</div>
    <div class="navbar-body">
      <span class="navber-option" v-for="(item, key) in nav" :key="key">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["上证", "深证", "港股", "美股"]
    };
  }
};
</script>
