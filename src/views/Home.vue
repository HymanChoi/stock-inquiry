<template>
  <div id="home">
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
        <div class="col-md-3 color2 part">
          <p class="title">深证</p>
          <input
            type="text"
            class="form-control"
            placeholder="股票代码, 如:000001"
            maxlength="6"
            v-model="gidSZ"
          />
          <p class="content">{{msgSZ}}</p>
          <p class="content" v-for="(item, key) of listSZ" :key="key">{{item.text}}:{{item.value}}</p>
        </div>
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

      gidSH: "",
      gidSZ: "",
      gidHK: "",
      gidUS: "",

      msgSH: "",
      msgSZ: "",
      msgHK: "",
      msgUS: "",

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
      listSZ: [
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
    },
    gidSZ() {
      if (this.gidSZ.length == 6) {
        this.showSZ();
      } else {
        for (let i = 0; i < this.listSZ.length; i++) {
          this.listSZ[i].value = "";
        }
      }
    },
    gidHK() {
      if (this.gidHK.length == 5) {
        this.showHK();
      } else {
        for (let i = 0; i < this.listHK.length; i++) {
          this.listHK[i].value = "";
        }
      }
    },
    gidUS() {
      this.showUS();
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
    }, 500),
    showSZ: _.debounce(function() {
      let app = this;
      app.msgSZ = "Searching...";
      axios
        .get(
          this.API_PROXY +
            "http://web.juhe.cn:8080/finance/stock/hs?gid=sz" +
            app.gidSZ +
            "&key=c95b13606a73270d34a65a3766e14d41"
        )
        .then(function(res) {
          app.listSZ[0].value = res.data.result[0].data.name;
          app.listSZ[1].value = res.data.result[0].data.gid;
          app.listSZ[2].value = res.data.result[0].data.date;
          app.listSZ[3].value = res.data.result[0].data.time;
          app.listSZ[4].value = res.data.result[0].data.increPer;
          app.listSZ[5].value = res.data.result[0].data.increase;
          app.listSZ[6].value = res.data.result[0].data.todayStartPri;
          app.listSZ[7].value = res.data.result[0].data.yestodEndPri;
          app.listSZ[8].value = res.data.result[0].data.nowPri;
          app.listSZ[9].value = res.data.result[0].data.todayMax;
          app.listSZ[10].value = res.data.result[0].data.todayMin;
          app.listSZ[11].value = res.data.result[0].data.competitivePri;
          app.listSZ[12].value = res.data.result[0].data.reservePri;
          app.listSZ[13].value = res.data.result[0].data.traNumber;
          app.listSZ[14].value = res.data.result[0].data.traAmount;
          app.msgSZ = "";
        })
        .catch(() => {
          for (let i = 0; i < app.listSZ.length; i++) {
            app.listSZ[i].value = "Invalid!";
          }
          app.msgSZ = "";
        });
    }, 500),
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
    }, 1000)
  }
};
</script>

<style scoped>
.form-control {
  width: 60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
</style>
