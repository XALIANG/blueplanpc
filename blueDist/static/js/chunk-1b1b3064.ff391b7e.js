(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b1b3064"],{"1a50":function(t,e,a){},"458c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"communication-container bg"},[a("div",{staticClass:"communication-user-list p-l-5"},[a("UserList",{ref:"UserList"})],1),a("div",{staticClass:"communication-message-content"},[a("div",{staticClass:"message-view p-10"},[a("UserContent",{ref:"UserContent"}),a("WebSocket",{ref:"websocket",attrs:{params:t.userParamText},on:{onGroupChat:t.obtianMessageList}})],1),a("div",{staticClass:"message-text"},[a("div",{staticClass:"text-expression mtb-10"}),a("div",{staticClass:"text-value"},[a("a-textarea",{ref:"textarea",staticClass:"text",attrs:{maxLength:324,placeholder:"文本"},on:{pressEnter:t.obtainText},model:{value:t.userParamText,callback:function(e){t.userParamText=e},expression:"userParamText"}})],1),a("div",{staticClass:"text-button"},[a("a-button",{attrs:{size:"small"}},[t._v("关闭")]),a("a-button",{attrs:{size:"small",type:"primary"},on:{click:t.obtainText}},[t._v("发送（Enter）")])],1)])])])},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"communication-userlist"},[a("a-list",{attrs:{"data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e,i){return a("a-list-item",{on:{click:function(a){return t.obtainUserItem(e,i)}}},[a("div",{staticClass:"hand user-active",class:{active:t.listIndex==i}},[a("a-list-item-meta",{attrs:{description:e.textInfo}},[a("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),a("a-avatar",{attrs:{slot:"avatar",src:e.headerUrl},slot:"avatar"})],1)],1)])}}])})],1)},r=[],n=[{title:"服务器",textInfo:"测试text",id:0,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b",userTextRecord:[]},{title:"罗翔",textInfo:"你他妈的犯法知道吗？",id:1,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b",userTextRecord:[]},{title:"古天乐",textInfo:"明天有个学校要捐",id:2,headerUrl:"https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto",userTextRecord:[]},{title:"刘德华",textInfo:"演唱会开始了...",id:3,headerUrl:"https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",userTextRecord:[]},{title:"周润发",textInfo:"你一点也不像个杀手.",id:4,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec",userTextRecord:[]},{title:"罗翔",textInfo:"你他妈的犯法知道吗？",id:5,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b",userTextRecord:[]},{title:"古天乐",textInfo:"明天有个学校要捐",id:6,headerUrl:"https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto",userTextRecord:[]},{title:"刘德华",textInfo:"演唱会开始了...",id:7,headerUrl:"https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",userTextRecord:[]},{title:"周润发",textInfo:"你一点也不像个杀手.",id:8,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec",userTextRecord:[]},{title:"罗翔",textInfo:"你他妈的犯法知道吗？",id:9,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b"},{title:"古天乐",textInfo:"明天有个学校要捐",id:10,headerUrl:"https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto"},{title:"刘德华",textInfo:"演唱会开始了...",id:11,headerUrl:"https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"},{title:"周润发",textInfo:"你一点也不像个杀手.",id:12,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec"},{title:"罗翔",textInfo:"你他妈的犯法知道吗？",id:13,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b"},{title:"古天乐",textInfo:"明天有个学校要捐",id:14,headerUrl:"https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto"},{title:"刘德华",textInfo:"演唱会开始了...",id:15,headerUrl:"https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"},{title:"周润发",textInfo:"你一点也不像个杀手.",id:16,headerUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec"}],o={name:"userList",data:function(){return{data:n,listIndex:0}},mounted:function(){},methods:{obtainUserItem:function(t,e){this.listIndex=e}}},m=o,p=(a("5667"),a("2877")),u=Object(p["a"])(m,c,r,!1,null,null,null),f=u.exports,l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{attrs:{id:"content-views"}},t._l(t.userMessageData,(function(e,i){return a("li",{key:i,staticClass:"text-contaiter left-text m-b-10",class:{"right-text":"right"===e.position}},[a("span",{staticClass:"text-msg"},[t._v(t._s(e.msg))])])})),0)},d=[],h=a("ac0d"),g={mixins:[h["c"]],data:function(){return{message:[]}},mounted:function(){}},F=g,b=(a("ee18"),Object(p["a"])(F,l,d,!1,null,null,null)),x=b.exports,q={components:{UserList:f,UserContent:x},data:function(){return{userParamText:"",mainUser:[]}},computed:{},methods:{obtainText:function(){""!==this.userParamText&&(this.$refs.textarea.$el.addEventListener("keydown",(function(t){13==t.keyCode&&(t.returnValue=!1)})),this.$refs.websocket.groupChat(),this.userParamText="")},arrayUnique2:function(t,e){var a={};return t.reduce((function(t,i){return!a[i[e]]&&(a[i[e]]=t.push(i)),t}),[])},obtianMessageList:function(t){console.log("聊天记录",t),this.$nextTick((function(){}))}}},C=q,j=(a("dc6d"),Object(p["a"])(C,i,s,!1,null,"4e6d4054",null));e["default"]=j.exports},5667:function(t,e,a){"use strict";a("b4ff")},a069:function(t,e,a){},b4ff:function(t,e,a){},dc6d:function(t,e,a){"use strict";a("a069")},ee18:function(t,e,a){"use strict";a("1a50")}}]);