"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[7165],{67165:function(e,t,n){n.r(t),n.d(t,{ElevationQuery:function(){return _},GeometryDescriptor:function(){return b},getFinestLodIndex:function(){return I}});var r=n(60136),i=n(29388),a=n(37762),o=n(74165),s=n(1413),l=n(15861),u=n(15671),c=n(43144),f=n(14921),p=n(10064),h=n(92026),v=n(66978),y=n(68860),d=n(77577),m=n(7882),x=n(29909),Z=n(79803),T=n(65156),k=n(8904),w=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if((0,u.Z)(this,e),this.tile=t,this.zmin=0,this.zmax=0,(0,h.pC)(n)){var r=t.extent;this.samplerData={pixelData:n.values,width:n.width,height:n.height,safeWidth:.99999999*(n.width-1),noDataValue:n.noDataValue,dx:(n.width-1)/(r[2]-r[0]),dy:(n.width-1)/(r[3]-r[1]),x0:r[0],y1:r[3]},this.zmin=n.minValue,this.zmax=n.maxValue}}return(0,c.Z)(e,[{key:"sample",value:function(e,t){if(!(0,h.Wi)(this.samplerData)){var n=this.samplerData,r=n.safeWidth,i=n.width,a=n.pixelData,o=n.noDataValue,s=n.dx,l=n.dy,u=n.y1,c=n.x0,f=g(l*(u-t),0,r),p=g(s*(e-c),0,r),v=Math.floor(f),y=Math.floor(p),d=v*i+y,m=d+i,x=a[d],Z=a[m],T=a[d+1],k=a[m+1];if(x!==o&&Z!==o&&T!==o&&k!==o){var w=p-y,_=x+(T-x)*w;return _+(Z+(k-Z)*w-_)*(f-v)}}}}]),e}();function g(e,t,n){return e<t?t:e>n?n:e}var _=function(){function e(){(0,u.Z)(this,e)}return(0,c.Z)(e,[{key:"queryAll",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var i,a,l,u,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r&&r.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:return i=b.fromGeometry(n),a=!1,r&&r.returnSampleInfo||(a=!0),l=(0,s.Z)((0,s.Z)((0,s.Z)({},C),r),{},{returnSampleInfo:!0}),e.next=8,this.query(t[t.length-1],i,l);case 8:return u=e.sent,e.next=11,this._queryAllContinue(t,u,l);case 11:return c=e.sent,e.abrupt("return",(c.geometry=c.geometry.export(),a&&delete c.sampleInfo,c));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var i,a,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&(n instanceof b||"point"===n.type||"multipoint"===n.type||"polyline"===n.type)){e.next=4;break}throw new p.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");case 4:return i=(0,s.Z)((0,s.Z)({},C),r),a=new R(t,n.spatialReference,i),l=i.signal,e.next=7,t.load({signal:l});case 7:return e.next=9,this._createGeometryDescriptor(a,n,l);case 9:return e.next=11,this._selectTiles(a,l);case 11:return e.next=13,this._populateElevationTiles(a,l);case 13:return this._sampleGeometryWithElevation(a),e.abrupt("return",this._createQueryResult(a,l));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createSampler",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new p.Z("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return i=(0,s.Z)((0,s.Z)({},C),r),e.abrupt("return",this._createSampler(t,n,i));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"createSamplerAll",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var i,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r&&r.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new p.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new p.Z("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return i=(0,s.Z)((0,s.Z)((0,s.Z)({},C),r),{},{returnSampleInfo:!0}),e.next=7,this._createSampler(t[t.length-1],n,i);case 7:return a=e.sent,e.abrupt("return",this._createSamplerAllContinue(t,n,a,i));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_createSampler",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r,i){var a,s,l,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.signal,e.next=3,t.load({signal:a});case 3:if(s=n.spatialReference,l=t.tileInfo.spatialReference,e.t0=s.equals(l),e.t0){e.next=9;break}return e.next=8,(0,Z.iQ)([{source:s,dest:l}],{signal:a});case 8:n=(0,Z.iV)(n,l);case 9:return u=new q(t,n,r,i),e.next=12,this._selectTiles(u,a);case 12:return e.next=14,this._populateElevationTiles(u,a);case 14:return e.abrupt("return",new k.Tl(u.elevationTiles,u.layer.tileInfo,u.options.noDataValue));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i){return e.apply(this,arguments)}}()},{key:"_createSamplerAllContinue",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r,i){var a,s,l,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pop(),t.length){e.next=2;break}return e.abrupt("return",r);case 2:return a=r.samplers.map((function(e){return(0,T.oJ)(e.extent)})),e.next=5,this._createSampler(t[t.length-1],n,i,a);case 5:if(0!==(s=e.sent).samplers.length){e.next=8;break}return e.abrupt("return",r);case 8:return l=r.samplers.concat(s.samplers),u=new k.Tl(l,i.noDataValue),e.abrupt("return",this._createSamplerAllContinue(t,n,u,i));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i){return e.apply(this,arguments)}}()},{key:"_queryAllContinue",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var i,a,s,l,u,c,f,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=t.pop(),a=n.geometry.coordinates,s=[],l=[],u=0;u<a.length;u++)(c=n.sampleInfo[u]).demResolution>=0?c.source||(c.source=i):t.length&&(s.push(a[u]),l.push(u));if(t.length&&0!==s.length){e.next=4;break}return e.abrupt("return",n);case 4:return f=n.geometry.clone(s),e.next=7,this.query(t[t.length-1],f,r);case 7:return p=e.sent,e.abrupt("return",(l.forEach((function(e,t){a[e].z=p.geometry.coordinates[t].z,n.sampleInfo[e].demResolution=p.sampleInfo[t].demResolution})),this._queryAllContinue(t,n,r)));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_createQueryResult",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.geometry.project(t.outSpatialReference,n);case 2:return e.t0=e.sent.export(),e.t1=t.options.noDataValue,r={geometry:e.t0,noDataValue:e.t1},e.abrupt("return",(t.options.returnSampleInfo&&(r.sampleInfo=this._extractSampleInfo(t)),t.geometry.coordinates.forEach((function(e){e.tile=null,e.elevationTile=null})),r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_createGeometryDescriptor",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var i,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.layer.tileInfo.spatialReference,!(n instanceof b)){e.next=7;break}return e.next=4,n.project(a,r);case 4:i=e.sent,e.next=10;break;case 7:return e.next=9,(0,Z.iQ)([{source:n.spatialReference,dest:a}],{signal:r});case 9:i=(0,Z.iV)(n,a);case 10:if(i){e.next=12;break}throw new p.Z("elevation-query:spatial-reference-mismatch","Cannot query elevation in '".concat(n.spatialReference.wkid,"' on an elevation service in '").concat(a.wkid,"'"));case 12:t.geometry=b.fromGeometry(i);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_selectTiles",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.options.demResolution,"geometry"===t.type&&this._preselectOutsideLayerExtent(t),"number"!=typeof r){e.next=5;break}this._selectTilesClosestResolution(t),e.next=14;break;case 5:if("finest-contiguous"!==r){e.next=10;break}return e.next=8,this._selectTilesFinestContiguous(t,n);case 8:e.next=14;break;case 10:if("auto"===r){e.next=12;break}throw new p.Z("elevation-query:invalid-dem-resolution","Invalid dem resolution value '".concat(r,'\', expected a number, "finest-contiguous" or "auto"'));case 12:return e.next=14,this._selectTilesAuto(t,n);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_preselectOutsideLayerExtent",value:function(e){if(!(0,h.Wi)(e.layer.fullExtent)){var t=new w(null);t.sample=function(){return e.options.noDataValue},e.outsideExtentTile=t;var n=e.layer.fullExtent;e.geometry.coordinates.forEach((function(e){var r=e.x,i=e.y;(r<n.xmin||r>n.xmax||i<n.ymin||i>n.ymax)&&(e.elevationTile=t)}))}}},{key:"_selectTilesClosestResolution",value:function(e){var t=e.layer.tileInfo,n=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(n)}},{key:"_findNearestDemResolutionLODIndex",value:function(e,t){for(var n=t/(0,y.c9)(e.spatialReference),r=e.lods[0],i=0,a=1;a<e.lods.length;a++){var o=e.lods[a];Math.abs(o.resolution-n)<Math.abs(r.resolution-n)&&(r=o,i=a)}return i}},{key:"_selectTilesFinestContiguous",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=I(t.layer.tileInfo,t.options.minDemResolution),e.next=3,this._selectTilesFinestContiguousAt(t,r,n);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesFinestContiguousAt",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n,r){var i,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.layer,t.selectTilesAtLOD(n),!(n<0)){e.next=3;break}return e.abrupt("return");case 3:if(a=i.tilemapCache,s=t.getTilesToFetch(),e.prev=4,!a){e.next=10;break}return e.next=8,(0,v.Hl)(Promise.all(s.map((function(e){return a.fetchAvailability(e.level,e.row,e.col,{signal:r})}))),r);case 8:e.next=14;break;case 10:return e.next=12,this._populateElevationTiles(t,r);case 12:if(t.allElevationTilesFetched()){e.next=14;break}throw t.clearElevationTiles(),new p.Z("elevation-query:has-unavailable-tiles");case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(4),(0,v.r9)(e.t0),e.next=21,this._selectTilesFinestContiguousAt(t,n-1,r);case 21:case"end":return e.stop()}}),e,this,[[4,16]])})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"_populateElevationTiles",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,i,a,s,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getTilesToFetch(),i={},a=t.options.cache,s=t.options.noDataValue,u=r.map(function(){var e=(0,l.Z)((0,o.Z)().mark((function e(r){var l,u,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l="".concat(t.layer.uid,":").concat(r.id,":").concat(s),u=(0,h.pC)(a)?a.get(l):null,!(0,h.pC)(u)){e.next=6;break}e.t0=u,e.next=9;break;case 6:return e.next=8,t.layer.fetchTile(r.level,r.row,r.col,{noDataValue:s,signal:n});case 8:e.t0=e.sent;case 9:c=e.t0,(0,h.pC)(a)&&a.put(l,c),i[r.id]=new w(r,c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,(0,v.Hl)((0,v.as)(u),n);case 3:t.populateElevationTiles(i);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesAuto",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,i,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t),r=t.layer.tilemapCache){e.next=4;break}return e.abrupt("return",this._selectTilesAutoPrefetchUpsample(t,n));case 4:return i=t.getTilesToFetch(),a={},s=i.map(function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t){var i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={id:null,level:0,row:0,col:0,extent:(0,T.Ue)()},e.next=3,(0,f.q6)(r.fetchAvailabilityUpsample(t.level,t.row,t.col,i,{signal:n}));case 3:!1===(s=e.sent).ok?(0,v.r9)(s.error):a[t.id]=i;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,(0,v.Hl)(Promise.all(s),n);case 7:t.remapTiles(a);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_reduceTilesForMaximumRequests",value:function(e){var t=e.layer.tileInfo,n=0,r={},i=function(e){e.id in r?r[e.id]++:(r[e.id]=1,n++)},a=function(e){var t=r[e.id];1===t?(delete r[e.id],n--):r[e.id]=t-1};e.forEachTileToFetch(i,a);for(var o=!0;o&&(o=!1,e.forEachTileToFetch((function(r){n<=e.options.maximumAutoTileRequests||(a(r),t.upsampleTile(r)&&(o=!0),i(r))}),a),o););}},{key:"_selectTilesAutoFinest",value:function(e){var t=I(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}},{key:"_selectTilesAutoPrefetchUpsample",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.layer.tileInfo,e.next=3,this._populateElevationTiles(t,n);case 3:if(i=!1,t.forEachTileToFetch((function(e,t){r.upsampleTile(e)?i=!0:t()})),e.t0=i,!e.t0){e.next=9;break}return e.next=9,this._selectTilesAutoPrefetchUpsample(t,n);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_sampleGeometryWithElevation",value:function(e){e.geometry.coordinates.forEach((function(t){var n=t.elevationTile,r=e.options.noDataValue;if(n){var i=n.sample(t.x,t.y);(0,h.pC)(i)?r=i:t.elevationTile=null}t.z=r}))}},{key:"_extractSampleInfo",value:function(e){var t=e.layer.tileInfo,n=(0,y.c9)(t.spatialReference);return e.geometry.coordinates.map((function(r){var i=-1;return r.elevationTile&&r.elevationTile!==e.outsideExtentTile&&(i=t.lodAt(r.elevationTile.tile.level).resolution*n),{demResolution:i}}))}}]),e}(),b=function(){function e(){(0,u.Z)(this,e)}return(0,c.Z)(e,[{key:"export",value:function(){return this._exporter(this.coordinates,this.spatialReference)}},{key:"clone",value:function(t){var n=this,r=new e;return r.geometry=this.geometry,r.spatialReference=this.spatialReference,r.coordinates=t||this.coordinates.map((function(e){return n._cloneCoordinate(e)})),r._exporter=this._exporter,r}},{key:"project",value:function(){var e=(0,l.Z)((0,o.Z)().mark((function e(t,n){var r,i,a,s,l=this;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.spatialReference.equals(t)){e.next=2;break}return e.abrupt("return",this.clone());case 2:return e.next=4,(0,Z.iQ)([{source:this.spatialReference,dest:t}],{signal:n});case 4:if(r=new d.Z({spatialReference:this.spatialReference,points:this.coordinates.map((function(e){return[e.x,e.y]}))}),i=(0,Z.iV)(r,t)){e.next=7;break}return e.abrupt("return",null);case 7:return a=this.coordinates.map((function(e,t){var n=l._cloneCoordinate(e),r=i.points[t];return n.x=r[0],n.y=r[1],n})),s=this.clone(a),e.abrupt("return",(s.spatialReference=t,s));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_cloneCoordinate",value:function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}}],[{key:"fromGeometry",value:function(t){var n=new e;if(n.geometry=t,n.spatialReference=t.spatialReference,t instanceof e)n.coordinates=t.coordinates.map((function(e){return n._cloneCoordinate(e)})),n._exporter=function(e,n){var r=t.clone(e);return r.spatialReference=n,r};else switch(t.type){case"point":var r=t,i=r.hasZ,o=r.hasM;n.coordinates=i&&o?[{x:r.x,y:r.y,z:r.z,m:r.m}]:i?[{x:r.x,y:r.y,z:r.z}]:o?[{x:r.x,y:r.y,m:r.m}]:[{x:r.x,y:r.y}],n._exporter=function(e,n){return t.hasM?new m.Z(e[0].x,e[0].y,e[0].z,e[0].m,n):new m.Z(e[0].x,e[0].y,e[0].z,n)};break;case"multipoint":var s=t,l=s.hasZ,u=s.hasM;n.coordinates=l&&u?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2],m:e[3]}})):l?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2]}})):u?s.points.map((function(e){return{x:e[0],y:e[1],m:e[2]}})):s.points.map((function(e){return{x:e[0],y:e[1]}})),n._exporter=function(e,n){return t.hasM?new d.Z({points:e.map((function(e){return[e.x,e.y,e.z,e.m]})),hasZ:!0,hasM:!0,spatiaReference:n}):new d.Z(e.map((function(e){return[e.x,e.y,e.z]})),n)};break;case"polyline":var c,f=t,p=[],h=[],v=t.hasZ,y=t.hasM,Z=0,T=(0,a.Z)(f.paths);try{for(T.s();!(c=T.n()).done;){var k=c.value;if(h.push([Z,Z+k.length]),Z+=k.length,v&&y){var w,g=(0,a.Z)(k);try{for(g.s();!(w=g.n()).done;){var _=w.value;p.push({x:_[0],y:_[1],z:_[2],m:_[3]})}}catch(F){g.e(F)}finally{g.f()}}else if(v){var b,E=(0,a.Z)(k);try{for(E.s();!(b=E.n()).done;){var R=b.value;p.push({x:R[0],y:R[1],z:R[2]})}}catch(F){E.e(F)}finally{E.f()}}else if(y){var q,I=(0,a.Z)(k);try{for(I.s();!(q=I.n()).done;){var C=q.value;p.push({x:C[0],y:C[1],m:C[2]})}}catch(F){I.e(F)}finally{I.f()}}else{var A,D=(0,a.Z)(k);try{for(D.s();!(A=D.n()).done;){var z=A.value;p.push({x:z[0],y:z[1]})}}catch(F){D.e(F)}finally{D.f()}}}}catch(F){T.e(F)}finally{T.f()}n.coordinates=p,n._exporter=function(e,n){var r=t.hasM?e.map((function(e){return[e.x,e.y,e.z,e.m]})):e.map((function(e){return[e.x,e.y,e.z]})),i=h.map((function(e){return r.slice(e[0],e[1])}));return new x.Z({paths:i,hasM:t.hasM,hasZ:!0,spatialReference:n})}}return n}}]),e}(),E=(0,c.Z)((function e(t,n){(0,u.Z)(this,e),this.layer=t,this.options=n})),R=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(e,r,i){var a;return(0,u.Z)(this,n),(a=t.call(this,e,i)).outSpatialReference=r,a.type="geometry",a}return(0,c.Z)(n,[{key:"selectTilesAtLOD",value:function(e){if(e<0)this.geometry.coordinates.forEach((function(e){return e.tile=null}));else{var t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach((function(e){e.tile=t.tileAt(n,e.x,e.y)}))}}},{key:"allElevationTilesFetched",value:function(){return!this.geometry.coordinates.some((function(e){return!e.elevationTile}))}},{key:"clearElevationTiles",value:function(){var e,t=(0,a.Z)(this.geometry.coordinates);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.elevationTile!==this.outsideExtentTile&&(n.elevationTile=null)}}catch(r){t.e(r)}finally{t.f()}}},{key:"populateElevationTiles",value:function(e){var t,n=(0,a.Z)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var r=t.value;!r.elevationTile&&r.tile&&(r.elevationTile=e[r.tile.id])}}catch(i){n.e(i)}finally{n.f()}}},{key:"remapTiles",value:function(e){var t,n=(0,a.Z)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.tile=e[r.tile.id]}}catch(i){n.e(i)}finally{n.f()}}},{key:"getTilesToFetch",value:function(){var e,t={},n=[],r=(0,a.Z)(this.geometry.coordinates);try{for(r.s();!(e=r.n()).done;){var i=e.value,o=i.tile;i.elevationTile||!i.tile||t[o.id]||(t[o.id]=o,n.push(o))}}catch(s){r.e(s)}finally{r.f()}return n}},{key:"forEachTileToFetch",value:function(e){var t,n=(0,a.Z)(this.geometry.coordinates);try{var r=function(){var n=t.value;n.tile&&!n.elevationTile&&e(n.tile,(function(){return n.tile=null}))};for(n.s();!(t=n.n()).done;)r()}catch(i){n.e(i)}finally{n.f()}}}]),n}(E),q=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(e,r,i,a){var o;return(0,u.Z)(this,n),(o=t.call(this,e,i)).type="extent",o.elevationTiles=[],o.candidateTiles=[],o.fetchedCandidates=new Set,o.extent=r.intersection(e.fullExtent),o.maskExtents=a,o}return(0,c.Z)(n,[{key:"selectTilesAtLOD",value:function(e,t){var n=this._maximumLodForRequests(t),r=Math.min(n,e);r<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(r)}},{key:"_maximumLodForRequests",value:function(e){var t=this.layer.tileInfo;if(!e)return t.lods.length-1;var n=this.extent;if((0,h.Wi)(n))return-1;for(var r=t.lods.length-1;r>=0;r--){var i=t.lods[r],a=i.resolution*t.size[0],o=i.resolution*t.size[1];if(Math.ceil(n.width/a)*Math.ceil(n.height/o)<=e)return r}return-1}},{key:"allElevationTilesFetched",value:function(){return this.candidateTiles.length===this.elevationTiles.length}},{key:"clearElevationTiles",value:function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}},{key:"populateElevationTiles",value:function(e){var t,n=(0,a.Z)(this.candidateTiles);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=e[r.id];i&&(this.fetchedCandidates.add(r),this.elevationTiles.push(i))}}catch(o){n.e(o)}finally{n.f()}}},{key:"remapTiles",value:function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((function(t){return e[t.id]})))}},{key:"getTilesToFetch",value:function(){return this.candidateTiles}},{key:"forEachTileToFetch",value:function(e,t){var n=this,r=this.candidateTiles;this.candidateTiles=[],r.forEach((function(r){if(n.fetchedCandidates.has(r))t&&t(r);else{var i=!1;e(r,(function(){return i=!0})),i?t&&t(r):n.candidateTiles.push(r)}})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}},{key:"_uniqueNonOverlappingTiles",value:function(e,t){var n,r={},i=[],o=(0,a.Z)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;r[s.id]?t&&t(s):(r[s.id]=s,i.push(s))}}catch(u){o.e(u)}finally{o.f()}var l=i.sort((function(e,t){return e.level-t.level}));return l.filter((function(e,n){for(var r=0;r<n;r++)if((0,T.r3)(l[r].extent,e.extent))return t&&t(e),!1;return!0}))}},{key:"_selectCandidateTilesCoveringExtentAt",value:function(e){this.candidateTiles.length=0;var t=this.extent;if(!(0,h.Wi)(t))for(var n=this.layer.tileInfo,r=n.lods[e],i=n.tileAt(r.level,t.xmin,t.ymin),a=r.resolution*n.size[0],o=r.resolution*n.size[1],s=Math.ceil((t.xmax-i.extent[0])/a),l=Math.ceil((t.ymax-i.extent[1])/o),u=0;u<l;u++)for(var c=0;c<s;c++){var f={id:null,level:i.level,row:i.row-u,col:i.col+c};n.updateTileInfo(f),this._tileIsMasked(f)||this.candidateTiles.push(f)}}},{key:"_tileIsMasked",value:function(e){return!!this.maskExtents&&this.maskExtents.some((function(t){return(0,T.r3)(t,e.extent)}))}}]),n}(E);function I(e,t){var n=e.lods.length-1;if(t>0){var r=e.lods.findIndex((function(e){return e.resolution<t}));0===r?n=0:r>0&&(n=r-1)}return n}var C={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);
//# sourceMappingURL=7165.97668066.chunk.js.map