(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{291:function(t,e,r){"use strict";var n=r(6),o=r(75).findIndex,c=r(135),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},294:function(t,e,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("a4c1fd6e",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(294)},300:function(t,e,r){var n=r(23)(!1);n.push([t.i,".project-display[data-v-6c181a38]{width:15rem;box-sizing:border-box;height:33.33vh;transition:all .3s ease;scroll-snap-align:start;margin-left:1rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;padding:0;border-radius:1rem}.project-display .img-wrap[data-v-6c181a38]{grid-row:1;grid-column:1;padding:.8rem;width:100%;height:100%}.project-display .img-wrap img[data-v-6c181a38]{border-radius:.8rem;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none}.project-display .link[data-v-6c181a38]{grid-row:1;grid-column:1;height:inherit;width:inherit;border-radius:1rem;border:2px solid transparent;transition:border-color .3s ease;pointer-events:none}.selected[data-v-6c181a38]{background:hsla(0,0%,100%,.06667)}.selected .link[data-v-6c181a38]{pointer-events:all}.selected .link[data-v-6c181a38]:hover{border:2px solid hsla(0,0%,100%,.6);cursor:pointer}.inactive .link[data-v-6c181a38]{cursor:default}@media screen and (max-width:900px){.project-display[data-v-6c181a38]{height:100%;width:100%;margin:0;padding:0}.inactive[data-v-6c181a38]{display:none}}",""]),t.exports=n},303:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("49b67eac",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r.r(e);r(197);var n=r(0).a.extend({data:function(){return{}},props:{active:{type:Boolean,default:!0},selected:{type:Boolean,default:!1},link:{type:String,required:!1},src:{type:String,required:!1},title:{type:String,required:!1},description:{type:String,required:!1},index:{type:Number,required:!0},setDisplayeElement:{type:Function,required:!0}},methods:{},mounted:function(){var element=this.$refs.target;this.active?this.setDisplayeElement(element,this.index):this.setDisplayeElement(void 0,this.index)}}),o=(r(299),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"target",staticClass:"project-display",class:{selected:t.selected,inactive:!t.active,active:t.active},attrs:{href:t.link}},[r("div",{staticClass:"img-wrap"},[t.active?r("img",{staticClass:"noselect",attrs:{draggable:"false",src:t.src}}):t._e()]),t._v(" "),r("a",{staticClass:"link",attrs:{href:t.link}})])}),[],!1,null,"6c181a38",null);e.default=component.exports},313:function(t,e,r){"use strict";var n=r(6),o=r(314);n({target:"String",proto:!0,forced:r(315)("link")},{link:function(t){return o(this,"a","href",t)}})},314:function(t,e,r){var n=r(3),o=r(20),c=r(12),l=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var f=c(o(t)),m="<"+e;return""!==r&&(m+=" "+r+'="'+d(c(n),l,"&quot;")+'"'),m+">"+f+"</"+e+">"}},315:function(t,e,r){var n=r(4);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},316:function(t,e,r){"use strict";r(303)},317:function(t,e,r){var n=r(23)(!1);n.push([t.i,".projects .content-wrap[data-v-31a03628]{display:grid;grid-template-columns:0 20rem auto;grid-template-rows:1fr;height:100vh}.projects .content-wrap .pointer[data-v-31a03628]{grid-row:1;grid-column:1;z-index:1;width:100vw;height:100vh;pointer-events:none}.projects .content-wrap .pointer .line[data-v-31a03628],.projects .content-wrap .pointer .subline[data-v-31a03628]{stroke:hsla(0,0%,100%,.6);stroke-width:2}.projects .content-wrap .pointer .joint[data-v-31a03628],.projects .content-wrap .pointer .point[data-v-31a03628]{stroke:hsla(0,0%,100%,.86667);fill:#fff}.projects .content-wrap .distance-meter[data-v-31a03628]{grid-row:1;grid-column:1/4;align-self:center}.projects .content-wrap .list[data-v-31a03628]{overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;grid-row:1;grid-column:1/4}.projects .content-wrap .list[data-v-31a03628]::-webkit-scrollbar{display:none}.projects .content-wrap .description[data-v-31a03628]{grid-row:1;grid-column:3;display:flex;padding:0 0 0 2rem;align-items:center;pointer-events:none}.projects .content-wrap .description .wrapper[data-v-31a03628]{background:rgba(29,29,39,.73333);display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto auto;pointer-events:all;border:1px solid hsla(0,0%,100%,.06667);border-radius:.5rem;padding:.7rem;max-width:80%}.projects .content-wrap .description .wrapper .link[data-v-31a03628]{grid-row:1;grid-column:2;display:flex;justify-content:center;align-items:center;padding:.2rem}.projects .content-wrap .description .wrapper .link a[data-v-31a03628]{text-decoration:none;padding:.3rem;border:1px solid rgba(30,117,255,.6);border-radius:.5rem;color:rgba(30,117,255,.6);cursor:pointer}.projects .content-wrap .description .wrapper .link a[data-v-31a03628]:hover{background-color:rgba(30,117,255,.06667);text-decoration:underline}.projects .content-wrap .description .wrapper h1[data-v-31a03628]{grid-row:1;grid-column:1;padding:0 .5rem .3rem;margin:0}.projects .content-wrap .description .wrapper span[data-v-31a03628]{grid-row:2;grid-column:1/3;padding:.3rem .5rem 0;margin:0;white-space:pre-wrap}@media screen and (max-width:900px){.projects[data-v-31a03628]{padding-top:5rem}.projects .content-wrap[data-v-31a03628]{border-top:1px solid hsla(0,0%,100%,.6);grid-template-columns:1fr;grid-template-rows:0 25rem auto}.projects .content-wrap .distance-meter[data-v-31a03628]{width:0;height:0;grid-row:2;grid-column:1}.projects .content-wrap .pointer[data-v-31a03628]{display:none}.projects .content-wrap .list[data-v-31a03628]{grid-row:2;grid-column:1;margin-top:1rem;padding:0 3rem}.projects .content-wrap .description[data-v-31a03628]{grid-row:3;grid-column:1;padding:2rem;display:flex;justify-content:center;justify-self:center;align-items:flex-start}.projects .content-wrap .description .wrapper[data-v-31a03628]{width:100%;max-width:100%}.projects .content-wrap .description h1[data-v-31a03628]{font-size:x-large}}",""]),t.exports=n},325:function(t,e,r){"use strict";r.r(e);r(197),r(15),r(36),r(35),r(51),r(313),r(291),r(76),r(49),r(43),r(50),r(37),r(25),r(52),r(38);var n=r(0),o=r(136);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d=n.a.extend({data:function(){return{project_list:o.b,title:"",description:"",link:"",diplayElements:[],position:{x:0,y:0},subline_start:{x:0,y:0},subline_end:{x:0,y:0},scrolling:!1,timeout:null}},methods:{getAttachPoint:function(element){var t=element.clientWidth,e=element.clientHeight;return{x:element.offsetLeft+t/3*2,y:element.offsetTop+e/3*2}},setDisplayElement:function(element,t){this.diplayElements[t]=element},updatePositions:function(){var t=document.getElementById("list"),title=document.getElementById("desc"),e=document.getElementById("distance-meter");this.subline_start={x:title.offsetLeft,y:title.offsetTop},this.subline_end={x:title.offsetLeft+title.clientWidth,y:title.offsetTop};e.offsetLeft;var r,n=e.offsetTop,o=this.position,l=Number.MAX_VALUE,d=0,f=0,m=c(this.diplayElements);try{for(m.s();!(r=m.n()).done;){var element=r.value;if(element){var v=this.getAttachPoint(element);v.y-=t.scrollTop;var h=Math.abs(v.y-n);h<l&&(l=h,o=v,d=f),f++}else f++}}catch(t){m.e(t)}finally{m.f()}this.project_list.forEach((function(t){null!=t.selected&&(t.selected=!1)})),this.project_list[d].selected=!0,this.title=this.project_list[d].title,this.description=this.project_list[d].description,this.link=this.project_list[d].link,this.position=o}},mounted:function(){var t=this;this.$store.commit("CHANGE_ROUTE_INDEX",o.a.findIndex((function(t){return"projects"==t.id}))),this.updatePositions(),document.getElementsByTagName("body").item(0).onresize=function(){t.updatePositions()},setTimeout((function(){t.updatePositions()}),30),this.$nextTick((function(){t.updatePositions()}))}}),f=(r(316),r(14)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects"},[r("div",{staticClass:"content-wrap"},[r("svg",{staticClass:"pointer",attrs:{height:"210",width:"500"}},[r("line",{staticClass:"line",attrs:{x1:t.position.x,y1:t.position.y,x2:t.subline_start.x,y2:t.subline_start.y}}),t._v(" "),r("circle",{staticClass:"point",attrs:{cx:t.position.x,cy:t.position.y,r:"3"}}),t._v(" "),r("circle",{staticClass:"joint",attrs:{cx:t.subline_start.x,cy:t.subline_start.y,r:"3"}}),t._v(" "),r("line",{staticClass:"subline",attrs:{x1:t.subline_start.x,y1:t.subline_start.y,x2:t.subline_end.x,y2:t.subline_end.y}})]),t._v(" "),r("div",{staticClass:"distance-meter",attrs:{id:"distance-meter"}}),t._v(" "),r("div",{staticClass:"list",attrs:{id:"list"},on:{scroll:t.updatePositions}},t._l(t.project_list,(function(e,n){return r("ProjectDisplay",{key:n,attrs:{src:e.src,title:e.title,description:e.description,link:e.link,setDisplayeElement:t.setDisplayElement,index:n,active:e.active,selected:e.selected}})})),1),t._v(" "),r("div",{staticClass:"description",on:{load:function(){t.console.log("load")}}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"link"},[null!=t.link?r("a",{staticClass:"noselect",attrs:{href:t.link}},[t._v("click for more info!")]):t._e()]),t._v(" "),r("h1",{attrs:{id:"title"}},[t._v(t._s(t.title))]),t._v(" "),r("span",{attrs:{id:"desc"}},[t._v(t._s(t.description))])])])])])}),[],!1,null,"31a03628",null);e.default=component.exports;installComponents(component,{ProjectDisplay:r(308).default})}}]);