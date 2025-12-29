import{r as B,u as M,j as t,i as q,g as $,k as I,R as F}from"./iframe-Ll-6DOMq.js";import{g as R,b as A,s as W,c as U,a as V,m as X}from"./createSimplePaletteValueFilter-Cr3O56rL.js";import{B as n}from"./Box-CT6B1tpM.js";import{S as s}from"./Stack-CPzMnDxi.js";import{T as o}from"./Typography-BDVHBFsV.js";import{P as _}from"./Paper-BbkAovIa.js";import"./preload-helper-PPVm8Dsz.js";import"./useThemeProps-BbVj2W6_.js";import"./useTheme-DU8NCu1L.js";function H(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function G(e){return parseFloat(e)}function K(e){return R("MuiCard",e)}A("MuiCard",["root"]);const O=e=>{const{classes:r}=e;return V({root:["root"]},K,r)},z=W(_,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})({overflow:"hidden"}),J=B.forwardRef(function(r,i){const c=M({props:r,name:"MuiCard"}),{className:h,raised:p=!1,...l}=c,d={...c,raised:p},x=O(d);return t.jsx(z,{className:U(x.root,h),elevation:p?8:void 0,ref:i,ownerState:d,...l})});function Q(e){return R("MuiCardContent",e)}A("MuiCardContent",["root"]);const Y=e=>{const{classes:r}=e;return V({root:["root"]},Q,r)},Z=W("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:16,"&:last-child":{paddingBottom:24}}),tt=B.forwardRef(function(r,i){const c=M({props:r,name:"MuiCardContent"}),{className:h,component:p="div",...l}=c,d={...c,component:p},x=Y(d);return t.jsx(Z,{as:p,className:U(x.root,h),ownerState:d,ref:i,...l})});function at(e){return R("MuiSkeleton",e)}A("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const et=e=>{const{classes:r,variant:i,animation:c,hasChildren:h,width:p,height:l}=e;return V({root:["root",i,c,h&&"withChildren",h&&!p&&"fitContent",h&&!l&&"heightAuto"]},at,r)},C=I`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,T=I`
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
`,rt=typeof C!="string"?$`
        animation: ${C} 2s ease-in-out 0.5s infinite;
      `:null,it=typeof T!="string"?$`
        &::after {
          animation: ${T} 2s linear 0.5s infinite;
        }
      `:null,nt=W("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e;return[r.root,r[i.variant],i.animation!==!1&&r[i.animation],i.hasChildren&&r.withChildren,i.hasChildren&&!i.width&&r.fitContent,i.hasChildren&&!i.height&&r.heightAuto]}})(X(({theme:e})=>{const r=H(e.shape.borderRadius)||"px",i=G(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:q(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:c})=>c.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:c})=>c.hasChildren&&!c.width,style:{maxWidth:"fit-content"}},{props:({ownerState:c})=>c.hasChildren&&!c.height,style:{height:"auto"}},{props:{animation:"pulse"},style:rt||{animation:`${C} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:it||{"&::after":{animation:`${T} 2s linear 0.5s infinite`}}}]}})),st=B.forwardRef(function(r,i){const c=M({props:r,name:"MuiSkeleton"}),{animation:h="pulse",className:p,component:l="span",height:d,style:x,variant:P="text",width:D,...L}=c,N={...c,animation:h,component:l,variant:P,hasChildren:!!L.children},E=et(N);return t.jsx(nt,{as:l,ref:i,className:U(E.root,p),ownerState:N,...L,style:{width:D,height:d,...x}})}),a=F.forwardRef(({variant:e="text",width:r,height:i,animation:c="pulse",...h},p)=>{let l=r,d=i;return e==="text"&&!r&&(l=120),e==="text"&&!i&&(d=12),e==="circular"&&!r&&!i&&(l=40,d=40),e==="rectangular"&&!r&&!i&&(l=120,d=120),t.jsx(st,{ref:p,variant:e,width:l,height:d,animation:c,...h})});a.displayName="Skeleton";a.__docgenInfo={description:`Skeleton component

Display a placeholder preview of your content before the data gets loaded
to reduce load-time frustration.

@param props - Skeleton component props
@returns Skeleton component`,methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:`The type of content that will be rendered
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the skeleton
Use number for pixel values or string for other CSS units`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the skeleton
Use number for pixel values or string for other CSS units`},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | false",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:`The animation type
@default 'pulse'`,defaultValue:{value:"'pulse'",computed:!1}}},composes:["MuiSkeletonProps"]};const gt={title:"Atoms/Skeleton",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"The type of content that will be rendered"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},animation:{control:"select",options:["pulse","wave",!1],description:"The animation type"}},args:{variant:"text",animation:"pulse"}},u={args:{}},m={args:{variant:"text"}},g={args:{variant:"circular",width:40,height:40}},v={args:{variant:"rectangular",width:120,height:120}},w={args:{variant:"rounded",width:120,height:120}},y={args:{animation:"wave",width:200}},k={args:{animation:!1,width:200}},S={render:()=>t.jsx(n,{sx:{p:4},children:t.jsxs(s,{spacing:4,children:[t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Text Variant"}),t.jsxs(s,{spacing:1,children:[t.jsx(a,{variant:"text",width:200}),t.jsx(a,{variant:"text",width:150}),t.jsx(a,{variant:"text",width:100})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Circular Variant (Avatars)"}),t.jsxs(s,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"circular",width:40,height:40}),t.jsx(a,{variant:"circular",width:56,height:56}),t.jsx(a,{variant:"circular",width:80,height:80})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Rectangular Variant"}),t.jsxs(s,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rectangular",width:100,height:100}),t.jsx(a,{variant:"rectangular",width:150,height:100}),t.jsx(a,{variant:"rectangular",width:200,height:150})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Rounded Variant"}),t.jsxs(s,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rounded",width:100,height:100}),t.jsx(a,{variant:"rounded",width:150,height:100}),t.jsx(a,{variant:"rounded",width:200,height:150})]})]})]})}),parameters:{layout:"fullscreen"}},j={render:()=>t.jsx(n,{sx:{p:4},children:t.jsxs(s,{spacing:4,children:[t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Pulse Animation (Default)"}),t.jsx(a,{animation:"pulse",width:200})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Wave Animation"}),t.jsx(a,{animation:"wave",width:200})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"No Animation"}),t.jsx(a,{animation:!1,width:200})]})]})}),parameters:{layout:"padded"}},f={render:()=>t.jsx(n,{sx:{p:4},children:t.jsxs(s,{spacing:4,children:[t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"User Profile Loading"}),t.jsxs(s,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(a,{variant:"circular",width:40,height:40}),t.jsxs(s,{spacing:1,sx:{flex:1},children:[t.jsx(a,{variant:"text",width:"60%"}),t.jsx(a,{variant:"text",width:"40%"})]})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Article Loading"}),t.jsxs(n,{children:[t.jsx(a,{variant:"text",width:"80%",height:32,sx:{mb:1}}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"60%"})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Card Loading"}),t.jsxs(J,{sx:{maxWidth:345},children:[t.jsx(a,{variant:"rectangular",width:"100%",height:140}),t.jsxs(tt,{children:[t.jsx(a,{variant:"text",width:"60%",height:24,sx:{mb:1}}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"100%"}),t.jsx(a,{variant:"text",width:"80%"})]})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"List Loading"}),t.jsx(s,{spacing:2,children:[1,2,3].map(e=>t.jsxs(s,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(a,{variant:"circular",width:40,height:40}),t.jsxs(s,{spacing:1,sx:{flex:1},children:[t.jsx(a,{variant:"text",width:"70%"}),t.jsx(a,{variant:"text",width:"50%"})]})]},e))})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Image Gallery Loading"}),t.jsxs(s,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rectangular",width:150,height:150}),t.jsx(a,{variant:"rectangular",width:150,height:150}),t.jsx(a,{variant:"rectangular",width:150,height:150})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Table Row Loading"}),t.jsx(s,{spacing:1,children:[1,2,3,4].map(e=>t.jsxs(s,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(a,{variant:"text",width:50}),t.jsx(a,{variant:"text",width:150,sx:{flex:1}}),t.jsx(a,{variant:"text",width:100}),t.jsx(a,{variant:"rectangular",width:60,height:32})]},e))})]})]})}),parameters:{layout:"fullscreen"}},b={render:()=>t.jsx(n,{sx:{p:4},children:t.jsx(s,{spacing:6,children:t.jsxs(n,{children:[t.jsx(o,{variant:"h4",gutterBottom:!0,children:"Skeleton Variants"}),t.jsxs(s,{spacing:4,sx:{mt:3},children:[t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Text"}),t.jsxs(s,{spacing:1,children:[t.jsx(a,{variant:"text",width:200}),t.jsx(a,{variant:"text",width:300}),t.jsx(a,{variant:"text",width:250})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Circular (Avatars)"}),t.jsxs(s,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"circular",width:32,height:32}),t.jsx(a,{variant:"circular",width:40,height:40}),t.jsx(a,{variant:"circular",width:56,height:56}),t.jsx(a,{variant:"circular",width:80,height:80})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Rectangular & Rounded"}),t.jsxs(s,{direction:"row",spacing:2,children:[t.jsx(a,{variant:"rectangular",width:120,height:120}),t.jsx(a,{variant:"rounded",width:120,height:120})]})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"h6",sx:{mb:2},children:"Animations"}),t.jsxs(s,{spacing:2,children:[t.jsxs(n,{children:[t.jsx(o,{variant:"caption",sx:{mb:1,display:"block"},children:"Pulse (default)"}),t.jsx(a,{animation:"pulse",width:200})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"caption",sx:{mb:1,display:"block"},children:"Wave"}),t.jsx(a,{animation:"wave",width:200})]}),t.jsxs(n,{children:[t.jsx(o,{variant:"caption",sx:{mb:1,display:"block"},children:"No animation"}),t.jsx(a,{animation:!1,width:200})]})]})]})]})]})})}),parameters:{layout:"fullscreen"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...u.parameters?.docs?.source},description:{story:"Default text skeleton",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  }
}`,...m.parameters?.docs?.source},description:{story:"Text variant (default)",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 40,
    height: 40
  }
}`,...g.parameters?.docs?.source},description:{story:"Circular variant (for avatars)",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 120,
    height: 120
  }
}`,...v.parameters?.docs?.source},description:{story:"Rectangular variant",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 120,
    height: 120
  }
}`,...w.parameters?.docs?.source},description:{story:"Rounded variant",...w.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    animation: 'wave',
    width: 200
  }
}`,...y.parameters?.docs?.source},description:{story:"Wave animation",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    animation: false,
    width: 200
  }
}`,...k.parameters?.docs?.source},description:{story:"Without animation",...k.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"All variants showcase",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Different animations",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Real-world examples",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Full showcase",...b.parameters?.docs?.description}}};const vt=["Default","Text","Circular","Rectangular","Rounded","WaveAnimation","NoAnimation","AllVariants","Animations","RealWorldExamples","FullShowcase"];export{S as AllVariants,j as Animations,g as Circular,u as Default,b as FullShowcase,k as NoAnimation,f as RealWorldExamples,v as Rectangular,w as Rounded,m as Text,y as WaveAnimation,vt as __namedExportsOrder,gt as default};
