webpackJsonp([0],{"3/pe":function(t,i,n){"use strict";i.a={props:{align:{type:String,validator:function(t){return["top","middle","bottom"].some(function(i){return i===t})}}},computed:{classes:function(){var t="";return t+=this.align?" Grid-container--"+this.align:""}}}},"6ASA":function(t,i,n){i=t.exports=n("FZ+f")(!1),i.push([t.i,".Page{padding-top:48px;padding-top:3rem}@media (min-width:768px){.Page{padding-top:9rem}}",""])},"8R6N":function(t,i,n){i=t.exports=n("FZ+f")(!1),i.push([t.i,".Grid-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}.Grid-container--top{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.Grid-container--middle{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.Grid-container--bottom{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}",""])},"8RSG":function(t,i,n){"use strict";var a=n("NYxO"),o=n("hgmh"),e=n("gdBe"),r=n("cLxl");i.a={components:{GridContainer:o.a,GridColumn:e.default,NavLink:r.a},data:function(){return{scrollPosition:null,open:!1}},computed:Object(a.mapState)(["navigation"]),methods:{updateScroll:function(){this.scrollPosition=window.scrollY},toggleNavigation:function(){this.open=!this.open},closeNavigation:function(){this.open=!1}},mounted:function(){this.updateScroll(),window.addEventListener("scroll",this.updateScroll,{passive:!0})}}},"F6/I":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"Grid-container",class:t.classes},[t._t("default")],2)},o=[],e={render:a,staticRenderFns:o};i.a=e},Fvev:function(t,i,n){"use strict";function a(t){n("IWrG")}var o=n("8RSG"),e=n("aoLc"),r=n("VU/8"),s=a,l=r(o.a,e.a,!1,s,null,null);i.a=l.exports},G8qS:function(t,i,n){"use strict";i.a={props:["to"]}},HDnP:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.to?n("nuxt-link",{staticClass:"Nav-link",attrs:{to:t.to}},[t._t("default")],2):n("span",{staticClass:"Nav-link"},[t._t("default")],2)},o=[],e={render:a,staticRenderFns:o};i.a=e},IWrG:function(t,i,n){var a=n("ZAJ1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("c1906a12",a,!0,{sourceMap:!1})},MPLC:function(t,i,n){var a=n("6ASA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("29930e3f",a,!0,{sourceMap:!1})},Ma2J:function(t,i,n){"use strict";function a(t){n("MPLC")}Object.defineProperty(i,"__esModule",{value:!0});var o=n("jj8+"),e=n("aQf8"),r=n("VU/8"),s=a,l=r(o.a,e.a,!1,s,null,null);i.default=l.exports},TOeL:function(t,i,n){var a=n("nP0z");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("73c96ade",a,!0,{sourceMap:!1})},ZAJ1:function(t,i,n){i=t.exports=n("FZ+f")(!1),i.push([t.i,".Navigation{position:fixed;top:0;left:0;right:0;background-color:#fff;padding-top:13px;padding-bottom:13px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:padding .25s cubic-bezier(.5,0,.1,1);transition:padding .25s cubic-bezier(.5,0,.1,1);z-index:10000}.Navigation-logo{margin-left:-16px;margin-left:-1rem;letter-spacing:1.6px;letter-spacing:.1rem;-webkit-transition:all .25s cubic-bezier(.5,0,.1,1)!important;transition:all .25s cubic-bezier(.5,0,.1,1)!important}.Navigation-logo.nuxt-link-active,.Navigation-logo.nuxt-link-active:active,.Navigation-logo.nuxt-link-active:focus{border-color:#fff}.Navigation-logo.nuxt-link-active:hover{border-color:#bfbfbf}.Navigation--collapsed{padding-top:13px!important;padding-bottom:13px!important}.Navigation--collapsed .Navigation-logo{font-size:16px;font-size:1rem;font-weight:700}.Navigation-links{text-align:right}.Navigation-link{display:none;margin-right:16px;margin-right:1rem}.Navigation-basket{display:none}.Navigation-basket span{background-color:#7dfad3;margin:-12px -16px;margin:-12px -1rem;padding:12px 16px;padding:12px 1rem}.Navigation-menu{margin-left:16px;margin-left:1rem}.Navigation-menu span{border:1px solid #bfbfbf;margin:-12px -16px;margin:-12px -1rem;padding:12px 16px;padding:12px 1rem}.Navigation-mobile{padding-top:16px;padding-top:1rem;min-height:100vh}.Navigation-mobile--hidden{display:none}.Navigation-mobile-link{text-align:center;margin-top:48px;margin-top:3rem;margin-bottom:48px;margin-bottom:3rem}.Navigation-mobile-link--basket span{background-color:#7dfad3;margin:-12px -16px;margin:-12px -1rem;padding:12px 16px;padding:12px 1rem}@media (min-width:768px){.Navigation{padding-top:3rem;padding-bottom:3rem}.Navigation-logo{font-size:2rem}.Navigation-basket{display:inline}.Navigation-mobile-link--basket{display:none}}@media (min-width:992px){.Navigation-link{display:inline}.Navigation-menu,.Navigation-mobile{display:none}}",""])},aQf8:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"Page"},[n("navigation"),n("nuxt")],1)},o=[],e={render:a,staticRenderFns:o};i.a=e},aoLc:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"Navigation",class:{"Navigation--collapsed":t.scrollPosition>94}},[n("grid-container",{attrs:{align:"middle"}},[n("grid-column",{attrs:{xs:"expand"}},[n("nav-link",{staticClass:"Navigation-logo",attrs:{to:"/"},nativeOn:{click:function(i){t.closeNavigation(i)}}},[t._v("\n        BabyTeamet\n      ")])],1),n("grid-column",{staticClass:"Navigation-links",attrs:{xs:"fit"}},[t._l(t.navigation,function(i){return[n("nav-link",{staticClass:"Navigation-link",attrs:{to:i.path},nativeOn:{click:function(i){t.closeNavigation(i)}}},[t._v(t._s(i.title))])]}),n("a",{staticClass:"Nav-link Navigation-basket",attrs:{target:"_blank",href:"https://system.easypractice.net/book/jordemoderkonsultation"},on:{click:t.closeNavigation}},[n("span",[t._v("Book nu")])]),n("nav-link",{staticClass:"Navigation-menu",nativeOn:{click:function(i){t.toggleNavigation(i)}}},[n("span",[t._v(t._s(t.open?"Luk":"Menu"))])])],2),n("grid-column",{staticClass:"Navigation-mobile",class:{"Navigation-mobile--hidden":!t.open},attrs:{xs:"12"}},[t._l(t.navigation,function(i){return[n("div",{staticClass:"Navigation-mobile-link"},[n("nav-link",{attrs:{to:i.path},nativeOn:{click:function(i){t.closeNavigation(i)}}},[t._v(t._s(i.title))])],1)]}),n("div",{staticClass:"Navigation-mobile-link Navigation-mobile-link--basket"},[n("a",{staticClass:"Nav-link",attrs:{target:"_blank",href:"https://system.easypractice.net/book/jordemoderkonsultation"},on:{click:t.closeNavigation}},[n("span",[t._v("Book nu")])])])],2)],1)],1)},o=[],e={render:a,staticRenderFns:o};i.a=e},cLxl:function(t,i,n){"use strict";function a(t){n("TOeL")}var o=n("G8qS"),e=n("HDnP"),r=n("VU/8"),s=a,l=r(o.a,e.a,!1,s,null,null);i.a=l.exports},diPA:function(t,i,n){var a=n("8R6N");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("6506f47e",a,!0,{sourceMap:!1})},hgmh:function(t,i,n){"use strict";function a(t){n("diPA")}var o=n("3/pe"),e=n("F6/I"),r=n("VU/8"),s=a,l=r(o.a,e.a,!1,s,null,null);i.a=l.exports},"jj8+":function(t,i,n){"use strict";var a=n("Fvev");i.a={components:{Navigation:a.a}}},nP0z:function(t,i,n){i=t.exports=n("FZ+f")(!1),i.push([t.i,".Nav-link{color:#333;text-decoration:none;font-weight:700;text-transform:uppercase;padding:16px 16px 12px;padding:1rem 1rem 12px;border-bottom:4px solid transparent;-webkit-transition:border .25s cubic-bezier(.5,0,.1,1);transition:border .25s cubic-bezier(.5,0,.1,1);cursor:pointer}.Nav-link:hover{border-bottom-color:#bfbfbf}.touch .Nav-link:hover{border-bottom-color:transparent}.Nav-link:active,.Nav-link:focus,.nuxt-link-active,.nuxt-link-active:hover{border-bottom-color:#7dfad3}",""])}});
//# sourceMappingURL=default.2ab9d30bf8e94517996b.js.map