(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1052:function(t,e,r){"use strict";var n=r(13);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r(0)),o=(0,n(r(14)).default)(a.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");e.default=o},1229:function(t,e,r){"use strict";r.r(e);var n=r(25),a=r(0),o=r.n(a),i=r(20),c=r(831),s=r(859),l=r(860),u=r(70),f=r(863),h=r(865),p=r(877),d=r(608),m=r(1052),v=r.n(m),g=r(18),y=r(50),w=r(939),b=r.n(w),E=r(970),x=r(21),j=r(16),O=r(9),L=r(210),N=r.n(L),k=r(2),_=r(57),S=r(897),T=r(869),P=r(56),G=(r(157),{email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"}}}),R=Object(c.a)(function(t){return{root:{},fields:{margin:t.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:t.spacing(1)}},submitButton:{marginTop:t.spacing(2),width:"100%"}}}),F=function(t){var e=t.className,r=Object(O.a)(t,["className"]),i=R(),c=Object(P.a)(),s=(Object(_.c)(),Object(a.useState)({isValid:!1,values:{},touched:{},errors:{}})),l=Object(j.a)(s,2),u=l[0],f=l[1];Object(a.useEffect)(function(){var t=N()(u.values,G);f(function(e){return Object(x.a)({},e,{isValid:!t,errors:t||{}})})},[u.values]);var h=function(t){t.persist(),f(function(e){return Object(x.a)({},e,{values:Object(x.a)({},e.values,Object(n.a)({},t.target.name,"checkbox"===t.target.type?t.target.checked:t.target.value)),touched:Object(x.a)({},e.touched,Object(n.a)({},t.target.name,!0))})})},p=function(){var t=Object(E.a)(b.a.mark(function t(e){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),c.history.push("/");case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),d=function(t){return!(!u.touched[t]||!u.errors[t])};return o.a.createElement("form",Object.assign({},r,{className:Object(k.a)(i.root,e),onSubmit:p}),o.a.createElement("div",{className:i.fields},o.a.createElement(S.a,{error:d("email"),fullWidth:!0,helperText:d("email")?u.errors.email[0]:null,label:"Email address",name:"email",onChange:h,value:u.values.email||"",variant:"outlined"}),o.a.createElement(S.a,{error:d("password"),fullWidth:!0,helperText:d("password")?u.errors.password[0]:null,label:"Password",name:"password",onChange:h,type:"password",value:u.values.password||"",variant:"outlined"})),o.a.createElement(T.a,{className:i.submitButton,color:"secondary",disabled:!u.isValid,size:"large",type:"submit",variant:"contained"},"Sign in"))},V=Object(c.a)(function(t){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:t.spacing(6,2)},card:{width:t.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:t.spacing(8,4,3,4)},media:Object(n.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:t.spacing(3),color:t.palette.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},t.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:y.a.green,color:t.palette.white,borderRadius:t.shape.borderRadius,padding:t.spacing(1),position:"absolute",top:-32,left:t.spacing(3),height:64,width:64,fontSize:32},loginForm:{marginTop:t.spacing(3)},divider:{margin:t.spacing(2,0)},person:{marginTop:t.spacing(2),display:"flex"},avatar:{marginRight:t.spacing(2)}}}),C=function(){var t=V();return o.a.createElement(g.k,{className:t.root,title:"Login"},o.a.createElement(s.a,{className:t.card},o.a.createElement(l.a,{className:t.content},o.a.createElement(v.a,{className:t.icon}),o.a.createElement(u.a,{gutterBottom:!0,variant:"h3"},"Sign in"),o.a.createElement(u.a,{variant:"subtitle2"},"Sign in on the internal platform"),o.a.createElement(F,{className:t.loginForm}),o.a.createElement(f.a,{className:t.divider}),o.a.createElement(h.a,{align:"center",color:"secondary",component:i.a,to:"/auth/register",underline:"always",variant:"subtitle2"},"Don't have an account?")),o.a.createElement(p.a,{className:t.media,image:"/images/auth.png",title:"Cover"},o.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life."),o.a.createElement("div",{className:t.person},o.a.createElement(d.a,{alt:"Person",className:t.avatar,src:"/images/avatars/avatar_2.png"}),o.a.createElement("div",null,o.a.createElement(u.a,{color:"inherit",variant:"body1"},"Ekaterina Tankova"),o.a.createElement(u.a,{color:"inherit",variant:"body2"},"Manager at inVision"))))))};r.d(e,"default",function(){return C})},939:function(t,e,r){t.exports=r(940)},940:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(R){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:N(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",d="executing",m="completed",v={};function g(){}function y(){}function w(){}var b={};l(b,i,function(){return this});var E=Object.getPrototypeOf,x=E&&E(E(P([])));x&&x!==r&&n.call(x,i)&&(b=x);var j=w.prototype=g.prototype=Object.create(b);function O(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function L(t,e){var r;a(this,"_invoke",{value:function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,c){var s=f(t[a],t,o);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(u).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(s.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}})}function N(t,e,r){var n=h;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return G()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?m:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}function k(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)?v:("return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v);var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:G}}function G(){return{value:e,done:!0}}return y.prototype=w,a(j,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:y,configurable:!0}),y.displayName=l(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(L.prototype),l(L.prototype,c,function(){return this}),t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},O(j),l(j,s,"Generator"),l(j,i,function(){return this}),l(j,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},970:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return a})}}]);
//# sourceMappingURL=16.0a32b359.chunk.js.map