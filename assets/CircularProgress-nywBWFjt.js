import{g as M,r as T,a as O,j as h,E as c,V as P,W as S,P as r}from"./iframe-m0FcCUbT.js";import{g as R,c as E,a as N,s as g,m as $}from"./memoTheme-C11nCEJ1.js";import{c as U}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as I}from"./chainPropTypes-CPkqCYVL.js";function z(e){return M("MuiCircularProgress",e)}R("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const a=44,y=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=P`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,F=typeof y!="string"?S`
        animation: ${y} 1.4s linear infinite;
      `:null,V=typeof v!="string"?S`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,A=e=>{const{classes:s,variant:t,color:i,disableShrink:l}=e,p={root:["root",t,`color${c(i)}`],svg:["svg"],circle:["circle",`circle${c(t)}`,l&&"circleDisableShrink"]};return N(p,z,s)},K=g("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,s[t.variant],s[`color${c(t.color)}`]]}})($(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:F||{animation:`${y} 1.4s linear infinite`}},...Object.entries(e.palette).filter(U()).map(([s])=>({props:{color:s},style:{color:(e.vars||e).palette[s].main}}))]}))),W=g("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,s)=>s.svg})({display:"block"}),B=g("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.circle,s[`circle${c(t.variant)}`],t.disableShrink&&s.circleDisableShrink]}})($(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink,style:V||{animation:`${v} 1.4s ease-in-out infinite`}}]}))),G=T.forwardRef(function(s,t){const i=O({props:s,name:"MuiCircularProgress"}),{className:l,color:p="primary",disableShrink:j=!1,size:m=40,style:w,thickness:o=3.6,value:f=0,variant:k="indeterminate",...D}=i,n={...i,color:p,disableShrink:j,size:m,thickness:o,value:f,variant:k},u=A(n),d={},x={},b={};if(k==="determinate"){const C=2*Math.PI*((a-o)/2);d.strokeDasharray=C.toFixed(3),b["aria-valuenow"]=Math.round(f),d.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return h.jsx(K,{className:E(u.root,l),style:{width:m,height:m,...x,...w},ownerState:n,ref:t,role:"progressbar",...b,...D,children:h.jsx(W,{className:u.svg,ownerState:n,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:h.jsx(B,{className:u.circle,style:d,ownerState:n,cx:a,cy:a,r:(a-o)/2,fill:"none",strokeWidth:o})})})});G.propTypes={classes:r.object,className:r.string,color:r.oneOfType([r.oneOf(["inherit","primary","secondary","error","info","success","warning"]),r.string]),disableShrink:I(r.bool,e=>e.disableShrink&&e.variant&&e.variant!=="indeterminate"?new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect."):null),size:r.oneOfType([r.number,r.string]),style:r.object,sx:r.oneOfType([r.arrayOf(r.oneOfType([r.func,r.object,r.bool])),r.func,r.object]),thickness:r.number,value:r.number,variant:r.oneOf(["determinate","indeterminate"])};export{G as C};
