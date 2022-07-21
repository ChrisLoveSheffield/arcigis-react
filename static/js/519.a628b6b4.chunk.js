"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[519,3139,3388],{20519:function(e,r,t){t.r(r),t.d(r,{populateOperationalLayers:function(){return v}});var a=t(1413),n=t(74165),u=t(37762),i=t(15861),c=t(80987),o=(t(93169),t(66978)),s=t(19610),l=t(98995);function y(e){return f(e,"notes")}function p(e){return f(e,"route")}function f(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var d=t(43139),L=t(21371);function v(e,r,t){return m.apply(this,arguments)}function m(){return m=(0,i.Z)((0,n.Z)().mark((function e(r,t,a){var i,c,s,l,y,p,f,d,L;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:i=[],c=(0,u.Z)(t);try{for(c.s();!(s=c.n()).done;)l=s.value,y=w(l,a),"GroupLayer"===l.layerType?i.push(C(y,l,a)):i.push(y)}catch(n){c.e(n)}finally{c.f()}return e.next=7,(0,o.as)(i);case 7:p=e.sent,f=(0,u.Z)(p);try{for(f.s();!(d=f.n()).done;)!(L=d.value).value||a.filter&&!a.filter(L.value)||r.add(L.value)}catch(n){f.e(n)}finally{f.f()}case 10:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}var S={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},h={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},b={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},I={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer"},g={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function w(e,r){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,n.Z)().mark((function e(r,t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=M,e.next=3,k(r,t);case 3:return e.t1=e.sent,e.t2=r,e.t3=t,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,r,t){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)((0,n.Z)().mark((function e(r,t,a){var u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((u=new r).read(t,a.context),e.t0="group"===u.type&&A(t),!e.t0){e.next=6;break}return e.next=6,D(u,t,a.context);case 6:return e.next=8,(0,L.y)(u,a.context);case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,r){return G.apply(this,arguments)}function G(){return G=(0,i.Z)((0,n.Z)().mark((function e(r,t){var a,u,i,c,o,f,L,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.context,u=F(a),!(i=r.layerType||r.type)&&t&&t.defaultLayerType&&(i=t.defaultLayerType),c=u[i],o=c?s.T[c]:s.T.UnknownLayer,!N(r)){e.next=20;break}if(f=null===a||void 0===a?void 0:a.portal,!r.itemId){e.next=18;break}return L=new l.default({id:r.itemId,portal:f}),e.next=11,L.load();case 11:return e.next=13,(0,d.selectLayerClassPath)(L);case 13:if(e.t0=e.sent.className,e.t0){e.next=16;break}e.t0="UnknownLayer";case 16:v=e.t0,o=s.T[v];case 18:e.next=21;break;case 20:"ArcGISFeatureLayer"===i?y(r)?o=s.T.MapNotesLayer:p(r)?o=s.T.RouteLayer:A(r)&&(o=s.T.GroupLayer):r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier?o=s.T.WMTSLayer:"WFS"===i&&"2.0.0"!==r.wfsInfo.version&&(o=s.T.UnsupportedLayer);case 21:return e.abrupt("return",o());case 22:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function A(e){var r,t,a;return"ArcGISFeatureLayer"===e.layerType&&!N(e)&&(null!==(r=null===(t=e.featureCollection)||void 0===t||null===(a=t.layers)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>1}function N(e){return"Feature Collection"===e.type}function F(e){var r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=b;break;case"ground":r=h;break;default:r=S}else switch(e.layerContainerType){case"basemap":r=g;break;case"tables":r=T;break;default:r=I}return r}function C(e,r,t){return W.apply(this,arguments)}function W(){return W=(0,i.Z)((0,n.Z)().mark((function e(r,t,a){var u,i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=new c.Z,i=v(u,Array.isArray(t.layers)?t.layers:[],a),e.next=4,r;case 4:return o=e.sent,e.next=7,i;case 7:if("group"!==o.type){e.next=9;break}return e.abrupt("return",(o.layers.addMany(u),o));case 9:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function D(e,r,t){return O.apply(this,arguments)}function O(){return O=(0,i.Z)((0,n.Z)().mark((function e(r,t,u){var i,c,o,l,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.T.FeatureLayer,e.next=3,i();case 3:c=e.sent,o=t.featureCollection,l=o.showLegend,y=o.layers.map((function(e,n){var i,o,s=new c;s.read(e,u);var y=(0,a.Z)((0,a.Z)({},u),{},{ignoreDefaults:!0});return s.read({id:"".concat(r.id,"-sublayer-").concat(n),visibility:null===(i=null===(o=t.visibleLayers)||void 0===o?void 0:o.includes(n))||void 0===i||i},y),null!=l&&s.read({showLegend:l},y),s})),r.layers.addMany(y);case 8:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}},32698:function(e,r,t){t.d(r,{Y:function(){return i},h:function(){return u}});var a=t(35995),n=t(70032);function u(e){return{origin:"portal-item",url:(0,a.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,a.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return g},getNumLayersAndTables:function(){return x},load:function(){return y},preprocessFSItemData:function(){return I}});var a=t(74165),n=t(15861),u=t(10064),i=t(19610),c=t(70032),o=t(32698),s=t(21371),l=t(41226);function y(e,r){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,a.Z)().mark((function e(r,t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=6;break}return e.next=4,n.load(t);case 4:return f(r),e.abrupt("return",d(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){var r=e.instance.portalItem;if(!e.supportedTypes.includes(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function d(e,r){return L.apply(this,arguments)}function L(){return L=(0,n.Z)((0,a.Z)().mark((function e(r,t){var n,u,i,c,l,y;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.instance,u=n.portalItem,i=u.url,c=u.title,l=(0,o.h)(u),"group"!==n.type){e.next=3;break}return e.abrupt("return",(n.read({title:c},l),v(n,r)));case 3:return i&&n.read({url:i},l),e.next=6,b(r,t);case 6:return y=e.sent,e.abrupt("return",(y&&n.read(y,l),n.resourceReferences={portalItem:u,paths:l.readResourcePaths},n.read({title:c},l),(0,s.y)(n,l)));case 8:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function v(e,r){var t,c,o=e.portalItem.type;switch(o){case"Feature Service":case"Feature Collection":t=i.T.FeatureLayer;break;case"Stream Service":t=i.T.StreamLayer;break;case"Scene Service":t=i.T.SceneLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(o,"' is not supported as a 'IGroupLayer'"))}return t().then((function(e){return c=e,b(r)})).then(function(){var r=(0,n.Z)((0,a.Z)().mark((function r(t){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==o){r.next=7;break}return r.next=3,I(t,e.portalItem.url);case 3:t=r.sent,r.t0=S(e,c,t),r.next=8;break;case 7:r.t0=x(t)>0?S(e,c,t):m(e,c);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function m(e,r){return e.portalItem.url?(0,l.b)(e.portalItem.url).then((function(t){var a,n;function u(e){return{id:e.id,name:e.name}}t&&S(e,r,{layers:null===(a=t.layers)||void 0===a?void 0:a.map(u),tables:null===(n=t.tables)||void 0===n?void 0:n.map(u)})})):Promise.resolve()}function S(e,r,t){var a=t.layers||[],n=t.tables||[];"Feature Collection"===e.portalItem.type&&(a.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&n.push(e)})),a=a.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),a.reverse().forEach((function(a){var n=h(e,r,t,a);e.add(n)})),n.reverse().forEach((function(a){var n=h(e,r,t,a);e.tables.add(n)}))}function h(e,r,t,a){var n=new r({portalItem:e.portalItem.clone(),layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||c.Z.getDefault()};n.read(a,u);var i=t.showLegend;null!=i&&n.read({showLegend:i},u)}return n}function b(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then(function(){var e=(0,n.Z)((0,a.Z)().mark((function e(r){var n,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M(t)){e.next=3;break}return u=!0,e.abrupt("return",(r&&x(r)>0&&(null==t.layerId&&(t.layerId=g(r)),(n=w(r,t.layerId))&&(1===x(r)&&(u=!1),null!=r.showLegend&&(n.showLegend=r.showLegend))),u&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),n));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}function I(e,r){return T.apply(this,arguments)}function T(){return(T=(0,n.Z)((0,a.Z)().mark((function e(r,t){var n,u,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(n=r)||void 0===n?void 0:n.layers)&&null!=(null===(u=r)||void 0===u?void 0:u.tables)){e.next=5;break}return e.next=3,(0,l.b)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function w(e,r){var t=e.layers;if(t)for(var a=0;a<t.length;a++)if(t[a].id===r)return t[a];var n=e.tables;if(n)for(var u=0;u<n.length;u++)if(n[u].id===r)return n[u];return null}function x(e){var r,t,a,n;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(a=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==a?a:0)}function M(e){return"stream"!==e.type&&"layerId"in e}},73117:function(e,r,t){t.d(r,{$o:function(){return d},Kz:function(){return v},_$:function(){return p},ck:function(){return f},qj:function(){return y}});var a=t(37762),n=t(74165),u=t(15861),i=t(79803),c=t(78952),o=t(81753);function s(e){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=r.spatialReference).isWGS84){e.next=3;break}return e.abrupt("return",r.clone());case 3:if(!t.isWebMercator){e.next=5;break}return e.abrupt("return",(0,o.Sx)(r));case 5:return a=c.Z.WGS84,e.next=8,(0,i.iQ)(t,a);case 8:return e.abrupt("return",(0,i.iV)(r,a));case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function y(e,r){if(!p(e,r)){var t=e.typeKeywords;t?t.push(r):e.typeKeywords=[r]}}function p(e,r){var t;return!(null===(t=e.typeKeywords)||void 0===t||!t.includes(r))}function f(e,r){var t=e.typeKeywords;if(t){var a=t.indexOf(r);a>-1&&t.splice(a,1)}}function d(e){return L.apply(this,arguments)}function L(){return(L=(0,u.Z)((0,n.Z)().mark((function e(r){var t,u,i,c,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r.clone().normalize()).length>1){i=(0,a.Z)(t);try{for(i.s();!(c=i.n()).done;)o=c.value,u?o.width>u.width&&(u=o):u=o}catch(n){i.e(n)}finally{i.f()}}else u=t[0];return e.abrupt("return",s(u));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}},43139:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return p},selectLayerClassPath:function(){return f}});var a=t(74165),n=t(15861),u=t(1413),i=t(10064),c=t(19610),o=t(98995),s=t(33388),l=t(73117),y=t(41226);function p(e){return!e.portalItem||e.portalItem instanceof o.default||(e=(0,u.Z)((0,u.Z)({},e),{},{portalItem:new o.default(e.portalItem)})),function(e){return e.load().then(f).then(d)}(e.portalItem).then((function(r){var t=(0,u.Z)({portalItem:e.portalItem},r.properties);return new(0,r.constructor)(t)}))}function f(e){switch(e.type){case"Map Service":return function(e){return(0,y.b)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}));case"Feature Service":return function(e){return m(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return L.apply(this,arguments)}(e);case"Scene Service":return function(e){return m(e).then((function(r){if("object"==typeof r){var t,a={};if(null!=r.id?(a.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var n={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},u=0,i=Object.keys(n);u<i.length;u++){var c=i[u];if(e.typeKeywords.includes(c))return{className:n[c]}}return(0,y.b)(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:a}}))}return!1===r?(0,y.b)(e.url).then((function(e){return"Voxel"===(null===e||void 0===e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}})):{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return v.apply(this,arguments)}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new i.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,c.T[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function L(){return(L=(0,n.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!(0,l._$)(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!(0,l._$)(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.next=8,r.fetchData();case 8:return t=e.sent,e.abrupt("return",1===(0,s.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,n.Z)((0,a.Z)().mark((function e(r){var t,n,u,i,c,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(c=null!==(t=null===(n=r.typeKeywords)||void 0===n?void 0:n.map((function(e){return e.toLowerCase()})))&&void 0!==t?t:[],!c.includes("elevation 3d layer")){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!c.includes("tiled imagery")){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(e.t1=u=e.sent,e.t0=null===e.t1,e.t0){e.next=13;break}e.t0=void 0===u;case 13:if(!e.t0){e.next=17;break}e.t2=void 0,e.next=18;break;case 17:e.t2=u.layerType;case 18:if("ArcGISTiledImageServiceLayer"!==(o=e.t2)){e.next=21;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 21:if("ArcGISImageServiceLayer"!==o){e.next=23;break}return e.abrupt("return",{className:"ImageryLayer"});case 23:return e.next=25,(0,y.b)(r.url);case 25:if(e.t4=i=e.sent.cacheType,e.t3=null===e.t4,e.t3){e.next=29;break}e.t3=void 0===i;case 29:if(!e.t3){e.next=33;break}e.t5=void 0,e.next=34;break;case 33:e.t5=i.toLowerCase();case 34:return s=e.t5,e.abrupt("return","map"===s?{className:"ImageryTileLayer"}:{className:"ImageryLayer"});case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=(0,n.Z)((0,a.Z)().mark((function r(t){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=6;break}return r.t0=S,r.next=4,(0,s.preprocessFSItemData)(t,e.url);case 4:return r.t1=t=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 6:return r.abrupt("return",(0,s.getNumLayersAndTables)(t)>0?S(t):(0,y.b)(e.url).then(S));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function S(e){return 1===(0,s.getNumLayersAndTables)(e)&&{id:(0,s.getFirstLayerOrTableId)(e)}}},41226:function(e,r,t){t.d(r,{b:function(){return i}});var a=t(74165),n=t(15861),u=t(76200);function i(e){return c.apply(this,arguments)}function c(){return c=(0,n.Z)((0,a.Z)().mark((function e(r){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}}}]);
//# sourceMappingURL=519.a628b6b4.chunk.js.map