"use strict";(self["webpackChunkweather"]=self["webpackChunkweather"]||[]).push([[443],{4990:function(a,e,t){t.r(e),t.d(e,{default:function(){return T}});var o=t(3396),s=t(7139);const r=a=>((0,o.dD)("data-v-be175d1e"),a=a(),(0,o.Cn)(),a),i=r((()=>(0,o._)("span",{"aria-hidden":"true"},[(0,o._)("i",{class:"bi bi-x-lg"})],-1))),l=[i],d={class:"favourites"};function n(a,e,t,r,i,n){const c=(0,o.up)("FavouriteCard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i.showModal?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,s.C_)(["alert alert-dismissible",{show:i.showModal,fade:!i.showModal,"alert-success":i.modalSuccess}]),role:"alert"},[(0,o.Uk)((0,s.zw)(i.modalMessage)+" ",1),(0,o._)("button",{type:"button",class:"btn","aria-label":"Close",onClick:e[0]||(e[0]=a=>i.showModal=!1)},l)],2)):(0,o.kq)("",!0),(0,o._)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.favourites,(a=>((0,o.wg)(),(0,o.j4)(c,{location:a,onRemovedFavourite:e=>n.toggleFavourite(a),key:a},null,8,["location","onRemovedFavourite"])))),128))])],64)}const c={class:"card",style:{width:"200px",margin:"5px"}},u={class:"card-header"},v=(0,o._)("i",{class:"bi bi-heart-fill",style:{color:"red"}},null,-1),h=[v],g={key:0,class:"card-body"},m={class:"card-title"},w={class:"card-text"},y=["src"],p={key:2,class:"card-body"},F={class:"card-title"},b={class:"card-text"};function k(a,e,t,r,i,l){return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",u,[(0,o.Uk)((0,s.zw)(l.getDay())+" ",1),(0,o._)("button",{type:"button",class:"btn",onClick:e[0]||(e[0]=a=>l.toggleFavourite())},h)]),i.data?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("h5",m,(0,s.zw)(t.location.LocalizedName),1),(0,o._)("p",w,(0,s.zw)(i.data.Temperature.Maximum.Value)+" "+(0,s.zw)(i.data.Temperature.Maximum.Unit),1)])):(0,o.kq)("",!0),i.data?((0,o.wg)(),(0,o.iD)("img",{key:1,src:"/assets/images/"+i.data["Day"]["Icon"]+"-s.png",width:"150",height:"90",style:{margin:"auto"},alt:"..."},null,8,y)):(0,o.kq)("",!0),i.data?((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("h5",F,(0,s.zw)(t.location.LocalizedName),1),(0,o._)("p",b,(0,s.zw)(i.data.Day.LongPhrase),1)])):(0,o.kq)("",!0)])}var f=t(5254),D=t(65);let _=new f.Z;var M={name:"Favourite",props:["location","toggleFavourite"],data(){return{data:null}},methods:{...(0,D.nv)(["removeFavourite","addFavourite"]),toggleFavourite(){this.$emit("removedFavourite")},getDay(){if(this.data){const a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let e=new Date(this.data.Date).getDay();return a[e]}}},watch:{async location(a,e){}},async created(){const a=await _.getFavouriteData(this.location["Key"]);this.data=a[0],console.log(a[0])}},z=t(89);const C=(0,z.Z)(M,[["render",k]]);var x=C,S={name:"FavouriteView",components:{FavouriteCard:x},computed:{...(0,D.Se)({favourites:"getFavourites"})},data(){return{showModal:!1,modalSuccess:!1,modalError:!1,modalMessage:null}},methods:{...(0,D.nv)(["removeFavourite"]),toggleFavourite(a){this.removeFavourite(a),this.modalSuccess=!0,this.modalMessage="Successfully removed from favourites",this.showModal=!0,setInterval((()=>{this.showModal=!1}),5e3)}}};const q=(0,z.Z)(S,[["render",n],["__scopeId","data-v-be175d1e"]]);var T=q}}]);
//# sourceMappingURL=about.2dd8f3e1.js.map