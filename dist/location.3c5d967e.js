function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequiref78b;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequiref78b=n),n.register("bXuNP",(function(t,r){var o,n;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var i={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("bXuNP").register(JSON.parse('{"icuks":"location.3c5d967e.js","c5mXt":"icon-location.e69e13b8.svg"}'));var i;n.register("kPq84",(function(t,r){var o;e(t.exports,"getBundleURL",(()=>o),(e=>o=e));var n={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),n[e]=t),t}})),i=n("kPq84").getBundleURL("icuks")+n("bXuNP").resolve("c5mXt");const a=new URL(i);let c=L.map("map").setView([41.4818884,-71.3114193],15);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoibWFkbWVsb24yIiwiYSI6ImNreHM3Ynl4NDJ5YzMybnBucjhsbXBwY3UifQ.0wXqs1YNEuwt3YINq4TzyQ"}).addTo(c);let s=L.icon({iconUrl:a,iconSize:[33,44],iconAnchor:[16,44],popupAnchor:[-3,-76]});L.marker([41.4813163,-71.3103603],{icon:s}).addTo(c);
//# sourceMappingURL=location.3c5d967e.js.map
