webpackJsonp([6],{148:function(i,o,A){function n(i){A(394)}var t=A(17)(A(361),A(383),n,null,null);i.exports=t.exports},158:function(i,o,A){function n(i){A(291)}var t=A(17)(A(199),A(289),n,null,null);i.exports=t.exports},159:function(i,o,A){function n(i){A(292)}var t=A(17)(A(200),A(290),n,null,null);i.exports=t.exports},199:function(i,o,A){"use strict";function n(i){var o=i.min,A=void 0===o?1:o,n=i.max,t=void 0===n?12:n,l=i.exceptions,e=void 0===l?[]:l;return function(i){if(e.some(function(o){return o===i}))return!0;var o=parseInt(i,10);return!isNaN(o)&&i>=A&&i<=t}}Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:{xs:{type:String,default:"fit",validator:n({min:0,max:12,exceptions:["expand","fit"]})},sm:{type:String,validator:n({min:0,max:12,exceptions:["expand","fit"]})},md:{type:String,validator:n({min:0,max:12,exceptions:["expand","fit"]})},lg:{type:String,validator:n({min:0,max:12,exceptions:["expand","fit"]})},offsetXs:{type:String,validator:n({min:0,max:11})},offsetSm:{type:String,validator:n({min:0,max:11})},offsetMd:{type:String,validator:n({min:0,max:11})},offsetLg:{type:String,validator:n({min:0,max:11})},moveXs:{type:String,validator:function(i){return["left","right","none"].some(function(o){return o===i})}},moveSm:{type:String,validator:function(i){return["left","right","none"].some(function(o){return o===i})}},moveMd:{type:String,validator:function(i){return["left","right","none"].some(function(o){return o===i})}},moveLg:{type:String,validator:function(i){return["left","right","none"].some(function(o){return o===i})}},align:{type:String,validator:function(i){return["top","middle","bottom"].some(function(o){return o===i})}}},computed:{classes:function(){var i="";return i+=" GridColumn--width-"+this.xs+"-xs",i+=this.sm?" GridColumn--width-"+this.sm+"-sm":"",i+=this.md?" GridColumn--width-"+this.md+"-md":"",i+=this.lg?" GridColumn--width-"+this.lg+"-lg":"",i+=this.align?" GridColumn--col-"+this.align:"",i+=this.offsetXs?" GridColumn--offset-"+this.offsetXs+"-xs":"",i+=this.offsetSm?" GridColumn--offset-"+this.offsetSm+"-sm":"",i+=this.offsetMd?" GridColumn--offset-"+this.offsetMd+"-md":"",i+=this.offsetLg?" GridColumn--offset-"+this.offsetLg+"-lg":"",i+=this.moveXs?" GridColumn--"+this.moveXs+"-xs":"",i+=this.moveSm?" GridColumn--"+this.moveSm+"-sm":"",i+=this.moveMd?" GridColumn--"+this.moveMd+"-md":"",i+=this.moveLg?" GridColumn--"+this.moveLg+"-lg":""}}}},200:function(i,o,A){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:{align:{type:String,validator:function(i){return["top","middle","bottom"].some(function(o){return o===i})}}},computed:{classes:function(){var i="";return i+=this.align?" Grid-container--"+this.align:""}}}},201:function(i,o,A){o=i.exports=A(25)(!0),o.push([i.i,".GridColumn{padding-left:.5rem;padding-right:.5rem}.GridColumn--width-fit-xs{flex:1 0 auto}.GridColumn--width-expand-xs{flex:0 0 auto}.GridColumn--width-0-xs{display:none}.GridColumn--width-1-xs{flex:0 0 8.3333%}.GridColumn--width-2-xs{flex:0 0 16.6666%}.GridColumn--width-3-xs{flex:0 0 25%}.GridColumn--width-4-xs{flex:0 0 33.3333%}.GridColumn--width-5-xs{flex:0 0 41.6666%}.GridColumn--width-6-xs{flex:0 0 50%}.GridColumn--width-7-xs{flex:0 0 58.3333%}.GridColumn--width-8-xs{flex:0 0 66.6666%}.GridColumn--width-9-xs{flex:0 0 75%}.GridColumn--width-10-xs{flex:0 0 83.3333%}.GridColumn--width-11-xs{flex:0 0 91.6666%}.GridColumn--width-12-xs{flex:0 0 100%}.GridColumn--offset-0-xs{margin-left:0}.GridColumn--offset-1-xs{margin-left:8.3333%}.GridColumn--offset-2-xs{margin-left:16.6666%}.GridColumn--offset-3-xs{margin-left:25%}.GridColumn--offset-4-xs{margin-left:33.3333%}.GridColumn--offset-5-xs{margin-left:41.6666%}.GridColumn--offset-6-xs{margin-left:50%}.GridColumn--offset-7-xs{margin-left:58.3333%}.GridColumn--offset-8-xs{margin-left:66.6666%}.GridColumn--offset-9-xs{margin-left:75%}.GridColumn--offset-10-xs{margin-left:83.3333%}.GridColumn--offset-11-xs{margin-left:91.6666%}.GridColumn--left-xs{order:-1}.GridColumn--right-xs{order:1}.GridColumn--none-xs{order:0}@media (min-width:768px){.GridColumn--width-fit-sm{flex:1 0 auto;display:block}.GridColumn--width-expand-sm{flex:0 0 auto;display:block}.GridColumn--width-0-sm{display:none}.GridColumn--width-1-sm{flex:0 0 8.3333%;display:block}.GridColumn--width-2-sm{flex:0 0 16.6666%;display:block}.GridColumn--width-3-sm{flex:0 0 25%;display:block}.GridColumn--width-4-sm{flex:0 0 33.3333%;display:block}.GridColumn--width-5-sm{flex:0 0 41.6666%;display:block}.GridColumn--width-6-sm{flex:0 0 50%;display:block}.GridColumn--width-7-sm{flex:0 0 58.3333%;display:block}.GridColumn--width-8-sm{flex:0 0 66.6666%;display:block}.GridColumn--width-9-sm{flex:0 0 75%;display:block}.GridColumn--width-10-sm{flex:0 0 83.3333%;display:block}.GridColumn--width-11-sm{flex:0 0 91.6666%;display:block}.GridColumn--width-12-sm{flex:0 0 100%;display:block}.GridColumn--offset-0-sm{margin-left:0}.GridColumn--offset-1-sm{margin-left:8.3333%}.GridColumn--offset-2-sm{margin-left:16.6666%}.GridColumn--offset-3-sm{margin-left:25%}.GridColumn--offset-4-sm{margin-left:33.3333%}.GridColumn--offset-5-sm{margin-left:41.6666%}.GridColumn--offset-6-sm{margin-left:50%}.GridColumn--offset-7-sm{margin-left:58.3333%}.GridColumn--offset-8-sm{margin-left:66.6666%}.GridColumn--offset-9-sm{margin-left:75%}.GridColumn--offset-10-sm{margin-left:83.3333%}.GridColumn--offset-11-sm{margin-left:91.6666%}.GridColumn--left-sm{order:-1}.GridColumn--right-sm{order:1}.GridColumn--none-sm{order:0}}@media (min-width:992px){.GridColumn--width-fit-md{flex:1 0 auto;display:block}.GridColumn--width-expand-md{flex:0 0 auto;display:block}.GridColumn--width-0-md{display:none;display:block}.GridColumn--width-1-md{flex:0 0 8.3333%;display:block}.GridColumn--width-2-md{flex:0 0 16.6666%;display:block}.GridColumn--width-3-md{flex:0 0 25%;display:block}.GridColumn--width-4-md{flex:0 0 33.3333%;display:block}.GridColumn--width-5-md{flex:0 0 41.6666%;display:block}.GridColumn--width-6-md{flex:0 0 50%;display:block}.GridColumn--width-7-md{flex:0 0 58.3333%;display:block}.GridColumn--width-8-md{flex:0 0 66.6666%;display:block}.GridColumn--width-9-md{flex:0 0 75%;display:block}.GridColumn--width-10-md{flex:0 0 83.3333%;display:block}.GridColumn--width-11-md{flex:0 0 91.6666%;display:block}.GridColumn--width-12-md{flex:0 0 100%;display:block}.GridColumn--offset-0-md{margin-left:0}.GridColumn--offset-1-md{margin-left:8.3333%}.GridColumn--offset-2-md{margin-left:16.6666%}.GridColumn--offset-3-md{margin-left:25%}.GridColumn--offset-4-md{margin-left:33.3333%}.GridColumn--offset-5-md{margin-left:41.6666%}.GridColumn--offset-6-md{margin-left:50%}.GridColumn--offset-7-md{margin-left:58.3333%}.GridColumn--offset-8-md{margin-left:66.6666%}.GridColumn--offset-9-md{margin-left:75%}.GridColumn--offset-10-md{margin-left:83.3333%}.GridColumn--offset-11-md{margin-left:91.6666%}.GridColumn--left-md{order:-1}.GridColumn--right-md{order:1}.GridColumn--none-md{order:0}}@media (min-width:1200px){.GridColumn--width-fit-lg{flex:1 0 auto;display:block}.GridColumn--width-expand-lg{flex:0 0 auto;display:block}.GridColumn--width-0-lg{display:none}.GridColumn--width-1-lg{flex:0 0 8.3333%;display:block}.GridColumn--width-2-lg{flex:0 0 16.6666%;display:block}.GridColumn--width-3-lg{flex:0 0 25%;display:block}.GridColumn--width-4-lg{flex:0 0 33.3333%;display:block}.GridColumn--width-5-lg{flex:0 0 41.6666%;display:block}.GridColumn--width-6-lg{flex:0 0 50%;display:block}.GridColumn--width-7-lg{flex:0 0 58.3333%;display:block}.GridColumn--width-8-lg{flex:0 0 66.6666%;display:block}.GridColumn--width-9-lg{flex:0 0 75%;display:block}.GridColumn--width-10-lg{flex:0 0 83.3333%;display:block}.GridColumn--width-11-lg{flex:0 0 91.6666%;display:block}.GridColumn--width-12-lg{flex:0 0 100%;display:block}.GridColumn--offset-0-lg{margin-left:0}.GridColumn--offset-1-lg{margin-left:8.3333%}.GridColumn--offset-2-lg{margin-left:16.6666%}.GridColumn--offset-3-lg{margin-left:25%}.GridColumn--offset-4-lg{margin-left:33.3333%}.GridColumn--offset-5-lg{margin-left:41.6666%}.GridColumn--offset-6-lg{margin-left:50%}.GridColumn--offset-7-lg{margin-left:58.3333%}.GridColumn--offset-8-lg{margin-left:66.6666%}.GridColumn--offset-9-lg{margin-left:75%}.GridColumn--offset-10-lg{margin-left:83.3333%}.GridColumn--offset-11-lg{margin-left:91.6666%}.GridColumn--left-lg{order:-1}.GridColumn--right-lg{order:1}.GridColumn--none-lg{order:0}}","",{version:3,sources:["/home/runner/babylogen.dk/www/elements/GridColumn.vue"],names:[],mappings:"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",file:"GridColumn.vue",sourcesContent:[".GridColumn{padding-left:.5rem;padding-right:.5rem}.GridColumn--width-fit-xs{flex:1 0 auto}.GridColumn--width-expand-xs{flex:0 0 auto}.GridColumn--width-0-xs{display:none}.GridColumn--width-1-xs{flex:0 0 8.3333%}.GridColumn--width-2-xs{flex:0 0 16.6666%}.GridColumn--width-3-xs{flex:0 0 25%}.GridColumn--width-4-xs{flex:0 0 33.3333%}.GridColumn--width-5-xs{flex:0 0 41.6666%}.GridColumn--width-6-xs{flex:0 0 50%}.GridColumn--width-7-xs{flex:0 0 58.3333%}.GridColumn--width-8-xs{flex:0 0 66.6666%}.GridColumn--width-9-xs{flex:0 0 75%}.GridColumn--width-10-xs{flex:0 0 83.3333%}.GridColumn--width-11-xs{flex:0 0 91.6666%}.GridColumn--width-12-xs{flex:0 0 100%}.GridColumn--offset-0-xs{margin-left:0}.GridColumn--offset-1-xs{margin-left:8.3333%}.GridColumn--offset-2-xs{margin-left:16.6666%}.GridColumn--offset-3-xs{margin-left:25%}.GridColumn--offset-4-xs{margin-left:33.3333%}.GridColumn--offset-5-xs{margin-left:41.6666%}.GridColumn--offset-6-xs{margin-left:50%}.GridColumn--offset-7-xs{margin-left:58.3333%}.GridColumn--offset-8-xs{margin-left:66.6666%}.GridColumn--offset-9-xs{margin-left:75%}.GridColumn--offset-10-xs{margin-left:83.3333%}.GridColumn--offset-11-xs{margin-left:91.6666%}.GridColumn--left-xs{order:-1}.GridColumn--right-xs{order:1}.GridColumn--none-xs{order:0}@media (min-width:768px){.GridColumn--width-fit-sm{flex:1 0 auto;display:block}.GridColumn--width-expand-sm{flex:0 0 auto;display:block}.GridColumn--width-0-sm{display:none}.GridColumn--width-1-sm{flex:0 0 8.3333%;display:block}.GridColumn--width-2-sm{flex:0 0 16.6666%;display:block}.GridColumn--width-3-sm{flex:0 0 25%;display:block}.GridColumn--width-4-sm{flex:0 0 33.3333%;display:block}.GridColumn--width-5-sm{flex:0 0 41.6666%;display:block}.GridColumn--width-6-sm{flex:0 0 50%;display:block}.GridColumn--width-7-sm{flex:0 0 58.3333%;display:block}.GridColumn--width-8-sm{flex:0 0 66.6666%;display:block}.GridColumn--width-9-sm{flex:0 0 75%;display:block}.GridColumn--width-10-sm{flex:0 0 83.3333%;display:block}.GridColumn--width-11-sm{flex:0 0 91.6666%;display:block}.GridColumn--width-12-sm{flex:0 0 100%;display:block}.GridColumn--offset-0-sm{margin-left:0}.GridColumn--offset-1-sm{margin-left:8.3333%}.GridColumn--offset-2-sm{margin-left:16.6666%}.GridColumn--offset-3-sm{margin-left:25%}.GridColumn--offset-4-sm{margin-left:33.3333%}.GridColumn--offset-5-sm{margin-left:41.6666%}.GridColumn--offset-6-sm{margin-left:50%}.GridColumn--offset-7-sm{margin-left:58.3333%}.GridColumn--offset-8-sm{margin-left:66.6666%}.GridColumn--offset-9-sm{margin-left:75%}.GridColumn--offset-10-sm{margin-left:83.3333%}.GridColumn--offset-11-sm{margin-left:91.6666%}.GridColumn--left-sm{order:-1}.GridColumn--right-sm{order:1}.GridColumn--none-sm{order:0}}@media (min-width:992px){.GridColumn--width-fit-md{flex:1 0 auto;display:block}.GridColumn--width-expand-md{flex:0 0 auto;display:block}.GridColumn--width-0-md{display:none;display:block}.GridColumn--width-1-md{flex:0 0 8.3333%;display:block}.GridColumn--width-2-md{flex:0 0 16.6666%;display:block}.GridColumn--width-3-md{flex:0 0 25%;display:block}.GridColumn--width-4-md{flex:0 0 33.3333%;display:block}.GridColumn--width-5-md{flex:0 0 41.6666%;display:block}.GridColumn--width-6-md{flex:0 0 50%;display:block}.GridColumn--width-7-md{flex:0 0 58.3333%;display:block}.GridColumn--width-8-md{flex:0 0 66.6666%;display:block}.GridColumn--width-9-md{flex:0 0 75%;display:block}.GridColumn--width-10-md{flex:0 0 83.3333%;display:block}.GridColumn--width-11-md{flex:0 0 91.6666%;display:block}.GridColumn--width-12-md{flex:0 0 100%;display:block}.GridColumn--offset-0-md{margin-left:0}.GridColumn--offset-1-md{margin-left:8.3333%}.GridColumn--offset-2-md{margin-left:16.6666%}.GridColumn--offset-3-md{margin-left:25%}.GridColumn--offset-4-md{margin-left:33.3333%}.GridColumn--offset-5-md{margin-left:41.6666%}.GridColumn--offset-6-md{margin-left:50%}.GridColumn--offset-7-md{margin-left:58.3333%}.GridColumn--offset-8-md{margin-left:66.6666%}.GridColumn--offset-9-md{margin-left:75%}.GridColumn--offset-10-md{margin-left:83.3333%}.GridColumn--offset-11-md{margin-left:91.6666%}.GridColumn--left-md{order:-1}.GridColumn--right-md{order:1}.GridColumn--none-md{order:0}}@media (min-width:1200px){.GridColumn--width-fit-lg{flex:1 0 auto;display:block}.GridColumn--width-expand-lg{flex:0 0 auto;display:block}.GridColumn--width-0-lg{display:none}.GridColumn--width-1-lg{flex:0 0 8.3333%;display:block}.GridColumn--width-2-lg{flex:0 0 16.6666%;display:block}.GridColumn--width-3-lg{flex:0 0 25%;display:block}.GridColumn--width-4-lg{flex:0 0 33.3333%;display:block}.GridColumn--width-5-lg{flex:0 0 41.6666%;display:block}.GridColumn--width-6-lg{flex:0 0 50%;display:block}.GridColumn--width-7-lg{flex:0 0 58.3333%;display:block}.GridColumn--width-8-lg{flex:0 0 66.6666%;display:block}.GridColumn--width-9-lg{flex:0 0 75%;display:block}.GridColumn--width-10-lg{flex:0 0 83.3333%;display:block}.GridColumn--width-11-lg{flex:0 0 91.6666%;display:block}.GridColumn--width-12-lg{flex:0 0 100%;display:block}.GridColumn--offset-0-lg{margin-left:0}.GridColumn--offset-1-lg{margin-left:8.3333%}.GridColumn--offset-2-lg{margin-left:16.6666%}.GridColumn--offset-3-lg{margin-left:25%}.GridColumn--offset-4-lg{margin-left:33.3333%}.GridColumn--offset-5-lg{margin-left:41.6666%}.GridColumn--offset-6-lg{margin-left:50%}.GridColumn--offset-7-lg{margin-left:58.3333%}.GridColumn--offset-8-lg{margin-left:66.6666%}.GridColumn--offset-9-lg{margin-left:75%}.GridColumn--offset-10-lg{margin-left:83.3333%}.GridColumn--offset-11-lg{margin-left:91.6666%}.GridColumn--left-lg{order:-1}.GridColumn--right-lg{order:1}.GridColumn--none-lg{order:0}}"],sourceRoot:""}])},202:function(i,o,A){o=i.exports=A(25)(!0),o.push([i.i,".Grid-container{padding-left:1rem;padding-right:1rem;display:flex;flex-wrap:wrap;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}.Grid-container--top{align-items:flex-start}.Grid-container--middle{align-items:center}.Grid-container--bottom{align-items:flex-end}@media (min-width:768px){.Grid-container{padding-left:2rem;padding-right:2rem}}@media (min-width:992px){.Grid-container{padding-left:3rem;padding-right:3rem}}@media (min-width:1200px){.Grid-container{padding-left:4rem;padding-right:4rem}}","",{version:3,sources:["/home/runner/babylogen.dk/www/elements/GridContainer.vue"],names:[],mappings:"AAAA,gBAAgB,kBAAkB,mBAAmB,aAAa,eAAe,WAAW,iBAAiB,iBAAiB,iBAAiB,CAAC,qBAAqB,sBAAsB,CAAC,wBAAwB,kBAAkB,CAAC,wBAAwB,oBAAoB,CAAC,yBAAyB,gBAAgB,kBAAkB,kBAAkB,CAAC,CAAC,yBAAyB,gBAAgB,kBAAkB,kBAAkB,CAAC,CAAC,0BAA0B,gBAAgB,kBAAkB,kBAAkB,CAAC,CAAC",file:"GridContainer.vue",sourcesContent:[".Grid-container{padding-left:1rem;padding-right:1rem;display:flex;flex-wrap:wrap;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}.Grid-container--top{align-items:flex-start}.Grid-container--middle{align-items:center}.Grid-container--bottom{align-items:flex-end}@media (min-width:768px){.Grid-container{padding-left:2rem;padding-right:2rem}}@media (min-width:992px){.Grid-container{padding-left:3rem;padding-right:3rem}}@media (min-width:1200px){.Grid-container{padding-left:4rem;padding-right:4rem}}"],sourceRoot:""}])},289:function(i,o){i.exports={render:function(){var i=this,o=i.$createElement;return(i._self._c||o)("div",{staticClass:"GridColumn",class:i.classes},[i._t("default")],2)},staticRenderFns:[]}},290:function(i,o){i.exports={render:function(){var i=this,o=i.$createElement;return(i._self._c||o)("div",{staticClass:"Grid-container",class:i.classes},[i._t("default")],2)},staticRenderFns:[]}},291:function(i,o,A){var n=A(201);"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);A(26)("e26036fe",n,!0)},292:function(i,o,A){var n=A(202);"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);A(26)("f48135bc",n,!0)},359:function(i,o,A){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=A(27),t=A(159),l=A.n(t),e=A(158),r=A.n(e),a=A(382),d=A.n(a);o.default={components:{GridContainer:l.a,GridColumn:r.a,NavLink:d.a},data:function(){return{scrollPosition:null,open:!1}},computed:A.i(n.mapState)(["navigation"]),methods:{updateScroll:function(){this.scrollPosition=window.scrollY},toggleNavigation:function(){this.open=!this.open},closeNavigation:function(){this.open=!1}},mounted:function(){this.updateScroll(),window.addEventListener("scroll",this.updateScroll)}}},360:function(i,o,A){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["to"]}},361:function(i,o,A){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=A(381),t=A.n(n);o.default={components:{Navigation:t.a}}},369:function(i,o,A){o=i.exports=A(25)(!0),o.push([i.i,".Page{padding-top:4.5rem}@media (min-width:768px){.Page{padding-top:11.5rem}}","",{version:3,sources:["/home/runner/babylogen.dk/www/layouts/default.vue"],names:[],mappings:"AAAA,MAAM,kBAAkB,CAAC,yBAAyB,MAAM,mBAAmB,CAAC,CAAC",file:"default.vue",sourcesContent:[".Page{padding-top:4.5rem}@media (min-width:768px){.Page{padding-top:11.5rem}}"],sourceRoot:""}])},373:function(i,o,A){o=i.exports=A(25)(!0),o.push([i.i,".Navigation{position:fixed;top:0;left:0;right:0;background-color:var(--color-white);padding-top:13px;padding-bottom:13px;transform:translateZ(0);transition:padding .25s cubic-bezier(.5,0,.1,1);z-index:1}.Navigation-logo{margin-left:-1rem;transition:all .25s cubic-bezier(.5,0,.1,1)!important}.Navigation-logo.nuxt-link-active,.Navigation-logo.nuxt-link-active:active,.Navigation-logo.nuxt-link-active:focus{border-color:var(--color-white)}.Navigation-logo.nuxt-link-active:hover{border-color:var(--color-grey-75)}.Navigation--collapsed{padding-top:13px!important;padding-bottom:13px!important}.Navigation--collapsed .Navigation-logo{font-size:1rem;font-weight:700}.Navigation-links{text-align:right}.Navigation-link{display:none;margin-right:1rem}.Navigation-basket{display:none}.Navigation-basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}.Navigation-menu{margin-left:1rem}.Navigation-menu span{border:1px solid var(--color-grey-75);margin:-12px -1rem;padding:12px 1rem}.Navigation-mobile{padding-top:1rem;min-height:100vh}.Navigation-mobile--hidden{display:none}.Navigation-mobile-link{text-align:center;margin-top:3rem;margin-bottom:3rem}.Navigation-mobile-link--basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}@media (min-width:768px){.Navigation{padding-top:3rem;padding-bottom:3rem}.Navigation-logo{font-size:2rem}.Navigation-basket{display:inline}.Navigation-mobile-link--basket{display:none}}@media (min-width:992px){.Navigation-link{display:inline}.Navigation-menu,.Navigation-mobile{display:none}}","",{version:3,sources:["/home/runner/babylogen.dk/www/compositions/Navigation.vue"],names:[],mappings:"AAAA,YAAY,eAAe,MAAM,OAAO,QAAQ,oCAAoC,iBAAiB,oBAAoB,wBAAwB,gDAAgD,SAAS,CAAC,iBAAiB,kBAAkB,qDAAqD,CAAC,mHAAmH,+BAA+B,CAAC,wCAAwC,iCAAiC,CAAC,uBAAuB,2BAA2B,6BAA6B,CAAC,wCAAwC,eAAe,eAAe,CAAC,kBAAkB,gBAAgB,CAAC,iBAAiB,aAAa,iBAAiB,CAAC,mBAAmB,YAAY,CAAC,wBAAwB,sCAAsC,mBAAmB,iBAAiB,CAAC,iBAAiB,gBAAgB,CAAC,sBAAsB,sCAAsC,mBAAmB,iBAAiB,CAAC,mBAAmB,iBAAiB,gBAAgB,CAAC,2BAA2B,YAAY,CAAC,wBAAwB,kBAAkB,gBAAgB,kBAAkB,CAAC,qCAAqC,sCAAsC,mBAAmB,iBAAiB,CAAC,yBAAyB,YAAY,iBAAiB,mBAAmB,CAAC,iBAAiB,cAAc,CAAC,mBAAmB,cAAc,CAAC,gCAAgC,YAAY,CAAC,CAAC,yBAAyB,iBAAiB,cAAc,CAAC,oCAAoC,YAAY,CAAC,CAAC",file:"Navigation.vue",sourcesContent:[".Navigation{position:fixed;top:0;left:0;right:0;background-color:var(--color-white);padding-top:13px;padding-bottom:13px;transform:translateZ(0);transition:padding .25s cubic-bezier(.5,0,.1,1);z-index:1}.Navigation-logo{margin-left:-1rem;transition:all .25s cubic-bezier(.5,0,.1,1)!important}.Navigation-logo.nuxt-link-active,.Navigation-logo.nuxt-link-active:active,.Navigation-logo.nuxt-link-active:focus{border-color:var(--color-white)}.Navigation-logo.nuxt-link-active:hover{border-color:var(--color-grey-75)}.Navigation--collapsed{padding-top:13px!important;padding-bottom:13px!important}.Navigation--collapsed .Navigation-logo{font-size:1rem;font-weight:700}.Navigation-links{text-align:right}.Navigation-link{display:none;margin-right:1rem}.Navigation-basket{display:none}.Navigation-basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}.Navigation-menu{margin-left:1rem}.Navigation-menu span{border:1px solid var(--color-grey-75);margin:-12px -1rem;padding:12px 1rem}.Navigation-mobile{padding-top:1rem;min-height:100vh}.Navigation-mobile--hidden{display:none}.Navigation-mobile-link{text-align:center;margin-top:3rem;margin-bottom:3rem}.Navigation-mobile-link--basket span{background-color:var(--color-primary);margin:-12px -1rem;padding:12px 1rem}@media (min-width:768px){.Navigation{padding-top:3rem;padding-bottom:3rem}.Navigation-logo{font-size:2rem}.Navigation-basket{display:inline}.Navigation-mobile-link--basket{display:none}}@media (min-width:992px){.Navigation-link{display:inline}.Navigation-menu,.Navigation-mobile{display:none}}"],sourceRoot:""}])},379:function(i,o,A){o=i.exports=A(25)(!0),o.push([i.i,".Nav-link{color:var(--color-black);text-decoration:none;font-weight:700;text-transform:uppercase;padding:1rem 1rem 12px;border-bottom:4px solid transparent;transition:border .25s cubic-bezier(.5,0,.1,1);cursor:pointer}.Nav-link:hover{border-bottom-color:var(--color-grey-75)}.touch .Nav-link:hover{border-bottom-color:transparent}.Nav-link:active,.Nav-link:focus,.nuxt-link-active,.nuxt-link-active:hover{border-bottom-color:var(--color-primary)}","",{version:3,sources:["/home/runner/babylogen.dk/www/elements/NavLink.vue"],names:[],mappings:"AAAA,UAAU,yBAAyB,qBAAqB,gBAAgB,yBAAyB,uBAAuB,oCAAoC,+CAA+C,cAAc,CAAC,gBAAgB,wCAAwC,CAAC,uBAAuB,+BAA+B,CAAC,2EAA2E,wCAAwC,CAAC",file:"NavLink.vue",sourcesContent:[".Nav-link{color:var(--color-black);text-decoration:none;font-weight:700;text-transform:uppercase;padding:1rem 1rem 12px;border-bottom:4px solid transparent;transition:border .25s cubic-bezier(.5,0,.1,1);cursor:pointer}.Nav-link:hover{border-bottom-color:var(--color-grey-75)}.touch .Nav-link:hover{border-bottom-color:transparent}.Nav-link:active,.Nav-link:focus,.nuxt-link-active,.nuxt-link-active:hover{border-bottom-color:var(--color-primary)}"],sourceRoot:""}])},381:function(i,o,A){function n(i){A(398)}var t=A(17)(A(359),A(387),n,null,null);i.exports=t.exports},382:function(i,o,A){function n(i){A(404)}var t=A(17)(A(360),A(393),n,null,null);i.exports=t.exports},383:function(i,o){i.exports={render:function(){var i=this,o=i.$createElement,A=i._self._c||o;return A("div",{staticClass:"Page"},[A("navigation"),A("nuxt")],1)},staticRenderFns:[]}},387:function(i,o){i.exports={render:function(){var i=this,o=i.$createElement,A=i._self._c||o;return A("div",{staticClass:"Navigation",class:{"Navigation--collapsed":i.scrollPosition>200}},[A("grid-container",{attrs:{align:"middle"}},[A("grid-column",{attrs:{xs:"expand"}},[A("nav-link",{staticClass:"Navigation-logo",attrs:{to:"/"},nativeOn:{click:function(o){i.closeNavigation(o)}}},[i._v("\n        BabyLogen\n      ")])],1),A("grid-column",{staticClass:"Navigation-links",attrs:{xs:"fit"}},[i._l(i.navigation,function(o){return[A("nav-link",{staticClass:"Navigation-link",attrs:{to:o.path},nativeOn:{click:function(o){i.closeNavigation(o)}}},[i._v(i._s(o.title))])]}),A("nav-link",{staticClass:"Navigation-menu",nativeOn:{click:function(o){i.toggleNavigation(o)}}},[A("span",[i._v(i._s(i.open?"Luk":"Menu"))])])],2),A("grid-column",{staticClass:"Navigation-mobile",class:{"Navigation-mobile--hidden":!i.open},attrs:{xs:"12"}},[i._l(i.navigation,function(o){return[A("div",{staticClass:"Navigation-mobile-link"},[A("nav-link",{attrs:{to:o.path},nativeOn:{click:function(o){i.closeNavigation(o)}}},[i._v(i._s(o.title))])],1)]})],2)],1)],1)},staticRenderFns:[]}},393:function(i,o){i.exports={render:function(){var i=this,o=i.$createElement,A=i._self._c||o;return i.to?A("nuxt-link",{staticClass:"Nav-link",attrs:{to:i.to}},[i._t("default")],2):A("span",{staticClass:"Nav-link"},[i._t("default")],2)},staticRenderFns:[]}},394:function(i,o,A){var n=A(369);"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);A(26)("9d5fbf98",n,!0)},398:function(i,o,A){var n=A(373);"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);A(26)("345f3740",n,!0)},404:function(i,o,A){var n=A(379);"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);A(26)("6dfd27c4",n,!0)}});