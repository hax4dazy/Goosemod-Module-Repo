parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,e,t,r,o,i,a){try{var s=n[i](a),l=s.value}catch(c){return void t(c)}s.done?e(l):Promise.resolve(l).then(r,o)}function e(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,l,"next",e)}function l(e){n(a,o,i,s,l,"throw",e)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,r="0",o='/* Menu Items (right click, server menu, message actions, ect.) */\n.item-1tOPte.focused-3afm-j, .item-1tOPte:active:not(#user-context-user-volume) {\n  color: #fff;\n  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);\n  font-size: 15px;\n  font-weight: bold;\n  transition: 0.1s linear;\n}\n.item-1tOPte.colorPremium-p4p7qO.focused-3afm-j, .item-1tOPte.colorPremium-p4p7qO:active {\n  color: #fff;\n  background: linear-gradient(315deg, #8980F0 0%, #D577F0 74%);\n}\n.item-1tOPte.colorDanger-2qLCe1.focused-3afm-j, .item-1tOPte.colorDanger-2qLCe1:active {\n  color: #fff;\n  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%) !important;\n}\n\n.item-1tOPte {\n  font-weight: 500;\n  transition: 0.1s linear;\n}\n\n.wrapper-2aW0bm > .button-1ZiXG9:not(.dangerous-2r8KxV):hover {\n  color: #fff;\n  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);\n}\n.wrapper-2aW0bm > .button-1ZiXG9:not(.dangerous-2r8KxV):hover > img, .wrapper-2aW0bm > .button-1ZiXG9:not(.dangerous-2r8KxV):hover svg {\n  transform: scale(1.15);\n  transition: 0.15s linear;\n}\n.wrapper-2aW0bm > .button-1ZiXG9.dangerous-2r8KxV:hover {\n  color: #fff;\n  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%);\n}\n.wrapper-2aW0bm > .button-1ZiXG9.dangerous-2r8KxV:hover > svg:hover {\n  transform: scale(1.15);\n  transition: 0.15s linear;\n}\n\n.wrapper-2aW0bm > div > .button-1ZiXG9:hover {\n  color: #fff;\n  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);\n}\n.wrapper-2aW0bm > div > .button-1ZiXG9:hover > img, .wrapper-2aW0bm > div > .button-1ZiXG9:hover svg {\n  transform: scale(1.15);\n  transition: 0.15s linear;\n}\n\n/* Status Menu */\n.status-1fhblQ:active,\n.status-1fhblQ + .description-2L932D:active {\n  color: #fff;\n}\n\n#status-picker > div > .item-1tOPte.focused-3afm-j, #status-picker > div > .item-1tOPte:active {\n  transition: 0.075s linear;\n}\n#status-picker > div > .item-1tOPte.focused-3afm-j > .statusItem-33LqPf > svg > foreignObject > .status-1AY8sU, #status-picker > div > .item-1tOPte:active > .statusItem-33LqPf > svg > foreignObject > .status-1AY8sU {\n  background: #fff !important;\n}\n#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-online, #status-picker > div > .item-1tOPte:active#status-picker-online {\n  background: linear-gradient(315deg, #264D41 0%, #43B581 74%);\n}\n#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-idle, #status-picker > div > .item-1tOPte:active#status-picker-idle {\n  background: linear-gradient(315deg, #C2831B 0%, #FFB740 74%);\n}\n#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-dnd, #status-picker > div > .item-1tOPte:active#status-picker-dnd {\n  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%);\n}\n#status-picker > div > .item-1tOPte.focused-3afm-j#status-picker-invisible, #status-picker > div > .item-1tOPte:active#status-picker-invisible {\n  background: linear-gradient(315deg, #373A45 0%, #747F8D 74%);\n}\n\n/* Server List (home, join/create, discovery, ect) */\n.wrapper-1BJsBx.selected-bZ3Lue > .childWrapper-anI2G9 {\n  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);\n}\n.wrapper-1BJsBx.selected-bZ3Lue > .childWrapper-anI2G9 > .homeIcon-tEMBK1 {\n  transform: scale(1.1);\n  transition: 0.15s linear;\n}\n\n.wrapper-1BJsBx > .childWrapper-anI2G9 > .homeIcon-tEMBK1 {\n  transform: scale(1);\n  transition: 0.15s linear;\n}\n\n.circleIconButton-jET_ig.selected-ugP_am {\n  background: linear-gradient(315deg, #264D41 0%, #43B581 74%);\n}\n.circleIconButton-jET_ig.selected-ugP_am > svg {\n  transform: scale(1.25);\n}\n\n.circleIconButton-jET_ig > svg {\n  transform: scale(1);\n}\n\n/* Settings (user, server, ect.) */\n.side-8zPYf6 > .item-PXvHYJ:hover {\n  transform: scale(1.025);\n  transition: 0.15s linear;\n}\n.side-8zPYf6 > .item-PXvHYJ.selected-3s45Ha {\n  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);\n}\n.side-8zPYf6 > .item-PXvHYJ[data-item-id=DiscordNitro]:not(:hover), .side-8zPYf6 > .item-PXvHYJ[data-item-id=GUILD_PREMIUM]:not(:hover) {\n  transform: scale(1);\n  transition: 0s linear;\n}\n.side-8zPYf6 > .item-PXvHYJ[style="color: rgb(255, 255, 255); background-color: rgb(114, 137, 218);"] {\n  color: #fff;\n  background: linear-gradient(315deg, #8980F0 0%, #D577F0 74%);\n}\n\n.side-8zPYf6 > .item-PXvHYJ {\n  transform: scale(1);\n  transition: 0.15s linear;\n}\n\n/* Blurple Buttons */\n.colorBrand-3pXr91:not(.lookOutlined-3sRXeN):not(.lookBlank-3eh9lL):not(.lookInverted-2D7oAl):not(.buttonColor-7qQbGO):not(.lookLink-9FtZy-) {\n  background: linear-gradient(315deg, #495DA4 0%, #7289DA 74%);\n  color: #fff;\n}\n.colorBrand-3pXr91:not(.lookOutlined-3sRXeN):not(.lookBlank-3eh9lL):not(.lookInverted-2D7oAl):not(.buttonColor-7qQbGO):not(.lookLink-9FtZy-):not([disabled]):hover {\n  transform: scale(1.03);\n  transition: 0.15s linear;\n}\n\n.colorBrand-3pXr91 {\n  transform: scale(1);\n  transition: 0.15s linear;\n}\n\n/* Grey Buttons */\n.colorGrey-2DXtkV:not(.lookGhost-2Fn_0-),\n.colorPrimary-3b3xI6:not(.lookLink-9FtZy-):not(.lookOutlined-3sRXeN),\n.buttonColor-7qQbGO:not(.buttonActive-3FrkXp) {\n  background: linear-gradient(315deg, #373A45 0%, #747F8D 74%);\n  color: #fff;\n}\n.colorGrey-2DXtkV:not(.lookGhost-2Fn_0-):not(.fauxDisabled-2ik0Vw):hover,\n.colorPrimary-3b3xI6:not(.lookLink-9FtZy-):not(.lookOutlined-3sRXeN):not(.fauxDisabled-2ik0Vw):hover,\n.buttonColor-7qQbGO:not(.buttonActive-3FrkXp):not(.fauxDisabled-2ik0Vw):hover {\n  transform: scale(1.03);\n  transition: 0.15s linear;\n}\n\n.colorGrey-2DXtkV:not(.lookGhost-2Fn_0-),\n.colorPrimary-3b3xI6:not(.lookLink-9FtZy-),\n.buttonColor-7qQbGO {\n  transform: scale(1);\n  transition: 0.15s linear;\n}\n\n/* Green Buttons */\n.colorGreen-29iAKY:not(.lookOutlined-3sRXeN),\n.buttonActive-3FrkXp {\n  background: linear-gradient(315deg, #264D41 0%, #43B581 74%);\n  color: #fff;\n}\n.colorGreen-29iAKY:not(.lookOutlined-3sRXeN):hover,\n.buttonActive-3FrkXp:hover {\n  transform: scale(1.03);\n  transition: 0.15s linear;\n}\n\n.colorGreen-29iAKY,\n.buttonActive-3FrkXp {\n  transform: scale(1);\n  transition: 0.15s linear;\n}\n\n/* Yellow Buttons */\n.lookFilled-1Gx00P.colorYellow-2JqYwt {\n  background: linear-gradient(315deg, #C2831B 0%, #FFB740 74%);\n  color: #fff;\n}\n.lookFilled-1Gx00P.colorYellow-2JqYwt:hover {\n  transform: scale(1.03);\n  transition: 0.15s linear;\n}\n\n.lookFilled-1Gx00P.colorYellow-2JqYwt {\n  transform: scale(1);\n  transition: 0.15s linear;\n}\n\n/* Red Buttons */\n.lookFilled-1Gx00P.colorRed-1TFJan {\n  background: linear-gradient(315deg, #AA3738 0%, #F04747 74%);\n  color: #fff;\n}\n.lookFilled-1Gx00P.colorRed-1TFJan:hover {\n  transform: scale(1.03);\n  transition: 0.15s linear;\n}\n\n.lookFilled-1Gx00P.colorRed-1TFJan {\n  transform: scale(1);\n  transition: 0.15s linear;\n}',i={goosemodHandlers:{onImport:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode(o));case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.remove();case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()}};exports.default=i;
},{}]},{},["index.js"], null);parcelRequire('index.js').default