(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7477],{19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},64663:function(e,t,n){"use strict";n.d(t,{U:function(){return u}});var r=n(27354),o=n(49641),i=n(83952);function u(e,t){let n,{elementType:u="button",isDisabled:s,onPress:a,onPressStart:c,onPressEnd:l,onPressChange:d,preventFocusOnPress:f,onClick:p,href:v,target:g,rel:m,type:y="button"}=e;n="button"===u?{type:y,disabled:s}:{role:"button",tabIndex:s?void 0:0,href:"a"===u&&s?void 0:v,target:"a"===u?g:void 0,type:"input"===u?y:void 0,disabled:"input"===u?s:void 0,"aria-disabled":s&&"input"!==u?s:void 0,rel:"a"===u?m:void 0};let{pressProps:E,isPressed:h}=(0,r.r7)({onPressStart:c,onPressEnd:l,onPressChange:d,onPress:a,isDisabled:s,preventFocusOnPress:f,ref:t}),{focusableProps:b}=(0,o.kc)(e,t),P=(0,i.dG)(b,E);return P=(0,i.dG)(P,(0,i.zL)(e,{labelable:!0})),{isPressed:h,buttonProps:(0,i.dG)(n,P,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{p&&(p(e),console.warn("onClick is deprecated, please use onPress"))}})}}},49641:function(e,t,n){"use strict";n.d(t,{ex:function(){return a},MT:function(){return p},QL:function(){return w},kc:function(){return O}});var r=n(19756),o=n(22122),i=n(67294),u=n(27354),s=n(83952);function a(e){if("virtual"===(0,u.Jz)()){let t=document.activeElement;(0,s.QB)((()=>{document.activeElement===t&&document.contains(e)&&(0,s.Ao)(e)}))}else(0,s.Ao)(e)}function c(e,t){return"#comment"!==e.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){const{getComputedStyle:t}=e.ownerDocument.defaultView;let{display:n,visibility:o}=t(e);r="none"!==n&&"hidden"!==o&&"collapse"!==o}return r}(e)&&function(e,t){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!t||"SUMMARY"===t.nodeName||e.hasAttribute("open"))}(e,t)&&(!e.parentElement||c(e.parentElement,e))}const l=i.createContext(null);let d=null,f=new Map;function p(e){let{children:t,contain:n,restoreFocus:r,autoFocus:o}=e,u=(0,i.useRef)(),a=(0,i.useRef)(),c=(0,i.useRef)([]),p=(0,i.useContext)(l),v=null==p?void 0:p.scopeRef;(0,s.bt)((()=>{let e=u.current.nextSibling,t=[];for(;e&&e!==a.current;)t.push(e),e=e.nextSibling;c.current=t}),[t,v]),(0,s.bt)((()=>(f.set(c,v),()=>{c!==d&&!b(c,d)||v&&!f.has(v)||(d=v),f.delete(c)})),[c,v]),function(e,t){let n=(0,i.useRef)(),r=(0,i.useRef)(null);(0,s.bt)((()=>{let o=e.current;if(!t)return;let i=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||e!==d)return;let n=document.activeElement,r=e.current;if(!E(n,r))return;let o=w(y(r),{tabbable:!0},r);o.currentNode=n;let i=t.shiftKey?o.previousNode():o.nextNode();i||(o.currentNode=t.shiftKey?r[r.length-1].nextElementSibling:r[0].previousElementSibling,i=t.shiftKey?o.previousNode():o.nextNode()),t.preventDefault(),i&&P(i,!0)},u=t=>{!d||b(d,e)?(d=e,n.current=t.target):e!==d||h(t.target,e)?e===d&&(n.current=t.target):n.current?n.current.focus():d&&T(d.current)},s=t=>{r.current=requestAnimationFrame((()=>{e!==d||h(document.activeElement,e)||(d=e,n.current=t.target,n.current.focus())}))};return document.addEventListener("keydown",i,!1),document.addEventListener("focusin",u,!1),o.forEach((e=>e.addEventListener("focusin",u,!1))),o.forEach((e=>e.addEventListener("focusout",s,!1))),()=>{document.removeEventListener("keydown",i,!1),document.removeEventListener("focusin",u,!1),o.forEach((e=>e.removeEventListener("focusin",u,!1))),o.forEach((e=>e.removeEventListener("focusout",s,!1)))}}),[e,t]),(0,i.useEffect)((()=>()=>cancelAnimationFrame(r.current)),[r])}(c,n),function(e,t,n){(0,s.bt)((()=>{if(!t)return;let r=e.current,o=document.activeElement,i=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return;let t=document.activeElement;if(!E(t,r))return;let n=w(document.body,{tabbable:!0});n.currentNode=t;let i=e.shiftKey?n.previousNode():n.nextNode();if(document.body.contains(o)&&o!==document.body||(o=null),(!i||!E(i,r))&&o){n.currentNode=o;do{i=e.shiftKey?n.previousNode():n.nextNode()}while(E(i,r));e.preventDefault(),e.stopPropagation(),i?P(i,!0):!function(e){for(let t of f.keys())if(E(e,t.current))return!0;return!1}(o)?t.blur():P(o,!0)}};return n||document.addEventListener("keydown",i,!0),()=>{n||document.removeEventListener("keydown",i,!0),t&&o&&E(document.activeElement,r)&&requestAnimationFrame((()=>{document.body.contains(o)&&P(o)}))}}),[e,t,n])}(c,r,n),function(e,t){const n=i.useRef(t);(0,i.useEffect)((()=>{n.current&&(d=e,E(document.activeElement,d.current)||T(e.current)),n.current=!1}),[])}(c,o);let g=function(e){return{focusNext(t){void 0===t&&(t={});let n=e.current,{from:r,tabbable:o,wrap:i}=t,u=r||document.activeElement,s=n[0].previousElementSibling,a=w(y(n),{tabbable:o},n);a.currentNode=E(u,n)?u:s;let c=a.nextNode();return!c&&i&&(a.currentNode=s,c=a.nextNode()),c&&P(c,!0),c},focusPrevious(t){void 0===t&&(t={});let n=e.current,{from:r,tabbable:o,wrap:i}=t,u=r||document.activeElement,s=n[n.length-1].nextElementSibling,a=w(y(n),{tabbable:o},n);a.currentNode=E(u,n)?u:s;let c=a.previousNode();return!c&&i&&(a.currentNode=s,c=a.previousNode()),c&&P(c,!0),c},focusFirst(t){void 0===t&&(t={});let n=e.current,{tabbable:r}=t,o=w(y(n),{tabbable:r},n);o.currentNode=n[0].previousElementSibling;let i=o.nextNode();return i&&P(i,!0),i},focusLast(t){void 0===t&&(t={});let n=e.current,{tabbable:r}=t,o=w(y(n),{tabbable:r},n);o.currentNode=n[n.length-1].nextElementSibling;let i=o.previousNode();return i&&P(i,!0),i}}}(c);return i.createElement(l.Provider,{value:{scopeRef:c,focusManager:g}},i.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:u}),t,i.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:a}))}const v=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],g=v.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";v.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const m=v.join(':not([hidden]):not([tabindex="-1"]),');function y(e){return e[0].parentElement}function E(e,t){return t.some((t=>t.contains(e)))}function h(e,t){for(let n of f.keys())if((n===t||b(t,n))&&E(e,n.current))return!0;return!1}function b(e,t){let n=f.get(t);return!!n&&(n===e||b(e,n))}function P(e,t){if(void 0===t&&(t=!1),null==e||t){if(null!=e)try{e.focus()}catch(n){}}else try{a(e)}catch(n){}}function T(e){let t=e[0].previousElementSibling,n=w(y(e),{tabbable:!0},e);n.currentNode=t,P(n.nextNode())}function w(e,t,n){let r=null!=t&&t.tabbable?m:g,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return null!=t&&null!=(o=t.from)&&o.contains(e)?NodeFilter.FILTER_REJECT:e.matches(r)&&c(e)&&(!n||E(e,n))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return null!=t&&t.from&&(o.currentNode=t.from),o}let L=i.createContext(null);function O(e,t){let{focusProps:n}=(0,u.KK)(e),{keyboardProps:a}=(0,u.v5)(e),c=(0,s.dG)(n,a),l=function(e){let t=(0,i.useContext)(L)||{};return(0,s.lE)(t,e),(0,r.Z)(t,["ref"])}(t),d=e.isDisabled?{}:l,f=(0,i.useRef)(e.autoFocus);return(0,i.useEffect)((()=>{f.current&&t.current&&t.current.focus(),f.current=!1}),[]),{focusableProps:(0,s.dG)((0,o.Z)({},c,{tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0}),d)}}},27354:function(e,t,n){"use strict";n.d(t,{r7:function(){return p},NL:function(){return P},KK:function(){return T},E:function(){return I},Jz:function(){return A},_w:function(){return R},Kf:function(){return z},L_:function(){return W},XI:function(){return _},Fc:function(){return Z},v5:function(){return V}});var r=n(67294),o=n(83952),i=n(19756),u=n(22122);let s="default",a="";function c(){"default"===s&&(a=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),s="disabled"}function l(){"disabled"===s&&(s="restoring",setTimeout((()=>{(0,o.QB)((()=>{"restoring"===s&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=a||""),a="",s="default")}))}),300))}function d(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const f=r.createContext(null);function p(e){let t=function(e){let t=(0,r.useContext)(f);if(t){let{register:n}=t,r=(0,i.Z)(t,["register"]);e=(0,o.dG)(r,e),n()}return(0,o.lE)(t,e.ref),e}(e),{onPress:n,onPressChange:u,onPressStart:s,onPressEnd:a,onPressUp:p,isDisabled:P,isPressed:T,preventFocusOnPress:w,shouldCancelOnPointerExit:L}=t,O=(0,i.Z)(t,["onPress","onPressChange","onPressStart","onPressEnd","onPressUp","isDisabled","isPressed","preventFocusOnPress","shouldCancelOnPointerExit","ref"]),K=(0,r.useRef)(null);K.current={onPress:n,onPressChange:u,onPressStart:s,onPressEnd:a,onPressUp:p,isDisabled:P,shouldCancelOnPointerExit:L};let[S,C]=(0,r.useState)(!1),N=(0,r.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:k,removeAllGlobalListeners:x}=(0,o.xi)(),D=(0,r.useMemo)((()=>{let e=N.current,t=(t,n)=>{let{onPressStart:r,onPressChange:o,isDisabled:i}=K.current;i||e.didFirePressStart||(r&&r({type:"pressstart",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),o&&o(!0),e.didFirePressStart=!0,C(!0))},n=function(t,n,r){void 0===r&&(r=!0);let{onPressEnd:o,onPressChange:i,onPress:u,isDisabled:s}=K.current;e.didFirePressStart&&(e.ignoreClickAfterPress=!0,e.didFirePressStart=!1,o&&o({type:"pressend",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),i&&i(!1),C(!1),u&&r&&!s&&u({type:"press",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}))},r=(e,t)=>{let{onPressUp:n,isDisabled:r}=K.current;r||n&&n({type:"pressup",pointerType:t,target:e.currentTarget,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})},i=t=>{e.isPressed&&(e.isOverTarget&&n(y(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,x(),l())},u={onKeyDown(n){g(n.nativeEvent)&&n.currentTarget.contains(n.target)&&(n.preventDefault(),n.stopPropagation(),e.isPressed||n.repeat||(e.target=n.currentTarget,e.isPressed=!0,t(n,"keyboard"),k(document,"keyup",s,!1)))},onKeyUp(t){g(t.nativeEvent)&&!t.repeat&&t.currentTarget.contains(t.target)&&r(y(e.target,t),"keyboard")},onClick(i){i&&!i.currentTarget.contains(i.target)||i&&0===i.button&&(i.stopPropagation(),P&&i.preventDefault(),e.ignoreClickAfterPress||e.ignoreEmulatedMouseEvents||!d(i.nativeEvent)||(P||w||(0,o.Ao)(i.currentTarget),t(i,"virtual"),r(i,"virtual"),n(i,"virtual")),e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1)}},s=t=>{e.isPressed&&g(t)&&(t.preventDefault(),t.stopPropagation(),e.isPressed=!1,n(y(e.target,t),"keyboard",t.target===e.target),x(),(t.target===e.target&&v(e.target)||"link"===e.target.getAttribute("role"))&&e.target.click())};if("undefined"!==typeof PointerEvent){u.onPointerDown=n=>{0===n.button&&n.currentTarget.contains(n.target)&&(h(n.target)&&n.preventDefault(),e.pointerType=b(n.nativeEvent)?"virtual":n.pointerType,n.stopPropagation(),e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=n.pointerId,e.target=n.currentTarget,P||w||(0,o.Ao)(n.currentTarget),c(),t(n,e.pointerType),k(document,"pointermove",s,!1),k(document,"pointerup",a,!1),k(document,"pointercancel",d,!1)))},u.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(h(e.target)&&e.preventDefault(),e.stopPropagation())},u.onPointerUp=t=>{t.currentTarget.contains(t.target)&&0===t.button&&E(t,t.currentTarget)&&r(t,e.pointerType||(b(t.nativeEvent)?"virtual":t.pointerType))};let s=r=>{r.pointerId===e.activePointerId&&(E(r,e.target)?e.isOverTarget||(e.isOverTarget=!0,t(y(e.target,r),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(y(e.target,r),e.pointerType,!1),K.current.shouldCancelOnPointerExit&&i(r)))},a=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(E(t,e.target)?n(y(e.target,t),e.pointerType):e.isOverTarget&&n(y(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,x(),l())},d=e=>{i(e)};u.onDragStart=e=>{e.currentTarget.contains(e.target)&&i(e)}}else{u.onMouseDown=n=>{0===n.button&&n.currentTarget.contains(n.target)&&(h(n.target)&&n.preventDefault(),n.stopPropagation(),e.ignoreEmulatedMouseEvents||(e.isPressed=!0,e.isOverTarget=!0,e.target=n.currentTarget,e.pointerType=d(n.nativeEvent)?"virtual":"mouse",P||w||(0,o.Ao)(n.currentTarget),t(n,e.pointerType),k(document,"mouseup",s,!1)))},u.onMouseEnter=n=>{n.currentTarget.contains(n.target)&&(n.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,t(n,e.pointerType)))},u.onMouseLeave=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,n(t,e.pointerType,!1),K.current.shouldCancelOnPointerExit&&i(t)))},u.onMouseUp=t=>{t.currentTarget.contains(t.target)&&(e.ignoreEmulatedMouseEvents||0!==t.button||r(t,e.pointerType))};let s=t=>{0===t.button&&(e.isPressed=!1,x(),e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:(E(t,e.target)?n(y(e.target,t),e.pointerType):e.isOverTarget&&n(y(e.target,t),e.pointerType,!1),e.isOverTarget=!1))};u.onTouchStart=n=>{if(!n.currentTarget.contains(n.target))return;n.stopPropagation();let r=function(e){const{targetTouches:t}=e;if(t.length>0)return t[0];return null}(n.nativeEvent);r&&(e.activePointerId=r.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=n.currentTarget,e.pointerType="touch",P||w||(0,o.Ao)(n.currentTarget),c(),t(n,e.pointerType),k(window,"scroll",a,!0))},u.onTouchMove=r=>{if(!r.currentTarget.contains(r.target))return;if(r.stopPropagation(),!e.isPressed)return;let o=m(r.nativeEvent,e.activePointerId);o&&E(o,r.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,t(r,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(r,e.pointerType,!1),K.current.shouldCancelOnPointerExit&&i(r))},u.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target))return;if(t.stopPropagation(),!e.isPressed)return;let o=m(t.nativeEvent,e.activePointerId);o&&E(o,t.currentTarget)?(r(t,e.pointerType),n(t,e.pointerType)):e.isOverTarget&&n(t,e.pointerType,!1),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,l(),x()},u.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&i(t))};let a=t=>{e.isPressed&&t.target.contains(e.target)&&i({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};u.onDragStart=e=>{e.currentTarget.contains(e.target)&&i(e)}}return u}),[k,P,w,x]);return(0,r.useEffect)((()=>()=>l()),[]),{isPressed:T||S,pressProps:(0,o.dG)(O,D)}}function v(e){return"A"===e.tagName&&e.hasAttribute("href")}function g(e){const{key:t,target:n}=e,r=n,{tagName:o,isContentEditable:i}=r,u=r.getAttribute("role");return("Enter"===t||" "===t||"Spacebar"===t)&&"INPUT"!==o&&"TEXTAREA"!==o&&!0!==i&&(!v(r)||"button"===u&&"Enter"!==t)&&!("link"===u&&"Enter"!==t)}function m(e,t){const n=e.changedTouches;for(let r=0;r<n.length;r++){const e=n[r];if(e.identifier===t)return e}return null}function y(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function E(e,t){let n=t.getBoundingClientRect(),r=function(e){let t=e.width/2||e.radiusX||0,n=e.height/2||e.radiusY||0;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);return i=r,!((o=n).left>i.right||i.left>o.right)&&!(o.top>i.bottom||i.top>o.bottom);var o,i}function h(e){return!e.closest('[draggable="true"]')}function b(e){return 0===e.width&&0===e.height}f.displayName="PressResponderContext";const P=r.forwardRef(((e,t)=>{let{children:n}=e,s=(0,i.Z)(e,["children"]),a=(0,r.useRef)(!1),c=(0,r.useContext)(f),l=(0,o.dG)(c||{},(0,u.Z)({},s,{ref:t||(null==c?void 0:c.ref),register(){a.current=!0,c&&c.register()}}));return(0,o.lE)(c,t),(0,r.useEffect)((()=>{a.current||console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.")}),[]),r.createElement(f.Provider,{value:l},n)}));function T(e){if(e.isDisabled)return{focusProps:{}};let t,n;return(e.onFocus||e.onFocusChange)&&(t=t=>{t.target===t.currentTarget&&(e.onFocus&&e.onFocus(t),e.onFocusChange&&e.onFocusChange(!0))}),(e.onBlur||e.onFocusChange)&&(n=t=>{t.target===t.currentTarget&&(e.onBlur&&e.onBlur(t),e.onFocusChange&&e.onFocusChange(!1))}),{focusProps:{onFocus:t,onBlur:n}}}let w=null,L=new Set,O=!1,K=!1,S=!1;function C(e,t){for(let n of L)n(e,t)}function N(e){K=!0,function(e){return!(e.metaKey||!(0,o.V5)()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(w="keyboard",C("keyboard",e))}function k(e){w="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(K=!0,C("pointer",e))}function x(e){d(e)&&(K=!0,w="virtual")}function D(e){e.target!==window&&e.target!==document&&(K||S||(w="virtual",C("virtual",e)),K=!1,S=!1)}function F(){K=!1,S=!0}function M(){if("undefined"===typeof window||O)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){K=!0,e.apply(this,arguments)},document.addEventListener("keydown",N,!0),document.addEventListener("keyup",N,!0),document.addEventListener("click",x,!0),window.addEventListener("focus",D,!0),window.addEventListener("blur",F,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",k,!0),document.addEventListener("pointermove",k,!0),document.addEventListener("pointerup",k,!0)):(document.addEventListener("mousedown",k,!0),document.addEventListener("mousemove",k,!0),document.addEventListener("mouseup",k,!0)),O=!0}function I(){return"pointer"!==w}function A(){return w}function R(e){w=e,C(e,null)}function z(){M();let[e,t]=(0,r.useState)(w);return(0,r.useEffect)((()=>{let e=()=>{t(w)};return L.add(e),()=>{L.delete(e)}}),[]),e}function W(e){let t=(0,r.useRef)({isFocusWithin:!1}).current;if(e.isDisabled)return{focusWithinProps:{}};return{focusWithinProps:{onFocus:n=>{t.isFocusWithin||(e.onFocusWithin&&e.onFocusWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!0),t.isFocusWithin=!0)},onBlur:n=>{t.isFocusWithin&&!n.currentTarget.contains(n.relatedTarget)&&(e.onBlurWithin&&e.onBlurWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!1),t.isFocusWithin=!1)}}}}"undefined"!==typeof document&&("loading"!==document.readyState?M():document.addEventListener("DOMContentLoaded",M));let H=!1,j=0;function U(){H=!0,setTimeout((()=>{H=!1}),50)}function G(e){"touch"===e.pointerType&&U()}function B(){if("undefined"!==typeof document)return"undefined"!==typeof PointerEvent?document.addEventListener("pointerup",G):document.addEventListener("touchend",U),j++,()=>{j--,j>0||("undefined"!==typeof PointerEvent?document.removeEventListener("pointerup",G):document.removeEventListener("touchend",U))}}function _(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:o,isDisabled:i}=e,[u,s]=(0,r.useState)(!1),a=(0,r.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,r.useEffect)(B,[]);let{hoverProps:c,triggerHoverEnd:l}=(0,r.useMemo)((()=>{let e=(e,r)=>{if(a.pointerType=r,i||"touch"===r||a.isHovered||!e.currentTarget.contains(e.target))return;a.isHovered=!0;let o=e.target;a.target=o,t&&t({type:"hoverstart",target:o,pointerType:r}),n&&n(!0),s(!0)},r=(e,t)=>{if(a.pointerType="",a.target=null,"touch"===t||!a.isHovered)return;a.isHovered=!1;let r=e.target;o&&o({type:"hoverend",target:r,pointerType:t}),n&&n(!1),s(!1)},u={};return"undefined"!==typeof PointerEvent?(u.onPointerEnter=t=>{H&&"mouse"===t.pointerType||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&e.currentTarget.contains(e.target)&&r(e,e.pointerType)}):(u.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},u.onMouseEnter=t=>{a.ignoreEmulatedMouseEvents||H||e(t,"mouse"),a.ignoreEmulatedMouseEvents=!1},u.onMouseLeave=e=>{!i&&e.currentTarget.contains(e.target)&&r(e,"mouse")}),{hoverProps:u,triggerHoverEnd:r}}),[t,n,o,i,a]);return(0,r.useEffect)((()=>{i&&l({target:a.target},a.pointerType)}),[i]),{hoverProps:c,isHovered:u}}function Z(e){let{ref:t,onInteractOutside:n,isDisabled:o,onInteractOutsideStart:i}=e,u=(0,r.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1,onInteractOutside:n,onInteractOutsideStart:i}).current;u.onInteractOutside=n,u.onInteractOutsideStart=i,(0,r.useEffect)((()=>{if(o)return;let e=e=>{X(e,t)&&u.onInteractOutside&&(u.onInteractOutsideStart&&u.onInteractOutsideStart(e),u.isPointerDown=!0)};if("undefined"!==typeof PointerEvent){let n=e=>{u.isPointerDown&&u.onInteractOutside&&X(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))};return document.addEventListener("pointerdown",e,!0),document.addEventListener("pointerup",n,!0),()=>{document.removeEventListener("pointerdown",e,!0),document.removeEventListener("pointerup",n,!0)}}{let n=e=>{u.ignoreEmulatedMouseEvents?u.ignoreEmulatedMouseEvents=!1:u.isPointerDown&&u.onInteractOutside&&X(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))},r=e=>{u.ignoreEmulatedMouseEvents=!0,u.onInteractOutside&&u.isPointerDown&&X(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))};return document.addEventListener("mousedown",e,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",r,!0),()=>{document.removeEventListener("mousedown",e,!0),document.removeEventListener("mouseup",n,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("touchend",r,!0)}}}),[t,u,o])}function X(e,t){if(e.button>0)return!1;if(e.target){const t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target))return!1}return t.current&&!t.current.contains(e.target)}function Y(e){if(!e)return;let t=!0;return n=>{let r=(0,u.Z)({},n,{preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}});e(r),t&&n.stopPropagation()}}function V(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Y(e.onKeyDown),onKeyUp:Y(e.onKeyUp)}}}},83952:function(e,t,n){"use strict";n.d(t,{bt:function(){return s},Me:function(){return c},mp:function(){return d},tS:function(){return f},dG:function(){return p},zL:function(){return y},Ao:function(){return E},QB:function(){return w},xi:function(){return L},bE:function(){return O},yU:function(){return K},lE:function(){return S},rP:function(){return C},nP:function(){return x},V5:function(){return I},gn:function(){return A},Pf:function(){return R},zX:function(){return z}});var r=n(86010),o=n(22122),i=n(78831),u=n(67294);const s="undefined"!==typeof window?u.useLayoutEffect:()=>{};let a=new Map;function c(e){let t=(0,u.useRef)(!0);t.current=!0;let[n,r]=(0,u.useState)(e),o=(0,u.useRef)(null),c=(0,i.gP)(n),l=e=>{t.current?o.current=e:r(e)};return a.set(c,l),s((()=>{t.current=!1}),[l]),s((()=>{let e=c;return()=>{a.delete(e)}}),[c]),(0,u.useEffect)((()=>{let e=o.current;e&&(r(e),o.current=null)}),[r,l]),c}function l(e,t){if(e===t)return e;let n=a.get(e);if(n)return n(t),t;let r=a.get(t);return r?(r(e),e):t}function d(){let e=c(),[t,n]=(0,u.useState)(e);return s((()=>{a.get(e)&&!document.getElementById(e)?n(null):n(e)}),[e]),t}function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(let e of t)"function"===typeof e&&e(...arguments)}}function p(){let e=(0,o.Z)({},arguments.length<=0?void 0:arguments[0]);for(let t=1;t<arguments.length;t++){let n=t<0||arguments.length<=t?void 0:arguments[t];for(let t in n){let o=e[t],i=n[t];"function"===typeof o&&"function"===typeof i&&"o"===t[0]&&"n"===t[1]&&t.charCodeAt(2)>=65&&t.charCodeAt(2)<=90?e[t]=f(o,i):"className"!==t&&"UNSAFE_className"!==t||"string"!==typeof o||"string"!==typeof i?"id"===t&&o&&i?e.id=l(o,i):e[t]=void 0!==i?i:o:e[t]=(0,r.default)(o,i)}}return e}const v=new Set(["id"]),g=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),m=/^(data-.*)$/;function y(e,t){void 0===t&&(t={});let{labelable:n,propNames:r}=t,o={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(v.has(i)||n&&g.has(i)||null!=r&&r.has(i)||m.test(i))&&(o[i]=e[i]);return o}function E(e){if(function(){if(null==h){h=!1;try{document.createElement("div").focus({get preventScroll(){return h=!0,!0}})}catch(e){}}return h}())e.focus({preventScroll:!0});else{let t=function(e){var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let h=null;let b=new Map,P=new Set;function T(){if("undefined"===typeof window)return;let e=t=>{let n=b.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),b.delete(t.target)),0===b.size)){for(let e of P)e();P.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=b.get(t.target);n||(n=new Set,b.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}function w(e){requestAnimationFrame((()=>{0===b.size?e():P.add(e)}))}"undefined"!==typeof document&&("loading"!==document.readyState?T():document.addEventListener("DOMContentLoaded",T));function L(){let e=(0,u.useRef)(new Map),t=(0,u.useCallback)(((t,n,r,o)=>{e.current.set(r,{type:n,eventTarget:t,options:o}),t.addEventListener(n,r,o)}),[]),n=(0,u.useCallback)(((t,n,r,o)=>{t.removeEventListener(n,r,o),e.current.delete(r)}),[]),r=(0,u.useCallback)((()=>{e.current.forEach(((e,t)=>{n(e.eventTarget,e.type,t,e.options)}))}),[n]);return(0,u.useEffect)((()=>r),[r]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:r}}function O(e,t){let{id:n,"aria-label":r,"aria-labelledby":o}=e;if(n=c(n),o&&r){let e=new Set([...o.trim().split(/\s+/),n]);o=[...e].join(" ")}else o&&(o=o.trim().split(/\s+/).join(" "));return r||o||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":o}}function K(e){const{ref:t,onResize:n}=e;(0,u.useEffect)((()=>{let e=null==t?void 0:t.current;if(e){if("undefined"===typeof window.ResizeObserver)return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{const t=new window.ResizeObserver((e=>{e.length&&n()}));return t.observe(e),()=>{e&&t.unobserve(e)}}}}),[n,t])}function S(e,t){s((()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}}),[e,t])}function C(e){for(;e&&!N(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function N(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}let k="undefined"!==typeof window&&window.visualViewport;function x(){let[e,t]=(0,u.useState)((()=>D()));return(0,u.useEffect)((()=>{let e=()=>{t((e=>{let t=D();return t.width===e.width&&t.height===e.height?e:t}))};return k?k.addEventListener("resize",e):window.addEventListener("resize",e),()=>{k?k.removeEventListener("resize",e):window.removeEventListener("resize",e)}}),[]),e}function D(){return{width:(null==k?void 0:k.width)||window.innerWidth,height:(null==k?void 0:k.height)||window.innerHeight}}new Map;function F(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.userAgent)}function M(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function I(){return M(/^Mac/)}function A(){return M(/^iPhone/)||M(/^iPad/)||I()&&navigator.maxTouchPoints>1}function R(){return F(/AppleWebKit/)&&!F(/Chrome/)}function z(e,t,n,r){let o=(0,u.useRef)(n);o.current=n;let i=null==n;(0,u.useEffect)((()=>{if(i)return;let n=e.current,u=e=>o.current.call(this,e);return n.addEventListener(t,u,r),()=>{n.removeEventListener(t,u,r)}}),[e,t,r,i])}},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{default:function(){return o}})},38347:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},44405:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function a(e){return e&&e.map((function(e,t){return r.createElement(e.tag,u({key:t},e.attr),a(e.child))}))}function c(e){return function(t){return r.createElement(l,u({attr:u({},e.attr)},t),a(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,a=e.title,c=s(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}}]);