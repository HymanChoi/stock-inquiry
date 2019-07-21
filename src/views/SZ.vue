<template>
  <div id="SZ">
    <div class="container-fluid">
      <div class="row">
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
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      API_PROXY: "https://bird.ioliu.cn/v1/?url=",
      gidSZ: "",
      msgSZ: "",
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
      list: [
        {
          color: "color1",
          src: require("../assets/img/SZ/002415.png"),
          name: "海康威视",
          gid: "002415",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SZ/002230.png"),
          name: "科大讯飞",
          gid: "002230",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SZ/002024.png"),
          name: "苏宁易购",
          gid: "002024",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SZ/000063.png"),
          name: "中兴通讯",
          gid: "000063",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SZ/002027.png"),
          name: "分众传媒",
          gid: "002027",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/SZ/002195.png"),
          name: "二三四五",
          gid: "002195",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color4",
          src: require("../assets/img/SZ/000651.png"),
          name: "格力电器",
          gid: "000651",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color1",
          src: require("../assets/img/SZ/000002.png"),
          name: "万科A",
          gid: "000002",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        },
        {
          color: "color3",
          src: require("../assets/img/SZ/300059.png"),
          name: "东方财富",
          gid: "300059",
          nowPri: { name: "当前价格", value: "" },
          increPer: { name: "涨跌百分比", value: "" },
          traNumber: { name: "成交量", value: "" },
          traAmount: { name: "成交额", value: "" }
        }
      ]
    };
  },
  watch: {
    gidSZ() {
      if (this.gidSZ.length == 6) {
        this.showSZ();
      } else {
        for (let i = 0; i < this.listSZ.length; i++) {
          this.listSZ[i].value = "";
        }
      }
    }
  },
  methods: {
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
        .then(res => {
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
    showItem(key) {
      let app = this;
      axios
        .get(
          this.API_PROXY +
            "http://web.juhe.cn:8080/finance/stock/hs?gid=sz" +
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
