webpackJsonp([1],{102:function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".CustomButton:focus{outline:0}.CustomButton--ghost:hover{color:var(--color-primary);background-color:var(--color-black)}.CustomButton--ghost:active{color:var(--color-white)}",""])},106:function(e,t,i){i(123);var f=i(3)(i(82),i(111),null,null);e.exports=f.exports},108:function(e,t,i){i(130);var f=i(3)(i(84),i(118),null,null);e.exports=f.exports},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("grid-container",[i("grid-column",{staticClass:"background-image cover Banner-image",style:{"background-image":"url("+e.imageSrc+")"},attrs:{xs:"12",md:"fit"}}),i("grid-column",{staticClass:"bg-primary caps light Banner-text",attrs:{xs:"12",md:"4","move-md":"left"}},[e._t("default")],2)],1)},staticRenderFns:[]}},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("banner",{attrs:{imageSrc:"/images/frontpage-banner.jpg"}},[e._v("\n    Få kompetent og ærlig vejledning af specialister før, under og efter graviditeten."),i("br"),i("custom-button",[e._v("Læs mere")])],1)],1)},staticRenderFns:[]}},118:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"padding-vertical-05 padding-horizontal-2 pointer bold caps CustomButton",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},123:function(e,t,i){var f=i(95);"string"==typeof f&&(f=[[e.i,f,""]]),f.locals&&(e.exports=f.locals);i(1)("15037381",f,!0)},127:function(e,t,i){var f=i(99);"string"==typeof f&&(f=[[e.i,f,""]]),f.locals&&(e.exports=f.locals);i(1)("288afc33",f,!0)},130:function(e,t,i){var f=i(102);"string"==typeof f&&(f=[[e.i,f,""]]),f.locals&&(e.exports=f.locals);i(1)("988f2ec6",f,!0)},63:function(e,t,i){i(127);var f=i(3)(i(89),i(115),null,null);e.exports=f.exports},72:function(e,t,i){"use strict";function f(e){var t=e.min,i=void 0===t?1:t,f=e.max,s=void 0===f?12:f,n=e.exceptions,r=void 0===n?[]:n;return function(e){if(r.some(function(t){return t===e}))return!0;var t=parseInt(e,10);return!isNaN(t)&&e>=i&&e<=s}}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{xs:{type:String,default:"fit",validator:f({min:0,max:12,exceptions:["expand","fit"]})},sm:{type:String,validator:f({min:0,max:12,exceptions:["expand","fit"]})},md:{type:String,validator:f({min:0,max:12,exceptions:["expand","fit"]})},lg:{type:String,validator:f({min:0,max:12,exceptions:["expand","fit"]})},offsetXs:{type:String,validator:f({min:0,max:11})},offsetSm:{type:String,validator:f({min:0,max:11})},offsetMd:{type:String,validator:f({min:0,max:11})},offsetLg:{type:String,validator:f({min:0,max:11})},moveXs:{type:String,validator:function(e){return["left","right","none"].some(function(t){return t===e})}},moveSm:{type:String,validator:function(e){return["left","right","none"].some(function(t){return t===e})}},moveMd:{type:String,validator:function(e){return["left","right","none"].some(function(t){return t===e})}},moveLg:{type:String,validator:function(e){return["left","right","none"].some(function(t){return t===e})}},align:{type:String,validator:function(e){return["top","middle","bottom"].some(function(t){return t===e})}}},computed:{classes:function(){var e="";return e+=" width-"+this.xs+"-xs",e+=this.sm?" width-"+this.sm+"-sm":"",e+=this.md?" width-"+this.md+"-md":"",e+=this.lg?" width-"+this.lg+"-lg":"",e+=this.align?" col-"+this.align:"",e+=this.moveXs?" "+this.moveXs+"-xs":"",e+=this.moveSm?" "+this.moveSm+"-sm":"",e+=this.moveMd?" "+this.moveMd+"-md":"",e+=this.moveLg?" "+this.moveLg+"-lg":""}}}},73:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{align:{type:String,validator:function(e){return["top","middle","bottom"].some(function(t){return t===e})}}},computed:{classes:function(){var e="";return e+=this.align?" flex-"+this.align:""}}}},74:function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".width-fit-xs{-ms-flex:1 0 auto;flex:1 0 auto}.width-expand-xs{-ms-flex:0 0 auto;flex:0 0 auto}.width-1-xs{-ms-flex:0 0 8.33%;flex:0 0 8.33%}.width-2-xs{-ms-flex:0 0 16.67%;flex:0 0 16.67%}.width-3-xs{-ms-flex:0 0 25%;flex:0 0 25%}.width-4-xs{-ms-flex:0 0 33.33%;flex:0 0 33.33%}.width-5-xs{-ms-flex:0 0 41.67%;flex:0 0 41.67%}.width-6-xs{-ms-flex:0 0 50%;flex:0 0 50%}.width-7-xs{-ms-flex:0 0 58.33%;flex:0 0 58.33%}.width-8-xs{-ms-flex:0 0 66.67%;flex:0 0 66.67%}.width-9-xs{-ms-flex:0 0 75%;flex:0 0 75%}.width-10-xs{-ms-flex:0 0 83.33%;flex:0 0 83.33%}.width-11-xs{-ms-flex:0 0 91.67%;flex:0 0 91.67%}.width-12-xs{-ms-flex:0 0 100%;flex:0 0 100%}.offset-0-xs{margin-left:0}.offset-1-xs{margin-left:8.33%}.offset-2-xs{margin-left:16.67%}.offset-3-xs{margin-left:25%}.offset-4-xs{margin-left:33.33%}.offset-5-xs{margin-left:41.67%}.offset-6-xs{margin-left:50%}.offset-7-xs{margin-left:58.33%}.offset-8-xs{margin-left:66.67%}.offset-9-xs{margin-left:75%}.offset-10-xs{margin-left:83.33%}.offset-11-xs{margin-left:91.67%}.left-xs{-ms-flex-order:-1;order:-1}.right-xs{-ms-flex-order:1;order:1}.none-xs{-ms-flex-order:0;order:0}@media (min-width:768px){.width-fit-sm{-ms-flex:1 0 auto;flex:1 0 auto}.width-expand-sm{-ms-flex:0 0 auto;flex:0 0 auto}.width-1-sm{-ms-flex:0 0 8.33%;flex:0 0 8.33%}.width-2-sm{-ms-flex:0 0 16.67%;flex:0 0 16.67%}.width-3-sm{-ms-flex:0 0 25%;flex:0 0 25%}.width-4-sm{-ms-flex:0 0 33.33%;flex:0 0 33.33%}.width-5-sm{-ms-flex:0 0 41.67%;flex:0 0 41.67%}.width-6-sm{-ms-flex:0 0 50%;flex:0 0 50%}.width-7-sm{-ms-flex:0 0 58.33%;flex:0 0 58.33%}.width-8-sm{-ms-flex:0 0 66.67%;flex:0 0 66.67%}.width-9-sm{-ms-flex:0 0 75%;flex:0 0 75%}.width-10-sm{-ms-flex:0 0 83.33%;flex:0 0 83.33%}.width-11-sm{-ms-flex:0 0 91.67%;flex:0 0 91.67%}.width-12-sm{-ms-flex:0 0 100%;flex:0 0 100%}.offset-0-sm{margin-left:0}.offset-1-sm{margin-left:8.33%}.offset-2-sm{margin-left:16.67%}.offset-3-sm{margin-left:25%}.offset-4-sm{margin-left:33.33%}.offset-5-sm{margin-left:41.67%}.offset-6-sm{margin-left:50%}.offset-7-sm{margin-left:58.33%}.offset-8-sm{margin-left:66.67%}.offset-9-sm{margin-left:75%}.offset-10-sm{margin-left:83.33%}.offset-11-sm{margin-left:91.67%}.left-sm{-ms-flex-order:-1;order:-1}.right-sm{-ms-flex-order:1;order:1}.none-sm{-ms-flex-order:0;order:0}}@media (min-width:992px){.width-fit-md{-ms-flex:1 0 auto;flex:1 0 auto}.width-expand-md{-ms-flex:0 0 auto;flex:0 0 auto}.width-1-md{-ms-flex:0 0 8.33%;flex:0 0 8.33%}.width-2-md{-ms-flex:0 0 16.67%;flex:0 0 16.67%}.width-3-md{-ms-flex:0 0 25%;flex:0 0 25%}.width-4-md{-ms-flex:0 0 33.33%;flex:0 0 33.33%}.width-5-md{-ms-flex:0 0 41.67%;flex:0 0 41.67%}.width-6-md{-ms-flex:0 0 50%;flex:0 0 50%}.width-7-md{-ms-flex:0 0 58.33%;flex:0 0 58.33%}.width-8-md{-ms-flex:0 0 66.67%;flex:0 0 66.67%}.width-9-md{-ms-flex:0 0 75%;flex:0 0 75%}.width-10-md{-ms-flex:0 0 83.33%;flex:0 0 83.33%}.width-11-md{-ms-flex:0 0 91.67%;flex:0 0 91.67%}.width-12-md{-ms-flex:0 0 100%;flex:0 0 100%}.offset-0-md{margin-left:0}.offset-1-md{margin-left:8.33%}.offset-2-md{margin-left:16.67%}.offset-3-md{margin-left:25%}.offset-4-md{margin-left:33.33%}.offset-5-md{margin-left:41.67%}.offset-6-md{margin-left:50%}.offset-7-md{margin-left:58.33%}.offset-8-md{margin-left:66.67%}.offset-9-md{margin-left:75%}.offset-10-md{margin-left:83.33%}.offset-11-md{margin-left:91.67%}.left-md{-ms-flex-order:-1;order:-1}.right-md{-ms-flex-order:1;order:1}.none-md{-ms-flex-order:0;order:0}}@media (min-width:1200px){.width-fit-lg{-ms-flex:1 0 auto;flex:1 0 auto}.width-expand-lg{-ms-flex:0 0 auto;flex:0 0 auto}.width-1-lg{-ms-flex:0 0 8.33%;flex:0 0 8.33%}.width-2-lg{-ms-flex:0 0 16.67%;flex:0 0 16.67%}.width-3-lg{-ms-flex:0 0 25%;flex:0 0 25%}.width-4-lg{-ms-flex:0 0 33.33%;flex:0 0 33.33%}.width-5-lg{-ms-flex:0 0 41.67%;flex:0 0 41.67%}.width-6-lg{-ms-flex:0 0 50%;flex:0 0 50%}.width-7-lg{-ms-flex:0 0 58.33%;flex:0 0 58.33%}.width-8-lg{-ms-flex:0 0 66.67%;flex:0 0 66.67%}.width-9-lg{-ms-flex:0 0 75%;flex:0 0 75%}.width-10-lg{-ms-flex:0 0 83.33%;flex:0 0 83.33%}.width-11-lg{-ms-flex:0 0 91.67%;flex:0 0 91.67%}.width-12-lg{-ms-flex:0 0 100%;flex:0 0 100%}.offset-0-lg{margin-left:0}.offset-1-lg{margin-left:8.33%}.offset-2-lg{margin-left:16.67%}.offset-3-lg{margin-left:25%}.offset-4-lg{margin-left:33.33%}.offset-5-lg{margin-left:41.67%}.offset-6-lg{margin-left:50%}.offset-7-lg{margin-left:58.33%}.offset-8-lg{margin-left:66.67%}.offset-9-lg{margin-left:75%}.offset-10-lg{margin-left:83.33%}.offset-11-lg{margin-left:91.67%}.left-lg{-ms-flex-order:-1;order:-1}.right-lg{-ms-flex-order:1;order:1}.none-lg{-ms-flex-order:0;order:0}}",""])},75:function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".Grid-container{padding-left:1rem;padding-right:1rem;max-width:1600px}@media (min-width:768px){.Grid-container{padding-left:2rem;padding-right:2rem}}@media (min-width:992px){.Grid-container{padding-left:3rem;padding-right:3rem}}@media (min-width:1200px){.Grid-container{padding-left:4rem;padding-right:4rem}}",""])},76:function(e,t,i){i(80);var f=i(3)(i(72),i(78),null,null);e.exports=f.exports},77:function(e,t,i){i(81);var f=i(3)(i(73),i(79),null,null);e.exports=f.exports},78:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"padding-horizontal-05",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},79:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"flex wrap width-100 middle Grid-container",class:e.classes},[e._t("default")],2)},staticRenderFns:[]}},80:function(e,t,i){var f=i(74);"string"==typeof f&&(f=[[e.i,f,""]]),f.locals&&(e.exports=f.locals);i(1)("a10e9036",f,!0)},81:function(e,t,i){var f=i(75);"string"==typeof f&&(f=[[e.i,f,""]]),f.locals&&(e.exports=f.locals);i(1)("242f273e",f,!0)},82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=i(77),s=i.n(f),n=i(76),r=i.n(n);t.default={components:{GridContainer:s.a,GridColumn:r.a},props:{imageSrc:{type:String}}}},84:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{type:{type:String,default:"ghost",validator:function(e){return["ghost","primary","black"].some(function(t){return t===e})}}},computed:{classes:function(){var e="";return e+="ghost"===this.type?" border border-black bg-transparent CustomButton--ghost":""}}}},89:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=i(106),s=i.n(f),n=i(108),r=i.n(n);t.default={components:{Banner:s.a,CustomButton:r.a}}},95:function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".Banner-image{padding-top:50%}.Banner-text{font-size:1.5rem;padding:1rem 2rem}@media (min-width:768px){.Banner-text{font-size:1.5rem;padding:2rem}}@media (min-width:992px){.Banner-text{font-size:2rem;padding:5rem 2rem}.Banner-image{padding-top:0}}@media (min-width:1200px){.Banner-text{padding:6rem 3rem}}",""])},99:function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,"",""])}});