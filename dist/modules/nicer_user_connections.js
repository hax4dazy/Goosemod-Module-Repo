parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,c,e,o,t,a,r){try{var d=n[a](r),u=d.value}catch(A){return void e(A)}d.done?c(u):Promise.resolve(u).then(o,t)}function c(c){return function(){var e=this,o=arguments;return new Promise(function(t,a){var r=c.apply(e,o);function d(c){n(r,t,a,d,u,"next",c)}function u(c){n(r,t,a,d,u,"throw",c)}d(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,o="1.0.3",t='.connectedAccount-36nQx7 {\n\tbackground-color: rbga(0, 0, 0, 0);\n\tborder-width: 0;\n}\n\n.connectedAccount-36nQx7 > .connectedAccountIcon-3P3V6F {\n\tz-index: 1;\n}\n\n.connectedAccount-36nQx7 > .connectedAccountIcon-3P3V6F + .connectedAccountNameInner-1phBvE::after {\n\t--box-shadow: -2px 0 0 0;\n\tcontent: "";\n\tposition: absolute;\n\tborder-radius: 1px 3px 3px 1px;\n\tmargin-left: -35px;\n\theight: 46px;\n\twidth: 44%;\n}\n\n.connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE + a.anchor-3Z-8Bb {\n\tz-index: 1;\n}\n\n.connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2, .connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2 + span {\n\tz-index: 1;\n}\n\n.connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2 > .flowerStarContainer-3zDVtj > svg > path, .connectedAccount-36nQx7 > .connectedAccountNameInner-1phBvE > .connectedAccountName-f8AEe2 + span > .flowerStarContainer-3zDVtj > svg > path {\n\tfill: #fff;\n\topacity: 0.4;\n}\n\n/* Discord Default */\n.connectedAccountIcon-3P3V6F[alt*="GitHub"] + .connectedAccountNameInner-1phBvE {\n  /* Github */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="GitHub"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #24292E;\n\tbox-shadow: var(--box-shadow) #d9dadb;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Twitch"] + .connectedAccountNameInner-1phBvE {\n  /* Twitch */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Twitch"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #3a2b5f;\n\tbox-shadow: var(--box-shadow) #9059F6;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Steam"] + .connectedAccountNameInner-1phBvE {\n  /* Steam */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Steam"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #171A21;\n\tbox-shadow: var(--box-shadow) #3b587c;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Spotify"] + .connectedAccountNameInner-1phBvE {\n  /* Spotify */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Spotify"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #138139;\n\tbox-shadow: var(--box-shadow) #1ED760;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Twitter"] + .connectedAccountNameInner-1phBvE {\n  /* Twitter */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Twitter"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #0c5886;\n\tbox-shadow: var(--box-shadow) #76C5F5;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Reddit"] + .connectedAccountNameInner-1phBvE {\n  /* Reddit */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Reddit"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #81340e;\n\tbox-shadow: var(--box-shadow) #FF6314;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="YouTube"] + .connectedAccountNameInner-1phBvE {\n  /* YouTube */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="YouTube"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #6d1616;\n\tbox-shadow: var(--box-shadow) #EE0F0F;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Battle"] + .connectedAccountNameInner-1phBvE {\n  /* Blizzard/Battle.net */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Battle"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #175266;\n\tbox-shadow: var(--box-shadow) #3AB1DA;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Xbox"] + .connectedAccountNameInner-1phBvE {\n  /* Xbox Live */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Xbox"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #1c632a;\n\tbox-shadow: var(--box-shadow) #77BB44;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Facebook"] + .connectedAccountNameInner-1phBvE {\n  /* Facebook */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Facebook"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #14223d;\n\tbox-shadow: var(--box-shadow) #3A5998;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="League of Legends"] + .connectedAccountNameInner-1phBvE {\n  /* League of Legend (LoL) */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="League of Legends"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #424491;\n\tbox-shadow: var(--box-shadow) #676AE6;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Skype"] + .connectedAccountNameInner-1phBvE {\n  /* Skype */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Skype"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #424491;\n\tbox-shadow: var(--box-shadow) #676AE6;\n}\n\n/* Better User Connections Plugin Support */\n.connectedAccountIcon-3P3V6F[alt*="GitLab"] + .connectedAccountNameInner-1phBvE {\n  /* GitLab */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="GitLab"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #8f2b1b;\n\tbox-shadow: var(--box-shadow) #FCA326;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Minecraft"] + .connectedAccountNameInner-1phBvE {\n  /* Minecraft */;\n}\n\n.connectedAccountIcon-3P3V6F[alt*="Minecraft"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #2a4911;\n\tbox-shadow: var(--box-shadow) #70B237;\n}\n\n/* discord.bio Plugin Support */\n.connectedAccountIcon-3P3V6F[alt*="discord.bio"] + .connectedAccountNameInner-1phBvE::after {\n\tbackground-color: #3d4870;\n\tbox-shadow: var(--box-shadow) #7289da;\n}',a={gooseModHandlers:{onImport:function(){var n=c(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode(t));case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=c(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()}};exports.default=a;
},{}]},{},["index.js"], null);parcelRequire('index.js').default