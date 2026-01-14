import{r as L,u as P,j as e,R as Y}from"./iframe-CckttRrP.js";import{c as $,g as V,a as z,b as n,D as a}from"./DialogContent-BQ7RiWmY.js";import{B as t}from"./Button-dkyv_-a4.js";import{T as p}from"./TextField-BkIRzPzH.js";import{S as K}from"./Stack-C1HYDbMg.js";import{g as G,b as H,s as O,c as M,a as I,r as J}from"./memoTheme-D40aOm1p.js";import{T as U}from"./Typography-CJ6AbGd8.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BEZ5DwR-.js";import"./useSlot-CgXclaX5.js";import"./resolveComponentProps-DRuAR2bf.js";import"./useForkRef-BrpzIuMK.js";import"./Paper-Bui-Aeo_.js";import"./Fade-BqMEmdmE.js";import"./utils-lOMGRC3H.js";import"./ButtonBase-ExDGUqAK.js";import"./useEventCallback-CPSVspcQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-kgCUEM1X.js";import"./index-Bh9eExNx.js";import"./getReactElementRef-BfArtCKM.js";import"./Modal-o9WbiOFn.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DBhDB9Ic.js";import"./Button-DxmsTS6c.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-Dak25OHr.js";import"./TextField-SDNeaPYD.js";import"./Select-mUga0ETM.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-EymjnYeV.js";import"./FormLabel-DTZsla__.js";import"./isMuiElement-BGa7mOkb.js";import"./Menu-CYPcPT7G.js";import"./useSlotProps-C72MpppY.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-DWiz16nJ.js";import"./mergeSlotProps-DAgLY3T6.js";import"./List-DxqDo-Dc.js";import"./ListContext-GaF7-EKi.js";import"./useControlled-BFv_hz3u.js";import"./createSvgIcon-ZFHZ2TuZ.js";import"./FormHelperText-DVxEsqsW.js";import"./Stack-B-CToEQK.js";import"./styled-Yz1ixKRP.js";import"./useThemeProps-jBpPjYFU.js";function Q(o){return G("MuiDialogContentText",o)}H("MuiDialogContentText",["root"]);const X=o=>{const{classes:i}=o,c=I({root:["root"]},Q,i);return{...i,...c}},Z=O(U,{shouldForwardProp:o=>J(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,i)=>i.root})({}),l=L.forwardRef(function(i,d){const c=P({props:i,name:"MuiDialogContentText"}),{children:h,className:g,...u}=c,m=X(u);return e.jsx(Z,{component:"p",variant:"body1",color:"textSecondary",ref:d,ownerState:u,className:M(m.root,g),...c,classes:m})}),ee=o=>{const{classes:i}=o;return I({root:["root"]},V,i)},oe=O(U,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,i)=>i.root})({padding:"16px 24px",flex:"0 0 auto"}),r=L.forwardRef(function(i,d){const c=P({props:i,name:"MuiDialogTitle"}),{className:h,id:g,...u}=c,m=c,R=ee(m),{titleId:_=g}=L.useContext($);return e.jsx(oe,{component:"h2",className:M(R.root,h),ownerState:m,ref:d,variant:"h6",id:g??_,...u})}),N=Y.forwardRef(({open:o,onClose:i,maxWidth:d="sm",fullWidth:c=!1,fullScreen:h=!1,scroll:g="paper",children:u,...m},R)=>e.jsx(z,{ref:R,open:o,onClose:i,maxWidth:d,fullWidth:c,fullScreen:h,scroll:g,...m,children:u}));N.displayName="Dialog";N.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"If true, the dialog is open"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object, reason: 'backdropClick' | 'escapeKeyDown') => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"union",raw:"'backdropClick' | 'escapeKeyDown'",elements:[{name:"literal",value:"'backdropClick'"},{name:"literal",value:"'escapeKeyDown'"}]},name:"reason"}],return:{name:"void"}}},description:"Callback fired when the dialog requests to be closed"},maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:`The maximum width of the dialog
@default 'sm'`,defaultValue:{value:"'sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog stretches to maxWidth
@default false`,defaultValue:{value:"false",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog is full-screen
@default false`,defaultValue:{value:"false",computed:!1}},scroll:{required:!1,tsType:{name:"union",raw:"'body' | 'paper'",elements:[{name:"literal",value:"'body'"},{name:"literal",value:"'paper'"}]},description:`Determine the container for scrolling the dialog
@default 'paper'`,defaultValue:{value:"'paper'",computed:!1}},disableEscapeKeyDown:{required:!1,tsType:{name:"boolean"},description:`If true, clicking the backdrop will not close the dialog
@default false`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Dialog content"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that describe the dialog"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that label the dialog"}},composes:["MuiDialogProps"]};const Je={title:"Molecules/Dialog",component:N,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"If true, the dialog is open"},maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"Determine the max-width of the dialog"},fullWidth:{control:"boolean",description:"If true, the dialog stretches to maxWidth"},fullScreen:{control:"boolean",description:"If true, the dialog is full-screen"},scroll:{control:"select",options:["body","paper"],description:"Determine the container for scrolling the dialog"}}};function s({children:o,...i}){const[d,c]=L.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"contained",onClick:()=>c(!0),children:"Open Dialog"}),e.jsx(N,{...i,open:d,onClose:()=>c(!1),children:typeof o=="function"?o(()=>c(!1)):o})]})}const D={render:()=>e.jsxs(s,{children:[e.jsx(r,{children:"Dialog Title"}),e.jsx(n,{children:e.jsx(l,{children:"This is a simple dialog with a title, content, and actions."})}),e.jsx(a,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"OK"})]})})]})},x={render:()=>e.jsx(s,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Delete Item?"}),e.jsx(n,{children:e.jsx(l,{children:"This action cannot be undone. Are you sure you want to delete this item?"})}),e.jsxs(a,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,color:"error",variant:"contained",children:"Delete"})]})]})})},C={render:()=>e.jsx(s,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Subscribe to Newsletter"}),e.jsxs(n,{children:[e.jsx(l,{children:"Enter your email address to receive our monthly newsletter."}),e.jsx(K,{spacing:2,sx:{mt:2},children:e.jsx(p,{autoFocus:!0,label:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})})]}),e.jsxs(a,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Subscribe"})]})]})})},j={render:()=>e.jsx(s,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Confirm Action"}),e.jsx(n,{children:e.jsx(l,{children:"Do you want to proceed with this action?"})}),e.jsxs(a,{children:[e.jsx(t,{onClick:o,variant:"outlined",children:"No"}),e.jsx(t,{onClick:o,variant:"contained",color:"primary",children:"Yes"})]})]})})},f={render:()=>e.jsx(s,{maxWidth:"xs",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Extra Small Dialog"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog has a maximum width of 'xs' (444px)."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},T={render:()=>e.jsx(s,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Small Dialog"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog has a maximum width of 'sm' (600px)."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},v={render:()=>e.jsx(s,{maxWidth:"md",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Medium Dialog"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog has a maximum width of 'md' (900px)."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},b={render:()=>e.jsx(s,{maxWidth:"lg",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Large Dialog"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog has a maximum width of 'lg' (1200px)."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},y={render:()=>e.jsx(s,{maxWidth:"xl",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Extra Large Dialog"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog has a maximum width of 'xl' (1536px)."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},k={render:()=>e.jsx(s,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Full Width Dialog"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog stretches to the maximum width (600px for 'sm')."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},W={render:()=>e.jsx(s,{fullScreen:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Full Screen Dialog"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog covers the entire screen. Useful for mobile devices or immersive experiences."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},S={render:()=>e.jsx(s,{scroll:"body",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Scrollable Dialog (Body)"}),e.jsx(n,{children:e.jsx(l,{children:Array.from({length:50},(i,d)=>`Line ${d+1}. `).join("")})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},B={render:()=>e.jsx(s,{scroll:"paper",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Scrollable Dialog (Paper)"}),e.jsx(n,{dividers:!0,children:e.jsx(l,{children:Array.from({length:50},(i,d)=>`Line ${d+1}. `).join("")})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},w={render:()=>e.jsx(s,{maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(l,{children:"This dialog doesn't have a title, just content and actions."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},A={render:()=>e.jsx(s,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Dialog with Dividers"}),e.jsx(n,{dividers:!0,children:e.jsx(l,{children:"This dialog has dividers above and below the content area, creating clear separation between sections."})}),e.jsxs(a,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Save"})]})]})})},F={render:()=>e.jsx(s,{fullWidth:!0,maxWidth:"md",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"User Profile"}),e.jsx(n,{dividers:!0,children:e.jsxs(K,{spacing:3,children:[e.jsx(p,{label:"First Name",fullWidth:!0,required:!0}),e.jsx(p,{label:"Last Name",fullWidth:!0,required:!0}),e.jsx(p,{label:"Email",type:"email",fullWidth:!0,required:!0}),e.jsx(p,{label:"Phone",type:"tel",fullWidth:!0}),e.jsx(p,{label:"Address",fullWidth:!0,multiline:!0,rows:3})]})}),e.jsxs(a,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Save"})]})]})})},E={render:()=>{const[o,i]=L.useState(!1),d=(c,h)=>{h!=="backdropClick"&&i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"contained",onClick:()=>i(!0),children:"Open Dialog"}),e.jsxs(N,{open:o,onClose:d,maxWidth:"sm",children:[e.jsx(r,{children:"Cannot Close by Clicking Outside"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog cannot be closed by clicking the backdrop. You must use the Close button or press ESC."})}),e.jsx(a,{children:e.jsx(t,{onClick:()=>i(!1),variant:"contained",children:"Close"})})]})]})}},q={render:()=>e.jsx(s,{disableEscapeKeyDown:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"ESC Key Disabled"}),e.jsx(n,{children:e.jsx(l,{children:"This dialog cannot be closed by pressing the ESC key. You must use the Close button or click the backdrop."})}),e.jsx(a,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Default Dialog",...D.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Alert Dialog",...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Form Dialog",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo>
      {(handleClose: () => void) => <>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogContent>
            <DialogContentText>Do you want to proceed with this action?</DialogContentText>
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
}`,...j.parameters?.docs?.source},description:{story:"Confirmation Dialog",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="xs" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Extra Small Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'xs' (444px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...f.parameters?.docs?.source},description:{story:"Extra Small Width",...f.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="sm" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Small Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'sm' (600px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...T.parameters?.docs?.source},description:{story:"Small Width (Default)",...T.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="md" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Medium Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'md' (900px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...v.parameters?.docs?.source},description:{story:"Medium Width",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="lg" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'lg' (1200px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...b.parameters?.docs?.source},description:{story:"Large Width",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="xl" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Extra Large Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'xl' (1536px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...y.parameters?.docs?.source},description:{story:"Extra Large Width",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Full Width",...k.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Full Screen",...W.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Scrollable Content (Body Scroll)",...S.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Scrollable Content (Paper Scroll - Default)",...B.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Without Title",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo maxWidth="sm" fullWidth>
      {(handleClose: () => void) => <>
          <DialogTitle>Dialog with Dividers</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              This dialog has dividers above and below the content area, creating clear separation
              between sections.
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
}`,...A.parameters?.docs?.source},description:{story:"With Dividers",...A.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Complex Form Dialog",...F.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
              This dialog cannot be closed by clicking the backdrop. You must use the Close button
              or press ESC.
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
}`,...E.parameters?.docs?.source},description:{story:"Disabled Backdrop Click",...E.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo disableEscapeKeyDown maxWidth="sm">
      {(handleClose: () => void) => <>
          <DialogTitle>ESC Key Disabled</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog cannot be closed by pressing the ESC key. You must use the Close button or
              click the backdrop.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...q.parameters?.docs?.source},description:{story:"Disabled Escape Key",...q.parameters?.docs?.description}}};const Qe=["Default","AlertDialog","FormDialog","ConfirmationDialog","ExtraSmallWidth","SmallWidth","MediumWidth","LargeWidth","ExtraLargeWidth","FullWidth","FullScreen","ScrollableBody","ScrollablePaper","WithoutTitle","WithDividers","ComplexFormDialog","DisabledBackdropClick","DisabledEscapeKey"];export{x as AlertDialog,F as ComplexFormDialog,j as ConfirmationDialog,D as Default,E as DisabledBackdropClick,q as DisabledEscapeKey,y as ExtraLargeWidth,f as ExtraSmallWidth,C as FormDialog,W as FullScreen,k as FullWidth,b as LargeWidth,v as MediumWidth,S as ScrollableBody,B as ScrollablePaper,T as SmallWidth,A as WithDividers,w as WithoutTitle,Qe as __namedExportsOrder,Je as default};
