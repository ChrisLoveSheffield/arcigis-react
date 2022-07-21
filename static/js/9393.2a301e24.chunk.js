"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[9393],{45956:function(e,t,i){i.d(t,{eY:function(){return C}});var r=i(29439),a=i(15671),n=i(43144),s=i(97326),l=i(11752),o=i(61120),u=i(60136),h=i(29388),c=i(92026),d=i(22753),y=i(23588),f=i(15245),_=i(87422),p=i(10978),v=i(8548),g=i(371);function m(e,t,i){var r={target:v.No.TEXTURE_2D,pixelFormat:v.VI.RGBA,internalFormat:v.VI.RGBA,dataType:v.Br.UNSIGNED_BYTE,wrapMode:v.e8.CLAMP_TO_EDGE};return t&&i&&(r.width=t,r.height=i),new g.x(e,r)}var C=function(e){(0,u.Z)(i,e);var t=(0,h.Z)(i);function i(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0,l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,a.Z)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=l,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=n,e.source=r,e.requestRender=e.requestRender.bind((0,s.Z)(e)),e}return(0,n.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,l.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:(0,y.c)()}}},{key:"setTransform",value:function(e){var t=(0,d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),a=(0,r.Z)(i,2),n=a[0],s=a[1],l=this.resolution/this.pixelRatio/e.resolution,o=l*this.width,u=l*this.height,h=Math.PI*this.rotation/180;(0,d.c)(t,t,(0,f.f)(n,s)),(0,d.c)(t,t,(0,f.f)(o/2,u/2)),(0,d.r)(t,t,-h),(0,d.c)(t,t,(0,f.f)(-o/2,-u/2)),(0,d.j)(t,t,(0,f.f)(o,u)),(0,d.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null!==(t=this._texture)&&void 0!==t&&t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=m(e,this.sourceWidth,this.sourceHeight):this._texture=m(e));var i,r=this.source;if(r){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=r)&&"render"in i)if(r instanceof p.Z){var a=r.getRenderedRasterPixels();this._texture.setData((0,c.pC)(a)?a.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(r));else(function(e){return e&&!("render"in e)})(r)&&this._texture.setData(r);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(_.s)},90110:function(e,t,i){i.d(t,{c:function(){return d}});var r=i(93433),a=i(15671),n=i(43144),s=i(11752),l=i(61120),o=i(60136),u=i(29388),h=i(53628),c=i(80613),d=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,a.Z)(this,i),t.apply(this,arguments)}return(0,n.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,a=e.registerRenderPass({name:"bitmap",brushes:[h.U.bitmap],target:function(){return t.children},drawPhase:c.jx.MAP});return[].concat((0,r.Z)((0,s.Z)((0,l.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[a])}}]),i}(i(64510).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return s}});var r=i(15671),a=i(43144),n=i(92026),s=function(){function e(t,i,a){(0,r.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=a}return(0,a.Z)(e,[{key:"width",get:function(){return(0,n.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,n.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,n.Wi)(t)){var i=this.filter({pixelBlock:t});if(!(0,n.Wi)(i.pixelBlock)){var r=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,n.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},89393:function(e,t,i){i.r(t),i.d(t,{default:function(){return de}});var r=i(93433),a=i(29439),n=i(37762),s=i(74165),l=i(15861),o=i(15671),u=i(43144),h=i(11752),c=i(61120),d=i(60136),y=i(29388),f=i(27366),_=i(52639),p=i(84652),v=i(32718),g=i(92026),m=i(66978),C=i(94172),T=i(49861),k=(i(25243),i(69912)),b=i(48732),w=i(65156),R=i(92975),x=i(10106),Z=i(98067),S=i(16054),D=i(48790),I=i(73828),E=function(e,t){return e+1/(1<<2*t)},L=function(){function e(t,i){(0,o.Z)(this,e),this._tiles=new Map,this._tileCache=new S.Z(40,(function(e){return e.dispose()})),this._viewSize=[0,0],this._visibleTiles=new Map,this.acquireTile=t.acquireTile,this.releaseTile=t.releaseTile,this.tileInfoView=t.tileInfoView,this._container=i}return(0,u.Z)(e,[{key:"destroy",value:function(){var e,t=(0,n.Z)(this._tiles);try{for(t.s();!(e=t.n()).done;){var i=(0,a.Z)(e.value,2);i[0];i[1].dispose()}}catch(r){t.e(r)}finally{t.f()}this._tiles=null,this._tileCache.clear(),this._tileCache=null}},{key:"update",value:function(e){this._updateCacheSize(e);var t,i=this.tileInfoView,r=i.getTileCoverage(e.state,0,"smallest"),s=r.spans,l=r.lodInfo,o=l.level,u=this._tiles,h=new Set,c=new Set,d=(0,n.Z)(s);try{for(d.s();!(t=d.n()).done;)for(var y=t.value,f=y.row,_=y.colFrom,p=y.colTo,v=_;v<=p;v++){var g=I.Z.getId(o,f,l.normalizeCol(v),l.getWorldForColumn(v)),m=this._getOrAcquireTile(g);h.add(g),m.processed()?this._addToContainer(m):c.add(new I.Z(g))}}catch(z){d.e(z)}finally{d.f()}var C,T=(0,n.Z)(u);try{for(T.s();!(C=T.n()).done;){var k=(0,a.Z)(C.value,2),b=k[0];k[1].isCoverage=h.has(b)}}catch(z){T.e(z)}finally{T.f()}var w,R=(0,n.Z)(c);try{for(R.s();!(w=R.n()).done;){var x=w.value;this._findPlaceholdersForMissingTiles(x,h)}}catch(z){R.e(z)}finally{R.f()}var Z,S=!1,E=(0,n.Z)(u);try{for(E.s();!(Z=E.n()).done;){var L=(0,a.Z)(Z.value,2),P=L[0],H=L[1];H.neededForCoverage=h.has(P),H.neededForCoverage||H.isHoldingForFade&&i.intersects(r,H.key)&&h.add(P),H.isFading&&(S=!0)}}catch(z){E.e(z)}finally{E.f()}var B,M=(0,n.Z)(this._tiles);try{for(M.s();!(B=M.n()).done;){var F=(0,a.Z)(B.value,2),A=F[0];F[1];h.has(A)||this._releaseTile(A)}}catch(z){M.e(z)}finally{M.f()}return D.Z.pool.release(r),!S}},{key:"clear",value:function(){this._tiles.clear(),this._tileCache.clear(),this._visibleTiles.clear()}},{key:"clearCache",value:function(){this._tileCache.clear()}},{key:"_findPlaceholdersForMissingTiles",value:function(e,t){var i,r=[],s=(0,n.Z)(this._tiles);try{for(s.s();!(i=s.n()).done;){var l=(0,a.Z)(i.value,2),o=(l[0],l[1]);this._addPlaceholderChild(r,o,e,t)}}catch(h){s.e(h)}finally{s.f()}var u=r.reduce(E,0);Math.abs(1-u)<1e-6||this._addPlaceholderParent(e.id,t)}},{key:"_addPlaceholderChild",value:function(e,t,i,r){t.key.level<=i.level||!t.hasData()||function(e,t){var i=t.level-e.level;return e.row===t.row>>i&&e.col===t.col>>i&&e.world===t.world}(i,t.key)&&(this._addToContainer(t),r.add(t.id),e.push(t.key.level-i.level))}},{key:"_addPlaceholderParent",value:function(e,t){for(var i=this._tiles,r=e;;){if(!(r=P(r))||t.has(r))return;var a=i.get(r);if(a&&a.hasData())return this._addToContainer(a),void t.add(a.id)}}},{key:"_getOrAcquireTile",value:function(e){var t=this._tiles.get(e);return t||((t=this._tileCache.pop(e))||(t=this.acquireTile(new I.Z(e))),this._tiles.set(e,t),t)}},{key:"_releaseTile",value:function(e){var t=this._tiles.get(e);this.releaseTile(t),this._removeFromContainer(t),this._tiles.delete(e),t.hasData()?this._tileCache.put(e,t,1):t.dispose()}},{key:"_addToContainer",value:function(e){var t,i=[],r=this._container;if(!r.contains(e)){var s,l=this._visibleTiles,o=(0,n.Z)(l);try{for(o.s();!(s=o.n()).done;){var u=(0,a.Z)(s.value,2),h=(u[0],u[1]);this._canConnectDirectly(e,h)&&i.push(h),(0,g.Wi)(t)&&this._canConnectDirectly(h,e)&&(t=h)}}catch(v){o.e(v)}finally{o.f()}if((0,g.pC)(t)){var c,d=(0,n.Z)(i);try{for(d.s();!(c=d.n()).done;){var y=c.value;t.childrenTiles.delete(y),e.childrenTiles.add(y),y.parentTile=e}}catch(v){d.e(v)}finally{d.f()}t.childrenTiles.add(e),e.parentTile=t}else{var f,_=(0,n.Z)(i);try{for(_.s();!(f=_.n()).done;){var p=f.value;e.childrenTiles.add(p),p.parentTile=e}}catch(v){_.e(v)}finally{_.f()}}l.set(e.id,e),r.addChild(e)}}},{key:"_removeFromContainer",value:function(e){if(this._visibleTiles.delete(e.id),this._container.removeChild(e),(0,g.pC)(e.parentTile)){e.parentTile.childrenTiles.delete(e);var t,i=(0,n.Z)(e.childrenTiles);try{for(i.s();!(t=i.n()).done;){var r=t.value;(0,g.pC)(e.parentTile)&&e.parentTile.childrenTiles.add(r)}}catch(l){i.e(l)}finally{i.f()}}var a,s=(0,n.Z)(e.childrenTiles);try{for(s.s();!(a=s.n()).done;){a.value.parentTile=e.parentTile}}catch(l){s.e(l)}finally{s.f()}e.parentTile=null,e.childrenTiles.clear()}},{key:"_canConnectDirectly",value:function(e,t){for(var i=e.key,r=t.key,a=r.level,n=r.row,s=r.col,l=r.world,o=this._visibleTiles;a>0;){if(a--,n>>=1,s>>=1,i.level===a&&i.row===n&&i.col===s&&i.world===l)return!0;if(o.has("".concat(a,"/").concat(n,"/").concat(s,"/").concat(l)))return!1}return!1}},{key:"_updateCacheSize",value:function(e){var t=e.state.size;if(t[0]!==this._viewSize[0]||t[1]!==this._viewSize[1]){var i=Math.ceil(t[0]/512)+1,r=Math.ceil(t[1]/512)+1;this._viewSize[0]=t[0],this._viewSize[1]=t[1],this._tileCache.maxSize=5*i*r}}}]),e}();function P(e){var t=e.split("/"),i=(0,a.Z)(t,4),r=i[0],n=i[1],s=i[2],l=i[3],o=parseInt(r,10);return 0===o?null:"".concat(o-1,"/").concat(parseInt(n,10)>>1,"/").concat(parseInt(s,10)>>1,"/").concat(parseInt(l,10))}var H=i(72291),B=i(1413),M=i(91505),F=i(46618),A=i(38684),z=i(42121),U=i(12463),V=i(36210),q=i(50127),N=i(21391),O=1e-6,Q=function(e){(0,d.Z)(i,e);var t=(0,y.Z)(i);function i(e,r){var a;return(0,o.Z)(this,i),(a=t.call(this)).styleRepository=e,a._tileToHandle=new Map,a._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},a._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},a._completed=!1,a._symbolRepository=new V.L(4096,r,(function(){return new A.J})),a._symbolDeclutterer=new U.g(r,a._symbolRepository,(function(e,t,i){return new z.f(e,t,i,a.styleRepository,a._zoom,a._viewState.rotation)}),(function(e,t){e.allSymbolsFadingOut=!0,e.lastOpacityUpdate=t,(0,q.C$)(e,t,!0),e.decluttered=!0,e.requestRender()}),(function(e,t){return a.styleRepository.getStyleLayerByUID(e.styleLayerUID).z-a.styleRepository.getStyleLayerByUID(t.styleLayerUID).z}),(function(e){var t=a.styleRepository.getStyleLayerByUID(e);if(a._zoom+O<t.minzoom||a._zoom-O>=t.maxzoom)return!1;var i=t.getLayoutProperty("visibility");return!i||i.getValue()!==N.EE.NONE})),a}return(0,u.Z)(i,[{key:"addTile",value:function(e){var t=this;e.decluttered=!1,this._tileToHandle.set(e,e.on("symbols-changed",(function(){t._symbolRepository.add(e),t.restartDeclutter()}))),this._symbolRepository.add(e),this.restartDeclutter()}},{key:"removeTile",value:function(e){var t=this._tileToHandle.get(e);t&&(this._symbolRepository.removeTile(e),this.restartDeclutter(),t.remove(),this._tileToHandle.delete(e))}},{key:"update",value:function(e,t){return this._zoom=e,this._viewState={scale:t.scale,rotation:t.rotation,center:[t.center[0],t.center[1]],size:[t.size[0],t.size[1]]},this._continueDeclutter(),this._completed}},{key:"restartDeclutter",value:function(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable()}},{key:"clear",value:function(){this._completed=!1,this._symbolRepository=null,this._symbolDeclutterer.restart(),this._tileToHandle.forEach((function(e){return e.remove()})),this._tileToHandle.clear()}},{key:"stale",get:function(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}},{key:"deleteStyleLayers",value:function(e){this._symbolRepository.deleteStyleLayers(e)}},{key:"_continueDeclutter",value:function(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(F.Ts),this._completed&&this._scheduleNotifyStable())}},{key:"_scheduleNotifyStable",value:function(){var e=this;(0,g.pC)(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout((function(){e._stableNotificationHandle=null,e.emit("fade-complete")}),1.5*F.nN)}},{key:"_notifyUnstable",value:function(){(0,g.pC)(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this.emit("fade-start")}}]),i}(M.Z),G=i(80613),W=i(23588),j=function(e){(0,d.Z)(i,e);var t=(0,y.Z)(i);function i(){return(0,o.Z)(this,i),t.apply(this,arguments)}return(0,u.Z)(i,[{key:"_createTransforms",value:function(){return{dvs:(0,W.c)(),tileMat3:(0,W.c)()}}}]),i}(i(72900).I),Y=i(55067),K=i(8548),J=1e-6;function X(e,t){if(e){var i=e.getLayoutProperty("visibility");if(!i||i.getValue()!==N.EE.NONE&&(void 0===e.minzoom||e.minzoom<t+J)&&(void 0===e.maxzoom||e.maxzoom>=t-J))return!0}return!1}var $=function(e){(0,d.Z)(i,e);var t=(0,y.Z)(i);function i(e){var r;return(0,o.Z)(this,i),(r=t.call(this,e))._backgroundTiles=[],r._pointToCallbacks=new Map,r}return(0,u.Z)(i,[{key:"destroy",value:function(){this.removeAllChildren(),this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null),(0,g.pC)(this._symbolFader)&&(this._symbolFader.clear(),this._symbolFader=null),this._styleRepository=null,this._backgroundTiles=[],this._pointToCallbacks.clear()}},{key:"setStyleResources",value:function(e,t,i){var r=this;if(this._spriteMosaic=e,this._glyphMosaic=t,this._styleRepository=i,(0,g.Wi)(this._symbolFader)){var a=new Q(this._styleRepository,this.children);a.on("fade-start",(function(){r.emit("fade-start"),r.requestRender()})),a.on("fade-complete",(function(){r.emit("fade-complete"),r.requestRender()})),this._symbolFader=a}(0,g.Wg)(this._symbolFader).styleRepository=i}},{key:"setSpriteMosaic",value:function(e){this._spriteMosaic.dispose(),this._spriteMosaic=e}},{key:"deleteStyleLayers",value:function(e){(0,g.pC)(this._symbolFader)&&this._symbolFader.deleteStyleLayers(e)}},{key:"hitTest",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){var i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.hh)(),e.abrupt("return",(this._pointToCallbacks.set(t,i),this.requestRender(),i.promise));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"enterTileInvalidation",value:function(){var e,t=(0,n.Z)(this.children);try{for(t.s();!(e=t.n()).done;){e.value.invalidating=!0}}catch(i){t.e(i)}finally{t.f()}}},{key:"createRenderParams",value:function(e){return(0,B.Z)((0,B.Z)({},(0,h.Z)((0,c.Z)(i.prototype),"createRenderParams",this).call(this,e)),{},{renderPass:null,styleLayer:null,styleLayerUID:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,hasClipping:!!this._clippingInfos})}},{key:"doRender",value:function(e){!this.visible||e.drawPhase!==G.jx.MAP&&e.drawPhase!==G.jx.DEBUG||void 0===this._spriteMosaic||(0,h.Z)((0,c.Z)(i.prototype),"doRender",this).call(this,e)}},{key:"addChild",value:function(e){return(0,h.Z)((0,c.Z)(i.prototype),"addChild",this).call(this,e),(0,g.pC)(this._symbolFader)?this._symbolFader.addTile(e):e.decluttered=!0,this.requestRender(),e}},{key:"removeChild",value:function(e){return(0,g.pC)(this._symbolFader)&&this._symbolFader.removeTile(e),this.requestRender(),(0,h.Z)((0,c.Z)(i.prototype),"removeChild",this).call(this,e)}},{key:"renderChildren",value:function(e){var t=e.drawPhase;if(t!==G.jx.DEBUG){if(this._doRender(e),this._pointToCallbacks.size>0){e.drawPhase=G.jx.HITTEST;var r=e.painter.effects.hittestVTL;r.bind(e),this._doRender(e),r.draw(e,this._pointToCallbacks),r.unbind(e),e.drawPhase=t}}else(0,h.Z)((0,c.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"removeAllChildren",value:function(){for(var e=0;e<this.children.length;e++){var t=this.children[e];(0,g.pC)(this._symbolFader)&&this._symbolFader.removeTile(t),t.dispose()}(0,h.Z)((0,c.Z)(i.prototype),"removeAllChildren",this).call(this)}},{key:"getStencilTarget",value:function(){return this.children.filter((function(e){return e.neededForCoverage&&e.hasData()}))}},{key:"restartDeclutter",value:function(){(0,g.pC)(this._symbolFader)&&this._symbolFader.restartDeclutter()}},{key:"_doRender",value:function(e){var t=e.context,r=this._styleRepository;if(r){var a=r.layers,s=!0;e.drawPhase===G.jx.HITTEST&&(s=!1),r.backgroundBucketIds.length>0&&(e.renderPass="background",this._renderBackgroundLayers(e,r.backgroundBucketIds)),(0,h.Z)((0,c.Z)(i.prototype),"renderChildren",this).call(this,e),e.drawPhase===G.jx.MAP&&this._fade(e.displayLevel,e.state);var l=this.children.filter((function(e){return e.visible&&e.hasData()}));if(!l||0===l.length)return t.bindVAO(),t.setStencilTestEnabled(!0),void t.setBlendingEnabled(!0);var o,u=(0,n.Z)(l);try{for(u.s();!(o=u.n()).done;){o.value.triangleCount=0}}catch(_){u.e(_)}finally{u.f()}t.setStencilWriteMask(0),t.setColorMask(!0,!0,!0,!0),t.setStencilOp(K.xS.KEEP,K.xS.KEEP,K.xS.REPLACE),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!0),t.setDepthFunction(K.wb.LEQUAL),t.setClearDepth(1),t.clear(t.gl.DEPTH_BUFFER_BIT),e.renderPass="opaque";for(var d=a.length-1;d>=0;d--)this._renderStyleLayer(a[d],e,l);t.setDepthWriteEnabled(!1),t.setBlendingEnabled(s),t.setBlendFunctionSeparate(K.zi.ONE,K.zi.ONE_MINUS_SRC_ALPHA,K.zi.ONE,K.zi.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(var y=0;y<a.length;y++)this._renderStyleLayer(a[y],e,l);t.setDepthTestEnabled(!1),e.renderPass="symbol";for(var f=0;f<a.length;f++)this._renderStyleLayer(a[f],e,l);t.bindVAO(),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0)}}},{key:"_fade",value:function(e,t){(0,g.pC)(this._symbolFader)&&(this._symbolFader.update(e,t)||this.requestRender())}},{key:"_renderStyleLayer",value:function(e,t,i){var r=t.painter,a=t.renderPass;if(void 0!==e){var s=e.getLayoutProperty("visibility");if(!s||s.getValue()!==N.EE.NONE){var l;switch(e.type){case N.fR.BACKGROUND:return;case N.fR.FILL:if("opaque"!==a&&"translucent"!==t.renderPass)return;l="vtlFill";break;case N.fR.LINE:if("translucent"!==a)return;l="vtlLine";break;case N.fR.CIRCLE:if("symbol"!==a)return;l="vtlCircle";break;case N.fR.SYMBOL:if("symbol"!==a)return;l="vtlSymbol"}if(i=e.type===N.fR.SYMBOL?i.filter((function(e){return e.decluttered})):i.filter((function(e){return e.neededForCoverage})),"vtlSymbol"!==l){var o=t.displayLevel;if(0===i.length||void 0!==e.minzoom&&e.minzoom>=o+J||void 0!==e.maxzoom&&e.maxzoom<o-J)return}var u=e.uid;t.styleLayerUID=u,t.styleLayer=e;var h,c=(0,n.Z)(i);try{for(c.s();!(h=c.n()).done;){if(h.value.layerData.has(u)){r.renderObjects(t,i,l);break}}}catch(d){c.e(d)}finally{c.f()}}}}},{key:"_renderBackgroundLayers",value:function(e,t){var i,r=e.context,a=e.displayLevel,s=e.painter,l=e.state,o=this._styleRepository,u=!1,h=(0,n.Z)(t);try{for(h.s();!(i=h.n()).done;){var c=i.value;if(o.getLayerById(c).type===N.fR.BACKGROUND&&X(o.getLayerById(c),a)){u=!0;break}}}catch(U){h.e(U)}finally{h.f()}if(u){var d=this._tileInfoView.getTileCoverage(e.state,0,"smallest"),y=d.spans,f=d.lodInfo,_=f.level,p=(0,w.Ue)(),v=[];if(this._renderPasses){var m=this._renderPasses[0];(0,g.pC)(this._clippingInfos)&&(m.brushes[0].prepareState(e,this._clippingInfos[0]),m.brushes[0].drawMany(e,this._clippingInfos))}var C,T,k=this._backgroundTiles,b=0,R=(0,n.Z)(y);try{for(R.s();!(T=R.n()).done;)for(var x=T.value,Z=x.row,S=x.colFrom,E=x.colTo,L=S;L<=E;L++){if(b<k.length)(C=k[b]).key.set(_,Z,f.normalizeCol(L),f.getWorldForColumn(L)),this._tileInfoView.getTileBounds(p,C.key,!1),C.x=p[0],C.y=p[3];else{var P=new I.Z(_,Z,f.normalizeCol(L),f.getWorldForColumn(L)),H=this._tileInfoView.getTileBounds((0,w.Ue)(),P);C=new j(P,H[0],H[3],512,512,4096,4096),k.push(C)}C.setTransform(l,this._tileInfoView.getTileResolution(C.key)),v.push(C),b++}}catch(U){R.e(U)}finally{R.f()}r.setStencilWriteMask(0),r.setColorMask(!0,!0,!0,!0),r.setStencilOp(K.xS.KEEP,K.xS.KEEP,K.xS.REPLACE),r.setStencilFunction(K.wb.EQUAL,0,255);var B=!0;e.drawPhase===G.jx.HITTEST&&(B=!1),r.setStencilTestEnabled(B);var M,F=(0,n.Z)(t);try{for(F.s();!(M=F.n()).done;){var A=M.value,z=o.getLayerById(A);z.type===N.fR.BACKGROUND&&X(z,a)&&(e.styleLayerUID=z.uid,e.styleLayer=z,s.renderObjects(e,v,"vtlBackground"))}}catch(U){F.e(U)}finally{F.f()}D.Z.pool.release(d)}}}]),i}(Y.Z),ee=i(18687),te=i(30969),ie=i(95986),re=i(97326),ae=i(45956),ne=function(e){(0,d.Z)(i,e);var t=(0,y.Z)(i);function i(e){var r;return(0,o.Z)(this,i),(r=t.call(this)).requestRender=r.requestRender.bind((0,re.Z)(r)),r._layerView=e,r._canvas=document.createElement("canvas"),r._context=r._canvas.getContext("2d"),r._bitmap=new ae.eY(null,"standard",!1),r.addChild(r._bitmap),r}return(0,u.Z)(i,[{key:"doRender",value:function(e){var t=e.state,r=this._createCustomRenderParams(e),a=this._canvas,n=this._bitmap,s=window.devicePixelRatio;a.width=t.size[0]*s,a.height=t.size[1]*s,n.resolution=t.resolution;var l=t.clone();l.pixelRatio=s,n.pixelRatio=s,r.state=l,n.x=t.viewpoint.targetGeometry.x-Math.abs(t.extent.xmax-t.extent.xmin)/2,n.y=t.viewpoint.targetGeometry.y+Math.abs(t.extent.ymax-t.extent.ymin)/2,this._layerView.render(r),n.source=a,n.rotation=t.rotation,(0,h.Z)((0,c.Z)(i.prototype),"doRender",this).call(this,(0,B.Z)((0,B.Z)({},e),{},{state:l}))}},{key:"_createCustomRenderParams",value:function(e){return{globalOpacity:e.globalOpacity,state:e.state,stationary:e.stationary,pixelRatio:window.devicePixelRatio,context:this._context}}}]),i}(i(90110).c),se=i(22824),le=function(e){(0,d.Z)(i,e);var t=(0,y.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments))._fullCacheLodInfos=null,e._levelByScale={},e}return(0,u.Z)(i,[{key:"getTileParentId",value:function(e){var t=I.Z.pool.acquire(e),i=0===t.level?null:I.Z.getId(t.level-1,t.row>>1,t.col>>1,t.world);return I.Z.pool.release(t),i}},{key:"getTileCoverage",value:function(e,t,r){var a=(0,h.Z)((0,c.Z)(i.prototype),"getTileCoverage",this).call(this,e,t,r);if(!a)return a;var n=1<<a.lodInfo.level;return a.spans=a.spans.filter((function(e){return e.row>=0&&e.row<n})),a}},{key:"scaleToLevel",value:function(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];var t,i,r=this._fullCacheLodInfos;if(e>r[0].scale)return r[0].level;for(var a=0;a<r.length-1;a++)if(e>(i=r[a+1]).scale)return(t=r[a]).level+(t.scale-e)/(t.scale-i.scale);return r[r.length-1].level}},{key:"_initializeFullCacheLODs",value:function(e){var t;if(0===e[0].level)t=e.map((function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}}));else{var i=this.tileInfo.size[0],r=this.tileInfo.spatialReference;t=se.Z.create({size:i,spatialReference:r}).lods.map((function(e){return{level:e.level,resolution:e.resolution,scale:e.scale}}))}for(var a=0;a<t.length;a++)this._levelByScale[t[a].scale]=t[a].level;this._fullCacheLodInfos=t}}]),i}(i(37995).Z),oe=i(32344),ue=i(67581),he=v.Z.getLogger("esri.views.2d.layers.VectorTileLayerView2D"),ce=function(e){(0,d.Z)(i,e);var t=(0,y.Z)(i);function i(){var e;return(0,o.Z)(this,i),(e=t.apply(this,arguments))._styleChanges=[],e._fetchQueue=null,e._parseQueue=null,e._isTileHandlerReady=!1,e.fading=!1,e}return(0,u.Z)(i,[{key:"hitTest",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,i){var r,a,n,l,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tileHandlerPromise){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,this._tileHandlerPromise;case 4:return e.next=6,this._vectorTileContainer.hitTest(i);case 6:if((r=e.sent)&&0!==r.length){e.next=9;break}return e.abrupt("return",null);case 9:if(a=r[0]-1,n=this._styleRepository,l=n.getStyleLayerByUID(a)){e.next=12;break}return e.abrupt("return",null);case 12:return o=n.getStyleLayerIndex(l.id),e.abrupt("return",[{type:"graphic",mapPoint:t,layer:this.layer,graphic:new _.Z({attributes:{layerId:o,layerName:l.id,layerUID:a},layer:this.layer,sourceLayer:this.layer})}]);case 14:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"update",value:function(e){if(this._tileHandlerPromise&&this._isTileHandlerReady)return e.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=e.state,this._parseQueue.state=e.state,this._tileManager.update(e)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))}},{key:"attach",value:function(){var e=this,t=this.layer.currentStyleInfo.style;this._styleRepository=new te.Z(t),this._tileInfoView=new le(this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new $(this._tileInfoView),this._tileHandler=new Z.m(this.layer,this._styleRepository,window.devicePixelRatio||1),this.container.addChild(this._vectorTileContainer),this._start(),this.handles.add([this._vectorTileContainer.on("fade-start",(function(){e.fading=!0,e.notifyChange("updating"),e.requestUpdate()})),this._vectorTileContainer.on("fade-complete",(function(){var t;null!==(t=e._collisionBoxesDisplay)&&void 0!==t&&t.requestRender(),e.fading=!1,e.notifyChange("updating"),e.requestUpdate()})),(0,C.YP)((function(){return e.layer.symbolCollisionBoxesVisible}),(function(t){t?(e._collisionBoxesDisplay=new ne({render:function(t){return e._renderCollisionBoxes(t.context)}}),e.container.addChild(e._collisionBoxesDisplay)):(e.container.removeChild(e._collisionBoxesDisplay),e._collisionBoxesDisplay=null)}),C.nn),this.layer.on("paint-change",(function(t){if(t.isDataDriven)e._styleChanges.push({type:x.Fr.PAINTER_CHANGED,data:t}),e.notifyChange("updating"),e.requestUpdate();else{var i=e._styleRepository,r=i.getLayerById(t.layer);if(!r)return;var a=r.type===N.fR.SYMBOL;i.setPaintProperties(t.layer,t.paint),a&&e._vectorTileContainer.restartDeclutter(),e._vectorTileContainer.requestRender()}})),this.layer.on("layout-change",(function(t){var i=e._styleRepository,r=i.getLayerById(t.layer);if(r){var a=(0,b.Hg)(r.layout,t.layout);if(!(0,g.Wi)(a)){if((0,b.uD)(a,"visibility")&&1===function(e){if((0,g.Wi)(e))return 0;switch(e.type){case"partial":return Object.keys(e.diff).length;case"complete":return Math.max(Object.keys(e.oldValue).length,Object.keys(e.newValue).length);case"collection":return Object.keys(e.added).length+Object.keys(e.changed).length+Object.keys(e.removed).length}}(a))return i.setLayoutProperties(t.layer,t.layout),r.type===N.fR.SYMBOL&&e._vectorTileContainer.restartDeclutter(),void e._vectorTileContainer.requestRender();e._styleChanges.push({type:x.Fr.LAYOUT_CHANGED,data:t}),e.notifyChange("updating"),e.requestUpdate()}}})),this.layer.on("style-layer-visibility-change",(function(t){var i=e._styleRepository,r=i.getLayerById(t.layer);r&&(i.setStyleLayerVisibility(t.layer,t.visibility),r.type===N.fR.SYMBOL&&e._vectorTileContainer.restartDeclutter(),e._vectorTileContainer.requestRender())})),this.layer.on("style-layer-change",(function(t){e._styleChanges.push({type:x.Fr.LAYER_CHANGED,data:t}),e.notifyChange("updating"),e.requestUpdate()})),this.layer.on("delete-style-layer",(function(t){e._styleChanges.push({type:x.Fr.LAYER_REMOVED,data:t}),e.notifyChange("updating"),e.requestUpdate()})),this.layer.on("load-style",(function(){return e._loadStyle()})),this.layer.on("spriteSource-change",(function(t){e._newSpriteSource=t.spriteSource,e._styleChanges.push({type:x.Fr.SPRITES_CHANGED,data:null});var i,r=e._styleRepository.layers,a=(0,n.Z)(r);try{for(a.s();!(i=a.n()).done;){var s=i.value;switch(s.type){case N.fR.SYMBOL:s.getLayoutProperty("icon-image")&&e._styleChanges.push({type:x.Fr.LAYOUT_CHANGED,data:{layer:s.id,layout:s.layout}});break;case N.fR.LINE:s.getPaintProperty("line-pattern")&&e._styleChanges.push({type:x.Fr.PAINTER_CHANGED,data:{layer:s.id,paint:s.paint,isDataDriven:s.isPainterDataDriven()}});break;case N.fR.FILL:s.getLayoutProperty("fill-pattern")&&e._styleChanges.push({type:x.Fr.PAINTER_CHANGED,data:{layer:s.id,paint:s.paint,isDataDriven:s.isPainterDataDriven()}})}}}catch(l){a.e(l)}finally{a.f()}e.notifyChange("updating"),e.requestUpdate()}))],this.declaredClass)}},{key:"detach",value:function(){var e,t;this._stop(),this.container.removeAllChildren(),null!==(e=this._vectorTileContainer)&&void 0!==e&&e.destroy(),this._vectorTileContainer=null,null!==(t=this._tileHandler)&&void 0!==t&&t.destroy(),this._tileHandler=null,this.handles.remove(this.declaredClass)}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this._collisionBoxesDisplay&&this._vectorTileContainer.restartDeclutter(),this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,R.fS)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"canResume",value:function(){var e=(0,h.Z)((0,c.Z)(i.prototype),"canResume",this).call(this),t=this.layer.currentStyleInfo;if(e&&null!==t&&void 0!==t&&t.layerDefinition){var r=this.view.scale,a=t.layerDefinition,n=a.minScale,s=a.maxScale;t&&t.layerDefinition&&(n&&n<r&&(e=!1),s&&s>r&&(e=!1))}return e}},{key:"isUpdating",value:function(){var e=this._vectorTileContainer.children;return!this._isTileHandlerReady||!this._fetchQueue||!this._parseQueue||this._fetchQueue.updating||this._parseQueue.updating||e.length>0&&e.some((function(e){return e.invalidating}))||this.fading}},{key:"acquireTile",value:function(e){var t=this,i=this._createVectorTile(e);return this._tileHandlerPromise.then((function(){t._fetchQueue.push(i.key).then((function(e){return t._parseQueue.push({key:i.key,data:e})})).then((function(e){i.once("attach",(function(){return t.requestUpdate()})),i.setData(e),t.requestUpdate(),t.notifyChange("updating")})).catch((function(e){t.notifyChange("updating"),(0,m.D_)(e)||he.error(e)}))})),i}},{key:"releaseTile",value:function(e){var t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.requestUpdate()}},{key:"_start",value:function(){var e=this;if(this._stop(),this._tileManager=new L({acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView},this._vectorTileContainer),this.layer.currentStyleInfo){var t=new AbortController,i=this._tileHandler.start({signal:t.signal}).then((function(){e._fetchQueue=new oe.Z({tileInfoView:e._tileInfoView,process:function(t,i){return e._getTileData(t,i)},concurrency:15}),e._parseQueue=new oe.Z({tileInfoView:e._tileInfoView,process:function(t,i){return e._parseTileData(t,i)},concurrency:8}),e.requestUpdate(),e._isTileHandlerReady=!0}));this._tileHandler.spriteMosaic.then((function(t){e._vectorTileContainer.setStyleResources(t,e._tileHandler.glyphMosaic,e._styleRepository),e.requestUpdate()})),this._tileHandlerAbortController=t,this._tileHandlerPromise=i}}},{key:"_stop",value:function(){if(this._tileHandlerAbortController&&this._vectorTileContainer){var e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileManager&&(this._tileManager.destroy(),this._tileManager=null),this._vectorTileContainer.removeAllChildren()}}},{key:"_getTileData",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,i){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._tileHandler.fetchTileData(t,i);case 2:return r=e.sent,e.abrupt("return",(this.notifyChange("updating"),r));case 4:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_parseTileData",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,i){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._tileHandler.parseTileData(t,i));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_applyStyleChanges",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){var t,i,r,a,l,o,u,h,c,d,y,f,_=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache(),t=this._styleChanges,e.prev=2,e.next=5,this._tileHandler.updateStyle(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),he.error("error applying vector-tiles style update",e.t0.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0;case 10:if(i=this._styleRepository,r=[],t.forEach((function(e){if(e.type===x.Fr.LAYER_REMOVED){var t=e.data,a=i.getLayerById(t.layer);a&&r.push(a.uid)}})),a=[],t.forEach((function(e){var t=e.type,r=e.data;switch(t){case x.Fr.PAINTER_CHANGED:i.setPaintProperties(r.layer,r.paint),l=r.layer;break;case x.Fr.LAYOUT_CHANGED:i.setLayoutProperties(r.layer,r.layout),l=r.layer;break;case x.Fr.LAYER_REMOVED:return void i.deleteStyleLayer(r.layer);case x.Fr.LAYER_CHANGED:i.setStyleLayer(r.layer,r.index),l=r.layer.id;break;case x.Fr.SPRITES_CHANGED:_._vectorTileContainer.setSpriteMosaic(_._tileHandler.setSpriteSource(_._newSpriteSource)),_._newSpriteSource=null,l=null}var n=i.getLayerById(l);n&&a.push(n.uid)})),o=this._vectorTileContainer.children,r.length>0){this._vectorTileContainer.deleteStyleLayers(r),u=(0,n.Z)(o);try{for(u.s();!(h=u.n()).done;)h.value.deleteLayerData(r)}catch(s){u.e(s)}finally{u.f()}}if(this._fetchQueue.resume(),this._parseQueue.resume(),!(a.length>0)){e.next=22;break}c=[],d=(0,n.Z)(o);try{for(f=function(){var e=y.value,t=_._fetchQueue.push(e.key).then((function(t){return _._parseQueue.push({key:e.key,data:t,styleLayerUIDs:a})})).then((function(t){return e.setData(t)}));c.push(t)},d.s();!(y=d.n()).done;)f()}catch(s){d.e(s)}finally{d.f()}return e.next=22,Promise.all(c);case 22:this._styleChanges=[],this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate();case 23:case"end":return e.stop()}}),e,this,[[2,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"_loadStyle",value:function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){var t,i,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.layer.currentStyleInfo.style,i=(0,p.d9)(t),this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this.notifyChange("updating"),this._styleRepository=new te.Z(i),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=new AbortController,r=this._tileHandlerAbortController.signal,e.prev=3,this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,i),e.next=7,this._tileHandlerPromise;case 7:e.next=13;break;case 9:if(e.prev=9,e.t0=e.catch(3),(0,m.D_)(e.t0)){e.next=13;break}throw e.t0;case 13:if(!r.aborted){e.next=15;break}return e.abrupt("return",(this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),void this.requestUpdate()));case 15:return e.next=17,this._tileHandler.spriteMosaic;case 17:a=e.sent,this._vectorTileContainer.setStyleResources(a,this._tileHandler.glyphMosaic,this._styleRepository),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate();case 19:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"_createVectorTile",value:function(e){var t=this._tileInfoView.getTileBounds((0,w.Ue)(),e);return new H.i(e,t[0],t[3],512,512,this._styleRepository)}},{key:"_renderCollisionBoxes",value:function(e){var t,i=(0,n.Z)(this._vectorTileContainer.children);try{for(i.s();!(t=i.n()).done;){var s=t.value;if(s.symbols){var l,o=[],u=(0,n.Z)(s.symbols);try{for(u.s();!(l=u.n()).done;){var h=(0,a.Z)(l.value,2),c=(h[0],h[1]);o.push.apply(o,(0,r.Z)(c))}}catch(d){u.e(d)}finally{u.f()}(0,ee.uF)(e,o)}}}catch(d){i.e(d)}finally{i.f()}}}]),i}((0,ie.y)(ue.Z));(0,f._)([(0,T.Cb)()],ce.prototype,"_fetchQueue",void 0),(0,f._)([(0,T.Cb)()],ce.prototype,"_parseQueue",void 0),(0,f._)([(0,T.Cb)()],ce.prototype,"_isTileHandlerReady",void 0),(0,f._)([(0,T.Cb)()],ce.prototype,"fading",void 0);var de=ce=(0,f._)([(0,k.j)("esri.views.2d.layers.VectorTileLayerView2D")],ce)}}]);
//# sourceMappingURL=9393.2a301e24.chunk.js.map