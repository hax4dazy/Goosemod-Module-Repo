parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../goosemodModule.json":[function(require,module,exports) {
module.exports={main:"src/index.js",version:"1.1.2",name:"Comfy Theme",authors:["265924886461939712","441384103946878987"],description:"A simple, customizable, comfy theme. (Ported with the addition of settings by Liam The Protogen.)",images:["https://raw.githubusercontent.com/Controlfreak707/GM-Comfy-Theme/main/images/image-a.png","https://raw.githubusercontent.com/Controlfreak707/GM-Comfy-Theme/main/images/image-b.png","https://raw.githubusercontent.com/Controlfreak707/GM-Comfy-Theme/main/images/image-c.png","https://raw.githubusercontent.com/Controlfreak707/GM-Comfy-Theme/main/images/image-d.png"],tags:["themes"]};
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../goosemodModule.json");function e(t,e){return c(t)||a(t,e)||n(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function a(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var o=[],n=!0,r=!1,a=void 0;try{for(var c,u=t[Symbol.iterator]();!(n=(c=u.next()).done)&&(o.push(c.value),!e||o.length!==e);n=!0);}catch(i){r=!0,a=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw a}}return o}}function c(t){if(Array.isArray(t))return t}function u(t,e,o,n,r,a,c){try{var u=t[a](c),i=u.value}catch(s){return void o(s)}u.done?e(i):Promise.resolve(i).then(n,r)}function i(t){return function(){var e=this,o=arguments;return new Promise(function(n,r){var a=t.apply(e,o);function c(t){u(a,n,r,c,i,"next",t)}function i(t){u(a,n,r,c,i,"throw",t)}c(void 0)})}}var s,d,l,m,p,f,h,y,g,v,x,C={statusIcon:!1,statusMask:!1,comfyAvatar:!0,coloredEmoji:!0,userButtons:"#096dc0",chatButtons:"#6E85D3",circles:!0,tooltips:!0,seperators:!1,watermark:!1},T=function(t){if(t)(d=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --popout-status-icon: block !important;\n      }")),document.head.appendChild(d);else try{d.remove()}catch(e){}},b=function(t){if(t)(l=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --popout-status-mask: url(#svg-mask-avatar-status-round-80) !important;\n      }")),document.head.appendChild(l);else try{l.remove()}catch(e){}},k=function(t){if(t)try{m.remove()}catch(e){}else(m=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --avatar-radius: 100% !important;\n      }")),document.head.appendChild(m)},E=function(t){if(t)try{p.remove()}catch(e){}else(p=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --colored-emoji: grayscale(100%) !important;\n      }")),document.head.appendChild(p)},w=function(t){try{f.remove()}catch(e){}"#096dc0"!=t&&((f=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --user-buttons-color: ".concat(t," !important;\n      }"))),document.head.appendChild(f))},N=function(t){try{h.remove()}catch(e){}"#6E85D3"!=t&&((h=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --chat-buttons: ".concat(t," !important;\n      }"))),document.head.appendChild(h))},S=function(t){if(t)try{y.remove()}catch(e){}else(y=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --role-circle: 0px !important;\n      }")),document.head.appendChild(y)},j=function(t){if(t)try{g.remove()}catch(e){}else(g=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --tooltips: none !important;\n      }")),document.head.appendChild(g)},A=function(t){if(t)(v=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --seperators: block !important;\n      }")),document.head.appendChild(v);else try{v.remove()}catch(e){}},I=function(t){if(t)(x=document.createElement("style")).appendChild(document.createTextNode(":root {\n        --discord-logo: block !important;\n      }")),document.head.appendChild(x);else try{x.remove()}catch(e){}},M={goosemodHandlers:{onImport:function(){var t=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(s=document.createElement("style")).appendChild(document.createTextNode('@import url("https://raw.githack.com/NYRI4/Comfy/master/comfy.theme.css");')),document.head.appendChild(s),T(C.statusIcon),b(C.statusMask),k(C.comfyAvatar),E(C.coloredEmoji),w(C.userButtons),N(C.chatButtons),S(C.circles),j(C.tooltips),A(C.seperators),I(C.watermark);case 13:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onLoadingFinished:function(){var e=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",goosemodScope.settings.createItem("Comfy Theme",["(v".concat(t.version,")"),{type:"header",text:"BetterAvatar Popout"},{type:"toggle",text:"User Modal Status Icon",onToggle:function(t){C.statusIcon=t,T(t)},isToggled:function(){return C.statusIcon}},{type:"toggle",text:"User Modal Status Mask",onToggle:function(t){C.statusMask=t,b(t)},isToggled:function(){return C.statusMask}},{type:"toggle",text:"Comfy User Modal Avatar",subtext:"Unfortunately, text inputs are not yet avaiable for settings. Disable to use the normal radius of user modal avatars. (Not available while user modal status masks are enabled.)",onToggle:function(t){C.comfyAvatar=t,k(t)},isToggled:function(){return C.comfyAvatar}},{type:"header",text:"Other Settings"},{type:"toggle",text:"Colored Emoji Picker",onToggle:function(t){C.coloredEmoji=t,E(t)},isToggled:function(){return C.coloredEmoji}},{type:"text-and-color",text:"User Settings, Mute and Deafen Buttons Color",subtext:"Default: rgb(9,109,192)",oninput:function(t){C.userButtons=t,w(t)}},{type:"text-and-color",text:"User Buttons Color",subtext:"Default: rgb(110,133,211)",oninput:function(t){C.chatButtons=t,N(t)}},{type:"toggle",text:"Circles Next to Role Names",onToggle:function(t){C.circles=t,S(t)},isToggled:function(){return C.circles}},{type:"toggle",text:"Tooltips",onToggle:function(t){C.tooltips=t,j(t)},isToggled:function(){return C.tooltips}},{type:"toggle",text:"Seperators",onToggle:function(t){C.seperators=t,A(t)},isToggled:function(){return C.seperators}},{type:"toggle",text:"Discord Watermark",onToggle:function(t){C.watermark=t,I(t)},isToggled:function(){return C.watermark}}]));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var t=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:goosemodScope.settings.removeItem("Comfy Theme"),s.remove();try{d.remove()}catch(e){}try{l.remove()}catch(o){}try{m.remove()}catch(n){}try{p.remove()}catch(r){}try{f.remove()}catch(a){}try{h.remove()}catch(c){}try{y.remove()}catch(u){}try{g.remove()}catch(i){}try{v.remove()}catch(C){}try{x.remove()}catch(T){}case 12:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){return[C]},loadSettings:function(t){var o=e(t,1)[0];T((C=o).statusIcon),b(C.statusMask),k(C.comfyAvatar),E(C.coloredEmoji),w(C.userButtons),N(C.chatButtons),S(C.circles),j(C.tooltips),A(C.seperators),I(C.watermark)}}};exports.default=M;
},{"../goosemodModule.json":"../goosemodModule.json"}]},{},["index.js"], null);parcelRequire('index.js').default