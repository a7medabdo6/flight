(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1016:function(e,t,a){"use strict";var n=a(1),r=a(5),o=a(0),c=a.n(o),l=a(2),s=a(8),i=a(904),u=a(955),d=a(983),m=a(977),p=a(941),b=a(80),f=a(249),g=a(250),v=a(71),h=a(908),j=c.a.createElement(g.a,null),E=c.a.createElement(f.a,null),O=c.a.createElement(f.a,null),y=c.a.createElement(g.a,null),x=c.a.forwardRef(function(e,t){var a=e.backIconButtonProps,o=e.count,l=e.nextIconButtonProps,s=e.onChangePage,i=e.page,u=e.rowsPerPage,d=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),m=Object(v.a)();return c.a.createElement("div",Object(n.a)({ref:t},d),c.a.createElement(h.a,Object(n.a)({onClick:function(e){s(e,i-1)},disabled:0===i,color:"inherit"},a),"rtl"===m.direction?j:E),c.a.createElement(h.a,Object(n.a)({onClick:function(e){s(e,i+1)},disabled:i>=Math.ceil(o/u)-1,color:"inherit"},l),"rtl"===m.direction?O:y))}),w=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," of ").concat(n)},C=[10,25,50,100],N=c.a.forwardRef(function(e,t){var a,o=e.ActionsComponent,s=void 0===o?x:o,f=e.backIconButtonProps,g=e.classes,v=e.colSpan,h=e.component,j=void 0===h?m.a:h,E=e.count,O=e.labelDisplayedRows,y=void 0===O?w:O,N=e.labelRowsPerPage,P=void 0===N?"Rows per page:":N,k=e.nextIconButtonProps,S=e.onChangePage,R=e.onChangeRowsPerPage,A=e.page,I=e.rowsPerPage,z=e.rowsPerPageOptions,B=void 0===z?C:z,D=e.SelectProps,T=void 0===D?{}:D,G=Object(r.a)(e,["ActionsComponent","backIconButtonProps","classes","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);j!==m.a&&"td"!==j||(a=v||1e3);var H=T.native?"option":u.a;return c.a.createElement(j,Object(n.a)({className:g.root,colSpan:a,ref:t},G),c.a.createElement(p.a,{className:g.toolbar},c.a.createElement("div",{className:g.spacer}),B.length>1&&c.a.createElement(b.a,{color:"inherit",variant:"caption",className:g.caption},P),B.length>1&&c.a.createElement(d.a,Object(n.a)({classes:{select:g.select,icon:g.selectIcon},input:c.a.createElement(i.a,{className:Object(l.a)(g.input,g.selectRoot)}),value:I,onChange:R},T),B.map(function(e){return c.a.createElement(H,{className:g.menuItem,key:e,value:e},e)})),c.a.createElement(b.a,{color:"inherit",variant:"caption",className:g.caption},y({from:0===E?0:A*I+1,to:Math.min(E,(A+1)*I),count:E,page:A})),c.a.createElement(s,{className:g.actions,backIconButtonProps:f,count:E,nextIconButtonProps:k,onChangePage:S,page:A,rowsPerPage:I})))});t.a=Object(s.a)(function(e){return{root:{color:e.palette.text.secondary,fontSize:e.typography.pxToRem(12),"&:last-child":{padding:0}},toolbar:{height:56,minHeight:56,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{top:1},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}},{name:"MuiTablePagination"})(N)},1090:function(e,t,a){"use strict";var n=a(95),r=(a(0),a(38)),o=a(40),c=a(144),l=a(264),s=a(108),i=a.n(s),u=a(145),d=a(146),m=function(){var e=Object(u.a)(i.a.mark(function e(t,a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("daparture-airport");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}();a.d(t,"a",function(){return p});var p=function(e){var t=Object(r.c)();Object(o.a)();return Object(n.useQuery)("GetdapartureHook",m,{onSuccess:function(e){t(Object(l.a)(e))},onError:function(e){var t,a;Object(c.a)(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,"error")}})}},1091:function(e,t,a){"use strict";var n=a(95),r=(a(0),a(38)),o=a(40),c=a(144),l=a(108),s=a.n(l),i=a(145),u=a(146),d=function(){var e=Object(i.a)(s.a.mark(function e(t,a){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("city");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),m=a(263);a.d(t,"a",function(){return p});var p=function(e){var t=Object(r.c)();Object(o.a)();return Object(n.useQuery)("GetCityHook",d,{onSuccess:function(e){t(Object(m.a)(e))},onError:function(e){var t,a;Object(c.a)(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,"error")}})}},1336:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),o=a.n(r),c=a(457),l=a(33),s=a(20),i=a(9),u=a(2),d=a(963),m=a(953),p=a(70),b=Object(c.a)(function(){return{root:{}}}),f=function(e){var t=e.className,a=e.handleShow,n=(e.handleClose,Object(i.a)(e,["className","handleShow","handleClose"])),r=b();return o.a.createElement("div",Object.assign({},n,{className:Object(u.a)(r.root,t)}),o.a.createElement(d.a,{style:{position:"relative"},alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},o.a.createElement(d.a,{item:!0,style:{width:"100%"}},o.a.createElement("img",{style:{height:"150px",width:"100%",objectFit:"cover"},src:"/images/logos/travel41.jpg"})),o.a.createElement(d.a,{item:!0,style:{position:"absolute",right:"5px",marginBottom:"5px"}},o.a.createElement(m.a,{style:{backgroundColor:p.a.orange},onClick:a,color:"primary",variant:"contained"},"Add New AirPort"))))},g=a(41),v=a.n(g),h=a(903),j=a(976),E=a(943),O=a(958),y=a(947),x=a(944),w=a(974),C=a(978),N=a(977),P=a(975),k=a(959),S=a(1016),R=a(1e3),A=a(148),I=(a(109),a(38)),z=a(144),B=a(95),D=a(40),T=a(108),G=a.n(T),H=a(145),L=a(146),Q=function(){var e=Object(H.a)(G.a.mark(function e(t,a){var n;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.delete("daparture-airport/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),M=a(401),U=function(){var e=Object(H.a)(G.a.mark(function e(t){var a;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.patch("daparture-airport/".concat(t.id),t.data);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),J=a(402),_=Object(c.a)(function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}}),q=Object(h.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"white"},"&:nth-of-type(even)":{backgroundColor:"#E3E3E3"}}}})(j.a),F=function(e){var t=e.className,a=e.GetdapartureData,c=e.customers,l=Object(i.a)(e,["className","GetdapartureData","customers"]),d=_(),m=Object(r.useState)([]),b=Object(n.a)(m,2),f=b[0],g=(b[1],Object(r.useState)(0)),h=Object(n.a)(g,2),T=h[0],G=h[1],H=Object(r.useState)(10),L=Object(n.a)(H,2),F=L[0],W=L[1],K=Object(r.useState)(!1),V=Object(n.a)(K,2),X=V[0],Y=V[1],Z=function(){return Y(!1)},$=Object(r.useState)(),ee=Object(n.a)($,2),te=ee[0],ae=ee[1];console.log(te);var ne=function(e){var t=Object(I.c)(),a=(Object(D.a)(),Object(B.useQueryClient)());return Object(B.useMutation)(function(e){return Q(e)},{onSuccess:function(e){var n={status:e.status+"-"+e.statusText,headers:e.headers,data:e.data};console.log(n,"result"),t(Object(M.a)(n.data)),a.invalidateQueries("GetdapartureHook"),Object(z.a)("The AirPort  has been Deleted","success")},onError:function(e){var t,a;Object(z.a)(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,"error")}})}(),re=(ne.isLoading,ne.mutate),oe=(ne.isError,ne.error,ne.data);Object(I.d)(function(e){return e.DeletdapartureRedux}).DeletdapartureData;Object(r.useEffect)(function(){oe&&Z()},[oe]);var ce=Object(r.useState)(),le=Object(n.a)(ce,2),se=(le[0],le[1]),ie=Object(r.useState)(!1),ue=Object(n.a)(ie,2),de=ue[0],me=ue[1];console.log(de);var pe=function(){return me(!1)},be=Object(r.useState)(),fe=Object(n.a)(be,2),ge=fe[0],ve=fe[1],he=function(e){var t=Object(I.c)(),a=(Object(D.a)(),Object(B.useQueryClient)());return Object(B.useMutation)(function(e){return U(e)},{onSuccess:function(e){t(Object(J.a)(e)),a.invalidateQueries("GetdapartureHook"),Object(z.a)("The AirPort  has been Edite","success")},onError:function(e){var t,a;Object(z.a)(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,"error")}})}(),je=he.mutate,Ee=he.data,Oe=Object(I.d)(function(e){return e.EditedapartureRedux}),ye=Oe.EditedapartureData,xe=Oe.error;console.log(ye),Object(r.useEffect)(function(){Ee&&pe()},[Ee]);return console.log(oe),Object(r.useEffect)(function(){xe&&xe!==[]&&xe.map(function(e){return Object(z.a)(e,"error")})},[xe]),Object(r.useEffect)(function(){Ee&&Z()},[Ee]),o.a.createElement("div",Object.assign({},l,{className:Object(u.a)(d.root,t)}),o.a.createElement(R.a,{className:"",size:"sm",show:de,onHide:pe,"aria-labelledby":"example-modal-sizes-title-lg"},o.a.createElement(R.a.Header,{style:{padding:"0px"}},o.a.createElement(R.a.Title,{id:"example-modal-sizes-title-lg",className:"rounded-top ",style:{backgroundColor:p.a.purple,width:"100%"}},o.a.createElement("h4",{className:"ps-5 py-2",style:{color:"white"}},"Edite AirPort"))),o.a.createElement(R.a.Body,null,o.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column"},o.a.createElement("input",{onChange:function(e){ve(e.target.value.toUpperCase())},style:{borderRadius:"10px",backgroundColor:p.a.blue,width:"100%"},className:"form-control",type:"text",placeholder:"Name","aria-label":"default input example"}),o.a.createElement("div",{className:"d-flex justify-content-center align-items-center mt-3 "},o.a.createElement("button",{type:"button",className:"btn btn-secondary  px-5 ",onClick:function(){je({data:{name:ge},id:te})},style:{backgroundColor:p.a.purple,color:"white"}},"Edite"),o.a.createElement("button",{type:"button",className:"btn btn-secondary  px-5",onClick:pe,style:{backgroundColor:p.a.purple,color:"white"}},"Cancel"))))),o.a.createElement(R.a,{className:"",size:"sm",show:X,onHide:Z,"aria-labelledby":"example-modal-sizes-title-lg"},o.a.createElement(R.a.Header,{style:{padding:"0px"}},o.a.createElement(R.a.Title,{id:"example-modal-sizes-title-lg",className:"rounded-top ",style:{backgroundColor:p.a.purple,width:"100%"}},o.a.createElement("h4",{className:"ps-5 py-2",style:{color:"white"}},"Alert"))),o.a.createElement(R.a.Body,null,o.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},o.a.createElement("button",{type:"button",className:"btn btn-secondary  px-5 ",onClick:function(){return function(e){re(e)}(te)},style:{backgroundColor:p.a.purple,color:"white"}},"Delete"),o.a.createElement("button",{type:"button",className:"btn btn-secondary  px-5",onClick:Z,style:{backgroundColor:p.a.purple,color:"white"}},"Cancel")))),o.a.createElement(E.a,{style:{fontSize:"50px"}},o.a.createElement(O.a,{action:o.a.createElement(s.e,null),title:o.a.createElement("h2",{style:{marginTop:"0px",marginLeft:"0px"}},"AirPorts")}),o.a.createElement(y.a,null),o.a.createElement(x.a,{className:d.content},o.a.createElement(v.a,{style:{overflow:"auto"}},o.a.createElement("div",{className:d.inner},o.a.createElement(w.a,null,o.a.createElement(C.a,{style:{backgroundColor:p.a.purple}},o.a.createElement(j.a,{className:"shadowBox"},o.a.createElement(N.a,{style:{fontSize:"15px",color:"white"},className:"text-center"},"Name"),o.a.createElement(N.a,{style:{fontSize:"15px",color:"white"},className:"text-center"},"Created At"),o.a.createElement(N.a,{style:{fontSize:"15px",color:"white"},className:"text-center",align:"right"},"Actions"))),o.a.createElement(P.a,null,null===a||void 0===a?void 0:a.map(function(e){return o.a.createElement(q,{hover:!0,key:e.id,selected:-1!==f.indexOf(e.id)},o.a.createElement(N.a,{className:"text-center"},null===e||void 0===e?void 0:e.name),o.a.createElement(N.a,{className:"text-center"},null===e||void 0===e?void 0:e.created_at),o.a.createElement(N.a,{className:"text-center",align:"right"},o.a.createElement("i",{onClick:function(){return ae(null===e||void 0===e?void 0:e.id),Y(!0)},className:"fa-solid fa-trash-can m-1"}),o.a.createElement("i",{onClick:function(){return ae(null===e||void 0===e?void 0:e.id),se(e),me(!0)},className:"fa-solid fa-pen-to-square m-1"})))})))))),o.a.createElement(k.a,{className:d.actions},o.a.createElement(S.a,{component:"div",count:c.length,onChangePage:function(e,t){G(t)},onChangeRowsPerPage:function(e){W(e.target.value)},page:T,rowsPerPage:F,rowsPerPageOptions:[5,10,25]}))),o.a.createElement(s.v,{selected:f}),o.a.createElement(A.a,null))};F.defaultProps={customers:[]};var W=F,K=(a(461),a(1090)),V=function(){var e=Object(H.a)(G.a.mark(function e(t){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,L.a.post("daparture-airport",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),X=a(400),Y=a(1091),Z=Object(c.a)(function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)}}}),$=function(){var e=Z(),t=Object(r.useState)([]),a=Object(n.a)(t,2),c=a[0],i=a[1];Object(r.useEffect)(function(){var e=!0;return l.a.get("/api/management/customers").then(function(t){e&&i(t.data.customers)}),function(){e=!1}},[]);var u=Object(r.useState)(!1),d=Object(n.a)(u,2),m=d[0],b=d[1],g=function(){return b(!1)};console.log(m);Object(K.a)().data;var v=Object(I.d)(function(e){return e.GetdapartureRedux}).GetdapartureData;console.log(v);var h=Object(r.useState)(),j=Object(n.a)(h,2),E=j[0],O=j[1],y=function(e){var t=Object(I.c)(),a=(Object(D.a)(),Object(B.useQueryClient)());return Object(B.useMutation)(V,{onSuccess:function(e){var n={status:e.status+"-"+e.statusText,headers:e.headers,data:e.data};console.log(n,"result"),t(Object(X.a)(n.data)),Object(z.a)("The AirPort  has been created","success"),a.invalidateQueries("GetdapartureHook")},onError:function(e){var a,n,r={status:e.status+"-"+e.statusText,headers:e.headers,data:null===e||void 0===e?void 0:null===(a=e.response)||void 0===a?void 0:null===(n=a.data)||void 0===n?void 0:n.message};console.log(e),t(Object(X.c)(null===r||void 0===r?void 0:r.data)),Object(z.a)(r.data,"error")}})}(),x=(y.isLoading,y.mutate),w=(y.isError,y.error,y.data),C=Object(I.d)(function(e){return e.CreatedapartureRedux}),N=C.CreatedapartureData,P=C.error;console.log(N);var k=Object(r.useState)(),S=Object(n.a)(k,2),A=S[0],T=S[1];console.log(A);console.log(w),Object(r.useEffect)(function(){P&&P!==[]&&P.map(function(e){return Object(z.a)(e,"error")})},[P]),Object(r.useEffect)(function(){w&&g()},[w]);Object(Y.a)().data;var G=Object(I.d)(function(e){return e.GetCityRedux}).GetCityData;return console.log(G),o.a.createElement(s.k,{className:e.root,title:"Customer Management List"},o.a.createElement(R.a,{className:"",size:"sm",show:m,onHide:g,"aria-labelledby":"example-modal-sizes-title-lg"},o.a.createElement(R.a.Header,{style:{padding:"0px"}},o.a.createElement(R.a.Title,{id:"example-modal-sizes-title-lg",className:"rounded-top ",style:{backgroundColor:p.a.purple,width:"100%"}},o.a.createElement("h4",{className:"ps-5 py-2",style:{color:"white"}},"Add New AirPort"))),o.a.createElement(R.a.Body,null,o.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column"},o.a.createElement("input",{onChange:function(e){O(e.target.value.toUpperCase())},style:{borderRadius:"10px",backgroundColor:p.a.blue,width:"100%"},className:"form-control",type:"text",placeholder:"Name","aria-label":"default input example"}),o.a.createElement("select",{onChange:function(e){T(e.target.value.toUpperCase())},style:{borderRadius:"10px",backgroundColor:p.a.blue,width:"100%",marginTop:"20px"},className:"form-select border","aria-label":"Default select example"},o.a.createElement("option",{selected:!0,disabled:!0},"Open this select menu"),null===G||void 0===G?void 0:G.map(function(e,t){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)})),o.a.createElement("div",{className:"d-flex justify-content-center align-items-center mt-3 "},o.a.createElement("button",{type:"button",className:"btn btn-secondary  px-5 ",onClick:function(){x({name:E,city_id:+A})},style:{backgroundColor:p.a.purple,color:"white"}},"Add"),o.a.createElement("button",{type:"button",className:"btn btn-secondary  px-5",onClick:g,style:{backgroundColor:p.a.purple,color:"white"}},"Cancel"))))),o.a.createElement(f,{handleShow:function(){return b(!0)},handleClose:g}),c&&o.a.createElement(W,{className:e.results,customers:c,GetdapartureData:v}))};a.d(t,"default",function(){return $})}}]);
//# sourceMappingURL=29.f8f68d0c.chunk.js.map