import{_ as D,F as j,A as u,B as y,G as S,E as s,H as r,a as R,D as l,I as B,r as b,C as I,Q as H,J as Q,K as L,L as U,M as X,N as x,O as J}from"./index.cf985d9a.js";import{R as K,P as C,Q as Z,d as Y,T as ee,a as te,b as se}from"./YoutubeDataService.82414d03.js";import{Q as O,a as oe,u as ae}from"./QTable.9ef5eab7.js";import{V}from"./vue3-apexcharts.common.df5d2715.js";const re={components:{apexchart:V},props:{series:{required:!0,type:Object}},setup(o){const c=j();return{options:{type:"treemap",chart:{toolbar:{show:!0}},legend:{show:!0},tooltip:{fixed:{enabled:!0,position:"bottomLeft"},followCursor:!1,custom:function({series:a,seriesIndex:e,dataPointIndex:m,w:h}){const d=o.series[e].data[m];return'<div style="text-align: center; padding: 4px;"><img src="./channel-icons/'+d.id+'.jpg" width="100"><br>'+d.shareOfGrouping+"%</div>"}}},dataPointSelection:(a,e,m)=>{const{seriesIndex:h,dataPointIndex:d}=m,w=o.series[h].data[d].id;c.push("/channel-details/"+w)},tooltipPlacer:(a,e,m)=>{var h=e.el.querySelector(".apexcharts-tooltip");if(h){var d=a.offsetX,w=a.offsetY;a.offsetX<200?d+=70:d-=150,h.style.top=w+"px",h.style.left=d+"px"}}}}},ne=r("div",{class:"text-h6"},"Share by Grouping and Channel",-1);function le(o,c,n,t,i,a){const e=u("apexchart");return y(),S("div",null,[ne,s(e,{type:"treemap",series:n.series,options:t.options,onDataPointSelection:t.dataPointSelection,onMouseMove:t.tooltipPlacer},null,8,["series","options","onDataPointSelection","onMouseMove"])])}var ie=D(re,[["render",le]]);const ce={components:{apexchart:V},props:{series:{required:!0,type:Object}},setup(o){return{options:{chart:{stacked:!1,toolbar:{show:!0},zoom:{enabled:!0}},xaxis:{type:"datetime"},dataLabels:{enabled:!1},stroke:{width:2},tooltip:{enabled:!1,marker:{show:!0},onDatasetHover:{highlightDataSeries:!0}}}}}},de=r("div",{class:"text-h6"},"Views by Day and Channel (Top 25)",-1);function pe(o,c,n,t,i,a){const e=u("apexchart");return y(),S("div",null,[de,s(e,{type:"line",series:n.series,options:t.options},null,8,["series","options"])])}var ue=D(ce,[["render",pe]]);const he={components:{apexchart:V},props:{series:{required:!0,type:Object}},setup(o){return{options:{chart:{type:"bar",stacked:!0,toolbar:{show:!0},zoom:{enabled:!1}},xaxis:{categories:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dataLabels:{enabled:!1}}}}},me=r("div",{class:"text-h6"},"Views by Day of Week and Grouping",-1);function fe(o,c,n,t,i,a){const e=u("apexchart");return y(),S("div",null,[me,s(e,{type:"bar",options:t.options,series:n.series},null,8,["options","series"])])}var _e=D(he,[["render",fe]]);const ge={components:{apexchart:V},props:{series:{required:!0,type:Object}},setup(o){return{options:{chart:{stacked:!0,toolbar:{show:!0},zoom:{enabled:!1}},xaxis:{type:"datetime"},dataLabels:{enabled:!1},stroke:{curve:"straight"}}}}},be=r("div",{class:"text-h6"},"Views by Day and Grouping",-1);function ye(o,c,n,t,i,a){const e=u("apexchart");return y(),S("div",null,[be,s(e,{type:"area",series:n.series,options:t.options},null,8,["series","options"])])}var we=D(ge,[["render",ye]]);const ve={components:{apexchart:V},props:{rawSeries:{required:!0,type:Object}},setup(o){const c=R(()=>Object.values(o.rawSeries));return{options:R(()=>({legend:{position:"bottom"},chart:{toolbar:{show:!0}},labels:Object.keys(o.rawSeries)})),series:c}}},xe=r("div",{class:"text-h6"},"Share by Grouping",-1);function De(o,c,n,t,i,a){const e=u("apexchart");return y(),S("div",null,[xe,s(e,{type:"donut",options:t.options,series:t.series},null,8,["options","series"])])}var Se=D(ve,[["render",De]]);const Ce={components:{apexchart:V},props:{series:{required:!0,type:Object}},setup(o){return{options:{chart:{toolbar:{show:!0},zoom:{enabled:!1}},dataLabels:{enabled:!1},tooltip:{enabled:!0,y:{formatter:function(n){return n.toLocaleString()},title:{formatter:n=>n+" Views:"}},x:{formatter:function(n){return parseInt(n).toLocaleString()+" Subscribers"}}},yaxis:{labels:{formatter:function(n){return parseInt(n).toLocaleString()}}},xaxis:{type:"numeric",labels:{show:!0},min:0,tooltip:{enabled:!1}}}}}},Be=r("div",{class:"text-h6"},"Views by Subscribers (top 25 by views or subscribers)",-1);function qe(o,c,n,t,i,a){const e=u("apexchart");return y(),S("div",null,[Be,s(e,{type:"scatter",series:n.series,options:t.options},null,8,["series","options"])])}var Oe=D(Ce,[["render",qe]]);const Ge={props:{rawSeries:{required:!0,type:Object}},setup(o){const c={rowsPerPage:100,sortBy:"share",descending:!0},n=[{name:"icon",label:"Icon",sortable:!1},{name:"view",label:"Views",field:"totalViews",sortable:!0,align:"right",format:(i,a)=>i.toLocaleString(),sort:(i,a,e,m)=>parseInt(i,10)-parseInt(a,10)},{name:"subscribers",label:"Max Subscribers",field:"maxSubscribers",sortable:!0,align:"right",format:(i,a)=>i.toLocaleString(),sort:(i,a,e,m)=>parseInt(i,10)-parseInt(a,10)},{name:"share",label:"Share",field:"share",sortable:!0,align:"right",sort:(i,a,e,m)=>parseFloat(i)-parseFloat(a)},{name:"grouping",label:"Grouping",field:"grouping",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"}],t=R(()=>{const i=[];return o.rawSeries.forEach(a=>{i.push({name:a.name,totalViews:a.totalViews,maxSubscribers:a.maxSubscribers,share:a.share,id:a.id,grouping:a.grouping})}),i});return{columns:n,rows:t,pagination:c}}},Ye={class:""},Ve=["href"],Ae=["src"],Me=["href"];function $e(o,c,n,t,i,a){return y(),S("div",Ye,[s(oe,{title:"All Channels",rows:t.rows,columns:t.columns,pagination:t.pagination,"row-key":"name",class:"sticky-header-table","binary-state-sort":""},{"body-cell-icon":l(e=>[s(O,{props:e,"auto-width":""},{default:l(()=>[r("div",null,[r("a",{href:"./#/channel-details/"+e.row.id},[r("img",{src:"./channel-icons/"+e.row.id+".jpg",style:{width:"40px"}},null,8,Ae)],8,Ve)])]),_:2},1032,["props"])]),"body-cell-views":l(e=>[s(O,{props:e},{default:l(()=>[r("div",null,B(e.row.totalViews),1)]),_:2},1032,["props"])]),"body-cell-maxSubscribers":l(e=>[s(O,{props:e,"auto-width":""},{default:l(()=>[r("div",null,B(e.row.maxSubscribers),1)]),_:2},1032,["props"])]),"body-cell-share":l(e=>[s(O,{props:e,"auto-width":""},{default:l(()=>[r("div",null,B(e.row.share)+"%",1)]),_:2},1032,["props"])]),"body-cell-grouping":l(e=>[s(O,{props:e,"auto-width":""},{default:l(()=>[r("div",null,B(e.row.grouping),1)]),_:2},1032,["props"])]),"body-cell-name":l(e=>[s(O,{props:e},{default:l(()=>[r("div",null,[r("a",{href:"./#/channel-details/"+e.row.id},B(e.row.name),9,Me)])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"])])}var ke=D(Ge,[["render",$e]]);const{subtractFromDate:Pe,formatDate:G}=Y,Te={components:{ReportPeriodSelector:K,ChartOfShareByGroupingAndChannel:ie,ChartOfViewsByDayAndChannel:ue,ChartOfViewsByDayOfWeekAndGrouping:_e,ChartOfViewsByDayAndGrouping:we,ChartOfShareByGrouping:Se,ChartOfViewsAndSubscribersByChannel:Oe,TableOfChannels:ke},setup(){j();const o=new ee,c=b([]),n=b([]),t=b([]),i=b([]),a=b([]),e=b([]),m=b([]),h=b([]),d=b([]),w=Date.now(),k=Pe(w,{days:7});var A=G(w,"MMM DD, YYYY"),M=G(k,"MMM DD, YYYY");const f=b({from:M,to:A}),q=C.getItem("dateSelection");q!=null&&q.saved>=w-60*60*24*1e3&&(M=G(q.from,"MMM DD, YYYY"),A=G(q.to,"MMM DD, YYYY"),f.value={from:M,to:A});const F=C.getItem("password"),W=p=>{f.value.from=G(p.from,"MMM DD, YYYY"),f.value.to=G(p.to,"MMM DD, YYYY");const v=Y.extractDate(p.from,"YYYY/MM/DD"),$=Y.extractDate(p.to,"YYYY/MM/DD"),_=Date.now(),g={from:v.getTime(),to:$.getTime(),saved:_};C.set("dateSelection",g),T()},P=p=>{T(),d.value=h.value},z=()=>{T()},T=()=>{try{const p="MMM DD, YYYY",v=Y.extractDate(f.value.from,p),$=Y.extractDate(f.value.to,p),_=v.getTime()/1e3,g=Y.addToDate($,{days:1}).getTime()/1e3,E=h.value.filter(N=>!d.value.includes(N));o.createFilteredData(E,_,g),m.value=o.getBasicStatsForPeriod(_,g),a.value=o.getViewsByChannel(_,g,25),e.value=o.getViewsBySubscribers(_,g,25),i.value=o.getViewsByChannelAndGrouping(_,g),c.value=o.getViewsByGrouping(_,g),n.value=o.getViewsByGroupingAndDate(_,g),t.value=o.getViewsByGroupingAndDayOfWeek(_,g),h.value=o.getGroupings()}catch(p){console.log(p),console.log(p.stack)}};if(F==null)ae().dialog({title:"Prompt",message:"Password?",prompt:{model:"",type:"password"},cancel:!0,persistent:!0}).onOk(v=>{o.loadDatabase(v).then($=>{$?(C.set("password",v),P()):C.remove("password")})});else{const p=C.getItem("password");o.loadDatabase(p).then(v=>{v?P():C.remove("password")})}return{dateRange:f,groupings:h,selectedGroupings:d,handleReportRequested:W,handleDatabaseLoaded:P,shareByGroupingData:c,viewsByDayAndGroupingData:n,viewsByDayOfWeekAndGroupingData:t,viewsByChannelCollectedByGroupingData:i,viewsByDayAndChannelData:a,viewsAndSubscribersByChannelData:e,viewsAndSubscribersTotalsData:m,selectedGroupingsChanged:z}}},Re={class:"col-xs-12 col-sm-12 col-md-12"},Ie={class:"row q-mt-md text-h5"},Qe={class:"row q-mt-md q-gutter-sm"},Le={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},je={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},Fe=r("div",{class:"text-h6"},"Groups to Include in Report",-1),We={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},ze={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},Ee={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},Ne={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},He=r("div",{class:"text-h6"},"Grouped Data",-1),Ue=r("p",null," The data presented below is organized by groupings. The groupings aggregate the views and subscriber counts of channels that share a particular attribute. For instance, channels that are funded by foreign governments/organiztions are grouped together. ",-1),Xe={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},Je={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},Ke={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},Ze={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6"};function et(o,c,n,t,i,a){const e=u("ReportPeriodSelector"),m=u("TableOfChannels"),h=u("ChartOfViewsByDayAndChannel"),d=u("ChartOfViewsAndSubscribersByChannel"),w=u("ChartOfShareByGrouping"),k=u("ChartOfViewsByDayAndGrouping"),A=u("ChartOfViewsByDayOfWeekAndGrouping"),M=u("ChartOfShareByGroupingAndChannel");return y(),I(Z,{class:"row q-pl-md q-pr-md q-pb-lg"},{default:l(()=>[r("div",Re,[r("div",Ie," Youtube Statistics for "+B(t.dateRange.from)+" to "+B(t.dateRange.to),1),r("div",Qe,[s(e,{from:t.dateRange.from,to:t.dateRange.to,onReportRequested:t.handleReportRequested},null,8,["from","to","onReportRequested"]),s(H,{type:"a",href:"./#/special-channels",label:"Special Channels Report",push:""})]),r("div",Le,[r("div",je,[s(x,null,{default:l(()=>[s(Q,null,{default:l(()=>[Fe]),_:1}),s(L),(y(!0),S(X,null,U(t.groupings,f=>(y(),I(J,{key:f,modelValue:t.selectedGroupings,"onUpdate:modelValue":[c[0]||(c[0]=q=>t.selectedGroupings=q),t.selectedGroupingsChanged],val:f,label:f},null,8,["modelValue","val","label","onUpdate:modelValue"]))),128))]),_:1})]),r("div",We,[s(m,{"raw-series":t.viewsAndSubscribersTotalsData},null,8,["raw-series"])]),r("div",ze,[s(x,{class:"q-pl-sm q-pr-sm q-pt-sm"},{default:l(()=>[s(h,{series:t.viewsByDayAndChannelData},null,8,["series"])]),_:1})]),r("div",Ee,[s(x,{class:"q-pl-sm q-pr-sm q-pt-sm"},{default:l(()=>[s(d,{series:t.viewsAndSubscribersByChannelData},null,8,["series"])]),_:1})]),r("div",Ne,[s(x,{class:"fit q-pl-sm q-pr-sm q-pt-sm"},{default:l(()=>[s(te,null,{default:l(()=>[s(se,null,{default:l(()=>[He]),_:1})]),_:1}),s(L),s(Q,{class:"q-pt-md"},{default:l(()=>[Ue]),_:1})]),_:1})]),r("div",Xe,[s(x,{class:"fit q-pl-sm q-pr-sm q-pt-sm"},{default:l(()=>[s(w,{"raw-series":t.shareByGroupingData},null,8,["raw-series"])]),_:1})]),r("div",Je,[s(x,{class:"fit q-pl-sm q-pr-sm q-pt-sm"},{default:l(()=>[s(k,{series:t.viewsByDayAndGroupingData},null,8,["series"])]),_:1})]),r("div",Ke,[s(x,{class:"q-pl-sm q-pr-sm q-pt-sm"},{default:l(()=>[s(A,{series:t.viewsByDayOfWeekAndGroupingData},null,8,["series"])]),_:1})]),r("div",Ze,[s(x,{class:"q-pl-sm q-pr-sm q-pt-sm"},{default:l(()=>[s(M,{series:t.viewsByChannelCollectedByGroupingData},null,8,["series"])]),_:1})])])])]),_:1})}var rt=D(Te,[["render",et]]);export{rt as default};
