<template>
  <div id="US">
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
              <span class="showData1">{{item.lastestpri.name}}: {{item.lastestpri.value}}</span>
              <span class="showData2">{{item.limit.name}}: {{item.limit.value}}</span>
              <span class="showData3">{{item.priearn.name}}: {{item.priearn.value}}</span>
              <span class="showData4">{{item.markValue.name}}: {{item.markValue.value}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
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
        { text: "市盈率", value: "" },
        { text: "平均市盈率", value: "" },
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
          src: require("../assets/img/US/aapl.png"),
          name: "苹果",
          gid: "aapl",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/US/amzn.png"),
          name: "亚马逊",
          gid: "amzn",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/US/msft.png"),
          name: "微软",
          gid: "msft",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/US/baba.png"),
          name: "阿里巴巴",
          gid: "baba",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/US/bidu.png"),
          name: "百度",
          gid: "bidu",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/US/ntes.png"),
          name: "网易",
          gid: "ntes",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/US/pdd.png"),
          name: "拼多多",
          gid: "pdd",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/US/iq.png"),
          name: "爱奇艺",
          gid: "iq",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/US/jd.png"),
          name: "京东",
          gid: "jd",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          markValue: { name: "市值", value: "" }
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
            "http://web.juhe.cn:8080/finance/stock/usa?gid=" +
            app.list[key].gid +
            "&key=c95b13606a73270d34a65a3766e14d41"
        )
        .then(function(response) {
          if (response.data.result[0].data.limit >= 0) {
            app.list[key].limit.value = response.data.result[0].data.limit + " ⇱";
          } else {
            app.list[key].limit.value = response.data.result[0].data.limit + " ⇲";
          }
          app.list[key].lastestpri.value =
            Math.floor(response.data.result[0].data.lastestpri * 100) / 100;
          app.list[key].markValue.value =
            (response.data.result[0].data.markValue / 1e8).toFixed(2) +
            "亿(USD)";
          app.list[key].priearn.value = response.data.result[0].data.priearn;
        })
        .catch(function() {
          app.list[key].limit.value = "Invalid!";
          app.list[key].lastestpri.value = "Invalid!";
          app.list[key].markValue.value = "Invalid!";
          app.list[key].priearn.value = "Invalid!";
        });
    }
  }
};
</script>

<style scoped>
.col-md-9 {
  padding: 0;
}
.form-control {
  width: 60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
</style>
