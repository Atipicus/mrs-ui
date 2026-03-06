import{g as R,r as P,a as M,j as e,P as m,R as I}from"./iframe-m0FcCUbT.js";import{a as U,b as i,D as n}from"./DialogContent-CRW0O2ND.js";import{B as t}from"./Button-Cu9UkBT5.js";import{T as h}from"./TextField-BSxrXEqV.js";import{S as N}from"./Stack-3koFKRvk.js";import{D as l}from"./DialogTitle-D7HjsyDw.js";import{g as _,c as Y,a as $,s as V,r as z}from"./memoTheme-C11nCEJ1.js";import{T as G}from"./Typography-BAhyjZNg.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme--qrtAMJV.js";import"./useSlot-BPbjla4P.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useForkRef-DeUHlcp-.js";import"./Paper-BQ8rpTFt.js";import"./chainPropTypes-CPkqCYVL.js";import"./integerPropType-DVPNO1YA.js";import"./Fade-DvsUOEyO.js";import"./utils-e4gBpPL7.js";import"./ButtonBase-Bd5szlVj.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./index-CMwIBjt_.js";import"./index-DWLUMx4m.js";import"./getReactElementRef-DAzX-jKI.js";import"./Modal-DCqzUJ55.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BROk4iQM.js";import"./HTMLElementType-Bpqya3bH.js";import"./theme-helpers-CoFoCxtx.js";import"./Button-CJ6MgozL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-nywBWFjt.js";import"./TextField-CmRpz8i1.js";import"./Select-BLLXmAAY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C69-cJvf.js";import"./FormLabel-sR584vL_.js";import"./isMuiElement-CG90bCKT.js";import"./Menu-Dcsn98hI.js";import"./useSlotProps-RklMYb_o.js";import"./isHostComponent-DVu5iVWx.js";import"./Grow-DT4E6Ksq.js";import"./mergeSlotProps-Bkt73wcY.js";import"./List-Ba_CvKvH.js";import"./ListContext-CR7FhADn.js";import"./useControlled-Cm6cFOSH.js";import"./createSvgIcon-DzjuuRaM.js";import"./FormHelperText-C1e4lLm_.js";import"./Stack-DLDfFx0e.js";import"./useThemeProps-OFH6wkZ1.js";function H(o){return R("MuiDialogContentText",o)}_("MuiDialogContentText",["root"]);const J=o=>{const{classes:s}=o,c=$({root:["root"]},H,s);return{...s,...c}},Q=V(G,{shouldForwardProp:o=>z(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,s)=>s.root})({}),a=P.forwardRef(function(s,d){const c=M({props:s,name:"MuiDialogContentText"}),{children:E,className:L,...q}=c,O=J(q);return e.jsx(Q,{component:"p",variant:"body1",color:"textSecondary",ref:d,ownerState:q,className:Y(O.root,L),...c,classes:O})});a.propTypes={children:m.node,classes:m.object,className:m.string,sx:m.oneOfType([m.arrayOf(m.oneOfType([m.func,m.object,m.bool])),m.func,m.object])};const F=I.forwardRef(({open:o,onClose:s,maxWidth:d="sm",fullWidth:c=!1,fullScreen:E=!1,scroll:L="paper",children:q,...O},K)=>e.jsx(U,{ref:K,open:o,onClose:s,maxWidth:d,fullWidth:c,fullScreen:E,scroll:L,...O,children:q}));F.displayName="Dialog";F.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"If true, the dialog is open"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object, reason: 'backdropClick' | 'escapeKeyDown') => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"union",raw:"'backdropClick' | 'escapeKeyDown'",elements:[{name:"literal",value:"'backdropClick'"},{name:"literal",value:"'escapeKeyDown'"}]},name:"reason"}],return:{name:"void"}}},description:"Callback fired when the dialog requests to be closed"},maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:`The maximum width of the dialog
@default 'sm'`,defaultValue:{value:"'sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog stretches to maxWidth
@default false`,defaultValue:{value:"false",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:`If true, the dialog is full-screen
@default false`,defaultValue:{value:"false",computed:!1}},scroll:{required:!1,tsType:{name:"union",raw:"'body' | 'paper'",elements:[{name:"literal",value:"'body'"},{name:"literal",value:"'paper'"}]},description:`Determine the container for scrolling the dialog
@default 'paper'`,defaultValue:{value:"'paper'",computed:!1}},disableEscapeKeyDown:{required:!1,tsType:{name:"boolean"},description:`If true, clicking the backdrop will not close the dialog
@default false`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Dialog content"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that describe the dialog"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"The id(s) of the element(s) that label the dialog"}},composes:["MuiDialogProps"]};const Qe={title:"Molecules/Dialog",component:F,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{open:{control:"boolean",description:"If true, the dialog is open"},maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"Determine the max-width of the dialog"},fullWidth:{control:"boolean",description:"If true, the dialog stretches to maxWidth"},fullScreen:{control:"boolean",description:"If true, the dialog is full-screen"},scroll:{control:"select",options:["body","paper"],description:"Determine the container for scrolling the dialog"}}};function r({children:o,...s}){const[d,c]=P.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"contained",onClick:()=>c(!0),children:"Open Dialog"}),e.jsx(F,{...s,open:d,onClose:()=>c(!1),children:typeof o=="function"?o(()=>c(!1)):o})]})}const g={render:()=>e.jsx(r,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Dialog Title"}),e.jsx(i,{children:e.jsx(a,{children:"This is a simple dialog with a title, content, and actions."})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"OK"})]})]})})},u={render:()=>e.jsx(r,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Delete Item?"}),e.jsx(i,{children:e.jsx(a,{children:"This action cannot be undone. Are you sure you want to delete this item?"})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,color:"error",variant:"contained",children:"Delete"})]})]})})},p={render:()=>e.jsx(r,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Subscribe to Newsletter"}),e.jsxs(i,{children:[e.jsx(a,{children:"Enter your email address to receive our monthly newsletter."}),e.jsx(N,{spacing:2,sx:{mt:2},children:e.jsx(h,{autoFocus:!0,label:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})})]}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Subscribe"})]})]})})},D={render:()=>e.jsx(r,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Confirm Action"}),e.jsx(i,{children:e.jsx(a,{children:"Do you want to proceed with this action?"})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,variant:"outlined",children:"No"}),e.jsx(t,{onClick:o,variant:"contained",color:"primary",children:"Yes"})]})]})})},x={render:()=>e.jsx(r,{maxWidth:"xs",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Extra Small Dialog"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog has a maximum width of 'xs' (444px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},C={render:()=>e.jsx(r,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Small Dialog"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog has a maximum width of 'sm' (600px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},j={render:()=>e.jsx(r,{maxWidth:"md",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Medium Dialog"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog has a maximum width of 'md' (900px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},f={render:()=>e.jsx(r,{maxWidth:"lg",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Large Dialog"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog has a maximum width of 'lg' (1200px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},T={render:()=>e.jsx(r,{maxWidth:"xl",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Extra Large Dialog"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog has a maximum width of 'xl' (1536px)."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},v={render:()=>e.jsx(r,{fullWidth:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Full Width Dialog"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog stretches to the maximum width (600px for 'sm')."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},b={render:()=>e.jsx(r,{fullScreen:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Full Screen Dialog"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog covers the entire screen. Useful for mobile devices or immersive experiences."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},y={render:()=>e.jsx(r,{scroll:"body",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Scrollable Dialog (Body)"}),e.jsx(i,{children:e.jsx(a,{children:Array.from({length:50},(s,d)=>`Line ${d+1}. `).join("")})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},k={render:()=>e.jsx(r,{scroll:"paper",maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Scrollable Dialog (Paper)"}),e.jsx(i,{dividers:!0,children:e.jsx(a,{children:Array.from({length:50},(s,d)=>`Line ${d+1}. `).join("")})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},W={render:()=>e.jsx(r,{maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsx(a,{children:"This dialog doesn't have a title, just content and actions."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})},S={render:()=>e.jsx(r,{maxWidth:"sm",fullWidth:!0,children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Dialog with Dividers"}),e.jsx(i,{dividers:!0,children:e.jsx(a,{children:"This dialog has dividers above and below the content area, creating clear separation between sections."})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Save"})]})]})})},B={render:()=>e.jsx(r,{fullWidth:!0,maxWidth:"md",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"User Profile"}),e.jsx(i,{dividers:!0,children:e.jsxs(N,{spacing:3,children:[e.jsx(h,{label:"First Name",fullWidth:!0,required:!0}),e.jsx(h,{label:"Last Name",fullWidth:!0,required:!0}),e.jsx(h,{label:"Email",type:"email",fullWidth:!0,required:!0}),e.jsx(h,{label:"Phone",type:"tel",fullWidth:!0}),e.jsx(h,{label:"Address",fullWidth:!0,multiline:!0,rows:3})]})}),e.jsxs(n,{children:[e.jsx(t,{onClick:o,children:"Cancel"}),e.jsx(t,{onClick:o,variant:"contained",children:"Save"})]})]})})},w={render:()=>{const[o,s]=P.useState(!1),d=(c,E)=>{E!=="backdropClick"&&s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"contained",onClick:()=>s(!0),children:"Open Dialog"}),e.jsxs(F,{open:o,onClose:d,maxWidth:"sm",children:[e.jsx(l,{children:"Cannot Close by Clicking Outside"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog cannot be closed by clicking the backdrop. You must use the Close button or press ESC."})}),e.jsx(n,{children:e.jsx(t,{onClick:()=>s(!1),variant:"contained",children:"Close"})})]})]})}},A={render:()=>e.jsx(r,{disableEscapeKeyDown:!0,maxWidth:"sm",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"ESC Key Disabled"}),e.jsx(i,{children:e.jsx(a,{children:"This dialog cannot be closed by pressing the ESC key. You must use the Close button or click the backdrop."})}),e.jsx(n,{children:e.jsx(t,{onClick:o,variant:"contained",children:"Close"})})]})})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo>
      {(handleClose: () => void) => <>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a simple dialog with a title, content, and actions.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              OK
            </Button>
          </DialogActions>
        </>}
    </DialogDemo>
}`,...g.parameters?.docs?.source},description:{story:"Default Dialog",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Alert Dialog",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Form Dialog",...p.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Confirmation Dialog",...D.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Extra Small Width",...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Small Width (Default)",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Medium Width",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Large Width",...f.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Extra Large Width",...T.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Full Width",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Full Screen",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Scrollable Content (Body Scroll)",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Scrollable Content (Paper Scroll - Default)",...k.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Without Title",...W.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"With Dividers",...S.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Complex Form Dialog",...B.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Disabled Backdrop Click",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Disabled Escape Key",...A.parameters?.docs?.description}}};const Xe=["Default","AlertDialog","FormDialog","ConfirmationDialog","ExtraSmallWidth","SmallWidth","MediumWidth","LargeWidth","ExtraLargeWidth","FullWidth","FullScreen","ScrollableBody","ScrollablePaper","WithoutTitle","WithDividers","ComplexFormDialog","DisabledBackdropClick","DisabledEscapeKey"];export{u as AlertDialog,B as ComplexFormDialog,D as ConfirmationDialog,g as Default,w as DisabledBackdropClick,A as DisabledEscapeKey,T as ExtraLargeWidth,x as ExtraSmallWidth,p as FormDialog,b as FullScreen,v as FullWidth,f as LargeWidth,j as MediumWidth,y as ScrollableBody,k as ScrollablePaper,C as SmallWidth,S as WithDividers,W as WithoutTitle,Xe as __namedExportsOrder,Qe as default};
