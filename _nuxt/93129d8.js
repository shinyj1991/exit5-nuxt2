(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{475:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("2b1f7ed1",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";n(475)},477:function(t,e,n){var r=n(37)(!1);r.push([t.i,".article_list{padding:50px 50px 100px;max-width:1000px}.article_list ul li{border-left:3px solid #2c343e}.article_list ul li:not(:first-child){margin-top:24px}.article_list ul li a{padding:12px 24px;display:block}.article_list ul li a:hover{background:#2c343e}.article_list ul li a .category{margin-bottom:5px;font-size:12px}.article_list ul li a .subject{font-size:16px}.article_list ul li a .info{display:flex;margin-top:10px;font-size:12px}.article_list ul li a .info .author{margin-left:15px}.article_list .btn_area{margin-top:30px}.article_list .btn_area button{padding:12px 30px;transition:all .3s}.article_list .btn_area button:hover{text-decoration:underline}",""]),t.exports=r},480:function(t,e,n){"use strict";n.r(e);n(476);var r=n(39),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"article_list"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},540:function(t,e,n){"use strict";n.r(e);var r,l=n(63),c=n(7),o=(n(40),n(48),n(66),n(79),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,o,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,l=10,e.next=4,n({deep:!0}).sortBy("date","desc").fetch();case 4:return c=e.sent,o=c.length,d=Math.ceil(o/l),f=c.slice(0,l),e.abrupt("return",{visibleLength:l,lastPage:d,directory:r.directory,articles:f});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{page:1,loading:!1}},watch:{page:(r=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$content({deep:!0}).sortBy("date","desc").limit(this.visibleLength).skip(this.visibleLength*n).fetch();case 3:r=t.sent,setTimeout((function(){c.loading=!1,c.articles=[].concat(Object(l.a)(c.articles),Object(l.a)(r))}),300);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}}}),d=n(39),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ArticleList",[n("ul",t._l(t.articles,(function(article,e){return n("li",{key:e},[n("NuxtLink",{attrs:{to:{path:"/blog"+article.path}}},[n("div",{staticClass:"category"},[t._v(t._s(article.dir.replace("/","")))]),t._v(" "),n("div",{staticClass:"subject"},[t._v(t._s(article.title))]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"date"},[t._v(t._s(article.date))]),t._v(" "),n("div",{staticClass:"author"},[t._v(t._s(article.author))])])])],1)})),0),t._v(" "),t.page<t.lastPage&&!t.loading?n("div",{staticClass:"btn_area"},[n("button",{on:{click:function(e){t.page++}}},[t._v("더보기")])]):t._e(),t._v(" "),t.loading?n("div",{staticClass:"loading"},[t._v("Loading...")]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:n(480).default})}}]);