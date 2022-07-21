"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[1573],{13491:function(e,t,n){n.d(t,{Q:function(){return h}});var r=n(60136),i=n(29388),a=n(37762),s=n(15671),u=n(43144),o=n(63780),l=n(92026),c=n(27546),d=n(36231),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;(0,s.Z)(this,e),this.compareMinX=m,this.compareMinY=y,this._toBBox=function(e){return e},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}return(0,u.Z)(e,[{key:"destroy",value:function(){this.clear(),w.prune(),B.prune(),F.prune(),M.prune()}},{key:"all",value:function(e){this._all(this.data,e)}},{key:"search",value:function(e,t){var n=this.data,r=this._toBBox;if(I(e,n))for(w.clear();n;){for(var i=0,a=n.children.length;i<a;i++){var s=n.children[i],u=n.leaf?r(s):s;I(e,u)&&(n.leaf?t(s):k(e,u)?this._all(s,t):w.push(s))}n=w.pop()}}},{key:"collides",value:function(e){var t=this.data,n=this._toBBox;if(!I(e,t))return!1;for(w.clear();t;){for(var r=0,i=t.children.length;r<i;r++){var a=t.children[r],s=t.leaf?n(a):a;if(I(e,s)){if(t.leaf||k(e,s))return!0;w.push(a)}}t=w.pop()}return!1}},{key:"load",value:function(e){if(!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var r=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this}},{key:"insert",value:function(e){return e&&this._insert(e,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new S([]),this}},{key:"remove",value:function(e){if(!e)return this;var t,n=this.data,r=null,i=0,a=!1,s=this._toBBox(e);for(F.clear(),M.clear();n||F.length>0;){var u;if(n||(n=(0,l.j0)(F.pop()),r=F.data[F.length-1],i=null!==(u=M.pop())&&void 0!==u?u:0,a=!0),n.leaf&&-1!==(t=(0,o.cq)(n.children,e,n.children.length,n.indexHint)))return n.children.splice(t,1),F.push(n),this._condense(F),this;a||n.leaf||!k(n,s)?r?(i++,n=r.children[i],a=!1):n=null:(F.push(n),M.push(i),i=0,r=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(e){return this.data=e,this}},{key:"_all",value:function(e,t){var n=e;for(B.clear();n;){var r;if(!0===n.leaf){var i,s=(0,a.Z)(n.children);try{for(s.s();!(i=s.n()).done;){t(i.value)}}catch(u){s.e(u)}finally{s.f()}}else B.pushArray(n.children);n=null!==(r=B.pop())&&void 0!==r?r:null}}},{key:"_build",value:function(e,t,n,r){var i=n-t+1,a=this._maxEntries;if(i<=a){var s=new S(e.slice(t,n+1));return f(s,this._toBBox),s}r||(r=Math.ceil(Math.log(i)/Math.log(a)),a=Math.ceil(i/Math.pow(a,r-1)));var u=new N([]);u.height=r;var o=Math.ceil(i/a),l=o*Math.ceil(Math.sqrt(a));Z(e,t,n,l,this.compareMinX);for(var c=t;c<=n;c+=l){var d=Math.min(c+l-1,n);Z(e,c,d,o,this.compareMinY);for(var h=c;h<=d;h+=o){var p=Math.min(h+o-1,d);u.children.push(this._build(e,h,p,r-1))}}return f(u,this._toBBox),u}},{key:"_chooseSubtree",value:function(e,t,n,r){for(;r.push(t),!0!==t.leaf&&r.length-1!==n;){for(var i=void 0,a=1/0,s=1/0,u=0,o=t.children.length;u<o;u++){var l=t.children[u],c=g(l),d=x(e,l)-c;d<s?(s=d,a=c<a?c:a,i=l):d===s&&c<a&&(a=c,i=l)}t=i||t.children[0]}return t}},{key:"_insert",value:function(e,t,n){var r=this._toBBox,i=n?e:r(e);F.clear();var a=this._chooseSubtree(i,this.data,t,F);for(a.children.push(e),v(a,i);t>=0&&F.data[t].children.length>this._maxEntries;)this._split(F,t),t--;this._adjustParentBBoxes(i,F,t)}},{key:"_split",value:function(e,t){var n=e.data[t],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var a=this._chooseSplitIndex(n,i,r);if(a){var s=n.children.splice(a,n.children.length-a),u=n.leaf?new S(s):new N(s);u.height=n.height,f(n,this._toBBox),f(u,this._toBBox),t?e.data[t-1].children.push(u):this._splitRoot(n,u)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(e,t){this.data=new N([e,t]),this.data.height=e.height+1,f(this.data,this._toBBox)}},{key:"_chooseSplitIndex",value:function(e,t,n){var r,i,a;r=i=1/0;for(var s=t;s<=n-t;s++){var u=p(e,0,s,this._toBBox),o=p(e,s,n,this._toBBox),l=b(u,o),c=g(u)+g(o);l<r?(r=l,a=s,i=c<i?c:i):l===r&&c<i&&(i=c,a=s)}return a}},{key:"_chooseSplitAxis",value:function(e,t,n){var r=e.leaf?this.compareMinX:m,i=e.leaf?this.compareMinY:y;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,i)&&e.children.sort(r)}},{key:"_allDistMargin",value:function(e,t,n,r){e.children.sort(r);for(var i=this._toBBox,a=p(e,0,t,i),s=p(e,n-t,n,i),u=_(a)+_(s),o=t;o<n-t;o++){var l=e.children[o];v(a,e.leaf?i(l):l),u+=_(a)}for(var c=n-t-1;c>=t;c--){var d=e.children[c];v(s,e.leaf?i(d):d),u+=_(s)}return u}},{key:"_adjustParentBBoxes",value:function(e,t,n){for(var r=n;r>=0;r--)v(t.data[r],e)}},{key:"_condense",value:function(e){for(var t=e.length-1;t>=0;t--){var n=e.data[t];if(0===n.children.length)if(t>0){var r=e.data[t-1],i=r.children;i.splice((0,o.cq)(i,n,i.length,r.indexHint),1)}else this.clear();else f(n,this._toBBox)}}},{key:"_initFormat",value:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}]),e}();function f(e,t){p(e,0,e.children.length,t,e)}function p(e,t,n,r,i){i||(i=new S([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var a,s=t;s<n;s++)a=e.children[s],v(i,e.leaf?r(a):a);return i}function v(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function m(e,t){return e.minX-t.minX}function y(e,t){return e.minY-t.minY}function g(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function _(e){return e.maxX-e.minX+(e.maxY-e.minY)}function x(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function b(e,t){var n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),a=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,a-r)}function k(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function I(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function Z(e,t,n,r,i){for(var a=[t,n];a.length;){var s=(0,l.j0)(a.pop()),u=(0,l.j0)(a.pop());if(!(s-u<=r)){var o=u+Math.ceil((s-u)/r/2)*r;(0,d.q)(e,o,u,s,i),a.push(u,o,o,s)}}}var w=new c.Z,B=new c.Z,F=new c.Z,M=new c.Z({deallocator:void 0}),E=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments)).height=1,e.indexHint=new o.SO,e}return(0,u.Z)(n)}((0,u.Z)((function e(){(0,s.Z)(this,e),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}))),S=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this)).children=e,r.leaf=!0,r}return(0,u.Z)(n)}(E),N=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this)).children=e,r.leaf=!1,r}return(0,u.Z)(n)}(E)},66020:function(e,t,n){n.d(t,{H:function(){return d}});var r=n(37762),i=n(15671),a=n(43144),s=n(93169),u=n(13491),o=n(65156),l={minX:0,minY:0,maxX:0,maxY:0};function c(e,t,n){(function(e){l.minX=e[0],l.minY=e[1],l.maxX=e[2],l.maxY=e[3]})(t),e.search(l,n)}var d=function(){function e(){var t=this;(0,i.Z)(this,e),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new u.Q(9,(0,s.Z)("esri-csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,r){e[n++]=r})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return(0,a.Z)(e,[{key:"fullBounds",get:function(){if(!this._boundsById.size)return null;var e,t=(0,o.cS)(),n=(0,r.Z)(this._boundsById.values());try{for(n.s();!(e=n.n()).done;){var i=e.value;i&&(t[0]=Math.min(i[0],t[0]),t[1]=Math.min(i[1],t[1]),t[2]=Math.max(i[2],t[2]),t[3]=Math.max(i[3],t[3]))}}catch(a){n.e(a)}finally{n.f()}return t}},{key:"valid",get:function(){return!this._indexInvalid}},{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._loadIndex(),c(this._index,e,(function(e){return t(n._idByBounds.get(e))}))}},{key:"get",value:function(e){return this._boundsById.get(e)}},{key:"has",value:function(e){return this._boundsById.has(e)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),e}()},68928:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(37762),i=n(15671),a=n(43144),s=n(10064),u=n(91505),o=n(32718),l=n(92026),c=n(41414),d=n(65156),h=n(83406),f=n(66020),p=n(77835),v=function(){function e(t){(0,i.Z)(this,e),this.geometryInfo=t,this._boundsStore=new f.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new u.Z,this.featureAdapter=p.n}return(0,a.Z)(e,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){return this._boundsStore.fullBounds}},{key:"storeStatistics",get:function(){var e=0;return this._featuresById.forEach((function(t){(0,l.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(e){this._add(e),this._emitChanged()}},{key:"addMany",value:function(e){var t,n=(0,r.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._add(i)}}catch(a){n.e(a)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}},{key:"removeManyById",value:function(e){this._boundsStore.invalidateIndex();var t,n=(0,r.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=this._featuresById.get(i);a&&this._remove(a)}}catch(s){n.e(s)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(e,t,n){var i,a=(0,r.Z)(e);try{for(a.s();!(i=a.n()).done;){var s=i.value,u=this._boundsStore.get(s.objectId);u&&t((0,c.JR)(n,u))}}catch(o){a.e(o)}finally{a.f()}}},{key:"getFeature",value:function(e){return this._featuresById.get(e)}},{key:"has",value:function(e){return this._featuresById.has(e)}},{key:"toArray",value:function(){return Array.from(this._featuresById.values())}},{key:"forEach",value:function(e){this._featuresById.forEach((function(t){return e(t)}))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var e=this,t=!1;this._featuresById.forEach((function(n,r){e._markedIds.has(r)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(e){if(e){var t=e.objectId;if(null!=t){var n,r=this._featuresById.get(t);if(this._markedIds.add(t),r?(e.displayId=r.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,l.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,l.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=(0,h.$)((0,l.pC)(n)?n:(0,d.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,l.pC)(n)&&this._boundsStore.set(t,n),this._featuresById.set(t,e)}else o.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}))}}},{key:"_remove",value:function(e){return(0,l.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}]),e}()},77835:function(e,t,n){n.d(t,{n:function(){return u}});var r=n(92026),i=n(12717),a=n(3182),s=n(80457),u={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new a.u_(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return(0,r.Wi)(e.centroid)&&(e.centroid=(0,i.Y)(new s.Z,e.geometry,t.hasZ,t.hasM)),e.centroid}}},51573:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(37762),i=n(1413),a=n(29439),s=n(74165),u=n(15861),o=n(43144),l=n(15671),c=(n(59486),n(76200)),d=n(10064),h=n(32718),f=n(66978),p=n(35995),v=n(79803),m=n(40237),y=n(92975),g=n(81753),_=n(3182),x=n(80457),b=n(68928),k=n(19995),I=n(14e3),Z=(0,s.Z)().mark(E),w=(0,s.Z)().mark(T),B=/^\s*"([\S\s]*)"\s*$/,F=/""/g,M=[","," ",";","|","\t"];function E(e,t,n){var r,i,a;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:r=0;case 1:if(!(r<=e.length)){s.next=10;break}if(i=e.indexOf(t,r),a=e.substring(r,i>-1?i:void 0),r+=a.length+t.length,s.t0=n&&!a.trim(),s.t0){s.next=8;break}return s.next=8,a;case 8:s.next=1;break;case 10:case"end":return s.stop()}}),Z)}function S(e){var t=e.includes("\r\n")?"\r\n":"\n";return E(e,t,!0)}function N(e,t){return E(e,t,!1)}function T(e,t,n){var i,a,u,o,l,c,d,h,f,p,v,m,y,g,_=arguments;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i=_.length>3&&void 0!==_[3]?_[3]:function(){return Object.create(null)},a="",u="",o=0,l=i(),c=0,d=(0,r.Z)(e),s.prev=3,d.s();case 5:if((h=d.n()).done){s.next=47;break}f=h.value,p=N(f,n),v=(0,r.Z)(p),s.prev=9,v.s();case 11:if((m=v.n()).done){s.next=29;break}if(y=m.value,a+=u+y,u="",(o+=Y(y))%2!=0){s.next=26;break}if(!(o>0)){s.next=22;break}if(g=B.exec(a)){s.next=19;break}return l=i(),c=0,a="",o=0,s.abrupt("continue",45);case 19:l[t[c]]=g[1].replace(F,'"'),c++,s.next=23;break;case 22:l[t[c]]=a,c++;case 23:a="",o=0,s.next=27;break;case 26:u=n;case 27:s.next=11;break;case 29:s.next=34;break;case 31:s.prev=31,s.t0=s.catch(9),v.e(s.t0);case 34:return s.prev=34,v.f(),s.finish(34);case 37:if(0!==o){s.next=44;break}return s.next=40,l;case 40:l=i(),c=0,s.next=45;break;case 44:u="\n";case 45:s.next=5;break;case 47:s.next=52;break;case 49:s.prev=49,s.t1=s.catch(3),d.e(s.t1);case 52:return s.prev=52,d.f(),s.finish(52);case 55:case"end":return s.stop()}}),w,null,[[3,49,52,55],[9,31,34,37]])}function Y(e){var t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}var C=n(63543),X=n(29616);function q(e){var t=e.map((function(e){return e.toLowerCase()}));return{longitudeFieldName:e[t.indexOf(L.find((function(e){return t.includes(e)})))],latitudeFieldName:e[t.indexOf(G.find((function(e){return t.includes(e)})))]}}function j(e,t,n,i){var a,s=[],u=T(e,n,t),o=[],l=(0,r.Z)(u);try{for(l.s();!(a=l.n()).done;){var c=a.value;if(10===o.length)break;o.push(c)}}catch(p){l.e(p)}finally{l.f()}var d,h=(0,r.Z)(n);try{var f=function(){var e=d.value;if(e===i.longitudeFieldName||e===i.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=D(o.map((function(t){return t[e]}))),n={name:e,type:null,alias:e};switch(t){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}s.push(n)}};for(h.s();!(d=h.n()).done;)f()}catch(p){h.e(p)}finally{h.f()}return s}function D(e){if(!e.length)return"string";var t=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""!==e){if(t.test(e))n=!0;else{var r=A(e);if(!isNaN(r))return/[.,]/.test(e)||!Number.isInteger(r)||r>214783647||r<-214783648?"double":"integer";if(e.includes("E")){if(r=Number(e),!isNaN(r))return"double";if(e.includes(",")){if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}else n=!0}else n=!0}return n?/^[-]?\d*[.,]?\d*$/.test(e)?"string":O(new Date(e),e)?"date":"string":"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))}function O(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(!P&&/\d+\W*$/.test(t)){var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var i=!1,a=0;!i&&a<=r.length;)i=!R.test(r[a]),a++;n=!i}}return n}var A=function(){var e=(0,X.lt)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(i){var a=t.exec(i);if(e.factor=r,!a)return NaN;var s=a[1];if(!a[1]){if(!a[2])return NaN;s=a[2],e.factor*=-1}return+(s=s.replace(n,"").replace(e.decimal,"."))*e.factor}}(),R=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,P=Number.isNaN(new Date("technology 10").getTime()),G=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],L=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],Q=n(52410),V=n(80031),U=n(78952),$=(0,C.bU)("esriGeometryPoint"),H=["csv"],z=[0,0],W=(0,o.Z)((function e(t,n){(0,l.Z)(this,e),this.x=t,this.y=n})),J=function(){function e(){var t=this;(0,l.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(n);case 2:return r=e.sent,e.abrupt("return",t._createFeatures(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,o.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r,i,u,o,l,c,d,h,f,p=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.length>1&&void 0!==p[1]?p[1]:{},this.loadOptions=t,e.next=4,Promise.all([this._fetch(r.signal),this._checkProjection(null===t||void 0===t||null===(n=t.parsingOptions)||void 0===n?void 0:n.spatialReference)]);case 4:return i=e.sent,u=(0,a.Z)(i,1),o=u[0],l=K(o,t),this.locationInfo=l.locationInfo,this.delimiter=l.delimiter,this._queryEngine=this._createQueryEngine(l),e.next=11,this._createFeatures(o);case 11:return c=e.sent,this._queryEngine.featureStore.addMany(c),l.layerDefinition.extent=this._queryEngine.fullExtent,l.layerDefinition.timeInfo&&(d=this._queryEngine.timeExtent,h=d.start,f=d.end,l.layerDefinition.timeInfo.timeExtent=[h,f]),e.abrupt("return",l);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new d.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loadOptions.customParameters=t,null!==(n=this._snapshotTask)&&void 0!==n&&n.abort(),this._snapshotTask=(0,f.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){r._queryEngine.featureStore.clear(),e&&r._queryEngine.featureStore.addMany(e)}),(function(e){r._queryEngine.featureStore.clear(),(0,f.D_)(e)||h.Z.getLogger("esri.layers.CSVLayer").error(new d.Z("csv-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,r,a,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.loadOptions,r=n.url,a=n.customParameters,r){e.next=3;break}throw new d.Z("csv-layer:invalid-source","url not defined");case 3:return u=(0,p.mN)(r),e.next=6,(0,c.default)(u.path,{query:(0,i.Z)((0,i.Z)({},u.query),a),responseType:"text",signal:t});case 6:return e.abrupt("return",e.sent.data);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createQueryEngine",value:function(e){var t=e.layerDefinition,n=t.objectIdField,r=t.fields,i=t.extent,a=t.timeInfo,s=new b.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new I.q({fields:r,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:a,objectIdField:n,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:s})}},{key:"_createFeatures",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,i,u,o,l,c,d,h,f,p,b,k,I,Z,w,B,F,M,E,N,Y,X,q,j,D,R,P,G,L,Q,$,H,J,K,ee,te,ne;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.locationInfo,i=n.latitudeFieldName,u=n.longitudeFieldName,o=this._queryEngine,l=o.objectIdField,c=o.fieldsIndex,d=o.spatialReference,h=[],f=[],p=c.fields.filter((function(e){return e.name!==l})).map((function(e){return e.name})),b=0,(k=S(t)).next(),I={},Z=(0,r.Z)(c.fields);try{for(Z.s();!(w=Z.n()).done;)"esriFieldTypeOID"!==(B=w.value).type&&"esriFieldTypeGlobalID"!==B.type&&void 0!==(F=(0,V.os)(B))&&(I[B.name]=F)}catch(s){Z.e(s)}finally{Z.f()}M=T(k,p,this.delimiter,(0,C.Dm)(I,l)),E=(0,r.Z)(M);try{for(E.s();!(N=E.n()).done;)if(Y=N.value,X=this._parseCoordinateValue(Y[i]),null!=(q=this._parseCoordinateValue(Y[u]))&&null!=X&&!isNaN(X)&&!isNaN(q)){for(j in Y[i]=X,Y[u]=q,Y)j!==i&&j!==u&&(c.isDateField(j)?(D=new Date(Y[j]),Y[j]=O(D,Y[j])?D.getTime():null):c.isNumericField(j)&&(R=A(Y[j]),isNaN(R)?Y[j]=null:Y[j]=R));Y[l]=b,b++,h.push(new W(q,X)),f.push(Y)}}catch(s){E.e(s)}finally{E.f()}if(!(0,y.fS)({wkid:4326},d))if((0,y.sS)(d)){P=(0,r.Z)(h);try{for(P.s();!(G=P.n()).done;)L=G.value,Q=(0,g.hG)(L.x,L.y,z),$=(0,a.Z)(Q,2),L.x=$[0],L.y=$[1]}catch(s){P.e(s)}finally{P.f()}}else h=(0,v.oj)(m.N,h,U.Z.WGS84,d,null,null);for(H=[],J=0;J<h.length;J++)K=h[J],ee=K.x,te=K.y,(ne=f[J])[l]=J+1,H.push(new _.u_(new x.Z([],[ee,te]),ne,null,ne[l]));return e.abrupt("return",H);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_parseCoordinateValue",value:function(e){if(null==e||""===e)return null;var t=A(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}},{key:"_checkProjection",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,k._W)(y.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new d.Z("csv-layer:projection-not-supported","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();function K(e,t){var n=t.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},a=S(e),s=a.next().value;if(!s)throw new d.Z("csv-layer:empty-csv","CSV is empty",{csv:e});if(s=s.trim(),!n.delimiter){var u=function(e){var t,n=e.trim(),i=0,a="",s=(0,r.Z)(M);try{for(s.s();!(t=s.n()).done;){var u=t.value,o=n.split(u).length;o>i&&(i=o,a=u)}}catch(l){s.e(l)}finally{s.f()}return""===a?null:a}(s);if(!u)throw new d.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=u}var o=s.split(i.delimiter).filter((function(e){return!!e})),l=i.layerDefinition={name:(0,p.vt)(t.url,H)||"csv",drawingInfo:$,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){var c=q(o);if(!n.longitudeField&&!c.longitudeFieldName||!n.latitudeField&&!c.latitudeFieldName)throw new d.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:n.longitudeField||c.longitudeFieldName,latitudeFieldName:n.latitudeField||c.latitudeFieldName}}var h=j(a,i.delimiter,o,i.locationInfo);if(n.fields&&n.fields.length){var f,v=new Map,m=(0,r.Z)(n.fields);try{for(m.s();!(f=m.n()).done;){var y=f.value;v.set(y.name.toLowerCase(),y)}}catch(N){m.e(N)}finally{m.f()}var g,_=(0,r.Z)(h);try{for(_.s();!(g=_.n()).done;){var x=g.value,b=v.get(x.name.toLowerCase());if(b){var k=x.name;Object.assign(x,b),x.name=k}}}catch(N){_.e(N)}finally{_.f()}}if(l.fields=h,!l.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)}))){var I={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=I.name,l.fields.unshift(I)}if(l.timeInfo){var Z=new Q.Z(l.fields),w=l.timeInfo;if(w.startTimeField){var B=Z.get(w.startTimeField);B?(w.startTimeField=B.name,B.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){var F=Z.get(w.endTimeField);F?(w.endTimeField=F.name,F.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){var E=Z.get(w.trackIdField);w.trackIdField=E?E.name:null}w.startTimeField||w.endTimeField||(l.timeInfo=null)}return i}},63543:function(e,t,n){n.d(t,{Dm:function(){return h},Hq:function(){return f},MS:function(){return p},bU:function(){return l}});var r=n(4942),i=n(1413),a=n(93169),s=n(84652),u=n(60480),o=n(76115);function l(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}var c=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,d=1;function h(e,t){if((0,a.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(c.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var u=new Function("\n      return class AttributesClass$".concat(d++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return function(){return new u}}catch(o){return function(){return(0,i.Z)((0,r.Z)({},t,null),e)}}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=1573.96664524.chunk.js.map