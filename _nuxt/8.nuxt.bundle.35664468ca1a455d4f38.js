webpackJsonp([8],{151:function(i,A,e){function o(i){e(408)}var t=e(17)(e(369),e(395),o,null,null);i.exports=t.exports},161:function(i,A,e){function o(i){e(209)}var t=e(17)(e(203),e(207),o,null,null);i.exports=t.exports},162:function(i,A,e){function o(i){e(210)}var t=e(17)(e(204),e(208),o,null,null);i.exports=t.exports},203:function(i,A,e){"use strict";function o(i){var A=i.min,e=void 0===A?1:A,o=i.max,t=void 0===o?12:o,l=i.exceptions,m=void 0===l?[]:l;return function(i){if(m.some(function(A){return A===i}))return!0;var A=parseInt(i,10);return!isNaN(A)&&i>=e&&i<=t}}Object.defineProperty(A,"__esModule",{value:!0}),A.default={props:{xs:{type:String,default:"fit",validator:o({min:0,max:12,exceptions:["expand","fit"]})},sm:{type:String,validator:o({min:0,max:12,exceptions:["expand","fit"]})},md:{type:String,validator:o({min:0,max:12,exceptions:["expand","fit"]})},lg:{type:String,validator:o({min:0,max:12,exceptions:["expand","fit"]})},offsetXs:{type:String,validator:o({min:0,max:11})},offsetSm:{type:String,validator:o({min:0,max:11})},offsetMd:{type:String,validator:o({min:0,max:11})},offsetLg:{type:String,validator:o({min:0,max:11})},moveXs:{type:String,validator:function(i){return["left","right","none"].some(function(A){return A===i})}},moveSm:{type:String,validator:function(i){return["left","right","none"].some(function(A){return A===i})}},moveMd:{type:String,validator:function(i){return["left","right","none"].some(function(A){return A===i})}},moveLg:{type:String,validator:function(i){return["left","right","none"].some(function(A){return A===i})}},align:{type:String,validator:function(i){return["top","middle","bottom"].some(function(A){return A===i})}}},computed:{classes:function(){var i="";return i+=" GridColumn--width-"+this.xs+"-xs",i+=this.sm?" GridColumn--width-"+this.sm+"-sm":"",i+=this.md?" GridColumn--width-"+this.md+"-md":"",i+=this.lg?" GridColumn--width-"+this.lg+"-lg":"",i+=this.align?" GridColumn--col-"+this.align:"",i+=this.offsetXs?" GridColumn--offset-"+this.offsetXs+"-xs":"",i+=this.offsetSm?" GridColumn--offset-"+this.offsetSm+"-sm":"",i+=this.offsetMd?" GridColumn--offset-"+this.offsetMd+"-md":"",i+=this.offsetLg?" GridColumn--offset-"+this.offsetLg+"-lg":"",i+=this.moveXs?" GridColumn--"+this.moveXs+"-xs":"",i+=this.moveSm?" GridColumn--"+this.moveSm+"-sm":"",i+=this.moveMd?" GridColumn--"+this.moveMd+"-md":"",i+=this.moveLg?" GridColumn--"+this.moveLg+"-lg":""}}}},204:function(i,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.default={props:{align:{type:String,validator:function(i){return["top","middle","bottom"].some(function(A){return A===i})}}},computed:{classes:function(){var i="";return i+=this.align?" Grid-container--"+this.align:""}}}},205:function(i,A,e){A=i.exports=e(26)(!0),A.push([i.i,".GridColumn{padding-left:.5rem;padding-right:.5rem}.GridColumn--width-fit-xs{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}.GridColumn--width-expand-xs{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.GridColumn--width-0-xs{display:none}.GridColumn--width-1-xs{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%}.GridColumn--width-2-xs{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%}.GridColumn--width-3-xs{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.GridColumn--width-4-xs{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%}.GridColumn--width-5-xs{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%}.GridColumn--width-6-xs{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.GridColumn--width-7-xs{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%}.GridColumn--width-8-xs{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%}.GridColumn--width-9-xs{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.GridColumn--width-10-xs{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%}.GridColumn--width-11-xs{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%}.GridColumn--width-12-xs{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.GridColumn--offset-0-xs{margin-left:0}.GridColumn--offset-1-xs{margin-left:8.3333%}.GridColumn--offset-2-xs{margin-left:16.6666%}.GridColumn--offset-3-xs{margin-left:25%}.GridColumn--offset-4-xs{margin-left:33.3333%}.GridColumn--offset-5-xs{margin-left:41.6666%}.GridColumn--offset-6-xs{margin-left:50%}.GridColumn--offset-7-xs{margin-left:58.3333%}.GridColumn--offset-8-xs{margin-left:66.6666%}.GridColumn--offset-9-xs{margin-left:75%}.GridColumn--offset-10-xs{margin-left:83.3333%}.GridColumn--offset-11-xs{margin-left:91.6666%}.GridColumn--left-xs{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-xs{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-xs{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}@media (min-width:768px){.GridColumn--width-fit-sm{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:block}.GridColumn--width-expand-sm{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:block}.GridColumn--width-0-sm{display:none}.GridColumn--width-1-sm{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%;display:block}.GridColumn--width-2-sm{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%;display:block}.GridColumn--width-3-sm{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;display:block}.GridColumn--width-4-sm{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%;display:block}.GridColumn--width-5-sm{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%;display:block}.GridColumn--width-6-sm{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;display:block}.GridColumn--width-7-sm{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%;display:block}.GridColumn--width-8-sm{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%;display:block}.GridColumn--width-9-sm{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;display:block}.GridColumn--width-10-sm{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%;display:block}.GridColumn--width-11-sm{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%;display:block}.GridColumn--width-12-sm{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;display:block}.GridColumn--offset-0-sm{margin-left:0}.GridColumn--offset-1-sm{margin-left:8.3333%}.GridColumn--offset-2-sm{margin-left:16.6666%}.GridColumn--offset-3-sm{margin-left:25%}.GridColumn--offset-4-sm{margin-left:33.3333%}.GridColumn--offset-5-sm{margin-left:41.6666%}.GridColumn--offset-6-sm{margin-left:50%}.GridColumn--offset-7-sm{margin-left:58.3333%}.GridColumn--offset-8-sm{margin-left:66.6666%}.GridColumn--offset-9-sm{margin-left:75%}.GridColumn--offset-10-sm{margin-left:83.3333%}.GridColumn--offset-11-sm{margin-left:91.6666%}.GridColumn--left-sm{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-sm{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-sm{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}}@media (min-width:992px){.GridColumn--width-fit-md{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:block}.GridColumn--width-expand-md{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;max-width:auto;display:block}.GridColumn--width-0-md{display:none;display:block}.GridColumn--width-1-md{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%;display:block}.GridColumn--width-2-md{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%;display:block}.GridColumn--width-3-md{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;display:block}.GridColumn--width-4-md{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%;display:block}.GridColumn--width-5-md{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%;display:block}.GridColumn--width-6-md{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;display:block}.GridColumn--width-7-md{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%;display:block}.GridColumn--width-8-md{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%;display:block}.GridColumn--width-9-md{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;display:block}.GridColumn--width-10-md{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%;display:block}.GridColumn--width-11-md{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%;display:block}.GridColumn--width-12-md{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;display:block}.GridColumn--offset-0-md{margin-left:0}.GridColumn--offset-1-md{margin-left:8.3333%}.GridColumn--offset-2-md{margin-left:16.6666%}.GridColumn--offset-3-md{margin-left:25%}.GridColumn--offset-4-md{margin-left:33.3333%}.GridColumn--offset-5-md{margin-left:41.6666%}.GridColumn--offset-6-md{margin-left:50%}.GridColumn--offset-7-md{margin-left:58.3333%}.GridColumn--offset-8-md{margin-left:66.6666%}.GridColumn--offset-9-md{margin-left:75%}.GridColumn--offset-10-md{margin-left:83.3333%}.GridColumn--offset-11-md{margin-left:91.6666%}.GridColumn--left-md{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-md{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-md{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}}@media (min-width:1200px){.GridColumn--width-fit-lg{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:block}.GridColumn--width-expand-lg{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;max-width:auto;display:block}.GridColumn--width-0-lg{display:none}.GridColumn--width-1-lg{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%;display:block}.GridColumn--width-2-lg{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%;display:block}.GridColumn--width-3-lg{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;display:block}.GridColumn--width-4-lg{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%;display:block}.GridColumn--width-5-lg{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%;display:block}.GridColumn--width-6-lg{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;display:block}.GridColumn--width-7-lg{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%;display:block}.GridColumn--width-8-lg{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%;display:block}.GridColumn--width-9-lg{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;display:block}.GridColumn--width-10-lg{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%;display:block}.GridColumn--width-11-lg{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%;display:block}.GridColumn--width-12-lg{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;display:block}.GridColumn--offset-0-lg{margin-left:0}.GridColumn--offset-1-lg{margin-left:8.3333%}.GridColumn--offset-2-lg{margin-left:16.6666%}.GridColumn--offset-3-lg{margin-left:25%}.GridColumn--offset-4-lg{margin-left:33.3333%}.GridColumn--offset-5-lg{margin-left:41.6666%}.GridColumn--offset-6-lg{margin-left:50%}.GridColumn--offset-7-lg{margin-left:58.3333%}.GridColumn--offset-8-lg{margin-left:66.6666%}.GridColumn--offset-9-lg{margin-left:75%}.GridColumn--offset-10-lg{margin-left:83.3333%}.GridColumn--offset-11-lg{margin-left:91.6666%}.GridColumn--left-lg{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-lg{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-lg{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}}","",{version:3,sources:["/home/runner/babylogen.dk/www/elements/GridColumn.vue"],names:[],mappings:"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",file:"GridColumn.vue",sourcesContent:[".GridColumn{padding-left:.5rem;padding-right:.5rem}.GridColumn--width-fit-xs{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}.GridColumn--width-expand-xs{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.GridColumn--width-0-xs{display:none}.GridColumn--width-1-xs{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%}.GridColumn--width-2-xs{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%}.GridColumn--width-3-xs{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.GridColumn--width-4-xs{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%}.GridColumn--width-5-xs{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%}.GridColumn--width-6-xs{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.GridColumn--width-7-xs{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%}.GridColumn--width-8-xs{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%}.GridColumn--width-9-xs{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.GridColumn--width-10-xs{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%}.GridColumn--width-11-xs{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%}.GridColumn--width-12-xs{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.GridColumn--offset-0-xs{margin-left:0}.GridColumn--offset-1-xs{margin-left:8.3333%}.GridColumn--offset-2-xs{margin-left:16.6666%}.GridColumn--offset-3-xs{margin-left:25%}.GridColumn--offset-4-xs{margin-left:33.3333%}.GridColumn--offset-5-xs{margin-left:41.6666%}.GridColumn--offset-6-xs{margin-left:50%}.GridColumn--offset-7-xs{margin-left:58.3333%}.GridColumn--offset-8-xs{margin-left:66.6666%}.GridColumn--offset-9-xs{margin-left:75%}.GridColumn--offset-10-xs{margin-left:83.3333%}.GridColumn--offset-11-xs{margin-left:91.6666%}.GridColumn--left-xs{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-xs{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-xs{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}@media (min-width:768px){.GridColumn--width-fit-sm{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:block}.GridColumn--width-expand-sm{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:block}.GridColumn--width-0-sm{display:none}.GridColumn--width-1-sm{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%;display:block}.GridColumn--width-2-sm{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%;display:block}.GridColumn--width-3-sm{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;display:block}.GridColumn--width-4-sm{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%;display:block}.GridColumn--width-5-sm{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%;display:block}.GridColumn--width-6-sm{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;display:block}.GridColumn--width-7-sm{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%;display:block}.GridColumn--width-8-sm{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%;display:block}.GridColumn--width-9-sm{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;display:block}.GridColumn--width-10-sm{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%;display:block}.GridColumn--width-11-sm{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%;display:block}.GridColumn--width-12-sm{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;display:block}.GridColumn--offset-0-sm{margin-left:0}.GridColumn--offset-1-sm{margin-left:8.3333%}.GridColumn--offset-2-sm{margin-left:16.6666%}.GridColumn--offset-3-sm{margin-left:25%}.GridColumn--offset-4-sm{margin-left:33.3333%}.GridColumn--offset-5-sm{margin-left:41.6666%}.GridColumn--offset-6-sm{margin-left:50%}.GridColumn--offset-7-sm{margin-left:58.3333%}.GridColumn--offset-8-sm{margin-left:66.6666%}.GridColumn--offset-9-sm{margin-left:75%}.GridColumn--offset-10-sm{margin-left:83.3333%}.GridColumn--offset-11-sm{margin-left:91.6666%}.GridColumn--left-sm{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-sm{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-sm{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}}@media (min-width:992px){.GridColumn--width-fit-md{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:block}.GridColumn--width-expand-md{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;max-width:auto;display:block}.GridColumn--width-0-md{display:none;display:block}.GridColumn--width-1-md{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%;display:block}.GridColumn--width-2-md{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%;display:block}.GridColumn--width-3-md{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;display:block}.GridColumn--width-4-md{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%;display:block}.GridColumn--width-5-md{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%;display:block}.GridColumn--width-6-md{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;display:block}.GridColumn--width-7-md{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%;display:block}.GridColumn--width-8-md{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%;display:block}.GridColumn--width-9-md{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;display:block}.GridColumn--width-10-md{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%;display:block}.GridColumn--width-11-md{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%;display:block}.GridColumn--width-12-md{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;display:block}.GridColumn--offset-0-md{margin-left:0}.GridColumn--offset-1-md{margin-left:8.3333%}.GridColumn--offset-2-md{margin-left:16.6666%}.GridColumn--offset-3-md{margin-left:25%}.GridColumn--offset-4-md{margin-left:33.3333%}.GridColumn--offset-5-md{margin-left:41.6666%}.GridColumn--offset-6-md{margin-left:50%}.GridColumn--offset-7-md{margin-left:58.3333%}.GridColumn--offset-8-md{margin-left:66.6666%}.GridColumn--offset-9-md{margin-left:75%}.GridColumn--offset-10-md{margin-left:83.3333%}.GridColumn--offset-11-md{margin-left:91.6666%}.GridColumn--left-md{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-md{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-md{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}}@media (min-width:1200px){.GridColumn--width-fit-lg{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:block}.GridColumn--width-expand-lg{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;max-width:auto;display:block}.GridColumn--width-0-lg{display:none}.GridColumn--width-1-lg{-webkit-box-flex:0;-ms-flex:0 0 8.3333%;flex:0 0 8.3333%;max-width:8.3333%;display:block}.GridColumn--width-2-lg{-webkit-box-flex:0;-ms-flex:0 0 16.6666%;flex:0 0 16.6666%;max-width:16.6666%;display:block}.GridColumn--width-3-lg{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;display:block}.GridColumn--width-4-lg{-webkit-box-flex:0;-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;max-width:33.3333%;display:block}.GridColumn--width-5-lg{-webkit-box-flex:0;-ms-flex:0 0 41.6666%;flex:0 0 41.6666%;max-width:41.6666%;display:block}.GridColumn--width-6-lg{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;display:block}.GridColumn--width-7-lg{-webkit-box-flex:0;-ms-flex:0 0 58.3333%;flex:0 0 58.3333%;max-width:58.3333%;display:block}.GridColumn--width-8-lg{-webkit-box-flex:0;-ms-flex:0 0 66.6666%;flex:0 0 66.6666%;max-width:66.6666%;display:block}.GridColumn--width-9-lg{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;display:block}.GridColumn--width-10-lg{-webkit-box-flex:0;-ms-flex:0 0 83.3333%;flex:0 0 83.3333%;max-width:83.3333%;display:block}.GridColumn--width-11-lg{-webkit-box-flex:0;-ms-flex:0 0 91.6666%;flex:0 0 91.6666%;max-width:91.6666%;display:block}.GridColumn--width-12-lg{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;display:block}.GridColumn--offset-0-lg{margin-left:0}.GridColumn--offset-1-lg{margin-left:8.3333%}.GridColumn--offset-2-lg{margin-left:16.6666%}.GridColumn--offset-3-lg{margin-left:25%}.GridColumn--offset-4-lg{margin-left:33.3333%}.GridColumn--offset-5-lg{margin-left:41.6666%}.GridColumn--offset-6-lg{margin-left:50%}.GridColumn--offset-7-lg{margin-left:58.3333%}.GridColumn--offset-8-lg{margin-left:66.6666%}.GridColumn--offset-9-lg{margin-left:75%}.GridColumn--offset-10-lg{margin-left:83.3333%}.GridColumn--offset-11-lg{margin-left:91.6666%}.GridColumn--left-lg{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.GridColumn--right-lg{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.GridColumn--none-lg{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}}"],sourceRoot:""}])},206:function(i,A,e){A=i.exports=e(26)(!0),A.push([i.i,".Grid-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}.Grid-container--top{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.Grid-container--middle{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.Grid-container--bottom{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}","",{version:3,sources:["/home/runner/babylogen.dk/www/elements/GridContainer.vue"],names:[],mappings:"AAAA,gBAAgB,oBAAoB,oBAAoB,aAAa,mBAAmB,eAAe,WAAW,iBAAiB,iBAAiB,iBAAiB,CAAC,qBAAqB,wBAAwB,qBAAqB,sBAAsB,CAAC,wBAAwB,yBAAyB,sBAAsB,kBAAkB,CAAC,wBAAwB,sBAAsB,mBAAmB,oBAAoB,CAAC",file:"GridContainer.vue",sourcesContent:[".Grid-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}.Grid-container--top{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.Grid-container--middle{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.Grid-container--bottom{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}"],sourceRoot:""}])},207:function(i,A){i.exports={render:function(){var i=this,A=i.$createElement;return(i._self._c||A)("div",{staticClass:"GridColumn",class:i.classes},[i._t("default")],2)},staticRenderFns:[]}},208:function(i,A){i.exports={render:function(){var i=this,A=i.$createElement;return(i._self._c||A)("div",{staticClass:"Grid-container",class:i.classes},[i._t("default")],2)},staticRenderFns:[]}},209:function(i,A,e){var o=e(205);"string"==typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);e(27)("e26036fe",o,!0)},210:function(i,A,e){var o=e(206);"string"==typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);e(27)("f48135bc",o,!0)},367:function(i,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0});var o=e(28),t=e(162),l=e.n(t),m=e(161),n=e.n(m),a=e(394),r=e.n(a);A.default={components:{GridContainer:l.a,GridColumn:n.a,NavLink:r.a},data:function(){return{scrollPosition:null,open:!1}},computed:e.i(o.mapState)(["navigation"]),methods:{updateScroll:function(){this.scrollPosition=window.scrollY},toggleNavigation:function(){this.open=!this.open},closeNavigation:function(){this.open=!1}},mounted:function(){this.updateScroll(),window.addEventListener("scroll",this.updateScroll)}}},368:function(i,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.default={props:["to"]}},369:function(i,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0});var o=e(393),t=e.n(o);A.default={components:{Navigation:t.a}}},379:function(i,A,e){A=i.exports=e(26)(!0),A.push([i.i,".Page{padding-top:3rem}@media (min-width:768px){.Page{padding-top:9rem}}","",{version:3,sources:["/home/runner/babylogen.dk/www/layouts/default.vue"],names:[],mappings:"AAAA,MAAM,gBAAgB,CAAC,yBAAyB,MAAM,gBAAgB,CAAC,CAAC",file:"default.vue",sourcesContent:[".Page{padding-top:3rem}@media (min-width:768px){.Page{padding-top:9rem}}"],sourceRoot:""}])},383:function(i,A,e){A=i.exports=e(26)(!0),A.push([i.i,".Navigation{position:fixed;top:0;left:0;right:0;background-color:var(--color-white);padding-top:13px;padding-bottom:13px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:padding .25s cubic-bezier(.5,0,.1,1);-o-transition:padding .25s cubic-bezier(.5,0,.1,1);transition:padding .25s cubic-bezier(.5,0,.1,1);z-index:1}.Navigation-logo{margin-left:-1rem;letter-spacing:.1rem;-webkit-transition:all .25s cubic-bezier(.5,0,.1,1)!important;-o-transition:all .25s cubic-bezier(.5,0,.1,1)!important;transition:all .25s cubic-bezier(.5,0,.1,1)!important}.Navigation-logo.nuxt-link-active,.Navigation-logo.nuxt-link-active:active,.Navigation-logo.nuxt-link-active:focus{border-color:var(--color-white)}.Navigation-logo.nuxt-link-active:hover{border-color:var(--color-grey-75)}.Navigation--collapsed{padding-top:13px!important;padding-bottom:13px!important}.Navigation--collapsed .Navigation-logo{font-size:1rem;font-weight:700}.Navigation-links{text-align:right}.Navigation-link{display:none;margin-right:1rem}.Navigation-basket{display:none}.Navigation-basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}.Navigation-menu{margin-left:1rem}.Navigation-menu span{border:1px solid var(--color-grey-75);margin:-12px -1rem;padding:12px 1rem}.Navigation-mobile{padding-top:1rem;min-height:100vh}.Navigation-mobile--hidden{display:none}.Navigation-mobile-link{text-align:center;margin-top:3rem;margin-bottom:3rem}.Navigation-mobile-link--basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}@media (min-width:768px){.Navigation{padding-top:3rem;padding-bottom:3rem}.Navigation-logo{font-size:2rem}.Navigation-basket{display:inline}.Navigation-mobile-link--basket{display:none}}@media (min-width:992px){.Navigation-link{display:inline}.Navigation-menu,.Navigation-mobile{display:none}}","",{version:3,sources:["/home/runner/babylogen.dk/www/compositions/Navigation.vue"],names:[],mappings:"AAAA,YAAY,eAAe,MAAM,OAAO,QAAQ,oCAAoC,iBAAiB,oBAAoB,gCAAgC,wBAAwB,wDAAwD,mDAAmD,gDAAgD,SAAS,CAAC,iBAAiB,kBAAkB,qBAAqB,8DAA8D,yDAAyD,qDAAqD,CAAC,mHAAmH,+BAA+B,CAAC,wCAAwC,iCAAiC,CAAC,uBAAuB,2BAA2B,6BAA6B,CAAC,wCAAwC,eAAe,eAAe,CAAC,kBAAkB,gBAAgB,CAAC,iBAAiB,aAAa,iBAAiB,CAAC,mBAAmB,YAAY,CAAC,wBAAwB,sCAAsC,mBAAmB,iBAAiB,CAAC,iBAAiB,gBAAgB,CAAC,sBAAsB,sCAAsC,mBAAmB,iBAAiB,CAAC,mBAAmB,iBAAiB,gBAAgB,CAAC,2BAA2B,YAAY,CAAC,wBAAwB,kBAAkB,gBAAgB,kBAAkB,CAAC,qCAAqC,sCAAsC,mBAAmB,iBAAiB,CAAC,yBAAyB,YAAY,iBAAiB,mBAAmB,CAAC,iBAAiB,cAAc,CAAC,mBAAmB,cAAc,CAAC,gCAAgC,YAAY,CAAC,CAAC,yBAAyB,iBAAiB,cAAc,CAAC,oCAAoC,YAAY,CAAC,CAAC",file:"Navigation.vue",sourcesContent:[".Navigation{position:fixed;top:0;left:0;right:0;background-color:var(--color-white);padding-top:13px;padding-bottom:13px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:padding .25s cubic-bezier(.5,0,.1,1);-o-transition:padding .25s cubic-bezier(.5,0,.1,1);transition:padding .25s cubic-bezier(.5,0,.1,1);z-index:1}.Navigation-logo{margin-left:-1rem;letter-spacing:.1rem;-webkit-transition:all .25s cubic-bezier(.5,0,.1,1)!important;-o-transition:all .25s cubic-bezier(.5,0,.1,1)!important;transition:all .25s cubic-bezier(.5,0,.1,1)!important}.Navigation-logo.nuxt-link-active,.Navigation-logo.nuxt-link-active:active,.Navigation-logo.nuxt-link-active:focus{border-color:var(--color-white)}.Navigation-logo.nuxt-link-active:hover{border-color:var(--color-grey-75)}.Navigation--collapsed{padding-top:13px!important;padding-bottom:13px!important}.Navigation--collapsed .Navigation-logo{font-size:1rem;font-weight:700}.Navigation-links{text-align:right}.Navigation-link{display:none;margin-right:1rem}.Navigation-basket{display:none}.Navigation-basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}.Navigation-menu{margin-left:1rem}.Navigation-menu span{border:1px solid var(--color-grey-75);margin:-12px -1rem;padding:12px 1rem}.Navigation-mobile{padding-top:1rem;min-height:100vh}.Navigation-mobile--hidden{display:none}.Navigation-mobile-link{text-align:center;margin-top:3rem;margin-bottom:3rem}.Navigation-mobile-link--basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}@media (min-width:768px){.Navigation{padding-top:3rem;padding-bottom:3rem}.Navigation-logo{font-size:2rem}.Navigation-basket{display:inline}.Navigation-mobile-link--basket{display:none}}@media (min-width:992px){.Navigation-link{display:inline}.Navigation-menu,.Navigation-mobile{display:none}}"],sourceRoot:""}])},391:function(i,A,e){A=i.exports=e(26)(!0),A.push([i.i,".Nav-link{color:var(--color-black);text-decoration:none;font-weight:700;text-transform:uppercase;padding:1rem 1rem 12px;border-bottom:4px solid transparent;-webkit-transition:border .25s cubic-bezier(.5,0,.1,1);-o-transition:border .25s cubic-bezier(.5,0,.1,1);transition:border .25s cubic-bezier(.5,0,.1,1);cursor:pointer}.Nav-link:hover{border-bottom-color:var(--color-grey-75)}.touch .Nav-link:hover{border-bottom-color:transparent}.Nav-link:active,.Nav-link:focus,.nuxt-link-active,.nuxt-link-active:hover{border-bottom-color:var(--color-primary)}","",{version:3,sources:["/home/runner/babylogen.dk/www/elements/NavLink.vue"],names:[],mappings:"AAAA,UAAU,yBAAyB,qBAAqB,gBAAgB,yBAAyB,uBAAuB,oCAAoC,uDAAuD,kDAAkD,+CAA+C,cAAc,CAAC,gBAAgB,wCAAwC,CAAC,uBAAuB,+BAA+B,CAAC,2EAA2E,wCAAwC,CAAC",file:"NavLink.vue",sourcesContent:[".Nav-link{color:var(--color-black);text-decoration:none;font-weight:700;text-transform:uppercase;padding:1rem 1rem 12px;border-bottom:4px solid transparent;-webkit-transition:border .25s cubic-bezier(.5,0,.1,1);-o-transition:border .25s cubic-bezier(.5,0,.1,1);transition:border .25s cubic-bezier(.5,0,.1,1);cursor:pointer}.Nav-link:hover{border-bottom-color:var(--color-grey-75)}.touch .Nav-link:hover{border-bottom-color:transparent}.Nav-link:active,.Nav-link:focus,.nuxt-link-active,.nuxt-link-active:hover{border-bottom-color:var(--color-primary)}"],sourceRoot:""}])},393:function(i,A,e){function o(i){e(412)}var t=e(17)(e(367),e(399),o,null,null);i.exports=t.exports},394:function(i,A,e){function o(i){e(420)}var t=e(17)(e(368),e(407),o,null,null);i.exports=t.exports},395:function(i,A){i.exports={render:function(){var i=this,A=i.$createElement,e=i._self._c||A;return e("div",{staticClass:"Page"},[e("navigation"),e("nuxt")],1)},staticRenderFns:[]}},399:function(i,A){i.exports={render:function(){var i=this,A=i.$createElement,e=i._self._c||A;return e("div",{staticClass:"Navigation",class:{"Navigation--collapsed":i.scrollPosition>144}},[e("grid-container",{attrs:{align:"middle"}},[e("grid-column",{attrs:{xs:"expand"}},[e("nav-link",{staticClass:"Navigation-logo",attrs:{to:"/"},nativeOn:{click:function(A){i.closeNavigation(A)}}},[i._v("\n        BabyTeamet\n      ")])],1),e("grid-column",{staticClass:"Navigation-links",attrs:{xs:"fit"}},[i._l(i.navigation,function(A){return[e("nav-link",{staticClass:"Navigation-link",attrs:{to:A.path},nativeOn:{click:function(A){i.closeNavigation(A)}}},[i._v(i._s(A.title))])]}),e("nav-link",{staticClass:"Navigation-menu",nativeOn:{click:function(A){i.toggleNavigation(A)}}},[e("span",[i._v(i._s(i.open?"Luk":"Menu"))])])],2),e("grid-column",{staticClass:"Navigation-mobile",class:{"Navigation-mobile--hidden":!i.open},attrs:{xs:"12"}},[i._l(i.navigation,function(A){return[e("div",{staticClass:"Navigation-mobile-link"},[e("nav-link",{attrs:{to:A.path},nativeOn:{click:function(A){i.closeNavigation(A)}}},[i._v(i._s(A.title))])],1)]})],2)],1)],1)},staticRenderFns:[]}},407:function(i,A){i.exports={render:function(){var i=this,A=i.$createElement,e=i._self._c||A;return i.to?e("nuxt-link",{staticClass:"Nav-link",attrs:{to:i.to}},[i._t("default")],2):e("span",{staticClass:"Nav-link"},[i._t("default")],2)},staticRenderFns:[]}},408:function(i,A,e){var o=e(379);"string"==typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);e(27)("9d5fbf98",o,!0)},412:function(i,A,e){var o=e(383);"string"==typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);e(27)("345f3740",o,!0)},420:function(i,A,e){var o=e(391);"string"==typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);e(27)("6dfd27c4",o,!0)}});