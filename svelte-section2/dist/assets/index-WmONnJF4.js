var H=Object.defineProperty;var J=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>(J(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function x(){}function O(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function j(){return Object.create(null)}function w(t){t.forEach(K)}function R(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function k(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function I(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function g(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function B(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function W(){return d(" ")}function X(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function M(t,e){e=""+e,t.data!==e&&(t.data=e)}let P;function $(t){P=t}const h=[],q=[];let m=[];const F=[],et=Promise.resolve();let L=!1;function nt(){L||(L=!0,et.then(U))}function N(t){m.push(t)}const v=new Set;let _=0;function U(){if(_!==0)return;const t=P;do{try{for(;_<h.length;){const e=h[_];_++,$(e),rt(e.$$)}}catch(e){throw h.length=0,_=0,e}for($(null),h.length=0,_=0;q.length;)q.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;F.length;)F.pop()();L=!1,v.clear(),$(t)}function rt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function ot(t){const e=[],n=[];m.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),m=e}const C=new Set;let it;function V(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(C.has(t))return;C.add(t),it.c.push(()=>{C.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function st(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const u=t[i],f=e[i];if(f){for(const c in u)c in f||(r[c]=1);for(const c in f)o[c]||(n[c]=f[c],o[c]=1);t[i]=f}else for(const c in u)o[c]=1}for(const u in r)u in n||(n[u]=void 0);return n}function ct(t){return typeof t=="object"&&t!==null?t:{}}function ft(t){t&&t.c()}function Y(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),N(()=>{const i=t.$$.on_mount.map(K).filter(R);t.$$.on_destroy?t.$$.on_destroy.push(...i):w(i),t.$$.on_mount=[]}),o.forEach(N)}function z(t,e){const n=t.$$;n.fragment!==null&&(ot(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,r,o,i,u=null,f=[-1]){const c=P;$(t);const s=t.$$={fragment:null,ctx:[],props:i,update:x,not_equal:o,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:j(),dirty:f,skip_bound:!1,root:e.target||c.$$.root};u&&u(s.root);let p=!1;if(s.ctx=n?n(t,e.props||{},(l,a,...A)=>{const S=A.length?A[0]:a;return s.ctx&&o(s.ctx[l],s.ctx[l]=S)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](S),p&&lt(t,l)),a}):[],s.update(),p=!0,w(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const l=tt(e.target);s.fragment&&s.fragment.l(l),l.forEach(y)}else s.fragment&&s.fragment.c();e.intro&&V(t.$$.fragment),Y(t,e.target,e.anchor),U()}$(c)}class G{constructor(){E(this,"$$");E(this,"$$set")}$destroy(){z(this,1),this.$destroy=x}$on(e,n){if(!R(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const at="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(at);function dt(t){let e,n,r,o,i,u,f,c,s,p;return{c(){e=B("button"),n=d("Clicks "),r=d(t[0]),o=W(),i=B("h1"),u=d("You have clicked "),f=d(t[0]),c=d(" times"),Z(e,"class","svelte-34f1md")},m(l,a){b(l,e,a),g(e,n),g(e,r),b(l,o,a),b(l,i,a),g(i,u),g(i,f),g(i,c),s||(p=X(e,"click",t[1]),s=!0)},p(l,[a]){a&1&&M(r,l[0]),a&1&&M(f,l[0])},i:x,o:x,d(l){l&&(y(e),y(o),y(i)),s=!1,p()}}}function _t(t,e,n){const r=["initialCount","maxCount"];let o=I(e,r),{initialCount:i=0}=e,{maxCount:u=void 0}=e;console.log(`$$props = ${e}
$$restProps = ${o}`);let f=i;function c(){f!==u&&n(0,f+=1)}return t.$$set=s=>{n(5,e=O(O({},e),k(s))),n(4,o=I(e,r)),"initialCount"in s&&n(2,i=s.initialCount),"maxCount"in s&&n(3,u=s.maxCount)},e=k(e),[f,c,i,u]}class ht extends G{constructor(e){super(),D(this,e,_t,dt,T,{initialCount:2,maxCount:3})}}function mt(t){let e,n,r;const o=[props];let i={};for(let u=0;u<o.length;u+=1)i=O(i,o[u]);return n=new ht({props:i}),{c(){e=d(`// App.svelt
`),ft(n.$$.fragment)},m(u,f){b(u,e,f),Y(n,u,f),r=!0},p(u,[f]){const c=f&0?st(o,[ct(props)]):{};n.$set(c)},i(u){r||(V(n.$$.fragment,u),r=!0)},o(u){ut(n.$$.fragment,u),r=!1},d(u){u&&y(e),z(n,u)}}}const pt=10;function gt(t){return props={initialCount:3,maxCount:pt},[]}class yt extends G{constructor(e){super(),D(this,e,gt,mt,T,{})}}new yt({target:document.getElementById("app")});