import{R as T,j as a}from"./iframe-BLPmWLdH.js";import{S as b}from"./Skeleton-WLBNX_h2.js";import{B as e}from"./Box-p6I_ECHL.js";import{S as i}from"./Stack-CdWmLSiL.js";import{T as r}from"./Typography-C56izW4I.js";import{C as B,a as M}from"./CardContent-DUzCcXiS.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DEYF-N-o.js";import"./useThemeProps-CQqoIt60.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BHVlsmxd.js";import"./useTheme-mA5jLGnb.js";const t=T.forwardRef(({variant:n="text",width:v,height:w,animation:S="pulse",...k},f)=>{let y=v,j=w;return n==="text"&&!v&&(y=120),n==="text"&&!w&&(j=12),n==="circular"&&!v&&!w&&(y=40,j=40),n==="rectangular"&&!v&&!w&&(y=120,j=120),a.jsx(b,{ref:f,variant:n,width:y,height:j,animation:S,...k})});t.displayName="Skeleton";t.__docgenInfo={description:`Skeleton component

Display a placeholder preview of your content before the data gets loaded
to reduce load-time frustration.

@param props - Skeleton component props
@returns Skeleton component`,methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:`The type of content that will be rendered
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the skeleton
Use number for pixel values or string for other CSS units`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the skeleton
Use number for pixel values or string for other CSS units`},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | false",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:`The animation type
@default 'pulse'`,defaultValue:{value:"'pulse'",computed:!1}}},composes:["MuiSkeletonProps"]};const U={title:"Atoms/Skeleton",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"The type of content that will be rendered"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},animation:{control:"select",options:["pulse","wave",!1],description:"The animation type"}},args:{variant:"text",animation:"pulse"}},s={args:{}},o={args:{variant:"text"}},c={args:{variant:"circular",width:40,height:40}},d={args:{variant:"rectangular",width:120,height:120}},h={args:{variant:"rounded",width:120,height:120}},l={args:{animation:"wave",width:200}},x={args:{animation:!1,width:200}},p={render:()=>a.jsx(e,{sx:{p:4},children:a.jsxs(i,{spacing:4,children:[a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Text Variant"}),a.jsxs(i,{spacing:1,children:[a.jsx(t,{variant:"text",width:200}),a.jsx(t,{variant:"text",width:150}),a.jsx(t,{variant:"text",width:100})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Circular Variant (Avatars)"}),a.jsxs(i,{direction:"row",spacing:2,children:[a.jsx(t,{variant:"circular",width:40,height:40}),a.jsx(t,{variant:"circular",width:56,height:56}),a.jsx(t,{variant:"circular",width:80,height:80})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Rectangular Variant"}),a.jsxs(i,{direction:"row",spacing:2,children:[a.jsx(t,{variant:"rectangular",width:100,height:100}),a.jsx(t,{variant:"rectangular",width:150,height:100}),a.jsx(t,{variant:"rectangular",width:200,height:150})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Rounded Variant"}),a.jsxs(i,{direction:"row",spacing:2,children:[a.jsx(t,{variant:"rounded",width:100,height:100}),a.jsx(t,{variant:"rounded",width:150,height:100}),a.jsx(t,{variant:"rounded",width:200,height:150})]})]})]})}),parameters:{layout:"fullscreen"}},u={render:()=>a.jsx(e,{sx:{p:4},children:a.jsxs(i,{spacing:4,children:[a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Pulse Animation (Default)"}),a.jsx(t,{animation:"pulse",width:200})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Wave Animation"}),a.jsx(t,{animation:"wave",width:200})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"No Animation"}),a.jsx(t,{animation:!1,width:200})]})]})}),parameters:{layout:"padded"}},g={render:()=>a.jsx(e,{sx:{p:4},children:a.jsxs(i,{spacing:4,children:[a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"User Profile Loading"}),a.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(t,{variant:"circular",width:40,height:40}),a.jsxs(i,{spacing:1,sx:{flex:1},children:[a.jsx(t,{variant:"text",width:"60%"}),a.jsx(t,{variant:"text",width:"40%"})]})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Article Loading"}),a.jsxs(e,{children:[a.jsx(t,{variant:"text",width:"80%",height:32,sx:{mb:1}}),a.jsx(t,{variant:"text",width:"100%"}),a.jsx(t,{variant:"text",width:"100%"}),a.jsx(t,{variant:"text",width:"100%"}),a.jsx(t,{variant:"text",width:"60%"})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Card Loading"}),a.jsxs(B,{sx:{maxWidth:345},children:[a.jsx(t,{variant:"rectangular",width:"100%",height:140}),a.jsxs(M,{children:[a.jsx(t,{variant:"text",width:"60%",height:24,sx:{mb:1}}),a.jsx(t,{variant:"text",width:"100%"}),a.jsx(t,{variant:"text",width:"100%"}),a.jsx(t,{variant:"text",width:"80%"})]})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"List Loading"}),a.jsx(i,{spacing:2,children:[1,2,3].map(n=>a.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(t,{variant:"circular",width:40,height:40}),a.jsxs(i,{spacing:1,sx:{flex:1},children:[a.jsx(t,{variant:"text",width:"70%"}),a.jsx(t,{variant:"text",width:"50%"})]})]},n))})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Image Gallery Loading"}),a.jsxs(i,{direction:"row",spacing:2,children:[a.jsx(t,{variant:"rectangular",width:150,height:150}),a.jsx(t,{variant:"rectangular",width:150,height:150}),a.jsx(t,{variant:"rectangular",width:150,height:150})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Table Row Loading"}),a.jsx(i,{spacing:1,children:[1,2,3,4].map(n=>a.jsxs(i,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(t,{variant:"text",width:50}),a.jsx(t,{variant:"text",width:150,sx:{flex:1}}),a.jsx(t,{variant:"text",width:100}),a.jsx(t,{variant:"rectangular",width:60,height:32})]},n))})]})]})}),parameters:{layout:"fullscreen"}},m={render:()=>a.jsx(e,{sx:{p:4},children:a.jsx(i,{spacing:6,children:a.jsxs(e,{children:[a.jsx(r,{variant:"h4",gutterBottom:!0,children:"Skeleton Variants"}),a.jsxs(i,{spacing:4,sx:{mt:3},children:[a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Text"}),a.jsxs(i,{spacing:1,children:[a.jsx(t,{variant:"text",width:200}),a.jsx(t,{variant:"text",width:300}),a.jsx(t,{variant:"text",width:250})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Circular (Avatars)"}),a.jsxs(i,{direction:"row",spacing:2,children:[a.jsx(t,{variant:"circular",width:32,height:32}),a.jsx(t,{variant:"circular",width:40,height:40}),a.jsx(t,{variant:"circular",width:56,height:56}),a.jsx(t,{variant:"circular",width:80,height:80})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Rectangular & Rounded"}),a.jsxs(i,{direction:"row",spacing:2,children:[a.jsx(t,{variant:"rectangular",width:120,height:120}),a.jsx(t,{variant:"rounded",width:120,height:120})]})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"h6",sx:{mb:2},children:"Animations"}),a.jsxs(i,{spacing:2,children:[a.jsxs(e,{children:[a.jsx(r,{variant:"caption",sx:{mb:1,display:"block"},children:"Pulse (default)"}),a.jsx(t,{animation:"pulse",width:200})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"caption",sx:{mb:1,display:"block"},children:"Wave"}),a.jsx(t,{animation:"wave",width:200})]}),a.jsxs(e,{children:[a.jsx(r,{variant:"caption",sx:{mb:1,display:"block"},children:"No animation"}),a.jsx(t,{animation:!1,width:200})]})]})]})]})]})})}),parameters:{layout:"fullscreen"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source},description:{story:"Default text skeleton",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  }
}`,...o.parameters?.docs?.source},description:{story:"Text variant (default)",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 40,
    height: 40
  }
}`,...c.parameters?.docs?.source},description:{story:"Circular variant (for avatars)",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 120,
    height: 120
  }
}`,...d.parameters?.docs?.source},description:{story:"Rectangular variant",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 120,
    height: 120
  }
}`,...h.parameters?.docs?.source},description:{story:"Rounded variant",...h.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    animation: 'wave',
    width: 200
  }
}`,...l.parameters?.docs?.source},description:{story:"Wave animation",...l.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    animation: false,
    width: 200
  }
}`,...x.parameters?.docs?.source},description:{story:"Without animation",...x.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"All variants showcase",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Different animations",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Real-world examples",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Full showcase",...m.parameters?.docs?.description}}};const _=["Default","Text","Circular","Rectangular","Rounded","WaveAnimation","NoAnimation","AllVariants","Animations","RealWorldExamples","FullShowcase"];export{p as AllVariants,u as Animations,c as Circular,s as Default,m as FullShowcase,x as NoAnimation,g as RealWorldExamples,d as Rectangular,h as Rounded,o as Text,l as WaveAnimation,_ as __namedExportsOrder,U as default};
