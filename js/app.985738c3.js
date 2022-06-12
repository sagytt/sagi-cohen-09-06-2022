(function(){"use strict";var e={1458:function(e,t,a){var r=a(9242),o=(a(8937),a(3396));const i={class:"container"},n={class:"nav"},s=(0,o._)("a",{class:"navbar-brand",href:"#"},"Weather",-1),c={class:"links"},l={class:"form-check form-switch"},u=(0,o._)("label",{class:"form-check-label",for:"flexSwitchCheckDefault"},"Metric",-1),d=(0,o.Uk)("Home"),f=(0,o.Uk)(" | "),m=(0,o.Uk)("Favourites");function h(e,t,a,r,h,v){const p=(0,o.up)("router-link"),y=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("nav",n,[s,(0,o._)("div",c,[(0,o._)("div",l,[(0,o._)("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",checked:"",onClick:t[0]||(t[0]=t=>e.setMetric(!e.metric))}),u]),(0,o.Wm)(p,{to:"/",style:{margin:"10px"}},{default:(0,o.w5)((()=>[d])),_:1}),f,(0,o.Wm)(p,{to:"/favourites",style:{margin:"10px"}},{default:(0,o.w5)((()=>[m])),_:1})])]),(0,o.Wm)(y)])}var v=a(65),p={name:"App",computed:{...(0,v.Se)({metric:"isMetric"})},methods:{...(0,v.nv)(["setMetric"])}},y=a(89);const g=(0,y.Z)(p,[["render",h]]);var w=g,b=a(678),k=a(7139);const _=e=>((0,o.dD)("data-v-c333b862"),e=e(),(0,o.Cn)(),e),F={class:"home"},M=_((()=>(0,o._)("span",{"aria-hidden":"true"},[(0,o._)("i",{class:"bi bi-x-lg"})],-1))),D=[M],z={class:"search"},C=_((()=>(0,o._)("i",{class:"fa fa-search"},null,-1))),x={id:"datalistOptions"},S={key:0,class:"top"},L={style:{display:"flex"}},T=["src"],A={key:0},O={style:{display:"flex","align-items":"center","justify-content":"center"}},N={key:0},j={class:"bottom"};function q(e,t,a,i,n,s){const c=(0,o.up)("Forecast");return(0,o.wg)(),(0,o.iD)("div",F,[n.showModal?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,k.C_)(["alert alert-dismissible",{show:n.showModal,fade:!n.showModal,"alert-success":n.modalSuccess,"alert-danger":n.modalError}]),role:"alert"},[(0,o.Uk)((0,k.zw)(n.modalMessage)+" ",1),(0,o._)("button",{type:"button",class:"btn","aria-label":"Close",onClick:t[0]||(t[0]=e=>n.showModal=!1)},D)],2)):(0,o.kq)("",!0),(0,o._)("div",z,[C,(0,o.wy)((0,o._)("input",{type:"text",list:"datalistOptions",class:"form-control",placeholder:"Search city...","onUpdate:modelValue":t[1]||(t[1]=e=>n.query=e)},null,512),[[r.nr,n.query]]),(0,o._)("datalist",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.results,((e,t)=>((0,o.wg)(),(0,o.iD)("option",{key:t},(0,k.zw)(e.LocalizedName),1)))),128))])]),(0,o._)("div",null,[n.forecasts[0]?((0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("div",L,[(0,o._)("img",{src:"/assets/images/"+n.forecasts[0]["Day"]["Icon"]+"-s.png",width:"150",height:"90",alt:""},null,8,T),(0,o._)("div",null,[n.location?((0,o.wg)(),(0,o.iD)("h4",A,(0,k.zw)(n.location.LocalizedName),1)):(0,o.kq)("",!0),(0,o._)("h4",null,(0,k.zw)(n.forecasts[0]["Temperature"]["Maximum"]["Value"])+" "+(0,k.zw)(n.forecasts[0]["Temperature"]["Maximum"]["Unit"]),1)])]),(0,o._)("div",null,[(0,o._)("button",{type:"button",class:"btn",onClick:t[2]||(t[2]=e=>s.toggleFavourite())},[(0,o._)("i",{class:"bi bi-heart-fill",style:(0,k.j5)({color:s.isFavourite()?"red":"grey"})},null,4),(0,o.Uk)(" "+(0,k.zw)(s.isFavourite()?"Remove from Favourites":"Add to Favourites"),1)])])])):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o._)("div",O,[n.forecasts[0]?((0,o.wg)(),(0,o.iD)("h1",N,(0,k.zw)(n.forecasts[0]["Day"]["LongPhrase"]),1)):(0,o.kq)("",!0)])]),(0,o._)("div",j,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.forecasts,((e,t)=>((0,o.wg)(),(0,o.j4)(c,{location:n.location,forecast:e,key:t},null,8,["location","forecast"])))),128))])])])}function I(e,t){return null}const E={},U=(0,y.Z)(E,[["render",I],["__scopeId","data-v-717e854a"]]);var K=U;const Z={class:"card",style:{width:"200px",margin:"5px"}},P={class:"card-header"},V={class:"card-body"},W={class:"card-title"},H={class:"card-text"},B=["src"],G={class:"card-body"},J={class:"card-text"};function R(e,t,a,r,i,n){return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",P,(0,k.zw)(n.getDay()),1),(0,o._)("div",V,[(0,o._)("h5",W,(0,k.zw)(a.location.LocalizedName),1),(0,o._)("p",H,(0,k.zw)(a.forecast["Temperature"]["Maximum"]["Value"])+" "+(0,k.zw)(a.forecast["Temperature"]["Maximum"]["Unit"]),1)]),(0,o._)("img",{src:"/assets/images/"+a.forecast["Day"]["Icon"]+"-s.png",width:"150",height:"90",style:{margin:"auto"},alt:"..."},null,8,B),(0,o._)("div",G,[(0,o._)("h5",J,(0,k.zw)(a.forecast["Day"]["ShortPhrase"]),1)])])}var Y={name:"Forecast",props:["forecast","location"],data(){return{}},methods:{getDay(){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let t=new Date(this.forecast.Date).getDay();return e[t]}}};const $=(0,y.Z)(Y,[["render",R]]);var Q=$,X=a(5254);let ee=new X.Z;var te={name:"HomeView",components:{Search:K,Forecast:Q},data(){return{location:{Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"}},results:[],query:null,forecasts:[],showModal:!1,modalSuccess:!1,modalError:!1,modalMessage:null}},computed:{...(0,v.Se)({favourites:"getFavourites"})},methods:{...(0,v.nv)(["removeFavourite","addFavourite"]),isFavourite(){let e=this.favourites.find((e=>e.Key===this.location.Key));return!!e},toggleFavourite(){this.isFavourite()?(this.removeFavourite(this.location),this.modalSuccess=!0,this.modalMessage="Successfully removed from favourites",this.showModal=!0,setInterval((()=>{this.showModal=!1}),5e3)):(this.addFavourite(this.location),this.modalSuccess=!0,this.modalMessage="Successfully added to favourites",this.showModal=!0,setInterval((()=>{this.showModal=!1}),2e3))}},watch:{async query(e,t){let a=this.results.filter((t=>t?.LocalizedName===e))[0];a?this.location=a:e.length>2&&(this.results=await ee.suggestLocation(e))},async location(e,t){console.log("Location changed"),this.forecasts=await ee.getFiveDayForecast(e["Key"]),this.isFavourite(this.location["Key"])}},async mounted(){this.forecasts=await ee.getFiveDayForecast(this.location["Key"]),console.log(this.forecasts),this.favourite=this.isFavourite(this.location["Key"])}};const ae=(0,y.Z)(te,[["render",q],["__scopeId","data-v-c333b862"]]);var re=ae;const oe=[{path:"/",name:"home",component:re},{path:"/favourites",name:"about",component:()=>a.e(443).then(a.bind(a,4990))}],ie=(0,b.p7)({history:(0,b.r5)(),routes:oe});var ne=ie,se=a(4239);(0,r.ri)(w).use(se.Z).use(ne).mount("#app")},5254:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(6265),o=a.n(r),i=a(4239);class n{async suggestLocation(e){let t="http://dataservice.accuweather.com/locations/v1/cities/autocomplete",a=await o().get(t,{params:{apikey:"mCzmCuzMmsGz9cL6x4rVqUheFJ0l9WAI",q:e}});return a.data}async getFiveDayForecast(e){let t=`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${e}`,a=await o().get(t,{params:{apikey:"mCzmCuzMmsGz9cL6x4rVqUheFJ0l9WAI",details:!0,metric:i.Z.state.isMetric}});return a.data["DailyForecasts"]}async getFavouriteData(e){let t=`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${e}`,a=await o().get(t,{params:{apikey:"mCzmCuzMmsGz9cL6x4rVqUheFJ0l9WAI",details:!0,metric:i.Z.state.isMetric}});return a.data["DailyForecasts"]}}},4239:function(e,t,a){var r=a(65);t["Z"]=(0,r.MT)({state:{favourites:[],isMetric:!0},getters:{getFavourites(e){return e.favourites},isMetric(e){return e.isMetric}},mutations:{add(e,t){e.favourites=[...e.favourites,t]},remove(e,t){e.favourites=e.favourites.filter((e=>e.LocalizedName!==t.LocalizedName))},updateMetric(e,t){e.isMetric=t}},actions:{addFavourite(e,t){e.commit("add",t)},removeFavourite(e,t){e.commit("remove",t)},setMetric(e,t){e.commit("updateMetric",t)}},modules:{}})}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,i){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.2dd8f3e1.js"}}(),function(){a.miniCssF=function(e){return"css/about.4487c7e8.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="weather:";a.l=function(r,o,i,n){if(e[r])e[r].push(o);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,a){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/sagi-cohen-09-06-2022/"}(),function(){var e=function(e,t,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)a();else{var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){o=n[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var n=a.miniCssF(r),s=a.p+n;if(t(n,s))return o();e(r,s,o,i)}))},o={143:0};a.f.miniCss=function(e,t){var a={443:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,r){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(a,r){o=e[t]=[a,r]}));r.push(o[2]=i);var n=a.p+a.u(t),s=new Error,c=function(r){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,o[1](s)}};a.l(n,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,n=r[0],s=r[1],c=r[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(c)var u=c(a)}for(t&&t(r);l<n.length;l++)i=n[l],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},r=self["webpackChunkweather"]=self["webpackChunkweather"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(1458)}));r=a.O(r)})();
//# sourceMappingURL=app.985738c3.js.map