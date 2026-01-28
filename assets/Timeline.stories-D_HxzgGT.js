import{r as y,c as F,j as e,R as C}from"./iframe-DxesKUG5.js";import{g as S,b as I,s as D,c as M,a as O}from"./memoTheme-B6Th5GL5.js";import{u as R}from"./useThemeProps-zQPpVFVc.js";import{T as o}from"./Typography-UCSWEJhs.js";import{i as H}from"./isMuiElement-D0L_tVWv.js";import{M as h}from"./MaterialSymbol-CiCAuhWc.js";import{B as V}from"./Box-DSvwcJiO.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-D7AeT9dZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const L=y.createContext({});function K(n){return S("MuiTimeline",n)}I("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function v(n){return n==="alternate-reverse"?"positionAlternateReverse":`position${F(n)}`}const Q=n=>{const{position:i,classes:a}=n,c={root:["root",i&&v(i)]};return O(c,K,a)},Z=D("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:a}=n;return[i.root,a.position&&i[v(a.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),ee=y.forwardRef(function(i,a){const c=R({props:i,name:"MuiTimeline"}),{position:m="right",className:u,...T}=c,d={...c,position:m},g=Q(d),f=y.useMemo(()=>({position:m}),[m]);return e.jsx(L.Provider,{value:f,children:e.jsx(Z,{className:M(g.root,u),ownerState:d,ref:a,...T})})});function ne(n){return S("MuiTimelineContent",n)}const ie=I("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),oe=n=>{const{position:i,classes:a}=n,c={root:["root",v(i)]};return O(c,ne,a)},re=D(o,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:a}=n;return[i.root,i[v(a.position)]]}})(({ownerState:n})=>({flex:1,padding:"6px 16px",textAlign:"left",...n.position==="left"&&{textAlign:"right"}})),te=y.forwardRef(function(i,a){const c=R({props:i,name:"MuiTimelineContent"}),{className:m,...u}=c,{position:T}=y.useContext(L),d={...c,position:T||"right"},g=oe(d);return e.jsx(re,{component:"div",className:M(g.root,m),ownerState:d,ref:a,...u})});function se(n){return S("MuiTimelineOppositeContent",n)}const le=I("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),ae=n=>{const{position:i,classes:a}=n,c={root:["root",v(i)]};return O(c,se,a)},pe=D(o,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:a}=n;return[i.root,i[v(a.position)]]}})(({ownerState:n})=>({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1,...n.position==="left"&&{textAlign:"left"}})),J=y.forwardRef(function(i,a){const c=R({props:i,name:"MuiTimelineOppositeContent"}),{className:m,...u}=c,{position:T}=y.useContext(L),d={...c,position:T||"left"},g=ae(d);return e.jsx(pe,{component:"div",className:M(g.root,m),ownerState:d,ref:a,...u})});J.muiName="TimelineOppositeContent";function ce(n){return S("MuiTimelineItem",n)}I("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const me=n=>{const{position:i,classes:a,hasOppositeContent:c}=n,m={root:["root",v(i),!c&&"missingOppositeContent"]};return O(m,ce,a)},de=D("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:a}=n;return[i.root,i[v(a.position)]]}})(({ownerState:n})=>({listStyle:"none",display:"flex",position:"relative",minHeight:70,...n.position==="left"&&{flexDirection:"row-reverse"},...(n.position==="alternate"||n.position==="alternate-reverse")&&{[`&:nth-of-type(${n.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${ie.root}`]:{textAlign:"right"},[`& .${le.root}`]:{textAlign:"left"}}},...!n.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}}})),Te=y.forwardRef(function(i,a){const c=R({props:i,name:"MuiTimelineItem"}),{position:m,className:u,...T}=c,{position:d}=y.useContext(L);let g=!1;y.Children.forEach(c.children,Y=>{H(Y,["TimelineOppositeContent"])&&(g=!0)});const f={...c,position:m||d||"right",hasOppositeContent:g},z=me(f),X=y.useMemo(()=>({position:f.position}),[f.position]);return e.jsx(L.Provider,{value:X,children:e.jsx(de,{className:M(z.root,u),ownerState:f,ref:a,...T})})});function he(n){return S("MuiTimelineSeparator",n)}I("MuiTimelineSeparator",["root"]);const ye=n=>{const{classes:i}=n;return O({root:["root"]},he,i)},xe=D("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(n,i)=>i.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),je=y.forwardRef(function(i,a){const c=R({props:i,name:"MuiTimelineSeparator"}),{className:m,...u}=c,T=c,d=ye(T);return e.jsx(xe,{className:M(d.root,m),ownerState:T,ref:a,...u})});function ue(n){return S("MuiTimelineDot",n)}I("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const ge=n=>{const{color:i,variant:a,classes:c}=n,m={root:["root",a,i!=="inherit"&&`${a}${F(i)}`]};return O(m,ue,c)},Ce=D("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:a}=n;return[i.root,i[a.color!=="inherit"&&`${a.variant}${F(a.color)}`],i[a.variant]]}})(({ownerState:n,theme:i})=>({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(i.vars||i).shadows[1],margin:"11.5px 0",...n.variant==="filled"&&{borderColor:"transparent",...n.color!=="inherit"&&{...n.color==="grey"?{color:(i.vars||i).palette.grey[50],backgroundColor:(i.vars||i).palette.grey[400]}:{color:(i.vars||i).palette[n.color].contrastText,backgroundColor:(i.vars||i).palette[n.color].main}}},...n.variant==="outlined"&&{boxShadow:"none",backgroundColor:"transparent",...n.color!=="inherit"&&{...n.color==="grey"?{borderColor:(i.vars||i).palette.grey[400]}:{borderColor:(i.vars||i).palette[n.color].main}}}})),fe=y.forwardRef(function(i,a){const c=R({props:i,name:"MuiTimelineDot"}),{className:m,color:u="grey",variant:T="filled",...d}=c,g={...c,color:u,variant:T},f=ge(g);return e.jsx(Ce,{className:M(f.root,m),ownerState:g,ref:a,...d})});function ve(n){return S("MuiTimelineConnector",n)}I("MuiTimelineConnector",["root"]);const Se=n=>{const{classes:i}=n;return O({root:["root"]},ve,i)},Ie=D("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(n,i)=>i.root})(({theme:n})=>({width:2,backgroundColor:(n.vars||n).palette.grey[400],flexGrow:1})),De=y.forwardRef(function(i,a){const c=R({props:i,name:"MuiTimelineConnector"}),{className:m,...u}=c,T=c,d=Se(T);return e.jsx(Ie,{className:M(d.root,m),ownerState:T,ref:a,...u})}),q=C.forwardRef(({position:n="left",...i},a)=>e.jsx(ee,{ref:a,position:n,...i})),j=C.memo(q);j.displayName="Timeline";const G=C.forwardRef((n,i)=>e.jsx(Te,{ref:i,...n})),l=C.memo(G);l.displayName="TimelineItem";const r=C.forwardRef((n,i)=>e.jsx(je,{ref:i,...n}));r.displayName="TimelineSeparator";const t=C.forwardRef(({variant:n="filled",color:i="primary",...a},c)=>e.jsx(fe,{ref:c,variant:n,color:i,...a}));t.displayName="TimelineDot";const p=C.forwardRef((n,i)=>e.jsx(De,{ref:i,...n}));p.displayName="TimelineConnector";const s=C.forwardRef((n,i)=>e.jsx(te,{ref:i,...n}));s.displayName="TimelineContent";const x=C.forwardRef((n,i)=>e.jsx(J,{ref:i,...n}));x.displayName="TimelineOppositeContent";q.__docgenInfo={description:`Timeline component

The Timeline displays a list of events in chronological order.

Memoized for performance with long timelines.
Re-renders only when props change.

@param props - Timeline component props
@returns Timeline component`,methods:[],displayName:"TimelineBase",props:{position:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate' | 'alternate-reverse'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"},{name:"literal",value:"'alternate-reverse'"}]},description:`The position where the timeline's content should appear
@default 'left'`,defaultValue:{value:"'left'",computed:!1}}},composes:["MuiTimelineProps"]};G.__docgenInfo={description:`TimelineItem component

A single item in the timeline.

Memoized to prevent unnecessary re-renders when timeline has many items.

@param props - TimelineItem component props
@returns TimelineItem component`,methods:[],displayName:"TimelineItemBase",props:{position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"The position where the timeline item's content should appear"}},composes:["MuiTimelineItemProps"]};r.__docgenInfo={description:`TimelineSeparator component

Separator between timeline content, containing the dot and connector.

@param props - TimelineSeparator component props
@returns TimelineSeparator component`,methods:[],displayName:"TimelineSeparator",composes:["MuiTimelineSeparatorProps"]};t.__docgenInfo={description:`TimelineDot component

The dot indicating an event in the timeline.

@param props - TimelineDot component props
@returns TimelineDot component`,methods:[],displayName:"TimelineDot",props:{color:{required:!1,tsType:{name:"union",raw:"'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"The color of the component",defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:`The variant to use
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}}},composes:["MuiTimelineDotProps"]};p.__docgenInfo={description:`TimelineConnector component

The line connecting timeline dots.

@param props - TimelineConnector component props
@returns TimelineConnector component`,methods:[],displayName:"TimelineConnector",composes:["MuiTimelineConnectorProps"]};s.__docgenInfo={description:`TimelineContent component

The main content area of a timeline item.

@param props - TimelineContent component props
@returns TimelineContent component`,methods:[],displayName:"TimelineContent",composes:["MuiTimelineContentProps"]};x.__docgenInfo={description:`TimelineOppositeContent component

Optional content displayed opposite to the main timeline content.

@param props - TimelineOppositeContent component props
@returns TimelineOppositeContent component`,methods:[],displayName:"TimelineOppositeContent",composes:["MuiTimelineOppositeContentProps"]};const Ue={title:"Components/Molecules/Timeline",component:j,tags:["autodocs"],argTypes:{position:{control:"select",options:["left","right","alternate","alternate-reverse"],description:"Position of the timeline content"}},parameters:{docs:{description:{component:"The Timeline component displays a list of events in chronological order. It can be positioned left, right, or alternating, and supports custom icons and content."}}}},w={args:{position:"left"},render:()=>e.jsxs(j,{position:"left",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Eat"}),e.jsx(o,{children:"Because you need strength"})]})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Code"}),e.jsx(o,{children:"Because it's awesome!"})]})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{color:"primary"})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Sleep"}),e.jsx(o,{children:"Because you need rest"})]})]})]})},P={render:()=>e.jsxs(j,{position:"right",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Morning Meeting"}),e.jsx(o,{children:"Team standup and planning"})]})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Development"}),e.jsx(o,{children:"Feature implementation"})]})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{color:"primary"})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Code Review"}),e.jsx(o,{children:"Review pull requests"})]})]})]})},b={render:()=>e.jsxs(j,{position:"alternate",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Project Started"}),e.jsx(o,{children:"Initial planning and setup"})]})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"secondary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Design Phase"}),e.jsx(o,{children:"UI/UX design and prototyping"})]})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"success"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Development"}),e.jsx(o,{children:"Feature implementation"})]})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{color:"warning"})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Launch"}),e.jsx(o,{children:"Product deployment"})]})]})]})},N={render:()=>e.jsxs(j,{position:"alternate",children:[e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"9:00 AM"}),e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Breakfast"}),e.jsx(o,{children:"Start the day right"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"10:00 AM"}),e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Morning Meeting"}),e.jsx(o,{children:"Team standup"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"12:00 PM"}),e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Lunch"}),e.jsx(o,{children:"Break time"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"5:00 PM"}),e.jsx(r,{children:e.jsx(t,{color:"primary"})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"End of Day"}),e.jsx(o,{children:"Wrap up and plan tomorrow"})]})]})]})},_={render:()=>e.jsxs(j,{position:"left",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{variant:"filled",color:"primary"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Primary filled dot"})})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{variant:"filled",color:"secondary"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Secondary filled dot"})})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{variant:"filled",color:"success"})}),e.jsx(s,{children:e.jsx(o,{children:"Success filled dot"})})]})]})},A={render:()=>e.jsxs(j,{position:"left",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{variant:"outlined",color:"primary"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Primary outlined dot"})})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{variant:"outlined",color:"secondary"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Secondary outlined dot"})})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{variant:"outlined",color:"success"})}),e.jsx(s,{children:e.jsx(o,{children:"Success outlined dot"})})]})]})},k={render:()=>e.jsxs(j,{position:"left",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Primary color"})})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"secondary"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Secondary color"})})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"error"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Error color"})})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"warning"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Warning color"})})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"info"}),e.jsx(p,{})]}),e.jsx(s,{children:e.jsx(o,{children:"Info color"})})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{color:"success"})}),e.jsx(s,{children:e.jsx(o,{children:"Success color"})})]})]})},U={render:()=>e.jsxs(j,{position:"alternate",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary",children:e.jsx(h,{icon:"rocket_launch"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Launch"}),e.jsx(o,{children:"Project kickoff"})]})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"secondary",children:e.jsx(h,{icon:"design_services"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Design"}),e.jsx(o,{children:"UI/UX creation"})]})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"success",children:e.jsx(h,{icon:"code"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Development"}),e.jsx(o,{children:"Build features"})]})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{color:"warning",children:e.jsx(h,{icon:"verified"})})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Release"}),e.jsx(o,{children:"Go live"})]})]})]})},B={render:()=>e.jsxs(j,{position:"alternate",children:[e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Step 1"}),e.jsxs(r,{children:[e.jsx(t,{color:"primary",children:e.jsx(h,{icon:"person_add"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Sign Up"}),e.jsx(o,{children:"Create your account"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Step 2"}),e.jsxs(r,{children:[e.jsx(t,{color:"primary",children:e.jsx(h,{icon:"mail"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Email Verification"}),e.jsx(o,{children:"Verify your email address"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Step 3"}),e.jsxs(r,{children:[e.jsx(t,{color:"primary",children:e.jsx(h,{icon:"settings"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Setup Profile"}),e.jsx(o,{children:"Customize your profile"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Step 4"}),e.jsx(r,{children:e.jsx(t,{color:"success",children:e.jsx(h,{icon:"check_circle"})})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Complete"}),e.jsx(o,{children:"You're all set!"})]})]})]})},$={args:{position:"left"},render:()=>e.jsx(V,{sx:{maxWidth:600},children:e.jsxs(j,{position:"alternate",children:[e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Jan 15, 2024 10:30 AM"}),e.jsxs(r,{children:[e.jsx(t,{color:"success",children:e.jsx(h,{icon:"shopping_cart"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Order Placed"}),e.jsx(o,{children:"Your order has been confirmed"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Jan 15, 2024 2:00 PM"}),e.jsxs(r,{children:[e.jsx(t,{color:"success",children:e.jsx(h,{icon:"inventory_2"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Processing"}),e.jsx(o,{children:"Order is being prepared"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Jan 16, 2024 9:00 AM"}),e.jsxs(r,{children:[e.jsx(t,{color:"primary",children:e.jsx(h,{icon:"local_shipping"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",children:"Shipped"}),e.jsx(o,{children:"Order is on the way"})]})]}),e.jsxs(l,{children:[e.jsx(x,{color:"text.secondary",children:"Expected: Jan 18, 2024"}),e.jsx(r,{children:e.jsx(t,{color:"grey",variant:"outlined",children:e.jsx(h,{icon:"home"})})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",color:"text.secondary",children:"Delivery"}),e.jsx(o,{color:"text.secondary",children:"Pending delivery"})]})]})]})})},E={render:()=>e.jsx(V,{sx:{maxWidth:600},children:e.jsxs(j,{position:"left",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"success",children:e.jsx(h,{icon:"check"})}),e.jsx(p,{sx:{bgcolor:"success.main"}})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",color:"success.main",children:"Completed"}),e.jsx(o,{children:"Task 1 finished successfully"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"2 hours ago"})]})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{color:"primary",children:e.jsx(h,{icon:"pending"})}),e.jsx(p,{})]}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",color:"primary.main",children:"In Progress"}),e.jsx(o,{children:"Task 2 currently running"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Started 30 minutes ago"})]})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{color:"grey",variant:"outlined",children:e.jsx(h,{icon:"schedule"})})}),e.jsxs(s,{children:[e.jsx(o,{variant:"h6",component:"span",color:"text.secondary",children:"Pending"}),e.jsx(o,{color:"text.secondary",children:"Task 3 waiting to start"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Not started"})]})]})]})})},W={render:()=>e.jsxs(j,{position:"left",children:[e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{}),e.jsx(p,{})]}),e.jsx(s,{children:"First item"})]}),e.jsxs(l,{children:[e.jsxs(r,{children:[e.jsx(t,{}),e.jsx(p,{})]}),e.jsx(s,{children:"Second item"})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(t,{})}),e.jsx(s,{children:"Third item"})]})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left'
  },
  render: () => <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it's awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...w.parameters?.docs?.source},description:{story:"Default Timeline (left position)",...w.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Morning Meeting
          </Typography>
          <Typography>Team standup and planning</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>Feature implementation</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Code Review
          </Typography>
          <Typography>Review pull requests</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...P.parameters?.docs?.source},description:{story:"Right-aligned timeline",...P.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Project Started
          </Typography>
          <Typography>Initial planning and setup</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Design Phase
          </Typography>
          <Typography>UI/UX design and prototyping</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>Feature implementation</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Launch
          </Typography>
          <Typography>Product deployment</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...b.parameters?.docs?.source},description:{story:"Alternating timeline",...b.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">9:00 AM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Breakfast
          </Typography>
          <Typography>Start the day right</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">10:00 AM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Morning Meeting
          </Typography>
          <Typography>Team standup</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">12:00 PM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Lunch
          </Typography>
          <Typography>Break time</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">5:00 PM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            End of Day
          </Typography>
          <Typography>Wrap up and plan tomorrow</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...N.parameters?.docs?.source},description:{story:"Timeline with opposite content (times)",...N.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="filled" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Primary filled dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="filled" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Secondary filled dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="filled" color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Success filled dot</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,..._.parameters?.docs?.source},description:{story:"Filled dots (default)",..._.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Primary outlined dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Secondary outlined dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Success outlined dot</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...A.parameters?.docs?.source},description:{story:"Outlined dots",...A.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Primary color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Secondary color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Error color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Warning color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Info color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Success color</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...k.parameters?.docs?.source},description:{story:"Colored dots (all color variants)",...k.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="rocket_launch" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Launch
          </Typography>
          <Typography>Project kickoff</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <MaterialSymbol icon="design_services" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Design
          </Typography>
          <Typography>UI/UX creation</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success">
            <MaterialSymbol icon="code" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>Build features</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <MaterialSymbol icon="verified" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Release
          </Typography>
          <Typography>Go live</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...U.parameters?.docs?.source},description:{story:"Custom icons in dots",...U.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 1</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="person_add" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Sign Up
          </Typography>
          <Typography>Create your account</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 2</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="mail" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Email Verification
          </Typography>
          <Typography>Verify your email address</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 3</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="settings" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Setup Profile
          </Typography>
          <Typography>Customize your profile</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 4</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <MaterialSymbol icon="check_circle" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Complete
          </Typography>
          <Typography>You're all set!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...B.parameters?.docs?.source},description:{story:"Process timeline workflow",...B.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'left'
  },
  render: () => <Box sx={{
    maxWidth: 600
  }}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 15, 2024 10:30 AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <MaterialSymbol icon="shopping_cart" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Order Placed
            </Typography>
            <Typography>Your order has been confirmed</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 15, 2024 2:00 PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <MaterialSymbol icon="inventory_2" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Processing
            </Typography>
            <Typography>Order is being prepared</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 16, 2024 9:00 AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MaterialSymbol icon="local_shipping" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Shipped
            </Typography>
            <Typography>Order is on the way</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Expected: Jan 18, 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="grey" variant="outlined">
              <MaterialSymbol icon="home" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="text.secondary">
              Delivery
            </Typography>
            <Typography color="text.secondary">Pending delivery</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
}`,...$.parameters?.docs?.source},description:{story:"Order tracking timeline",...$.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    maxWidth: 600
  }}>
      <Timeline position="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success">
              <MaterialSymbol icon="check" />
            </TimelineDot>
            <TimelineConnector sx={{
            bgcolor: 'success.main'
          }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="success.main">
              Completed
            </Typography>
            <Typography>Task 1 finished successfully</Typography>
            <Typography variant="caption" color="text.secondary">
              2 hours ago
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MaterialSymbol icon="pending" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="primary.main">
              In Progress
            </Typography>
            <Typography>Task 2 currently running</Typography>
            <Typography variant="caption" color="text.secondary">
              Started 30 minutes ago
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" variant="outlined">
              <MaterialSymbol icon="schedule" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="text.secondary">
              Pending
            </Typography>
            <Typography color="text.secondary">Task 3 waiting to start</Typography>
            <Typography variant="caption" color="text.secondary">
              Not started
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
}`,...E.parameters?.docs?.source},description:{story:"Interactive timeline with status",...E.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>First item</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Second item</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Third item</TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...W.parameters?.docs?.source},description:{story:"Minimal timeline",...W.parameters?.docs?.description}}};const Be=["Default","RightAligned","Alternating","WithOppositeContent","FilledDots","OutlinedDots","ColoredDots","CustomIcons","ProcessTimeline","OrderTracking","InteractiveTimeline","Minimal"];export{b as Alternating,k as ColoredDots,U as CustomIcons,w as Default,_ as FilledDots,E as InteractiveTimeline,W as Minimal,$ as OrderTracking,A as OutlinedDots,B as ProcessTimeline,P as RightAligned,N as WithOppositeContent,Be as __namedExportsOrder,Ue as default};
