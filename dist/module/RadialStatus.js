parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function r(r,t,a,e,p,n,o){try{var i=r[n](o),s=i.value}catch(c){return void a(c)}i.done?t(s):Promise.resolve(s).then(e,p)}function t(t){return function(){var a=this,e=arguments;return new Promise(function(p,n){var o=t.apply(a,e);function i(t){r(o,p,n,i,s,"next",t)}function s(t){r(o,p,n,i,s,"throw",t)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a,e="1.0.0",p='#app-mount .wrapper-3t9DeA svg:not(:root) {  overflow: visible;}#app-mount .wrapper-3t9DeA foreignObject {  -webkit-mask: none;          mask: none;}#app-mount .wrapper-3t9DeA .dots-3Bkt3k circle:nth-child(1) {  cy: -8 !important;  cx: -8.5 !important;}#app-mount .wrapper-3t9DeA .dots-3Bkt3k circle:nth-child(2) {  cy: -8 !important;  cx: -2.25 !important;}#app-mount .wrapper-3t9DeA .dots-3Bkt3k circle:nth-child(3) {  cy: -8 !important;  cx: 4 !important;}#app-mount .wrapper-3t9DeA .mask-1l8v16 > rect[x="22"] {  x: 0;  y: 0;}#app-mount .wrapper-3t9DeA .cursorDefault-dsQJ1n rect {  x: -49;  y: -53;}#app-mount .wrapper-3t9DeA .pointerEvents-2zdfdO[x="14.5"] {  fill: rgba(0, 0, 0, 0.5) !important;  width: 30px;  height: 30px;  x: 1;  y: 1;}#app-mount .wrapper-3t9DeA > svg > foreignObject img {  border-radius: var(--rs-avatar-shape);}#app-mount .wrapper-3t9DeA > svg > foreignObject:not(:only-child) img {  -webkit-clip-path: inset(calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px) round var(--rs-avatar-shape));          clip-path: inset(calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px) round var(--rs-avatar-shape));}#app-mount .wrapper-3t9DeA svg[width="25"][height="15"] > rect {  rx: calc(var(--rs-avatar-shape) * 2) !important;  ry: calc(var(--rs-avatar-shape) * 2) !important;}#app-mount .wrapper-3t9DeA rect {  x: 0;  y: 0;  width: 100%;  height: 100%;  -webkit-mask: none;          mask: none;  display: block !important;  rx: var(--rs-avatar-shape) !important;  ry: var(--rs-avatar-shape) !important;  fill: transparent !important;  stroke-width: var(--rs-width);}#app-mount .wrapper-3t9DeA rect[fill="#43b581"], #app-mount .wrapper-3t9DeA rect[fill="rgba(67, 181, 129, 1)"], #app-mount .wrapper-3t9DeA rect[mask*=online] {  stroke: var(--rs-online-color);}#app-mount .wrapper-3t9DeA rect[fill="#faa61a"], #app-mount .wrapper-3t9DeA rect[fill="rgba(250, 166, 26, 1)"], #app-mount .wrapper-3t9DeA rect[mask*=idle] {  stroke: var(--rs-idle-color);}#app-mount .wrapper-3t9DeA rect[fill="#f04747"], #app-mount .wrapper-3t9DeA rect[fill="rgba(240, 71, 71, 1)"], #app-mount .wrapper-3t9DeA rect[mask*=dnd] {  stroke: var(--rs-dnd-color);}#app-mount .wrapper-3t9DeA rect[fill="#593695"], #app-mount .wrapper-3t9DeA rect[mask*=streaming] {  stroke: var(--rs-streaming-color);}#app-mount .wrapper-3t9DeA rect[fill="#747f8d"], #app-mount .wrapper-3t9DeA rect[mask*=offline], #app-mount .wrapper-3t9DeA rect[fill=NaN] {  stroke: var(--rs-offline-color);}#app-mount .wrapper-3t9DeA rect[mask*=invisible], #app-mount .wrapper-3t9DeA rect[fill="rgba(116, 127, 141, 1)"] {  stroke: var(--rs-invisible-color);}#app-mount .wrapper-3t9DeA rect[x="16"] {  width: 24px;  height: 24px;}#app-mount .wrapper-3t9DeA rect[x="28"] {  width: 40px;  height: 40px;  overflow: visible;}#app-mount .wrapper-3t9DeA[style*="width: 80px;"] {  position: relative;  margin-right: 0 !important;}#app-mount .wrapper-3t9DeA[style*="width: 80px;"] rect {  width: 80px;  height: 80px;  pointer-events: none;}#app-mount .wrapper-3t9DeA[style*="width: 80px;"] img {  -webkit-clip-path: inset(calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px) round var(--rs-avatar-shape));          clip-path: inset(calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px) round var(--rs-avatar-shape));}#app-mount .wrapper-3t9DeA[style*="width: 80px;"][style*="width:80px;"]:after {  left: unset;  right: -2px;  top: unset;  bottom: -2px;  transform: none;}#app-mount .wrapper-3t9DeA[style*="width: 32px;"] rect {  width: 32px;  height: 32px;  x: -14.5;  y: -17;  position: relative;  z-index: 0;}#app-mount .avatarHint-1qgaV3 foreignObject {  -webkit-mask: none;          mask: none;}#app-mount .avatarHint-1qgaV3 .avatarHintInner-Dco91E {  border-radius: var(--rs-avatar-shape) !important;  padding-top: 0;  width: calc(100% - var(--rs-width) * 4);  height: calc(100% - var(--rs-width) * 4);  margin-top: calc(var(--rs-width) + 2px);  margin-left: calc(var(--rs-width) + 2px);}#app-mount .message-1PNnaP .mask-1l8v16 img {  -webkit-clip-path: circle(calc(19px - var(--rs-small-spacing)));          clip-path: circle(calc(19px - var(--rs-small-spacing)));}#app-mount .memberOffline-2lN7gt img {  -webkit-clip-path: none !important;          clip-path: none !important;}#app-mount .header-QKLPzZ .wrapper-3t9DeA {  margin-right: 20px !important;}#app-mount .offline-3nJYBR img {  -webkit-clip-path: none !important;          clip-path: none !important;}#app-mount .wrapper-3t9DeA foreignObject[mask*=mobile] {  width: calc(100% + 4px);}#app-mount .wrapper-3t9DeA foreignObject[mask*=mobile][width="32"] img {  width: 32px;}#app-mount .wrapper-3t9DeA foreignObject[mask*=mobile][width="80"] img {  width: 80px;}#app-mount .wrapper-3t9DeA foreignObject[mask*=mobile]:after {  content: "";  -webkit-mask: url(\'data:image/svg+xml; utf-8,<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>\') center/8px no-repeat;  display: block;  position: absolute;  width: 10px;  height: 14px;  top: 50%;  transform: translateY(-50%);  right: 0;  background: var(--rs-online-color);  z-index: 1;}#app-mount .wrapper-3t9DeA:before {  content: none !important;}:root {  --rs-small-spacing: 2px;    --rs-large-spacing: 3px;    --rs-width: 2px;    --rs-avatar-shape: 50%;    --rs-online-color: #43b581;    --rs-idle-color: #faa61a;    --rs-dnd-color: #f04747;    --rs-offline-color: #636b75;    --rs-streaming-color: #643da7;    --rs-invisible-color: #747f8d;  }',n={goosemodHandlers:{onImport:function(){var r=t(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a=document.createElement("style"),document.head.appendChild(a),a.appendChild(document.createTextNode(p));case 3:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),onRemove:function(){var r=t(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a.remove();case 1:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default