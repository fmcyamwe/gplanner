import{_ as j,$ as z,r as C,L as H,E as c,F as k,G as d,M as u,H as n,O as m,P as N,R as b,a0 as L,a1 as x,Q as P,I as w,K as f,a2 as E,J as h,a3 as T,a4 as A,a5 as q,a6 as O,a7 as F}from"./index.2c41191f.js";import{u as U,a as W,Q as G,b as K}from"./goalStorage.b43d9204.js";import{a as J,b as X,Q as R}from"./utiFunc.66dd79fc.js";import{t as Y,a as g,p as I,b as M,c as Z,i as B,Q as $,d as ee,e as te}from"./QCalendarTask.a1ce4fb1.js";import{Q as se}from"./QCalendar.8094c9b7.js";const ae={name:"weekCalendar",components:{NavigationBar:z(()=>A(()=>import("./NavigationBar.966fb264.js"),["assets/NavigationBar.966fb264.js","assets/index.2c41191f.js","assets/index.4f70e4de.css"])),QCalendar:se},data(){return U(),{store:W(),calendar:C(null),currentDate:C(Y()),events:[],mostEvts:5,treeGoals:C([]),expanded:C([]),showTree:C(!1),moods:C({})}},beforeMount(){this.loadEvts(),this.constructTree()},mounted(){console.log("mounted")},computed:{storedGoalsMap(){const e=new Map;let t=this.store.getSubGoals;return t?(t.forEach(s=>{e.set(s.id,s)}),e):(console.log("GoalsMap is empty or null",t),e)},label(){return this.showTree?"Hide Legend":"Show Legend"},allEvents(){return this.store.getAllDates},parentGoalsMap(){const e=new Map;let t=this.store.getMainGoals;return t?(t.forEach(s=>{e.set(s.id,s)}),e):(console.log("parentGoalsMap is empty or null",t),e)},storedEvents(){return this.store.getSubGoals},eventsMap(){const e={};return this.events.forEach(t=>{if(e[t.date]||(e[t.date]=[]),t.sortTime=g(M(t.date),{minute:I(t.time)}),e[t.date].push(t),t.days){console.log(`eventsMap multiple days? event for ${t.date}`,t.days);let s=Z(t.date),r=t.days;do s=g(s,{day:1}),e[s.date]||(e[s.date]=[]),e[s.date].push(t);while(--r>0)}}),e}},methods:{classyColor(e){return`row items-center ${e.isChildren?"text-":"text-white bg-"}${e.color} `},loadEvts(){var r,i,l,v;let e=this.parentGoalsMap,t=this.storedGoalsMap,s=this.allEvents;if(t&&e){if(s)for(let p in s){let a=s[p];for(let o in a){let _=t.get(parseInt(o));if(_){let y=e.get(_.parentGoal),D=g(M(p),{minute:I(a[o].time)}),V=g(D,{minute:parseInt(a[o].duration)}),Q="";a[o].notes!==void 0&&((r=a[o])==null?void 0:r.notes)!==""?Q=[`${D.time} - ${V.time}`,`${(l=(i=a[o])==null?void 0:i.atScore)!=null?l:""} >> ${_.score}`,`${(v=a[o])==null?void 0:v.notes}`].join(`
\r`):Q=`${D.time} - ${V.time}`,a[o].byMood!==void 0&&(this.moods[p]||(this.moods[p]=[]),this.moods[p].push(...a[o].byMood)),this.events.push({id:_.id,title:_.title,details:Q,time:a[o].time,duration:a[o].duration,date:p,bgcolor:y.bgcolor})}}}}else{console.log("ERROR--no parent or goals!!REVIEW**");return}},constructTree(){this.treeGoals=this.store.fetchGoalsTree()},getEvents(e){let t=(r,i)=>{let l=ee(r.sortTime,i.sortTime);if(l>0)return-1;if(l==0)return 0;if(l<0)return 1};const s=this.eventsMap[e]||[];if(s.length===1)s[0].side="full";else if(s.length===2){const r=g(M(s[0].date),{minute:I(s[0].time)}),i=g(r,{minute:s[0].duration}),l=g(M(s[1].date),{minute:I(s[1].time)}),v=g(l,{minute:s[1].duration});B(l,r,i,!0)||B(v,r,i,!0)?(s[0].side="left",s[1].side="right"):(s[0].side="full",s[1].side="full")}return s.length>this.mostEvts&&(this.mostEvts=s.length),s.sort(t)},badgeClasses(e,t){return J(e,t)},badgeStyles(e,t,s=void 0,r=void 0){return X(e,t,s,r)},scrollToEvent(e){this.$refs.calendar.scrollToTime(e.time,350)},onToday(){this.$refs.calendar.moveToToday()},onPrev(){this.doReset=!0,this.$refs.calendar.prev()},onNext(){this.$refs.calendar.next()},onClickDate(e){console.log("onClickDate",e)},onClickTime(e){console.log("onClickTime",e)},onClickInterval(e){console.log("onClickInterval",e)},onClickHeadIntervals(e){console.log("onClickHeadIntervals",e)},onClickHeadDay({scope:e,event:t}){let s=e.timestamp.date,r=this.moods[s];r?this.$q.notify({color:"positive",position:"top",message:`Scheduled with moods: ${r.join()}`,icon:"tag_faces"}):this.$q.notify({color:"white",textColor:"black",position:"top",message:"NO mood!!",icon:"sentiment_neutral",iconColor:"red",multiLine:!0})},onChange(e){this.mostEvts=5,console.log("onChange",e)}}},S=e=>(O("data-v-f2ef669c"),e=e(),F(),e),le={class:"q-pa-md"},oe=S(()=>u("i",{class:"row justify-center q-pa-sm"},"Click on Day header for that day's Moods ",-1)),ne={class:"row justify-center"},ie={class:"q-px-md",style:{display:"flex","max-width":"800px",width:"100%",height:"500px",overflow:"auto"}},de={style:{display:"flex","justify-content":"center","flex-wrap":"wrap",padding:"2px"}},re={class:"title q-calendar__ellipsis"},ce={class:"title q-calendar__ellipsis"},ue={class:"lineyy"},me={key:0,class:"q-pa-md"},he={key:0,class:"q-pa-md bg-grey-12",style:{"max-width":"400px"}},fe=S(()=>u("div",{class:"row justify-center"}," Goals & Goal Events ",-1)),pe=S(()=>u("br",null,null,-1)),_e={class:"q-mr-sm text-weight-bold",size:"28px"},ye={key:0},ge={class:"text-weight-bold liney"},ve={key:1,class:"text-weight-light text-black liney"},Ce={key:1,class:"column justify-center items-center"},ke=S(()=>u("br",null,null,-1));function xe(e,t,s,r,i,l){const v=H("navigation-bar"),p=H("q-calendar");return c(),k($,null,{default:d(()=>[u("div",le,[n(v,{onToday:l.onToday,onPrev:l.onPrev,onNext:l.onNext},null,8,["onToday","onPrev","onNext"]),oe,u("div",ne,[u("div",ie,[n(p,{ref:"calendar",modelValue:i.currentDate,"onUpdate:modelValue":t[0]||(t[0]=a=>i.currentDate=a),view:"week",dark:"",animated:"",hoverable:"",bordered:"","transition-prev":"slide-right","transition-next":"slide-left","no-active-date":"","interval-minutes":30,"interval-count":48,"interval-height":i.mostEvts*3,onChange:l.onChange,onClickDate:l.onClickDate,onClickTime:l.onClickTime,onClickInterval:l.onClickInterval,onClickHeadIntervals:l.onClickHeadIntervals,onClickHeadDay:l.onClickHeadDay},{"head-day-event":d(({scope:{timestamp:a}})=>[u("div",de,[(c(!0),m(b,null,N(l.eventsMap[a.date],o=>(c(),m(b,{key:o.id},[o.time?(c(),k(R,{key:1,class:E(l.badgeClasses(o,"header")),style:q([l.badgeStyles(o,"header"),{margin:"1px",width:"10px","max-width":"10px",height:"10px","max-height":"10px",cursor:"pointer"}]),onClick:_=>l.scrollToEvent(o)},{default:d(()=>[n(G,null,{default:d(()=>[h(f(o.time+" - "+o.title),1)]),_:2},1024)]),_:2},1032,["class","style","onClick"])):(c(),k(R,{key:0,class:E(l.badgeClasses(o,"header")),style:q([l.badgeStyles(o,"header"),{width:"100%",cursor:"pointer",height:"12px","font-size":"10px",margin:"1px"}])},{default:d(()=>[u("div",re,[h(f(o.title)+" ",1),n(G,null,{default:d(()=>[h(f(o.details),1)]),_:2},1024)])]),_:2},1032,["class","style"]))],64))),128))])]),"day-body":d(({scope:{timestamp:a,timeStartPos:o,timeDurationHeight:_}})=>[(c(!0),m(b,null,N(l.getEvents(a.date),y=>(c(),m(b,{key:y.id},[y.time!==void 0?(c(),m("div",{key:0,class:E(["my-event",l.badgeClasses(y,"body")]),style:q(l.badgeStyles(y,"body",o,_))},[u("span",ce,[h(f(y.title)+" ",1),n(G,null,{default:d(()=>[u("div",ue,f(y.details),1)]),_:2},1024)])],6)):w("",!0)],64))),128))]),_:1},8,["modelValue","interval-height","onChange","onClickDate","onClickTime","onClickInterval","onClickHeadIntervals","onClickHeadDay"])])])]),n(L,{modelValue:i.showTree,"onUpdate:modelValue":t[1]||(t[1]=a=>i.showTree=a),label:l.label,color:"teal",class:"q-pa-md"},null,8,["modelValue","label"]),n(K,null,{default:d(()=>[i.showTree?(c(),m("div",me,[i.treeGoals.length>0?(c(),m("div",he,[fe,n(x),pe,n(te,{nodes:i.treeGoals,"node-key":"label",expanded:i.expanded,"onUpdate:expanded":t[2]||(t[2]=a=>i.expanded=a),"no-connectors":"",dense:"",accordion:""},{"default-header":d(a=>[u("div",{class:E(l.classyColor(a.node))},[a.node.isChildren?w("",!0):(c(),k(P,{key:0,name:a.expanded?"expand_less":"expand_more",size:"28px",class:"q-mr-sm"},null,8,["name"])),u("div",_e,f(a.node.label),1),n(P,{name:a.node.icon},null,8,["name"])],2)]),"default-body":d(a=>[a.node.isChildren?(c(),m("div",ye,[u("span",ge," >> "+f(a.node.details),1),a.node.moods.length>0?(c(),k(G,{key:0},{default:d(()=>[h(f("Moods::> "+a.node.moods.join(",")),1)]),_:2},1024)):w("",!0)])):(c(),m("span",ve,f(a.node.details),1))]),_:1},8,["nodes","expanded"])])):(c(),m("div",Ce,[ke,n(T,null,{default:d(()=>[h(" 1. Add some Goals first. A schedulable goal is one with a parent Goal--can have multiple related goals with the same parent. ")]),_:1}),n(x),n(T,null,{default:d(()=>[h(" 2. Go to Schedule to see a daily schedule. Drag scheduled events to new timeslots or click in calendar to add an event. ")]),_:1}),n(x),n(T,null,{default:d(()=>[h(" 3. Reload a saved daily schedule or defaults or choose minimal score events to schedule. Fix any scheduling conflicts. ")]),_:1}),n(x),n(T,null,{default:d(()=>[h(" 4. Save the daily schedule (dont forget to update their score as needed!) ")]),_:1}),n(x),n(T,null,{default:d(()=>[h(" 5. Check out the summary of all goals here! ")]),_:1})]))])):w("",!0)]),_:1})]),_:1})}var Ie=j(ae,[["render",xe],["__scopeId","data-v-f2ef669c"]]);export{Ie as default};