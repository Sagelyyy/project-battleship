(()=>{"use strict";var e={766:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(81),o=t.n(n),a=t(645),s=t.n(a)()(o());s.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n  }\n  body{\n      background-color: slategray;\n  }\n\n  .shipSelect{\n      margin-left: 40%;\n  }\n\n  .playerForms{\n      display: block;\n      margin-top: 4%;\n  }\n\n.playArea{\n    display: flex;\n    flex-direction: row;\n    margin-left: 25%;\n    margin-top: 4%;\n    width: 900px;\n    height: 900px;\n}\n\n.gbWrapper{\n    width: 450px;\n    height: 190px;\n}\n\n.sbWrapper{\n    width: 450px;\n    height: 190px;\n}\n\n.sb{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.gb{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}",""]);const c=s},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],l=n.base?i[0]+n.base:i[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=t(p),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)r[d].references++,r[d].updater(h);else{var f=o(h,n);n.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=t(a[s]);r[c].references--}for(var i=n(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=i}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=t(379),r=t.n(e),n=t(795),o=t.n(n),a=t(569),s=t.n(a),c=t(565),i=t.n(c),l=t(216),u=t.n(l),p=t(589),d=t.n(p),h=t(766),f={};f.styleTagTransform=d(),f.setAttributes=i(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),r()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const b=(e,r,t)=>{const n=[];let o,a;switch(t){default:a="?",o=1;break;case"carrier":a="carrier",o=5;break;case"battleship":a="battleship",o=4;break;case"cruiser":a="cruiser",o=3;break;case"submarine":a="submarine",o=3;break;case"destroyer":a="destroyer",o=2}return{owner:e,cpu:r,name:a,len:o,shipArr:n,hit:()=>{n.length<o&&n.push("x")},isSunk:()=>{let e=0;for(let r=0;r<n.length;r+=1)if("x"===n[r]&&(e+=1,e===o))return!0;return!1}}};let y=1;(function(){const e=(()=>{const e={p1Board:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],p1Shots:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],p2Board:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],p2Shots:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]},r=(e,r)=>({carrier:b(e,r,"carrier"),battleship:b(e,r,"battleship"),cruiser:b(e,r,"cruiser"),submarine:b(e,r,"submarine"),destroyer:b(e,r,"destroyer")}),t=r("player1",!1),n=r("player2",!0);return{boards:e,placeShip:(e,r,t,n)=>{const o=e;let a=r.len;for(;a>0;){switch(r.name){default:o[t+a-1][n]="?";break;case"carrier":o[t+a-1][n]="c";break;case"battleship":o[t+a-1][n]="b";break;case"cruiser":o[t+a-1][n]="cr";break;case"submarine":o[t+a-1][n]="s";break;case"destroyer":o[t+a-1][n]="d"}a-=1}},clearBoard:()=>{for(let r=0;r<e.p1Board.length;r+=1)e.p1Board[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p1Shots.length;r+=1)e.p1Shots[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p2Board.length;r+=1)e.p2Board[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p2Shots.length;r+=1)e.p2Shots[r]=[0,0,0,0,0,0,0,0]},p1Ships:t,p2Ships:n,receiveAttack:(r,o,a,s)=>{const c=r;if(0===o[a][s])c[a][s]="m";else{if(r===e.p1Shots)switch(o[a][s]){default:console.log("something went wrong");break;case"c":n.carrier.hit(),c[a][s]="x";break;case"b":n.battleship.hit(),c[a][s]="x";break;case"cr":n.cruiser.hit(),c[a][s]="x";break;case"s":n.submarine.hit(),c[a][s]="x";break;case"d":n.destroyer.hit(),c[a][s]="x"}if(r===e.p2Shots)switch(o[a][s]){default:console.log("something went wrong");break;case"c":t.carrier.hit(),c[a][s]="x";break;case"b":t.battleship.hit(),c[a][s]="x";break;case"cr":t.cruiser.hit(),c[a][s]="x";break;case"s":t.submarine.hit(),c[a][s]="x";break;case"d":t.destroyer.hit(),c[a][s]="x"}}},shipStatus:e=>{const r=[];return Object.values(e).forEach((e=>{r.push(`${e.name} ${e.isSunk()}`)})),r},createShips:r}})();let r,t;function n(){const e=document.querySelector(".nameInput"),r=document.querySelector(".inputDesc"),t=((e,r)=>{const t=(()=>{const e=`player${y}`;return y+=1,e})();return{name:e,type:r,turn:(e,r,n)=>{"player1"===t&&e.receiveAttack(e.boards.p1Shots,e.boards.p2Board,r,n)},playerID:t}})(e.value,"player");return e.value="",r.textContent="Enter player 2 name:",t}function o(){console.log(r),console.log(t)}return document.querySelector(".nameSubmit").onclick=function(){void 0===r?r=n():(t=n(),document.querySelector(".shipSelect").hidden=!1,document.querySelector(".carrierBtn").onclick=alert("ph"))},document.querySelector(".getPlayers").onclick=o,document.querySelector(".getShips").onclick=function(){console.log(e.p1Ships),console.log(e.p2Ships)},document.querySelector(".getBoards").onclick=function(){console.log(e.boards.p1Board),console.log(e.boards.p2Board)},document.querySelector(".placement").addEventListener("click",(function(){!function(r){r=e.boards.p1Board;for(let e=0;e<r.length;e+=1)for(let t=0;t<r[e].length;t+=1)if(0!==r[e][t]){const n=document.querySelectorAll(`.myTile${t}`);for(let t=0;t<r.length;t+=1)n[e].style.backgroundColor="red"}}(e.boards.p1Board)})),{boardSetup:function(){let e=8;for(;e>0;){for(let e=0;e<8;e+=1){const r=document.querySelector(".sb"),t=document.createElement("div");t.classList.add(`myTile${e}`),t.id=`tile${e}`,t.textContent=e,t.style.width="50px",t.style.height="50px",t.style.backgroundColor="lightblue",t.style.border="2px solid black",r.appendChild(t)}for(let e=0;e<8;e+=1){const e=document.querySelector(".gb"),r=document.createElement("div");r.classList.add("shotsTile"),r.style.width="50px",r.style.height="50px",r.style.backgroundColor="lightgrey",r.style.border="2px solid black",e.appendChild(r)}e-=1}},player1:r,player2:t,getPlayers:o}})().boardSetup()})()})();