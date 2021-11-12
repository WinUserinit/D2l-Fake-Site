!function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}function n(e){try{return!!e()}catch(e){return!0}}function r(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function o(e){if(null==e)throw TypeError("Can't call method on "+e);return e}function u(e){return y(o(e))}function i(e,t){return arguments.length<2?"function"==typeof(n=f[e])?n:void 0:f[e]&&f[e][t];var n}var a=function(e){return e&&e.Math==Math&&e},f=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof e&&e)||function(){return this}()||Function("return this")(),s=!n(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),c={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,l={f:d&&!c.call({1:2},1)?function(e){e=d(this,e);return!!e&&e.enumerable}:c},p={}.toString,m="".split,y=n(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==p.call(e).slice(8,-1)?m.call(e,""):Object(e)}:Object,g=function(e){return"object"==typeof e?null!==e:"function"==typeof e},a=i("navigator","userAgent")||"",e=f.process,c=f.Deno,c=e&&e.versions||c&&c.version,c=c&&c.v8;c?P=(L=c.split("."))[0]<4?1:L[0]+L[1]:a&&(!(L=a.match(/Edge\/(\d+)/))||74<=L[1])&&(L=a.match(/Chrome\/(\d+)/))&&(P=L[1]);function v(t,n){try{Object.defineProperty(f,t,{value:n,configurable:!0,writable:!0})}catch(e){f[t]=n}return n}function b(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++R+F).toString(36)}function h(e){return e=function(e,t){if(!g(e)||C(e))return e;var n=e[k];if(void 0===n)return E(e,t=void 0===t?"number":t);if(t=n.call(e,t=void 0===t?"default":t),!g(t)||C(t))return t;throw TypeError("Can't convert object to primitive value")}(e,"string"),C(e)?e:String(e)}function w(e){if(!g(e))throw TypeError(String(e)+" is not an object");return e}var S,O=P&&+P,j=!!Object.getOwnPropertySymbols&&!n(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&O&&O<41}),a=j&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,C=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return"function"==typeof t&&Object(e)instanceof t},E=function(e,t){var n,r;if("string"===t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!g(r=n.call(e)))return r;if("string"!==t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},L="__core-js_shared__",T=f[L]||v(L,{}),P=t(function(e){(e.exports=function(e,t){return T[e]||(T[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.17.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),D={}.hasOwnProperty,W=Object.hasOwn||function(e,t){return D.call(Object(o(e)),t)},R=0,F=Math.random(),I=P("wks"),M=f.Symbol,x=a?M:M&&M.withoutSetter||b,k=(W(I,S="toPrimitive")&&(j||"string"==typeof I[S])||(j&&W(M,S)?I[S]=M[S]:I[S]=x("Symbol."+S)),I[S]),N=f.document,_=g(N)&&g(N.createElement),q=!s&&!n(function(){return 7!=Object.defineProperty(_?N.createElement("div"):{},"a",{get:function(){return 7}}).a}),z=Object.getOwnPropertyDescriptor,A={f:s?z:function(e,t){if(e=u(e),t=h(t),q)try{return z(e,t)}catch(e){}if(W(e,t))return r(!l.f.call(e,t),e[t])}},B=Object.defineProperty,G={f:s?B:function(e,t,n){if(w(e),t=h(t),w(n),q)try{return B(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},H=s?function(e,t,n){return G.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e},K=Function.toString;"function"!=typeof T.inspectSource&&(T.inspectSource=function(e){return K.call(e)});var V,Y,J,Q,U,X,Z,$,ee,te=T.inspectSource,L=f.WeakMap,a="function"==typeof L&&/native code/.test(te(L)),ne=P("keys"),re={},oe="Object already initialized",L=f.WeakMap;Z=a||T.state?(V=T.state||(T.state=new L),Y=V.get,J=V.has,Q=V.set,U=function(e,t){if(J.call(V,e))throw new TypeError(oe);return t.facade=e,Q.call(V,e,t),t},X=function(e){return Y.call(V,e)||{}},function(e){return J.call(V,e)}):($=ne[ee="state"]||(ne[ee]=b(ee)),re[$]=!0,U=function(e,t){if(W(e,$))throw new TypeError(oe);return t.facade=e,H(e,$,t),t},X=function(e){return W(e,$)?e[$]:{}},function(e){return W(e,$)});function ie(e,t){var n,r=u(e),o=0,i=[];for(n in r)!W(re,n)&&W(r,n)&&i.push(n);for(;t.length>o;)W(r,n=t[o++])&&(~me(i,n)||i.push(n));return i}var ae={set:U,get:X,has:Z,enforce:function(e){return Z(e)?X(e):U(e,{})},getterFor:function(n){return function(e){var t;if(!g(e)||(t=X(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},ce=t(function(e){var t=ae.get,c=ae.enforce,u=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||W(n,"name")||H(n,"name",t),(r=c(n)).source||(r.source=u.join("string"==typeof t?t:""))),e!==f?(o?!a&&e[t]&&(i=!0):delete e[t],i?e[t]=n:H(e,t,n)):i?e[t]=n:v(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||te(this)})}),ue=Math.ceil,fe=Math.floor,se=function(e){return isNaN(e=+e)?0:(0<e?fe:ue)(e)},de=Math.min,le=Math.max,pe=Math.min,P=function(c){return function(e,t,n){var r,o=u(e),i=0<(e=o.length)?de(se(e),9007199254740991):0,a=function(e,t){e=se(e);return e<0?le(e+t,0):pe(e,t)}(n,i);if(c&&t!=t){for(;a<i;)if((r=o[a++])!=r)return!0}else for(;a<i;a++)if((c||a in o)&&o[a]===t)return c||a||0;return!c&&-1}},me={includes:P(!0),indexOf:P(!1)}.indexOf,ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ge=ye.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return ie(e,ge)}},be={f:Object.getOwnPropertySymbols},he=i("Reflect","ownKeys")||function(e){var t=ve.f(w(e)),n=be.f;return n?t.concat(n(e)):t},we=/#|\.prototype\./,a=function(e,t){e=Oe[Se(e)];return e==Ce||e!=je&&("function"==typeof t?n(t):!!t)},Se=a.normalize=function(e){return String(e).replace(we,".").toLowerCase()},Oe=a.data={},je=a.NATIVE="N",Ce=a.POLYFILL="P",Ee=a,Le=A.f,L=function(e,t){var n,r,o,i=e.target,a=e.global,c=e.stat,u=a?f:c?f[i]||v(i,{}):(f[i]||{}).prototype;if(u)for(n in t){if(r=t[n],o=e.noTargetGet?(o=Le(u,n))&&o.value:u[n],!Ee(a?n:i+(c?".":"#")+n,e.forced)&&void 0!==o){if(typeof r==typeof o)continue;!function(e,t){for(var n=he(t),r=G.f,o=A.f,i=0;i<n.length;i++){var a=n[i];W(e,a)||r(e,a,o(t,a))}}(r,o)}(e.sham||o&&o.sham)&&H(r,"sham",!0),ce(u,n,r,e)}},Te=Object.keys||function(e){return ie(e,ye)},Pe=l.f,P=function(c){return function(e){for(var t,n=u(e),r=Te(n),o=r.length,i=0,a=[];i<o;)t=r[i++],s&&!Pe.call(n,t)||a.push(c?[t,n[t]]:n[t]);return a}},a={entries:P(!0),values:P(!1)},De=a.entries;L({target:"Object",stat:!0},{entries:function(e){return De(e)}});P=f;P.Object.entries;var We,Re=a.values;L({target:"Object",stat:!0},{values:function(e){return Re(e)}}),P.Object.values;var Fe=!1,Ie=!1,Me=!1;function xe(){Fe&&Ie&&Me&&We()}var ke={FontsLoaded:function(){Me=!0,xe()},WebComponentsLoaded:function(){Fe=!0,xe()},WCRDispatched:function(){Ie=!0,xe()},WebComponentsReady:new Promise(function(e){We=e}),reset:function(){Ie=Me=Fe=!1,this.WebComponentsReady=new Promise(function(e){We=e})}};window.addEventListener("d2l-performance-measure",function(n){var e=/(\?|&)timingdebug=(1|0)/gi.exec(location.search);if(null!==e&&3===e.length){var t="0"!==e[2];try{t?window.sessionStorage.setItem("TimingDebug","1"):window.sessionStorage.removeItem("TimingDebug")}catch(n){}}t=!1;try{t=null!==window.sessionStorage.getItem("TimingDebug")}catch(n){}t&&requestAnimationFrame(function(){var e=document.createElement("div"),t="paint"===n.detail.value.entryType?n.detail.value.startTime:n.detail.value.duration;e.appendChild(document.createTextNode(n.detail.value.name+": "+Math.floor(t)));t=document.querySelector(".d2l-page-timing");null===t?((t=document.createElement("div")).className="d2l-page-timing",t.appendChild(e),document.body.appendChild(t)):t.appendChild(e)})}),function(){if(window.performance&&window.performance.mark&&window.performance.measure&&window.performance.getEntriesByName){var e=!1,t=!1,n=!1;if("complete"===document.readyState?c():addEventListener("load",c),ke.WebComponentsReady.then(a),"PerformanceObserver"in window){var r=new PerformanceObserver(function(e){e=e.getEntries();void 0!==e&&0<e.length&&e.forEach(function(e){o("d2l.page."+e.name,e)})});try{r.observe({entryTypes:["paint"]})}catch(e){}}setTimeout(a,1e4)}function o(e,t){document.dispatchEvent(new CustomEvent("d2l-performance-measure",{bubbles:!0,detail:{name:e,value:t}}))}function i(e,t,n,r){window.performance.measure(e,t,n);n=window.performance.getEntriesByName(e,"measure");1===n.length&&r&&o(e,n[0])}function a(){e||(e=!0,window.performance.mark("webComponentsReady"),u())}function c(){t=!0,u()}function u(){e&&t&&!n&&(n=!0,i("d2l.page.preFetch","navigationStart","fetchStart",!1),i("d2l.page.domInteractive","fetchStart","domInteractive",!1),i("d2l.page.domContentLoadedHandlers","domContentLoadedEventStart","domContentLoadedEventEnd",!1),i("d2l.page.load","fetchStart","loadEventStart",!1),i("d2l.page.server","requestStart","responseStart",!1),i("d2l.page.download","responseStart","responseEnd",!1),i("d2l.page.timeToClient","navigationStart","responseEnd",!0),i("d2l.page.webComponentsReady","navigationStart","webComponentsReady",!0))}}(),window.D2L=window.D2L||{},window.D2L.FontsLoaded=ke.FontsLoaded,window.D2L.WebComponentsLoaded=ke.WebComponentsLoaded,window.D2L.WCRDispatched=ke.WCRDispatched,window.D2L.WebComponentsReady=ke.WebComponentsReady,window.d2lWCLoaded&&ke.WebComponentsLoaded(),window.d2lWCRDispatched&&ke.WCRDispatched(),window.d2lFontsLoaded?ke.FontsLoaded():setTimeout(function(){ke.FontsLoaded()},2e3)}();