parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,r){return i(e)||o(e,r)||n(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}function i(e){if(Array.isArray(e))return e}function a(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,u,"next",e)}function u(e){a(i,r,o,s,u,"throw",e)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u,c,l,d,m=function(e){return new Promise(function(t){return setTimeout(t,e)})},f="1.1.4",p="",y=function(e){u.innerHTML="",u.appendChild(document.createTextNode(e))},v=function(){l.innerHTML=c.innerHTML,d.highlightBlock(l)},g={goosemodHandlers:{onImport:function(){var e=s(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u=document.createElement("style"),document.head.appendChild(u),(c=document.createElement("div")).style.width="90%",c.style.height="85vh",c.style.position="absolute",c.classList.add("hljs","css"),c.style.backgroundColor="var(--background-secondary)",c.contentEditable="true",c.style.fontSize="0.875em",c.style.lineHeight="1.125em",c.style.textIndent="0",c.style.whiteSpace="pre-wrap",c.style.fontFamily="Consolas,Andale Mono WT,Andale Mono,Lucida Console,Lucida Sans Typewriter,DejaVu Sans Mono,Bitstream Vera Sans Mono,Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace",(l=c.cloneNode()).style.pointerEvents="none",l.style.backgroundColor="transparent",l.style.zIndex="2",l.contentEditable="false",d=goosemod.webpackModules.findByPropsAll("highlight")[3],t=function(){p=c.innerHTML,v(),y(c.textContent)},c.innerHTML=p,c.oninput=t,t(),c.addEventListener("paste",function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertText",!1,t)}),goosemodScope.settings.createItem("Custom CSS",["(v".concat(f,")"),{type:"custom",element:c},{type:"custom",element:l}]);case 26:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=s(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.remove(),t=goosemodScope.settings.items.find(function(e){return"Custom CSS"===e[1]}),goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(t),1);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[p]},loadSettings:function(t){var n=e(t,1)[0];p=n,c.innerHTML=p,v(),y(c.textContent)}}};exports.default=g;
},{}]},{},["index.js"], null);parcelRequire('index.js').default