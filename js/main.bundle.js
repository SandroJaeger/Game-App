!function(){var e,n,t=(e=function(e,n){var t=h.document,r=R(t)&&R(t.createElement);e.exports=function(e){return r?t.createElement(e):{}}},function(t){return n||e(n={exports:{},parent:t},n.exports),n.exports}),r=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},o={}.hasOwnProperty,u=function(e,n){return o.call(e,n)},i={}.toString,a=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return i.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},c=function(e){return a(r(e))},s=Math.ceil,f=Math.floor,l=function(e){return isNaN(e=+e)?0:(e>0?f:s)(e)},d=Math.min,p=Math.max,v=Math.min,b={},m=b={version:"2.6.11"};"number"==typeof __e&&(__e=m);var h={},y=h="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=y);var g,w=h["__core-js_shared__"]||(h["__core-js_shared__"]={});(g=function(e,n){return w[e]||(w[e]=void 0!==n?n:{})})("versions",[]).push({version:b.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});var _,E=0,O=Math.random(),j=g("keys"),S=(!1,function(e,n,t){var r,o=c(e),u=(r=o.length)>0?d(l(r),9007199254740991):0,i=function(e,n){return(e=l(e))<0?p(e+n,0):v(e,n)}(t,u);for(0;u>i;i++)if(i in o&&o[i]===n)return i||0;return-1}),I=j[_="IE_PROTO"]||(j[_]=function(e){return"Symbol(".concat(e,")_",(++E+O).toString(36))}(_)),P="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),L=Object.keys||function(e){return function(e,n){var t,r=c(e),o=0,i=[];for(t in r)t!=I&&u(r,t)&&i.push(t);for(;n.length>o;)u(r,t=n[o++])&&(~S(i,t)||i.push(t));return i}(e,P)},M=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},R=function(e){return"object"==typeof e?null!==e:"function"==typeof e},U=function(e){if(!R(e))throw TypeError(e+" is not an object!");return e},k=function(e){try{return!!e()}catch(e){return!0}},B=!k((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),x=!B&&!k((function(){return 7!=Object.defineProperty(t({})("div"),"a",{get:function(){return 7}}).a})),D={},F=Object.defineProperty;D.f=B?Object.defineProperty:function(e,n,t){if(U(e),n=function(e,n){if(!R(e))return e;var t,r;if("function"==typeof(t=e.toString)&&!R(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!R(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(n),U(t),x)try{return F(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e};var T,A,q,C,z=B?function(e,n,t){return D.f(e,n,function(e,n){return{enumerable:!1,configurable:!0,writable:!0,value:n}}(0,t))}:function(e,n,t){return e[n]=t,e},W={},G=function(e,n,t){var r,o,i,a=e&G.F,c=e&G.G,s=e&G.S,f=e&G.P,l=e&G.B,d=e&G.W,p=c?b:b[n]||(b[n]={}),v=p.prototype,m=c?h:s?h[n]:(h[n]||{}).prototype;for(r in c&&(t=n),t)(o=!a&&m&&void 0!==m[r])&&u(p,r)||(i=o?m[r]:t[r],p[r]=c&&"function"!=typeof m[r]?t[r]:l&&o?M(i,h):d&&m[r]==i?function(e){var n=function(n,t,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(n);case 2:return new e(n,t)}return new e(n,t,r)}return e.apply(this,arguments)};return n.prototype=e.prototype,n}(i):f&&"function"==typeof i?M(Function.call,i):i,f&&((p.virtual||(p.virtual={}))[r]=i,e&G.R&&v&&!v[r]&&z(v,r,i)))};G.F=1,G.G=2,G.S=4,G.P=8,G.B=16,G.W=32,G.U=64,G.R=128,W=G,T="keys",A=function(){return function(e){return L(function(e){return Object(r(e))}(e))}},q=(b.Object||{})[T]||Object[T],(C={})[T]=A(),W(W.S+W.F*k((function(){q(1)})),"Object",C);var N,K=(N={default:b.Object.keys,__esModule:!0})&&N.__esModule?N:{default:N};firebase.initializeApp({apiKey:"AIzaSyCYOU_B-FOU0EersYSuAlBwj0ZQXNxGvKc",authDomain:"uno-uno.firebaseapp.com",databaseURL:"https://uno-uno.firebaseio.com",projectId:"uno-uno",storageBucket:"uno-uno.appspot.com",messagingSenderId:"244475320487",appId:"1:244475320487:web:034f1e777f8d110854a382"});var Y,Q,X,Z=firebase.auth(),$=firebase.database(),H=document.querySelector("#sign-in-btn"),J=document.querySelector("#sign-up-btn"),V=document.querySelector(".container");J.addEventListener("click",(function(){V.classList.add("sign-up-mode")})),H.addEventListener("click",(function(){V.classList.remove("sign-up-mode")})),document.querySelector("#sign-up").addEventListener("click",(function(){var e;Y=document.getElementById("username-sign-up").value,Q=document.getElementById("email-sign-up").value,X=document.getElementById("password-sign-up").value,0!=function(e){return expression=/^[^@]+@\w+(\.\w+)+\w$/,1==expression.test(e)}(Q)&&0!=function(e){return!(e<6)}(X)?0!=(null!=(e=Y)&&!(e.length<=0))?Z.createUserWithEmailAndPassword(Q,X).then((function(){var e=Z.currentUser,n=$.ref(),t={username:Y,email:Q,password:X,last_login:Date.now()};n.child("users/"+e.uid).set(t),alert("User Created!!"),console.log("User Created|||"+Date(Date.now()))})).catch((function(e){e.code;var n=e.message;alert(n)})):alert("Username Field is Outta Line !!"):alert("Email or Password is Outta Line !!")})),document.querySelector("#sign-in").addEventListener("click",(function(){Y=document.getElementById("username-sign-up").value,X=document.getElementById("password-sign-up").value,firebaseRef=firebase.database().ref("users"),firebaseRef.once("value",(function(e){vl=e.val(),(0,K.default)(vl).forEach((function(e){var n;firebaseRef=firebase.database().ref("users/"+e),firebaseRef.child("username").once("value",(function(t){vl=t.val(),n=vl,Y==n&&(firebaseRef=firebase.database().ref("users/"+e),firebaseRef.child("password").once("value",(function(n){blb=n.val(),X==blb&&(firebaseRef=firebase.database().ref("users/"+e),firebaseRef.child("email").once("value",(function(e){Q=e.val()})))})))}))}))})),setTimeout((function(){Z.signInWithEmailAndPassword(Q,X).then((function(){var e=Z.currentUser,n=$.ref(),t={last_login:Date.now()};n.child("users/"+e.uid).update(t),console.log("User Logged In ||||"+Date(Date.now())),alert("User Logged In!!")})).catch((function(e){e.code;var n=e.message;alert(n)}))}),500)}))}();
//# sourceMappingURL=main.bundle.js.map