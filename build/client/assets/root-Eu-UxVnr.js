import{a as d,o as f,r as i,j as e,O as x}from"./index-BzpTpSwV.js";import{j as S,k as j,_ as v,l,M as w,m as g,S as b}from"./components-B15dXdz0.js";import"./index-B5S6skHr.js";/**
 * @remix-run/react v2.17.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function k({getKey:s,...c}){let{isSpaMode:h}=S(),o=d(),m=f();j({getKey:s,storageKey:a});let p=i.useMemo(()=>{if(!s)return null;let t=s(o,m);return t!==o.key?t:null},[]);if(h)return null;let u=((t,y)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(t)||"{}")[y||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(t)}}).toString();return i.createElement("script",v({},c,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${u})(${l(JSON.stringify(a))}, ${l(JSON.stringify(p))})`}}))}const L="/assets/index-BLNCKCfw.css",M="/assets/responsive-fixed-Dhc_-aqy.css",C="/assets/mobile-responsive-hh6o8Y2d.css",O="/assets/mentra-live-ClCs8Qhm.css",R="/assets/mobile-mentra-live-C3vQLzWg.css",_="/assets/animations-jYFhyDts.css",I="/assets/global-improvements-QY-W-B7x.css",H=()=>[{rel:"stylesheet",href:L},{rel:"stylesheet",href:M},{rel:"stylesheet",href:C},{rel:"stylesheet",href:O},{rel:"stylesheet",href:R},{rel:"stylesheet",href:_},{rel:"stylesheet",href:I}];function J({children:s}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(w,{}),e.jsx(g,{})]}),e.jsxs("body",{children:[s,e.jsx(k,{}),e.jsx(b,{})]})]})}function Q(){return e.jsx(x,{})}export{J as Layout,Q as default,H as links};
