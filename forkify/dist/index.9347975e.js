function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},o={},i=t.parcelRequire7e89;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7e89=i),i.register("27Lyk",(function(t,r){var n,o;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.9347975e.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;p=f?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!v.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,L=f&&O.bind(j,j),F=(E=f?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),M=E("".slice);w=function(e){return M(F(e),8,-1)};var x=Object,$=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?$(e,""):x(e)}:x;var P,T;T=function(e){return null==e};var q=TypeError;P=function(e){if(T(e))throw q("Can't call method on "+e);return e},_=function(e){return k(P(e))};var H,I,N,C={};N=function(e){return"function"==typeof e};var A="object"==typeof document&&document.all;C=void 0===A&&void 0!==A?function(e){return"object"==typeof e?null!==e:N(e)||e===A}:function(e){return"object"==typeof e?null!==e:N(e)};var R,z={},D=function(e){return N(e)?e:void 0};R=function(e,t){return arguments.length<2?D(c[e]):c[e]&&c[e][t]};var W={};W=E({}.isPrototypeOf);var U,G,B,J={};J=R("navigator","userAgent")||"";var V,Y,Q=c.process,K=c.Deno,X=Q&&Q.versions||K&&K.version,Z=X&&X.v8;Z&&(Y=(V=Z.split("."))[0]>0&&V[0]<4?1:+(V[0]+V[1])),!Y&&J&&(!(V=J.match(/Edge\/(\d+)/))||V[1]>=74)&&(V=J.match(/Chrome\/(\d+)/))&&(Y=+V[1]),B=Y,G=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&B&&B<41})),U=G&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ee=Object;z=U?function(e){return"symbol"==typeof e}:function(e){var t=R("Symbol");return N(t)&&W(t.prototype,ee(e))};var te,re,ne,oe=String;ne=function(e){try{return oe(e)}catch(e){return"Object"}};var ie=TypeError;re=function(e){if(N(e))return e;throw ie(ne(e)+" is not a function")},te=function(e,t){var r=e[t];return T(r)?void 0:re(r)};var ae,se=TypeError;ae=function(e,t){var r,n;if("string"===t&&N(r=e.toString)&&!C(n=p(r,e)))return n;if(N(r=e.valueOf)&&!C(n=p(r,e)))return n;if("string"!==t&&N(r=e.toString)&&!C(n=p(r,e)))return n;throw se("Can't convert object to primitive value")};var ce;var ue,le={},de=Object.defineProperty;ue=function(e,t){try{de(c,e,{value:t,configurable:!0,writable:!0})}catch(r){c[e]=t}return t};var fe=c["__core-js_shared__"]||ue("__core-js_shared__",{});le=fe,(ce=function(e,t){return le[e]||(le[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,he={},ge=Object;pe=function(e){return ge(P(e))};var ve=E({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ve(pe(e),t)};var me,ye=0,be=Math.random(),_e=E(1..toString);me=function(e){return"Symbol("+(void 0===e?"":e)+")_"+_e(++ye+be,36)};var we=ce("wks"),ke=c.Symbol,Ee=ke&&ke.for,Se=U?ke:ke&&ke.withoutSetter||me,Oe=TypeError,je=function(e){if(!he(we,e)||!G&&"string"!=typeof we[e]){var t="Symbol."+e;G&&he(ke,e)?we[e]=ke[e]:we[e]=U&&Ee?Ee(t):Se(t)}return we[e]}("toPrimitive");I=function(e,t){if(!C(e)||z(e))return e;var r,n=te(e,je);if(n){if(void 0===t&&(t="default"),r=p(n,e,t),!C(r)||z(r))return r;throw Oe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ae(e,t)},H=function(e){var t=I(e,"string");return z(t)?t:t+""};var Le,Fe,Me=c.document,xe=C(Me)&&C(Me.createElement);Fe=function(e){return xe?Me.createElement(e):{}},Le=!l&&!d((function(){return 7!=Object.defineProperty(Fe("div"),"a",{get:function(){return 7}}).a}));var $e,Pe,Te=Object.getOwnPropertyDescriptor,qe=s=l?Te:function(e,t){if(e=_(e),t=H(t),Le)try{return Te(e,t)}catch(e){}if(he(e,t))return b(!p(h,e,t),e[t])},He={};Pe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ie,Ne=String,Ce=TypeError;Ie=function(e){if(C(e))return e;throw Ce(Ne(e)+" is not an object")};var Ae=TypeError,Re=Object.defineProperty,ze=Object.getOwnPropertyDescriptor;$e=l?Pe?function(e,t,r){if(Ie(e),t=H(t),Ie(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=ze(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Re(e,t,r)}:Re:function(e,t,r){if(Ie(e),t=H(t),Ie(r),Le)try{return Re(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Ae("Accessors not supported");return"value"in r&&(e[t]=r.value),e},He=l?function(e,t,r){return $e(e,t,b(1,r))}:function(e,t,r){return e[t]=r,e};var De,We,Ue=Function.prototype,Ge=l&&Object.getOwnPropertyDescriptor,Be=he(Ue,"name"),Je={EXISTS:Be,PROPER:Be&&"something"===function(){}.name,CONFIGURABLE:Be&&(!l||l&&Ge(Ue,"name").configurable)}.CONFIGURABLE,Ve={},Ye=E(Function.toString);N(le.inspectSource)||(le.inspectSource=function(e){return Ye(e)}),Ve=le.inspectSource;var Qe,Ke,Xe=c.WeakMap;Ke=N(Xe)&&/native code/.test(String(Xe));var Ze,et=ce("keys");Ze=function(e){return et[e]||(et[e]=me(e))};var tt={};tt={};var rt,nt,ot,it=c.TypeError,at=c.WeakMap;if(Ke||le.state){var st=le.state||(le.state=new at),ct=E(st.get),ut=E(st.has),lt=E(st.set);rt=function(e,t){if(ut(st,e))throw it("Object already initialized");return t.facade=e,lt(st,e,t),t},nt=function(e){return ct(st,e)||{}},ot=function(e){return ut(st,e)}}else{var dt=Ze("state");tt[dt]=!0,rt=function(e,t){if(he(e,dt))throw it("Object already initialized");return t.facade=e,He(e,dt,t),t},nt=function(e){return he(e,dt)?e[dt]:{}},ot=function(e){return he(e,dt)}}var ft=(Qe={set:rt,get:nt,has:ot,enforce:function(e){return ot(e)?nt(e):rt(e,{})},getterFor:function(e){return function(t){var r;if(!C(t)||(r=nt(t)).type!==e)throw it("Incompatible receiver, "+e+" required");return r}}}).enforce,pt=Qe.get,ht=Object.defineProperty,gt=l&&!d((function(){return 8!==ht((function(){}),"length",{value:8}).length})),vt=String(String).split("String"),mt=We=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!he(e,"name")||Je&&e.name!==t)&&(l?ht(e,"name",{value:t,configurable:!0}):e.name=t),gt&&r&&he(r,"arity")&&e.length!==r.arity&&ht(e,"length",{value:r.arity});try{r&&he(r,"constructor")&&r.constructor?l&&ht(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ft(e);return he(n,"source")||(n.source=vt.join("string"==typeof t?t:"")),e};Function.prototype.toString=mt((function(){return N(this)&&pt(this).source||Ve(this)}),"toString"),De=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(N(r)&&We(r,i,n),n.global)o?e[t]=r:ue(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:$e(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var yt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Lt=Math.max,Ft=Math.min;wt=function(e,t){var r=kt(e);return r<0?Lt(r+t,0):Ft(r,t)};var Mt,xt,$t=Math.min;xt=function(e){return e>0?$t(kt(e),9007199254740991):0},Mt=function(e){return xt(e.length)};var Pt=function(e){return function(t,r,n){var o,i=_(t),a=Mt(i),s=wt(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},Tt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,qt=E([].push);_t=function(e,t){var r,n=_(e),o=0,i=[];for(r in n)!he(tt,r)&&he(n,r)&&qt(i,r);for(;t.length>o;)he(n,r=t[o++])&&(~Tt(i,r)||qt(i,r));return i};var Ht,It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");bt=Object.getOwnPropertyNames||function(e){return _t(e,It)},Ht=Object.getOwnPropertySymbols;var Nt=E([].concat);Et=R("Reflect","ownKeys")||function(e){var t=bt(Ie(e));return Ht?Nt(t,Ht(e)):t},yt=function(e,t,r){for(var n=Et(t),o=$e,i=s,a=0;a<n.length;a++){var c=n[a];he(e,c)||r&&he(r,c)||o(e,c,i(t,c))}};var Ct={},At=/#|\.prototype\./,Rt=function(e,t){var r=Dt[zt(e)];return r==Ut||r!=Wt&&(N(t)?d(t):!!t)},zt=Rt.normalize=function(e){return String(e).replace(At,".").toLowerCase()},Dt=Rt.data={},Wt=Rt.NATIVE="N",Ut=Rt.POLYFILL="P";Ct=Rt,a=function(e,t){var r,n,o,i,a,s=e.target,u=e.global,l=e.stat;if(r=u?c:l?c[s]||ue(s,{}):(c[s]||{}).prototype)for(n in t){if(i=t[n],o=e.dontCallGetSet?(a=qe(r,n))&&a.value:r[n],!Ct(u?n:s+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;yt(i,o)}(e.sham||o&&o.sham)&&He(i,"sham",!0),De(r,n,i,e)}};var Gt,Bt={},Jt=Function.prototype,Vt=Jt.apply,Yt=Jt.call;Bt="object"==typeof Reflect&&Reflect.apply||(f?Yt.bind(Vt):function(){return Yt.apply(Vt,arguments)});var Qt,Kt=E(E.bind);Qt=function(e,t){return re(e),void 0===t?e:f?Kt(e,t):function(){return e.apply(t,arguments)}};var Xt={};Xt=R("document","documentElement");var Zt={};Zt=E([].slice);var er,tr=TypeError;er=function(e,t){if(e<t)throw tr("Not enough arguments");return e};var rr;rr=/(?:ipad|iphone|ipod).*applewebkit/i.test(J);var nr;nr="process"==w(c.process);var or,ir,ar,sr,cr=c.setImmediate,ur=c.clearImmediate,lr=c.process,dr=c.Dispatch,fr=c.Function,pr=c.MessageChannel,hr=c.String,gr=0,vr={};try{or=c.location}catch(e){}var mr=function(e){if(he(vr,e)){var t=vr[e];delete vr[e],t()}},yr=function(e){return function(){mr(e)}},br=function(e){mr(e.data)},_r=function(e){c.postMessage(hr(e),or.protocol+"//"+or.host)};cr&&ur||(cr=function(e){er(arguments.length,1);var t=N(e)?e:fr(e),r=Zt(arguments,1);return vr[++gr]=function(){Bt(t,void 0,r)},ir(gr),gr},ur=function(e){delete vr[e]},nr?ir=function(e){lr.nextTick(yr(e))}:dr&&dr.now?ir=function(e){dr.now(yr(e))}:pr&&!rr?(sr=(ar=new pr).port2,ar.port1.onmessage=br,ir=Qt(sr.postMessage,sr)):c.addEventListener&&N(c.postMessage)&&!c.importScripts&&or&&"file:"!==or.protocol&&!d(_r)?(ir=_r,c.addEventListener("message",br,!1)):ir="onreadystatechange"in Fe("script")?function(e){Xt.appendChild(Fe("script")).onreadystatechange=function(){Xt.removeChild(this),mr(e)}}:function(e){setTimeout(yr(e),0)});var wr=(Gt={set:cr,clear:ur}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==wr},{clearImmediate:wr});var kr=Gt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==kr},{setImmediate:kr});var Er=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new F(n||[]);return i._invoke=function(e,t,r){var n=d;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return x()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,i)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function M(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Er}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Er:Function("r","regeneratorRuntime = r")(Er)}const Sr=async function(e,t){try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([n,(r=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${r} second`))}),1e3*r)})))]),i=await o.json();if(!o.ok)throw new Error(`${i.message} (${o.status})`);return i}catch(e){throw e}var r},Or={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},jr=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},Lr=function(e=Or.search.page){Or.search.page=e;const t=(e-1)*Or.search.resultsPerPage,r=e*Or.search.resultsPerPage;return Or.search.results.slice(t,r)},Fr=function(){localStorage.setItem("bookmarks",JSON.stringify(Or.bookmarks))},Mr=function(e){Or.bookmarks.push(e),e.id===Or.recipe.id&&(Or.recipe.bookmarked=!0),Fr()};!function(){const e=localStorage.getItem("bookmarks");e&&(Or.bookmarks=JSON.parse(e))}();var xr,$r,Pr,Tr;xr=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString();class qr{_data;render(e,t=!0){this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));n.forEach(((e,t)=>{const r=o[t];e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>r.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n          <div class="spinner">\n            <svg>\n              <use href="${r(xr)}#icon-loader"></use>\n            </svg>\n          </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n        <div class="error">\n            <div>\n              <svg>\n                <use href="${r(xr)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`        \n        <div class="message">\n          <div>\n            <svg>\n              <use href="${r(xr)}#icon-smile"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Pr=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Tr=function(e,t){if(t){var r=Math.pow(10,t);return Math.round(e*r)/r}return Math.round(e)},function(){if(Pr(this.denominator)){var e=Tr(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Pr(this.numerator)&&(e=Tr(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return n.forEach((function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))})),0===r.length?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},$r=Fraction;var Hr=new class extends qr{_parentElement=document.querySelector(".recipe");_errorMessage="We could'n not find that recipe. Please try another one! 🔴🔴🔴";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const{updateTo:n}=r.dataset;+n>0&&e(+n)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`    \n        <figure class="recipe__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n            </h1>\n        </figure>\n\n        <div class="recipe__details">\n            <div class="recipe__info">\n            <svg class="recipe__info-icon">\n                <use href="${r(xr)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n            <svg class="recipe__info-icon">\n                <use href="${r(xr)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n                <button class="btn--tiny btn--update-servings" \n                  data-update-to="${this._data.servings-1}">\n                <svg>\n                    <use href="${r(xr)}#icon-minus-circle"></use>\n                </svg>\n                </button>\n                <button class="btn--tiny btn--update-servings"\n                  data-update-to="${this._data.servings+1}">\n                <svg>\n                    <use href="${r(xr)}#icon-plus-circle"></use>\n                </svg>\n                </button>\n            </div>\n            </div>\n\n            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n                <use href="${r(xr)}#icon-user"></use>\n              </svg>\n            </div>\n\n            <button class="btn--round btn--bookmark">\n            <svg class="">\n                <use href="${r(xr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n            </button>\n        </div>\n\n        <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n            </ul>\n        </div>\n\n        <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n            </p>\n            <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n            >\n            <span>Directions</span>\n            <svg class="search__icon">\n                <use href="${r(xr)}#icon-arrow-right"></use>\n            </svg>\n            </a>\n        </div>`}_generateMarkupIngredient(e){return`                \n            <li class="recipe__ingredient">\n                <svg class="recipe__icon">\n                <use href="${r(xr)}#icon-check"></use>\n                </svg>\n                <div class="recipe__quantity">${e.quantity?new $r(e.quantity).toString():""}</div>\n                <div class="recipe__description">\n                <span class="recipe__unit">${e.unit}</span>\n                ${e.description}\n                </div>\n            </li>\n            `}};var Ir=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Nr=new class extends qr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n        <li class="preview">\n            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n                <figure class="preview__fig">\n                    <img src="${this._data.image}" alt="${this._data.title}" />\n                </figure>\n                <div class="preview__data">\n                    <h4 class="preview__title">${this._data.title}</h4>\n                    <p class="preview__publisher">${this._data.publisher}</p>\n                    <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                        <svg>\n                            <use href="${r(xr)}#icon-user"></use>\n                        </svg>\n                    </div>\n                </div>\n            </a>\n          </li>\n        `}};var Cr=new class extends qr{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again 🔴";_message="";_generateMarkup(){return this._data.map((e=>Nr.render(e,!1))).join("")}};var Ar=new class extends qr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it 😃";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Nr.render(e,!1))).join("")}};var Rr=new class extends qr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.goto;e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._generateMarkupButton("",e+1):e===t&&t>1?this._generateMarkupButton(e-1,""):this._data.page<t?this._generateMarkupButton(e-1,e+1):""}_generateMarkupButton(e,t){let n="";return e&&(n+=`   \n        <button data-goto="${e}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n                <use href="${r(xr)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${e}</span>\n        </button>\n        `),t&&(n+=`\n        <button data-goto="${t}" class="btn--inline pagination__btn--next">\n            <span>Page ${t}</span>\n            <svg class="search__icon">\n                <use href="${r(xr)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        `),n}};var zr=new class extends qr{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const r=[...new FormData(this)],n=Object.fromEntries(r);e(n)}))}_generateMarkup(){}};const Dr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Hr.renderSpinner(),Cr.update(Lr()),Ar.update(Or.bookmarks),await async function(e){try{const t=await Sr(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=b3e18cfa-d027-4377-a1d0-af86719b827c`);Or.recipe=jr(t),Or.bookmarks.some((t=>t.id===e))?Or.recipe.bookmarked=!0:Or.recipe.bookmarked=!1}catch(e){throw console.error(`${e} 🔴🔴🔴`),e}}(e),Hr.render(Or.recipe)}catch(e){Hr.renderError(),console.error(e)}},Wr=async function(){try{Cr.renderSpinner();const e=Ir.getQuery();if(!e)return;await async function(e){try{Or.search.query=e;const t=await Sr(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=b3e18cfa-d027-4377-a1d0-af86719b827c`);Or.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Or.search.page=1}catch(e){throw console.error(`${e} 🔴🔴🔴`),e}}(e),Cr.render(Lr(1)),Rr.render(Or.search)}catch(e){console.log(e)}},Ur=function(e){Cr.render(Lr(e)),Rr.render(Or.search)},Gr=function(e){!function(e){Or.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Or.recipe.servings})),Or.recipe.servings=e}(e),Hr.update(Or.recipe)},Br=function(){Or.recipe.bookmarked?function(e){const t=Or.bookmarks.findIndex((t=>t.id===e));Or.bookmarks.splice(t,1),e===Or.recipe.id&&(Or.recipe.bookmarked=!1),Fr()}(Or.recipe.id):Mr(Or.recipe),Hr.update(Or.recipe),Ar.render(Or.bookmarks)},Jr=function(){Ar.render(Or.bookmarks)},Vr=async function(e){try{zr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format :)");const[r,n,o]=t;return{quantity:r?+r:null,unit:n,description:o}})),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);const n=await Sr("https://forkify-api.herokuapp.com/api/v2/recipes/?key=b3e18cfa-d027-4377-a1d0-af86719b827c",r);Or.recipe=jr(n),Mr(Or.recipe)}catch(e){throw e}}(e),console.log(Or.recipe),Hr.render(Or.recipe),zr.renderMessage(),Ar.render(Or.bookmarks),window.history.pushState(null,"",`#${Or.recipe.id}`),setTimeout((function(){zr.toggleWindow()}),2500)}catch(e){console.error("⛔",e),zr.renderError(e.message)}};Ar.addHandlerRender(Jr),Hr.addHandlerRender(Dr),Hr.addHandlerUpdateServings(Gr),Hr.addHandlerAddBookmark(Br),Ir.addHandlerSearch(Wr),Rr.addHandlerClick(Ur),zr.addHandlerUpload(Vr);
//# sourceMappingURL=index.9347975e.js.map
