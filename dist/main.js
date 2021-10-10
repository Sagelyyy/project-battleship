(()=>{"use strict";var e={766:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(81),a=t.n(n),o=t(645),s=t.n(o)()(a());s.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n  }\n\n  .gameMessage{\n      margin-left: 45%;\n  }\n\n  .playerForms{\n      display: block;\n      margin-top: 4%;\n  }\n\n.playArea{\n    display: flex;\n    flex-direction: row;\n    margin-left: 25%;\n    margin-top: 4%;\n    width: 900px;\n    height: 900px;\n}\n\n.gbWrapper{\n    width: 450px;\n    height: 190px;\n}\n\n.sbWrapper{\n    width: 450px;\n    height: 190px;\n}\n\n.sb{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.gb{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}",""]);const c=s},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);n&&s[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),r.push(p))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],l=n.base?i[0]+n.base:i[0],p=o[l]||0,u="".concat(l," ").concat(p);o[l]=p+1;var d=t(u),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)r[d].references++,r[d].updater(h);else{var f=a(h,n);n.byIndex=c,r.splice(c,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=t(o[s]);r[c].references--}for(var i=n(e,a),l=0;l<o.length;l++){var p=t(o[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}o=i}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=t(379),r=t.n(e),n=t(795),a=t.n(n),o=t(569),s=t.n(o),c=t(565),i=t.n(c),l=t(216),p=t.n(l),u=t(589),d=t.n(u),h=t(766),f={};f.styleTagTransform=d(),f.setAttributes=i(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),r()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const b=(e,r,t)=>{const n=[];let a,o;switch(t){default:o="?",a=1;break;case"carrier":o="carrier",a=5;break;case"battleship":o="battleship",a=4;break;case"cruiser":o="cruiser",a=3;break;case"submarine":o="submarine",a=3;break;case"destroyer":o="destroyer",a=2}return{owner:e,cpu:r,name:o,len:a,shipArr:n,hit:()=>{n.length<a&&n.push("x")},isSunk:()=>{let e=0;for(let r=0;r<n.length;r+=1)if("x"===n[r]&&(e+=1,e===a))return!0;return!1}}};let m=1;(function(){const e=(()=>{const e={p1Board:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],p1Shots:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],p2Board:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],p2Shots:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]},r=(e,r)=>({carrier:b(e,r,"carrier"),battleship:b(e,r,"battleship"),cruiser:b(e,r,"cruiser"),submarine:b(e,r,"submarine"),destroyer:b(e,r,"destroyer")}),t=r("player1",!1),n=r("player2",!0);return{boards:e,placeShip:(e,r,t,n)=>{const a=e;let o=r.len;for(;o>0;){switch(r.name){default:a[t+o-1][n]="?";break;case"carrier":a[t+o-1][n]="c";break;case"battleship":a[t+o-1][n]="b";break;case"cruiser":a[t+o-1][n]="cr";break;case"submarine":a[t+o-1][n]="s";break;case"destroyer":a[t+o-1][n]="d"}o-=1}},clearBoard:()=>{for(let r=0;r<e.p1Board.length;r+=1)e.p1Board[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p1Shots.length;r+=1)e.p1Shots[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p2Board.length;r+=1)e.p2Board[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p2Shots.length;r+=1)e.p2Shots[r]=[0,0,0,0,0,0,0,0]},p1Ships:t,p2Ships:n,receiveAttack:(r,a,o,s)=>{const c=r;if(0===a[o][s])c[o][s]="m";else{if(r===e.p1Shots)switch(a[o][s]){default:console.log("something went wrong");break;case"c":n.carrier.hit(),c[o][s]="x";break;case"b":n.battleship.hit(),c[o][s]="x";break;case"cr":n.cruiser.hit(),c[o][s]="x";break;case"s":n.submarine.hit(),c[o][s]="x";break;case"d":n.destroyer.hit(),c[o][s]="x"}if(r===e.p2Shots)switch(a[o][s]){default:console.log("something went wrong");break;case"c":t.carrier.hit(),c[o][s]="x";break;case"b":t.battleship.hit(),c[o][s]="x";break;case"cr":t.cruiser.hit(),c[o][s]="x";break;case"s":t.submarine.hit(),c[o][s]="x";break;case"d":t.destroyer.hit(),c[o][s]="x"}}},shipStatus:e=>{const r=[];return Object.values(e).forEach((e=>{r.push(`${e.name} ${e.isSunk()}`)})),r},createShips:r}})();let r,t;function n(){const e=document.querySelector(".nameInput"),r=document.querySelector(".inputDesc"),t=((e,r)=>{const t=(()=>{const e=`player${m}`;return m+=1,e})();return{name:e,type:r,turn:(e,r,n)=>{"player1"===t&&e.receiveAttack(e.boards.p1Shots,e.boards.p2Board,r,n)},playerID:t}})(e.value,"player");return e.value="",r.textContent="Enter player 2 name:",t}function a(){console.log(r),console.log(t)}return document.querySelector(".nameSubmit").onclick=function(){void 0===r?r=n():t=n()},document.querySelector(".getPlayers").onclick=a,document.querySelector(".getShips").onclick=function(){console.log(e.p1Ships),console.log(e.p2Ships)},{boardSetup:function(){let e=8;for(;e>0;){for(let e=0;e<8;e+=1){const e=document.querySelector(".sb"),r=document.createElement("div");r.style.width="50px",r.style.height="50px",r.style.backgroundColor="lightblue",r.style.border="2px solid black",e.appendChild(r)}for(let e=0;e<8;e+=1){const e=document.querySelector(".gb"),r=document.createElement("div");r.style.width="50px",r.style.height="50px",r.style.backgroundColor="lightgrey",r.style.border="2px solid black",e.appendChild(r)}e-=1}},player1:r,player2:t,getPlayers:a}})().boardSetup()})()})();