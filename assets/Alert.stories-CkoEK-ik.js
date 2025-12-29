import{j as e,R}from"./iframe-Bf0p-10g.js";import{c as s}from"./createSvgIcon-Doqq-Dps.js";import{I as N}from"./Icon-DeTg76YI.js";import{u as A}from"./useTheme-BbnQPM-2.js";import{I as O}from"./IconButton-0y7BKAve.js";import{A as z}from"./Alert-CGln5A5Z.js";import{S as o}from"./Stack-JG3aZ3C3.js";import{T as j}from"./Typography-Dv1Rwxa5.js";import{B as i}from"./Box-Dt15EP8F.js";import{B as W}from"./Button-ChPoXziC.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-CFqqyMQL.js";import"./ButtonBase-CK-fqNHV.js";import"./useForkRef-mnbaXvWm.js";import"./useEventCallback-BOWsNkBB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C85rUP-r.js";import"./useSlot-DCrjdO1I.js";import"./resolveComponentProps-CgVaspa1.js";import"./Close-DIbd47Sg.js";import"./Paper-moN_1IBd.js";import"./useThemeProps-NvJQ2Xdn.js";const C=s(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"ErrorRounded"),b=s(e.jsx("path",{d:"M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m1-3h-2v-2h2z"}),"ErrorOutlineRounded"),D=s(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z"}),"InfoRounded"),E=s(e.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined"),q=s(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0"}),"CheckCircleRounded"),F=s(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41s-1.03-.39-1.42 0"}),"CheckCircleOutlineRounded"),_=s(e.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),P={error:{filled:C,outlined:b},warning:{filled:C,outlined:b},info:{filled:D,outlined:E},success:{filled:q,outlined:F}};function U(t,n){return A().palette._components.alert[t][n]}const r=R.forwardRef(({severity:t="error",variant:n="filled",title:h,description:f,icon:x=!0,close:S=!1,onClose:B,action:v,sx:k,children:I,...T},w)=>{const l=A(),a=U(t,n),M=`${l.shape.md}px`,y=P[t][n==="filled"?"filled":"outlined"],V=x===!1?!1:R.isValidElement(x)?x:y&&e.jsx(N,{icon:y,size:"small"}),g=S&&e.jsx(O,{size:"small","aria-label":"close",onClick:B,sx:{color:a.foreground},children:e.jsx(_,{fontSize:"small"})}),L=v?g?e.jsxs(o,{direction:"row",spacing:1,alignItems:"center",children:[v,g]}):v:g||void 0;return e.jsx(z,{ref:w,severity:t,variant:"standard",icon:V,action:L,sx:{borderRadius:M,backgroundColor:a.background,color:a.foreground,alignItems:"flex-justify",py:1.5,px:2,...n==="outlined"&&{border:`1px solid ${a.border}`},"& .MuiAlert-icon":{color:a.foreground,padding:1,marginRight:l.spacing(1),mt:.25},"& .MuiAlert-message":{padding:1,width:"100%"},"& .MuiAlert-action":{padding:0,marginLeft:l.spacing(2),alignItems:"flex-justify"},...k},...T,children:e.jsxs(o,{spacing:.25,children:[h&&e.jsx(j,{variant:"body1",fontWeight:l.typography.fontWeightMedium,lineHeight:1.5,children:h}),f&&e.jsx(j,{variant:"body2",lineHeight:1.43,children:f}),I]})})});r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Alert severity. Controls colors and default icon.
@default 'error'`,defaultValue:{value:"'error'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:`Visual variant of the alert.
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title displayed above the description."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description text. If omitted, only the title renders."},icon:{required:!1,tsType:{name:"union",raw:"boolean | ReactNode",elements:[{name:"boolean"},{name:"ReactNode"}]},description:"Controls the leading icon. Pass `false` to hide, or a ReactNode to override.\n@default true",defaultValue:{value:"true",computed:!1}},close:{required:!1,tsType:{name:"boolean"},description:"If true, renders a close button on the right.\nProvide an `onClose` handler to respond to clicks.\n@default false",defaultValue:{value:"false",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:"Custom action content rendered on the right (e.g., a Button).\nIf `close` is also true, the close button will appear after this content."}},composes:["Omit"]};const he={title:"Molecules/Alert",component:r,tags:["autodocs"],argTypes:{severity:{control:"select",options:["error","warning","info","success"]},variant:{control:"select",options:["filled","outlined","standard"]},icon:{control:"boolean"},close:{control:"boolean"}},args:{severity:"error",variant:"filled",title:"Title",description:"Description",icon:!0,close:!0}},d={args:{}},c={args:{icon:!1,close:!1,severity:"info"},render:()=>e.jsx(o,{spacing:3,children:["error","warning","info","success"].map(t=>e.jsx(i,{children:e.jsxs(o,{direction:"column",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(r,{severity:t,variant:"filled",title:"Title",description:"Description"}),e.jsx(r,{severity:t,variant:"outlined",title:"Title",description:"Description"}),e.jsx(r,{severity:t,variant:"standard",title:"Title",description:"Description"})]})},t))})},u={args:{severity:"info"},render:()=>e.jsxs(o,{spacing:2,children:[e.jsx(r,{severity:"error",variant:"filled",icon:!1,title:"No icon",description:"Filled"}),e.jsx(r,{severity:"info",variant:"outlined",icon:!1,title:"No icon",description:"Outlined"})]})},p={render:()=>e.jsx(r,{severity:"success",variant:"outlined",title:"Action",description:"Includes action and close button",close:!0,onClose:()=>{},action:e.jsx(W,{size:"small",color:"inherit",variant:"text",children:"Undo"})})},m={render:()=>e.jsxs(o,{spacing:3,children:[e.jsx(i,{children:e.jsx(r,{severity:"info",variant:"filled",title:"Default (theme.shape.md)",description:"Uses theme.shape.md (8px) - the design system default"})}),e.jsx(i,{children:e.jsx(r,{severity:"success",variant:"outlined",title:"Small Radius (theme.shape.sm)",description:"Custom sx override: borderRadius: theme.shape.sm (4px)",sx:t=>({borderRadius:t.shape.sm})})}),e.jsx(i,{children:e.jsx(r,{severity:"warning",variant:"filled",title:"Large Radius (theme.shape.lg)",description:"Custom sx override: borderRadius: theme.shape.lg (12px)",sx:t=>({borderRadius:t.shape.lg})})}),e.jsx(i,{children:e.jsx(r,{severity:"error",variant:"outlined",title:"Extra Large Radius (theme.shape.xl)",description:"Custom sx override: borderRadius: theme.shape.xl (24px)",sx:t=>({borderRadius:t.shape.xl})})}),e.jsx(i,{children:e.jsx(r,{severity:"info",variant:"filled",title:"Fully Rounded (theme.shape.rounded)",description:"Custom sx override: borderRadius: theme.shape.rounded (pill shape)",sx:t=>({borderRadius:t.shape.rounded})})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'info'
  },
  render: () => <Stack spacing={2}>
      <Alert severity="error" variant="filled" icon={false} title="No icon" description="Filled" />
      <Alert severity="info" variant="outlined" icon={false} title="No icon" description="Outlined" />
    </Stack>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Alert severity="success" variant="outlined" title="Action" description="Includes action and close button" close onClose={() => undefined} action={<Button size="small" color="inherit" variant="text">
          Undo
        </Button>} />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Playground","Variants","WithoutIcon","WithActionAndClose","BorderRadiusVariations"];export{m as BorderRadiusVariations,d as Playground,c as Variants,p as WithActionAndClose,u as WithoutIcon,fe as __namedExportsOrder,he as default};
