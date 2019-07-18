<template>
  <div id="home">
    <navbar></navbar>
    <div id="app" class="container-fluid">
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
          <p class="content" v-for="(item, key) of SHList" :key="key">{{item.text}}:{{item.value}}</p>
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
          <p class="content" v-for="(item, key) of SZList" :key="key">{{item.text}}:</p>
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
          <p class="content" v-for="(item, key) of HKList" :key="key">{{item.text}}:</p>
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
          <p class="content" v-for="(item, key) of USList" :key="key">{{item.text}}:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
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

      SHList: [
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
        { text: "成交金额" },
        { text: "市盈率" }
      ],
      USList: [
        { text: "股票名称" },
        { text: "股票编号" },
        { text: "美国时间" },
        { text: "中国时间" },
        { text: "涨跌百分比" },
        { text: "涨跌额" },
        { text: "今日开盘价" },
        { text: "昨日收盘价" },
        { text: "当前价格" },
        { text: "今日最高价" },
        { text: "今日最低价" },
        { text: "成交量" },
        { text: "平均成交量" },
        { text: "市值" },
        { text: "市盈率" },
        { text: "收益率" },
        { text: "美股收益" },
        { text: "股息" },
        { text: "股本" }
      ]
    };
  },
  components: {
    navbar: Navbar
  },
  watch: {
    gidSH() {
      if (this.gidSH.length == 6) {
        this.showSH();
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
          app.SHList[0].value = res.data.result[0].data.name;
          app.SHList[1].value = res.data.result[0].data.gid;
          app.SHList[2].value = res.data.result[0].data.date;
          app.SHList[3].value = res.data.result[0].data.time;
          app.SHList[4].value = res.data.result[0].data.increPer;
          app.SHList[5].value = res.data.result[0].data.increase;
          app.SHList[6].value = res.data.result[0].data.todayStartPri;
          app.SHList[7].value = res.data.result[0].data.yestodEndPri;
          app.SHList[8].value = res.data.result[0].data.nowPri;
          app.SHList[9].value = res.data.result[0].data.todayMax;
          app.SHList[10].value = res.data.result[0].data.todayMin;
          app.SHList[11].value = res.data.result[0].data.competitivePri;
          app.SHList[12].value = res.data.result[0].data.reservePri;
          app.SHList[13].value = res.data.result[0].data.traNumber;
          app.SHList[14].value = res.data.result[0].data.traAmount;
          app.msgSH = "";
        })
        .catch(() => {
          app.SHList[0].value = "Invalid!";
          app.SHList[1].value = "Invalid!";
          app.SHList[2].value = "Invalid!";
          app.SHList[3].value = "Invalid!";
          app.SHList[4].value = "Invalid!";
          app.SHList[5].value = "Invalid!";
          app.SHList[6].value = "Invalid!";
          app.SHList[7].value = "Invalid!";
          app.SHList[8].value = "Invalid!";
          app.SHList[9].value = "Invalid!";
          app.SHList[10].value = "Invalid!";
          app.SHList[11].value = "Invalid!";
          app.SHList[12].value = "Invalid!";
          app.SHList[13].value = "Invalid!";
          app.SHList[14].value = "Invalid!";
          app.msgSH = "";
        });
    }, 500)
  }
};
</script>

<style scoped>
.part {
  height: 708px;
}

.part2 {
  width: 100%;
  height: 236px;
}

.title {
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.content {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20%;
}

.form-control {
  width: 60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

/* 展示区 */
img {
  width: 100px;
  height: 100px;
  margin-left: 40px;
  cursor: pointer;
}

span {
  display: block;
}

.showHeader {
  height: 130px;
}

.showImg {
  width: 50%;
  float: left;
  margin-top: 30px;
}

.showName {
  width: 50%;
  height: 70px;
  float: left;
  padding-top: 30px;
  padding-left: 10px;
  font-size: 36px;
}

.showGid {
  width: 50%;
  height: 60px;
  float: left;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 18px;
}

.showMain {
  height: 106px;
  font-size: 16px;
}

.showData1 {
  padding-top: 25px;
  padding-left: 40px;
  width: 50%;
  float: left;
}

.showData2 {
  padding-top: 25px;
  padding-left: 10px;
  width: 50%;
  float: left;
}

.showData3 {
  padding-top: 15px;
  padding-left: 40px;
  width: 50%;
  float: left;
}

.showData4 {
  padding-top: 15px;
  padding-left: 10px;
  width: 50%;
  float: left;
}
</style>
