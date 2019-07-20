<template>
  <div id="HK">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 color3 part">
          <p class="title">港股</p>
          <input
            type="text"
            class="form-control"
            placeholder="股票代码, 如:00001"
            maxlength="5"
            v-model="gidHK"
          />
          <p class="content">{{msgHK}}</p>
          <p class="content" v-for="(item, key) of listHK" :key="key">{{item.text}}:{{item.value}}</p>
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
      gidHK: "",
      msgHK: "",
      listHK: [
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
        { text: "成交金额", value: "" },
        { text: "市盈率", value: "" }
      ],
      list: [
        {
          color: "color1",
          src: require("../assets/img/SH/601318.png"),
          name: "中国平安",
          gid: "601318",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/SH/601857.png"),
          name: "中国石油",
          gid: "601857",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SH/600028.png"),
          name: "中国石化",
          gid: "600028",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/SH/601398.png"),
          name: "工商银行",
          gid: "601398",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SH/601288.png"),
          name: "农业银行",
          gid: "601288",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/SH/601318.png"),
          name: "建设银行",
          gid: "601318",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SH/601939.png"),
          name: "交通银行",
          gid: "601939",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/SH/600030.png"),
          name: "中信证券",
          gid: "600030",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
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
    gidHK() {
      if (this.gidHK.length == 5) {
        this.showHK();
      } else {
        for (let i = 0; i < this.listHK.length; i++) {
          this.listHK[i].value = "";
        }
      }
    }
  },
  methods: {
    showHK: _.debounce(function() {
      let app = this;
      app.msgHK = "Searching...";
      axios
        .get(
          this.API_PROXY +
            "http://web.juhe.cn:8080/finance/stock/hk?num=" +
            app.gidHK +
            "&key=c95b13606a73270d34a65a3766e14d41"
        )
        .then(function(res) {
          app.listHK[0].value = res.data.result[0].data.name;
          app.listHK[1].value = res.data.result[0].data.gid;
          app.listHK[2].value = res.data.result[0].data.date;
          app.listHK[3].value = res.data.result[0].data.time;
          app.listHK[4].value = res.data.result[0].data.limit;
          app.listHK[5].value = res.data.result[0].data.uppic;
          app.listHK[6].value = res.data.result[0].data.openpri;
          app.listHK[7].value = res.data.result[0].data.formpri;
          app.listHK[8].value = res.data.result[0].data.lastestpri;
          app.listHK[9].value = res.data.result[0].data.maxpri;
          app.listHK[10].value = res.data.result[0].data.minpri;
          app.listHK[11].value = res.data.result[0].data.inpic;
          app.listHK[12].value = res.data.result[0].data.outpic;
          app.listHK[13].value = res.data.result[0].data.traNumber;
          app.listHK[14].value = res.data.result[0].data.traAmount;
          app.listHK[15].value = res.data.result[0].data.priearn;
          app.msgHK = "";
        })
        .catch(() => {
          for (let i = 0; i < app.listHK.length; i++) {
            app.listHK[i].value = "Invalid!";
          }
          app.msgHK = "";
        });
    }, 500),
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
