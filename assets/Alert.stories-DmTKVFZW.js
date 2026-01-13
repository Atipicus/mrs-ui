import{R as y,j as e}from"./iframe-I_XFRsdA.js";import{M as R}from"./MaterialSymbol-Br8eVjxd.js";import{u as b}from"./useTheme-B1BOObvd.js";import{I as W}from"./IconButton-xPy0nxLk.js";import{A as D}from"./Alert-DPjV44Yz.js";import{S as o}from"./Stack-B0iuLo85.js";import{T as j}from"./Typography-CGFubZPW.js";import{B as i}from"./Box-BG99FGjS.js";import{B as q}from"./Button-BTq2knvq.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-Bc7bjadk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-4cIjOCwW.js";import"./useForkRef-BBct8W9H.js";import"./useEventCallback-pKvtWOAy.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CVYfncTi.js";import"./useSlot-BNG7muJz.js";import"./resolveComponentProps-0PgOJEV1.js";import"./createSvgIcon-D7bPPrzK.js";import"./Close-4CMiuflG.js";import"./Paper-Da2IBlHZ.js";import"./styled-C3ib8DW_.js";import"./useThemeProps-B8ojE8Tn.js";const z={error:"error",warning:"error",info:"info",success:"check_circle"};function F(r,n){return b().palette._components.alert[r][n]}const t=y.forwardRef(({severity:r="error",variant:n="filled",title:u,description:m,icon:h=!0,close:A=!1,onClose:B,action:f,sx:S,children:C,...k},T)=>{const x=b(),s=F(r,n),w=`${x.shape.md}px`,v=z[r],I=n==="filled"?1:0,N=h===!1?!1:y.isValidElement(h)?h:v&&e.jsx(R,{icon:v,fill:I,size:"small",color:s.foreground}),g=A&&e.jsx(W,{size:"small","aria-label":"close",onClick:B,sx:{color:s.foreground},children:e.jsx(R,{icon:"close",size:"small",color:s.foreground})}),V=f?g?e.jsxs(o,{direction:"row",spacing:1,alignItems:"center",children:[f,g]}):f:g||void 0;return e.jsx(D,{ref:T,severity:r,variant:"standard",icon:N,action:V,sx:{borderRadius:w,backgroundColor:s.background,color:s.foreground,alignItems:"flex-justify",py:1.5,px:2,...n==="outlined"&&{border:`1px solid ${s.border}`},"& .MuiAlert-icon":{color:s.foreground,padding:1,marginRight:x.spacing(1),mt:.25},"& .MuiAlert-message":{padding:1,width:"100%"},"& .MuiAlert-action":{padding:0,marginLeft:x.spacing(2),alignItems:"flex-justify"},...S},...k,children:e.jsxs(o,{spacing:.25,children:[u&&e.jsx(j,{sx:{fontSize:"16px",fontWeight:500,lineHeight:"24px",letterSpacing:"0.15px",color:s.foreground},children:u}),m&&e.jsx(j,{sx:{fontSize:"14px",fontWeight:400,lineHeight:"20.02px",letterSpacing:"0.15px",color:s.foreground},children:m}),C]})})});t.displayName="Alert";t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Alert severity. Controls colors and default icon.
@default 'error'`,defaultValue:{value:"'error'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:`Visual variant of the alert.
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title displayed above the description."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description text. If omitted, only the title renders."},icon:{required:!1,tsType:{name:"union",raw:"boolean | ReactNode",elements:[{name:"boolean"},{name:"ReactNode"}]},description:"Controls the leading icon. Pass `false` to hide, or a ReactNode to override.\n@default true",defaultValue:{value:"true",computed:!1}},close:{required:!1,tsType:{name:"boolean"},description:"If true, renders a close button on the right.\nProvide an `onClose` handler to respond to clicks.\n@default false",defaultValue:{value:"false",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:"Custom action content rendered on the right (e.g., a Button).\nIf `close` is also true, the close button will appear after this content."}},composes:["Omit"]};const de={title:"Molecules/Alert",component:t,tags:["autodocs"],argTypes:{severity:{control:"select",options:["error","warning","info","success"]},variant:{control:"select",options:["filled","outlined","standard"]},icon:{control:"boolean"},close:{control:"boolean"}},args:{severity:"error",variant:"filled",title:"Title",description:"Description",icon:!0,close:!0}},a={args:{}},l={args:{icon:!1,close:!1,severity:"info"},render:()=>e.jsx(o,{spacing:3,children:["error","warning","info","success"].map(r=>e.jsx(i,{children:e.jsxs(o,{direction:"column",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(t,{severity:r,variant:"filled",title:"Title",description:"Description"}),e.jsx(t,{severity:r,variant:"outlined",title:"Title",description:"Description"}),e.jsx(t,{severity:r,variant:"standard",title:"Title",description:"Description"})]})},r))})},d={args:{severity:"info"},render:()=>e.jsxs(o,{spacing:2,children:[e.jsx(t,{severity:"error",variant:"filled",icon:!1,title:"No icon",description:"Filled"}),e.jsx(t,{severity:"info",variant:"outlined",icon:!1,title:"No icon",description:"Outlined"})]})},c={render:()=>e.jsx(t,{severity:"success",variant:"outlined",title:"Action",description:"Includes action and close button",close:!0,onClose:()=>{},action:e.jsx(q,{size:"small",color:"inherit",variant:"text",children:"Undo"})})},p={render:()=>e.jsxs(o,{spacing:3,children:[e.jsx(i,{children:e.jsx(t,{severity:"info",variant:"filled",title:"Default (theme.shape.md)",description:"Uses theme.shape.md (8px) - the design system default"})}),e.jsx(i,{children:e.jsx(t,{severity:"success",variant:"outlined",title:"Small Radius (theme.shape.sm)",description:"Custom sx override: borderRadius: theme.shape.sm (4px)",sx:r=>({borderRadius:r.shape.sm})})}),e.jsx(i,{children:e.jsx(t,{severity:"warning",variant:"filled",title:"Large Radius (theme.shape.lg)",description:"Custom sx override: borderRadius: theme.shape.lg (12px)",sx:r=>({borderRadius:r.shape.lg})})}),e.jsx(i,{children:e.jsx(t,{severity:"error",variant:"outlined",title:"Extra Large Radius (theme.shape.xl)",description:"Custom sx override: borderRadius: theme.shape.xl (24px)",sx:r=>({borderRadius:r.shape.xl})})}),e.jsx(i,{children:e.jsx(t,{severity:"info",variant:"filled",title:"Fully Rounded (theme.shape.rounded)",description:"Custom sx override: borderRadius: theme.shape.rounded (pill shape)",sx:r=>({borderRadius:r.shape.rounded})})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info'
  },
  render: () => <Stack spacing={2}>
      <Alert severity="error" variant="filled" icon={false} title="No icon" description="Filled" />
      <Alert severity="info" variant="outlined" icon={false} title="No icon" description="Outlined" />
    </Stack>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Alert severity="success" variant="outlined" title="Action" description="Includes action and close button" close onClose={() => undefined} action={<Button size="small" color="inherit" variant="text">
          Undo
        </Button>} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ce=["Playground","Variants","WithoutIcon","WithActionAndClose","BorderRadiusVariations"];export{p as BorderRadiusVariations,a as Playground,l as Variants,c as WithActionAndClose,d as WithoutIcon,ce as __namedExportsOrder,de as default};
