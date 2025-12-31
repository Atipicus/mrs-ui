import{r as c,u as So,j as e,c as G,h as Xo,O as Yo,R as Po}from"./iframe-zeeDxUUo.js";import{b as bo,g as Do,s as $,c as Z,a as go,r as oe,m as k}from"./memoTheme-DdwYAhEk.js";import{u as ee}from"./useTheme-BOjxn6IZ.js";import{u as U}from"./useSlot-c1o1rjQ3.js";import{u as te}from"./useControlled-DCnw2Mat.js";import{B as ie,u as ne}from"./ButtonBase-BxiEgOWN.js";import{u as ae}from"./useForkRef-DAPN11UK.js";import{Z as se}from"./Zoom-2n-6MDc7.js";import{i as re}from"./isMuiElement-WzXyp95K.js";import{c as le}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{m as ce}from"./mergeSlotProps-CtdHqFns.js";import{T as pe}from"./Tooltip-CIYtodml.js";import{c as H}from"./createSvgIcon-BC1WyBLu.js";import{F as Fo}from"./Favorite-Bh0Oi-cy.js";import{B as h}from"./Box-BNcCJ4TC.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-D0MAhnil.js";import"./useEventCallback-xd_OPibr.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-oWGx_9ve.js";import"./index-DSi2Tpba.js";import"./index-DlptTVzo.js";import"./getReactElementRef-Zt7I0qGC.js";import"./Grow-D9TYHJo4.js";import"./Popper-CDQQQfPz.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DpuageQq.js";import"./useSlotProps-BpQ4xduo.js";function de(o){return Do("MuiFab",o)}const $o=bo("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),me=o=>{const{color:t,variant:i,classes:s,size:l}=o,u={root:["root",i,`size${G(l)}`,t==="inherit"?"colorInherit":t]},j=go(u,de,s);return{...s,...j}},ue=$(ie,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>oe(o)||o==="classes",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,t[i.variant],t[`size${G(i.size)}`],i.color==="inherit"&&t.colorInherit,t[G(i.size)],t[i.color]]}})(k(({theme:o})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:o.palette.getContrastText?.(o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${$o.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),k(({theme:o})=>({variants:[...Object.entries(o.palette).filter(le(["dark","contrastText"])).map(([t])=>({props:{color:t},style:{color:(o.vars||o).palette[t].contrastText,backgroundColor:(o.vars||o).palette[t].main,"&:hover":{backgroundColor:(o.vars||o).palette[t].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[t].main}}}}))]})),k(({theme:o})=>({[`&.${$o.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}))),Bo=c.forwardRef(function(t,i){const s=So({props:t,name:"MuiFab"}),{children:l,className:u,color:j="default",component:I="button",disabled:x=!1,disableFocusRipple:b=!1,focusVisibleClassName:D,size:g="large",variant:y="circular",...T}=s,F={...s,color:j,component:I,disabled:x,disableFocusRipple:b,size:g,variant:y},d=me(F);return e.jsx(ue,{className:Z(d.root,u),component:I,disabled:x,focusRipple:!b,focusVisibleClassName:Z(d.focusVisible,D),ownerState:F,ref:i,...T,classes:d,children:l})});function xe(o){return Do("MuiSpeedDial",o)}const xo=bo("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),he=o=>{const{classes:t,open:i,direction:s}=o,l={root:["root",`direction${G(s)}`],fab:["fab"],actions:["actions",!i&&"actionsClosed"]};return go(l,xe,t)};function q(o){if(o==="up"||o==="down")return"vertical";if(o==="right"||o==="left")return"horizontal"}const M=32,ho=16,fe=$("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,t[`direction${G(i.direction)}`]]}})(k(({theme:o})=>({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none",variants:[{props:{direction:"up"},style:{flexDirection:"column-reverse",[`& .${xo.actions}`]:{flexDirection:"column-reverse",marginBottom:-M,paddingBottom:ho+M}}},{props:{direction:"down"},style:{flexDirection:"column",[`& .${xo.actions}`]:{flexDirection:"column",marginTop:-M,paddingTop:ho+M}}},{props:{direction:"left"},style:{flexDirection:"row-reverse",[`& .${xo.actions}`]:{flexDirection:"row-reverse",marginRight:-M,paddingRight:ho+M}}},{props:{direction:"right"},style:{flexDirection:"row",[`& .${xo.actions}`]:{flexDirection:"row",marginLeft:-M,paddingLeft:ho+M}}}]}))),Se=$(Bo,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(o,t)=>t.fab})({pointerEvents:"auto"}),be=$("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.actions,!i.open&&t.actionsClosed]}})({display:"flex",pointerEvents:"auto",variants:[{props:({ownerState:o})=>!o.open,style:{transition:"top 0s linear 0.2s",pointerEvents:"none"}}]}),De=c.forwardRef(function(t,i){const s=So({props:t,name:"MuiSpeedDial"}),l=ee(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{ariaLabel:j,FabProps:{ref:I,...x}={},children:b,className:D,direction:g="up",hidden:y=!1,icon:T,onBlur:F,onClose:d,onFocus:_,onKeyDown:v,onMouseEnter:V,onMouseLeave:C,onOpen:B,open:K,openIcon:Ao,slots:To={},slotProps:mo={},TransitionComponent:wo,TransitionProps:jo,transitionDuration:Io=u,...P}=s,[f,A]=te({controlled:K,default:!1,name:"SpeedDial",state:"open"}),O={...s,open:f,direction:g},W=he(O),R=ne(),N=c.useRef(0),z=c.useRef(),E=c.useRef([]);E.current=[E.current[0]];const zo=c.useCallback(n=>{E.current[0]=n},[]),Eo=ae(I,zo),Zo=(n,r)=>L=>{E.current[n+1]=L,r&&r(L)},Go=n=>{v&&v(n);const r=n.key.replace("Arrow","").toLowerCase(),{current:L=r}=z;if(n.key==="Escape"){A(!1),E.current[0].focus(),d&&d(n,"escapeKeyDown");return}if(q(r)===q(L)&&q(r)!==void 0){n.preventDefault();const Co=r===L?1:-1,uo=Xo(N.current+Co,0,E.current.length-1);E.current[uo].focus(),N.current=uo,z.current=L}};c.useEffect(()=>{f||(N.current=0,z.current=void 0)},[f]);const Ro=n=>{n.type==="mouseleave"&&C&&C(n),n.type==="blur"&&F&&F(n),R.clear(),n.type==="blur"?R.start(0,()=>{A(!1),d&&d(n,"blur")}):(A(!1),d&&d(n,"mouseLeave"))},Ho=n=>{x.onClick&&x.onClick(n),R.clear(),f?(A(!1),d&&d(n,"toggle")):(A(!0),B&&B(n,"toggle"))},Lo=n=>{n.type==="mouseenter"&&V&&V(n),n.type==="focus"&&_&&_(n),R.clear(),f||R.start(0,()=>{A(!0),B&&B(n,{focus:"focus",mouseenter:"mouseEnter"}[n.type])})},vo=j.replace(/^[^a-z]+|[^\w:.-]+/gi,""),Mo=c.Children.toArray(b).filter(n=>c.isValidElement(n)),Vo=Mo.map((n,r)=>{const{FabProps:{ref:L,...Co}={},tooltipPlacement:uo}=n.props,Qo=uo||(q(g)==="vertical"?"left":"top");return c.cloneElement(n,{FabProps:{...Co,ref:Zo(r,L)},delay:30*(f?r:Mo.length-r),open:f,tooltipPlacement:Qo,id:`${vo}-action-${r}`})}),Wo={transition:wo,...To},Uo={transition:jo,...mo},ko={slots:Wo,slotProps:Uo},[_o,Ko]=U("root",{elementType:fe,externalForwardedProps:{...ko,...P},ownerState:O,ref:i,className:Z(W.root,D),additionalProps:{role:"presentation"},getSlotProps:n=>({...n,onKeyDown:r=>{n.onKeyDown?.(r),Go(r)},onBlur:r=>{n.onBlur?.(r),Ro(r)},onFocus:r=>{n.onFocus?.(r),Lo(r)},onMouseEnter:r=>{n.onMouseEnter?.(r),Lo(r)},onMouseLeave:r=>{n.onMouseLeave?.(r),Ro(r)}})}),[qo,Jo]=U("transition",{elementType:se,externalForwardedProps:ko,ownerState:O});return e.jsxs(_o,{...Ko,children:[e.jsx(qo,{in:!y,timeout:Io,unmountOnExit:!0,...Jo,children:e.jsx(Se,{color:"primary","aria-label":j,"aria-haspopup":"true","aria-expanded":f,"aria-controls":`${vo}-actions`,...x,onClick:Ho,className:Z(W.fab,x.className),ref:Eo,ownerState:O,children:c.isValidElement(T)&&re(T,["SpeedDialIcon"])?c.cloneElement(T,{open:f}):T})}),e.jsx(be,{id:`${vo}-actions`,role:"menu","aria-orientation":q(g),className:Z(W.actions,!f&&W.actionsClosed),ownerState:O,children:Vo})]})});function ge(o){return Do("MuiSpeedDialAction",o)}const fo=bo("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),ye=o=>{const{open:t,tooltipPlacement:i,classes:s}=o,l={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${G(i)}`,!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return go(l,ge,s)},Te=$(Bo,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.fab,!i.open&&t.fabClosed]}})(k(({theme:o})=>({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:Yo(o.palette.background.paper,.15)},transition:`${o.transitions.create("transform",{duration:o.transitions.duration.shorter})}, opacity 0.8s`,opacity:1,variants:[{props:({ownerState:t})=>!t.open,style:{opacity:0,transform:"scale(0)"}}]}))),we=$("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.staticTooltip,!i.open&&t.staticTooltipClosed,t[`tooltipPlacement${G(i.tooltipPlacement)}`]]}})(k(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${fo.staticTooltipLabel}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},variants:[{props:({ownerState:t})=>!t.open,style:{[`& .${fo.staticTooltipLabel}`]:{opacity:0,transform:"scale(0.5)"}}},{props:{tooltipPlacement:"left"},style:{[`& .${fo.staticTooltipLabel}`]:{transformOrigin:"100% 50%",right:"100%",marginRight:8}}},{props:{tooltipPlacement:"right"},style:{[`& .${fo.staticTooltipLabel}`]:{transformOrigin:"0% 50%",left:"100%",marginLeft:8}}}]}))),je=$("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(o,t)=>t.staticTooltipLabel})(k(({theme:o})=>({position:"absolute",...o.typography.body1,backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"}))),Ie=c.forwardRef(function(t,i){const s=So({props:t,name:"MuiSpeedDialAction"}),{className:l,delay:u=0,FabProps:j={},icon:I,id:x,open:b,TooltipClasses:D,tooltipOpen:g=!1,tooltipPlacement:y="left",tooltipTitle:T,slots:F={},slotProps:d={},..._}=s,v={...s,tooltipPlacement:y},V=ye(v),C={slots:F,slotProps:{fab:j,...d,tooltip:ce(typeof d.tooltip=="function"?d.tooltip(v):d.tooltip,{title:T,open:g,placement:y,classes:D})}},[B,K]=c.useState(C.slotProps.tooltip?.open),Ao=()=>{K(!1)},To=()=>{K(!0)},mo={transitionDelay:`${u}ms`},[wo,jo]=U("fab",{elementType:Te,externalForwardedProps:C,ownerState:v,shouldForwardComponentProp:!0,className:Z(V.fab,l),additionalProps:{style:mo,tabIndex:-1,role:"menuitem",size:"small"}}),[Io,P]=U("tooltip",{elementType:pe,externalForwardedProps:C,shouldForwardComponentProp:!0,ref:i,additionalProps:{id:x},ownerState:v,getSlotProps:N=>({...N,onClose:z=>{N.onClose?.(z),Ao()},onOpen:z=>{N.onOpen?.(z),To()}})}),[f,A]=U("staticTooltip",{elementType:we,externalForwardedProps:C,ownerState:v,ref:i,className:V.staticTooltip,additionalProps:{id:x}}),[O,W]=U("staticTooltipLabel",{elementType:je,externalForwardedProps:C,ownerState:v,className:V.staticTooltipLabel,additionalProps:{style:mo,id:`${x}-label`}}),R=e.jsx(wo,{...jo,children:I});return P.open?e.jsxs(f,{...A,..._,children:[e.jsx(O,{...W,children:P.title}),c.cloneElement(R,{"aria-labelledby":`${x}-label`})]}):(!b&&B&&K(!1),e.jsx(Io,{...P,title:P.title,open:b&&B,placement:P.placement,classes:P.classes,..._,children:R}))}),ve=H(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function Ce(o){return Do("MuiSpeedDialIcon",o)}const w=bo("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),Pe=o=>{const{classes:t,open:i,openIcon:s}=o;return go({root:["root"],icon:["icon",i&&"iconOpen",s&&i&&"iconWithOpenIconOpen"],openIcon:["openIcon",i&&"openIconOpen"]},Ce,t)},Ae=$("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[{[`& .${w.icon}`]:t.icon},{[`& .${w.icon}`]:i.open&&t.iconOpen},{[`& .${w.icon}`]:i.open&&i.openIcon&&t.iconWithOpenIconOpen},{[`& .${w.openIcon}`]:t.openIcon},{[`& .${w.openIcon}`]:i.open&&t.openIconOpen},t.root]}})(k(({theme:o})=>({height:24,[`& .${w.icon}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},[`& .${w.openIcon}`]:{position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},variants:[{props:({ownerState:t})=>t.open,style:{[`& .${w.icon}`]:{transform:"rotate(45deg)"}}},{props:({ownerState:t})=>t.open&&t.openIcon,style:{[`& .${w.icon}`]:{opacity:0}}},{props:({ownerState:t})=>t.open,style:{[`& .${w.openIcon}`]:{transform:"rotate(0deg)",opacity:1}}}]}))),Oo=c.forwardRef(function(t,i){const s=So({props:t,name:"MuiSpeedDialIcon"}),{className:l,icon:u,open:j,openIcon:I,...x}=s,b=s,D=Pe(b);function g(y,T){return c.isValidElement(y)?c.cloneElement(y,{className:T}):y}return e.jsxs(Ae,{className:Z(D.root,l),ref:i,ownerState:b,...x,children:[I?g(I,D.openIcon):null,u?g(u,D.icon):e.jsx(ve,{className:D.icon})]})});Oo.muiName="SpeedDialIcon";const p=Po.forwardRef((o,t)=>e.jsx(De,{ref:t,...o}));p.displayName="SpeedDial";p.__docgenInfo={description:`SpeedDial component

When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.

@param props - SpeedDial component props
@returns SpeedDial component`,methods:[],displayName:"SpeedDial",props:{ariaLabel:{required:!0,tsType:{name:"string"},description:"The aria-label of the button element"}},composes:["MuiSpeedDialProps"]};const a=Po.forwardRef((o,t)=>e.jsx(Ie,{ref:t,...o}));a.displayName="SpeedDialAction";a.__docgenInfo={description:`SpeedDialAction component

Individual action button for SpeedDial.

@param props - SpeedDialAction component props
@returns SpeedDialAction component`,methods:[],displayName:"SpeedDialAction",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display in the SpeedDial action"},tooltipTitle:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label to display in the tooltip"}},composes:["MuiSpeedDialActionProps"]};const m=Po.forwardRef((o,t)=>e.jsx(Oo,{ref:t,...o}));m.displayName="SpeedDialIcon";m.__docgenInfo={description:`SpeedDialIcon component

Icon for the SpeedDial Floating Action Button that animates when opened/closed.

@param props - SpeedDialIcon component props
@returns SpeedDialIcon component`,methods:[],displayName:"SpeedDialIcon",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display"},openIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display when the SpeedDial is open"},sx:{required:!1,tsType:{name:"object"},description:"Override or extend the styles applied to the component"}},composes:["MuiSpeedDialIconProps"]};const lo=H(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined"),co=H(e.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),po=H(e.jsx("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print"),yo=H(e.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"}),"Share"),No=H(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),Re=H(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),at={title:"Components/Molecules/SpeedDial",component:p,tags:["autodocs"],argTypes:{direction:{control:"select",options:["up","down","left","right"],description:"The direction the actions open"},hidden:{control:"boolean",description:"If true, the SpeedDial is hidden"},open:{control:"boolean",description:"If true, the component is shown"}},parameters:{docs:{description:{component:"When pressed, a floating action button can display three to six related actions in the form of a Speed Dial."}}}},S=[{icon:e.jsx(lo,{}),name:"Copy"},{icon:e.jsx(co,{}),name:"Save"},{icon:e.jsx(po,{}),name:"Print"},{icon:e.jsx(yo,{}),name:"Share"}],J={render:()=>e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(p,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:o.name},o.name))})})},Q={render:function(){const[t,i]=c.useState(!1),s=()=>i(!0),l=()=>i(!1);return e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(p,{ariaLabel:"SpeedDial controlled",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),onClose:l,onOpen:s,open:t,children:S.map(u=>e.jsx(a,{icon:u.icon,tooltipTitle:u.name,onClick:l},u.name))})})}},X={render:()=>e.jsxs(h,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1,position:"relative"},children:[e.jsx(p,{ariaLabel:"SpeedDial direction up",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),direction:"up",children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:`${o.name} (up)`},o.name))}),e.jsx(p,{ariaLabel:"SpeedDial direction down",sx:{position:"absolute",top:16,right:16},icon:e.jsx(m,{}),direction:"down",children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:`${o.name} (down)`},o.name))}),e.jsx(p,{ariaLabel:"SpeedDial direction left",sx:{position:"absolute",bottom:16,left:16},icon:e.jsx(m,{}),direction:"left",children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:`${o.name} (left)`,tooltipPlacement:"right"},o.name))}),e.jsx(p,{ariaLabel:"SpeedDial direction right",sx:{position:"absolute",bottom:16,left:"50%"},icon:e.jsx(m,{}),direction:"right",children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:`${o.name} (right)`,tooltipPlacement:"left"},o.name))})]})},Y={render:()=>e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(p,{ariaLabel:"SpeedDial with custom icon",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(Fo,{}),children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:o.name},o.name))})})},oo={render:()=>e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(p,{ariaLabel:"SpeedDial with custom open icon",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{icon:e.jsx(Re,{}),openIcon:e.jsx(No,{})}),children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:o.name},o.name))})})},eo={render:()=>e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(p,{ariaLabel:"SpeedDial with persistent tooltips",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),children:S.map(o=>e.jsx(a,{icon:o.icon,tooltipTitle:o.name,tooltipOpen:!0},o.name))})})},to={render:function(){const[t,i]=c.useState(!1);return e.jsxs(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:[e.jsx(h,{sx:{mb:2},children:e.jsxs("button",{onClick:()=>i(!t),children:[t?"Show":"Hide"," SpeedDial"]})}),e.jsx(p,{ariaLabel:"SpeedDial hidden example",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),hidden:t,children:S.map(s=>e.jsx(a,{icon:s.icon,tooltipTitle:s.name},s.name))})]})}},io={render:function(){const[t,i]=c.useState(""),s=l=>{i(`${l} clicked!`),setTimeout(()=>i(""),2e3)};return e.jsxs(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:[t&&e.jsx(h,{sx:{mb:2,p:1,bgcolor:"primary.light",color:"white",borderRadius:1},children:t}),e.jsx(p,{ariaLabel:"SpeedDial with actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),children:S.map(l=>e.jsx(a,{icon:l.icon,tooltipTitle:l.name,onClick:()=>s(l.name)},l.name))})]})}},no={render:()=>e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(p,{ariaLabel:"SpeedDial with disabled actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),children:[e.jsx(a,{icon:e.jsx(lo,{}),tooltipTitle:"Copy (disabled)",disabled:!0}),e.jsx(a,{icon:e.jsx(co,{}),tooltipTitle:"Save"}),e.jsx(a,{icon:e.jsx(po,{}),tooltipTitle:"Print (disabled)",disabled:!0}),e.jsx(a,{icon:e.jsx(yo,{}),tooltipTitle:"Share"})]})})},ao={render:()=>e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(p,{ariaLabel:"SpeedDial with different tooltip placements",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),direction:"up",children:[e.jsx(a,{icon:e.jsx(lo,{}),tooltipTitle:"Left (default)",tooltipPlacement:"left"}),e.jsx(a,{icon:e.jsx(co,{}),tooltipTitle:"Right",tooltipPlacement:"right"}),e.jsx(a,{icon:e.jsx(po,{}),tooltipTitle:"Top",tooltipPlacement:"top"}),e.jsx(a,{icon:e.jsx(yo,{}),tooltipTitle:"Bottom",tooltipPlacement:"bottom"})]})})},so={render:()=>e.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(p,{ariaLabel:"SpeedDial with 3 actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),children:[e.jsx(a,{icon:e.jsx(lo,{}),tooltipTitle:"Copy"}),e.jsx(a,{icon:e.jsx(co,{}),tooltipTitle:"Save"}),e.jsx(a,{icon:e.jsx(po,{}),tooltipTitle:"Print"})]})})},ro={render:()=>e.jsx(h,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(p,{ariaLabel:"SpeedDial with 6 actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(m,{}),children:[e.jsx(a,{icon:e.jsx(lo,{}),tooltipTitle:"Copy"}),e.jsx(a,{icon:e.jsx(co,{}),tooltipTitle:"Save"}),e.jsx(a,{icon:e.jsx(po,{}),tooltipTitle:"Print"}),e.jsx(a,{icon:e.jsx(yo,{}),tooltipTitle:"Share"}),e.jsx(a,{icon:e.jsx(No,{}),tooltipTitle:"Edit"}),e.jsx(a,{icon:e.jsx(Fo,{}),tooltipTitle:"Favorite"})]})})};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial basic example" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
      </SpeedDial>
    </Box>
}`,...J.parameters?.docs?.source},description:{story:"Default SpeedDial opening upward",...J.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function ControlledSpeedDial() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <Box sx={{
      height: 320,
      transform: 'translateZ(0px)',
      flexGrow: 1
    }}>
        <SpeedDial ariaLabel="SpeedDial controlled" sx={{
        position: 'absolute',
        bottom: 16,
        right: 16
      }} icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
          {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />)}
        </SpeedDial>
      </Box>;
  }
}`,...Q.parameters?.docs?.source},description:{story:"Controlled SpeedDial",...Q.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    position: 'relative'
  }}>
      <SpeedDial ariaLabel="SpeedDial direction up" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon />} direction="up">
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={\`\${action.name} (up)\`} />)}
      </SpeedDial>

      <SpeedDial ariaLabel="SpeedDial direction down" sx={{
      position: 'absolute',
      top: 16,
      right: 16
    }} icon={<SpeedDialIcon />} direction="down">
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={\`\${action.name} (down)\`} />)}
      </SpeedDial>

      <SpeedDial ariaLabel="SpeedDial direction left" sx={{
      position: 'absolute',
      bottom: 16,
      left: 16
    }} icon={<SpeedDialIcon />} direction="left">
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={\`\${action.name} (left)\`} tooltipPlacement="right" />)}
      </SpeedDial>

      <SpeedDial ariaLabel="SpeedDial direction right" sx={{
      position: 'absolute',
      bottom: 16,
      left: '50%'
    }} icon={<SpeedDialIcon />} direction="right">
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={\`\${action.name} (right)\`} tooltipPlacement="left" />)}
      </SpeedDial>
    </Box>
}`,...X.parameters?.docs?.source},description:{story:"SpeedDial with different directions",...X.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial with custom icon" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<FavoriteIcon />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
      </SpeedDial>
    </Box>
}`,...Y.parameters?.docs?.source},description:{story:"Custom icon",...Y.parameters?.docs?.description}}};oo.parameters={...oo.parameters,docs:{...oo.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial with custom open icon" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon icon={<AddIcon />} openIcon={<EditIcon />} />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
      </SpeedDial>
    </Box>
}`,...oo.parameters?.docs?.source},description:{story:"Custom open icon",...oo.parameters?.docs?.description}}};eo.parameters={...eo.parameters,docs:{...eo.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial with persistent tooltips" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} tooltipOpen />)}
      </SpeedDial>
    </Box>
}`,...eo.parameters?.docs?.source},description:{story:"Persistent tooltips",...eo.parameters?.docs?.description}}};to.parameters={...to.parameters,docs:{...to.parameters?.docs,source:{originalSource:`{
  render: function HiddenSpeedDial() {
    const [hidden, setHidden] = useState(false);
    return <Box sx={{
      height: 320,
      transform: 'translateZ(0px)',
      flexGrow: 1
    }}>
        <Box sx={{
        mb: 2
      }}>
          <button onClick={() => setHidden(!hidden)}>
            {hidden ? 'Show' : 'Hide'} SpeedDial
          </button>
        </Box>
        <SpeedDial ariaLabel="SpeedDial hidden example" sx={{
        position: 'absolute',
        bottom: 16,
        right: 16
      }} icon={<SpeedDialIcon />} hidden={hidden}>
          {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
        </SpeedDial>
      </Box>;
  }
}`,...to.parameters?.docs?.source},description:{story:"Hidden SpeedDial (shows/hides on scroll simulation)",...to.parameters?.docs?.description}}};io.parameters={...io.parameters,docs:{...io.parameters?.docs,source:{originalSource:`{
  render: function SpeedDialWithActions() {
    const [message, setMessage] = useState('');
    const handleAction = (actionName: string) => {
      setMessage(\`\${actionName} clicked!\`);
      setTimeout(() => setMessage(''), 2000);
    };
    return <Box sx={{
      height: 320,
      transform: 'translateZ(0px)',
      flexGrow: 1
    }}>
        {message && <Box sx={{
        mb: 2,
        p: 1,
        bgcolor: 'primary.light',
        color: 'white',
        borderRadius: 1
      }}>
            {message}
          </Box>}
        <SpeedDial ariaLabel="SpeedDial with actions" sx={{
        position: 'absolute',
        bottom: 16,
        right: 16
      }} icon={<SpeedDialIcon />}>
          {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={() => handleAction(action.name)} />)}
        </SpeedDial>
      </Box>;
  }
}`,...io.parameters?.docs?.source},description:{story:"With action click handlers",...io.parameters?.docs?.description}}};no.parameters={...no.parameters,docs:{...no.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial with disabled actions" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy (disabled)" disabled />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print (disabled)" disabled />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      </SpeedDial>
    </Box>
}`,...no.parameters?.docs?.source},description:{story:"Disabled actions",...no.parameters?.docs?.description}}};ao.parameters={...ao.parameters,docs:{...ao.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial with different tooltip placements" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon />} direction="up">
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Left (default)" tooltipPlacement="left" />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Right" tooltipPlacement="right" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Top" tooltipPlacement="top" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Bottom" tooltipPlacement="bottom" />
      </SpeedDial>
    </Box>
}`,...ao.parameters?.docs?.source},description:{story:"Different tooltip placements",...ao.parameters?.docs?.description}}};so.parameters={...so.parameters,docs:{...so.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial with 3 actions" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      </SpeedDial>
    </Box>
}`,...so.parameters?.docs?.source},description:{story:"Minimal actions (3 actions)",...so.parameters?.docs?.description}}};ro.parameters={...ro.parameters,docs:{...ro.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1
  }}>
      <SpeedDial ariaLabel="SpeedDial with 6 actions" sx={{
      position: 'absolute',
      bottom: 16,
      right: 16
    }} icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<FavoriteIcon />} tooltipTitle="Favorite" />
      </SpeedDial>
    </Box>
}`,...ro.parameters?.docs?.source},description:{story:"Maximum actions (6 actions)",...ro.parameters?.docs?.description}}};const st=["Default","Controlled","Directions","CustomIcon","CustomOpenIcon","PersistentTooltips","Hidden","WithActions","DisabledActions","TooltipPlacements","MinimalActions","MaximumActions"];export{Q as Controlled,Y as CustomIcon,oo as CustomOpenIcon,J as Default,X as Directions,no as DisabledActions,to as Hidden,ro as MaximumActions,so as MinimalActions,eo as PersistentTooltips,ao as TooltipPlacements,io as WithActions,st as __namedExportsOrder,at as default};
