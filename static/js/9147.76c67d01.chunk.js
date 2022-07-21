"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[9147],{59147:function(e,t,r){r.d(t,{Z:function(){return A}});var o=r(74165),n=r(15861),i=r(37762),a=r(15671),s=r(43144),p=r(60136),u=r(29388),l=r(27366),y=r(44055),d=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),c=r(76200),f=r(10064),v=r(43404),b=r(54472),h=r(32718),m=r(92026),g=r(67426),C=r(49861),_=(r(63780),r(93169),r(25243),r(27135)),Z=r(38511),S=r(69912),x=r(53866),I=r(78952),F=r(53894),k=r(58550),T=r(96978),w=r(45948),j=r(25610),L=r(52410),O=r(30494),q=r(34207),R=r(21149),P=r(81085),Q=r(64575),U=h.Z.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),D=(0,j.v)(),N=function(e){(0,p.Z)(r,e);var t=(0,u.Z)(r);function r(e){var o;return(0,a.Z)(this,r),(o=t.call(this,e)).type="building-component",o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.serviceUpdateTimeStamp=null,o.fields=null,o.associatedLayer=null,o.outFields=null,o.listMode="show",o.renderer=null,o.definitionExpression=null,o.popupEnabled=!0,o.popupTemplate=null,o.layerType="3d-object",o}return(0,s.Z)(r,[{key:"parsedUrl",get:function(){return this.layer?{path:"".concat(this.layer.parsedUrl.path,"/sublayers/").concat(this.id),query:this.layer.parsedUrl.query}:null}},{key:"fieldsIndex",get:function(){return new L.Z(this.fields)}},{key:"readAssociatedLayer",value:function(e,t){var r=this.layer.associatedFeatureServiceItem,o=t.associatedLayerID;return(0,m.pC)(r)&&"number"==typeof o?new F.default({portalItem:r,layerId:o}):null}},{key:"objectIdField",get:function(){if(null!=this.fields){var e,t=(0,i.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var r=e.value;if("oid"===r.type)return r.name}}catch(o){t.e(o)}finally{t.f()}}return null}},{key:"displayField",get:function(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"apiKey",get:function(){return this.layer.apiKey}},{key:"fullExtent",get:function(){return this.layer.fullExtent}},{key:"spatialReference",get:function(){return this.layer.spatialReference}},{key:"version",get:function(){return this.layer.version}},{key:"elevationInfo",get:function(){return this.layer.elevationInfo}},{key:"minScale",get:function(){return this.layer.minScale}},{key:"maxScale",get:function(){return this.layer.maxScale}},{key:"effectiveScaleRange",get:function(){return this.layer.effectiveScaleRange}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"load",value:function(e){var t=this,r=(0,m.pC)(e)?e.signal:null,o=this._fetchService(r).then((function(){t.indexInfo=(0,O.T)(t.parsedUrl.path,t.rootNode,t.nodePages,t.apiKey,U,r)}));return this.addResolvingPromise(o),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){return(0,P.eZ)(this,e)}},{key:"_fetchService",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service",url:this.parsedUrl});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,o,n,i,a=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(o=r.domains)||void 0===o?void 0:o[e];return a&&"inherited"!==a.type?a:null!==(n=null===(i=this.getField(e))||void 0===i?void 0:i.domain)&&void 0!==n?n:null}},{key:"getFeatureType",value:function(e){return e&&(0,m.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.types:[]}},{key:"typeIdField",get:function(){return(0,m.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"geometryType",get:function(){return"3d-object"===this.layerType?"mesh":"point"}},{key:"profile",get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}},{key:"capabilities",get:function(){var e=(0,m.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:T.C,t=e.query,r=e.data;return{query:t,data:{supportsZ:r.supportsZ,supportsM:r.supportsM,isVersioned:r.isVersioned}}}},{key:"createQuery",value:function(){var e=new R.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,o=(0,i.Z)(e.features);try{for(o.s();!(t=o.n()).done;){var n=t.value;n.layer=r.layer,n.sourceLayer=r}}catch(a){o.e(a)}finally{o.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryObjectIds(e||r.createQuery(),t)}))}},{key:"getFieldUsageInfo",value:function(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,m.pC)(this.associatedLayer)}}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return(0,m.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!(0,m.Wi)(this.associatedLayer)){e.next=4;break}throw new f.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new f.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()}]),r}(b.Z.LoadableMixin((0,g.v)(k.Z)));(0,l._)([(0,C.Cb)({readOnly:!0})],N.prototype,"parsedUrl",null),(0,l._)([(0,C.Cb)({type:q.U4,readOnly:!0})],N.prototype,"nodePages",void 0),(0,l._)([(0,C.Cb)({type:[q.QI],readOnly:!0})],N.prototype,"materialDefinitions",void 0),(0,l._)([(0,C.Cb)({type:[q.Yh],readOnly:!0})],N.prototype,"textureSetDefinitions",void 0),(0,l._)([(0,C.Cb)({type:[q.H3],readOnly:!0})],N.prototype,"geometryDefinitions",void 0),(0,l._)([(0,C.Cb)({readOnly:!0})],N.prototype,"serviceUpdateTimeStamp",void 0),(0,l._)([(0,C.Cb)({readOnly:!0})],N.prototype,"store",void 0),(0,l._)([(0,C.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],N.prototype,"rootNode",void 0),(0,l._)([(0,C.Cb)({readOnly:!0})],N.prototype,"attributeStorageInfo",void 0),(0,l._)([(0,C.Cb)(D.fields)],N.prototype,"fields",void 0),(0,l._)([(0,C.Cb)({readOnly:!0})],N.prototype,"fieldsIndex",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:F.default})],N.prototype,"associatedLayer",void 0),(0,l._)([(0,Z.r)("service","associatedLayer",["associatedLayerID"])],N.prototype,"readAssociatedLayer",null),(0,l._)([(0,C.Cb)(D.outFields)],N.prototype,"outFields",void 0),(0,l._)([(0,C.Cb)({type:String,readOnly:!0})],N.prototype,"objectIdField",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:String,json:{read:!1}})],N.prototype,"displayField",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:String})],N.prototype,"apiKey",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:x.Z})],N.prototype,"fullExtent",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:I.Z})],N.prototype,"spatialReference",null),(0,l._)([(0,C.Cb)({readOnly:!0})],N.prototype,"version",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:Q.ZP})],N.prototype,"elevationInfo",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:Number})],N.prototype,"minScale",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:Number})],N.prototype,"maxScale",null),(0,l._)([(0,C.Cb)({readOnly:!0,type:Number})],N.prototype,"effectiveScaleRange",null),(0,l._)([(0,C.Cb)({type:["hide","show"],json:{write:!0}})],N.prototype,"listMode",void 0),(0,l._)([(0,C.Cb)({types:d.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],N.prototype,"renderer",void 0),(0,l._)([(0,C.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],N.prototype,"definitionExpression",void 0),(0,l._)([(0,C.Cb)(w.C_)],N.prototype,"popupEnabled",void 0),(0,l._)([(0,C.Cb)({type:y.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],N.prototype,"popupTemplate",void 0),(0,l._)([(0,C.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],N.prototype,"normalReferenceFrame",void 0),(0,l._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],N.prototype,"defaultPopupTemplate",null),(0,l._)([(0,C.Cb)()],N.prototype,"types",null),(0,l._)([(0,C.Cb)()],N.prototype,"typeIdField",null),(0,l._)([(0,C.Cb)({json:{write:!1}}),(0,_.J)(new v.X({"3DObject":"3d-object",Point:"point"}))],N.prototype,"layerType",void 0),(0,l._)([(0,C.Cb)()],N.prototype,"geometryType",null),(0,l._)([(0,C.Cb)()],N.prototype,"profile",null),(0,l._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],N.prototype,"capabilities",null);var A=N=(0,l._)([(0,S.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],N)},58550:function(e,t,r){r.d(t,{Z:function(){return b}});var o=r(15671),n=r(43144),i=r(60136),a=r(29388),s=r(27366),p=r(79056),u=r(97642),l=r(49861),y=(r(63780),r(93169),r(25243)),d=r(38511),c=r(69912),f=r(45948),v=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).title="",n.id=-1,n.modelName=null,n.isEmpty=null,n.visible=!0,n.opacity=1,n}return(0,n.Z)(r,[{key:"readTitle",value:function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}},{key:"readIdOnlyOnce",value:function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}}]),r}((0,p.IG)(u.w));(0,s._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],v.prototype,"title",void 0),(0,s._)([(0,d.r)("service","title",["alias","name"])],v.prototype,"readTitle",null),(0,s._)([(0,l.Cb)()],v.prototype,"layer",void 0),(0,s._)([(0,l.Cb)({type:y.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],v.prototype,"id",void 0),(0,s._)([(0,d.r)("service","id")],v.prototype,"readIdOnlyOnce",null),(0,s._)([(0,l.Cb)((0,f.Lx)(String))],v.prototype,"modelName",void 0),(0,s._)([(0,l.Cb)((0,f.Lx)(Boolean))],v.prototype,"isEmpty",void 0),(0,s._)([(0,l.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],v.prototype,"visible",void 0),(0,s._)([(0,l.Cb)({type:Number,json:{write:!0}})],v.prototype,"opacity",void 0);var b=v=(0,s._)([(0,c.j)("esri.layers.buildingSublayers.BuildingSublayer")],v)},34207:function(e,t,r){r.d(t,{H3:function(){return _},QI:function(){return v},U4:function(){return d},Yh:function(){return h}});var o=r(43144),n=r(15671),i=r(60136),a=r(29388),s=r(27366),p=r(46784),u=r(49861),l=(r(63780),r(93169),r(25243),r(27135)),y=r(69912),d=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:Number})],d.prototype,"nodesPerPage",void 0),(0,s._)([(0,u.Cb)({type:Number})],d.prototype,"rootIndex",void 0),(0,s._)([(0,u.Cb)({type:String})],d.prototype,"lodSelectionMetricType",void 0),d=(0,s._)([(0,y.j)("esri.layer.support.I3SNodePageDefinition")],d);var c=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).factor=1,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],c.prototype,"id",void 0),(0,s._)([(0,u.Cb)({type:Number})],c.prototype,"factor",void 0),c=(0,s._)([(0,y.j)("esri.layer.support.I3SMaterialTexture")],c);var f=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:[Number]})],f.prototype,"baseColorFactor",void 0),(0,s._)([(0,u.Cb)({type:c})],f.prototype,"baseColorTexture",void 0),(0,s._)([(0,u.Cb)({type:c})],f.prototype,"metallicRoughnessTexture",void 0),(0,s._)([(0,u.Cb)({type:Number})],f.prototype,"metallicFactor",void 0),(0,s._)([(0,u.Cb)({type:Number})],f.prototype,"roughnessFactor",void 0),f=(0,s._)([(0,y.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],f);var v=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({opaque:"opaque",mask:"mask",blend:"blend"})],v.prototype,"alphaMode",void 0),(0,s._)([(0,u.Cb)({type:Number})],v.prototype,"alphaCutoff",void 0),(0,s._)([(0,u.Cb)({type:Boolean})],v.prototype,"doubleSided",void 0),(0,s._)([(0,l.J)({none:"none",back:"back",front:"front"})],v.prototype,"cullFace",void 0),(0,s._)([(0,u.Cb)({type:c})],v.prototype,"normalTexture",void 0),(0,s._)([(0,u.Cb)({type:c})],v.prototype,"occlusionTexture",void 0),(0,s._)([(0,u.Cb)({type:c})],v.prototype,"emissiveTexture",void 0),(0,s._)([(0,u.Cb)({type:[Number]})],v.prototype,"emissiveFactor",void 0),(0,s._)([(0,u.Cb)({type:f})],v.prototype,"pbrMetallicRoughness",void 0),v=(0,s._)([(0,y.j)("esri.layer.support.I3SMaterialDefinition")],v);var b=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],b.prototype,"name",void 0),(0,s._)([(0,l.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],b.prototype,"format",void 0),b=(0,s._)([(0,y.j)("esri.layer.support.I3STextureFormat")],b);var h=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:[b]})],h.prototype,"formats",void 0),(0,s._)([(0,u.Cb)({type:Boolean})],h.prototype,"atlas",void 0),h=(0,s._)([(0,y.j)("esri.layer.support.I3STextureSetDefinition")],h);var m=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],m.prototype,"type",void 0),(0,s._)([(0,u.Cb)({type:Number})],m.prototype,"component",void 0),m=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryAttribute")],m);var g=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({draco:"draco"})],g.prototype,"encoding",void 0),(0,s._)([(0,u.Cb)({type:[String]})],g.prototype,"attributes",void 0),g=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryCompressedAttributes")],g);var C=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).offset=0,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:Number})],C.prototype,"offset",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"position",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"normal",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"uv0",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"color",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"uvRegion",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"featureId",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"faceRange",void 0),(0,s._)([(0,u.Cb)({type:g})],C.prototype,"compressedAttributes",void 0),C=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryBuffer")],C);var _=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({triangle:"triangle"})],_.prototype,"topology",void 0),(0,s._)([(0,u.Cb)()],_.prototype,"geometryBuffers",void 0),_=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryDefinition")],_)},96978:function(e,t,r){r.d(t,{C:function(){return o}});var o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=9147.76c67d01.chunk.js.map