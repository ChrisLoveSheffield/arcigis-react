/*! For license information please see 190.a383d225.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[190],{20190:function(t,e,i){i.r(e),i.d(e,{CalciteCheckbox:function(){return g},defineCustomElement:function(){return v}});var n=i(74165),a=i(15861),o=i(15671),c=i(43144),r=i(97326),s=i(60136),l=i(29388),u=i(51554),m=i(16435),d=i(2536),h=i(69623),b=i(74938),k=i(30024),f=(0,u.GH)(function(t){(0,s.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;return(0,o.Z)(this,i),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.calciteInternalCheckboxBlur=(0,u.yM)((0,r.Z)(t),"calciteInternalCheckboxBlur",7),t.calciteCheckboxChange=(0,u.yM)((0,r.Z)(t),"calciteCheckboxChange",7),t.calciteInternalCheckboxFocus=(0,u.yM)((0,r.Z)(t),"calciteInternalCheckboxFocus",7),t.checked=!1,t.disabled=!1,t.hovered=!1,t.indeterminate=!1,t.required=!1,t.scale="m",t.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",t.indeterminatePath="M13 8v1H3V8z",t.getPath=function(){return t.indeterminate?t.indeterminatePath:t.checked?t.checkedPath:""},t.toggle=function(){t.disabled||(t.checked=!t.checked,t.setFocus(),t.indeterminate=!1,t.calciteCheckboxChange.emit())},t.keyDownHandler=function(e){" "!==e.key&&"Enter"!==e.key||(t.toggle(),e.preventDefault())},t.clickHandler=function(){t.toggle()},t.onToggleBlur=function(){t.calciteInternalCheckboxBlur.emit(!1)},t.onToggleFocus=function(){t.calciteInternalCheckboxFocus.emit(!0)},t.onLabelClick=function(){t.toggle()},t}return(0,c.Z)(i,[{key:"setFocus",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(e=this.toggleEl)||void 0===e||e.focus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){this.guid=this.el.id||"calcite-checkbox-".concat((0,m.g)()),(0,h.c)(this),(0,d.c)(this)}},{key:"disconnectedCallback",value:function(){(0,h.d)(this),(0,d.d)(this)}},{key:"componentDidRender",value:function(){(0,b.u)(this)}},{key:"render",value:function(){var t=this;return(0,u.h)(u.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,u.h)("div",{"aria-checked":(0,k.t)(this.checked),"aria-label":(0,h.g)(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:function(e){return t.toggleEl=e},role:"checkbox",tabIndex:this.disabled?void 0:0},(0,u.h)("svg",{class:"check-svg",viewBox:"0 0 16 16"},(0,u.h)("path",{d:this.getPath()})),(0,u.h)("slot",null)),(0,u.h)(d.H,{component:this}))}},{key:"el",get:function(){return this}}],[{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host .toggle:focus .check-svg,:host .toggle:active .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);-webkit-transition:var(--calcite-animation-timing);transition:var(--calcite-animation-timing)}.toggle:focus-visible{outline:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}}]),i}(u.mv),[1,"calcite-checkbox",{checked:[1540],disabled:[516],guid:[1537],hovered:[1540],indeterminate:[1540],label:[1],name:[520],required:[516],scale:[513],value:[8],setFocus:[64]}]);function p(){if("undefined"!==typeof customElements){["calcite-checkbox"].forEach((function(t){if("calcite-checkbox"===t)customElements.get(t)||customElements.define(t,f)}))}}p();var g=f,v=p},16435:function(t,e,i){i.d(e,{g:function(){return n}});var n=function(){return[2,1,1,1,3].map((function(t){for(var e="",i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}}}]);
//# sourceMappingURL=190.a383d225.chunk.js.map