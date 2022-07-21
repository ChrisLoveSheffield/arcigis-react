"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[9583],{19583:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var i=t(74165),a=t(15861),n=t(1413),o=t(15671),s=t(43144),u=t(60136),l=t(29388),p=t(27366),c=t(76200),y=t(62044),d=t(10064),h=t(41691),v=t(93002),m=t(92026),f=t(97642),b=t(66978),g=t(49861),Z=(t(63780),t(93169),t(25243)),x=t(38511),S=t(69912),w=t(31201),_=t(25265),k=t(53866),C=t(82582),I=t(30651),O=t(27961),M=t(6741),E=t(11936),R=t(6693),T=t(46671),L=t(6061),N=t(29598),P=t(71684),j=t(56811),J=t(18870),q=t(99063),F=t(45948),U=t(44041),A=t(77990),V=t(58132),z=t(26704),D=function(e){(0,u.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=r.call.apply(r,[this].concat(a))).datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return(0,s.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,n.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,m.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,r){var t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}},{key:"writeSublayers",value:function(e,r,t,i){if(this.loaded&&e){var a=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var s=(0,_.M9)(i.origin);if(s===_.s3.PORTAL_ITEM){var u=this.createSublayersForOrigin("service").sublayers;o=(0,V.QV)(a,u,_.s3.SERVICE)}else if(s>_.s3.PORTAL_ITEM){var l=this.createSublayersForOrigin("portal-item");o=(0,V.QV)(a,l.sublayers,(0,_.M9)(l.origin))}}var p=[],c=(0,n.Z)({writeSublayerStructure:o},i),y=o;a.forEach((function(e){var r=e.write({},c);p.push(r),y=y||"user"===e.originOf("visible")})),p.some((function(e){return Object.keys(e).length>1}))&&(r.layers=p),y&&(r.visibleLayers=a.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,r,t,i){var a=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new U.R({layer:this,floors:null===i||void 0===i?void 0:i.floors,scale:(0,C.yZ)({extent:e,width:r})*a}),s=o.toJSON();o.destroy();var u=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,p=l.wkid||JSON.stringify(l.toJSON());s.dpi*=a;var c={};if(null!==i&&void 0!==i&&i.timeExtent){var y=i.timeExtent.toJSON(),d=y.start,h=y.end;c.time=d&&h&&d===h?""+d:"".concat(null==d?"null":d,",").concat(null==h?"null":h)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return(0,n.Z)((0,n.Z)((0,n.Z)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:r+","+t},s),u),c)}},{key:"fetchImage",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r,t,a,o){var s,u,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u={responseType:"image",signal:null!==(s=null===o||void 0===o?void 0:o.signal)&&void 0!==s?s:null,query:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},this.parsedUrl.query),this.createExportImageParameters(r,t,a,o)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},l=this.parsedUrl.path+"/export",null==u.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=3;break}throw new d.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:u.query});case 3:return e.abrupt("return",(0,c.default)(l,u).then((function(e){return e.data})).catch((function(e){if((0,b.D_)(e))throw e;throw new d.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(l),{error:e})})));case 4:case"end":return e.stop()}}),e,this)})));return function(r,t,i,a){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,t,a,o,s,u,l,p,d=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.length>0&&void 0!==d[0]?d[0]:{},t=(0,n.Z)((0,n.Z)({},r),{},{query:(0,n.Z)((0,n.Z)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,(0,c.default)(this.url,t);case 4:return a=e.sent,o=a.data,s=o.extent,u=o.fullExtent,l=o.timeExtent,p=s||u,e.abrupt("return",{fullExtent:p&&k.Z.fromJSON(p),timeExtent:l&&y.Z.fromJSON({start:l[0],end:l[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return(0,v.G)(this,(function(r){r(e.allSublayers)}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,z.D)(this,e)}},{key:"_fetchService",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var t,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,(0,c.default)(this.parsedUrl.path,{query:(0,n.Z)((0,n.Z)((0,n.Z)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:r});case 4:t=e.sent,a=t.data,t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),t}((0,R.h)((0,q.n)((0,j.M)((0,J.x)((0,M.O)((0,E.Y)((0,L.q)((0,N.I)((0,f.R)((0,P.Q)((0,O.V)((0,T.N)((0,h.p)(I.Z))))))))))))));(0,p._)([(0,g.Cb)({type:Boolean})],D.prototype,"datesInUnknownTimezone",void 0),(0,p._)([(0,g.Cb)()],D.prototype,"dpi",void 0),(0,p._)([(0,g.Cb)()],D.prototype,"gdbVersion",void 0),(0,p._)([(0,g.Cb)()],D.prototype,"imageFormat",void 0),(0,p._)([(0,x.r)("imageFormat",["supportedImageFormatTypes"])],D.prototype,"readImageFormat",null),(0,p._)([(0,g.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],D.prototype,"imageMaxHeight",void 0),(0,p._)([(0,g.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],D.prototype,"imageMaxWidth",void 0),(0,p._)([(0,g.Cb)()],D.prototype,"imageTransparency",void 0),(0,p._)([(0,g.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],D.prototype,"isReference",void 0),(0,p._)([(0,g.Cb)({json:{read:!1,write:!1}})],D.prototype,"labelsVisible",void 0),(0,p._)([(0,g.Cb)({type:["ArcGISMapServiceLayer"]})],D.prototype,"operationalLayerType",void 0),(0,p._)([(0,g.Cb)({json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),(0,p._)([(0,g.Cb)()],D.prototype,"sourceJSON",void 0),(0,p._)([(0,g.Cb)({json:{write:{ignoreOrigin:!0}}})],D.prototype,"sublayers",void 0),(0,p._)([(0,w.c)("sublayers",{layers:{type:[A.Z]},visibleLayers:{type:[Z.z8]}})],D.prototype,"writeSublayers",null),(0,p._)([(0,g.Cb)({type:["show","hide","hide-children"]})],D.prototype,"listMode",void 0),(0,p._)([(0,g.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],D.prototype,"type",void 0),(0,p._)([(0,g.Cb)(F.HQ)],D.prototype,"url",void 0);var G=D=(0,p._)([(0,S.j)("esri.layers.MapImageLayer")],D)}}]);
//# sourceMappingURL=9583.15050ef4.chunk.js.map