import{j as B,l as fe,m as U,c as k,p as ye,h as d,Q as z,k as N,at as se,U as ie,W as re,s as _e,g as K,r as E,au as ke,w as I,av as ne,aw as be,b as de,e as ue,ax as we,ay as Ce,N as H,D as Te,_ as qe,d as pe,L as oe,E as c,F as T,G as g,M as r,H as v,K as f,O as _,P as F,R as x,J as C,a3 as D,a1 as P,I as q,a0 as Se,a2 as R,a6 as $e,a7 as xe}from"./index.2c41191f.js";import{a as De,u as Pe,Q as Qe,b as Ie}from"./goalStorage.b43d9204.js";import{S as Me,t as A,T as Fe,b as p,i as V,Q as Ve,e as Ee}from"./QCalendarTask.a1ce4fb1.js";import{u as Ne,a as Be,b as Le,c as Ge}from"./use-panel.06b65cab.js";/* empty css                             */import Oe from"./NavigationBar.966fb264.js";import"./touch.70a9dd44.js";var le=B({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:a}){const l=fe(se,U);if(l===U)return console.error("QTimelineEntry needs to be child of QTimeline"),U;const n=k(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),o=k(()=>`q-timeline__dot text-${e.color||l.color}`),s=k(()=>l.layout==="comfortable"&&l.side==="left");return()=>{const i=ye(a.default,[]);if(e.body!==void 0&&i.unshift(e.body),e.heading===!0){const u=[d("div"),d("div"),d(e.tag,{class:"q-timeline__heading-title"},i)];return d("div",{class:"q-timeline__heading"},s.value===!0?u.reverse():u)}let m;e.icon!==void 0?m=[d(z,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(m=[d("img",{class:"q-timeline__dot-img",src:e.avatar})]);const t=[d("div",{class:"q-timeline__subtitle"},[d("span",{},N(a.subtitle,[e.subtitle]))]),d("div",{class:o.value},m),d("div",{class:"q-timeline__content"},[d("h6",{class:"q-timeline__title"},N(a.title,[e.title]))].concat(i))];return d("li",{class:n.value},s.value===!0?t.reverse():t)}}}),je=B({name:"QTimeline",props:{...ie,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:a}){const l=K(),n=re(e,l.proxy.$q);_e(se,e);const o=k(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(n.value===!0?" q-timeline--dark":""));return()=>d("ul",{class:o.value},N(a.default))}}),Ue=B({name:"QCarouselSlide",props:{...Ne,imgSrc:String},setup(e,{slots:a}){const l=k(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>d("div",{class:"q-carousel__slide",style:l.value},N(a.default))}});let Q=0;const He={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Re=["update:fullscreen","fullscreen"];function Ae(){const e=K(),{props:a,emit:l,proxy:n}=e;let o,s,i;const m=E(!1);ke(e)===!0&&I(()=>n.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&y()}),I(()=>a.fullscreen,w=>{m.value!==w&&t()}),I(m,w=>{l("update:fullscreen",w),l("fullscreen",w)});function t(){m.value===!0?y():u()}function u(){m.value!==!0&&(m.value=!0,i=n.$el.parentNode,i.replaceChild(s,n.$el),document.body.appendChild(n.$el),Q++,Q===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:y},ne.add(o))}function y(){m.value===!0&&(o!==void 0&&(ne.remove(o),o=void 0),i.replaceChild(n.$el,s),m.value=!1,Q=Math.max(0,Q-1),Q===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),n.$el.scrollIntoView!==void 0&&setTimeout(()=>{n.$el.scrollIntoView()})))}return be(()=>{s=document.createElement("span")}),de(()=>{a.fullscreen===!0&&u()}),ue(y),Object.assign(n,{toggleFullscreen:t,setFullscreen:u,exitFullscreen:y}),{inFullscreen:m,toggleFullscreen:t}}const ze=["top","right","bottom","left"],Ke=["regular","flat","outline","push","unelevated"];var Je=B({name:"QCarousel",props:{...ie,...Be,...He,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ke.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ze.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Re,...Le],setup(e,{slots:a}){const{proxy:{$q:l}}=K(),n=re(e,l);let o=null,s;const{updatePanelsList:i,getPanelContent:m,panelDirectives:t,goToPanel:u,previousPanel:y,nextPanel:w,getEnabledPanels:ce,panelIndex:M}=Ge(),{inFullscreen:J}=Ae(),ge=k(()=>J.value!==!0&&e.height!==void 0?{height:e.height}:{}),L=k(()=>e.vertical===!0?"vertical":"horizontal"),me=k(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(J.value===!0?" fullscreen":"")+(n.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${L.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Y.value}`:"")),W=k(()=>{const h=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?h.reverse():h}),X=k(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),ve=k(()=>e.navigationActiveIcon||X.value),Y=k(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),G=k(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));I(()=>e.modelValue,()=>{e.autoplay&&O()}),I(()=>e.autoplay,h=>{h?O():o!==null&&(clearTimeout(o),o=null)});function O(){const h=we(e.autoplay)===!0?Math.abs(e.autoplay):5e3;o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,h>=0?w():y()},h)}de(()=>{e.autoplay&&O()}),ue(()=>{o!==null&&clearTimeout(o)});function Z(h,$){return d("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${h} q-carousel__navigation--${Y.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[d("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},ce().map($))])}function he(){const h=[];if(e.navigation===!0){const $=a["navigation-icon"]!==void 0?a["navigation-icon"]:b=>d(H,{key:"nav"+b.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${b.active===!0?"":"in"}active`,...b.btnProps,onClick:b.onClick}),j=s-1;h.push(Z("buttons",(b,ee)=>{const te=b.props.name,ae=M.value===ee;return $({index:ee,maxIndex:j,name:te,active:ae,btnProps:{icon:ae===!0?ve.value:X.value,size:"sm",...G.value},onClick:()=>{u(te)}})}))}else if(e.thumbnails===!0){const $=e.controlColor!==void 0?` text-${e.controlColor}`:"";h.push(Z("thumbnails",j=>{const b=j.props;return d("img",{key:"tmb#"+b.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${b.name===e.modelValue?"":"in"}active`+$,src:b.imgSrc||b["img-src"],onClick:()=>{u(b.name)}})}))}return e.arrows===!0&&M.value>=0&&((e.infinite===!0||M.value>0)&&h.push(d("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${L.value} absolute flex flex-center`},[d(H,{icon:W.value[0],...G.value,onClick:y})])),(e.infinite===!0||M.value<s-1)&&h.push(d("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${L.value} absolute flex flex-center`},[d(H,{icon:W.value[1],...G.value,onClick:w})]))),Te(a.control,h)}return()=>(s=i(a),d("div",{class:me.value,style:ge.value},[Ce("div",{class:"q-carousel__slides-container"},m(),"sl-cont",e.swipeable,()=>t.value)].concat(he())))}});const We=pe({name:"summaryCalendar",components:{NavigationBar:Oe,QCalendarTask:Me},data(){return{calendar:E(null),selectedDate:A(),selectedMonth:"",allMonths:Fe("long","en-US"),startDate:A(),endDate:A(),store:De(),tasks:[],footerTasks:[{title:"TOTALS"}],$q:Pe(),treeGoals:[],expanded:[],showTree:!1,daOptions:E({}),panel:E("")}},computed:{parsedTasks(){const e=p(this.startDate),a=p(this.endDate),l=[];for(let n=0;n<this.tasks.length;++n){const o=this.tasks[n];for(let s=0;s<o.logged.length;++s){const i=p(o.logged[s].date);if(V(i,e,a)){l.push(o);break}}}return l},getViewedMonth(){return`Goaly in ${this.selectedMonth}`}},mounted(){console.log("weeee mounted...")},beforeMount(){let e=this.store.fetchAllTaskSummary();if(e.length==0){this.$q.notify({color:"negative",position:"center",message:"No summary...please save a schedule to see more!",icon:"warning"});return}this.tasks=e;const a={},l=(n,o=!1,s="")=>{n.logged.forEach(i=>{i.date.slice(-2),o&&(a[n.key]||(a[n.key]=[],this.panel=n.key),a[n.key].push({on:i.date,note:i.notes,score:i.atScore,title:n.title,color:s}))})};this.tasks.forEach(n=>{l(n),n.children!==void 0&&n.children.forEach(o=>{l(o,!0,n==null?void 0:n.color)})}),this.daOptions=a,this.constructTree()},methods:{getLogged(e,a,l=null){const n=[];if(a.length==0)return console.log("ERROR...Empty getLogged?!?",e,l),n;for(let o=0;o<a.length;++o)if(a[o].date===e){n.push({logged:a[o].logged});break}return n},classyColor(e){return`row items-center ${e.isChildren?"text-":"text-white bg-"}${e.color} `},timelineColor(e){return e!=""?`bg-${e} text-white shadow-2 rounded-borders`:"bg-black text-white shadow-2 rounded-borders"},getLoggedSummary(e){let a=0;const l=(n,o)=>e===o.date?n+o.logged:n;for(const n in this.tasks)a+=this.tasks[n].logged.reduce(l,0);return a.toFixed(2)},constructTree(){this.treeGoals=this.store.fetchGoalsTree()},sum(e,a,l){const n=(s,i)=>{const m=p(i.date);return V(m,e,a)?s+i.logged:s};return l.logged.reduce(n,0).toFixed(2)},getTasks(e,a,l){const n=[];for(let o=0;o<l.logged.length;++o){const s=p(l.logged[o].date);if(V(s,e,a)){n.push(l);break}}return n},badgeStyles(e){return`issue ellipsis ${e.isChild?"text-white":`text-white bg-${e.color}`}`},weekdayClass(e){return{"task__weekday--style":!0}},dayClass(e){return{"task__day--style":!0}},footerDayClass(e){return{"task__footer--day__style":!0}},totals(e,a){let l=0;const n=(o,s)=>{const i=p(s.date);return V(i,e,a)?o+s.logged:o};for(const o in this.tasks)l+=this.tasks[o].logged.reduce(n,0);return l.toFixed(2)},onToday(){this.$refs.calendar.moveToToday()},onPrev(){this.$refs.calendar.prev()},onNext(){this.$refs.calendar.next()},onMoved(e){console.log("onMoved",e)},onChange(e){let a=e.days[0].month;console.log("onChange",a,this.selectedDate,e),this.selectedMonth=this.allMonths[a-1],this.startDate=e.start,this.endDate=e.end},onClickDate(e){console.log("onClickDate",e)},onClickDay(e){console.log("onClickDay",e)},onClickHeadDay(e){console.log("onClickHeadDay",e)}}}),S=e=>($e("data-v-802f7be2"),e=e(),xe(),e),Xe={class:"subcontent"},Ye={class:"q-pa-md"},Ze={class:"row justify-center"},et={style:{display:"flex","max-width":"800px",width:"100%"}},tt={class:"header ellipsis q-ma-sm",style:{"font-weight":"600"}},at={class:"issue ellipsis q-px-xs"},nt=S(()=>r("div",{class:"key"},"Key",-1)),ot=S(()=>r("div",{class:"logged"},"Logged",-1)),lt={class:"key"},st={class:"logged"},it={key:0,class:"logged-time",style:{"font-weight":"800"}},rt={key:1,class:"logged-time"},dt={class:"summary ellipsis"},ut={class:"title ellipsis"},ct={class:"total"},gt={class:"logged-time"},mt=S(()=>r("br",null,null,-1)),vt={key:0,class:"column justify-center items-center"},ht=S(()=>r("br",null,null,-1)),ft={key:0,class:"q-pa-md"},yt={key:0,class:"q-pa-md bg-grey-12",style:{"max-width":"400px"}},_t=S(()=>r("div",{class:"row justify-center"}," Goals & Goal Events ",-1)),kt=S(()=>r("br",null,null,-1)),bt={class:"q-mr-sm text-weight-bold",size:"28px"},wt={key:0},Ct={class:"text-weight-bold"},Tt={key:1,class:"text-weight-light text-black"};function qt(e,a,l,n,o,s){const i=oe("navigation-bar"),m=oe("q-calendar-task");return c(),T(Ve,{padding:""},{default:g(()=>[r("div",Xe,[r("div",Ye,[v(i,{onToday:e.onToday,onPrev:e.onPrev,onNext:e.onNext},null,8,["onToday","onPrev","onNext"]),r("div",Ze,[r("div",et,[v(m,{ref:"calendar",modelValue:e.selectedDate,"onUpdate:modelValue":a[0]||(a[0]=t=>e.selectedDate=t),"model-tasks":e.parsedTasks,"onUpdate:modelTasks":a[1]||(a[1]=t=>e.parsedTasks=t),"model-footer":e.footerTasks,"onUpdate:modelFooter":a[2]||(a[2]=t=>e.footerTasks=t),view:"month","task-width":240,"cell-width":75,"task-key":"key","min-weekday-length":2,"weekday-class":e.weekdayClass,"day-class":e.dayClass,"footer-day-class":e.footerDayClass,"focus-type":["weekday","date","task"],dark:"",focusable:"",hoverable:"",animated:"",bordered:"",onChange:e.onChange,onMoved:e.onMoved,onClickDate:e.onClickDate,onClickDay:e.onClickDay,onClickHeadDay:e.onClickHeadDay},{"head-tasks":g(({})=>[r("div",tt,[r("div",at,f(e.getViewedMonth),1),nt,ot])]),task:g(({scope:t})=>[(c(!0),_(x,null,F(e.getTasks(t.start,t.end,t.task),u=>(c(),_("div",{key:u.key,class:"header ellipsis"},[r("div",{class:R(e.badgeStyles(u))},f(t.task.title)+" ",3),r("div",lt,f(t.task.key),1),r("div",st,f(e.sum(t.start,t.end,t.task)),1)]))),128))]),day:g(({scope:t})=>[(c(!0),_(x,null,F(e.getLogged(t.timestamp.date,t.task.logged),u=>(c(),_(x,{key:u},[t.task.children!==void 0?(c(),_("div",it,f(u.logged),1)):(c(),_("div",rt,f(u.logged),1))],64))),128))]),"footer-task":g(({scope:t})=>[r("div",dt,[r("div",ut,f(t.footer.title),1),r("div",ct,f(e.totals(t.start,t.end)),1)])]),"footer-day":g(({scope:t})=>[r("div",gt,f(e.getLoggedSummary(t.timestamp.date)),1)]),_:1},8,["modelValue","model-tasks","model-footer","weekday-class","day-class","footer-day-class","onChange","onMoved","onClickDate","onClickDay","onClickHeadDay"])])]),mt,e.tasks.length<=0?(c(),_("div",vt,[ht,v(D,null,{default:g(()=>[C(" 1. Add some Goals first. A schedulable goal is one with a parent Goal--can have multiple related goals with the same parent. ")]),_:1}),v(P),v(D,null,{default:g(()=>[C(" 2. Go to Schedule to see a daily schedule. Drag scheduled events to new timeslots or click in calendar to add an event. ")]),_:1}),v(P),v(D,null,{default:g(()=>[C(" 3. Reload a saved daily schedule or defaults or choose minimal score events to schedule. Fix any scheduling conflicts. ")]),_:1}),v(P),v(D,null,{default:g(()=>[C(" 4. Save the daily schedule (dont forget to update their score as needed!) ")]),_:1}),v(P),v(D,null,{default:g(()=>[C(" 5. Check out the summary of all goals here! ")]),_:1})])):q("",!0)]),v(Se,{modelValue:e.showTree,"onUpdate:modelValue":a[3]||(a[3]=t=>e.showTree=t),label:e.showTree?"Hide Legend":"Show Legend",color:"teal",class:"q-pa-md"},null,8,["modelValue","label"]),v(Ie,null,{default:g(()=>[e.showTree?(c(),_("div",ft,[e.treeGoals.length>0?(c(),_("div",yt,[_t,v(P),kt,v(Ee,{nodes:e.treeGoals,"node-key":"label",expanded:e.expanded,"onUpdate:expanded":a[4]||(a[4]=t=>e.expanded=t),"no-connectors":"",dense:"",accordion:""},{"default-header":g(t=>[r("div",{class:R(e.classyColor(t.node))},[t.node.isChildren?q("",!0):(c(),T(z,{key:0,name:t.expanded?"expand_less":"expand_more",size:"28px",class:"q-mr-sm"},null,8,["name"])),r("div",bt,f(t.node.label),1),v(z,{name:t.node.icon},null,8,["name"])],2)]),"default-body":g(t=>[t.node.isChildren?(c(),_("div",wt,[r("span",Ct," >> "+f(t.node.details),1),t.node.moods.length>0?(c(),T(Qe,{key:0},{default:g(()=>[C(f("Moods::> "+t.node.moods.join(",")),1)]),_:2},1024)):q("",!0)])):(c(),_("span",Tt,f(t.node.details),1))]),_:1},8,["nodes","expanded"])])):q("",!0)])):q("",!0)]),_:1}),Object.keys(e.daOptions).length>0?(c(),T(Je,{key:0,modelValue:e.panel,"onUpdate:modelValue":a[5]||(a[5]=t=>e.panel=t),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"white",padding:"",infinite:"",arrows:"",class:"bg-primary text-white shadow-2 rounded-borders"},{default:g(()=>[(c(!0),_(x,null,F(e.daOptions,(t,u)=>(c(),T(Ue,{name:u,key:u},{default:g(()=>[r("div",null,[v(je,{class:R(e.timelineColor(t[0].color))},{default:g(()=>[v(le,{heading:"",body:t[0].title},null,8,["body"]),(c(!0),_(x,null,F(t,y=>(c(),T(le,{key:y.on,title:y.score,subtitle:y.on},{default:g(()=>[C(f(y.note),1)]),_:2},1032,["title","subtitle"]))),128))]),_:2},1032,["class"])])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])):q("",!0)])]),_:1})}var It=qe(We,[["render",qt],["__scopeId","data-v-802f7be2"]]);export{It as default};