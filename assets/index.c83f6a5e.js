import{d as e,t as a,g as s,o as l,c as t,a as n,h as o,v as i,i as d}from"./app.fa5434e7.js";var u=e({name:"b-switch",props:{modelValue:{type:[String,Boolean],default:!1}},emit:["update:modelValue"],setup(e,l){const{modelValue:t}=a(e),n=s({get:()=>!0===t.value||"true"===t.value,set(e){l.emit("update:modelValue",e)}});return{checked:n,toggle:()=>{n.value=!n.value}}}});const c=n("span",null,null,-1);u.render=function(e,a,s,n,o,i){return l(),t("button",{class:["bass-switch",{"bass-checked":e.checked}],onClick:a[1]||(a[1]=(...a)=>e.toggle&&e.toggle(...a))},[c],2)};var r=e({props:{theme:{type:String,default:"button"},size:{type:String,default:"normal"},level:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["click"],setup(e,a){const{theme:l,size:t,level:n,loading:o,disabled:i}=e;return{classes:s((()=>({[`bass-theme-${l}`]:l,[`bass-size-${t}`]:t,[`bass-level-${n}`]:n,"bass-loading":o}))),onClick:e=>{i||o||a.emit("click",e)}}}});const p={class:"bass-loading_indicator"};r.render=function(e,a,s,u,c,r){return l(),t("button",{class:["bass-button",e.classes],disabled:e.disabled,onClick:a[1]||(a[1]=(...a)=>e.onClick&&e.onClick(...a))},[o(n("span",p,null,512),[[i,e.loading]]),d(e.$slots,"default")],10,["disabled"])};export{r as _,u as a};