(this["webpackJsonpreact_tic-tac-toe-game"]=this["webpackJsonpreact_tic-tac-toe-game"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(6),a=(c(16),c(7)),u=c(3),s=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(u.a)(t[c],3),r=n[0],a=n[1],s=n[2];if(e[r]&&e[r]===e[a]&&e[r]===e[s])return e[r]}return null},i=c(0),o=function(e){var t=e.value,c=e.onSquareClick;return Object(i.jsx)("button",{className:"square",onClick:c,children:t})},l=function(e){var t=e.xIsNext,c=e.squares,n=e.onPlay;function r(e){if(!s(c)&&!c[e]){var r=c.slice();r[e]=t?"X":"O",n(r)}}var a,u=s(c);return a=u?"Winner: "+u:"Next player: "+(t?"X":"O"),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"status",children:a}),Object(i.jsxs)("div",{className:"board-row",children:[Object(i.jsx)(o,{value:c[0],onSquareClick:function(){return r(0)}}),Object(i.jsx)(o,{value:c[1],onSquareClick:function(){return r(1)}}),Object(i.jsx)(o,{value:c[2],onSquareClick:function(){return r(2)}})]}),Object(i.jsxs)("div",{className:"board-row",children:[Object(i.jsx)(o,{value:c[3],onSquareClick:function(){return r(3)}}),Object(i.jsx)(o,{value:c[4],onSquareClick:function(){return r(4)}}),Object(i.jsx)(o,{value:c[5],onSquareClick:function(){return r(5)}})]}),Object(i.jsxs)("div",{className:"board-row",children:[Object(i.jsx)(o,{value:c[6],onSquareClick:function(){return r(6)}}),Object(i.jsx)(o,{value:c[7],onSquareClick:function(){return r(7)}}),Object(i.jsx)(o,{value:c[8],onSquareClick:function(){return r(8)}})]})]})};function j(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(0),o=Object(u.a)(s,2),j=o[0],b=o[1],O=j%2===0,v=c[j];var x=c.map((function(e,t){var c;return c=t>0?"Go to move #"+t:"Go to game start",Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){b(t)},children:c})},t)}));return Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)("div",{className:"game-board",children:Object(i.jsx)(l,{xIsNext:O,squares:v,onPlay:function(e){var t=[].concat(Object(a.a)(c.slice(0,j+1)),[e]);r(t),b(t.length-1)}})}),Object(i.jsx)("div",{className:"game-info",children:Object(i.jsx)("ol",{children:x})})]})}Object(r.createRoot)(document.getElementById("root")).render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(j,{})}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e881eb0d.chunk.js.map