webpackJsonp([8],{"6IIV":function(e,t,n){"use strict";t.a={components:{Banner:function(){return n.e(16).then(n.bind(null,"guTx"))},ContentBox:function(){return n.e(15).then(n.bind(null,"a8vQ"))},Services:function(){return n.e(14).then(n.bind(null,"1UsF"))},Events:function(){return n.e(13).then(n.bind(null,"yPeu"))},SocialMediaLinks:function(){return n.e(17).then(n.bind(null,"lQyK"))},CombinedModules:function(){return n.e(11).then(n.bind(null,"q392"))},ImageBox:function(){return n.e(19).then(n.bind(null,"M1Zf"))},Splits:function(){return n.e(12).then(n.bind(null,"X9UM"))},NewsletterSignup:function(){return n.e(18).then(n.bind(null,"zwHE"))}},props:{page:{type:Object}}}},Am0b:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"",""])},B02j:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.page.fields.sections,function(t){return n("section",{key:t.sys.id},["banner"===t.sys.contentType.sys.id?n("banner",e._b({staticClass:"Page-section"},"banner",t.fields,!1)):e._e(),"contentBox"===t.sys.contentType.sys.id?n("content-box",e._b({staticClass:"Page-section"},"content-box",t.fields,!1)):e._e(),"itemList"===t.sys.contentType.sys.id?n("services",e._b({staticClass:"Page-section"},"services",t.fields,!1)):e._e(),"events"===t.sys.contentType.sys.id?n("events",e._b({staticClass:"Page-section"},"events",t.fields,!1)):e._e(),"socialMediaList"===t.sys.contentType.sys.id?n("social-media-links",e._b({staticClass:"Page-section"},"social-media-links",t.fields,!1)):e._e(),"imageBox"===t.sys.contentType.sys.id?n("image-box",e._b({staticClass:"Page-section"},"image-box",t.fields,!1)):e._e(),"combinedModules"===t.sys.contentType.sys.id?n("combined-modules",e._b({staticClass:"Page-section"},"combined-modules",t.fields,!1)):e._e(),"splits"===t.sys.contentType.sys.id?n("splits",e._b({staticClass:"Page-section"},"splits",t.fields,!1)):e._e(),"newsletterSignup"===t.sys.contentType.sys.id?n("newsletter-signup",e._b({staticClass:"Page-section"},"newsletter-signup",t.fields,!1)):e._e()],1)}))},i=[],o={render:s,staticRenderFns:i};t.a=o},FO1C:function(e,t,n){"use strict";function s(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description}]}}t.a=s},IRcZ:function(e,t,n){var s=n("OFXf");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("781054bc",s,!0)},MwP4:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Page",{attrs:{page:e.mappedPage}})],1)},i=[],o={render:s,staticRenderFns:i};t.a=o},OFXf:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".Page-section{margin-bottom:16px;margin-bottom:1rem}@media (min-width:768px){.Page-section{margin-bottom:2rem}}@media (min-width:1200px){.Page-section{margin-bottom:2rem}}",""])},Qyg2:function(e,t,n){"use strict";function s(e){var t=e.id,n=e.store,s=e.error;return o.a.getEntries({"sys.id":t}).then(function(e){if(0===e.items.length)return s({statusCode:404,message:"Blogpost not found"});var t=e.items[0];return n.commit("meta/set",t.fields),n.commit("page/set",t),null})}t.a=s;var i=n("MNkD"),o=n.n(i)},VBHC:function(e,t,n){"use strict";var s=n("Dd8w"),i=n.n(s),o=n("NYxO"),a=n("kbi+"),c=n.n(a),r=n("Qyg2"),l=n("FO1C"),d=n("yc+c");t.a={components:{Page:d.a},computed:i()({},Object(o.mapState)(["meta","page"]),{mappedPage:function(){return{fields:{sections:[{sys:{contentType:{sys:{id:"combinedModules"}}},fields:{modules:[{sys:{id:"mainContent",contentType:{sys:{id:"contentBox"}}},fields:{theme:"primary",header:this.page.fields.titel,align:"center",spacing:"little"}},{sys:{id:"body",contentType:{sys:{id:"contentBox"}}},fields:{body:this.page.fields.body,width:"text"}}]}}]}}}}),head:l.a,fetch:function(e){var t=e.store,n=e.params,s=e.error,i=c()(t.state.blogposts,{path:n.blog}),o=i.id;return Object(r.a)({id:o,store:t,error:s})},mounted:function(){var e=window.pageYOffset>94?95:0;window.scrollTo(0,e)}}},jki5:function(e,t,n){"use strict";function s(e){n("xZst")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("VBHC"),o=n("MwP4"),a=n("VU/8"),c=s,r=a(i.a,o.a,!1,c,null,null);t.default=r.exports},xZst:function(e,t,n){var s=n("Am0b");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("3ed90309",s,!0)},"yc+c":function(e,t,n){"use strict";function s(e){n("IRcZ")}var i=n("6IIV"),o=n("B02j"),a=n("VU/8"),c=s,r=a(i.a,o.a,!1,c,null,null);t.a=r.exports}});
//# sourceMappingURL=_blog.53297a97e27a7431d3a8.js.map