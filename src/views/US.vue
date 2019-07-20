<template>
  <div id="US">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 color4 part">
          <p class="title">美股</p>
          <input
            type="text"
            class="form-control"
            placeholder="股票代码, 如:aapl"
            maxlength="10"
            v-model="gidUS"
          />
          <p class="content">{{msgUS}}</p>
          <p class="content" v-for="(item, key) of listUS" :key="key">{{item.text}}:{{item.value}}</p>
        </div>
        <div class="col-md-9">
          <div class="col-md-4" :class="item.color" v-for="(item, key) of list" :key="key">
            <div class="showHeader">
              <div class="showImg">
                <img :src="item.src" @click="showItem(key)" />
              </div>
              <span class="showName">{{item.name}}</span>
              <span class="showGid">{{item.gid}}</span>
            </div>
            <div class="showMain">
              <span class="showData1">{{item.nowPri.name}}: {{item.nowPri.value}}</span>
              <span class="showData2">{{item.increPer.name}}: {{item.increPer.value}}</span>
              <span class="showData3">{{item.traNumber.name}}: {{item.traNumber.value}}</span>
              <span class="showData4">{{item.traAmount.name}}: {{item.traAmount.value}}</span>
            </div>
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
      msgUS: "",
      gidUS: "",
      listUS: [
        { text: "股票名称", value: "" },
        { text: "股票编号", value: "" },
        { text: "美国时间", value: "" },
        { text: "中国时间", value: "" },
        { text: "涨跌百分比", value: "" },
        { text: "涨跌额", value: "" },
        { text: "今日开盘价", value: "" },
        { text: "昨日收盘价", value: "" },
        { text: "当前价格", value: "" },
        { text: "今日最高价", value: "" },
        { text: "今日最低价", value: "" },
        { text: "成交量", value: "" },
        { text: "平均成交量", value: "" },
        { text: "市值", value: "" },
        { text: "市盈率", value: "" },
        { text: "收益率", value: "" },
        { text: "美股收益", value: "" },
        { text: "股息", value: "" },
        { text: "股本", value: "" }
      ],
      list: [
        {
          color: "color2",
          src: require("../assets/img/SH/601318.png"),
          name: "中国平安",
          gid: "601318",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SH/601857.png"),
          name: "中国石油",
          gid: "601857",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/SH/600028.png"),
          name: "中国石化",
          gid: "600028",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SH/601398.png"),
          name: "工商银行",
          gid: "601398",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/SH/601288.png"),
          name: "农业银行",
          gid: "601288",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/SH/601318.png"),
          name: "建设银行",
          gid: "601318",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/SH/601939.png"),
          name: "交通银行",
          gid: "601939",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/SH/600030.png"),
          name: "中信证券",
          gid: "600030",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SH/600048.png"),
          name: "保利地产",
          gid: "600048",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        }
      ]
    };
  },
  watch: {
    gidUS() {
      if (this.gidUS) {
        this.showUS();
      } else {
        for (let i = 0; i < this.listUS.length; i++) {
          this.listUS[i].value = "";
        }
      }
    }
  },
  methods: {
    showUS: _.debounce(function() {
      let app = this;
      app.msgUS = "Searching...";
      axios
        .get(
          this.API_PROXY +
            "http://web.juhe.cn:8080/finance/stock/usa?gid=" +
            app.gidUS +
            "&key=c95b13606a73270d34a65a3766e14d41"
        )
        .then(function(res) {
          app.listUS[0].value = res.data.result[0].data.name;
          app.listUS[1].value = res.data.result[0].data.gid;
          app.listUS[2].value = res.data.result[0].data.ustime;
          app.listUS[3].value = res.data.result[0].data.chtime;
          app.listUS[4].value = res.data.result[0].data.limit;
          app.listUS[5].value = res.data.result[0].data.uppic;
          app.listUS[6].value = res.data.result[0].data.openpri;
          app.listUS[7].value = res.data.result[0].data.formpri;
          app.listUS[8].value = res.data.result[0].data.lastestpri;
          app.listUS[9].value = res.data.result[0].data.maxpri;
          app.listUS[10].value = res.data.result[0].data.minpri;
          app.listUS[11].value = res.data.result[0].data.traAmount;
          app.listUS[12].value = res.data.result[0].data.avgTraNumber;
          app.listUS[13].value =
            (res.data.result[0].data.markValue / 1e8).toFixed(2) + "亿";
          app.listUS[14].value = res.data.result[0].data.priearn;
          app.listUS[15].value = res.data.result[0].data.ROR;
          app.listUS[16].value = res.data.result[0].data.EPS;
          app.listUS[17].value = res.data.result[0].data.divident;
          app.listUS[18].value = res.data.result[0].data.capital;
          app.msgUS = "";
        })
        .catch(() => {
          for (let i = 0; i < app.listUS.length; i++) {
            app.listUS[i].value = "Invalid!";
          }
          app.msgUS = "";
        });
    }, 1000),
    showItem(key) {
      let app = this;
      axios
        .get(
          this.API_PROXY +
            "http://web.juhe.cn:8080/finance/stock/hs?gid=sh" +
            app.list[key].gid +
            "&key=c95b13606a73270d34a65a3766e14d41"
        )
        .then(function(res) {
          if (res.data.result[0].data.increPer >= 0) {
            app.list[key].increPer.value =
              res.data.result[0].data.increPer + " ⇱";
          } else {
            app.list[key].increPer.value =
              res.data.result[0].data.increPer + " ⇲";
          }
          app.list[key].nowPri.value =
            Math.floor(res.data.result[0].data.nowPri * 100) / 100;
          app.list[key].traAmount.value =
            (res.data.result[0].data.traAmount / 1e8).toFixed(2) + "亿(CNY)";
          app.list[key].traNumber.value = res.data.result[0].data.traNumber;
        })
        .catch(function() {
          app.list[key].nowPri.value = "Invalid!";
          app.list[key].increPer.value = "Invalid!";
          app.list[key].traNumber.value = "Invalid!";
          app.list[key].traAmount.value = "Invalid!";
        });
    }
  }
};
</script>

<style scoped>
.col-md-9 {
  padding: 0;
}
</style>
