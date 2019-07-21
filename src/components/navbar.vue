<template>
  <div id="navbar" class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand">股票查询 | Stock Searching</a>
      </div>
      <div>
        <ul class="nav navbar-nav">
          <li
            v-for="(item, key) of list"
            :key="key"
            :class="{active:active == key}"
            @click="tab(key)"
          >
            <router-link :to="{path:'/'+item.value}">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [
        { text: "全部", value: "" },
        { text: "上证", value: "SH" },
        { text: "深证", value: "SZ" },
        { text: "港股", value: "HK" },
        { text: "美股", value: "US" }
      ]
    };
  },
  methods: {
    tab(key) {
      this.active = key;
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
}
</style>

