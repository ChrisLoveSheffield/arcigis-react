"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[6520],{12717:function(e,t,i){i.d(t,{Y:function(){return a}});var r=i(37762),n=i(92026);function s(e,t){return e?t?4:3:t?3:2}function a(e,t,i,a,l){if((0,n.Wi)(t)||!t.lengths.length)return null;var c="upperLeft"===(null===l||void 0===l?void 0:l.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var p,h=e.coords,d=[],y=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=t.lengths,g=t.coords,v=s(i,a),b=0,C=(0,r.Z)(f);try{for(C.s();!(p=C.n()).done;){var m=p.value,_=u(y,g,b,m,i,a,c);_&&d.push(_),b+=m*v}}catch(w){C.e(w)}finally{C.f()}if(d.sort((function(e,t){var r=c*e[2]-c*t[2];return 0===r&&i&&(r=e[4]-t[4]),r})),d.length){var I=6*d[0][2];h[0]=d[0][0]/I,h[1]=d[0][1]/I,i&&(I=6*d[0][4],h[2]=0!==I?d[0][3]/I:0),(h[0]<y[0]||h[0]>y[1]||h[1]<y[2]||h[1]>y[3]||i&&(h[2]<y[4]||h[2]>y[5]))&&(h.length=0)}if(!h.length){var k=t.lengths[0]?o(g,0,f[0],i,a):null;if(!k)return null;h[0]=k[0],h[1]=k[1],i&&k.length>2&&(h[2]=k[2])}return e}function u(e,t,i,r,n,a){for(var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=s(n,a),l=i,c=i+o,p=0,h=0,d=0,y=0,f=0,g=0,v=r-1;g<v;g++,l+=o,c+=o){var b=t[l],C=t[l+1],m=t[l+2],_=t[c],I=t[c+1],k=t[c+2],w=b*I-_*C;y+=w,p+=(b+_)*w,h+=(C+I)*w,n&&(d+=(m+k)*(w=b*k-_*m),f+=w),b<e[0]&&(e[0]=b),b>e[1]&&(e[1]=b),C<e[2]&&(e[2]=C),C>e[3]&&(e[3]=C),n&&(m<e[4]&&(e[4]=m),m>e[5]&&(e[5]=m))}if(y*u>0&&(y*=-1),f*u>0&&(f*=-1),!y)return null;var V=[p,h,.5*y];return n&&(V[3]=d,V[4]=.5*f),V}function o(e,t,i,r,n){for(var a=s(r,n),u=t,o=t+a,d=0,y=0,f=0,g=0,v=0,b=i-1;v<b;v++,u+=a,o+=a){var C=e[u],m=e[u+1],_=e[u+2],I=e[o],k=e[o+1],w=e[o+2],V=r?c(C,m,_,I,k,w):l(C,m,I,k);if(V)if(d+=V,r){var S=h(C,m,_,I,k,w);y+=V*S[0],f+=V*S[1],g+=V*S[2]}else{var E=p(C,m,I,k);y+=V*E[0],f+=V*E[1]}}return d>0?r?[y/d,f/d,g/d]:[y/d,f/d]:i>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,r){var n=i-e,s=r-t;return Math.sqrt(n*n+s*s)}function c(e,t,i,r,n,s){var a=r-e,u=n-t,o=s-i;return Math.sqrt(a*a+u*u+o*o)}function p(e,t,i,r){return[e+.5*(i-e),t+.5*(r-t)]}function h(e,t,i,r,n,s){return[e+.5*(r-e),t+.5*(n-t),i+.5*(s-i)]}},73364:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var r=i(74165),n=i(15861),s=i(15671),a=i(43144),u=i(60136),o=i(29388),l=i(27366),c=i(85015),p=i(79056),h=i(92026),d=i(49861),y=(i(63780),i(93169),i(25243),i(69912)),f=i(79510),g=function(e){(0,u.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,s.Z)(this,i),(r=t.call(this,e)).processor=null,r.slicePlaneEnabled=!1,r.layer=new v,r}return(0,a.Z)(i,[{key:"initialize",value:function(){this._set("processor",new f.D({owner:this})),this.processor.setup()}},{key:"destroy",value:function(){this._set("processor",(0,h.SC)(this.processor))}},{key:"graphics",get:function(){return this.view.graphics}},{key:"loadedGraphics",get:function(){return this.graphics}},{key:"updating",get:function(){var e;return!(null===(e=this.processor)||void 0===e||!e.updating)}},{key:"symbolUpdateType",get:function(){return this.processor.graphicsCore.symbolUpdateType}},{key:"getHit",value:function(e){return this.processor.getHit(e)}},{key:"whenGraphicBounds",value:function(e,t){return this.processor.whenGraphicBounds(e,t)}},{key:"graphicChanged",value:function(e){this.processor.graphicsCore.graphicUpdateHandler(e)}},{key:"updatePolicy",get:function(){return this.processor.graphicsCore.effectiveUpdatePolicy}},{key:"queryGraphics",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.loadedGraphics);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchPopupFeatures",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.pC)(i)?i.clientGraphics:null);case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){return this.processor.highlight(e)}},{key:"maskOccludee",value:function(e){return this.processor.maskOccludee(e)}}]),i}((0,i(35818).I)(c.Z));(0,l._)([(0,d.Cb)({readOnly:!0})],g.prototype,"graphics",null),(0,l._)([(0,d.Cb)()],g.prototype,"loadedGraphics",null),(0,l._)([(0,d.Cb)({readOnly:!0})],g.prototype,"updating",null),(0,l._)([(0,d.Cb)({constructOnly:!0})],g.prototype,"view",void 0),(0,l._)([(0,d.Cb)()],g.prototype,"processor",void 0),(0,l._)([(0,d.Cb)({type:Boolean})],g.prototype,"slicePlaneEnabled",void 0),(0,l._)([(0,d.Cb)()],g.prototype,"layer",void 0),g=(0,l._)([(0,y.j)("esri.views.3d.layers.GraphicsView3D")],g);var v=function(e){(0,u.Z)(i,e);var t=(0,o.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.call(this)).type="graphics-view-3d-dummy",e.id=e.uid,e}return(0,a.Z)(i)}(p.Ej),b=g},79510:function(e,t,i){i.d(t,{D:function(){return T}});var r=i(74165),n=i(15861),s=i(1413),a=i(15671),u=i(43144),o=i(60136),l=i(29388),c=i(27366),p=i(52639),h=i(80987),d=i(41691),y=i(42537),f=i(92026),g=i(66978),v=i(94172),b=i(49861),C=(i(63780),i(93169),i(25243),i(69912)),m=i(48732),_=i(30651),I=i(37818),k=i(34610),w=i(21149),V=i(26279),S=i(61310),E=i(86792),Z=i(79874),G=i(84328),N=i(46568),O=i(59453),x=i(96387),P=i(68401),T=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,a.Z)(this,i),(r=t.call(this,e)).type="graphics-3d",r.graphicsCore=null,r.elevationAlignment=new Z.Z,r.drapeSourceType=V.L.Features,r._suspendResumeExtent=null,r}return(0,u.Z)(i,[{key:"normalizeCtorArgs",value:function(e){var t=(0,s.Z)((0,s.Z)({},e),{},{scaleVisibility:null,frustumVisibility:null});return delete t.scaleVisibilityEnabled,delete t.frustumVisibilityEnabled,e.scaleVisibilityEnabled&&(t.scaleVisibility=new O.Z),e.frustumVisibilityEnabled&&(t.frustumVisibility=new G.Z),t}},{key:"initialize",value:function(){var e=this,t=new E.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:P.jq.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",t);var i=this.layer,r=this.scaleVisibility;if((0,f.pC)(r)&&"effectiveScaleRange"in i){var n=i;this.updatingHandles.add((function(){return n.effectiveScaleRange}),(function(){return r.layerMinMaxScaleChangeHandler()}))}if("fullOpacity"in this.owner){var s=this.owner;this.updatingHandles.add((function(){return s.fullOpacity}),(function(){return e.graphicsCore.opacityChange()}))}if("elevationInfo"in i){var a=i;this.updatingHandles.add((function(){return a.elevationInfo}),(function(t,i){(0,m.Hg)(t,i)&&e.updatingHandles.addPromise(e.graphicsCore.elevationInfoChange())}))}}},{key:"setup",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var t,i,n=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,t,i){return n.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i)},this.elevationAlignment.setup(this,t,this.graphicsCore,this.view.elevationProvider),(0,f.pC)(this.scaleVisibility)&&"effectiveScaleRange"in this.layer&&(i=this.owner.view.basemapTerrain,this.scaleVisibility.setup(this,this.layer,t,this.graphicsCore,i)),(0,f.pC)(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new N.d(this.graphicsCore)),e.prev=3,e.next=6,this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates});case 6:e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(3),!(0,g.D_)(e.t0)){e.next=12;break}return e.abrupt("return");case 12:throw e.t0;case 13:this.destroyed||(this.handles.add((0,v.YP)((function(){return n.view.clippingArea}),(function(){return n._updateClippingExtent()}),v.Z_)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",(0,f.SC)(this.elevationAlignment)),this._set("scaleVisibility",(0,f.SC)(this.scaleVisibility)),this._set("frustumVisibility",(0,f.SC)(this.frustumVisibility)),this._set("objectStates",(0,f.SC)(this.objectStates)),this._set("graphicsCore",(0,f.SC)(this.graphicsCore))}},{key:"layer",get:function(){return this.owner.layer}},{key:"view",get:function(){return this.owner.view}},{key:"scaleVisibilitySuspended",get:function(){return!(!(0,f.pC)(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"frustumVisibilitySuspended",get:function(){return!(!(0,f.pC)(this.frustumVisibility)||!this.frustumVisibility.suspended)}},{key:"suspended",get:function(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}},{key:"updating",get:function(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||(0,f.pC)(this.scaleVisibility)&&this.scaleVisibility.updating||(0,f.pC)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}},{key:"graphics3DGraphics",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},{key:"fullOpacity",get:function(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"notifyGraphicGeometryChanged",value:function(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}},{key:"notifyGraphicVisibilityChanged",value:function(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}},{key:"getRenderingInfo",value:function(e,t,i){var r=(0,k.Kb)(e,{renderer:t,arcade:i});if((0,f.pC)(r)&&r.color){var n=r.color;n[0]=n[0]/255,n[1]=n[1]/255,n[2]=n[2]/255}return r}},{key:"getRenderingInfoAsync",value:function(e,t,i,r){return(0,k.xn)(e,(0,s.Z)({renderer:t,arcade:i},r))}},{key:"getHit",value:function(e){if(this.owner.loadedGraphics){var t=this.owner.loadedGraphics.find((function(t){return t.uid===e}));if(t){var i=this.layer instanceof _.Z?this.layer:null,r=(0,I.mW)(t,i);return{type:"graphic",graphic:r,layer:r.layer}}}return null}},{key:"whenGraphicBounds",value:function(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}},{key:"computeAttachmentOrigin",value:function(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}},{key:"getSymbolLayerSize",value:function(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}},{key:"maskOccludee",value:function(e){var t=this.objectStates.acquireSet(P.V_.MaskOccludee,null),i=t.set,r=t.handle;return this.objectStates.setUid(i,e.uid),r}},{key:"highlight",value:function(e){if(e instanceof w.Z)return A;if("number"==typeof e)return this.highlight([e]);if(e instanceof p.Z)return this.highlight([e]);if(e instanceof h.Z&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof p.Z){var t=e.map((function(e){return e.uid})),i=this.objectStates.acquireSet(P.V_.Highlight,null),r=i.set,n=i.handle;return this.objectStates.setUids(r,t),n}if("number"==typeof e[0]){var s=e,a=this.objectStates.acquireSet(P.V_.Highlight,null),u=a.set,o=a.handle;return this.objectStates.setObjectIds(u,s),o}}return A}},{key:"_setupSuspendResumeExtent",value:function(){var e=this,t=this.scaleVisibility,i=this.frustumVisibility;if(!(0,f.Wi)(t)||!(0,f.Wi)(i)){var r=function(r){var n=r.computedExtent,s=r.extentPadding;e._suspendResumeExtent=(0,x.Go)(n,e._suspendResumeExtent,S.ZF,s),(0,f.pC)(t)&&t.setExtent(e._suspendResumeExtent),(0,f.pC)(i)&&i.setExtent(e._suspendResumeExtent)};this.handles.add((0,v.YP)((function(){var t,i;return{computedExtent:null===(t=e.graphicsCore)||void 0===t?void 0:t.computedExtent,extentPadding:null===(i=e.graphicsCore)||void 0===i?void 0:i.extentPadding}}),(function(e){return r(e)}),v.tX))}}},{key:"_updateClippingExtent",value:function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}}]),i}(d.r);(0,c._)([(0,b.Cb)()],T.prototype,"type",void 0),(0,c._)([(0,b.Cb)({constructOnly:!0})],T.prototype,"owner",void 0),(0,c._)([(0,b.Cb)()],T.prototype,"layer",null),(0,c._)([(0,b.Cb)()],T.prototype,"view",null),(0,c._)([(0,b.Cb)({constructOnly:!0})],T.prototype,"graphicsCore",void 0),(0,c._)([(0,b.Cb)({constructOnly:!0})],T.prototype,"scaleVisibility",void 0),(0,c._)([(0,b.Cb)({constructOnly:!0})],T.prototype,"frustumVisibility",void 0),(0,c._)([(0,b.Cb)({readOnly:!0})],T.prototype,"elevationAlignment",void 0),(0,c._)([(0,b.Cb)({readOnly:!0})],T.prototype,"objectStates",void 0),(0,c._)([(0,b.Cb)({readOnly:!0})],T.prototype,"scaleVisibilitySuspended",null),(0,c._)([(0,b.Cb)({readOnly:!0})],T.prototype,"frustumVisibilitySuspended",null),(0,c._)([(0,b.Cb)()],T.prototype,"suspended",null),(0,c._)([(0,b.Cb)({readOnly:!0})],T.prototype,"updating",null),(0,c._)([(0,b.Cb)()],T.prototype,"loadedGraphics",null),(0,c._)([(0,b.Cb)()],T.prototype,"fullOpacity",null),(0,c._)([(0,b.Cb)()],T.prototype,"slicePlaneEnabled",null),(0,c._)([(0,b.Cb)()],T.prototype,"drapeSourceType",void 0),(0,c._)([(0,b.Cb)()],T.prototype,"updatePolicy",null),T=(0,c._)([(0,C.j)("esri.views.3d.layers.graphics.GraphicsProcessor")],T);var A=(0,y.kB)()},35818:function(e,t,i){i.d(t,{I:function(){return p}});var r=i(43144),n=i(15671),s=i(60136),a=i(29388),u=i(27366),o=i(79056),l=i(49861),c=(i(63780),i(93169),i(25243),i(69912)),p=function(e){var t=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).graphics=null,e.renderer=null,e}return(0,r.Z)(i)}((0,o.IG)(e));return(0,u._)([(0,l.Cb)()],t.prototype,"graphics",void 0),(0,u._)([(0,l.Cb)()],t.prototype,"renderer",void 0),(0,u._)([(0,l.Cb)()],t.prototype,"updating",void 0),(0,u._)([(0,l.Cb)()],t.prototype,"view",void 0),t=(0,u._)([(0,c.j)("esri.views.layers.GraphicsView")],t)}}}]);
//# sourceMappingURL=6520.fd97a5d3.chunk.js.map