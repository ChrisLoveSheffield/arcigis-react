"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[4453],{12717:function(e,t,i){i.d(t,{Y:function(){return s}});var n=i(37762),r=i(92026);function a(e,t){return e?t?4:3:t?3:2}function s(e,t,i,s,l){if((0,r.Wi)(t)||!t.lengths.length)return null;var c="upperLeft"===(null===l||void 0===l?void 0:l.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);var d,h=e.coords,p=[],y=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],f=t.lengths,v=t.coords,g=a(i,s),b=0,m=(0,n.Z)(f);try{for(m.s();!(d=m.n()).done;){var C=d.value,_=o(y,v,b,C,i,s,c);_&&p.push(_),b+=C*g}}catch(w){m.e(w)}finally{m.f()}if(p.sort((function(e,t){var n=c*e[2]-c*t[2];return 0===n&&i&&(n=e[4]-t[4]),n})),p.length){var k=6*p[0][2];h[0]=p[0][0]/k,h[1]=p[0][1]/k,i&&(k=6*p[0][4],h[2]=0!==k?p[0][3]/k:0),(h[0]<y[0]||h[0]>y[1]||h[1]<y[2]||h[1]>y[3]||i&&(h[2]<y[4]||h[2]>y[5]))&&(h.length=0)}if(!h.length){var I=t.lengths[0]?u(v,0,f[0],i,s):null;if(!I)return null;h[0]=I[0],h[1]=I[1],i&&I.length>2&&(h[2]=I[2])}return e}function o(e,t,i,n,r,s){for(var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,u=a(r,s),l=i,c=i+u,d=0,h=0,p=0,y=0,f=0,v=0,g=n-1;v<g;v++,l+=u,c+=u){var b=t[l],m=t[l+1],C=t[l+2],_=t[c],k=t[c+1],I=t[c+2],w=b*k-_*m;y+=w,d+=(b+_)*w,h+=(m+k)*w,r&&(p+=(C+I)*(w=b*I-_*C),f+=w),b<e[0]&&(e[0]=b),b>e[1]&&(e[1]=b),m<e[2]&&(e[2]=m),m>e[3]&&(e[3]=m),r&&(C<e[4]&&(e[4]=C),C>e[5]&&(e[5]=C))}if(y*o>0&&(y*=-1),f*o>0&&(f*=-1),!y)return null;var S=[d,h,.5*y];return r&&(S[3]=p,S[4]=.5*f),S}function u(e,t,i,n,r){for(var s=a(n,r),o=t,u=t+s,p=0,y=0,f=0,v=0,g=0,b=i-1;g<b;g++,o+=s,u+=s){var m=e[o],C=e[o+1],_=e[o+2],k=e[u],I=e[u+1],w=e[u+2],S=n?c(m,C,_,k,I,w):l(m,C,k,I);if(S)if(p+=S,n){var Z=h(m,C,_,k,I,w);y+=S*Z[0],f+=S*Z[1],v+=S*Z[2]}else{var V=d(m,C,k,I);y+=S*V[0],f+=S*V[1]}}return p>0?n?[y/p,f/p,v/p]:[y/p,f/p]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,n){var r=i-e,a=n-t;return Math.sqrt(r*r+a*a)}function c(e,t,i,n,r,a){var s=n-e,o=r-t,u=a-i;return Math.sqrt(s*s+o*o+u*u)}function d(e,t,i,n){return[e+.5*(i-e),t+.5*(n-t)]}function h(e,t,i,n,r,a){return[e+.5*(n-e),t+.5*(r-t),i+.5*(a-i)]}},42069:function(e,t,i){i.d(t,{A:function(){return b}});var n=i(74165),r=i(15861),a=i(15671),s=i(43144),o=i(11752),u=i(61120),l=i(60136),c=i(29388),d=i(27366),h=i(42537),p=i(66978),y=i(94172),f=i(49861),v=(i(63780),i(93169),i(25243),i(69912)),g=i(5354),b=function(e){var t=function(e){(0,l.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,s.Z)(i,[{key:"postscript",value:function(e){(0,o.Z)((0,u.Z)(i.prototype),"postscript",this).call(this,e),(0,g.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,i,r,a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,i=t.signal,this.handles.add((0,h.kB)((function(){return t.abort()}))),e.next=4,(0,y.N1)((function(){var e;return null===(e=a.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),i);case 4:if((0,p.k_)(i),!(r=(0,g.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw r;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,o.Z)((0,u.Z)(i.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,o.Z)((0,u.Z)(i.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),i}(e);return(0,d._)([(0,f.Cb)()],t.prototype,"view",void 0),(0,d._)([(0,f.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,d._)([(0,v.j)("esri.views.3d.layers.LayerView3D")],t)}},62923:function(e,t,i){i.r(t),i.d(t,{default:function(){return R}});var n=i(74165),r=i(15861),a=i(37762),s=i(15671),o=i(43144),u=i(11752),l=i(61120),c=i(60136),d=i(29388),h=i(27366),p=i(80987),y=i(77178),f=i(92026),v=i(94172),g=i(49861),b=(i(63780),i(93169),i(25243),i(69912)),m=i(40653),C=i(54889),_=i(16406),k=i(44745),I=i(21604),w=i(99821),S=i(70491),Z=i(42069),V=i(79510),E=i(61712),O=i(5198),G=i(68401),N=i(67581);var P=function(e){(0,c.Z)(i,e);var t=(0,d.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments)).type="route-3d",e.loadedGraphics=new O.g,e._byObjectID=new Map,e.slicePlaneEnabled=!1,e.fullExtentInLocalViewSpatialReference=null,e}return(0,o.Z)(i,[{key:"initialize",value:function(){var e=this;this._set("processor",new V.D({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.setup()),this.updatingHandles.addOnCollectionChange((function(){return e._routeItems}),(function(t){return e._routeItemsChanged(t)}),v.nn),this.addResolvingPromise((0,E.E)(this).then((function(t){return e.fullExtentInLocalViewSpatialReference=t}))),this.handles.add((0,v.gx)((function(){var t,i;return null===(t=e.view)||void 0===t||null===(i=t.basemapTerrain)||void 0===i?void 0:i.ready}),(function(){return function(){return e.notifyChange("updating")}}),{once:!0}))}},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",(0,f.SC)(this.processor))}},{key:"_routeItems",get:function(){var e=this;return new y.Z({getCollections:function(){return[e.layer.pointBarriers,e.layer.polygonBarriers,e.layer.polylineBarriers,e.layer.stops,e.layer.directionLines,e.layer.directionPoints,(0,f.pC)(e.layer.routeInfo)?new p.Z([e.layer.routeInfo]):null]}})}},{key:"_routeItemsChanged",value:function(e){var t=this;if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map((function(e){var i=t._byObjectID.get(e);return t._byObjectID.delete(e),i})));var i,n=(0,a.Z)(e.removed);try{for(n.s();!(i=n.n()).done;){var r=i.value;this.handles.remove(r)}}catch(l){n.e(l)}finally{n.f()}}if(e.added.length){this.loadedGraphics.addMany(e.added.map((function(e){var i=e.toGraphic();return t._byObjectID.set(e,i),i})));var s,o=(0,a.Z)(e.added);try{var u=function(){var e=s.value;t.handles.add([(0,v.YP)((function(){return e.geometry}),(function(i,n){t._updateGraphic(e,"geometry",i,n)})),(0,v.YP)((function(){return e.symbol}),(function(i,n){t._updateGraphic(e,"symbol",i,n)}))],e)};for(o.s();!(s=o.n()).done;)u()}catch(l){o.e(l)}finally{o.f()}}}},{key:"legendEnabled",get:function(){var e;return this.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.frustumVisibilitySuspended)}},{key:"getSuspendInfo",value:function(){var e,t,n,r,a=(0,u.Z)((0,l.Z)(i.prototype),"getSuspendInfo",this).call(this);return a.outsideScaleRange=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.scaleVisibilitySuspended)&&void 0!==e&&e,a.outsideOfView=null!==(n=null===(r=this.processor)||void 0===r?void 0:r.frustumVisibilitySuspended)&&void 0!==n&&n,a}},{key:"fetchPopupFeatures",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.pC)(i)?i.clientGraphics:null);case 1:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"getHit",value:function(e){return this.processor.getHit(e)}},{key:"whenGraphicBounds",value:function(e,t){return this.processor.whenGraphicBounds(e,t)}},{key:"computeAttachmentOrigin",value:function(e,t){var i;return null===(i=this.processor)||void 0===i?void 0:i.computeAttachmentOrigin(e,t)}},{key:"getSymbolLayerSize",value:function(e,t){return this.processor.getSymbolLayerSize(e,t)}},{key:"queryGraphics",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new p.Z(this.loadedGraphics.toArray()));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"maskOccludee",value:function(e){return this.processor.maskOccludee(e)}},{key:"highlight",value:function(e){if(function(e){return e instanceof m.Z||e instanceof C.Z||e instanceof _.Z||e instanceof k.Z||e instanceof I.Z||e instanceof w.Z||e instanceof S.Z}(e)){var t=this._byObjectID.get(e);return this.processor.highlight(t)}return this.processor.highlight(e)}},{key:"updatePolicy",get:function(){var e;return(null===(e=this.processor)||void 0===e?void 0:e.graphicsCore.effectiveUpdatePolicy)||G.jq.SYNC}},{key:"canResume",value:function(){var e;return(0,u.Z)((0,l.Z)(i.prototype),"canResume",this).call(this)&&!(null!==(e=this.processor)&&void 0!==e&&e.scaleVisibilitySuspended)}},{key:"isUpdating",value:function(){var e,t,i;return!((null===(e=this.processor)||void 0===e||!e.updating)&&null!==(t=this.view)&&void 0!==t&&null!==(i=t.basemapTerrain)&&void 0!==i&&i.ready)}},{key:"performanceInfo",get:function(){var e,t,i;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:null!==(e=null===(t=this.processor)||void 0===t?void 0:t.elevationAlignment.updating)&&void 0!==e&&e,visibilityFrustum:!(null!==(i=this.processor)&&void 0!==i&&i.frustumVisibilitySuspended)}}},{key:"_updateGraphic",value:function(e,t,i,n){var r,a=this._byObjectID.get(e);a[t]=i,x.graphic=a,x.property=t,x.oldValue=n,x.newValue=i,null===(r=this.processor)||void 0===r||r.graphicsCore.graphicUpdateHandler(x)}}]),i}((0,Z.A)(N.Z));(0,h._)([(0,g.Cb)()],P.prototype,"_routeItems",null),(0,h._)([(0,g.Cb)()],P.prototype,"loadedGraphics",void 0),(0,h._)([(0,g.Cb)({readOnly:!0})],P.prototype,"legendEnabled",null),(0,h._)([(0,g.Cb)()],P.prototype,"layer",void 0),(0,h._)([(0,g.Cb)({readOnly:!0})],P.prototype,"processor",void 0),(0,h._)([(0,g.Cb)({type:Boolean})],P.prototype,"slicePlaneEnabled",void 0),P=(0,h._)([(0,b.j)("esri.views.3d.layers.RouteLayerView3D")],P);var x={graphic:null,property:null,oldValue:null,newValue:null},R=P},79510:function(e,t,i){i.d(t,{D:function(){return R}});var n=i(74165),r=i(15861),a=i(1413),s=i(15671),o=i(43144),u=i(60136),l=i(29388),c=i(27366),d=i(52639),h=i(80987),p=i(41691),y=i(42537),f=i(92026),v=i(66978),g=i(94172),b=i(49861),m=(i(63780),i(93169),i(25243),i(69912)),C=i(48732),_=i(30651),k=i(37818),I=i(34610),w=i(21149),S=i(26279),Z=i(61310),V=i(86792),E=i(79874),O=i(84328),G=i(46568),N=i(59453),P=i(96387),x=i(68401),R=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,s.Z)(this,i),(n=t.call(this,e)).type="graphics-3d",n.graphicsCore=null,n.elevationAlignment=new E.Z,n.drapeSourceType=S.L.Features,n._suspendResumeExtent=null,n}return(0,o.Z)(i,[{key:"normalizeCtorArgs",value:function(e){var t=(0,a.Z)((0,a.Z)({},e),{},{scaleVisibility:null,frustumVisibility:null});return delete t.scaleVisibilityEnabled,delete t.frustumVisibilityEnabled,e.scaleVisibilityEnabled&&(t.scaleVisibility=new N.Z),e.frustumVisibilityEnabled&&(t.frustumVisibility=new O.Z),t}},{key:"initialize",value:function(){var e=this,t=new V.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:x.jq.SYNC,graphicSymbolSupported:!0});this._set("graphicsCore",t);var i=this.layer,n=this.scaleVisibility;if((0,f.pC)(n)&&"effectiveScaleRange"in i){var r=i;this.updatingHandles.add((function(){return r.effectiveScaleRange}),(function(){return n.layerMinMaxScaleChangeHandler()}))}if("fullOpacity"in this.owner){var a=this.owner;this.updatingHandles.add((function(){return a.fullOpacity}),(function(){return e.graphicsCore.opacityChange()}))}if("elevationInfo"in i){var s=i;this.updatingHandles.add((function(){return s.elevationInfo}),(function(t,i){(0,C.Hg)(t,i)&&e.updatingHandles.addPromise(e.graphicsCore.elevationInfoChange())}))}}},{key:"setup",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,i,r=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e,t,i){return r.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i)},this.elevationAlignment.setup(this,t,this.graphicsCore,this.view.elevationProvider),(0,f.pC)(this.scaleVisibility)&&"effectiveScaleRange"in this.layer&&(i=this.owner.view.basemapTerrain,this.scaleVisibility.setup(this,this.layer,t,this.graphicsCore,i)),(0,f.pC)(this.frustumVisibility)&&this.frustumVisibility.setup(this),this._set("objectStates",new G.d(this.graphicsCore)),e.prev=3,e.next=6,this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates});case 6:e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(3),!(0,v.D_)(e.t0)){e.next=12;break}return e.abrupt("return");case 12:throw e.t0;case 13:this.destroyed||(this.handles.add((0,g.YP)((function(){return r.view.clippingArea}),(function(){return r._updateClippingExtent()}),g.Z_)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("elevationAlignment",(0,f.SC)(this.elevationAlignment)),this._set("scaleVisibility",(0,f.SC)(this.scaleVisibility)),this._set("frustumVisibility",(0,f.SC)(this.frustumVisibility)),this._set("objectStates",(0,f.SC)(this.objectStates)),this._set("graphicsCore",(0,f.SC)(this.graphicsCore))}},{key:"layer",get:function(){return this.owner.layer}},{key:"view",get:function(){return this.owner.view}},{key:"scaleVisibilitySuspended",get:function(){return!(!(0,f.pC)(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"frustumVisibilitySuspended",get:function(){return!(!(0,f.pC)(this.frustumVisibility)||!this.frustumVisibility.suspended)}},{key:"suspended",get:function(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}},{key:"updating",get:function(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||(0,f.pC)(this.scaleVisibility)&&this.scaleVisibility.updating||(0,f.pC)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}},{key:"graphics3DGraphics",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},{key:"fullOpacity",get:function(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"notifyGraphicGeometryChanged",value:function(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}},{key:"notifyGraphicVisibilityChanged",value:function(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}},{key:"getRenderingInfo",value:function(e,t,i){var n=(0,I.Kb)(e,{renderer:t,arcade:i});if((0,f.pC)(n)&&n.color){var r=n.color;r[0]=r[0]/255,r[1]=r[1]/255,r[2]=r[2]/255}return n}},{key:"getRenderingInfoAsync",value:function(e,t,i,n){return(0,I.xn)(e,(0,a.Z)({renderer:t,arcade:i},n))}},{key:"getHit",value:function(e){if(this.owner.loadedGraphics){var t=this.owner.loadedGraphics.find((function(t){return t.uid===e}));if(t){var i=this.layer instanceof _.Z?this.layer:null,n=(0,k.mW)(t,i);return{type:"graphic",graphic:n,layer:n.layer}}}return null}},{key:"whenGraphicBounds",value:function(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}},{key:"computeAttachmentOrigin",value:function(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}},{key:"getSymbolLayerSize",value:function(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}},{key:"maskOccludee",value:function(e){var t=this.objectStates.acquireSet(x.V_.MaskOccludee,null),i=t.set,n=t.handle;return this.objectStates.setUid(i,e.uid),n}},{key:"highlight",value:function(e){if(e instanceof w.Z)return A;if("number"==typeof e)return this.highlight([e]);if(e instanceof d.Z)return this.highlight([e]);if(e instanceof h.Z&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof d.Z){var t=e.map((function(e){return e.uid})),i=this.objectStates.acquireSet(x.V_.Highlight,null),n=i.set,r=i.handle;return this.objectStates.setUids(n,t),r}if("number"==typeof e[0]){var a=e,s=this.objectStates.acquireSet(x.V_.Highlight,null),o=s.set,u=s.handle;return this.objectStates.setObjectIds(o,a),u}}return A}},{key:"_setupSuspendResumeExtent",value:function(){var e=this,t=this.scaleVisibility,i=this.frustumVisibility;if(!(0,f.Wi)(t)||!(0,f.Wi)(i)){var n=function(n){var r=n.computedExtent,a=n.extentPadding;e._suspendResumeExtent=(0,P.Go)(r,e._suspendResumeExtent,Z.ZF,a),(0,f.pC)(t)&&t.setExtent(e._suspendResumeExtent),(0,f.pC)(i)&&i.setExtent(e._suspendResumeExtent)};this.handles.add((0,g.YP)((function(){var t,i;return{computedExtent:null===(t=e.graphicsCore)||void 0===t?void 0:t.computedExtent,extentPadding:null===(i=e.graphicsCore)||void 0===i?void 0:i.extentPadding}}),(function(e){return n(e)}),g.tX))}}},{key:"_updateClippingExtent",value:function(){var e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}}]),i}(p.r);(0,c._)([(0,b.Cb)()],R.prototype,"type",void 0),(0,c._)([(0,b.Cb)({constructOnly:!0})],R.prototype,"owner",void 0),(0,c._)([(0,b.Cb)()],R.prototype,"layer",null),(0,c._)([(0,b.Cb)()],R.prototype,"view",null),(0,c._)([(0,b.Cb)({constructOnly:!0})],R.prototype,"graphicsCore",void 0),(0,c._)([(0,b.Cb)({constructOnly:!0})],R.prototype,"scaleVisibility",void 0),(0,c._)([(0,b.Cb)({constructOnly:!0})],R.prototype,"frustumVisibility",void 0),(0,c._)([(0,b.Cb)({readOnly:!0})],R.prototype,"elevationAlignment",void 0),(0,c._)([(0,b.Cb)({readOnly:!0})],R.prototype,"objectStates",void 0),(0,c._)([(0,b.Cb)({readOnly:!0})],R.prototype,"scaleVisibilitySuspended",null),(0,c._)([(0,b.Cb)({readOnly:!0})],R.prototype,"frustumVisibilitySuspended",null),(0,c._)([(0,b.Cb)()],R.prototype,"suspended",null),(0,c._)([(0,b.Cb)({readOnly:!0})],R.prototype,"updating",null),(0,c._)([(0,b.Cb)()],R.prototype,"loadedGraphics",null),(0,c._)([(0,b.Cb)()],R.prototype,"fullOpacity",null),(0,c._)([(0,b.Cb)()],R.prototype,"slicePlaneEnabled",null),(0,c._)([(0,b.Cb)()],R.prototype,"drapeSourceType",void 0),(0,c._)([(0,b.Cb)()],R.prototype,"updatePolicy",null),R=(0,c._)([(0,m.j)("esri.views.3d.layers.graphics.GraphicsProcessor")],R);var A=(0,y.kB)()},61712:function(e,t,i){i.d(t,{E:function(){return s}});var n=i(92026),r=i(81753),a=i(67387);function s(e){var t=e.view.spatialReference,i=e.layer.fullExtent,s=(0,n.pC)(i)&&i.spatialReference;if((0,n.Wi)(i)||!s)return Promise.resolve(null);if(s.equals(t))return Promise.resolve(i.clone());var o=(0,r.iV)(i,t);return(0,n.pC)(o)?Promise.resolve(o):e.view.state.isLocal?(0,a.projectGeometry)(i,t,e.layer.portalItem).then((function(t){return!e.destroyed&&t?t:void 0})).catch((function(){return null})):Promise.resolve(null)}},5198:function(e,t,i){i.d(t,{g:function(){return h}});var n=i(93433),r=i(37762),a=i(15671),s=i(43144),o=i(60136),u=i(29388),l=i(91505),c=i(62314),d=i(92377),h=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments))._set=new Set,e}return(0,s.Z)(i,[{key:"clear",value:function(){if(this._set.size>0){var e=this.toArray();this._set.clear(),this.emit("after-changes",{type:c.y.REMOVE}),this.emit("change",{added:[],removed:e})}}},{key:"length",get:function(){return this._set.size}},{key:"addMany",value:function(e){if(0!==e.length){var t,i=(0,r.Z)(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;this._set.add(n)}}catch(a){i.e(a)}finally{i.f()}this.emit("after-changes",{type:c.y.ADD}),this.emit("change",{added:e,removed:[]})}}},{key:"remove",value:function(e){this._set.delete(e)&&(this.emit("after-changes",{type:c.y.REMOVE}),this.emit("change",{added:[],removed:[e]}))}},{key:"removeMany",value:function(e){var t,i=[],n=(0,r.Z)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this._set.delete(a)&&i.push(a)}}catch(s){n.e(s)}finally{n.f()}i.length>0&&(this.emit("after-changes",{type:c.y.REMOVE}),this.emit("change",{added:[],removed:i}))}},{key:"toArray",value:function(){return(0,n.Z)(this._set)}},{key:"find",value:function(e){var t;return(0,d.f)(this._set,(function(i){return!!e(i)&&(t=i,!0)})),t}},{key:"forEach",value:function(e){this._set.forEach((function(t){return e(t)}))}}]),i}(l.Z)},67581:function(e,t,i){i.d(t,{Z:function(){return b}});var n=i(15671),r=i(43144),a=i(60136),s=i(29388),o=i(27366),u=i(85015),l=i(91505),c=i(41691),d=i(79056),h=i(32718),p=i(92026),y=i(67426),f=i(49861),v=(i(63780),i(93169),i(25243),i(69912)),g=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";h.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,p.Pt)(this.get("layer.opacity"),1)*(0,p.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,c.p)((0,d.IG)((0,y.v)(l.Z.EventedMixin(u.Z)))));(0,o._)([(0,f.Cb)()],g.prototype,"fullOpacity",null),(0,o._)([(0,f.Cb)()],g.prototype,"layer",void 0),(0,o._)([(0,f.Cb)()],g.prototype,"parent",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],g.prototype,"suspended",null),(0,o._)([(0,f.Cb)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,o._)([(0,f.Cb)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,o._)([(0,f.Cb)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,o._)([(0,f.Cb)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,o._)([(0,f.Cb)()],g.prototype,"visible",null),(0,o._)([(0,f.Cb)()],g.prototype,"view",void 0);var b=g=(0,o._)([(0,v.j)("esri.views.layers.LayerView")],g)}}]);
//# sourceMappingURL=4453.e05022b9.chunk.js.map