import{r as p,u as To,j as e,c as _,n as ee,O as te,R as Ao}from"./iframe-BFhFDpEs.js";import{b as wo,g as jo,s as Z,c as U,a as vo,r as ie,m as N}from"./memoTheme-_aLF6IQY.js";import{u as Fo}from"./useTheme-DO1mN57X.js";import{u as J}from"./useSlot-CVuoaOwG.js";import{u as ne}from"./useControlled-DYFOj8xd.js";import{B as ae,u as se}from"./ButtonBase-znckyonR.js";import{u as Bo}from"./useForkRef-BUOQBrqT.js";import{T as re,g as Eo,r as le}from"./utils-CWTjw1bZ.js";import{g as ce}from"./getReactElementRef-EsqkqcWj.js";import{i as pe}from"./isMuiElement-CaC9lWNg.js";import{c as de}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{m as me}from"./mergeSlotProps-CEFa6tSL.js";import{T as ue}from"./Tooltip-C7V1L5h5.js";import{c as K}from"./createSvgIcon-vY1aqQsj.js";import{F as Oo}from"./Favorite-DzSqUp_U.js";import{B as D}from"./Box-DFxahbR2.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-p8x1PAPW.js";import"./useEventCallback-BfLbMVgp.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-pa3kUrIv.js";import"./index-DIf4fGtn.js";import"./Grow-ClJ9Ia3k.js";import"./Popper-DFkj_9yI.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DOqPw-bv.js";import"./useSlotProps-C3mTkDzu.js";function xe(o){return jo("MuiFab",o)}const $o=wo("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),fe=o=>{const{color:t,variant:i,classes:a,size:l}=o,u={root:["root",i,`size${_(l)}`,t==="inherit"?"colorInherit":t]},P=vo(u,xe,a);return{...a,...P}},he=Z(ae,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>ie(o)||o==="classes",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,t[i.variant],t[`size${_(i.size)}`],i.color==="inherit"&&t.colorInherit,t[_(i.size)],t[i.color]]}})(N(({theme:o})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:o.palette.getContrastText?.(o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${$o.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),N(({theme:o})=>({variants:[...Object.entries(o.palette).filter(de(["dark","contrastText"])).map(([t])=>({props:{color:t},style:{color:(o.vars||o).palette[t].contrastText,backgroundColor:(o.vars||o).palette[t].main,"&:hover":{backgroundColor:(o.vars||o).palette[t].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[t].main}}}}))]})),N(({theme:o})=>({[`&.${$o.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}))),zo=p.forwardRef(function(t,i){const a=To({props:t,name:"MuiFab"}),{children:l,className:u,color:P="default",component:g="button",disabled:x=!1,disableFocusRipple:y=!1,focusVisibleClassName:T,size:v="large",variant:I="circular",...w}=a,k={...a,color:P,component:g,disabled:x,disableFocusRipple:y,size:v,variant:I},d=fe(k);return e.jsx(he,{className:U(d.root,u),component:g,disabled:x,focusRipple:!y,focusVisibleClassName:U(d.focusVisible,T),ownerState:k,ref:i,...w,classes:d,children:l})}),Se={entering:{transform:"none"},entered:{transform:"none"}},be=p.forwardRef(function(t,i){const a=Fo(),l={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:u,appear:P=!0,children:g,easing:x,in:y,onEnter:T,onEntered:v,onEntering:I,onExit:w,onExited:k,onExiting:d,style:E,timeout:j=l,TransitionComponent:F=re,...R}=t,C=p.useRef(null),G=Bo(C,ce(g),i),$=c=>f=>{if(c){const b=C.current;f===void 0?c(b):c(b,f)}},Q=$(I),q=$((c,f)=>{le(c);const b=Eo({style:E,timeout:j,easing:x},{mode:"enter"});c.style.webkitTransition=a.transitions.create("transform",b),c.style.transition=a.transitions.create("transform",b),T&&T(c,f)}),X=$(v),Y=$(d),oo=$(c=>{const f=Eo({style:E,timeout:j,easing:x},{mode:"exit"});c.style.webkitTransition=a.transitions.create("transform",f),c.style.transition=a.transitions.create("transform",f),w&&w(c)}),L=$(k),S=c=>{u&&u(C.current,c)};return e.jsx(F,{appear:P,in:y,nodeRef:C,onEnter:q,onEntered:X,onEntering:Q,onExit:oo,onExited:L,onExiting:Y,addEndListener:S,timeout:j,...R,children:(c,{ownerState:f,...b})=>p.cloneElement(g,{style:{transform:"scale(0)",visibility:c==="exited"&&!y?"hidden":void 0,...Se[c],...E,...g.props.style},ref:G,...b})})});function De(o){return jo("MuiSpeedDial",o)}const Do=wo("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),ge=o=>{const{classes:t,open:i,direction:a}=o,l={root:["root",`direction${_(a)}`],fab:["fab"],actions:["actions",!i&&"actionsClosed"]};return vo(l,De,t)};function eo(o){if(o==="up"||o==="down")return"vertical";if(o==="right"||o==="left")return"horizontal"}const z=32,go=16,ye=Z("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,t[`direction${_(i.direction)}`]]}})(N(({theme:o})=>({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none",variants:[{props:{direction:"up"},style:{flexDirection:"column-reverse",[`& .${Do.actions}`]:{flexDirection:"column-reverse",marginBottom:-z,paddingBottom:go+z}}},{props:{direction:"down"},style:{flexDirection:"column",[`& .${Do.actions}`]:{flexDirection:"column",marginTop:-z,paddingTop:go+z}}},{props:{direction:"left"},style:{flexDirection:"row-reverse",[`& .${Do.actions}`]:{flexDirection:"row-reverse",marginRight:-z,paddingRight:go+z}}},{props:{direction:"right"},style:{flexDirection:"row",[`& .${Do.actions}`]:{flexDirection:"row",marginLeft:-z,paddingLeft:go+z}}}]}))),Te=Z(zo,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(o,t)=>t.fab})({pointerEvents:"auto"}),we=Z("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.actions,!i.open&&t.actionsClosed]}})({display:"flex",pointerEvents:"auto",variants:[{props:({ownerState:o})=>!o.open,style:{transition:"top 0s linear 0.2s",pointerEvents:"none"}}]}),je=p.forwardRef(function(t,i){const a=To({props:t,name:"MuiSpeedDial"}),l=Fo(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{ariaLabel:P,FabProps:{ref:g,...x}={},children:y,className:T,direction:v="up",hidden:I=!1,icon:w,onBlur:k,onClose:d,onFocus:E,onKeyDown:j,onMouseEnter:F,onMouseLeave:R,onOpen:C,open:G,openIcon:$,slots:Q={},slotProps:q={},TransitionComponent:X,TransitionProps:Y,transitionDuration:oo=u,...L}=a,[S,c]=ne({controlled:G,default:!1,name:"SpeedDial",state:"open"}),f={...a,open:S,direction:v},b=ge(f),B=se(),H=p.useRef(0),V=p.useRef(),W=p.useRef([]);W.current=[W.current[0]];const Go=p.useCallback(n=>{W.current[0]=n},[]),Ho=Bo(g,Go),Vo=(n,r)=>O=>{W.current[n+1]=O,r&&r(O)},Wo=n=>{j&&j(n);const r=n.key.replace("Arrow","").toLowerCase(),{current:O=r}=V;if(n.key==="Escape"){c(!1),W.current[0].focus(),d&&d(n,"escapeKeyDown");return}if(eo(r)===eo(O)&&eo(r)!==void 0){n.preventDefault();const Po=r===O?1:-1,bo=ee(H.current+Po,0,W.current.length-1);W.current[bo].focus(),H.current=bo,V.current=O}};p.useEffect(()=>{S||(H.current=0,V.current=void 0)},[S]);const Ro=n=>{n.type==="mouseleave"&&R&&R(n),n.type==="blur"&&k&&k(n),B.clear(),n.type==="blur"?B.start(0,()=>{c(!1),d&&d(n,"blur")}):(c(!1),d&&d(n,"mouseLeave"))},Uo=n=>{x.onClick&&x.onClick(n),B.clear(),S?(c(!1),d&&d(n,"toggle")):(c(!0),C&&C(n,"toggle"))},Lo=n=>{n.type==="mouseenter"&&F&&F(n),n.type==="focus"&&E&&E(n),B.clear(),S||B.start(0,()=>{c(!0),C&&C(n,{focus:"focus",mouseenter:"mouseEnter"}[n.type])})},Co=P.replace(/^[^a-z]+|[^\w:.-]+/gi,""),Mo=p.Children.toArray(y).filter(n=>p.isValidElement(n)),_o=Mo.map((n,r)=>{const{FabProps:{ref:O,...Po}={},tooltipPlacement:bo}=n.props,oe=bo||(eo(v)==="vertical"?"left":"top");return p.cloneElement(n,{FabProps:{...Po,ref:Vo(r,O)},delay:30*(S?r:Mo.length-r),open:S,tooltipPlacement:oe,id:`${Co}-action-${r}`})}),Ko={transition:X,...Q},qo={transition:Y,...q},ko={slots:Ko,slotProps:qo},[Jo,Qo]=J("root",{elementType:ye,externalForwardedProps:{...ko,...L},ownerState:f,ref:i,className:U(b.root,T),additionalProps:{role:"presentation"},getSlotProps:n=>({...n,onKeyDown:r=>{n.onKeyDown?.(r),Wo(r)},onBlur:r=>{n.onBlur?.(r),Ro(r)},onFocus:r=>{n.onFocus?.(r),Lo(r)},onMouseEnter:r=>{n.onMouseEnter?.(r),Lo(r)},onMouseLeave:r=>{n.onMouseLeave?.(r),Ro(r)}})}),[Xo,Yo]=J("transition",{elementType:be,externalForwardedProps:ko,ownerState:f});return e.jsxs(Jo,{...Qo,children:[e.jsx(Xo,{in:!I,timeout:oo,unmountOnExit:!0,...Yo,children:e.jsx(Te,{color:"primary","aria-label":P,"aria-haspopup":"true","aria-expanded":S,"aria-controls":`${Co}-actions`,...x,onClick:Uo,className:U(b.fab,x.className),ref:Ho,ownerState:f,children:p.isValidElement(w)&&pe(w,["SpeedDialIcon"])?p.cloneElement(w,{open:S}):w})}),e.jsx(we,{id:`${Co}-actions`,role:"menu","aria-orientation":eo(v),className:U(b.actions,!S&&b.actionsClosed),ownerState:f,children:_o})]})});function ve(o){return jo("MuiSpeedDialAction",o)}const yo=wo("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),Ie=o=>{const{open:t,tooltipPlacement:i,classes:a}=o,l={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${_(i)}`,!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return vo(l,ve,a)},Ce=Z(zo,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.fab,!i.open&&t.fabClosed]}})(N(({theme:o})=>({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:te(o.palette.background.paper,.15)},transition:`${o.transitions.create("transform",{duration:o.transitions.duration.shorter})}, opacity 0.8s`,opacity:1,variants:[{props:({ownerState:t})=>!t.open,style:{opacity:0,transform:"scale(0)"}}]}))),Pe=Z("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.staticTooltip,!i.open&&t.staticTooltipClosed,t[`tooltipPlacement${_(i.tooltipPlacement)}`]]}})(N(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${yo.staticTooltipLabel}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},variants:[{props:({ownerState:t})=>!t.open,style:{[`& .${yo.staticTooltipLabel}`]:{opacity:0,transform:"scale(0.5)"}}},{props:{tooltipPlacement:"left"},style:{[`& .${yo.staticTooltipLabel}`]:{transformOrigin:"100% 50%",right:"100%",marginRight:8}}},{props:{tooltipPlacement:"right"},style:{[`& .${yo.staticTooltipLabel}`]:{transformOrigin:"0% 50%",left:"100%",marginLeft:8}}}]}))),Ae=Z("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(o,t)=>t.staticTooltipLabel})(N(({theme:o})=>({position:"absolute",...o.typography.body1,backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"}))),Re=p.forwardRef(function(t,i){const a=To({props:t,name:"MuiSpeedDialAction"}),{className:l,delay:u=0,FabProps:P={},icon:g,id:x,open:y,TooltipClasses:T,tooltipOpen:v=!1,tooltipPlacement:I="left",tooltipTitle:w,slots:k={},slotProps:d={},...E}=a,j={...a,tooltipPlacement:I},F=Ie(j),R={slots:k,slotProps:{fab:P,...d,tooltip:me(typeof d.tooltip=="function"?d.tooltip(j):d.tooltip,{title:w,open:v,placement:I,classes:T})}},[C,G]=p.useState(R.slotProps.tooltip?.open),$=()=>{G(!1)},Q=()=>{G(!0)},q={transitionDelay:`${u}ms`},[X,Y]=J("fab",{elementType:Ce,externalForwardedProps:R,ownerState:j,shouldForwardComponentProp:!0,className:U(F.fab,l),additionalProps:{style:q,tabIndex:-1,role:"menuitem",size:"small"}}),[oo,L]=J("tooltip",{elementType:ue,externalForwardedProps:R,shouldForwardComponentProp:!0,ref:i,additionalProps:{id:x},ownerState:j,getSlotProps:H=>({...H,onClose:V=>{H.onClose?.(V),$()},onOpen:V=>{H.onOpen?.(V),Q()}})}),[S,c]=J("staticTooltip",{elementType:Pe,externalForwardedProps:R,ownerState:j,ref:i,className:F.staticTooltip,additionalProps:{id:x}}),[f,b]=J("staticTooltipLabel",{elementType:Ae,externalForwardedProps:R,ownerState:j,className:F.staticTooltipLabel,additionalProps:{style:q,id:`${x}-label`}}),B=e.jsx(X,{...Y,children:g});return L.open?e.jsxs(S,{...c,...E,children:[e.jsx(f,{...b,children:L.title}),p.cloneElement(B,{"aria-labelledby":`${x}-label`})]}):(!y&&C&&G(!1),e.jsx(oo,{...L,title:L.title,open:y&&C,placement:L.placement,classes:L.classes,...E,children:B}))}),Le=K(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function Me(o){return jo("MuiSpeedDialIcon",o)}const M=wo("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),ke=o=>{const{classes:t,open:i,openIcon:a}=o;return vo({root:["root"],icon:["icon",i&&"iconOpen",a&&i&&"iconWithOpenIconOpen"],openIcon:["openIcon",i&&"openIconOpen"]},Me,t)},Ee=Z("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[{[`& .${M.icon}`]:t.icon},{[`& .${M.icon}`]:i.open&&t.iconOpen},{[`& .${M.icon}`]:i.open&&i.openIcon&&t.iconWithOpenIconOpen},{[`& .${M.openIcon}`]:t.openIcon},{[`& .${M.openIcon}`]:i.open&&t.openIconOpen},t.root]}})(N(({theme:o})=>({height:24,[`& .${M.icon}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},[`& .${M.openIcon}`]:{position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},variants:[{props:({ownerState:t})=>t.open,style:{[`& .${M.icon}`]:{transform:"rotate(45deg)"}}},{props:({ownerState:t})=>t.open&&t.openIcon,style:{[`& .${M.icon}`]:{opacity:0}}},{props:({ownerState:t})=>t.open,style:{[`& .${M.openIcon}`]:{transform:"rotate(0deg)",opacity:1}}}]}))),No=p.forwardRef(function(t,i){const a=To({props:t,name:"MuiSpeedDialIcon"}),{className:l,icon:u,open:P,openIcon:g,...x}=a,y=a,T=ke(y);function v(I,w){return p.isValidElement(I)?p.cloneElement(I,{className:w}):I}return e.jsxs(Ee,{className:U(T.root,l),ref:i,ownerState:y,...x,children:[g?v(g,T.openIcon):null,u?v(u,T.icon):e.jsx(Le,{className:T.icon})]})});No.muiName="SpeedDialIcon";const m=Ao.forwardRef((o,t)=>e.jsx(je,{ref:t,...o}));m.displayName="SpeedDial";m.__docgenInfo={description:`SpeedDial component

When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.

@param props - SpeedDial component props
@returns SpeedDial component`,methods:[],displayName:"SpeedDial",props:{ariaLabel:{required:!0,tsType:{name:"string"},description:"The aria-label of the button element"}},composes:["MuiSpeedDialProps"]};const s=Ao.forwardRef((o,t)=>e.jsx(Re,{ref:t,...o}));s.displayName="SpeedDialAction";s.__docgenInfo={description:`SpeedDialAction component

Individual action button for SpeedDial.

@param props - SpeedDialAction component props
@returns SpeedDialAction component`,methods:[],displayName:"SpeedDialAction",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display in the SpeedDial action"},tooltipTitle:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label to display in the tooltip"}},composes:["MuiSpeedDialActionProps"]};const h=Ao.forwardRef((o,t)=>e.jsx(No,{ref:t,...o}));h.displayName="SpeedDialIcon";h.__docgenInfo={description:`SpeedDialIcon component

Icon for the SpeedDial Floating Action Button that animates when opened/closed.

@param props - SpeedDialIcon component props
@returns SpeedDialIcon component`,methods:[],displayName:"SpeedDialIcon",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display"},openIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display when the SpeedDial is open"},sx:{required:!1,tsType:{name:"object"},description:"Override or extend the styles applied to the component"}},composes:["MuiSpeedDialIconProps"]};const fo=K(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined"),ho=K(e.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),So=K(e.jsx("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print"),Io=K(e.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"}),"Share"),Zo=K(e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),$e=K(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),ct={title:"Components/Molecules/SpeedDial",component:m,tags:["autodocs"],argTypes:{direction:{control:"select",options:["up","down","left","right"],description:"The direction the actions open"},hidden:{control:"boolean",description:"If true, the SpeedDial is hidden"},open:{control:"boolean",description:"If true, the component is shown"}},parameters:{docs:{description:{component:"When pressed, a floating action button can display three to six related actions in the form of a Speed Dial."}}}},A=[{icon:e.jsx(fo,{}),name:"Copy"},{icon:e.jsx(ho,{}),name:"Save"},{icon:e.jsx(So,{}),name:"Print"},{icon:e.jsx(Io,{}),name:"Share"}],to={render:()=>e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(m,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:o.name},o.name))})})},io={render:function(){const[t,i]=p.useState(!1),a=()=>i(!0),l=()=>i(!1);return e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(m,{ariaLabel:"SpeedDial controlled",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),onClose:l,onOpen:a,open:t,children:A.map(u=>e.jsx(s,{icon:u.icon,tooltipTitle:u.name,onClick:l},u.name))})})}},no={render:()=>e.jsxs(D,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1,position:"relative"},children:[e.jsx(m,{ariaLabel:"SpeedDial direction up",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),direction:"up",children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (up)`},o.name))}),e.jsx(m,{ariaLabel:"SpeedDial direction down",sx:{position:"absolute",top:16,right:16},icon:e.jsx(h,{}),direction:"down",children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (down)`},o.name))}),e.jsx(m,{ariaLabel:"SpeedDial direction left",sx:{position:"absolute",bottom:16,left:16},icon:e.jsx(h,{}),direction:"left",children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (left)`,tooltipPlacement:"right"},o.name))}),e.jsx(m,{ariaLabel:"SpeedDial direction right",sx:{position:"absolute",bottom:16,left:"50%"},icon:e.jsx(h,{}),direction:"right",children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (right)`,tooltipPlacement:"left"},o.name))})]})},ao={render:()=>e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(m,{ariaLabel:"SpeedDial with custom icon",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(Oo,{}),children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:o.name},o.name))})})},so={render:()=>e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(m,{ariaLabel:"SpeedDial with custom open icon",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{icon:e.jsx($e,{}),openIcon:e.jsx(Zo,{})}),children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:o.name},o.name))})})},ro={render:()=>e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsx(m,{ariaLabel:"SpeedDial with persistent tooltips",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),children:A.map(o=>e.jsx(s,{icon:o.icon,tooltipTitle:o.name,tooltipOpen:!0},o.name))})})},lo={render:function(){const[t,i]=p.useState(!1);return e.jsxs(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:[e.jsx(D,{sx:{mb:2},children:e.jsxs("button",{onClick:()=>i(!t),children:[t?"Show":"Hide"," SpeedDial"]})}),e.jsx(m,{ariaLabel:"SpeedDial hidden example",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),hidden:t,children:A.map(a=>e.jsx(s,{icon:a.icon,tooltipTitle:a.name},a.name))})]})}},co={render:function(){const[t,i]=p.useState(""),a=l=>{i(`${l} clicked!`),setTimeout(()=>i(""),2e3)};return e.jsxs(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:[t&&e.jsx(D,{sx:{mb:2,p:1,bgcolor:"primary.light",color:"white",borderRadius:1},children:t}),e.jsx(m,{ariaLabel:"SpeedDial with actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),children:A.map(l=>e.jsx(s,{icon:l.icon,tooltipTitle:l.name,onClick:()=>a(l.name)},l.name))})]})}},po={render:()=>e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(m,{ariaLabel:"SpeedDial with disabled actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),children:[e.jsx(s,{icon:e.jsx(fo,{}),tooltipTitle:"Copy (disabled)",disabled:!0}),e.jsx(s,{icon:e.jsx(ho,{}),tooltipTitle:"Save"}),e.jsx(s,{icon:e.jsx(So,{}),tooltipTitle:"Print (disabled)",disabled:!0}),e.jsx(s,{icon:e.jsx(Io,{}),tooltipTitle:"Share"})]})})},mo={render:()=>e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(m,{ariaLabel:"SpeedDial with different tooltip placements",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),direction:"up",children:[e.jsx(s,{icon:e.jsx(fo,{}),tooltipTitle:"Left (default)",tooltipPlacement:"left"}),e.jsx(s,{icon:e.jsx(ho,{}),tooltipTitle:"Right",tooltipPlacement:"right"}),e.jsx(s,{icon:e.jsx(So,{}),tooltipTitle:"Top",tooltipPlacement:"top"}),e.jsx(s,{icon:e.jsx(Io,{}),tooltipTitle:"Bottom",tooltipPlacement:"bottom"})]})})},uo={render:()=>e.jsx(D,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(m,{ariaLabel:"SpeedDial with 3 actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),children:[e.jsx(s,{icon:e.jsx(fo,{}),tooltipTitle:"Copy"}),e.jsx(s,{icon:e.jsx(ho,{}),tooltipTitle:"Save"}),e.jsx(s,{icon:e.jsx(So,{}),tooltipTitle:"Print"})]})})},xo={render:()=>e.jsx(D,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1},children:e.jsxs(m,{ariaLabel:"SpeedDial with 6 actions",sx:{position:"absolute",bottom:16,right:16},icon:e.jsx(h,{}),children:[e.jsx(s,{icon:e.jsx(fo,{}),tooltipTitle:"Copy"}),e.jsx(s,{icon:e.jsx(ho,{}),tooltipTitle:"Save"}),e.jsx(s,{icon:e.jsx(So,{}),tooltipTitle:"Print"}),e.jsx(s,{icon:e.jsx(Io,{}),tooltipTitle:"Share"}),e.jsx(s,{icon:e.jsx(Zo,{}),tooltipTitle:"Edit"}),e.jsx(s,{icon:e.jsx(Oo,{}),tooltipTitle:"Favorite"})]})})};to.parameters={...to.parameters,docs:{...to.parameters?.docs,source:{originalSource:`{
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
}`,...to.parameters?.docs?.source},description:{story:"Default SpeedDial opening upward",...to.parameters?.docs?.description}}};io.parameters={...io.parameters,docs:{...io.parameters?.docs,source:{originalSource:`{
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
}`,...io.parameters?.docs?.source},description:{story:"Controlled SpeedDial",...io.parameters?.docs?.description}}};no.parameters={...no.parameters,docs:{...no.parameters?.docs,source:{originalSource:`{
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
}`,...no.parameters?.docs?.source},description:{story:"SpeedDial with different directions",...no.parameters?.docs?.description}}};ao.parameters={...ao.parameters,docs:{...ao.parameters?.docs,source:{originalSource:`{
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
}`,...ao.parameters?.docs?.source},description:{story:"Custom icon",...ao.parameters?.docs?.description}}};so.parameters={...so.parameters,docs:{...so.parameters?.docs,source:{originalSource:`{
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
}`,...so.parameters?.docs?.source},description:{story:"Custom open icon",...so.parameters?.docs?.description}}};ro.parameters={...ro.parameters,docs:{...ro.parameters?.docs,source:{originalSource:`{
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
}`,...ro.parameters?.docs?.source},description:{story:"Persistent tooltips",...ro.parameters?.docs?.description}}};lo.parameters={...lo.parameters,docs:{...lo.parameters?.docs,source:{originalSource:`{
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
}`,...lo.parameters?.docs?.source},description:{story:"Hidden SpeedDial (shows/hides on scroll simulation)",...lo.parameters?.docs?.description}}};co.parameters={...co.parameters,docs:{...co.parameters?.docs,source:{originalSource:`{
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
}`,...co.parameters?.docs?.source},description:{story:"With action click handlers",...co.parameters?.docs?.description}}};po.parameters={...po.parameters,docs:{...po.parameters?.docs,source:{originalSource:`{
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
}`,...po.parameters?.docs?.source},description:{story:"Disabled actions",...po.parameters?.docs?.description}}};mo.parameters={...mo.parameters,docs:{...mo.parameters?.docs,source:{originalSource:`{
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
}`,...mo.parameters?.docs?.source},description:{story:"Different tooltip placements",...mo.parameters?.docs?.description}}};uo.parameters={...uo.parameters,docs:{...uo.parameters?.docs,source:{originalSource:`{
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
}`,...uo.parameters?.docs?.source},description:{story:"Minimal actions (3 actions)",...uo.parameters?.docs?.description}}};xo.parameters={...xo.parameters,docs:{...xo.parameters?.docs,source:{originalSource:`{
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
}`,...xo.parameters?.docs?.source},description:{story:"Maximum actions (6 actions)",...xo.parameters?.docs?.description}}};const pt=["Default","Controlled","Directions","CustomIcon","CustomOpenIcon","PersistentTooltips","Hidden","WithActions","DisabledActions","TooltipPlacements","MinimalActions","MaximumActions"];export{io as Controlled,ao as CustomIcon,so as CustomOpenIcon,to as Default,no as Directions,po as DisabledActions,lo as Hidden,xo as MaximumActions,uo as MinimalActions,ro as PersistentTooltips,mo as TooltipPlacements,co as WithActions,pt as __namedExportsOrder,ct as default};
