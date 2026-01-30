import{R as y,j as e}from"./iframe-baYw3PT1.js";import{M as R}from"./MaterialSymbol-CgTeZz5w.js";import{u as j}from"./useTheme-DwHTqhav.js";import{I as D}from"./IconButton-RiqsTaM1.js";import{A as W}from"./Alert-it6AI_1g.js";import{S as o}from"./Stack-d7PsPsbj.js";import{T as b}from"./Typography-S5gDVIhi.js";import{B as s}from"./Box-DfHYOIZk.js";import{B as q}from"./Button-BnTCMX93.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B5NHVBgT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D2DVdTvN.js";import"./useForkRef-CTy98Zel.js";import"./useEventCallback-Ce1sc177.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DjUtYO1i.js";import"./useSlot-BdR0nDEs.js";import"./resolveComponentProps-DGE65Qsh.js";import"./createSvgIcon-NAU9xPCF.js";import"./Close-C_kySimi.js";import"./Paper-cV_u_5Bs.js";import"./useThemeProps-BsJkaDId.js";const F={error:"error",warning:"error",info:"info",success:"check_circle"};function M(t,a){return j().palette._components.alert[t][a]}const r=y.forwardRef(({severity:t="error",variant:a="filled",title:m,description:h,icon:f=!0,close:A=!1,onClose:B,action:x,sx:C,children:k,...S},T)=>{const n=j(),i=M(t,a);n.shape;const w="16px",g=F[t],I=a==="filled"?1:0,N=f===!1?!1:y.isValidElement(f)?f:g&&e.jsx(R,{icon:g,fill:I,size:"medium",color:i.foreground}),v=A&&e.jsx(D,{size:"medium","aria-label":"close",onClick:B,sx:{color:i.foreground},children:e.jsx(R,{icon:"close",size:"medium",color:i.foreground})}),V=x?v?e.jsxs(o,{direction:"row",spacing:1,alignItems:"center",children:[x,v]}):x:v||void 0;return e.jsx(W,{ref:T,severity:t,variant:"standard",icon:N,action:V,sx:{borderRadius:w,backgroundColor:i.background,color:i.foreground,alignItems:"top",py:1.2,px:2,...a==="outlined"&&{border:`1px solid ${i.border}`},"& .MuiAlert-icon":{color:i.foreground,padding:.25,marginRight:n.spacing(1),mt:.25},"& .MuiAlert-message":{padding:1,width:"100%"},"& .MuiAlert-action":{padding:0,marginLeft:n.spacing(2),alignItems:"top"},...C},...S,children:e.jsxs(o,{spacing:.25,children:[m&&e.jsx(b,{variant:"h5",fontWeight:n.typography.fontWeightMedium,lineHeight:1.2,children:m}),h&&e.jsx(b,{variant:"body1",lineHeight:1.5,children:h}),k]})})});r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Alert severity. Controls colors and default icon.
@default 'error'`,defaultValue:{value:"'error'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:`Visual variant of the alert.
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title displayed above the description."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description text. If omitted, only the title renders."},icon:{required:!1,tsType:{name:"union",raw:"boolean | ReactNode",elements:[{name:"boolean"},{name:"ReactNode"}]},description:"Controls the leading icon. Pass `false` to hide, or a ReactNode to override.\n@default true",defaultValue:{value:"true",computed:!1}},close:{required:!1,tsType:{name:"boolean"},description:"If true, renders a close button on the right.\nProvide an `onClose` handler to respond to clicks.\n@default false",defaultValue:{value:"false",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:"Custom action content rendered on the right (e.g., a Button).\nIf `close` is also true, the close button will appear after this content."}},composes:["Omit"]};const ne={title:"Molecules/Alert",component:r,tags:["autodocs"],argTypes:{severity:{control:"select",options:["error","warning","info","success"]},variant:{control:"select",options:["filled","outlined","standard"]},icon:{control:"boolean"},close:{control:"boolean"}},args:{severity:"error",variant:"filled",title:"Title",description:"Description",icon:!0,size:"32px",close:!0}},l={args:{severity:"info",variant:"outlined",icon:!1}},d={args:{icon:!1,close:!1,severity:"success",variant:"outlined"},render:()=>e.jsx(o,{spacing:3,children:["error","warning","info","success"].map(t=>e.jsx(s,{children:e.jsxs(o,{direction:"column",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(r,{severity:t,variant:"filled",title:"Title",description:"Description"}),e.jsx(r,{severity:t,variant:"outlined",title:"Title",description:"Description"}),e.jsx(r,{severity:t,variant:"standard",title:"Title",description:"Description"})]})},t))})},c={args:{severity:"info"},render:()=>e.jsxs(o,{spacing:2,children:[e.jsx(r,{severity:"error",variant:"filled",icon:!1,title:"No icon",description:"Filled"}),e.jsx(r,{severity:"info",variant:"outlined",icon:!1,title:"No icon",description:"Outlined"})]})},p={render:()=>e.jsx(r,{severity:"success",variant:"outlined",title:"Action",description:"Includes action and close button",close:!0,onClose:()=>{},action:e.jsx(q,{size:"small",color:"inherit",variant:"text",children:"Undo"})})},u={render:()=>e.jsxs(o,{spacing:3,children:[e.jsx(s,{children:e.jsx(r,{severity:"info",variant:"filled",title:"Default (theme.shape.md)",description:"Uses theme.shape.md (8px) - the design system default"})}),e.jsx(s,{children:e.jsx(r,{severity:"success",variant:"outlined",title:"Small Radius (theme.shape.sm)",description:"Custom sx override: borderRadius: theme.shape.sm (4px)",sx:t=>({borderRadius:t.shape.sm})})}),e.jsx(s,{children:e.jsx(r,{severity:"warning",variant:"filled",title:"Large Radius (theme.shape.lg)",description:"Custom sx override: borderRadius: theme.shape.lg (12px)",sx:t=>({borderRadius:t.shape.lg})})}),e.jsx(s,{children:e.jsx(r,{severity:"error",variant:"outlined",title:"Extra Large Radius (theme.shape.xl)",description:"Custom sx override: borderRadius: theme.shape.xl (24px)",sx:t=>({borderRadius:t.shape.xl})})}),e.jsx(s,{children:e.jsx(r,{severity:"info",variant:"filled",title:"Fully Rounded (theme.shape.xl)",description:"Custom sx override: borderRadius: theme.shape.xl (24px)",sx:t=>({borderRadius:t.shape.rounded})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    variant: 'outlined',
    icon: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: false,
    close: false,
    severity: 'success',
    variant: 'outlined'
  },
  render: () => <Stack spacing={3}>
      {(['error', 'warning', 'info', 'success'] as const).map(severity => <Box key={severity}>
          <Stack direction="column" spacing={2} flexWrap="wrap" useFlexGap>
            <Alert severity={severity} variant="filled" title="Title" description="Description" />
            <Alert severity={severity} variant="outlined" title="Title" description="Description" />
            <Alert severity={severity} variant="standard" title="Title" description="Description" />
          </Stack>
        </Box>)}
    </Stack>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info'
  },
  render: () => <Stack spacing={2}>
      <Alert severity="error" variant="filled" icon={false} title="No icon" description="Filled" />
      <Alert severity="info" variant="outlined" icon={false} title="No icon" description="Outlined" />
    </Stack>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Alert severity="success" variant="outlined" title="Action" description="Includes action and close button" close onClose={() => undefined} action={<Button size="small" color="inherit" variant="text">
          Undo
        </Button>} />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Alert severity="info" variant="filled" title="Default (theme.shape.md)" description="Uses theme.shape.md (8px) - the design system default" />
      </Box>
      <Box>
        <Alert severity="success" variant="outlined" title="Small Radius (theme.shape.sm)" description="Custom sx override: borderRadius: theme.shape.sm (4px)" sx={theme => ({
        borderRadius: theme.shape.sm
      })} />
      </Box>
      <Box>
        <Alert severity="warning" variant="filled" title="Large Radius (theme.shape.lg)" description="Custom sx override: borderRadius: theme.shape.lg (12px)" sx={theme => ({
        borderRadius: theme.shape.lg
      })} />
      </Box>
      <Box>
        <Alert severity="error" variant="outlined" title="Extra Large Radius (theme.shape.xl)" description="Custom sx override: borderRadius: theme.shape.xl (24px)" sx={theme => ({
        borderRadius: theme.shape.xl
      })} />
      </Box>
      <Box>
        <Alert severity="info" variant="filled" title="Fully Rounded (theme.shape.xl)" description="Custom sx override: borderRadius: theme.shape.xl (24px)" sx={theme => ({
        borderRadius: theme.shape.rounded
      })} />
      </Box>
    </Stack>
}`,...u.parameters?.docs?.source}}};const le=["Playground","Variants","WithoutIcon","WithActionAndClose","BorderRadiusVariations"];export{u as BorderRadiusVariations,l as Playground,d as Variants,p as WithActionAndClose,c as WithoutIcon,le as __namedExportsOrder,ne as default};
