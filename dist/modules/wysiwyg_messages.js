parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];function n(e,n){return i(e)||s(e,n)||r(e,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,s=l}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return t}}function i(e){if(Array.isArray(e))return e}function a(e,n,t,r,o,s,i){try{var a=e[s](i),l=a.value}catch(g){return void t(g)}a.done?n(l):Promise.resolve(l).then(r,o)}function l(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var s=e.apply(n,t);function i(e){a(s,r,o,i,l,"next",e)}function l(e){a(s,r,o,i,l,"throw",e)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var g="1.3.3",u=!0,d=!0,c=!0,m=!0,p=!0,y=!0,w=!0;"undefined"!=typeof window&&void 0!==window.document||(e.window={document:{styleSheets:[0]}});var b=window.document.styleSheets[0];function f(e){u=e;try{document.body.classList[e?"add":"remove"]("gm-wysiwyg-italics-enabled")}catch(n){console.log(n)}}function h(e){d=e;try{document.body.classList[e?"add":"remove"]("gm-wysiwyg-bold-enabled")}catch(n){console.log(n)}}function j(e){c=e;try{document.body.classList[e?"add":"remove"]("gm-wysiwyg-underline-enabled")}catch(n){console.log(n)}}function R(e){m=e;try{document.body.classList[e?"add":"remove"]("gm-wysiwyg-strikethrough-enabled")}catch(n){console.log(n)}}function k(e){p=e;try{document.body.classList[e?"add":"remove"]("gm-wysiwyg-spoiler-enabled")}catch(n){console.log(n)}}function x(e){y=e;try{document.body.classList[e?"add":"remove"]("gm-wysiwyg-inline-enabled")}catch(n){console.log(n)}}function v(e){w=e;try{document.body.classList[e?"add":"remove"]("gm-wysiwyg-quotes-enabled")}catch(n){console.log(n)}}var O={gooseModHandlers:{onImport:function(){var e=l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b.insertRule("body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::before, body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::after {\n      content: '*';\n\n      font-weight: 600;\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::before, body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::after {\n      content: '**';\n\n      font-weight: 600;\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::before, body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::after {\n      content: '__';\n\n      font-weight: 400;\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::before, body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::after {\n      content: '~~';\n\n      font-weight: 400;\n      \n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::before, body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::after {\n      content: '||';\n      \n      font-weight: 400;\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::before, body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::after {\n      content: '`';\n      \n      font-weight: 600;\n      border-radius: 0 3px 3px 0\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::before, body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::before, body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::before, body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::before, body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::before, body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::before {\n      margin-right: 1px;\n\n      letter-spacing: 0.004em;\n\n      display: inline-block;\n      text-decoration: none;\n      font-style: normal;\n\n      filter: brightness(0.5);\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-italics-enabled .messagesWrapper-1sRNjr .markup-2BOw-j em::after, body.gm-wysiwyg-bold-enabled .messagesWrapper-1sRNjr .markup-2BOw-j strong::after, body.gm-wysiwyg-underline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j u::after, body.gm-wysiwyg-strikethrough-enabled .messagesWrapper-1sRNjr .markup-2BOw-j s::after, body.gm-wysiwyg-spoiler-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .spoilerText-3p6IlD::after, body.gm-wysiwyg-inline-enabled .messagesWrapper-1sRNjr .markup-2BOw-j code.inline::after {\n      margin-left: 1px;\n\n      letter-spacing: 0.004em;\n\n      display: inline-block;\n      text-decoration: none;\n      font-style: normal;\n\n      filter: brightness(0.5);\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-quotes-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .blockquoteContainer-U5TVEi .blockquoteDivider-2hH8H6 {\n      width: 0;\n      background-color: transparent;\n\n      margin-right: 2px;\n    }",b.cssRules.length),b.insertRule("body.gm-wysiwyg-quotes-enabled .messagesWrapper-1sRNjr .markup-2BOw-j .blockquoteContainer-U5TVEi .blockquoteDivider-2hH8H6::before {\n      content: '>';\n\n      color: var(--text-normal);\n\n      filter: brightness(0.3);\n      font-weight: 400;\n      \n      display: inline-block;\n      text-decoration: none;\n      font-style: normal;\n    }",b.cssRules.length);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f(!0),h(!0),j(!0),R(!0),k(!0),x(!0),v(!0),goosemodScope.settings.createItem("WYSIWYG Messages",["(v".concat(g,")"),{type:"header",text:"Specific Markdown Elements"},{type:"toggle",text:"Italics",subtext:"*Text*",onToggle:function(e){return f(e)},isToggled:function(){return u}},{type:"toggle",text:"Bold",subtext:"**Text**",onToggle:function(e){return h(e)},isToggled:function(){return d}},{type:"toggle",text:"Underline",subtext:"__Text__",onToggle:function(e){return j(e)},isToggled:function(){return c}},{type:"toggle",text:"Strikethrough",subtext:"~~Text~~",onToggle:function(e){return R(e)},isToggled:function(){return m}},{type:"toggle",text:"Spoilers",subtext:"||Text||",onToggle:function(e){return k(e)},isToggled:function(){return p}},{type:"toggle",text:"Inline Code",subtext:"`Text`",onToggle:function(e){return x(e)},isToggled:function(){return y}},{type:"toggle",text:"Quotes",subtext:"> Text",onToggle:function(e){return v(e)},isToggled:function(){return w}}]);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=l(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f(!1),h(!1),j(!1),R(!1),k(!1),x(!1),v(!1),n=goosemodScope.settings.items.find(function(e){return"WYSIWYG Messages"===e[1]}),goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(n),1);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[u,d,c,m,p,y,w]},loadSettings:function(e){var t=n(e,7),r=t[0],o=t[1],s=t[2],i=t[3],a=t[4],l=t[5],g=t[6];f(r),h(o),j(s),R(i),k(a),x(l),v(g)},logRegionColor:"darkred"}};exports.default=O;
},{}]},{},["index.js"], null);parcelRequire('index.js').default