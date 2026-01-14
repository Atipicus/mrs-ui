import{r as s,u as re,j as t,ae as Be,c as V,R as Re}from"./iframe-CckttRrP.js";import{M as je}from"./MaterialSymbol-C4g2eVab.js";import{u as Ee}from"./ButtonBase-ExDGUqAK.js";import{u as _}from"./useEventCallback-CPSVspcQ.js";import{e as te}from"./resolveComponentProps-DRuAR2bf.js";import{u as Le}from"./useTheme-BEZ5DwR-.js";import{g as se,b as ae,s as $,c as De,a as ie,m as ce}from"./memoTheme-D40aOm1p.js";import{u as W}from"./useSlot-CgXclaX5.js";import{u as Pe}from"./useForkRef-BrpzIuMK.js";import{g as Ae}from"./getReactElementRef-BfArtCKM.js";import{o as G}from"./ownerDocument-DW-IO8s5.js";import{P as ze}from"./Paper-Bui-Aeo_.js";import{G as Me}from"./Grow-DWiz16nJ.js";import{A as He}from"./Alert-BgSWDzaX.js";import{I as Fe}from"./IconButton-C7LeTJlp.js";import{S as U}from"./Stack-B-CToEQK.js";import{B as C}from"./Button-DxmsTS6c.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-MINljk0S.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-lOMGRC3H.js";import"./index-kgCUEM1X.js";import"./index-Bh9eExNx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-ZFHZ2TuZ.js";import"./Close-Wci5EB2G.js";import"./CircularProgress-Dak25OHr.js";import"./styled-Yz1ixKRP.js";import"./useThemeProps-jBpPjYFU.js";function ne(n){return n.substring(2).toLowerCase()}function Ie(n,e){return e.documentElement.clientWidth<n.clientX||e.documentElement.clientHeight<n.clientY}function Ne(n){const{children:e,disableReactTree:r=!1,mouseEvent:o="onClick",onClickAway:c,touchEvent:a="onTouchEnd"}=n,m=s.useRef(!1),f=s.useRef(null),S=s.useRef(!1),g=s.useRef(!1);s.useEffect(()=>(setTimeout(()=>{S.current=!0},0),()=>{S.current=!1}),[]);const h=Pe(Ae(e),f),d=_(l=>{const u=g.current;g.current=!1;const k=G(f.current);if(!S.current||!f.current||"clientX"in l&&Ie(l,k))return;if(m.current){m.current=!1;return}let i;l.composedPath?i=l.composedPath().includes(f.current):i=!k.documentElement.contains(l.target)||f.current.contains(l.target),!i&&(r||!u)&&c(l)}),O=l=>u=>{g.current=!0;const k=e.props[l];k&&k(u)},y={ref:h};return a!==!1&&(y[a]=O(a)),s.useEffect(()=>{if(a!==!1){const l=ne(a),u=G(f.current),k=()=>{m.current=!0};return u.addEventListener(l,d),u.addEventListener("touchmove",k),()=>{u.removeEventListener(l,d),u.removeEventListener("touchmove",k)}}},[d,a]),o!==!1&&(y[o]=O(o)),s.useEffect(()=>{if(o!==!1){const l=ne(o),u=G(f.current);return u.addEventListener(l,d),()=>{u.removeEventListener(l,d)}}},[d,o]),s.cloneElement(e,y)}function qe(n={}){const{autoHideDuration:e=null,disableWindowBlurListener:r=!1,onClose:o,open:c,resumeHideDuration:a}=n,m=Ee();s.useEffect(()=>{if(!c)return;function i(p){p.defaultPrevented||p.key==="Escape"&&o?.(p,"escapeKeyDown")}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[c,o]);const f=_((i,p)=>{o?.(i,p)}),S=_(i=>{!o||i==null||m.start(i,()=>{f(null,"timeout")})});s.useEffect(()=>(c&&S(e),m.clear),[c,e,S,m]);const g=i=>{o?.(i,"clickaway")},h=m.clear,d=s.useCallback(()=>{e!=null&&S(a??e*.5)},[e,a,S]),O=i=>p=>{const T=i.onBlur;T?.(p),d()},y=i=>p=>{const T=i.onFocus;T?.(p),h()},l=i=>p=>{const T=i.onMouseEnter;T?.(p),h()},u=i=>p=>{const T=i.onMouseLeave;T?.(p),d()};return s.useEffect(()=>{if(!r&&c)return window.addEventListener("focus",d),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",d),window.removeEventListener("blur",h)}},[r,c,d,h]),{getRootProps:(i={})=>{const p={...te(n),...te(i)};return{role:"presentation",...i,...p,onBlur:O(p),onFocus:y(p),onMouseEnter:l(p),onMouseLeave:u(p)}},onClickAway:g}}function We(n){return se("MuiSnackbarContent",n)}ae("MuiSnackbarContent",["root","message","action"]);const Ue=n=>{const{classes:e}=n;return ie({root:["root"],action:["action"],message:["message"]},We,e)},Ve=$(ze,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,e)=>e.root})(ce(({theme:n})=>{const e=n.palette.mode==="light"?.8:.98,r=Be(n.palette.background.default,e);return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(r),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),$e=$("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,e)=>e.message})({padding:"8px 0"}),Ge=$("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,e)=>e.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),_e=s.forwardRef(function(e,r){const o=re({props:e,name:"MuiSnackbarContent"}),{action:c,className:a,message:m,role:f="alert",...S}=o,g=o,h=Ue(g);return t.jsxs(Ve,{role:f,square:!0,elevation:6,className:De(h.root,a),ownerState:g,ref:r,...S,children:[t.jsx($e,{className:h.message,ownerState:g,children:m}),c?t.jsx(Ge,{className:h.action,ownerState:g,children:c}):null]})});function Xe(n){return se("MuiSnackbar",n)}ae("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Ye=n=>{const{classes:e,anchorOrigin:r}=n,o={root:["root",`anchorOrigin${V(r.vertical)}${V(r.horizontal)}`]};return ie(o,Xe,e)},Ke=$("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[`anchorOrigin${V(r.anchorOrigin.vertical)}${V(r.anchorOrigin.horizontal)}`]]}})(ce(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:e})=>e.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:e})=>e.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),oe=s.forwardRef(function(e,r){const o=re({props:e,name:"MuiSnackbar"}),c=Le(),a={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{action:m,anchorOrigin:{vertical:f,horizontal:S}={vertical:"bottom",horizontal:"left"},autoHideDuration:g=null,children:h,className:d,ClickAwayListenerProps:O,ContentProps:y,disableWindowBlurListener:l=!1,message:u,onBlur:k,onClose:i,onFocus:p,onMouseEnter:T,onMouseLeave:Je,open:X,resumeHideDuration:Qe,slots:Y={},slotProps:le={},TransitionComponent:K,transitionDuration:J=a,TransitionProps:{onEnter:Q,onExited:Z,...ue}={},...de}=o,B={...o,anchorOrigin:{vertical:f,horizontal:S},autoHideDuration:g,disableWindowBlurListener:l,TransitionComponent:K,transitionDuration:J},pe=Ye(B),{getRootProps:me,onClickAway:fe}=qe({...B}),[he,ee]=s.useState(!0),ge=x=>{ee(!0),Z&&Z(x)},ve=(x,b)=>{ee(!1),Q&&Q(x,b)},q={slots:{transition:K,...Y},slotProps:{content:y,clickAwayListener:O,transition:ue,...le}},[Se,ke]=W("root",{ref:r,className:[pe.root,d],elementType:Ke,getSlotProps:me,externalForwardedProps:{...q,...de},ownerState:B}),[Ce,{ownerState:ye,...be}]=W("clickAwayListener",{elementType:Ne,externalForwardedProps:q,getSlotProps:x=>({onClickAway:(...b)=>{x.onClickAway?.(...b),fe(...b)}}),ownerState:B}),[Oe,we]=W("content",{elementType:_e,shouldForwardComponentProp:!0,externalForwardedProps:q,additionalProps:{message:u,action:m},ownerState:B}),[Te,xe]=W("transition",{elementType:Me,externalForwardedProps:q,getSlotProps:x=>({onEnter:(...b)=>{x.onEnter?.(...b),ve(...b)},onExited:(...b)=>{x.onExited?.(...b),ge(...b)}}),additionalProps:{appear:!0,in:X,timeout:J,direction:f==="top"?"down":"up"},ownerState:B});return!X&&he?null:t.jsx(Ce,{...be,...Y.clickAwayListener&&{ownerState:ye},children:t.jsx(Se,{...ke,children:t.jsx(Te,{...xe,children:h||t.jsx(Oe,{...we})})})})}),v=Re.forwardRef(({open:n=!1,autoHideDuration:e=6e3,onClose:r,message:o,anchorOrigin:c={vertical:"bottom",horizontal:"left"},action:a,severity:m,variant:f="filled",showCloseButton:S=!0,icon:g,children:h,...d},O)=>{const y=(u,k)=>{k!=="clickaway"&&r?.(u,k)};if(m)return t.jsx(oe,{ref:O,open:n,autoHideDuration:e,onClose:y,anchorOrigin:c,...d,children:t.jsx(He,{severity:m,variant:f,icon:g,onClose:S?u=>y(u):void 0,sx:{width:"100%"},children:h||o})});const l=a!==void 0?a:t.jsx(Fe,{size:"small","aria-label":"close",color:"inherit",onClick:u=>y(u),children:t.jsx(je,{icon:"close",size:"small"})});return t.jsx(oe,{ref:O,open:n,autoHideDuration:e,onClose:y,message:h||o,action:l,anchorOrigin:c,...d})});v.displayName="Snackbar";v.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{open:{required:!1,tsType:{name:"boolean"},description:`If true, the Snackbar is open
@default false`,defaultValue:{value:"false",computed:!1}},autoHideDuration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:`The number of milliseconds to wait before automatically closing
Set to null to disable auto-hide
@default 6000`,defaultValue:{value:"6000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent | Event, reason?: string) => void",signature:{arguments:[{type:{name:"union",raw:"React.SyntheticEvent | Event",elements:[{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},{name:"Event"}]},name:"event"},{type:{name:"string"},name:"reason"}],return:{name:"void"}}},description:"Callback fired when the component requests to be closed"},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The message to display"},anchorOrigin:{required:!1,tsType:{name:"MuiSnackbarProps['anchorOrigin']",raw:"MuiSnackbarProps['anchorOrigin']"},description:`The anchor of the Snackbar
@default { vertical: 'bottom', horizontal: 'left' }`,defaultValue:{value:"{ vertical: 'bottom', horizontal: 'left' }",computed:!1}},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The action to display (e.g., an IconButton or Button)"},severity:{required:!1,tsType:{name:"AlertProps['severity']",raw:"AlertProps['severity']"},description:`If provided, display as an Alert instead of simple message
@default undefined`},variant:{required:!1,tsType:{name:"AlertProps['variant']",raw:"AlertProps['variant']"},description:`Alert variant when severity is provided
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`If true, show close button when using severity
@default true`,defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"AlertProps['icon']",raw:"AlertProps['icon']"},description:"Custom icon for Alert"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"}},composes:["Omit"]};const Rt={title:"Molecules/Snackbar",component:v,parameters:{layout:"centered",docs:{description:{component:"Snackbars provide brief notifications. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear."}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"If true, the Snackbar is open"},autoHideDuration:{control:"number",description:"The number of milliseconds to wait before automatically closing"},message:{control:"text",description:"The message to display"},severity:{control:"select",options:[void 0,"error","warning","info","success"],description:"The severity of the alert"},variant:{control:"select",options:["filled","outlined","standard"],description:"The variant to use when severity is provided"},anchorOrigin:{control:"object",description:"The anchor of the Snackbar"},showCloseButton:{control:"boolean",description:"If true, show close button when using severity"}}},w=n=>{const[e,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(C,{variant:"contained",onClick:()=>r(!0),children:"Open Snackbar"}),t.jsx(v,{...n,open:e,onClose:()=>r(!1)})]})},R={render:()=>t.jsx(w,{message:"This is a notification message"})},j={render:()=>t.jsx(w,{message:"Item successfully saved",autoHideDuration:3e3})},E={render:()=>t.jsx(w,{severity:"success",autoHideDuration:4e3,children:"Operation completed successfully!"})},L={render:()=>t.jsx(w,{severity:"error",autoHideDuration:null,children:"An error occurred. Please try again."})},D={render:()=>t.jsx(w,{severity:"warning",children:"Your session will expire in 5 minutes"})},P={render:()=>t.jsx(w,{severity:"info",children:"New updates are available"})},A={render:()=>{const[n,e]=s.useState(!1),[r,o]=s.useState(!1),[c,a]=s.useState(!1);return t.jsxs(U,{spacing:2,children:[t.jsx(C,{variant:"contained",onClick:()=>e(!0),children:"Filled Alert"}),t.jsx(C,{variant:"contained",onClick:()=>o(!0),children:"Outlined Alert"}),t.jsx(C,{variant:"contained",onClick:()=>a(!0),children:"Standard Alert"}),t.jsx(v,{open:n,onClose:()=>e(!1),severity:"success",variant:"filled",children:"Filled variant success message"}),t.jsx(v,{open:r,onClose:()=>o(!1),severity:"info",variant:"outlined",children:"Outlined variant info message"}),t.jsx(v,{open:c,onClose:()=>a(!1),severity:"warning",variant:"standard",children:"Standard variant warning message"})]})}},z={render:()=>{const[n,e]=s.useState(!1),[r,o]=s.useState(!1),[c,a]=s.useState(!1),[m,f]=s.useState(!1),[S,g]=s.useState(!1),[h,d]=s.useState(!1);return t.jsxs(U,{spacing:2,children:[t.jsxs(U,{direction:"row",spacing:2,children:[t.jsx(C,{variant:"outlined",onClick:()=>e(!0),children:"Top Left"}),t.jsx(C,{variant:"outlined",onClick:()=>o(!0),children:"Top Center"}),t.jsx(C,{variant:"outlined",onClick:()=>a(!0),children:"Top Right"})]}),t.jsxs(U,{direction:"row",spacing:2,children:[t.jsx(C,{variant:"outlined",onClick:()=>f(!0),children:"Bottom Left"}),t.jsx(C,{variant:"outlined",onClick:()=>g(!0),children:"Bottom Center"}),t.jsx(C,{variant:"outlined",onClick:()=>d(!0),children:"Bottom Right"})]}),t.jsx(v,{open:n,onClose:()=>e(!1),message:"Top Left",anchorOrigin:{vertical:"top",horizontal:"left"}}),t.jsx(v,{open:r,onClose:()=>o(!1),message:"Top Center",anchorOrigin:{vertical:"top",horizontal:"center"}}),t.jsx(v,{open:c,onClose:()=>a(!1),message:"Top Right",anchorOrigin:{vertical:"top",horizontal:"right"}}),t.jsx(v,{open:m,onClose:()=>f(!1),message:"Bottom Left",anchorOrigin:{vertical:"bottom",horizontal:"left"}}),t.jsx(v,{open:S,onClose:()=>g(!1),message:"Bottom Center",anchorOrigin:{vertical:"bottom",horizontal:"center"}}),t.jsx(v,{open:h,onClose:()=>d(!1),message:"Bottom Right",anchorOrigin:{vertical:"bottom",horizontal:"right"}})]})}},M={render:()=>t.jsx(w,{severity:"info",showCloseButton:!1,autoHideDuration:3e3,children:"This will auto-close in 3 seconds"})},H={render:()=>{const[n,e]=s.useState(!1),r=t.jsx(C,{color:"secondary",size:"small",onClick:()=>e(!1),children:"UNDO"});return t.jsxs(t.Fragment,{children:[t.jsx(C,{variant:"contained",onClick:()=>e(!0),children:"Delete Item"}),t.jsx(v,{open:n,onClose:()=>e(!1),message:"Item deleted",action:r,autoHideDuration:6e3})]})}},F={render:()=>t.jsx(w,{severity:"error",autoHideDuration:null,children:"This notification will stay until you close it"})},I={render:()=>t.jsx(w,{severity:"info",autoHideDuration:8e3,children:"This is a very long notification message that demonstrates how the Snackbar handles longer content. The width will adjust automatically to fit the content while maintaining good readability."})},N={render:()=>{const[n,e]=s.useState(!1),[r,o]=s.useState(!1),[c,a]=s.useState(!1),m=()=>{e(!0),setTimeout(()=>o(!0),500),setTimeout(()=>a(!0),1e3)};return t.jsxs(t.Fragment,{children:[t.jsx(C,{variant:"contained",onClick:m,children:"Show Consecutive Snackbars"}),t.jsx(v,{open:n,onClose:()=>e(!1),severity:"info",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:"First notification"}),t.jsx(v,{open:r,onClose:()=>o(!1),severity:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"},children:"Second notification"}),t.jsx(v,{open:c,onClose:()=>a(!1),severity:"warning",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:"Third notification"})]})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo message="This is a notification message" />
}`,...R.parameters?.docs?.source},description:{story:"Default Snackbar with simple message",...R.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo message="Item successfully saved" autoHideDuration={3000} />
}`,...j.parameters?.docs?.source},description:{story:"Simple message Snackbar",...j.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="success" autoHideDuration={4000}>
      Operation completed successfully!
    </SnackbarDemo>
}`,...E.parameters?.docs?.source},description:{story:"Success severity",...E.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="error" autoHideDuration={null}>
      An error occurred. Please try again.
    </SnackbarDemo>
}`,...L.parameters?.docs?.source},description:{story:"Error severity",...L.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="warning">Your session will expire in 5 minutes</SnackbarDemo>
}`,...D.parameters?.docs?.source},description:{story:"Warning severity",...D.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="info">New updates are available</SnackbarDemo>
}`,...P.parameters?.docs?.source},description:{story:"Info severity",...P.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Different Alert variants",...A.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"Different anchor positions",...z.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="info" showCloseButton={false} autoHideDuration={3000}>
      This will auto-close in 3 seconds
    </SnackbarDemo>
}`,...M.parameters?.docs?.source},description:{story:"Without close button",...M.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"Custom action",...H.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="error" autoHideDuration={null}>
      This notification will stay until you close it
    </SnackbarDemo>
}`,...F.parameters?.docs?.source},description:{story:"Persistent (no auto-hide)",...F.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <SnackbarDemo severity="info" autoHideDuration={8000}>
      This is a very long notification message that demonstrates how the Snackbar handles longer
      content. The width will adjust automatically to fit the content while maintaining good
      readability.
    </SnackbarDemo>
}`,...I.parameters?.docs?.source},description:{story:"Long message",...I.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Consecutive Snackbars",...N.parameters?.docs?.description}}};const jt=["Default","SimpleMessage","Success","Error","Warning","Info","AlertVariants","Positions","NoCloseButton","CustomAction","Persistent","LongMessage","Consecutive"];export{A as AlertVariants,N as Consecutive,H as CustomAction,R as Default,L as Error,P as Info,I as LongMessage,M as NoCloseButton,F as Persistent,z as Positions,j as SimpleMessage,E as Success,D as Warning,jt as __namedExportsOrder,Rt as default};
