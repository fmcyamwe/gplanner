import{bd as X,j as K,be as Y,c as t,h as b,bf as Z,g as D,bn as p,r as A,w as ee,a0 as ae,aB as te,bt as ne,ax as le}from"./index.640fc71d.js";import{b as w,T as ue,n as I}from"./QSelect.337bc21c.js";const z={...X,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},B=50,T=2*B,j=T*Math.PI,re=Math.round(j*1e3)/1e3;var ie=K({name:"QCircularProgress",props:{...z,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:k}){const{proxy:{$q:h}}=D(),y=Y(e),C=t(()=>{const n=(h.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(h.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-n}deg)`:`rotate3d(0, 0, 1, ${n-90}deg)`}}),o=t(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),l=t(()=>T/(1-e.thickness/2)),v=t(()=>`${l.value/2} ${l.value/2} ${l.value} ${l.value}`),s=t(()=>w(e.value,e.min,e.max)),m=t(()=>e.max-e.min),g=t(()=>e.thickness/2*l.value),f=t(()=>{const n=(e.max-s.value)/m.value,r=e.rounded===!0&&s.value<e.max&&n<.25?g.value/2*(1-n/.25):0;return j*n+r});function M({thickness:n,offset:r,color:S,cls:V,rounded:P}){return b("circle",{class:"q-circular-progress__"+V+(S!==void 0?` text-${S}`:""),style:o.value,fill:"transparent",stroke:"currentColor","stroke-width":n,"stroke-dasharray":re,"stroke-dashoffset":r,"stroke-linecap":P,cx:l.value,cy:l.value,r:B})}return()=>{const n=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&n.push(b("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:B-g.value/2,cx:l.value,cy:l.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&n.push(M({cls:"track",thickness:g.value,offset:0,color:e.trackColor})),n.push(M({cls:"circle",thickness:g.value,offset:f.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const r=[b("svg",{class:"q-circular-progress__svg",style:C.value,viewBox:v.value,"aria-hidden":"true"},n)];return e.showValue===!0&&r.push(b("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},k.default!==void 0?k.default():[b("div",s.value)])),b("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:y.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:s.value},Z(k.internal,r))}}});const Q=[34,37,40,33,39,38],oe=Object.keys(z);var de=K({name:"QKnob",props:{...p,...z,modelValue:{type:Number,required:!0},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},tabindex:{type:[Number,String],default:0},disable:Boolean,readonly:Boolean},emits:["update:modelValue","change","dragValue"],setup(e,{slots:k,emit:h}){const{proxy:y}=D(),{$q:C}=y,o=A(e.modelValue),l=A(!1),v=t(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),s=t(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax);let m;function g(){o.value=e.modelValue===null?v.value:w(e.modelValue,v.value,s.value),$(!0)}ee(()=>`${e.modelValue}|${v.value}|${s.value}`,g),g();const f=t(()=>e.disable===!1&&e.readonly===!1),M=t(()=>"q-knob non-selectable"+(f.value===!0?" q-knob--editable":e.disable===!0?" disabled":"")),n=t(()=>(String(e.step).trim().split(".")[1]||"").length),r=t(()=>e.step===0?1:e.step),S=t(()=>e.instantFeedback===!0||l.value===!0),V=C.platform.is.mobile===!0?t(()=>f.value===!0?{onClick:_}:{}):t(()=>f.value===!0?{onMousedown:G,onClick:_,onKeydown:W,onKeyup:H}:{}),P=t(()=>f.value===!0?{tabindex:e.tabindex}:{[`aria-${e.disable===!0?"disabled":"readonly"}`]:"true"}),E=t(()=>{const a={};return oe.forEach(i=>{a[i]=e[i]}),a});function O(a){a.isFinal?(x(a.evt,!0),l.value=!1):(a.isFirst&&(F(),l.value=!0),x(a.evt))}const R=t(()=>[[ue,O,void 0,{prevent:!0,stop:!0,mouse:!0}]]);function F(){const{top:a,left:i,width:d,height:N}=y.$el.getBoundingClientRect();m={top:a+N/2,left:i+d/2}}function G(a){F(),x(a)}function _(a){F(),x(a,!0)}function W(a){if(!Q.includes(a.keyCode))return;ae(a);const i=([34,33].includes(a.keyCode)?10:1)*r.value,d=[34,37,40].includes(a.keyCode)?-i:i;o.value=w(parseFloat((o.value+d).toFixed(n.value)),v.value,s.value),$()}function x(a,i){const d=te(a),N=Math.abs(d.top-m.top),U=Math.sqrt(N**2+Math.abs(d.left-m.left)**2);let u=Math.asin(N/U)*(180/Math.PI);d.top<m.top?u=m.left<d.left?90-u:270+u:u=m.left<d.left?u+90:270-u,C.lang.rtl===!0?u=I(-u-e.angle,0,360):e.angle&&(u=I(u-e.angle,0,360)),e.reverse===!0&&(u=360-u);let c=e.min+u/360*(e.max-e.min);if(r.value!==0){const q=c%r.value;c=c-q+(Math.abs(q)>=r.value/2?(q<0?-1:1)*r.value:0),c=parseFloat(c.toFixed(n.value))}c=w(c,v.value,s.value),h("dragValue",c),o.value!==c&&(o.value=c),$(i)}function H(a){Q.includes(a.keyCode)&&$(!0)}function $(a){e.modelValue!==o.value&&h("update:modelValue",o.value),a===!0&&h("change",o.value)}const J=ne(e);function L(){return b("input",J.value)}return()=>{const a={class:M.value,role:"slider","aria-valuemin":v.value,"aria-valuemax":s.value,"aria-valuenow":e.modelValue,...P.value,...E.value,value:o.value,instantFeedback:S.value,...V.value},i={default:k.default};return f.value===!0&&e.name!==void 0&&(i.internal=L),le(ie,a,i,"knob",f.value,()=>R.value)}}});export{de as Q};