import{r as u,u as pe,e as ue,j as n,y as z,x as U,Q as X,S as G,U as de,X as me,E as q}from"./iframe-Dl9r9HZP.js";import{B as R}from"./Button-DASSmM0J.js";import{g as ge,b as he,s as E,c as fe,a as xe}from"./memoTheme-DvwEb_WH.js";import{B as ye}from"./Badge-BUW6Jm0r.js";import{B as x}from"./Box-BkVDr85C.js";import{P as b}from"./Paper-DxQXb5rA.js";import{T as l}from"./Typography-U0kRp1JP.js";import{S as y}from"./Stack-BGogMBVL.js";import{T as ve}from"./TextField-DSYS7Agh.js";import{u as be}from"./useTheme-BAlR5yVX.js";import{C as H,a as N}from"./CardContent-D4_Ms7wS.js";import{I as Y}from"./IconButton-C7q2Vu_5.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-mtHRWFuf.js";import"./useForkRef-Wn9r2ipd.js";import"./useEventCallback-CJgJsajd.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-w3nmOSlZ.js";import"./usePreviousProps-BQCn3v76.js";import"./useSlot-V9VYhHcM.js";import"./resolveComponentProps-D8eOJXbT.js";import"./styled-87kgaNOt.js";import"./useThemeProps-D0czm1aT.js";import"./Select-DoYi70x6.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B_DCbXAw.js";import"./FormLabel-DeuPEY_H.js";import"./isMuiElement-DOBlspiY.js";import"./Menu-DvUfWQLh.js";import"./useSlotProps-DjVRCkjA.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-D4KdV4IN.js";import"./utils-B_B_gjLa.js";import"./index-ebyj4rdU.js";import"./index-U0P_bg-H.js";import"./getReactElementRef-BO8IinHS.js";import"./mergeSlotProps-BZ3KhpGo.js";import"./Modal-CWaWe64L.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BkGvFH3H.js";import"./Fade-CKunJLOS.js";import"./List-2nzJN48e.js";import"./ListContext-DcEyboKh.js";import"./useControlled-BN2N4-wP.js";import"./createSvgIcon-BSsRlrdR.js";import"./FormHelperText-CAj1vV0Q.js";const J=u.createContext();function Be(e){return ge("MuiGrid",e)}const Se=[0,1,2,3,4,5,6,7,8,9,10],je=["column-reverse","column","row-reverse","row"],Ce=["nowrap","wrap-reverse","wrap"],P=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],D=he("MuiGrid",["root","container","item","zeroMinWidth",...Se.map(e=>`spacing-xs-${e}`),...je.map(e=>`direction-xs-${e}`),...Ce.map(e=>`wrap-xs-${e}`),...P.map(e=>`grid-xs-${e}`),...P.map(e=>`grid-sm-${e}`),...P.map(e=>`grid-md-${e}`),...P.map(e=>`grid-lg-${e}`),...P.map(e=>`grid-xl-${e}`)]);function ke({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((o,a)=>{let s={};if(t[a]&&(r=t[a]),!r)return o;if(r===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=z({values:t.columns,breakpoints:e.breakpoints.values}),p=typeof i=="object"?i[a]:i;if(p==null)return o;const c=`${Math.round(r/p*1e8)/1e6}%`;let d={};if(t.container&&t.item&&t.columnSpacing!==0){const m=e.spacing(t.columnSpacing);if(m!=="0px"){const g=`calc(${c} + ${m})`;d={flexBasis:g,maxWidth:g}}}s={flexBasis:c,flexGrow:0,maxWidth:c,...d}}return e.breakpoints.values[a]===0?Object.assign(o,s):o[e.breakpoints.up(a)]=s,o},{})}function Te({theme:e,ownerState:t}){const r=z({values:t.direction,breakpoints:e.breakpoints.values});return U({theme:e},r,o=>{const a={flexDirection:o};return o.startsWith("column")&&(a[`& > .${D.item}`]={maxWidth:"none"}),a})}function ee({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(a=>{r===""&&t[a]!==0&&(r=a)});const o=Object.keys(e).sort((a,s)=>e[a]-e[s]);return o.slice(0,o.indexOf(r))}function we({theme:e,ownerState:t}){const{container:r,rowSpacing:o}=t;let a={};if(r&&o!==0){const s=z({values:o,breakpoints:e.breakpoints.values});let i;typeof s=="object"&&(i=ee({breakpoints:e.breakpoints.values,values:s})),a=U({theme:e},s,(p,c)=>{const d=e.spacing(p);return d!=="0px"?{marginTop:`calc(-1 * ${d})`,[`& > .${D.item}`]:{paddingTop:d}}:i?.includes(c)?{}:{marginTop:0,[`& > .${D.item}`]:{paddingTop:0}}})}return a}function Me({theme:e,ownerState:t}){const{container:r,columnSpacing:o}=t;let a={};if(r&&o!==0){const s=z({values:o,breakpoints:e.breakpoints.values});let i;typeof s=="object"&&(i=ee({breakpoints:e.breakpoints.values,values:s})),a=U({theme:e},s,(p,c)=>{const d=e.spacing(p);if(d!=="0px"){const m=`calc(-1 * ${d})`;return{width:`calc(100% + ${d})`,marginLeft:m,[`& > .${D.item}`]:{paddingLeft:d}}}return i?.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${D.item}`]:{paddingLeft:0}}})}return a}function Re(e,t,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const o=[];return t.forEach(a=>{const s=e[a];Number(s)>0&&o.push(r[`spacing-${a}-${String(s)}`])}),o}const Pe=E("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:o,direction:a,item:s,spacing:i,wrap:p,zeroMinWidth:c,breakpoints:d}=r;let m=[];o&&(m=Re(i,d,t));const g=[];return d.forEach(h=>{const v=r[h];v&&g.push(t[`grid-${h}-${String(v)}`])}),[t.root,o&&t.container,s&&t.item,c&&t.zeroMinWidth,...m,a!=="row"&&t[`direction-xs-${String(a)}`],p!=="wrap"&&t[`wrap-xs-${String(p)}`],...g]}})(({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},...e.wrap!=="wrap"&&{flexWrap:e.wrap}}),Te,we,Me,ke);function $e(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return t.forEach(o=>{const a=e[o];if(Number(a)>0){const s=`spacing-${o}-${String(a)}`;r.push(s)}}),r}const De=e=>{const{classes:t,container:r,direction:o,item:a,spacing:s,wrap:i,zeroMinWidth:p,breakpoints:c}=e;let d=[];r&&(d=$e(s,c));const m=[];c.forEach(h=>{const v=e[h];v&&m.push(`grid-${h}-${String(v)}`)});const g={root:["root",r&&"container",a&&"item",p&&"zeroMinWidth",...d,o!=="row"&&`direction-xs-${String(o)}`,i!=="wrap"&&`wrap-xs-${String(i)}`,...m]};return xe(g,Be,t)},I=u.forwardRef(function(t,r){const o=pe({props:t,name:"MuiGrid"}),{breakpoints:a}=be(),s=ue(o),{className:i,columns:p,columnSpacing:c,component:d="div",container:m=!1,direction:g="row",item:h=!1,rowSpacing:v,spacing:W=0,wrap:oe="wrap",zeroMinWidth:ae=!1,...V}=s,se=v||W,ie=c||W,ce=u.useContext(J),K=m?p||12:ce,F={},Z={...V};a.keys.forEach(A=>{V[A]!=null&&(F[A]=V[A],delete Z[A])});const Q={...s,columns:K,container:m,direction:g,item:h,rowSpacing:se,columnSpacing:ie,wrap:oe,zeroMinWidth:ae,spacing:W,...F,breakpoints:a.keys},le=De(Q);return n.jsx(J.Provider,{value:K,children:n.jsx(Pe,{ownerState:Q,className:fe(le.root,i),as:d,ref:r,...Z})})}),Ee=()=>{const[e,t]=u.useState([]),r=u.useCallback(a=>{const i=a.currentTarget.getBoundingClientRect(),p=Math.max(i.width,i.height),c=a.clientX-i.left-p/2,d=a.clientY-i.top-p/2,m={x:c,y:d,size:p,id:Date.now()};t(h=>[...h,m]);const g=parseInt(X)*6;setTimeout(()=>{t(h=>h.filter(v=>v.id!==m.id))},g)},[]),o=u.useCallback(()=>{t([])},[]);return{ripples:e,createRipple:r,clearRipples:o}},ne=(e={})=>{const{duration:t=1e3,scale:r=1.05,enabled:o=!0}=e,a=u.useRef(null);return u.useEffect(()=>{if(!o||!a.current)return;const s=a.current,i=[{transform:"scale(1)"},{transform:`scale(${r})`},{transform:"scale(1)"}],p=s.animate(i,{duration:t,iterations:1/0,easing:"ease-in-out"});return()=>{p.cancel()}},[t,r,o]),a},te=(e={})=>{const{duration:t=parseInt(G),distance:r=10}=e,o=u.useRef(null),a=u.useCallback(()=>{if(!o.current)return;const s=o.current,i=[{transform:"translateX(0)"},{transform:`translateX(-${r}px)`},{transform:`translateX(${r}px)`},{transform:`translateX(-${r}px)`},{transform:`translateX(${r}px)`},{transform:"translateX(0)"}];s.animate(i,{duration:t,easing:"ease-in-out"})},[t,r]);return{ref:o,shake:a}},re=(e={})=>{const{duration:t=parseInt(de),scale:r=1.2}=e,o=u.useRef(null),a=u.useCallback(()=>{if(!o.current)return;const s=o.current,i=[{transform:"scale(1)"},{transform:`scale(${r})`},{transform:"scale(0.9)"},{transform:`scale(${r*.95})`},{transform:"scale(1)"}];s.animate(i,{duration:t,easing:"ease-out"})},[t,r]);return{ref:o,bounce:a}},L=(e={})=>{const{scale:t=1.05,duration:r=X,easing:o=me}=e,[a,s]=u.useState(!1),i=u.useCallback(()=>s(!0),[]),p=u.useCallback(()=>s(!1),[]),c={transform:a?`scale(${t})`:"scale(1)",transition:`transform ${r} ${o}`,cursor:"pointer"};return{isHovered:a,onMouseEnter:i,onMouseLeave:p,style:c}},Ae=E("span")({position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",borderRadius:"inherit"}),Ie=E("span")(({x:e,y:t,size:r})=>({position:"absolute",left:e,top:t,width:r,height:r,borderRadius:"50%",backgroundColor:"currentColor",opacity:.3,animation:`ripple ${parseInt(X)*6}ms ease-out`,"@keyframes ripple":{"0%":{transform:"scale(0)",opacity:.6},"100%":{transform:"scale(4)",opacity:0}}})),M=u.forwardRef(({children:e,disableRipple:t=!1,onClick:r,...o},a)=>{const{ripples:s,createRipple:i}=Ee(),p=c=>{t||i(c),r?.(c)};return n.jsxs(R,{ref:a,onClick:p,sx:{position:"relative"},...o,children:[!t&&n.jsx(Ae,{children:s.map(c=>n.jsx(Ie,{x:c.x,y:c.y,size:c.size},c.id))}),e]})});M.displayName="RippleButton";M.__docgenInfo={description:`RippleButton Component

Enhanced Material-UI Button with custom ripple effect

@example
\`\`\`tsx
<RippleButton variant="contained" color="primary">
  Click me for ripple effect
</RippleButton>
\`\`\``,methods:[],displayName:"RippleButton",props:{disableRipple:{required:!1,tsType:{name:"boolean"},description:`If true, ripple effect is disabled
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["ButtonProps"]};const Le=q`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
`,ze=q`
  0% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(244, 67, 54, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
  }
`,Ge=E(ye)(({animate:e,animationvariant:t})=>e?t==="bounce"?{"& .MuiBadge-badge":{animation:`${Le} ${parseInt(G)*3}ms ease-in-out`}}:t==="pulse"?{"& .MuiBadge-badge":{animation:`${ze} 2s infinite`}}:{}:{}),_=({animationVariant:e="bounce",animateOnChange:t=!0,badgeContent:r,children:o,...a})=>{const[s,i]=u.useState(!1),[p,c]=u.useState(r);u.useEffect(()=>{if(!t||r===p)return;i(!0),c(r);const g=setTimeout(()=>{i(!1)},parseInt(G)*3);return()=>clearTimeout(g)},[r,p,t]);const m=e==="pulse"||s;return n.jsx(Ge,{badgeContent:r,animate:m,animationvariant:e==="none"?void 0:e,...a,children:o})};_.__docgenInfo={description:`AnimatedBadge Component

Badge component with entrance animations

@example
\`\`\`tsx
<AnimatedBadge badgeContent={4} color="error" animationVariant="bounce">
  <MailIcon />
</AnimatedBadge>
\`\`\``,methods:[],displayName:"AnimatedBadge",props:{animationVariant:{required:!1,tsType:{name:"union",raw:"'bounce' | 'pulse' | 'none'",elements:[{name:"literal",value:"'bounce'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'none'"}]},description:`Animation variant
@default 'bounce'`,defaultValue:{value:"'bounce'",computed:!1}},animateOnChange:{required:!1,tsType:{name:"boolean"},description:`If true, animation plays once when badge appears
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["BadgeProps"]};const We=q`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`,O=E("span")(({theme:e,delay:t})=>({width:12,height:12,borderRadius:"50%",backgroundColor:e.palette.primary.main,display:"inline-block",margin:"0 4px",animation:`${We} ${parseInt(G)*7}ms infinite ease-in-out`,animationDelay:`${t}ms`})),f=({color:e="primary",size:t="medium"})=>{const o={small:8,medium:12,large:16}[t];return n.jsxs(x,{sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:.5},children:[n.jsx(O,{delay:0,sx:{width:o,height:o,bgcolor:`${e}.main`}}),n.jsx(O,{delay:160,sx:{width:o,height:o,bgcolor:`${e}.main`}}),n.jsx(O,{delay:320,sx:{width:o,height:o,bgcolor:`${e}.main`}})]})};f.__docgenInfo={description:`LoadingDots Component

Three-dot loading animation

@example
\`\`\`tsx
<LoadingDots color="primary" size="medium" />
\`\`\``,methods:[],displayName:"LoadingDots",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Color of the dots
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Size of the dots
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}}}};const Ln={title:"Micro-Interactions/Overview",parameters:{docs:{description:{component:"Complete micro-interactions library with hooks and components for engaging user experiences."}}}},B={render:()=>n.jsxs(b,{elevation:1,sx:{p:3},children:[n.jsx(l,{variant:"h6",gutterBottom:!0,children:"💧 Ripple Effect"}),n.jsx(l,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Material Design ripple effect for tactile feedback"}),n.jsxs(y,{direction:"row",spacing:2,flexWrap:"wrap",children:[n.jsx(M,{variant:"contained",color:"primary",children:"Click for Ripple"}),n.jsx(M,{variant:"contained",color:"secondary",children:"Secondary Ripple"}),n.jsx(M,{variant:"outlined",color:"error",children:"Outlined Ripple"}),n.jsx(M,{variant:"text",color:"info",children:"Text Ripple"})]})]})},S={render:()=>{const{ref:e,shake:t}=te(),[r,o]=u.useState(""),a=()=>{r.includes("@")||t()};return n.jsxs(b,{elevation:1,sx:{p:3},children:[n.jsx(l,{variant:"h6",gutterBottom:!0,children:"🔔 Shake Animation"}),n.jsx(l,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Useful for error feedback and invalid inputs"}),n.jsx(x,{ref:e,children:n.jsxs(y,{spacing:2,children:[n.jsx(ve,{label:"Email",value:r,onChange:s=>o(s.target.value),helperText:"Enter an invalid email and click submit",fullWidth:!0}),n.jsx(R,{variant:"contained",onClick:a,children:"Submit (Shakes on error)"})]})})]})}},j={render:()=>{const{ref:e,bounce:t}=re();return n.jsxs(b,{elevation:1,sx:{p:3},children:[n.jsx(l,{variant:"h6",gutterBottom:!0,children:"⚡ Bounce Animation"}),n.jsx(l,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Playful bounce effect for success actions"}),n.jsx(R,{ref:e,variant:"contained",color:"success",onClick:t,children:"Click to Bounce!"})]})}},C={render:()=>{const e=L({scale:1.05}),t=L({scale:1.1}),r=L({scale:1.15});return n.jsxs(b,{elevation:1,sx:{p:3},children:[n.jsx(l,{variant:"h6",gutterBottom:!0,children:"🔍 Hover Scale"}),n.jsx(l,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Smooth scale transitions on hover"}),n.jsxs(I,{container:!0,spacing:2,children:[n.jsx(I,{item:!0,xs:12,sm:4,children:n.jsx(H,{elevation:2,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,sx:e.style,children:n.jsxs(N,{children:[n.jsx(l,{variant:"h6",children:"Scale 1.05"}),n.jsx(l,{variant:"body2",color:"text.secondary",children:"Subtle hover effect"})]})})}),n.jsx(I,{item:!0,xs:12,sm:4,children:n.jsx(H,{elevation:2,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,sx:t.style,children:n.jsxs(N,{children:[n.jsx(l,{variant:"h6",children:"Scale 1.1"}),n.jsx(l,{variant:"body2",color:"text.secondary",children:"Medium hover effect"})]})})}),n.jsx(I,{item:!0,xs:12,sm:4,children:n.jsx(H,{elevation:2,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,sx:r.style,children:n.jsxs(N,{children:[n.jsx(l,{variant:"h6",children:"Scale 1.15"}),n.jsx(l,{variant:"body2",color:"text.secondary",children:"Strong hover effect"})]})})})]})]})}},k={render:()=>{const e=ne({duration:1e3,scale:1.05});return n.jsxs(b,{elevation:1,sx:{p:3},children:[n.jsx(l,{variant:"h6",gutterBottom:!0,children:"💓 Pulse Animation"}),n.jsx(l,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Continuous pulsing for attention-grabbing elements"}),n.jsx(x,{display:"flex",justifyContent:"center",py:4,children:n.jsx(b,{ref:e,elevation:3,sx:{width:120,height:120,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"primary.main",color:"primary.contrastText"},children:n.jsx(l,{variant:"h5",fontWeight:"bold",children:"Pulse"})})})]})}},T={render:()=>{const[e,t]=u.useState(0),[r,o]=u.useState(5);return n.jsxs(b,{elevation:1,sx:{p:3},children:[n.jsx(l,{variant:"h6",gutterBottom:!0,children:"🔔 Animated Badge"}),n.jsx(l,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Badge with entrance animations and pulse effect"}),n.jsxs(y,{spacing:3,children:[n.jsxs(x,{children:[n.jsx(l,{variant:"subtitle2",gutterBottom:!0,children:"Bounce on Change"}),n.jsxs(y,{direction:"row",spacing:4,alignItems:"center",children:[n.jsx(_,{badgeContent:e,color:"error",animationVariant:"bounce",children:n.jsx(Y,{children:n.jsx("span",{style:{fontSize:24},children:"📧"})})}),n.jsx(R,{variant:"outlined",onClick:()=>t(a=>a+1),children:"Increment (+)"})]})]}),n.jsxs(x,{children:[n.jsx(l,{variant:"subtitle2",gutterBottom:!0,children:"Continuous Pulse"}),n.jsxs(y,{direction:"row",spacing:4,alignItems:"center",children:[n.jsx(_,{badgeContent:r,color:"error",animationVariant:"pulse",children:n.jsx(Y,{children:n.jsx("span",{style:{fontSize:24},children:"🔔"})})}),n.jsxs(y,{direction:"row",spacing:1,children:[n.jsx(R,{variant:"outlined",onClick:()=>o(a=>a+1),children:"+"}),n.jsx(R,{variant:"outlined",onClick:()=>o(a=>Math.max(0,a-1)),children:"-"})]})]})]})]})]})}},w={render:()=>n.jsxs(b,{elevation:1,sx:{p:3},children:[n.jsx(l,{variant:"h6",gutterBottom:!0,children:"⏳ Loading Dots"}),n.jsx(l,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Animated three-dot loading indicator"}),n.jsxs(y,{spacing:3,children:[n.jsxs(x,{children:[n.jsx(l,{variant:"subtitle2",gutterBottom:!0,children:"Sizes"}),n.jsxs(y,{direction:"row",spacing:4,alignItems:"center",children:[n.jsxs(x,{children:[n.jsx(l,{variant:"caption",display:"block",mb:1,children:"Small"}),n.jsx(f,{size:"small"})]}),n.jsxs(x,{children:[n.jsx(l,{variant:"caption",display:"block",mb:1,children:"Medium"}),n.jsx(f,{size:"medium"})]}),n.jsxs(x,{children:[n.jsx(l,{variant:"caption",display:"block",mb:1,children:"Large"}),n.jsx(f,{size:"large"})]})]})]}),n.jsxs(x,{children:[n.jsx(l,{variant:"subtitle2",gutterBottom:!0,children:"Colors"}),n.jsxs(y,{direction:"row",spacing:4,alignItems:"center",children:[n.jsx(f,{color:"primary"}),n.jsx(f,{color:"secondary"}),n.jsx(f,{color:"error"}),n.jsx(f,{color:"warning"}),n.jsx(f,{color:"info"}),n.jsx(f,{color:"success"})]})]})]})]})},$={render:()=>{te(),re(),ne(),L();const[e,t]=u.useState(3);return n.jsxs(y,{spacing:3,children:[n.jsx(B.render,{}),n.jsx(S.render,{}),n.jsx(j.render,{}),n.jsx(C.render,{}),n.jsx(k.render,{}),n.jsx(T.render,{}),n.jsx(w.render,{})]})}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Paper elevation={1} sx={{
    p: 3
  }}>
      <Typography variant="h6" gutterBottom>
        💧 Ripple Effect
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Material Design ripple effect for tactile feedback
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <RippleButton variant="contained" color="primary">
          Click for Ripple
        </RippleButton>
        <RippleButton variant="contained" color="secondary">
          Secondary Ripple
        </RippleButton>
        <RippleButton variant="outlined" color="error">
          Outlined Ripple
        </RippleButton>
        <RippleButton variant="text" color="info">
          Text Ripple
        </RippleButton>
      </Stack>
    </Paper>
}`,...B.parameters?.docs?.source},description:{story:"Ripple Effect Demo",...B.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      ref,
      shake
    } = useShake<HTMLDivElement>();
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
      if (!email.includes('@')) {
        shake();
      }
    };
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          🔔 Shake Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Useful for error feedback and invalid inputs
        </Typography>
        <Box ref={ref}>
          <Stack spacing={2}>
            <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} helperText="Enter an invalid email and click submit" fullWidth />
            <Button variant="contained" onClick={handleSubmit}>
              Submit (Shakes on error)
            </Button>
          </Stack>
        </Box>
      </Paper>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Shake Animation Demo",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      ref,
      bounce
    } = useBounce<HTMLButtonElement>();
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          ⚡ Bounce Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Playful bounce effect for success actions
        </Typography>
        <Button ref={ref} variant="contained" color="success" onClick={bounce}>
          Click to Bounce!
        </Button>
      </Paper>;
  }
}`,...j.parameters?.docs?.source},description:{story:"Bounce Animation Demo",...j.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const card1 = useHoverScale({
      scale: 1.05
    });
    const card2 = useHoverScale({
      scale: 1.1
    });
    const card3 = useHoverScale({
      scale: 1.15
    });
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          🔍 Hover Scale
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Smooth scale transitions on hover
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card elevation={2} onMouseEnter={card1.onMouseEnter} onMouseLeave={card1.onMouseLeave} sx={card1.style}>
              <CardContent>
                <Typography variant="h6">Scale 1.05</Typography>
                <Typography variant="body2" color="text.secondary">
                  Subtle hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card elevation={2} onMouseEnter={card2.onMouseEnter} onMouseLeave={card2.onMouseLeave} sx={card2.style}>
              <CardContent>
                <Typography variant="h6">Scale 1.1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Medium hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card elevation={2} onMouseEnter={card3.onMouseEnter} onMouseLeave={card3.onMouseLeave} sx={card3.style}>
              <CardContent>
                <Typography variant="h6">Scale 1.15</Typography>
                <Typography variant="body2" color="text.secondary">
                  Strong hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Hover Scale Demo",...C.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const pulseRef = usePulse<HTMLDivElement>({
      duration: 1000,
      scale: 1.05
    });
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          💓 Pulse Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Continuous pulsing for attention-grabbing elements
        </Typography>
        <Box display="flex" justifyContent="center" py={4}>
          <Paper ref={pulseRef} elevation={3} sx={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.main',
          color: 'primary.contrastText'
        }}>
            <Typography variant="h5" fontWeight="bold">
              Pulse
            </Typography>
          </Paper>
        </Box>
      </Paper>;
  }
}`,...k.parameters?.docs?.source},description:{story:"Pulse Animation Demo",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [bounceCount, setBounceCount] = useState(0);
    const [pulseCount, setPulseCount] = useState(5);
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          🔔 Animated Badge
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Badge with entrance animations and pulse effect
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Bounce on Change
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <AnimatedBadge badgeContent={bounceCount} color="error" animationVariant="bounce">
                <IconButton>
                  <span style={{
                  fontSize: 24
                }}>📧</span>
                </IconButton>
              </AnimatedBadge>
              <Button variant="outlined" onClick={() => setBounceCount(c => c + 1)}>
                Increment (+)
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Continuous Pulse
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <AnimatedBadge badgeContent={pulseCount} color="error" animationVariant="pulse">
                <IconButton>
                  <span style={{
                  fontSize: 24
                }}>🔔</span>
                </IconButton>
              </AnimatedBadge>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" onClick={() => setPulseCount(c => c + 1)}>
                  +
                </Button>
                <Button variant="outlined" onClick={() => setPulseCount(c => Math.max(0, c - 1))}>
                  -
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Paper>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Animated Badge Demo",...T.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Paper elevation={1} sx={{
    p: 3
  }}>
      <Typography variant="h6" gutterBottom>
        ⏳ Loading Dots
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Animated three-dot loading indicator
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Sizes
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Small
              </Typography>
              <LoadingDots size="small" />
            </Box>
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Medium
              </Typography>
              <LoadingDots size="medium" />
            </Box>
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Large
              </Typography>
              <LoadingDots size="large" />
            </Box>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Colors
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <LoadingDots color="primary" />
            <LoadingDots color="secondary" />
            <LoadingDots color="error" />
            <LoadingDots color="warning" />
            <LoadingDots color="info" />
            <LoadingDots color="success" />
          </Stack>
        </Box>
      </Stack>
    </Paper>
}`,...w.parameters?.docs?.source},description:{story:"Loading Dots Demo",...w.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      ref: shakeRef,
      shake
    } = useShake<HTMLDivElement>();
    const {
      ref: bounceRef,
      bounce
    } = useBounce<HTMLButtonElement>();
    const pulseRef = usePulse<HTMLDivElement>();
    const hoverScale = useHoverScale();
    const [badgeCount, setBadgeCount] = useState(3);
    return <Stack spacing={3}>
        <RippleEffect.render />
        <ShakeAnimation.render />
        <BounceAnimation.render />
        <HoverScale.render />
        <PulseAnimation.render />
        <AnimatedBadgeDemo.render />
        <LoadingDotsDemo.render />
      </Stack>;
  }
}`,...$.parameters?.docs?.source},description:{story:"All Interactions Demo",...$.parameters?.docs?.description}}};const zn=["RippleEffect","ShakeAnimation","BounceAnimation","HoverScale","PulseAnimation","AnimatedBadgeDemo","LoadingDotsDemo","AllInteractions"];export{$ as AllInteractions,T as AnimatedBadgeDemo,j as BounceAnimation,C as HoverScale,w as LoadingDotsDemo,k as PulseAnimation,B as RippleEffect,S as ShakeAnimation,zn as __namedExportsOrder,Ln as default};
