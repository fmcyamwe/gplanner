import{ak as fe,j as te,e as he,h as B,T as me,al as ve,a3 as z,m as ge,am as pe,a0 as J,an as V,$ as K,ao as F,ap as X,a1 as Y,ac as be,ad as ye,ae as Se,r as L,c as x,w as W,n as Ge,k,aq as Ce,D as Ee,g as Ae,ar as Me}from"./index.68c4a473.js";import{u as $e}from"./use-quasar.54710391.js";function De(){if(window.getSelection!==void 0){const r=window.getSelection();r.empty!==void 0?r.empty():r.removeAllRanges!==void 0&&(r.removeAllRanges(),fe.is.mobile!==!0&&r.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var xe=te({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(r,{slots:t,emit:g}){let G=!1,e,l,u=null,y=null,p,h;function C(){e&&e(),e=null,G=!1,u!==null&&(clearTimeout(u),u=null),y!==null&&(clearTimeout(y),y=null),l!==void 0&&l.removeEventListener("transitionend",p),p=null}function $(m,q,A){q!==void 0&&(m.style.height=`${q}px`),m.style.transition=`height ${r.duration}ms cubic-bezier(.25, .8, .50, 1)`,G=!0,e=A}function D(m,q){m.style.overflowY=null,m.style.height=null,m.style.transition=null,C(),q!==h&&g(q)}function E(m,q){let A=0;l=m,G===!0?(C(),A=m.offsetHeight===m.scrollHeight?0:void 0):(h="hide",m.style.overflowY="hidden"),$(m,A,q),u=setTimeout(()=>{u=null,m.style.height=`${m.scrollHeight}px`,p=_=>{y=null,(Object(_)!==_||_.target===m)&&D(m,"show")},m.addEventListener("transitionend",p),y=setTimeout(p,r.duration*1.1)},100)}function O(m,q){let A;l=m,G===!0?C():(h="show",m.style.overflowY="hidden",A=m.scrollHeight),$(m,A,q),u=setTimeout(()=>{u=null,m.style.height=0,p=_=>{y=null,(Object(_)!==_||_.target===m)&&D(m,"hide")},m.addEventListener("transitionend",p),y=setTimeout(p,r.duration*1.1)},100)}return he(()=>{G===!0&&C()}),()=>B(me,{css:!1,appear:r.appear,onEnter:E,onLeave:O},t.default)}});const H={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Oe=Object.keys(H);H.all=!0;function Z(r){const t={};for(const g of Oe)r[g]===!0&&(t[g]=!0);return Object.keys(t).length===0?H:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function ee(r,t){return t.event===void 0&&r.target!==void 0&&r.target.draggable!==!0&&typeof t.handler=="function"&&r.target.nodeName.toUpperCase()!=="INPUT"&&(r.qClonedBy===void 0||r.qClonedBy.indexOf(t.uid)===-1)}function P(r,t,g){const G=X(r);let e,l=G.left-t.event.x,u=G.top-t.event.y,y=Math.abs(l),p=Math.abs(u);const h=t.direction;h.horizontal===!0&&h.vertical!==!0?e=l<0?"left":"right":h.horizontal!==!0&&h.vertical===!0?e=u<0?"up":"down":h.up===!0&&u<0?(e="up",y>p&&(h.left===!0&&l<0?e="left":h.right===!0&&l>0&&(e="right"))):h.down===!0&&u>0?(e="down",y>p&&(h.left===!0&&l<0?e="left":h.right===!0&&l>0&&(e="right"))):h.left===!0&&l<0?(e="left",y<p&&(h.up===!0&&u<0?e="up":h.down===!0&&u>0&&(e="down"))):h.right===!0&&l>0&&(e="right",y<p&&(h.up===!0&&u<0?e="up":h.down===!0&&u>0&&(e="down")));let C=!1;if(e===void 0&&g===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};e=t.event.lastDir,C=!0,e==="left"||e==="right"?(G.left-=l,y=0,l=0):(G.top-=u,p=0,u=0)}return{synthetic:C,payload:{evt:r,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:G,direction:e,isFirst:t.event.isFirst,isFinal:g===!0,duration:Date.now()-t.event.time,distance:{x:y,y:p},offset:{x:l,y:u},delta:{x:G.left-t.event.lastX,y:G.top-t.event.lastY}}}}let qe=0;var we=ve({name:"touch-pan",beforeMount(r,{value:t,modifiers:g}){if(g.mouse!==!0&&z.has.touch!==!0)return;function G(l,u){g.mouse===!0&&u===!0?be(l):(g.stop===!0&&F(l),g.prevent===!0&&K(l))}const e={uid:"qvtp_"+qe++,handler:t,modifiers:g,direction:Z(g),noop:ge,mouseStart(l){ee(l,e)&&pe(l)&&(J(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(ee(l,e)){const u=l.target;J(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,u){if(z.is.firefox===!0&&V(r,!0),e.lastEvt=l,u===!0||g.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const h=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&K(h),l.cancelBubble===!0&&F(h),Object.assign(h,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:h}}F(l)}const{left:y,top:p}=X(l);e.event={x:y,y:p,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:y,lastY:p}},move(l){if(e.event===void 0)return;const u=X(l),y=u.left-e.event.x,p=u.top-e.event.y;if(y===0&&p===0)return;e.lastEvt=l;const h=e.event.mouse===!0,C=()=>{G(l,h);let E;g.preserveCursor!==!0&&g.preservecursor!==!0&&(E=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),h===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),De(),e.styleCleanup=O=>{if(e.styleCleanup=void 0,E!==void 0&&(document.documentElement.style.cursor=E),document.body.classList.remove("non-selectable"),h===!0){const m=()=>{document.body.classList.remove("no-pointer-events--children")};O!==void 0?setTimeout(()=>{m(),O()},50):m()}else O!==void 0&&O()}};if(e.event.detected===!0){e.event.isFirst!==!0&&G(l,e.event.mouse);const{payload:E,synthetic:O}=P(l,e,!1);E!==void 0&&(e.handler(E)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&C(),e.event.lastX=E.position.left,e.event.lastY=E.position.top,e.event.lastDir=O===!0?void 0:E.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||h===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){C(),e.event.detected=!0,e.move(l);return}const $=Math.abs(y),D=Math.abs(p);$!==D&&(e.direction.horizontal===!0&&$>D||e.direction.vertical===!0&&$<D||e.direction.up===!0&&$<D&&p<0||e.direction.down===!0&&$<D&&p>0||e.direction.left===!0&&$>D&&y<0||e.direction.right===!0&&$>D&&y>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,u){if(e.event!==void 0){if(Y(e,"temp"),z.is.firefox===!0&&V(r,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(P(l===void 0?e.lastEvt:l,e).payload);const{payload:y}=P(l===void 0?e.lastEvt:l,e,!0),p=()=>{e.handler(y)};e.styleCleanup!==void 0?e.styleCleanup(p):p()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(r.__qtouchpan=e,g.mouse===!0){const l=g.mouseCapture===!0||g.mousecapture===!0?"Capture":"";J(e,"main",[[r,"mousedown","mouseStart",`passive${l}`]])}z.has.touch===!0&&J(e,"main",[[r,"touchstart","touchStart",`passive${g.capture===!0?"Capture":""}`],[r,"touchmove","noop","notPassiveCapture"]])},updated(r,t){const g=r.__qtouchpan;g!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&g.end(),g.handler=t.value),g.direction=Z(t.modifiers))},beforeUnmount(r){const t=r.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),Y(t,"main"),Y(t,"temp"),z.is.firefox===!0&&V(r,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete r.__qtouchpan)}}),Ne=te({name:"QSplitter",props:{...ye,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:r=>["%","px"].includes(r)},limits:{type:Array,validator:r=>r.length!==2||typeof r[0]!="number"||typeof r[1]!="number"?!1:r[0]>=0&&r[0]<=r[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(r,{slots:t,emit:g}){const{proxy:{$q:G}}=Ae(),e=Se(r,G),l=L(null),u={before:L(null),after:L(null)},y=x(()=>`q-splitter no-wrap ${r.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${r.disable===!0?"disabled":"workable"}`+(e.value===!0?" q-splitter--dark":"")),p=x(()=>r.horizontal===!0?"height":"width"),h=x(()=>r.reverse!==!0?"before":"after"),C=x(()=>r.limits!==void 0?r.limits:r.unit==="%"?[10,90]:[50,1/0]);function $(M){return(r.unit==="%"?M:Math.round(M))+r.unit}const D=x(()=>({[h.value]:{[p.value]:$(r.modelValue)}}));let E,O,m,q,A;function _(M){if(M.isFirst===!0){const I=l.value.getBoundingClientRect()[p.value];E=r.horizontal===!0?"up":"left",O=r.unit==="%"?100:I,m=Math.min(O,C.value[1],Math.max(C.value[0],r.modelValue)),q=(r.reverse!==!0?1:-1)*(r.horizontal===!0?1:G.lang.rtl===!0?-1:1)*(r.unit==="%"?I===0?0:100/I:1),l.value.classList.add("q-splitter--active");return}if(M.isFinal===!0){A!==r.modelValue&&g("update:modelValue",A),l.value.classList.remove("q-splitter--active");return}const N=m+q*(M.direction===E?-1:1)*M.distance[r.horizontal===!0?"y":"x"];A=Math.min(O,C.value[1],Math.max(C.value[0],N)),u[h.value].value.style[p.value]=$(A),r.emitImmediately===!0&&r.modelValue!==A&&g("update:modelValue",A)}const j=x(()=>[[we,_,void 0,{[r.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function R(M,N){M<N[0]?g("update:modelValue",N[0]):M>N[1]&&g("update:modelValue",N[1])}return W(()=>r.modelValue,M=>{R(M,C.value)}),W(()=>r.limits,()=>{Ge(()=>{R(r.modelValue,C.value)})}),()=>{const M=[B("div",{ref:u.before,class:["q-splitter__panel q-splitter__before"+(r.reverse===!0?" col":""),r.beforeClass],style:D.value.before},k(t.before)),B("div",{class:["q-splitter__separator",r.separatorClass],style:r.separatorStyle,"aria-disabled":r.disable===!0?"true":void 0},[Ce("div",{class:"q-splitter__separator-area absolute-full"},k(t.separator),"sep",r.disable!==!0,()=>j.value)]),B("div",{ref:u.after,class:["q-splitter__panel q-splitter__after"+(r.reverse===!0?"":" col"),r.afterClass],style:D.value.after},k(t.after))];return B("div",{class:y.value,ref:l},Ee(t.default,M))}}});const Ie=Me("allGoals",()=>{L([{text:"",sortable:!1},{text:"#",sortable:!1},{text:"TITLE",value:"title",sortable:!1},{text:"Goal",value:"subGoal",sortable:!1},{text:"PRIORITY",value:"priority",sortable:!1},{text:"DURATION",value:"duration",sortable:!1}]);const r=[{text:"",sortable:!1},{text:"#",sortable:!1},{text:"TITLE",value:"title",sortable:!1},{text:"Goal",value:"subGoal",sortable:!1},{text:"PRIORITY",value:"priority",sortable:!1},{text:"DURATION",value:"duration",sortable:!1}],t=$e();x(()=>r);const g=x(()=>{let i=JSON.parse(t.localStorage.getItem("mainGoals"));return u(i)}),G=x(()=>{let i=JSON.parse(t.localStorage.getItem("subGoals"));return u(i)}),e=x(()=>JSON.parse(t.localStorage.getItem("AllDates"))),l=x(()=>JSON.parse(t.localStorage.getItem("Balancey")));function u(i){return i?[...i]:[]}function y(i){t.localStorage.set("Balancey",JSON.stringify(i))}function p(i,a,o=null){m(),t.localStorage.set("mainGoals",JSON.stringify(i)),t.localStorage.set("subGoals",JSON.stringify(a)),o&&t.localStorage.set("AllDates",JSON.stringify(o))}function h(i,a,o,s){let f=this.getMainGoals;if(!f){console.log("umm no mainGoals...adding"),t.localStorage.set("mainGoals",JSON.stringify([{id:0,title:i.trim(),details:a,priority:s,bgcolor:o,icon:"fas fa-utensils"}]));return}let b=f.length+1;for(;f.some(n=>n.id===b);)b=Math.floor(Math.random()*1e3);return f.unshift({id:b,title:i.trim(),details:a,priority:s,bgcolor:o,icon:"fas fa-utensils"}),t.localStorage.set("mainGoals",JSON.stringify(f)),b}function C(i,a,o,s,f){let b=this.getMainGoals;for(var n=0;n<b.length;n++)if(b[n].id===i){b[n].title=a.trim(),b[n].details=o,b[n].bgcolor=s,b[n].priority=f;break}t.localStorage.set("mainGoals",JSON.stringify(b))}function $(i,a,o,s,f,b,n,c,d){let v=this.getSubGoals;if(!v){t.localStorage.set("subGoals",JSON.stringify([{id:0,parentGoal:i,title:a.trim(),score:o,time:s,duration:f,canMove:b,inDefaults:n,isAlternative:c,jeSuis:d||[]}]));return}let S=v.length+1;for(;v.some(T=>T.id===S);)S=Math.floor(Math.random()*1e3);return v.unshift({id:S,parentGoal:i,title:a.trim(),score:o,time:s,duration:f,canMove:b,inDefaults:n,isAlternative:c,jeSuis:d||[]}),t.localStorage.set("subGoals",JSON.stringify(v)),S}function D(i,a,o,s,f,b,n,c,d){let v=this.getSubGoals;for(var S=0;S<v.length;S++)if(v[S].id===i){v[S].title=a.trim(),v[S].score=o,v[S].time=s,v[S].duration=f,v[S].canMove=b,v[S].inDefaults=n,v[S].isAlternative=c,v[S].jeSuis=d||[];break}t.localStorage.set("subGoals",JSON.stringify(v))}function E(){t.localStorage.remove("mainGoals"),console.log("removed all mainGoal")}function O(){t.localStorage.remove("subGoals"),console.log("removed all subGoals")}function m(){t.localStorage.remove("subGoals"),t.localStorage.remove("mainGoals"),t.localStorage.remove("AllDates"),t.localStorage.remove("Balancey"),console.log("removed ALL")}function q(i,a=null,o=null){let s=this.getSubGoals;for(var f=0;f<s.length;f++)if(s[f].id===i){s[f].time=a||s[f].time,s[f].score=o||s[f].score;break}t.localStorage.set("subGoals",JSON.stringify(s))}function A(i){let a=this.getSubGoals;for(var o=0;o<a.length;o++)a[o].id===i&&(a.splice(o,1),console.log("removeSubgoal spliced!"));return t.localStorage.set("subGoals",JSON.stringify(a)),a}function _(i,a){let o=this.getMainGoals;for(var s=0;s<o.length;s++)o[s].id===i&&(o.splice(s,1),console.log("removeMaingoal spliced!"));return t.localStorage.set("mainGoals",JSON.stringify(o)),o}function j(i){var s;let a=this.getMainGoals;for(var o=0;o<a.length;o++)if(((s=a[o])==null?void 0:s.title.trim())===i)return a[o];return null}function R(i,a=null){let o=this.getAllDates;o?a?o[`${i}`]=a:i in o?delete o[`${i}`]:console.log(`ERROR? deleting schedule of ${i} not found!`):(console.log(`Adding new schedule for ${i}`),o={},o[`${i}`]=a),t.localStorage.set("AllDates",JSON.stringify(o))}function M(i){let a=this.getAllDates;if(a)return a[`${i}`]}function N(i){let a=this.getAllDates;return a?!!a[`${i}`]:!1}function I(){const i=[];let a=function(s){return s==null?void 0:s.inDefaults},o=this.getSubGoals;return o?(o.forEach(s=>{a(s)&&i.push(s)}),i):(console.log("No subgoals to fetch defaults :("),i)}function re(i=null){let a=this.getMainGoals,o=new Set;if(i)for(var s=0;s<a.length;s++)a[s].priority==i&&o.add(a[s].priority);else a.forEach(f=>{o.add(f.priority)});return o}function le(){const i=[];let a=this.getSubGoals;return a&&a.forEach(o=>{o!=null&&o.isAlternative&&i.push(o)}),i}function ie(i){const a=[];let o=function(f){const b=f.split(/on/);return b.length!=2?(console.log(`parseScore error?${f}`,b),-1):b[1]-b[0]},s=this.getSubGoals;return s&&s.forEach(f=>{if(f.score=="")console.log(`no score event added: ${f.title}`,f.score),a.push(f);else{let b=o(f.score);b>-1&&b>=i&&a.push(f)}}),a}function oe(i){const o=(i/60).toFixed(2);return parseFloat(o)}function ae(){let i=this.getMainGoals,a=this.getSubGoals,o=(n,c)=>{if(n.id>c.id)return 1;if(n.id==c.id)return 0;if(n.id<c.id)return-1},s=n=>{if(!n)return"";let c=n.split(":");return parseInt(c[0])>=12?n+"PM":n+"AM"},f=n=>{let c=[];return a&&a.forEach(d=>{d.parentGoal==n&&c.push(d)}),c},b=[];return i.forEach(n=>{var S,T,Q,U;let c={id:n.id,label:`${n.id}) ${n==null?void 0:n.title.trim()}`,details:`${n.details} ==> Prio:${n==null?void 0:n.priority}`,color:`${n==null?void 0:n.bgcolor}`,prio:n==null?void 0:n.priority,children:[]},d=f(n.id);for(let w=0;w<d.length;w++){let se=d[w].inDefaults?"Dft":"#",ue=d[w].canMove?"Mv":"#",ce=d[w].isAlternative?"Alt":"#",de=[`${s((S=d[w])==null?void 0:S.time)} for ${(T=d[w])==null?void 0:T.duration} mins`,`:: ${se}~${ue}~${ce}`].join(`
`);c.children.push({id:d[w].id,label:`${d[w].id})- ${(Q=d[w])==null?void 0:Q.title.trim()} (${(U=d[w])==null?void 0:U.score})`,details:de,color:`${n==null?void 0:n.bgcolor}`,isChildren:!0,moods:d[w].jeSuis||[]})}let v=c.children;v.sort(o),c.children=v,b.push(c)}),b.sort(o),b}function ne(){let i=this.getAllDates;if(!i)return[];let a=this.getMainGoals,o=this.getSubGoals,s={};for(let c in i){let d=i[c];for(let v in d)s[v]||(s[v]=[]),s[v].push({date:c,logged:oe(d[v].duration)})}let f=c=>{let d=[];return o&&o.forEach(v=>{v.parentGoal==c&&d.push(v)}),d},b=(c,d=null)=>{let v={children:[],title:d?`${c.title.trim()}(${c.score})`:`${c.title.trim()} !${c.priority}!`,key:d?`${d}-${c.id}`:c.id,logged:[],expanded:!0,color:c==null?void 0:c.bgcolor,isChild:!!d};if(d){let S=s[c.id]||[];v.logged=[...S]}return v},n=[];return a.forEach(c=>{let d=b(c),v=f(c.id);for(let S=0;S<v.length;S++){let T=b(v[S],c.id);T.logged.length!=0&&(d.logged.push(...T.logged),T.children.length<1?delete T.children:console.log("huh children has descendents?!? ERROR?",T),d.children.push(T))}n.push(d)}),n}return{getMainGoals:g,getSubGoals:G,getAllDates:e,getBalance:l,setBalance:y,addMainGoal:h,addSubGoal:$,editSubGoal:D,editMainGoal:C,importGoals:p,getGoalByTitle:j,saveSubProp:q,saveDailySchedule:R,resetSub:O,resetMain:E,resetAll:m,removeSubgoal:A,removeMaingoal:_,getEventsForDate:M,hasEventsForDate:N,fetchAllTaskSummary:ne,fetchGoalsWithMinScore:ie,fetchAllPrio:re,fetchDefaults:I,fetchAlternativeEvts:le,fetchGoalsTree:ae}});export{Ne as Q,we as T,xe as a,De as c,Z as g,ee as s,Ie as u};