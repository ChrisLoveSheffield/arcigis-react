"use strict";(self.webpackChunkuums_front_end=self.webpackChunkuums_front_end||[]).push([[5477],{95477:function(e,t,r){r.r(t),r.d(t,{toBinaryGLTF:function(){return Y}});var i,n=r(15671),s=r(43144),a=r(35995),o=r(66978),u=r(7882);!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(i||(i={}));var f=function(){function e(t,r){if((0,n.Z)(this,e),!t)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;var s=this._textToArrayBuffer(t);if(this.length+=this._alignTo(s.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();var a=this._writeChunk(s,12,i.JSON,32);r&&this._writeChunk(r,a,i.BIN)}return(0,s.Z)(e,[{key:"_writeHeader",value:function(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}},{key:"_writeChunk",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=this._alignTo(e.byteLength,4);for(this.outView.setUint32(t,n,!0),this.outView.setUint32(t+=4,r,!0),this._writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}},{key:"_writeArrayBuffer",value:function(e,t,r,i,n){new Uint8Array(e,r,n).set(new Uint8Array(t,i,n),0)}},{key:"_textToArrayBuffer",value:function(e){return(new TextEncoder).encode(e).buffer}},{key:"_alignTo",value:function(e,t){return t*Math.ceil(e/t)}}]),e}();f.HEADER_SIZE=12,f.CHUNK_HEADER_SIZE=8,f.MAGIC=1179937895,f.VERSION=2;var h,c,l,d,p,g,m,y=r(37762),v=r(77427),w=r(92026),E=r(48976),A=r(98131),_=r(11186),T=r(71353),b=r(53942),x=r(57898);!function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(h||(h={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(c||(c={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(l||(l={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(d||(d={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(p||(p={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(g||(g={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(m||(m={}));var R=r(8548),N=function(){function e(t,r,i,s,a){(0,n.Z)(this,e),this.buffer=t,this.componentType=i,this.dataType=s,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r.bufferViews||(r.bufferViews=[]),this.index=r.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:a};var o=this._getElementSize();o>=4&&a!==l.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=o),r.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}return(0,s.Z)(e,[{key:"push",value:function(e){var t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){var r=t%this.numComponentsForDataType,i=this.accessorMin[r];this.accessorMin[r]="number"!=typeof i?e:Math.min(i,e);var n=this.accessorMax[r];this.accessorMax[r]="number"!=typeof n?e:Math.max(n,e)}}},{key:"dataSize",get:function(){return this.data.length*this._sizeComponentType()}},{key:"byteSize",get:function(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}},{key:"getByteOffset",value:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"_createTypedArray",value:function(e,t){switch(this.componentType){case R.g.BYTE:return new Int8Array(e,t);case R.g.FLOAT:return new Float32Array(e,t);case R.g.SHORT:return new Int16Array(e,t);case R.g.UNSIGNED_BYTE:return new Uint8Array(e,t);case R.g.UNSIGNED_INT:return new Uint32Array(e,t);case R.g.UNSIGNED_SHORT:return new Uint16Array(e,t)}}},{key:"writeOutToBuffer",value:function(e,t){this._createTypedArray(e,t).set(this.data)}},{key:"writeAsync",value:function(e){var t=this;if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((function(e){for(var r=new Uint8Array(e),i=0;i<r.length;++i)t.data.push(r[i]);delete t.asyncWritePromise})),this.asyncWritePromise}},{key:"startAccessor",value:function(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;var t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}},{key:"endAccessor",value:function(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");var e=this._getElementSize(),t=this.numComponentsForDataType,r=(this.data.length-this.accessorIndex)/t;if(r%1)throw new Error("An accessor was ended with missing component values");for(var i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);var n={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:r,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case R.g.UNSIGNED_BYTE:case R.g.UNSIGNED_SHORT:n.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,n}},{key:"finalized",get:function(){var e=this;return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((function(t){return e.finalizedPromiseResolve=t}))}},{key:"finalize",value:function(){var e=this,t=this.bufferView;return new Promise((function(t){var r=e.buffer.getViewFinalizePromises(e);e.asyncWritePromise&&r.push(e.asyncWritePromise),t((0,o.as)(r))})).then((function(){e.isFinalized=!0,t.byteOffset=e.getByteOffset(),t.byteLength=e.dataSize,e.finalizedPromiseResolve&&e.finalizedPromiseResolve()}))}},{key:"_getElementSize",value:function(){return this._sizeComponentType()*this.numComponentsForDataType}},{key:"_sizeComponentType",value:function(){switch(this.componentType){case R.g.BYTE:case R.g.UNSIGNED_BYTE:return 1;case R.g.SHORT:case R.g.UNSIGNED_SHORT:return 2;case R.g.UNSIGNED_INT:case R.g.FLOAT:return 4}}},{key:"_calculateNumComponentsForDataType",value:function(){switch(this.dataType){case d.SCALAR:return 1;case d.VEC2:return 2;case d.VEC3:return 3;case d.VEC4:case d.MAT2:return 4;case d.MAT3:return 9;case d.MAT4:return 16}}}]),e}(),C=function(){function e(t){(0,n.Z)(this,e),this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;var r={byteLength:-1};t.buffers.push(r),this.buffer=r}return(0,s.Z)(e,[{key:"addBufferView",value:function(e,t,r){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var i=new N(this,this.gltf,e,t,r);return this.bufferViews.push(i),i}},{key:"getByteOffset",value:function(e){var t,r=0,i=(0,y.Z)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(n===e)return r;r+=n.byteSize}}catch(s){i.e(s)}finally{i.f()}throw new Error("Given bufferView was not present in this buffer")}},{key:"getViewFinalizePromises",value:function(e){var t,r=[],i=(0,y.Z)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(e&&n===e)return r;r.push(n.finalized)}}catch(s){i.e(s)}finally{i.f()}return r}},{key:"getArrayBuffer",value:function(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");var e,t=this._getTotalSize(),r=new ArrayBuffer(t),i=0,n=(0,y.Z)(this.bufferViews);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.writeOutToBuffer(r,i),i+=s.byteSize}}catch(a){n.e(a)}finally{n.f()}return r}},{key:"finalize",value:function(){var e=this;if(this.finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this.finalizePromise=new Promise((function(t){t((0,o.as)(e.getViewFinalizePromises()))})).then((function(){e.isFinalized=!0;var t=e.getArrayBuffer();e.buffer.byteLength=t.byteLength,e.buffer.uri=t})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}},{key:"_getTotalSize",value:function(){var e,t=0,r=(0,y.Z)(this.bufferViews);try{for(r.s();!(e=r.n()).done;){t+=e.value.byteSize}}catch(i){r.e(i)}finally{r.f()}return t}}]),e}();function O(e,t){if(e.components){var r,i=(0,y.Z)(e.components);try{for(i.s();!(r=i.n()).done;){var n=r.value;n.faces&&"smooth"===n.shading&&S(n,t)}}catch(s){i.e(s)}finally{i.f()}}}function S(e,t){(0,w.Wi)(t.normal)&&(t.normal=new Float32Array(t.position.length));for(var r=e.faces,i=t.position,n=t.normal,s=r.length/3,a=0;a<s;++a){var o=3*r[3*a+0],u=3*r[3*a+1],f=3*r[3*a+2],h=(0,_.s)(I,i[o+0],i[o+1],i[o+2]),c=(0,_.s)(B,i[u+0],i[u+1],i[u+2]),l=(0,_.s)(M,i[f+0],i[f+1],i[f+2]),d=(0,_.b)(c,c,h),p=(0,_.b)(l,l,h),g=(0,_.f)(d,d,p);n[o+0]+=g[0],n[o+1]+=g[1],n[o+2]+=g[2],n[u+0]+=g[0],n[u+1]+=g[1],n[u+2]+=g[2],n[f+0]+=g[0],n[f+1]+=g[1],n[f+2]+=g[2]}for(var m=0;m<n.length;m+=3)(0,_.s)(k,n[m],n[m+1],n[m+2]),(0,_.n)(k,k),n[m+0]=k[0],n[m+1]=k[1],n[m+2]=k[2]}var I=(0,T.c)(),B=(0,T.c)(),M=(0,T.c)(),k=(0,T.c)(),L=r(91958),z=function(){function e(t,r,i){(0,n.Z)(this,e),this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:r,binChunkBuffer:null,promises:[]}},i&&(this.params=i),this._addScenes(t)}return(0,s.Z)(e,[{key:"_addScenes",value:function(e){var t=this;this.gltf.scene=e.defaultScene;var r=this.gltf.extras.options.bufferOutputType===h.GLB||this.gltf.extras.options.imageOutputType===c.GLB;r&&(this.gltf.extras.binChunkBuffer=new C(this.gltf)),e.forEachScene((function(e){t._addScene(e)})),r&&this.gltf.extras.binChunkBuffer.finalize()}},{key:"_addScene",value:function(e){var t=this;this.gltf.scenes||(this.gltf.scenes=[]);var r={};e.name&&(r.name=e.name),e.forEachNode((function(e){r.nodes||(r.nodes=[]);var i=t._addNode(e);r.nodes.push(i)})),this.gltf.scenes.push(r)}},{key:"_addNode",value:function(e){var t=this;this.gltf.nodes||(this.gltf.nodes=[]);var r={};e.name&&(r.name=e.name);var i=e.translation;(0,_.k)(i,T.Z)||(r.translation=(0,T.a)(i));var n=e.rotation;(0,E.j)(n,A.I)||(r.rotation=(0,A.b)(n));var s=e.scale;(0,_.k)(s,T.O)||(r.scale=(0,T.a)(s)),e.mesh&&e.mesh.vertexAttributes.position?r.mesh=this._addMesh(e.mesh):e.forEachNode((function(e){r.children||(r.children=[]);var i=t._addNode(e);r.children.push(i)}));var a=this.gltf.nodes.length;return this.gltf.nodes.push(r),a}},{key:"_addMesh",value:function(e){this.gltf.meshes||(this.gltf.meshes=[]);var t,r={primitives:[]},i=this.gltf.extras.options.bufferOutputType===h.GLB;t=i?this.gltf.extras.binChunkBuffer:new C(this.gltf),this.params.origin||(this.params.origin=function(e){if((0,w.pC)(e.transform))return e.transform.getOriginPoint(e.spatialReference);var t=e.extent.xmax-e.extent.width/2,r=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new u.Z({x:t,y:r,z:i,spatialReference:e.extent.spatialReference})}(e));var n=(0,x.Yq)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});O(e,n),this._flipYZAxis(n);var s,a,o,f,c=t.addBufferView(R.g.FLOAT,d.VEC3,l.ARRAY_BUFFER);n.normal&&(s=t.addBufferView(R.g.FLOAT,d.VEC3,l.ARRAY_BUFFER)),e.vertexAttributes.uv&&(a=t.addBufferView(R.g.FLOAT,d.VEC2,l.ARRAY_BUFFER)),n.tangent&&(o=t.addBufferView(R.g.FLOAT,d.VEC4,l.ARRAY_BUFFER)),e.vertexAttributes.color&&(f=t.addBufferView(R.g.UNSIGNED_BYTE,d.VEC4,l.ARRAY_BUFFER)),c.startAccessor("POSITION"),s&&s.startAccessor("NORMAL"),a&&a.startAccessor("TEXCOORD_0"),o&&o.startAccessor("TANGENT"),f&&f.startAccessor("COLOR_0");for(var p=n.position.length/3,g=n.position,m=n.normal,y=n.tangent,v=e.vertexAttributes,E=v.color,A=v.uv,_=0;_<p;++_)c.push(g[3*_+0]),c.push(g[3*_+1]),c.push(g[3*_+2]),s&&(0,w.pC)(m)&&(s.push(m[3*_+0]),s.push(m[3*_+1]),s.push(m[3*_+2])),a&&(0,w.pC)(A)&&(a.push(A[2*_+0]),a.push(A[2*_+1])),o&&(0,w.pC)(y)&&(o.push(y[4*_+0]),o.push(y[4*_+1]),o.push(y[4*_+2]),o.push(y[4*_+3])),f&&(0,w.pC)(E)&&(f.push(E[4*_+0]),f.push(E[4*_+1]),f.push(E[4*_+2]),f.push(E[4*_+3]));var T,b,N,S,I,B=c.endAccessor(),M=this._addAccessor(c.index,B);if(s){var k=s.endAccessor();T=this._addAccessor(s.index,k)}if(a){var L=a.endAccessor();b=this._addAccessor(a.index,L)}if(o){var z=o.endAccessor();N=this._addAccessor(o.index,z)}if(f){var V=f.endAccessor();S=this._addAccessor(f.index,V)}e.components&&e.components.length>0&&e.components[0].faces?(I=t.addBufferView(R.g.UNSIGNED_INT,d.SCALAR,l.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(I,e.components,r,M,T,b,N,S)):this._addMeshVertexNonIndexed(e.components,r,M,T,b,N,S),c.finalize(),s&&s.finalize(),a&&a.finalize(),o&&o.finalize(),I&&I.finalize(),f&&f.finalize(),i||t.finalize();var F=this.gltf.meshes.length;return this.gltf.meshes.push(r),F}},{key:"_flipYZAxis",value:function(e){var t=e.position,r=e.normal,i=e.tangent;this._flipYZBuffer(t,3),this._flipYZBuffer(r,3),this._flipYZBuffer(i,4)}},{key:"_flipYZBuffer",value:function(e,t){if(!(0,w.Wi)(e))for(var r=1,i=2;r<e.length;r+=t,i+=t){var n=e[r],s=e[i];e[r]=s,e[i]=-n}}},{key:"_addMaterial",value:function(e){if(null!==e){var t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);var r={};switch(e.alphaMode){case"mask":r.alphaMode=g.MASK;break;case"auto":case"blend":r.alphaMode=g.BLEND}.5!==e.alphaCutoff&&(r.alphaCutoff=e.alphaCutoff),e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};var i=function(e){return Math.pow(e,2.1)},n=function(e){var t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if((0,w.pC)(e.color)&&(r.pbrMetallicRoughness.baseColorFactor=n(e.color)),(0,w.pC)(e.colorTexture)&&(r.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),(0,w.pC)(e.normalTexture)&&(r.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof b.Z){if((0,w.pC)(e.emissiveTexture)&&(r.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),(0,w.pC)(e.emissiveColor)){var s=n(e.emissiveColor);r.emissiveFactor=[s[0],s[1],s[2]]}(0,w.pC)(e.occlusionTexture)&&(r.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),(0,w.pC)(e.metallicRoughnessTexture)&&(r.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1;var a=this.gltf.materials.length;return this.gltf.materials.push(r),this.materialMap.push(e),a}}},{key:"_addTexture",value:function(e){var t=this;return this.gltf.textures||(this.gltf.textures=[]),(0,v.s1)(this.textureMap,e,(function(){var r={sampler:t._addSampler(e),source:t._addImage(e)},i=t.gltf.textures.length;return t.gltf.textures.push(r),i}))}},{key:"_addImage",value:function(e){var t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);var r={};if(e.url)r.uri=e.url;else{r.extras=e.data;for(var i=0;i<this.gltf.images.length;++i)if(e.data===this.gltf.images[i].extras)return i;switch(this.gltf.extras.options.imageOutputType){case c.GLB:var n=this.gltf.extras.binChunkBuffer.addBufferView(R.g.UNSIGNED_BYTE,d.SCALAR),s=(0,L.lW)(e.data).then((function(e){var t=e.data,i=e.type;return r.mimeType=i,t}));n.writeAsync(s).then((function(){n.finalize()})),r.bufferView=n.index;break;case c.DataURI:r.uri=(0,L.$e)(e.data);break;default:this.gltf.extras.promises.push((0,L.lW)(e.data).then((function(e){var t=e.data,i=e.type;r.uri=t,r.mimeType=i})))}}var a=this.gltf.images.length;return this.gltf.images.push(r),this.imageMap.set(e,a),a}},{key:"_addSampler",value:function(e){this.gltf.samplers||(this.gltf.samplers=[]);var t=R.e8.REPEAT,r=R.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=R.e8.CLAMP_TO_EDGE,r=R.e8.CLAMP_TO_EDGE;break;case"mirror":t=R.e8.MIRRORED_REPEAT,r=R.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":r=R.e8.CLAMP_TO_EDGE;break;case"mirror":r=R.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=R.e8.CLAMP_TO_EDGE;break;case"mirror":t=R.e8.MIRRORED_REPEAT}}for(var i={wrapS:t,wrapT:r},n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[n]))return n;var s=this.gltf.samplers.length;return this.gltf.samplers.push(i),s}},{key:"_addAccessor",value:function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);var r={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(r.normalized=!0);var i=this.gltf.accessors.length;return this.gltf.accessors.push(r),i}},{key:"_addMeshVertexIndexed",value:function(e,t,r,i,n,s,a,o){var u,f=(0,y.Z)(t);try{for(f.s();!(u=f.n()).done;){var h=u.value;e.startAccessor("INDICES");for(var c=0;c<h.faces.length;++c)e.push(h.faces[c]);var l=e.endAccessor(),d={attributes:{POSITION:i},indices:this._addAccessor(e.index,l),material:this._addMaterial(h.material)};n&&"flat"!==h.shading&&(d.attributes.NORMAL=n),s&&(d.attributes.TEXCOORD_0=s),a&&"flat"!==h.shading&&(d.attributes.TANGENT=a),o&&(d.attributes.COLOR_0=o),r.primitives.push(d)}}catch(p){f.e(p)}finally{f.f()}}},{key:"_addMeshVertexNonIndexed",value:function(e,t,r,i,n,s,a){var o={attributes:{POSITION:r}};i&&(o.attributes.NORMAL=i),n&&(o.attributes.TEXCOORD_0=n),s&&(o.attributes.TANGENT=s),a&&(o.attributes.COLOR_0=a),e&&(o.material=this._addMaterial(e[0].material)),t.primitives.push(o)}}]),e}(),V=r(63780),F=function(){function e(){(0,n.Z)(this,e),this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}return(0,s.Z)(e,[{key:"addScene",value:function(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}},{key:"removeScene",value:function(e){(0,V.Od)(this._scenes,e)}},{key:"forEachScene",value:function(e){this._scenes.forEach(e)}}]),e}(),D=function(){function e(t){(0,n.Z)(this,e),this.mesh=t,this.name="",this.translation=(0,T.c)(),this.rotation=(0,A.a)(),this.scale=(0,T.a)(T.O),this._nodes=[]}return(0,s.Z)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}},{key:"rotationAngles",set:function(e){(0,E.k)(this.rotation,e[0],e[1],e[2])}}]),e}(),P="model.glb";function U(e,t){return function(e,t,r){var i=new z(e,t=t||{},r),n=i.params;n?n.origin||(n.origin=new u.Z({x:-1,y:-1,z:-1})):n={origin:new u.Z({x:-1,y:-1,z:-1})};var s=n.origin,a=i.gltf,l=a.extras.promises,d=1,p=1,g=null;return(0,o.as)(l).then((function(){var e={origin:s};delete a.extras;var r="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(a,(function(r,i){if("extras"!==r){if(i instanceof ArrayBuffer){if((0,L.$7)(i))switch(t.imageOutputType){case c.DataURI:case c.GLB:break;case c.External:default:var n="img".concat(p,".png");return p++,e[n]=i,n}switch(t.bufferOutputType){case h.DataURI:return(0,L.N5)(i);case h.GLB:if(g)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(g=i);case h.External:default:var s="data".concat(d,".bin");return d++,e[s]=i,s}}return i}}),r);return t.bufferOutputType===h.GLB||t.imageOutputType===c.GLB?e[P]=new f(i,g).buffer:e["model.gltf"]=i,e}))}(e,{bufferOutputType:h.GLB,imageOutputType:c.GLB,jsonSpacing:0},t)}var Z=function(){function e(){(0,n.Z)(this,e),this.name="",this._nodes=[]}return(0,s.Z)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}}]),e}(),G=function(){function e(t,r){(0,n.Z)(this,e),this._file={type:"model/gltf-binary",data:t},this.origin=r}return(0,s.Z)(e,[{key:"buffer",value:function(){return Promise.resolve(this._file)}},{key:"download",value:function(e){(0,a.io)(new Blob([this._file.data],{type:this._file.type}),e)}}]),e}();function Y(e,t){var r=new F,i=new Z;return r.addScene(i),i.addNode(new D(e)),U(r,t).then((function(e){return new G(e[P],e.origin)}))}},91958:function(e,t,r){r.d(t,{$7:function(){return g},$e:function(){return u},E0:function(){return d},N5:function(){return p},lW:function(){return f}});var i=r(74165),n=r(15861),s=(r(93169),r(10064)),a=r(92026),o=r(35995);function u(e){var t=d(e);return(0,a.pC)(t)?t.toDataURL():""}function f(e){return h.apply(this,arguments)}function h(){return h=(0,n.Z)((0,i.Z)().mark((function e(t){var r,n,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d(t),!(0,a.Wi)(r)){e.next=3;break}throw new s.Z("imageToArrayBuffer","Unsupported image type");case 3:return e.next=5,c(t);case 5:return n=e.sent,e.next=8,new Promise((function(e){return r.toBlob(e,n)}));case 8:if(o=e.sent){e.next=11;break}throw new s.Z("imageToArrayBuffer","Failed to encode image");case 11:return e.next=13,o.arrayBuffer();case 13:return e.t0=e.sent,e.t1=n,e.abrupt("return",{data:e.t0,type:e.t1});case 16:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)((0,i.Z)().mark((function e(t){var r,n,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof HTMLImageElement){e.next=2;break}return e.abrupt("return","image/png");case 2:if(r=t.src,!(0,o.HK)(r)){e.next=6;break}return n=(0,o.sJ)(r),s=n.mediaType,e.abrupt("return","image/jpeg"===s?s:"image/png");case 6:return e.abrupt("return",/\.png$/i.test(r)?"image/png":/\.(jpg|jpeg)$/i.test(r)?"image/jpeg":"image/png");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),t}function p(e){for(var t=[],r=new Uint8Array(e),i=0;i<r.length;i++)t.push(String.fromCharCode(r[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function g(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}}}]);
//# sourceMappingURL=5477.5133567a.chunk.js.map