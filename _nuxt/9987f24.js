(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(e,t,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("a4c1fd6e",content,!0,{sourceMap:!1})},299:function(e,t,r){"use strict";r(294)},300:function(e,t,r){var n=r(23)(!1);n.push([e.i,".project-display[data-v-6c181a38]{width:15rem;box-sizing:border-box;height:33.33vh;transition:all .3s ease;scroll-snap-align:start;margin-left:1rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;padding:0;border-radius:1rem}.project-display .img-wrap[data-v-6c181a38]{grid-row:1;grid-column:1;padding:.8rem;width:100%;height:100%}.project-display .img-wrap img[data-v-6c181a38]{border-radius:.8rem;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none}.project-display .link[data-v-6c181a38]{grid-row:1;grid-column:1;height:inherit;width:inherit;border-radius:1rem;border:2px solid transparent;transition:border-color .3s ease;pointer-events:none}.selected[data-v-6c181a38]{background:hsla(0,0%,100%,.06667)}.selected .link[data-v-6c181a38]{pointer-events:all}.selected .link[data-v-6c181a38]:hover{border:2px solid hsla(0,0%,100%,.6);cursor:pointer}.inactive .link[data-v-6c181a38]{cursor:default}@media screen and (max-width:900px){.project-display[data-v-6c181a38]{height:100%;width:100%;margin:0;padding:0}.inactive[data-v-6c181a38]{display:none}}",""]),e.exports=n},308:function(e,t,r){"use strict";r.r(t);r(197);var n=r(0).a.extend({data:function(){return{}},props:{active:{type:Boolean,default:!0},selected:{type:Boolean,default:!1},link:{type:String,required:!1},src:{type:String,required:!1},title:{type:String,required:!1},description:{type:String,required:!1},index:{type:Number,required:!0},setDisplayeElement:{type:Function,required:!0}},methods:{},mounted:function(){var element=this.$refs.target;this.active?this.setDisplayeElement(element,this.index):this.setDisplayeElement(void 0,this.index)}}),d=(r(299),r(14)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"target",staticClass:"project-display",class:{selected:e.selected,inactive:!e.active,active:e.active},attrs:{href:e.link}},[r("div",{staticClass:"img-wrap"},[e.active?r("img",{staticClass:"noselect",attrs:{draggable:"false",src:e.src}}):e._e()]),e._v(" "),r("a",{staticClass:"link",attrs:{href:e.link}})])}),[],!1,null,"6c181a38",null);t.default=component.exports}}]);