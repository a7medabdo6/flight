(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1127:function(e,a,t){"use strict";var n=t(14);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=(0,n(t(15)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");a.default=s},1303:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(0),s=t.n(r),i=t(22),o=t(894),c=t(922),l=t(923),u=t(78),d=t(926),m=t(928),p=t(940),g=t(669),v=t(1127),f=t.n(v),b=t(20),h=t(56),w=t(974),j=t.n(w),O=t(975),E=t(24),y=t(17),x=t(9),k=t(231),N=t.n(k),S=t(2),T=t(53),R=t(960),C=t(932),V=t(59),I=(t(449),t(194)),L=t(972),z=t(973),B=function(){var e=Object(O.a)(j.a.mark(function e(a){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,z.a.post("users/signin",a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),M=t(378),D=t(980),H={email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"}}},J=Object(o.a)(function(e){return{root:{},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},submitButton:{marginTop:e.spacing(2),width:"100%"}}}),W=function(e){var a=e.className,t=Object(x.a)(e,["className"]),i=function(e){var a=Object(T.c)();return Object(V.a)(),Object(I.useQueryClient)(),Object(I.useMutation)(B,{onSuccess:function(e){var t={status:e.status+"-"+e.statusText,headers:e.headers,data:e.data};console.log(t,"result"),a(Object(M.a)(t.data)),Object(L.a)("The Login  has been created","success")},onError:function(e){var t,n,r={status:e.status+"-"+e.statusText,headers:e.headers,data:null===e||void 0===e?void 0:null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message};console.log(e),a(Object(M.c)(null===r||void 0===r?void 0:r.data)),Object(L.a)(r.data,"error")}})}(),o=(i.isLoading,i.mutate),c=(i.isError,i.error,i.data),l=Object(T.d)(function(e){return e.SignInRedux}).SignInData;console.log(l);var u=J(),d=(Object(V.a)(),Object(T.c)(),Object(r.useState)({isValid:!1,values:{},touched:{},errors:{}})),m=Object(y.a)(d,2),p=m[0],g=m[1];Object(r.useEffect)(function(){var e=N()(p.values,H);g(function(a){return Object(E.a)({},a,{isValid:!e,errors:e||{}})})},[p.values]);var v=function(e){e.persist(),g(function(a){return Object(E.a)({},a,{values:Object(E.a)({},a.values,Object(n.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(E.a)({},a.touched,Object(n.a)({},e.target.name,!0))})})},f=function(){var e=Object(O.a)(j.a.mark(function e(a){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t={email:p.values.email,password:p.values.password},o(t);case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),b=function(e){return!(!p.touched[e]||!p.errors[e])},h=Object(V.a)().history;return Object(r.useEffect)(function(){c&&(localStorage.setItem("user",JSON.stringify(l)),localStorage.setItem("token",JSON.stringify(null===l||void 0===l?void 0:l.Token)),setTimeout(function(){h.push("/")},[2e3]))},[c]),s.a.createElement("form",Object.assign({},t,{className:Object(S.a)(u.root,a),onSubmit:f}),s.a.createElement("div",{className:u.fields},s.a.createElement(R.a,{error:b("email"),fullWidth:!0,helperText:b("email")?p.errors.email[0]:null,label:"Email address",name:"email",onChange:v,value:p.values.email||"",variant:"outlined"}),s.a.createElement(R.a,{error:b("password"),fullWidth:!0,helperText:b("password")?p.errors.password[0]:null,label:"Password",name:"password",onChange:v,type:"password",value:p.values.password||"",variant:"outlined"})),s.a.createElement(C.a,{className:u.submitButton,color:"secondary",disabled:!p.isValid,size:"large",type:"submit",variant:"contained"},"Sign in"),s.a.createElement(D.a,null))},P=Object(o.a)(function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(6,2)},card:{width:e.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},media:Object(n.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:e.spacing(3),color:e.palette.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},e.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:h.a.green,color:e.palette.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64,fontSize:32},loginForm:{marginTop:e.spacing(3)},divider:{margin:e.spacing(2,0)},person:{marginTop:e.spacing(2),display:"flex"},avatar:{marginRight:e.spacing(2)}}}),_=function(){var e=P();return s.a.createElement(b.k,{className:e.root,title:"Login"},s.a.createElement(c.a,{className:e.card},s.a.createElement(l.a,{className:e.content},s.a.createElement(f.a,{className:e.icon}),s.a.createElement(u.a,{gutterBottom:!0,variant:"h3"},"Sign in"),s.a.createElement(u.a,{variant:"subtitle2"},"Sign in on the internal platform"),s.a.createElement(W,{className:e.loginForm}),s.a.createElement(d.a,{className:e.divider}),s.a.createElement(m.a,{align:"center",color:"secondary",component:i.a,to:"/auth/register",underline:"always",variant:"subtitle2"},"Don't have an account?")),s.a.createElement(p.a,{className:e.media,image:"/images/auth.png",title:"Cover"},s.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life."),s.a.createElement("div",{className:e.person},s.a.createElement(g.a,{alt:"Person",className:e.avatar,src:"/images/avatars/avatar_2.png"}),s.a.createElement("div",null,s.a.createElement(u.a,{color:"inherit",variant:"body1"},"Ekaterina Tankova"),s.a.createElement(u.a,{color:"inherit",variant:"body2"},"Manager at inVision"))))))};t.d(a,"default",function(){return _})},972:function(e,a,t){"use strict";var n=t(980);t(993);a.a=function(e,a){"warn"===a?n.b.warn(e):"success"===a?n.b.success(e):"error"===a&&n.b.error(e)}},973:function(e,a,t){"use strict";var n=t(196),r=t.n(n).a.create({baseURL:"http://147.182.237.82/api/"});a.a=r}}]);
//# sourceMappingURL=3.84565587.chunk.js.map