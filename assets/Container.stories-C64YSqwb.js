import{R as f,j as e}from"./iframe-m0FcCUbT.js";import{C}from"./Container-Jy3eikhP.js";import{T as r}from"./Typography-CkHBM8H0.js";import{P as n}from"./Paper-q77F6CKF.js";import{B as t}from"./Box-Bzd77gh_.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C11nCEJ1.js";import"./useThemeProps-OFH6wkZ1.js";import"./useTheme--qrtAMJV.js";import"./Typography-BAhyjZNg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-BQ8rpTFt.js";import"./chainPropTypes-CPkqCYVL.js";import"./integerPropType-DVPNO1YA.js";import"./Box-DSq61m1Q.js";const a=f.forwardRef(({children:g,maxWidth:m="lg",...y},u)=>e.jsx(C,{ref:u,maxWidth:m,...y,children:g}));a.displayName="Container";a.__docgenInfo={description:`Container component - centers content horizontally with max-width constraints
The most basic layout element that provides responsive horizontal padding

@example
\`\`\`tsx
<Container maxWidth="lg">
  <Typography>Content</Typography>
</Container>
\`\`\``,methods:[],displayName:"Container",props:{maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:"Determine the max-width of the container",defaultValue:{value:"'lg'",computed:!1}},disableGutters:{required:!1,tsType:{name:"boolean"},description:"If true, the left and right padding is removed"},fixed:{required:!1,tsType:{name:"boolean"},description:"Set the max-width to match the min-width of the current breakpoint"},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node"},sx:{required:!1,tsType:{name:"MuiContainerProps['sx']",raw:"MuiContainerProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"}},composes:["MuiContainerProps"]};const I={title:"Atoms/Container",component:a,tags:["autodocs"],argTypes:{maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"Determine the max-width of the container"},disableGutters:{control:"boolean",description:"If true, the left and right padding is removed"},fixed:{control:"boolean",description:"Set the max-width to match the min-width of the current breakpoint"}}},o={render:()=>e.jsx(a,{children:e.jsx(n,{sx:{padding:3},children:e.jsx(r,{children:'This is a Container with default maxWidth="lg"'})})})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{maxWidth:"xs",children:e.jsx(n,{sx:{padding:2,backgroundColor:"primary.light"},children:e.jsx(r,{children:'maxWidth="xs" (444px)'})})}),e.jsx(a,{maxWidth:"sm",children:e.jsx(n,{sx:{padding:2,backgroundColor:"secondary.light"},children:e.jsx(r,{children:'maxWidth="sm" (600px)'})})}),e.jsx(a,{maxWidth:"md",children:e.jsx(n,{sx:{padding:2,backgroundColor:"info.light"},children:e.jsx(r,{children:'maxWidth="md" (900px)'})})}),e.jsx(a,{maxWidth:"lg",children:e.jsx(n,{sx:{padding:2,backgroundColor:"success.light"},children:e.jsx(r,{children:'maxWidth="lg" (1200px)'})})}),e.jsx(a,{maxWidth:"xl",children:e.jsx(n,{sx:{padding:2,backgroundColor:"warning.light"},children:e.jsx(r,{children:'maxWidth="xl" (1536px)'})})})]})},s={render:()=>e.jsx(a,{maxWidth:!1,children:e.jsx(n,{sx:{padding:3,backgroundColor:"error.light"},children:e.jsx(r,{children:"Fluid container (maxWidth=false) - takes full width"})})})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{children:e.jsx(n,{sx:{padding:2},children:e.jsx(r,{children:"With gutters (default)"})})}),e.jsx(a,{disableGutters:!0,children:e.jsx(n,{sx:{padding:2,backgroundColor:"primary.light"},children:e.jsx(r,{children:"Without gutters - content touches edges"})})})]})},p={render:()=>e.jsx(a,{fixed:!0,children:e.jsx(n,{sx:{padding:3},children:e.jsx(r,{children:"Fixed container - max-width matches min-width of current breakpoint"})})})},l={render:()=>e.jsx(a,{maxWidth:"lg",children:e.jsxs(t,{sx:{paddingY:4},children:[e.jsx(r,{variant:"h3",gutterBottom:!0,children:"Page Title"}),e.jsx(r,{variant:"body1",paragraph:!0,children:'This is a typical page layout using Container component. The content is centered and has a maximum width of "lg" (1200px).'}),e.jsxs(n,{sx:{padding:3,marginTop:3},children:[e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Content Section"}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"Container provides consistent horizontal padding and centers content on larger screens."})]})]})})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(t,{sx:{backgroundColor:"primary.main",paddingY:4},children:e.jsx(a,{maxWidth:"md",children:e.jsx(r,{variant:"h4",sx:{color:"white"},children:"Hero Section (md)"})})}),e.jsxs(a,{maxWidth:"lg",children:[e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Main Content (lg)"}),e.jsx(r,{children:"Different sections can use different container widths."})]}),e.jsx(t,{sx:{backgroundColor:"#f5f5f5",paddingY:4},children:e.jsx(a,{maxWidth:"sm",children:e.jsx(r,{variant:"h6",align:"center",children:"Narrow Section (sm)"})})})]})},h={render:()=>e.jsx(a,{maxWidth:"md",children:e.jsxs(t,{sx:{paddingY:4},children:[e.jsx(r,{variant:"h3",gutterBottom:!0,children:"Blog Post Title"}),e.jsx(r,{variant:"subtitle1",color:"text.secondary",gutterBottom:!0,children:"Published on December 27, 2024"}),e.jsxs(t,{sx:{marginY:3},children:[e.jsx(r,{variant:"body1",paragraph:!0,children:'This is a blog post layout using Container with maxWidth="md" which provides optimal reading width for text content.'}),e.jsx(r,{variant:"body1",paragraph:!0,children:"The 900px max-width ensures text doesn't stretch too wide on large screens, maintaining comfortable reading line lengths."})]}),e.jsxs(n,{sx:{padding:3,backgroundColor:"#f5f5f5"},children:[e.jsx(r,{variant:"h6",gutterBottom:!0,children:"Highlighted Section"}),e.jsx(r,{variant:"body2",children:"Important information or quotes can be highlighted in a Paper component within the Container."})]})]})})},x={render:()=>e.jsx(a,{maxWidth:"sm",children:e.jsxs(n,{sx:{padding:4,marginTop:4},children:[e.jsx(r,{variant:"h5",gutterBottom:!0,children:"Sign In"}),e.jsx(r,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Forms work well in narrow containers (sm: 600px)"}),e.jsxs(t,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(n,{sx:{padding:2,backgroundColor:"#f5f5f5"},children:"Email field"}),e.jsx(n,{sx:{padding:2,backgroundColor:"#f5f5f5"},children:"Password field"}),e.jsx(n,{sx:{padding:2,backgroundColor:"primary.main",color:"white"},children:"Sign In Button"})]})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Paper sx={{
      padding: 3
    }}>
        <Typography>This is a Container with default maxWidth="lg"</Typography>
      </Paper>
    </Container>
}`,...o.parameters?.docs?.source},description:{story:"Basic container",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Max width variants",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Container maxWidth={false}>
      <Paper sx={{
      padding: 3,
      backgroundColor: 'error.light'
    }}>
        <Typography>Fluid container (maxWidth=false) - takes full width</Typography>
      </Paper>
    </Container>
}`,...s.parameters?.docs?.source},description:{story:"Fluid container (no maxWidth)",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Without gutters",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Container fixed>
      <Paper sx={{
      padding: 3
    }}>
        <Typography>Fixed container - max-width matches min-width of current breakpoint</Typography>
      </Paper>
    </Container>
}`,...p.parameters?.docs?.source},description:{story:"Fixed container",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Container maxWidth="lg">
      <Box sx={{
      paddingY: 4
    }}>
        <Typography variant="h3" gutterBottom>
          Page Title
        </Typography>
        <Typography variant="body1" paragraph>
          This is a typical page layout using Container component. The content is centered and has a
          maximum width of "lg" (1200px).
        </Typography>
        <Paper sx={{
        padding: 3,
        marginTop: 3
      }}>
          <Typography variant="h5" gutterBottom>
            Content Section
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Container provides consistent horizontal padding and centers content on larger screens.
          </Typography>
        </Paper>
      </Box>
    </Container>
}`,...l.parameters?.docs?.source},description:{story:"Page layout example",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Multiple containers",...c.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
            This is a blog post layout using Container with maxWidth="md" which provides optimal
            reading width for text content.
          </Typography>
          <Typography variant="body1" paragraph>
            The 900px max-width ensures text doesn't stretch too wide on large screens, maintaining
            comfortable reading line lengths.
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
            Important information or quotes can be highlighted in a Paper component within the
            Container.
          </Typography>
        </Paper>
      </Box>
    </Container>
}`,...h.parameters?.docs?.source},description:{story:"Blog layout",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Form layout",...x.parameters?.docs?.description}}};const q=["Basic","MaxWidthVariants","Fluid","DisableGutters","Fixed","PageLayout","MultipleContainers","BlogLayout","FormLayout"];export{o as Basic,h as BlogLayout,d as DisableGutters,p as Fixed,s as Fluid,x as FormLayout,i as MaxWidthVariants,c as MultipleContainers,l as PageLayout,q as __namedExportsOrder,I as default};
