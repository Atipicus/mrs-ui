import{r as _,u as K,d as X,j as e,c,l as G,f as H,g as N,k as O,R as J}from"./iframe-Ll-6DOMq.js";import{B as n}from"./Box-CT6B1tpM.js";import{g as Q,b as Y,s as W,c as Z,a as ee,m as V,d as w}from"./createSimplePaletteValueFilter-Cr3O56rL.js";import{T as s}from"./Typography-BDVHBFsV.js";import{S as o}from"./Stack-CPzMnDxi.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-BbVj2W6_.js";function re(t){return Q("MuiLinearProgress",t)}Y("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const D=4,R=O`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,ae=typeof R!="string"?N`
        animation: ${R} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,q=O`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,te=typeof q!="string"?N`
        animation: ${q} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,A=O`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,ie=typeof A!="string"?N`
        animation: ${A} 3s infinite linear;
      `:null,se=t=>{const{classes:r,variant:i,color:l}=t,u={root:["root",`color${c(l)}`,i],dashed:["dashed",`dashedColor${c(l)}`],bar1:["bar","bar1",`barColor${c(l)}`,(i==="indeterminate"||i==="query")&&"bar1Indeterminate",i==="determinate"&&"bar1Determinate",i==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",i!=="buffer"&&`barColor${c(l)}`,i==="buffer"&&`color${c(l)}`,(i==="indeterminate"||i==="query")&&"bar2Indeterminate",i==="buffer"&&"bar2Buffer"]};return ee(u,re,r)},z=(t,r)=>t.vars?t.vars.palette.LinearProgress[`${r}Bg`]:t.palette.mode==="light"?G(t.palette[r].main,.62):H(t.palette[r].main,.5),ne=W("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:i}=t;return[r.root,r[`color${c(i.color)}`],r[i.variant]]}})(V(({theme:t})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(t.palette).filter(w()).map(([r])=>({props:{color:r},style:{backgroundColor:z(t,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),oe=W("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(t,r)=>{const{ownerState:i}=t;return[r.dashed,r[`dashedColor${c(i.color)}`]]}})(V(({theme:t})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(t.palette).filter(w()).map(([r])=>{const i=z(t,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${i} 0%, ${i} 16%, transparent 42%)`}}})]})),ie||{animation:`${A} 3s infinite linear`}),le=W("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(t,r)=>{const{ownerState:i}=t;return[r.bar,r.bar1,r[`barColor${c(i.color)}`],(i.variant==="indeterminate"||i.variant==="query")&&r.bar1Indeterminate,i.variant==="determinate"&&r.bar1Determinate,i.variant==="buffer"&&r.bar1Buffer]}})(V(({theme:t})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(t.palette).filter(w()).map(([r])=>({props:{color:r},style:{backgroundColor:(t.vars||t).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${D}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${D}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:ae||{animation:`${R} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),ce=W("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(t,r)=>{const{ownerState:i}=t;return[r.bar,r.bar2,r[`barColor${c(i.color)}`],(i.variant==="indeterminate"||i.variant==="query")&&r.bar2Indeterminate,i.variant==="buffer"&&r.bar2Buffer]}})(V(({theme:t})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(t.palette).filter(w()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(t.vars||t).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(t.palette).filter(w()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:z(t,r),transition:`transform .${D}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:te||{animation:`${q} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),F=_.forwardRef(function(r,i){const l=K({props:r,name:"MuiLinearProgress"}),{className:u,color:k="primary",value:d,valueBuffer:f,variant:m="indeterminate",...E}=l,v={...l,color:k,variant:m},C=se(v),U=X(),I={},$={bar1:{},bar2:{}};if((m==="determinate"||m==="buffer")&&d!==void 0){I["aria-valuenow"]=Math.round(d),I["aria-valuemin"]=0,I["aria-valuemax"]=100;let p=d-100;U&&(p=-p),$.bar1.transform=`translateX(${p}%)`}if(m==="buffer"&&f!==void 0){let p=(f||0)-100;U&&(p=-p),$.bar2.transform=`translateX(${p}%)`}return e.jsxs(ne,{className:Z(C.root,u),ownerState:v,role:"progressbar",...I,ref:i,...E,children:[m==="buffer"?e.jsx(oe,{className:C.dashed,ownerState:v}):null,e.jsx(le,{className:C.bar1,ownerState:v,style:$.bar1}),m==="determinate"?null:e.jsx(ce,{className:C.bar2,ownerState:v,style:$.bar2})]})}),a=J.forwardRef(({color:t="primary",showLabel:r=!1,value:i=0,valueBuffer:l,variant:u="indeterminate",sx:k,...d},f)=>r&&(u==="determinate"||u==="buffer")?e.jsxs(n,{ref:f,sx:{display:"flex",alignItems:"center",gap:1,minWidth:200,...k},children:[e.jsx(n,{sx:{flexGrow:1},children:e.jsx(F,{variant:u,color:t,value:i,valueBuffer:l,...d})}),e.jsx(n,{sx:{minWidth:35},children:e.jsx(s,{variant:"body2",sx:{color:"text.primary"},children:`${Math.round(i)}%`})})]}):e.jsx(F,{ref:f,variant:u,color:t,value:i,valueBuffer:l,sx:{minWidth:200,...k},...d}));a.displayName="LinearProgress";a.__docgenInfo={description:`LinearProgress component

Progress indicators commonly known as spinners, express an unspecified wait time
or display the length of a process.

@param props - LinearProgress component props
@returns LinearProgress component`,methods:[],displayName:"LinearProgress",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'inherit'"}]},description:`The color of the component
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`If true, shows the progress value as a label next to the bar
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"number"},description:`The value of the progress indicator for the determinate and buffer variants.
Value between 0 and 100.`,defaultValue:{value:"0",computed:!1}},valueBuffer:{required:!1,tsType:{name:"number"},description:`The value for the buffer variant.
Value between 0 and 100.`},variant:{required:!1,tsType:{name:"union",raw:"'determinate' | 'indeterminate' | 'buffer'",elements:[{name:"literal",value:"'determinate'"},{name:"literal",value:"'indeterminate'"},{name:"literal",value:"'buffer'"}]},description:`The variant to use
@default 'indeterminate'`,defaultValue:{value:"'indeterminate'",computed:!1}}},composes:["MuiLinearProgressProps"]};const ge={title:"Atoms/LinearProgress",component:a,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","inherit"],description:"The color of the component"},variant:{control:"select",options:["determinate","indeterminate","buffer"],description:"The variant to use"},value:{control:{type:"range",min:0,max:100,step:1},description:"The value of the progress (determinate/buffer)"},valueBuffer:{control:{type:"range",min:0,max:100,step:1},description:"The buffer value (buffer variant only)"},showLabel:{control:"boolean",description:"If true, shows the progress value as a label"}},args:{color:"primary",variant:"indeterminate",showLabel:!1}},h={args:{}},g={args:{color:"secondary"}},y={args:{color:"inherit"}},x={args:{variant:"determinate",value:50}},b={args:{variant:"determinate",value:50,showLabel:!0}},L={args:{variant:"buffer",value:50,valueBuffer:75}},j={args:{variant:"buffer",value:50,valueBuffer:75,showLabel:!0}},B={render:()=>e.jsx(n,{sx:{p:4},children:e.jsxs(o,{spacing:4,children:[e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Indeterminate (Loading)"}),e.jsx(a,{variant:"indeterminate"})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Determinate (With Progress Value)"}),e.jsx(a,{variant:"determinate",value:50})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Buffer (With Buffer Value)"}),e.jsx(a,{variant:"buffer",value:50,valueBuffer:75})]})]})}),parameters:{layout:"padded"}},P={render:()=>e.jsx(n,{sx:{p:4},children:e.jsxs(o,{spacing:4,children:[e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Primary Color"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{color:"primary",variant:"indeterminate"}),e.jsx(a,{color:"primary",variant:"determinate",value:50}),e.jsx(a,{color:"primary",variant:"buffer",value:50,valueBuffer:75}),e.jsx(a,{color:"primary",variant:"determinate",value:50,showLabel:!0})]})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Secondary Color"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{color:"secondary",variant:"indeterminate"}),e.jsx(a,{color:"secondary",variant:"determinate",value:50}),e.jsx(a,{color:"secondary",variant:"buffer",value:50,valueBuffer:75}),e.jsx(a,{color:"secondary",variant:"determinate",value:50,showLabel:!0})]})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Inherit Color"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{color:"inherit",variant:"indeterminate"}),e.jsx(a,{color:"inherit",variant:"determinate",value:50}),e.jsx(a,{color:"inherit",variant:"buffer",value:50,valueBuffer:75}),e.jsx(a,{color:"inherit",variant:"determinate",value:50,showLabel:!0})]})]})]})}),parameters:{layout:"fullscreen"}},T={render:()=>e.jsxs(n,{sx:{p:4},children:[e.jsx(s,{variant:"h6",sx:{mb:3},children:"Progress with Labels"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{variant:"determinate",value:25,showLabel:!0}),e.jsx(a,{variant:"determinate",value:50,showLabel:!0}),e.jsx(a,{variant:"determinate",value:75,showLabel:!0}),e.jsx(a,{variant:"determinate",value:100,showLabel:!0})]})]}),parameters:{layout:"padded"}},S={render:()=>e.jsx(n,{sx:{p:4},children:e.jsxs(o,{spacing:4,children:[e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Page Loading"}),e.jsx(a,{variant:"indeterminate"}),e.jsx(s,{variant:"caption",sx:{mt:1,display:"block",color:"text.secondary"},children:"Loading page content..."})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"File Upload Progress"}),e.jsxs(o,{spacing:1,children:[e.jsx(s,{variant:"body2",children:"document.pdf"}),e.jsx(a,{variant:"determinate",value:65,showLabel:!0}),e.jsx(s,{variant:"caption",sx:{color:"text.secondary"},children:"2.1 MB of 3.2 MB uploaded"})]})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Buffer (Streaming Video)"}),e.jsxs(o,{spacing:1,children:[e.jsx(s,{variant:"body2",children:"Video playback"}),e.jsx(a,{variant:"buffer",value:60,valueBuffer:80}),e.jsx(s,{variant:"caption",sx:{color:"text.secondary"},children:"Played: 60% • Buffered: 80%"})]})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Multi-step Process"}),e.jsxs(o,{spacing:1,children:[e.jsx(s,{variant:"body2",children:"Step 2 of 4"}),e.jsx(a,{variant:"determinate",value:50,showLabel:!0}),e.jsx(s,{variant:"caption",sx:{color:"text.secondary"},children:"Completing profile setup"})]})]})]})}),parameters:{layout:"fullscreen"}},M={render:()=>e.jsx(n,{sx:{p:4},children:e.jsx(o,{spacing:6,children:e.jsxs(n,{children:[e.jsx(s,{variant:"h4",gutterBottom:!0,children:"Linear Progress Variants"}),e.jsxs(o,{spacing:4,sx:{mt:3},children:[e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Indeterminate (Loading)"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{variant:"indeterminate",color:"primary"}),e.jsx(a,{variant:"indeterminate",color:"secondary"}),e.jsx(a,{variant:"indeterminate",color:"inherit"})]})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Determinate (With Progress Value)"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{variant:"determinate",value:25}),e.jsx(a,{variant:"determinate",value:50}),e.jsx(a,{variant:"determinate",value:75}),e.jsx(a,{variant:"determinate",value:100})]})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"Buffer (Streaming/Buffering)"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{variant:"buffer",value:30,valueBuffer:60}),e.jsx(a,{variant:"buffer",value:50,valueBuffer:80}),e.jsx(a,{variant:"buffer",value:70,valueBuffer:90})]})]}),e.jsxs(n,{children:[e.jsx(s,{variant:"h6",sx:{mb:2},children:"With Labels"}),e.jsxs(o,{spacing:2,children:[e.jsx(a,{variant:"determinate",value:25,showLabel:!0}),e.jsx(a,{variant:"determinate",value:50,showLabel:!0,color:"secondary"}),e.jsx(a,{variant:"determinate",value:75,showLabel:!0}),e.jsx(a,{variant:"buffer",value:60,valueBuffer:80,showLabel:!0})]})]})]})]})})}),parameters:{layout:"fullscreen"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...h.parameters?.docs?.source},description:{story:"Default indeterminate linear progress",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'secondary'
  }
}`,...g.parameters?.docs?.source},description:{story:"With secondary color",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inherit'
  }
}`,...y.parameters?.docs?.source},description:{story:"With inherit color",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 50
  }
}`,...x.parameters?.docs?.source},description:{story:"Determinate variant with value",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 50,
    showLabel: true
  }
}`,...b.parameters?.docs?.source},description:{story:"Determinate with label",...b.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buffer',
    value: 50,
    valueBuffer: 75
  }
}`,...L.parameters?.docs?.source},description:{story:"Buffer variant",...L.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buffer',
    value: 50,
    valueBuffer: 75,
    showLabel: true
  }
}`,...j.parameters?.docs?.source},description:{story:"Buffer with label",...j.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"All variants showcase",...B.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"All colors showcase",...P.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"With labels showcase",...T.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Real-world examples",...S.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Full showcase",...M.parameters?.docs?.description}}};const ye=["Default","Secondary","Inherit","Determinate","DeterminateWithLabel","Buffer","BufferWithLabel","AllVariants","AllColors","WithLabels","RealWorldExamples","FullShowcase"];export{P as AllColors,B as AllVariants,L as Buffer,j as BufferWithLabel,h as Default,x as Determinate,b as DeterminateWithLabel,M as FullShowcase,y as Inherit,S as RealWorldExamples,g as Secondary,T as WithLabels,ye as __namedExportsOrder,ge as default};
