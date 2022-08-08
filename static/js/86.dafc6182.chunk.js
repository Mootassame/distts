(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[86],{1020:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a,r=n(216),c=n(217).a.div(a||(a=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1024:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(22),r=n(1),c=n(4),i=n(11),s=n(12),o=n(1028),u=n.n(o),l=n(3),d=n(9),b=n(1029),j=n(8),f=n(362),m=n.n(f),p=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(l.d)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(l.d)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var n=O(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(l.d)("fileUploader.formats",t.formats.join(", ")))}}},{key:"uploadFromRequest",value:function(){var e=Object(c.a)(Object(r.a)().mark((function e(t,n,a,c){var i,s,o,u=this;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t.file,n),e.next=9;break;case 4:return e.prev=4,e.t0=e.catch(0),t.onError(e.t0),c(e.t0),e.abrupt("return");case 9:i=O(t.file.name),s=Object(b.v4)(),o="".concat(s,".").concat(i),this.fetchFileCredentials(o,n).then((function(e){var n=e.uploadCredentials,r=e.downloadUrl,c=e.privateUrl;return u.uploadToServer(t.file,n).then((function(){t.onSuccess(),a({id:s,name:t.file.name,sizeInBytes:t.file.size,publicUrl:n&&n.publicUrl?n.publicUrl:null,privateUrl:c,downloadUrl:r,new:!0})}))})).catch((function(e){t.onError(e),c(e)}));case 13:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(c.a)(Object(r.a)().mark((function e(t,n){var a,c,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.get(),e.next=3,d.a.get("/tenant/".concat(a,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return c=e.sent,i=c.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(c.a)(Object(r.a)().mark((function e(t,n){var c,i,s,o,u,l,d;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c=n.url,i=new FormData,n.fields)for(s=0,o=Object.entries(n.fields||{});s<o.length;s++)u=Object(a.a)(o[s],2),l=u[0],d=u[1],i.append(l,d);return i.append("file",t),e.abrupt("return",m.a.post(c,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function O(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},1027:function(e,t,n){"use strict";var a=n(19),r=n(22),c=n(2),i=n(243),s=n(1105),o=n(1106),u=n(1077),l=n(1024),d=n(6),b=n(3),j=n(14);t.a=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),f=n[0],m=n[1],p=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},O=function(){return p().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl,type:e.type,size:e.size}}))},h=function(e){console.error(e),m(!1),d.a.showMessage(e)},v=e.max,x=e.readonly,g=Object(j.jsxs)(i.a,{children:[f?Object(j.jsx)(o.a,{}):Object(j.jsx)(u.a,{}),Object(b.d)("fileUploader.upload")]});return Object(j.jsx)(s.a,{accept:function(){var t=e.schema;if(t&&t.formats)return t.formats.join(", ")}(),fileList:O(),disabled:x,customRequest:function(t){l.a.uploadFromRequest(t,{storage:e.storage,formats:e.formats},(function(t){!function(t){m(!1),e.onChange([].concat(Object(a.a)(p()),[t]))}(t)}),(function(e){h(e)}))},onChange:function(t){var n;t&&t.file&&t.file.status&&("removed"===t.file.status?(n=t.file.uid,e.onChange(p().filter((function(e){return e.id!==n})))):m(!0))},beforeUpload:function(t){try{return l.a.validate(t,{storage:e.storage,formats:e.formats}),!0}catch(n){return h(n),!1}},children:x||v&&O().length>=v?null:g})}},1081:function(e,t,n){"use strict";var a=n(5),r=n(38),c=n(84),i=n(218),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.thematiqueRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.thematiqueEdit)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.thematiqueCreate)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.thematiqueImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.thematiqueDestroy)})),selectPermissionToImport:l};t.a=d},1113:function(e,t,n){"use strict";var a=n(5),r=n(38),c=n(84),i=n(218),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryPublicationRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryPublicationEdit)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryPublicationCreate)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryPublicationImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.categoryPublicationDestroy)})),selectPermissionToImport:l};t.a=d},1129:function(e,t,n){"use strict";var a,r=n(216),c=(n(2),n(1027)),i=n(217),s=n(14),o=i.a.span(a||(a=Object(r.a)(["\n  .anticon-close {\n    display: none;\n  }\n"])));t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return t().length?Object(s.jsx)(o,{children:Object(s.jsx)(c.a,{readonly:!0,value:t()})}):null}},1194:function(e,t,n){"use strict";var a=n(5),r={selectLoading:Object(a.a)([function(e){return e.publication.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1195:function(e,t,n){"use strict";var a=n(5),r=n(38),c=n(84),i=n(218),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.publicationRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.publicationEdit)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.publicationCreate)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.publicationImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:u,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.publicationDestroy)})),selectPermissionToImport:l};t.a=d},1254:function(e,t,n){"use strict";n(2);var a=n(114),r=n(41),c=n(1081),i=n(14);t.a=function(e){var t=Object(r.e)(c.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(i.jsx)(i.Fragment,{children:n().map((function(e){return n=e,t?Object(i.jsx)("div",{children:Object(i.jsx)(a.a,{to:"/thematique/".concat(n.id),children:n.titre})},n.id):Object(i.jsx)("div",{children:n.titre},n.id);var n}))}):null}},1763:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(41),c=n(35),i=n(3),s=n(284),o=n(5),u=function(e){return e.publication.view},l=Object(o.a)([u],(function(e){return e.record})),d={selectLoading:Object(o.a)([u],(function(e){return Boolean(e.loading)})),selectRecord:l,selectRaw:u},b=n(0),j=n(929),f=n(1020),m=n(1750),p=n(1129),O=n(1254),h=n(114),v=n(1113),x=n(14),g=function(e){var t=Object(r.e)(v.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(x.jsx)(x.Fragment,{children:n().map((function(e){return n=e,t?Object(x.jsx)("div",{children:Object(x.jsx)(h.a,{to:"/category-publication/".concat(n.id),children:n.title})},n.id):Object(x.jsx)("div",{children:n.title},n.id);var n}))}):null},y=function(e){var t=e.record;return e.loading||!t?Object(x.jsx)(j.a,{}):Object(x.jsx)(f.a,{children:Object(x.jsxs)("fieldset",{children:[Object(x.jsx)("legend",{children:Object(i.d)("common.informations")}),Boolean(t.thematique)&&Object(x.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(i.d)("entities.publication.fields.thematique"),children:Object(x.jsx)(O.a,{value:t.thematique})})),Boolean(t.category)&&Object(x.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(i.d)("entities.publication.fields.categorie"),children:Object(x.jsx)(g,{value:t.category})})),Boolean(t.type)&&Object(x.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(i.d)("entities.publication.fields.type"),children:Object(i.d)("entities.publication.enumerators.type.".concat(t.type))})),Boolean(t.description)&&Object(x.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(i.d)("entities.publication.fields.description"),children:t.description})),Boolean(t.statut)&&Object(x.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(i.d)("entities.publication.fields.statut"),children:Object(i.d)("entities.publication.enumerators.statut.".concat(t.statut))})),Boolean(t.date)&&Object(x.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(i.d)("entities.publication.fields.date"),children:t.date})),Boolean(t.supports)&&Boolean(t.supports.length)&&Object(x.jsx)(m.a.Item,Object(b.a)(Object(b.a)({},f.b),{},{label:Object(i.d)("entities.publication.fields.supports"),children:Object(x.jsx)(p.a,{value:t.supports})}))]})})},C=n(865),w=n(245),T=n(243),U=n(953),P=n(160),I=n(1195),R=n(197),B=n(1194),q=n(892),E=function(e){var t=Object(r.d)(),n=Object(c.h)(),a=Object(r.e)(P.a.selectPermissionToRead),s=Object(r.e)(I.a.selectPermissionToEdit),o=Object(r.e)(I.a.selectPermissionToDestroy),u=Object(r.e)(B.a.selectLoading),l=n.params.id;return Object(x.jsxs)(q.a,{children:[s&&Object(x.jsx)(h.a,{to:"/publication/".concat(l,"/edit"),children:Object(x.jsx)(w.a,{title:Object(i.d)("common.edit"),children:Object(x.jsx)(T.a,{type:"primary",children:Object(x.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),o&&Object(x.jsx)(U.a,{title:Object(i.d)("common.areYouSure"),onConfirm:function(){t(R.a.doDestroy(l))},okText:Object(i.d)("common.yes"),cancelText:Object(i.d)("common.no"),children:Object(x.jsx)(w.a,{title:Object(i.d)("common.destroy"),children:Object(x.jsx)(T.a,{type:"primary",disabled:u,children:Object(x.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(x.jsx)(h.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(x.jsx)(T.a,{icon:Object(x.jsx)(C.a,{}),children:Object(i.d)("auditLog.menu")})})]})},k=n(879),z=n(880),A=n(874),D=n(950),F=n(951);t.default=function(e){var t=Object(r.d)(),n=Object(c.h)(),o=Object(r.e)(d.selectLoading),u=Object(r.e)(d.selectRecord);return Object(a.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z.a,{items:[[Object(i.d)("dashboard.menu"),"/"],[Object(i.d)("entities.publication.menu"),"/publication"],[Object(i.d)("entities.publication.view.title")]]}),Object(x.jsxs)(k.a,{children:[Object(x.jsxs)(D.a,{children:[Object(x.jsx)(F.a,{span:16,children:Object(x.jsx)(A.a,{children:Object(i.d)("entities.publication.view.title")})}),Object(x.jsx)(F.a,{span:8,style:{textAlign:"end"},children:Object(x.jsx)(E,{match:n})})]}),Object(x.jsx)(y,{loading:o,record:u})]})]})}},874:function(e,t,n){"use strict";var a,r=n(216),c=n(217).a.h1(a||(a=Object(r.a)(["\n  margin-bottom: 36px;\n"])));t.a=c},879:function(e,t,n){"use strict";var a,r=n(216),c=n(217).a.div(a||(a=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=c},880:function(e,t,n){"use strict";var a=n(952),r=(n(2),n(114)),c=n(14);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},892:function(e,t,n){"use strict";var a,r=n(216),c=n(217).a.div(a||(a=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=c},929:function(e,t,n){"use strict";var a=n(893),r=(n(2),n(14));t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}}}]);