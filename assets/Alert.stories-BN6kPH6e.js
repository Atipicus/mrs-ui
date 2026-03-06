import{R as b,j as e}from"./iframe-m0FcCUbT.js";import{M as j}from"./MaterialSymbol-DOQyWWmo.js";import{u as B}from"./useTheme--qrtAMJV.js";import{I as W}from"./IconButton-BtP768Mt.js";import{A as M}from"./Alert-8y4zRzcR.js";import{S as o}from"./Stack-DLDfFx0e.js";import{T as A}from"./Typography-BAhyjZNg.js";import{B as s}from"./Box-DSq61m1Q.js";import{B as q}from"./Button-CJ6MgozL.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C11nCEJ1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bd5szlVj.js";import"./useForkRef-DeUHlcp-.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./CircularProgress-nywBWFjt.js";import"./useSlot-BPbjla4P.js";import"./resolveComponentProps-hVTJcm9D.js";import"./createSvgIcon-DzjuuRaM.js";import"./Close-CUuiMhwH.js";import"./Paper-BQ8rpTFt.js";import"./integerPropType-DVPNO1YA.js";import"./useThemeProps-OFH6wkZ1.js";const F={error:"error",warning:"error",info:"info",success:"check_circle"};function z(t,n){return B().palette._components.alert[t][n]}const r=b.forwardRef(({severity:t="error",variant:n="filled",title:h,description:f,icon:x=!0,close:C=!1,onClose:k,action:v,sx:T,children:w,...S},I)=>{const l=B(),i=z(t,n),a=l.shape,y="16px";console.log("[Alert] Using border radius:",y,"(theme.shape.lg)"),console.log("[Alert] Available shape tokens (raw values):",{sm:a.sm,md:a.md,lg:a.lg,xl:a.xl,rounded:a.rounded}),console.log("[Alert] Note: Values converted to px strings to prevent MUI spacing multiplication");const R=F[t],N=n==="filled"?1:0,V=x===!1?!1:b.isValidElement(x)?x:R&&e.jsx(j,{icon:R,fill:N,size:"medium",color:i.foreground}),g=C&&e.jsx(W,{size:"medium","aria-label":"close",onClick:k,sx:{color:i.foreground},children:e.jsx(j,{icon:"close",size:"medium",color:i.foreground})}),D=v?g?e.jsxs(o,{direction:"row",spacing:1,alignItems:"center",children:[v,g]}):v:g||void 0;return e.jsx(M,{ref:I,severity:t,variant:"standard",icon:V,action:D,sx:{borderRadius:y,backgroundColor:i.background,color:i.foreground,alignItems:"top",py:1.2,px:2,...n==="outlined"&&{border:`1px solid ${i.border}`},"& .MuiAlert-icon":{color:i.foreground,padding:.25,marginRight:l.spacing(1),mt:.25},"& .MuiAlert-message":{padding:1,width:"100%"},"& .MuiAlert-action":{padding:0,marginLeft:l.spacing(2),alignItems:"top"},...T},...S,children:e.jsxs(o,{spacing:.25,children:[h&&e.jsx(A,{variant:"h5",fontWeight:l.typography.fontWeightMedium,lineHeight:1.2,children:h}),f&&e.jsx(A,{variant:"body1",lineHeight:1.5,children:f}),w]})})});r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Alert severity. Controls colors and default icon.
@default 'error'`,defaultValue:{value:"'error'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:`Visual variant of the alert.
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title displayed above the description."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description text. If omitted, only the title renders."},icon:{required:!1,tsType:{name:"union",raw:"boolean | ReactNode",elements:[{name:"boolean"},{name:"ReactNode"}]},description:"Controls the leading icon. Pass `false` to hide, or a ReactNode to override.\n@default true",defaultValue:{value:"true",computed:!1}},close:{required:!1,tsType:{name:"boolean"},description:"If true, renders a close button on the right.\nProvide an `onClose` handler to respond to clicks.\n@default false",defaultValue:{value:"false",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:"Custom action content rendered on the right (e.g., a Button).\nIf `close` is also true, the close button will appear after this content."}},composes:["Omit"]};const pe={title:"Molecules/Alert",component:r,tags:["autodocs"],argTypes:{severity:{control:"select",options:["error","warning","info","success"]},variant:{control:"select",options:["filled","outlined","standard"]},icon:{control:"boolean"},close:{control:"boolean"}},args:{severity:"error",variant:"filled",title:"Title",description:"Description",icon:!0,size:"32px",close:!0}},d={args:{severity:"info",variant:"outlined",icon:!1}},c={args:{icon:!1,close:!1,severity:"success",variant:"outlined"},render:()=>e.jsx(o,{spacing:3,children:["error","warning","info","success"].map(t=>e.jsx(s,{children:e.jsxs(o,{direction:"column",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(r,{severity:t,variant:"filled",title:"Title",description:"Description"}),e.jsx(r,{severity:t,variant:"outlined",title:"Title",description:"Description"}),e.jsx(r,{severity:t,variant:"standard",title:"Title",description:"Description"})]})},t))})},p={args:{severity:"info"},render:()=>e.jsxs(o,{spacing:2,children:[e.jsx(r,{severity:"error",variant:"filled",icon:!1,title:"No icon",description:"Filled"}),e.jsx(r,{severity:"info",variant:"outlined",icon:!1,title:"No icon",description:"Outlined"})]})},u={render:()=>e.jsx(r,{severity:"success",variant:"outlined",title:"Action",description:"Includes action and close button",close:!0,onClose:()=>{},action:e.jsx(q,{size:"small",color:"inherit",variant:"text",children:"Undo"})})},m={render:()=>e.jsxs(o,{spacing:3,children:[e.jsx(s,{children:e.jsx(r,{severity:"info",variant:"filled",title:"Default (theme.shape.md)",description:"Uses theme.shape.md (8px) - the design system default"})}),e.jsx(s,{children:e.jsx(r,{severity:"success",variant:"outlined",title:"Small Radius (theme.shape.sm)",description:"Custom sx override: borderRadius: theme.shape.sm (4px)",sx:t=>({borderRadius:t.shape.sm})})}),e.jsx(s,{children:e.jsx(r,{severity:"warning",variant:"filled",title:"Large Radius (theme.shape.lg)",description:"Custom sx override: borderRadius: theme.shape.lg (12px)",sx:t=>({borderRadius:t.shape.lg})})}),e.jsx(s,{children:e.jsx(r,{severity:"error",variant:"outlined",title:"Extra Large Radius (theme.shape.xl)",description:"Custom sx override: borderRadius: theme.shape.xl (24px)",sx:t=>({borderRadius:t.shape.xl})})}),e.jsx(s,{children:e.jsx(r,{severity:"info",variant:"filled",title:"Fully Rounded (theme.shape.xl)",description:"Custom sx override: borderRadius: theme.shape.xl (24px)",sx:t=>({borderRadius:t.shape.rounded})})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    variant: 'outlined',
    icon: false
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info'
  },
  render: () => <Stack spacing={2}>
      <Alert severity="error" variant="filled" icon={false} title="No icon" description="Filled" />
      <Alert severity="info" variant="outlined" icon={false} title="No icon" description="Outlined" />
    </Stack>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Alert severity="success" variant="outlined" title="Action" description="Includes action and close button" close onClose={() => undefined} action={<Button size="small" color="inherit" variant="text">
          Undo
        </Button>} />
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ue=["Playground","Variants","WithoutIcon","WithActionAndClose","BorderRadiusVariations"];export{m as BorderRadiusVariations,d as Playground,c as Variants,u as WithActionAndClose,p as WithoutIcon,ue as __namedExportsOrder,pe as default};
