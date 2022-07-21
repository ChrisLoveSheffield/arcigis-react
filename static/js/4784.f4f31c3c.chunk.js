/*! For license information please see 4784.f4f31c3c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[4784],{30024:function(e,t,n){n.d(t,{a:function(){return o},b:function(){return h},c:function(){return a},e:function(){return d},f:function(){return s},k:function(){return E},s:function(){return p},t:function(){return g}});var r=n(74165),u=n(15861),i=n(93433);function o(e){var t=d(e,"[".concat("dir","]"));return t?t.getAttribute("dir"):"ltr"}function l(e){return e.getRootNode()}function c(e){return e.host||null}function a(e,t){var n=t.selector,r=t.id;return function e(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);var u=l(t),i=r?"getElementById"in u?u.getElementById(r):null:n?u.querySelector(n):null,o=c(u);return i||(o?e(o):null)}(e)}function d(e,t){return function e(n){return n?n.closest(t)||e(c(l(n))):null}(e)}function f(e){return"function"===typeof(null===e||void 0===e?void 0:e.setFocus)}function s(e){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.abrupt("return",f(t)?t.setFocus():t.focus());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=":not([slot])";function h(e,t,n){t&&!Array.isArray(t)&&"string"!==typeof t&&(n=t,t=null);var r=t?Array.isArray(t)?t.map((function(e){return'[slot="'.concat(e,'"]')})).join(","):'[slot="'.concat(t,'"]'):m;return(null===n||void 0===n?void 0:n.all)?function(e,t,n){var r=t===m?b(e,m):Array.from(e.querySelectorAll(t));r=n&&!1===n.direct?r:r.filter((function(t){return t.parentElement===e})),r=(null===n||void 0===n?void 0:n.matches)?r.filter((function(e){return null===e||void 0===e?void 0:e.matches(n.matches)})):r;var u=null===n||void 0===n?void 0:n.selector;return u?r.map((function(e){return Array.from(e.querySelectorAll(u))})).reduce((function(e,t){return[].concat((0,i.Z)(e),(0,i.Z)(t))}),[]).filter((function(e){return!!e})):r}(e,r,n):function(e,t,n){var r=t===m?b(e,m)[0]||null:e.querySelector(t);r=n&&!1===n.direct||(null===r||void 0===r?void 0:r.parentElement)===e?r:null,r=(null===n||void 0===n?void 0:n.matches)?(null===r||void 0===r?void 0:r.matches(n.matches))?r:null:r;var u=null===n||void 0===n?void 0:n.selector;return u?null===r||void 0===r?void 0:r.querySelector(u):r}(e,r,n)}function b(e,t){return e?Array.from(e.children||[]).filter((function(e){return null===e||void 0===e?void 0:e.matches(t)})):[]}function p(e,t,n){return"string"===typeof t&&""!==t?t:""===t?e[n]:void 0}function E(e,t){return!(t.left>e.right||t.right<e.left||t.top>e.bottom||t.bottom<e.top)}function g(e){return(!!e).toString()}},2536:function(e,t,n){n.d(t,{H:function(){return b},a:function(){return m},c:function(){return f},d:function(){return v},r:function(){return d},s:function(){return a}});var r=n(30024),u=n(51554),i="hidden-form-input";function o(e){return"checked"in e}var l=new WeakMap,c=new WeakSet;function a(e){var t;null===(t=e.formEl)||void 0===t||t.requestSubmit()}function d(e){var t;null===(t=e.formEl)||void 0===t||t.reset()}function f(e){var t=e.el,n=e.value,u=(0,r.e)(t,"form");if(u&&!function(e,t){var n="calciteInternalFormComponentRegister",r=!1;return e.addEventListener(n,(function(e){r=e.composedPath().some((function(e){return c.has(e)})),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),r}(u,t)){e.formEl=u,e.defaultValue=n,o(e)&&(e.defaultChecked=e.checked);var i=(e.onFormReset||s).bind(e);u.addEventListener("reset",i),l.set(e.el,i),c.add(t)}}function s(){o(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function v(e){var t=e.el,n=e.formEl;if(n){var r=l.get(t);n.removeEventListener("reset",r),l.delete(t),e.formEl=null,c.delete(t)}}function m(e,t){e.defaultValue=t}function h(e,t,n){var r,u=e.defaultValue,i=e.disabled,l=e.name,c=e.required;t.defaultValue=u,t.disabled=i,t.name=l,t.required=c,t.tabIndex=-1,o(e)?(t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":"",i||e.checked||(t.disabled=!0)):t.value=n||"",null===(r=e.syncHiddenFormInput)||void 0===r||r.call(e,t)}var b=function(e){return function(e){var t=e.el,n=e.formEl,r=e.name,u=e.value,o=t.ownerDocument,l=t.querySelectorAll('input[slot="'.concat(i,'"]'));if(n&&r){var c,a=Array.isArray(u)?u:[u],d=[],f=new Set;l.forEach((function(t){var n=a.find((function(e){return e==t.value}));null!=n?(f.add(n),h(e,t,n)):d.push(t)})),a.forEach((function(t){if(!f.has(t)){var n=d.pop();n||((n=o.createElement("input")).slot=i),c||(c=o.createDocumentFragment()),c.append(n),h(e,n,t)}})),c&&t.append(c),d.forEach((function(e){return e.remove()}))}else l.forEach((function(e){return e.remove()}))}(e.component),(0,u.h)("slot",{name:i})}},74938:function(e,t,n){function r(){}function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=r);e.el.click=HTMLElement.prototype.click,"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}n.d(t,{u:function(){return u}})},69623:function(e,t,n){n.d(t,{a:function(){return o},c:function(){return v},d:function(){return m},g:function(){return h},l:function(){return i}});var r=n(30024),u="calciteInternalLabelClick",i="calciteInternalLabelConnected",o="calciteInternaLabelDisconnected",l="calcite-label",c=new WeakMap,a=new WeakMap,d=new WeakMap,f=new Set,s=function(e){var t=e.id,n=t&&(0,r.c)(e,{selector:"".concat(l,'[for="').concat(t,'"]')});if(n)return n;var u=(0,r.e)(e,l);return!u||function(e,t){var n,r="custom-element-ancestor-check",u=function(r){r.stopImmediatePropagation();var u=r.composedPath();n=u.slice(u.indexOf(t),u.indexOf(e))};return e.addEventListener(r,u,{once:!0}),t.dispatchEvent(new CustomEvent(r,{composed:!0,bubbles:!0})),e.removeEventListener(r,u),n.filter((function(n){return n!==t&&n!==e})).filter((function(e){var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")})).length>0}(u,e)?null:u};function v(e){var t=s(e.el);if(!(c.has(t)||!t&&f.has(e))){var n=E.bind(e);if(t){e.labelEl=t;var r=b.bind(e);c.set(e.labelEl,r),e.labelEl.addEventListener(u,r),f.delete(e),document.removeEventListener(i,a.get(e)),d.set(e,n),document.addEventListener(o,n)}else f.has(e)||(n(),document.removeEventListener(o,d.get(e)))}}function m(e){if(f.delete(e),document.removeEventListener(i,a.get(e)),document.removeEventListener(o,d.get(e)),a.delete(e),d.delete(e),e.labelEl){var t=c.get(e.labelEl);e.labelEl.removeEventListener(u,t),c.delete(e.labelEl)}}function h(e){var t,n;return e.label||(null===(n=null===(t=e.labelEl)||void 0===t?void 0:t.textContent)||void 0===n?void 0:n.trim())||""}function b(e){this.disabled||(this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e))}function p(){f.has(this)&&v(this)}function E(){f.add(this);var e=a.get(this)||p.bind(this);a.set(this,e),document.addEventListener(i,e)}}}]);
//# sourceMappingURL=4784.f4f31c3c.chunk.js.map