import{j as o}from"./iframe-DxesKUG5.js";import{B as n}from"./Box-BqQfjCQo.js";import{T as m}from"./Typography-JZHisPaC.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DSvwcJiO.js";import"./memoTheme-B6Th5GL5.js";import"./useTheme-IYqs0tYS.js";import"./Typography-UCSWEJhs.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const j={title:"Atoms/Box",component:n,tags:["autodocs"],argTypes:{component:{control:"text",description:"The component used for the root node"}}},r={render:()=>o.jsx(n,{sx:{padding:2,backgroundColor:"primary.main",color:"white"},children:"This is a Box"})},e={render:()=>o.jsx(n,{sx:{padding:3,margin:2,backgroundColor:"secondary.main",color:"white"},children:"Box with padding and margin"})},a={render:()=>o.jsx(n,{sx:{padding:2,border:1,borderColor:"divider",borderRadius:1},children:"Box with border"})},d={render:()=>o.jsx(n,{sx:{width:{xs:"100%",sm:"75%",md:"50%",lg:"25%"},padding:2,backgroundColor:"info.main",color:"white"},children:"Responsive width box"})},i={render:()=>o.jsxs(n,{sx:{display:"flex",gap:2,padding:2,backgroundColor:"#f5f5f5"},children:[o.jsx(n,{sx:{padding:2,backgroundColor:"primary.main",color:"white"},children:"Item 1"}),o.jsx(n,{sx:{padding:2,backgroundColor:"secondary.main",color:"white"},children:"Item 2"}),o.jsx(n,{sx:{padding:2,backgroundColor:"error.main",color:"white"},children:"Item 3"})]})},s={render:()=>o.jsxs(n,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:2,padding:2},children:[o.jsx(n,{sx:{padding:2,backgroundColor:"primary.main",color:"white"},children:"1"}),o.jsx(n,{sx:{padding:2,backgroundColor:"secondary.main",color:"white"},children:"2"}),o.jsx(n,{sx:{padding:2,backgroundColor:"error.main",color:"white"},children:"3"}),o.jsx(n,{sx:{padding:2,backgroundColor:"warning.main",color:"white"},children:"4"}),o.jsx(n,{sx:{padding:2,backgroundColor:"info.main",color:"white"},children:"5"}),o.jsx(n,{sx:{padding:2,backgroundColor:"success.main",color:"white"},children:"6"})]})},c={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(n,{component:"section",sx:{padding:2,backgroundColor:"#f5f5f5"},children:o.jsx(m,{children:"Box as section element"})}),o.jsx(n,{component:"article",sx:{padding:2,backgroundColor:"#e3f2fd"},children:o.jsx(m,{children:"Box as article element"})}),o.jsx(n,{component:"aside",sx:{padding:2,backgroundColor:"#fff3e0"},children:o.jsx(m,{children:"Box as aside element"})})]})},t={render:()=>o.jsx(n,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"200px",backgroundColor:"primary.main",color:"white"},children:"Centered Content"})},p={render:()=>o.jsxs("div",{style:{display:"flex",gap:"16px",padding:"16px"},children:[o.jsx(n,{sx:{padding:2,boxShadow:1},children:"Shadow 1"}),o.jsx(n,{sx:{padding:2,boxShadow:2},children:"Shadow 2"}),o.jsx(n,{sx:{padding:2,boxShadow:3},children:"Shadow 3"}),o.jsx(n,{sx:{padding:2,boxShadow:5},children:"Shadow 5"})]})},l={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(n,{sx:{padding:2,backgroundColor:"primary.main",color:"white"},children:"Primary"}),o.jsx(n,{sx:{padding:2,backgroundColor:"secondary.main",color:"white"},children:"Secondary"}),o.jsx(n,{sx:{padding:2,backgroundColor:"error.main",color:"white"},children:"Error"}),o.jsx(n,{sx:{padding:2,backgroundColor:"warning.main",color:"white"},children:"Warning"}),o.jsx(n,{sx:{padding:2,backgroundColor:"info.main",color:"white"},children:"Info"}),o.jsx(n,{sx:{padding:2,backgroundColor:"success.main",color:"white"},children:"Success"})]})},x={render:()=>o.jsx(n,{sx:{padding:3,backgroundColor:"primary.main"},children:o.jsx(n,{sx:{padding:2,backgroundColor:"secondary.main"},children:o.jsx(n,{sx:{padding:1,backgroundColor:"white"},children:"Nested Box Content"})})})},g={render:()=>o.jsxs("div",{style:{display:"flex",gap:"16px"},children:[o.jsx(n,{sx:{width:200,height:100,overflow:"hidden",backgroundColor:"#f5f5f5",padding:1},children:o.jsx(m,{children:"This is a very long text that will be clipped because overflow is hidden"})}),o.jsx(n,{sx:{width:200,height:100,overflow:"auto",backgroundColor:"#f5f5f5",padding:1},children:o.jsx(m,{children:"This is a very long text that will show scrollbars because overflow is auto. You can scroll to see all the content."})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    padding: 2,
    backgroundColor: 'primary.main',
    color: 'white'
  }}>This is a Box</Box>
}`,...r.parameters?.docs?.source},description:{story:"Basic box",...r.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    padding: 3,
    margin: 2,
    backgroundColor: 'secondary.main',
    color: 'white'
  }}>
      Box with padding and margin
    </Box>
}`,...e.parameters?.docs?.source},description:{story:"With padding and margin",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    padding: 2,
    border: 1,
    borderColor: 'divider',
    borderRadius: 1
  }}>
      Box with border
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"With border",...a.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: {
      xs: '100%',
      sm: '75%',
      md: '50%',
      lg: '25%'
    },
    padding: 2,
    backgroundColor: 'info.main',
    color: 'white'
  }}>
      Responsive width box
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"Responsive width",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    padding: 2,
    backgroundColor: '#f5f5f5'
  }}>
      <Box sx={{
      padding: 2,
      backgroundColor: 'primary.main',
      color: 'white'
    }}>Item 1</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'secondary.main',
      color: 'white'
    }}>Item 2</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'error.main',
      color: 'white'
    }}>Item 3</Box>
    </Box>
}`,...i.parameters?.docs?.source},description:{story:"Flexbox container",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 2,
    padding: 2
  }}>
      <Box sx={{
      padding: 2,
      backgroundColor: 'primary.main',
      color: 'white'
    }}>1</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'secondary.main',
      color: 'white'
    }}>2</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'error.main',
      color: 'white'
    }}>3</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'warning.main',
      color: 'white'
    }}>4</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'info.main',
      color: 'white'
    }}>5</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'success.main',
      color: 'white'
    }}>6</Box>
    </Box>
}`,...s.parameters?.docs?.source},description:{story:"Grid container",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Box component="section" sx={{
      padding: 2,
      backgroundColor: '#f5f5f5'
    }}>
        <Typography>Box as section element</Typography>
      </Box>
      <Box component="article" sx={{
      padding: 2,
      backgroundColor: '#e3f2fd'
    }}>
        <Typography>Box as article element</Typography>
      </Box>
      <Box component="aside" sx={{
      padding: 2,
      backgroundColor: '#fff3e0'
    }}>
        <Typography>Box as aside element</Typography>
      </Box>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"As different HTML elements",...c.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    backgroundColor: 'primary.main',
    color: 'white'
  }}>
      Centered Content
    </Box>
}`,...t.parameters?.docs?.source},description:{story:"Centered content",...t.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '16px'
  }}>
      <Box sx={{
      padding: 2,
      boxShadow: 1
    }}>Shadow 1</Box>
      <Box sx={{
      padding: 2,
      boxShadow: 2
    }}>Shadow 2</Box>
      <Box sx={{
      padding: 2,
      boxShadow: 3
    }}>Shadow 3</Box>
      <Box sx={{
      padding: 2,
      boxShadow: 5
    }}>Shadow 5</Box>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Shadow variants",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Box sx={{
      padding: 2,
      backgroundColor: 'primary.main',
      color: 'white'
    }}>Primary</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'secondary.main',
      color: 'white'
    }}>Secondary</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'error.main',
      color: 'white'
    }}>Error</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'warning.main',
      color: 'white'
    }}>Warning</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'info.main',
      color: 'white'
    }}>Info</Box>
      <Box sx={{
      padding: 2,
      backgroundColor: 'success.main',
      color: 'white'
    }}>Success</Box>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Color palette",...l.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    padding: 3,
    backgroundColor: 'primary.main'
  }}>
      <Box sx={{
      padding: 2,
      backgroundColor: 'secondary.main'
    }}>
        <Box sx={{
        padding: 1,
        backgroundColor: 'white'
      }}>Nested Box Content</Box>
      </Box>
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"Nested boxes",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Box sx={{
      width: 200,
      height: 100,
      overflow: 'hidden',
      backgroundColor: '#f5f5f5',
      padding: 1
    }}>
        <Typography>
          This is a very long text that will be clipped because overflow is hidden
        </Typography>
      </Box>
      <Box sx={{
      width: 200,
      height: 100,
      overflow: 'auto',
      backgroundColor: '#f5f5f5',
      padding: 1
    }}>
        <Typography>
          This is a very long text that will show scrollbars because overflow is auto. You can
          scroll to see all the content.
        </Typography>
      </Box>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Overflow handling",...g.parameters?.docs?.description}}};const S=["Basic","WithSpacing","WithBorder","ResponsiveWidth","FlexboxContainer","GridContainer","AsComponents","CenteredContent","WithShadow","ColorPalette","NestedBoxes","OverflowHandling"];export{c as AsComponents,r as Basic,t as CenteredContent,l as ColorPalette,i as FlexboxContainer,s as GridContainer,x as NestedBoxes,g as OverflowHandling,d as ResponsiveWidth,a as WithBorder,p as WithShadow,e as WithSpacing,S as __namedExportsOrder,j as default};
