(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1014:function(e,t,a){"use strict";var n=a(1),l=a(5),r=a(0),c=a.n(r),o=a(2),i=a(246),s=a(49),u=Object(s.a)(c.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(c.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=a(17),p=Object(s.a)(c.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),v=a(14),b=a(8),E=c.a.createElement(d,null),f=c.a.createElement(u,null),g=c.a.createElement(p,null),h=c.a.forwardRef(function(e,t){var a=e.checkedIcon,r=void 0===a?E:a,s=e.classes,u=e.color,d=void 0===u?"secondary":u,m=e.icon,p=void 0===m?f:m,b=e.indeterminate,h=void 0!==b&&b,j=e.indeterminateIcon,y=void 0===j?g:j,x=e.inputProps,O=Object(l.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return c.a.createElement(i.a,Object(n.a)({type:"checkbox",checkedIcon:h?y:r,classes:{root:Object(o.a)(s.root,s["color".concat(Object(v.a)(d))],h&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":h},x),icon:h?y:p,ref:t},O))});t.a=Object(b.a)(function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}},{name:"MuiCheckbox"})(h)},1021:function(e,t,a){"use strict";var n=a(95),l=(a(0),a(38)),r=a(40),c=a(108),o=a.n(c),i=a(145),s=a(146),u=function(){var e=Object(i.a)(o.a.mark(function e(t,a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("flight");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),d=a(256),m=a(144);a.d(t,"a",function(){return p});var p=function(e){var t=Object(l.c)();Object(r.a)();return Object(n.useQuery)("GetFlightHook",u,{onSuccess:function(e){t(Object(d.a)(e))},onError:function(e){var t,a;Object(m.a)(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,"error")}})}},1040:function(e,t,a){"use strict";a(0);var n=a(95),l=a(38),r=a(40),c=a(144),o=a(108),i=a.n(o),s=a(145),u=a(146),d=function(){var e=Object(s.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,u.a.post("Seat",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),m=a(261);a.d(t,"a",function(){return p});var p=function(e){var t=Object(l.c)(),a=(Object(r.a)(),Object(n.useQueryClient)());return Object(n.useMutation)(d,{onSuccess:function(e){var n={status:e.status+"-"+e.statusText,headers:e.headers,data:e.data};console.log(n,"result"),t(Object(m.a)(n.data)),Object(c.a)("The Seat  has been created","success"),a.invalidateQueries("GetSeatHook")},onError:function(e){var a,n,l={status:e.status+"-"+e.statusText,headers:e.headers,data:null===e||void 0===e?void 0:null===(a=e.response)||void 0===a?void 0:null===(n=a.data)||void 0===n?void 0:n.message};console.log(e),t(Object(m.c)(null===l||void 0===l?void 0:l.data)),Object(c.a)(l.data,"error")}})}},1069:function(e,t,a){"use strict";var n=a(15),l=a(1021),r=a(1040),c=a(0),o=a.n(c),i=a(1048),s=a.n(i),u=a(38);t.a=function(e){var t,a,i=e.customersData,d=e.handelhidesm;console.log(i);var m=Object(c.useState)(null===i||void 0===i?void 0:i.airlines),p=Object(n.a)(m,2),v=p[0],b=(p[1],Object(c.useState)(null===i||void 0===i?void 0:i.seat_price_company)),E=Object(n.a)(b,2),f=E[0],g=(E[1],Object(c.useState)(null===i||void 0===i?void 0:i.seat_price_enduser)),h=Object(n.a)(g,2),j=h[0],y=(h[1],Object(c.useState)(null===i||void 0===i?void 0:i.arrival_date)),x=Object(n.a)(y,2),O=x[0],N=(x[1],Object(c.useState)(null===i||void 0===i?void 0:i.departure_date)),S=Object(n.a)(N,2),w=S[0],T=(S[1],Object(c.useState)(null===i||void 0===i?void 0:i.total_seat_number)),C=Object(n.a)(T,2),k=C[0],R=(C[1],Object(c.useState)(null===i||void 0===i?void 0:i.available_seats)),_=Object(n.a)(R,2),A=_[0],z=(_[1],Object(c.useState)(null===i||void 0===i?void 0:i.departure_airport)),D=Object(n.a)(z,2),F=D[0],M=(D[1],Object(c.useState)(null===i||void 0===i?void 0:i.arrival_airport)),I=Object(n.a)(M,2),P=I[0],B=(I[1],Object(c.useState)(null===i||void 0===i?void 0:i.departure_time)),G=Object(n.a)(B,2),H=(G[0],G[1],Object(c.useState)(null===i||void 0===i?void 0:i.arrival_time)),L=Object(n.a)(H,2),W=L[0],Q=(L[1],Object(c.useState)(null===i||void 0===i?void 0:i.duration)),J=Object(n.a)(Q,2),V=J[0],$=(J[1],Object(c.useState)(null===i||void 0===i?void 0:i.weight)),q=Object(n.a)($,2),K=q[0],U=(q[1],Object(c.useState)(null===i||void 0===i?void 0:i.suppliers)),X=Object(n.a)(U,2),Y=X[0],Z=(X[1],Object(c.useState)(null===i||void 0===i?void 0:i.airlines)),ee=Object(n.a)(Z,2),te=(ee[0],ee[1],Object(c.useState)(null===i||void 0===i?void 0:null===(t=i.flight)||void 0===t?void 0:t.flight_number)),ae=Object(n.a)(te,2),ne=ae[0],le=(ae[1],Object(c.useState)(null===i||void 0===i?void 0:null===(a=i.flight)||void 0===a?void 0:a.id)),re=Object(n.a)(le,2),ce=re[0];re[1];console.log(ne);var oe=Object(c.useState)(),ie=Object(n.a)(oe,2),se=(ie[0],ie[1],new Date),ue=new Date;ue.setDate(ue.getDate()+1);var de=Object(c.useState)([se]),me=Object(n.a)(de,2),pe=me[0],ve=me[1],be=null===pe||void 0===pe?void 0:pe.map(function(e){var t;return"".concat(null===e||void 0===e?void 0:e.day,"-").concat(null===e||void 0===e?void 0:null===(t=e.month)||void 0===t?void 0:t.number,"-").concat(null===e||void 0===e?void 0:e.year)});console.log(be);var Ee=Object(c.useRef)();Object(c.useEffect)(function(){Ee.current.openCalendar()},[]);var fe=Object(r.a)(),ge=(fe.isLoading,fe.mutate),he=(fe.isError,fe.error,fe.data),je=(Object(u.d)(function(e){return e.CreateSeatRedux}).CreateSeatData,Object(l.a)().data,Object(c.useState)()),ye=Object(n.a)(je,2),xe=ye[0],Oe=ye[1],Ne=Object(u.d)(function(e){return e.GetFlightRedux}).GetFlightData,Se=Object(c.useState)(),we=Object(n.a)(Se,2),Te=we[0],Ce=we[1];Object(c.useEffect)(function(){Ne&&Ce(null===Ne||void 0===Ne?void 0:Ne.filter(function(e){return(null===e||void 0===e?void 0:e.flight_number)===(null===i||void 0===i?void 0:i.flight_number)}))},[Ne]),console.log(Te),Object(c.useEffect)(function(){var e;Te&&Oe(null===(e=Te[0])||void 0===e?void 0:e.id)},[Te]),console.log(xe);var ke=function(e){ge([{airlines:v,flight_number:ne,departure_airport:F,arrival_airport:P,departure_time:e,arrival_time:W,departure_date:w,arrival_date:O,duration:V,weight:K,total_seat_number:k,available_seats:A,suppliers:Y,seat_price_enduser:j,seat_price_company:f,flightId:ce}])};return Object(c.useEffect)(function(){he&&d()},[he]),o.a.createElement("div",{className:"w-100 d-flex justify-content-start align-items-center flex-column  ",style:{height:"400px"}},o.a.createElement(s.a,{multiple:!0,value:pe,onChange:ve,ref:Ee,inputClass:"custom-input",style:{paddingTop:"-60px",paddingRight:"65px"}}),o.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},o.a.createElement("button",{onClick:function(){null===be||void 0===be||be.map(function(e){return ke(e)})},type:"button",className:"btn btn-secondary me-2",style:{marginTop:"300px"}},"Add"),o.a.createElement("button",{type:"button",onClick:d,className:"btn btn-secondary  ",style:{marginTop:"300px"}},"Cancel")))}},1092:function(e,t,a){"use strict";var n=a(95),l=(a(0),a(38)),r=a(40),c=a(144),o=a(108),i=a.n(o),s=a(145),u=a(146),d=function(){var e=Object(s.a)(i.a.mark(function e(t,a){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("Seat");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),m=a(262);a.d(t,"a",function(){return p});var p=function(e){var t=Object(l.c)();Object(r.a)();return Object(n.useQuery)("GetSeatHook",d,{onSuccess:function(e){t(Object(m.a)(e))},onError:function(e){var t,a;Object(c.a)(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,"error")}})}},1337:function(e,t,a){"use strict";a.r(t);var n=a(15),l=a(0),r=a.n(l),c=a(909),o=a(33),i=a(20),s=a(9),u=a(2),d=a(962),m=a(70),p=Object(c.a)(function(){return{root:{}}}),v=function(e){var t=e.className,a=(e.handleShow,Object(s.a)(e,["className","handleShow"])),n=p();return r.a.createElement("div",Object.assign({},a,{className:Object(u.a)(n.root,t)}),r.a.createElement(d.a,{style:{position:"relative"},alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(d.a,{item:!0,style:{width:"100%"}},r.a.createElement("img",{style:{height:"150px",width:"100%",objectFit:"cover"},src:"/images/logos/PLANE.jpg"})),r.a.createElement(d.a,{item:!0,style:{position:"absolute",right:"5px",marginBottom:"5px"}})))},b=a(41),E=a.n(b),f=a(942),g=a(957),h=a(1014),j=a(952),y=a(946),x=a(943),O=a(973),N=a(977),S=a(975),w=a(976),T=a(974),C=a(999),k=(a(1048),a(109),a(1069),function(){var e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"m-3"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center ",style:{marginRight:"14px"}},r.a.createElement("h5",null,"AMM-IST"),r.a.createElement("h5",null,"Price")),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("input",{style:{borderRadius:"10px",backgroundColor:m.a.blue,width:"100%"},className:"form-control",type:"number",placeholder:"Flight No.","aria-label":"default input example"}),r.a.createElement("h6",{className:"m-3 rounded  d-flex justify-content-center align-items-center ",style:{backgroundColor:"#D6DCE5",color:"white",width:"65px",height:"30px"}},"120"))),r.a.createElement("div",{className:"m-3"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center ",style:{marginRight:"14px"}},r.a.createElement("h5",null,"IST-AMM"),r.a.createElement("h5",null,"Price")),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("input",{style:{borderRadius:"10px",backgroundColor:m.a.blue,width:"100%"},className:"form-control",type:"number",placeholder:"Flight No.","aria-label":"default input example"}),r.a.createElement("h6",{className:"m-3 rounded d-flex justify-content-center align-items-center",style:{backgroundColor:"#D6DCE5",color:"white",width:"65px",height:"30px"}},"120")))),r.a.createElement("div",{className:"my-5"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column"},r.a.createElement("h5",null,"Increase / descrease Price")),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{onClick:function(){c(a+1)},type:"button",className:"btn btn-secondary"},"+"),r.a.createElement("h5",{className:"d-flex justify-content-center align-items-center rounded ",style:{padding:20,backgroundColor:m.a.blue,margin:0,height:"35px"}},a),r.a.createElement("button",{onClick:function(){c(a-1)},type:"button",className:"btn btn-secondary"},"-"))),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column mb-5 "},r.a.createElement("h5",{className:"me-1"},"Total Price"),r.a.createElement("h5",{className:"d-flex justify-content-center align-items-center px-5 rounded ",style:{backgroundColor:m.a.blue,height:"30px"}},"250 JOD")),r.a.createElement("div",null,r.a.createElement("div",{className:"  d-flex justify-content-center align-items-center",style:{margin:25}},r.a.createElement("button",{style:{marginRight:40,backgroundColor:m.a.purple},type:"button",className:"btn btn-secondary"},"Add"),r.a.createElement("button",{style:{marginLeft:40,backgroundColor:m.a.purple},type:"button",className:"btn btn-secondary"},"Cancel"))))}),R=a(95),_=a(38),A=a(40),z=a(144),D=a(387),F=a(108),M=a.n(F),I=a(145),P=a(146),B=function(){var e=Object(I.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,P.a.post("Seat/two-way",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),G=a(1092),H=function(e){var t=e.handelCloseADD,a=Object(l.useState)(),c=Object(n.a)(a,2),o=c[0],i=c[1],s=Object(l.useState)(!1),u=Object(n.a)(s,2),d=u[0],p=u[1],v=Object(l.useState)(),b=Object(n.a)(v,2),E=b[0],f=b[1],g=Object(l.useState)(),h=Object(n.a)(g,2),j=h[0],y=h[1];console.log(E);Object(l.useEffect)(function(){p("FromTo"===o)},[o]);var x=Object(l.useState)(!1),O=Object(n.a)(x,2),N=O[0],S=O[1],w=Object(l.useState)(0),T=Object(n.a)(w,2),C=T[0],k=T[1],F=(Object(G.a)().data,Object(_.d)(function(e){return e.GetSeatRedux}).GetSeatData);console.log(F);var M=function(e){var t=Object(_.c)(),a=(Object(A.a)(),Object(R.useQueryClient)());return Object(R.useMutation)(B,{onSuccess:function(e){var n={status:e.status+"-"+e.statusText,headers:e.headers,data:e.data};console.log(n,"result"),t(Object(D.a)(n.data)),Object(z.a)("The TwoWay  has been created","success"),a.invalidateQueries("GetSeatTwoWayHook")},onError:function(e){var a,n,l={status:e.status+"-"+e.statusText,headers:e.headers,data:null===e||void 0===e?void 0:null===(a=e.response)||void 0===a?void 0:null===(n=a.data)||void 0===n?void 0:n.message};console.log(e),t(Object(D.c)(null===l||void 0===l?void 0:l.data)),Object(z.a)(l.data,"error")}})}(),I=M.mutate,P=M.data,H=Object(_.d)(function(e){return e.CreateTwoWayRedux}),L=(H.CreateTwoWayData,H.error,Object(l.useState)()),W=Object(n.a)(L,2),Q=W[0],J=W[1],V=Object(l.useState)(),$=Object(n.a)(V,2),q=$[0],K=$[1],U=Object(l.useState)(),X=Object(n.a)(U,2),Y=X[0],Z=X[1],ee=Object(l.useState)(),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],le=Object(l.useState)(),re=Object(n.a)(le,2),ce=re[0],oe=re[1],ie=Object(l.useState)(),se=Object(n.a)(ie,2),ue=se[0],de=se[1];console.log(q),console.log(ue);Object(l.useEffect)(function(){ue&&S(!0)},[ue]),console.log(q);return Object(l.useEffect)(function(){P&&t()},[P]),r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center "},r.a.createElement("div",{className:"m-3"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center ",style:{marginRight:"14px"}},r.a.createElement("h5",null,"AMM - IST "),r.a.createElement("h5",null,"Price")),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("select",{onChange:function(e){return function(e){var t=null===F||void 0===F?void 0:F.filter(function(t){return t.flight_number===e.target.value});K(t[0].id),ne(t[0].seat_price_enduser),f(t[0])}(e)},style:{borderRadius:"10px",backgroundColor:m.a.blue,width:"100%"},className:"form-select border","aria-label":"Default select example"},r.a.createElement("option",{selected:!0},"Open this select menu"),null===F||void 0===F?void 0:F.map(function(e,t){return r.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.flight_number},null===e||void 0===e?void 0:e.flight_number)})),r.a.createElement("h6",{className:"m-3 rounded ",style:{backgroundColor:"#D6DCE5",color:"white",width:"65px",height:"30px"}},ae))),r.a.createElement("div",{className:"m-3"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center ",style:{marginRight:"14px"}},r.a.createElement("h5",null,"IST-AMM"),r.a.createElement("h5",null,"Price")),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("select",{onChange:function(e){return function(e){var t=null===F||void 0===F?void 0:F.filter(function(t){return t.flight_number===e.target.value});Z(t[0].id),oe(t[0].seat_price_enduser),y(t[0])}(e)},style:{borderRadius:"10px",backgroundColor:m.a.blue,width:"100%"},className:"form-select border","aria-label":"Default select example"},r.a.createElement("option",{selected:!0},"Open this select menu"),null===F||void 0===F?void 0:F.map(function(e,t){return r.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.flight_number},null===e||void 0===e?void 0:e.flight_number)})),"         ",r.a.createElement("h6",{className:"m-3 rounded ",style:{backgroundColor:"#D6DCE5",color:"white",width:"65px",height:"30px"}},ce)))),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column my-5"},r.a.createElement("div",{className:"d-flex justify-content-around align-items-center flex-row-reverse w-100"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column"},r.a.createElement("p",{className:"text-nowrap"},"Increase / descrease Price")),r.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-2 ",style:{marginRight:"32px"}},r.a.createElement("button",{onClick:function(){k(C+1)},type:"button",className:"btn btn-secondary"},"+"),r.a.createElement("p",{className:"d-flex justify-content-center align-items-center rounded ",style:{padding:20,backgroundColor:m.a.blue,margin:0,height:"35px"}},C),r.a.createElement("button",{onClick:function(){k(C-1)},type:"button",className:"btn btn-secondary"},"-"))),r.a.createElement("div",{style:{marginBottom:"10px"},className:" d-flex justify-content-center align-items-center flex-column"},r.a.createElement("p",{className:"text-nowrap"},"Enter Dayes:"),r.a.createElement("div",{className:" d-flex justify-content-center align-items-center "},r.a.createElement("input",{className:"text-center rounded textinputround",onChange:function(e){J(e.target.value)},style:{backgroundColor:"#D6DCE5"},type:"number"}),!0===d?r.a.createElement("div",{className:" d-flex justify-content-center align-items-center "},r.a.createElement("p",{style:{margin:15}},"To"),r.a.createElement("input",{className:"text-center rounded textinputround",style:{backgroundColor:"#D6DCE5"},type:"number"})):null)),r.a.createElement("div",{style:{marginBottom:"10px"},className:" d-flex justify-content-center align-items-center flex-column"},r.a.createElement("p",null,"No Of Dayes:"),r.a.createElement("select",{style:{backgroundColor:m.a.blue},onChange:function(e){i(e.target.value)},className:"form-select","aria-label":"Default select example"},r.a.createElement("option",{selected:!0,disabled:!0,value:"1"},"select "),r.a.createElement("option",{value:"Less"},"Less Or Equal"),r.a.createElement("option",{value:"FromTo"},"From - To"),r.a.createElement("option",{value:"Gerater"},"Gerater Or Equal")))),r.a.createElement("button",{onClick:function(){var e=+ae+ +ce;console.log(e),"Less"===o&&Q<=5&&de(e-C),"Gerater"===o&&Q>5&&de(e-C)},style:{backgroundColor:m.a.purple,marginBottom:"10px"},type:"button",className:"btn btn-secondary"},"Calculate")),!0===N?r.a.createElement("div",null,r.a.createElement("p",{style:{backgroundColor:"grey",padding:10,border:"1px solid ",borderRadius:"20px 20px 0px 0px",width:150,marginBottom:0,marginLeft:"25px"}},"Flight Details"),r.a.createElement("div",{style:{border:"1px solid grey",marginTop:0,marginBottom:10,marginLeft:5,marginRight:5,borderRadius:"20px"}},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{style:{backgroundColor:"grey"}},r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Flight Two way"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Airlines"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Flight No."),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Dep.APT"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Arr.APT"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Dep.Time"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Arr.Time"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Duration"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Weight"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"Supplires"),r.a.createElement("th",{scope:"col",className:"tableAddRoundTripFontSize"},"NO Of Dayes"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"tableAddRoundTripFontSize"},"AMM-IST-AMM"),r.a.createElement("td",{className:"tableAddRoundTripFontSize"},r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.airlines),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.airlines))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.flight_number),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.flight_number))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.departure_airport),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.departure_airport))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.arrival_airport),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.arrival_airport))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.departure_time),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.departure_time))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.arrival_time),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.arrival_time))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.duration),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.duration))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.weight),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.weight))),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===E||void 0===E?void 0:E.suppliers),r.a.createElement("hr",null),r.a.createElement("p",{className:"tableAddRoundTripFontSize"},null===j||void 0===j?void 0:j.suppliers))),r.a.createElement("td",{className:"tableAddRoundTripFontSize"},"Dayes= ",Q)))))):null,!0===N?r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("h4",null,"Total Price :"),r.a.createElement("input",{disabled:!0,value:ue,className:"text-center rounded ms-3",style:{width:"60px",height:"30px",backgroundColor:m.a.blue},type:"number"})):null,r.a.createElement("div",{className:"  d-flex justify-content-center align-items-center",style:{margin:25}},r.a.createElement("button",{style:{marginRight:40,backgroundColor:m.a.purple},onClick:function(){var e={price:ue.toString(),seatId:+q,secondseatId:+Y};I(e)},type:"button",className:"btn btn-secondary"},"Add"),r.a.createElement("button",{style:{marginLeft:40,backgroundColor:m.a.purple},onClick:t,type:"button",className:"btn btn-secondary"},"Cancel")))},L=a(388),W=function(){var e=Object(I.a)(M.a.mark(function e(t,a){var n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("Seat/two-way");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),Q=Object(c.a)(function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}}),J=function(e){var t=Object(l.useState)(!1),a=Object(n.a)(t,2),c=(a[0],a[1],e.className),o=(e.customers,Object(s.a)(e,["className","customers"])),d=Q(),p=Object(l.useState)([]),v=Object(n.a)(p,2),b=v[0],D=(v[1],Object(l.useState)(0)),F=Object(n.a)(D,2),M=(F[0],F[1],Object(l.useState)(10)),I=Object(n.a)(M,2),P=(I[0],I[1],new Date),B=new Date;B.setDate(B.getDate()+1);var G=Object(l.useState)([P,B]),J=Object(n.a)(G,2),V=(J[0],J[1],Object(l.useRef)(),Object(l.useState)(!1)),$=Object(n.a)(V,2),q=$[0],K=$[1],U=Object(l.useState)(!1),X=Object(n.a)(U,2),Y=X[0],Z=X[1],ee=function(e){var t=Object(_.c)();Object(A.a)();return Object(R.useQuery)("GetSeatTwoWayHook",W,{onSuccess:function(e){t(Object(L.a)(e))},onError:function(e){var t,a;Object(z.a)(null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,"error")}})}().data,te=Object(_.d)(function(e){return e.GetSeatTwoWayRedux}).GetSeatTwoWayData;return console.log(ee),r.a.createElement("div",Object.assign({},o,{className:Object(u.a)(d.root,c)}),r.a.createElement(C.a,{size:"lg",show:q,onHide:function(){return K(!1)},"aria-labelledby":"example-modal-sizes-title-sm"},r.a.createElement(C.a.Header,{style:{margin:0,padding:0}},r.a.createElement(C.a.Title,{id:"example-modal-sizes-title-sm",className:"w-100 rounded",style:{margin:"0",backgroundColor:m.a.purple}},r.a.createElement("h5",{style:{color:"white"},className:"p-2"},"EDITE"))),r.a.createElement(C.a.Body,{style:{padding:0}},r.a.createElement(k,null))),r.a.createElement(C.a,{size:"lg",show:Y,onHide:function(){return Z(!1)},"aria-labelledby":"example-modal-sizes-title-sm"},r.a.createElement(C.a.Header,{style:{margin:0,padding:0}},r.a.createElement(C.a.Title,{id:"example-modal-sizes-title-sm",className:"w-100 rounded",style:{margin:"0",backgroundColor:m.a.purple}},r.a.createElement("h5",{style:{color:"white"},className:"p-2"},"Add Round Trip"))),r.a.createElement(C.a.Body,{style:{padding:0}},r.a.createElement(H,{handelCloseADD:function(){return Z(!1)}}))),r.a.createElement(f.a,{style:{fontSize:"50px"}},r.a.createElement(g.a,{action:r.a.createElement(i.e,null),title:r.a.createElement("div",{className:"d-flex justify-content-start  flex-column"},r.a.createElement("h2",{style:{marginTop:"0px",marginLeft:"0px"}},"Seats"),r.a.createElement("div",{className:"d-flex justify-content-start align-items-center"},r.a.createElement(h.a,{color:m.a.purple}),r.a.createElement("h5",{style:{marginBottom:0,marginRight:20}},"Default price = OutBound Flight Price + Return Flight Price"),r.a.createElement(j.a,{style:{backgroundColor:m.a.orange},color:"primary",variant:"contained",onClick:function(){return K(!0)}},"Edite")))}),r.a.createElement(y.a,null),r.a.createElement(x.a,{className:d.content,style:{overflow:"auto"}},r.a.createElement(E.a,{style:{overflow:"auto"}},r.a.createElement("div",{className:d.inner},r.a.createElement(O.a,null,r.a.createElement(N.a,{style:{backgroundColor:m.a.purple}},r.a.createElement(S.a,{className:"shadowBox"},r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Flight Two Way"),r.a.createElement(w.a,{style:{fontSize:"13px",marginRight:"5px",color:"white"},className:"text-center"},"AirLines"),r.a.createElement(w.a,{style:{fontSize:"13px",marginRight:"5px",color:"white"},className:"text-center"},"Flight No."),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Dep.APT"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Arr.APT"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Dep.Time"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Arr.Time"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Duration"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Weight"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"Suppliers"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"No Of Dayes"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center"},"S.price"),r.a.createElement(w.a,{style:{fontSize:"13px",color:"white"},className:"text-center",align:"right"},"Actions"))),r.a.createElement(T.a,null,null===te||void 0===te?void 0:te.map(function(e){var t,a,n,l,c,o,i,s,u,d,m,p,v,E,f,g;return r.a.createElement(S.a,{hover:!0,key:e.id,selected:-1!==b.indexOf(e.id)},r.a.createElement(w.a,{className:"text-center"},"RJ"),r.a.createElement(w.a,{className:"text-center "},"AMM-IST-AMM"),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(t=e.seat)||void 0===t?void 0:t.flight_number),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(a=e.secondseat)||void 0===a?void 0:a.flight_number))),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(n=e.seat)||void 0===n?void 0:n.departure_airport),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(l=e.secondseat)||void 0===l?void 0:l.departure_airport))),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(c=e.seat)||void 0===c?void 0:c.arrival_airport),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(o=e.secondseat)||void 0===o?void 0:o.arrival_airport))),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(i=e.seat)||void 0===i?void 0:i.departure_time),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(s=e.secondseat)||void 0===s?void 0:s.departure_time))),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(u=e.seat)||void 0===u?void 0:u.arrival_time),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(d=e.secondseat)||void 0===d?void 0:d.arrival_time))),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(m=e.seat)||void 0===m?void 0:m.duration),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(p=e.secondseat)||void 0===p?void 0:p.duration))),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(v=e.seat)||void 0===v?void 0:v.weight),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(E=e.secondseat)||void 0===E?void 0:E.weight))),r.a.createElement(w.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("p",null,null===e||void 0===e?void 0:null===(f=e.seat)||void 0===f?void 0:f.suppliers),r.a.createElement("hr",null),r.a.createElement("p",null,null===e||void 0===e?void 0:null===(g=e.secondseat)||void 0===g?void 0:g.suppliers))),r.a.createElement(w.a,{className:"text-center"},"Dayes=10"),r.a.createElement(w.a,{className:"text-center"},null===e||void 0===e?void 0:e.price),r.a.createElement(w.a,{className:"text-center",align:"right"},r.a.createElement("div",{className:"d-flex "},r.a.createElement("i",{className:"fa-solid fa-trash-can m-1"}),r.a.createElement("i",{className:"fa-solid fa-pen-to-square m-1"}))))}))))))),r.a.createElement(j.a,{style:{backgroundColor:m.a.orange,marginTop:20},color:"primary",variant:"contained",onClick:function(){return Z(!0)}},"Add Round Trip"))};J.defaultProps={customers:[]};var V=J,$=(a(1112),Object(c.a)(function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)}}})),q=function(){var e=$(),t=Object(l.useState)([]),a=Object(n.a)(t,2),c=a[0],s=a[1];Object(l.useEffect)(function(){var e=!0;return o.a.get("/api/management/customers").then(function(t){e&&s(t.data.customers)}),function(){e=!1}},[]);var u=Object(l.useState)(!1),d=Object(n.a)(u,2),m=(d[0],d[1]);return r.a.createElement(i.k,{className:e.root,title:"Customer Management List"},r.a.createElement(v,{handleShow:function(){return m(!0)}}),c&&r.a.createElement(V,{className:e.results,customers:c}))};a.d(t,"default",function(){return q})}}]);
//# sourceMappingURL=26.dd8d9ef0.chunk.js.map