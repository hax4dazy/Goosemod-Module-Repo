parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=r(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw i}}}}function r(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function t(e,r,n,t,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?r(c):Promise.resolve(c).then(t,o)}function o(e){return function(){var r=this,n=arguments;return new Promise(function(o,a){var i=e.apply(r,n);function u(e){t(i,o,a,u,c,"next",e)}function c(e){t(i,o,a,u,c,"throw",e)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a,i,u="3.1.2",c=[],s=function(){var e=o(regeneratorRuntime.mark(function e(r){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.id,t=document.getElementById("chat-messages-".concat(n))){e.next=4;break}return e.abrupt("return");case 4:if(!t.classList.contains("gm-deleted-message")){e.next=6;break}return e.abrupt("return");case 6:t.classList.add("gm-deleted-message"),t.style.backgroundColor="rgba(240, 71, 71, 0.1)";case 8:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),f=function(){var r,n=e(c);try{for(n.s();!(r=n.n()).done;){var t=r.value;s(t)}}catch(o){n.e(o)}finally{n.f()}},d=function(e){return e._orderedActionHandlers.MESSAGE_DELETE.find(function(e){return e.actionHandler.toString().includes("revealedMessageId")})},l=0,p=function e(){var r=goosemodScope.webpackModules.findByProps("register");try{a=d(r)}catch(n){return setTimeout(e,3e3)}l=r._orderedActionHandlers.MESSAGE_DELETE.indexOf(d(r)),r._orderedActionHandlers.MESSAGE_DELETE[l]={actionHandler:function(e){c.find(function(r){return r.id===e.id})||(c.push(e),s(e))},storeDidChange:function(){}}},m={gooseModHandlers:{onImport:function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=setInterval(f,300),p();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var r=o(regeneratorRuntime.mark(function r(){var n,t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:clearInterval(i),n=e(document.getElementsByClassName("gm-deleted-message"));try{for(n.s();!(t=n.n()).done;)t.value.remove()}catch(o){n.e(o)}finally{n.f()}goosemodScope.webpackModules.findByProps("register")._orderedActionHandlers.MESSAGE_DELETE[l]=a;case 4:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),logRegionColor:"darkred"}};exports.default=m;
},{}]},{},["index.js"], null);parcelRequire('index.js').default