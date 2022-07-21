"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[4147],{71039:function(e,t,r){r.d(t,{z:function(){return Z}});var n=r(37762),i=r(15671),a=r(43144),s=r(60136),o=r(29388),u=r(27366),l=(r(59486),r(85015)),c=r(63780),p=r(32718),f=r(16889),d=r(92026),y=r(94172),h=r(68860),v=r(49861),g=(r(93169),r(25243),r(69912)),E=r(11186),b=r(48562),m=r(79803),_=r(41414),w=r(65156),x=r(22186),C=r(81753),S=r(18661),k=r(44011),F=r(78952),I=p.Z.getLogger("esri.views.3d.layers.i3s.I3SMeshViewFilter"),Z=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e))._projectionEngineLoaded=!1,r}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this;(0,y.N1)((function(){var t;return(null===(t=(0,d.Wg)(e.viewFilter))||void 0===t?void 0:t.geometry)||(0,d.pC)(e.layerFilter)})).then((function(){return e.loadAsyncModule(Promise.resolve().then(r.bind(r,2170)).then((function(t){e.destroyed||(e._geometryEngine=t,e.applyFilters())})))}))}},{key:"sortedObjectIds",get:function(){if((0,d.Wi)(this.viewFilter)||(0,d.Wi)(this.viewFilter.objectIds))return null;var e=new Float64Array(this.viewFilter.objectIds);return e.sort(),e}},{key:"parsedWhereClause",get:function(){var e=(0,d.pC)(this.viewFilter)?this.viewFilter.where:null;if((0,d.Wi)(e)||!e)return null;try{return b.WhereClause.create(e,this.layerFieldsIndex)}catch(t){I.error("Failed to parse filter where clause: ".concat(t))}return null}},{key:"addFilters",value:function(e,t,r,n){var i=this.sortedObjectIds;(0,d.pC)(i)&&e.push((function(e){return(0,k.Yb)(i,!0,e)})),this.addSqlFilter(e,this.parsedWhereClause);var a=this._layerMaskGeometries,s=this._geometryEngine;if((0,d.pC)(a)&&(0,d.pC)(this.layerFilter)&&(0,d.pC)(s)){var o=this.layerFilter.spatialRelationship;e.push((function(e,i){return T(s,e,i,n,t,r,a,o)}))}var u=this._viewMaskGeometries;if((0,d.pC)(u)&&(0,d.pC)(this.viewFilter)&&(0,d.pC)(s)){var l=this.viewFilter.spatialRelationship;e.push((function(e,i){return T(s,e,i,n,t,r,u,l)}))}}},{key:"isMBSGeometryVisible",value:function(e,t,r){var n=this._layerMaskGeometries,i=this._geometryEngine;if((0,d.pC)(n)&&(0,d.pC)(this.layerFilter)&&(0,d.pC)(i)){var a=this.layerFilter.spatialRelationship,s=n[0].spatialReference||t;return(0,m.st)(e,r,M,s)?Q(i,M,n,s,a):(I.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}var o=this._viewMaskGeometries;if((0,d.pC)(o)&&(0,d.pC)(this.viewFilter)&&(0,d.pC)(i)){var u=this.viewFilter.spatialRelationship,l=o[0].spatialReference||t;return(0,m.st)(e,r,M,l)?Q(i,M,o,l,u):(I.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}},{key:"parsedGeometry",get:function(){var e=this._viewMaskGeometries,t=this._layerMaskGeometries;return(0,d.Wi)(e)||(0,d.Wi)(t)?e||t:t.concat(e)}},{key:"_layerMaskGeometries",get:function(){var e=this.layerFilter;return(0,d.Wi)(e)||(0,d.Wi)(this._geometryEngine)?null:D(this._geometryEngine,e.geometry,e.spatialRelationship)}},{key:"_viewMaskGeometries",get:function(){var e=this;if((0,d.Wi)(this.viewFilter)||(0,d.Wi)(this._geometryEngine))return null;var t=this.viewFilter.geometry;if((0,d.Wi)(t))return null;var r=this.viewFilter,n=r.distance,i=r.units,a=this.viewFilter.spatialRelationship,s="mesh"===t.type?t.extent:t;if((0,d.Wi)(n)||0===n)return D(this._geometryEngine,s,a);var o=i||(0,h.qE)(s.spatialReference);if(s.spatialReference.isWGS84){var u=this._geometryEngine.geodesicBuffer(s,n,o);return D(this._geometryEngine,u,a)}var l=(0,C.iV)(s,F.Z.WGS84);if((0,d.pC)(l)){var c=(0,C.iV)(this._geometryEngine.geodesicBuffer(l,n,o),s.spatialReference);return D(this._geometryEngine,c,a)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule((0,m.zD)().then((function(){return e._projectionEngineLoaded=!0}))),!this._projectionEngineLoaded))return null;var p=null;try{p=(0,m.iV)(s,F.Z.WGS84)}catch(f){}if(p)try{p=(0,m.iV)(this._geometryEngine.geodesicBuffer(p,n,o),s.spatialReference)}catch(f){p=null}return p||I.error("Filter by geodesic buffer (distance) unsupported, failed to project input geometry (".concat(s.spatialReference.wkid,") to WGS84.")),D(this._geometryEngine,p,a)}}],[{key:"checkSupport",value:function(e){return!(0,d.Wi)(e)&&(e.timeExtent?(I.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!function(e){return null!=e&&j.includes(e)}(e.spatialRelationship)||(I.warn("Filters with spatialRelationship other than ".concat(j.join(", ")," are not supported for mesh scene layers")),!1))}}]),n}(l.Z);(0,u._)([(0,v.Cb)()],Z.prototype,"layerFilter",void 0),(0,u._)([(0,v.Cb)({type:S.Z})],Z.prototype,"viewFilter",void 0),(0,u._)([(0,v.Cb)()],Z.prototype,"layerFieldsIndex",void 0),(0,u._)([(0,v.Cb)()],Z.prototype,"loadAsyncModule",void 0),(0,u._)([(0,v.Cb)()],Z.prototype,"applyFilters",void 0),(0,u._)([(0,v.Cb)()],Z.prototype,"addSqlFilter",void 0),(0,u._)([(0,v.Cb)({readOnly:!0})],Z.prototype,"sortedObjectIds",null),(0,u._)([(0,v.Cb)({readOnly:!0})],Z.prototype,"parsedWhereClause",null),(0,u._)([(0,v.Cb)({readOnly:!0})],Z.prototype,"parsedGeometry",null),(0,u._)([(0,v.Cb)({readOnly:!0})],Z.prototype,"_layerMaskGeometries",null),(0,u._)([(0,v.Cb)({readOnly:!0})],Z.prototype,"_viewMaskGeometries",null),(0,u._)([(0,v.Cb)()],Z.prototype,"_projectionEngineLoaded",void 0),(0,u._)([(0,v.Cb)()],Z.prototype,"_geometryEngine",void 0),Z=(0,u._)([(0,g.j)("esri.views.3d.layers.i3s.I3SMeshViewFilter")],Z);var O,R,j=["contains","intersects","disjoint"];function D(e,t,r){if((0,d.Wi)(t))return null;if("disjoint"===r&&"polygon"===t.type){var n=function(){for(var r=new Array(t.rings.length),n=0;n<t.rings.length;++n){var i=(0,w.al)(1/0,1/0,-1/0,-1/0);(0,w.Wi)(i,t.rings[n]),r[n]={type:"polygon",rings:[t.rings[n]],spatialReference:t.spatialReference,aabr:i}}r.sort((function(e,t){return e.aabr[0]-t.aabr[0]}));for(var a=new Set,s=new c.SO,o=function(t){for(var n=r[t],i=t+1;i<r.length;++i){var o=r[i];if(o.aabr[0]>=n.aabr[2])break;a.add(o)}a.forEach((function(t){if(n!==t)if(t.aabr[2]<=n.aabr[0])a.delete(t);else if(e.intersects(n,t)){n.rings=n.rings.concat(t.rings),(0,w.jn)(n.aabr,t.aabr,n.aabr),delete n._geVersion,a.delete(t);var i=(0,c.cq)(r,t,r.length,s);r.splice(i,1)}})),a.add(n)},u=0;u<r.length;++u)o(u);for(var l=0,p=r;l<p.length;l++){delete p[l].aabr}return{v:r}}();if("object"===typeof n)return n.v}return[t]}function Q(e,t,r,n,i){var a=N(e,t,n);return r.every((function(t){return W(e,t,a,i)!==O.DISCARD}))}function T(e,t,r,i,a,s,o,u){var l=o[0].spatialReference||a.spatialReference;if((0,m.st)(r.node.mbs,s,M,l)){var c,p=N(e,M,l),f=function(e,t,r,n,i){var a=t.renderSpatialReference,s=new Map,o={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:r};o.rings[0][3]=o.rings[0][0];var u,l,c={indices:null,data:null,stride:0,startIndex:0,endIndex:0};switch(e){case"intersects":u=function(e,t,r){return e.intersects(t,r)?O.KEEP:O.TEST},l=A;break;case"contains":u=function(e,t,r){return e.contains(t,r)?O.TEST:O.DISCARD},l=A;break;default:u=function(e,t,r){return e.disjoint(t,r)?O.TEST:O.DISCARD},l=G}return{collection:n,object:i,type:e,maskSR:r,renderSR:a,aabbCache:s,triangle:o,positions:c,triangleTest:u,geometryTest:l}}(u,a,l,i,r.objectHandle),d=(0,n.Z)(o);try{var y=function(){var n=c.value;if(0===t.length)return{v:void 0};switch(W(e,n,p,u)){case O.DISCARD:return{v:void(t.length=0)};case O.KEEP:return"continue"}(0,k.hv)(t,r.featureIds,(function(t){return function(e,t,r,n){var i=n.collection,a=n.object,s=n.renderSR,o=n.maskSR,u=n.geometryTest,l=n.aabbCache,c=l.get(r);if(!c){var p=i.getObjectTransform(a);i.getComponentAabb(a,r,J);for(var f=[[J[0],J[1],0],[J[0],J[4],0],[J[3],J[4],0],[J[3],J[1],0]],d=0;d<4;++d)(0,E.t)(f[d],f[d],p.rotationScale),(0,E.a)(f[d],f[d],p.position),(0,m.SH)(f[d],s,f[d],o);(c={rings:[f],hasZ:!1,hasM:!1,type:"polygon",spatialReference:o}).rings[0][4]=c.rings[0][0],l.set(r,c)}switch(u(e,t,c)){case O.DISCARD:return!1;case O.KEEP:return!0}var y=n.triangle,h=n.triangleTest,v=n.positions,g=y.rings[0][0],b=y.rings[0][1],_=y.rings[0][2],w=i.getObjectTransform(a);i.getComponentPositions(a,r,v);for(var x=v.indices,C=v.data,S=v.stride,k=v.startIndex,F=v.endIndex,I=k;I<F;I+=3){var Z=S*x[I+0],R=S*x[I+1],j=S*x[I+2];(0,E.s)(g,C[Z+0],C[Z+1],C[Z+2]),(0,E.s)(b,C[R+0],C[R+1],C[R+2]),(0,E.s)(_,C[j+0],C[j+1],C[j+2]),(0,E.t)(g,g,w.rotationScale),(0,E.t)(b,b,w.rotationScale),(0,E.t)(_,_,w.rotationScale),(0,E.a)(g,g,w.position),(0,E.a)(b,b,w.position),(0,E.a)(_,_,w.position),(0,m.SH)(g,s,g,o),(0,m.SH)(b,s,b,o),(0,m.SH)(_,s,_,o);var D=b[0]-g[0],Q=b[1]-g[1],T=_[0]-g[0],M=_[1]-g[1];if(!(Math.abs(D*M-Q*T)<V))switch(delete y._geVersion,h(e,t,y)){case O.DISCARD:return!1;case O.KEEP:return!0}}return"intersects"!==n.type}(e,n,t,f)}))};for(d.s();!(c=d.n()).done;){var h=y();if("continue"!==h&&"object"===typeof h)return h.v}}catch(v){d.e(v)}finally{d.f()}}else I.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter")}(R=O||(O={}))[R.KEEP=0]="KEEP",R[R.DISCARD=1]="DISCARD",R[R.TEST=2]="TEST";var M=[0,0,0,0];function N(e,t,r){var n={x:t[0],y:t[1],hasZ:!1,hasM:!1,type:"point",spatialReference:r},i=!r.isWGS84&&!r.isWebMercator,a=Number.isNaN(t[3])?0:(0,f.uZ)(t[3],0,2*x.sv.radius),s=i?e.buffer(n,a,1):e.geodesicBuffer(n,a,1);return s.type="polygon",s}function W(e,t,r,n){switch(n){case"intersects":case"contains":return A(e,t,r);case"disjoint":return G(e,t,r)}}function A(e,t,r){return e.intersects(t,r)?e.contains(t,r)?O.KEEP:O.TEST:O.DISCARD}function G(e,t,r){return e.intersects(t,r)?e.contains(t,r)?O.DISCARD:O.TEST:O.KEEP}var V=Math.pow(2,-32);var J=(0,_.Ue)()},43812:function(e,t,r){r.d(t,{u:function(){return _}});var n=r(74165),i=r(15861),a=r(15671),s=r(43144),o=r(60136),u=r(29388),l=r(27366),c=r(85015),p=r(10064),f=r(100),d=r(92026),y=r(49861),h=(r(63780),r(93169),r(25243),r(69912)),v=r(53866),g=r(14e3),E=r(49818),b=r(21149),m=g.q,_=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e))._dataQueryEngineInstance=null,n._handles=new f.Z,n}return(0,s.Z)(r,[{key:"defaultQueryJSON",get:function(){return new b.Z({outSpatialReference:this.spatialReference}).toJSON()}},{key:"dataQueryEngine",get:function(){return this._ensureDataQueryEngine()}},{key:"initialize",value:function(){var e=this;this._handles.add(this.layerView.on("visible-geometry-changed",(function(){return e.spatialIndex.events.emit("changed")})))}},{key:"destroy",value:function(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null),this._handles&&(this._handles.destroy(),this._handles=null),this._set("layerView",null)}},{key:"executeQueryForCount",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(t),r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForExtent",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(t),r);case 2:return i=e.sent,a=i.count,s=i.extent,e.abrupt("return",{count:a,extent:v.Z.fromJSON(s)});case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQueryForIds",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(t),r));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeQuery",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=this._ensureQueryJSON(t)).returnGeometry){e.next=3;break}throw new p.Z("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");case 3:if(!i.returnCentroid){e.next=5;break}throw new p.Z("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");case 5:return e.next=7,this.dataQueryEngine.executeQuery(i,r);case 7:return a=e.sent,s=E.default.fromJSON(a),e.abrupt("return",(s.features.forEach((function(e){e.geometry=null})),s));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_ensureQueryJSON",value:function(e){return(0,d.Wi)(e)?this.defaultQueryJSON:e.toJSON()}},{key:"_ensureDataQueryEngine",value:function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;var e=this.layer.objectIdField||"OBJECTID",t=this.layer.fields.map((function(e){return e.toJSON()})),r=this.layerView.view.resourceController.scheduler,n=this.spatialReference.toJSON(),i=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new m({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:t,timeInfo:null,spatialReference:n,objectIdField:e,featureStore:a,scheduler:r,priority:i}),this._dataQueryEngineInstance}}]),r}(c.Z);(0,l._)([(0,y.Cb)({constructOnly:!0})],_.prototype,"layerView",void 0),(0,l._)([(0,y.Cb)({constructOnly:!0})],_.prototype,"priority",void 0),(0,l._)([(0,y.Cb)({constructOnly:!0})],_.prototype,"spatialIndex",void 0),(0,l._)([(0,y.Cb)({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],_.prototype,"spatialReference",void 0),(0,l._)([(0,y.Cb)({readOnly:!0,aliasOf:"layerView.i3slayer"})],_.prototype,"layer",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],_.prototype,"defaultQueryJSON",null),_=(0,l._)([(0,h.j)("esri.views.3d.layers.i3s.I3SQueryEngine")],_)},51246:function(e,t,r){r.d(t,{u:function(){return p}});var n=r(29439),i=r(15671),a=r(43144),s=r(92026),o=r(41414),u=r(12717),l=r(80457),c=r(44011),p=function(){function e(t){(0,i.Z)(this,e),this.objectIdField=t.objectIdField,this.getFeatureExtent=t.getFeatureExtent}return(0,a.Z)(e,[{key:"getObjectId",value:function(e){return e.id}},{key:"getAttributes",value:function(e){var t=e.meta,r=e.index,n={};this.objectIdField&&(n[this.objectIdField]=e.id);var i=(0,s.pC)(t.attributeInfo)&&t.attributeInfo.attributeData;if((0,s.pC)(i))for(var a=0,o=Object.keys(i);a<o.length;a++){var u=o[a];n[u]=(0,c.Jx)(i[u],r)}return n}},{key:"getAttribute",value:function(e,t){if(t===this.objectIdField)return e.id;var r=e.meta,n=e.index,i=(0,s.pC)(r.attributeInfo)&&r.attributeInfo.attributeData;return(0,s.pC)(i)?(0,c.Jx)(i[t],n):null}},{key:"getGeometry",value:function(e){if(e.geometry)return e.geometry;var t=this.getFeatureExtent(e,f),r=(0,n.Z)(t,5),i=r[0],a=r[1],s=r[2],o=r[3],u=r[4];return new l.Z([5],[i,a,s,o,a,s,o,u,s,i,u,s,i,a,s])}},{key:"getCentroid",value:function(e,t){if(e.geometry)return(0,u.Y)(new l.Z,e.geometry,t.hasZ,t.hasM);var r=this.getFeatureExtent(e,f),i=(0,n.Z)(r,6),a=i[0],s=i[1],o=i[2],c=i[3],p=i[4],d=i[5];return new l.Z([0],[(a+c)/2,(s+p)/2,(o+d)/2])}},{key:"cloneWithGeometry",value:function(e,t){return{id:e.id,index:e.index,meta:e.meta,geometry:t}}}]),e}(),f=(0,o.Ue)()},73552:function(e,t,r){r.d(t,{I:function(){return E}});var n=r(37762),i=r(15671),a=r(43144),s=r(60136),o=r(29388),u=r(27366),l=r(85015),c=r(91505),p=r(49861),f=(r(63780),r(93169),r(25243),r(69912)),d=r(67077),y=r(79803),h=r(41414),v=r(65156),g=r(42757),E=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).events=new c.Z,n}return(0,a.Z)(r,[{key:"forEach",value:function(e){this.forAllFeatures((function(t){return e(t),g.K.CONTINUE}))}},{key:"forEachBounds",value:function(e,t,r){var i,a=this.getFeatureExtent,s=(0,n.Z)(e);try{for(s.s();!(i=s.n()).done;){t(a(i.value,r))}}catch(o){s.e(o)}finally{s.f()}}},{key:"forEachInBounds",value:function(e,t){var r=this;this.forAllFeatures((function(n){var i=r.getFeatureExtent(n,m);return(0,v.kK)(e,(0,h.y8)(i,_))&&t(n),g.K.CONTINUE}),(function(t){if((0,y.st)(t.node.mbs,r.sourceSpatialReference,b,r.viewSpatialReference),b[0]>=e[0]&&b[2]<=e[2]&&b[1]>=e[1]&&b[3]<=e[3])return g.K.CONTINUE;var n=Math.max(e[0],Math.min(b[0],e[2])),i=Math.max(e[1],Math.min(b[1],e[3])),a=b[0]-n,s=b[1]-i;return a*a+s*s<=b[3]*b[3]?g.K.CONTINUE:g.K.SKIP}))}}]),r}(l.Z);(0,u._)([(0,p.Cb)({constructOnly:!0})],E.prototype,"featureAdapter",void 0),(0,u._)([(0,p.Cb)({constructOnly:!0})],E.prototype,"toArray",void 0),(0,u._)([(0,p.Cb)({constructOnly:!0})],E.prototype,"forAllFeatures",void 0),(0,u._)([(0,p.Cb)({constructOnly:!0})],E.prototype,"getFeatureExtent",void 0),(0,u._)([(0,p.Cb)({constructOnly:!0})],E.prototype,"sourceSpatialReference",void 0),(0,u._)([(0,p.Cb)({constructOnly:!0})],E.prototype,"viewSpatialReference",void 0),E=(0,u._)([(0,f.j)("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],E);var b=(0,d.c)(),m=(0,h.Ue)(),_=(0,v.Ue)()},1247:function(e,t,r){r.d(t,{l:function(){return y}});var n=r(15671),i=r(43144),a=r(60136),s=r(29388),o=r(27366),u=r(32718),l=r(49861),c=(r(63780),r(93169),r(25243),r(69912)),p=r(48562),f=r(44011),d=u.Z.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),y=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments))._definitionExpressionErrors=0,e._maxDefinitionExpressionErrors=20,e.logError=function(t){e._definitionExpressionErrors<e._maxDefinitionExpressionErrors&&d.error("Error while evaluating definitionExpression: "+t),e._definitionExpressionErrors++,e._definitionExpressionErrors===e._maxDefinitionExpressionErrors&&d.error("Further errors are ignored")},e}return(0,i.Z)(r,[{key:"parsedDefinitionExpression",get:function(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{var e=p.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return d.error("definitionExpression is using non standard function"),null;var t=[],r=e.fieldNames;return(0,f.e8)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(d.error("definitionExpression references unknown fields: ".concat(t.join(", "))),null):(this._definitionExpressionErrors=0,e)}catch(n){return d.error("Failed to parse definitionExpression: "+n),null}}},{key:"definitionExpressionFields",get:function(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}},{key:"_evaluateClause",value:function(e,t){try{return e.testFeature(t)}catch(r){return this.logError(r),!1}}},{key:"_addDefinitionExpressionToQuery",value:function(e){if(!this.parsedDefinitionExpression)return e;var t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where="(".concat(t,") AND (").concat(r.where,")"):r.where=t,r}}]),r}(e);return(0,o._)([(0,l.Cb)()],t.prototype,"i3slayer",void 0),(0,o._)([(0,l.Cb)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,o._)([(0,l.Cb)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,o._)([(0,c.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},24405:function(e,t,r){r.d(t,{V:function(){return c},e:function(){return u}});var n=r(74165),i=r(93433),a=r(15861),s=r(92026),o=r(80031);function u(e){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,u,l,c,p,f,d,y,h=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:t.popupTemplate,!(0,s.Wi)(r)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,r.getRequiredFields(t.fieldsIndex);case 5:if(a=e.sent,u=r.lastEditInfoEnabled,l=t.objectIdField,c=t.typeIdField,p=t.globalIdField,f=t.relationships,!a.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!u){e.next=19;break}return e.next=16,(0,o.CH)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return d=e.t0,y=(0,o.Q0)(t.fieldsIndex,[].concat((0,i.Z)(a),(0,i.Z)(d))),e.abrupt("return",(c&&y.push(c),y&&l&&t.fieldsIndex.has(l)&&!y.includes(l)&&y.push(l),y&&p&&t.fieldsIndex.has(p)&&!y.includes(p)&&y.push(p),f&&f.forEach((function(e){var r=e.keyField;y&&r&&t.fieldsIndex.has(r)&&!y.includes(r)&&y.push(r)})),y));case 23:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function c(e,t){return e.popupTemplate?e.popupTemplate:(0,s.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,s.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=4147.aa2cdd01.chunk.js.map