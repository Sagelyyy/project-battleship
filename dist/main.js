(()=>{"use strict";var e={766:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(81),a=t.n(n),o=t(645),s=t.n(o)()(a());s.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n  }\n  body{\n      background-color: slategray;\n  }\n\n  .shipSelect{\n      margin-left: 40%;\n  }\n\n  .playerForms{\n      margin-left: 40%;\n      margin-right: 50%;\n      display: block;\n      margin-top: 4%;\n      text-align: center;\n  }\n  \n  .nameSubmit{\n      width: 100%;\n  }\n\n.playArea{\n    display: flex;\n    flex-direction: row;\n    margin-left: 20%;\n    margin-top: 4%;\n    width: 1200px;\n    height: 900px;\n}\n\n.gbWrapper{\n    width: 600px;\n    height: 190px;\n}\n\n.sbWrapper{\n    width: 600px;\n    height: 190px;\n}\n\n.sb{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.gb{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}",""]);const c=s},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);n&&s[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),r.push(p))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],l=n.base?i[0]+n.base:i[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=t(d),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)r[u].references++,r[u].updater(h);else{var b=a(h,n);n.byIndex=c,r.splice(c,0,{identifier:d,updater:b,references:1})}s.push(d)}return s}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=t(o[s]);r[c].references--}for(var i=n(e,a),l=0;l<o.length;l++){var p=t(o[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}o=i}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=t(379),r=t.n(e),n=t(795),a=t.n(n),o=t(569),s=t.n(o),c=t(565),i=t.n(c),l=t(216),p=t.n(l),d=t(589),u=t.n(d),h=t(766),b={};b.styleTagTransform=u(),b.setAttributes=i(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),r()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const f=(e,r,t)=>{const n=[];let a,o;switch(t){default:o="?",a=1;break;case"carrier":o="carrier",a=5;break;case"battleship":o="battleship",a=4;break;case"cruiser":o="cruiser",a=3;break;case"submarine":o="submarine",a=3;break;case"destroyer":o="destroyer",a=2}return{owner:e,cpu:r,name:o,len:a,shipArr:n,hit:()=>{n.length<a&&n.push("x")},isSunk:()=>{let e=0;for(let r=0;r<n.length;r+=1)if("x"===n[r]&&(e+=1,e===a))return!0;return!1}}};let y=1;const m=(e,r)=>{const t=(()=>{const e=`player${y}`;return y+=1,e})();return{name:e,type:r,turn:(e,r,n)=>{"player1"===t&&e.receiveAttack(e.boards.p1Shots,e.boards.p2Board,r,n)},playerID:t}};(function(){const e=(()=>{const e={p1Board:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],p1Shots:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],p2Board:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],p2Shots:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]},r=(e,r)=>({carrier:f(e,r,"carrier"),battleship:f(e,r,"battleship"),cruiser:f(e,r,"cruiser"),submarine:f(e,r,"submarine"),destroyer:f(e,r,"destroyer")}),t=r("player1",!1),n=r("player2",!0);return{boards:e,placeShip:(e,r,t,n)=>{const a=e;let o=r.len;for(;o>0;){switch(r.name){default:a[t+o-1][n]="?";break;case"carrier":a[t+o-1][n]="c";break;case"battleship":a[t+o-1][n]="b";break;case"cruiser":a[t+o-1][n]="cr";break;case"submarine":a[t+o-1][n]="s";break;case"destroyer":a[t+o-1][n]="d"}o-=1}},clearBoard:()=>{for(let r=0;r<e.p1Board.length;r+=1)e.p1Board[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p1Shots.length;r+=1)e.p1Shots[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p2Board.length;r+=1)e.p2Board[r]=[0,0,0,0,0,0,0,0];for(let r=0;r<e.p2Shots.length;r+=1)e.p2Shots[r]=[0,0,0,0,0,0,0,0]},p1Ships:t,p2Ships:n,receiveAttack:(r,a,o,s)=>{const c=r;if(0===a[o][s])c[o][s]="m";else{if(r===e.p1Shots)switch(a[o][s]){default:console.log("something went wrong");break;case"c":n.carrier.hit(),c[o][s]="x";break;case"b":n.battleship.hit(),c[o][s]="x";break;case"cr":n.cruiser.hit(),c[o][s]="x";break;case"s":n.submarine.hit(),c[o][s]="x";break;case"d":n.destroyer.hit(),c[o][s]="x"}if(r===e.p2Shots)switch(a[o][s]){default:console.log("something went wrong");break;case"c":t.carrier.hit(),c[o][s]="x";break;case"b":t.battleship.hit(),c[o][s]="x";break;case"cr":t.cruiser.hit(),c[o][s]="x";break;case"s":t.submarine.hit(),c[o][s]="x";break;case"d":t.destroyer.hit(),c[o][s]="x"}}},shipStatus:e=>{const r=[];return Object.values(e).forEach((e=>{r.push(`${e.name} ${e.isSunk()}`)})),r},createShips:r}})();let r,t,n,a;function o(){const e=document.querySelector(".nameInput"),r=document.querySelector(".playerType"),t=document.querySelector(".inputDesc");if(r.checked){const n=m(e.value,r.value);return e.value="",t.textContent="Enter player 2 name:",n}const n=m(e.value,"ai");return e.value="",t.textContent="Enter player 2 name:",n}function s(){console.log(r),console.log(t)}function c(e){for(let r=0;r<e.length;r+=1)for(let t=0;t<e[r].length;t+=1)0!==e[r][t]?document.querySelector(`.x${[r]}.y${[t]}`).style.backgroundColor="red":document.querySelector(`.x${[r]}.y${[t]}`).style.backgroundColor="lightblue"}const i=["carrier","battleship","cruiser","submarine","destroyer"],l=["carrier","battleship","cruiser","submarine","destroyer"];function p(){if(0===i.length&&0===l.length)document.querySelector(".shipSelect").hidden=!0,document.querySelector(".playerForms").hidden=!0;else{let r;document.querySelector(".shipSelect").hidden=!1,i.length>0?(r=i.pop(),document.querySelector(".gameMessage").textContent=`Player 1 place your ${r}`,c(e.boards.p1Board),h(e.boards.p1Board,r)):(r=l.pop(),document.querySelector(".gameMessage").textContent=`Player 2 place your ${r}`,c(e.boards.p2Board),h(e.boards.p2Board,r))}}function d(r){const t=r.target.classList.value.split(/(\d)/);"p1"===a?(e.placeShip(e.boards.p1Board,n,parseInt(t[1],10),parseInt(t[3],10)),c(e.boards.p1Board)):"p2"===a&&(e.placeShip(e.boards.p2Board,n,parseInt(t[1],10),parseInt(t[3],10)),c(e.boards.p2Board)),document.querySelectorAll("#playTile").forEach((e=>{e.removeEventListener("click",d)})),p()}function u(e){n=e,document.querySelectorAll("#playTile").forEach((e=>{e.addEventListener("click",d)}))}function h(r,t){if(r===e.boards.p1Board)switch(a="p1",t){default:console.log("something went wrong");break;case"carrier":u(e.p1Ships.carrier);break;case"battleship":u(e.p1Ships.battleship);break;case"cruiser":u(e.p1Ships.cruiser);break;case"submarine":u(e.p1Ships.submarine);break;case"destroyer":u(e.p1Ships.destroyer)}else if(r===e.boards.p2Board)switch(a="p2",t){default:console.log("something went wrong");break;case"carrier":u(e.p2Ships.carrier);break;case"battleship":u(e.p2Ships.battleship);break;case"cruiser":u(e.p2Ships.cruiser);break;case"submarine":u(e.p2Ships.submarine);break;case"destroyer":u(e.p2Ships.destroyer)}}return document.querySelector(".nameSubmit").onclick=function(){void 0===r?r=o():(t=o(),p())},document.querySelector(".getPlayers").onclick=s,document.querySelector(".getShips").onclick=function(){console.log(e.p1Ships),console.log(e.p2Ships)},document.querySelector(".getBoards").onclick=function(){console.log(e.boards.p1Board),console.log(e.boards.p2Board)},document.querySelector(".shipTest").addEventListener("click",(()=>{e.placeShip(e.boards.p1Board,e.p1Ships.carrier,0,2)})),document.querySelector(".placement").addEventListener("click",(()=>{c(e.boards.p1Board)})),document.querySelector(".clearBoard1").addEventListener("click",(()=>{c(e.boards.p1Board)})),document.querySelector(".clearBoard2").addEventListener("click",(()=>{c(e.boards.p2Board)})),{boardSetup:function(){let e=1,r=-1,t=-1,n=0;const a=["","A","B","C","D","E","F","G","H","I","J"];for(;n<11;){for(let o=0;o<11;o+=1){const s=document.querySelector(".sb"),c=document.createElement("div");c.style.width="50px",c.style.height="50px",c.style.backgroundColor="lightblue",c.style.border="2px solid black",c.id="playTile",0===n&&(c.textContent=a[o]),0===o&&0!==n&&(c.textContent=e,e+=1),o>0&&0!==n&&(c.classList.add(`x${t}`),c.classList.add(`y${r}`),c.textContent=`${t}, ${r}`),r<10?r+=1:r=0,s.appendChild(c)}for(let e=0;e<11;e+=1){const e=document.querySelector(".gb"),r=document.createElement("div");r.classList.add("shotsTile"),r.style.width="50px",r.style.height="50px",r.style.backgroundColor="lightgrey",r.style.border="2px solid black",e.appendChild(r)}n+=1,t+=1}},player1:r,player2:t,getPlayers:s}})().boardSetup()})()})();