import{r as V,u as J,j as t,c as d,d as Z,R as K}from"./iframe-ksEUl1J1.js";import{b as Q,g as X,s as Y,c as tt,a as ot,m as nt}from"./memoTheme-ByI79eT_.js";import{c as F}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{a as et,b as rt}from"./Button-CN_OelDD.js";import{B as o}from"./Button-CKbBfHOk.js";import{S as p}from"./Stack-DCWNktkr.js";import{B as i}from"./Box-VjXBqRCE.js";import{T as s}from"./Typography-Jamm0VLG.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonBase-BCHpqMax.js";import"./useForkRef-dJFPE8JX.js";import"./useEventCallback-BGg_9Wu1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BjtrEfdk.js";import"./theme-helpers-CoFoCxtx.js";import"./useTheme-BZCX2e7m.js";import"./useThemeProps-Izoa2EVh.js";function at(e){return V.Children.toArray(e).filter(a=>V.isValidElement(a))}function it(e){return X("MuiButtonGroup",e)}const n=Q("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","horizontal","vertical","colorPrimary","colorSecondary","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),st=(e,a)=>{const{ownerState:l}=e;return[{[`& .${n.grouped}`]:a.grouped},{[`& .${n.grouped}`]:a[`grouped${d(l.orientation)}`]},{[`& .${n.grouped}`]:a[`grouped${d(l.variant)}`]},{[`& .${n.grouped}`]:a[`grouped${d(l.variant)}${d(l.orientation)}`]},{[`& .${n.grouped}`]:a[`grouped${d(l.variant)}${d(l.color)}`]},{[`& .${n.firstButton}`]:a.firstButton},{[`& .${n.lastButton}`]:a.lastButton},{[`& .${n.middleButton}`]:a.middleButton},a.root,a[l.variant],l.disableElevation===!0&&a.disableElevation,l.fullWidth&&a.fullWidth,l.orientation==="vertical"&&a.vertical]},lt=e=>{const{classes:a,color:l,disabled:B,disableElevation:m,fullWidth:y,orientation:u,variant:c}=e,h={root:["root",c,u,y&&"fullWidth",m&&"disableElevation",`color${d(l)}`],grouped:["grouped",`grouped${d(u)}`,`grouped${d(c)}`,`grouped${d(c)}${d(u)}`,`grouped${d(c)}${d(l)}`,B&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return ot(h,it,a)},dt=Y("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:st})(nt(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{variant:"contained"},style:{boxShadow:(e.vars||e).shadows[2]}},{props:{disableElevation:!0},style:{boxShadow:"none"}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${n.lastButton},& .${n.middleButton}`]:{borderTopRightRadius:0,borderTopLeftRadius:0},[`& .${n.firstButton},& .${n.middleButton}`]:{borderBottomRightRadius:0,borderBottomLeftRadius:0}}},{props:{orientation:"horizontal"},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${n.lastButton},& .${n.middleButton}`]:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}},{props:{variant:"text",orientation:"horizontal"},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${n.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}}}},{props:{variant:"text",orientation:"vertical"},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${n.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}}}},...Object.entries(e.palette).filter(F()).flatMap(([a])=>[{props:{variant:"text",color:a},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderColor:e.vars?`rgba(${e.vars.palette[a].mainChannel} / 0.5)`:Z(e.palette[a].main,.5)}}}]),{props:{variant:"outlined",orientation:"horizontal"},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderRightColor:"transparent","&:hover":{borderRightColor:"currentColor"}},[`& .${n.lastButton},& .${n.middleButton}`]:{marginLeft:-1}}},{props:{variant:"outlined",orientation:"vertical"},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderBottomColor:"transparent","&:hover":{borderBottomColor:"currentColor"}},[`& .${n.lastButton},& .${n.middleButton}`]:{marginTop:-1}}},{props:{variant:"contained",orientation:"horizontal"},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${n.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}}}},{props:{variant:"contained",orientation:"vertical"},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${n.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}}}},...Object.entries(e.palette).filter(F(["dark"])).map(([a])=>({props:{variant:"contained",color:a},style:{[`& .${n.firstButton},& .${n.middleButton}`]:{borderColor:(e.vars||e).palette[a].dark}}}))],[`& .${n.grouped}`]:{minWidth:40,boxShadow:"none",props:{variant:"contained"},style:{"&:hover":{boxShadow:"none"}}}}))),ut=V.forwardRef(function(a,l){const B=J({props:a,name:"MuiButtonGroup"}),{children:m,className:y,color:u="primary",component:c="div",disabled:h=!1,disableElevation:g=!1,disableFocusRipple:v=!1,disableRipple:b=!1,fullWidth:P=!1,orientation:q="horizontal",size:D="medium",variant:I="outlined",...N}=B,A={...B,color:u,component:c,disabled:h,disableElevation:g,disableFocusRipple:v,disableRipple:b,fullWidth:P,orientation:q,size:D,variant:I},x=lt(A),H=V.useMemo(()=>({className:x.grouped,color:u,disabled:h,disableElevation:g,disableFocusRipple:v,disableRipple:b,fullWidth:P,size:D,variant:I}),[u,h,g,v,b,P,D,I,x.grouped]),M=at(m),U=M.length,_=T=>{const j=T===0,L=T===U-1;return j&&L?"":j?x.firstButton:L?x.lastButton:x.middleButton};return t.jsx(dt,{as:c,role:"group",className:tt(x.root,y),ref:l,ownerState:A,...N,children:t.jsx(et.Provider,{value:H,children:M.map((T,j)=>t.jsx(rt.Provider,{value:_(j),children:T},j))})})}),r=K.forwardRef(({children:e,variant:a="contained",color:l="primary",orientation:B="horizontal",size:m="medium",disabled:y=!1,disableElevation:u=!0,disableRipple:c=!1,fullWidth:h=!1,sx:g,...v},b)=>t.jsx(ut,{ref:b,variant:a,color:l,orientation:B,size:m,disabled:y,disableElevation:u,disableRipple:c,fullWidth:h,sx:{...g},...v,children:e}));r.displayName="ButtonGroup";r.__docgenInfo={description:`ButtonGroup component

The ButtonGroup component can be used to group related buttons.

@param props - ButtonGroup component props
@returns ButtonGroup component`,methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"The content of the component (buttons)"},variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'outlined' | 'text'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'text'"}]},description:`The variant to use
@default 'contained'`,defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'inherit'"}]},description:`The color of the component
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The component orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the component
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the buttons will be disabled\n@default false",defaultValue:{value:"false",computed:!1}},disableElevation:{required:!1,tsType:{name:"boolean"},description:"If `true`, the button group will be disabled if its only button\n@default false",defaultValue:{value:"true",computed:!1}},disableRipple:{required:!1,tsType:{name:"boolean"},description:"If `true`, the button group will be disabled if its only button\n@default false",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If `true`, the button group will take up the full width of its container\n@default false",defaultValue:{value:"false",computed:!1}},sx:{required:!1,tsType:{name:"MuiButtonGroupProps['sx']",raw:"MuiButtonGroupProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"The ref forwarding"}},composes:["Omit"]};const St={title:"Molecules/ButtonGroup",component:r,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"The group orientation (layout flow direction)."},variant:{control:"select",options:["contained","outlined","text"],description:"The variant to use."},color:{control:"select",options:["primary","secondary","error","inherit"],description:"The color of the component."},size:{control:"select",options:["small","medium","large"],description:"The size of the component."},disabled:{control:"boolean",description:"If `true`, the component is disabled."},disableElevation:{control:"boolean",description:"If `true`, no elevation is used."},fullWidth:{control:"boolean",description:"If `true`, the buttons will take up the full width of its container."},children:{control:!1,description:"The content of the component."},sx:{control:"object",description:"The system prop that allows defining system overrides as well as additional CSS styles."}},parameters:{layout:"centered"}},f={args:{children:[t.jsx(o,{children:"One"},"one"),t.jsx(o,{children:"Two"},"two"),t.jsx(o,{children:"Three"},"three")]}},w={render:()=>t.jsxs(p,{spacing:3,children:[t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Contained (default)"}),t.jsxs(r,{variant:"contained",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Outlined"}),t.jsxs(r,{variant:"outlined",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Text"}),t.jsxs(r,{variant:"text",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]})]})},G={render:()=>t.jsxs(p,{spacing:3,children:[t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Primary (default)"}),t.jsxs(r,{color:"primary",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Secondary"}),t.jsxs(r,{color:"secondary",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Error"}),t.jsxs(r,{color:"error",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Inherit"}),t.jsx(i,{sx:{color:"purple"},children:t.jsxs(r,{color:"inherit",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})})]})]})},O={render:()=>t.jsxs(p,{spacing:3,children:[t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Small"}),t.jsxs(r,{size:"small",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Medium (default)"}),t.jsxs(r,{size:"medium",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Large"}),t.jsxs(r,{size:"large",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]})]})},$={render:()=>t.jsxs(p,{spacing:3,direction:"row",alignItems:"flex-start",children:[t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Horizontal (default)"}),t.jsxs(r,{orientation:"horizontal",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Vertical"}),t.jsxs(r,{orientation:"vertical",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]})]})},S={render:()=>t.jsxs(p,{spacing:3,children:[t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Disabled Group"}),t.jsxs(r,{disabled:!0,children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Individual Disabled Buttons"}),t.jsxs(r,{children:[t.jsx(o,{children:"One"}),t.jsx(o,{disabled:!0,children:"Two (Disabled)"}),t.jsx(o,{children:"Three"})]})]})]})},C={render:()=>t.jsxs(p,{spacing:3,children:[t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"With Elevation (default)"}),t.jsxs(r,{variant:"contained",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Without Elevation"}),t.jsxs(r,{variant:"contained",disableElevation:!0,children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]})]})},R={render:()=>t.jsxs(i,{sx:{width:"100%",maxWidth:600},children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Full Width Button Group"}),t.jsxs(r,{fullWidth:!0,children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]})},z={render:()=>t.jsxs(i,{sx:{width:"100%",maxWidth:300},children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Vertical Full Width"}),t.jsxs(r,{orientation:"vertical",fullWidth:!0,children:[t.jsx(o,{children:"Top"}),t.jsx(o,{children:"Middle"}),t.jsx(o,{children:"Bottom"})]})]})},W={render:()=>t.jsxs(p,{spacing:3,children:[t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Outlined Primary"}),t.jsxs(r,{variant:"outlined",color:"primary",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Outlined Secondary"}),t.jsxs(r,{variant:"outlined",color:"secondary",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"body2",sx:{mb:1},children:"Outlined Error"}),t.jsxs(r,{variant:"outlined",color:"error",children:[t.jsx(o,{children:"One"}),t.jsx(o,{children:"Two"}),t.jsx(o,{children:"Three"})]})]})]})},E={render:()=>t.jsxs(p,{spacing:4,sx:{width:"100%",maxWidth:800},children:[t.jsxs(i,{children:[t.jsx(s,{variant:"h6",gutterBottom:!0,children:"Text Alignment"}),t.jsxs(r,{children:[t.jsx(o,{children:"Left"}),t.jsx(o,{children:"Center"}),t.jsx(o,{children:"Right"}),t.jsx(o,{children:"Justify"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"h6",gutterBottom:!0,children:"View Options"}),t.jsxs(r,{variant:"outlined",children:[t.jsx(o,{children:"List"}),t.jsx(o,{children:"Grid"}),t.jsx(o,{children:"Gallery"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"h6",gutterBottom:!0,children:"Zoom Controls"}),t.jsxs(r,{size:"small",children:[t.jsx(o,{children:"-"}),t.jsx(o,{children:"100%"}),t.jsx(o,{children:"+"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"h6",gutterBottom:!0,children:"Vertical Navigation"}),t.jsxs(r,{orientation:"vertical",variant:"outlined",fullWidth:!0,sx:{maxWidth:200},children:[t.jsx(o,{children:"Dashboard"}),t.jsx(o,{children:"Analytics"}),t.jsx(o,{children:"Settings"}),t.jsx(o,{children:"Profile"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"h6",gutterBottom:!0,children:"Filter Options"}),t.jsxs(r,{variant:"text",color:"secondary",children:[t.jsx(o,{children:"All"}),t.jsx(o,{children:"Active"}),t.jsx(o,{children:"Pending"}),t.jsx(o,{children:"Archived"})]})]}),t.jsxs(i,{children:[t.jsx(s,{variant:"h6",gutterBottom:!0,children:"Action Buttons"}),t.jsxs(r,{children:[t.jsx(o,{children:"Save"}),t.jsx(o,{children:"Save & Continue"}),t.jsx(o,{color:"secondary",children:"Cancel"})]})]})]}),parameters:{docs:{description:{story:"Real-world examples of ButtonGroup usage in various UI scenarios."}}}},k={args:{orientation:"horizontal",variant:"contained",color:"primary",size:"medium",disabled:!1,disableElevation:!1,fullWidth:!1,children:[t.jsx(o,{children:"One"},"one"),t.jsx(o,{children:"Two"},"two"),t.jsx(o,{children:"Three"},"three")]},parameters:{docs:{description:{story:"Interactive playground to experiment with all ButtonGroup props."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Button key="one">One</Button>, <Button key="two">Two</Button>, <Button key="three">Three</Button>]
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Contained (default)
        </Typography>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Outlined
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Text
        </Typography>
        <ButtonGroup variant="text">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...w.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Primary (default)
        </Typography>
        <ButtonGroup color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Secondary
        </Typography>
        <ButtonGroup color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Error
        </Typography>
        <ButtonGroup color="error">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Inherit
        </Typography>
        <Box sx={{
        color: 'purple'
      }}>
          <ButtonGroup color="inherit">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Stack>
}`,...G.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Small
        </Typography>
        <ButtonGroup size="small">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Medium (default)
        </Typography>
        <ButtonGroup size="medium">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Large
        </Typography>
        <ButtonGroup size="large">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} direction="row" alignItems="flex-start">
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Horizontal (default)
        </Typography>
        <ButtonGroup orientation="horizontal">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Vertical
        </Typography>
        <ButtonGroup orientation="vertical">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Disabled Group
        </Typography>
        <ButtonGroup disabled>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Individual Disabled Buttons
        </Typography>
        <ButtonGroup>
          <Button>One</Button>
          <Button disabled>Two (Disabled)</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          With Elevation (default)
        </Typography>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Without Elevation
        </Typography>
        <ButtonGroup variant="contained" disableElevation>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 600
  }}>
      <Typography variant="body2" sx={{
      mb: 1
    }}>
        Full Width Button Group
      </Typography>
      <ButtonGroup fullWidth>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 300
  }}>
      <Typography variant="body2" sx={{
      mb: 1
    }}>
        Vertical Full Width
      </Typography>
      <ButtonGroup orientation="vertical" fullWidth>
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
    </Box>
}`,...z.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Outlined Primary
        </Typography>
        <ButtonGroup variant="outlined" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Outlined Secondary
        </Typography>
        <ButtonGroup variant="outlined" color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Outlined Error
        </Typography>
        <ButtonGroup variant="outlined" color="error">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    width: '100%',
    maxWidth: 800
  }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Text Alignment
        </Typography>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
          <Button>Justify</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          View Options
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>List</Button>
          <Button>Grid</Button>
          <Button>Gallery</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Zoom Controls
        </Typography>
        <ButtonGroup size="small">
          <Button>-</Button>
          <Button>100%</Button>
          <Button>+</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Vertical Navigation
        </Typography>
        <ButtonGroup orientation="vertical" variant="outlined" fullWidth sx={{
        maxWidth: 200
      }}>
          <Button>Dashboard</Button>
          <Button>Analytics</Button>
          <Button>Settings</Button>
          <Button>Profile</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Filter Options
        </Typography>
        <ButtonGroup variant="text" color="secondary">
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Pending</Button>
          <Button>Archived</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Action Buttons
        </Typography>
        <ButtonGroup>
          <Button>Save</Button>
          <Button>Save & Continue</Button>
          <Button color="secondary">Cancel</Button>
        </ButtonGroup>
      </Box>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of ButtonGroup usage in various UI scenarios.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    disableElevation: false,
    fullWidth: false,
    children: [<Button key="one">One</Button>, <Button key="two">Two</Button>, <Button key="three">Three</Button>]
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all ButtonGroup props.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};const Ct=["Default","Variants","Colors","Sizes","Orientation","Disabled","DisableElevation","FullWidth","VerticalFullWidth","OutlinedVariantAllColors","RealWorldExamples","Playground"];export{G as Colors,f as Default,C as DisableElevation,S as Disabled,R as FullWidth,$ as Orientation,W as OutlinedVariantAllColors,k as Playground,E as RealWorldExamples,O as Sizes,w as Variants,z as VerticalFullWidth,Ct as __namedExportsOrder,St as default};
