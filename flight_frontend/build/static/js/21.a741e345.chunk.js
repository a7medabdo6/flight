(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1226:function(e,a,t){"use strict";t.r(a);var n=t(16),c=t(0),o=t.n(c),r=t(831),l=t(29),i=t(18),s=t(9),m=t(2),u=t(879),d=t(70),p=t(869),g=Object(r.a)(function(){return{root:{}}}),h=function(e){var a=e.className,t=Object(s.a)(e,["className"]),n=g();return o.a.createElement("div",Object.assign({},t,{className:Object(m.a)(n.root,a)}),o.a.createElement(u.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},o.a.createElement(u.a,{item:!0},o.a.createElement(d.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Management"),o.a.createElement(d.a,{component:"h1",variant:"h3"},"Customers")),o.a.createElement(u.a,{item:!0},o.a.createElement(p.a,{color:"primary",variant:"contained"},"Add Flighing"))))},E=t(20),b=t(35),v=t.n(b),f=t(859),P=t(874),O=t(863),j=t(860),k=t(890),y=t(894),w=t(892),x=t(893),C=t(928),I=t(891),N=t(608),R=t(865),S=t(875),B=t(998),M=t(96),z=Object(r.a)(function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}}),L=function(e){var a=e.className,t=e.customers,r=Object(s.a)(e,["className","customers"]),l=z(),u=Object(c.useState)([]),g=Object(n.a)(u,2),h=g[0],b=g[1],L=Object(c.useState)(0),A=Object(n.a)(L,2),H=A[0],V=A[1],T=Object(c.useState)(10),$=Object(n.a)(T,2),D=$[0],F=$[1];return o.a.createElement("div",Object.assign({},r,{className:Object(m.a)(l.root,a)}),o.a.createElement(d.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},t.length," Records found. Page ",H+1," of"," ",Math.ceil(t.length/D)),o.a.createElement(f.a,null,o.a.createElement(P.a,{action:o.a.createElement(i.e,null),title:"All customers"}),o.a.createElement(O.a,null),o.a.createElement(j.a,{className:l.content},o.a.createElement(v.a,null,o.a.createElement("div",{className:l.inner},o.a.createElement(k.a,null,o.a.createElement(y.a,null,o.a.createElement(w.a,null,o.a.createElement(x.a,{padding:"checkbox"},o.a.createElement(C.a,{checked:h.length===t.length,color:"primary",indeterminate:h.length>0&&h.length<t.length,onChange:function(e){var a=e.target.checked?t.map(function(e){return e.id}):[];b(a)}})),o.a.createElement(x.a,null,"Name"),o.a.createElement(x.a,null,"Location"),o.a.createElement(x.a,null,"Money spent"),o.a.createElement(x.a,null,"Type"),o.a.createElement(x.a,null,"Projects held"),o.a.createElement(x.a,null,"Reviews"),o.a.createElement(x.a,{align:"right"},"Actions"))),o.a.createElement(I.a,null,t.slice(0,D).map(function(e){return o.a.createElement(w.a,{hover:!0,key:e.id,selected:-1!==h.indexOf(e.id)},o.a.createElement(x.a,{padding:"checkbox"},o.a.createElement(C.a,{checked:-1!==h.indexOf(e.id),color:"primary",onChange:function(a){return function(e,a){var t=h.indexOf(a),n=[];-1===t?n=n.concat(h,a):0===t?n=n.concat(h.slice(1)):t===h.length-1?n=n.concat(h.slice(0,-1)):t>0&&(n=n.concat(h.slice(0,t),h.slice(t+1))),b(n)}(0,e.id)},value:-1!==h.indexOf(e.id)})),o.a.createElement(x.a,null,o.a.createElement("div",{className:l.nameCell},o.a.createElement(N.a,{className:l.avatar,src:e.avatar},Object(M.a)(e.name)),o.a.createElement("div",null,o.a.createElement(R.a,{color:"inherit",component:E.a,to:"/management/customers/1",variant:"h6"},e.name),o.a.createElement("div",null,e.email)))),o.a.createElement(x.a,null,e.location),o.a.createElement(x.a,null,e.currency,e.spent),o.a.createElement(x.a,null,e.type),o.a.createElement(x.a,null,e.projects),o.a.createElement(x.a,null,o.a.createElement(i.p,{value:e.rating})),o.a.createElement(x.a,{align:"right"},o.a.createElement(p.a,{color:"primary",component:E.a,size:"small",to:"/management/customers/1",variant:"outlined"},"View")))})))))),o.a.createElement(S.a,{className:l.actions},o.a.createElement(B.a,{component:"div",count:t.length,onChangePage:function(e,a){V(a)},onChangeRowsPerPage:function(e){F(e.target.value)},page:H,rowsPerPage:D,rowsPerPageOptions:[5,10,25]}))),o.a.createElement(i.v,{selected:h}))};L.defaultProps={customers:[]};var A=L,H=Object(r.a)(function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)}}}),V=function(){var e=H(),a=Object(c.useState)([]),t=Object(n.a)(a,2),r=t[0],s=t[1];Object(c.useEffect)(function(){var e=!0;return l.a.get("/api/management/customers").then(function(a){e&&s(a.data.customers)}),function(){e=!1}},[]);return o.a.createElement(i.k,{className:e.root,title:"Customer Management List"},o.a.createElement(h,null),o.a.createElement(i.s,{onFilter:function(){},onSearch:function(){}}),r&&o.a.createElement(A,{className:e.results,customers:r}))};t.d(a,"default",function(){return V})},928:function(e,a,t){"use strict";var n=t(1),c=t(5),o=t(0),r=t.n(o),l=t(2),i=t(220),s=t(42),m=Object(s.a)(r.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(s.a)(r.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(15),p=Object(s.a)(r.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=t(12),h=t(8),E=r.a.createElement(u,null),b=r.a.createElement(m,null),v=r.a.createElement(p,null),f=r.a.forwardRef(function(e,a){var t=e.checkedIcon,o=void 0===t?E:t,s=e.classes,m=e.color,u=void 0===m?"secondary":m,d=e.icon,p=void 0===d?b:d,h=e.indeterminate,f=void 0!==h&&h,P=e.indeterminateIcon,O=void 0===P?v:P,j=e.inputProps,k=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return r.a.createElement(i.a,Object(n.a)({type:"checkbox",checkedIcon:f?O:o,classes:{root:Object(l.a)(s.root,s["color".concat(Object(g.a)(u))],f&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":f},j),icon:f?O:p,ref:a},k))});a.a=Object(h.a)(function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}},{name:"MuiCheckbox"})(f)},998:function(e,a,t){"use strict";var n=t(1),c=t(5),o=t(0),r=t.n(o),l=t(2),i=t(8),s=t(824),m=t(871),u=t(899),d=t(893),p=t(857),g=t(70),h=t(225),E=t(226),b=t(68),v=t(828),f=r.a.createElement(E.a,null),P=r.a.createElement(h.a,null),O=r.a.createElement(h.a,null),j=r.a.createElement(E.a,null),k=r.a.forwardRef(function(e,a){var t=e.backIconButtonProps,o=e.count,l=e.nextIconButtonProps,i=e.onChangePage,s=e.page,m=e.rowsPerPage,u=Object(c.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),d=Object(b.a)();return r.a.createElement("div",Object(n.a)({ref:a},u),r.a.createElement(v.a,Object(n.a)({onClick:function(e){i(e,s-1)},disabled:0===s,color:"inherit"},t),"rtl"===d.direction?f:P),r.a.createElement(v.a,Object(n.a)({onClick:function(e){i(e,s+1)},disabled:s>=Math.ceil(o/m)-1,color:"inherit"},l),"rtl"===d.direction?O:j))}),y=function(e){var a=e.from,t=e.to,n=e.count;return"".concat(a,"-").concat(t," of ").concat(n)},w=[10,25,50,100],x=r.a.forwardRef(function(e,a){var t,o=e.ActionsComponent,i=void 0===o?k:o,h=e.backIconButtonProps,E=e.classes,b=e.colSpan,v=e.component,f=void 0===v?d.a:v,P=e.count,O=e.labelDisplayedRows,j=void 0===O?y:O,x=e.labelRowsPerPage,C=void 0===x?"Rows per page:":x,I=e.nextIconButtonProps,N=e.onChangePage,R=e.onChangeRowsPerPage,S=e.page,B=e.rowsPerPage,M=e.rowsPerPageOptions,z=void 0===M?w:M,L=e.SelectProps,A=void 0===L?{}:L,H=Object(c.a)(e,["ActionsComponent","backIconButtonProps","classes","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);f!==d.a&&"td"!==f||(t=b||1e3);var V=A.native?"option":m.a;return r.a.createElement(f,Object(n.a)({className:E.root,colSpan:t,ref:a},H),r.a.createElement(p.a,{className:E.toolbar},r.a.createElement("div",{className:E.spacer}),z.length>1&&r.a.createElement(g.a,{color:"inherit",variant:"caption",className:E.caption},C),z.length>1&&r.a.createElement(u.a,Object(n.a)({classes:{select:E.select,icon:E.selectIcon},input:r.a.createElement(s.a,{className:Object(l.a)(E.input,E.selectRoot)}),value:B,onChange:R},A),z.map(function(e){return r.a.createElement(V,{className:E.menuItem,key:e,value:e},e)})),r.a.createElement(g.a,{color:"inherit",variant:"caption",className:E.caption},j({from:0===P?0:S*B+1,to:Math.min(P,(S+1)*B),count:P,page:S})),r.a.createElement(i,{className:E.actions,backIconButtonProps:h,count:P,nextIconButtonProps:I,onChangePage:N,page:S,rowsPerPage:B})))});a.a=Object(i.a)(function(e){return{root:{color:e.palette.text.secondary,fontSize:e.typography.pxToRem(12),"&:last-child":{padding:0}},toolbar:{height:56,minHeight:56,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{top:1},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}},{name:"MuiTablePagination"})(x)}}]);
//# sourceMappingURL=21.a741e345.chunk.js.map