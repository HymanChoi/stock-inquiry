<template>
  <div id="HK">
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
              <span class="showData1">{{item.lastestpri.name}}: {{item.lastestpri.value}}</span>
              <span class="showData2">{{item.limit.name}}: {{item.limit.value}}</span>
              <span class="showData3">{{item.priearn.name}}: {{item.priearn.value}}</span>
              <span class="showData4">{{item.traAmount.name}}: {{item.traAmount.value}}</span>
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
        { text: "市盈率", value: "" },
        { text: "成交金额", value: "" },
        { text: "市盈率", value: "" }
      ],
      list: [
        {
          color: "color1",
          src: require("../assets/img/HK/00700.png"),
          name: "腾讯控股",
          gid: "00700",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/HK/01810.png"),
          name: "小米集团",
          gid: "01810",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/HK/03690.png"),
          name: "美团点评",
          gid: "03690",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/HK/01357.png"),
          name: "美图公司",
          gid: "01357",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/HK/01833.png"),
          name: "神州租车",
          gid: "01833",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/HK/00772.png"),
          name: "阅文集团",
          gid: "00772",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/HK/00001.png"),
          name: "长和",
          gid: "00001",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/HK/00012.png"),
          name: "恒基地产",
          gid: "00012",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color2",
          src: require("../assets/img/HK/03333.png"),
          name: "中国恒大",
          gid: "03333",
          lastestpri: { name: "当前价格", value: "" },
          limit: { name: "涨跌百分比", value: "" },
          priearn: { name: "市盈率", value: "" },
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
          app.listHK[13].value = res.data.result[0].data.priearn;
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
            "http://web.juhe.cn:8080/finance/stock/hk?num=" +
            app.list[key].gid +
            "&key=c95b13606a73270d34a65a3766e14d41"
        )
        .then(function(res) {
          if (res.data.result[0].data.limit >= 0) {
            app.list[key].limit.value = res.data.result[0].data.limit + " ⇱";
          } else {
            app.list[key].limit.value = res.data.result[0].data.limit + " ⇲";
          }
          app.list[key].lastestpri.value =
            Math.floor(res.data.result[0].data.lastestpri * 100) / 100;
          app.list[key].traAmount.value =
            (res.data.result[0].data.traAmount / 1e8).toFixed(2) + "亿(HKD)";
          app.list[key].priearn.value = res.data.result[0].data.priearn;
        })
        .catch(function() {
          app.list[key].lastestpri.value = "Invalid!";
          app.list[key].limit.value = "Invalid!";
          app.list[key].priearn.value = "Invalid!";
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
