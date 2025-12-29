import{r as c,u as fe,d as ge,m as ye,j as t,c as Wt,i as $t,R as Nt}from"./iframe-CaJfxxeA.js";import{b as Te,g as Be,c as Dt,s as ot,a as je,m as mt}from"./createSimplePaletteValueFilter-B7jR09Rm.js";import{u as be}from"./useTheme-BY3Nwc-v.js";import{u as Q}from"./useSlot-B_nPvQQX.js";import{u as Z,T as we}from"./ButtonBase-BHnwxTjD.js";import{u as ve}from"./useControlled-BnJqTCz_.js";import{u as Et}from"./useEventCallback-BYdCS-Tq.js";import{u as Se}from"./useForkRef-C3chRDOJ.js";import{g as Me}from"./getReactElementRef-PJPOUa7x.js";import{G as Re}from"./Grow-C7uWJ0U6.js";import{P as Ft}from"./Popper-DqymNOhb.js";import{i as At}from"./isFocusVisible-B8k4qzLc.js";import{B as i}from"./Button-DD50qzgq.js";import{I as b}from"./IconButton-CNXkwKT4.js";import{M as w}from"./MaterialSymbol-D8ChqBBP.js";import{B as s}from"./Box-DRdjk_r0.js";import{S as d}from"./Stack-n7thE6k7.js";import{T as p}from"./Typography-DVqwCqe_.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-DD7apTsv.js";import"./utils-BCO3XpyG.js";import"./index-BkrHF929.js";import"./index-BGvov6K-.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DWu0DfK1.js";import"./useSlotProps-vXmSk_Q5.js";import"./Button-BJKs2Jb4.js";import"./CircularProgress-B70wwna8.js";import"./IconButton-CdFiAkt1.js";import"./useThemeProps-DtNhxYaA.js";function Ce(o){return Be("MuiTooltip",o)}const l=Te("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function Pe(o){return Math.round(o*1e5)/1e5}const Ie=o=>{const{classes:e,disableInteractive:a,arrow:u,touch:T,placement:v}=o,ut={popper:["popper",!a&&"popperInteractive",u&&"popperArrow"],tooltip:["tooltip",u&&"tooltipArrow",T&&"touch",`tooltipPlacement${Wt(v.split("-")[0])}`],arrow:["arrow"]};return je(ut,Ce,e)},Le=ot(Ft,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.popper,!a.disableInteractive&&e.popperInteractive,a.arrow&&e.popperArrow,!a.open&&e.popperClose]}})(mt(({theme:o})=>({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${l.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${l.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${l.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${l.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${l.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${l.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${l.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${l.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),ke=ot("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.tooltip,a.touch&&e.touch,a.arrow&&e.tooltipArrow,e[`tooltipPlacement${Wt(a.placement.split("-")[0])}`]]}})(mt(({theme:o})=>({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:$t(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium,[`.${l.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${l.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${l.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${l.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${Pe(16/14)}em`,fontWeight:o.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${l.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${l.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${l.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${l.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),De=ot("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,e)=>e.arrow})(mt(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:$t(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let tt=!1;const Ot=new we;let I={x:0,y:0};function et(o,e){return(a,...u)=>{e&&e(a,...u),o(a,...u)}}const Ee=c.forwardRef(function(e,a){const u=fe({props:e,name:"MuiTooltip"}),{arrow:T=!1,children:v,classes:ut,components:V={},componentsProps:q={},describeChild:Ut=!1,disableFocusListener:zt=!1,disableHoverListener:ht=!1,disableInteractive:Vt=!1,disableTouchListener:qt=!1,enterDelay:xt=100,enterNextDelay:ft=0,enterTouchDelay:_t=700,followCursor:rt=!1,id:Gt,leaveDelay:gt=0,leaveTouchDelay:Kt=1500,onClose:yt,onOpen:Tt,open:Xt,placement:Bt="bottom",PopperComponent:jt,PopperProps:B={},slotProps:x={},slots:Yt={},title:j,TransitionComponent:Jt,TransitionProps:Qt,...bt}=u,f=c.isValidElement(v)?v:t.jsx("span",{children:v}),wt=be(),Zt=ge(),[S,vt]=c.useState(),[nt,te]=c.useState(null),_=c.useRef(!1),it=Vt||rt,St=Z(),st=Z(),G=Z(),Mt=Z(),[ee,Rt]=ve({controlled:Xt,default:!1,name:"Tooltip",state:"open"});let h=ee;const lt=ye(Gt),M=c.useRef(),K=Et(()=>{M.current!==void 0&&(document.body.style.WebkitUserSelect=M.current,M.current=void 0),Mt.clear()});c.useEffect(()=>K,[K]);const Ct=n=>{Ot.clear(),tt=!0,Rt(!0),Tt&&!h&&Tt(n)},X=Et(n=>{Ot.start(800+gt,()=>{tt=!1}),Rt(!1),yt&&h&&yt(n),St.start(wt.transitions.duration.shortest,()=>{_.current=!1})}),Y=n=>{_.current&&n.type!=="touchstart"||(S&&S.removeAttribute("title"),st.clear(),G.clear(),xt||tt&&ft?st.start(tt?ft:xt,()=>{Ct(n)}):Ct(n))},at=n=>{st.clear(),G.start(gt,()=>{X(n)})},[,Pt]=c.useState(!1),It=n=>{At(n.target)||(Pt(!1),at(n))},Lt=n=>{S||vt(n.currentTarget),At(n.target)&&(Pt(!0),Y(n))},kt=n=>{_.current=!0;const g=f.props;g.onTouchStart&&g.onTouchStart(n)},oe=n=>{kt(n),G.clear(),St.clear(),K(),M.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Mt.start(_t,()=>{document.body.style.WebkitUserSelect=M.current,Y(n)})},re=n=>{f.props.onTouchEnd&&f.props.onTouchEnd(n),K(),G.start(Kt,()=>{X(n)})};c.useEffect(()=>{if(!h)return;function n(g){g.key==="Escape"&&X(g)}return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[X,h]);const ne=Se(Me(f),vt,a);!j&&j!==0&&(h=!1);const pt=c.useRef(),ie=n=>{const g=f.props;g.onMouseMove&&g.onMouseMove(n),I={x:n.clientX,y:n.clientY},pt.current&&pt.current.update()},R={},ct=typeof j=="string";Ut?(R.title=!h&&ct&&!ht?j:null,R["aria-describedby"]=h?lt:null):(R["aria-label"]=ct?j:null,R["aria-labelledby"]=h&&!ct?lt:null);const m={...R,...bt,...f.props,className:Dt(bt.className,f.props.className),onTouchStart:kt,ref:ne,...rt?{onMouseMove:ie}:{}},C={};qt||(m.onTouchStart=oe,m.onTouchEnd=re),ht||(m.onMouseOver=et(Y,m.onMouseOver),m.onMouseLeave=et(at,m.onMouseLeave),it||(C.onMouseOver=Y,C.onMouseLeave=at)),zt||(m.onFocus=et(Lt,m.onFocus),m.onBlur=et(It,m.onBlur),it||(C.onFocus=Lt,C.onBlur=It));const y={...u,isRtl:Zt,arrow:T,disableInteractive:it,placement:Bt,PopperComponentProp:jt,touch:_.current},P=typeof x.popper=="function"?x.popper(y):x.popper,se=c.useMemo(()=>{let n=[{name:"arrow",enabled:!!nt,options:{element:nt,padding:4}}];return B.popperOptions?.modifiers&&(n=n.concat(B.popperOptions.modifiers)),P?.popperOptions?.modifiers&&(n=n.concat(P.popperOptions.modifiers)),{...B.popperOptions,...P?.popperOptions,modifiers:n}},[nt,B.popperOptions,P?.popperOptions]),dt=Ie(y),le=typeof x.transition=="function"?x.transition(y):x.transition,J={slots:{popper:V.Popper,transition:V.Transition??Jt,tooltip:V.Tooltip,arrow:V.Arrow,...Yt},slotProps:{arrow:x.arrow??q.arrow,popper:{...B,...P??q.popper},tooltip:x.tooltip??q.tooltip,transition:{...Qt,...le??q.transition}}},[ae,pe]=Q("popper",{elementType:Le,externalForwardedProps:J,ownerState:y,className:Dt(dt.popper,B?.className)}),[ce,de]=Q("transition",{elementType:Re,externalForwardedProps:J,ownerState:y}),[me,ue]=Q("tooltip",{elementType:ke,className:dt.tooltip,externalForwardedProps:J,ownerState:y}),[he,xe]=Q("arrow",{elementType:De,className:dt.arrow,externalForwardedProps:J,ownerState:y,ref:te});return t.jsxs(c.Fragment,{children:[c.cloneElement(f,m),t.jsx(ae,{as:jt??Ft,placement:Bt,anchorEl:rt?{getBoundingClientRect:()=>({top:I.y,left:I.x,right:I.x,bottom:I.y,width:0,height:0})}:S,popperRef:pt,open:S?h:!1,id:lt,transition:!0,...C,...pe,popperOptions:se,children:({TransitionProps:n})=>t.jsx(ce,{timeout:wt.transitions.duration.shorter,...n,...de,children:t.jsxs(me,{...ue,children:[j,T?t.jsx(he,{...xe}):null]})})})]})}),Ht=ot(Nt.forwardRef(({className:o,...e},a)=>t.jsx(Ee,{ref:a,...e,classes:{popper:o}})))(({theme:o})=>({"& .MuiTooltip-tooltip":{backgroundColor:"rgba(97, 97, 97, 0.9)",color:o.palette.common.white,fontSize:"0.625rem",fontWeight:o.typography.fontWeightMedium,lineHeight:"14px",padding:"4px 8px",borderRadius:o.shape.sm,fontFamily:o.typography.fontFamily},"& .MuiTooltip-arrow":{color:"rgba(97, 97, 97, 0.9)"}}));Ht.displayName="StyledTooltip";const r=Nt.forwardRef(({children:o,arrow:e=!0,placement:a="bottom",...u},T)=>t.jsx(Ht,{ref:T,arrow:e,placement:a,...u,children:o}));r.displayName="Tooltip";r.__docgenInfo={description:`Tooltip component

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
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["MuiTooltipProps"]};const mo={title:"Atoms/Tooltip",component:r,tags:["autodocs"],argTypes:{title:{control:"text",description:"Tooltip content"},placement:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],description:"Tooltip placement relative to the child element"},arrow:{control:"boolean",description:"If true, adds an arrow to the tooltip"},enterDelay:{control:"number",description:"The number of milliseconds to wait before showing the tooltip"},leaveDelay:{control:"number",description:"The number of milliseconds to wait before hiding the tooltip"},disableHoverListener:{control:"boolean",description:"If true, do not respond to hover events"},disableFocusListener:{control:"boolean",description:"If true, do not respond to focus events"},disableTouchListener:{control:"boolean",description:"If true, do not respond to touch events"},open:{control:"boolean",description:"If true, the tooltip is shown (controlled mode)"}},args:{title:"My Tooltip",arrow:!0,placement:"bottom"}},L={args:{title:"My Tooltip"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Hover me"})})})},k={args:{title:"My Tooltip",arrow:!1},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Hover me"})})})},D={args:{title:"My Tooltip",placement:"top"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Top"})})})},E={args:{title:"My Tooltip",placement:"bottom"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Bottom"})})})},A={args:{title:"My Tooltip",placement:"left"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Left"})})})},O={args:{title:"My Tooltip",placement:"right"},render:o=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(r,{...o,children:t.jsx(i,{children:"Right"})})})},W={render:()=>t.jsx(s,{sx:{p:8},children:t.jsxs(d,{spacing:4,children:[t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Top Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Top Start",placement:"top-start",children:t.jsx(i,{children:"Top Start"})}),t.jsx(r,{title:"Top",placement:"top",children:t.jsx(i,{children:"Top"})}),t.jsx(r,{title:"Top End",placement:"top-end",children:t.jsx(i,{children:"Top End"})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Bottom Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Bottom Start",placement:"bottom-start",children:t.jsx(i,{children:"Bottom Start"})}),t.jsx(r,{title:"Bottom",placement:"bottom",children:t.jsx(i,{children:"Bottom"})}),t.jsx(r,{title:"Bottom End",placement:"bottom-end",children:t.jsx(i,{children:"Bottom End"})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Left Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Left Start",placement:"left-start",children:t.jsx(i,{children:"Left Start"})}),t.jsx(r,{title:"Left",placement:"left",children:t.jsx(i,{children:"Left"})}),t.jsx(r,{title:"Left End",placement:"left-end",children:t.jsx(i,{children:"Left End"})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Right Placements"}),t.jsxs(d,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(r,{title:"Right Start",placement:"right-start",children:t.jsx(i,{children:"Right Start"})}),t.jsx(r,{title:"Right",placement:"right",children:t.jsx(i,{children:"Right"})}),t.jsx(r,{title:"Right End",placement:"right-end",children:t.jsx(i,{children:"Right End"})})]})]})]})}),parameters:{layout:"fullscreen"}},$={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsxs(d,{direction:"row",spacing:2,children:[t.jsx(r,{title:"Delete",children:t.jsx(b,{"aria-label":"delete",children:t.jsx(w,{icon:"delete"})})}),t.jsx(r,{title:"Add",children:t.jsx(b,{"aria-label":"add",children:t.jsx(w,{icon:"add"})})})]})})},N={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsxs(d,{direction:"row",spacing:2,children:[t.jsx(r,{title:"Default delay",children:t.jsx(i,{children:"Default"})}),t.jsx(r,{title:"500ms enter delay",enterDelay:500,children:t.jsx(i,{children:"Enter Delay 500ms"})}),t.jsx(r,{title:"500ms leave delay",leaveDelay:500,children:t.jsx(i,{children:"Leave Delay 500ms"})})]})})},F={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{title:t.jsxs(s,{children:[t.jsx(p,{variant:"subtitle2",sx:{color:"inherit"},children:"Complex Tooltip"}),t.jsx(p,{variant:"body2",sx:{color:"inherit",mt:.5},children:"This tooltip contains multiple lines of text and can include rich content."})]}),children:t.jsx(i,{children:"Hover for complex tooltip"})})})},H={render:()=>t.jsx(s,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(r,{title:"This tooltip is always visible",open:!0,children:t.jsx(i,{children:"Always showing tooltip"})})})},U={render:()=>t.jsx(s,{sx:{p:4},children:t.jsxs(d,{spacing:4,children:[t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Action Buttons with Tooltips"}),t.jsxs(d,{direction:"row",spacing:1,children:[t.jsx(r,{title:"Save changes",children:t.jsx(b,{"aria-label":"save",children:t.jsx(w,{icon:"add"})})}),t.jsx(r,{title:"Delete item",children:t.jsx(b,{"aria-label":"delete",color:"error",children:t.jsx(w,{icon:"delete"})})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Help Text"}),t.jsx(r,{title:"Click to learn more about this feature",children:t.jsx(i,{variant:"outlined",children:"What's this?"})})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Disabled Button with Tooltip"}),t.jsx(r,{title:"This feature is coming soon",children:t.jsx("span",{children:t.jsx(i,{disabled:!0,children:"Coming Soon"})})})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h6",sx:{mb:2},children:"Long Text Truncation"}),t.jsx(r,{title:"This is a very long text that would be truncated in the UI but fully visible in the tooltip",children:t.jsx(p,{sx:{maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"This is a very long text that would be truncated..."})})]})]})}),parameters:{layout:"fullscreen"}},z={render:()=>t.jsx(s,{sx:{p:4},children:t.jsxs(d,{spacing:4,children:[t.jsxs(s,{children:[t.jsx(p,{variant:"h4",gutterBottom:!0,children:"Tooltip Placements"}),t.jsxs(s,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:4,mt:4},children:[t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Top",placement:"top",children:t.jsx(i,{children:"Top"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Bottom",placement:"bottom",children:t.jsx(i,{children:"Bottom"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Left",placement:"left",children:t.jsx(i,{children:"Left"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"Right",placement:"right",children:t.jsx(i,{children:"Right"})})}),t.jsx(s,{textAlign:"center",children:t.jsx(r,{title:"No Arrow",arrow:!1,children:t.jsx(i,{children:"No Arrow"})})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h4",gutterBottom:!0,children:"With Icon Buttons"}),t.jsxs(d,{direction:"row",spacing:2,sx:{mt:2},children:[t.jsx(r,{title:"Add item",children:t.jsx(b,{"aria-label":"add",children:t.jsx(w,{icon:"add"})})}),t.jsx(r,{title:"Delete item",children:t.jsx(b,{"aria-label":"delete",color:"error",children:t.jsx(w,{icon:"delete"})})})]})]}),t.jsxs(s,{children:[t.jsx(p,{variant:"h4",gutterBottom:!0,children:"Custom Delays"}),t.jsxs(d,{direction:"row",spacing:2,sx:{mt:2},children:[t.jsx(r,{title:"Instant",children:t.jsx(i,{children:"Instant"})}),t.jsx(r,{title:"Delayed (500ms)",enterDelay:500,children:t.jsx(i,{children:"Delayed"})})]})]})]})}),parameters:{layout:"fullscreen"}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Default tooltip with arrow",...L.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Tooltip without arrow",...k.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Tooltip positioned at the top",...D.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Tooltip positioned at the bottom",...E.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Tooltip positioned on the left",...A.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"Tooltip positioned on the right",...O.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"All placement options",...W.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <MaterialSymbol icon="delete" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add">
          <IconButton aria-label="add">
            <MaterialSymbol icon="add" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
}`,...$.parameters?.docs?.source},description:{story:"Tooltip with icon button",...$.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Tooltip with custom delay",...N.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Tooltip with complex content",...F.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip title="This tooltip is always visible" open={true}>
        <Button>Always showing tooltip</Button>
      </Tooltip>
    </Box>
}`,...H.parameters?.docs?.source},description:{story:"Controlled tooltip (always open)",...H.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
                <MaterialSymbol icon="add" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <MaterialSymbol icon="delete" />
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
}`,...U.parameters?.docs?.source},description:{story:"Real-world examples",...U.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
                <MaterialSymbol icon="add" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <MaterialSymbol icon="delete" />
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
}`,...z.parameters?.docs?.source},description:{story:"Full showcase",...z.parameters?.docs?.description}}};const uo=["Default","WithoutArrow","PlacementTop","PlacementBottom","PlacementLeft","PlacementRight","AllPlacements","WithIconButton","WithDelay","ComplexContent","Controlled","RealWorldExamples","FullShowcase"];export{W as AllPlacements,F as ComplexContent,H as Controlled,L as Default,z as FullShowcase,E as PlacementBottom,A as PlacementLeft,O as PlacementRight,D as PlacementTop,U as RealWorldExamples,N as WithDelay,$ as WithIconButton,k as WithoutArrow,uo as __namedExportsOrder,mo as default};
