(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[127],{1752:function(e,t,a){"use strict";a.r(t);var c=a(22),n=a(1132),s=a(950),i=a(951),r=a(1714),o=a(2),b=a(3),l=a(1179),j=a.n(l),d=a(86),u=a(14),p=function(e){var t={onClick:function(e,t){},title:{display:!0,text:Object(b.d)("common.contenuTheme")},tooltips:{mode:"label"},elements:{line:{fill:!1}},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},a=Object(o.useState)([0]),n=Object(c.a)(a,2),s=n[0],i=n[1],r=Object(o.useState)([0]),j=Object(c.a)(r,2),p=j[0],h=j[1],O=Object(o.useState)([""]),x=Object(c.a)(O,2),f=x[0],g=x[1],m=[0],y=[0],v=[""];Object(o.useEffect)((function(){d.a.list("","","","").then((function(e){e.count>0&&(e.rows.forEach((function(e){v.push(e.titre),y.push(e.publications.length)})),v.splice(0,1),y.splice(0,1),g(v),h(y))})),d.a.list("","","","").then((function(e){e.count>0&&(e.rows.forEach((function(e){m.push(e.evenements.length)})),m.splice(0,1),i(m))}))}),[]);var C={labels:f,datasets:[{type:"bar",label:Object(b.d)("entities.publication.menu"),backgroundColor:"rgba(197,029,052, 0.2)",borderColor:"rgba(197,029,052)",data:p,borderWidth:2,fill:!1},{type:"bar",label:Object(b.d)("entities.evenement.menu"),backgroundColor:"rgba(014,041,075, 0.2)",borderColor:"rgba(014,041,075)",data:s,borderWidth:2,fill:!1}]};return Object(u.jsx)(l.Bar,{data:C,options:t})},h=a(92),O=function(e){var t=Object(o.useState)([0]),a=Object(c.a)(t,2),n=a[0],s=a[1],i=Object(o.useState)([""]),r=Object(c.a)(i,2),j=r[0],d=r[1],p=Object(o.useState)([""]),O=Object(c.a)(p,2),x=O[0],f=O[1],g=[0],m=[""],y=[""],v=["#335C67","#FFF3B0","#E09F3E","#9E2A2B","#540B0E"];Object(o.useEffect)((function(){h.a.list("","","","").then((function(e){e.count>0&&(e.rows.forEach((function(t){m.push(t.title),g.push(t.publications.length);for(var a=0;a<=e.count;a++)v.map((function(e){return y.push(e)}))})),m.splice(0,1),g.splice(0,1),y.splice(0,1),d(m),s(g),f(y))}))}),[]);var C={responsive:!0,title:{display:!0,text:Object(b.d)("common.publicationTheme")},tooltips:{mode:"label"},elements:{line:{fill:!1}}},E={labels:j,datasets:[{data:n,backgroundColor:x,hoverBackgroundColor:x}]};return Object(u.jsx)(l.Doughnut,{data:E,options:C})},x=a(96),f=a(87),g=a(98),m=a(97),y=function(e){var t=Object(o.useState)(0),a=Object(c.a)(t,2),n=a[0],s=a[1],i=Object(o.useState)(0),r=Object(c.a)(i,2),b=r[0],l=r[1],d=Object(o.useState)(0),p=Object(c.a)(d,2),h=p[0],O=p[1],y=Object(o.useState)(0),v=Object(c.a)(y,2),C=v[0],E=v[1];Object(o.useEffect)((function(){m.a.list("","","","").then((function(e){s(e.count)})),f.a.list("","","","").then((function(e){l(e.count)})),x.a.list("","","","").then((function(e){O(e.count)})),g.a.list("","","","").then((function(e){E(e.count)}))}),[]);var S={labels:["DemandeAppui","Artiste","Publication","Evenement"],datasets:[{label:"Nombre d`entit\xe9s",barPercentage:.5,backgroundColor:["#AD4E47","#EC948B","#6C1B06","#C84462"],borderWidth:1,hoverBackgroundColor:["#AD4E47","#EC948B","#6C1B06","#C84462"],data:[n,b,h,C]}]};return Object(u.jsx)(j.a,{type:"bar",data:S,options:{legend:{display:!0},scales:{xAxes:[{display:!0}],yAxes:[{display:!0,ticks:{beginAtZero:!0}}]}}})},v=a(91),C=function(e){var t=Object(o.useState)([0]),a=Object(c.a)(t,2),n=a[0],s=a[1],i=Object(o.useState)([""]),r=Object(c.a)(i,2),j=r[0],d=r[1],p=Object(o.useState)([""]),h=Object(c.a)(p,2),O=h[0],x=h[1],f=[0],g=[""],m=["#264653","#2A9D8F","#E9C46A","#F4A261","#E76F51"],y=[""];Object(o.useEffect)((function(){v.a.list("","","","").then((function(e){if(e.count>0){e.rows.forEach((function(e){g.push(e.title),f.push(e.evenements.length)})),g.splice(0,1),f.splice(0,1);for(var t=0;t<=e.count;t++)m.map((function(e){return y.push(e)}));y.splice(0,1),d(g),s(f),x(y)}}))}),[]);var C={responsive:!0,title:{display:!0,text:Object(b.d)("common.evenementTheme")},tooltips:{mode:"label"},elements:{line:{fill:!1}}},E={labels:j,datasets:[{data:n,backgroundColor:O,hoverBackgroundColor:O}]};return Object(u.jsx)(l.Doughnut,{data:E,options:C})},E=a(1755),S=a.p+"static/media/1.bfa707e8.jpg",A=a.p+"static/media/2.c3b00891.jpg",k=a.p+"static/media/3.c5e4c5f5.jpg",w=a.p+"static/media/4.5e32eaa3.jpg",R=a.p+"static/media/5.8b19e8d3.jpg",B=a.p+"static/media/6.183ab834.jpg";t.default=function(e){var t=n.a.TabPane,a=Object(o.useState)(!1),l=Object(c.a)(a,2);l[0],l[1];return Object(u.jsxs)(n.a,{defaultActiveKey:"1",onChange:function(e){},children:[Object(u.jsx)(t,{tab:Object(b.d)("common.statistiques"),children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(s.a,{gutter:24,children:[Object(u.jsx)(i.a,{span:12,children:Object(u.jsx)(r.a,{bodyStyle:{padding:4},children:Object(u.jsx)(O,{})})}),Object(u.jsx)(i.a,{span:12,children:Object(u.jsx)(r.a,{bodyStyle:{padding:4},children:Object(u.jsx)(C,{})})})]}),Object(u.jsxs)(s.a,{style:{marginTop:"8px"},gutter:24,children:[Object(u.jsx)(i.a,{span:12,children:Object(u.jsx)(r.a,{bodyStyle:{padding:4},children:Object(u.jsx)(y,{})})}),Object(u.jsx)(i.a,{span:12,children:Object(u.jsx)(r.a,{bodyStyle:{padding:4},children:Object(u.jsx)(p,{})})})]})]})},"1"),Object(u.jsxs)(t,{tab:Object(b.d)("common.infographies"),children:[Object(u.jsxs)(s.a,{children:[Object(u.jsx)(i.a,{span:8,children:Object(u.jsx)(r.a,{style:{marginRight:"8px",borderRadius:"8px"},children:Object(u.jsx)(E.a,{width:"100%",src:S})})}),Object(u.jsx)(i.a,{span:8,children:Object(u.jsx)(r.a,{style:{marginRight:"8px",borderRadius:"8px"},children:Object(u.jsx)(E.a,{width:"100%",src:A})})}),Object(u.jsx)(i.a,{span:8,children:Object(u.jsx)(r.a,{style:{marginRight:"8px",borderRadius:"8px"},children:Object(u.jsx)(E.a,{width:"100%",src:k})})})]}),Object(u.jsxs)(s.a,{children:[Object(u.jsx)(i.a,{span:8,children:Object(u.jsx)(r.a,{style:{marginRight:"8px",borderRadius:"8px"},children:Object(u.jsx)(E.a,{width:"100%",src:w})})}),Object(u.jsx)(i.a,{span:8,children:Object(u.jsx)(r.a,{style:{marginRight:"8px",borderRadius:"8px"},children:Object(u.jsx)(E.a,{width:"100%",src:R})})}),Object(u.jsx)(i.a,{span:8,children:Object(u.jsx)(r.a,{style:{marginRight:"8px",borderRadius:"8px"},children:Object(u.jsx)(E.a,{width:"100%",src:B})})})]})]},"2")]})}}}]);