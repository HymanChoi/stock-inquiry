(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dca8fb4a"],{"0cac":function(a,t,e){a.exports=e.p+"img/baba.94c95c72.png"},"0d2a":function(a,t,e){a.exports=e.p+"img/bidu.b8ed4fcb.png"},"0fba":function(a,t,e){a.exports=e.p+"img/jd.ad8f0eb6.png"},"188b":function(a,t,e){"use strict";var l=e("c36c"),i=e.n(l);i.a},"4ca8":function(a,t,e){a.exports=e.p+"img/pdd.8d6677a7.png"},"4f35":function(a,t,e){a.exports=e.p+"img/amzn.74689492.png"},"5df2":function(a,t,e){a.exports=e.p+"img/msft.f59b56ac.png"},"7db7":function(a,t,e){a.exports=e.p+"img/ntes.6258c27f.png"},b77d:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"US"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 color4 part"},[e("p",{staticClass:"title"},[a._v("美股")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.gidUS,expression:"gidUS"}],staticClass:"form-control",attrs:{type:"text",placeholder:"股票代码, 如:aapl",maxlength:"10"},domProps:{value:a.gidUS},on:{input:function(t){t.target.composing||(a.gidUS=t.target.value)}}}),e("p",{staticClass:"content"},[a._v(a._s(a.msgUS))]),a._l(a.listUS,function(t,l){return e("p",{key:l,staticClass:"content"},[a._v(a._s(t.text)+":"+a._s(t.value))])})],2),e("div",{staticClass:"col-md-9"},a._l(a.list,function(t,l){return e("div",{key:l,staticClass:"col-md-4",class:t.color},[e("div",{staticClass:"showHeader"},[e("div",{staticClass:"showImg"},[e("img",{attrs:{src:t.src},on:{click:function(t){return a.showItem(l)}}})]),e("span",{staticClass:"showName"},[a._v(a._s(t.name))]),e("span",{staticClass:"showGid"},[a._v(a._s(t.gid))])]),e("div",{staticClass:"showMain"},[e("span",{staticClass:"showData1"},[a._v(a._s(t.lastestpri.name)+": "+a._s(t.lastestpri.value))]),e("span",{staticClass:"showData2"},[a._v(a._s(t.limit.name)+": "+a._s(t.limit.value))]),e("span",{staticClass:"showData3"},[a._v(a._s(t.priearn.name)+": "+a._s(t.priearn.value))]),e("span",{staticClass:"showData4"},[a._v(a._s(t.markValue.name)+": "+a._s(t.markValue.value))])])])}),0)])])])},i=[],s=(e("7f7f"),e("bc3a")),u=e.n(s),n=e("2ef0"),c=e.n(n),r={data:function(){return{API_PROXY:"https://bird.ioliu.cn/v1/?url=",msgUS:"",gidUS:"",listUS:[{text:"股票名称",value:""},{text:"股票编号",value:""},{text:"美国时间",value:""},{text:"中国时间",value:""},{text:"涨跌百分比",value:""},{text:"涨跌额",value:""},{text:"今日开盘价",value:""},{text:"昨日收盘价",value:""},{text:"当前价格",value:""},{text:"今日最高价",value:""},{text:"今日最低价",value:""},{text:"市盈率",value:""},{text:"平均市盈率",value:""},{text:"市值",value:""},{text:"市盈率",value:""},{text:"收益率",value:""},{text:"美股收益",value:""},{text:"股息",value:""},{text:"股本",value:""}],list:[{color:"color2",src:e("f683"),name:"苹果",gid:"aapl",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color3",src:e("4f35"),name:"亚马逊",gid:"amzn",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color1",src:e("5df2"),name:"微软",gid:"msft",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color3",src:e("0cac"),name:"阿里巴巴",gid:"baba",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color1",src:e("0d2a"),name:"百度",gid:"bidu",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color2",src:e("7db7"),name:"网易",gid:"ntes",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color1",src:e("4ca8"),name:"拼多多",gid:"pdd",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color2",src:e("faad"),name:"爱奇艺",gid:"iq",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}},{color:"color3",src:e("0fba"),name:"京东",gid:"jd",lastestpri:{name:"当前价格",value:""},limit:{name:"涨跌百分比",value:""},priearn:{name:"市盈率",value:""},markValue:{name:"市值",value:""}}]}},watch:{gidUS:function(){if(this.gidUS)this.showUS();else for(var a=0;a<this.listUS.length;a++)this.listUS[a].value=""}},methods:{showUS:c.a.debounce(function(){var a=this;a.msgUS="Searching...",u.a.get(this.API_PROXY+"http://web.juhe.cn:8080/finance/stock/usa?gid="+a.gidUS+"&key=c95b13606a73270d34a65a3766e14d41").then(function(t){a.listUS[0].value=t.data.result[0].data.name,a.listUS[1].value=t.data.result[0].data.gid,a.listUS[2].value=t.data.result[0].data.ustime,a.listUS[3].value=t.data.result[0].data.chtime,a.listUS[4].value=t.data.result[0].data.limit,a.listUS[5].value=t.data.result[0].data.uppic,a.listUS[6].value=t.data.result[0].data.openpri,a.listUS[7].value=t.data.result[0].data.formpri,a.listUS[8].value=t.data.result[0].data.lastestpri,a.listUS[9].value=t.data.result[0].data.maxpri,a.listUS[10].value=t.data.result[0].data.minpri,a.listUS[11].value=t.data.result[0].data.traAmount,a.listUS[12].value=t.data.result[0].data.avgTraNumber,a.listUS[13].value=(t.data.result[0].data.markValue/1e8).toFixed(2)+"亿",a.listUS[14].value=t.data.result[0].data.priearn,a.listUS[15].value=t.data.result[0].data.ROR,a.listUS[16].value=t.data.result[0].data.EPS,a.listUS[17].value=t.data.result[0].data.divident,a.listUS[18].value=t.data.result[0].data.capital,a.msgUS=""}).catch(function(){for(var t=0;t<a.listUS.length;t++)a.listUS[t].value="Invalid!";a.msgUS=""})},1e3),showItem:function(a){var t=this;u.a.get(this.API_PROXY+"http://web.juhe.cn:8080/finance/stock/usa?gid="+t.list[a].gid+"&key=c95b13606a73270d34a65a3766e14d41").then(function(e){e.data.result[0].data.limit>=0?t.list[a].limit.value=e.data.result[0].data.limit+" ⇱":t.list[a].limit.value=e.data.result[0].data.limit+" ⇲",t.list[a].lastestpri.value=Math.floor(100*e.data.result[0].data.lastestpri)/100,t.list[a].markValue.value=(e.data.result[0].data.markValue/1e8).toFixed(2)+"亿(USD)",t.list[a].priearn.value=e.data.result[0].data.priearn}).catch(function(){t.list[a].limit.value="Invalid!",t.list[a].lastestpri.value="Invalid!",t.list[a].markValue.value="Invalid!",t.list[a].priearn.value="Invalid!"})}}},d=r,m=(e("188b"),e("2877")),v=Object(m["a"])(d,l,i,!1,null,"688b6dba",null);t["default"]=v.exports},c36c:function(a,t,e){},f683:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTIzVDAxOjEwOjI0KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA5LTIzVDAxOjEwOjI0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0yM1QwMToxMDoyNCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZWVlNTgyMy0yMWI3LWVlNGUtODlhYy00MzNjYWIzNmUzMzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZmRkYzNjMy01MzhmLTQzNGEtYjdiMi05ZTM5MjUyMzU2OTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMzBmYzBlNS03ZGRmLTQyNGEtOTk3OC0yMDg2ZjllNzgyMTUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzMGZjMGU1LTdkZGYtNDI0YS05OTc4LTIwODZmOWU3ODIxNSIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0yM1QwMToxMDoyNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZWVlNTgyMy0yMWI3LWVlNGUtODlhYy00MzNjYWIzNmUzMzkiIHN0RXZ0OndoZW49IjIwMTgtMDktMjNUMDE6MTA6MjQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MjkzNEIyNkNFQ0VDMzc0Q0RCMTAxRkQzMzIxNEU2NEY8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmEwZWMyODAtN2M0Ni05MTRmLTk1ZTUtMzc5OWY2OGUyM2QxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+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"},faad:function(a,t,e){a.exports=e.p+"img/iq.b61d5223.png"}}]);
//# sourceMappingURL=chunk-dca8fb4a.89d4412a.js.map