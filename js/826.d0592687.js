"use strict";(self["webpackChunkyt_stats_quasar"]=self["webpackChunkyt_stats_quasar"]||[]).push([[826],{3308:(e,t,a)=>{a.d(t,{Z:()=>o});a(71),a(7098),a(9377),a(7664);var s=a(6395),n=a(2661),c=a(52),r=a.n(c);class o{constructor(){}static get unngroupedGroupingName(){return"[Ungrouped]"}async _fetchMetadata(){var e=await r().get("./data/metadata.json");return Promise.resolve(e.data)}async _fetchViewsData(e,t,a){const s=n.ZP.extractDate(e,"YYYY/MM/DD"),c=n.ZP.extractDate(t,"YYYY/MM/DD"),o=a["viewDeltaFiles"],i={},u=[],l={inclusiveFrom:!0,inclusiveTo:!0};o.forEach((e=>{const t=n.ZP.extractDate(e["start"],"MMMM_DD_YYYY"),a=n.ZP.extractDate(e["end"],"MMMM_DD_YYYY");t<=c&&s<=a&&u.push(r().get("./data/"+e["fileName"]))}));const h=await Promise.all(u);return h.forEach((e=>{Object.keys(e.data).forEach((t=>{const a=n.ZP.extractDate(t,"MMMM_DD_YYYY");n.ZP.isBetweenDates(a,s,c,l)&&(i[t]=e.data[t])}))})),i}async _fetchSubscriberCounts(e,t,a){const s=n.ZP.extractDate(e,"YYYY/MM/DD"),c=n.ZP.extractDate(t,"YYYY/MM/DD"),o=(await this.getChannels(),a["subscriberCountsFiles"]),i={},u=[],l={inclusiveFrom:!0,inclusiveTo:!0};o.forEach((e=>{const t=n.ZP.extractDate(e["start"],"MMMM_DD_YYYY"),a=n.ZP.extractDate(e["end"],"MMMM_DD_YYYY");t<=c&&s<=a&&u.push(r().get("./data/"+e["fileName"]))}));const h=await Promise.all(u);return h.forEach((e=>{Object.keys(e.data).forEach((t=>{const a=n.ZP.extractDate(t,"MMMM_DD_YYYY");n.ZP.isBetweenDates(a,s,c,l)&&(i[t]=e.data[t])}))})),i}async fetchData(e,t){const a=await this._fetchMetadata(),s=await this._fetchViewsData(e,t,a),n=await this._fetchSubscriberCounts(e,t,a),c=await this.getChannels(),r=await this._calculateTotalViewsAndSubscribersByChannel(s,n,c),o=await this.getChannelGroupings(),i=this._getChannelIdToGroupingMap(o),u=this._calculateViewsByGrouping(s,o,i),l=this._calculateViewsByDayAndGrouping(s,o,i),h=this._calculateViewsByDayOfWeekAndGrouping(s,o,i),d=this._calculateViewsByChannelAndCollectByGrouping(s,o,u),f=this._calculateViewsByDayAndChannel(s,o),g={viewsByGrouping:u,viewsByDayAndGrouping:l,viewsByDayOfWeekAndGrouping:h,viewsByChannelCollectedByGrouping:d,viewsByDayAndChannel:f,subscriberCounts:n,viewsAndSubscribersTotals:r};return Promise.resolve(g)}_calculateViewsByDayAndGrouping(e,t,a){const s=Object.keys(e),c=[];return Object.keys(t).forEach((t=>{const r=[];s.forEach((s=>{const c=e[s],o=n.ZP.extractDate(s,"MMMM_DD_YYYY").getTime();var i=0;for(const[e,n]of Object.entries(c))a[e]===t&&(i+=n);r.push([o,i])})),c.push({name:t,data:r})})),c}_calculateViewsByDayOfWeekAndGrouping(e,t,a){const s=Object.keys(e),c={};return Object.keys(t).forEach((e=>{c[e]={name:e,data:[0,0,0,0,0,0,0]}})),s.forEach((t=>{const s=n.ZP.extractDate(t,"MMMM_DD_YYYY").getDay(),r=e[t];for(const[e,n]of Object.entries(r)){const t=a[e];c[t].data[s]+=n}})),Object.values(c)}_calculateViewsByGrouping(e,t,a){const s={};Object.keys(t).forEach((e=>{s[e]=0}));for(const[n,c]of Object.entries(e))for(const[e,t]of Object.entries(c)){const n=a[e];s[n]+=t}return s}_calculateTotalViewsAndSubscribersByChannel(e,t,a){const s=a.map((e=>e.id)),n=Object.keys(e),c={},r={};s.forEach((e=>{c[e]=[],r[e]=[]}));const o={};a.forEach((e=>{o[e.id]=e})),n.forEach((a=>{Object.entries(e[a]).forEach((e=>{c[e[0]].push(e[1])})),Object.entries(t[a]).forEach((e=>{r[e[0]].push(e[1])}))}));const i=[];return Object.keys(c).forEach((e=>{const t=c[e],a=r[e],s=t.reduce(((e,t)=>e+t),0),n=a.reduce(((e,t)=>e+t),0);if(n>0){const t={name:o[e]["name"],id:parseInt(e),data:[[n,s]]};i.push(t)}})),i.sort(((e,t)=>t.data[0][0]<e.data[0][0]?-1:t.data[0][0]>e.data[0][0]?1:0)),i}_calculateViewsByDayAndChannel(e,t){const a=Object.keys(e),s=Object.values(t).flat(),c=[];s.forEach((t=>{const s=[];a.forEach((a=>{const c=e[a],r=n.ZP.extractDate(a,"MMMM_DD_YYYY").getTime();c.hasOwnProperty(t.id)?s.push([r,c[t.id]]):s.push([r,0])}));const r=s.reduce(((e,t)=>t[1]+e),0);c.push({name:t.name,data:s,totalViews:r})}));const r=c.reduce(((e,t)=>t.totalViews+e),0),o=c.map((e=>(e["percentageOfTotalViews"]=e.totalViews/r,e)));return o}_calculateViewsByChannelAndCollectByGrouping(e,t,a){const s={};for(const[c,r]of Object.entries(t))r.forEach((e=>{s[e.id]=0}));for(const[c,r]of Object.entries(e))for(const[e,t]of Object.entries(r))s[e]+=t;const n=[];for(const[c,r]of Object.entries(t)){const e=[];r.forEach((t=>{e.push({x:t.name,y:s[t.id],url:t.url,id:t.id,shareOfGrouping:(100*s[t.id]/a[c]).toFixed(1)})})),n.push({name:c,data:e})}return n}_getChannelIdToGroupingMap(e){const t={};for(const[a,s]of Object.entries(e))s.forEach((e=>{t[e.id]=a}));return t}saveCustomChannelGroupings(e){const t=Object.keys(e);t.forEach((t=>{0==e[t].length&&delete e[t]})),s.Z.set("customChannelGroupings",e)}getCustomChannelGroupings(){return s.Z.getItem("customChannelGroupings")}async getChannels(){const e=await r().get("./data/metadata.json");return Promise.resolve(Object.values(e.data["channels"]))}async getDefaultChannelGroupings(){const e=await r().get("./data/default-channel-groupings.json");return Promise.resolve(e.data)}async getChannelGroupings(){var e=await this.getDefaultChannelGroupings(),t=this.getCustomChannelGroupings();if(null===t)return Promise.resolve(e);const a=Object.values(t).flat().map((e=>e.id)),s=Object.values(e).flat().map((e=>e.id));if(a.length==s.length)return Promise.resolve(t);const n=s.filter((e=>!a.includes(e))),c=o.unngroupedGroupingName;t.hasOwnProperty(c)||(t[c]=[]);const r=Object.values(e).flat(),i=r.filter((e=>n.includes(e.id)));t[c]=t[c].concat(i);const u=Object.keys(t);return u.forEach((e=>{0==t[e].length&&delete t[e]})),this.saveCustomChannelGroupings(t),Promise.resolve(t)}}},826:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(2323);function n(e,t,a,n,c,r){return" default content "+(0,s.zw)(n.lists)}var c=a(1959),r=a(3308);const o={setup(e,{emit:t}){const a=new r.Z,s=(0,c.iH)([]);return a.getChannelGroupings().then((e=>{s.value=e})).catch((e=>console.log(e))),{lists:s}}};o.render=n;const i=o}}]);