import{r as K,a as P,j as e,R}from"./iframe-baYw3PT1.js";import{a as M,b as i,D as n}from"./DialogContent-BxlowHHI.js";import{B as t}from"./Button-CcdgFC5Z.js";import{T as m}from"./TextField-z18VAxZL.js";import{S as N}from"./Stack-B2jxgv3y.js";import{D as a}from"./DialogTitle-C8QML9bQ.js";import{g as I,b as U,s as _,c as Y,a as $,r as V}from"./memoTheme-B5NHVBgT.js";import{T as z}from"./Typography-S5gDVIhi.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-DwHTqhav.js";import"./useSlot-BdR0nDEs.js";import"./resolveComponentProps-DGE65Qsh.js";import"./useForkRef-CTy98Zel.js";import"./Paper-cV_u_5Bs.js";import"./Fade-DobVtkIM.js";import"./utils-CK6gbS5F.js";import"./ButtonBase-D2DVdTvN.js";import"./useEventCallback-Ce1sc177.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DWp5VgVk.js";import"./index-Cs7ICvxj.js";import"./getReactElementRef-yOKJ8OTX.js";import"./Modal-CPvwDiKu.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BtLxKy1M.js";import"./theme-helpers-CoFoCxtx.js";import"./Button-BnTCMX93.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DjUtYO1i.js";import"./TextField-DK-ZMcET.js";import"./Select-B1dT--sa.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DRi2ZUyf.js";import"./FormLabel-2Aiytejm.js";import"./isMuiElement-Bfhs8IWl.js";import"./Menu-vvqg0ETH.js";import"./useSlotProps-Bov7zHvQ.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-td3db1Dg.js";import"./mergeSlotProps-BOdlsOvE.js";import"./List-C82M1qZg.js";import"./ListContext-C4RW6PNv.js";import"./useControlled-DuhEFJJD.js";import"./createSvgIcon-NAU9xPCF.js";import"./FormHelperText-C7xlmLar.js";import"./Stack-d7PsPsbj.js";import"./useThemeProps-BsJkaDId.js";function G(o){return I("MuiDialogContentText",o)}U("MuiDialogContentText",["root"]);const H=o=>{const{classes:s}=o,c=$({root:["root"]},G,s);return{...s,...c}},J=_(z,{shouldForwardProp:o=>V(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,s)=>s.root})({}),l=K.forwardRef(function(s,d){const c=P({props:s,name:"MuiDialogContentText"}),{children:F,className:L,...E}=c,q=H(E);return e.jsx(J,{component:"p",variant:"body1",color:"textSecondary",ref:d,ownerState:E,className:Y(q.root,L),...c,classes:q})}),A=R.forwardRef(({open:o,onClose:s,maxWidth:d="sm",fullWidth:c=!1,fullScreen:F=!1,scroll:L="paper",children:E,...q},O)=>e.jsx(M,{ref:O,open:o,onClose:s,maxWidth:d,fullWidth:c,fullScreen:F,scroll:L,...q,children:E}));A.displayName="Dialog";A.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"If true, the dialog is open"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object, reason: 'backdropClick' | 'escapeKeyDown') => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"union",raw:"'backdropClick' | 'escapeKeyDown'",elements:[{name:"literal",value:"'backdropClick'"},{name:"literal",value:"'escapeKeyDown'"}]},name:"reason"}],return:{name:"void"}}},description:"Callback fired when the dialog requests to be closed"},maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:`The maximum width of the dialog
@default 'sm'`,defaultValue:{value:"'sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog stretches to maxWidth
@default false`,defaultValue:{value:"false",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog is full-screen
@default false`,defaultValue:{value:"false",computed:!1}},scroll:{required:!1,tsType:{name:"union",raw:"'body' | 'paper'",elements:[{name:"literal",value:"'body'"},{name:"literal",value:"'paper'"}]},description:`Determine the container for scrolling the dialog
@default 'paper'`,defaultValue:{value:"'paper'",computed:!1}},disableEscapeKeyDown:{required:!1,tsType:{name:"boolean"},description:`If true, clicking the backdrop will not close the dialog
@default false`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Dialog content"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that describe the dialog"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that label the dialog"}},composes:["MuiDialogProps"]};const Ve={title:"Molecules/Dialog",component:A,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"If true, the dialog is open"},maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"Determine the max-width of the dialog"},fullWidth:{control:"boolean",description:"If true, the dialog stretches to maxWidth"},fullScreen:{control:"boolean",description:"If true, the dialog is full-screen"},scroll:{control:"select",options:["body","paper"],description:"Determine the container for scrolling the dialog"}}};function r({children:o,...s}){const[d,c]=K.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"contained",onClick:()=>c(!0),children:"Open Dialog"}),e.jsx(A,{...s,open:d,onClose:()=>c(!1),children:typeof o=="function"?o(()=>c(!1)):o})]})}const h={render:()=>e.jsxs(r,{children:[e.jsx(a,{children:"Dialog Title"}),e.jsx(i,{children:e.jsx(l,{children:"This is a simple dialog with a title, content, and actions."})}),e.jsx(n,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"OK"})]})})]})},g={render:()=>e.jsx(r,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Delete Item?"}),e.jsx(i,{children:e.jsx(l,{children:"This action cannot be undone. Are you sure you want to delete this item?"})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,color:"error",variant:"contained",children:"Delete"})]})]})})},u={render:()=>e.jsx(r,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Subscribe to Newsletter"}),e.jsxs(i,{children:[e.jsx(l,{children:"Enter your email address to receive our monthly newsletter."}),e.jsx(N,{spacing:2,sx:{mt:2},children:e.jsx(m,{autoFocus:!0,label:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})})]}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Subscribe"})]})]})})},p={render:()=>e.jsx(r,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Confirm Action"}),e.jsx(i,{children:e.jsx(l,{children:"Do you want to proceed with this action?"})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,variant:"outlined",children:"No"}),e.jsx(t,{onClick:o,variant:"contained",color:"primary",children:"Yes"})]})]})})},D={render:()=>e.jsx(r,{maxWidth:"xs",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Extra Small Dialog"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog has a maximum width of 'xs' (444px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},x={render:()=>e.jsx(r,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Small Dialog"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog has a maximum width of 'sm' (600px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},C={render:()=>e.jsx(r,{maxWidth:"md",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Medium Dialog"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog has a maximum width of 'md' (900px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},j={render:()=>e.jsx(r,{maxWidth:"lg",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Large Dialog"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog has a maximum width of 'lg' (1200px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},f={render:()=>e.jsx(r,{maxWidth:"xl",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Extra Large Dialog"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog has a maximum width of 'xl' (1536px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},T={render:()=>e.jsx(r,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Full Width Dialog"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog stretches to the maximum width (600px for 'sm')."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},v={render:()=>e.jsx(r,{fullScreen:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Full Screen Dialog"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog covers the entire screen. Useful for mobile devices or immersive experiences."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},b={render:()=>e.jsx(r,{scroll:"body",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Scrollable Dialog (Body)"}),e.jsx(i,{children:e.jsx(l,{children:Array.from({length:50},(s,d)=>`Line ${d+1}. `).join("")})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},y={render:()=>e.jsx(r,{scroll:"paper",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Scrollable Dialog (Paper)"}),e.jsx(i,{dividers:!0,children:e.jsx(l,{children:Array.from({length:50},(s,d)=>`Line ${d+1}. `).join("")})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},k={render:()=>e.jsx(r,{maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(l,{children:"This dialog doesn't have a title, just content and actions."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},W={render:()=>e.jsx(r,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Dialog with Dividers"}),e.jsx(i,{dividers:!0,children:e.jsx(l,{children:"This dialog has dividers above and below the content area, creating clear separation between sections."})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Save"})]})]})})},S={render:()=>e.jsx(r,{fullWidth:!0,maxWidth:"md",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"User Profile"}),e.jsx(i,{dividers:!0,children:e.jsxs(N,{spacing:3,children:[e.jsx(m,{label:"First Name",fullWidth:!0,required:!0}),e.jsx(m,{label:"Last Name",fullWidth:!0,required:!0}),e.jsx(m,{label:"Email",type:"email",fullWidth:!0,required:!0}),e.jsx(m,{label:"Phone",type:"tel",fullWidth:!0}),e.jsx(m,{label:"Address",fullWidth:!0,multiline:!0,rows:3})]})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Save"})]})]})})},B={render:()=>{const[o,s]=K.useState(!1),d=(c,F)=>{F!=="backdropClick"&&s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"contained",onClick:()=>s(!0),children:"Open Dialog"}),e.jsxs(A,{open:o,onClose:d,maxWidth:"sm",children:[e.jsx(a,{children:"Cannot Close by Clicking Outside"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog cannot be closed by clicking the backdrop. You must use the Close button or press ESC."})}),e.jsx(n,{children:e.jsx(t,{onClick:()=>s(!1),variant:"contained",children:"Close"})})]})]})}},w={render:()=>e.jsx(r,{disableEscapeKeyDown:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"ESC Key Disabled"}),e.jsx(i,{children:e.jsx(l,{children:"This dialog cannot be closed by pressing the ESC key. You must use the Close button or click the backdrop."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Default Dialog",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Alert Dialog",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Form Dialog",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Confirmation Dialog",...p.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Extra Small Width",...D.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Small Width (Default)",...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Medium Width",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Large Width",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Extra Large Width",...f.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Full Width",...T.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Full Screen",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Scrollable Content (Body Scroll)",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Scrollable Content (Paper Scroll - Default)",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Without Title",...k.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"With Dividers",...W.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Complex Form Dialog",...S.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Disabled Backdrop Click",...B.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Disabled Escape Key",...w.parameters?.docs?.description}}};const ze=["Default","AlertDialog","FormDialog","ConfirmationDialog","ExtraSmallWidth","SmallWidth","MediumWidth","LargeWidth","ExtraLargeWidth","FullWidth","FullScreen","ScrollableBody","ScrollablePaper","WithoutTitle","WithDividers","ComplexFormDialog","DisabledBackdropClick","DisabledEscapeKey"];export{g as AlertDialog,S as ComplexFormDialog,p as ConfirmationDialog,h as Default,B as DisabledBackdropClick,w as DisabledEscapeKey,f as ExtraLargeWidth,D as ExtraSmallWidth,u as FormDialog,v as FullScreen,T as FullWidth,j as LargeWidth,C as MediumWidth,b as ScrollableBody,y as ScrollablePaper,x as SmallWidth,W as WithDividers,k as WithoutTitle,ze as __namedExportsOrder,Ve as default};
