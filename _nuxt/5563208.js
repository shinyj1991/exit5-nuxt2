(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{541:function(t,o,r){var content=r(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("1ea6848a",content,!0,{sourceMap:!1})},544:function(t,o,r){"use strict";r(541)},545:function(t,o,r){var e=r(38)(!1);e.push([t.i,'.popup-chord[data-v-2fa14fd4]{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.7);color:#000}.popup-chord .inner[data-v-2fa14fd4]{padding:20px;background:#fff}.popup-chord .inner .chord-name[data-v-2fa14fd4]{text-align:center;font-weight:700;font-size:30px;line-height:1;margin-bottom:30px}.popup-chord .inner .chord-score[data-v-2fa14fd4]{position:relative;display:flex;border-left:1px solid #000}.popup-chord .inner .chord-score.start-0[data-v-2fa14fd4]:before{display:block;content:"";position:absolute;top:0;left:-5px;bottom:0;width:5px;border-top:1px solid #000;border-left:3px solid #000;border-bottom:1px solid #000}.popup-chord .inner .chord-score .plat[data-v-2fa14fd4]{position:relative;display:grid;grid-row-gap:20px;row-gap:20px;border-right:1px solid #000}.popup-chord .inner .chord-score .plat .plat-number[data-v-2fa14fd4]{position:absolute;top:-22px;left:-5px}.popup-chord .inner .chord-score .plat .line[data-v-2fa14fd4]{position:relative;width:120px;border-bottom:1px solid #000}@media screen and (max-width:768px){.popup-chord .inner .chord-score .plat .line[data-v-2fa14fd4]{width:80px}}.popup-chord .inner .chord-score .plat .line .circle[data-v-2fa14fd4]{position:absolute;top:-7px;left:calc(50% - 8px);width:16px;height:16px;border-radius:50%;background:#000}',""]),t.exports=e},548:function(t,o,r){"use strict";r.r(o);var e={props:{chord:{type:Object,default:{}},isPopupChord:{type:Boolean,default:!1}}},d=(r(544),r(15)),component=Object(d.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return t.isPopupChord?r("div",{staticClass:"popup-chord",on:{click:function(o){return o.target!==o.currentTarget?null:t.$emit("update:isPopupChord",!1)}}},[r("div",{staticClass:"inner"},[r("h1",{staticClass:"chord-name"},[t._v(t._s(t.chord.name))]),t._v(" "),r("div",{staticClass:"chord-score",class:"start-"+t.chord.start},t._l(t.chord.position,(function(o,e){return r("div",{key:e,staticClass:"plat"},[r("div",{staticClass:"plat-number"},[t._v(t._s(t.chord.start+e))]),t._v(" "),t._l(o,(function(line,o){return r("div",{key:o,staticClass:"line"},[1==line?r("div",{staticClass:"circle"}):t._e()])}))],2)})),0)])]):t._e()}),[],!1,null,"2fa14fd4",null);o.default=component.exports}}]);