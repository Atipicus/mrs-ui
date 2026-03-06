import{g as v,r as C,a as w,j as k,V as h,W as f,F as x,P as t}from"./iframe-m0FcCUbT.js";import{g as R,c as S,a as T,s as O,m as $}from"./memoTheme-C11nCEJ1.js";function j(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function U(e){return parseFloat(e)}function M(e){return v("MuiSkeleton",e)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const A=e=>{const{classes:n,variant:a,animation:s,hasChildren:o,width:r,height:i}=e;return T({root:["root",a,s,o&&"withChildren",o&&!r&&"fitContent",o&&!i&&"heightAuto"]},M,n)},l=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,p=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,X=typeof l!="string"?f`
        animation: ${l} 2s ease-in-out 0.5s infinite;
      `:null,N=typeof p!="string"?f`
        &::after {
          animation: ${p} 2s linear 0.5s infinite;
        }
      `:null,P=O("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,n[a.variant],a.animation!==!1&&n[a.animation],a.hasChildren&&n.withChildren,a.hasChildren&&!a.width&&n.fitContent,a.hasChildren&&!a.height&&n.heightAuto]}})($(({theme:e})=>{const n=j(e.shape.borderRadius)||"px",a=U(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:x(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:s})=>s.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:s})=>s.hasChildren&&!s.width,style:{maxWidth:"fit-content"}},{props:({ownerState:s})=>s.hasChildren&&!s.height,style:{height:"auto"}},{props:{animation:"pulse"},style:X||{animation:`${l} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:N||{"&::after":{animation:`${p} 2s linear 0.5s infinite`}}}]}})),W=C.forwardRef(function(n,a){const s=w({props:n,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:i="span",height:c,style:m,variant:g="text",width:y,...u}=s,d={...s,animation:o,component:i,variant:g,hasChildren:!!u.children},b=A(d);return k.jsx(P,{as:i,ref:a,className:S(b.root,r),ownerState:d,...u,style:{width:y,height:c,...m}})});W.propTypes={animation:t.oneOf(["pulse","wave",!1]),children:t.node,classes:t.object,className:t.string,component:t.elementType,height:t.oneOfType([t.number,t.string]),style:t.object,sx:t.oneOfType([t.arrayOf(t.oneOfType([t.func,t.object,t.bool])),t.func,t.object]),variant:t.oneOfType([t.oneOf(["circular","rectangular","rounded","text"]),t.string]),width:t.oneOfType([t.number,t.string])};export{W as S};
