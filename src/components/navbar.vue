<template>
  <div id="navbar" class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">股票查询 | Stock Searching</a>
      </div>
      <div>
        <ul class="nav navbar-nav">
          <li
            v-for="(item, key) of list"
            :key="key"
            :class="{active:active == item.text}"
            @click="tab(item)"
          >
            <router-link :to="{path:'/'+item.value}">
              <a>{{item.text}}</a>
            </router-link>
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
      active: "",
      list: [
        { text: "全部", value: "" },
        { text: "上证", value: "SH" },
        { text: "深证", value: "SZ" },
        { text: "港股", value: "HK" },
        { text: "美股", value: "US" }
      ]
    };
  },
  mounted() {
    this.tab()
  },
  methods: {
    tab(item) {
      this.active = item.text;
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
}
</style>

