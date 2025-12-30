import{R as T,j as e}from"./iframe-gZtTO8GF.js";import{B as s}from"./Box-CkQ7KSea.js";import{C as f}from"./CircularProgress-CSM3WC29.js";import{T as a}from"./Typography-BC_hpnXQ.js";import{S as i}from"./Stack-DrmAaOvE.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DXIofXOq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./styled-C-v2h_2o.js";import"./useThemeProps-rTC1mdVC.js";const r=T.forwardRef(({size:y=32,color:b="primary",showLabel:S=!1,value:v=0,variant:j="indeterminate",...w},z)=>S&&j==="determinate"?e.jsxs(s,{ref:z,sx:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:[e.jsx(f,{variant:j,color:b,size:y,value:v,...w}),e.jsx(s,{sx:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(a,{variant:"caption",component:"div",sx:{fontSize:y===16?"0.625rem":"0.75rem",lineHeight:1},children:`${Math.round(v)}%`})})]}):e.jsx(f,{ref:z,variant:j,color:b,size:y,value:v,...w}));r.displayName="CircularProgress";r.__docgenInfo={description:`CircularProgress component

Progress indicators commonly known as spinners, express an unspecified wait time
or display the length of a process.

@param props - CircularProgress component props
@returns CircularProgress component`,methods:[],displayName:"CircularProgress",props:{size:{required:!1,tsType:{name:"union",raw:"16 | 32",elements:[{name:"literal",value:"16"},{name:"literal",value:"32"}]},description:`The size of the circle
@default 32`,defaultValue:{value:"32",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'inherit'"}]},description:`The color of the component
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`If true, shows the progress value as a label in the center
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"number"},description:`The value of the progress indicator for the determinate variant.
Value between 0 and 100.`,defaultValue:{value:"0",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'determinate' | 'indeterminate'",elements:[{name:"literal",value:"'determinate'"},{name:"literal",value:"'indeterminate'"}]},description:`The variant to use
@default 'indeterminate'`,defaultValue:{value:"'indeterminate'",computed:!1}}},composes:["Omit"]};const V={title:"Atoms/CircularProgress",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:[16,32],description:"The size of the circular progress indicator"},color:{control:"select",options:["primary","secondary","inherit"],description:"The color of the component"},variant:{control:"select",options:["determinate","indeterminate"],description:"The variant to use"},value:{control:{type:"range",min:0,max:100,step:1},description:"The value of the progress (determinate only)"},showLabel:{control:"boolean",description:"If true, shows the progress value as a label"}},args:{size:32,color:"primary",variant:"indeterminate",showLabel:!1}},o={args:{}},t={args:{size:16}},n={args:{size:32}},c={args:{color:"secondary"}},l={args:{color:"inherit"}},p={args:{variant:"determinate",value:75}},d={args:{variant:"determinate",value:99,showLabel:!0}},u={render:()=>e.jsxs(s,{sx:{p:4},children:[e.jsx(a,{variant:"h6",sx:{mb:3},children:"Circular Progress Sizes"}),e.jsxs(i,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(s,{textAlign:"center",children:[e.jsx(r,{size:16}),e.jsx(a,{variant:"caption",display:"block",sx:{mt:1},children:"16px"})]}),e.jsxs(s,{textAlign:"center",children:[e.jsx(r,{size:32}),e.jsx(a,{variant:"caption",display:"block",sx:{mt:1},children:"32px"})]})]})]}),parameters:{layout:"padded"}},m={render:()=>e.jsx(s,{sx:{p:4},children:e.jsxs(i,{spacing:4,children:[e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Primary Color"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{color:"primary",size:16}),e.jsx(r,{color:"primary",size:32}),e.jsx(r,{color:"primary",size:32,variant:"determinate",value:99,showLabel:!0})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Secondary Color"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{color:"secondary",size:16}),e.jsx(r,{color:"secondary",size:32}),e.jsx(r,{color:"secondary",size:32,variant:"determinate",value:99,showLabel:!0})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Inherit Color"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{color:"inherit",size:16}),e.jsx(r,{color:"inherit",size:32}),e.jsx(r,{color:"inherit",size:32,variant:"determinate",value:99,showLabel:!0})]})]})]})}),parameters:{layout:"fullscreen"}},h={render:()=>e.jsxs(s,{sx:{p:4},children:[e.jsx(a,{variant:"h6",sx:{mb:3},children:"Progress with Labels"}),e.jsxs(i,{direction:"row",spacing:4,children:[e.jsx(r,{variant:"determinate",value:25,showLabel:!0,size:32}),e.jsx(r,{variant:"determinate",value:50,showLabel:!0,size:32}),e.jsx(r,{variant:"determinate",value:75,showLabel:!0,size:32}),e.jsx(r,{variant:"determinate",value:99,showLabel:!0,size:32})]})]}),parameters:{layout:"padded"}},x={render:()=>e.jsx(s,{sx:{p:4},children:e.jsxs(i,{spacing:4,children:[e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Loading State"}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{size:16}),e.jsx(a,{variant:"body2",children:"Loading..."})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"File Upload Progress"}),e.jsxs(i,{spacing:1,children:[e.jsx(a,{variant:"body2",children:"Uploading file..."}),e.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{variant:"determinate",value:75,showLabel:!0,size:32}),e.jsx(a,{variant:"caption",sx:{color:"text.secondary"},children:"3.2 MB of 4.3 MB"})]})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Inline with Text"}),e.jsxs(a,{variant:"body1",children:["Please wait while we process your request",e.jsx(r,{size:16,sx:{ml:1,verticalAlign:"middle"}})]})]})]})}),parameters:{layout:"fullscreen"}},g={render:()=>e.jsx(s,{sx:{p:4},children:e.jsx(i,{spacing:6,children:e.jsxs(s,{children:[e.jsx(a,{variant:"h4",gutterBottom:!0,children:"Circular Progress Variants"}),e.jsxs(i,{spacing:4,sx:{mt:3},children:[e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Indeterminate (Loading)"}),e.jsxs(i,{direction:"row",spacing:3,children:[e.jsx(r,{size:16,color:"primary"}),e.jsx(r,{size:32,color:"primary"}),e.jsx(r,{size:32,color:"secondary"}),e.jsx(r,{size:32,color:"inherit"})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Determinate (With Progress Value)"}),e.jsxs(i,{direction:"row",spacing:3,children:[e.jsx(r,{variant:"determinate",value:25,size:32}),e.jsx(r,{variant:"determinate",value:50,size:32}),e.jsx(r,{variant:"determinate",value:75,size:32}),e.jsx(r,{variant:"determinate",value:100,size:32})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"With Labels"}),e.jsxs(i,{direction:"row",spacing:3,children:[e.jsx(r,{variant:"determinate",value:25,showLabel:!0,size:32}),e.jsx(r,{variant:"determinate",value:50,showLabel:!0,size:32,color:"secondary"}),e.jsx(r,{variant:"determinate",value:75,showLabel:!0,size:32}),e.jsx(r,{variant:"determinate",value:99,showLabel:!0,size:32,color:"secondary"})]})]})]})]})})}),parameters:{layout:"fullscreen"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source},description:{story:"Default indeterminate circular progress",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 16
  }
}`,...t.parameters?.docs?.source},description:{story:"Small size (16px)",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32
  }
}`,...n.parameters?.docs?.source},description:{story:"Large size (32px)",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary'
  }
}`,...c.parameters?.docs?.source},description:{story:"With secondary color",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inherit'
  }
}`,...l.parameters?.docs?.source},description:{story:"With inherit color",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 75
  }
}`,...p.parameters?.docs?.source},description:{story:"Determinate variant with value",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 99,
    showLabel: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Determinate with label",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <MuiTypography variant="h6" sx={{
      mb: 3
    }}>
        Circular Progress Sizes
      </MuiTypography>
      <Stack direction="row" spacing={4} alignItems="center">
        <Box textAlign="center">
          <CircularProgress size={16} />
          <MuiTypography variant="caption" display="block" sx={{
          mt: 1
        }}>
            16px
          </MuiTypography>
        </Box>
        <Box textAlign="center">
          <CircularProgress size={32} />
          <MuiTypography variant="caption" display="block" sx={{
          mt: 1
        }}>
            32px
          </MuiTypography>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'padded'
  }
}`,...u.parameters?.docs?.source},description:{story:"All sizes showcase",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Primary Color
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <CircularProgress color="primary" size={16} />
            <CircularProgress color="primary" size={32} />
            <CircularProgress color="primary" size={32} variant="determinate" value={99} showLabel />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Secondary Color
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <CircularProgress color="secondary" size={16} />
            <CircularProgress color="secondary" size={32} />
            <CircularProgress color="secondary" size={32} variant="determinate" value={99} showLabel />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Inherit Color
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <CircularProgress color="inherit" size={16} />
            <CircularProgress color="inherit" size={32} />
            <CircularProgress color="inherit" size={32} variant="determinate" value={99} showLabel />
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...m.parameters?.docs?.source},description:{story:"All colors showcase",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <MuiTypography variant="h6" sx={{
      mb: 3
    }}>
        Progress with Labels
      </MuiTypography>
      <Stack direction="row" spacing={4}>
        <CircularProgress variant="determinate" value={25} showLabel size={32} />
        <CircularProgress variant="determinate" value={50} showLabel size={32} />
        <CircularProgress variant="determinate" value={75} showLabel size={32} />
        <CircularProgress variant="determinate" value={99} showLabel size={32} />
      </Stack>
    </Box>,
  parameters: {
    layout: 'padded'
  }
}`,...h.parameters?.docs?.source},description:{story:"With labels showcase",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Loading State
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <CircularProgress size={16} />
            <MuiTypography variant="body2">Loading...</MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            File Upload Progress
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">Uploading file...</MuiTypography>
            <Stack direction="row" spacing={2} alignItems="center">
              <CircularProgress variant="determinate" value={75} showLabel size={32} />
              <MuiTypography variant="caption" sx={{
              color: 'text.secondary'
            }}>
                3.2 MB of 4.3 MB
              </MuiTypography>
            </Stack>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Inline with Text
          </MuiTypography>
          <MuiTypography variant="body1">
            Please wait while we process your request
            <CircularProgress size={16} sx={{
            ml: 1,
            verticalAlign: 'middle'
          }} />
          </MuiTypography>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...x.parameters?.docs?.source},description:{story:"Real-world examples",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={6}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Circular Progress Variants
          </MuiTypography>

          <Stack spacing={4} sx={{
          mt: 3
        }}>
            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Indeterminate (Loading)
              </MuiTypography>
              <Stack direction="row" spacing={3}>
                <CircularProgress size={16} color="primary" />
                <CircularProgress size={32} color="primary" />
                <CircularProgress size={32} color="secondary" />
                <CircularProgress size={32} color="inherit" />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Determinate (With Progress Value)
              </MuiTypography>
              <Stack direction="row" spacing={3}>
                <CircularProgress variant="determinate" value={25} size={32} />
                <CircularProgress variant="determinate" value={50} size={32} />
                <CircularProgress variant="determinate" value={75} size={32} />
                <CircularProgress variant="determinate" value={100} size={32} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                With Labels
              </MuiTypography>
              <Stack direction="row" spacing={3}>
                <CircularProgress variant="determinate" value={25} showLabel size={32} />
                <CircularProgress variant="determinate" value={50} showLabel size={32} color="secondary" />
                <CircularProgress variant="determinate" value={75} showLabel size={32} />
                <CircularProgress variant="determinate" value={99} showLabel size={32} color="secondary" />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...g.parameters?.docs?.source},description:{story:"Full showcase",...g.parameters?.docs?.description}}};const q=["Default","Small","Large","Secondary","Inherit","Determinate","DeterminateWithLabel","AllSizes","AllColors","WithLabels","RealWorldExamples","FullShowcase"];export{m as AllColors,u as AllSizes,o as Default,p as Determinate,d as DeterminateWithLabel,g as FullShowcase,l as Inherit,n as Large,x as RealWorldExamples,c as Secondary,t as Small,h as WithLabels,q as __namedExportsOrder,V as default};
