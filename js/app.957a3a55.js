(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0686":function(e,t,a){},"1b7b":function(e,t,a){},"20e1":function(e,t,a){e.exports=a.p+"img/beihang_logo.37e79f26.gif"},"3ac6":function(e,t,a){"use strict";a("9125")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Banner"),a("div",{attrs:{id:"content"}},[a("row",{attrs:{container:"",gutter:40}},[a("column",{attrs:{xs:12,md:4,lg:4}},[a("Aside")],1),a("column",{attrs:{xs:12,md:8,lg:8}},[a("MainLeaderboard")],1)],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"banner"}},[n("h1",[n("b",[e._v(e._s(e.title))]),e._v(" "+e._s(e.version))]),n("h2",[e._v(e._s(e.subTitle))]),n("img",{staticClass:"logo",attrs:{id:"img-jiaoda",alt:"Xi'an Jiaotong Univeristy",src:a("beae")}}),n("img",{staticClass:"logo",attrs:{id:"img-beihang",alt:"Xi'an Jiaotong Univeristy",src:a("20e1")}}),n("img",{staticClass:"logo",attrs:{id:"img-microsoft",alt:"Xi'an Jiaotong Univeristy",src:a("e554")}})])},o=[],l={name:"Banner",data:function(){return{title:"Chase",version:"1.0",subTitle:"A Large-Scale and Pragmatic Chinese Dataset for Cross-Database Context-Dependent Text-to-SQL"}}},c=l,d=(a("f230"),a("2877")),u=Object(d["a"])(c,i,o,!1,null,null,null),p=u.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"aside"}},[a("div",{staticClass:"card"},[e._m(0),a("p",[e._v(" Chase is to date the largest Chinese dataset for the cross-database context-dependent Text-to-SQL problem. It consists of 5,459 question sequences (17,940 questions) over 280 databases. Each question in Chase has rich semantic annotations, including its SQL query, contextual dependency, and schema linking. ")]),a("row",{attrs:{container:"",gutter:10}},[a("column",{attrs:{xs:12,md:12,lg:4}},[a("el-button",{attrs:{type:"success",round:""}},[a("a",{staticClass:"btn-link",attrs:{href:"https://aclanthology.org/2021.acl-long.180/"}},[e._v("Paper")])])],1),a("column",{attrs:{xs:12,md:12,lg:4}},[a("el-button",{attrs:{type:"success",round:""}},[a("a",{staticClass:"btn-link",attrs:{href:"https://github.com/xjtu-intsoft/chase/tree/page/data"}},[e._v("Dataset")])])],1),a("column",{attrs:{xs:12,md:12,lg:4}},[a("el-button",{attrs:{type:"success",round:""}},[a("a",{staticClass:"btn-link",attrs:{href:"https://github.com/xjtu-intsoft/chase"}},[e._v("Github")])])],1)],1)],1),e._m(1),a("div",{staticClass:"card"},[e._m(2),e._m(3),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"Dataset",prop:"name"}}),a("el-table-column",{attrs:{label:"# DB",prop:"db"}}),a("el-table-column",{attrs:{label:"# Seq.",prop:"sequence"}}),a("el-table-column",{attrs:{label:"# Pair",prop:"pair"}}),a("el-table-column",{attrs:{label:"# Avg. Turn",prop:"turn"}})],1)],1),e._m(4),e._m(5),e._m(6)])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h2",[e._v("What is Chase?")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h2",[e._v("News")])]),a("p",[e._v(" We have released the data of Chase. Please feel free to examine the data and contact us if there are any problem. We are constructing Japanese version of Chase. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h2",[e._v("How to Construct Chase?")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Data in Chase are collected from two sources. First, we collect 120 databases from "),a("a",{attrs:{href:"https://www.aclweb.org/anthology/2020.emnlp-main.562.pdf"}},[a("b",[e._v("DuSQL")])]),e._v(", which is a context-independent Chinese Text-to-SQL dataset. To collect question sequences, we recruit 12 Chinese college students who are skilled at SQL to create question sequences against databases from scratch. Second, to enlarge dour dataset, we translate all the data in "),a("a",{attrs:{href:"https://yale-lily.github.io/sparc"}},[a("b",[e._v("SParC")])]),e._v(", inlcuding questions, SQL queries, and databases, from English to Chinese. 11 students are recruited to perform the translation. Please refer to our "),a("a",{attrs:{href:"https://aclanthology.org/2021.acl-long.180/"}},[a("b",[e._v("ACL'21 paper")])]),e._v(" for more details of the dataset construction. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h2",[e._v("Have Questions or Want to Contribute?")])]),a("p",[e._v("Please ask us questions at our "),a("a",{attrs:{href:"https://github.com/xjtu-intsoft/chase/issues"}},[e._v("Github issue pages")]),e._v(" or contact Jiaqi Guo (JasperGuo AT outlook.com).")]),a("p",[e._v("We plan to support more languages in Chase. Please contact us if you are interested in building a context-dependent Text-to-SQL dataset for your native language.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h2",[e._v("Acknowledgements")])]),a("p",[e._v(" We thank Weixu Zhang, Jiawei Lin, Xiaotong Zheng, Nan Hu, Tingting Zhang, Zekun Qi, Chengzu Li, Junjie Tao, Jinghan He, and Yu Ma for participating in the construction of Chase. Ming Fan was partially supported by NSFC (61902306), China Postdoctoral Science Foundation (2019TQ0251, 2020M673439), Youth Talent Support Plan of Xi’an Association for Science and Technology (095920201303). ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h2",[e._v("Citation")])]),a("pre",[e._v("                "),a("code",[e._v('\n@inproceedings{guo-etal-2021-chase,\n  title = {Chase: A Large-Scale and Pragmatic Chinese Dataset for \n              Cross-Database Context-Dependent Text-to-SQL},\n  author = {Jiaqi Guo and Ziliang Si and Yu Wang and Qian Liu \n                  and Ming Fan and Jian-Guang Lou and Zijiang Yang \n                  and Ting Liu}\n  booktitle = "Proceedings of the 59th Annual Meeting of \n                      the Association for Computational Linguistics and \n                      the 11th International Joint Conference on \n                      Natural Language Processing",\n  address = "Online",\n  publisher = "Association for Computational Linguistics",\n  year = 2021,\n  month = aug,\n  pages = 2316--2331,\n  url = "https://aclanthology.org/2021.acl-long.180",\n}\n                ')]),e._v("\n            ")])])}],b={name:"Aside",data:function(){return{tableData:[{name:"Chase",db:280,table:1280,sequence:5459,pair:17940,turn:3.3},{name:"Chase-C",db:120,table:462,sequence:2003,pair:7694,turn:3.8},{name:"Chase-T",db:160,table:818,sequence:3456,pair:10246,turn:3}]}}},v=b,m=(a("3ac6"),Object(d["a"])(v,h,f,!1,null,null,null)),_=m.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main-leaderboard"}},[a("div",{staticClass:"card"},[e._m(0),a("AccuracyTable",{attrs:{tableData:e.chaseTableData}})],1),a("div",{staticClass:"card"},[e._m(1),a("AccuracyTable",{attrs:{tableData:e.chaseCTableData}})],1),a("div",{staticClass:"card"},[e._m(2),a("AccuracyTable",{attrs:{tableData:e.chaseTTableData}})],1)])},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h2",[e._v("Chase Leaderboard - Exact Set Match without Values")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h2",[e._v("Chase-C Leaderboard - Exact Set Match without Values")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h2",[e._v("Chase-T Leaderboard - Exact Set Match without Values")])])}],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"accuracy-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{type:"expand","default-sort":{prop:"rank",order:"descending"}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"Model"}},[a("span",[e._v(e._s(t.row.model))])]),a("el-form-item",{attrs:{label:"Affliation"}},[a("span",[e._v(e._s(t.row.affliation))])]),a("el-form-item",{attrs:{label:"SQL Hardness (QM)"}},[a("span",{staticClass:"score-span"},[a("b",[e._v("Easy")]),e._v(": "+e._s(t.row.hardness.easy)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Medium")]),e._v(": "+e._s(t.row.hardness.medium)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Hard")]),e._v(": "+e._s(t.row.hardness.hard)+" ")]),a("span",[a("b",[e._v("Extra Hard")]),e._v(": "+e._s(t.row.hardness.extra)+" ")])]),a("el-form-item",{attrs:{label:"Contextual Dependency (QM)"}},[a("span",{staticClass:"score-span"},[a("b",[e._v("Independent")]),e._v(": "+e._s(t.row.context.independent)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Dependent")]),e._v(": "+e._s(t.row.context.dependent)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Coreference")]),e._v(": "+e._s(t.row.context.coreference)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Ellipsis")]),e._v(": "+e._s(t.row.context.ellipsis)+" ")])]),a("el-form-item",{attrs:{label:"Dev Question Match"}},[a("span",[e._v(e._s(t.row.devQM))])]),a("el-form-item",{attrs:{label:"Dev Interaction Match"}},[a("span",[e._v(e._s(t.row.devIM))])]),a("el-form-item",{attrs:{label:"Dev SQL Hardness (QM)"}},[a("span",{staticClass:"score-span"},[a("b",[e._v("Easy")]),e._v(": "+e._s(t.row.devHardness.easy)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Medium")]),e._v(": "+e._s(t.row.devHardness.medium)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Hard")]),e._v(": "+e._s(t.row.devHardness.hard)+" ")]),a("span",[a("b",[e._v("Extra Hard")]),e._v(": "+e._s(t.row.devHardness.extra)+" ")])]),a("el-form-item",{attrs:{label:"Dev Contextual Dependency (QM)"}},[a("span",{staticClass:"score-span"},[a("b",[e._v("Independent")]),e._v(": "+e._s(t.row.devContext.independent)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Dependent")]),e._v(": "+e._s(t.row.devContext.dependent)+" ")]),a("span",{staticClass:"score-span"},[a("b",[e._v("Coreference")]),e._v(": "+e._s(t.row.devContext.coreference)+" ")]),a("span",[a("b",[e._v("Ellipsis")]),e._v(": "+e._s(t.row.devContext.ellipsis)+" ")])]),a("el-form-item",{attrs:{label:"Paper"}},[a("a",{attrs:{href:t.row.paper}},[e._v(e._s(t.row.paper))])]),a("el-form-item",{attrs:{label:"Code"}},[a("a",{attrs:{href:t.row.code}},[e._v(e._s(t.row.code))])])],1)]}}])}),a("el-table-column",{attrs:{label:"Rank",prop:"rank",sortable:"",width:"80"}}),a("el-table-column",{attrs:{label:"Model",prop:"model"}}),a("el-table-column",{attrs:{label:"Pre-train LM",prop:"pretrainLM"}}),a("el-table-column",{attrs:{label:"Ensemble",prop:"ensemble",width:"90"}}),a("el-table-column",{attrs:{label:"Question Match",prop:"QM",sortable:""}}),a("el-table-column",{attrs:{label:"Interaction Match",prop:"IM",sortable:""}}),a("el-table-column",{attrs:{label:"Date",prop:"date",sortable:"",width:"100"}})],1)],1)},y=[],w={name:"AccuracyTable",props:["tableData"]},M=w,Q=(a("c244"),Object(d["a"])(M,x,y,!1,null,null,null)),T=Q.exports,D={name:"MainLeaderboard",components:{AccuracyTable:T},data:function(){return{tableData:[{rank:1,date:"2021-06-01",model:"IGSQL",pretrainLM:"Chinese-BERT-base",ensemble:"false",code:"https://github.com/headacheboy/IGSQL",paper:"https://www.aclweb.org/anthology/2020.emnlp-main.560.pdf",affliation:"Peking University",chase:{QM:40.4,IM:15.6,devQM:41.4,devIM:20,devHardness:{easy:65.6,medium:41.1,hard:27.3,extra:16.6},devContext:{independent:56.3,dependent:33.3,coreference:33.1,ellipsis:33.2},hardness:{easy:65.9,medium:38.5,hard:27.1,extra:10.2},context:{independent:55.7,dependent:31.2,coreference:35.1,ellipsis:25.8}},chaseC:{QM:32.6,IM:9.3,devQM:31.4,devIM:10.8,devHardness:{easy:52.3,medium:36.6,hard:23.5,extra:11.4},devContext:{independent:45.4,dependent:25.7,coreference:25.8,ellipsis:25.2},hardness:{easy:61.2,medium:33.8,hard:22.9,extra:9},context:{independent:46.7,dependent:26.5,coreference:29.8,ellipsis:21.6}},chaseT:{QM:43.3,IM:26.3,devQM:43.3,devIM:26.3,devHardness:{easy:66.2,medium:36.9,hard:24,extra:12.5},devContext:{independent:56.2,dependent:33.9,coreference:35.1,ellipsis:31.1},hardness:{easy:66.2,medium:36.9,hard:24,extra:12.5},context:{independent:56.2,dependent:33.9,coreference:35.1,ellipsis:31.1}}},{rank:2,date:"2021-06-01",model:"EditSQL",pretrainLM:"Chinese-BERT-base",ensemble:"false",code:"https://github.com/ryanzhumich/editsql",paper:"https://www.aclweb.org/anthology/D19-1537.pdf",affliation:"Yale University, Salesforce Research, and Cornell University",chase:{QM:37.8,IM:14.7,devQM:37.7,devIM:17.4,devHardness:{easy:63.2,medium:37,hard:22,extra:13.8},devContext:{independent:52.8,dependent:29.5,coreference:29.4,ellipsis:29.2},hardness:{easy:63,medium:34.3,hard:26.1,extra:10.8},context:{independent:54.1,dependent:28,coreference:30.1,ellipsis:24.5}},chaseC:{QM:32.6,IM:8.7,devQM:33.6,devIM:8.4,devHardness:{easy:58.5,medium:36.8,hard:24.4,extra:15.4},devContext:{independent:51.1,dependent:26.6,coreference:27.1,ellipsis:25.4},hardness:{easy:59.1,medium:33.6,hard:25.6,extra:8},context:{independent:49.3,dependent:25.3,coreference:28.6,ellipsis:20.2}},chaseT:{QM:41.6,IM:21.6,devHardness:{easy:65.7,medium:34.7,hard:20.8,extra:14.6},devContext:{independent:55.8,dependent:30.2,coreference:29.4,ellipsis:31.1},hardness:{easy:65.7,medium:34.7,hard:20.8,extra:14.6},context:{independent:55.8,dependent:30.2,coreference:29.4,ellipsis:31.1},devQM:41.6,devIM:21.6}},{rank:3,date:"2021-06-01",model:"RatSQL + Concat",pretrainLM:"Chinese-BERT-base",ensemble:"false",code:"https://github.com/microsoft/rat-sql",paper:"https://www.aclweb.org/anthology/2020.acl-main.677.pdf",affliation:"University of Edinburgh, UC Berkeley, and Microsoft Research",chase:{QM:32.5,IM:9.8,devQM:35.1,devIM:14.6,devHardness:{easy:60.9,medium:35.4,hard:16.4,extra:11.6},devContext:{independent:49.3,dependent:27.3,coreference:27.1,ellipsis:28.1},hardness:{easy:56,medium:29.1,hard:18.4,extra:11.7},context:{independent:45.7,dependent:24.5,coreference:25,ellipsis:23.8}},chaseC:{QM:23.9,IM:4.5,devQM:24.6,devIM:5.4,devHardness:{easy:46.5,medium:29.5,hard:13.3,extra:8.3},devContext:{independent:35.8,dependent:20,coreference:19.8,ellipsis:20.2},hardness:{easy:48.3,medium:24.9,hard:14.3,extra:5.2},context:{independent:34.7,dependent:19.2,coreference:21.5,ellipsis:15.6}},chaseT:{QM:43.7,IM:21.6,devQM:43.7,devIM:21.6,devHardness:{easy:68,medium:37.4,hard:18.2,extra:15.3},devContext:{independent:56.4,dependent:34.5,coreference:33.2,ellipsis:36.8},hardness:{easy:68,medium:37.4,hard:18.2,extra:15.3},context:{independent:56.4,dependent:34.5,coreference:33.2,ellipsis:36.8}}}]}},computed:{chaseTableData:function(){for(var e=new Array,t=0;t<this.tableData.length;t++){var a=Object.assign({},this.tableData[t]);a=Object.assign(a,a.chase),a=Object.assign(a,a.chase.hardness),a=Object.assign(a,a.chase.context),e.push(a)}return e},chaseCTableData:function(){for(var e=new Array,t=0;t<this.tableData.length;t++){var a=Object.assign({},this.tableData[t]);a=Object.assign(a,a.chaseC),a=Object.assign(a,a.chaseC.hardness),a=Object.assign(a,a.chaseC.context),e.push(a)}return e},chaseTTableData:function(){for(var e=new Array,t=0;t<this.tableData.length;t++){var a=Object.assign({},this.tableData[t]);a=Object.assign(a,a.chaseT),a=Object.assign(a,a.chaseT.hardness),a=Object.assign(a,a.chaseT.context),e.push(a)}return e}}},L=D,S=(a("aa92"),Object(d["a"])(L,g,C,!1,null,null,null)),j=S.exports,E={name:"App",components:{Banner:p,Aside:_,MainLeaderboard:j}},I=E,O=(a("034f"),Object(d["a"])(I,s,r,!1,null,null,null)),k=O.exports,A=a("85db"),H=a("5c96");a("0fae");n["default"].config.productionTip=!1,n["default"].component("row",A["b"]),n["default"].component("column",A["a"]),n["default"].use(H["Table"]),n["default"].use(H["TableColumn"]),n["default"].use(H["Form"]),n["default"].use(H["FormItem"]),n["default"].use(H["Button"]),new n["default"]({render:function(e){return e(k)}}).$mount("#app")},"7fdb":function(e,t,a){},"85ec":function(e,t,a){},9125:function(e,t,a){},aa92:function(e,t,a){"use strict";a("1b7b")},beae:function(e,t,a){e.exports=a.p+"img/jiaoda.3bdf71fc.png"},c244:function(e,t,a){"use strict";a("0686")},e554:function(e,t,a){e.exports=a.p+"img/msra.5f57b99b.png"},f230:function(e,t,a){"use strict";a("7fdb")}});
//# sourceMappingURL=app.957a3a55.js.map