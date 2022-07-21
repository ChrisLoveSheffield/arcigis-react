"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1773],{51773:(t,e,o)=>{o.d(e,{Z:()=>$});var i=o(43697),r=o(46791),s=o(96674),n=o(22974),a=o(92604),l=o(95330),p=o(5600),d=o(90578),h=o(71715),c=o(52011),y=o(30556),u=o(75215),m=o(35671),f=o(84649),g=o(63801),v=o(48074),_=o(38745),b=o(9190),w=o(10214),x=o(44951);const C={base:null,key:"type",typeMap:{attachment:f.Z,media:w.Z,text:x.Z,expression:_.Z,field:b.Z}};var I,j=o(11223),F=o(422);o(67676),o(80442);let S=I=class extends s.wq{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new I({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],S.prototype,"returnTopmostRaster",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],S.prototype,"showNoDataRecords",void 0),S=I=(0,i._)([(0,c.j)("esri.popup.LayerOptions")],S);const T=S;var Z,N=o(44729);let O=Z=class extends s.wq{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new Z({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,n.d9)(this.orderByFields):null})}};(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],O.prototype,"showRelatedRecords",void 0),(0,i._)([(0,p.Cb)({type:[N.Z],json:{write:!0}})],O.prototype,"orderByFields",void 0),O=Z=(0,i._)([(0,c.j)("esri.popup.RelatedRecordsInfo")],O);const M=O;var A,D=o(79742),L=o(15923),E=o(10699);let R=A=class extends((0,E.IG)(L.Z)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new A({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};(0,i._)([(0,p.Cb)()],R.prototype,"active",void 0),(0,i._)([(0,p.Cb)()],R.prototype,"className",void 0),(0,i._)([(0,p.Cb)()],R.prototype,"disabled",void 0),(0,i._)([(0,p.Cb)()],R.prototype,"id",void 0),(0,i._)([(0,p.Cb)()],R.prototype,"indicator",void 0),(0,i._)([(0,p.Cb)()],R.prototype,"title",void 0),(0,i._)([(0,p.Cb)()],R.prototype,"type",void 0),(0,i._)([(0,p.Cb)()],R.prototype,"visible",void 0),R=A=(0,i._)([(0,c.j)("esri.support.actions.ActionBase")],R);const Y=R;var J;let B=J=class extends Y{constructor(t){super(t),this.image=null,this.type="button"}clone(){return new J({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};(0,i._)([(0,p.Cb)()],B.prototype,"image",void 0),B=J=(0,i._)([(0,c.j)("esri.support.Action.ActionButton")],B);const k=B;var q;let U=q=class extends Y{constructor(t){super(t),this.image=null,this.type="toggle",this.value=!1}clone(){return new q({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};(0,i._)([(0,p.Cb)()],U.prototype,"image",void 0),(0,i._)([(0,p.Cb)()],U.prototype,"value",void 0),U=q=(0,i._)([(0,c.j)("esri.support.Action.ActionToggle")],U);const V=U;var P;const z=r.Z.ofType({key:"type",defaultKeyValue:"button",base:Y,typeMap:{button:k,toggle:V}}),G={base:g.Z,key:"type",typeMap:{media:w.Z,custom:v.Z,text:x.Z,attachments:f.Z,fields:b.Z,expression:_.Z}},K="esri.PopupTemplate",W=a.Z.getLogger(K),H=["attachments","fields","media","text","expression"];let X=P=class extends s.wq{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(t){return Array.isArray(t)?t.map((t=>(0,u.N7)(G,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||(0,l.y8)(t)?t:(W.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,o,i){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>H.includes(t.type))).map((t=>t&&t.toJSON(i))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e)}))):e.description=t}writeFieldInfos(t,e,o,i){const{content:r}=this,s=Array.isArray(r)?r:null;if(t){const o=s?s.filter((t=>"fields"===t.type)):[],r=o.length&&o.every((t=>t.fieldInfos?.length));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(i);return r&&(e.visible=!1),e}))}if(s)for(const t of s)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,o,i){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(i)}writeTitle(t,e){e.title=t||""}clone(){const{actions:t}=this,e=t?(0,n.d9)(t.toArray()):[];return new P({actions:e,content:Array.isArray(this.content)?(0,n.d9)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?(0,n.d9)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?(0,n.d9)(this.fieldInfos):null,layerOptions:this.layerOptions?(0,n.d9)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?(0,n.d9)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?(0,n.d9)(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){const o=this.expressionInfos||[];await this._collectExpressionInfoFields(t,e,[...o,...this._getContentExpressionInfos(this.content,o)]),(0,m.gd)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=(0,n.d9)(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t)})):e.fieldInfos=o}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=(0,n.d9)(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:o}){const i={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||i.mediaInfos||(o.mediaInfos=e,i.mediaInfos=!0),w.Z.fromJSON(o)):"text"===o.type?(o.text||!t||i.description||(o.text=t,i.description=!0),x.Z.fromJSON(o)):"attachments"===o.type?f.Z.fromJSON(o):"fields"===o.type?b.Z.fromJSON(o):"expression"===o.type?_.Z.fromJSON(o):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o}){const i=[];return t?i.push(new x.Z({text:t})):i.push(new b.Z),Array.isArray(e)&&e.length&&i.push(w.Z.fromJSON({mediaInfos:e})),o&&i.push(f.Z.fromJSON({displayType:"auto"})),i.length?i:t}_getContentElementFields(t){const e=t?.type;if("attachments"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)];if("custom"===e)return t.outFields||[];if("fields"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos||this.fieldInfos)];if("media"===e){const e=t.mediaInfos||[];return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...e.reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])]}return"text"===e?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:e,title:o,value:i}=t,r=i||{},{fields:s=[],normalizeField:n,tooltipField:a,sourceURL:l,linkURL:p}=r,d=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(p),...s];return n&&d.push(n),a&&d.push(a),d}_getContentExpressionInfos(t,e){return Array.isArray(t)?t.reduce(((t,e)=>[...t,..."expression"===e.type&&e.expressionInfo?[e.expressionInfo]:[]]),e):[]}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>(0,m.io)(t,e,o.expression))))}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>!t.includes("relationships/")&&!t.includes("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:i}=t,r="button"===i||"toggle"===i?t.image:"";return[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(r)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[];const e=t.match(/{[^}]*}/g);if(!e)return[];const o=/\{(\w+):.+\}/,i=e.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(o,"{$1}")));return i?i.map((t=>t.slice(1,-1))):[]}};(0,i._)([(0,p.Cb)({type:z})],X.prototype,"actions",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"content",void 0),(0,i._)([(0,d.p)("content")],X.prototype,"castContent",null),(0,i._)([(0,h.r)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],X.prototype,"readContent",null),(0,i._)([(0,y.c)("content",{popupElements:{type:r.Z.ofType(C)},showAttachments:{type:Boolean},mediaInfos:{type:r.Z.ofType(D.V)},description:{type:String}})],X.prototype,"writeContent",null),(0,i._)([(0,p.Cb)({type:[j.Z],json:{write:!0}})],X.prototype,"expressionInfos",void 0),(0,i._)([(0,p.Cb)({type:[F.Z]})],X.prototype,"fieldInfos",void 0),(0,i._)([(0,y.c)("fieldInfos")],X.prototype,"writeFieldInfos",null),(0,i._)([(0,p.Cb)({type:T})],X.prototype,"layerOptions",void 0),(0,i._)([(0,y.c)("layerOptions")],X.prototype,"writeLayerOptions",null),(0,i._)([(0,p.Cb)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],X.prototype,"lastEditInfoEnabled",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"outFields",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"overwriteActions",void 0),(0,i._)([(0,p.Cb)()],X.prototype,"returnGeometry",void 0),(0,i._)([(0,p.Cb)({json:{type:String}})],X.prototype,"title",void 0),(0,i._)([(0,y.c)("title")],X.prototype,"writeTitle",null),(0,i._)([(0,p.Cb)({type:M,json:{write:!0}})],X.prototype,"relatedRecordsInfo",void 0),X=P=(0,i._)([(0,c.j)(K)],X);const $=X},90344:(t,e,o)=>{o.d(e,{Ze:()=>f,p6:()=>g});var i=o(35454),r=o(70171);const s={year:"numeric",month:"numeric",day:"numeric"},n={year:"numeric",month:"long",day:"numeric"},a={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},p={hour:"numeric",minute:"numeric"},d={...p,second:"numeric"},h={"short-date":s,"short-date-short-time":{...s,...p},"short-date-short-time-24":{...s,...p,hour12:!1},"short-date-long-time":{...s,...d},"short-date-long-time-24":{...s,...d,hour12:!1},"short-date-le":s,"short-date-le-short-time":{...s,...p},"short-date-le-short-time-24":{...s,...p,hour12:!1},"short-date-le-long-time":{...s,...d},"short-date-le-long-time-24":{...s,...d,hour12:!1},"long-month-day-year":n,"long-month-day-year-short-time":{...n,...p},"long-month-day-year-short-time-24":{...n,...p,hour12:!1},"long-month-day-year-long-time":{...n,...d},"long-month-day-year-long-time-24":{...n,...d,hour12:!1},"day-short-month-year":a,"day-short-month-year-short-time":{...a,...p},"day-short-month-year-short-time-24":{...a,...p,hour12:!1},"day-short-month-year-long-time":{...a,...d},"day-short-month-year-long-time-24":{...a,...d,hour12:!1},"long-date":l,"long-date-short-time":{...l,...p},"long-date-short-time-24":{...l,...p,hour12:!1},"long-date-long-time":{...l,...d},"long-date-long-time-24":{...l,...d,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":p,"long-time":d},c=(0,i.w)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),y=(c.apiValues,c.toJSON.bind(c),c.fromJSON.bind(c),{ar:"ar-u-nu-latn-ca-gregory"});let u=new WeakMap,m=h["short-date-short-time"];function f(t){return h[t]||null}function g(t,e){return function(t){const e=t||m;if(!u.has(e)){const t=(0,r.Kd)(),o=y[(0,r.Kd)()]||t;u.set(e,new Intl.DateTimeFormat(o,e))}return u.get(e)}(e).format(t)}(0,r.Ze)((()=>{u=new WeakMap,m=h["short-date-short-time"]}))},18848:(t,e,o)=>{o.d(e,{sh:()=>l,uf:()=>p});var i=o(70586),r=o(70171);const s={ar:"ar-u-nu-latn"};let n=new WeakMap,a={};function l(t={}){const e={};return null!=t.digitSeparator&&(e.useGrouping=t.digitSeparator),null!=t.places&&(e.minimumFractionDigits=e.maximumFractionDigits=t.places),e}function p(t,e){return-0===t&&(t=0),function(t){const e=t||a;if(!n.has(e)){const o=(0,r.Kd)(),i=s[(0,r.Kd)()]||o;n.set(e,new Intl.NumberFormat(i,t))}return(0,i.j0)(n.get(e))}(e).format(t)}(0,r.Ze)((()=>{n=new WeakMap,a={}}))},11223:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(96674),n=o(5600),a=(o(67676),o(80442),o(75215),o(52011));let l=i=class extends s.wq{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new i({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"name",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"expression",void 0),(0,r._)([(0,n.Cb)({type:["string","number"],json:{write:!0}})],l.prototype,"returnType",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.ExpressionInfo")],l);const p=l},422:(t,e,o)=>{o.d(e,{Z:()=>y});var i,r=o(43697),s=o(35454),n=o(96674),a=o(22974),l=o(5600),p=(o(75215),o(36030)),d=o(52011),h=o(63061);let c=i=class extends n.wq{constructor(t){super(t),this.fieldName=null,this.format=null,this.isEditable=!1,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new i({fieldName:this.fieldName,format:this.format?(0,a.d9)(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),(0,r._)([(0,l.Cb)({type:h.Z,json:{write:!0}})],c.prototype,"format",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0,default:!1}})],c.prototype,"isEditable",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,r._)([(0,p.J)(new s.X({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],c.prototype,"stringFieldOption",void 0),(0,r._)([(0,l.Cb)({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],c.prototype,"statisticType",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"tooltip",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"visible",void 0),c=i=(0,r._)([(0,d.j)("esri.popup.FieldInfo")],c);const y=c},84649:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(63801);let l=i=class extends a.Z{constructor(t){super(t),this.description=null,this.displayType="auto",this.title=null,this.type="attachments"}clone(){return new i({description:this.description,displayType:this.displayType,title:this.title})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"description",void 0),(0,r._)([(0,s.Cb)({type:["auto","preview","list"],json:{write:!0}})],l.prototype,"displayType",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,r._)([(0,s.Cb)({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=i=(0,r._)([(0,n.j)("esri.popup.content.AttachmentsContent")],l);const p=l},41463:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(50379),l=o(87102);let p=i=class extends a.Z{constructor(t){super(t),this.type="bar-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:l.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.BarChartMediaInfo")],p);const d=p},87131:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(50379),l=o(87102);let p=i=class extends a.Z{constructor(t){super(t),this.type="column-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:l.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.ColumnChartMediaInfo")],p);const d=p},63801:(t,e,o)=>{o.d(e,{Z:()=>l});var i=o(43697),r=o(96674),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011));let a=class extends r.wq{constructor(t){super(t),this.type=null}};(0,i._)([(0,s.Cb)({type:["attachments","custom","fields","media","text","expression"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,i._)([(0,n.j)("esri.popup.content.Content")],a);const l=a},48074:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(22974),n=o(5600),a=(o(75215),o(52011)),l=o(63801);let p=i=class extends l.Z{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new i({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?(0,s.d9)(this.outFields):null})}};(0,r._)([(0,n.Cb)()],p.prototype,"creator",void 0),(0,r._)([(0,n.Cb)()],p.prototype,"destroyer",void 0),(0,r._)([(0,n.Cb)()],p.prototype,"outFields",void 0),(0,r._)([(0,n.Cb)({type:["custom"],readOnly:!0})],p.prototype,"type",void 0),p=i=(0,r._)([(0,a.j)("esri.popup.content.CustomContent")],p);const d=p},38745:(t,e,o)=>{o.d(e,{Z:()=>y});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(96674);let l=i=class extends a.wq{constructor(t){super(t),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new i({title:this.title,expression:this.expression})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"expression",void 0),(0,r._)([(0,s.Cb)({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"returnType",void 0),l=i=(0,r._)([(0,n.j)("esri.popup.ElementExpressionInfo")],l);const p=l;var d,h=o(63801);let c=d=class extends h.Z{constructor(t){super(t),this.expressionInfo=null,this.type="expression"}clone(){return new d({expressionInfo:this.expressionInfo?.clone()})}};(0,r._)([(0,s.Cb)({type:p,json:{write:!0}})],c.prototype,"expressionInfo",void 0),(0,r._)([(0,s.Cb)({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=d=(0,r._)([(0,n.j)("esri.popup.content.ExpressionContent")],c);const y=c},9190:(t,e,o)=>{o.d(e,{Z:()=>c});var i,r=o(43697),s=o(22974),n=o(5600),a=(o(75215),o(52011)),l=o(30556),p=o(422),d=o(63801);let h=i=class extends d.Z{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,e){e.fieldInfos=t&&t.map((t=>t.toJSON()))}clone(){return new i((0,s.d9)({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};(0,r._)([(0,n.Cb)({type:Object,json:{write:!0}})],h.prototype,"attributes",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,r._)([(0,n.Cb)({type:[p.Z]})],h.prototype,"fieldInfos",void 0),(0,r._)([(0,l.c)("fieldInfos")],h.prototype,"writeFieldInfos",null),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=i=(0,r._)([(0,a.j)("esri.popup.content.FieldsContent")],h);const c=h},13151:(t,e,o)=>{o.d(e,{Z:()=>y});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(35320),l=o(96674);let p=i=class extends l.wq{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new i({linkURL:this.linkURL,sourceURL:this.sourceURL})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],p.prototype,"linkURL",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],p.prototype,"sourceURL",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.support.ImageMediaInfoValue")],p);const d=p;var h;let c=h=class extends a.Z{constructor(t){super(t),this.refreshInterval=null,this.type="image",this.value=null}clone(){return new h({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:Number,json:{write:!0}})],c.prototype,"refreshInterval",void 0),(0,r._)([(0,s.Cb)({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:d,json:{write:!0}})],c.prototype,"value",void 0),c=h=(0,r._)([(0,n.j)("esri.popup.content.ImageMediaInfo")],c);const y=c},55869:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(50379),l=o(87102);let p=i=class extends a.Z{constructor(t){super(t),this.type="line-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:l.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.LineChartMediaInfo")],p);const d=p},10214:(t,e,o)=>{o.d(e,{Z:()=>v});var i,r=o(43697),s=o(22974),n=o(5600),a=(o(75215),o(71715)),l=o(52011),p=o(30556),d=o(41463),h=o(87131),c=o(63801),y=o(13151),u=o(55869),m=o(13353),f=o(79742);let g=i=class extends c.Z{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map((t=>"image"===t.type?y.Z.fromJSON(t):"barchart"===t.type?d.Z.fromJSON(t):"columnchart"===t.type?h.Z.fromJSON(t):"linechart"===t.type?u.Z.fromJSON(t):"piechart"===t.type?m.Z.fromJSON(t):void 0)).filter(Boolean)}writeMediaInfos(t,e){e.mediaInfos=t&&t.map((t=>t.toJSON()))}clone(){return new i((0,s.d9)({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};(0,r._)([(0,n.Cb)()],g.prototype,"activeMediaInfoIndex",void 0),(0,r._)([(0,n.Cb)({type:Object,json:{write:!0}})],g.prototype,"attributes",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],g.prototype,"description",void 0),(0,r._)([(0,n.Cb)({types:[f.V]})],g.prototype,"mediaInfos",void 0),(0,r._)([(0,a.r)("mediaInfos")],g.prototype,"readMediaInfos",null),(0,r._)([(0,p.c)("mediaInfos")],g.prototype,"writeMediaInfos",null),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],g.prototype,"title",void 0),(0,r._)([(0,n.Cb)({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=i=(0,r._)([(0,l.j)("esri.popup.content.MediaContent")],g);const v=g},13353:(t,e,o)=>{o.d(e,{Z:()=>d});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(50379),l=o(87102);let p=i=class extends a.Z{constructor(t){super(t),this.type="pie-chart"}clone(){return new i({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};(0,r._)([(0,s.Cb)({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:l.l.write}})],p.prototype,"type",void 0),p=i=(0,r._)([(0,n.j)("esri.popup.content.PieChartMediaInfo")],p);const d=p},44951:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(63801);let l=i=class extends a.Z{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new i({text:this.text})}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],l.prototype,"text",void 0),(0,r._)([(0,s.Cb)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=i=(0,r._)([(0,n.j)("esri.popup.content.TextContent")],l);const p=l},50379:(t,e,o)=>{o.d(e,{Z:()=>g});var i,r=o(43697),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011)),a=o(35320),l=o(96674),p=o(22974),d=o(15923);let h=i=class extends d.Z{constructor(t){super(t),this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new i({fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};(0,r._)([(0,s.Cb)()],h.prototype,"fieldName",void 0),(0,r._)([(0,s.Cb)()],h.prototype,"tooltip",void 0),(0,r._)([(0,s.Cb)()],h.prototype,"value",void 0),h=i=(0,r._)([(0,n.j)("esri.popup.content.support.ChartMediaInfoValueSeries")],h);const c=h;var y;let u=y=class extends l.wq{constructor(t){super(t),this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new y({fields:(0,p.d9)(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})}};(0,r._)([(0,s.Cb)({type:[String],json:{write:!0}})],u.prototype,"fields",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],u.prototype,"normalizeField",void 0),(0,r._)([(0,s.Cb)({type:[c],json:{read:!1}})],u.prototype,"series",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],u.prototype,"tooltipField",void 0),u=y=(0,r._)([(0,n.j)("esri.popup.content.support.ChartMediaInfoValue")],u);const m=u;let f=class extends a.Z{constructor(t){super(t),this.type=null,this.value=null}};(0,r._)([(0,s.Cb)({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],f.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:m,json:{write:!0}})],f.prototype,"value",void 0),f=(0,r._)([(0,n.j)("esri.popup.content.mixins.ChartMediaInfo")],f);const g=f},35320:(t,e,o)=>{o.d(e,{Z:()=>l});var i=o(43697),r=o(96674),s=o(5600),n=(o(67676),o(80442),o(75215),o(52011));let a=class extends r.wq{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],a.prototype,"altText",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],a.prototype,"caption",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],a.prototype,"title",void 0),(0,i._)([(0,s.Cb)({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,i._)([(0,n.j)("esri.popup.content.mixins.MediaInfo")],a);const l=a},87102:(t,e,o)=>{o.d(e,{l:()=>i});const i=(0,o(35454).w)()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"})},79742:(t,e,o)=>{o.d(e,{V:()=>l});var i=o(41463),r=o(87131),s=o(13151),n=o(55869),a=o(13353);const l={base:o(35320).Z,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":i.Z,"column-chart":r.Z,"line-chart":n.Z,"pie-chart":a.Z,image:s.Z}}},63061:(t,e,o)=>{o.d(e,{Z:()=>u});var i=o(43697);const r=(0,o(35454).w)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});r.toJSON.bind(r),r.fromJSON.bind(r);var s,n=o(96674),a=o(5600),l=(o(67676),o(80442),o(75215)),p=o(36030),d=o(52011),h=o(90344),c=o(18848);let y=s=class extends n.wq{constructor(t){super(t),this.dateFormat=null,this.dateTimeFormatOptions=null,this.digitSeparator=!1,this.places=null}clone(){return new s({dateFormat:this.dateFormat,digitSeparator:this.digitSeparator,places:this.places})}format(t){return this.dateFormat?(0,h.p6)(t,{...(0,h.Ze)(this.dateFormat),...this.dateTimeFormatOptions}):(0,c.uf)(t,(0,c.sh)(this))}formatRasterPixelValue(t){let e,o;return t.trim().includes(",")?(e=",",o=e+" ",this._formatDelimitedString(t,e,o,this)):t.trim().includes(";")?(e=";",o=e+" ",this._formatDelimitedString(t,e,o,this)):t.trim().includes(" ")?(e=o=" ",this._formatDelimitedString(t,e,o,this)):this.format(Number(t))}_formatDelimitedString(t,e,o,i){return t&&e&&o&&i?t.trim().split(e).map((t=>this.format(Number(t)))).join(o):t}};(0,i._)([(0,p.J)(r)],y.prototype,"dateFormat",void 0),(0,i._)([(0,a.Cb)({type:Object,json:{read:!1}})],y.prototype,"dateTimeFormatOptions",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"digitSeparator",void 0),(0,i._)([(0,a.Cb)({type:l.z8,json:{write:!0}})],y.prototype,"places",void 0),y=s=(0,i._)([(0,d.j)("esri.popup.support.FieldInfoFormat")],y);const u=y},44729:(t,e,o)=>{o.d(e,{Z:()=>p});var i,r=o(43697),s=o(96674),n=o(5600),a=(o(67676),o(80442),o(75215),o(52011));let l=i=class extends s.wq{constructor(t){super(t),this.field=null,this.order=null}clone(){return new i({field:this.field,order:this.order})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],l.prototype,"field",void 0),(0,r._)([(0,n.Cb)({type:["asc","desc"],json:{write:!0}})],l.prototype,"order",void 0),l=i=(0,r._)([(0,a.j)("esri.popup.support.RelatedRecordsInfoFieldOrder")],l);const p=l}}]);