"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[3518],{13491:function(e,t,n){n.d(t,{Q:function(){return c}});var i=n(60136),r=n(29388),a=n(37762),s=n(15671),u=n(43144),o=n(63780),h=n(92026),l=n(27546),d=n(36231),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;(0,s.Z)(this,e),this.compareMinX=y,this.compareMinY=p,this._toBBox=function(e){return e},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}return(0,u.Z)(e,[{key:"destroy",value:function(){this.clear(),S.prune(),b.prune(),w.prune(),M.prune()}},{key:"all",value:function(e){this._all(this.data,e)}},{key:"search",value:function(e,t){var n=this.data,i=this._toBBox;if(B(e,n))for(S.clear();n;){for(var r=0,a=n.children.length;r<a;r++){var s=n.children[r],u=n.leaf?i(s):s;B(e,u)&&(n.leaf?t(s):I(e,u)?this._all(s,t):S.push(s))}n=S.pop()}}},{key:"collides",value:function(e){var t=this.data,n=this._toBBox;if(!B(e,t))return!1;for(S.clear();t;){for(var i=0,r=t.children.length;i<r;i++){var a=t.children[i],s=t.leaf?n(a):a;if(B(e,s)){if(t.leaf||I(e,s))return!0;S.push(a)}}t=S.pop()}return!1}},{key:"load",value:function(e){if(!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var i=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}},{key:"insert",value:function(e){return e&&this._insert(e,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new X([]),this}},{key:"remove",value:function(e){if(!e)return this;var t,n=this.data,i=null,r=0,a=!1,s=this._toBBox(e);for(w.clear(),M.clear();n||w.length>0;){var u;if(n||(n=(0,h.j0)(w.pop()),i=w.data[w.length-1],r=null!==(u=M.pop())&&void 0!==u?u:0,a=!0),n.leaf&&-1!==(t=(0,o.cq)(n.children,e,n.children.length,n.indexHint)))return n.children.splice(t,1),w.push(n),this._condense(w),this;a||n.leaf||!I(n,s)?i?(r++,n=i.children[r],a=!1):n=null:(w.push(n),M.push(r),r=0,i=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(e){return this.data=e,this}},{key:"_all",value:function(e,t){var n=e;for(b.clear();n;){var i;if(!0===n.leaf){var r,s=(0,a.Z)(n.children);try{for(s.s();!(r=s.n()).done;){t(r.value)}}catch(u){s.e(u)}finally{s.f()}}else b.pushArray(n.children);n=null!==(i=b.pop())&&void 0!==i?i:null}}},{key:"_build",value:function(e,t,n,i){var r=n-t+1,a=this._maxEntries;if(r<=a){var s=new X(e.slice(t,n+1));return f(s,this._toBBox),s}i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/Math.pow(a,i-1)));var u=new Y([]);u.height=i;var o=Math.ceil(r/a),h=o*Math.ceil(Math.sqrt(a));Z(e,t,n,h,this.compareMinX);for(var l=t;l<=n;l+=h){var d=Math.min(l+h-1,n);Z(e,l,d,o,this.compareMinY);for(var c=l;c<=d;c+=o){var v=Math.min(c+o-1,d);u.children.push(this._build(e,c,v,i-1))}}return f(u,this._toBBox),u}},{key:"_chooseSubtree",value:function(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){for(var r=void 0,a=1/0,s=1/0,u=0,o=t.children.length;u<o;u++){var h=t.children[u],l=_(h),d=g(e,h)-l;d<s?(s=d,a=l<a?l:a,r=h):d===s&&l<a&&(a=l,r=h)}t=r||t.children[0]}return t}},{key:"_insert",value:function(e,t,n){var i=this._toBBox,r=n?e:i(e);w.clear();var a=this._chooseSubtree(r,this.data,t,w);for(a.children.push(e),m(a,r);t>=0&&w.data[t].children.length>this._maxEntries;)this._split(w,t),t--;this._adjustParentBBoxes(r,w,t)}},{key:"_split",value:function(e,t){var n=e.data[t],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);var a=this._chooseSplitIndex(n,r,i);if(a){var s=n.children.splice(a,n.children.length-a),u=n.leaf?new X(s):new Y(s);u.height=n.height,f(n,this._toBBox),f(u,this._toBBox),t?e.data[t-1].children.push(u):this._splitRoot(n,u)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(e,t){this.data=new Y([e,t]),this.data.height=e.height+1,f(this.data,this._toBBox)}},{key:"_chooseSplitIndex",value:function(e,t,n){var i,r,a;i=r=1/0;for(var s=t;s<=n-t;s++){var u=v(e,0,s,this._toBBox),o=v(e,s,n,this._toBBox),h=k(u,o),l=_(u)+_(o);h<i?(i=h,a=s,r=l<r?l:r):h===i&&l<r&&(r=l,a=s)}return a}},{key:"_chooseSplitAxis",value:function(e,t,n){var i=e.leaf?this.compareMinX:y,r=e.leaf?this.compareMinY:p;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,r)&&e.children.sort(i)}},{key:"_allDistMargin",value:function(e,t,n,i){e.children.sort(i);for(var r=this._toBBox,a=v(e,0,t,r),s=v(e,n-t,n,r),u=x(a)+x(s),o=t;o<n-t;o++){var h=e.children[o];m(a,e.leaf?r(h):h),u+=x(a)}for(var l=n-t-1;l>=t;l--){var d=e.children[l];m(s,e.leaf?r(d):d),u+=x(s)}return u}},{key:"_adjustParentBBoxes",value:function(e,t,n){for(var i=n;i>=0;i--)m(t.data[i],e)}},{key:"_condense",value:function(e){for(var t=e.length-1;t>=0;t--){var n=e.data[t];if(0===n.children.length)if(t>0){var i=e.data[t-1],r=i.children;r.splice((0,o.cq)(r,n,r.length,i.indexHint),1)}else this.clear();else f(n,this._toBBox)}}},{key:"_initFormat",value:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}]),e}();function f(e,t){v(e,0,e.children.length,t,e)}function v(e,t,n,i,r){r||(r=new X([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a,s=t;s<n;s++)a=e.children[s],m(r,e.leaf?i(a):a);return r}function m(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function y(e,t){return e.minX-t.minX}function p(e,t){return e.minY-t.minY}function _(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function x(e){return e.maxX-e.minX+(e.maxY-e.minY)}function g(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function k(e,t){var n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),r=Math.min(e.maxX,t.maxX),a=Math.min(e.maxY,t.maxY);return Math.max(0,r-n)*Math.max(0,a-i)}function I(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function B(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function Z(e,t,n,i,r){for(var a=[t,n];a.length;){var s=(0,h.j0)(a.pop()),u=(0,h.j0)(a.pop());if(!(s-u<=i)){var o=u+Math.ceil((s-u)/i/2)*i;(0,d.q)(e,o,u,s,r),a.push(u,o,o,s)}}}var S=new l.Z,b=new l.Z,w=new l.Z,M=new l.Z({deallocator:void 0}),C=function(e){(0,i.Z)(n,e);var t=(0,r.Z)(n);function n(){var e;return(0,s.Z)(this,n),(e=t.apply(this,arguments)).height=1,e.indexHint=new o.SO,e}return(0,u.Z)(n)}((0,u.Z)((function e(){(0,s.Z)(this,e),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}))),X=function(e){(0,i.Z)(n,e);var t=(0,r.Z)(n);function n(e){var i;return(0,s.Z)(this,n),(i=t.call(this)).children=e,i.leaf=!0,i}return(0,u.Z)(n)}(C),Y=function(e){(0,i.Z)(n,e);var t=(0,r.Z)(n);function n(e){var i;return(0,s.Z)(this,n),(i=t.call(this)).children=e,i.leaf=!1,i}return(0,u.Z)(n)}(C)},47991:function(e,t,n){n.d(t,{SR:function(){return m},Ui:function(){return v}});var i=n(43144),r=n(15671),a=n(37762),s=n(29439),u=n(92026),o=n(65156),h=n(376),l=n(69662),d=n(77981),c=n(76335),f=n(92975);function v(e){return y(e,!0)}function m(e){return y(e,!1)}function y(e,t){if((0,u.Wi)(e))return null;var n=e.spatialReference,i=(0,f.C5)(n),r="toJSON"in e?e.toJSON():e;if(!i)return r;var a=(0,f.sS)(n)?102100:4326,s=c.UZ[a].maxX,o=c.UZ[a].minX;if((0,d.wp)(r))return _(r,s,o);if((0,d.aW)(r))return r.points=r.points.map((function(e){return _(e,s,o)})),r;if((0,d.YX)(r))return p(r,i);if((0,d.oU)(r)||(0,d.l9)(r)){var l=(0,h.$P)(Z,r),v={xmin:l[0],ymin:l[1],xmax:l[2],ymax:l[3]},m=(0,c.XZ)(v.xmin,o)*(2*s),y=0===m?r:(0,c.Sy)(r,m);return v.xmin+=m,v.xmax+=m,v.xmax>s?I(y,s,t):v.xmin<o?I(y,o,t):y}return r}function p(e,t){if(!t)return e;var n=function(e,t){var n=[],i=e.ymin,r=e.ymax,a=e.xmin,u=e.xmax,o=e.xmax-e.xmin,h=(0,s.Z)(t.valid,2),l=h[0],d=h[1],c=x(e.xmin,t),f=c.x,v=c.frameId,m=x(e.xmax,t),y=m.x,p=m.frameId,_=f===y&&o>0;if(o>2*d){var k={xmin:a<u?f:y,ymin:i,xmax:d,ymax:r},I={xmin:l,ymin:i,xmax:a<u?y:f,ymax:r},Z={xmin:0,ymin:i,xmax:d,ymax:r},S={xmin:l,ymin:i,xmax:0,ymax:r},b=[],w=[];g(k,Z)&&b.push(v),g(k,S)&&w.push(v),g(I,Z)&&b.push(p),g(I,S)&&w.push(p);for(var M=v+1;M<p;M++)b.push(M),w.push(M);n.push(new B(k,[v]),new B(I,[p]),new B(Z,b),new B(S,w))}else f>y||_?n.push(new B({xmin:f,ymin:i,xmax:d,ymax:r},[v]),new B({xmin:l,ymin:i,xmax:y,ymax:r},[p])):n.push(new B({xmin:f,ymin:i,xmax:y,ymax:r},[v]));return n}(e,t).map((function(e){return e.extent}));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}))}}function _(e,t,n){if(Array.isArray(e)){var i=e[0];if(i>t){var r=(0,c.XZ)(i,t);e[0]=i+r*(-2*t)}else if(i<n){var a=(0,c.XZ)(i,n);e[0]=i+a*(-2*n)}}else{var s=e.x;if(s>t){var u=(0,c.XZ)(s,t);e.x+=u*(-2*t)}else if(s<n){var o=(0,c.XZ)(s,n);e.x+=o*(-2*n)}}return e}function x(e,t){var n,i=(0,s.Z)(t.valid,2),r=i[0],a=i[1],u=2*a,o=0;return e>a?(e-=(n=Math.ceil(Math.abs(e-a)/u))*u,o=n):e<r&&(e+=(n=Math.ceil(Math.abs(e-r)/u))*u,o=-n),{x:e,frameId:o}}function g(e,t){var n=t.xmin,i=t.ymin,r=t.xmax,a=t.ymax;return k(e,n,i)&&k(e,n,a)&&k(e,r,a)&&k(e,r,i)}function k(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function I(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!(0,d.l9)(e);if(i&&(0,l.Zy)(e),n)return(new S).cut(e,t);for(var r=i?e.rings:e.paths,s=i?4:2,u=r.length,o=-2*t,h=0;h<u;h++){var c=r[h];if(c&&c.length>=s){var f,v=[],m=(0,a.Z)(c);try{for(m.s();!(f=m.n()).done;){var y=f.value;v.push([y[0]+o,y[1]])}}catch(p){m.e(p)}finally{m.f()}r.push(v)}}return i?e.rings=r:e.paths=r,e}var B=(0,i.Z)((function e(t,n){(0,r.Z)(this,e),this.extent=t,this.frameIds=n})),Z=(0,o.Ue)(),S=function(){function e(){(0,r.Z)(this,e),this.linesIn=[],this.linesOut=[]}return(0,i.Z)(e,[{key:"cut",value:function(e,t){var n;if(this.xCut=t,e.rings)this.closed=!0,n=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,n=e.paths,this.minPts=2}var i,r=(0,a.Z)(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s&&!(s.length<this.minPts)){var u,o=!0,h=(0,a.Z)(s);try{for(h.s();!(u=h.n()).done;){var l=u.value;o?(this.moveTo(l),o=!1):this.lineTo(l)}}catch(g){h.e(g)}finally{h.f()}this.closed&&this.close()}}}catch(g){r.e(g)}finally{r.f()}this._pushLineIn(),this._pushLineOut(),n=[];var d,c=(0,a.Z)(this.linesIn);try{for(c.s();!(d=c.n()).done;){var f=d.value;f&&f.length>=this.minPts&&n.push(f)}}catch(g){c.e(g)}finally{c.f()}var v,m=-2*this.xCut,y=(0,a.Z)(this.linesOut);try{for(y.s();!(v=y.n()).done;){var p=v.value;if(p&&p.length>=this.minPts){var _,x=(0,a.Z)(p);try{for(x.s();!(_=x.n()).done;){_.value[0]+=m}}catch(g){x.e(g)}finally{x.f()}n.push(p)}}}catch(g){y.e(g)}finally{y.f()}return this.closed?e.rings=n:e.paths=n,e}},{key:"moveTo",value:function(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}},{key:"lineTo",value:function(e){var t=this._side(e[0]);if(t*this._prevSide==-1){var n=this._intersect(this._prevPt,e);this._lineTo(this.xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}},{key:"close",value:function(){var e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}},{key:"_moveTo",value:function(e,t,n){this.closed?(this.lineIn.push([n<=0?e:this.xCut,t]),this.lineOut.push([n>=0?e:this.xCut,t])):(n<=0&&this.lineIn.push([e,t]),n>=0&&this.lineOut.push([e,t]))}},{key:"_lineTo",value:function(e,t,n){this.closed?(this._addPolyVertex(this.lineIn,n<=0?e:this.xCut,t),this._addPolyVertex(this.lineOut,n>=0?e:this.xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this.lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this.lineOut.push([e,t])):this._prevSide<0?(this.lineIn.push([e,t]),this.lineOut.push([e,t])):this._prevSide>0&&(this.lineOut.push([e,t]),this.lineIn.push([e,t]))}},{key:"_addPolyVertex",value:function(e,t,n){var i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},{key:"_checkClosingPt",value:function(e){var t=e.length;t>3&&e[0][0]===this.xCut&&e[t-2][0]===this.xCut&&e[1][0]===this.xCut&&(e[0][1]=e[t-2][1],e.pop())}},{key:"_side",value:function(e){return e<this.xCut?-1:e>this.xCut?1:0}},{key:"_intersect",value:function(e,t){var n=(this.xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}},{key:"_pushLineIn",value:function(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}},{key:"_pushLineOut",value:function(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}]),e}()},66020:function(e,t,n){n.d(t,{H:function(){return d}});var i=n(37762),r=n(15671),a=n(43144),s=n(93169),u=n(13491),o=n(65156),h={minX:0,minY:0,maxX:0,maxY:0};function l(e,t,n){(function(e){h.minX=e[0],h.minY=e[1],h.maxX=e[2],h.maxY=e[3]})(t),e.search(h,n)}var d=function(){function e(){var t=this;(0,r.Z)(this,e),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new u.Q(9,(0,s.Z)("esri-csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,i){e[n++]=i})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return(0,a.Z)(e,[{key:"fullBounds",get:function(){if(!this._boundsById.size)return null;var e,t=(0,o.cS)(),n=(0,i.Z)(this._boundsById.values());try{for(n.s();!(e=n.n()).done;){var r=e.value;r&&(t[0]=Math.min(r[0],t[0]),t[1]=Math.min(r[1],t[1]),t[2]=Math.max(r[2],t[2]),t[3]=Math.max(r[3],t[3]))}}catch(a){n.e(a)}finally{n.f()}return t}},{key:"valid",get:function(){return!this._indexInvalid}},{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._loadIndex(),l(this._index,e,(function(e){return t(n._idByBounds.get(e))}))}},{key:"get",value:function(e){return this._boundsById.get(e)}},{key:"has",value:function(e){return this._boundsById.has(e)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),e}()},68928:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(37762),r=n(15671),a=n(43144),s=n(10064),u=n(91505),o=n(32718),h=n(92026),l=n(41414),d=n(65156),c=n(83406),f=n(66020),v=n(77835),m=function(){function e(t){(0,r.Z)(this,e),this.geometryInfo=t,this._boundsStore=new f.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new u.Z,this.featureAdapter=v.n}return(0,a.Z)(e,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){return this._boundsStore.fullBounds}},{key:"storeStatistics",get:function(){var e=0;return this._featuresById.forEach((function(t){(0,h.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(e){this._add(e),this._emitChanged()}},{key:"addMany",value:function(e){var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;this._add(r)}}catch(a){n.e(a)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}},{key:"removeManyById",value:function(e){this._boundsStore.invalidateIndex();var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,a=this._featuresById.get(r);a&&this._remove(a)}}catch(s){n.e(s)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(e,t,n){var r,a=(0,i.Z)(e);try{for(a.s();!(r=a.n()).done;){var s=r.value,u=this._boundsStore.get(s.objectId);u&&t((0,l.JR)(n,u))}}catch(o){a.e(o)}finally{a.f()}}},{key:"getFeature",value:function(e){return this._featuresById.get(e)}},{key:"has",value:function(e){return this._featuresById.has(e)}},{key:"toArray",value:function(){return Array.from(this._featuresById.values())}},{key:"forEach",value:function(e){this._featuresById.forEach((function(t){return e(t)}))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var e=this,t=!1;this._featuresById.forEach((function(n,i){e._markedIds.has(i)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(e){if(e){var t=e.objectId;if(null!=t){var n,i=this._featuresById.get(t);if(this._markedIds.add(t),i?(e.displayId=i.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,h.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,h.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=(0,c.$)((0,h.pC)(n)?n:(0,d.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,h.pC)(n)&&this._boundsStore.set(t,n),this._featuresById.set(t,e)}else o.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}))}}},{key:"_remove",value:function(e){return(0,h.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}]),e}()},77835:function(e,t,n){n.d(t,{n:function(){return u}});var i=n(92026),r=n(12717),a=n(3182),s=n(80457),u={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new a.u_(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return(0,i.Wi)(e.centroid)&&(e.centroid=(0,r.Y)(new s.Z,e.geometry,t.hasZ,t.hasM)),e.centroid}}},33518:function(e,t,n){n.r(t),n.d(t,{GraphicsSnappingSource:function(){return X}});var i=n(4942),r=n(29439),a=n(74165),s=n(15861),u=n(37762),o=n(15671),h=n(43144),l=n(60136),d=n(29388),c=n(27366),f=n(85015),v=n(63780),m=n(41691),y=n(92026),p=n(66978),_=n(49861),x=(n(93169),n(25243),n(69912)),g=n(80885),k=n(79803),I=n(47991),B=n(27823),Z=n(83406),S=n(3182),b=n(68928),w=n(14e3),M=n(64674),C=n(52824),X=function(e){(0,l.Z)(n,e);var t=(0,d.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).availability=1,i.sources={multipoint:null,point:null,polygon:null,polyline:null},i.loadedWkids=new Set,i.loadedWkts=new Set,i.pendingAdds=[],i}return(0,h.Z)(n,[{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"layer",get:function(){return this.layerSource.layer}},{key:"destroy",value:function(){var e=this,t=this.pendingAdds;this.pendingAdds.length=0;var n,i=(0,u.Z)(t);try{for(i.s();!(n=i.n()).done;){n.value.task.abort()}}catch(r){i.e(r)}finally{i.f()}this._mapSources((function(t){return e._destroySource(t)}))}},{key:"initialize",value:function(){var e=this;this.handles.add([this.layer.on("graphic-update",(function(t){return e._onGraphicUpdate(t)})),this.updatingHandles.addOnCollectionChange((function(){return e.layer.graphics}),(function(t){return e._onGraphicsChanged(t)}))]),this._addMany(this.layer.graphics.toArray())}},{key:"fetchCandidates",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){var i,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.WW)(this._mapSources((function(e){return e.queryEngine.executeQueryForSnapping({point:t.coordinateHelper.vectorToPoint(t.point).toJSON(),distance:t.distance,types:t.types,query:(0,y.pC)(t.filter)?t.filter.createQuery().toJSON():{where:"1=1"}},n).then((function(e){return e.candidates}))})));case 2:return i=e.sent,r=i.flat().map((function(e){return(0,C.X)(e,t.coordinateHelper,t.elevationInfo)})),e.abrupt("return",((0,M.lQ)(t.point,r),r));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){}},{key:"_onGraphicUpdate",value:function(e){switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}},{key:"_onGraphicsChanged",value:function(e){var t,n=(0,u.Z)(e.removed);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._remove(i)}}catch(r){n.e(r)}finally{n.f()}this._addMany(e.added)}},{key:"_addMany",value:function(e){var t,n=[],i=new Map,r=(0,u.Z)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;(0,y.Wi)(a.geometry)||(this._needsInitializeProjection(a.geometry.spatialReference)?(n.push(a.geometry.spatialReference),i.set(a.uid,a)):this._add(a))}}catch(s){r.e(s)}finally{r.f()}this._createPendingAdd(n,i)}},{key:"_createPendingAdd",value:function(e,t){var n=this;if(e.length){var i=(0,p.vr)(function(){var i=(0,s.Z)((0,a.Z)().mark((function i(s){var o,h,l,d;return(0,a.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,k.iQ)(e.map((function(e){return{source:e,dest:n.spatialReference}})),{signal:s});case 2:n._markLoadedSpatialReferences(e),o=(0,u.Z)(t);try{for(o.s();!(h=o.n()).done;)l=(0,r.Z)(h.value,2),d=l[1],n._add(d)}catch(a){o.e(a)}finally{o.f()}case 5:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}());this.updatingHandles.addPromise(i.promise);var o={task:i,graphics:t},h=function(){return(0,v.e$)(n.pendingAdds,o)};i.promise.then(h,h),this.pendingAdds.push(o)}}},{key:"_markLoadedSpatialReferences",value:function(e){var t,n=(0,u.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;null!=i.wkid&&this.loadedWkids.add(i.wkid),null!=i.wkt&&this.loadedWkts.add(i.wkt)}}catch(r){n.e(r)}finally{n.f()}}},{key:"_add",value:function(e){if(!(0,y.Wi)(e.geometry)&&e.visible){var t=e.geometry;if("mesh"!==t.type){"extent"===t.type&&(t=g.Z.fromExtent(t));var n=this._ensureSource(t.type);if(!(0,y.Wi)(n)){var i=this._createOptimizedFeature(e.uid,t);(0,y.pC)(i)&&n.featureStore.add(i)}}}}},{key:"_needsInitializeProjection",value:function(e){return(null==e.wkid||!this.loadedWkids.has(e.wkid))&&(null==e.wkt||!this.loadedWkts.has(e.wkt))&&!(0,k.Up)(e,this.spatialReference)}},{key:"_createOptimizedFeature",value:function(e,t){var n=(0,k.iV)((0,I.SR)(t),this.spatialReference);return n?new S.u_((0,Z.GH)(n,!1,!1),(0,i.Z)({},Y,e),null,e):null}},{key:"_ensureSource",value:function(e){var t=this.sources[e];if((0,y.pC)(t))return t;var n=this._createSource(e);return this.sources[e]=n,n}},{key:"_createSource",value:function(e){var t=B.Mk.toJSON(e),n=new b.Z({geometryType:t,hasZ:!1,hasM:!1});return{featureStore:n,queryEngine:new w.q({featureStore:n,fields:[{name:Y,type:"esriFieldTypeOID",alias:Y}],geometryType:t,hasM:!1,hasZ:!1,objectIdField:Y,spatialReference:this.spatialReference,scheduler:(0,y.pC)(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:e}}},{key:"_remove",value:function(e){var t=this;this._mapSources((function(n){return t._removeFromSource(n,e)}));var n,i=(0,u.Z)(this.pendingAdds);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.graphics.delete(e.uid),0===r.graphics.size&&r.task.abort()}}catch(a){i.e(a)}finally{i.f()}}},{key:"_removeFromSource",value:function(e,t){var n=t.uid;e.featureStore.has(n)&&e.featureStore.removeById(t.uid)}},{key:"_destroySource",value:function(e){e.queryEngine.destroy(),this.sources[e.type]=null}},{key:"_mapSources",value:function(e){var t=this.sources,n=t.point,i=t.polygon,r=t.polyline,a=t.multipoint,s=[];return(0,y.pC)(n)&&s.push(e(n)),(0,y.pC)(i)&&s.push(e(i)),(0,y.pC)(r)&&s.push(e(r)),(0,y.pC)(a)&&s.push(e(a)),s}}]),n}((0,m.p)(f.Z));(0,c._)([(0,_.Cb)({constructOnly:!0})],X.prototype,"spatialReference",void 0),(0,c._)([(0,_.Cb)({constructOnly:!0})],X.prototype,"layerSource",void 0),(0,c._)([(0,_.Cb)({constructOnly:!0})],X.prototype,"view",void 0),(0,c._)([(0,_.Cb)({readOnly:!0})],X.prototype,"updating",null),(0,c._)([(0,_.Cb)({readOnly:!0})],X.prototype,"availability",void 0),X=(0,c._)([(0,x.j)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],X);var Y="OBJECTID"},52824:function(e,t,n){n.d(t,{X:function(){return a}});var i=n(95905),r=n(36700);function a(e,t,n){switch(e.type){case"edge":return new i.L({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n});case"vertex":return new r.x({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId,elevationInfo:n})}}}}]);
//# sourceMappingURL=3518.1513f1a1.chunk.js.map