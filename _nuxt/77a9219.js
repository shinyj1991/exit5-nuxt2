(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(t,e,n){"use strict";var r=n(4);n(34);e.a=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.store.commit("app_loaded");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},183:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("91bd01d0",content,!0,{sourceMap:!1})},185:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("9e0a03a6",content,!0,{sourceMap:!1})},186:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7f88901c",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("200fff9a",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("98eb3866",content,!0,{sourceMap:!1})},189:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("3fad7ee4",content,!0,{sourceMap:!1})},222:function(t,e,n){"use strict";n.r(e);n(27),n(19),n(26),n(9),n(40),n(20),n(41);var r=n(11),o=n(25);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{categories:Array},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({blog_depth:function(t){return t.blog_depth},params:function(t){return t.params},id:function(t){return t.id}}))},d=c,f=n(15),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.categories.length>0?n("ul",t._l(t.categories,(function(e){return n("li",{key:e.path,class:{on:t.blog_depth[e.depth]===e.name}},[n("nuxt-link",{attrs:{to:"/blog/list/"+e.path}},[t._v(t._s(e.name))]),t._v(" "),n("aside-item",{class:"depth-"+(e.depth+1),attrs:{categories:e.child}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideItem:n(222).default})},231:function(t,e,n){"use strict";n(27),n(19),n(26),n(9),n(40),n(20),n(41);var r=n(11),o=n(25);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({isLoading:function(t){return t.is_loading}})),middleware:function(t){}},d=c,f=(n(287),n(15)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-default"},[n("aside-wrap"),t._v(" "),n("div",{staticClass:"container"},[n("nuxt")],1),t._v(" "),t.isLoading?n("loader"):t._e()],1)}),[],!1,null,"5e42f27a",null);e.a=component.exports;installComponents(component,{AsideWrap:n(538).default,Loader:n(540).default})},232:function(t,e,n){"use strict";n(299);var r=n(15),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout-fullsize"},[e("nuxt")],1)}),[],!1,null,"41b9921c",null);e.a=component.exports},234:function(t,e,n){n(235),t.exports=n(236)},262:function(t,e,n){"use strict";n.r(e);n(21),n(23),n(87);e.default=function(t){var e=t.store,n=t.route;e.commit("close_menu"),"blog-list-category"===n.name&&e.commit("set_blog_depth",n.params.category?n.params.category.split("_"):[]),"blog-detail-slug"===n.name&&e.commit("set_blog_depth",n.params.slug.split("_")),"blog-list-category"!==n.name&&"blog-detail-slug"!==n.name&&e.commit("set_blog_depth",[])}},277:function(t,e,n){"use strict";n(183)},278:function(t,e,n){var r=n(38)(!1);r.push([t.i,".layout-error[data-v-5740af59]{display:flex;width:100%;height:100%;text-align:center;justify-content:center;align-items:center}.layout-error__inner[data-v-5740af59]{display:grid;grid-row-gap:50px;row-gap:50px}.layout-error__inner a[data-v-5740af59]{color:#4fb9fe}.layout-error__inner a[data-v-5740af59]:hover{text-decoration:underline}",""]),t.exports=r},281:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("a74b3f6e",content,!0,{sourceMap:!1})},282:function(t,e,n){var r=n(38)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),r.push([t.i,'::-moz-selection{background:#fff;color:#000}::selection{background:#fff;color:#000}*,:after,:before{box-sizing:border-box;margin:0;padding:0;font-family:inherit;line-height:inherit;color:inherit;vertical-align:top;text-underline-position:under}body,html{width:100%;height:100%}body{font-family:"Noto Sans KR",sans-serif;font-weight:400;font-size:16px;color:#fff;background:#000}#__layout,#__nuxt{width:100%;height:100%}ol,ul{list-style:none}table{width:100%;border-spacing:0;table-layout:fixed}td,th{text-align:center;vertical-align:middle}a{text-decoration:none}button,input[type=button],input[type=file],input[type=image],input[type=reset],input[type=submit]{border:none;border-radius:0;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}input:not([type]),input[type=date],input[type=datetime-local],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{display:inline-block;width:100%;height:40px;font-size:16px;line-height:38px;color:#000;padding:0 10px;border:1px solid #ccc;background:#fff;box-shadow:none}input:not([type]):disabled,input[type=date]:disabled,input[type=datetime-local]:disabled,input[type=email]:disabled,input[type=month]:disabled,input[type=number]:disabled,input[type=password]:disabled,input[type=search]:disabled,input[type=tel]:disabled,input[type=text]:disabled,input[type=time]:disabled,input[type=url]:disabled,input[type=week]:disabled,select:disabled,textarea:disabled{background:#f7f7f7}input:not([type])::-moz-placeholder,input[type=date]::-moz-placeholder,input[type=datetime-local]::-moz-placeholder,input[type=email]::-moz-placeholder,input[type=month]::-moz-placeholder,input[type=number]::-moz-placeholder,input[type=password]::-moz-placeholder,input[type=search]::-moz-placeholder,input[type=tel]::-moz-placeholder,input[type=text]::-moz-placeholder,input[type=time]::-moz-placeholder,input[type=url]::-moz-placeholder,input[type=week]::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{color:#999}input:not([type]):-ms-input-placeholder,input[type=date]:-ms-input-placeholder,input[type=datetime-local]:-ms-input-placeholder,input[type=email]:-ms-input-placeholder,input[type=month]:-ms-input-placeholder,input[type=number]:-ms-input-placeholder,input[type=password]:-ms-input-placeholder,input[type=search]:-ms-input-placeholder,input[type=tel]:-ms-input-placeholder,input[type=text]:-ms-input-placeholder,input[type=time]:-ms-input-placeholder,input[type=url]:-ms-input-placeholder,input[type=week]:-ms-input-placeholder,select:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#999}input:not([type])::placeholder,input[type=date]::placeholder,input[type=datetime-local]::placeholder,input[type=email]::placeholder,input[type=month]::placeholder,input[type=number]::placeholder,input[type=password]::placeholder,input[type=search]::placeholder,input[type=tel]::placeholder,input[type=text]::placeholder,input[type=time]::placeholder,input[type=url]::placeholder,input[type=week]::placeholder,select::placeholder,textarea::placeholder{color:#999}textarea{height:300px;padding:10px;line-height:1.5}input[type=number] ::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}',""]),t.exports=r},287:function(t,e,n){"use strict";n(185)},288:function(t,e,n){var r=n(38)(!1);r.push([t.i,".layout-default[data-v-5e42f27a]{width:100%;height:100%;min-width:360px;padding:0 0 0 240px;color:#fff}.layout-default .container[data-v-5e42f27a]{height:100%}@media screen and (max-width:1200px){.layout-default[data-v-5e42f27a]{padding:50px 0 0}}",""]),t.exports=r},289:function(t,e,n){"use strict";n(186)},290:function(t,e,n){var r=n(38)(!1);r.push([t.i,'.aside-wrap{position:fixed;top:0;left:0;width:240px;min-height:100%;background:#222;padding:50px 12px}.aside-wrap .logo{margin-bottom:30px;padding:0 12px;text-align:center}.aside-wrap .logo a{display:block;font-weight:700;font-size:32px}.aside-wrap .btn_menu{display:none}@media screen and (max-width:1200px){.aside-wrap{display:flex;justify-content:space-between;align-items:center;width:100%;min-height:0;height:50px;padding:0 20px;z-index:100}.aside-wrap .logo{margin-bottom:0;padding:0}.aside-wrap .logo a{font-size:20px}.aside-wrap .btn_menu{display:block;position:relative;width:22px;height:24px;z-index:101}.aside-wrap .btn_menu:before{content:"";top:2px}.aside-wrap .btn_menu:before,.aside-wrap .btn_menu span{display:block;position:absolute;left:0;width:100%;height:3px;background:#fff;transition:all .3s}.aside-wrap .btn_menu span{text-indent:-9999em;top:10px}.aside-wrap .btn_menu:after{display:block;content:"";position:absolute;top:18px;left:0;width:100%;height:3px;background:#fff;transition:all .3s}.aside-wrap.open .btn_menu:before{top:7px;transform:rotate(45deg)}.aside-wrap.open .btn_menu span{opacity:0}.aside-wrap.open .btn_menu:after{top:7px;transform:rotate(-45deg)}}',""]),t.exports=r},295:function(t,e,n){"use strict";n(187)},296:function(t,e,n){var r=n(38)(!1);r.push([t.i,".aside-list{padding:20px 0}.aside-list ul{display:grid;padding-left:20px}.aside-list ul li a{display:block;color:#999;text-transform:capitalize}.aside-list ul li a:hover{text-decoration:underline}.aside-list ul li.on>a{color:#fff}.aside-list ul.depth-0{grid-row-gap:30px;row-gap:30px;font-size:24px}.aside-list ul.depth-0>li>a{text-transform:uppercase;font-weight:700}.aside-list ul.depth-1{font-size:18px}.aside-list ul.depth-1,.aside-list ul.depth-2{margin-top:12px;grid-row-gap:12px;row-gap:12px}.aside-list ul.depth-2{font-size:12px}@media screen and (max-width:1200px){.aside-list{overflow:hidden;display:flex;position:fixed;top:0;right:0;left:0;height:0;padding:0;opacity:0;z-index:100;justify-content:center;align-items:center;text-align:center;background:rgba(0,0,0,.9)}.aside-list ul{padding-left:0}.open .aside-list{height:100%;opacity:1;transition:opacity .3s}}",""]),t.exports=r},297:function(t,e,n){"use strict";n(188)},298:function(t,e,n){var r=n(38)(!1);r.push([t.i,".loader-outer[data-v-e916f30c]{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1001;background:rgba(0,0,0,.15)}.loader10[data-v-e916f30c]{box-sizing:border-box;width:100px;height:100px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.container-B[data-v-e916f30c],.spinner3[data-v-e916f30c]{position:absolute;width:100%;height:100%;left:0;top:0}.spinner3[data-v-e916f30c]{-webkit-animation:rotation0-data-v-e916f30c 6s linear infinite,resize3-data-v-e916f30c 6s linear infinite;animation:rotation0-data-v-e916f30c 6s linear infinite,resize3-data-v-e916f30c 6s linear infinite}.hex0[data-v-e916f30c],.hex120[data-v-e916f30c],.hex240[data-v-e916f30c]{position:absolute;box-sizing:border-box;width:100%;height:57.74%;left:0;top:21.13%;border-left:2px solid #fff;border-right:2px solid #fff}.hex0[data-v-e916f30c]{-webkit-animation:rotation0-data-v-e916f30c 4s linear infinite;animation:rotation0-data-v-e916f30c 4s linear infinite}.hex120[data-v-e916f30c]{transform:rotate(120deg);-webkit-animation:rotation120-data-v-e916f30c 4s linear infinite;animation:rotation120-data-v-e916f30c 4s linear infinite}.hex240[data-v-e916f30c]{transform:rotate(240deg);-webkit-animation:rotation240-data-v-e916f30c 4s linear infinite;animation:rotation240-data-v-e916f30c 4s linear infinite}@-webkit-keyframes rotation0-data-v-e916f30c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotation0-data-v-e916f30c{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes rotation120-data-v-e916f30c{0%{transform:rotate(120deg)}to{transform:rotate(480deg)}}@keyframes rotation120-data-v-e916f30c{0%{transform:rotate(120deg)}to{transform:rotate(480deg)}}@-webkit-keyframes rotation240-data-v-e916f30c{0%{transform:rotate(240deg)}to{transform:rotate(600deg)}}@keyframes rotation240-data-v-e916f30c{0%{transform:rotate(240deg)}to{transform:rotate(600deg)}}@-webkit-keyframes resize3-data-v-e916f30c{0%,16.66%,33.33%,50%,66.66%,83.33%,to{width:100%;height:100%;top:0;left:0}2.77%,19.44%,36.11%,52.77%,69.44%,86.11%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}5.55%,22.22%,38.88%,55.55%,72.22%,88.88%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}8.33%,25%,41.66%,58.33%,75%,91.66%{width:73.2%;height:73.2%;top:13.4%;left:13.4%}11.11%,27.77%,44.44%,61.11%,77.77%,94.44%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}13.88%,30.55%,47.22%,63.88%,80.55%,97.22%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}}@keyframes resize3-data-v-e916f30c{0%,16.66%,33.33%,50%,66.66%,83.33%,to{width:100%;height:100%;top:0;left:0}2.77%,19.44%,36.11%,52.77%,69.44%,86.11%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}5.55%,22.22%,38.88%,55.55%,72.22%,88.88%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}8.33%,25%,41.66%,58.33%,75%,91.66%{width:73.2%;height:73.2%;top:13.4%;left:13.4%}11.11%,27.77%,44.44%,61.11%,77.77%,94.44%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}13.88%,30.55%,47.22%,63.88%,80.55%,97.22%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}}",""]),t.exports=r},299:function(t,e,n){"use strict";n(189)},300:function(t,e,n){var r=n(38)(!1);r.push([t.i,".layout-fullsize[data-v-41b9921c]{width:100%;height:100%}",""]),t.exports=r},301:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(34),{nuxtServerInit:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.app,console.log("nuxtServerInit");case 2:case"end":return t.stop()}}),t)})))()}});e.default={state:function(){return{is_menu:!1,app_loaded:!1,is_loading:!1,blog_depth:[]}},mutations:{toggle_menu:function(t){t.is_menu=!t.is_menu},close_menu:function(t){t.is_menu=!1},app_loaded:function(t){t.app_loaded=!0},set_loading:function(t,e){t.is_loading=e},set_blog_depth:function(t,e){t.blog_depth=e}},actions:o}},302:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(34),n(226)),l=n.n(o),c={getProductSingle:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.$axios.$get("https://dummyjson.com/products/".concat(e.productId),{httpsAgent:new l.a.Agent({rejectUnauthorized:!1})});case 2:o=r.sent,t.commit("setProduct",o);case 4:case"end":return r.stop()}}),r)})))()}};e.default={state:function(){return{product:{}}},mutations:{setProduct:function(t,e){t.product=e}},actions:c}},307:function(t,e){},309:function(t,e){},320:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(34),n(63),{setCount:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.commit,setTimeout((function(){var t=e;return r("setCount",t),t}),300);case 2:case"end":return n.stop()}}),n)})))()}});e.default={state:function(){return{count:!1}},mutations:{setCount:function(t,e){t.count=e}},actions:o}},538:function(t,e,n){"use strict";n.r(e);n(27),n(19),n(26),n(9),n(40),n(20),n(41);var r=n(11),o=n(25);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({is_menu:function(t){return t.is_menu}})),methods:{toggle_menu:function(){this.$store.commit("toggle_menu")}}},d=c,f=(n(289),n(15)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aside-wrap",class:{open:t.is_menu}},[n("h1",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("SIMPLIZM")])],1),t._v(" "),n("button",{staticClass:"btn_menu",attrs:{type:"button"},on:{click:t.toggle_menu}},[n("span",[t._v("메뉴열기")])]),t._v(" "),n("aside-list")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideList:n(539).default})},539:function(t,e,n){"use strict";n.r(e);n(27),n(19),n(26),n(40),n(20),n(41);var r=n(4),o=n(11),l=(n(34),n(50),n(23),n(87),n(151),n(9),n(21),n(291),n(25));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({is_menu:function(t){return t.is_menu},params:function(t){return t.params},id:function(t){return t.id}})),fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],r=[],e.next=4,t.$content({deep:!0}).only(["path"]).fetch();case 4:e.sent.map((function(article){var t=article.path.split("/");t.shift(),t.pop();for(var e=t.length,path="",o=function(i){var e=i>0?r.find((function(e){return e.name===t[i-1]})).child:n;path+=i>0?"_"+t[i]:t[i],r.find((function(e){return e.name===t[i]}))||(r.push({name:t[i],path:path,depth:i,child:[]}),e.push(r[r.length-1]),e.sort((function(a,b){return a.name>b.name?1:-1})))},i=0;i<e;i++)o(i)})),t.category_list=n;case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{category_list:[]}},methods:{toggle_menu:function(){this.$store.commit("toggle_menu")}}},f=d,h=(n(295),n(15)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"aside-list"},[n("aside-item",{staticClass:"depth-0",attrs:{categories:t.category_list}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideItem:n(222).default})},540:function(t,e,n){"use strict";n.r(e);n(297);var r=n(15),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader-outer"},[n("div",{staticClass:"loader10"},[n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"})])])])])])])])])])])])])}],!1,null,"e916f30c",null);e.default=component.exports},55:function(t,e,n){"use strict";var r={props:["error"],layout:"fullsize"},o=(n(277),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-error"},[n("div",{staticClass:"layout-error__inner"},[404===t.error.statusCode?n("h1",[t._v("페이지를 찾을 수 없습니다.")]):n("h1",[t._v("An error occurred")]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[t._v("메인 페이지 바로가기")])],1)])}),[],!1,null,"5740af59",null);e.a=component.exports}},[[234,11,1,12]]]);