parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function s(t){e(i,o,a,s,c,"next",t)}function c(t){e(i,o,a,s,c,"throw",t)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n,r,o,a,i="1.0.2",s=function(){var e=document.getElementsByClassName("userPopout-3XzG_A")[0];if(e&&!e.classList.contains("more-info-added")){var t=n.getUser(r.getMembers(o.getGuildId()).find(function(t){return n.getUser(t.userId).username===e.ariaLabel}).userId),a=e.getElementsByClassName("headerTagWithNickname-3IthZD")[0];if(!a){var i=e.getElementsByClassName("headerTagNoNickname-ENx6no")[0],s=document.createElement("div");i.parentElement.appendChild(s),s.outerHTML='<div class="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6" style="flex: 1 1 auto;"><div class="headerTagWithNickname-3IthZD headerTag-2pZJzA size14-3iUx6q nameTag-m8r81H"></div></div>',a=e.getElementsByClassName("headerTagWithNickname-3IthZD")[0],i.parentElement.style.flexDirection="column"}a.parentElement.style.flexDirection="column";var c=a.cloneNode(!1);c.textContent="Created On: ".concat(t.createdAt.toDateString().split(" ").slice(1).join(" ")),a.parentElement.appendChild(c),e.classList.add("more-info-added")}},c={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=goosemodScope.webpackModules.findByProps("getUser"),r=goosemodScope.webpackModules.findByProps("getNick"),o=goosemodScope.webpackModules.findByPropsAll("getGuildId")[1],a=setInterval(s,300);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:clearInterval(a);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),logRegionColor:"darkred"}};exports.default=c;
},{}]},{},["index.js"], null);parcelRequire('index.js').default