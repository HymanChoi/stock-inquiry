<template>
  <div id="SH">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 color1 part">
          <p class="title">上证</p>
          <input
            type="text"
            class="form-control"
            placeholder="股票代码, 如:600000"
            maxlength="6"
            v-model="gidSH"
          />
          <p class="content">{{msgSH}}</p>
          <p class="content" v-for="(item, key) of listSH" :key="key">{{item.text}}:{{item.value}}</p>
        </div>
        <div class="col-md-9">
          <div class="col-md-4" :class="item.color" v-for="(item, key) of list" :key="key">
            <img :src="item.src" />
            <span>{{item.name}}</span>
            <span>{{item.gid}}</span>
            <span>{{item.data1.name}}:{{item.data1.value}}</span>
            <span>{{item.data2.name}}:{{item.data2.value}}</span>
            <span>{{item.data3.name}}:{{item.data3.value}}</span>
            <span>{{item.data4.name}}:{{item.data4.value}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar";
import axios from "axios";
import _ from "lodash";

export default {
  components: {
    navbar: Navbar
  },
  data() {
    return {
      API_PROXY: "https://bird.ioliu.cn/v1/?url=",
      gidSH: "",
      msgSH: "",
      listSH: [
        { text: "股票名称", value: "" },
        { text: "股票编号", value: "" },
        { text: "日期", value: "" },
        { text: "时间", value: "" },
        { text: "涨跌百分比", value: "" },
        { text: "涨跌额", value: "" },
        { text: "今日开盘价", value: "" },
        { text: "昨日收盘价", value: "" },
        { text: "当前价格", value: "" },
        { text: "今日最高价", value: "" },
        { text: "今日最低价", value: "" },
        { text: "竞买价", value: "" },
        { text: "竞卖价", value: "" },
        { text: "成交量", value: "" },
        { text: "成交金额", value: "" }
      ],
      list: [
        {
          color: "color2",
          src: require("../assets/img/SH/601318.png"),
          name: "中国平安",
          gid: "601318",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SH/601857.png"),
          name: "中国石油",
          gid: "601857",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SH/600028.png"),
          name: "中国石化",
          gid: "600028",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SH/601398.png"),
          name: "工商银行",
          gid: "601398",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SH/601288.png"),
          name: "农业银行",
          gid: "601288",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/SH/601318.png"),
          name: "建设银行",
          gid: "601318",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SH/601939.png"),
          name: "交通银行",
          gid: "601939",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/SH/600030.png"),
          name: "中信证券",
          gid: "600030",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SH/600048.png"),
          name: "保利地产",
          gid: "600048",
          data1: { name: "当前价格", value: "" },
          data2: { name: "涨跌百分比", value: "" },
          data3: { name: "成交量", value: "" },
          data4: { name: "成交额", value: "" }
        }
      ]
    };
  },
  watch: {
    gidSH() {
      if (this.gidSH.length == 6) {
        this.showSH();
      } else {
        for (let i = 0; i < this.listSH.length; i++) {
          this.listSH[i].value = "";
        }
      }
    }
  },
  methods: {
    showSH: _.debounce(function() {
      let app = this;
      app.msgSH = "Searching...";
      axios
        .get(
          this.API_PROXY +
            "http://web.juhe.cn:8080/finance/stock/hs?gid=sh" +
            app.gidSH +
            "&key=c95b13606a73270d34a65a3766e14d41"
        )
        .then(res => {
          app.listSH[0].value = res.data.result[0].data.name;
          app.listSH[1].value = res.data.result[0].data.gid;
          app.listSH[2].value = res.data.result[0].data.date;
          app.listSH[3].value = res.data.result[0].data.time;
          app.listSH[4].value = res.data.result[0].data.increPer;
          app.listSH[5].value = res.data.result[0].data.increase;
          app.listSH[6].value = res.data.result[0].data.todayStartPri;
          app.listSH[7].value = res.data.result[0].data.yestodEndPri;
          app.listSH[8].value = res.data.result[0].data.nowPri;
          app.listSH[9].value = res.data.result[0].data.todayMax;
          app.listSH[10].value = res.data.result[0].data.todayMin;
          app.listSH[11].value = res.data.result[0].data.competitivePri;
          app.listSH[12].value = res.data.result[0].data.reservePri;
          app.listSH[13].value = res.data.result[0].data.traNumber;
          app.listSH[14].value = res.data.result[0].data.traAmount;
          app.msgSH = "";
        })
        .catch(() => {
          for (let i = 0; i < app.listSH.length; i++) {
            app.listSH[i].value = "Invalid!";
          }
          app.msgSH = "";
        });
    }, 500)
  }
};
</script>

<style scoped>
.col-md-9 {
  padding: 0;
}
</style>
