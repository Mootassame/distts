(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[100],{1134:function(e,t,n){"use strict";var r=n(2),a=Object(r.createContext)({});t.a=a},1186:function(e,t,n){"use strict";var r=n(20),a=n.n(r),c=n(15),o=n.n(c),l=n(148),i=n.n(l),s=n(2),d=n(17),p=n.n(d),u=n(1134),b=n(159),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var m=["xs","sm","md","lg","xl","xxl"],j=s.forwardRef((function(e,t){var n,r=s.useContext(b.b),c=r.getPrefixCls,l=r.direction,d=s.useContext(u.a),j=d.gutter,x=d.wrap,g=e.prefixCls,O=e.span,h=e.order,v=e.offset,y=e.push,w=e.pull,E=e.className,P=e.children,C=e.flex,N=e.style,_=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),R=c("col",g),k={};m.forEach((function(t){var n,r={},c=e[t];"number"===typeof c?r.span=c:"object"===i()(c)&&(r=c||{}),delete _[t],k=o()(o()({},k),(n={},a()(n,"".concat(R,"-").concat(t,"-").concat(r.span),void 0!==r.span),a()(n,"".concat(R,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),a()(n,"".concat(R,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),a()(n,"".concat(R,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),a()(n,"".concat(R,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),a()(n,"".concat(R,"-rtl"),"rtl"===l),n))}));var A=p()(R,(n={},a()(n,"".concat(R,"-").concat(O),void 0!==O),a()(n,"".concat(R,"-order-").concat(h),h),a()(n,"".concat(R,"-offset-").concat(v),v),a()(n,"".concat(R,"-push-").concat(y),y),a()(n,"".concat(R,"-pull-").concat(w),w),n),E,k),T=o()({},N);return j&&(T=o()(o()(o()({},j[0]>0?{paddingLeft:j[0]/2,paddingRight:j[0]/2}:{}),j[1]>0?{paddingTop:j[1]/2,paddingBottom:j[1]/2}:{}),T)),C&&(T.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(C),"auto"!==C||!1!==x||T.minWidth||(T.minWidth=0)),s.createElement("div",o()({},_,{style:T,className:A,ref:t}),P)}));j.displayName="Col",t.a=j},1224:function(e,t,n){"use strict";var r=n(15),a=n.n(r),c=n(20),o=n.n(c),l=n(148),i=n.n(l),s=n(36),d=n.n(s),p=n(2),u=n(17),b=n.n(u),f=n(159),m=n(1134),j=n(149),x=n(237),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=(Object(j.a)("top","middle","bottom","stretch"),Object(j.a)("start","end","center","space-around","space-between"),p.forwardRef((function(e,t){var n,r=e.prefixCls,c=e.justify,l=e.align,s=e.className,u=e.style,j=e.children,O=e.gutter,h=void 0===O?0:O,v=e.wrap,y=g(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=p.useContext(f.b),E=w.getPrefixCls,P=w.direction,C=p.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),N=d()(C,2),_=N[0],R=N[1],k=p.useRef(h);p.useEffect((function(){var e=x.a.subscribe((function(e){var t=k.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&R(e)}));return function(){return x.a.unsubscribe(e)}}),[]);var A=E("row",r),T=function(){var e=[0,0];return(Array.isArray(h)?h:[h,0]).forEach((function(t,n){if("object"===i()(t))for(var r=0;r<x.b.length;r++){var a=x.b[r];if(_[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t||0})),e}(),S=b()(A,(n={},o()(n,"".concat(A,"-no-wrap"),!1===v),o()(n,"".concat(A,"-").concat(c),c),o()(n,"".concat(A,"-").concat(l),l),o()(n,"".concat(A,"-rtl"),"rtl"===P),n),s),B=a()(a()(a()({},T[0]>0?{marginLeft:T[0]/-2,marginRight:T[0]/-2}:{}),T[1]>0?{marginTop:T[1]/-2,marginBottom:T[1]/2}:{}),u);return p.createElement(m.a.Provider,{value:{gutter:T,wrap:v}},p.createElement("div",a()({},y,{className:S,style:B,ref:t}),j))})));O.displayName="Row",t.a=O},1761:function(e,t,n){"use strict";n.r(t);var r,a=n(950),c=n(951),o=(n(2),n(3)),l=n(253),i=n(879),s=n(41),d=n(216),p=n(217).a.div(r||(r=Object(d.a)(["\n  padding: 16px;\n  margin-bottom: 16px;\n  border: 1px solid rgb(224, 224, 224);\n  border-radius: 5px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .title {\n    font-size: 24px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 24px;\n    flex-grow: 0;\n  }\n\n  .pricing {\n    font-size: 36px;\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 16px;\n    flex-grow: 0;\n  }\n\n  .pricingPeriod {\n    font-size: 16px;\n    font-weight: normal;\n  }\n\n  .description {\n    flex-grow: 1;\n    margin-bottom: 16px;\n    text-align: center;\n  }\n\n  .notPlanUser {\n    text-align: left;\n    font-size: 13px;\n  }\n\n  .cancelAtPeriodEnd {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #de3618;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n\n  .somethingWrong {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-align: left;\n    font-size: 13px;\n    margin-left: -17px;\n    margin-right: -17px;\n    background-color: #ed8936;\n    color: white;\n    padding-left: 16px;\n    border-bottom: 1px solid rgb(224, 224, 224);\n    border-top: 1px solid rgb(224, 224, 224);\n  }\n"]))),u=n(38),b=n(243),f=n(14);function m(e){var t=Object(s.e)(u.a.selectCurrentTenant).plan===l.a.values.free?"current":null;return Object(f.jsxs)(p,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"title",children:Object(o.d)("plan.".concat(l.a.values.free,".label"))}),Object(f.jsxs)("div",{className:"pricing",children:[Object(o.d)("plan.free.price"),Object(f.jsx)("span",{className:"pricingPeriod",children:Object(o.d)("plan.pricingPeriod")})]})]}),Object(f.jsx)("div",{children:"current"===t&&Object(f.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!0,children:Object(o.d)("plan.current")})})]})}var j=n(5),x=n(84),g=n(218),O=function(e){return e.plan},h=Object(j.a)([O],(function(e){return Boolean(e.loading)})),v={selectPermissionToEdit:Object(j.a)([u.a.selectCurrentTenant,u.a.selectCurrentUser],(function(e,t){return new x.a(e,t).match(g.a.values.planEdit)})),selectIsPlanUser:Object(j.a)([u.a.selectCurrentTenant,u.a.selectCurrentUser],(function(e,t){return e.plan===l.a.values.free||"cancel_at_period_end"===e.planStatus||e.planUserId===t.id})),selectLoading:h,selectRaw:O},y=n(214),w=n(245);function E(e){var t=Object(s.d)(),n=e.plan,r=Object(s.e)(u.a.selectCurrentTenant),a=Object(s.e)(v.selectLoading),c=Object(s.e)(v.selectPermissionToEdit),i=Object(s.e)(v.selectIsPlanUser),d=r.plan===n,m=d?"manage":r.plan===l.a.values.free?"payment":"none";return Object(f.jsxs)(p,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"title",children:Object(o.d)("plan.".concat(n,".label"))}),Object(f.jsxs)("div",{className:"pricing",children:[Object(o.d)("plan.".concat(n,".price")),Object(f.jsx)("span",{className:"pricingPeriod",children:Object(o.d)("plan.pricingPeriod")})]})]}),Object(f.jsxs)("div",{children:[d&&"cancel_at_period_end"===r.planStatus&&Object(f.jsx)("p",{className:"cancelAtPeriodEnd",children:Object(o.d)("plan.cancelAtPeriodEnd")}),d&&"error"===r.planStatus&&Object(f.jsx)("p",{className:"somethingWrong",children:Object(o.d)("plan.somethingWrong")}),"payment"===m&&Object(f.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!c||!i||a,onClick:function(){t(y.a.doCheckout(n))},children:Object(o.d)("plan.subscribe")}),"manage"===m&&i&&Object(f.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!c||a,onClick:function(){t(y.a.doPortal())},children:Object(o.d)("plan.manage")}),"manage"===m&&!i&&Object(f.jsx)(w.a,{title:Object(o.d)("plan.notPlanUser"),children:Object(f.jsx)(b.a,{type:"primary",htmlType:"button",block:!0,size:"large",disabled:!0,children:Object(o.d)("plan.manage")})})]})]})}var P=n(880),C=n(874);t.default=function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P.a,{items:[[Object(o.d)("dashboard.menu"),"/"],[Object(o.d)("plan.menu")]]}),Object(f.jsxs)(i.a,{children:[Object(f.jsx)(C.a,{children:Object(o.d)("plan.title")}),Object(f.jsxs)(a.a,{gutter:[24,24],children:[Object(f.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(f.jsx)(m,{})}),Object(f.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(f.jsx)(E,{plan:l.a.values.growth})}),Object(f.jsx)(c.a,{xs:24,md:12,lg:8,children:Object(f.jsx)(E,{plan:l.a.values.enterprise})})]})]})]})}},874:function(e,t,n){"use strict";var r,a=n(216),c=n(217).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=c},879:function(e,t,n){"use strict";var r,a=n(216),c=n(217).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=c},880:function(e,t,n){"use strict";var r=n(952),a=(n(2),n(114)),c=n(14);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(r.a,{children:e.items.map((function(e){return Object(c.jsx)(r.a.Item,{children:t(e)?Object(c.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},891:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(965))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},950:function(e,t,n){"use strict";var r=n(1224);t.a=r.a},951:function(e,t,n){"use strict";var r=n(1186);t.a=r.a},952:function(e,t,n){"use strict";var r=n(15),a=n.n(r),c=n(20),o=n.n(c),l=n(339),i=n.n(l),s=n(2),d=n(17),p=n.n(d),u=n(82),b=n(891),f=n.n(b),m=n(348),j=n(159),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g=function(e){var t,n,r=e.prefixCls,c=e.separator,o=void 0===c?"/":c,l=e.children,i=e.overlay,d=e.dropdownProps,p=x(e,["prefixCls","separator","children","overlay","dropdownProps"]),u=(0,s.useContext(j.b).getPrefixCls)("breadcrumb",r);return t="href"in p?s.createElement("a",a()({className:"".concat(u,"-link")},p),l):s.createElement("span",a()({className:"".concat(u,"-link")},p),l),n=t,t=i?s.createElement(m.a,a()({overlay:i,placement:"bottomCenter"},d),s.createElement("span",{className:"".concat(u,"-overlay-link")},n,s.createElement(f.a,null))):n,l?s.createElement("span",null,t,o&&""!==o&&s.createElement("span",{className:"".concat(u,"-separator")},o)):null};g.__ANT_BREADCRUMB_ITEM=!0;var O=g,h=function(e){var t=e.children,n=(0,s.useContext(j.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(n,"-separator")},t||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var v=h,y=n(848),w=n(81),E=n(37),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function C(e,t,n,r){var a=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?s.createElement("span",null,c):s.createElement("a",{href:"#/".concat(r.join("/"))},c)}var N=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},_=function(e){var t,n=e.prefixCls,r=e.separator,c=void 0===r?"/":r,l=e.style,d=e.className,b=e.routes,f=e.children,m=e.itemRender,x=void 0===m?C:m,g=e.params,h=void 0===g?{}:g,v=P(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),_=s.useContext(j.b),R=_.getPrefixCls,k=_.direction,A=R("breadcrumb",n);if(b&&b.length>0){var T=[];t=b.map((function(e){var t,n=N(e.path,h);return n&&T.push(n),e.children&&e.children.length&&(t=s.createElement(y.a,null,e.children.map((function(e){return s.createElement(y.a.Item,{key:e.path||e.breadcrumbName},x(e,h,b,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=i()(e),a=N(t,n);return a&&r.push(a),r}(T,e.path,h)))})))),s.createElement(O,{overlay:t,separator:c,key:n||e.breadcrumbName},x(e,h,b,T))}))}else f&&(t=Object(u.a)(f).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(E.a)(e,{separator:c,key:t})):e})));var S=p()(A,o()({},"".concat(A,"-rtl"),"rtl"===k),d);return s.createElement("div",a()({className:S,style:l},v),t)};_.Item=O,_.Separator=v;var R=_;t.a=R},965:function(e,t,n){"use strict";var r=n(73),a=n(49);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(71)),o=r(n(2)),l=a(n(966)),i=a(n(80)),s=function(e,t){return o.createElement(i.default,(0,c.default)((0,c.default)({},e),{},{ref:t,icon:l.default}))};s.displayName="DownOutlined";var d=o.forwardRef(s);t.default=d},966:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}}}]);