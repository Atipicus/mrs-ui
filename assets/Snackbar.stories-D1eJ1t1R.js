import{r as a,P as e,a3 as Ee,g as ae,a as ie,j as n,aa as Pe,E as $,R as Le}from"./iframe-m0FcCUbT.js";import{M as De}from"./MaterialSymbol-DOQyWWmo.js";import{u as Ae}from"./ButtonBase-Bd5szlVj.js";import{u as Y}from"./useEventCallback-Cbn4Qfni.js";import{e as re}from"./resolveComponentProps-hVTJcm9D.js";import{u as Me}from"./useTheme--qrtAMJV.js";import{g as ce,c as ze,a as le,s as _,m as ue}from"./memoTheme-C11nCEJ1.js";import{u as W}from"./useSlot-BPbjla4P.js";import{u as He}from"./useForkRef-DeUHlcp-.js";import{g as Fe,e as Ie}from"./getReactElementRef-DAzX-jKI.js";import{o as X}from"./ownerDocument-DW-IO8s5.js";import{P as Ne}from"./Paper-BQ8rpTFt.js";import{G as qe}from"./Grow-DT4E6Ksq.js";import{A as Ue}from"./Alert-8y4zRzcR.js";import{I as We}from"./IconButton-BtP768Mt.js";import{S as V}from"./Stack-DLDfFx0e.js";import{B as k}from"./Button-CJ6MgozL.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DSq61m1Q.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./integerPropType-DVPNO1YA.js";import"./utils-e4gBpPL7.js";import"./index-CMwIBjt_.js";import"./index-DWLUMx4m.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DzjuuRaM.js";import"./Close-CUuiMhwH.js";import"./CircularProgress-nywBWFjt.js";import"./useThemeProps-OFH6wkZ1.js";function se(o){return o.substring(2).toLowerCase()}function Ve(o,t){return t.documentElement.clientWidth<o.clientX||t.documentElement.clientHeight<o.clientY}function G(o){const{children:t,disableReactTree:s=!1,mouseEvent:r="onClick",onClickAway:l,touchEvent:i="onTouchEnd"}=o,f=a.useRef(!1),h=a.useRef(null),S=a.useRef(!1),v=a.useRef(!1);a.useEffect(()=>(setTimeout(()=>{S.current=!0},0),()=>{S.current=!1}),[]);const g=He(Fe(t),h),d=Y(u=>{const p=v.current;v.current=!1;const b=X(h.current);if(!S.current||!h.current||"clientX"in u&&Ve(u,b))return;if(f.current){f.current=!1;return}let c;u.composedPath?c=u.composedPath().includes(h.current):c=!b.documentElement.contains(u.target)||h.current.contains(u.target),!c&&(s||!p)&&l(u)}),T=u=>p=>{v.current=!0;const b=t.props[u];b&&b(p)},C={ref:g};return i!==!1&&(C[i]=T(i)),a.useEffect(()=>{if(i!==!1){const u=se(i),p=X(h.current),b=()=>{f.current=!0};return p.addEventListener(u,d),p.addEventListener("touchmove",b),()=>{p.removeEventListener(u,d),p.removeEventListener("touchmove",b)}}},[d,i]),r!==!1&&(C[r]=T(r)),a.useEffect(()=>{if(r!==!1){const u=se(r),p=X(h.current);return p.addEventListener(u,d),()=>{p.removeEventListener(u,d)}}},[d,r]),a.cloneElement(t,C)}G.propTypes={children:Ie.isRequired,disableReactTree:e.bool,mouseEvent:e.oneOf(["onClick","onMouseDown","onMouseUp","onPointerDown","onPointerUp",!1]),onClickAway:e.func.isRequired,touchEvent:e.oneOf(["onTouchEnd","onTouchStart",!1])};G.propTypes=Ee(G.propTypes);function $e(o={}){const{autoHideDuration:t=null,disableWindowBlurListener:s=!1,onClose:r,open:l,resumeHideDuration:i}=o,f=Ae();a.useEffect(()=>{if(!l)return;function c(m){m.defaultPrevented||m.key==="Escape"&&r?.(m,"escapeKeyDown")}return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[l,r]);const h=Y((c,m)=>{r?.(c,m)}),S=Y(c=>{!r||c==null||f.start(c,()=>{h(null,"timeout")})});a.useEffect(()=>(l&&S(t),f.clear),[l,t,S,f]);const v=c=>{r?.(c,"clickaway")},g=f.clear,d=a.useCallback(()=>{t!=null&&S(i??t*.5)},[t,i,S]),T=c=>m=>{const x=c.onBlur;x?.(m),d()},C=c=>m=>{const x=c.onFocus;x?.(m),g()},u=c=>m=>{const x=c.onMouseEnter;x?.(m),g()},p=c=>m=>{const x=c.onMouseLeave;x?.(m),d()};return a.useEffect(()=>{if(!s&&l)return window.addEventListener("focus",d),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",d),window.removeEventListener("blur",g)}},[s,l,d,g]),{getRootProps:(c={})=>{const m={...re(o),...re(c)};return{role:"presentation",...c,...m,onBlur:T(m),onFocus:C(m),onMouseEnter:u(m),onMouseLeave:p(m)}},onClickAway:v}}function Ge(o){return ae("MuiSnackbarContent",o)}ce("MuiSnackbarContent",["root","message","action"]);const _e=o=>{const{classes:t}=o;return le({root:["root"],action:["action"],message:["message"]},Ge,t)},Xe=_(Ne,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(o,t)=>t.root})(ue(({theme:o})=>{const t=o.palette.mode==="light"?.8:.98,s=Pe(o.palette.background.default,t);return{...o.typography.body2,color:o.vars?o.vars.palette.SnackbarContent.color:o.palette.getContrastText(s),backgroundColor:o.vars?o.vars.palette.SnackbarContent.bg:s,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,flexGrow:1,[o.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Ye=_("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(o,t)=>t.message})({padding:"8px 0"}),Ke=_("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(o,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),pe=a.forwardRef(function(t,s){const r=ie({props:t,name:"MuiSnackbarContent"}),{action:l,className:i,message:f,role:h="alert",...S}=r,v=r,g=_e(v);return n.jsxs(Xe,{role:h,square:!0,elevation:6,className:ze(g.root,i),ownerState:v,ref:s,...S,children:[n.jsx(Ye,{className:g.message,ownerState:v,children:f}),l?n.jsx(Ke,{className:g.action,ownerState:v,children:l}):null]})});pe.propTypes={action:e.node,classes:e.object,className:e.string,message:e.node,role:e.string,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object])};function Je(o){return ae("MuiSnackbar",o)}ce("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Qe=o=>{const{classes:t,anchorOrigin:s}=o,r={root:["root",`anchorOrigin${$(s.vertical)}${$(s.horizontal)}`]};return le(r,Je,t)},Ze=_("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,t[`anchorOrigin${$(s.anchorOrigin.vertical)}${$(s.anchorOrigin.horizontal)}`]]}})(ue(({theme:o})=>({zIndex:(o.vars||o).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[o.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[o.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[o.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[o.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[o.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),K=a.forwardRef(function(t,s){const r=ie({props:t,name:"MuiSnackbar"}),l=Me(),i={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:f,anchorOrigin:{vertical:h,horizontal:S}={vertical:"bottom",horizontal:"left"},autoHideDuration:v=null,children:g,className:d,ClickAwayListenerProps:T,ContentProps:C,disableWindowBlurListener:u=!1,message:p,onBlur:b,onClose:c,onFocus:m,onMouseEnter:x,onMouseLeave:et,open:J,resumeHideDuration:tt,slots:Q={},slotProps:de={},TransitionComponent:Z,transitionDuration:ee=i,TransitionProps:{onEnter:te,onExited:ne,...me}={},...fe}=r,B={...r,anchorOrigin:{vertical:h,horizontal:S},autoHideDuration:v,disableWindowBlurListener:u,TransitionComponent:Z,transitionDuration:ee},he=Qe(B),{getRootProps:ge,onClickAway:ve}=$e({...B}),[ye,oe]=a.useState(!0),Se=R=>{oe(!0),ne&&ne(R)},be=(R,O)=>{oe(!1),te&&te(R,O)},U={slots:{transition:Z,...Q},slotProps:{content:C,clickAwayListener:T,transition:me,...de}},[ke,Ce]=W("root",{ref:s,className:[he.root,d],elementType:Ze,getSlotProps:ge,externalForwardedProps:{...U,...fe},ownerState:B}),[Oe,{ownerState:Te,...we}]=W("clickAwayListener",{elementType:G,externalForwardedProps:U,getSlotProps:R=>({onClickAway:(...O)=>{R.onClickAway?.(...O),ve(...O)}}),ownerState:B}),[xe,Re]=W("content",{elementType:pe,shouldForwardComponentProp:!0,externalForwardedProps:U,additionalProps:{message:p,action:f},ownerState:B}),[Be,je]=W("transition",{elementType:qe,externalForwardedProps:U,getSlotProps:R=>({onEnter:(...O)=>{R.onEnter?.(...O),be(...O)},onExited:(...O)=>{R.onExited?.(...O),Se(...O)}}),additionalProps:{appear:!0,in:J,timeout:ee,direction:h==="top"?"down":"up"},ownerState:B});return!J&&ye?null:n.jsx(Oe,{...we,...Q.clickAwayListener&&{ownerState:Te},children:n.jsx(ke,{...Ce,children:n.jsx(Be,{...je,children:g||n.jsx(xe,{...Re})})})})});K.propTypes={action:e.node,anchorOrigin:e.shape({horizontal:e.oneOf(["center","left","right"]).isRequired,vertical:e.oneOf(["bottom","top"]).isRequired}),autoHideDuration:e.number,children:e.element,classes:e.object,className:e.string,ClickAwayListenerProps:e.object,ContentProps:e.object,disableWindowBlurListener:e.bool,key:()=>null,message:e.node,onBlur:e.func,onClose:e.func,onFocus:e.func,onMouseEnter:e.func,onMouseLeave:e.func,open:e.bool,resumeHideDuration:e.number,slotProps:e.shape({clickAwayListener:e.oneOfType([e.func,e.shape({children:e.element.isRequired,disableReactTree:e.bool,mouseEvent:e.oneOf(["onClick","onMouseDown","onMouseUp","onPointerDown","onPointerUp",!1]),onClickAway:e.func,touchEvent:e.oneOf(["onTouchEnd","onTouchStart",!1])})]),content:e.oneOfType([e.func,e.object]),root:e.oneOfType([e.func,e.object]),transition:e.oneOfType([e.func,e.object])}),slots:e.shape({clickAwayListener:e.elementType,content:e.elementType,root:e.elementType,transition:e.elementType}),sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),TransitionComponent:e.elementType,transitionDuration:e.oneOfType([e.number,e.shape({appear:e.number,enter:e.number,exit:e.number})]),TransitionProps:e.object};const y=Le.forwardRef(({open:o=!1,autoHideDuration:t=6e3,onClose:s,message:r,anchorOrigin:l={vertical:"bottom",horizontal:"left"},action:i,severity:f,variant:h="filled",showCloseButton:S=!0,icon:v,children:g,...d},T)=>{const C=(p,b)=>{b!=="clickaway"&&s?.(p,b)};if(f)return n.jsx(K,{ref:T,open:o,autoHideDuration:t,onClose:C,anchorOrigin:l,...d,children:n.jsx(Ue,{severity:f,variant:h,icon:v,onClose:S?p=>C(p):void 0,sx:{width:"100%"},children:g||r})});const u=i!==void 0?i:n.jsx(We,{size:"small","aria-label":"close",color:"inherit",onClick:p=>C(p),children:n.jsx(De,{icon:"close",size:"small"})});return n.jsx(K,{ref:T,open:o,autoHideDuration:t,onClose:C,message:g||r,action:u,anchorOrigin:l,...d})});y.displayName="Snackbar";y.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{open:{required:!1,tsType:{name:"boolean"},description:`If true, the Snackbar is open
@default false`,defaultValue:{value:"false",computed:!1}},autoHideDuration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:`The number of milliseconds to wait before automatically closing
Set to null to disable auto-hide
@default 6000`,defaultValue:{value:"6000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent | Event, reason?: string) => void",signature:{arguments:[{type:{name:"union",raw:"React.SyntheticEvent | Event",elements:[{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},{name:"Event"}]},name:"event"},{type:{name:"string"},name:"reason"}],return:{name:"void"}}},description:"Callback fired when the component requests to be closed"},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The message to display"},anchorOrigin:{required:!1,tsType:{name:"MuiSnackbarProps['anchorOrigin']",raw:"MuiSnackbarProps['anchorOrigin']"},description:`The anchor of the Snackbar
@default { vertical: 'bottom', horizontal: 'left' }`,defaultValue:{value:"{ vertical: 'bottom', horizontal: 'left' }",computed:!1}},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The action to display (e.g., an IconButton or Button)"},severity:{required:!1,tsType:{name:"AlertProps['severity']",raw:"AlertProps['severity']"},description:`If provided, display as an Alert instead of simple message
@default undefined`},variant:{required:!1,tsType:{name:"AlertProps['variant']",raw:"AlertProps['variant']"},description:`Alert variant when severity is provided
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`If true, show close button when using severity
@default true`,defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"AlertProps['icon']",raw:"AlertProps['icon']"},description:"Custom icon for Alert"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"}},composes:["Omit"]};const Dt={title:"Molecules/Snackbar",component:y,parameters:{layout:"centered",docs:{description:{component:"Snackbars provide brief notifications. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear."}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"If true, the Snackbar is open"},autoHideDuration:{control:"number",description:"The number of milliseconds to wait before automatically closing"},message:{control:"text",description:"The message to display"},severity:{control:"select",options:[void 0,"error","warning","info","success"],description:"The severity of the alert"},variant:{control:"select",options:["filled","outlined","standard"],description:"The variant to use when severity is provided"},anchorOrigin:{control:"object",description:"The anchor of the Snackbar"},showCloseButton:{control:"boolean",description:"If true, show close button when using severity"}}},w=o=>{const[t,s]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(k,{variant:"contained",onClick:()=>s(!0),children:"Open Snackbar"}),n.jsx(y,{...o,open:t,onClose:()=>s(!1)})]})},j={render:()=>n.jsx(w,{message:"This is a notification message"})},E={render:()=>n.jsx(w,{message:"Item successfully saved",autoHideDuration:3e3})},P={render:()=>n.jsx(w,{severity:"success",autoHideDuration:4e3,children:"Operation completed successfully!"})},L={render:()=>n.jsx(w,{severity:"error",autoHideDuration:null,children:"An error occurred. Please try again."})},D={render:()=>n.jsx(w,{severity:"warning",children:"Your session will expire in 5 minutes"})},A={render:()=>n.jsx(w,{severity:"info",children:"New updates are available"})},M={render:()=>{const[o,t]=a.useState(!1),[s,r]=a.useState(!1),[l,i]=a.useState(!1);return n.jsxs(V,{spacing:2,children:[n.jsx(k,{variant:"contained",onClick:()=>t(!0),children:"Filled Alert"}),n.jsx(k,{variant:"contained",onClick:()=>r(!0),children:"Outlined Alert"}),n.jsx(k,{variant:"contained",onClick:()=>i(!0),children:"Standard Alert"}),n.jsx(y,{open:o,onClose:()=>t(!1),severity:"success",variant:"filled",children:"Filled variant success message"}),n.jsx(y,{open:s,onClose:()=>r(!1),severity:"info",variant:"outlined",children:"Outlined variant info message"}),n.jsx(y,{open:l,onClose:()=>i(!1),severity:"warning",variant:"standard",children:"Standard variant warning message"})]})}},z={render:()=>{const[o,t]=a.useState(!1),[s,r]=a.useState(!1),[l,i]=a.useState(!1),[f,h]=a.useState(!1),[S,v]=a.useState(!1),[g,d]=a.useState(!1);return n.jsxs(V,{spacing:2,children:[n.jsxs(V,{direction:"row",spacing:2,children:[n.jsx(k,{variant:"outlined",onClick:()=>t(!0),children:"Top Left"}),n.jsx(k,{variant:"outlined",onClick:()=>r(!0),children:"Top Center"}),n.jsx(k,{variant:"outlined",onClick:()=>i(!0),children:"Top Right"})]}),n.jsxs(V,{direction:"row",spacing:2,children:[n.jsx(k,{variant:"outlined",onClick:()=>h(!0),children:"Bottom Left"}),n.jsx(k,{variant:"outlined",onClick:()=>v(!0),children:"Bottom Center"}),n.jsx(k,{variant:"outlined",onClick:()=>d(!0),children:"Bottom Right"})]}),n.jsx(y,{open:o,onClose:()=>t(!1),message:"Top Left",anchorOrigin:{vertical:"top",horizontal:"left"}}),n.jsx(y,{open:s,onClose:()=>r(!1),message:"Top Center",anchorOrigin:{vertical:"top",horizontal:"center"}}),n.jsx(y,{open:l,onClose:()=>i(!1),message:"Top Right",anchorOrigin:{vertical:"top",horizontal:"right"}}),n.jsx(y,{open:f,onClose:()=>h(!1),message:"Bottom Left",anchorOrigin:{vertical:"bottom",horizontal:"left"}}),n.jsx(y,{open:S,onClose:()=>v(!1),message:"Bottom Center",anchorOrigin:{vertical:"bottom",horizontal:"center"}}),n.jsx(y,{open:g,onClose:()=>d(!1),message:"Bottom Right",anchorOrigin:{vertical:"bottom",horizontal:"right"}})]})}},H={render:()=>n.jsx(w,{severity:"info",showCloseButton:!1,autoHideDuration:3e3,children:"This will auto-close in 3 seconds"})},F={render:()=>{const[o,t]=a.useState(!1),s=n.jsx(k,{color:"secondary",size:"small",onClick:()=>t(!1),children:"UNDO"});return n.jsxs(n.Fragment,{children:[n.jsx(k,{variant:"contained",onClick:()=>t(!0),children:"Delete Item"}),n.jsx(y,{open:o,onClose:()=>t(!1),message:"Item deleted",action:s,autoHideDuration:6e3})]})}},I={render:()=>n.jsx(w,{severity:"error",autoHideDuration:null,children:"This notification will stay until you close it"})},N={render:()=>n.jsx(w,{severity:"info",autoHideDuration:8e3,children:"This is a very long notification message that demonstrates how the Snackbar handles longer content. The width will adjust automatically to fit the content while maintaining good readability."})},q={render:()=>{const[o,t]=a.useState(!1),[s,r]=a.useState(!1),[l,i]=a.useState(!1),f=()=>{t(!0),setTimeout(()=>r(!0),500),setTimeout(()=>i(!0),1e3)};return n.jsxs(n.Fragment,{children:[n.jsx(k,{variant:"contained",onClick:f,children:"Show Consecutive Snackbars"}),n.jsx(y,{open:o,onClose:()=>t(!1),severity:"info",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:"First notification"}),n.jsx(y,{open:s,onClose:()=>r(!1),severity:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"},children:"Second notification"}),n.jsx(y,{open:l,onClose:()=>i(!1),severity:"warning",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:"Third notification"})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo message="This is a notification message" />
}`,...j.parameters?.docs?.source},description:{story:"Default Snackbar with simple message",...j.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo message="Item successfully saved" autoHideDuration={3000} />
}`,...E.parameters?.docs?.source},description:{story:"Simple message Snackbar",...E.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="success" autoHideDuration={4000}>
      Operation completed successfully!
    </SnackbarDemo>
}`,...P.parameters?.docs?.source},description:{story:"Success severity",...P.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="error" autoHideDuration={null}>
      An error occurred. Please try again.
    </SnackbarDemo>
}`,...L.parameters?.docs?.source},description:{story:"Error severity",...L.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="warning">Your session will expire in 5 minutes</SnackbarDemo>
}`,...D.parameters?.docs?.source},description:{story:"Warning severity",...D.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="info">New updates are available</SnackbarDemo>
}`,...A.parameters?.docs?.source},description:{story:"Info severity",...A.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openFilled, setOpenFilled] = useState(false);
    const [openOutlined, setOpenOutlined] = useState(false);
    const [openStandard, setOpenStandard] = useState(false);
    return <Stack spacing={2}>
        <Button variant="contained" onClick={() => setOpenFilled(true)}>
          Filled Alert
        </Button>
        <Button variant="contained" onClick={() => setOpenOutlined(true)}>
          Outlined Alert
        </Button>
        <Button variant="contained" onClick={() => setOpenStandard(true)}>
          Standard Alert
        </Button>

        <Snackbar open={openFilled} onClose={() => setOpenFilled(false)} severity="success" variant="filled">
          Filled variant success message
        </Snackbar>

        <Snackbar open={openOutlined} onClose={() => setOpenOutlined(false)} severity="info" variant="outlined">
          Outlined variant info message
        </Snackbar>

        <Snackbar open={openStandard} onClose={() => setOpenStandard(false)} severity="warning" variant="standard">
          Standard variant warning message
        </Snackbar>
      </Stack>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Different Alert variants",...M.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openTL, setOpenTL] = useState(false);
    const [openTC, setOpenTC] = useState(false);
    const [openTR, setOpenTR] = useState(false);
    const [openBL, setOpenBL] = useState(false);
    const [openBC, setOpenBC] = useState(false);
    const [openBR, setOpenBR] = useState(false);
    return <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setOpenTL(true)}>
            Top Left
          </Button>
          <Button variant="outlined" onClick={() => setOpenTC(true)}>
            Top Center
          </Button>
          <Button variant="outlined" onClick={() => setOpenTR(true)}>
            Top Right
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setOpenBL(true)}>
            Bottom Left
          </Button>
          <Button variant="outlined" onClick={() => setOpenBC(true)}>
            Bottom Center
          </Button>
          <Button variant="outlined" onClick={() => setOpenBR(true)}>
            Bottom Right
          </Button>
        </Stack>

        <Snackbar open={openTL} onClose={() => setOpenTL(false)} message="Top Left" anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }} />
        <Snackbar open={openTC} onClose={() => setOpenTC(false)} message="Top Center" anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }} />
        <Snackbar open={openTR} onClose={() => setOpenTR(false)} message="Top Right" anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }} />
        <Snackbar open={openBL} onClose={() => setOpenBL(false)} message="Bottom Left" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} />
        <Snackbar open={openBC} onClose={() => setOpenBC(false)} message="Bottom Center" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }} />
        <Snackbar open={openBR} onClose={() => setOpenBR(false)} message="Bottom Right" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }} />
      </Stack>;
  }
}`,...z.parameters?.docs?.source},description:{story:"Different anchor positions",...z.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="info" showCloseButton={false} autoHideDuration={3000}>
      This will auto-close in 3 seconds
    </SnackbarDemo>
}`,...H.parameters?.docs?.source},description:{story:"Without close button",...H.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const action = <Button color="secondary" size="small" onClick={() => setOpen(false)}>
        UNDO
      </Button>;
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Snackbar open={open} onClose={() => setOpen(false)} message="Item deleted" action={action} autoHideDuration={6000} />
      </>;
  }
}`,...F.parameters?.docs?.source},description:{story:"Custom action",...F.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="error" autoHideDuration={null}>
      This notification will stay until you close it
    </SnackbarDemo>
}`,...I.parameters?.docs?.source},description:{story:"Persistent (no auto-hide)",...I.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="info" autoHideDuration={8000}>
      This is a very long notification message that demonstrates how the Snackbar handles longer
      content. The width will adjust automatically to fit the content while maintaining good
      readability.
    </SnackbarDemo>
}`,...N.parameters?.docs?.source},description:{story:"Long message",...N.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleShowAll = () => {
      setOpen1(true);
      setTimeout(() => setOpen2(true), 500);
      setTimeout(() => setOpen3(true), 1000);
    };
    return <>
        <Button variant="contained" onClick={handleShowAll}>
          Show Consecutive Snackbars
        </Button>

        <Snackbar open={open1} onClose={() => setOpen1(false)} severity="info" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}>
          First notification
        </Snackbar>

        <Snackbar open={open2} onClose={() => setOpen2(false)} severity="success" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}>
          Second notification
        </Snackbar>

        <Snackbar open={open3} onClose={() => setOpen3(false)} severity="warning" anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}>
          Third notification
        </Snackbar>
      </>;
  }
}`,...q.parameters?.docs?.source},description:{story:"Consecutive Snackbars",...q.parameters?.docs?.description}}};const At=["Default","SimpleMessage","Success","Error","Warning","Info","AlertVariants","Positions","NoCloseButton","CustomAction","Persistent","LongMessage","Consecutive"];export{M as AlertVariants,q as Consecutive,F as CustomAction,j as Default,L as Error,A as Info,N as LongMessage,H as NoCloseButton,I as Persistent,z as Positions,E as SimpleMessage,P as Success,D as Warning,At as __namedExportsOrder,Dt as default};
