import{r as S,Y as he,a8 as V,n as me,a9 as C,w as x,b as ve,e as H,g as U,aa as P,x as O,ab as I,ac as ge,B as be,j as Z,ad as xe,ae as pe,af as ye,c as b,ag as we,ah as Te,ai as Se,aj as Ce,ak as He,u as Ee,h as $,T as Me,k as ke,Z as Le,D as We}from"./index.cd2fe454.js";import{c as A}from"./goalStorage.709f87a9.js";const qe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Pe({showing:e,avoidEmit:l,configureAnchorEl:i}){const{props:t,proxy:n,emit:s}=U(),o=S(null);let u=null;function d(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};i===void 0&&(Object.assign(r,{hide(a){n.hide(a)},toggle(a){n.toggle(a),a.qAnchorHandled=!0},toggleKey(a){he(a,13)===!0&&r.toggle(a)},contextClick(a){n.hide(a),V(a),me(()=>{n.show(a),a.qAnchorHandled=!0})},prevent:V,mobileTouch(a){if(r.mobileCleanup(a),d(a)!==!0)return;n.hide(a),o.value.classList.add("non-selectable");const h=a.target;C(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,n.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&A()}}),i=function(a=t.contextMenu){if(t.noParentEvent===!0||o.value===null)return;let h;a===!0?n.$q.platform.is.mobile===!0?h=[[o.value,"touchstart","mobileTouch","passive"]]:h=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:h=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],C(r,"anchor",h)});function c(){P(r,"anchor")}function k(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function w(){if(t.target===!1||t.target===""||n.$el.parentNode===null)o.value=null;else if(t.target===!0)k(n.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,i()):(o.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return x(()=>t.contextMenu,a=>{o.value!==null&&(c(),i(a))}),x(()=>t.target,()=>{o.value!==null&&c(),w()}),x(()=>t.noParentEvent,a=>{o.value!==null&&(a===!0?c():i())}),ve(()=>{w(),l!==!0&&t.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),H(()=>{u!==null&&clearTimeout(u),c()}),{anchorEl:o,canShow:d,anchorEvents:r}}function Oe(e,l){const i=S(null);let t;function n(u,d){const r=`${d!==void 0?"add":"remove"}EventListener`,c=d!==void 0?d:t;u!==window&&u[r]("scroll",c,O.passive),window[r]("scroll",c,O.passive),t=d}function s(){i.value!==null&&(n(i.value),i.value=null)}const o=x(()=>e.noParentEvent,()=>{i.value!==null&&(s(),l())});return H(o),{localScrollTarget:i,unconfigureScrollTarget:s,changeScrollEvent:n}}const{notPassiveCapture:E}=O,g=[];function M(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let i=I.length-1;for(;i>=0;){const t=I[i].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;i--}for(let t=g.length-1;t>=0;t--){const n=g[t];if((n.anchorEl.value===null||n.anchorEl.value.contains(l)===!1)&&(l===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(l)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function $e(e){g.push(e),g.length===1&&(document.addEventListener("mousedown",M,E),document.addEventListener("touchstart",M,E))}function K(e){const l=g.findIndex(i=>i===e);l>-1&&(g.splice(l,1),g.length===0&&(document.removeEventListener("mousedown",M,E),document.removeEventListener("touchstart",M,E)))}let Y,F;function X(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ae(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const B={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{B[`${e}#ltr`]=e,B[`${e}#rtl`]=e});function _(e,l){const i=e.split(" ");return{vertical:i[0],horizontal:B[`${i[1]}#${l===!0?"rtl":"ltr"}`]}}function Be(e,l){let{top:i,left:t,right:n,bottom:s,width:o,height:u}=e.getBoundingClientRect();return l!==void 0&&(i-=l[1],t-=l[0],s+=l[1],n+=l[0],o+=l[0],u+=l[1]),{top:i,bottom:s,height:u,left:t,right:n,width:o,middle:t+(n-t)/2,center:i+(s-i)/2}}function ze(e,l,i){let{top:t,left:n}=e.getBoundingClientRect();return t+=l.top,n+=l.left,i!==void 0&&(t+=i[1],n+=i[0]),{top:t,bottom:t+1,height:1,left:n,right:n+1,width:1,middle:n,center:t}}function je(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function G(e,l,i){return{top:e[i.anchorOrigin.vertical]-l[i.selfOrigin.vertical],left:e[i.anchorOrigin.horizontal]-l[i.selfOrigin.horizontal]}}function De(e){if(ge.is.ios===!0&&window.visualViewport!==void 0){const u=document.body.style,{offsetLeft:d,offsetTop:r}=window.visualViewport;d!==Y&&(u.setProperty("--q-pe-left",d+"px"),Y=d),r!==F&&(u.setProperty("--q-pe-top",r+"px"),F=r)}const{scrollLeft:l,scrollTop:i}=e.el,t=e.absoluteOffset===void 0?Be(e.anchorEl,e.cover===!0?[0,0]:e.offset):ze(e.anchorEl,e.absoluteOffset,e.offset);let n={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(n.minWidth=t.width+"px",e.cover===!0&&(n.minHeight=t.height+"px")),Object.assign(e.el.style,n);const s=je(e.el);let o=G(t,s,e);if(e.absoluteOffset===void 0||e.offset===void 0)q(o,t,s,e.anchorOrigin,e.selfOrigin);else{const{top:u,left:d}=o;q(o,t,s,e.anchorOrigin,e.selfOrigin);let r=!1;if(o.top!==u){r=!0;const c=2*e.offset[1];t.center=t.top-=c,t.bottom-=c+2}if(o.left!==d){r=!0;const c=2*e.offset[0];t.middle=t.left-=c,t.right-=c+2}r===!0&&(o=G(t,s,e),q(o,t,s,e.anchorOrigin,e.selfOrigin))}n={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(n.maxHeight=o.maxHeight+"px",t.height>o.maxHeight&&(n.minHeight=n.maxHeight)),o.maxWidth!==void 0&&(n.maxWidth=o.maxWidth+"px",t.width>o.maxWidth&&(n.minWidth=n.maxWidth)),Object.assign(e.el.style,n),e.el.scrollTop!==i&&(e.el.scrollTop=i),e.el.scrollLeft!==l&&(e.el.scrollLeft=l)}function q(e,l,i,t,n){const s=i.bottom,o=i.right,u=be(),d=window.innerHeight-u,r=document.body.clientWidth;if(e.top<0||e.top+s>d)if(n.vertical==="center")e.top=l[t.vertical]>d/2?Math.max(0,d-s):0,e.maxHeight=Math.min(s,d);else if(l[t.vertical]>d/2){const c=Math.min(d,t.vertical==="center"?l.center:t.vertical===n.vertical?l.bottom:l.top);e.maxHeight=Math.min(s,c),e.top=Math.max(0,c-s)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===n.vertical?l.top:l.bottom),e.maxHeight=Math.min(s,d-e.top);if(e.left<0||e.left+o>r)if(e.maxWidth=Math.min(o,r),n.horizontal==="middle")e.left=l[t.horizontal]>r/2?Math.max(0,r-o):0;else if(l[t.horizontal]>r/2){const c=Math.min(r,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.right:l.left);e.maxWidth=Math.min(o,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===n.horizontal?l.left:l.right),e.maxWidth=Math.min(o,r-e.left)}var Ve=Z({name:"QTooltip",inheritAttrs:!1,props:{...qe,...xe,...pe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:X},self:{type:String,default:"top middle",validator:X},offset:{type:Array,default:()=>[14,14],validator:Ae},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ye],setup(e,{slots:l,emit:i,attrs:t}){let n,s;const o=U(),{proxy:{$q:u}}=o,d=S(null),r=S(!1),c=b(()=>_(e.anchor,u.lang.rtl)),k=b(()=>_(e.self,u.lang.rtl)),w=b(()=>e.persistent!==!0),{registerTick:a,removeTick:h}=we(),{registerTimeout:T}=Te(),{transitionProps:J,transitionStyle:ee}=Se(e),{localScrollTarget:z,changeScrollEvent:te,unconfigureScrollTarget:le}=Oe(e,Q),{anchorEl:m,canShow:ne,anchorEvents:p}=Pe({showing:r,configureAnchorEl:de}),{show:ie,hide:L}=Ce({showing:r,canShow:ne,handleShow:ae,handleHide:re,hideOnRouteChange:w,processOnMount:!0});Object.assign(p,{delayShow:ue,delayHide:se});const{showPortal:j,hidePortal:D,renderPortal:oe}=He(o,d,fe,"tooltip");if(u.platform.is.mobile===!0){const f={anchorEl:m,innerRef:d,onClickOutside(v){return L(v),v.target.classList.contains("q-dialog__backdrop")&&Le(v),!0}},W=b(()=>e.modelValue===null&&e.persistent!==!0&&r.value===!0);x(W,v=>{(v===!0?$e:K)(f)}),H(()=>{K(f)})}function ae(f){j(),a(()=>{s=new MutationObserver(()=>y()),s.observe(d.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),y(),Q()}),n===void 0&&(n=x(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,y)),T(()=>{j(!0),i("show",f)},e.transitionDuration)}function re(f){h(),D(),N(),T(()=>{D(!0),i("hide",f)},e.transitionDuration)}function N(){s!==void 0&&(s.disconnect(),s=void 0),n!==void 0&&(n(),n=void 0),le(),P(p,"tooltipTemp")}function y(){const f=d.value;m.value===null||!f||De({el:f,offset:e.offset,anchorEl:m.value,anchorOrigin:c.value,selfOrigin:k.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ue(f){if(u.platform.is.mobile===!0){A(),document.body.classList.add("non-selectable");const W=m.value,v=["touchmove","touchcancel","touchend","click"].map(R=>[W,R,"delayHide","passiveCapture"]);C(p,"tooltipTemp",v)}T(()=>{ie(f)},e.delay)}function se(f){u.platform.is.mobile===!0&&(P(p,"tooltipTemp"),A(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),T(()=>{L(f)},e.hideDelay)}function de(){if(e.noParentEvent===!0||m.value===null)return;const f=u.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];C(p,"anchor",f)}function Q(){if(m.value!==null||e.scrollTarget!==void 0){z.value=Ee(m.value,e.scrollTarget);const f=e.noParentEvent===!0?y:L;te(z.value,f)}}function ce(){return r.value===!0?$("div",{...t,ref:d,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,ee.value],role:"tooltip"},ke(l.default)):null}function fe(){return $(Me,J.value,ce)}return H(N),Object.assign(o.proxy,{updatePosition:y}),oe}});const Ne=["top","middle","bottom"];var Ie=Z({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Ne.includes(e)}},setup(e,{slots:l}){const i=b(()=>e.align!==void 0?{verticalAlign:e.align}:null),t=b(()=>{const n=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(n!==void 0?` text-${n}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>$("div",{class:t.value,style:i.value,role:"status","aria-label":e.label},We(l.default,e.label!==void 0?[e.label]:[]))}});function Ke(e,l){var n;const i=l==="header";return{[`text-white ${e.bgcolor?"bg-"+((n=e==null?void 0:e.bgcolor)==null?void 0:n.toLocaleLowerCase()):"bg-black"}`]:!0,"full-width":!i&&(!e.side||e.side==="full"),"left-side":!i&&e.side==="left","right-side":!i&&e.side==="right","rounded-border":!0}}function Ye(e,l,i=void 0,t=void 0){const n={};return i&&t&&(n.top=i(e.time)+"px",n.height=t(e.duration)+"px"),n["align-items"]="flex-start",n}function Fe(){return["blue-grey","blue-grey-5","grey-10","brown","deep-orange","orange","amber","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"]}function Xe(e){if(!e)return"";let l=e.split(":");return parseInt(l[0])>=12?e+"PM":e+"AM"}function _e(e){const l=e.split(/on/);return l.length!=2?-89:l[1]-l[0]}export{Ie as Q,Ke as a,Ye as b,Ve as c,Ae as d,Oe as e,Pe as f,_ as g,$e as h,_e as i,Fe as p,K as r,De as s,qe as u,X as v,Xe as w};