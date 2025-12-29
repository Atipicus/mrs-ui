import{r as c,u as ge,d as Te,m as ye,j as t,c as $t,i as Nt,R as Ft}from"./iframe-EaO-VOYi.js";import{D as dt}from"./Delete-BgELZToE.js";import{A as mt}from"./Add-_Xvim15r.js";import{a as Be,g as je,c as kt,s as et,b as be,m as ut}from"./createSimplePaletteValueFilter-oJ_Eo6YR.js";import{u as we}from"./useTheme-Cl2A6w3p.js";import{u as J}from"./useSlot-DVa4qzjr.js";import{u as Q,T as ve}from"./ButtonBase-B23rqg2z.js";import{u as Se}from"./useControlled-DHeNpKsL.js";import{u as Et}from"./useEventCallback-BI0QvM1y.js";import{u as Re}from"./useForkRef-C0Tkubmw.js";import{g as Me,G as Ce}from"./Grow-Te6X-fkz.js";import{P as Ht}from"./Popper-DMkcN0yv.js";import{i as Ot}from"./isFocusVisible-B8k4qzLc.js";import{B as i}from"./Button-D-moQckf.js";import{I as b}from"./IconButton-DDebThDE.js";import{B as s}from"./Box-BbO0uUMs.js";import{S as d}from"./Stack-D3Lu-Yor.js";import{T as p}from"./Typography-CXZsQ2aA.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-DAfLRhUw.js";import"./resolveComponentProps-DGjEG4aL.js";import"./index-DL8RxzfY.js";import"./index-KKX1dlBr.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CP2PRXl7.js";import"./useSlotProps-CYMQeb8e.js";import"./Button-BCLU8qxn.js";import"./CircularProgress-BzNe0p_d.js";import"./IconButton-0VTam0NK.js";import"./useThemeProps-ae3Yobn0.js";function Pe(o){return je("MuiTooltip",o)}const l=Be("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function Ie(o){return Math.round(o*1e5)/1e5}const De=o=>{const{classes:e,disableInteractive:a,arrow:u,touch:y,placement:w}=o,ht={popper:["popper",!a&&"popperInteractive",u&&"popperArrow"],tooltip:["tooltip",u&&"tooltipArrow",y&&"touch",`tooltipPlacement${$t(w.split("-")[0])}`],arrow:["arrow"]};return be(ht,Pe,e)},Le=et(Ht,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.popper,!a.disableInteractive&&e.popperInteractive,a.arrow&&e.popperArrow,!a.open&&e.popperClose]}})(ut(({theme:o})=>({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${l.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${l.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${l.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${l.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${l.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${l.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${l.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${l.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),Ae=et("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.tooltip,a.touch&&e.touch,a.arrow&&e.tooltipArrow,e[`tooltipPlacement${$t(a.placement.split("-")[0])}`]]}})(ut(({theme:o})=>({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:Nt(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium,[`.${l.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${l.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${l.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${l.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${Ie(16/14)}em`,fontWeight:o.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${l.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${l.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),ke=et("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,e)=>e.arrow})(ut(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:Nt(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Z=!1;const Wt=new ve;let P={x:0,y:0};function tt(o,e){return(a,...u)=>{e&&e(a,...u),o(a,...u)}}const Ee=c.forwardRef(function(e,a){const u=ge({props:e,name:"MuiTooltip"}),{arrow:y=!1,children:w,classes:ht,components:z={},componentsProps:V={},describeChild:zt=!1,disableFocusListener:Vt=!1,disableHoverListener:xt=!1,disableInteractive:qt=!1,disableTouchListener:_t=!1,enterDelay:ft=100,enterNextDelay:gt=0,enterTouchDelay:Gt=700,followCursor:ot=!1,id:Kt,leaveDelay:Tt=0,leaveTouchDelay:Xt=1500,onClose:yt,onOpen:Bt,open:Yt,placement:jt="bottom",PopperComponent:bt,PopperProps:B={},slotProps:x={},slots:Jt={},title:j,TransitionComponent:Qt,TransitionProps:Zt,...wt}=u,f=c.isValidElement(w)?w:t.jsx("span",{children:w}),vt=we(),te=Te(),[v,St]=c.useState(),[rt,ee]=c.useState(null),q=c.useRef(!1),nt=qt||ot,Rt=Q(),it=Q(),_=Q(),Mt=Q(),[oe,Ct]=Se({controlled:Yt,default:!1,name:"Tooltip",state:"open"});let h=oe;const st=ye(Kt),S=c.useRef(),G=Et(()=>{S.current!==void 0&&(document.body.style.WebkitUserSelect=S.current,S.current=void 0),Mt.clear()});c.useEffect(()=>G,[G]);const Pt=n=>{Wt.clear(),Z=!0,Ct(!0),Bt&&!h&&Bt(n)},K=Et(n=>{Wt.start(800+Tt,()=>{Z=!1}),Ct(!1),yt&&h&&yt(n),Rt.start(vt.transitions.duration.shortest,()=>{q.current=!1})}),X=n=>{q.current&&n.type!=="touchstart"||(v&&v.removeAttribute("title"),it.clear(),_.clear(),ft||Z&&gt?it.start(Z?gt:ft,()=>{Pt(n)}):Pt(n))},lt=n=>{it.clear(),_.start(Tt,()=>{K(n)})},[,It]=c.useState(!1),Dt=n=>{Ot(n.target)||(It(!1),lt(n))},Lt=n=>{v||St(n.currentTarget),Ot(n.target)&&(It(!0),X(n))},At=n=>{q.current=!0;const g=f.props;g.onTouchStart&&g.onTouchStart(n)},re=n=>{At(n),_.clear(),Rt.clear(),G(),S.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Mt.start(Gt,()=>{document.body.style.WebkitUserSelect=S.current,X(n)})},ne=n=>{f.props.onTouchEnd&&f.props.onTouchEnd(n),G(),_.start(Xt,()=>{K(n)})};c.useEffect(()=>{if(!h)return;function n(g){g.key==="Escape"&&K(g)}return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[K,h]);const ie=Re(Me(f),St,a);!j&&j!==0&&(h=!1);const at=c.useRef(),se=n=>{const g=f.props;g.onMouseMove&&g.onMouseMove(n),P={x:n.clientX,y:n.clientY},at.current&&at.current.update()},R={},pt=typeof j=="string";zt?(R.title=!h&&pt&&!xt?j:null,R["aria-describedby"]=h?st:null):(R["aria-label"]=pt?j:null,R["aria-labelledby"]=h&&!pt?st:null);const m={...R,...wt,...f.props,className:kt(wt.className,f.props.className),onTouchStart:At,ref:ie,...ot?{onMouseMove:se}:{}},M={};_t||(m.onTouchStart=re,m.onTouchEnd=ne),xt||(m.onMouseOver=tt(X,m.onMouseOver),m.onMouseLeave=tt(lt,m.onMouseLeave),nt||(M.onMouseOver=X,M.onMouseLeave=lt)),Vt||(m.onFocus=tt(Lt,m.onFocus),m.onBlur=tt(Dt,m.onBlur),nt||(M.onFocus=Lt,M.onBlur=Dt));const T={...u,isRtl:te,arrow:y,disableInteractive:nt,placement:jt,PopperComponentProp:bt,touch:q.current},C=typeof x.popper=="function"?x.popper(T):x.popper,le=c.useMemo(()=>{let n=[{name:"arrow",enabled:!!rt,options:{element:rt,padding:4}}];return B.popperOptions?.modifiers&&(n=n.concat(B.popperOptions.modifiers)),C?.popperOptions?.modifiers&&(n=n.concat(C.popperOptions.modifiers)),{...B.popperOptions,...C?.popperOptions,modifiers:n}},[rt,B.popperOptions,C?.popperOptions]),ct=De(T),ae=typeof x.transition=="function"?x.transition(T):x.transition,Y={slots:{popper:z.Popper,transition:z.Transition??Qt,tooltip:z.Tooltip,arrow:z.Arrow,...Jt},slotProps:{arrow:x.arrow??V.arrow,popper:{...B,...C??V.popper},tooltip:x.tooltip??V.tooltip,transition:{...Zt,...ae??V.transition}}},[pe,ce]=J("popper",{elementType:Le,externalForwardedProps:Y,ownerState:T,className:kt(ct.popper,B?.className)}),[de,me]=J("transition",{elementType:Ce,externalForwardedProps:Y,ownerState:T}),[ue,he]=J("tooltip",{elementType:Ae,className:ct.tooltip,externalForwardedProps:Y,ownerState:T}),[xe,fe]=J("arrow",{elementType:ke,className:ct.arrow,externalForwardedProps:Y,ownerState:T,ref:ee});return t.jsxs(c.Fragment,{children:[c.cloneElement(f,m),t.jsx(pe,{as:bt??Ht,placement:jt,anchorEl:ot?{getBoundingClientRect:()=>({top:P.y,left:P.x,right:P.x,bottom:P.y,width:0,height:0})}:v,popperRef:at,open:v?h:!1,id:st,transition:!0,...M,...ce,popperOptions:le,children:({TransitionProps:n})=>t.jsx(de,{timeout:vt.transitions.duration.shorter,...n,...me,children:t.jsxs(ue,{...he,children:[j,y?t.jsx(xe,{...fe}):null]})})})]})}),Ut=et(Ft.forwardRef(({className:o,...e},a)=>t.jsx(Ee,{ref:a,...e,classes:{popper:o}})))(({theme:o})=>({"& .MuiTooltip-tooltip":{backgroundColor:"rgba(97, 97, 97, 0.9)",color:o.palette.common.white,fontSize:"0.625rem",fontWeight:o.typography.fontWeightMedium,lineHeight:"14px",padding:"4px 8px",borderRadius:o.shape.sm,fontFamily:o.typography.fontFamily},"& .MuiTooltip-arrow":{color:"rgba(97, 97, 97, 0.9)"}}));Ut.displayName="StyledTooltip";const r=Ft.forwardRef(({children:o,arrow:e=!0,placement:a="bottom",...u},y)=>t.jsx(Ut,{ref:y,arrow:e,placement:a,...u,children:o}));r.displayName="Tooltip";r.__docgenInfo={description:`Tooltip component

Tooltips display informative text when users hover over, focus on, or tap an element.

@param props - Tooltip component props
@returns Tooltip component`,methods:[],displayName:"Tooltip",props:{title:{required:!0,tsType:{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},description:`Tooltip title/content
Required when the component is not used as a simple wrapper`},placement:{required:!1,tsType:{name:"union",raw:`| 'bottom-end'
| 'bottom-start'
| 'bottom'
| 'left-end'
| 'left-start'
| 'left'
| 'right-end'
| 'right-start'
| 'right'
| 'top-end'
| 'top-start'
| 'top'`,elements:[{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top'"}]},description:`The placement of the tooltip
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},arrow:{required:!1,tsType:{name:"boolean"},description:`If true, adds an arrow to the tooltip
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["MuiTooltipProps"]};const uo={title:"Atoms/Tooltip",component:r,tags:["autodocs"],argTypes:{title:{control:"text",description:"Tooltip content"},placement:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],description:"Tooltip placement relative to the child element"},arrow:{control:"boolean",description:"If true, adds an arrow to the tooltip"},enterDelay:{control:"number",description:"The number of milliseconds to wait before showing the tooltip"},leaveDelay:{control:"number",description:"The number of milliseconds to wait before hiding the tooltip"},disableHoverListener:{control:"boolean",description:"If true, do not respond to hover events"},disableFocusListener:{control:"boolean",description:"If true, do not respond to focus events"},disableTouchListener:{control:"boolean",description:"If true, do not respond to touch events"},open:{control:"boolean",description:"If true, the tooltip is shown (controlled mode)"}},args:{title:"My Tooltip",arrow:!0,placement:"bottom"}},I={args:{title:"My Tooltip"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Hover me"})})})},D={args:{title:"My Tooltip",arrow:!1},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Hover me"})})})},L={args:{title:"My Tooltip",placement:"top"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Top"})})})},A={args:{title:"My Tooltip",placement:"bottom"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Bottom"})})})},k={args:{title:"My Tooltip",placement:"left"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Left"})})})},E={args:{title:"My Tooltip",placement:"right"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Right"})})})},O={render:()=>t.jsx(s,{sx:{p:8},children:t.jsxs(d,{spacing:4,children:[t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Top Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Top Start",placement:"top-start",children:t.jsx(i,{children:"Top Start"})}),t.jsx(r,{title:"Top",placement:"top",children:t.jsx(i,{children:"Top"})}),t.jsx(r,{title:"Top End",placement:"top-end",children:t.jsx(i,{children:"Top End"})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Bottom Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Bottom Start",placement:"bottom-start",children:t.jsx(i,{children:"Bottom Start"})}),t.jsx(r,{title:"Bottom",placement:"bottom",children:t.jsx(i,{children:"Bottom"})}),t.jsx(r,{title:"Bottom End",placement:"bottom-end",children:t.jsx(i,{children:"Bottom End"})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Left Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Left Start",placement:"left-start",children:t.jsx(i,{children:"Left Start"})}),t.jsx(r,{title:"Left",placement:"left",children:t.jsx(i,{children:"Left"})}),t.jsx(r,{title:"Left End",placement:"left-end",children:t.jsx(i,{children:"Left End"})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Right Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Right Start",placement:"right-start",children:t.jsx(i,{children:"Right Start"})}),t.jsx(r,{title:"Right",placement:"right",children:t.jsx(i,{children:"Right"})}),t.jsx(r,{title:"Right End",placement:"right-end",children:t.jsx(i,{children:"Right End"})})]})]})]})}),parameters:{layout:"fullscreen"}},W={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsxs(d,{direction:"row",spacing:2,children:[t.jsx(r,{title:"Delete",children:t.jsx(b,{"aria-label":"delete",children:t.jsx(dt,{})})}),t.jsx(r,{title:"Add",children:t.jsx(b,{"aria-label":"add",children:t.jsx(mt,{})})})]})})},$={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsxs(d,{direction:"row",spacing:2,children:[t.jsx(r,{title:"Default delay",children:t.jsx(i,{children:"Default"})}),t.jsx(r,{title:"500ms enter delay",enterDelay:500,children:t.jsx(i,{children:"Enter Delay 500ms"})}),t.jsx(r,{title:"500ms leave delay",leaveDelay:500,children:t.jsx(i,{children:"Leave Delay 500ms"})})]})})},N={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{title:t.jsxs(s,{children:[t.jsx(p,{variant:"subtitle2",sx:{color:"inherit"},children:"Complex Tooltip"}),t.jsx(p,{variant:"body2",sx:{color:"inherit",mt:.5},children:"This tooltip contains multiple lines of text and can include rich content."})]}),children:t.jsx(i,{children:"Hover for complex tooltip"})})})},F={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{title:"This tooltip is always visible",open:!0,children:t.jsx(i,{children:"Always showing tooltip"})})})},H={render:()=>t.jsx(s,{sx:{p:4},children:t.jsxs(d,{spacing:4,children:[t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Action Buttons with Tooltips"}),t.jsxs(d,{direction:"row",spacing:1,children:[t.jsx(r,{title:"Save changes",children:t.jsx(b,{"aria-label":"save",children:t.jsx(mt,{})})}),t.jsx(r,{title:"Delete item",children:t.jsx(b,{"aria-label":"delete",color:"error",children:t.jsx(dt,{})})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Help Text"}),t.jsx(r,{title:"Click to learn more about this feature",children:t.jsx(i,{variant:"outlined",children:"What's this?"})})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Disabled Button with Tooltip"}),t.jsx(r,{title:"This feature is coming soon",children:t.jsx("span",{children:t.jsx(i,{disabled:!0,children:"Coming Soon"})})})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Long Text Truncation"}),t.jsx(r,{title:"This is a very long text that would be truncated in the UI but fully visible in the tooltip",children:t.jsx(p,{sx:{maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"This is a very long text that would be truncated..."})})]})]})}),parameters:{layout:"fullscreen"}},U={render:()=>t.jsx(s,{sx:{p:4},children:t.jsxs(d,{spacing:4,children:[t.jsxs(s,{children:[t.jsx(p,{variant:"h4",gutterBottom:!0,children:"Tooltip Placements"}),t.jsxs(s,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:4,mt:4},children:[t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Top",placement:"top",children:t.jsx(i,{children:"Top"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Bottom",placement:"bottom",children:t.jsx(i,{children:"Bottom"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Left",placement:"left",children:t.jsx(i,{children:"Left"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Right",placement:"right",children:t.jsx(i,{children:"Right"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"No Arrow",arrow:!1,children:t.jsx(i,{children:"No Arrow"})})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h4",gutterBottom:!0,children:"With Icon Buttons"}),t.jsxs(d,{direction:"row",spacing:2,sx:{mt:2},children:[t.jsx(r,{title:"Add item",children:t.jsx(b,{"aria-label":"add",children:t.jsx(mt,{})})}),t.jsx(r,{title:"Delete item",children:t.jsx(b,{"aria-label":"delete",color:"error",children:t.jsx(dt,{})})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h4",gutterBottom:!0,children:"Custom Delays"}),t.jsxs(d,{direction:"row",spacing:2,sx:{mt:2},children:[t.jsx(r,{title:"Instant",children:t.jsx(i,{children:"Instant"})}),t.jsx(r,{title:"Delayed (500ms)",enterDelay:500,children:t.jsx(i,{children:"Delayed"})})]})]})]})}),parameters:{layout:"fullscreen"}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
}`,...I.parameters?.docs?.source},description:{story:"Default tooltip with arrow",...I.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    arrow: false
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
}`,...D.parameters?.docs?.source},description:{story:"Tooltip without arrow",...D.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'top'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Top</Button>
      </Tooltip>
    </Box>
}`,...L.parameters?.docs?.source},description:{story:"Tooltip positioned at the top",...L.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'bottom'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Bottom</Button>
      </Tooltip>
    </Box>
}`,...A.parameters?.docs?.source},description:{story:"Tooltip positioned at the bottom",...A.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'left'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Left</Button>
      </Tooltip>
    </Box>
}`,...k.parameters?.docs?.source},description:{story:"Tooltip positioned on the left",...k.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'right'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Right</Button>
      </Tooltip>
    </Box>
}`,...E.parameters?.docs?.source},description:{story:"Tooltip positioned on the right",...E.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 8
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Top Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Top Start" placement="top-start">
              <Button>Top Start</Button>
            </Tooltip>
            <Tooltip title="Top" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip title="Top End" placement="top-end">
              <Button>Top End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Bottom Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Bottom Start" placement="bottom-start">
              <Button>Bottom Start</Button>
            </Tooltip>
            <Tooltip title="Bottom" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip title="Bottom End" placement="bottom-end">
              <Button>Bottom End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Left Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Left Start" placement="left-start">
              <Button>Left Start</Button>
            </Tooltip>
            <Tooltip title="Left" placement="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip title="Left End" placement="left-end">
              <Button>Left End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Right Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Right Start" placement="right-start">
              <Button>Right Start</Button>
            </Tooltip>
            <Tooltip title="Right" placement="right">
              <Button>Right</Button>
            </Tooltip>
            <Tooltip title="Right End" placement="right-end">
              <Button>Right End</Button>
            </Tooltip>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...O.parameters?.docs?.source},description:{story:"All placement options",...O.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add">
          <IconButton aria-label="add">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
}`,...W.parameters?.docs?.source},description:{story:"Tooltip with icon button",...W.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Default delay">
          <Button>Default</Button>
        </Tooltip>
        <Tooltip title="500ms enter delay" enterDelay={500}>
          <Button>Enter Delay 500ms</Button>
        </Tooltip>
        <Tooltip title="500ms leave delay" leaveDelay={500}>
          <Button>Leave Delay 500ms</Button>
        </Tooltip>
      </Stack>
    </Box>
}`,...$.parameters?.docs?.source},description:{story:"Tooltip with custom delay",...$.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip title={<Box>
            <MuiTypography variant="subtitle2" sx={{
        color: 'inherit'
      }}>
              Complex Tooltip
            </MuiTypography>
            <MuiTypography variant="body2" sx={{
        color: 'inherit',
        mt: 0.5
      }}>
              This tooltip contains multiple lines of text and can include rich content.
            </MuiTypography>
          </Box>}>
        <Button>Hover for complex tooltip</Button>
      </Tooltip>
    </Box>
}`,...N.parameters?.docs?.source},description:{story:"Tooltip with complex content",...N.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip title="This tooltip is always visible" open={true}>
        <Button>Always showing tooltip</Button>
      </Tooltip>
    </Box>
}`,...F.parameters?.docs?.source},description:{story:"Controlled tooltip (always open)",...F.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Action Buttons with Tooltips
          </MuiTypography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Save changes">
              <IconButton aria-label="save">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Help Text
          </MuiTypography>
          <Tooltip title="Click to learn more about this feature">
            <Button variant="outlined">What's this?</Button>
          </Tooltip>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Disabled Button with Tooltip
          </MuiTypography>
          <Tooltip title="This feature is coming soon">
            {/* Wrap disabled button in span to make tooltip work */}
            <span>
              <Button disabled>Coming Soon</Button>
            </span>
          </Tooltip>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Long Text Truncation
          </MuiTypography>
          <Tooltip title="This is a very long text that would be truncated in the UI but fully visible in the tooltip">
            <MuiTypography sx={{
            maxWidth: 200,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
              This is a very long text that would be truncated...
            </MuiTypography>
          </Tooltip>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...H.parameters?.docs?.source},description:{story:"Real-world examples",...H.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Tooltip Placements
          </MuiTypography>
          <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,
          mt: 4
        }}>
            <Box textAlign="center">
              <Tooltip title="Top" placement="top">
                <Button>Top</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Bottom" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Left" placement="left">
                <Button>Left</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Right" placement="right">
                <Button>Right</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="No Arrow" arrow={false}>
                <Button>No Arrow</Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box>
          <MuiTypography variant="h4" gutterBottom>
            With Icon Buttons
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{
          mt: 2
        }}>
            <Tooltip title="Add item">
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Custom Delays
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{
          mt: 2
        }}>
            <Tooltip title="Instant">
              <Button>Instant</Button>
            </Tooltip>
            <Tooltip title="Delayed (500ms)" enterDelay={500}>
              <Button>Delayed</Button>
            </Tooltip>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...U.parameters?.docs?.source},description:{story:"Full showcase",...U.parameters?.docs?.description}}};const ho=["Default","WithoutArrow","PlacementTop","PlacementBottom","PlacementLeft","PlacementRight","AllPlacements","WithIconButton","WithDelay","ComplexContent","Controlled","RealWorldExamples","FullShowcase"];export{O as AllPlacements,N as ComplexContent,F as Controlled,I as Default,U as FullShowcase,A as PlacementBottom,k as PlacementLeft,E as PlacementRight,L as PlacementTop,H as RealWorldExamples,$ as WithDelay,W as WithIconButton,D as WithoutArrow,ho as __namedExportsOrder,uo as default};
