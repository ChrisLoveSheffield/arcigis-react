"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[2105],{52105:function(e,t,n){n.r(t),n.d(t,{getContrastingBackgroundTheme:function(){return _},getRenderSymbolParameters:function(){return F},previewSymbol2D:function(){return C}});var a=n(74165),l=n(1413),i=n(15861),o=n(51995),r=n(10064),u=n(17842),s=n(79563),c=n(37817),d=n(69157);function m(e){var t=e.r,n=e.g,a=e.b,l=e.a;return l<1&&(t=Math.round(l*t+255*(1-l)),n=Math.round(l*n+255*(1-l)),a=Math.round(l*a+255*(1-l))),new o.Z({r:t,g:n,b:a})}function h(e){var t=m(e);return.2126*t.r+.7152*t.g+.0722*t.b}var v="picture-fill",p=c.b_.size,f=c.b_.maxSize,y=c.b_.maxOutlineSize,g=c.b_.lineWidth,w=225,b=document.createElement("canvas");function k(e,t){var n=b.getContext("2d"),a=[];return t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" "),n.measureText(e).width}function M(e){if(0===e.length)return 0;if(e.length>2){var t=(0,u.Wz)(1),n=parseFloat(e);switch(e.slice(-2)){case"px":return n;case"pt":return n*t;case"in":return 72*n*t;case"pc":return 12*n*t;case"mm":return 2.8346456692913384*n*t;case"cm":return 28.346456692913385*n*t}}return parseFloat(e)}function x(e){var t=null===e||void 0===e?void 0:e.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,u.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,u.F2)(t.height):null}}function Z(e,t){return z.apply(this,arguments)}function z(){return z=(0,i.Z)((0,a.Z)().mark((function e(t,n){var l,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=n.fill,i=t.color,"pattern"!==(null===l||void 0===l?void 0:l.type)||!i||t.type===v){e.next=6;break}return e.next=4,(0,s.Od)(l.src,i.toCss(!0));case 4:o=e.sent,l.src=o,n.fill=l;case 6:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function L(e,t){return e>t?"dark":"light"}function F(e,t){var n,a,i="number"==typeof(null===t||void 0===t?void 0:t.size)?null===t||void 0===t?void 0:t.size:null,o=null!=i?(0,u.F2)(i):null,r=null!=(null===t||void 0===t?void 0:t.maxSize)?(0,u.F2)(t.maxSize):null,d=null!=(null===t||void 0===t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,m=(0,s._M)(e),h=(0,s.mx)(e);"dark"!==_(e,245)||(null===t||void 0===t?void 0:t.ignoreWhiteSymbols)||(h=(0,l.Z)((0,l.Z)({width:.75},h),{},{color:"#bdc3c7"}));var w={shape:null,fill:m,stroke:h,offset:[0,0]};(null===(n=h)||void 0===n?void 0:n.width)&&(h.width=Math.min(h.width,y));var b=(null===(a=h)||void 0===a?void 0:a.width)||0,Z=null!=(null===t||void 0===t?void 0:t.size)&&(null==(null===t||void 0===t?void 0:t.scale)||(null===t||void 0===t?void 0:t.scale)),z=0,L=0,F=!1;switch(e.type){case"simple-marker":var C=e.style,S=Math.min(null!=o?o:(0,u.F2)(e.size),r||f);switch(z=S,L=S,C){case"circle":w.shape={type:"circle",cx:0,cy:0,r:.5*S},Z||(z+=b,L+=b);break;case"cross":w.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[z,.5*L]},{command:"M",values:[.5*z,0]},{command:"L",values:[.5*z,L]}]};break;case"diamond":w.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*z,0]},{command:"L",values:[z,.5*L]},{command:"L",values:[.5*z,L]},{command:"Z",values:[]}]},Z||(z+=b,L+=b);break;case"square":w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,0]},{command:"L",values:[z,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},Z||(z+=b,L+=b),d&&(F=!0);break;case"triangle":w.shape={type:"path",path:[{command:"M",values:[.5*z,0]},{command:"L",values:[z,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},Z||(z+=b,L+=b),d&&(F=!0);break;case"x":w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,L]},{command:"M",values:[z,0]},{command:"L",values:[0,L]}]},d&&(F=!0);break;case"path":w.shape={type:"path",path:e.path||""},Z||(z+=b,L+=b),d&&(F=!0),Z=!0}break;case"simple-line":var j,D=x(t),O=D.width,q=D.height,E=null!=q?q:Math.min(null!=o?o:b,r||y),P=null!=O?O:g;h.width=E,z=P,L=E;var T=(null===w||void 0===w||null===(j=w.stroke)||void 0===j?void 0:j.cap)||"butt",W="round"===T;Z=!0,w.stroke.cap="butt"===T?"square":T,w.shape={type:"path",path:[{command:"M",values:[W?E/2:0,L/2]},{command:"L",values:[W?z-E/2:z,L/2]}]};break;case v:case"simple-fill":var A="object"==typeof(null===t||void 0===t?void 0:t.symbolConfig)&&(null===t||void 0===t?void 0:t.symbolConfig.isSquareFill),B=x(t),R=B.width,V=B.height;z=A&&null!=R?R:null!=o?o:p,L=A&&null!=V?V:z,Z||(z+=b,L+=b),Z=!0,w.shape=A?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,0]},{command:"L",values:[z,L]},{command:"L",values:[0,L]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.JZ.fill[0];break;case"picture-marker":var H=(0,u.F2)(e.width),J=(0,u.F2)(e.height),G=null!=o?o:Math.max(H,J),I=H/J;H=I<=1?Math.ceil(G*I):G,J=I<=1?G:Math.ceil(G/I),z=Math.min(H,r||f),L=Math.min(J,r||f),w.shape={type:"image",x:-Math.round(z/2),y:-Math.round(L/2),width:z,height:L,src:e.url||""},d&&(F=!0);break;case"text":var K=e,N=K.text||"Aa",Q=K.font,U=Math.min(null!=o?o:(0,u.F2)(Q.size),r||f),X=k(N,{weight:Q.weight,size:U,family:Q.family}),Y=/[\uE600-\uE6FF]/.test(N);z=Y?U:X,L=U;var $=.25*M((Q?U:0).toString());Y&&($+=5),w.shape={type:"text",text:N,x:K.xoffset||0,y:K.yoffset||$,align:"middle",alignBaseline:K.verticalAlignment,decoration:Q&&Q.decoration,rotated:K.rotated,kerning:K.kerning},w.font=Q&&{size:U,style:Q.style,decoration:Q.decoration,weight:Q.weight,family:Q.family}}return{shapeDescriptor:w,size:[z,L],renderOptions:{node:null===t||void 0===t?void 0:t.node,scale:Z,opacity:null===t||void 0===t?void 0:t.opacity,rotation:d,useRotationSize:F,effectView:null===t||void 0===t?void 0:t.effectView}}}function C(e,t){return S.apply(this,arguments)}function S(){return S=(0,i.Z)((0,a.Z)().mark((function e(t,n){var i,o,u,s,m,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=F(t,n),o=i.shapeDescriptor,u=i.size,s=i.renderOptions,o.shape){e.next=3;break}throw new r.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");case 3:return e.next=5,Z(t,o);case 5:return m=[[o]],"object"==typeof(null===n||void 0===n?void 0:n.symbolConfig)&&null!==n&&void 0!==n&&n.symbolConfig.applyColorModulation&&(h=.6*u[0],m.unshift([(0,l.Z)((0,l.Z)({},o),{},{offset:[-h,0],fill:(0,c.dc)(o.fill,-.3)})]),m.push([(0,l.Z)((0,l.Z)({},o),{},{offset:[h,0],fill:(0,c.dc)(o.fill,.3)})]),u[0]+=2*h,s.scale=!1),e.abrupt("return",(0,d.w)(m,u,s));case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,n=(0,s._M)(e),a=(0,s.mx)(e),l=!n||"type"in n?null:new o.Z(n),i=null!==a&&void 0!==a&&a.color?new o.Z(null===a||void 0===a?void 0:a.color):null,r=l?L(h(l),t):null,u=i?L(h(i),t):null;return u?r?r===u?r:t>=w?"light":"dark":u:r}}}]);
//# sourceMappingURL=2105.78220bb3.chunk.js.map