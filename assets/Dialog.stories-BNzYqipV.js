import{r as h,u as K,m as Ie,j as e,c as b,R as Oe}from"./iframe-guHiHJgM.js";import{b as Y,g as _,c as C,s as D,a as V,m as re,r as Ue}from"./createSimplePaletteValueFilter-N-k1R-Q1.js";import{u as Ke}from"./useTheme-Me__gUwA.js";import{u as y}from"./useSlot-BwZmQJDP.js";import{P as se}from"./Paper-Bv-a0Gyk.js";import{F as le,M as Ye,B as _e}from"./Modal-BfUrpFbk.js";import{B as a}from"./Button-eCNZD8US.js";import{T as v}from"./TextField-CPdmP02-.js";import{S as ce}from"./Stack-DrTBJ7tf.js";import{T as de}from"./Typography-Di50O9to.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-DAy9J68u.js";import"./useForkRef-Uy7NJ8ru.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DI0BNUn9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DTeqoHTY.js";import"./index-CKgCG3EB.js";import"./index-BbDWFg6Z.js";import"./getReactElementRef-Ic5-yQ7W.js";import"./utils-gSSSw1po.js";import"./ButtonBase-C6XQz7ud.js";import"./isFocusVisible-B8k4qzLc.js";import"./Button-DpZeZ6aq.js";import"./CircularProgress-BOENF8kS.js";import"./TextField-Dn-1Maan.js";import"./Select-C9Z2Y05E.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B87usi3p.js";import"./FormLabel-De1OAIik.js";import"./isMuiElement-DU1oubEv.js";import"./Menu-CKSWm0LK.js";import"./useSlotProps-DhVnmpbI.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-C8o5o6VQ.js";import"./mergeSlotProps-Bah95-Kr.js";import"./List-DWz_G5xb.js";import"./ListContext-DwmbI7UR.js";import"./useControlled-Bu7ShWSD.js";import"./createSvgIcon-C95dJPTr.js";import"./FormHelperText-BHNnXgQV.js";import"./Stack-D0y2PLpO.js";import"./useThemeProps-9LCJFaAX.js";function Ve(o){return _("MuiDialog",o)}const Z=Y("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),pe=h.createContext({}),Xe=D(_e,{name:"MuiDialog",slot:"Backdrop",overrides:(o,t)=>t.backdrop})({zIndex:-1}),ze=o=>{const{classes:t,scroll:i,maxWidth:n,fullWidth:p,fullScreen:u}=o,g={root:["root"],container:["container",`scroll${b(i)}`],paper:["paper",`paperScroll${b(i)}`,`paperWidth${b(String(n))}`,p&&"paperFullWidth",u&&"paperFullScreen"]};return V(g,Ve,t)},He=D(Ye,{name:"MuiDialog",slot:"Root",overridesResolver:(o,t)=>t.root})({"@media print":{position:"absolute !important"}}),Ge=D("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.container,t[`scroll${b(i.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),Je=D(se,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.paper,t[`scrollPaper${b(i.scroll)}`],t[`paperWidth${b(String(i.maxWidth))}`],i.fullWidth&&t.paperFullWidth,i.fullScreen&&t.paperFullScreen]}})(re(({theme:o})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:t})=>!t.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${Z.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(o.breakpoints.values).filter(t=>t!=="xs").map(t=>({props:{maxWidth:t},style:{maxWidth:`${o.breakpoints.values[t]}${o.breakpoints.unit}`,[`&.${Z.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[t]+64)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:t})=>t.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:t})=>t.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${Z.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Qe=h.forwardRef(function(t,i){const n=K({props:t,name:"MuiDialog"}),p=Ke(),u={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":m,"aria-modal":x=!0,BackdropComponent:z,BackdropProps:me,children:ue,className:ge,disableEscapeKeyDown:ee=!1,fullScreen:he=!1,fullWidth:xe=!1,maxWidth:De="sm",onBackdropClick:oe,onClick:te,onClose:H,open:ie,PaperComponent:Ce=se,PaperProps:ne={},scroll:fe="paper",slots:je={},slotProps:ve={},TransitionComponent:be=le,transitionDuration:ae=u,TransitionProps:Te,...ye}=n,f={...n,disableEscapeKeyDown:ee,fullScreen:he,fullWidth:xe,maxWidth:De,scroll:fe},G=ze(f),J=h.useRef(),ke=j=>{J.current=j.target===j.currentTarget},Se=j=>{te&&te(j),J.current&&(J.current=null,oe&&oe(j),H&&H(j,"backdropClick"))},Q=Ie(m),We=h.useMemo(()=>({titleId:Q}),[Q]),we={transition:be,...je},Be={transition:Te,paper:ne,backdrop:me,...ve},T={slots:we,slotProps:Be},[Ae,Fe]=y("root",{elementType:He,shouldForwardComponentProp:!0,externalForwardedProps:T,ownerState:f,className:C(G.root,ge),ref:i}),[Pe,Me]=y("backdrop",{elementType:Xe,shouldForwardComponentProp:!0,externalForwardedProps:T,ownerState:f}),[Re,Ee]=y("paper",{elementType:Je,shouldForwardComponentProp:!0,externalForwardedProps:T,ownerState:f,className:C(G.paper,ne.className)}),[Ne,$e]=y("container",{elementType:Ge,externalForwardedProps:T,ownerState:f,className:C(G.container)}),[Le,qe]=y("transition",{elementType:le,externalForwardedProps:T,ownerState:f,additionalProps:{appear:!0,in:ie,timeout:ae,role:"presentation"}});return e.jsx(Ae,{closeAfterTransition:!0,slots:{backdrop:Pe},slotProps:{backdrop:{transitionDuration:ae,as:z,...Me}},disableEscapeKeyDown:ee,onClose:H,open:ie,onClick:Se,...Fe,...ye,children:e.jsx(Le,{...qe,children:e.jsx(Ne,{onMouseDown:ke,...$e,children:e.jsx(Re,{as:Ce,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":Q,"aria-modal":x,...Ee,children:e.jsx(pe.Provider,{value:We,children:ue})})})})})});function Ze(o){return _("MuiDialogActions",o)}Y("MuiDialogActions",["root","spacing"]);const eo=o=>{const{classes:t,disableSpacing:i}=o;return V({root:["root",!i&&"spacing"]},Ze,t)},oo=D("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,!i.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:o})=>!o.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),l=h.forwardRef(function(t,i){const n=K({props:t,name:"MuiDialogActions"}),{className:p,disableSpacing:u=!1,...g}=n,m={...n,disableSpacing:u},x=eo(m);return e.jsx(oo,{className:C(x.root,p),ownerState:m,ref:i,...g})});function to(o){return _("MuiDialogContent",o)}Y("MuiDialogContent",["root","dividers"]);function io(o){return _("MuiDialogTitle",o)}const no=Y("MuiDialogTitle",["root"]),ao=o=>{const{classes:t,dividers:i}=o;return V({root:["root",i&&"dividers"]},to,t)},lo=D("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,i.dividers&&t.dividers]}})(re(({theme:o})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:t})=>t.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:t})=>!t.dividers,style:{[`.${no.root} + &`]:{paddingTop:0}}}]}))),r=h.forwardRef(function(t,i){const n=K({props:t,name:"MuiDialogContent"}),{className:p,dividers:u=!1,...g}=n,m={...n,dividers:u},x=ao(m);return e.jsx(lo,{className:C(x.root,p),ownerState:m,ref:i,...g})});function ro(o){return _("MuiDialogContentText",o)}Y("MuiDialogContentText",["root"]);const so=o=>{const{classes:t}=o,n=V({root:["root"]},ro,t);return{...t,...n}},co=D(de,{shouldForwardProp:o=>Ue(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,t)=>t.root})({}),s=h.forwardRef(function(t,i){const n=K({props:t,name:"MuiDialogContentText"}),{children:p,className:u,...g}=n,m=so(g);return e.jsx(co,{component:"p",variant:"body1",color:"textSecondary",ref:i,ownerState:g,className:C(m.root,u),...n,classes:m})}),po=o=>{const{classes:t}=o;return V({root:["root"]},io,t)},mo=D(de,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),c=h.forwardRef(function(t,i){const n=K({props:t,name:"MuiDialogTitle"}),{className:p,id:u,...g}=n,m=n,x=po(m),{titleId:z=u}=h.useContext(pe);return e.jsx(mo,{component:"h2",className:C(x.root,p),ownerState:m,ref:i,variant:"h6",id:u??z,...g})}),X=Oe.forwardRef(({open:o,onClose:t,maxWidth:i="sm",fullWidth:n=!1,fullScreen:p=!1,scroll:u="paper",children:g,...m},x)=>e.jsx(Qe,{ref:x,open:o,onClose:t,maxWidth:i,fullWidth:n,fullScreen:p,scroll:u,...m,children:g}));X.displayName="Dialog";X.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"If true, the dialog is open"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object, reason: 'backdropClick' | 'escapeKeyDown') => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"union",raw:"'backdropClick' | 'escapeKeyDown'",elements:[{name:"literal",value:"'backdropClick'"},{name:"literal",value:"'escapeKeyDown'"}]},name:"reason"}],return:{name:"void"}}},description:"Callback fired when the dialog requests to be closed"},maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:`The maximum width of the dialog
@default 'sm'`,defaultValue:{value:"'sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog stretches to maxWidth
@default false`,defaultValue:{value:"false",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog is full-screen
@default false`,defaultValue:{value:"false",computed:!1}},scroll:{required:!1,tsType:{name:"union",raw:"'body' | 'paper'",elements:[{name:"literal",value:"'body'"},{name:"literal",value:"'paper'"}]},description:`Determine the container for scrolling the dialog
@default 'paper'`,defaultValue:{value:"'paper'",computed:!1}},disableEscapeKeyDown:{required:!1,tsType:{name:"boolean"},description:`If true, clicking the backdrop will not close the dialog
@default false`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Dialog content"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that describe the dialog"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that label the dialog"}},composes:["MuiDialogProps"]};const it={title:"Molecules/Dialog",component:X,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"If true, the dialog is open"},maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"Determine the max-width of the dialog"},fullWidth:{control:"boolean",description:"If true, the dialog stretches to maxWidth"},fullScreen:{control:"boolean",description:"If true, the dialog is full-screen"},scroll:{control:"select",options:["body","paper"],description:"Determine the container for scrolling the dialog"}}};function d({children:o,...t}){const[i,n]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"contained",onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(X,{...t,open:i,onClose:()=>n(!1),children:typeof o=="function"?o(()=>n(!1)):o})]})}const k={render:()=>e.jsxs(d,{children:[e.jsx(c,{children:"Dialog Title"}),e.jsx(r,{children:e.jsx(s,{children:"This is a simple dialog with a title, content, and actions."})}),e.jsx(l,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:o,children:"Cancel"}),e.jsx(a,{onClick:o,variant:"contained",children:"OK"})]})})]})},S={render:()=>e.jsx(d,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Delete Item?"}),e.jsx(r,{children:e.jsx(s,{children:"This action cannot be undone. Are you sure you want to delete this item?"})}),e.jsxs(l,{children:[e.jsx(a,{onClick:o,children:"Cancel"}),e.jsx(a,{onClick:o,color:"error",variant:"contained",children:"Delete"})]})]})})},W={render:()=>e.jsx(d,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Subscribe to Newsletter"}),e.jsxs(r,{children:[e.jsx(s,{children:"Enter your email address to receive our monthly newsletter."}),e.jsx(ce,{spacing:2,sx:{mt:2},children:e.jsx(v,{autoFocus:!0,label:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})})]}),e.jsxs(l,{children:[e.jsx(a,{onClick:o,children:"Cancel"}),e.jsx(a,{onClick:o,variant:"contained",children:"Subscribe"})]})]})})},w={render:()=>e.jsx(d,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Confirm Action"}),e.jsx(r,{children:e.jsx(s,{children:"Do you want to proceed with this action?"})}),e.jsxs(l,{children:[e.jsx(a,{onClick:o,variant:"outlined",children:"No"}),e.jsx(a,{onClick:o,variant:"contained",color:"primary",children:"Yes"})]})]})})},B={render:()=>e.jsx(d,{maxWidth:"xs",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Extra Small Dialog"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog has a maximum width of 'xs' (444px)."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},A={render:()=>e.jsx(d,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Small Dialog"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog has a maximum width of 'sm' (600px)."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},F={render:()=>e.jsx(d,{maxWidth:"md",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Medium Dialog"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog has a maximum width of 'md' (900px)."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},P={render:()=>e.jsx(d,{maxWidth:"lg",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Large Dialog"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog has a maximum width of 'lg' (1200px)."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},M={render:()=>e.jsx(d,{maxWidth:"xl",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Extra Large Dialog"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog has a maximum width of 'xl' (1536px)."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},R={render:()=>e.jsx(d,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Full Width Dialog"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog stretches to the maximum width (600px for 'sm')."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},E={render:()=>e.jsx(d,{fullScreen:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Full Screen Dialog"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog covers the entire screen. Useful for mobile devices or immersive experiences."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},N={render:()=>e.jsx(d,{scroll:"body",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Scrollable Dialog (Body)"}),e.jsx(r,{children:e.jsx(s,{children:Array.from({length:50},(t,i)=>`Line ${i+1}. `).join("")})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},$={render:()=>e.jsx(d,{scroll:"paper",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Scrollable Dialog (Paper)"}),e.jsx(r,{dividers:!0,children:e.jsx(s,{children:Array.from({length:50},(t,i)=>`Line ${i+1}. `).join("")})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},L={render:()=>e.jsx(d,{maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsx(s,{children:"This dialog doesn't have a title, just content and actions."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})},q={render:()=>e.jsx(d,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Dialog with Dividers"}),e.jsx(r,{dividers:!0,children:e.jsx(s,{children:"This dialog has dividers above and below the content area, creating clear separation between sections."})}),e.jsxs(l,{children:[e.jsx(a,{onClick:o,children:"Cancel"}),e.jsx(a,{onClick:o,variant:"contained",children:"Save"})]})]})})},I={render:()=>e.jsx(d,{fullWidth:!0,maxWidth:"md",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"User Profile"}),e.jsx(r,{dividers:!0,children:e.jsxs(ce,{spacing:3,children:[e.jsx(v,{label:"First Name",fullWidth:!0,required:!0}),e.jsx(v,{label:"Last Name",fullWidth:!0,required:!0}),e.jsx(v,{label:"Email",type:"email",fullWidth:!0,required:!0}),e.jsx(v,{label:"Phone",type:"tel",fullWidth:!0}),e.jsx(v,{label:"Address",fullWidth:!0,multiline:!0,rows:3})]})}),e.jsxs(l,{children:[e.jsx(a,{onClick:o,children:"Cancel"}),e.jsx(a,{onClick:o,variant:"contained",children:"Save"})]})]})})},O={render:()=>{const[o,t]=h.useState(!1),i=(n,p)=>{p!=="backdropClick"&&t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"contained",onClick:()=>t(!0),children:"Open Dialog"}),e.jsxs(X,{open:o,onClose:i,maxWidth:"sm",children:[e.jsx(c,{children:"Cannot Close by Clicking Outside"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog cannot be closed by clicking the backdrop. You must use the Close button or press ESC."})}),e.jsx(l,{children:e.jsx(a,{onClick:()=>t(!1),variant:"contained",children:"Close"})})]})]})}},U={render:()=>e.jsx(d,{disableEscapeKeyDown:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"ESC Key Disabled"}),e.jsx(r,{children:e.jsx(s,{children:"This dialog cannot be closed by pressing the ESC key. You must use the Close button or click the backdrop."})}),e.jsx(l,{children:e.jsx(a,{onClick:o,variant:"contained",children:"Close"})})]})})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This is a simple dialog with a title, content, and actions.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {(handleClose: () => void) => <>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              OK
            </Button>
          </>}
      </DialogActions>
    </DialogDemo>
}`,...k.parameters?.docs?.source},description:{story:"Default Dialog",...k.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo>
      {(handleClose: () => void) => <>
          <DialogTitle>Delete Item?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This action cannot be undone. Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...S.parameters?.docs?.source},description:{story:"Alert Dialog",...S.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo fullWidth maxWidth="sm">
      {(handleClose: () => void) => <>
          <DialogTitle>Subscribe to Newsletter</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your email address to receive our monthly newsletter.
            </DialogContentText>
            <Stack spacing={2} sx={{
          mt: 2
        }}>
              <TextField autoFocus label="Email Address" type="email" fullWidth variant="outlined" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              Subscribe
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...W.parameters?.docs?.source},description:{story:"Form Dialog",...W.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo>
      {(handleClose: () => void) => <>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to proceed with this action?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              No
            </Button>
            <Button onClick={handleClose} variant="contained" color="primary">
              Yes
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...w.parameters?.docs?.source},description:{story:"Confirmation Dialog",...w.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="xs" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Extra Small Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog has a maximum width of 'xs' (444px).
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...B.parameters?.docs?.source},description:{story:"Extra Small Width",...B.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="sm" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Small Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog has a maximum width of 'sm' (600px).
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...A.parameters?.docs?.source},description:{story:"Small Width (Default)",...A.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="md" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Medium Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog has a maximum width of 'md' (900px).
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...F.parameters?.docs?.source},description:{story:"Medium Width",...F.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="lg" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog has a maximum width of 'lg' (1200px).
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...P.parameters?.docs?.source},description:{story:"Large Width",...P.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="xl" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Extra Large Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog has a maximum width of 'xl' (1536px).
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...M.parameters?.docs?.source},description:{story:"Extra Large Width",...M.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo fullWidth maxWidth="sm">
      {(handleClose: () => void) => <>
          <DialogTitle>Full Width Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog stretches to the maximum width (600px for 'sm').
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...R.parameters?.docs?.source},description:{story:"Full Width",...R.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo fullScreen>
      {(handleClose: () => void) => <>
          <DialogTitle>Full Screen Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog covers the entire screen. Useful for mobile devices or immersive
              experiences.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...E.parameters?.docs?.source},description:{story:"Full Screen",...E.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo scroll="body" maxWidth="sm">
      {(handleClose: () => void) => <>
          <DialogTitle>Scrollable Dialog (Body)</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {Array.from({
            length: 50
          }, (_, i) => \`Line \${i + 1}. \`).join('')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...N.parameters?.docs?.source},description:{story:"Scrollable Content (Body Scroll)",...N.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo scroll="paper" maxWidth="sm">
      {(handleClose: () => void) => <>
          <DialogTitle>Scrollable Dialog (Paper)</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              {Array.from({
            length: 50
          }, (_, i) => \`Line \${i + 1}. \`).join('')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...$.parameters?.docs?.source},description:{story:"Scrollable Content (Paper Scroll - Default)",...$.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="sm">
      {(handleClose: () => void) => <>
          <DialogContent>
            <DialogContentText>
              This dialog doesn't have a title, just content and actions.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...L.parameters?.docs?.source},description:{story:"Without Title",...L.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="sm" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Dialog with Dividers</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              This dialog has dividers above and below the content area, creating clear
              separation between sections.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              Save
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...q.parameters?.docs?.source},description:{story:"With Dividers",...q.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo fullWidth maxWidth="md">
      {(handleClose: () => void) => <>
          <DialogTitle>User Profile</DialogTitle>
          <DialogContent dividers>
            <Stack spacing={3}>
              <TextField label="First Name" fullWidth required />
              <TextField label="Last Name" fullWidth required />
              <TextField label="Email" type="email" fullWidth required />
              <TextField label="Phone" type="tel" fullWidth />
              <TextField label="Address" fullWidth multiline rows={3} />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              Save
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...I.parameters?.docs?.source},description:{story:"Complex Form Dialog",...I.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleClose = (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason === 'backdropClick') {
        return; // Prevent closing on backdrop click
      }
      setOpen(false);
    };
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth="sm">
          <DialogTitle>Cannot Close by Clicking Outside</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog cannot be closed by clicking the backdrop. You must use the Close
              button or press ESC.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} variant="contained">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...O.parameters?.docs?.source},description:{story:"Disabled Backdrop Click",...O.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo disableEscapeKeyDown maxWidth="sm">
      {(handleClose: () => void) => <>
          <DialogTitle>ESC Key Disabled</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog cannot be closed by pressing the ESC key. You must use the Close
              button or click the backdrop.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...U.parameters?.docs?.source},description:{story:"Disabled Escape Key",...U.parameters?.docs?.description}}};const nt=["Default","AlertDialog","FormDialog","ConfirmationDialog","ExtraSmallWidth","SmallWidth","MediumWidth","LargeWidth","ExtraLargeWidth","FullWidth","FullScreen","ScrollableBody","ScrollablePaper","WithoutTitle","WithDividers","ComplexFormDialog","DisabledBackdropClick","DisabledEscapeKey"];export{S as AlertDialog,I as ComplexFormDialog,w as ConfirmationDialog,k as Default,O as DisabledBackdropClick,U as DisabledEscapeKey,M as ExtraLargeWidth,B as ExtraSmallWidth,W as FormDialog,E as FullScreen,R as FullWidth,P as LargeWidth,F as MediumWidth,N as ScrollableBody,$ as ScrollablePaper,A as SmallWidth,q as WithDividers,L as WithoutTitle,nt as __namedExportsOrder,it as default};
