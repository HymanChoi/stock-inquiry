<template>
  <div id="home">
    <navbar></navbar>
    <div id="app" class="container-fluid">
      <div class="row">
        <div class="col-md-3 color1 part">
          <p class="title">上证</p>
          <input type="text" class="form-control" placeholder="股票代码, 如:600000" v-model="gidSH" />
          <p class="content">{{messageSH}}</p>
          <p class="content" v-for="(item, key) of SHList" :key="key">{{item.text}}:</p>
        </div>
        <div class="col-md-3 color2 part">
          <p class="title">深证</p>
          <input type="text" class="form-control" placeholder="股票代码, 如:000001" v-model="gidSZ" />
          <p class="content">{{messageSZ}}</p>
          <p class="content" v-for="(item, key) of SZList" :key="key">{{item.text}}:</p>
        </div>
        <div class="col-md-3 color3 part">
          <p class="title">港股</p>
          <input type="text" class="form-control" placeholder="股票代码, 如:00001" v-model="gidHK" />
          <p class="content">{{messageHK}}</p>
          <p class="content" v-for="(item, key) of HKList" :key="key">{{item.text}}:</p>
        </div>
        <div class="col-md-3 color4 part">
          <p class="title">美股</p>
          <input type="text" class="form-control" placeholder="股票代码, 如:aapl" v-model="gidUS" />
          <p class="content">{{messageUS}}</p>
          <p class="content" v-for="(item, key) of USList" :key="key">{{item.text}}:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";

export default {
  data() {
    return {
      SHList: [
        { text: "股票名称" },
        { text: "股票编号" },
        { text: "日期" },
        { text: "时间" },
        { text: "涨跌百分比" },
        { text: "涨跌额" },
        { text: "今日开盘价" },
        { text: "昨日收盘价" },
        { text: "当前价格" },
        { text: "今日最高价" },
        { text: "今日最低价" },
        { text: "竞买价" },
        { text: "竞卖价" },
        { text: "成交量" },
        { text: "成交金额" }
      ],
      SZList: [
        { text: "股票名称" },
        { text: "股票编号" },
        { text: "日期" },
        { text: "时间" },
        { text: "涨跌百分比" },
        { text: "涨跌额" },
        { text: "今日开盘价" },
        { text: "昨日收盘价" },
        { text: "当前价格" },
        { text: "今日最高价" },
        { text: "今日最低价" },
        { text: "竞买价" },
        { text: "竞卖价" },
        { text: "成交量" },
        { text: "成交金额" }
      ],
      HKList: [
        {text:"股票名称"}, 
        {text:"股票编号"}, 
        {text:"日期"}, 
        {text:"时间"}, 
        {text:"涨跌百分比"}, 
        {text:"涨跌额"}, 
        {text:"今日开盘价"}, 
        {text:"昨日收盘价"}, 
        {text:"当前价格"}, 
        {text:"今日最高价"}, 
        {text:"今日最低价"}, 
        {text:"竞买价"}, 
        {text:"竞卖价"}, 
        {text:"成交量"}, 
        {text:"成交金额"}, 
        {text:"市盈率"}, 
      ],
      USList: [
        {text:"股票名称"}, 
        {text:"股票编号"}, 
        {text:"美国时间"}, 
        {text:"中国时间"}, 
        {text:"涨跌百分比"}, 
        {text:"涨跌额"}, 
        {text:"今日开盘价"}, 
        {text:"昨日收盘价"}, 
        {text:"当前价格"}, 
        {text:"今日最高价"}, 
        {text:"今日最低价"}, 
        {text:"成交量"}, 
        {text:"平均成交量"}, 
        {text:"市值"}, 
        {text:"市盈率"}, 
        {text:"收益率"}, 
        {text:"美股收益"}, 
        {text:"股息"}, 
        {text:"股本"}, 
      ]
    };
  },
  components: {
    navbar: Navbar
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
</style>
