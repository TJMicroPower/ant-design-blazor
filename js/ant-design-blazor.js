!function c(i,u,a){function s(o,e){if(!u[o]){if(!i[o]){var n="function"==typeof require&&require;if(!e&&n)return n(o,!0);if(l)return l(o,!0);var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}var r=u[o]={exports:{}};i[o][0].call(r.exports,function(e){return s(i[o][1][e]||e)},r,r.exports,c,i,u,a)}return u[o].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,o,n){"use strict";function c(e){return e?"string"==typeof e&&(e=document.querySelector(e)):e=document.body,e}Object.defineProperty(n,"__esModule",{value:!0}),n.getDom=c,n.getDomInfo=function(e){var o={},n=c(e);for(var t in n){var r=n[t];r&&("string"!=typeof r&&("number"!=typeof r||isNaN(r))||(o[t]=r))}return o},n.getBoundingClientRect=function(e){return c(e).getBoundingClientRect()},n.addDomEventListener=function(e,o,n){function t(e){n.invokeMethodAsync("Invoke",e)}if("window"==e)window.addEventListener(o,t);else{var r=c(e);document.querySelector(r).addEventListener(o,t)}},n.matchMedia=function(e){return window.matchMedia(e).matches},n.copy=function(e){navigator.clipboard?navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)}):function(e){var o=document.createElement("textarea");o.value=e,o.style.top="0",o.style.left="0",o.style.position="fixed",document.body.appendChild(o),o.focus(),o.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(o)}(e)},n.log=function(e){console.log(e)}},{}],2:[function(e,o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("./core/JsInterop/interop");window.antBlazor={interop:t}},{"./core/JsInterop/interop":1}]},{},[2]);
//# sourceMappingURL=ant-design-blazor.js.map
