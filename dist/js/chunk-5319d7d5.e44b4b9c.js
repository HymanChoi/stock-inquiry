(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5319d7d5"],{"0279":function(a,t,e){a.exports=e.p+"img/03690.d1acd6df.png"},"0291":function(a,t,e){a.exports=e.p+"img/00700.13ea17df.png"},"05cd":function(a,t,e){a.exports=e.p+"img/01357.5ef85336.png"},"27fd":function(a,t,e){a.exports=e.p+"img/00012.f574c6b2.png"},"46b5":function(a,t,e){a.exports=e.p+"img/00001.dd808bb9.png"},af39:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"HK"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 color3 part"},[e("p",{staticClass:"title"},[a._v("港股")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.gidHK,expression:"gidHK"}],staticClass:"form-control",attrs:{type:"text",placeholder:"股票代码, 如:00001",maxlength:"5"},domProps:{value:a.gidHK},on:{input:function(t){t.target.composing||(a.gidHK=t.target.value)}}}),e("p",{staticClass:"content"},[a._v(a._s(a.msgHK))]),a._l(a.listHK,function(t,l){return e("p",{key:l,staticClass:"content"},[a._v(a._s(t.text)+":"+a._s(t.value))])})],2),e("div",{staticClass:"col-md-9"},a._l(a.list,function(t,l){return e("div",{key:l,staticClass:"col-md-4",class:t.color},[e("div",{staticClass:"showHeader"},[e("div",{staticClass:"showImg"},[e("img",{attrs:{src:t.src},on:{click:function(t){return a.showItem(l)}}})]),e("span",{staticClass:"showName"},[a._v(a._s(t.name))]),e("span",{staticClass:"showGid"},[a._v(a._s(t.gid))])]),e("div",{staticClass:"showMain"},[e("span",{staticClass:"showData1"},[a._v(a._s(t.lastestpri.name)+": "+a._s(t.lastestpri.value))]),e("span",{staticClass:"showData2"},[a._v(a._s(t.limit.name)+": "+a._s(t.limit.value))]),e("span",{staticClass:"showData3"},[a._v(a._s(t.priearn.name)+": "+a._s(t.priearn.value))]),e("span",{staticClass:"showData4"},[a._v(a._s(t.traAmount.name)+": "+a._s(t.traAmount.value))])])])}),0)])])])},i=[],s=(e("7f7f"),e("bc3a")),n=e.n(s),r=e("2ef0"),u=e.n(r),o={data:function(){return{API_PROXY:"https://bird.ioliu.cn/v1/?url=",gidHK:"",msgHK:"",listHK:[{text:"股票名称",value:""},{text:"股票编号",value:""},{text:"日期",value:""},{text:"时间",value:""},{text:"涨跌百分比",value:""},{text:"涨跌额",value:""},{text:"今日开盘价",value:""},{text:"昨日收盘价",value:""},{text:"当前价格",value:""},{text:"今日最高价",value:""},{text:"今日最低价",value:""},{text:"竞买价",value:""},{text:"竞卖价",value:""},{text:"市盈率",value:""},{text:"成交金额",value:""},{text:"市盈率",value:""}],list:[{color:"color1",src:e("0291"),name:"腾讯控股",gid:"00700",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color2",src:e("f84e"),name:"小米集团",gid:"01810",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color4",src:e("0279"),name:"美团点评",gid:"03690",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color2",src:e("05cd"),name:"美图公司",gid:"01357",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color4",src:e("e74a"),name:"神州租车",gid:"01833",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color1",src:e("f341"),name:"阅文集团",gid:"00772",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color4",src:e("46b5"),name:"长和",gid:"00001",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color1",src:e("27fd"),name:"恒基地产",gid:"00012",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}},{color:"color2",src:e("e4a4"),name:"中国恒大",gid:"03333",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},traAmount:{name:"成交额",value:""}}]}},watch:{gidHK:function(){if(5==this.gidHK.length)this.showHK();else for(var a=0;a<this.listHK.length;a++)this.listHK[a].value=""}},methods:{showHK:u.a.debounce(function(){var a=this;a.msgHK="Searching...",n.a.get(this.API_PROXY+"http://web.juhe.cn:8080/finance/stock/hk?num="+a.gidHK+"&key=c95b13606a73270d34a65a3766e14d41").then(function(t){a.listHK[0].value=t.data.result[0].data.name,a.listHK[1].value=t.data.result[0].data.gid,a.listHK[2].value=t.data.result[0].data.date,a.listHK[3].value=t.data.result[0].data.time,a.listHK[4].value=t.data.result[0].data.limit,a.listHK[5].value=t.data.result[0].data.uppic,a.listHK[6].value=t.data.result[0].data.openpri,a.listHK[7].value=t.data.result[0].data.formpri,a.listHK[8].value=t.data.result[0].data.lastestpri,a.listHK[9].value=t.data.result[0].data.maxpri,a.listHK[10].value=t.data.result[0].data.minpri,a.listHK[11].value=t.data.result[0].data.inpic,a.listHK[12].value=t.data.result[0].data.outpic,a.listHK[13].value=t.data.result[0].data.priearn,a.listHK[14].value=t.data.result[0].data.traAmount,a.listHK[15].value=t.data.result[0].data.priearn,a.msgHK=""}).catch(function(){for(var t=0;t<a.listHK.length;t++)a.listHK[t].value="Invalid!";a.msgHK=""})},500),showItem:function(a){var t=this;n.a.get(this.API_PROXY+"http://web.juhe.cn:8080/finance/stock/hk?num="+t.list[a].gid+"&key=c95b13606a73270d34a65a3766e14d41").then(function(e){e.data.result[0].data.limit>=0?t.list[a].limit.value=e.data.result[0].data.limit+" ⇱":t.list[a].limit.value=e.data.result[0].data.limit+" ⇲",t.list[a].lastestpri.value=Math.floor(100*e.data.result[0].data.lastestpri)/100,t.list[a].traAmount.value=(e.data.result[0].data.traAmount/1e8).toFixed(2)+"亿(HKD)",t.list[a].priearn.value=e.data.result[0].data.priearn}).catch(function(){t.list[a].lastestpri.value="Invalid!",t.list[a].limit.value="Invalid!",t.list[a].priearn.value="Invalid!",t.list[a].traAmount.value="Invalid!"})}}},c=o,m=(e("f2cc"),e("2877")),v=Object(m["a"])(c,l,i,!1,null,"e0a95964",null);t["default"]=v.exports},bf57:function(a,t,e){},e4a4:function(a,t,e){a.exports=e.p+"img/03333.65582218.png"},e74a:function(a,t,e){a.exports=e.p+"img/01833.9c57b4a9.png"},f2cc:function(a,t,e){"use strict";var l=e("bf57"),i=e.n(l);i.a},f341:function(a,t,e){a.exports=e.p+"img/00772.982557e4.png"},f84e:function(a,t,e){a.exports=e.p+"img/01810.db279d7e.png"}}]);
//# sourceMappingURL=chunk-5319d7d5.e44b4b9c.js.map