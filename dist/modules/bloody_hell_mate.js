parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,r,n,o,a,u){try{var i=e[a](u),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(o,a){var u=t.apply(r,n);function i(t){e(u,o,a,i,c,"next",t)}function c(t){e(u,o,a,i,c,"throw",t)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r,n="0",o={gooseModHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=document.createElement("style"),document.head.appendChild(r),r.appendChild(document.createTextNode('@import url("https://raw.githack.com/MrDragonBoi/bloody-hell-mate/main/index.css")'));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.remove();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default