"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[9192],{97613:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),s=n(27366),l=n(84314),u=n(85015),p=n(11582),y=n(46784),f=n(92026),c=n(49861),d=(n(63780),n(93169),n(25243),n(69912)),v=n(66576),h=n(7882),b=n(64575),g=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).position=null,i.elevationInfo=null,i.feature=null,i}return(0,i.Z)(n,[{key:"equals",value:function(e){return(0,f._W)(this.position,e.position)&&(0,f._W)(this.elevationInfo,e.elevationInfo)&&(0,l.kk)(this.feature,e.feature)}}]),n}((0,y.eC)((0,p.J)(u.Z)));(0,s._)([(0,c.Cb)({type:h.Z}),(0,v.B)()],g.prototype,"position",void 0),(0,s._)([(0,c.Cb)({type:b.ZP}),(0,v.B)()],g.prototype,"elevationInfo",void 0),(0,s._)([(0,c.Cb)(l.rX)],g.prototype,"feature",void 0);var C=g=(0,s._)([(0,d.j)("esri.analysis.LineOfSightAnalysisObserver")],g)},33985:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),s=n(27366),l=n(84314),u=n(11582),p=n(46784),y=n(92026),f=n(49861),c=(n(63780),n(93169),n(25243),n(69912)),d=n(66576),v=n(7882),h=n(64575),b=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).position=null,i.elevationInfo=null,i.feature=null,i}return(0,i.Z)(n,[{key:"equals",value:function(e){return(0,y._W)(this.position,e.position)&&(0,y._W)(this.elevationInfo,e.elevationInfo)&&(0,l.kk)(this.feature,e.feature)}}]),n}((0,p.eC)(u.j));(0,s._)([(0,f.Cb)({type:v.Z}),(0,d.B)()],b.prototype,"position",void 0),(0,s._)([(0,f.Cb)({type:h.ZP}),(0,d.B)()],b.prototype,"elevationInfo",void 0),(0,s._)([(0,f.Cb)(l.rX)],b.prototype,"feature",void 0);var g=b=(0,s._)([(0,c.j)("esri.analysis.LineOfSightAnalysisTarget")],b)},84314:function(e,t,n){n.d(t,{kk:function(){return i},pD:function(){return o},rX:function(){return a}});var r=n(92026);function i(e,t){return o(e)===o(t)}function o(e){if((0,r.Wi)(e))return null;var t,n=null!=e.layer?e.layer.id:"";return null==(t=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid)?null:"o-".concat(n,"-").concat(t)}var a={json:{write:{writer:function(e,t){var n;(0,r.Wi)(e)||null==(null===(n=e.layer)||void 0===n?void 0:n.objectIdField)||null==e.attributes||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}}},39192:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(74165),i=n(15861),o=n(15671),a=n(43144),s=n(60136),l=n(29388),u=n(27366),p=n(37762),y=n(80573),f=n(97613),c=n(33985),d=n(80987),v=n(60354),h=n(92026),b=n(94172),g=n(49861),C=(n(63780),n(93169),n(25243),n(69912)),_=n(79803),Z=n(41414),w=n(74509),k=d.Z.ofType(c.Z),j=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).type="line-of-sight",r.observer=null,r.extent=null,r.nonEditableMessage="Assign an observer location to the analysis to allow editing.",r}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this;this.own((0,b.YP)((function(){return e._computeExtent()}),(function(t){((0,h.Wi)(t)||(0,h.Wi)(t.pending))&&e._set("extent",(0,h.pC)(t)?t.extent:null)}),b.tX))}},{key:"targets",get:function(){return this._get("targets")||new k},set:function(e){this._set("targets",(0,v.Z)(e,this.targets,k))}},{key:"spatialReference",get:function(){return(0,h.pC)(this.observer)&&(0,h.pC)(this.observer.position)?this.observer.position.spatialReference:null}},{key:"requiredPropertiesForEditing",get:function(){return[(0,h.yw)(this.observer,(function(e){return e.position}))]}},{key:"waitComputeExtent",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._computeExtent(),e.abrupt("return",(0,h.pC)(t)?(0,h.Wg)(t.pending):null);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_computeExtent",value:function(){var e=this.spatialReference;if((0,h.Wi)(this.observer)||(0,h.Wi)(this.observer.position)||(0,h.Wi)(e))return null;var t,n=function(e){return"absolute-height"===(0,w.VW)(e.position,e.elevationInfo)},r=this.observer.position,i=(0,Z.al)(r.x,r.y,r.z,r.x,r.y,r.z),o=(0,p.Z)(this.targets);try{for(o.s();!(t=o.n()).done;){var a=t.value;if((0,h.pC)(a.position)){var s=(0,_.dz)(a.position,e);if((0,h.pC)(s.pending))return{pending:s.pending,extent:null};if((0,h.pC)(s.geometry)){var l=s.geometry,u=l.x,y=l.y,f=l.z;(0,Z.pp)(i,[u,y,f])}}}}catch(d){o.e(d)}finally{o.f()}var c=(0,Z.HH)(i,e);return n(this.observer)&&this.targets.every(n)||(c.zmin=null,c.zmax=null),{pending:null,extent:c}}},{key:"clear",value:function(){this.observer=null,this.targets.removeAll()}}]),n}(y.Z);(0,u._)([(0,g.Cb)({type:["line-of-sight"]})],j.prototype,"type",void 0),(0,u._)([(0,g.Cb)({type:f.Z,json:{read:!0,write:!0}})],j.prototype,"observer",void 0),(0,u._)([(0,g.Cb)({cast:v.R,type:k,nonNullable:!0,json:{read:!0,write:!0}})],j.prototype,"targets",null),(0,u._)([(0,g.Cb)({value:null,readOnly:!0})],j.prototype,"extent",void 0),(0,u._)([(0,g.Cb)({readOnly:!0})],j.prototype,"spatialReference",null),(0,u._)([(0,g.Cb)({readOnly:!0})],j.prototype,"requiredPropertiesForEditing",null),(0,u._)([(0,g.Cb)({readOnly:!0})],j.prototype,"nonEditableMessage",void 0);var I=j=(0,u._)([(0,C.j)("esri.analysis.LineOfSightAnalysis")],j),m=n(97642),x=n(30651),O=n(6061),W=d.Z.ofType(c.Z),E=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).type="line-of-sight",r.operationalLayerType="LineOfSightLayer",r.analysis=new I,r.opacity=1,r}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this;this.own((0,b.YP)((function(){return e.analysis}),(function(t,n){(0,h.pC)(n)&&n.parent===e&&(n.parent=null),(0,h.pC)(t)&&(t.parent=e)}),b.tX))}},{key:"load",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",((0,h.pC)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"observer",get:function(){return(0,h.yw)(this.analysis,(function(e){return e.observer}))},set:function(e){(0,h.yw)(this.analysis,(function(t){return t.observer=e}))}},{key:"targets",get:function(){return(0,h.pC)(this.analysis)?this.analysis.targets:null},set:function(e){(0,h.yw)(this.analysis,(function(t){return t.targets=e}))}},{key:"fullExtent",get:function(){return(0,h.pC)(this.analysis)?this.analysis.extent:null}},{key:"spatialReference",get:function(){return(0,h.pC)(this.analysis)?this.analysis.spatialReference:null}},{key:"removeAnalysis",value:function(e){this.analysis===e&&(this.analysis=new I)}}]),n}((0,O.q)((0,m.R)(x.Z)));(0,u._)([(0,g.Cb)({json:{read:!1},readOnly:!0})],E.prototype,"type",void 0),(0,u._)([(0,g.Cb)({type:["LineOfSightLayer"]})],E.prototype,"operationalLayerType",void 0),(0,u._)([(0,g.Cb)({type:f.Z,json:{read:!0,write:{ignoreOrigin:!0}}})],E.prototype,"observer",null),(0,u._)([(0,g.Cb)({type:W,json:{read:!0,write:{ignoreOrigin:!0}}})],E.prototype,"targets",null),(0,u._)([(0,g.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],E.prototype,"analysis",void 0),(0,u._)([(0,g.Cb)({readOnly:!0})],E.prototype,"fullExtent",null),(0,u._)([(0,g.Cb)({readOnly:!0})],E.prototype,"spatialReference",null),(0,u._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],E.prototype,"opacity",void 0),(0,u._)([(0,g.Cb)({type:["show","hide"]})],E.prototype,"listMode",void 0);var L=E=(0,u._)([(0,C.j)("esri.layers.LineOfSightLayer")],E)}}]);
//# sourceMappingURL=9192.bd7c4788.chunk.js.map