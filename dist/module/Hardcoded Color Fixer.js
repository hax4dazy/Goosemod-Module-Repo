parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,u=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw u}}}}function t(e){return a(e)||o(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return u(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t,r,n,o,a,u){try{var c=e[a](u),i=c.value}catch(s){return void r(s)}c.done?t(i):Promise.resolve(i).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function u(e){c(a,n,o,u,i,"next",e)}function i(e){c(a,n,o,u,i,"throw",e)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s="2.1.3",l=function(e){return e.split(";").map(function(e){return e.trim()}).filter(function(e){return e.startsWith("--")}).map(function(e){return e.split(":")})},f={goosemodHandlers:{onImport:function(){var r=i(regeneratorRuntime.mark(function r(){var n,o,a,u,c,i,s,f,d,p,b,m,v,h,y;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:n=document.createElement("canvas").getContext("2d"),o=function(e){return n.fillStyle=e,n.fillStyle},a=function(e){return e.replace(/rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/g,o)},u=window.document.styleSheets[0],c=l(t(u.cssRules).find(function(e){return".theme-dark"===e.selectorText}).cssText),i=l(t(u.cssRules).find(function(e){return".theme-light"===e.selectorText}).cssText),s=c.concat(i).filter(function(e){return!e[0].includes("scrollbar")&&!e[0].includes("logo")}).map(function(e){return e[1]=o(e[1]),e}),u.insertRule("body {\n      --brand-color: #7289da;\n      --brand-color-hover: #677bc4;\n    }",u.cssRules.length),s.push(["--brand-color","#7289da"]),s.push(["--brand-color-hover","#677bc4"]),f=e(u.cssRules),r.prev=11,f.s();case 13:if((d=f.n()).done){r.next=41;break}if(".theme-light"!==(p=d.value).selectorText&&".theme-dark"!==p.selectorText&&"body"!==p.selectorText){r.next=17;break}return r.abrupt("continue",39);case 17:b=a(p.cssText),m=!1,v=e(s),r.prev=20,v.s();case 22:if((h=v.n()).done){r.next=30;break}if(y=h.value,!b.includes(y[1])){r.next=28;break}return b=b.replace(y[1],"var(".concat(y[0],")")),m=!0,r.abrupt("break",30);case 28:r.next=22;break;case 30:r.next=35;break;case 32:r.prev=32,r.t0=r.catch(20),v.e(r.t0);case 35:return r.prev=35,v.f(),r.finish(35);case 38:m&&u.insertRule("".concat(b),u.cssRules.length);case 39:r.next=13;break;case 41:r.next=46;break;case 43:r.prev=43,r.t1=r.catch(11),f.e(r.t1);case 46:return r.prev=46,f.f(),r.finish(46);case 49:case"end":return r.stop()}},r,null,[[11,43,46,49],[20,32,35,38]])}));return function(){return r.apply(this,arguments)}}(),onRemove:function(){var e=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),logRegionColor:"darkred"}};exports.default=f;
},{}]},{},["index.js"], null);parcelRequire('index.js').default