(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1050:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(17)).default)(l.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=r},1259:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(17)).default)(l.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");a.default=r},1360:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t(0),r=t.n(l),c=t(465),m=t(977),o=t(33),u=t(20),i=t(9),s=t(2),d=t(6),E=t(79),f=t(967),p=t(1259),v=t.n(p),g=Object(c.a)(function(e){return{root:{},toolbar:{"& > * + *":{marginLeft:e.spacing(1)}},deleteButton:{color:e.palette.white,backgroundColor:d.a.red[600],"&:hover":{backgroundColor:d.a.red[900]}},deleteIcon:{marginRight:e.spacing(1)}}}),b=function(e){var a=e.order,t=e.className,n=Object(i.a)(e,["order","className"]),l=g();return r.a.createElement("div",Object.assign({},n,{className:Object(s.a)(l.root,t)}),r.a.createElement(m.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(m.a,{item:!0},r.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Orders"),r.a.createElement(E.a,{component:"h1",variant:"h3"},"Order #",a.id.split("-").shift())),r.a.createElement(m.a,{item:!0},r.a.createElement(f.a,{className:l.deleteButton,variant:"contained"},r.a.createElement(v.a,{className:l.deleteIcon}),"Delete"))))},O=t(21),j=t(4),h=t.n(j),N=t(957),y=t(972),M=t(961),C=t(958),D=t(989),w=t(990),x=t(991),I=t(992),k=t(963),R=t(996),S=t(973),_=t(1050),z=t.n(_),B=t(205),H=t.n(B),L=Object(c.a)(function(e){return{root:{},content:{padding:0},actions:{flexDirection:"column",alignItems:"flex-start","& > * + *":{marginLeft:0}},buttonIcon:{marginRight:e.spacing(1)}}}),P=function(e){var a=e.order,t=e.className,c=Object(i.a)(e,["order","className"]),m=L(),o=["Canceled","Completed","Rejected"],u=Object(l.useState)(o[0]),d=Object(n.a)(u,2),E=d[0],p=d[1];return r.a.createElement(N.a,Object.assign({},c,{className:Object(s.a)(m.root,t)}),r.a.createElement(y.a,{title:"Order info"}),r.a.createElement(M.a,null),r.a.createElement(C.a,{className:m.content},r.a.createElement(D.a,null,r.a.createElement(w.a,null,r.a.createElement(x.a,null,r.a.createElement(I.a,null,"Customer"),r.a.createElement(I.a,null,r.a.createElement(k.a,{component:O.a,to:"/management/customers/1"},a.customer.name),r.a.createElement("div",null,a.customer.address),r.a.createElement("div",null,a.customer.city),r.a.createElement("div",null,a.customer.country))),r.a.createElement(x.a,{selected:!0},r.a.createElement(I.a,null,"ID"),r.a.createElement(I.a,null,"#",a.id.split("-").shift())),r.a.createElement(x.a,null,r.a.createElement(I.a,null,"Ref"),r.a.createElement(I.a,null,a.ref)),r.a.createElement(x.a,{selected:!0},r.a.createElement(I.a,null,"Date"),r.a.createElement(I.a,null,h()(a.created_at).format("DD/MM/YYYY HH:MM"))),r.a.createElement(x.a,null,r.a.createElement(I.a,null,"Promotion Code"),r.a.createElement(I.a,null,a.promoCode?a.promoCode:"N/A")),r.a.createElement(x.a,{selected:!0},r.a.createElement(I.a,null,"Amount"),r.a.createElement(I.a,null,a.currency,a.value)),r.a.createElement(x.a,null,r.a.createElement(I.a,null,"Status"),r.a.createElement(I.a,null,r.a.createElement(R.a,{fullWidth:!0,name:"option",onChange:function(e){e.persist(),p(e.target.value)},select:!0,SelectProps:{native:!0},value:E,variant:"outlined"},o.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))))))),r.a.createElement(S.a,{className:m.actions},r.a.createElement(f.a,null,r.a.createElement(z.a,{className:m.buttonIcon}),"Edit"),r.a.createElement(f.a,null,r.a.createElement(H.a,{className:m.buttonIcon}),"Resend invoice")))},Y=t(41),A=t.n(Y),V=t(993),J=Object(c.a)(function(){return{root:{},content:{padding:0},inner:{minWidth:700}}}),W=function(e){var a=e.order,t=e.className,n=Object(i.a)(e,["order","className"]),l=J();return r.a.createElement(N.a,Object.assign({},n,{className:Object(s.a)(l.root,t)}),r.a.createElement(y.a,{title:"Order items"}),r.a.createElement(M.a,null),r.a.createElement(C.a,{className:l.content},r.a.createElement(A.a,null,r.a.createElement("div",{className:l.inner},r.a.createElement(D.a,null,r.a.createElement(V.a,null,r.a.createElement(x.a,null,r.a.createElement(I.a,null,"Description"),r.a.createElement(I.a,null,"Billing Cycle"),r.a.createElement(I.a,null,"Status"),r.a.createElement(I.a,null,"Amount"))),r.a.createElement(w.a,null,a.items.map(function(e){return r.a.createElement(x.a,{key:e.id},r.a.createElement(I.a,null,e.name," x ",e.cuantity),r.a.createElement(I.a,null,e.billing),r.a.createElement(I.a,null,e.status),r.a.createElement(I.a,null,e.currency,e.value))})))))))},T=Object(c.a)(function(e){return{root:{padding:e.spacing(3)},container:{marginTop:e.spacing(3)}}}),q=function(){var e=T(),a=Object(l.useState)(null),t=Object(n.a)(a,2),c=t[0],i=t[1];return Object(l.useEffect)(function(){var e=!0;return o.a.get("/api/orders/1").then(function(a){e&&i(a.data.order)}),function(){e=!1}},[]),c?r.a.createElement(u.k,{className:e.root,title:"Order Management Details"},r.a.createElement(b,{order:c}),r.a.createElement(m.a,{className:e.container,container:!0,spacing:3},r.a.createElement(m.a,{item:!0,md:4,xl:3,xs:12},r.a.createElement(P,{order:c})),r.a.createElement(m.a,{item:!0,md:8,xl:9,xs:12},r.a.createElement(W,{order:c})))):null};t.d(a,"default",function(){return q})}}]);
//# sourceMappingURL=32.f90719bb.chunk.js.map