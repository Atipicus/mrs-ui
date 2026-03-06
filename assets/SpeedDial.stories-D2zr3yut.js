import{g as So,r as p,a as Do,j as t,E as H,P as e,N as ee,a6 as te,aa as ie,R as Ao}from"./iframe-m0FcCUbT.js";import{g as go,c as G,a as yo,s as k,r as ne,m as F}from"./memoTheme-C11nCEJ1.js";import{u as ae}from"./useTheme--qrtAMJV.js";import{u as K}from"./useSlot-BPbjla4P.js";import{u as se}from"./useControlled-Cm6cFOSH.js";import{B as re,u as le}from"./ButtonBase-Bd5szlVj.js";import{u as ce}from"./useForkRef-DeUHlcp-.js";import{Z as pe}from"./Zoom-CD5Fz-Tm.js";import{i as de}from"./isMuiElement-CG90bCKT.js";import{c as me}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{m as ue}from"./mergeSlotProps-Bkt73wcY.js";import{T as fe}from"./Tooltip-Bw8KuPti.js";import{c as V}from"./createSvgIcon-DzjuuRaM.js";import{F as No}from"./Favorite-Bl1e7orV.js";import{B as h}from"./Box-DSq61m1Q.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./utils-e4gBpPL7.js";import"./index-CMwIBjt_.js";import"./index-DWLUMx4m.js";import"./getReactElementRef-DAzX-jKI.js";import"./Grow-DT4E6Ksq.js";import"./Popper-Bro-exFz.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BROk4iQM.js";import"./HTMLElementType-Bpqya3bH.js";import"./useSlotProps-RklMYb_o.js";function xe(o){return So("MuiFab",o)}const Bo=go("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),he=o=>{const{color:i,variant:n,classes:r,size:c}=o,f={root:["root",n,`size${H(c)}`,i==="inherit"?"colorInherit":i]},I=yo(f,xe,r);return{...r,...I}},be=k(re,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>ne(o)||o==="classes",overridesResolver:(o,i)=>{const{ownerState:n}=o;return[i.root,i[n.variant],i[`size${H(n.size)}`],n.color==="inherit"&&i.colorInherit,i[H(n.size)],i[n.color]]}})(F(({theme:o})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:o.palette.getContrastText?.(o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${Bo.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),F(({theme:o})=>({variants:[...Object.entries(o.palette).filter(me(["dark","contrastText"])).map(([i])=>({props:{color:i},style:{color:(o.vars||o).palette[i].contrastText,backgroundColor:(o.vars||o).palette[i].main,"&:hover":{backgroundColor:(o.vars||o).palette[i].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[i].main}}}}))]})),F(({theme:o})=>({[`&.${Bo.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}))),Oo=p.forwardRef(function(i,n){const r=Do({props:i,name:"MuiFab"}),{children:c,className:f,color:I="default",component:v="button",disabled:x=!1,disableFocusRipple:D=!1,focusVisibleClassName:g,size:y="large",variant:T="circular",...j}=r,$={...r,color:I,component:v,disabled:x,disableFocusRipple:D,size:y,variant:T},m=he($);return t.jsx(be,{className:G(m.root,f),component:v,disabled:x,focusRipple:!D,focusVisibleClassName:G(m.focusVisible,g),ownerState:$,ref:n,...j,classes:m,children:c})});Oo.propTypes={children:e.node,classes:e.object,className:e.string,color:e.oneOfType([e.oneOf(["default","error","info","inherit","primary","secondary","success","warning"]),e.string]),component:e.elementType,disabled:e.bool,disableFocusRipple:e.bool,disableRipple:e.bool,focusVisibleClassName:e.string,href:e.string,size:e.oneOfType([e.oneOf(["small","medium","large"]),e.string]),sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),variant:e.oneOfType([e.oneOf(["circular","extended"]),e.string])};function Se(o){return So("MuiSpeedDial",o)}const xo=go("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),De=o=>{const{classes:i,open:n,direction:r}=o,c={root:["root",`direction${H(r)}`],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return yo(c,Se,i)};function J(o){if(o==="up"||o==="down")return"vertical";if(o==="right"||o==="left")return"horizontal"}const M=32,ho=16,ge=k("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(o,i)=>{const{ownerState:n}=o;return[i.root,i[`direction${H(n.direction)}`]]}})(F(({theme:o})=>({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none",variants:[{props:{direction:"up"},style:{flexDirection:"column-reverse",[`& .${xo.actions}`]:{flexDirection:"column-reverse",marginBottom:-M,paddingBottom:ho+M}}},{props:{direction:"down"},style:{flexDirection:"column",[`& .${xo.actions}`]:{flexDirection:"column",marginTop:-M,paddingTop:ho+M}}},{props:{direction:"left"},style:{flexDirection:"row-reverse",[`& .${xo.actions}`]:{flexDirection:"row-reverse",marginRight:-M,paddingRight:ho+M}}},{props:{direction:"right"},style:{flexDirection:"row",[`& .${xo.actions}`]:{flexDirection:"row",marginLeft:-M,paddingLeft:ho+M}}}]}))),ye=k(Oo,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(o,i)=>i.fab})({pointerEvents:"auto"}),Te=k("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(o,i)=>{const{ownerState:n}=o;return[i.actions,!n.open&&i.actionsClosed]}})({display:"flex",pointerEvents:"auto",variants:[{props:({ownerState:o})=>!o.open,style:{transition:"top 0s linear 0.2s",pointerEvents:"none"}}]}),zo=p.forwardRef(function(i,n){const r=Do({props:i,name:"MuiSpeedDial"}),c=ae(),f={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:I,FabProps:{ref:v,...x}={},children:D,className:g,direction:y="up",hidden:T=!1,icon:j,onBlur:$,onClose:m,onFocus:_,onKeyDown:C,onMouseEnter:W,onMouseLeave:P,onOpen:B,open:q,openIcon:Lo,slots:jo={},slotProps:uo={},TransitionComponent:wo,TransitionProps:Io,transitionDuration:vo=f,...A}=r,[b,O]=se({controlled:q,default:!1,name:"SpeedDial",state:"open"}),N={...r,open:b,direction:y},U=De(N),R=le(),z=p.useRef(0),E=p.useRef(),Z=p.useRef([]);Z.current=[Z.current[0]];const Go=p.useCallback(a=>{Z.current[0]=a},[]),Ho=ce(v,Go),Vo=(a,l)=>L=>{Z.current[a+1]=L,l&&l(L)},Wo=a=>{C&&C(a);const l=a.key.replace("Arrow","").toLowerCase(),{current:L=l}=E;if(a.key==="Escape"){O(!1),Z.current[0].focus(),m&&m(a,"escapeKeyDown");return}if(J(l)===J(L)&&J(l)!==void 0){a.preventDefault();const Po=l===L?1:-1,fo=te(z.current+Po,0,Z.current.length-1);Z.current[fo].focus(),z.current=fo,E.current=L}};p.useEffect(()=>{b||(z.current=0,E.current=void 0)},[b]);const Mo=a=>{a.type==="mouseleave"&&P&&P(a),a.type==="blur"&&$&&$(a),R.clear(),a.type==="blur"?R.start(0,()=>{O(!1),m&&m(a,"blur")}):(O(!1),m&&m(a,"mouseLeave"))},Uo=a=>{x.onClick&&x.onClick(a),R.clear(),b?(O(!1),m&&m(a,"toggle")):(O(!0),B&&B(a,"toggle"))},Fo=a=>{a.type==="mouseenter"&&W&&W(a),a.type==="focus"&&_&&_(a),R.clear(),b||R.start(0,()=>{O(!0),B&&B(a,{focus:"focus",mouseenter:"mouseEnter"}[a.type])})},Co=I.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ko=p.Children.toArray(D).filter(a=>(ee.isFragment(a)&&console.error(["MUI: The SpeedDial component doesn't accept a Fragment as a child.","Consider providing an array instead."].join(`
`)),p.isValidElement(a))),Ko=ko.map((a,l)=>{const{FabProps:{ref:L,...Po}={},tooltipPlacement:fo}=a.props,oe=fo||(J(y)==="vertical"?"left":"top");return p.cloneElement(a,{FabProps:{...Po,ref:Vo(l,L)},delay:30*(b?l:ko.length-l),open:b,tooltipPlacement:oe,id:`${Co}-action-${l}`})}),_o={transition:wo,...jo},qo={transition:Io,...uo},$o={slots:_o,slotProps:qo},[Jo,Qo]=K("root",{elementType:ge,externalForwardedProps:{...$o,...A},ownerState:N,ref:n,className:G(U.root,g),additionalProps:{role:"presentation"},getSlotProps:a=>({...a,onKeyDown:l=>{a.onKeyDown?.(l),Wo(l)},onBlur:l=>{a.onBlur?.(l),Mo(l)},onFocus:l=>{a.onFocus?.(l),Fo(l)},onMouseEnter:l=>{a.onMouseEnter?.(l),Fo(l)},onMouseLeave:l=>{a.onMouseLeave?.(l),Mo(l)}})}),[Xo,Yo]=K("transition",{elementType:pe,externalForwardedProps:$o,ownerState:N});return t.jsxs(Jo,{...Qo,children:[t.jsx(Xo,{in:!T,timeout:vo,unmountOnExit:!0,...Yo,children:t.jsx(ye,{color:"primary","aria-label":I,"aria-haspopup":"true","aria-expanded":b,"aria-controls":`${Co}-actions`,...x,onClick:Uo,className:G(U.fab,x.className),ref:Ho,ownerState:N,children:p.isValidElement(j)&&de(j,["SpeedDialIcon"])?p.cloneElement(j,{open:b}):j})}),t.jsx(Te,{id:`${Co}-actions`,role:"menu","aria-orientation":J(y),className:G(U.actions,!b&&U.actionsClosed),ownerState:N,children:Ko})]})});zo.propTypes={ariaLabel:e.string.isRequired,children:e.node,classes:e.object,className:e.string,direction:e.oneOf(["down","left","right","up"]),FabProps:e.object,hidden:e.bool,icon:e.node,onBlur:e.func,onClose:e.func,onFocus:e.func,onKeyDown:e.func,onMouseEnter:e.func,onMouseLeave:e.func,onOpen:e.func,open:e.bool,openIcon:e.node,slotProps:e.shape({root:e.oneOfType([e.func,e.object]),transition:e.oneOfType([e.func,e.object])}),slots:e.shape({root:e.elementType,transition:e.elementType}),sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),TransitionComponent:e.elementType,transitionDuration:e.oneOfType([e.number,e.shape({appear:e.number,enter:e.number,exit:e.number})]),TransitionProps:e.object};function je(o){return So("MuiSpeedDialAction",o)}const bo=go("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),we=o=>{const{open:i,tooltipPlacement:n,classes:r}=o,c={fab:["fab",!i&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${H(n)}`,!i&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return yo(c,je,r)},Ie=k(Oo,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(o,i)=>{const{ownerState:n}=o;return[i.fab,!n.open&&i.fabClosed]}})(F(({theme:o})=>({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:ie(o.palette.background.paper,.15)},transition:`${o.transitions.create("transform",{duration:o.transitions.duration.shorter})}, opacity 0.8s`,opacity:1,variants:[{props:({ownerState:i})=>!i.open,style:{opacity:0,transform:"scale(0)"}}]}))),ve=k("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(o,i)=>{const{ownerState:n}=o;return[i.staticTooltip,!n.open&&i.staticTooltipClosed,i[`tooltipPlacement${H(n.tooltipPlacement)}`]]}})(F(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${bo.staticTooltipLabel}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},variants:[{props:({ownerState:i})=>!i.open,style:{[`& .${bo.staticTooltipLabel}`]:{opacity:0,transform:"scale(0.5)"}}},{props:{tooltipPlacement:"left"},style:{[`& .${bo.staticTooltipLabel}`]:{transformOrigin:"100% 50%",right:"100%",marginRight:8}}},{props:{tooltipPlacement:"right"},style:{[`& .${bo.staticTooltipLabel}`]:{transformOrigin:"0% 50%",left:"100%",marginLeft:8}}}]}))),Ce=k("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(o,i)=>i.staticTooltipLabel})(F(({theme:o})=>({position:"absolute",...o.typography.body1,backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"}))),Eo=p.forwardRef(function(i,n){const r=Do({props:i,name:"MuiSpeedDialAction"}),{className:c,delay:f=0,FabProps:I={},icon:v,id:x,open:D,TooltipClasses:g,tooltipOpen:y=!1,tooltipPlacement:T="left",tooltipTitle:j,slots:$={},slotProps:m={},..._}=r,C={...r,tooltipPlacement:T},W=we(C),P={slots:$,slotProps:{fab:I,...m,tooltip:ue(typeof m.tooltip=="function"?m.tooltip(C):m.tooltip,{title:j,open:y,placement:T,classes:g})}},[B,q]=p.useState(P.slotProps.tooltip?.open),Lo=()=>{q(!1)},jo=()=>{q(!0)},uo={transitionDelay:`${f}ms`},[wo,Io]=K("fab",{elementType:Ie,externalForwardedProps:P,ownerState:C,shouldForwardComponentProp:!0,className:G(W.fab,c),additionalProps:{style:uo,tabIndex:-1,role:"menuitem",size:"small"}}),[vo,A]=K("tooltip",{elementType:fe,externalForwardedProps:P,shouldForwardComponentProp:!0,ref:n,additionalProps:{id:x},ownerState:C,getSlotProps:z=>({...z,onClose:E=>{z.onClose?.(E),Lo()},onOpen:E=>{z.onOpen?.(E),jo()}})}),[b,O]=K("staticTooltip",{elementType:ve,externalForwardedProps:P,ownerState:C,ref:n,className:W.staticTooltip,additionalProps:{id:x}}),[N,U]=K("staticTooltipLabel",{elementType:Ce,externalForwardedProps:P,ownerState:C,className:W.staticTooltipLabel,additionalProps:{style:uo,id:`${x}-label`}}),R=t.jsx(wo,{...Io,children:v});return A.open?t.jsxs(b,{...O,..._,children:[t.jsx(N,{...U,children:A.title}),p.cloneElement(R,{"aria-labelledby":`${x}-label`})]}):(!D&&B&&q(!1),t.jsx(vo,{...A,title:A.title,open:D&&B,placement:A.placement,classes:A.classes,..._,children:R}))});Eo.propTypes={classes:e.object,className:e.string,delay:e.number,FabProps:e.object,icon:e.node,id:e.string,open:e.bool,slotProps:e.shape({fab:e.oneOfType([e.func,e.object]),staticTooltip:e.oneOfType([e.func,e.object]),staticTooltipLabel:e.oneOfType([e.func,e.object]),tooltip:e.oneOfType([e.func,e.object])}),slots:e.shape({fab:e.elementType,staticTooltip:e.elementType,staticTooltipLabel:e.elementType,tooltip:e.elementType}),sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),TooltipClasses:e.object,tooltipOpen:e.bool,tooltipPlacement:e.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),tooltipTitle:e.node};const Pe=V(t.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function Ae(o){return So("MuiSpeedDialIcon",o)}const w=go("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),Oe=o=>{const{classes:i,open:n,openIcon:r}=o;return yo({root:["root"],icon:["icon",n&&"iconOpen",r&&n&&"iconWithOpenIconOpen"],openIcon:["openIcon",n&&"openIconOpen"]},Ae,i)},Re=k("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(o,i)=>{const{ownerState:n}=o;return[{[`& .${w.icon}`]:i.icon},{[`& .${w.icon}`]:n.open&&i.iconOpen},{[`& .${w.icon}`]:n.open&&n.openIcon&&i.iconWithOpenIconOpen},{[`& .${w.openIcon}`]:i.openIcon},{[`& .${w.openIcon}`]:n.open&&i.openIconOpen},i.root]}})(F(({theme:o})=>({height:24,[`& .${w.icon}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},[`& .${w.openIcon}`]:{position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},variants:[{props:({ownerState:i})=>i.open,style:{[`& .${w.icon}`]:{transform:"rotate(45deg)"}}},{props:({ownerState:i})=>i.open&&i.openIcon,style:{[`& .${w.icon}`]:{opacity:0}}},{props:({ownerState:i})=>i.open,style:{[`& .${w.openIcon}`]:{transform:"rotate(0deg)",opacity:1}}}]}))),Ro=p.forwardRef(function(i,n){const r=Do({props:i,name:"MuiSpeedDialIcon"}),{className:c,icon:f,open:I,openIcon:v,...x}=r,D=r,g=Oe(D);function y(T,j){return p.isValidElement(T)?p.cloneElement(T,{className:j}):T}return t.jsxs(Re,{className:G(g.root,c),ref:n,ownerState:D,...x,children:[v?y(v,g.openIcon):null,f?y(f,g.icon):t.jsx(Pe,{className:g.icon})]})});Ro.propTypes={classes:e.object,className:e.string,icon:e.node,open:e.bool,openIcon:e.node,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object])};Ro.muiName="SpeedDialIcon";const d=Ao.forwardRef((o,i)=>t.jsx(zo,{ref:i,...o}));d.displayName="SpeedDial";d.__docgenInfo={description:`SpeedDial component

When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.

@param props - SpeedDial component props
@returns SpeedDial component`,methods:[],displayName:"SpeedDial",props:{ariaLabel:{required:!0,tsType:{name:"string"},description:"The aria-label of the button element"}},composes:["MuiSpeedDialProps"]};const s=Ao.forwardRef((o,i)=>t.jsx(Eo,{ref:i,...o}));s.displayName="SpeedDialAction";s.__docgenInfo={description:`SpeedDialAction component

Individual action button for SpeedDial.

@param props - SpeedDialAction component props
@returns SpeedDialAction component`,methods:[],displayName:"SpeedDialAction",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display in the SpeedDial action"},tooltipTitle:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label to display in the tooltip"}},composes:["MuiSpeedDialActionProps"]};const u=Ao.forwardRef((o,i)=>t.jsx(Ro,{ref:i,...o}));u.displayName="SpeedDialIcon";u.__docgenInfo={description:`SpeedDialIcon component

Icon for the SpeedDial Floating Action Button that animates when opened/closed.

@param props - SpeedDialIcon component props
@returns SpeedDialIcon component`,methods:[],displayName:"SpeedDialIcon",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display"},openIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display when the SpeedDial is open"},sx:{required:!1,tsType:{name:"object"},description:"Override or extend the styles applied to the component"}},composes:["MuiSpeedDialIconProps"]};const co=V(t.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined"),po=V(t.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save"),mo=V(t.jsx("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print"),To=V(t.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"}),"Share"),Zo=V(t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),Le=V(t.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),pt={title:"Components/Molecules/SpeedDial",component:d,tags:["autodocs"],argTypes:{direction:{control:"select",options:["up","down","left","right"],description:"The direction the actions open"},hidden:{control:"boolean",description:"If true, the SpeedDial is hidden"},open:{control:"boolean",description:"If true, the component is shown"}},parameters:{docs:{description:{component:"When pressed, a floating action button can display three to six related actions in the form of a Speed Dial."}}}},S=[{icon:t.jsx(co,{}),name:"Copy"},{icon:t.jsx(po,{}),name:"Save"},{icon:t.jsx(mo,{}),name:"Print"},{icon:t.jsx(To,{}),name:"Share"}],Q={render:()=>t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsx(d,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:o.name},o.name))})})},X={render:function(){const[i,n]=p.useState(!1),r=()=>n(!0),c=()=>n(!1);return t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsx(d,{ariaLabel:"SpeedDial controlled",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),onClose:c,onOpen:r,open:i,children:S.map(f=>t.jsx(s,{icon:f.icon,tooltipTitle:f.name,onClick:c},f.name))})})}},Y={render:()=>t.jsxs(h,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1,position:"relative"},children:[t.jsx(d,{ariaLabel:"SpeedDial direction up",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),direction:"up",children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (up)`},o.name))}),t.jsx(d,{ariaLabel:"SpeedDial direction down",sx:{position:"absolute",top:16,right:16},icon:t.jsx(u,{}),direction:"down",children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (down)`},o.name))}),t.jsx(d,{ariaLabel:"SpeedDial direction left",sx:{position:"absolute",bottom:16,left:16},icon:t.jsx(u,{}),direction:"left",children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (left)`,tooltipPlacement:"right"},o.name))}),t.jsx(d,{ariaLabel:"SpeedDial direction right",sx:{position:"absolute",bottom:16,left:"50%"},icon:t.jsx(u,{}),direction:"right",children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:`${o.name} (right)`,tooltipPlacement:"left"},o.name))})]})},oo={render:()=>t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsx(d,{ariaLabel:"SpeedDial with custom icon",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(No,{}),children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:o.name},o.name))})})},eo={render:()=>t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsx(d,{ariaLabel:"SpeedDial with custom open icon",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{icon:t.jsx(Le,{}),openIcon:t.jsx(Zo,{})}),children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:o.name},o.name))})})},to={render:()=>t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsx(d,{ariaLabel:"SpeedDial with persistent tooltips",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),children:S.map(o=>t.jsx(s,{icon:o.icon,tooltipTitle:o.name,tooltipOpen:!0},o.name))})})},io={render:function(){const[i,n]=p.useState(!1);return t.jsxs(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:[t.jsx(h,{sx:{mb:2},children:t.jsxs("button",{onClick:()=>n(!i),children:[i?"Show":"Hide"," SpeedDial"]})}),t.jsx(d,{ariaLabel:"SpeedDial hidden example",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),hidden:i,children:S.map(r=>t.jsx(s,{icon:r.icon,tooltipTitle:r.name},r.name))})]})}},no={render:function(){const[i,n]=p.useState(""),r=c=>{n(`${c} clicked!`),setTimeout(()=>n(""),2e3)};return t.jsxs(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:[i&&t.jsx(h,{sx:{mb:2,p:1,bgcolor:"primary.light",color:"white",borderRadius:1},children:i}),t.jsx(d,{ariaLabel:"SpeedDial with actions",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),children:S.map(c=>t.jsx(s,{icon:c.icon,tooltipTitle:c.name,onClick:()=>r(c.name)},c.name))})]})}},ao={render:()=>t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsxs(d,{ariaLabel:"SpeedDial with disabled actions",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),children:[t.jsx(s,{icon:t.jsx(co,{}),tooltipTitle:"Copy (disabled)",disabled:!0}),t.jsx(s,{icon:t.jsx(po,{}),tooltipTitle:"Save"}),t.jsx(s,{icon:t.jsx(mo,{}),tooltipTitle:"Print (disabled)",disabled:!0}),t.jsx(s,{icon:t.jsx(To,{}),tooltipTitle:"Share"})]})})},so={render:()=>t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsxs(d,{ariaLabel:"SpeedDial with different tooltip placements",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),direction:"up",children:[t.jsx(s,{icon:t.jsx(co,{}),tooltipTitle:"Left (default)",tooltipPlacement:"left"}),t.jsx(s,{icon:t.jsx(po,{}),tooltipTitle:"Right",tooltipPlacement:"right"}),t.jsx(s,{icon:t.jsx(mo,{}),tooltipTitle:"Top",tooltipPlacement:"top"}),t.jsx(s,{icon:t.jsx(To,{}),tooltipTitle:"Bottom",tooltipPlacement:"bottom"})]})})},ro={render:()=>t.jsx(h,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:t.jsxs(d,{ariaLabel:"SpeedDial with 3 actions",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),children:[t.jsx(s,{icon:t.jsx(co,{}),tooltipTitle:"Copy"}),t.jsx(s,{icon:t.jsx(po,{}),tooltipTitle:"Save"}),t.jsx(s,{icon:t.jsx(mo,{}),tooltipTitle:"Print"})]})})},lo={render:()=>t.jsx(h,{sx:{height:380,transform:"translateZ(0px)",flexGrow:1},children:t.jsxs(d,{ariaLabel:"SpeedDial with 6 actions",sx:{position:"absolute",bottom:16,right:16},icon:t.jsx(u,{}),children:[t.jsx(s,{icon:t.jsx(co,{}),tooltipTitle:"Copy"}),t.jsx(s,{icon:t.jsx(po,{}),tooltipTitle:"Save"}),t.jsx(s,{icon:t.jsx(mo,{}),tooltipTitle:"Print"}),t.jsx(s,{icon:t.jsx(To,{}),tooltipTitle:"Share"}),t.jsx(s,{icon:t.jsx(Zo,{}),tooltipTitle:"Edit"}),t.jsx(s,{icon:t.jsx(No,{}),tooltipTitle:"Favorite"})]})})};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"Default SpeedDial opening upward",...Q.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"Controlled SpeedDial",...X.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"SpeedDial with different directions",...Y.parameters?.docs?.description}}};oo.parameters={...oo.parameters,docs:{...oo.parameters?.docs,source:{originalSource:`{
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
}`,...oo.parameters?.docs?.source},description:{story:"Custom icon",...oo.parameters?.docs?.description}}};eo.parameters={...eo.parameters,docs:{...eo.parameters?.docs,source:{originalSource:`{
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
}`,...eo.parameters?.docs?.source},description:{story:"Custom open icon",...eo.parameters?.docs?.description}}};to.parameters={...to.parameters,docs:{...to.parameters?.docs,source:{originalSource:`{
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
}`,...to.parameters?.docs?.source},description:{story:"Persistent tooltips",...to.parameters?.docs?.description}}};io.parameters={...io.parameters,docs:{...io.parameters?.docs,source:{originalSource:`{
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
          <button onClick={() => setHidden(!hidden)}>{hidden ? 'Show' : 'Hide'} SpeedDial</button>
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
}`,...io.parameters?.docs?.source},description:{story:"Hidden SpeedDial (shows/hides on scroll simulation)",...io.parameters?.docs?.description}}};no.parameters={...no.parameters,docs:{...no.parameters?.docs,source:{originalSource:`{
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
}`,...no.parameters?.docs?.source},description:{story:"With action click handlers",...no.parameters?.docs?.description}}};ao.parameters={...ao.parameters,docs:{...ao.parameters?.docs,source:{originalSource:`{
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
}`,...ao.parameters?.docs?.source},description:{story:"Disabled actions",...ao.parameters?.docs?.description}}};so.parameters={...so.parameters,docs:{...so.parameters?.docs,source:{originalSource:`{
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
}`,...so.parameters?.docs?.source},description:{story:"Different tooltip placements",...so.parameters?.docs?.description}}};ro.parameters={...ro.parameters,docs:{...ro.parameters?.docs,source:{originalSource:`{
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
}`,...ro.parameters?.docs?.source},description:{story:"Minimal actions (3 actions)",...ro.parameters?.docs?.description}}};lo.parameters={...lo.parameters,docs:{...lo.parameters?.docs,source:{originalSource:`{
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
}`,...lo.parameters?.docs?.source},description:{story:"Maximum actions (6 actions)",...lo.parameters?.docs?.description}}};const dt=["Default","Controlled","Directions","CustomIcon","CustomOpenIcon","PersistentTooltips","Hidden","WithActions","DisabledActions","TooltipPlacements","MinimalActions","MaximumActions"];export{X as Controlled,oo as CustomIcon,eo as CustomOpenIcon,Q as Default,Y as Directions,ao as DisabledActions,io as Hidden,lo as MaximumActions,ro as MinimalActions,to as PersistentTooltips,so as TooltipPlacements,no as WithActions,dt as __namedExportsOrder,pt as default};
