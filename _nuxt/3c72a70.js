(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(t,e,n){"use strict";var o=n(7);n(43);e.a=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.store.commit("app_loaded");case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},178:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("5d81831b",content,!0,{sourceMap:!1})},179:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("7f88901c",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("200fff9a",content,!0,{sourceMap:!1})},181:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("517541fc",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";n.r(e);n(26),n(20),n(25),n(9),n(35),n(18),n(36);var o=n(11),r=n(23);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{categories:Array},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({blog_depth:function(t){return t.blog_depth},params:function(t){return t.params},id:function(t){return t.id}}))},c=d,f=n(17),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.categories.length>0?n("ul",t._l(t.categories,(function(e){return n("li",{key:e.path,class:{on:t.blog_depth[e.depth]===e.name}},[n("nuxt-link",{attrs:{to:"/blog/list/"+e.path}},[t._v(t._s(e.name))]),t._v(" "),n("aside-item",{class:"depth-"+(e.depth+1),attrs:{categories:e.child}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideItem:n(201).default})},209:function(t,e,n){"use strict";n(26),n(20),n(25),n(9),n(35),n(18),n(36);var o=n(11),r=n(23);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({is_loading:function(t){return t.is_loading}}))},c=d,f=(n(265),n(17)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("aside-wrap"),t._v(" "),n("div",{attrs:{id:"container"}},[n("nuxt")],1),t._v(" "),t.is_loading?n("loader"):t._e()],1)}),[],!1,null,"04d2cfbc",null);e.a=component.exports;installComponents(component,{AsideWrap:n(495).default,Loader:n(497).default})},214:function(t,e,n){n(215),t.exports=n(216)},241:function(t,e,n){"use strict";n.r(e);n(21),n(24),n(100);e.default=function(t){var e=t.store,n=t.route;e.commit("close_menu"),console.log(n.name),"blog-list-category"===n.name&&e.commit("set_blog_depth",n.params.category.split("_")),"blog-detail-slug"===n.name&&e.commit("set_blog_depth",n.params.slug.split("_")),"blog-list-category"!==n.name&&"blog-detail-slug"!==n.name&&e.commit("set_blog_depth",[])}},259:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("a74b3f6e",content,!0,{sourceMap:!1})},260:function(t,e,n){var o=n(39)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),o.push([t.i,'::-moz-selection{background:#fff;color:#000}::selection{background:#fff;color:#000}*,:after,:before{box-sizing:border-box;margin:0;padding:0;font-family:inherit;line-height:inherit;color:inherit;vertical-align:top;text-underline-position:under}body{font-family:"Noto Sans KR",sans-serif;font-weight:400;font-size:16px;color:#000}ol,ul{list-style:none}table{width:100%;border-spacing:0;table-layout:fixed}td,th{text-align:center;vertical-align:middle}a{text-decoration:none}button,input[type=button],input[type=file],input[type=image],input[type=reset],input[type=submit]{border:none;border-radius:0;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}input:not([type]),input[type=date],input[type=datetime-local],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{display:inline-block;width:100%;height:40px;font-size:16px;line-height:38px;color:#000;padding:0 10px;border:1px solid #ccc;background:#fff;box-shadow:none}input:not([type]):disabled,input[type=date]:disabled,input[type=datetime-local]:disabled,input[type=email]:disabled,input[type=month]:disabled,input[type=number]:disabled,input[type=password]:disabled,input[type=search]:disabled,input[type=tel]:disabled,input[type=text]:disabled,input[type=time]:disabled,input[type=url]:disabled,input[type=week]:disabled,select:disabled,textarea:disabled{background:#f7f7f7}input:not([type])::-moz-placeholder,input[type=date]::-moz-placeholder,input[type=datetime-local]::-moz-placeholder,input[type=email]::-moz-placeholder,input[type=month]::-moz-placeholder,input[type=number]::-moz-placeholder,input[type=password]::-moz-placeholder,input[type=search]::-moz-placeholder,input[type=tel]::-moz-placeholder,input[type=text]::-moz-placeholder,input[type=time]::-moz-placeholder,input[type=url]::-moz-placeholder,input[type=week]::-moz-placeholder,select::-moz-placeholder,textarea::-moz-placeholder{color:#999}input:not([type]):-ms-input-placeholder,input[type=date]:-ms-input-placeholder,input[type=datetime-local]:-ms-input-placeholder,input[type=email]:-ms-input-placeholder,input[type=month]:-ms-input-placeholder,input[type=number]:-ms-input-placeholder,input[type=password]:-ms-input-placeholder,input[type=search]:-ms-input-placeholder,input[type=tel]:-ms-input-placeholder,input[type=text]:-ms-input-placeholder,input[type=time]:-ms-input-placeholder,input[type=url]:-ms-input-placeholder,input[type=week]:-ms-input-placeholder,select:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#999}input:not([type])::placeholder,input[type=date]::placeholder,input[type=datetime-local]::placeholder,input[type=email]::placeholder,input[type=month]::placeholder,input[type=number]::placeholder,input[type=password]::placeholder,input[type=search]::placeholder,input[type=tel]::placeholder,input[type=text]::placeholder,input[type=time]::placeholder,input[type=url]::placeholder,input[type=week]::placeholder,select::placeholder,textarea::placeholder{color:#999}textarea{height:300px;padding:10px;line-height:1.5}input[type=number] ::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}',""]),t.exports=o},265:function(t,e,n){"use strict";n(178)},266:function(t,e,n){var o=n(39)(!1);o.push([t.i,"#wrap[data-v-04d2cfbc]{position:relative;min-width:320px;min-height:100vh;padding:0 0 0 240px;background:#000;color:#fff}@media screen and (max-width:1200px){#wrap[data-v-04d2cfbc]{padding:50px 0 0}}",""]),t.exports=o},267:function(t,e,n){"use strict";n(179)},268:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.aside-wrap{position:fixed;top:0;left:0;width:240px;min-height:100%;background:#2c343e;padding:50px 12px}.aside-wrap .logo{margin-bottom:30px;padding:0 12px;text-align:center}.aside-wrap .logo a{display:block;font-weight:700;font-size:32px}.aside-wrap .btn_menu{display:none}@media screen and (max-width:1200px){.aside-wrap{display:flex;justify-content:space-between;align-items:center;width:100%;min-height:0;height:50px;padding:0 20px;z-index:100}.aside-wrap .logo{margin-bottom:0;padding:0}.aside-wrap .logo a{font-size:20px}.aside-wrap .btn_menu{display:block;position:relative;width:22px;height:24px;z-index:101}.aside-wrap .btn_menu:before{content:"";top:2px}.aside-wrap .btn_menu:before,.aside-wrap .btn_menu span{display:block;position:absolute;left:0;width:100%;height:3px;background:#fff;transition:all .3s}.aside-wrap .btn_menu span{text-indent:-9999em;top:10px}.aside-wrap .btn_menu:after{display:block;content:"";position:absolute;top:18px;left:0;width:100%;height:3px;background:#fff;transition:all .3s}.aside-wrap.open .btn_menu:before{top:7px;transform:rotate(45deg)}.aside-wrap.open .btn_menu span{opacity:0}.aside-wrap.open .btn_menu:after{top:7px;transform:rotate(-45deg)}}',""]),t.exports=o},273:function(t,e,n){"use strict";n(180)},274:function(t,e,n){var o=n(39)(!1);o.push([t.i,".aside-list{padding:20px 0}.aside-list ul{display:grid;padding-left:20px}.aside-list ul.depth-0{grid-row-gap:30px;row-gap:30px;font-size:24px}.aside-list ul.depth-0>li>a{font-weight:700;text-transform:uppercase}.aside-list ul.depth-1{margin-top:12px;grid-row-gap:12px;row-gap:12px;font-size:18px}.aside-list ul.depth-2{margin-top:8px;grid-row-gap:8px;row-gap:8px;font-size:12px}.aside-list ul li a{display:block;padding:0 1em;color:#999}.aside-list ul li a:hover{text-decoration:underline}.aside-list ul li.on>a{color:#fff}@media screen and (max-width:1200px){.aside-list{overflow:hidden;display:flex;position:fixed;top:0;right:0;left:0;height:0;padding:0;opacity:0;z-index:100;justify-content:center;align-items:center;text-align:center;background:rgba(0,0,0,.9)}.aside-list ul{padding-left:0}.open .aside-list{height:100vh;opacity:1;transition:opacity .3s}}",""]),t.exports=o},275:function(t,e,n){"use strict";n(181)},276:function(t,e,n){var o=n(39)(!1);o.push([t.i,".loader-outer[data-v-1356d061]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1001;background:rgba(0,0,0,.15)}.loader10[data-v-1356d061]{box-sizing:border-box;width:100px;height:100px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.container-B[data-v-1356d061],.spinner3[data-v-1356d061]{position:absolute;width:100%;height:100%;left:0;top:0}.spinner3[data-v-1356d061]{-webkit-animation:rotation0-data-v-1356d061 6s linear infinite,resize3-data-v-1356d061 6s linear infinite;animation:rotation0-data-v-1356d061 6s linear infinite,resize3-data-v-1356d061 6s linear infinite}.hex0[data-v-1356d061],.hex120[data-v-1356d061],.hex240[data-v-1356d061]{position:absolute;box-sizing:border-box;width:100%;height:57.74%;left:0;top:21.13%;border-left:2px solid #fff;border-right:2px solid #fff}.hex0[data-v-1356d061]{-webkit-animation:rotation0-data-v-1356d061 4s linear infinite;animation:rotation0-data-v-1356d061 4s linear infinite}.hex120[data-v-1356d061]{transform:rotate(120deg);-webkit-animation:rotation120-data-v-1356d061 4s linear infinite;animation:rotation120-data-v-1356d061 4s linear infinite}.hex240[data-v-1356d061]{transform:rotate(240deg);-webkit-animation:rotation240-data-v-1356d061 4s linear infinite;animation:rotation240-data-v-1356d061 4s linear infinite}@-webkit-keyframes rotation0-data-v-1356d061{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotation0-data-v-1356d061{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes rotation120-data-v-1356d061{0%{transform:rotate(120deg)}to{transform:rotate(480deg)}}@keyframes rotation120-data-v-1356d061{0%{transform:rotate(120deg)}to{transform:rotate(480deg)}}@-webkit-keyframes rotation240-data-v-1356d061{0%{transform:rotate(240deg)}to{transform:rotate(600deg)}}@keyframes rotation240-data-v-1356d061{0%{transform:rotate(240deg)}to{transform:rotate(600deg)}}@-webkit-keyframes resize3-data-v-1356d061{0%,16.66%,33.33%,50%,66.66%,83.33%,to{width:100%;height:100%;top:0;left:0}2.77%,19.44%,36.11%,52.77%,69.44%,86.11%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}5.55%,22.22%,38.88%,55.55%,72.22%,88.88%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}8.33%,25%,41.66%,58.33%,75%,91.66%{width:73.2%;height:73.2%;top:13.4%;left:13.4%}11.11%,27.77%,44.44%,61.11%,77.77%,94.44%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}13.88%,30.55%,47.22%,63.88%,80.55%,97.22%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}}@keyframes resize3-data-v-1356d061{0%,16.66%,33.33%,50%,66.66%,83.33%,to{width:100%;height:100%;top:0;left:0}2.77%,19.44%,36.11%,52.77%,69.44%,86.11%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}5.55%,22.22%,38.88%,55.55%,72.22%,88.88%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}8.33%,25%,41.66%,58.33%,75%,91.66%{width:73.2%;height:73.2%;top:13.4%;left:13.4%}11.11%,27.77%,44.44%,61.11%,77.77%,94.44%{width:84.4%;height:84.4%;top:7.8%;left:7.8%}13.88%,30.55%,47.22%,63.88%,80.55%,97.22%{width:93.5%;height:93.5%;top:3.25%;left:3.25%}}",""]),t.exports=o},277:function(t,e,n){"use strict";n.r(e);e.default={state:function(){return{is_menu:!1,app_loaded:!1,is_loading:!1,blog_depth:[]}},mutations:{toggle_menu:function(t){t.is_menu=!t.is_menu},close_menu:function(t){t.is_menu=!1},app_loaded:function(t){t.app_loaded=!0},set_loading:function(t,e){t.is_loading=e},set_blog_depth:function(t,e){t.blog_depth=e}}}},495:function(t,e,n){"use strict";n.r(e);n(26),n(20),n(25),n(9),n(35),n(18),n(36);var o=n(11),r=n(23);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({is_menu:function(t){return t.is_menu}})),methods:{toggle_menu:function(){this.$store.commit("toggle_menu")}}},c=d,f=(n(267),n(17)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aside-wrap",class:{open:t.is_menu}},[n("h1",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("SIMPLIZM")])],1),t._v(" "),n("button",{staticClass:"btn_menu",attrs:{type:"button"},on:{click:t.toggle_menu}},[n("span",[t._v("메뉴열기")])]),t._v(" "),n("aside-list")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideList:n(496).default})},496:function(t,e,n){"use strict";n.r(e);n(26),n(20),n(25),n(35),n(18),n(36);var o=n(7),r=n(11),l=(n(43),n(46),n(24),n(100),n(143),n(9),n(21),n(269),n(23));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({is_menu:function(t){return t.is_menu},params:function(t){return t.params},id:function(t){return t.id}})),fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],o=[],e.next=4,t.$content({deep:!0}).only(["path"]).fetch();case 4:e.sent.map((function(article){var t=article.path.split("/");t.shift(),t.pop();for(var e=t.length,path="",r=function(i){var e=i>0?o.find((function(e){return e.name===t[i-1]})).child:n;path+=i>0?"_"+t[i]:t[i],o.find((function(e){return e.name===t[i]}))||(o.push({name:t[i],path:path,depth:i,child:[]}),e.push(o[o.length-1]),e.sort((function(a,b){return a.name>b.name?1:-1})))},i=0;i<e;i++)r(i)})),t.category_list=n;case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{category_list:[]}},methods:{toggle_menu:function(){this.$store.commit("toggle_menu")}}},f=c,h=(n(273),n(17)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"aside-list"},[n("aside-item",{staticClass:"depth-0",attrs:{categories:t.category_list}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AsideItem:n(201).default})},497:function(t,e,n){"use strict";n.r(e);n(275);var o=n(17),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader-outer"},[n("div",{staticClass:"loader10"},[n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"}),t._v(" "),n("div",{staticClass:"spinner3"},[n("div",{staticClass:"container-B"},[n("div",{staticClass:"hex0"}),t._v(" "),n("div",{staticClass:"hex120"}),t._v(" "),n("div",{staticClass:"hex240"})])])])])])])])])])])])])}],!1,null,"1356d061",null);e.default=component.exports}},[[214,10,1,11]]]);