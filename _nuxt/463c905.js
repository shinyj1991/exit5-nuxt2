(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{541:function(t,o,r){var content=r(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("1ea6848a",content,!0,{sourceMap:!1})},543:function(t,o,r){var content=r(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("617c132c",content,!0,{sourceMap:!1})},544:function(t,o,r){"use strict";r(541)},545:function(t,o,r){var e=r(38)(!1);e.push([t.i,'.popup-chord[data-v-2fa14fd4]{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.7);color:#000}.popup-chord .inner[data-v-2fa14fd4]{padding:20px;background:#fff}.popup-chord .inner .chord-name[data-v-2fa14fd4]{text-align:center;font-weight:700;font-size:30px;line-height:1;margin-bottom:30px}.popup-chord .inner .chord-score[data-v-2fa14fd4]{position:relative;display:flex;border-left:1px solid #000}.popup-chord .inner .chord-score.start-0[data-v-2fa14fd4]:before{display:block;content:"";position:absolute;top:0;left:-5px;bottom:0;width:5px;border-top:1px solid #000;border-left:3px solid #000;border-bottom:1px solid #000}.popup-chord .inner .chord-score .plat[data-v-2fa14fd4]{position:relative;display:grid;grid-row-gap:20px;row-gap:20px;border-right:1px solid #000}.popup-chord .inner .chord-score .plat .plat-number[data-v-2fa14fd4]{position:absolute;top:-22px;left:-5px}.popup-chord .inner .chord-score .plat .line[data-v-2fa14fd4]{position:relative;width:120px;border-bottom:1px solid #000}@media screen and (max-width:768px){.popup-chord .inner .chord-score .plat .line[data-v-2fa14fd4]{width:80px}}.popup-chord .inner .chord-score .plat .line .circle[data-v-2fa14fd4]{position:absolute;top:-7px;left:calc(50% - 8px);width:16px;height:16px;border-radius:50%;background:#000}',""]),t.exports=e},548:function(t,o,r){"use strict";r.r(o);var e={props:{chord:{type:Object,default:{}},isPopupChord:{type:Boolean,default:!1}}},c=(r(544),r(15)),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return t.isPopupChord?r("div",{staticClass:"popup-chord",on:{click:function(o){return o.target!==o.currentTarget?null:t.$emit("update:isPopupChord",!1)}}},[r("div",{staticClass:"inner"},[r("h1",{staticClass:"chord-name"},[t._v(t._s(t.chord.name))]),t._v(" "),r("div",{staticClass:"chord-score",class:"start-"+t.chord.start},t._l(t.chord.position,(function(o,e){return r("div",{key:e,staticClass:"plat"},[r("div",{staticClass:"plat-number"},[t._v(t._s(t.chord.start+e))]),t._v(" "),t._l(o,(function(line,o){return r("div",{key:o,staticClass:"line"},[1==line?r("div",{staticClass:"circle"}):t._e()])}))],2)})),0)])]):t._e()}),[],!1,null,"2fa14fd4",null);o.default=component.exports},551:function(t,o,r){"use strict";r(543)},552:function(t,o,r){var e=r(38)(!1);e.push([t.i,".score-chord[data-v-310f9204]{display:grid;grid-row-gap:30px;row-gap:30px;font-size:16px}.score-chord .section[data-v-310f9204]{display:grid;grid-row-gap:5px;row-gap:5px}.score-chord .section .chord[data-v-310f9204]{display:flex}.score-chord .section .chord .chord-item[data-v-310f9204]{flex-grow:var(--grow);flex-basis:100%;text-align:left;padding:0 5px}.score-chord .section .chord .chord-item[data-v-310f9204]:hover{background:#f7f7f7}.score-chord .section .lyrics[data-v-310f9204]{white-space:nowrap}@media screen and (max-width:768px){.score-chord[data-v-310f9204]{font-size:14px}}@media screen and (max-width:480px){.score-chord[data-v-310f9204]{font-size:12px}}",""]),t.exports=e},561:function(t,o,r){"use strict";r.r(o);var e=r(4),c=(r(34),{data:function(){return{chord:null,isPopupChord:!1}},props:{music:{type:Object,default:{}}},methods:{openPopupChord:function(t){var o=this;return Object(e.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.$content("chord/".concat(t)).fetch();case 2:e=r.sent,o.chord=e,o.isPopupChord=!0;case 5:case"end":return r.stop()}}),r)})))()}},created:function(){this.$store.commit("set_loading",!1)}}),d=(r(551),r(15)),component=Object(d.a)(c,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"score-chord",style:"grid-template-columns: repeat("+t.music.measure+", 1fr);"},[t._l(t.music.score,(function(section,o){return r("div",{key:o,staticClass:"section"},[r("div",{staticClass:"chord"},t._l(section.chord,(function(o,e){return r("button",{key:e,staticClass:"chord-item",style:"--grow: "+(o.grow?o.grow:1),attrs:{type:"button"},on:{click:function(r){return t.openPopupChord(o.name)}}},[t._v(t._s(o.name))])})),0),t._v(" "),r("div",{staticClass:"lyrics"},[t._v(t._s(section.lyrics))])])})),t._v(" "),r("popup-chord",{attrs:{isPopupChord:t.isPopupChord,chord:t.chord},on:{"update:isPopupChord":function(o){t.isPopupChord=o},"update:is-popup-chord":function(o){t.isPopupChord=o}}})],2)}),[],!1,null,"310f9204",null);o.default=component.exports;installComponents(component,{PopupChord:r(548).default})}}]);