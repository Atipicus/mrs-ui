import{R as y,j as e}from"./iframe-D1RbjC5Q.js";import{M as R}from"./MaterialSymbol-Bz3wm6qN.js";import{u as j}from"./useTheme-OtGzbA5G.js";import{I as W}from"./IconButton-BinjQqNu.js";import{A as D}from"./Alert-DuxzvSLu.js";import{S as o}from"./Stack-DUvBP7K6.js";import{T as b}from"./Typography-Bs4iIcdt.js";import{B as s}from"./Box-UhoF91Mg.js";import{B as q}from"./Button-CoCHA0_R.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BHji7iGl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DmB9mBru.js";import"./useForkRef-wzc4n1vL.js";import"./useEventCallback-DjgC1dUr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bj4VSBjE.js";import"./useSlot-DjDoZLnG.js";import"./resolveComponentProps-Czqt_z--.js";import"./createSvgIcon-DCZ7gTS6.js";import"./Close-BcxdyphY.js";import"./Paper-CCQRCbpX.js";import"./styled-BOMv-r7W.js";import"./useThemeProps-BF4rPfby.js";const F={error:"error",warning:"error",info:"info",success:"check_circle"};function M(r,a){return j().palette._components.alert[r][a]}const t=y.forwardRef(({severity:r="error",variant:a="filled",title:m,description:h,icon:f=!0,close:A=!1,onClose:B,action:x,sx:C,children:k,...T},S)=>{const n=j(),i=M(r,a),w=`${n.shape.md}px`,g=F[r],I=a==="filled"?1:0,N=f===!1?!1:y.isValidElement(f)?f:g&&e.jsx(R,{icon:g,fill:I,size:"small",color:i.foreground}),v=A&&e.jsx(W,{size:"small","aria-label":"close",onClick:B,sx:{color:i.foreground},children:e.jsx(R,{icon:"close",size:"small",color:i.foreground})}),V=x?v?e.jsxs(o,{direction:"row",spacing:1,alignItems:"center",children:[x,v]}):x:v||void 0;return e.jsx(D,{ref:S,severity:r,variant:"standard",icon:N,action:V,sx:{borderRadius:w,backgroundColor:i.background,color:i.foreground,alignItems:"flex-justify",py:1.5,px:2,...a==="outlined"&&{border:`1px solid ${i.border}`},"& .MuiAlert-icon":{color:i.foreground,padding:1,marginRight:n.spacing(1),mt:.25},"& .MuiAlert-message":{padding:1,width:"100%"},"& .MuiAlert-action":{padding:0,marginLeft:n.spacing(2),alignItems:"flex-justify"},...C},...T,children:e.jsxs(o,{spacing:.25,children:[m&&e.jsx(b,{variant:"body1",fontWeight:n.typography.fontWeightMedium,lineHeight:1.5,children:m}),h&&e.jsx(b,{variant:"body2",lineHeight:1.43,children:h}),k]})})});t.displayName="Alert";t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Alert severity. Controls colors and default icon.
@default 'error'`,defaultValue:{value:"'error'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:`Visual variant of the alert.
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title displayed above the description."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description text. If omitted, only the title renders."},icon:{required:!1,tsType:{name:"union",raw:"boolean | ReactNode",elements:[{name:"boolean"},{name:"ReactNode"}]},description:"Controls the leading icon. Pass `false` to hide, or a ReactNode to override.\n@default true",defaultValue:{value:"true",computed:!1}},close:{required:!1,tsType:{name:"boolean"},description:"If true, renders a close button on the right.\nProvide an `onClose` handler to respond to clicks.\n@default false",defaultValue:{value:"false",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:"Custom action content rendered on the right (e.g., a Button).\nIf `close` is also true, the close button will appear after this content."}},composes:["Omit"]};const de={title:"Molecules/Alert",component:t,tags:["autodocs"],argTypes:{severity:{control:"select",options:["error","warning","info","success"]},variant:{control:"select",options:["filled","outlined","standard"]},icon:{control:"boolean"},close:{control:"boolean"}},args:{severity:"error",variant:"filled",title:"Title",description:"Description",icon:!0,close:!0}},l={args:{}},d={args:{icon:!1,close:!1,severity:"info"},render:()=>e.jsx(o,{spacing:3,children:["error","warning","info","success"].map(r=>e.jsx(s,{children:e.jsxs(o,{direction:"column",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(t,{severity:r,variant:"filled",title:"Title",description:"Description"}),e.jsx(t,{severity:r,variant:"outlined",title:"Title",description:"Description"}),e.jsx(t,{severity:r,variant:"standard",title:"Title",description:"Description"})]})},r))})},c={args:{severity:"info"},render:()=>e.jsxs(o,{spacing:2,children:[e.jsx(t,{severity:"error",variant:"filled",icon:!1,title:"No icon",description:"Filled"}),e.jsx(t,{severity:"info",variant:"outlined",icon:!1,title:"No icon",description:"Outlined"})]})},p={render:()=>e.jsx(t,{severity:"success",variant:"outlined",title:"Action",description:"Includes action and close button",close:!0,onClose:()=>{},action:e.jsx(q,{size:"small",color:"inherit",variant:"text",children:"Undo"})})},u={render:()=>e.jsxs(o,{spacing:3,children:[e.jsx(s,{children:e.jsx(t,{severity:"info",variant:"filled",title:"Default (theme.shape.md)",description:"Uses theme.shape.md (8px) - the design system default"})}),e.jsx(s,{children:e.jsx(t,{severity:"success",variant:"outlined",title:"Small Radius (theme.shape.sm)",description:"Custom sx override: borderRadius: theme.shape.sm (4px)",sx:r=>({borderRadius:r.shape.sm})})}),e.jsx(s,{children:e.jsx(t,{severity:"warning",variant:"filled",title:"Large Radius (theme.shape.lg)",description:"Custom sx override: borderRadius: theme.shape.lg (12px)",sx:r=>({borderRadius:r.shape.lg})})}),e.jsx(s,{children:e.jsx(t,{severity:"error",variant:"outlined",title:"Extra Large Radius (theme.shape.xl)",description:"Custom sx override: borderRadius: theme.shape.xl (24px)",sx:r=>({borderRadius:r.shape.xl})})}),e.jsx(s,{children:e.jsx(t,{severity:"info",variant:"filled",title:"Fully Rounded (theme.shape.rounded)",description:"Custom sx override: borderRadius: theme.shape.rounded (pill shape)",sx:r=>({borderRadius:r.shape.rounded})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: false,
    close: false,
    severity: 'info'
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
        <Alert severity="info" variant="filled" title="Fully Rounded (theme.shape.rounded)" description="Custom sx override: borderRadius: theme.shape.rounded (pill shape)" sx={theme => ({
        borderRadius: theme.shape.rounded
      })} />
      </Box>
    </Stack>
}`,...u.parameters?.docs?.source}}};const ce=["Playground","Variants","WithoutIcon","WithActionAndClose","BorderRadiusVariations"];export{u as BorderRadiusVariations,l as Playground,d as Variants,p as WithActionAndClose,c as WithoutIcon,ce as __namedExportsOrder,de as default};
