"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[1657],{51657:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(1413),a=r(37762),i=r(74165),s=r(15861),u=r(15671),o=r(43144),c=r(76200),l=r(10064),p=r(32718),d=r(92026),f=r(66978),h=r(77981),y=r(92975),v=r(83406),g=r(68928),m=r(19995),b=r(14e3),Z=r(47615),x=r(63543),_=r(68808),k=r(52410),w=r(85249),F=r(80031),I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},E=function(){function e(){var t=this;(0,u.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(r);case 2:return n=e.sent,e.abrupt("return",t._createFeatures(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,o.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,s,u,o,c,p,d,f,h,v,m,_,E,T,S,j,q,O,P,C,R,G,D,A,M,Q,N,U=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=U.length>1&&void 0!==U[1]?U[1]:{},this.loadOptions={url:t.url,customParameters:t.customParameters},s=[],e.next=5,this._checkProjection(t.spatialReference);case 5:if(u=null,e.t0=t.url,!e.t0){e.next=11;break}return e.next=10,this._fetch(null===r||void 0===r?void 0:r.signal);case 10:u=e.sent;case 11:o=(0,Z.my)(u,{geometryType:t.geometryType}),c=t.fields||o.fields||[],p=null!=t.hasZ?t.hasZ:o.hasZ,d=o.geometryType,f=t.objectIdField||o.objectIdFieldName||"__OBJECTID",h=t.spatialReference||y.Zn,v=t.timeInfo,c===o.fields&&o.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}}),m=c.find((function(e){return e.name===f})),m?("esriFieldTypeString"!==m.type&&(m.type="esriFieldTypeOID"),m.editable=!1,m.nullable=!1):(m={alias:f,name:f,type:"string"===o.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},c.unshift(m)),_={},E=(0,a.Z)(c),e.prev=18,E.s();case 20:if((T=E.n()).done){e.next=29;break}if(null==(S=T.value).name&&(S.name=S.alias),null==S.alias&&(S.alias=S.name),S.name){e.next=24;break}throw new l.Z("geojson-layer:invalid-field-name","field name is missing",{field:S});case 24:if(w.v.jsonValues.includes(S.type)){e.next=26;break}throw new l.Z("geojson-layer:invalid-field-type",'invalid type for field "'.concat(S.name,'"'),{field:S});case 26:S.name!==m.name&&void 0!==(j=(0,F.os)(S))&&(_[S.name]=j);case 27:e.next=20;break;case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(18),E.e(e.t1);case 34:return e.prev=34,E.f(),e.finish(34);case 37:return this._fieldsIndex=new k.Z(c),(q=this._fieldsIndex.requiredFields.indexOf(m))>-1&&this._fieldsIndex.requiredFields.splice(q,1),v&&(v.startTimeField&&((O=this._fieldsIndex.get(v.startTimeField))?(v.startTimeField=O.name,O.type="esriFieldTypeDate"):v.startTimeField=null),v.endTimeField&&((P=this._fieldsIndex.get(v.endTimeField))?(v.endTimeField=P.name,P.type="esriFieldTypeDate"):v.endTimeField=null),v.trackIdField&&((C=this._fieldsIndex.get(v.trackIdField))?v.trackIdField=C.name:(v.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))),v.startTimeField||v.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:v}}),v=null)),R=d?(0,x.bU)(d):null,G={warnings:s,featureErrors:[],layerDefinition:(0,n.Z)((0,n.Z)({},I),{},{drawingInfo:R,templates:(0,x.Hq)(_),extent:null,geometryType:d,objectIdField:f,fields:c,hasZ:!!p,timeInfo:v})},this._queryEngine=new b.q({fields:c,geometryType:d,hasM:!1,hasZ:p,objectIdField:f,spatialReference:h,timeInfo:v,featureStore:new g.Z({geometryType:d,hasM:!1,hasZ:p}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,x.Dm)(_,f),e.next=44,this._createFeatures(u);case 44:return D=e.sent,this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,D),A=this._normalizeFeatures(D,G.warnings,G.featureErrors),this._queryEngine.featureStore.addMany(A),G.layerDefinition.extent=this._queryEngine.fullExtent,G.layerDefinition.timeInfo&&(M=this._queryEngine.timeExtent,Q=M.start,N=M.end,G.layerDefinition.timeInfo.timeExtent=[Q,N]),e.abrupt("return",G);case 49:case"end":return e.stop()}}),e,this,[[18,31,34,37]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._queryEngine,n=r.spatialReference,a=r.geometryType,e.next=3,Promise.all([(0,_.b)(n,a),(0,m._W)(t.adds,n),(0,m._W)(t.updates,n)]);case 3:return e.next=5,this._waitSnapshotComplete();case 5:return e.abrupt("return",this._applyEdits(t));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,r,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,r,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,r,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,r,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,r.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadOptions.customParameters=t,null!==(r=this._snapshotTask)&&void 0!==r&&r.abort(),this._snapshotTask=(0,f.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){n._queryEngine.featureStore.clear(),n._objectIdGenerator=n._createObjectIdGenerator(n._queryEngine,e);var t=n._normalizeFeatures(e);t&&n._queryEngine.featureStore.addMany(t)}),(function(e){n._queryEngine.featureStore.clear(),(0,f.D_)(e)||p.Z.getLogger("esri.layers.GeoJSONLayer").error(new l.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createFeatures",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,n,s,u,o,c,l,p;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this._queryEngine,n=r.geometryType,s=r.hasZ,u=r.objectIdField,o=(0,Z.lG)(t,{geometryType:n,hasZ:s,objectIdField:u}),!(0,y.fS)(this._queryEngine.spatialReference,y.Zn)){c=(0,a.Z)(o);try{for(c.s();!(l=c.n()).done;)p=l.value,(0,d.pC)(p.geometry)&&(p.geometry=(0,v.GH)((0,m.iV)((0,v.di)(p.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),y.Zn,this._queryEngine.spatialReference)))}catch(i){c.e(i)}finally{c.f()}}return e.abrupt("return",o);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var r,a,s,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.loadOptions,a=r.url,s=r.customParameters,e.next=5,(0,c.default)(a,{responseType:"json",query:(0,n.Z)({},s),signal:t});case 5:return u=e.sent.data,e.next=8,(0,Z.O3)(u);case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_normalizeFeatures",value:function(e,t,r){var n,i=this._queryEngine.objectIdField,s=[],u=(0,a.Z)(e);try{for(u.s();!(n=u.n()).done;){var o=n.value,c=this._createDefaultAttributes(),l=(0,_.O0)(this._fieldsIndex,c,o.attributes,!0,t);l?null===r||void 0===r||r.push(l):(this._assignObjectId(c,o.attributes,!0),o.attributes=c,o.objectId=c[i],s.push(o))}}catch(p){u.e(p)}finally{u.f()}return s}},{key:"_applyEdits",value:function(e){var t=e.adds,r=e.updates,n=e.deletes,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(i,t),r&&r.length&&this._applyUpdateEdits(i,r),n&&n.length){var s,u=(0,a.Z)(n);try{for(u.s();!(s=u.n()).done;){var o=s.value;i.deleteResults.push((0,_.d1)(o))}}catch(c){u.e(c)}finally{u.f()}this._queryEngine.featureStore.removeManyById(n)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:i}}},{key:"_applyAddEdits",value:function(e,t){var r,n=e.addResults,i=this._queryEngine,s=i.geometryType,u=i.hasM,o=i.hasZ,c=i.objectIdField,l=i.spatialReference,p=i.featureStore,f=[],y=(0,a.Z)(t);try{for(y.s();!(r=y.n()).done;){var g=r.value;if(g.geometry&&s!==(0,h.Ji)(g.geometry))n.push((0,_.av)("Incorrect geometry type."));else{var b=this._createDefaultAttributes(),Z=(0,_.O0)(this._fieldsIndex,b,g.attributes);if(Z)n.push(Z);else{if(this._assignObjectId(b,g.attributes),g.attributes=b,null!=g.uid){var x=g.attributes[c];e.uidToObjectId[g.uid]=x}(0,d.pC)(g.geometry)&&(g.geometry=(0,m.iV)((0,_.og)(g.geometry,l),g.geometry.spatialReference,l)),f.push(g),n.push((0,_.d1)(g.attributes[c]))}}}}catch(k){y.e(k)}finally{y.f()}p.addMany((0,v.Yn)([],f,s,o,u,c))}},{key:"_applyUpdateEdits",value:function(e,t){var r,n=e.updateResults,i=this._queryEngine,s=i.geometryType,u=i.hasM,o=i.hasZ,c=i.objectIdField,l=i.spatialReference,p=i.featureStore,f=(0,a.Z)(t);try{for(f.s();!(r=f.n()).done;){var y=r.value,g=y.attributes,b=y.geometry,Z=g&&g[c];if(null!=Z)if(p.has(Z)){var x=(0,v.EI)(p.getFeature(Z),s,o,u);if((0,d.pC)(b)){if(s!==(0,h.Ji)(b)){n.push((0,_.av)("Incorrect geometry type."));continue}x.geometry=(0,m.iV)((0,_.og)(b,l),b.spatialReference,l)}if(g){var k=(0,_.O0)(this._fieldsIndex,x.attributes,g);if(k){n.push(k);continue}}p.add((0,v.XA)(x,s,o,u,c)),n.push((0,_.d1)(Z))}else n.push((0,_.av)("Feature with object id ".concat(Z," missing")));else n.push((0,_.av)("Identifier field ".concat(c," missing")))}}catch(w){f.e(w)}finally{f.f()}}},{key:"_createObjectIdGenerator",value:function(e,t){var r=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===r.type)return function(){return r.name+"-"+Date.now().toString(16)};var n,i=Number.NEGATIVE_INFINITY,s=(0,a.Z)(t);try{for(s.s();!(n=s.n()).done;){var u=n.value;u.objectId&&(i=Math.max(i,u.objectId))}}catch(o){s.e(o)}finally{s.f()}return i=Math.max(0,i)+1,function(){return i++}}},{key:"_assignObjectId",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this._queryEngine.objectIdField;e[n]=r&&n in t?t[n]:this._objectIdGenerator()}},{key:"_checkProjection",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m._W)(y.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new l.Z("geojson-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},47615:function(e,t,r){r.d(t,{O3:function(){return T},lG:function(){return j},my:function(){return S},q9:function(){return h}});var n=r(29439),a=r(74165),i=r(37762),s=r(10064),u=r(3182),o=r(80457),c=r(80031),l=(0,a.Z)().mark(y),p=(0,a.Z)().mark(v),d=(0,a.Z)().mark(g),f={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function h(e){return f[e]}function y(e){var t,r,n;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=(0,i.Z)(e.features),a.prev=7,t.s();case 9:if((r=t.n()).done){a.next=17;break}if(n=r.value,a.t1=n,!a.t1){a.next=15;break}return a.next=15,n;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),l,null,[[7,19,22,25]])}function v(e){var t,r,n,s,u,o,c,l,d;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",null);case 2:a.t0=e.type,a.next="Point"===a.t0?5:"LineString"===a.t0||"MultiPoint"===a.t0?8:"MultiLineString"===a.t0||"Polygon"===a.t0?10:"MultiPolygon"===a.t0?27:58;break;case 5:return a.next=7,e.coordinates;case 7:return a.abrupt("break",58);case 8:return a.delegateYield(e.coordinates,"t1",9);case 9:return a.abrupt("break",58);case 10:t=(0,i.Z)(e.coordinates),a.prev=11,t.s();case 13:if((r=t.n()).done){a.next=18;break}return n=r.value,a.delegateYield(n,"t2",16);case 16:a.next=13;break;case 18:a.next=23;break;case 20:a.prev=20,a.t3=a.catch(11),t.e(a.t3);case 23:return a.prev=23,t.f(),a.finish(23);case 26:return a.abrupt("break",58);case 27:s=(0,i.Z)(e.coordinates),a.prev=28,s.s();case 30:if((u=s.n()).done){a.next=50;break}o=u.value,c=(0,i.Z)(o),a.prev=33,c.s();case 35:if((l=c.n()).done){a.next=40;break}return d=l.value,a.delegateYield(d,"t4",38);case 38:a.next=35;break;case 40:a.next=45;break;case 42:a.prev=42,a.t5=a.catch(33),c.e(a.t5);case 45:return a.prev=45,c.f(),a.finish(45);case 48:a.next=30;break;case 50:a.next=55;break;case 52:a.prev=52,a.t6=a.catch(28),s.e(a.t6);case 55:return a.prev=55,s.f(),a.finish(55);case 58:case"end":return a.stop()}}),p,null,[[11,20,23,26],[28,52,55,58],[33,42,45,48]])}function g(e){var t,r,n,s,c,l,p,f,y,v,g,m,b,Z=arguments;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=Z.length>1&&void 0!==Z[1]?Z[1]:{},r=t.geometryType,n=t.objectIdField,s=(0,i.Z)(e),a.prev=3,s.s();case 5:if((c=s.n()).done){a.next=18;break}if(p=c.value,f=p.geometry,y=p.properties,v=p.id,!f||h(f.type)===r){a.next=10;break}return a.abrupt("continue",16);case 10:return m=null!==(l=(g=y||{})[n])&&void 0!==l?l:null,n&&null!=v&&!g[n]&&(g[n]=m=v),b=new u.u_(f?x(new o.Z,f,t):null,g,null,m),a.next=16,b;case 16:a.next=5;break;case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(3),s.e(a.t0);case 23:return a.prev=23,s.f(),a.finish(23);case 26:case"end":return a.stop()}}),d,null,[[3,20,23,26]])}function m(e){var t,r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){if(t.value.length>2)return!0}}catch(n){r.e(n)}finally{r.f()}return!1}function b(e){for(var t=0,r=0;r<e.length;r++){var n=e[r],a=e[(r+1)%e.length];t+=n[0]*a[1]-a[0]*n[1]}return t<=0}function Z(e){var t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function x(e,t,r){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,r){return w(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){var n,a=(0,i.Z)(t.coordinates);try{for(a.s();!(n=a.n()).done;){w(e,n.value,r)}}catch(s){a.e(s)}finally{a.f()}return e}(e,t,r);case"MultiPolygon":return function(e,t,r){var n,a=(0,i.Z)(t.coordinates);try{for(a.s();!(n=a.n()).done;){var s=n.value;_(e,s[0],r);for(var u=1;u<s.length;u++)k(e,s[u],r)}}catch(o){a.e(o)}finally{a.f()}return e}(e,t,r);case"Point":return function(e,t,r){return I(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){var n=t.coordinates;_(e,n[0],r);for(var a=1;a<n.length;a++)k(e,n[a],r);return e}(e,t,r)}}function _(e,t,r){var n=Z(t);!function(e){return!b(e)}(n)?w(e,n,r):F(e,n,r)}function k(e,t,r){var n=Z(t);!function(e){return b(e)}(n)?w(e,n,r):F(e,n,r)}function w(e,t,r){var n,a=(0,i.Z)(t);try{for(a.s();!(n=a.n()).done;){I(e,n.value,r)}}catch(s){a.e(s)}finally{a.f()}e.lengths.push(t.length)}function F(e,t,r){for(var n=t.length-1;n>=0;n--)I(e,t[n],r);e.lengths.push(t.length)}function I(e,t,r){var a=(0,n.Z)(t,3),i=a[0],s=a[1],u=a[2];e.coords.push(i,s),r.hasZ&&e.coords.push(u||0)}function E(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){if(!e)throw new s.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,n=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!n.test(r))throw new s.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function S(e){var t,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],s=new Set,u=new Set,o=!1,l=null,p=!1,d=n.geometryType,f=void 0===d?null:d,g=!1,b=(0,i.Z)(y(e));try{var Z=function(){var e=r.value,n=e.geometry,i=e.properties,c=e.id;if((!n||(f||(f=h(n.type)),h(n.type)===f))&&(o||(o=m(v(n))),p||(p=null!=c)&&(t=typeof c,l=Object.keys(i).filter((function(e){return i[e]===c}))),p&&null!=c&&(l.length>1?l=l.filter((function(e){return i[e]===c})):1===l.length&&(l=i[l[0]]===c?l:[])),!g&&i)){var d=!0;for(var y in i)if(!s.has(y)){var b=i[y];if(null!=b){var Z=E(b);"unknown"!==Z?(u.delete(y),s.add(y),a.push({name:y,alias:y,type:Z})):u.add(y)}else d=!1,u.add(y)}g=d}};for(b.s();!(r=b.n()).done;)Z()}catch(F){b.e(F)}finally{b.f()}var x=l&&1===l.length&&l[0]||null;if(x){var _,k=(0,i.Z)(a);try{for(k.s();!(_=k.n()).done;){var w=_.value;if(w.name===x&&(0,c.H7)(w)){w.type="esriFieldTypeOID";break}}}catch(F){k.e(F)}finally{k.f()}}return{fields:a,geometryType:f,hasZ:o,objectIdFieldName:x,objectIdFieldType:t,unknownFields:Array.from(u)}}function j(e,t){return Array.from(g(y(e),t))}},63543:function(e,t,r){r.d(t,{Dm:function(){return d},Hq:function(){return f},MS:function(){return h},bU:function(){return c}});var n=r(4942),a=r(1413),i=r(93169),s=r(84652),u=r(60480),o=r(76115);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}var l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return function(){return(0,a.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(l.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var u=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new u}}catch(o){return function(){return(0,a.Z)((0,n.Z)({},t,null),e)}}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=1657.f7682796.chunk.js.map