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
          <p class="content">股票名称: {{nameHK}}</p>
          <p class="content">股票编号: {{gidHK}}</p>
          <p class="content">日期: {{dateHK}}</p>
          <p class="content">时间: {{timeHK}}</p>
          <p class="content">涨跌百分比: {{limitHK}}</p>
          <p class="content">涨跌额: {{uppicHK}}</p>
          <p class="content">今日开盘价: {{openpriHK}}</p>
          <p class="content">昨日收盘价: {{formpriHK}}</p>
          <p class="content">当前价格: {{lastestpriHK}}</p>
          <p class="content">今日最高价: {{maxpriHK}}</p>
          <p class="content">今日最低价: {{minpriHK}}</p>
          <p class="content">竞买价: {{inpicHK}}</p>
          <p class="content">竞卖价: {{outpicHK}}</p>
          <p class="content">成交量: {{traNumberHK}}</p>
          <p class="content">成交金额: {{traAmountHK}}</p>
          <p class="content">市盈率: {{priearnHK}}</p>
        </div>
        <div class="col-md-3 color4 part">
          <p class="title">美股</p>
          <input type="text" class="form-control" placeholder="股票代码, 如:aapl" v-model="gidUS" />
          <p class="content">{{messageUS}}</p>
          <p class="content">股票名称: {{nameUS}}</p>
          <p class="content">股票编号: {{gidUS}}</p>
          <p class="content">美国时间: {{ustimeUS}}</p>
          <p class="content">中国时间: {{chtimeUS}}</p>
          <p class="content">涨跌百分比: {{limitUS}}</p>
          <p class="content">涨跌额: {{uppicUS}}</p>
          <p class="content">今日开盘价: {{openpriUS}}</p>
          <p class="content">昨日收盘价: {{formpriUS}}</p>
          <p class="content">当前价格: {{lastestpriUS}}</p>
          <p class="content">今日最高价: {{maxpriUS}}</p>
          <p class="content">今日最低价: {{minpriUS}}</p>
          <p class="content">成交量: {{traAmountUS}}</p>
          <p class="content">平均成交量: {{avgTraNumberUS}}</p>
          <p class="content">市值: {{markValueUS}}</p>
          <p class="content">市盈率: {{priearnUS}}</p>
          <p class="content">收益率: {{RORUS}}</p>
          <p class="content">美股收益: {{EPSUS}}</p>
          <p class="content">股息: {{dividentUS}}</p>
          <p class="content">股本: {{capitalUS}}</p>
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
      HKList: [{}, {}],
      USList: [{}, {}]
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
