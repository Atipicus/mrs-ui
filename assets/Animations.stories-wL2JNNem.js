import{j as e,r as S,P as D,Q as d,S as b,U as x,V as E,W as M,X as A,Y as F,Z as I,$ as z,a0 as W,a1 as B,a2 as G,a3 as L,a4 as O,a5 as R,a6 as $,a7 as U,a8 as _,a9 as Q}from"./iframe-Dl9r9HZP.js";import{S as i}from"./Stack-BGogMBVL.js";import{P as o}from"./Paper-DxQXb5rA.js";import{T as t}from"./Typography-U0kRp1JP.js";import{B as r}from"./Box-BkVDr85C.js";import{B as c}from"./Button-DASSmM0J.js";import{F as H}from"./Fade-CKunJLOS.js";import{G as V}from"./Grow-D4KdV4IN.js";import{S as X}from"./Slide-Bd9ZJKpR.js";import{Z as Y}from"./Zoom-D2Iqj1HV.js";import{C as q}from"./Collapse-CpOhqXKI.js";import{S as y}from"./Switch-CCbmJZS7.js";import{C as h}from"./Checkbox-Cu33jW-k.js";import{a as k}from"./Radio-qY7dFlyl.js";import{C as u}from"./Chip-DNgQgiNl.js";import{S as f}from"./Skeleton-DLC-gPi6.js";import{L as J}from"./LinearProgress-5xc5ql9M.js";import{C}from"./CircularProgress-w3nmOSlZ.js";import{A as w,a as P,b as T}from"./AccordionSummary-zdBAPhMx.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DvwEb_WH.js";import"./styled-87kgaNOt.js";import"./useThemeProps-D0czm1aT.js";import"./useTheme-BAlR5yVX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-mtHRWFuf.js";import"./useForkRef-Wn9r2ipd.js";import"./useEventCallback-CJgJsajd.js";import"./isFocusVisible-B8k4qzLc.js";import"./utils-B_B_gjLa.js";import"./index-ebyj4rdU.js";import"./index-U0P_bg-H.js";import"./getReactElementRef-BO8IinHS.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./SwitchBase-Cb96vkpD.js";import"./useFormControl-B_DCbXAw.js";import"./useSlot-V9VYhHcM.js";import"./resolveComponentProps-D8eOJXbT.js";import"./useControlled-BN2N4-wP.js";import"./createSvgIcon-BSsRlrdR.js";import"./mergeSlotProps-BZ3KhpGo.js";import"./createChainedFunction-BO_9K8Jh.js";const Re={title:"Theme/Animations & Transitions",parameters:{docs:{description:{component:"Complete animation and transition token system following Material Design Motion guidelines."}}}},n=({label:a,value:l})=>e.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:1,borderBottom:"1px solid",borderColor:"divider"},children:[e.jsx(t,{variant:"body2",fontFamily:"monospace",children:a}),e.jsx(t,{variant:"body2",color:"text.secondary",fontFamily:"monospace",children:l})]}),K=()=>{const[a,l]=S.useState(!1);return e.jsxs(i,{spacing:4,children:[e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"⏱️ Duration Tokens"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Standard timing values for animations and transitions"}),e.jsxs(i,{spacing:0,children:[e.jsx(n,{label:"instant",value:D}),e.jsx(n,{label:"fast",value:d}),e.jsx(n,{label:"base",value:b}),e.jsx(n,{label:"moderate",value:x}),e.jsx(n,{label:"slow",value:E}),e.jsx(n,{label:"slower",value:M})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"📈 Easing Functions"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Cubic Bezier curves for smooth motion"}),e.jsxs(i,{spacing:0,children:[e.jsx(n,{label:"standard",value:A}),e.jsx(n,{label:"emphasized",value:F}),e.jsx(n,{label:"decelerate",value:I}),e.jsx(n,{label:"accelerate",value:z}),e.jsx(n,{label:"sharp",value:W})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎭 Material-UI Transitions"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Common transition components with our motion tokens"}),e.jsx(c,{variant:"contained",onClick:()=>l(p=>!p),sx:{mb:2},children:"Toggle Animations"}),e.jsxs(i,{spacing:3,children:[e.jsxs(r,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Fade"}),e.jsx(H,{in:a,timeout:200,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"primary.main",color:"white"},children:e.jsxs(t,{children:["Fade Animation (",b,")"]})})})]}),e.jsxs(r,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Grow"}),e.jsx(V,{in:a,timeout:300,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"secondary.main",color:"black"},children:e.jsxs(t,{children:["Grow Animation (",x,")"]})})})]}),e.jsxs(r,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Slide"}),e.jsx(X,{in:a,direction:"up",timeout:300,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"info.main",color:"white"},children:e.jsxs(t,{children:["Slide Animation (",x,")"]})})})]}),e.jsxs(r,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Zoom"}),e.jsx(Y,{in:a,timeout:200,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"success.main",color:"white"},children:e.jsxs(t,{children:["Zoom Animation (",b,")"]})})})]}),e.jsxs(r,{children:[e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Collapse"}),e.jsx(q,{in:a,timeout:300,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"warning.main",color:"black"},children:e.jsxs(t,{children:["Collapse Animation (",x,")"]})})})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎨 Component Transition Tokens"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Pre-configured transitions for common components"}),e.jsxs(i,{spacing:0,children:[e.jsx(n,{label:"Button default",value:B}),e.jsx(n,{label:"Dialog enter",value:G}),e.jsx(n,{label:"Drawer enter",value:L}),e.jsx(n,{label:"Snackbar enter",value:O}),e.jsx(n,{label:"Tooltip enter",value:R})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎯 Interactive Component Animations"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Components with smooth transitions"}),e.jsxs(i,{spacing:3,children:[e.jsxs(r,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Switch (",d,")"]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(y,{defaultChecked:!0}),e.jsx(y,{}),e.jsx(y,{disabled:!0})]})]}),e.jsxs(r,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Checkbox (",d,")"]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(h,{defaultChecked:!0}),e.jsx(h,{}),e.jsx(h,{indeterminate:!0}),e.jsx(h,{disabled:!0})]})]}),e.jsxs(r,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Radio (",d,")"]}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(k,{checked:!0}),e.jsx(k,{}),e.jsx(k,{disabled:!0})]})]}),e.jsxs(r,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Chips (",d,")"]}),e.jsxs(i,{direction:"row",spacing:1,flexWrap:"wrap",children:[e.jsx(u,{label:"Clickable",onClick:()=>{}}),e.jsx(u,{label:"Deletable",onDelete:()=>{}}),e.jsx(u,{label:"Primary",color:"primary"}),e.jsx(u,{label:"Secondary",color:"secondary"})]})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"⏳ Loading Animations"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Continuous animations for loading states"}),e.jsxs(i,{spacing:3,children:[e.jsxs(r,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Skeleton (Pulse: ",$,")"]}),e.jsxs(i,{spacing:1,children:[e.jsx(f,{variant:"text",width:"60%"}),e.jsx(f,{variant:"rectangular",height:60}),e.jsx(f,{variant:"circular",width:40,height:40})]})]}),e.jsxs(r,{children:[e.jsxs(t,{variant:"subtitle2",gutterBottom:!0,children:["Progress (",U,")"]}),e.jsxs(i,{spacing:2,children:[e.jsx(J,{}),e.jsxs(r,{display:"flex",gap:2,children:[e.jsx(C,{size:24}),e.jsx(C,{size:32}),e.jsx(C,{size:40})]})]})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"📁 Accordion Transitions"}),e.jsxs(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:["Expand: ",_," / Collapse:"," ",Q]}),e.jsxs(i,{spacing:1,children:[e.jsxs(w,{children:[e.jsx(P,{children:e.jsx(t,{children:"Accordion Panel 1"})}),e.jsx(T,{children:e.jsx(t,{children:"This accordion uses smooth expand/collapse transitions based on our motion tokens."})})]}),e.jsxs(w,{children:[e.jsx(P,{children:e.jsx(t,{children:"Accordion Panel 2"})}),e.jsx(T,{children:e.jsx(t,{children:"The transition combines height animation with Material Design easing functions."})})]})]})]}),e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"🎯 Hover & Focus Transitions"}),e.jsxs(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:["Button transition: ",B]}),e.jsxs(i,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(c,{variant:"contained",children:"Hover Me"}),e.jsx(c,{variant:"outlined",children:"Hover Me"}),e.jsx(c,{variant:"text",children:"Hover Me"}),e.jsx(c,{variant:"contained",color:"secondary",children:"Hover Me"}),e.jsx(c,{variant:"contained",color:"error",children:"Hover Me"})]})]})]})},j={render:()=>e.jsx(K,{})},v={render:()=>{const[a,l]=S.useState(null),p=[{label:"Instant",value:0,token:D},{label:"Fast",value:100,token:d},{label:"Base",value:200,token:b},{label:"Moderate",value:300,token:x},{label:"Slow",value:400,token:E},{label:"Slower",value:500,token:M}];return e.jsx(i,{spacing:3,children:e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"⏱️ Duration Comparison"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Click a button to see the difference in animation speed"}),e.jsx(i,{spacing:2,children:p.map(({label:s,value:m,token:Z})=>e.jsxs(r,{children:[e.jsxs(c,{variant:"contained",onClick:()=>{l(s),setTimeout(()=>l(null),m+100)},sx:{mb:1,minWidth:140},children:[s," (",Z,")"]}),e.jsx(H,{in:a===s,timeout:m,children:e.jsx(o,{elevation:2,sx:{p:2,bgcolor:"primary.main",color:"white",height:60,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(t,{children:["Animated with ",s," duration"]})})})]},s))})]})})}},g={render:()=>{const[a,l]=S.useState(null),p=[{label:"Standard",token:A},{label:"Emphasized",token:F},{label:"Decelerate",token:I},{label:"Accelerate",token:z},{label:"Sharp",token:W}];return e.jsx(i,{spacing:3,children:e.jsxs(o,{elevation:1,sx:{p:3},children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"📈 Easing Function Comparison"}),e.jsx(t,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Click a button to see different easing curves in action"}),e.jsx(i,{spacing:2,children:p.map(({label:s,token:m})=>e.jsxs(r,{children:[e.jsxs(c,{variant:"outlined",onClick:()=>{l(s),setTimeout(()=>l(null),500)},sx:{mb:1,minWidth:180},children:[s," (",m,")"]}),e.jsx(r,{sx:{height:60,bgcolor:"background.paper",border:"1px solid",borderColor:"divider",position:"relative",overflow:"hidden"},children:e.jsx(o,{elevation:3,sx:{position:"absolute",left:a===s?"calc(100% - 60px)":0,top:0,width:60,height:60,bgcolor:"secondary.main",transition:`left 500ms ${m}`,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(t,{variant:"caption",children:"→"})})})]},s))})]})})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const $e=["Overview","DurationComparison","EasingComparison"];export{v as DurationComparison,g as EasingComparison,j as Overview,$e as __namedExportsOrder,Re as default};
