(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],p=0,v=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0f4c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nav"),a("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Popular TV")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/movies"}},[t._v("Movies")])],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Nav"},c=l,u=(a("7db4"),a("2877")),p=Object(u["a"])(c,s,i,!1,null,null,null),v=p.exports,f={name:"App",components:{Nav:v}},d=f,b=(a("034f"),Object(u["a"])(d,r,o,!1,null,null,null)),g=b.exports,m=(a("7b17"),a("ab8b"),a("8c4f")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.movies,(function(e){return a("div",{key:e.id,staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:"https://image.tmdb.org/t/p/w300/"+e.poster_path,alt:""}}),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[t._v(" "+t._s(e.original_title)+" ")]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.overview))])])])})),0)])},_=[],y=(a("a434"),a("bc3a")),w=a.n(y),C={name:"Movies",data:function(){return{movies:[]}},mounted:function(){var t=this;w.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=70a15c30fb26538a968ba499524a5e4e&language=en-US&page=1").then((function(e){t.movies=e.data.results,t.movies.splice(4,16),console.log(e.data.results)}))}},O=C,j=(a("bee4"),Object(u["a"])(O,h,_,!1,null,null,null)),k=j.exports;n["a"].use(m["a"]);var x=new m["a"]({routes:[{path:"/",component:k},{path:"/movies",component:k}],mode:"history"});new n["a"]({render:function(t){return t(g)},router:x}).$mount("#app")},"7db4":function(t,e,a){"use strict";a("f882")},"85ec":function(t,e,a){},bee4:function(t,e,a){"use strict";a("0f4c")},f882:function(t,e,a){}});
//# sourceMappingURL=app.55c39dd8.js.map