webpackJsonp([13],{"/y9P":function(t,e,n){var r=n("FPqg");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("58e23cf6",r,!0)},"21sq":function(t,e,n){"use strict";function r(t){n("Ft1r")}var i=n("5qb0"),o=n("afNN"),a=n("VU/8"),s=r,c=a(i.a,o.a,!1,s,null,null);e.a=c.exports},"3/pe":function(t,e,n){"use strict";e.a={props:{align:{type:String,validator:function(t){return["top","middle","bottom"].some(function(e){return e===t})}}},computed:{classes:function(){var t="";return t+=this.align?" Grid-container--"+this.align:""}}}},"3hFh":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"Event",attrs:{to:"/events/"+t.path}},[n("grid-container",{staticClass:"Event-container"},[n("grid-column",{staticClass:"Event-column",attrs:{xs:"3",sm:"12"}},[n("div",{staticClass:"Event-image",style:{"background-image":"url("+(t.image?t.image.fields.file.url:"")+"?fm=jpg&fl=progressive&w=735)"}})]),n("grid-column",{staticClass:"Event-column",attrs:{xs:"9",sm:"12"}},[n("div",{staticClass:"Event-content"},[n("h3",[t._v(t._s(t.header||Array(10).join("█")))]),n("p",[t._v(t._s(t.date))]),n("p",[t._v(t._s(t.time))])]),n("div",{staticClass:"Event-price"},[t._v(t._s(t.price))])])],1)],1)},i=[],o={render:r,staticRenderFns:i};e.a=o},"5Ipr":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".CustomButton{display:inline-block;text-decoration:none;padding:8px 32px;padding:.5rem 2rem;cursor:pointer;font-weight:700;text-transform:uppercase;-webkit-transition:all .25s cubic-bezier(.5,0,.1,1);transition:all .25s cubic-bezier(.5,0,.1,1)}.CustomButton:hover{-webkit-box-shadow:0 0 1rem 0 rgba(0,0,0,.5);box-shadow:0 0 1rem 0 rgba(0,0,0,.5);z-index:10}.CustomButton:focus{outline:0}.CustomButton--ghost{color:#333;border:1px solid #333;background:transparent}.CustomButton--ghost:hover{color:#7dfad3;background-color:#333}.CustomButton--ghost:active{color:#fff}.CustomButton--ghost-primary{color:#7dfad3;border:1px solid #7dfad3;background:transparent}.CustomButton--ghost-primary:hover{color:#333;background-color:#7dfad3}.CustomButton--ghost-primary:active{background-color:#fff;border-color:#fff}.CustomButton--primary{color:#333!important;background:#7dfad3}",""])},"5qb0":function(t,e,n){"use strict";e.a={props:{type:{type:String,default:"ghost",validator:function(t){return["ghost","ghost-primary","primary","black"].some(function(e){return e===t})}},to:String}}},"6FxC":function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return o.a.getEntries({content_type:"event",order:"fields.startDate",limit:t,"fields.startDate[gte]":new Date}).then(function(t){return t.items})}e.a=r;var i=n("MNkD"),o=n.n(i)},BVyt:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"Grid-container",class:t.classes},[t._t("default")],2)},i=[],o={render:r,staticRenderFns:i};e.a=o},C0ep:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("grid-container",[n("grid-column",{attrs:{xs:"12"}},[n("h2",{staticClass:"Events-header"},[t._v(t._s(t.header))]),n("p",{staticClass:"Events-description"},[t._v(t._s(t.description))])]),t._l(t.events,function(e,r){return n("grid-column",{key:e.sys?e.sys.id:Math.random(),staticClass:"Events-item",class:"Events-item--col-"+r%4,attrs:{xs:"12",sm:"6",md:"4",lg:"3"}},[n("event",t._b({},"event",e.fields,!1))],1)}),t.buttonLink&&t.buttonText&&7==t.limit?n("grid-column",{staticClass:"Events-item Events-item--cta",attrs:{xs:"12",sm:"6",md:"4",lg:"3"}},[n("div",[n("custom-button",{attrs:{to:"/"+t.buttonLink.fields.path+"/",width:"auto"}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])],1)]):t._e()],2)},i=[],o={render:r,staticRenderFns:i};e.a=o},C1D5:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".Event{display:block;color:#333;text-decoration:none;position:relative;height:100%;-webkit-transition:all .25s cubic-bezier(.5,0,.1,1);transition:all .25s cubic-bezier(.5,0,.1,1)}.Event:hover{background-color:#7dfad3;-webkit-box-shadow:0 0 2rem 0 rgba(0,0,0,.25);box-shadow:0 0 2rem 0 rgba(0,0,0,.25);z-index:10}.Event-column,.Event-container{padding:0}.Event-image{background-repeat:no-repeat;background-position:50%;background-size:cover;padding-top:100%;background-color:rgba(0,0,0,.1)}.Event-content{padding:16px 16px 48px;padding:1rem 1rem 3rem}.Event h3{font-weight:700;text-transform:uppercase;margin-bottom:8px;margin-bottom:.5rem}.Event-price{font-weight:700;font-size:20px;font-size:1.25rem;position:absolute;right:16px;right:1rem;bottom:16px;bottom:1rem}@media (min-width:768px){.Event-image{padding-top:60%}.Event h3{font-size:1.25rem}}@media (min-width:992px){.Event-image{padding-top:70%}}@media (min-width:1200px){.Event-image{padding-top:80%}}",""])},FPqg:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".Events-header{font-size:32px;font-size:2rem;font-weight:300;text-transform:uppercase}.Events-description{margin-bottom:16px;margin-bottom:1rem}.Events-item{padding:0}.Events-item--col-0{background-color:#e6e6e6}.Events-item--col-1{background-color:#d9d9d9}.Events-item--col-2{background-color:#ccc}.Events-item--col-3{background-color:#bfbfbf}.Events-item--cta{background-color:#7dfad3;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:224px;min-height:14rem}",""])},Ft1r:function(t,e,n){var r=n("5Ipr");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("05799952",r,!0)},afNN:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[0!==t.to.indexOf("http")?n("nuxt-link",{staticClass:"CustomButton",class:["CustomButton--"+t.type],attrs:{to:t.to}},[t._t("default")],2):t._e(),0===t.to.indexOf("http")?n("a",{staticClass:"CustomButton",class:["CustomButton--"+t.type],attrs:{href:t.to}},[t._t("default")],2):t._e()],1)},i=[],o={render:r,staticRenderFns:i};e.a=o},cNrq:function(t,e,n){"use strict";function r(t){return Array(t).join("█")}function i(t,e){if(!t||!e)return r(2)+":"+r(2)+" - "+r(2)+":"+r(2);var n=new Date(t+"+01:00"),i=new Date(e+"+01:00");return(n.getHours()<10?"0":"")+n.getHours()+":"+(n.getMinutes()<10?"0":"")+n.getMinutes()+" - "+(i.getHours()<10?"0":"")+i.getHours()+":"+(i.getMinutes()<10?"0":"")+i.getMinutes()}e.a=i},eUxT:function(t,e,n){"use strict";function r(t){return Array(t).join("█")}function i(t){if(!t)return r(3)+" "+r(8)+" "+r(4);var e=new Date(t),n=e.getFullYear();return e.getDate()+". "+["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"][e.getMonth()]+" "+n}e.a=i},fLdH:function(t,e,n){var r=n("sJ7A");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("a328ce36",r,!0)},hgmh:function(t,e,n){"use strict";function r(t){n("fLdH")}var i=n("3/pe"),o=n("BVyt"),a=n("VU/8"),s=r,c=a(i.a,o.a,!1,s,null,null);e.a=c.exports},"k6n/":function(t,e,n){"use strict";var r=n("hgmh"),i=n("gdBe"),o=n("eUxT"),a=n("cNrq");e.a={components:{GridContainer:r.a,GridColumn:i.default},props:{header:String,image:Object,startDate:String,endDate:String,price:String,path:String},computed:{date:function(){return Object(o.a)(this.startDate)},time:function(){return Object(a.a)(this.startDate,this.endDate)}}}},mRHN:function(t,e,n){var r=n("C1D5");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("22b33c0e",r,!0)},sJ7A:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".Grid-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}.Grid-container--top{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.Grid-container--middle{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.Grid-container--bottom{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}",""])},sz7Y:function(t,e,n){"use strict";var r=n("zvBl"),i=n("hgmh"),o=n("gdBe"),a=n("21sq"),s=n("6FxC");e.a={components:{GridContainer:i.a,GridColumn:o.default,CustomButton:a.a,Event:r.a},props:{header:String,description:String,buttonText:String,buttonLink:Object,limit:{type:Number,default:7}},data:function(){return{events:[{},{},{},{},{},{},{},{}]}},created:function(){var t=this;return Object(s.a)(this.limit).then(function(e){t.events=e})}}},yPeu:function(t,e,n){"use strict";function r(t){n("/y9P")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("sz7Y"),o=n("C0ep"),a=n("VU/8"),s=r,c=a(i.a,o.a,!1,s,null,null);e.default=c.exports},zvBl:function(t,e,n){"use strict";function r(t){n("mRHN")}var i=n("k6n/"),o=n("3hFh"),a=n("VU/8"),s=r,c=a(i.a,o.a,!1,s,null,null);e.a=c.exports}});
//# sourceMappingURL=13.9b92e34a920635766684.js.map