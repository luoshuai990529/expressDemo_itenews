(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72db0d08"],{"00be":function(t,e,a){"use strict";var s=a("8a33"),i=a.n(s);i.a},2265:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"peritems",on:{click:t.sendClick}},[a("a",{staticClass:"msg_1",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v(t._s(t.msg1))]),a("a",{staticClass:"msg_2",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v(" "+t._s(t.msg2)+" "),a("i",{staticClass:"iconfont icon-youjiantou"})])])},i=[],n={props:["msg1","msg2"],data(){return{}},methods:{sendClick(){this.$emit("emitclick")}}},r=n,o=(a("2a52"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,"05c5e31e",null);e["a"]=c.exports},"2a52":function(t,e,a){"use strict";var s=a("bdff"),i=a.n(s);i.a},7399:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"perInfo"},[s("div",{staticClass:"headerIcon"},[s("div",{staticClass:"myStatus clearfix"},[t.headimg?s("div",{staticClass:"iconShow"},[s("img",{attrs:{src:"http://localhost:3000"+t.headimg,alt:""}})]):s("div",{staticClass:"iconShow"},[s("img",{attrs:{src:a("92dd"),alt:""}})]),s("div",{staticClass:"headerMsg"},[s("div",{staticClass:"msg1"},[s("p",[s("i",{staticClass:"iconfont",class:1==t.gender?"icon-xingbienan":"icon-xingbienv"}),s("span",{staticClass:"nickname"},[t._v(t._s(t.nickname))])]),s("p",{staticClass:"createDate"},[t._v(t._s(t._f("formateDate")(t.createdate)))])]),s("i",{staticClass:"iconfont icon-youjiantou",on:{click:t.editInfo}})])])]),s("div",{staticClass:"perOption"},[s("peropt-temp",{attrs:{msg1:"我的关注",msg2:"关注的用户"},on:{emitclick:function(e){return t.handler("Attention")}}}),s("peropt-temp",{attrs:{msg1:"我的跟帖",msg2:"跟帖/回复"},on:{emitclick:function(e){return t.handler("myDiscuss")}}}),s("peropt-temp",{attrs:{msg1:"我的收藏",msg2:"文章/视频"},on:{emitclick:function(e){return t.handler("myStar")}}}),s("peropt-temp",{attrs:{msg1:"栏目管理",msg2:"文章分类"},on:{emitclick:function(e){return t.handler("Manager")}}}),s("peropt-temp",{attrs:{msg1:"设置",msg2:""},on:{emitclick:function(e){return t.handler("setting")}}}),s("peropt-temp",{attrs:{msg1:"退出",msg2:""},on:{emitclick:t.logout}}),s("p",[s("button",{staticClass:"backIndex",on:{click:t.backIndex}},[t._v("回到首页")])])],1),s("transition",{attrs:{"enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[s("router-view",{attrs:{name:"EditInfoTemp"}})],1),s("transition",{attrs:{"enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[s("router-view",{attrs:{name:"AttentionTemp"}})],1),s("transition",{attrs:{"enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[s("router-view",{attrs:{name:"myStarTemp"}})],1),s("transition",{attrs:{"enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[s("router-view",{attrs:{name:"myDiscussTemp"}})],1),s("transition",{attrs:{"enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[s("router-view",{attrs:{name:"ManagerTemp"}})],1)],1)},i=[],n=a("2265"),r={filters:{formateDate:function(t){let e=t.split("T")[0];return e}},data(){return{nickname:"火星包",createdate:"2020-08-07",gender:1,headimg:"",userId:""}},components:{PeroptTemp:n["a"]},methods:{handler(t){"Attention"==t?this.$router.push("/perinfo/attention"):"myStar"==t?this.$router.push("/perinfo/mystar"):"setting"==t?this.editInfo():"myDiscuss"==t?this.$router.push("/perinfo/mydiscuss"):"Manager"==t&&this.$router.push("/perinfo/columnmanager")},logout(){this.$dialog.confirm({message:"你确定要退出登录吗？"}).then(()=>{localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("categoryList"),localStorage.removeItem("delCategoryList"),this.$router.replace("/login")}).catch(()=>{})},editInfo(){console.log("编辑我的信息"),this.$router.push("/perinfo/editinfo?id="+this.userId)},loadPage(){this.$axios({url:"/user/"+localStorage.getItem("userId"),method:"get"}).then(t=>{401==t.data.statusCode?(this.$toast.fail("请先登录!"),localStorage.removeItem("token"),localStorage.removeItem("userId"),this.$router.replace("/login")):(this.nickname=t.data.data.nickname,this.createdate=t.data.data.create_date,this.gender=t.data.data.gender,this.headimg=t.data.data.head_img,this.userId=t.data.data.id)})},backIndex(){this.$router.push("/home?category="+Number(localStorage.getItem("curCategoryIndex")))}},watch:{"$route.path":function(t,e){console.log("当前path:"+t,"之前path："+e),"/perinfo"==t&&"/perinfo/editinfo"==e&&(console.log("渲染个人中心"),this.loadPage())}},mounted(){this.loadPage()}},o=r,c=(a("00be"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,"5b1ae2cb",null);e["default"]=l.exports},"8a33":function(t,e,a){},"92dd":function(t,e,a){t.exports=a.p+"img/d1.82ae637b.jpg"},bdff:function(t,e,a){}}]);
//# sourceMappingURL=chunk-72db0d08.961cd368.js.map