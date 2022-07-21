"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[6598],{45956:function(e,t,i){i.d(t,{eY:function(){return x}});var n=i(29439),r=i(15671),s=i(43144),a=i(97326),u=i(11752),o=i(61120),l=i(60136),h=i(29388),c=i(92026),d=i(22753),f=i(23588),p=i(15245),v=i(87422),y=i(10978),g=i(8548),k=i(371);function m(e,t,i){var n={target:g.No.TEXTURE_2D,pixelFormat:g.VI.RGBA,internalFormat:g.VI.RGBA,dataType:g.Br.UNSIGNED_BYTE,wrapMode:g.e8.CLAMP_TO_EDGE};return t&&i&&(n.width=t,n.height=i),new k.x(e,n)}var x=function(e){(0,l.Z)(i,e);var t=(0,h.Z)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1?arguments[1]:void 0,u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,r.Z)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=u,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=s,e.source=n,e.requestRender=e.requestRender.bind((0,a.Z)(e)),e}return(0,s.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:(0,f.c)()}}},{key:"setTransform",value:function(e){var t=(0,d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),r=(0,n.Z)(i,2),s=r[0],a=r[1],u=this.resolution/this.pixelRatio/e.resolution,o=u*this.width,l=u*this.height,h=Math.PI*this.rotation/180;(0,d.c)(t,t,(0,p.f)(s,a)),(0,d.c)(t,t,(0,p.f)(o/2,l/2)),(0,d.r)(t,t,-h),(0,d.c)(t,t,(0,p.f)(-o/2,-l/2)),(0,d.j)(t,t,(0,p.f)(o,l)),(0,d.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null!==(t=this._texture)&&void 0!==t&&t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=m(e,this.sourceWidth,this.sourceHeight):this._texture=m(e));var i,n=this.source;if(n){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=n)&&"render"in i)if(n instanceof y.Z){var r=n.getRenderedRasterPixels();this._texture.setData((0,c.pC)(r)?r.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(n));else(function(e){return e&&!("render"in e)})(n)&&this._texture.setData(n);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(v.s)},9849:function(e,t,i){i.d(t,{s:function(){return g}});var n=i(93433),r=i(29439),s=i(15671),a=i(43144),u=i(11752),o=i(61120),l=i(60136),h=i(29388),c=i(65156),d=i(23588),f=i(45956),p=function(e){(0,l.Z)(i,e);var t=(0,h.Z)(i);function i(e,n,r,a,u){var o,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return(0,s.Z)(this,i),(o=t.call(this,e,n,r,a,u)).bitmap=new f.eY(l,"standard",!1),o.bitmap.coordScale=[a,u],o.bitmap.once("isReady",(function(){return o.ready()})),o}return(0,a.Z)(i,[{key:"destroy",value:function(){(0,u.Z)((0,o.Z)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this.bitmap.beforeRender(e)}},{key:"afterRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"afterRender",this).call(this,e),this.bitmap.afterRender(e)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(e){this.bitmap.stencilRef=e}},{key:"_createTransforms",value:function(){return{dvs:(0,d.c)(),tileMat3:(0,d.c)()}}},{key:"setTransform",value:function(e,t){(0,u.Z)((0,o.Z)(i.prototype),"setTransform",this).call(this,e,t),this.bitmap.transforms.dvs=this.transforms.dvs}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(i(72900).I),v=i(53628),y=i(80613),g=function(e){(0,l.Z)(i,e);var t=(0,h.Z)(i);function i(){return(0,s.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.bitmap.blendFunction}))}},{key:"createTile",value:function(e){var t=this._tileInfoView.getTileBounds((0,c.Ue)(),e),i=(0,r.Z)(this._tileInfoView.tileInfo.size,2),n=i[0],s=i[1];return new p(e,t[0],t[3],n,s)}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"bitmap (tile)",brushes:[v.U.bitmap],target:function(){return t.children.map((function(e){return e.bitmap}))},drawPhase:y.jx.MAP});return[].concat((0,n.Z)((0,u.Z)((0,o.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[r])}},{key:"doRender",value:function(e){this.visible&&e.drawPhase===y.jx.MAP&&(0,u.Z)((0,o.Z)(i.prototype),"doRender",this).call(this,e)}}]),i}(i(55067).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(15671),r=i(43144),s=i(92026),a=function(){function e(t,i,r){(0,n.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=r}return(0,r.Z)(e,[{key:"width",get:function(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,s.Wi)(t)){var i=this.filter({pixelBlock:t});if(!(0,s.Wi)(i.pixelBlock)){var n=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(n),e.putImageData(r,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},40639:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),u=i(27366),o=i(41691),l=i(49861),h=(i(63780),i(93169),i(25243),i(69912)),c=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).tiles=new Map,r}return(0,r.Z)(i,[{key:"destroy",value:function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}},{key:"updating",get:function(){return this.isUpdating()}},{key:"acquireTile",value:function(e){var t=this,i=this.createTile(e);return i.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,i),i}},{key:"forceAttributeTextureUpload",value:function(){}},{key:"forEachTile",value:function(e){this.tiles.forEach(e)}},{key:"releaseTile",value:function(e){this.tiles.delete(e.key.id),this.disposeTile(e)}},{key:"isUpdating",value:function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e}},{key:"setHighlight",value:function(){}},{key:"invalidateLabels",value:function(){}},{key:"requestUpdate",value:function(){this.layerView.requestUpdate()}}]),i}(o.r);(0,u._)([(0,l.Cb)()],c.prototype,"layer",void 0),(0,u._)([(0,l.Cb)()],c.prototype,"layerView",void 0),(0,u._)([(0,l.Cb)()],c.prototype,"tileInfoView",void 0),(0,u._)([(0,l.Cb)()],c.prototype,"updating",null);var d=c=(0,u._)([(0,h.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],c)},46598:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),u=i(27366),o=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),l=i(27811),h=i(9849),c=i(40639),d=function(){function e(){(0,n.Z)(this,e),this.gradient=null,this.height=512,this.width=512}return(0,r.Z)(e,[{key:"render",value:function(e){(0,l.hy)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}]),e}(),f=function(e){(0,s.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e))._intensityInfo={minDensity:0,maxDensity:0},r.type="heatmap",r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},r._container=new h.s(e.tileInfoView),r}return(0,r.Z)(i,[{key:"createTile",value:function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}},{key:"onConfigUpdate",value:function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minDensity,n=t.maxDensity,r=t.colorStops;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=n,this._gradient=(0,l.uI)(r),this.tiles.forEach((function(t){var r=t.bitmap.source;r&&(r.minDensity=i,r.maxDensity=n,r.gradient=e._gradient,t.bitmap.invalidateTexture())}))}}},{key:"hitTest",value:function(){return Promise.resolve([])}},{key:"install",value:function(e){e.addChild(this._container)}},{key:"uninstall",value:function(e){this._container.removeAllChildren(),e.removeChild(this._container)}},{key:"disposeTile",value:function(e){this._container.removeChild(e),e.destroy()}},{key:"supportsRenderer",value:function(e){return e&&"heatmap"===e.type}},{key:"onTileData",value:function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,r=n.minDensity,s=n.maxDensity,a=t.bitmap.source||new d;a.intensities=i&&i.matrix||null,a.minDensity=r,a.maxDensity=s,a.gradient=this._gradient,t.bitmap.source=a,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}}},{key:"onTileError",value:function(e){console.error(e)}},{key:"lockGPUUploads",value:function(){}},{key:"unlockGPUUploads",value:function(){}},{key:"fetchResource",value:function(e,t){return console.error(e),Promise.reject()}}]),i}(c.Z),p=f=(0,u._)([(0,o.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],f)}}]);
//# sourceMappingURL=6598.477bb01f.chunk.js.map