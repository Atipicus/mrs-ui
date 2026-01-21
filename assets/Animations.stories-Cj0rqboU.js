import{j as e,r as S,af as D,ag as d,ah as b,ai as x,aj as E,ak as M,al as A,am as F,an as I,ao as z,ap as H,aq as w,ar as Z,as as L,at as O,au as R,av as _,aw as $,ax as q,ay as U}from"./iframe-DWofrwYQ.js";import{S as i}from"./Stack-D2w6zfey.js";import{P as o}from"./Paper-BRRgRcad.js";import{T as t}from"./Typography-BMAZ_vyd.js";import{B as n}from"./Box-DsLx4Dsl.js";import{B as c}from"./Button-BhRNaRVx.js";import{F as W}from"./Fade-NvLbIYg6.js";import{G as J}from"./Grow-NhuowNbs.js";import{S as K}from"./Slide-CK3D1sw2.js";import{Z as N}from"./Zoom-DaD9BjWO.js";import{C as Q}from"./Collapse-DM2imOps.js";import{S as y}from"./Switch-CzjpcV2b.js";import{C as h}from"./Checkbox-4JmXzktf.js";import{a as k}from"./Radio-D4RZFC0i.js";import{C as u}from"./Chip-BbJsVX3k.js";import{S as f}from"./Skeleton-P2yWCawS.js";import{L as V}from"./LinearProgress-wHOyUeNC.js";import{C}from"./CircularProgress-DYwiZdZ5.js";import{A as B,a as P,b as T}from"./AccordionSummary-DC5Am7ty.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-CvD85AUt.js";import"./styled-D7k3etPa.js";import"./useThemeProps-D2N2uu2a.js";import"./useTheme-B_trKcCw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BckHzBs4.js";import"./useForkRef-BzogBz_V.js";import"./useEventCallback-DMNlSHap.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-Bw87dmLL.js";import"./index-DSUGtTYh.js";import"./index-Dy5HeRTV.js";import"./getReactElementRef-9mGL7eXS.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./SwitchBase-DZsws_x4.js";import"./useFormControl-lH7bgpBU.js";import"./useSlot-r_MShutE.js";import"./resolveComponentProps-DP0AnNyT.js";import"./useControlled-SM6T88Jq.js";import"./createSvgIcon-BpxyiW6D.js";import"./mergeSlotProps-B3DrO812.js";import"./createChainedFunction-BO_9K8Jh.js";const Re={title:"Theme/Animations & Transitions",parameters:{docs:{description:{component:"Complete animation and transition token system following Material Design Motion guidelines."}}}},a=({label:r,value:l})=>e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1,borderBottom:"1px solid",borderColor:"divider"},children:[e.jsx(t,{variant:"body2",fontFamily:"monospace",children:r}),e.jsx(t,{variant:"body2",color:"text.secondary",fontFamily:"monospace",children:l})]}),X=()=>{const[r,l]=S.useState(!1);return e.jsxs(i,{spacing:4,children:[e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"⏱️ Duration Tokens"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Standard timing values for animations and transitions"}),e.jsxs(i,{spacing:0,children:[e.jsx(a,{label:"instant",value:D}),e.jsx(a,{label:"fast",value:d}),e.jsx(a,{label:"base",value:b}),e.jsx(a,{label:"moderate",value:x}),e.jsx(a,{label:"slow",value:E}),e.jsx(a,{label:"slower",value:M})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"📈 Easing Functions"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Cubic Bezier curves for smooth motion"}),e.jsxs(i,{spacing:0,children:[e.jsx(a,{label:"standard",value:A}),e.jsx(a,{label:"emphasized",value:F}),e.jsx(a,{label:"decelerate",value:I}),e.jsx(a,{label:"accelerate",value:z}),e.jsx(a,{label:"sharp",value:H})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎭 Material-UI Transitions"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Common transition components with our motion tokens"}),e.jsx(c,{variant:"contained",onClick:()=>l(p=>!p),sx:{mb:2},children:"Toggle Animations"}),e.jsxs(i,{spacing:3,children:[e.jsxs(n,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Fade"}),e.jsx(W,{in:r,timeout:200,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"primary.main",color:"white"},children:e.jsxs(t,{children:["Fade Animation (",b,")"]})})})]}),e.jsxs(n,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Grow"}),e.jsx(J,{in:r,timeout:300,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"secondary.main",color:"black"},children:e.jsxs(t,{children:["Grow Animation (",x,")"]})})})]}),e.jsxs(n,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Slide"}),e.jsx(K,{in:r,direction:"up",timeout:300,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"info.main",color:"white"},children:e.jsxs(t,{children:["Slide Animation (",x,")"]})})})]}),e.jsxs(n,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Zoom"}),e.jsx(N,{in:r,timeout:200,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"success.main",color:"white"},children:e.jsxs(t,{children:["Zoom Animation (",b,")"]})})})]}),e.jsxs(n,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Collapse"}),e.jsx(Q,{in:r,timeout:300,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"warning.main",color:"black"},children:e.jsxs(t,{children:["Collapse Animation (",x,")"]})})})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎨 Component Transition Tokens"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Pre-configured transitions for common components"}),e.jsxs(i,{spacing:0,children:[e.jsx(a,{label:"Button default",value:w}),e.jsx(a,{label:"Dialog enter",value:Z}),e.jsx(a,{label:"Drawer enter",value:L}),e.jsx(a,{label:"Snackbar enter",value:O}),e.jsx(a,{label:"Tooltip enter",value:R})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎯 Interactive Component Animations"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Components with smooth transitions"}),e.jsxs(i,{spacing:3,children:[e.jsxs(n,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Switch (",d,")"]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(y,{defaultChecked:!0}),e.jsx(y,{}),e.jsx(y,{disabled:!0})]})]}),e.jsxs(n,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Checkbox (",d,")"]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(h,{defaultChecked:!0}),e.jsx(h,{}),e.jsx(h,{indeterminate:!0}),e.jsx(h,{disabled:!0})]})]}),e.jsxs(n,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Radio (",d,")"]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(k,{checked:!0}),e.jsx(k,{}),e.jsx(k,{disabled:!0})]})]}),e.jsxs(n,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Chips (",d,")"]}),e.jsxs(i,{direction:"row",spacing:1,flexWrap:"wrap",children:[e.jsx(u,{label:"Clickable",onClick:()=>{}}),e.jsx(u,{label:"Deletable",onDelete:()=>{}}),e.jsx(u,{label:"Primary",color:"primary"}),e.jsx(u,{label:"Secondary",color:"secondary"})]})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"⏳ Loading Animations"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Continuous animations for loading states"}),e.jsxs(i,{spacing:3,children:[e.jsxs(n,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Skeleton (Pulse: ",_,")"]}),e.jsxs(i,{spacing:1,children:[e.jsx(f,{variant:"text",width:"60%"}),e.jsx(f,{variant:"rectangular",height:60}),e.jsx(f,{variant:"circular",width:40,height:40})]})]}),e.jsxs(n,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Progress (",$,")"]}),e.jsxs(i,{spacing:2,children:[e.jsx(V,{}),e.jsxs(n,{display:"flex",gap:2,children:[e.jsx(C,{size:24}),e.jsx(C,{size:32}),e.jsx(C,{size:40})]})]})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"📁 Accordion Transitions"}),e.jsxs(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:["Expand: ",q," / Collapse:"," ",U]}),e.jsxs(i,{spacing:1,children:[e.jsxs(B,{children:[e.jsx(P,{children:e.jsx(t,{children:"Accordion Panel 1"})}),e.jsx(T,{children:e.jsx(t,{children:"This accordion uses smooth expand/collapse transitions based on our motion tokens."})})]}),e.jsxs(B,{children:[e.jsx(P,{children:e.jsx(t,{children:"Accordion Panel 2"})}),e.jsx(T,{children:e.jsx(t,{children:"The transition combines height animation with Material Design easing functions."})})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎯 Hover & Focus Transitions"}),e.jsxs(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:["Button transition: ",w]}),e.jsxs(i,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(c,{variant:"contained",children:"Hover Me"}),e.jsx(c,{variant:"outlined",children:"Hover Me"}),e.jsx(c,{variant:"text",children:"Hover Me"}),e.jsx(c,{variant:"contained",color:"secondary",children:"Hover Me"}),e.jsx(c,{variant:"contained",color:"error",children:"Hover Me"})]})]})]})},j={render:()=>e.jsx(X,{})},v={render:()=>{const[r,l]=S.useState(null),p=[{label:"Instant",value:0,token:D},{label:"Fast",value:100,token:d},{label:"Base",value:200,token:b},{label:"Moderate",value:300,token:x},{label:"Slow",value:400,token:E},{label:"Slower",value:500,token:M}];return e.jsx(i,{spacing:3,children:e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"⏱️ Duration Comparison"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Click a button to see the difference in animation speed"}),e.jsx(i,{spacing:2,children:p.map(({label:s,value:m,token:G})=>e.jsxs(n,{children:[e.jsxs(c,{variant:"contained",onClick:()=>{l(s),setTimeout(()=>l(null),m+100)},sx:{mb:1,minWidth:140},children:[s," (",G,")"]}),e.jsx(W,{in:r===s,timeout:m,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"primary.main",color:"white",height:60,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(t,{children:["Animated with ",s," duration"]})})})]},s))})]})})}},g={render:()=>{const[r,l]=S.useState(null),p=[{label:"Standard",token:A},{label:"Emphasized",token:F},{label:"Decelerate",token:I},{label:"Accelerate",token:z},{label:"Sharp",token:H}];return e.jsx(i,{spacing:3,children:e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"📈 Easing Function Comparison"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Click a button to see different easing curves in action"}),e.jsx(i,{spacing:2,children:p.map(({label:s,token:m})=>e.jsxs(n,{children:[e.jsxs(c,{variant:"outlined",onClick:()=>{l(s),setTimeout(()=>l(null),500)},sx:{mb:1,minWidth:180},children:[s," (",m,")"]}),e.jsx(n,{sx:{height:60,bgcolor:"background.paper",border:"1px solid",borderColor:"divider",position:"relative",overflow:"hidden"},children:e.jsx(o,{elevation:3,sx:{position:"absolute",left:r===s?"calc(100% - 60px)":0,top:0,width:60,height:60,bgcolor:"secondary.main",transition:`left 500ms ${m}`,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(t,{variant:"caption",children:"→"})})})]},s))})]})})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionDemo />
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeSpeed, setActiveSpeed] = useState<string | null>(null);
    const speeds = [{
      label: 'Instant',
      value: 0,
      token: tokens.PrimitivesMotionDurationInstant
    }, {
      label: 'Fast',
      value: 100,
      token: tokens.PrimitivesMotionDurationFast
    }, {
      label: 'Base',
      value: 200,
      token: tokens.PrimitivesMotionDurationBase
    }, {
      label: 'Moderate',
      value: 300,
      token: tokens.PrimitivesMotionDurationModerate
    }, {
      label: 'Slow',
      value: 400,
      token: tokens.PrimitivesMotionDurationSlow
    }, {
      label: 'Slower',
      value: 500,
      token: tokens.PrimitivesMotionDurationSlower
    }];
    return <Stack spacing={3}>
        <Paper elevation={1} sx={{
        p: 3
      }}>
          <Typography variant="h6" gutterBottom>
            ⏱️ Duration Comparison
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Click a button to see the difference in animation speed
          </Typography>

          <Stack spacing={2}>
            {speeds.map(({
            label,
            value,
            token
          }) => <Box key={label}>
                <Button variant="contained" onClick={() => {
              setActiveSpeed(label);
              setTimeout(() => setActiveSpeed(null), value + 100);
            }} sx={{
              mb: 1,
              minWidth: 140
            }}>
                  {label} ({token})
                </Button>
                <Fade in={activeSpeed === label} timeout={value}>
                  <Paper elevation={2} sx={{
                p: 2,
                bgcolor: 'primary.main',
                color: 'white',
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                    <Typography>Animated with {label} duration</Typography>
                  </Paper>
                </Fade>
              </Box>)}
          </Stack>
        </Paper>
      </Stack>;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeEasing, setActiveEasing] = useState<string | null>(null);
    const easings = [{
      label: 'Standard',
      token: tokens.PrimitivesMotionEasingStandard
    }, {
      label: 'Emphasized',
      token: tokens.PrimitivesMotionEasingEmphasized
    }, {
      label: 'Decelerate',
      token: tokens.PrimitivesMotionEasingDecelerate
    }, {
      label: 'Accelerate',
      token: tokens.PrimitivesMotionEasingAccelerate
    }, {
      label: 'Sharp',
      token: tokens.PrimitivesMotionEasingSharp
    }];
    return <Stack spacing={3}>
        <Paper elevation={1} sx={{
        p: 3
      }}>
          <Typography variant="h6" gutterBottom>
            📈 Easing Function Comparison
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Click a button to see different easing curves in action
          </Typography>

          <Stack spacing={2}>
            {easings.map(({
            label,
            token
          }) => <Box key={label}>
                <Button variant="outlined" onClick={() => {
              setActiveEasing(label);
              setTimeout(() => setActiveEasing(null), 500);
            }} sx={{
              mb: 1,
              minWidth: 180
            }}>
                  {label} ({token})
                </Button>
                <Box sx={{
              height: 60,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              position: 'relative',
              overflow: 'hidden'
            }}>
                  <Paper elevation={3} sx={{
                position: 'absolute',
                left: activeEasing === label ? 'calc(100% - 60px)' : 0,
                top: 0,
                width: 60,
                height: 60,
                bgcolor: 'secondary.main',
                transition: \`left 500ms \${token}\`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                    <Typography variant="caption">→</Typography>
                  </Paper>
                </Box>
              </Box>)}
          </Stack>
        </Paper>
      </Stack>;
  }
}`,...g.parameters?.docs?.source}}};const _e=["Overview","DurationComparison","EasingComparison"];export{v as DurationComparison,g as EasingComparison,j as Overview,_e as __namedExportsOrder,Re as default};
