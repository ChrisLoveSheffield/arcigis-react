"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[6547],{56547:function(r,e,t){t.r(e),t.d(e,{default:function(){return y}});var n=t(37762),a=t(15671),o=t(43144),u=t(92026),l=t(18722),i=t(48976),f=t(4582),s=t(11186),c=t(8229),v=t(79803),b=t(78952),d=t(74432),h=function(){function r(){(0,a.Z)(this,r)}return(0,o.Z)(r,[{key:"transform",value:function(r){var e=this._transform(r),t=[e.points.buffer,e.rgb.buffer];(0,u.pC)(e.pointIdFilterMap)&&t.push(e.pointIdFilterMap.buffer);var a,o=(0,n.Z)(e.attributes);try{for(o.s();!(a=o.n()).done;){var i=a.value;"buffer"in i.values&&(0,l.eP)(i.values.buffer)&&i.values.buffer!==e.rgb.buffer&&t.push(i.values.buffer)}}catch(f){o.e(f)}finally{o.f()}return Promise.resolve({result:e,transferList:t})}},{key:"_transform",value:function(r){var e=(0,d.Ym)(r.schema,r.geometryBuffer),t=e.length/3,a=null,o=[],l=(0,d.dH)(r.primaryAttributeData,e,t);(0,u.pC)(r.primaryAttributeData)&&l&&o.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:l});var i=(0,d.dH)(r.modulationAttributeData,e,t);(0,u.pC)(r.modulationAttributeData)&&i&&o.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:i});var f=(0,d.aE)(r.rendererInfo,l,i,t);if(r.filterInfo&&r.filterInfo.length>0&&(0,u.pC)(r.filterAttributesData)){var s=r.filterAttributesData.map((function(r){var n=(0,d.dH)(r,e,t),a={attributeInfo:r.attributeInfo,values:n};return o.push(a),a}));a=new Uint32Array(t),t=(0,d.hv)(e,f,a,r.filterInfo,s)}var c,v=(0,n.Z)(r.userAttributesData);try{for(v.s();!(c=v.n()).done;){var h=c.value,p=(0,d.dH)(h,e,t);o.push({attributeInfo:h.attributeInfo,values:p})}}catch(m){v.e(m)}finally{v.f()}3*t<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*t))),this._applyElevationOffsetInPlace(e,t,r.elevationOffset);var y=this._transformCoordinates(e,t,r.obb,b.Z.fromJSON(r.inSR),b.Z.fromJSON(r.outSR));return{obb:r.obb,points:y,rgb:f,attributes:o,pointIdFilterMap:a}}},{key:"_transformCoordinates",value:function(r,e,t,n,a){if(!(0,v.CM)(r,n,0,r,a,0,e))throw Error("Can't reproject");var o=(0,c.f)(t.center[0],t.center[1],t.center[2]),u=(0,c.c)(),l=(0,c.c)();(0,i.c)(p,t.quaternion);for(var f=new Float32Array(3*e),b=0;b<e;b++)u[0]=r[3*b]-o[0],u[1]=r[3*b+1]-o[1],u[2]=r[3*b+2]-o[2],(0,s.q)(l,u,p),t.halfSize[0]=Math.max(t.halfSize[0],Math.abs(l[0])),t.halfSize[1]=Math.max(t.halfSize[1],Math.abs(l[1])),t.halfSize[2]=Math.max(t.halfSize[2],Math.abs(l[2])),f[3*b]=u[0],f[3*b+1]=u[1],f[3*b+2]=u[2];return f}},{key:"_applyElevationOffsetInPlace",value:function(r,e,t){if(0!==t)for(var n=0;n<e;n++)r[3*n+2]+=t}}]),r}(),p=(0,f.c)();function y(){return new h}},74432:function(r,e,t){t.d(e,{Ym:function(){return c},aE:function(){return s},dH:function(){return v},et:function(){return b},hv:function(){return d}});var n=t(37762),a=t(92026),o=t(21134),u=t(89431),l=t(87005),i=t(28278),f=t(2821);function s(r,e,t,n){var a=r.rendererJSON,i=r.isRGBRenderer,f=null,s=null;if(e&&i)f=e;else if(e&&"pointCloudUniqueValueRenderer"===a.type){var c=(s=l.Z.fromJSON(a)).colorUniqueValueInfos;f=new Uint8Array(3*n);for(var v=h(s.fieldTransformType),b=0;b<n;b++)for(var d=(v?v(e[b]):e[b])+"",p=0;p<c.length;p++)if(c[p].values.includes(d)){f[3*b]=c[p].color.r,f[3*b+1]=c[p].color.g,f[3*b+2]=c[p].color.b;break}}else if(e&&"pointCloudStretchRenderer"===a.type){var y=(s=u.Z.fromJSON(a)).stops;f=new Uint8Array(3*n);for(var m=h(s.fieldTransformType),g=0;g<n;g++){var I=m?m(e[g]):e[g],C=y.length-1;if(I<y[0].value)f[3*g]=y[0].color.r,f[3*g+1]=y[0].color.g,f[3*g+2]=y[0].color.b;else if(I>=y[C].value)f[3*g]=y[C].color.r,f[3*g+1]=y[C].color.g,f[3*g+2]=y[C].color.b;else for(var A=1;A<y.length;A++)if(I<y[A].value){var M=(I-y[A-1].value)/(y[A].value-y[A-1].value);f[3*g]=y[A].color.r*M+y[A-1].color.r*(1-M),f[3*g+1]=y[A].color.g*M+y[A-1].color.g*(1-M),f[3*g+2]=y[A].color.b*M+y[A-1].color.b*(1-M);break}}}else if(e&&"pointCloudClassBreaksRenderer"===a.type){var S=(s=o.Z.fromJSON(a)).colorClassBreakInfos;f=new Uint8Array(3*n);for(var k=h(s.fieldTransformType),w=0;w<n;w++)for(var Z=k?k(e[w]):e[w],O=0;O<S.length;O++)if(Z>=S[O].minValue&&Z<=S[O].maxValue){f[3*w]=S[O].color.r,f[3*w+1]=S[O].color.g,f[3*w+2]=S[O].color.b;break}}else{f=new Uint8Array(3*n);for(var _=0;_<f.length;_++)f[_]=255}if(t&&s&&s.colorModulation)for(var x=s.colorModulation.minValue,D=s.colorModulation.maxValue,F=0;F<n;F++){var R=t[F],U=R>=D?1:R<=x?.3:.3+.7*(R-x)/(D-x);f[3*F]=U*f[3*F],f[3*F+1]=U*f[3*F+1],f[3*F+2]=U*f[3*F+2]}return f}function c(r,e){if(null==r.encoding||""===r.encoding){var t=(0,i.W7)(e,r);if((0,a.Wi)(t.vertexAttributes.position))return;for(var n=(0,i.I_)(e,t.vertexAttributes.position),o=t.header.fields,u=[o.offsetX,o.offsetY,o.offsetZ],l=[o.scaleX,o.scaleY,o.scaleZ],s=n.length/3,c=new Float64Array(3*s),v=0;v<s;v++)c[3*v]=n[3*v]*l[0]+u[0],c[3*v+1]=n[3*v+1]*l[1]+u[1],c[3*v+2]=n[3*v+2]*l[2]+u[2];return c}if("lepcc-xyz"===r.encoding)return(0,f.Gi)(e).result}function v(r,e,t){return(0,a.pC)(r)&&r.attributeInfo.useElevation?b(e,t):(0,a.pC)(r)?(0,i.qM)(r.attributeInfo.storageInfo,r.buffer,t):null}function b(r,e){for(var t=new Float64Array(e),n=0;n<e;n++)t[n]=r[3*n+2];return t}function d(r,e,t,a,o){for(var u=r.length/3,l=0,i=0;i<u;i++){for(var f=!0,s=0;s<a.length&&f;s++){var c=a[s].filterJSON,v=o[s].values[i];switch(c.type){case"pointCloudValueFilter":var b="exclude"===c.mode;c.values.includes(v)===b&&(f=!1);break;case"pointCloudBitfieldFilter":var d=p(c.requiredSetBits),h=p(c.requiredClearBits);(v&d)===d&&0==(v&h)||(f=!1);break;case"pointCloudReturnFilter":var y,m=15&v,g=v>>>4&15,I=g>1,C=1===m,A=m===g,M=!1,S=(0,n.Z)(c.includedReturns);try{for(S.s();!(y=S.n()).done;){var k=y.value;if("last"===k&&A||"firstOfMany"===k&&C&&I||"lastOfMany"===k&&A&&I||"single"===k&&!I){M=!0;break}}}catch(w){S.e(w)}finally{S.f()}M||(f=!1)}}f&&(t[l]=i,r[3*l]=r[3*i],r[3*l+1]=r[3*i+1],r[3*l+2]=r[3*i+2],e[3*l]=e[3*i],e[3*l+1]=e[3*i+1],e[3*l+2]=e[3*i+2],l++)}return l}function h(r){return null==r||"none"===r?null:"low-four-bit"===r?function(r){return 15&r}:"high-four-bit"===r?function(r){return(240&r)>>4}:"absolute-value"===r?function(r){return Math.abs(r)}:"modulo-ten"===r?function(r){return r%10}:null}function p(r){var e,t=0,a=(0,n.Z)(r||[]);try{for(a.s();!(e=a.n()).done;){t|=1<<e.value}}catch(o){a.e(o)}finally{a.f()}return t}}}]);
//# sourceMappingURL=6547.8d027c5c.chunk.js.map