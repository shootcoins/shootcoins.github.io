(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),r=n("a925"),i=n("e06a"),o=n.n(i),s=n("5c96"),c=n.n(s),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{span:20,offset:2}},[a("el-container",[a("el-header",{staticClass:"header"},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("cf05")}}),a("span",[e._v("ShootCoins")])])]),a("el-col",{attrs:{span:8,offset:12}},[a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-contact"},[e.accounts.length?a("el-button",{attrs:{type:"primary"},on:{click:e.disConnectWallet}},[a("span",{staticStyle:{display:"inline-block",width:"80px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[e._v(e._s(e.accounts[0]))])]):a("el-button",{attrs:{type:"primary"},on:{click:e.connectWallet}},[a("span",{staticStyle:{display:"inline-block",width:"80px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[e._v(e._s("连接钱包"))])])],1),a("div",{staticClass:"menu-lang"},[a("el-dropdown",[a("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.$t("message.switch"))),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.switchLang("en")}}},[e._v("英")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.switchLang("cn")}}},[e._v("中")])],1)],1)],1)])])],1),a("el-main",[a("h1",{staticClass:"main-title"},[e._v(" 火币生态链XXXX挖矿平台 ")]),a("h1",{staticClass:"main-title-sec"},[e._v(" 平台介绍平台介绍平台介绍平台介绍平台介绍 ")]),a("div",{staticClass:"main-card"},[a("el-row",{attrs:{gutter:10}},e._l(e.valut,(function(t,n){return a("el-col",{key:n,staticClass:"main-box",attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"box-card-item"},[a("div",{staticClass:"box-card-item-header"},[a("div",{staticClass:"box-card-item-header-logo"},[a("img",{attrs:{src:t.logo_url}})]),a("div",{staticClass:"box-card-item-header-info"},[a("p",[e._v(e._s(t.name))])])]),a("div",{staticClass:"box-card-item-list"},[a("div",{staticClass:"box-card-item-list-li"},[a("span",[e._v("年化收益")]),a("span",[e._v(e._s(t.rate?t.rate:"--")+"%")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[e._v("总存")]),a("span",[e._v(" "+e._s(e._f("formatPrice")(t.totalDeposit))+" ")])]),a("div",{staticClass:"box-card-item-list-li"},[a("span",[e._v("已存")]),a("span",[e._v(" "+e._s(e._f("formatPrice")(t.alreadyDeposit))+" ")])])]),a("div",{staticClass:"box-card-item-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.openModal(t)}}},[e._v("存取")])],1)])])],1)})),1)],1)]),a("el-footer",[a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-contact"}),a("div",{staticClass:"footer-li"},[a("div",[e._v("Contributors")]),a("div",[e._v("Partners")]),a("div",[e._v("Governance")]),a("div",[e._v("© Stake DAO 2020")])])])])],1)],1),a("el-dialog",{attrs:{visible:e.visible,width:"30%","before-close":e.handleClose,top:"25vh"},on:{"update:visible":function(t){e.visible=t}}},[a("div",{staticClass:"dialog-header"},[a("div",{staticClass:"dialog-header-operate"},[a("span",{class:"deposit"===e.type?"active":"",on:{click:function(t){return e.switchStrategy("deposit")}}},[e._v("存币")]),a("span",{class:"withdraw"===e.type?"active":"",on:{click:function(t){return e.switchStrategy("withdraw")}}},[e._v("提币")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"deposit"===e.type,expression:"type === 'deposit'"}],staticClass:"dialog-form"},[a("div",{staticClass:"dialog-form-header"},[a("span",[e._v(e._s(e.modalData.balance)+" "+e._s(e.modalData.name))])]),a("div",{staticClass:"dialog-form-input"},[a("div",{staticClass:"dialog-form-input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.depositVal,expression:"depositVal"}],attrs:{type:"text",oninput:"value=value.replace(/[^\\d.]/g,'')"},domProps:{value:e.depositVal},on:{input:function(t){t.target.composing||(e.depositVal=t.target.value)}}}),a("span",{on:{click:function(t){e.depositVal=e.modalData.balance}}},[e._v("最大")])])]),a("div",{staticClass:"dialog-btn"},["0"!==e.modalData.allowanceInfo?a("div",{staticClass:"dialog-btn-group"},[a("button",{on:{click:e.handleClose}},[e._v(" 取消 ")]),a("button",{attrs:{disabled:e.depositDisabled},on:{click:e.deposit}},[e._v(" 确认 ")])]):a("button",{on:{click:e.auth}},[e._v("授权 "+e._s(e.modalData.name))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"withdraw"===e.type,expression:"type === 'withdraw'"}],staticClass:"dialog-form"},[a("div",{staticClass:"dialog-form-header"},[a("span",[e._v(e._s(e.modalData.alreadyDeposit)+" "+e._s(e.modalData.name))])]),a("div",{staticClass:"dialog-form-input"},[a("div",{staticClass:"dialog-form-input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.withdrawVal,expression:"withdrawVal"}],attrs:{type:"text"},domProps:{value:e.withdrawVal},on:{input:function(t){t.target.composing||(e.withdrawVal=t.target.value)}}}),a("span",{on:{click:function(t){e.withdrawVal=e.modalData.alreadyDeposit}}},[e._v("最大")])])]),a("div",{staticClass:"dialog-btn"},["0"!==e.modalData.allowanceInfo?a("div",{staticClass:"dialog-btn-group"},[a("button",{on:{click:e.handleClose}},[e._v(" 取消 ")]),a("button",{attrs:{disabled:e.withdrawDisabled},on:{click:e.withdraw}},[e._v(" 确认 ")])]):a("button",{on:{click:e.auth}},[e._v("授权 "+e._s(e.modalData.name))])])])])],1)},l=[],d=n("1da1"),p=(n("96cf"),n("a9e3"),n("1276"),n("ac1f"),n("d3b7"),n("25f0"),n("5319"),n("a15b"),n("159b"),n("b0c0"),n("b680"),[{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"address",name:"_manager",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"available",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"balance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"depositAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"earn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getPricePerFullShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"governance",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"manager",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"max",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"min",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_governance",type:"address"}],name:"setGovernance",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_manager",type:"address"}],name:"setManager",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_min",type:"uint256"}],name:"setMin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"token",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_shares",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawAll",outputs:[],stateMutability:"nonpayable",type:"function"}]),m=[{name:"USDT",token_address:"0xa71edc38d189767582c38a3145b5873052c3e47a",valut_address:"0x64DcE36fa143925Ca30CD8B93BFdC485eC609BEe",decimals:18,view_decimals:4,logo_url:"https://d1a3at8fafwo56.cloudfront.net/img/3d9af5c.png"},{name:"HUSD",token_address:"0x0298c2b32eae4da002a15f36fdf7615bea3da047",valut_address:"0x4FCb59d66916bDeCF01025d4c556Ba7657C5803F",decimals:8,view_decimals:4,logo_url:"https://d1a3at8fafwo56.cloudfront.net/img/7284453.png"}],f=n("2ef0"),w=n.n(f),y=n("4128"),h=n.n(y),v=n("99e5"),b={name:"App",data:function(){return{visible:!1,type:"deposit",depositVal:"",withdrawVal:"",web3:null,valut:[],token:[],accounts:[],modalData:{balance:0,name:"",allowanceInfo:0}}},computed:{depositDisabled:function(){return""===this.depositVal||0===Number(this.depositVal)},withdrawDisabled:function(){return""===this.withdrawVal||0===Number(this.withdrawVal)}},watch:{depositVal:function(e){console.log(e,"newNal")}},filters:{formatPrice:function(e,t){if(!e&&0!==e)return"--";!t&&(t=",");var n=e.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,t),n.join(".")}},mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:m.forEach((function(t){e.valut.push({name:t.name,decimals:t.decimals,view_decimals:t.view_decimals,token_address:t.token_address,valut_address:t.valut_address,logo_url:t.logo_url})})),setTimeout(Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(window.ethereum.networkVersion,"window.ethereum.networkVersion"),"128"!==window.ethereum.networkVersion){t.next=8;break}return t.next=4,e.instanceWeb3();case 4:return t.next=6,e.getContract();case 6:return t.next=8,e.getVaultInfo();case 8:case"end":return t.stop()}}),t)}))),1e3),window.ethereum.on("networkChanged",Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("128"===window.ethereum.networkVersion){t.next=5;break}e.accounts.pop(),window.location.href="?timestamp=".concat((new Date).getTime()),t.next=11;break;case 5:return t.next=7,e.instanceWeb3();case 7:return t.next=9,e.getContract();case 9:return t.next=11,e.getVaultInfo();case 11:case"end":return t.stop()}}),t)})))),window.ethereum.on("accountsChanged",function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$set(e.accounts,0,n[0]),t.next=3,e.getContract();case 3:return t.next=5,e.getVaultInfo();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})))()},methods:{switchLang:function(e){localStorage.setItem("lang",e),this.$i18n.locale=e},handleClose:function(){this.visible=!1,this.depositVal="",this.withdrawVal=""},openModal:function(e){this.accounts.length?(this.visible=!0,this.type="deposit",this.modalData=e,this.checkAuth()):this.$notify.warning({title:"提示消息",message:"请确保连接到了钱包",duration:2e3})},switchStrategy:function(e){this.type=e},connectWallet:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("128"===window.ethereum.networkVersion){t.next=3;break}return e.$notify.warning({title:"提示消息",message:"请确保连接到了heco链",duration:2e3}),t.abrupt("return");case 3:if(!window.ethereum){t.next=19;break}return n=new v(window.ethereum),t.prev=5,t.next=8,window.ethereum.enable();case 8:return t.next=10,e.getContract();case 10:return t.next=12,e.getVaultInfo();case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](5),console.error("User denied account access");case 17:t.next=20;break;case 19:n=window.web3?window.web3.currentProvider:new v.providers.HttpProvider("https://http-mainnet.hecochain.com");case 20:return e.web3=new v(n),t.next=23,e.web3.eth.getAccounts().then((function(t){console.log(e.accounts,"this.accounts"),e.accounts=t}));case 23:case"end":return t.stop()}}),t,null,[[5,14]])})))()},disConnectWallet:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.accounts.pop(),e.valut.forEach((function(t){m.forEach(function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a.name===t.name&&(e.$forceUpdate(),t.totalSupply=0,t.pricePerShare=0,t.totalDeposit=0,t.rate=0,t.alreadyDeposit=0,t.userShares=0,t.balance=0);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}));case 2:case"end":return t.stop()}}),t)})))()},instanceWeb3:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=null,!window.ethereum){t.next=19;break}return n=new v(window.ethereum),t.prev=3,console.log(1,"1"),t.next=7,window.ethereum.enable();case 7:return t.next=9,e.getContract();case 9:return t.next=11,e.getVaultInfo();case 11:t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](3),console.log(1,"1"),console.error("User denied account access");case 17:t.next=20;break;case 19:window.web3?n=window.web3.currentProvider:(console.log(6,"6"),n=new v.providers.HttpProvider("https://http-mainnet.hecochain.com"));case 20:return e.web3=new v(n),t.next=23,e.web3.eth.getAccounts().then((function(t){e.accounts=t}));case 23:console.log(e.accounts,"this.accounts");case 24:case"end":return t.stop()}}),t,null,[[3,13]])})))()},getContract:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:m.forEach((function(t){e.valut.forEach((function(n){t.name===n.name&&(n.contract=new e.web3.eth.Contract(p,n.valut_address),n.tokenContract=new e.web3.eth.Contract(p,n.token_address))}))}));case 1:case"end":return t.stop()}}),t)})))()},getVaultInfo:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.valut.forEach((function(t){m.forEach(function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(a){var r,i,o,s,c,u,l,d,p,m;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a.name!==t.name){n.next=34;break}return n.next=3,t.contract.methods.totalSupply().call();case 3:return r=n.sent,n.next=6,e.web3.eth.getBlockNumber();case 6:return i=n.sent,o=i-100,n.next=10,t.contract.methods.getPricePerFullShare().call();case 10:return s=n.sent,n.next=13,t.contract.methods.getPricePerFullShare().call(null,o);case 13:return c=n.sent,n.next=16,t.contract.methods.balanceOf(e.accounts[0]).call();case 16:return u=n.sent,n.next=19,t.tokenContract.methods.balanceOf(e.accounts[0]).call();case 19:return l=n.sent,d=u*s/Math.pow(10,t.decimals+18),p=105120*(s-c)/c,n.next=24,t.contract.methods.balance().call();case 24:m=n.sent,m/=Math.pow(10,t.decimals),e.$forceUpdate(),t.totalSupply=r,t.pricePerShare=s,t.totalDeposit=w.a.floor(m,t.view_decimals),t.rate=new h.a(parseFloat(p).toFixed(4)).mul(new h.a(100)),t.alreadyDeposit=w.a.floor(d,t.view_decimals),t.userShares=u,t.balance=w.a.floor(l/Math.pow(10,t.decimals),t.view_decimals);case 34:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})),console.log(e.valut,"this.valut");case 2:case"end":return t.stop()}}),t)})))()},sendTransaction:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n.abrupt("return",new Promise((function(n,r){t.web3.eth.sendTransaction(e).then((function(e){a.close(),console.log(e,"res"),n()})).catch((function(e){a.close(),e.code||(t.$notify.error({title:"提示消息",message:"交易失败",duration:0}),r(e))}))})));case 2:case"end":return n.stop()}}),n)})))()},checkAuth:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.modalData.tokenContract.methods.allowance(e.accounts[0],e.modalData.valut_address).call();case 2:n=t.sent,e.$set(e.modalData,"allowanceInfo",n);case 4:case"end":return t.stop()}}),t)})))()},auth:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.modalData.tokenContract.methods.approve(e.modalData.valut_address,"115792089237316000000000000000000000000000000000000000000000000000000000000000").encodeABI();case 2:n=t.sent,e.sendTransaction({from:e.accounts[0],to:e.modalData.token_address,data:n}).then((function(){e.checkAuth()})).catch((function(e){console.log(e,"error")}));case 4:case"end":return t.stop()}}),t)})))()},deposit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(e.depositVal)>e.modalData.balance)){t.next=3;break}return e.$notify.warning({title:"提示消息",message:"充币数量大于钱包余额，请重试",duration:2e3}),t.abrupt("return");case 3:if(n=String(e.depositVal*Math.pow(10,e.modalData.decimals)),a=null,Number(e.depositVal)!==e.modalData.balance){t.next=11;break}return t.next=8,e.modalData.contract.methods.depositAll().encodeABI();case 8:a=t.sent,t.next=14;break;case 11:return t.next=13,e.modalData.contract.methods.deposit(n).encodeABI();case 13:a=t.sent;case 14:e.sendTransaction({from:e.accounts[0],to:e.modalData.valut_address,data:a}).then((function(){e.$notify.success({title:"提示消息",message:"交易成功",duration:0}),e.tradeSuccess()})).catch((function(e){console.log(e,"error")}));case 15:case"end":return t.stop()}}),t)})))()},withdraw:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(e.withdrawVal)>e.modalData.alreadyDeposit)){t.next=3;break}return e.$notify.warning({title:"提示消息",message:"提币数量大于已存数量，请重试",duration:2e3}),t.abrupt("return");case 3:if(n=String(e.withdrawVal/e.modalData.alreadyDeposit*e.modalData.userShares),a=null,Number(e.withdrawVal)!==e.modalData.alreadyDeposit){t.next=11;break}return t.next=8,e.modalData.contract.methods.withdrawAll().encodeABI();case 8:a=t.sent,t.next=14;break;case 11:return t.next=13,e.modalData.contract.methods.withdraw(n).encodeABI();case 13:a=t.sent;case 14:e.sendTransaction({from:e.accounts[0],to:e.modalData.valut_address,data:a}).then((function(){e.$notify.success({title:"提示消息",message:"交易成功",duration:0}),e.tradeSuccess()})).catch((function(e){console.log(e,"error")}));case 15:case"end":return t.stop()}}),t)})))()},tradeSuccess:function(){this.getVaultInfo()}}},g=b,x=(n("5c0b"),n("2877")),_=Object(x["a"])(g,u,l,!1,null,null,null),k=_.exports,C=(n("7133"),n("4897")),T=n.n(C),D=n("5530"),M=n("b2d6"),V=n.n(M),O=Object(D["a"])({message:{switch:"switch"}},V.a),S=O,R=n("f0d9"),j=n.n(R),P=Object(D["a"])({message:{switch:"切换"}},j.a),A=P,I={en:S,cn:A};a["default"].use(c.a),a["default"].component("v-gravatar",o.a),a["default"].use(r["a"]);var $=new r["a"]({locale:localStorage.getItem("lang")||"cn",messages:I});T.a.i18n((function(e,t){return $.t(e,t)})),a["default"].config.productionTip=!1;var E=document.getElementsByTagName("head"),N=document.createElement("meta"),B="这里是keywords",F="这里是description",W="这里是title";document.title=W,document.querySelector('meta[name="keywords"]').setAttribute("content",B),document.querySelector('meta[name="description"]').setAttribute("content",F),N.content={keywords:B,description:F},E[0].appendChild(N),new a["default"]({render:function(e){return e(k)},i18n:$}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},7:function(e,t){},7133:function(e,t,n){},8:function(e,t){},9:function(e,t){},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.eee031ed.png"}});
//# sourceMappingURL=app.ff7cd7fb.js.map