import{j as e}from"./iframe-zeeDxUUo.js";import{M as r}from"./MaterialSymbol-DioViiQf.js";import{S as i}from"./Stack-CcurOuc4.js";import{B as o}from"./Box-BNcCJ4TC.js";import{T as a}from"./Typography-Bhs7JO2Z.js";import{P as b}from"./Paper-ILlJsP_L.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DdwYAhEk.js";import"./styled-CCPHBhBF.js";import"./useThemeProps-DBPwOPyu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BOjxn6IZ.js";const L={title:"Atoms/MaterialSymbol",component:r,tags:["autodocs"],argTypes:{icon:{control:"text",description:"Icon name from Material Symbols library (snake_case)",table:{type:{summary:"string"},defaultValue:{summary:"home"}}},size:{control:"radio",options:["small","medium","large"],description:"Icon size preset or custom number",table:{type:{summary:"'small' | 'medium' | 'large' | 'inherit' | number"},defaultValue:{summary:"medium"}}},fill:{control:"radio",options:[0,1],description:"0 = Outlined, 1 = Filled",table:{type:{summary:"0 | 1"},defaultValue:{summary:0}}},weight:{control:"select",options:[100,200,300,400,500,600,700],description:"Stroke thickness (100=thin, 700=bold)",table:{type:{summary:"100 | 200 | 300 | 400 | 500 | 600 | 700"},defaultValue:{summary:300}}},grade:{control:{type:"range",min:-50,max:200,step:25},description:"Visual weight adjustment",table:{type:{summary:"number"},defaultValue:{summary:-25}}},color:{control:"color",description:"Icon color (CSS color or theme path)"}}},n={args:{icon:"home"}},s={args:{icon:"favorite",size:"large",fill:0,weight:100,grade:125,color:"#701300",className:"add"}},c={args:{size:"large",fill:1,icon:"favorite",weight:700},render:()=>e.jsxs(i,{direction:"row",spacing:4,alignItems:"flex-end",children:[e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"star",size:"small"}),e.jsx(a,{variant:"caption",display:"block",mt:1,children:"Small (20px)"})]}),e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"star",size:"medium"}),e.jsx(a,{variant:"caption",display:"block",mt:1,children:"Medium (24px)"})]}),e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"star",size:"large"}),e.jsx(a,{variant:"caption",display:"block",mt:1,children:"Large (36px)"})]}),e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"star",size:48}),e.jsx(a,{variant:"caption",display:"block",mt:1,children:"Custom (48px)"})]})]})},l={render:()=>e.jsxs(i,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"favorite",fill:0,size:"large"}),e.jsx(a,{variant:"caption",display:"block",mt:1,children:"Outlined (fill=0)"})]}),e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"favorite",fill:1,size:"large"}),e.jsx(a,{variant:"caption",display:"block",mt:1,children:"Filled (fill=1)"})]})]})},d={render:()=>e.jsx(i,{direction:"row",spacing:2,alignItems:"center",flexWrap:"wrap",children:[100,200,300,400,500,600,700].map(t=>e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"settings",weight:t,size:"large"}),e.jsx(a,{variant:"caption",display:"block",mt:.5,children:t})]},t))})},p={render:()=>e.jsxs(i,{spacing:2,children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Grade: Visual Weight Adjustment"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Grade adjusts visual weight without changing physical size"}),e.jsx(i,{direction:"row",spacing:3,alignItems:"center",children:[-50,-25,0,25,50,100,200].map(t=>e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{icon:"check_circle",grade:t,size:"large"}),e.jsx(a,{variant:"caption",display:"block",mt:.5,children:t})]},t))})]})},g={render:()=>e.jsxs(b,{sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Common Material Symbols Icons"}),e.jsxs(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:["Browse all icons at"," ",e.jsx("a",{href:"https://fonts.google.com/icons",target:"_blank",rel:"noopener noreferrer",children:"fonts.google.com/icons"})]}),e.jsx(i,{direction:"row",spacing:1,flexWrap:"wrap",sx:{gap:2},children:["home","settings","search","favorite","star","check","close","add","remove","edit","delete","menu","more_vert","notifications","account_circle","mail","send","inbox","drafts","visibility","shopping_cart","info","warning","error","check_circle","expand_more","expand_less","chevron_left","chevron_right","arrow_forward","arrow_back"].map(t=>e.jsxs(o,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:80,p:1,"&:hover":{bgcolor:"action.hover",borderRadius:1}},children:[e.jsx(r,{icon:t,size:"medium"}),e.jsx(a,{variant:"caption",sx:{mt:.5,fontSize:"0.65rem",textAlign:"center"},children:t})]},t))})]})},m={render:()=>e.jsxs(b,{sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"MRS Design System Default Configuration"}),e.jsxs(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:[e.jsx("strong",{children:"Weight:"})," 300 (Light) |"," ",e.jsx("strong",{children:"Fill:"})," 0 (Outlined) |"," ",e.jsx("strong",{children:"Grade:"})," 100 (Lighter) |"," ",e.jsx("strong",{children:"Variant:"})," Rounded"]}),e.jsxs(i,{direction:"row",spacing:4,alignItems:"center",sx:{mt:3},children:[e.jsx(r,{icon:"check",size:"large"}),e.jsx(r,{icon:"close",size:"large"}),e.jsx(r,{icon:"settings",size:"large"}),e.jsx(r,{icon:"favorite",size:"large"}),e.jsx(r,{icon:"star",size:"large"}),e.jsx(r,{icon:"info",size:"large"}),e.jsx(r,{icon:"warning",size:"large"}),e.jsx(r,{icon:"error",size:"large"})]}),e.jsx(a,{variant:"caption",display:"block",mt:2,color:"text.secondary",children:"Light, airy appearance with rounded corners - perfect for modern UI"})]})},h={render:()=>e.jsxs(i,{spacing:3,children:[e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"MUI Theme Colors"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"error",color:"error.main",size:"large"}),e.jsx(r,{icon:"warning",color:"warning.main",size:"large"}),e.jsx(r,{icon:"info",color:"info.main",size:"large"}),e.jsx(r,{icon:"check_circle",color:"success.main",size:"large"}),e.jsx(r,{icon:"favorite",color:"primary.main",size:"large"})]})]}),e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Custom Colors"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"star",color:"#FFD700",size:"large"}),e.jsx(r,{icon:"favorite",color:"#FF1744",size:"large"}),e.jsx(r,{icon:"circle",color:"#00BCD4",size:"large"}),e.jsx(r,{icon:"square",color:"#4CAF50",size:"large"})]})]})]})},y={render:()=>e.jsxs(i,{spacing:2,children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Icons with onClick handlers (hover to see effect)"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"thumb_up",size:"large",onClick:()=>alert("Liked!"),ariaLabel:"Like"}),e.jsx(r,{icon:"share",size:"large",onClick:()=>alert("Shared!"),ariaLabel:"Share"}),e.jsx(r,{icon:"bookmark",size:"large",onClick:()=>alert("Bookmarked!"),ariaLabel:"Bookmark"}),e.jsx(r,{icon:"close",size:"large",onClick:()=>alert("Closed!"),ariaLabel:"Close"})]})]})},x={render:()=>e.jsxs(i,{spacing:3,children:[e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"With aria-label (screen reader accessible)"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"info",ariaLabel:"Information",size:"medium"}),e.jsx(r,{icon:"warning",ariaLabel:"Warning",size:"medium"}),e.jsx(r,{icon:"error",ariaLabel:"Error",size:"medium"}),e.jsx(r,{icon:"check_circle",ariaLabel:"Success",size:"medium"})]})]}),e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Decorative (aria-hidden)"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"star",ariaHidden:!0,size:"medium"}),e.jsx(r,{icon:"favorite",ariaHidden:!0,size:"medium"}),e.jsx(r,{icon:"circle",ariaHidden:!0,size:"medium"})]})]})]})},u={render:()=>e.jsxs(b,{sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Configuration Comparison"}),e.jsxs(i,{spacing:4,mt:2,children:[e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Light & Airy (MRS Default)"}),e.jsx(a,{variant:"caption",color:"text.secondary",display:"block",mb:1,children:"weight=300, fill=0, grade=100"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"home",weight:300,fill:0,grade:100,size:"large"}),e.jsx(r,{icon:"star",weight:300,fill:0,grade:100,size:"large"}),e.jsx(r,{icon:"favorite",weight:300,fill:0,grade:100,size:"large"})]})]}),e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Standard"}),e.jsx(a,{variant:"caption",color:"text.secondary",display:"block",mb:1,children:"weight=400, fill=0, grade=0"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"home",weight:400,fill:0,grade:0,size:"large"}),e.jsx(r,{icon:"star",weight:400,fill:0,grade:0,size:"large"}),e.jsx(r,{icon:"favorite",weight:400,fill:0,grade:0,size:"large"})]})]}),e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Bold & Filled"}),e.jsx(a,{variant:"caption",color:"text.secondary",display:"block",mb:1,children:"weight=700, fill=1, grade=0"}),e.jsxs(i,{direction:"row",spacing:2,children:[e.jsx(r,{icon:"home",weight:700,fill:1,grade:0,size:"large"}),e.jsx(r,{icon:"star",weight:700,fill:1,grade:0,size:"large"}),e.jsx(r,{icon:"favorite",weight:700,fill:1,grade:0,size:"large"})]})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home'
  }
}`,...n.parameters?.docs?.source},description:{story:`Default MaterialSymbol with MRS design system configuration:
- Weight: 300 (Light)
- Fill: 0 (Outlined)
- Grade: 100 (Lighter visual weight)
- Size: 24px (Medium)`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    size: "large",
    fill: 0,
    weight: 100,
    grade: 125,
    color: "#701300",
    className: "add"
  }
}`,...s.parameters?.docs?.source},description:{story:"Interactive playground to customize all icon properties",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    fill: 1,
    icon: "favorite",
    weight: 700
  },
  render: () => <Stack direction="row" spacing={4} alignItems="flex-end">
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="small" />
        <Typography variant="caption" display="block" mt={1}>
          Small (20px)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="medium" />
        <Typography variant="caption" display="block" mt={1}>
          Medium (24px)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="large" />
        <Typography variant="caption" display="block" mt={1}>
          Large (36px)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size={48} />
        <Typography variant="caption" display="block" mt={1}>
          Custom (48px)
        </Typography>
      </Box>
    </Stack>
}`,...c.parameters?.docs?.source},description:{story:"All available size variants",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={4} alignItems="center">
      <Box textAlign="center">
        <MaterialSymbol icon="favorite" fill={0} size="large" />
        <Typography variant="caption" display="block" mt={1}>
          Outlined (fill=0)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="favorite" fill={1} size="large" />
        <Typography variant="caption" display="block" mt={1}>
          Filled (fill=1)
        </Typography>
      </Box>
    </Stack>
}`,...l.parameters?.docs?.source},description:{story:"Fill variants: Outlined (0) vs Filled (1)",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      {[100, 200, 300, 400, 500, 600, 700].map(weight => <Box key={weight} textAlign="center">
          <MaterialSymbol icon="settings" weight={weight as any} size="large" />
          <Typography variant="caption" display="block" mt={0.5}>
            {weight}
          </Typography>
        </Box>)}
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"Weight variants from thin (100) to bold (700)",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Grade: Visual Weight Adjustment
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Grade adjusts visual weight without changing physical size
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        {[-50, -25, 0, 25, 50, 100, 200].map(grade => <Box key={grade} textAlign="center">
            <MaterialSymbol icon="check_circle" grade={grade} size="large" />
            <Typography variant="caption" display="block" mt={0.5}>
              {grade}
            </Typography>
          </Box>)}
      </Stack>
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"Grade variants showing visual weight adjustment",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3
  }}>
      <Typography variant="h6" gutterBottom>
        Common Material Symbols Icons
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Browse all icons at{' '}
        <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">
          fonts.google.com/icons
        </a>
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{
      gap: 2
    }}>
        {['home', 'settings', 'search', 'favorite', 'star', 'check', 'close', 'add', 'remove', 'edit', 'delete', 'menu', 'more_vert', 'notifications', 'account_circle', 'mail', 'send', 'inbox', 'drafts', 'visibility', 'shopping_cart', 'info', 'warning', 'error', 'check_circle', 'expand_more', 'expand_less', 'chevron_left', 'chevron_right', 'arrow_forward', 'arrow_back'].map(icon => <Box key={icon} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 80,
        p: 1,
        '&:hover': {
          bgcolor: 'action.hover',
          borderRadius: 1
        }
      }}>
            <MaterialSymbol icon={icon} size="medium" />
            <Typography variant="caption" sx={{
          mt: 0.5,
          fontSize: '0.65rem',
          textAlign: 'center'
        }}>
              {icon}
            </Typography>
          </Box>)}
      </Stack>
    </Paper>
}`,...g.parameters?.docs?.source},description:{story:"Common Material Symbols icons showcase",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3
  }}>
      <Typography variant="h6" gutterBottom>
        MRS Design System Default Configuration
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        <strong>Weight:</strong> 300 (Light) |{' '}
        <strong>Fill:</strong> 0 (Outlined) |{' '}
        <strong>Grade:</strong> 100 (Lighter) |{' '}
        <strong>Variant:</strong> Rounded
      </Typography>
      <Stack direction="row" spacing={4} alignItems="center" sx={{
      mt: 3
    }}>
        <MaterialSymbol icon="check" size="large" />
        <MaterialSymbol icon="close" size="large" />
        <MaterialSymbol icon="settings" size="large" />
        <MaterialSymbol icon="favorite" size="large" />
        <MaterialSymbol icon="star" size="large" />
        <MaterialSymbol icon="info" size="large" />
        <MaterialSymbol icon="warning" size="large" />
        <MaterialSymbol icon="error" size="large" />
      </Stack>
      <Typography variant="caption" display="block" mt={2} color="text.secondary">
        Light, airy appearance with rounded corners - perfect for modern UI
      </Typography>
    </Paper>
}`,...m.parameters?.docs?.source},description:{story:"MRS Design System default configuration showcase",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          MUI Theme Colors
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="error" color="error.main" size="large" />
          <MaterialSymbol icon="warning" color="warning.main" size="large" />
          <MaterialSymbol icon="info" color="info.main" size="large" />
          <MaterialSymbol icon="check_circle" color="success.main" size="large" />
          <MaterialSymbol icon="favorite" color="primary.main" size="large" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Custom Colors
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="star" color="#FFD700" size="large" />
          <MaterialSymbol icon="favorite" color="#FF1744" size="large" />
          <MaterialSymbol icon="circle" color="#00BCD4" size="large" />
          <MaterialSymbol icon="square" color="#4CAF50" size="large" />
        </Stack>
      </Box>
    </Stack>
}`,...h.parameters?.docs?.source},description:{story:"Color customization examples",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant="subtitle2" gutterBottom>
        Icons with onClick handlers (hover to see effect)
      </Typography>
      <Stack direction="row" spacing={2}>
        <MaterialSymbol icon="thumb_up" size="large" onClick={() => alert('Liked!')} ariaLabel="Like" />
        <MaterialSymbol icon="share" size="large" onClick={() => alert('Shared!')} ariaLabel="Share" />
        <MaterialSymbol icon="bookmark" size="large" onClick={() => alert('Bookmarked!')} ariaLabel="Bookmark" />
        <MaterialSymbol icon="close" size="large" onClick={() => alert('Closed!')} ariaLabel="Close" />
      </Stack>
    </Stack>
}`,...y.parameters?.docs?.source},description:{story:"Clickable icons with hover effects",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          With aria-label (screen reader accessible)
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="info" ariaLabel="Information" size="medium" />
          <MaterialSymbol icon="warning" ariaLabel="Warning" size="medium" />
          <MaterialSymbol icon="error" ariaLabel="Error" size="medium" />
          <MaterialSymbol icon="check_circle" ariaLabel="Success" size="medium" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Decorative (aria-hidden)
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="star" ariaHidden={true} size="medium" />
          <MaterialSymbol icon="favorite" ariaHidden={true} size="medium" />
          <MaterialSymbol icon="circle" ariaHidden={true} size="medium" />
        </Stack>
      </Box>
    </Stack>
}`,...x.parameters?.docs?.source},description:{story:"Accessibility examples with aria-label",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3
  }}>
      <Typography variant="h6" gutterBottom>
        Configuration Comparison
      </Typography>
      <Stack spacing={4} mt={2}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Light & Airy (MRS Default)
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            weight=300, fill=0, grade=100
          </Typography>
          <Stack direction="row" spacing={2}>
            <MaterialSymbol icon="home" weight={300} fill={0} grade={100} size="large" />
            <MaterialSymbol icon="star" weight={300} fill={0} grade={100} size="large" />
            <MaterialSymbol icon="favorite" weight={300} fill={0} grade={100} size="large" />
          </Stack>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Standard
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            weight=400, fill=0, grade=0
          </Typography>
          <Stack direction="row" spacing={2}>
            <MaterialSymbol icon="home" weight={400} fill={0} grade={0} size="large" />
            <MaterialSymbol icon="star" weight={400} fill={0} grade={0} size="large" />
            <MaterialSymbol icon="favorite" weight={400} fill={0} grade={0} size="large" />
          </Stack>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Bold & Filled
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            weight=700, fill=1, grade=0
          </Typography>
          <Stack direction="row" spacing={2}>
            <MaterialSymbol icon="home" weight={700} fill={1} grade={0} size="large" />
            <MaterialSymbol icon="star" weight={700} fill={1} grade={0} size="large" />
            <MaterialSymbol icon="favorite" weight={700} fill={1} grade={0} size="large" />
          </Stack>
        </Box>
      </Stack>
    </Paper>
}`,...u.parameters?.docs?.source},description:{story:"Comparison with different configurations",...u.parameters?.docs?.description}}};const A=["Default","Playground","AllSizes","FillVariants","WeightVariants","GradeVariants","CommonIcons","MRSDefaultStyle","ColorVariants","ClickableIcons","AccessibilityExamples","ConfigurationComparison"];export{x as AccessibilityExamples,c as AllSizes,y as ClickableIcons,h as ColorVariants,g as CommonIcons,u as ConfigurationComparison,n as Default,l as FillVariants,p as GradeVariants,m as MRSDefaultStyle,s as Playground,d as WeightVariants,A as __namedExportsOrder,L as default};
