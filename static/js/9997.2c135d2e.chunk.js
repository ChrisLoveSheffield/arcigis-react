/*! For license information please see 9997.2c135d2e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[9997],{59997:function(t,e,i){i.r(e),i.d(e,{CalciteSwitch:function(){return k},defineCustomElement:function(){return w}});var a=i(74165),n=i(15861),o=i(15671),r=i(43144),c=i(97326),s=i(60136),l=i(29388),d=i(51554),h=i(30024),m=i(69623),u=i(2536),b=i(74938),p=(0,d.GH)(function(t){(0,s.Z)(i,t);var e=(0,l.Z)(i);function i(){var t;return(0,o.Z)(this,i),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.calciteSwitchChange=(0,d.yM)((0,c.Z)(t),"calciteSwitchChange",7),t.disabled=!1,t.scale="m",t.switched=!1,t.checked=!1,t.keyDownHandler=function(e){var i=e.key;t.disabled||" "!==i&&"Enter"!==i||(t.toggle(),e.preventDefault())},t.clickHandler=function(){t.toggle()},t.setSwitchEl=function(e){t.switchEl=e},t}return(0,r.Z)(i,[{key:"switchedWatcher",value:function(t){this.checked=t}},{key:"setFocus",value:function(){var t=(0,n.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,h.f)(this.switchEl);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onLabelClick",value:function(){this.disabled||(this.toggle(),this.setFocus())}},{key:"toggle",value:function(){this.checked=!this.checked,this.calciteSwitchChange.emit({switched:this.checked})}},{key:"connectedCallback",value:function(){var t=this.checked||this.switched;t&&(this.switched=this.checked=t),(0,m.c)(this),(0,u.c)(this)}},{key:"disconnectedCallback",value:function(){(0,m.d)(this),(0,u.d)(this)}},{key:"componentDidRender",value:function(){(0,b.u)(this)}},{key:"render",value:function(){return(0,d.h)(d.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,d.h)("div",{"aria-checked":(0,h.t)(this.checked),"aria-label":(0,m.g)(this),class:"container",ref:this.setSwitchEl,role:"switch",tabIndex:0},(0,d.h)("div",{class:"track"},(0,d.h)("div",{class:"handle"})),(0,d.h)(u.H,{component:this})))}},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{switched:["switchedWatcher"]}}},{key:"style",get:function(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{height:0.75rem;width:1.5rem}:host([scale=s]) .handle{height:0.5rem;width:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{height:1rem;width:2rem}:host([scale=m]) .handle{height:0.75rem;width:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{height:1.5rem;width:3rem}:host([scale=l]) .handle{height:1.25rem;width:1.25rem}:host{position:relative;display:inline-block;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{width:auto;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.track{pointer-events:none;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);top:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}}]),i}(d.mv),[1,"calcite-switch",{disabled:[516],label:[1],name:[513],scale:[513],switched:[1028],checked:[1540],value:[8],setFocus:[64]}]);function f(){if("undefined"!==typeof customElements){["calcite-switch"].forEach((function(t){if("calcite-switch"===t)customElements.get(t)||customElements.define(t,p)}))}}f();var k=p,w=f}}]);
//# sourceMappingURL=9997.2c135d2e.chunk.js.map