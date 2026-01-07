import{R as S,j as e}from"./iframe-BPbf4MnO.js";import{B as s}from"./Box-DCr-n08M.js";import{L as P}from"./LinearProgress-CwCs6XfF.js";import{T as a}from"./Typography-JXIqQdEC.js";import{S as t}from"./Stack-D9WWzYIi.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DpAFHVj5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./styled-B15bc4p2.js";import"./useThemeProps-CU9e_Q49.js";const r=S.forwardRef(({color:y="primary",showLabel:T=!1,value:g=0,valueBuffer:b,variant:f="indeterminate",sx:j,...L},B)=>T&&(f==="determinate"||f==="buffer")?e.jsxs(s,{ref:B,sx:{display:"flex",alignItems:"center",gap:1,minWidth:200,...j},children:[e.jsx(s,{sx:{flexGrow:1},children:e.jsx(P,{variant:f,color:y,value:g,valueBuffer:b,...L})}),e.jsx(s,{sx:{minWidth:35},children:e.jsx(a,{variant:"body2",sx:{color:"text.primary"},children:`${Math.round(g)}%`})})]}):e.jsx(P,{ref:B,variant:f,color:y,value:g,valueBuffer:b,sx:{minWidth:200,...j},...L}));r.displayName="LinearProgress";r.__docgenInfo={description:`LinearProgress component

Progress indicators commonly known as spinners, express an unspecified wait time
or display the length of a process.

@param props - LinearProgress component props
@returns LinearProgress component`,methods:[],displayName:"LinearProgress",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'inherit'"}]},description:`The color of the component
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`If true, shows the progress value as a label next to the bar
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"number"},description:`The value of the progress indicator for the determinate and buffer variants.
Value between 0 and 100.`,defaultValue:{value:"0",computed:!1}},valueBuffer:{required:!1,tsType:{name:"number"},description:`The value for the buffer variant.
Value between 0 and 100.`},variant:{required:!1,tsType:{name:"union",raw:"'determinate' | 'indeterminate' | 'buffer'",elements:[{name:"literal",value:"'determinate'"},{name:"literal",value:"'indeterminate'"},{name:"literal",value:"'buffer'"}]},description:`The variant to use
@default 'indeterminate'`,defaultValue:{value:"'indeterminate'",computed:!1}}},composes:["MuiLinearProgressProps"]};const q={title:"Atoms/LinearProgress",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","inherit"],description:"The color of the component"},variant:{control:"select",options:["determinate","indeterminate","buffer"],description:"The variant to use"},value:{control:{type:"range",min:0,max:100,step:1},description:"The value of the progress (determinate/buffer)"},valueBuffer:{control:{type:"range",min:0,max:100,step:1},description:"The buffer value (buffer variant only)"},showLabel:{control:"boolean",description:"If true, shows the progress value as a label"}},args:{color:"primary",variant:"indeterminate",showLabel:!1}},i={args:{}},n={args:{color:"secondary"}},o={args:{color:"inherit"}},l={args:{variant:"determinate",value:50}},c={args:{variant:"determinate",value:50,showLabel:!0}},u={args:{variant:"buffer",value:50,valueBuffer:75}},p={args:{variant:"buffer",value:50,valueBuffer:75,showLabel:!0}},d={render:()=>e.jsx(s,{sx:{p:4},children:e.jsxs(t,{spacing:4,children:[e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Indeterminate (Loading)"}),e.jsx(r,{variant:"indeterminate"})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Determinate (With Progress Value)"}),e.jsx(r,{variant:"determinate",value:50})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Buffer (With Buffer Value)"}),e.jsx(r,{variant:"buffer",value:50,valueBuffer:75})]})]})}),parameters:{layout:"padded"}},m={render:()=>e.jsx(s,{sx:{p:4},children:e.jsxs(t,{spacing:4,children:[e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Primary Color"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{color:"primary",variant:"indeterminate"}),e.jsx(r,{color:"primary",variant:"determinate",value:50}),e.jsx(r,{color:"primary",variant:"buffer",value:50,valueBuffer:75}),e.jsx(r,{color:"primary",variant:"determinate",value:50,showLabel:!0})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Secondary Color"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{color:"secondary",variant:"indeterminate"}),e.jsx(r,{color:"secondary",variant:"determinate",value:50}),e.jsx(r,{color:"secondary",variant:"buffer",value:50,valueBuffer:75}),e.jsx(r,{color:"secondary",variant:"determinate",value:50,showLabel:!0})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Inherit Color"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{color:"inherit",variant:"indeterminate"}),e.jsx(r,{color:"inherit",variant:"determinate",value:50}),e.jsx(r,{color:"inherit",variant:"buffer",value:50,valueBuffer:75}),e.jsx(r,{color:"inherit",variant:"determinate",value:50,showLabel:!0})]})]})]})}),parameters:{layout:"fullscreen"}},h={render:()=>e.jsxs(s,{sx:{p:4},children:[e.jsx(a,{variant:"h6",sx:{mb:3},children:"Progress with Labels"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{variant:"determinate",value:25,showLabel:!0}),e.jsx(r,{variant:"determinate",value:50,showLabel:!0}),e.jsx(r,{variant:"determinate",value:75,showLabel:!0}),e.jsx(r,{variant:"determinate",value:100,showLabel:!0})]})]}),parameters:{layout:"padded"}},v={render:()=>e.jsx(s,{sx:{p:4},children:e.jsxs(t,{spacing:4,children:[e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Page Loading"}),e.jsx(r,{variant:"indeterminate"}),e.jsx(a,{variant:"caption",sx:{mt:1,display:"block",color:"text.secondary"},children:"Loading page content..."})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"File Upload Progress"}),e.jsxs(t,{spacing:1,children:[e.jsx(a,{variant:"body2",children:"document.pdf"}),e.jsx(r,{variant:"determinate",value:65,showLabel:!0}),e.jsx(a,{variant:"caption",sx:{color:"text.secondary"},children:"2.1 MB of 3.2 MB uploaded"})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Buffer (Streaming Video)"}),e.jsxs(t,{spacing:1,children:[e.jsx(a,{variant:"body2",children:"Video playback"}),e.jsx(r,{variant:"buffer",value:60,valueBuffer:80}),e.jsx(a,{variant:"caption",sx:{color:"text.secondary"},children:"Played: 60% • Buffered: 80%"})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Multi-step Process"}),e.jsxs(t,{spacing:1,children:[e.jsx(a,{variant:"body2",children:"Step 2 of 4"}),e.jsx(r,{variant:"determinate",value:50,showLabel:!0}),e.jsx(a,{variant:"caption",sx:{color:"text.secondary"},children:"Completing profile setup"})]})]})]})}),parameters:{layout:"fullscreen"}},x={render:()=>e.jsx(s,{sx:{p:4},children:e.jsx(t,{spacing:6,children:e.jsxs(s,{children:[e.jsx(a,{variant:"h4",gutterBottom:!0,children:"Linear Progress Variants"}),e.jsxs(t,{spacing:4,sx:{mt:3},children:[e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Indeterminate (Loading)"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{variant:"indeterminate",color:"primary"}),e.jsx(r,{variant:"indeterminate",color:"secondary"}),e.jsx(r,{variant:"indeterminate",color:"inherit"})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Determinate (With Progress Value)"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{variant:"determinate",value:25}),e.jsx(r,{variant:"determinate",value:50}),e.jsx(r,{variant:"determinate",value:75}),e.jsx(r,{variant:"determinate",value:100})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"Buffer (Streaming/Buffering)"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{variant:"buffer",value:30,valueBuffer:60}),e.jsx(r,{variant:"buffer",value:50,valueBuffer:80}),e.jsx(r,{variant:"buffer",value:70,valueBuffer:90})]})]}),e.jsxs(s,{children:[e.jsx(a,{variant:"h6",sx:{mb:2},children:"With Labels"}),e.jsxs(t,{spacing:2,children:[e.jsx(r,{variant:"determinate",value:25,showLabel:!0}),e.jsx(r,{variant:"determinate",value:50,showLabel:!0,color:"secondary"}),e.jsx(r,{variant:"determinate",value:75,showLabel:!0}),e.jsx(r,{variant:"buffer",value:60,valueBuffer:80,showLabel:!0})]})]})]})]})})}),parameters:{layout:"fullscreen"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...i.parameters?.docs?.source},description:{story:"Default indeterminate linear progress",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary'
  }
}`,...n.parameters?.docs?.source},description:{story:"With secondary color",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inherit'
  }
}`,...o.parameters?.docs?.source},description:{story:"With inherit color",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 50
  }
}`,...l.parameters?.docs?.source},description:{story:"Determinate variant with value",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 50,
    showLabel: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Determinate with label",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buffer',
    value: 50,
    valueBuffer: 75
  }
}`,...u.parameters?.docs?.source},description:{story:"Buffer variant",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buffer',
    value: 50,
    valueBuffer: 75,
    showLabel: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Buffer with label",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Indeterminate (Loading)
          </MuiTypography>
          <LinearProgress variant="indeterminate" />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Determinate (With Progress Value)
          </MuiTypography>
          <LinearProgress variant="determinate" value={50} />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Buffer (With Buffer Value)
          </MuiTypography>
          <LinearProgress variant="buffer" value={50} valueBuffer={75} />
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'padded'
  }
}`,...d.parameters?.docs?.source},description:{story:"All variants showcase",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Stack spacing={2}>
            <LinearProgress color="primary" variant="indeterminate" />
            <LinearProgress color="primary" variant="determinate" value={50} />
            <LinearProgress color="primary" variant="buffer" value={50} valueBuffer={75} />
            <LinearProgress color="primary" variant="determinate" value={50} showLabel />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Secondary Color
          </MuiTypography>
          <Stack spacing={2}>
            <LinearProgress color="secondary" variant="indeterminate" />
            <LinearProgress color="secondary" variant="determinate" value={50} />
            <LinearProgress color="secondary" variant="buffer" value={50} valueBuffer={75} />
            <LinearProgress color="secondary" variant="determinate" value={50} showLabel />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Inherit Color
          </MuiTypography>
          <Stack spacing={2}>
            <LinearProgress color="inherit" variant="indeterminate" />
            <LinearProgress color="inherit" variant="determinate" value={50} />
            <LinearProgress color="inherit" variant="buffer" value={50} valueBuffer={75} />
            <LinearProgress color="inherit" variant="determinate" value={50} showLabel />
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
      <Stack spacing={2}>
        <LinearProgress variant="determinate" value={25} showLabel />
        <LinearProgress variant="determinate" value={50} showLabel />
        <LinearProgress variant="determinate" value={75} showLabel />
        <LinearProgress variant="determinate" value={100} showLabel />
      </Stack>
    </Box>,
  parameters: {
    layout: 'padded'
  }
}`,...h.parameters?.docs?.source},description:{story:"With labels showcase",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Page Loading
          </MuiTypography>
          <LinearProgress variant="indeterminate" />
          <MuiTypography variant="caption" sx={{
          mt: 1,
          display: 'block',
          color: 'text.secondary'
        }}>
            Loading page content...
          </MuiTypography>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            File Upload Progress
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">document.pdf</MuiTypography>
            <LinearProgress variant="determinate" value={65} showLabel />
            <MuiTypography variant="caption" sx={{
            color: 'text.secondary'
          }}>
              2.1 MB of 3.2 MB uploaded
            </MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Buffer (Streaming Video)
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">Video playback</MuiTypography>
            <LinearProgress variant="buffer" value={60} valueBuffer={80} />
            <MuiTypography variant="caption" sx={{
            color: 'text.secondary'
          }}>
              Played: 60% • Buffered: 80%
            </MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Multi-step Process
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">Step 2 of 4</MuiTypography>
            <LinearProgress variant="determinate" value={50} showLabel />
            <MuiTypography variant="caption" sx={{
            color: 'text.secondary'
          }}>
              Completing profile setup
            </MuiTypography>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...v.parameters?.docs?.source},description:{story:"Real-world examples",...v.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={6}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Linear Progress Variants
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
              <Stack spacing={2}>
                <LinearProgress variant="indeterminate" color="primary" />
                <LinearProgress variant="indeterminate" color="secondary" />
                <LinearProgress variant="indeterminate" color="inherit" />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Determinate (With Progress Value)
              </MuiTypography>
              <Stack spacing={2}>
                <LinearProgress variant="determinate" value={25} />
                <LinearProgress variant="determinate" value={50} />
                <LinearProgress variant="determinate" value={75} />
                <LinearProgress variant="determinate" value={100} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Buffer (Streaming/Buffering)
              </MuiTypography>
              <Stack spacing={2}>
                <LinearProgress variant="buffer" value={30} valueBuffer={60} />
                <LinearProgress variant="buffer" value={50} valueBuffer={80} />
                <LinearProgress variant="buffer" value={70} valueBuffer={90} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                With Labels
              </MuiTypography>
              <Stack spacing={2}>
                <LinearProgress variant="determinate" value={25} showLabel />
                <LinearProgress variant="determinate" value={50} showLabel color="secondary" />
                <LinearProgress variant="determinate" value={75} showLabel />
                <LinearProgress variant="buffer" value={60} valueBuffer={80} showLabel />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...x.parameters?.docs?.source},description:{story:"Full showcase",...x.parameters?.docs?.description}}};const F=["Default","Secondary","Inherit","Determinate","DeterminateWithLabel","Buffer","BufferWithLabel","AllVariants","AllColors","WithLabels","RealWorldExamples","FullShowcase"];export{m as AllColors,d as AllVariants,u as Buffer,p as BufferWithLabel,i as Default,l as Determinate,c as DeterminateWithLabel,x as FullShowcase,o as Inherit,v as RealWorldExamples,n as Secondary,h as WithLabels,F as __namedExportsOrder,q as default};
