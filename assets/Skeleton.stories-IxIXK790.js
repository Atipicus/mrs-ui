import{r as U,u as I,j as t,i as N,g as C,k as R,R as $}from"./iframe-gZtTO8GF.js";import{g as D,b as P,s as E,c as q,a as F,m as X}from"./memoTheme-DXIofXOq.js";import{B as i}from"./Box-CkQ7KSea.js";import{S as r}from"./Stack-DrmAaOvE.js";import{T as n}from"./Typography-BC_hpnXQ.js";import{C as _,a as H}from"./CardContent-9Y3hOWLb.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-C-v2h_2o.js";import"./useThemeProps-rTC1mdVC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-QqUT8uNK.js";import"./useTheme-CKQkYvCl.js";function G(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function K(e){return parseFloat(e)}function O(e){return D("MuiSkeleton",e)}P("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const z=e=>{const{classes:o,variant:s,animation:c,hasChildren:h,width:p,height:l}=e;return F({root:["root",s,c,h&&"withChildren",h&&!p&&"fitContent",h&&!l&&"heightAuto"]},O,o)},b=R`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,T=R`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,J=typeof b!="string"?C`
        animation: ${b} 2s ease-in-out 0.5s infinite;
      `:null,Q=typeof T!="string"?C`
        &::after {
          animation: ${T} 2s linear 0.5s infinite;
        }
      `:null,Y=E("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.variant],s.animation!==!1&&o[s.animation],s.hasChildren&&o.withChildren,s.hasChildren&&!s.width&&o.fitContent,s.hasChildren&&!s.height&&o.heightAuto]}})(X(({theme:e})=>{const o=G(e.shape.borderRadius)||"px",s=K(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:N(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${o}/${Math.round(s/.6*10)/10}${o}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:c})=>c.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:c})=>c.hasChildren&&!c.width,style:{maxWidth:"fit-content"}},{props:({ownerState:c})=>c.hasChildren&&!c.height,style:{height:"auto"}},{props:{animation:"pulse"},style:J||{animation:`${b} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:Q||{"&::after":{animation:`${T} 2s linear 0.5s infinite`}}}]}})),Z=U.forwardRef(function(o,s){const c=I({props:o,name:"MuiSkeleton"}),{animation:h="pulse",className:p,component:l="span",height:d,style:A,variant:W="text",width:V,...B}=c,M={...c,animation:h,component:l,variant:W,hasChildren:!!B.children},L=z(M);return t.jsx(Y,{as:l,ref:s,className:q(L.root,p),ownerState:M,...B,style:{width:V,height:d,...A}})}),a=$.forwardRef(({variant:e="text",width:o,height:s,animation:c="pulse",...h},p)=>{let l=o,d=s;return e==="text"&&!o&&(l=120),e==="text"&&!s&&(d=12),e==="circular"&&!o&&!s&&(l=40,d=40),e==="rectangular"&&!o&&!s&&(l=120,d=120),t.jsx(Z,{ref:p,variant:e,width:l,height:d,animation:c,...h})});a.displayName="Skeleton";a.__docgenInfo={description:`Skeleton component

Display a placeholder preview of your content before the data gets loaded
to reduce load-time frustration.

@param props - Skeleton component props
@returns Skeleton component`,methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:`The type of content that will be rendered
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the skeleton
Use number for pixel values or string for other CSS units`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the skeleton
Use number for pixel values or string for other CSS units`},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | false",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:`The animation type
@default 'pulse'`,defaultValue:{value:"'pulse'",computed:!1}}},composes:["MuiSkeletonProps"]};const pt={title:"Atoms/Skeleton",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"The type of content that will be rendered"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},animation:{control:"select",options:["pulse","wave",!1],description:"The animation type"}},args:{variant:"text",animation:"pulse"}},x={args:{}},u={args:{variant:"text"}},m={args:{variant:"circular",width:40,height:40}},g={args:{variant:"rectangular",width:120,height:120}},v={args:{variant:"rounded",width:120,height:120}},w={args:{animation:"wave",width:200}},y={args:{animation:!1,width:200}},k={render:()=>t.jsx(i,{sx:{p:4},children:t.jsxs(r,{spacing:4,children:[t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Text Variant"}),t.jsxs(r,{spacing:1,children:[t.jsx(a,{variant:"text",width:200}),t.jsx(a,{variant:"text",width:150}),t.jsx(a,{variant:"text",width:100})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Circular Variant (Avatars)"}),t.jsxs(r,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"circular",width:40,height:40}),t.jsx(a,{variant:"circular",width:56,height:56}),t.jsx(a,{variant:"circular",width:80,height:80})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Rectangular Variant"}),t.jsxs(r,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rectangular",width:100,height:100}),t.jsx(a,{variant:"rectangular",width:150,height:100}),t.jsx(a,{variant:"rectangular",width:200,height:150})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Rounded Variant"}),t.jsxs(r,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rounded",width:100,height:100}),t.jsx(a,{variant:"rounded",width:150,height:100}),t.jsx(a,{variant:"rounded",width:200,height:150})]})]})]})}),parameters:{layout:"fullscreen"}},S={render:()=>t.jsx(i,{sx:{p:4},children:t.jsxs(r,{spacing:4,children:[t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Pulse Animation (Default)"}),t.jsx(a,{animation:"pulse",width:200})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Wave Animation"}),t.jsx(a,{animation:"wave",width:200})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"No Animation"}),t.jsx(a,{animation:!1,width:200})]})]})}),parameters:{layout:"padded"}},j={render:()=>t.jsx(i,{sx:{p:4},children:t.jsxs(r,{spacing:4,children:[t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"User Profile Loading"}),t.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(a,{variant:"circular",width:40,height:40}),t.jsxs(r,{spacing:1,sx:{flex:1},children:[t.jsx(a,{variant:"text",width:"60%"}),t.jsx(a,{variant:"text",width:"40%"})]})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Article Loading"}),t.jsxs(i,{children:[t.jsx(a,{variant:"text",width:"80%",height:32,sx:{mb:1}}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"60%"})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Card Loading"}),t.jsxs(_,{sx:{maxWidth:345},children:[t.jsx(a,{variant:"rectangular",width:"100%",height:140}),t.jsxs(H,{children:[t.jsx(a,{variant:"text",width:"60%",height:24,sx:{mb:1}}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"80%"})]})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"List Loading"}),t.jsx(r,{spacing:2,children:[1,2,3].map(e=>t.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(a,{variant:"circular",width:40,height:40}),t.jsxs(r,{spacing:1,sx:{flex:1},children:[t.jsx(a,{variant:"text",width:"70%"}),t.jsx(a,{variant:"text",width:"50%"})]})]},e))})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Image Gallery Loading"}),t.jsxs(r,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rectangular",width:150,height:150}),t.jsx(a,{variant:"rectangular",width:150,height:150}),t.jsx(a,{variant:"rectangular",width:150,height:150})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Table Row Loading"}),t.jsx(r,{spacing:1,children:[1,2,3,4].map(e=>t.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(a,{variant:"text",width:50}),t.jsx(a,{variant:"text",width:150,sx:{flex:1}}),t.jsx(a,{variant:"text",width:100}),t.jsx(a,{variant:"rectangular",width:60,height:32})]},e))})]})]})}),parameters:{layout:"fullscreen"}},f={render:()=>t.jsx(i,{sx:{p:4},children:t.jsx(r,{spacing:6,children:t.jsxs(i,{children:[t.jsx(n,{variant:"h4",gutterBottom:!0,children:"Skeleton Variants"}),t.jsxs(r,{spacing:4,sx:{mt:3},children:[t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Text"}),t.jsxs(r,{spacing:1,children:[t.jsx(a,{variant:"text",width:200}),t.jsx(a,{variant:"text",width:300}),t.jsx(a,{variant:"text",width:250})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Circular (Avatars)"}),t.jsxs(r,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"circular",width:32,height:32}),t.jsx(a,{variant:"circular",width:40,height:40}),t.jsx(a,{variant:"circular",width:56,height:56}),t.jsx(a,{variant:"circular",width:80,height:80})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Rectangular & Rounded"}),t.jsxs(r,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rectangular",width:120,height:120}),t.jsx(a,{variant:"rounded",width:120,height:120})]})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"h6",sx:{mb:2},children:"Animations"}),t.jsxs(r,{spacing:2,children:[t.jsxs(i,{children:[t.jsx(n,{variant:"caption",sx:{mb:1,display:"block"},children:"Pulse (default)"}),t.jsx(a,{animation:"pulse",width:200})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"caption",sx:{mb:1,display:"block"},children:"Wave"}),t.jsx(a,{animation:"wave",width:200})]}),t.jsxs(i,{children:[t.jsx(n,{variant:"caption",sx:{mb:1,display:"block"},children:"No animation"}),t.jsx(a,{animation:!1,width:200})]})]})]})]})]})})}),parameters:{layout:"fullscreen"}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...x.parameters?.docs?.source},description:{story:"Default text skeleton",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  }
}`,...u.parameters?.docs?.source},description:{story:"Text variant (default)",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 40,
    height: 40
  }
}`,...m.parameters?.docs?.source},description:{story:"Circular variant (for avatars)",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 120,
    height: 120
  }
}`,...g.parameters?.docs?.source},description:{story:"Rectangular variant",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 120,
    height: 120
  }
}`,...v.parameters?.docs?.source},description:{story:"Rounded variant",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    animation: 'wave',
    width: 200
  }
}`,...w.parameters?.docs?.source},description:{story:"Wave animation",...w.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    animation: false,
    width: 200
  }
}`,...y.parameters?.docs?.source},description:{story:"Without animation",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Text Variant
          </MuiTypography>
          <Stack spacing={1}>
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={100} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Circular Variant (Avatars)
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="circular" width={56} height={56} />
            <Skeleton variant="circular" width={80} height={80} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Rectangular Variant
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width={100} height={100} />
            <Skeleton variant="rectangular" width={150} height={100} />
            <Skeleton variant="rectangular" width={200} height={150} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Rounded Variant
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rounded" width={100} height={100} />
            <Skeleton variant="rounded" width={150} height={100} />
            <Skeleton variant="rounded" width={200} height={150} />
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...k.parameters?.docs?.source},description:{story:"All variants showcase",...k.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Pulse Animation (Default)
          </MuiTypography>
          <Skeleton animation="pulse" width={200} />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Wave Animation
          </MuiTypography>
          <Skeleton animation="wave" width={200} />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            No Animation
          </MuiTypography>
          <Skeleton animation={false} width={200} />
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'padded'
  }
}`,...S.parameters?.docs?.source},description:{story:"Different animations",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            User Profile Loading
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Skeleton variant="circular" width={40} height={40} />
            <Stack spacing={1} sx={{
            flex: 1
          }}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </Stack>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Article Loading
          </MuiTypography>
          <Box>
            <Skeleton variant="text" width="80%" height={32} sx={{
            mb: 1
          }} />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="60%" />
          </Box>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Card Loading
          </MuiTypography>
          <Card sx={{
          maxWidth: 345
        }}>
            <Skeleton variant="rectangular" width="100%" height={140} />
            <CardContent>
              <Skeleton variant="text" width="60%" height={24} sx={{
              mb: 1
            }} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="80%" />
            </CardContent>
          </Card>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            List Loading
          </MuiTypography>
          <Stack spacing={2}>
            {[1, 2, 3].map(item => <Stack key={item} direction="row" spacing={2} alignItems="center">
                <Skeleton variant="circular" width={40} height={40} />
                <Stack spacing={1} sx={{
              flex: 1
            }}>
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="50%" />
                </Stack>
              </Stack>)}
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Image Gallery Loading
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width={150} height={150} />
            <Skeleton variant="rectangular" width={150} height={150} />
            <Skeleton variant="rectangular" width={150} height={150} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Table Row Loading
          </MuiTypography>
          <Stack spacing={1}>
            {[1, 2, 3, 4].map(item => <Stack key={item} direction="row" spacing={2} alignItems="center">
                <Skeleton variant="text" width={50} />
                <Skeleton variant="text" width={150} sx={{
              flex: 1
            }} />
                <Skeleton variant="text" width={100} />
                <Skeleton variant="rectangular" width={60} height={32} />
              </Stack>)}
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...j.parameters?.docs?.source},description:{story:"Real-world examples",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={6}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Skeleton Variants
          </MuiTypography>

          <Stack spacing={4} sx={{
          mt: 3
        }}>
            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Text
              </MuiTypography>
              <Stack spacing={1}>
                <Skeleton variant="text" width={200} />
                <Skeleton variant="text" width={300} />
                <Skeleton variant="text" width={250} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Circular (Avatars)
              </MuiTypography>
              <Stack direction="row" spacing={2}>
                <Skeleton variant="circular" width={32} height={32} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={56} height={56} />
                <Skeleton variant="circular" width={80} height={80} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Rectangular & Rounded
              </MuiTypography>
              <Stack direction="row" spacing={2}>
                <Skeleton variant="rectangular" width={120} height={120} />
                <Skeleton variant="rounded" width={120} height={120} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{
              mb: 2
            }}>
                Animations
              </MuiTypography>
              <Stack spacing={2}>
                <Box>
                  <MuiTypography variant="caption" sx={{
                  mb: 1,
                  display: 'block'
                }}>
                    Pulse (default)
                  </MuiTypography>
                  <Skeleton animation="pulse" width={200} />
                </Box>
                <Box>
                  <MuiTypography variant="caption" sx={{
                  mb: 1,
                  display: 'block'
                }}>
                    Wave
                  </MuiTypography>
                  <Skeleton animation="wave" width={200} />
                </Box>
                <Box>
                  <MuiTypography variant="caption" sx={{
                  mb: 1,
                  display: 'block'
                }}>
                    No animation
                  </MuiTypography>
                  <Skeleton animation={false} width={200} />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...f.parameters?.docs?.source},description:{story:"Full showcase",...f.parameters?.docs?.description}}};const xt=["Default","Text","Circular","Rectangular","Rounded","WaveAnimation","NoAnimation","AllVariants","Animations","RealWorldExamples","FullShowcase"];export{k as AllVariants,S as Animations,m as Circular,x as Default,f as FullShowcase,y as NoAnimation,j as RealWorldExamples,g as Rectangular,v as Rounded,u as Text,w as WaveAnimation,xt as __namedExportsOrder,pt as default};
