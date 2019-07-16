<template>
  <div id="navbar">
    <div class="navbar navbar-default" role="navigation">
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
              <a>{{item.text}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "全部",
      list: [
        { text: "全部" },
        { text: "上证" },
        { text: "深证" },
        { text: "港股" },
        { text: "美股" }
      ]
    };
  },
  methods: {
    tab(item) {
      this.active = item.text;
    }
  }
};
</script>

<style scoped>
</style>

