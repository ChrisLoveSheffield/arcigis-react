"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[2002],{76046:function(e,t,r){r.d(t,{Z:function(){return F}});var n,a=r(29439),o=r(15671),i=r(43144),s=r(60136),l=r(29388),u=r(27366),c=r(46784),f=r(92026),p=r(49861),h=(r(63780),r(93169),r(25243),r(69912)),v=r(14226),g=r(81949),m=r(11186),d=r(71353),y=r(7882),x=r(79803),w=r(92183),b=r(45238),A=r(25158),Z=r(32035),C=r(92770),R=n=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).origin=(0,d.c)(),n.translation=(0,d.c)(),n.rotation=(0,b.Ue)(),n.scale=(0,d.f)(1,1,1),n.geographic=!0,n}return(0,i.Z)(r,[{key:"localMatrix",get:function(){var e=(0,g.c)();return(0,v.u)(e,this.scale),(0,v.e)(e,e,(0,b.WH)(this.rotation),(0,b.ZZ)(this.rotation)),(0,v.j)(e,e,this.translation),e}},{key:"localMatrixInverse",get:function(){return(0,v.a)((0,g.c)(),this.localMatrix)}},{key:"applyLocal",value:function(e,t){return(0,m.m)(t,e,this.localMatrix)}},{key:"applyLocalInverse",value:function(e,t){return(0,m.m)(t,e,this.localMatrixInverse)}},{key:"project",value:function(e,t){var r=new Float64Array(e.length),n=A.fP.fromTypedArray(r),a=A.fP.fromTypedArray(e);if(this.geographic){var o=(0,w.rS)(t),i=(0,g.c)();return(0,x.Bm)(t,this.origin,i,o),(0,v.m)(i,i,this.localMatrix),(0,Z.t)(n,a,i),(0,x.CM)(r,o,0,r,t,0,r.length/3),r}var s=this.localMatrix,l=this.origin;(0,v.v)(s,g.I)?(0,C.c)(n,a):(0,Z.t)(n,a,s);for(var u=0;u<r.length;u+=3)r[u+0]+=l[0],r[u+1]+=l[1],r[u+2]+=l[2];return r}},{key:"getOriginPoint",value:function(e){var t=(0,a.Z)(this.origin,3),r=t[0],n=t[1],o=t[2];return new y.Z({x:r,y:n,z:o,spatialReference:e})}},{key:"equals",value:function(e){return(0,f.pC)(e)&&this.geographic===e.geographic&&(0,m.k)(this.origin,e.origin)&&(0,v.w)(this.localMatrix,e.localMatrix)}},{key:"clone",value:function(){var e={origin:(0,d.a)(this.origin),translation:(0,d.a)(this.translation),rotation:(0,b.Ue)(this.rotation),scale:(0,d.a)(this.scale),geographic:this.geographic};return new n(e)}}]),r}(c.wq);(0,u._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],R.prototype,"origin",void 0),(0,u._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],R.prototype,"translation",void 0),(0,u._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],R.prototype,"rotation",void 0),(0,u._)([(0,p.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],R.prototype,"scale",void 0),(0,u._)([(0,p.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],R.prototype,"geographic",void 0),(0,u._)([(0,p.Cb)()],R.prototype,"localMatrix",null),(0,u._)([(0,p.Cb)()],R.prototype,"localMatrixInverse",null);var F=R=n=(0,u._)([(0,h.j)("esri.geometry.support.MeshTransform")],R)},45238:function(e,t,r){r.d(t,{Ue:function(){return s},WH:function(){return f},ZZ:function(){return c},qC:function(){return u},uT:function(){return l}});var n=r(16889),a=r(48976),o=r(98131),i=r(11186);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return[e[0],e[1],e[2],e[3]]}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(r,e),r[3]=t,r}function u(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,a.s)(v,e,f(e)),(0,a.s)(g,t,f(t)),(0,a.m)(v,g,v),p(r,(0,n.BV)((0,a.g)(r,v)))}function c(e){return e}function f(e){return(0,n.Vl)(e[3])}function p(e,t){return e[3]=t,e}var h=[0,0,1,0],v=(0,o.a)(),g=(0,o.a)();s()},26548:function(e,t,r){function n(e,t){var r;return e.isGeographic||e.isWebMercator&&(null===(r=null===t||void 0===t?void 0:t.geographic)||void 0===r||r)}r.d(t,{h:function(){return n}})},57898:function(e,t,r){r.d(t,{FF:function(){return x},I5:function(){return d},Yq:function(){return w},iv:function(){return m},w1:function(){return y}});var n=r(92026),a=r(68860),o=r(11873),i=r(14226),s=r(81949),l=r(22753),u=r(79803),c=r(92183),f=r(76046),p=r(25158),h=r(32035),v=r(26548),g=r(11700);function m(e,t,r){return(0,v.h)(t.spatialReference,r)?function(e,t,r){var n=t.spatialReference,a=R(t,r,P),o=new Float64Array(e.position.length),i=function(e,t,r,n){(0,h.t)(p.fP.fromTypedArray(n),p.fP.fromTypedArray(e),t);var a=new Float64Array(e.length);return(0,g.To)(n,a,r)}(e.position,a,n,o),s=(0,l.a)(T,a);return{position:i,normal:b(i,o,e.normal,s,n),tangent:A(i,o,e.tangent,s,n)}}(e,t,r):function(e,t,r){for(var n=new Float64Array(e.position.length),a=e.position,o=t.x,i=t.y,s=t.z||0,l=k(r?r.unit:null,t.spatialReference),u=l.horizontal,c=l.vertical,f=0;f<a.length;f+=3)n[f+0]=a[f+0]*u+o,n[f+1]=a[f+1]*u+i,n[f+2]=a[f+2]*c+s;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function d(e,t,r){var a=e.position,o=e.normal,i=e.tangent;if((0,n.Wi)(t))return{position:a,normal:o,tangent:i};var s=t.localMatrix;return m({position:(0,g.zZ)(a,new Float64Array(a.length),s),normal:(0,n.pC)(o)?(0,g.w9)(o,new Float32Array(o.length),s):null,tangent:(0,n.pC)(i)?(0,g.VS)(i,new Float32Array(i.length),s):null},t.getOriginPoint(r),{geographic:t.geographic})}function y(e,t,r){var n;return null!==r&&void 0!==r&&r.useTransform?{vertexAttributes:{position:e.position,normal:e.normal,tangent:e.tangent},transform:new f.Z({origin:[t.x,t.y,null!==(n=t.z)&&void 0!==n?n:0],geographic:(0,v.h)(t.spatialReference,r)})}:{vertexAttributes:m(e,t,r),transform:null}}function x(e,t,r){return(0,v.h)(t.spatialReference,r)?C(e,t,r):Z(e,t,r)}function w(e,t,r,a){if((0,n.Wi)(t))return x(e,r,a);var o=d(e,t,r.spatialReference);return r.equals(t.getOriginPoint(r.spatialReference))?Z(o,r,a):(0,v.h)(r.spatialReference,a)?C(o,r,a):Z(o,r,a)}function b(e,t,r,a,o){if((0,n.Wi)(r))return null;var i=new Float32Array(r.length);return(0,h.a)(p.ct.fromTypedArray(i),p.ct.fromTypedArray(r),a),(0,g.Yk)(i,e,t,o,i),i}function A(e,t,r,a,o){if((0,n.Wi)(r))return null;var i=new Float32Array(r.length);(0,h.a)(p.ct.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),p.ct.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),a);for(var s=3;s<i.length;s+=4)i[s]=r[s];return(0,g.M2)(i,e,t,o,i),i}function Z(e,t,r){for(var n=new Float64Array(e.position.length),a=e.position,o=t.x,i=t.y,s=t.z||0,l=k(r?r.unit:null,t.spatialReference),u=l.horizontal,c=l.vertical,f=0;f<a.length;f+=3)n[f+0]=(a[f+0]-o)/u,n[f+1]=(a[f+1]-i)/u,n[f+2]=(a[f+2]-s)/c;return{position:n,normal:e.normal,tangent:e.tangent}}function C(e,t,r){var n=t.spatialReference;R(t,r,P);var a=(0,i.a)(E,P),o=new Float64Array(e.position.length),s=function(e,t,r,n){var a=(0,g.XO)(e,t,n),o=p.fP.fromTypedArray(a),i=new Float64Array(a.length),s=p.fP.fromTypedArray(i);return(0,h.t)(s,o,r),i}(e.position,n,a,o),u=(0,l.a)(T,a);return{position:s,normal:F(e.normal,e.position,o,n,u),tangent:M(e.tangent,e.position,o,n,u)}}function R(e,t,r){(0,u.Bm)(e.spatialReference,[e.x,e.y,e.z||0],r,(0,c.rS)(e.spatialReference));var n=k(t?t.unit:null,e.spatialReference),a=n.horizontal,o=n.vertical;return(0,i.h)(r,r,[a,a,o]),r}function F(e,t,r,a,o){if((0,n.Wi)(e))return null;var i=(0,g.Iz)(e,t,r,a,new Float32Array(e.length)),s=p.ct.fromTypedArray(i);return(0,h.a)(s,s,o),i}function M(e,t,r,a,o){if((0,n.Wi)(e))return null;var i=(0,g.wi)(e,t,r,a,new Float32Array(e.length)),s=p.ct.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return(0,h.a)(s,s,o),i}function k(e,t){if((0,n.Wi)(e))return O;var r=t.isGeographic?1:(0,a.c9)(t),o=t.isGeographic?1:(0,a._R)(t),i=(0,a.En)(1,e,"meters");return{horizontal:i*r,vertical:i*o}}var P=(0,s.c)(),E=(0,s.c)(),T=(0,o.c)(),O={horizontal:1,vertical:1}},52002:function(e,t,r){r.r(t),r.d(t,{meshFeatureSetFromJSON:function(){return Ge}});var n=r(37762),a=r(52639),o=r(92026),i=r(53866),s=r(1413),l=r(74165),u=r(15861),c=r(15671),f=r(43144),p=r(60136),h=r(29388),v=r(27366),g=r(10064),m=r(41691),d=r(54472),y=r(32718),x=r(67426),w=r(66978),b=r(94172),A=r(49861),Z=(r(63780),r(93169),r(25243),r(69912)),C=r(71353),R=r(32238),F=r(7882),M=r(80885),k=r(45238),P=r(64995),E=r(76046),T=r(27474),O=r(91320),I=r(79803),z=r(26548),L=r(57898),S=y.Z.getLogger("esri.geometry.support.meshUtils.centerAt");function _(e,t,r){var n;if(e.vertexAttributes&&e.vertexAttributes.position){var a=null!==(n=null===r||void 0===r?void 0:r.origin)&&void 0!==n?n:e.origin;(0,o.pC)(e.transform)?(null!=(null===r||void 0===r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&S.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported")),function(e,t,r){var n=t.x-r.x,a=t.y-r.y,o=t.hasZ&&r.hasZ?t.z-r.z:0,i=e.origin;e.origin=[i[0]+n,i[1]+a,i[2]+o]}(e.transform,t,a)):(0,z.h)(e.spatialReference,r)?function(e,t,r){var n=(0,L.FF)(e.vertexAttributes,r,{geographic:!0}),a=(0,L.iv)(n,t,{geographic:!0}),o=a.position,i=a.normal,s=a.tangent;e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}(e,t,a):function(e,t,r){var n=U,a=N;if((0,I.KC)(t,a,e.spatialReference)){if(!(0,I.KC)(r,n,e.spatialReference)){var o=e.origin;n[0]=o.x,n[1]=o.y,n[2]=o.z,S.error("Failed to project specified origin (wkid:".concat(r.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")."))}(function(e,t,r){if(e)for(var n=0;n<e.length;n+=3)for(var a=0;a<3;a++)e[n+a]+=t[a]-r[a]})(e.vertexAttributes.position,a,n),e.vertexAttributesChanged()}else S.error("Failed to project centerAt location (wkid:".concat(t.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")"))}(e,t,a)}}var N=(0,C.c)(),U=(0,C.c)(),D=r(35995);function j(){return j=(0,u.Z)((0,l.Z)().mark((function e(t,n,a){var i,s,u,c,f,p,h;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Hl)(r.e(5886).then(r.bind(r,35886)),a);case 2:return i=e.sent,s=i.loadGLTFMesh,e.next=6,W(n,a);case 6:return u=e.sent,(c=s(new F.Z({x:0,y:0,z:0,spatialReference:t.spatialReference}),u.url,{resolveFile:B(u),useTransform:!0,signal:(0,o.pC)(a)?a.signal:null})).then((function(){return u.dispose()}),(function(){return u.dispose()})),e.next=11,c;case 11:f=e.sent,p=f.vertexAttributes,h=f.components,t.vertexAttributes=p,t.components=h;case 15:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function B(e){var t=(0,D.Yd)(e.url);return function(r){var n,a=(0,D.PF)(r,t,t),o=a?a.replace(/^ *\.\//,""):null;return null!==(n=e.files.get(o))&&void 0!==n?n:r}}function W(e,t){return G.apply(this,arguments)}function G(){return(G=(0,u.Z)((0,l.Z)().mark((function e(t,r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t instanceof Blob?X.fromBlob(t):"string"==typeof t?new X(t):Array.isArray(t)?Y(t,r):H(t,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){return q.apply(this,arguments)}function q(){return q=(0,u.Z)((0,l.Z)().mark((function e(t,r){var a,i,s,c,f,p,h,v,m,d,y,x;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Map,i=null,e.next=4,(0,w.WW)(t.map(function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name,e.next=3,W(t instanceof Blob?t:t.source,r);case 3:return e.t1=e.sent,e.abrupt("return",{name:e.t0,source:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=e.sent,c=[],f=(0,n.Z)(s);try{for(f.s();!(p=f.n()).done;)(h=p.value)&&((0,w.Hc)(r)?h.source.dispose():c.push(h))}catch(b){f.e(b)}finally{f.f()}for((0,w.k_)(r),v=0,m=c;v<m.length;v++)d=m[v],y=d.name,x=d.source,((0,o.Wi)(i)||/\.(gltf|glb)/i.test(y))&&(i=x.url),a.set(y,x.url),x.files&&x.files.forEach((function(e,t){return a.set(t,e)}));if(!(0,o.Wi)(i)){e.next=12;break}throw new g.Z("mesh-load-external:missing-files","Missing files to load external mesh source");case 12:return e.abrupt("return",new X(i,(function(){return c.forEach((function(e){return e.source.dispose()}))}),a));case 13:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function H(e,t){return K.apply(this,arguments)}function K(){return K=(0,u.Z)((0,l.Z)().mark((function e(t,n){var a,o,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Hl)(Promise.resolve().then(r.bind(r,76200)),n);case 2:if(a=e.sent,o=a.default,"string"!=typeof t.multipart[0]){e.next=10;break}return e.next=7,Promise.all(t.multipart.map(function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t,{responseType:"array-buffer"});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=t.multipart;case 11:return i=e.t0,e.abrupt("return",X.fromBlob(new Blob(i)));case 13:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}var X=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map;(0,c.Z)(this,e),this.url=t,this.dispose=r,this.files=n}return(0,f.Z)(e,null,[{key:"fromBlob",value:function(t){var r=URL.createObjectURL(t);return new e(r,(function(){return URL.revokeObjectURL(r)}))}}]),e}(),V=r(22753),J=r(11873),Q=r(81949),$=r(11186),ee=r(92183),te=r(11700),re=y.Z.getLogger("esri.geometry.support.meshUtils.offset");function ne(e,t,r){e.vertexAttributes&&e.vertexAttributes.position&&((0,o.pC)(e.transform)?(null!=(null===r||void 0===r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&re.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported")),function(e,t){var r=e.origin;e.origin=(0,$.a)((0,C.c)(),r,t)}(e.transform,t)):(0,z.h)(e.spatialReference,r)?function(e,t){var r=e.spatialReference,n=e.vertexAttributes.position,a=e.vertexAttributes.normal,i=e.vertexAttributes.tangent,s=new Float64Array(n.length),l=(0,o.pC)(a)?new Float32Array(a.length):null,u=(0,o.pC)(i)?new Float32Array(i.length):null,c=e.extent.center,f=oe;(0,I.Bm)(r,[c.x,c.y,c.z],ie,(0,ee.rS)(r)),(0,V.f)(se,ie),(0,$.t)(f,t,se),(0,te.XO)(n,r,s),(0,o.pC)(a)&&(0,te.Iz)(a,n,s,r,l),(0,o.pC)(i)&&(0,te.wi)(i,n,s,r,u),ae(s,f),(0,te.To)(s,n,r),(0,o.pC)(a)&&(0,te.Yk)(l,n,s,r,a),(0,o.pC)(i)&&(0,te.M2)(u,n,s,r,i),e.vertexAttributesChanged()}(e,t):function(e,t){ae(e.vertexAttributes.position,t),e.vertexAttributesChanged()}(e,t))}function ae(e,t){if(e)for(var r=0;r<e.length;r+=3)for(var n=0;n<3;n++)e[r+n]+=t[n]}var oe=(0,C.c)(),ie=(0,Q.c)(),se=(0,J.c)();var le={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function ue(e,t,r){e.isPlane||function(e){for(var t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}(e),function(e,t){if(null==t)return;var r="number"==typeof t?[t,t,t]:[null!=t.width?t.width:1,null!=t.depth?t.depth:1,null!=t.height?t.height:1];he[0]=r[0],he[4]=r[1],he[8]=r[2];for(var n=0;n<e.position.length;n+=3){for(var a=0;a<3;a++)pe[a]=e.position[n+a];(0,$.t)(pe,pe,he);for(var o=0;o<3;o++)e.position[n+o]=pe[o]}if(r[0]!==r[1]||r[1]!==r[2]){he[0]=1/r[0],he[4]=1/r[1],he[8]=1/r[2];for(var i=0;i<e.normal.length;i+=3){for(var s=0;s<3;s++)pe[s]=e.normal[i+s];(0,$.t)(pe,pe,he),(0,$.n)(pe,pe);for(var l=0;l<3;l++)e.normal[i+l]=pe[l]}}}(e,r&&r.size);var n=(0,L.w1)(e,t,r),a=n.vertexAttributes,o=n.transform;return{vertexAttributes:new T.Q((0,s.Z)((0,s.Z)({},a),{},{uv:e.uv})),transform:o,components:[new P.Z({faces:e.faces,material:r&&r.material||null})],spatialReference:t.spatialReference}}var ce={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},fe={south:0,east:1,north:2,west:3,up:4,down:5},pe=(0,C.c)(),he=(0,J.c)(),ve=r(14226),ge=y.Z.getLogger("esri.geometry.support.meshUtils.rotate");function me(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position&&0!==t[3]){var n=e.spatialReference;if((0,o.pC)(e.transform)){var a;null!=(null===r||void 0===r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&ge.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported"));var i=null!==(a=null===r||void 0===r?void 0:r.origin)&&void 0!==a?a:e.transform.getOriginPoint(n);!function(e,t,r){var n=(0,$.s)(ye,r.x,r.y,r.z),a=(0,$.b)(ye,n,e.origin);e.applyLocalInverse(a,xe),e.rotation=(0,k.qC)(e.rotation,t,(0,k.Ue)()),e.applyLocalInverse(a,a),(0,$.b)(a,a,xe),e.translation=(0,$.a)((0,C.c)(),e.translation,a)}(e.transform,t,i)}else{var s,l=null!==(s=null===r||void 0===r?void 0:r.origin)&&void 0!==s?s:e.origin;(0,z.h)(e.spatialReference,r)?function(e,t,r){var n=e.spatialReference,a=(0,ee.rS)(n),i=Ze;(0,I.KC)(r,i,a)||(0,I.KC)(e.origin,i,a);var s=e.vertexAttributes.position,l=e.vertexAttributes.normal,u=e.vertexAttributes.tangent,c=new Float64Array(s.length),f=(0,o.pC)(l)?new Float32Array(l.length):null,p=(0,o.pC)(u)?new Float32Array(u.length):null;(0,I.Bm)(a,i,be,a),(0,V.f)(Ae,be);var h=we;(0,$.t)((0,k.ZZ)(we),(0,k.ZZ)(t),Ae),h[3]=t[3],(0,te.XO)(s,n,c),(0,o.pC)(l)&&(0,te.Iz)(l,s,c,n,f),(0,o.pC)(u)&&(0,te.wi)(u,s,c,n,p),de(c,h,3,i),(0,te.To)(c,s,n),(0,o.pC)(l)&&(de(f,h,3),(0,te.Yk)(f,s,c,n,l)),(0,o.pC)(u)&&(de(p,h,4),(0,te.M2)(p,s,c,n,u)),e.vertexAttributesChanged()}(e,t,l):function(e,t,r){var n=Ze;if(!(0,I.KC)(r,n,e.spatialReference)){var a=e.origin;n[0]=a.x,n[1]=a.y,n[2]=a.z,ge.error("Failed to project specified origin (wkid:".concat(r.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")."))}de(e.vertexAttributes.position,t,3,n),de(e.vertexAttributes.normal,t,3),de(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,l)}}}function de(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:C.Z;if(!(0,o.Wi)(e)){(0,ve.d)(be,(0,k.WH)(t),(0,k.ZZ)(t));for(var a=0;a<e.length;a+=r){for(var i=0;i<3;i++)ye[i]=e[a+i]-n[i];(0,$.m)(ye,ye,be);for(var s=0;s<3;s++)e[a+s]=ye[s]+n[s]}}}var ye=(0,C.c)(),xe=(0,C.c)(),we=(0,k.Ue)(),be=(0,Q.c)(),Ae=(0,J.c)(),Ze=(0,C.c)(),Ce=y.Z.getLogger("esri.geometry.support.meshUtils.scale");function Re(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var n=e.spatialReference;if((0,o.pC)(e.transform)){var a;null!=(null===r||void 0===r?void 0:r.geographic)&&r.geographic!==e.transform.geographic&&Ce.warn("Specifying the 'geographic' parameter (".concat(r.geographic,") different from the Mesh transform setting (").concat(e.transform.geographic,") is not supported"));var i=null!==(a=null===r||void 0===r?void 0:r.origin)&&void 0!==a?a:e.transform.getOriginPoint(n);!function(e,t,r){var n=(0,$.s)(ke,r.x,r.y,r.z),a=(0,$.b)(ke,n,e.origin);e.applyLocalInverse(a,Pe);var o=(0,$.g)((0,C.c)(),e.scale,t);e.scale=o,e.applyLocalInverse(a,a),(0,$.b)(a,a,Pe),e.translation=(0,$.a)((0,C.c)(),e.translation,a)}(e.transform,t,i)}else{var s=(0,z.h)(e.spatialReference,r),l=r&&r.origin||e.origin;s?function(e,t,r){var n=e.spatialReference,a=(0,ee.rS)(n),i=Ee;(0,I.KC)(r,i,a)||(0,I.KC)(e.origin,i,a);var s=e.vertexAttributes.position,l=e.vertexAttributes.normal,u=e.vertexAttributes.tangent,c=new Float64Array(s.length),f=(0,o.pC)(l)?new Float32Array(l.length):null,p=(0,o.pC)(u)?new Float32Array(u.length):null;(0,te.XO)(s,n,c),(0,o.pC)(l)&&(0,te.Iz)(l,s,c,n,f),(0,o.pC)(u)&&(0,te.wi)(u,s,c,n,p),Fe(c,t,i),(0,te.To)(c,s,n),(0,o.pC)(l)&&(0,te.Yk)(f,s,c,n,l),(0,o.pC)(u)&&(0,te.M2)(p,s,c,n,u),e.vertexAttributesChanged()}(e,t,l):function(e,t,r){var n=Ee;if(!(0,I.KC)(r,n,e.spatialReference)){var a=e.origin;n[0]=a.x,n[1]=a.y,n[2]=a.z,Ce.error("Failed to project specified origin (wkid:".concat(r.spatialReference.wkid,") to mesh spatial reference (wkid:").concat(e.spatialReference.wkid,")."))}Fe(e.vertexAttributes.position,t,n),e.vertexAttributesChanged()}(e,t,l)}}}function Fe(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C.Z;if(e)for(var n=0;n<e.length;n+=3){for(var a=0;a<3;a++)ke[a]=e[n+a]-r[a];(0,$.g)(ke,ke,t);for(var o=0;o<3;o++)e[n+o]=ke[o]+r[o]}}var Me,ke=(0,C.c)(),Pe=(0,C.c)(),Ee=(0,C.c)(),Te=y.Z.getLogger("esri.geometry.Mesh"),Oe=Me=function(e){(0,p.Z)(a,e);var t=(0,h.Z)(a);function a(e){var r;return(0,c.Z)(this,a),(r=t.call(this,e)).components=null,r.transform=null,r.external=null,r.hasZ=!0,r.hasM=!1,r.vertexAttributes=new T.Q,r.type="mesh",r}return(0,f.Z)(a,[{key:"initialize",value:function(){var e=this;((0,o.Wi)(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((function(){e.handles.add((0,b.YP)((function(){var t;return{vertexAttributes:e.vertexAttributes,components:null===(t=e.components)||void 0===t?void 0:t.map((function(e){return e.clone()})),transform:(0,o.pC)(e.transform)?e.transform.clone():null}}),(function(){return e._set("external",null)}),{once:!0,sync:!0}))}))}},{key:"hasExtent",get:function(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}},{key:"boundingInfo",get:function(){var e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return{extent:new i.Z({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new F.Z({x:0,y:0,z:0,spatialReference:t})};for(var r=(0,o.pC)(this.transform)?this.transform.project(e,t):e,n=1/0,a=1/0,s=1/0,l=-1/0,u=-1/0,c=-1/0,f=0,p=0,h=0,v=r.length,g=1/(v/3),m=0;m<v;){var d=r[m++],y=r[m++],x=r[m++];n=Math.min(n,d),a=Math.min(a,y),s=Math.min(s,x),l=Math.max(l,d),u=Math.max(u,y),c=Math.max(c,x),f+=g*d,p+=g*y,h+=g*x}return{extent:new i.Z({xmin:n,ymin:a,zmin:s,xmax:l,ymax:u,zmax:c,spatialReference:t}),center:new F.Z({x:f,y:p,z:h,spatialReference:t})}}},{key:"anchor",get:function(){if((0,o.pC)(this.transform))return this.transform.getOriginPoint(this.spatialReference);var e=this.boundingInfo;return new F.Z({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}},{key:"origin",get:function(){return(0,o.pC)(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}},{key:"extent",get:function(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}},{key:"addComponent",value:function(e){this.loaded?(this.components||(this.components=[]),this.components.push(P.Z.from(e)),this.notifyChange("components")):Te.error("addComponent()","Mesh must be loaded before applying operations")}},{key:"removeComponent",value:function(e){if(this.loaded){if(this.components){var t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Te.error("removeComponent()","Provided component is not part of the list of components")}else Te.error("removeComponent()","Mesh must be loaded before applying operations")}},{key:"rotate",value:function(e,t,r,n){return(0,k.uT)(Le.x,e,Se),(0,k.uT)(Le.y,t,_e),(0,k.uT)(Le.z,r,Ne),(0,k.qC)(Se,_e,Se),(0,k.qC)(Se,Ne,Se),me(this,Se,n),this}},{key:"offset",value:function(e,t,r,n){return this.loaded?(Ue[0]=e,Ue[1]=t,Ue[2]=r,ne(this,Ue,n),this):(Te.error("offset()","Mesh must be loaded before applying operations"),this)}},{key:"scale",value:function(e,t){return this.loaded?(Re(this,e,t),this):(Te.error("scale()","Mesh must be loaded before applying operations"),this)}},{key:"centerAt",value:function(e,t){return this.loaded?(_(this,e,t),this):(Te.error("centerAt()","Mesh must be loaded before applying operations"),this)}},{key:"load",value:function(e){return(0,o.pC)(this.external)&&this.addResolvingPromise(function(e,t,r){return j.apply(this,arguments)}(this,this.external.source,e)),Promise.resolve(this)}},{key:"clone",value:function(){var e=this.components?new Map:null,t=this.components?new Map:null,r={components:this.components?this.components.map((function(r){return r.cloneWithDeduplication(e,t)})):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:(0,o.pC)(this.transform)?this.transform.clone():null,external:(0,o.pC)(this.external)?{source:this.external.source,extent:(0,o.pC)(this.external.extent)?this.external.extent.clone():null}:null};return new Me(r)}},{key:"vertexAttributesChanged",value:function(){this.notifyChange("vertexAttributes")}},{key:"toBinaryGLTF",value:function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t){var n,a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(5477).then(r.bind(r,95477));case 2:return n=e.sent,a=n.toBinaryGLTF,e.abrupt("return",a(this,t));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"createBox",value:function(e,t){if(!(e instanceof F.Z))return Te.error(".createBox()","expected location to be a Point instance"),null;var r=new Me(ue(function(){for(var e=ce.faceDescriptions,t=ce.faceVertexOffsets,r=ce.uvScales,a=4*e.length,o=new Float64Array(3*a),i=new Float32Array(3*a),s=new Float32Array(2*a),l=new Uint32Array(2*e.length*3),u=0,c=0,f=0,p=0,h=0;h<e.length;h++){var v,g=e[h],m=u/3,d=(0,n.Z)(t);try{for(d.s();!(v=d.n()).done;){var y=v.value;l[p++]=m+y}}catch(C){d.e(C)}finally{d.f()}for(var x=g.corners,w=0;w<4;w++){var b=x[w],A=0;s[f++]=.25*r[w][0]+g.uvOrigin[0],s[f++]=g.uvOrigin[1]-.25*r[w][1];for(var Z=0;Z<3;Z++)0!==g.axis[Z]?(o[u++]=.5*g.axis[Z],i[c++]=g.axis[Z]):(o[u++]=.5*b[A++],i[c++]=0)}}return{position:o,normal:i,uv:s,faces:l}}(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?function(e,t){for(var r=e.components[0],n=r.faces,a=fe[t],i=6*a,s=new Uint32Array(6),l=new Uint32Array(n.length-6),u=0,c=0,f=0;f<n.length;f++)f>=i&&f<i+6?s[u++]=n[f]:l[c++]=n[f];if((0,o.pC)(e.vertexAttributes.uv)){for(var p=new Float32Array(e.vertexAttributes.uv),h=4*a*2,v=[0,1,1,1,1,0,0,0],g=0;g<v.length;g++)p[h+g]=v[g];e.vertexAttributes.uv=p}return e.components=[new P.Z({faces:s,material:r.material}),new P.Z({faces:l})],e}(r,t.imageFace):r}},{key:"createSphere",value:function(e,t){return e instanceof F.Z?new Me(ue(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Math.round(8*Math.pow(2,e)),r=2*t,n=(t-1)*(r+1)+2*r,a=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),s=new Uint32Array((t-1)*r*2*3),l=0,u=0,c=0,f=0,p=0;p<=t;p++){var h=p/t*Math.PI+.5*Math.PI,v=Math.cos(h),g=Math.sin(h);pe[2]=g;for(var m=0===p||p===t,d=m?r-1:r,y=0;y<=d;y++){var x=y/d*2*Math.PI;pe[0]=-Math.sin(x)*v,pe[1]=Math.cos(x)*v;for(var w=0;w<3;w++)a[l]=.5*pe[w],o[l]=pe[w],++l;i[u++]=(y+(m?.5:0))/r,i[u++]=p/t,0!==p&&y!==r&&(p!==t&&(s[c++]=f,s[c++]=f+1,s[c++]=f-r),1!==p&&(s[c++]=f,s[c++]=f-r,s[c++]=f-r-1)),f++}}return{position:a,normal:o,uv:i,faces:s}}(t&&t.densificationFactor||0),e,t)):(Te.error(".createSphere()","expected location to be a Point instance"),null)}},{key:"createCylinder",value:function(e,t){return e instanceof F.Z?new Me(ue(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=5,r=Math.round(16*Math.pow(2,e)),n=(t-1)*(r+1)+2*r,a=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),s=new Uint32Array(4*r*3),l=0,u=0,c=0,f=0,p=0,h=0;h<=t;h++)for(var v=0===h||h===t,g=h<=1||h>=t-1,m=2===h||4===h,d=v?r-1:r,y=0;y<=d;y++){var x=y/d*2*Math.PI,w=v?0:.5;pe[0]=w*Math.sin(x),pe[1]=w*-Math.cos(x),pe[2]=h<=2?.5:-.5;for(var b=0;b<3;b++)a[l++]=pe[b],o[u++]=g?2===b?h<=1?1:-1:0:2===b?0:pe[b]/w;i[c++]=(y+(v?.5:0))/r,i[c++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,m||0===h||y===r||(h!==t&&(s[f++]=p,s[f++]=p+1,s[f++]=p-r),1!==h&&(s[f++]=p,s[f++]=p-r,s[f++]=p-r-1)),p++}return{position:a,normal:o,uv:i,faces:s}}(t&&t.densificationFactor||0),e,t)):(Te.error(".createCylinder()","expected location to be a Point instance"),null)}},{key:"createPlane",value:function(e,t){var r;if(!(e instanceof F.Z))return Te.error(".createPlane()","expected location to be a Point instance"),null;var n=null!==(r=null===t||void 0===t?void 0:t.facing)&&void 0!==r?r:"up",a=function(e,t){var r="number"==typeof t?t:null!=t?t.width:1,n="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}(n,null===t||void 0===t?void 0:t.size);return new Me(ue(function(e){for(var t=le.facingAxisOrderSwap[e],r=le.position,n=le.normal,a=new Float64Array(r.length),o=new Float32Array(n.length),i=0,s=0;s<4;s++)for(var l=i,u=0;u<3;u++){var c=t[u],f=Math.abs(c)-1,p=c>=0?1:-1;a[i]=r[l+f]*p,o[i]=n[l+f]*p,i++}return{position:a,normal:o,uv:new Float32Array(le.uv),faces:new Uint32Array(le.faces),isPlane:!0}}(n),e,(0,s.Z)((0,s.Z)({},t),{},{size:a})))}},{key:"createFromPolygon",value:function(e,t){if(!(e instanceof M.Z))return Te.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;var r=(0,O.bT)(e);return new Me({vertexAttributes:new T.Q({position:r.position}),components:[new P.Z({faces:r.faces,shading:"flat",material:t&&t.material||null})],spatialReference:e.spatialReference})}},{key:"createFromGLTF",value:function(){var e=(0,u.Z)((0,l.Z)().mark((function e(t,n,a){var o,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof F.Z){e.next=2;break}throw Te.error(".createfromGLTF()","expected location to be a Point instance"),new g.Z("invalid-input","Expected location to be a Point instance");case 2:return e.next=4,(0,w.Hl)(r.e(5886).then(r.bind(r,35886)),a);case 4:return o=e.sent,i=o.loadGLTFMesh,e.t0=Me,e.next=9,i(t,n,a);case 9:return e.t1=e.sent,e.abrupt("return",new e.t0(e.t1));case 11:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"createWithExternalSource",value:function(e,t,r){var n,a,o,i=null!==(n=null===r||void 0===r?void 0:r.extent)&&void 0!==n?n:null,s=null!==(a=null===r||void 0===r?void 0:r.transform.clone())&&void 0!==a?a:new E.Z;s.origin=[e.x,e.y,null!==(o=e.z)&&void 0!==o?o:0];var l=e.spatialReference;return new Me({external:{source:t,extent:i},transform:s,spatialReference:l})}},{key:"createIncomplete",value:function(e,t){var r,n,a=null!==(r=null===t||void 0===t?void 0:t.transform.clone())&&void 0!==r?r:new E.Z;a.origin=[e.x,e.y,null!==(n=e.z)&&void 0!==n?n:0];var o=e.spatialReference,i=new Me({transform:a,spatialReference:o});return i.addResolvingPromise(Promise.reject(new g.Z("mesh-incomplete","Mesh resources are not complete"))),i}}]),a}((0,m.p)(d.Z.LoadableMixin((0,x.v)(R.Z))));(0,v._)([(0,A.Cb)({type:[P.Z],json:{write:!0}})],Oe.prototype,"components",void 0),(0,v._)([(0,A.Cb)({type:E.Z,json:{write:!0}})],Oe.prototype,"transform",void 0),(0,v._)([(0,A.Cb)({constructOnly:!0})],Oe.prototype,"external",void 0),(0,v._)([(0,A.Cb)({readOnly:!0})],Oe.prototype,"hasExtent",null),(0,v._)([(0,A.Cb)({readOnly:!0})],Oe.prototype,"boundingInfo",null),(0,v._)([(0,A.Cb)({readOnly:!0})],Oe.prototype,"anchor",null),(0,v._)([(0,A.Cb)({readOnly:!0})],Oe.prototype,"origin",null),(0,v._)([(0,A.Cb)({readOnly:!0,json:{read:!1}})],Oe.prototype,"extent",null),(0,v._)([(0,A.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Oe.prototype,"hasZ",void 0),(0,v._)([(0,A.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Oe.prototype,"hasM",void 0),(0,v._)([(0,A.Cb)({type:T.Q,nonNullable:!0,json:{write:!0}})],Oe.prototype,"vertexAttributes",void 0),Oe=Me=(0,v._)([(0,Z.j)("esri.geometry.Mesh")],Oe);var Ie,ze,Le={x:(0,C.f)(1,0,0),y:(0,C.f)(0,1,0),z:(0,C.f)(0,0,1)},Se=(0,k.Ue)(),_e=(0,k.Ue)(),Ne=(0,k.Ue)(),Ue=(0,C.c)(),De=Oe;!function(e){e.featureGUID="featureGUID",e.assetName="assetName",e.hash="hash",e.type="type",e.conversionStatus="conversionStatus",e.flags="flags",e.complexity="complexity",e.size="size",e.seqNo="seqNo",e.sourceHash="sourceHash",e.assetURL="assetURL"}(Ie||(Ie={})),function(e){e.SUBMITTED="SUBMITTED",e.INPROGRESS="INPROGRESS",e.FAILED="FAILED",e.COMPLETED="COMPLETED"}(ze||(ze={}));var je,Be,We=r(49818);function Ge(e,t,r){var i=r.features;r.features=[],delete r.geometryType;var s=We.default.fromJSON(r);s.geometryType="mesh";var l,u,c=s.spatialReference,f=(0,o.Wi)(e.outFields)||!e.outFields.length?function(){return{}}:(l=e.outFields.includes("*")?null:new Set(e.outFields),function(e){var t=e.attributes;if(!t)return{};if(!l)return t;for(var r in t)l.has(r)||delete t[r];return t}),p=(0,n.Z)(i);try{for(p.s();!(u=p.n()).done;){var h=u.value,v=Ye(h,c,t);(0,o.pC)(v)&&s.features.push(new a.Z({geometry:v,attributes:f(h)}))}}catch(g){p.e(g)}finally{p.f()}return s}function Ye(e,t,r){var a=function(e){if(!e.assetMappings)return{status:je.FAILED};var t,r=[],a=new Map,o=(0,n.Z)(e.assetMappings);try{for(o.s();!(t=o.n()).done;){var i=t.value,s=i[Ie.seqNo],l=i[Ie.assetName],u=i[Ie.assetURL],c=i[Ie.conversionStatus];if(c===ze.FAILED)return{status:je.FAILED};if(c!==ze.COMPLETED)return{status:je.PENDING};if(null==s)r.push({name:l,source:u});else{var f=a.get(l),p=void 0;f?p=f.multipart:(p=[],r.push({name:l,source:{multipart:p}}),a.set(l,{multipart:p})),p[s]=u}}}catch(h){o.e(h)}finally{o.f()}return{status:je.COMPLETED,source:r}}(e),o=a.status,s=a.source;if(o===je.FAILED)return null;var l=function(e,t,r){var n=e.attributes,a=r.transformFieldRoles;return new F.Z({x:n[a.originX],y:n[a.originY],z:n[a.originZ],spatialReference:t})}(e,t,r),u=i.Z.fromJSON(e.geometry);u.spatialReference=t;var c=function(e,t){var r,n=e.attributes,a=e.assetMappings,o=t.transformFieldRoles;return new E.Z({translation:[n[o.translationX],n[o.translationY],n[o.translationZ]],rotation:(0,k.uT)([n[o.rotationX],n[o.rotationY],n[o.rotationZ]],n[o.rotationDeg]),scale:[n[o.scaleX],n[o.scaleY],n[o.scaleZ]],geographic:!(null!==(r=a[Ie.flags])&&void 0!==r&&r.includes("PROJECT_VERTICES"))})}(e,r);return o===je.PENDING?De.createIncomplete(l,{extent:u,transform:c}):De.createWithExternalSource(l,s,{extent:u,transform:c})}(Be=je||(je={}))[Be.FAILED=0]="FAILED",Be[Be.PENDING=1]="PENDING",Be[Be.COMPLETED=2]="COMPLETED"}}]);
//# sourceMappingURL=2002.0d83de8c.chunk.js.map