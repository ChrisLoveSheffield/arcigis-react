"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[1611],{64510:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(37762),i=r(15671),a=r(43144),s=r(11752),o=r(61120),c=r(60136),h=r(29388),u=(r(93169),r(92026)),f=r(23588),l=r(53628),y=r(33624),p=r(29439),d=r(10064),v=r(32718),g=r(94172),m=r(87422),_=r(4942),x=r(1413),w=r(79347),Z=r(88396),k=r(6394),U=r(83406),C=r(80457),I=r(73271),A=r(44070),B=r(8548),R=v.Z.getLogger("esri.views.2d.engine.webgl.Mesh2D"),b=function(e,t,r,n){for(var i=0,a=1;a<r;a++){var s=e[2*(t+a-1)],o=e[2*(t+a-1)+1];i+=(e[2*(t+a)]-s)*(e[2*(t+a)+1]+o)}return n?i>0:i<0},E=function(e,t){for(var r=e.coords,i=e.lengths,a=[],s=0,o=0;s<i.length;o+=i[s],s+=1){for(var c=o,h=[];s<i.length-1&&b(r,o+i[s],i[s+1],t);o+=i[s+=1])h.push(o+i[s]-c);var u,f=r.slice(2*c,2*(o+i[s])),l=(0,w.e)(f,h,2),y=(0,n.Z)(l);try{for(y.s();!(u=y.n()).done;){var p=u.value;a.push(p+c)}}catch(d){y.e(d)}finally{y.f()}}return a},L=function(){function e(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(0,i.Z)(this,e),this._cache={},this.vertices=t,this.indices=r,this.primitiveType=n,this.isMapSpace=a}return(0,a.Z)(e,[{key:"destroy",value:function(){for(var e in(0,u.pC)(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose(),this._cache.vertexBuffers)(0,u.pC)(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}},{key:"elementType",get:function(){return function(e){switch(e.BYTES_PER_ELEMENT){case 1:return B.g.UNSIGNED_BYTE;case 2:return B.g.UNSIGNED_SHORT;case 4:return B.g.UNSIGNED_INT;default:throw new d.Z("Cannot get DataType of array")}}(this.indices)}},{key:"getIndexBuffer",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B.l1.STATIC_DRAW;return this._cache.indexBuffer||(this._cache.indexBuffer=A.f.createIndex(e,t,this.indices)),this._cache.indexBuffer}},{key:"getVertexBuffers",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B.l1.STATIC_DRAW;return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((function(n,i){return(0,x.Z)((0,x.Z)({},n),{},(0,_.Z)({},i,A.f.createVertex(e,r,t.vertices[i])))}),{})),this._cache.vertexBuffers}}],[{key:"fromRect",value:function(t){var r=t.x,n=t.y,i=r+t.width,a=n+t.height;return e.fromScreenExtent({xmin:r,ymin:n,xmax:i,ymax:a})}},{key:"fromPath",value:function(t){for(var r=(0,U.ks)(new C.Z,t.path,!1,!1),n=r.coords,i=new Uint32Array(E(r,!0)),a=new Uint32Array(n.length/2),s=0;s<a.length;s++)a[s]=(0,I.UJ)(Math.floor(n[2*s]),Math.floor(n[2*s+1]));return new e({geometry:a},i,B.MX.TRIANGLES)}},{key:"fromGeometry",value:function(t,r){var n=r.geometry.type;switch(n){case"polygon":return e.fromPolygon(t,r.geometry);case"extent":return e.fromMapExtent(t,r.geometry);default:return R.error(new d.Z("mapview-bad-type","Unable to create a mesh from type ".concat(n),r)),e.fromRect({x:0,y:0,width:1,height:1})}}},{key:"fromPolygon",value:function(t,r){for(var n=(0,U.Uy)(new C.Z,r,!1,!1),i=n.coords,a=new Uint32Array(E(n,!1)),s=new Uint32Array(i.length/2),o=(0,k.a)(),c=(0,k.a)(),h=0;h<s.length;h++)(0,Z.a)(o,i[2*h],i[2*h+1]),t.toScreen(c,o),s[h]=(0,I.UJ)(Math.floor(c[0]),Math.floor(c[1]));return new e({geometry:s},a,B.MX.TRIANGLES,!0)}},{key:"fromScreenExtent",value:function(t){var r=t.xmin,n=t.xmax,i=t.ymin,a=t.ymax;return new e({geometry:new Uint32Array([(0,I.UJ)(r,i),(0,I.UJ)(n,i),(0,I.UJ)(r,a),(0,I.UJ)(r,a),(0,I.UJ)(n,i),(0,I.UJ)(n,a)])},new Uint32Array([0,1,2,3,4,5]),B.MX.TRIANGLES)}},{key:"fromMapExtent",value:function(t,r){var n=t.toScreen([0,0],[r.xmin,r.ymin]),i=(0,p.Z)(n,2),a=i[0],s=i[1],o=t.toScreen([0,0],[r.xmax,r.ymax]),c=(0,p.Z)(o,2),h=c[0],u=c[1];return new e({geometry:new Uint32Array([(0,I.UJ)(a,s),(0,I.UJ)(h,s),(0,I.UJ)(a,u),(0,I.UJ)(a,u),(0,I.UJ)(h,s),(0,I.UJ)(h,u)])},new Uint32Array([0,1,2,3,4,5]),B.MX.TRIANGLES)}}]),e}(),T=r(45412),S=v.Z.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),D=function(e){return parseFloat(e)/100},G=function(e){(0,c.Z)(r,e);var t=(0,h.Z)(r);function r(e,n){var a;return(0,i.Z)(this,r),(a=t.call(this))._clip=n,a._cache={},a.stage=e,a._handle=(0,g.YP)((function(){return n.version}),(function(){return a._invalidate()})),a.ready(),a}return(0,a.Z)(r,[{key:"_destroyGL",value:function(){(0,u.pC)(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),(0,u.pC)(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}},{key:"destroy",value:function(){this._destroyGL(),this._handle.remove()}},{key:"getVAO",value:function(e,t,r,n){var i=(0,p.Z)(t.size,2),a=i[0],s=i[1];if("geometry"!==this._clip.type&&this._lastWidth===a&&this._lastHeight===s||(this._lastWidth=a,this._lastHeight=s,this._destroyGL()),(0,u.Wi)(this._cache.vao)){var o=this._createMesh(t,this._clip),c=o.getIndexBuffer(e),h=o.getVertexBuffers(e);this._cache.mesh=o,this._cache.vao=new T.U(e,r,n,h,c)}return this._cache.vao}},{key:"_createTransforms",value:function(){return{dvs:(0,f.c)()}}},{key:"_invalidate",value:function(){this._destroyGL(),this.requestRender()}},{key:"_createScreenRect",value:function(e,t){var r=(0,p.Z)(e.size,2),n=r[0],i=r[1],a="string"==typeof t.left?D(t.left)*n:t.left,s="string"==typeof t.right?D(t.right)*n:t.right,o="string"==typeof t.top?D(t.top)*i:t.top,c="string"==typeof t.bottom?D(t.bottom)*i:t.bottom,h=a,u=o;return{x:h,y:u,width:Math.max(n-s-h,0),height:Math.max(i-c-u,0)}}},{key:"_createMesh",value:function(e,t){switch(t.type){case"rect":return L.fromRect(this._createScreenRect(e,t));case"path":return L.fromPath(t);case"geometry":return L.fromGeometry(e,t);default:return S.error(new d.Z("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),L.fromRect({x:0,y:0,width:1,height:1})}}}],[{key:"fromClipArea",value:function(e,t){return new r(e,t)}}]),r}(m.s),M=r(80613),P=function(e){(0,c.Z)(r,e);var t=(0,h.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.apply(this,arguments)).name=e.constructor.name,e}return(0,a.Z)(r,[{key:"clips",set:function(e){this._clips=e,this.children.forEach((function(t){return t.clips=e})),this._updateClippingInfo()}},{key:"_createTransforms",value:function(){return{dvs:(0,f.c)()}}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),r=t.painter,n=t.globalOpacity,i=t.profiler,a=t.drawPhase,s=a===M.jx.LABEL||a===M.jx.HIGHLIGHT?1:n*this.computedOpacity;i.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,s),this.updateTransforms(e.state),this.renderChildren(t),r.compositeLayer(t,s),i.recordContainerEnd()}},{key:"renderChildren",value:function(e){(0,u.Wi)(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));var t,r=(0,n.Z)(this.children);try{for(r.s();!(t=r.n()).done;){t.value.beforeRender(e)}}catch(h){r.e(h)}finally{r.f()}var i,a=(0,n.Z)(this._renderPasses);try{for(a.s();!(i=a.n()).done;){var s=i.value;try{s.render(e)}catch(f){}}}catch(h){a.e(h)}finally{a.f()}var o,c=(0,n.Z)(this.children);try{for(c.s();!(o=c.n()).done;){o.value.afterRender(e)}}catch(h){c.e(h)}finally{c.f()}}},{key:"createRenderParams",value:function(e){return e.requireFBO=this.requiresDedicatedFBO,e}},{key:"prepareRenderPasses",value:function(e){var t=this;return[e.registerRenderPass({name:"clip",brushes:[l.U.clip],target:function(){return t._clippingInfos},drawPhase:M.jx.MAP|M.jx.LABEL|M.jx.LABEL_ALPHA|M.jx.DEBUG|M.jx.HIGHLIGHT})]}},{key:"updateTransforms",value:function(e){var t,r=(0,n.Z)(this.children);try{for(r.s();!(t=r.n()).done;){t.value.setTransform(e)}}catch(i){r.e(i)}finally{r.f()}}},{key:"onAttach",value:function(){(0,s.Z)((0,o.Z)(r.prototype),"onAttach",this).call(this),this._updateClippingInfo()}},{key:"onDetach",value:function(){(0,s.Z)((0,o.Z)(r.prototype),"onDetach",this).call(this),this._updateClippingInfo()}},{key:"_updateClippingInfo",value:function(){var e=this;if((0,u.pC)(this._clippingInfos)&&(this._clippingInfos.forEach((function(e){return e.destroy()})),this._clippingInfos=null),this.stage){var t=this._clips;(0,u.pC)(t)&&t.length&&(this._clippingInfos=t.items.map((function(t){return G.fromClipArea(e.stage,t)}))),this.requestRender()}}}]),r}(y.W)},52662:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(74165),i=r(15861),a=r(15671),s=r(43144),o=r(60136),c=r(29388),h=r(27366),u=r(32718),f=r(66978),l=r(49861),y=(r(63780),r(93169),r(25243),r(69912)),p=r(90110),d=r(95986),v=r(9229),g=r(67581),m=r(13107),_=u.Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D"),x=function(e){(0,o.Z)(r,e);var t=(0,c.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"update",value:function(e){this.strategy.update(e).catch((function(e){(0,f.D_)(e)||_.error(e)})),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new p.c,this.container.addChild(this._bitmapContainer),this.strategy=new v.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(e,t,r){return this.layer.fetchImage(e,t,r)}},{key:"doRefresh",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}}]),r}((0,m.Z)((0,d.y)(g.Z)));(0,h._)([(0,l.Cb)()],x.prototype,"strategy",void 0),(0,h._)([(0,l.Cb)()],x.prototype,"updating",void 0);var w=x=(0,h._)([(0,y.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],x)}}]);
//# sourceMappingURL=1611.97130f57.chunk.js.map