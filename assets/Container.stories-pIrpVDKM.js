import{r as F,j as e,c as w,a as G,u as Y,R as I}from"./iframe-BFhFDpEs.js";import{c as L,a as N,g as $,s as q}from"./memoTheme-_aLF6IQY.js";import{s as E}from"./styled-BCHDsqBD.js";import{u as z}from"./useThemeProps-DMhVsQGE.js";import{T as r}from"./Typography-CsYEe_Uh.js";import{P as t}from"./Paper-CZnbGEa6.js";import{B as c}from"./Box-DWTOMt-3.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-DO1mN57X.js";import"./Typography-CvcjzMEn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-goefkhcW.js";import"./Box-DFxahbR2.js";const H=G(),_=E("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,o)=>{const{ownerState:s}=i;return[o.root,o[`maxWidth${w(String(s.maxWidth))}`],s.fixed&&o.fixed,s.disableGutters&&o.disableGutters]}}),U=i=>z({props:i,name:"MuiContainer",defaultTheme:H}),V=(i,o)=>{const s=p=>$(o,p),{classes:l,fixed:W,disableGutters:P,maxWidth:a}=i,d={root:["root",a&&`maxWidth${w(String(a))}`,W&&"fixed",P&&"disableGutters"]};return N(d,s,l)};function O(i={}){const{createStyledComponent:o=_,useThemeProps:s=U,componentName:l="MuiContainer"}=i,W=o(({theme:a,ownerState:d})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!d.disableGutters&&{paddingLeft:a.spacing(2),paddingRight:a.spacing(2),[a.breakpoints.up("sm")]:{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}}}),({theme:a,ownerState:d})=>d.fixed&&Object.keys(a.breakpoints.values).reduce((p,j)=>{const v=j,h=a.breakpoints.values[v];return h!==0&&(p[a.breakpoints.up(v)]={maxWidth:`${h}${a.breakpoints.unit}`}),p},{}),({theme:a,ownerState:d})=>({...d.maxWidth==="xs"&&{[a.breakpoints.up("xs")]:{maxWidth:Math.max(a.breakpoints.values.xs,444)}},...d.maxWidth&&d.maxWidth!=="xs"&&{[a.breakpoints.up(d.maxWidth)]:{maxWidth:`${a.breakpoints.values[d.maxWidth]}${a.breakpoints.unit}`}}}));return F.forwardRef(function(d,p){const j=s(d),{className:v,component:h="div",disableGutters:B=!1,fixed:S=!1,maxWidth:R="lg",classes:J,...D}=j,k={...j,component:h,disableGutters:B,fixed:S,maxWidth:R},M=V(k,l);return e.jsx(W,{as:h,ownerState:k,className:L(M.root,v),ref:p,...D})})}const A=O({createStyledComponent:q("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,o)=>{const{ownerState:s}=i;return[o.root,o[`maxWidth${w(String(s.maxWidth))}`],s.fixed&&o.fixed,s.disableGutters&&o.disableGutters]}}),useThemeProps:i=>Y({props:i,name:"MuiContainer"})}),n=I.forwardRef(({children:i,maxWidth:o="lg",...s},l)=>e.jsx(A,{ref:l,maxWidth:o,...s,children:i}));n.displayName="Container";n.__docgenInfo={description:`Container component - centers content horizontally with max-width constraints
The most basic layout element that provides responsive horizontal padding

@example
\`\`\`tsx
<Container maxWidth="lg">
  <Typography>Content</Typography>
</Container>
\`\`\``,methods:[],displayName:"Container",props:{maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:"Determine the max-width of the container",defaultValue:{value:"'lg'",computed:!1}},disableGutters:{required:!1,tsType:{name:"boolean"},description:"If true, the left and right padding is removed"},fixed:{required:!1,tsType:{name:"boolean"},description:"Set the max-width to match the min-width of the current breakpoint"},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node"},sx:{required:!1,tsType:{name:"MuiContainerProps['sx']",raw:"MuiContainerProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"}},composes:["MuiContainerProps"]};const pe={title:"Atoms/Container",component:n,tags:["autodocs"],argTypes:{maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"Determine the max-width of the container"},disableGutters:{control:"boolean",description:"If true, the left and right padding is removed"},fixed:{control:"boolean",description:"Set the max-width to match the min-width of the current breakpoint"}}},x={render:()=>e.jsx(n,{children:e.jsx(t,{sx:{padding:3},children:e.jsx(r,{children:'This is a Container with default maxWidth="lg"'})})})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{maxWidth:"xs",children:e.jsx(t,{sx:{padding:2,backgroundColor:"primary.light"},children:e.jsx(r,{children:'maxWidth="xs" (444px)'})})}),e.jsx(n,{maxWidth:"sm",children:e.jsx(t,{sx:{padding:2,backgroundColor:"secondary.light"},children:e.jsx(r,{children:'maxWidth="sm" (600px)'})})}),e.jsx(n,{maxWidth:"md",children:e.jsx(t,{sx:{padding:2,backgroundColor:"info.light"},children:e.jsx(r,{children:'maxWidth="md" (900px)'})})}),e.jsx(n,{maxWidth:"lg",children:e.jsx(t,{sx:{padding:2,backgroundColor:"success.light"},children:e.jsx(r,{children:'maxWidth="lg" (1200px)'})})}),e.jsx(n,{maxWidth:"xl",children:e.jsx(t,{sx:{padding:2,backgroundColor:"warning.light"},children:e.jsx(r,{children:'maxWidth="xl" (1536px)'})})})]})},g={render:()=>e.jsx(n,{maxWidth:!1,children:e.jsx(t,{sx:{padding:3,backgroundColor:"error.light"},children:e.jsx(r,{children:"Fluid container (maxWidth=false) - takes full width"})})})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{children:e.jsx(t,{sx:{padding:2},children:e.jsx(r,{children:"With gutters (default)"})})}),e.jsx(n,{disableGutters:!0,children:e.jsx(t,{sx:{padding:2,backgroundColor:"primary.light"},children:e.jsx(r,{children:"Without gutters - content touches edges"})})})]})},y={render:()=>e.jsx(n,{fixed:!0,children:e.jsx(t,{sx:{padding:3},children:e.jsx(r,{children:"Fixed container - max-width matches min-width of current breakpoint"})})})},f={render:()=>e.jsx(n,{maxWidth:"lg",children:e.jsxs(c,{sx:{paddingY:4},children:[e.jsx(r,{variant:"h3",gutterBottom:!0,children:"Page Title"}),e.jsx(r,{variant:"body1",paragraph:!0,children:'This is a typical page layout using Container component. The content is centered and has a maximum width of "lg" (1200px).'}),e.jsxs(t,{sx:{padding:3,marginTop:3},children:[e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Content Section"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"Container provides consistent horizontal padding and centers content on larger screens."})]})]})})},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(c,{sx:{backgroundColor:"primary.main",paddingY:4},children:e.jsx(n,{maxWidth:"md",children:e.jsx(r,{variant:"h4",sx:{color:"white"},children:"Hero Section (md)"})})}),e.jsxs(n,{maxWidth:"lg",children:[e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Main Content (lg)"}),e.jsx(r,{children:"Different sections can use different container widths."})]}),e.jsx(c,{sx:{backgroundColor:"#f5f5f5",paddingY:4},children:e.jsx(n,{maxWidth:"sm",children:e.jsx(r,{variant:"h6",align:"center",children:"Narrow Section (sm)"})})})]})},T={render:()=>e.jsx(n,{maxWidth:"md",children:e.jsxs(c,{sx:{paddingY:4},children:[e.jsx(r,{variant:"h3",gutterBottom:!0,children:"Blog Post Title"}),e.jsx(r,{variant:"subtitle1",color:"text.secondary",gutterBottom:!0,children:"Published on December 27, 2024"}),e.jsxs(c,{sx:{marginY:3},children:[e.jsx(r,{variant:"body1",paragraph:!0,children:'This is a blog post layout using Container with maxWidth="md" which provides optimal reading width for text content.'}),e.jsx(r,{variant:"body1",paragraph:!0,children:"The 900px max-width ensures text doesn't stretch too wide on large screens, maintaining comfortable reading line lengths."})]}),e.jsxs(t,{sx:{padding:3,backgroundColor:"#f5f5f5"},children:[e.jsx(r,{variant:"h6",gutterBottom:!0,children:"Highlighted Section"}),e.jsx(r,{variant:"body2",children:"Important information or quotes can be highlighted in a Paper component within the Container."})]})]})})},b={render:()=>e.jsx(n,{maxWidth:"sm",children:e.jsxs(t,{sx:{padding:4,marginTop:4},children:[e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Sign In"}),e.jsx(r,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Forms work well in narrow containers (sm: 600px)"}),e.jsxs(c,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(t,{sx:{padding:2,backgroundColor:"#f5f5f5"},children:"Email field"}),e.jsx(t,{sx:{padding:2,backgroundColor:"#f5f5f5"},children:"Password field"}),e.jsx(t,{sx:{padding:2,backgroundColor:"primary.main",color:"white"},children:"Sign In Button"})]})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Paper sx={{
      padding: 3
    }}>
        <Typography>This is a Container with default maxWidth="lg"</Typography>
      </Paper>
    </Container>
}`,...x.parameters?.docs?.source},description:{story:"Basic container",...x.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Container maxWidth="xs">
        <Paper sx={{
        padding: 2,
        backgroundColor: 'primary.light'
      }}>
          <Typography>maxWidth="xs" (444px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="sm">
        <Paper sx={{
        padding: 2,
        backgroundColor: 'secondary.light'
      }}>
          <Typography>maxWidth="sm" (600px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="md">
        <Paper sx={{
        padding: 2,
        backgroundColor: 'info.light'
      }}>
          <Typography>maxWidth="md" (900px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Paper sx={{
        padding: 2,
        backgroundColor: 'success.light'
      }}>
          <Typography>maxWidth="lg" (1200px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="xl">
        <Paper sx={{
        padding: 2,
        backgroundColor: 'warning.light'
      }}>
          <Typography>maxWidth="xl" (1536px)</Typography>
        </Paper>
      </Container>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Max width variants",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Container maxWidth={false}>
      <Paper sx={{
      padding: 3,
      backgroundColor: 'error.light'
    }}>
        <Typography>Fluid container (maxWidth=false) - takes full width</Typography>
      </Paper>
    </Container>
}`,...g.parameters?.docs?.source},description:{story:"Fluid container (no maxWidth)",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Container>
        <Paper sx={{
        padding: 2
      }}>
          <Typography>With gutters (default)</Typography>
        </Paper>
      </Container>
      <Container disableGutters>
        <Paper sx={{
        padding: 2,
        backgroundColor: 'primary.light'
      }}>
          <Typography>Without gutters - content touches edges</Typography>
        </Paper>
      </Container>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Without gutters",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Container fixed>
      <Paper sx={{
      padding: 3
    }}>
        <Typography>
          Fixed container - max-width matches min-width of current breakpoint
        </Typography>
      </Paper>
    </Container>
}`,...y.parameters?.docs?.source},description:{story:"Fixed container",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Container maxWidth="lg">
      <Box sx={{
      paddingY: 4
    }}>
        <Typography variant="h3" gutterBottom>
          Page Title
        </Typography>
        <Typography variant="body1" paragraph>
          This is a typical page layout using Container component. The content is centered
          and has a maximum width of "lg" (1200px).
        </Typography>
        <Paper sx={{
        padding: 3,
        marginTop: 3
      }}>
          <Typography variant="h5" gutterBottom>
            Content Section
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Container provides consistent horizontal padding and centers content on larger
            screens.
          </Typography>
        </Paper>
      </Box>
    </Container>
}`,...f.parameters?.docs?.source},description:{story:"Page layout example",...f.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <Box sx={{
      backgroundColor: 'primary.main',
      paddingY: 4
    }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{
          color: 'white'
        }}>
            Hero Section (md)
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h5" gutterBottom>
          Main Content (lg)
        </Typography>
        <Typography>Different sections can use different container widths.</Typography>
      </Container>
      <Box sx={{
      backgroundColor: '#f5f5f5',
      paddingY: 4
    }}>
        <Container maxWidth="sm">
          <Typography variant="h6" align="center">
            Narrow Section (sm)
          </Typography>
        </Container>
      </Box>
    </div>
}`,...C.parameters?.docs?.source},description:{story:"Multiple containers",...C.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Container maxWidth="md">
      <Box sx={{
      paddingY: 4
    }}>
        <Typography variant="h3" gutterBottom>
          Blog Post Title
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Published on December 27, 2024
        </Typography>
        <Box sx={{
        marginY: 3
      }}>
          <Typography variant="body1" paragraph>
            This is a blog post layout using Container with maxWidth="md" which provides
            optimal reading width for text content.
          </Typography>
          <Typography variant="body1" paragraph>
            The 900px max-width ensures text doesn't stretch too wide on large screens,
            maintaining comfortable reading line lengths.
          </Typography>
        </Box>
        <Paper sx={{
        padding: 3,
        backgroundColor: '#f5f5f5'
      }}>
          <Typography variant="h6" gutterBottom>
            Highlighted Section
          </Typography>
          <Typography variant="body2">
            Important information or quotes can be highlighted in a Paper component within
            the Container.
          </Typography>
        </Paper>
      </Box>
    </Container>
}`,...T.parameters?.docs?.source},description:{story:"Blog layout",...T.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Container maxWidth="sm">
      <Paper sx={{
      padding: 4,
      marginTop: 4
    }}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Forms work well in narrow containers (sm: 600px)
        </Typography>
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
          <Paper sx={{
          padding: 2,
          backgroundColor: '#f5f5f5'
        }}>Email field</Paper>
          <Paper sx={{
          padding: 2,
          backgroundColor: '#f5f5f5'
        }}>Password field</Paper>
          <Paper sx={{
          padding: 2,
          backgroundColor: 'primary.main',
          color: 'white'
        }}>
            Sign In Button
          </Paper>
        </Box>
      </Paper>
    </Container>
}`,...b.parameters?.docs?.source},description:{story:"Form layout",...b.parameters?.docs?.description}}};const ce=["Basic","MaxWidthVariants","Fluid","DisableGutters","Fixed","PageLayout","MultipleContainers","BlogLayout","FormLayout"];export{x as Basic,T as BlogLayout,u as DisableGutters,y as Fixed,g as Fluid,b as FormLayout,m as MaxWidthVariants,C as MultipleContainers,f as PageLayout,ce as __namedExportsOrder,pe as default};
