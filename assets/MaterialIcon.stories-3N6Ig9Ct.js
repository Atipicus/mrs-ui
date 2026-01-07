import{R as H,j as e}from"./iframe-D1RbjC5Q.js";import{I as O}from"./Icon-DlrVc0o_.js";import{M as l}from"./MaterialSymbol-Bz3wm6qN.js";import{T as a}from"./Typography-Bs4iIcdt.js";import{S as r}from"./Stack-DUvBP7K6.js";import{B as D}from"./Box-UhoF91Mg.js";import{G as _}from"./Grid-DSMO_r7h.js";import{P as i}from"./Paper-CCQRCbpX.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BHji7iGl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./styled-BOMv-r7W.js";import"./useThemeProps-BF4rPfby.js";import"./useTheme-OtGzbA5G.js";const K={filled:"material-icons",outlined:"material-icons-outlined",rounded:"material-icons-round","two-tone":"material-icons-two-tone",sharp:"material-icons-sharp"},Z={small:20,medium:24,large:36},n=H.forwardRef(({icon:o,variant:t="filled",size:c="medium",color:R,className:F="",sx:L,ariaLabel:P,ariaHidden:V=!1,onClick:G,title:E,...U},W)=>{const q=K[t];let s;c==="inherit"?s="inherit":typeof c=="number"?s=c:s=Z[c];const N=!!G;return e.jsx(O,{ref:W,baseClassName:q,className:F,"aria-label":P,"aria-hidden":V,role:P&&!V?"img":void 0,onClick:G,title:E,sx:{fontSize:typeof s=="number"?`${s}px`:s,color:R||"inherit",userSelect:"none",cursor:N?"pointer":"inherit",...N&&{transition:"opacity 0.2s ease-in-out","&:hover":{opacity:.7},"&:active":{opacity:.5}},...L},...U,children:o})});n.displayName="MaterialIcon";n.__docgenInfo={description:`MaterialIcon Component

Renders icons from Google's Material Icons library using font technology.
Supports 5 official Material Design theme variants.

**Available Variants:**
- **Filled** (default): Solid, filled icons
- **Outlined**: Hollow icons with strokes
- **Rounded**: Softer appearance with rounded corners
- **Two Tone**: Dual-color design
- **Sharp**: Angular with sharp corners

**When to Use:**
- Need specific Material Design icon variants (outlined, rounded, etc.)
- Working with designs that specify Material Icons font
- Need font-based icon rendering

**Alternatives:**
- Use \`MaterialSymbol\` for variable font with customizable weight/fill/grade
- Use \`Icon\` with SVG imports for best performance and tree-shaking

@example
Basic usage
\`\`\`tsx
<MaterialIcon icon="home" />
\`\`\`

@example
With variant
\`\`\`tsx
<MaterialIcon icon="favorite" variant="outlined" />
<MaterialIcon icon="settings" variant="rounded" />
\`\`\`

@example
With size and color
\`\`\`tsx
<MaterialIcon
  icon="delete"
  size="large"
  color="error.main"
/>
\`\`\`

@example
Clickable icon with accessibility
\`\`\`tsx
<MaterialIcon
  icon="close"
  onClick={() => handleClose()}
  ariaLabel="Close dialog"
/>
\`\`\`

@example
Custom size
\`\`\`tsx
<MaterialIcon icon="star" size={48} />
\`\`\``,methods:[],displayName:"MaterialIcon",props:{icon:{required:!0,tsType:{name:"string"},description:`Icon name from Material Icons library
Use snake_case format (e.g., "home", "check_circle", "arrow_forward")

Browse available icons at: https://fonts.google.com/icons

@example "add_circle"
@example "delete"
@example "settings"
@example "favorite"
@example "home"`},variant:{required:!1,tsType:{name:"union",raw:`| 'filled'
| 'outlined'
| 'rounded'
| 'two-tone'
| 'sharp'`,elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'two-tone'"},{name:"literal",value:"'sharp'"}]},description:`Material Icons theme variant

- **filled**: Default filled style (solid icons)
- **outlined**: Outlined style (hollow icons with strokes)
- **rounded**: Rounded style (softer, rounded corners)
- **two-tone**: Two-tone style (dual-color icons)
- **sharp**: Sharp style (angular, sharp corners)

@default "filled"
@see https://fonts.google.com/icons for variant previews`,defaultValue:{value:"'filled'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'inherit' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'inherit'"},{name:"number"}]},description:`Icon size

- **small**: 20px
- **medium**: 24px (default)
- **large**: 36px
- **inherit**: Inherits size from parent element
- **number**: Custom size in pixels

@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:`Color - can be any valid CSS color or MUI theme path

Supports:
- CSS color names: "red", "blue"
- Hex colors: "#00686f"
- RGB/RGBA: "rgb(0, 104, 111)"
- Theme paths: "primary.main", "error.main", "text.secondary"

@example "red"
@example "#00686f"
@example "primary.main"
@example "error.main"`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes to apply to the icon",defaultValue:{value:"''",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:`MUI sx prop for advanced custom styling

@example { color: 'primary.main', fontSize: 32 }
@see https://mui.com/system/getting-started/the-sx-prop/`},ariaLabel:{required:!1,tsType:{name:"string"},description:`ARIA label for accessibility

Recommended for icon-only buttons or when the icon conveys meaning
that isn't obvious from surrounding context.

@example "Close dialog"
@example "Delete item"
@example "Settings menu"`},ariaHidden:{required:!1,tsType:{name:"boolean"},description:`ARIA hidden - hides icon from screen readers

Use when the icon is purely decorative and doesn't convey
meaningful information to users.

@default false`,defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},name:"event"}],return:{name:"void"}}},description:`Click handler - makes the icon clickable

When provided, the icon will display a pointer cursor and
hover/active states.

@example (event) => console.log('Icon clicked')`},title:{required:!1,tsType:{name:"string"},description:"Optional title for additional accessibility context"}}};const ce={title:"Atoms/MaterialIcon",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
# MaterialIcon Component

Font-based Material Icons component with support for 5 official Material Design theme variants.

## Features
- **5 Theme Variants**: Filled, Outlined, Rounded, Two Tone, Sharp
- **2,100+ Icons**: Full Material Icons library
- **Font-based**: ~100KB for all variants
- **Flexible Sizing**: Small, medium, large, inherit, or custom pixels
- **Full Customization**: Colors, sizes, accessibility

## When to Use
- Need specific Material Design icon variants (outlined, rounded, etc.)
- Working with designs that specify Material Icons font
- Need font-based icon rendering

## Alternatives
- **MaterialSymbol**: Variable font with customizable weight/fill/grade
- **Icon (SVG)**: Best performance with tree-shaking

Browse icons: [fonts.google.com/icons](https://fonts.google.com/icons)
        `}}},argTypes:{icon:{control:"text",description:"Icon name from Material Icons library",table:{type:{summary:"string"}}},variant:{control:"select",options:["filled","outlined","rounded","two-tone","sharp"],description:"Material Icons theme variant",table:{type:{summary:"filled | outlined | rounded | two-tone | sharp"},defaultValue:{summary:"filled"}}},size:{control:"select",options:["small","medium","large","inherit"],description:"Icon size",table:{type:{summary:"small | medium | large | inherit | number"},defaultValue:{summary:"medium"}}},color:{control:"text",description:"Icon color (CSS color or theme path)",table:{type:{summary:"string"}}}}},d={args:{icon:"home"}},p={args:{icon:"favorite",variant:"outlined"}},m={args:{icon:"star",variant:"filled"}},g={args:{icon:"star",variant:"outlined"}},u={args:{icon:"star",variant:"rounded"}},h={args:{icon:"star",variant:"two-tone"}},y={args:{icon:"star",variant:"sharp"}},x={args:{icon:"add_circle",size:"small"}},v={args:{icon:"add_circle",size:"medium"}},f={args:{icon:"add_circle",size:"large"}},b={args:{icon:"add_circle",size:48}},S={render:o=>e.jsxs(a,{variant:"h2",children:[e.jsx(n,{...o})," Welcome Home"]}),args:{icon:"home",size:"inherit"}},I={args:{icon:"favorite",color:"primary.main",size:"large"}},w={args:{icon:"error",color:"error.main",size:"large"}},T={args:{icon:"check_circle",color:"success.main",size:"large"}},z={args:{icon:"palette",color:"#9C27B0",size:"large"}},j={args:{icon:"delete",onClick:()=>alert("Icon clicked!"),ariaLabel:"Delete item",size:"large"}},M={render:()=>e.jsxs(r,{spacing:4,children:[e.jsxs(D,{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"All Material Icons Variants"}),e.jsx(a,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:'Using icon: "favorite"'})]}),e.jsx(_,{container:!0,spacing:3,children:[{variant:"filled",label:"Filled (Default)"},{variant:"outlined",label:"Outlined"},{variant:"rounded",label:"Rounded"},{variant:"two-tone",label:"Two Tone"},{variant:"sharp",label:"Sharp"}].map(({variant:o,label:t})=>e.jsx(_,{xs:12,sm:6,md:2.4,children:e.jsxs(i,{elevation:1,sx:{p:3,display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[e.jsx(n,{icon:"favorite",variant:o,size:"large",color:"primary.main"}),e.jsx(a,{variant:"caption",textAlign:"center",children:t})]})},o))})]})},k={render:()=>e.jsxs(r,{spacing:4,children:[e.jsx(a,{variant:"h6",children:"All Icon Sizes"}),e.jsx(r,{direction:"row",spacing:4,alignItems:"center",children:[{size:"small",label:"Small (20px)"},{size:"medium",label:"Medium (24px)"},{size:"large",label:"Large (36px)"},{size:48,label:"Custom (48px)"}].map(({size:o,label:t})=>e.jsxs(r,{alignItems:"center",spacing:1,children:[e.jsx(n,{icon:"star",size:o,color:"primary.main"}),e.jsx(a,{variant:"caption",children:t})]},t))})]})},C={render:()=>e.jsxs(r,{spacing:3,children:[e.jsx(a,{variant:"h6",children:"Common Material Icons"}),e.jsx(_,{container:!0,spacing:2,children:["home","favorite","settings","delete","add","search","person","star","check_circle","error","info","warning","arrow_forward","arrow_back","close","menu"].map(o=>e.jsx(_,{xs:6,sm:4,md:3,children:e.jsxs(i,{elevation:0,sx:{p:2,display:"flex",flexDirection:"column",alignItems:"center",gap:1,border:"1px solid",borderColor:"divider","&:hover":{borderColor:"primary.main",backgroundColor:"action.hover"}},children:[e.jsx(n,{icon:o,size:"large"}),e.jsx(a,{variant:"caption",textAlign:"center",children:o})]})},o))})]})},B={render:()=>e.jsxs(r,{spacing:6,children:[e.jsxs(D,{children:[e.jsx(a,{variant:"h5",gutterBottom:!0,children:"Icon System Comparison"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Choose the right icon system for your needs"})]}),e.jsxs(r,{spacing:2,children:[e.jsxs(D,{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"1. MaterialIcon (Font-based)"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"5 variants, font-based, ~100KB total"})]}),e.jsxs(i,{elevation:1,sx:{p:3},children:[e.jsxs(r,{direction:"row",spacing:3,alignItems:"center",children:[e.jsx(n,{icon:"home",variant:"filled",size:"large"}),e.jsx(n,{icon:"home",variant:"outlined",size:"large"}),e.jsx(n,{icon:"home",variant:"rounded",size:"large"}),e.jsx(n,{icon:"home",variant:"two-tone",size:"large"}),e.jsx(n,{icon:"home",variant:"sharp",size:"large"})]}),e.jsx(a,{variant:"caption",sx:{mt:2,display:"block"},children:"✅ Use when: Need specific Material Design variants"})]})]}),e.jsxs(r,{spacing:2,children:[e.jsxs(D,{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"2. MaterialSymbol (Variable Font)"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Variable font, ~50KB, customizable weight/fill/grade"})]}),e.jsxs(i,{elevation:1,sx:{p:3},children:[e.jsxs(r,{direction:"row",spacing:3,alignItems:"center",children:[e.jsx(l,{icon:"home",fill:1,size:"large"}),e.jsx(l,{icon:"home",fill:0,size:"large"}),e.jsx(l,{icon:"home",fill:0,weight:300,size:"large"}),e.jsx(l,{icon:"home",fill:0,weight:500,size:"large"}),e.jsx(l,{icon:"home",fill:0,weight:700,size:"large"})]}),e.jsx(a,{variant:"caption",sx:{mt:2,display:"block"},children:"✅ Use when: Need variable styling (weight, fill, grade)"})]})]}),e.jsxs(i,{elevation:2,sx:{p:3,bgcolor:"primary.50"},children:[e.jsx(a,{variant:"subtitle1",gutterBottom:!0,fontWeight:600,children:"📋 Decision Guide"}),e.jsxs(r,{spacing:1,component:"ul",sx:{pl:2},children:[e.jsxs(a,{component:"li",variant:"body2",children:[e.jsx("strong",{children:"MaterialIcon"}),": Need outlined, rounded, or sharp variants"]}),e.jsxs(a,{component:"li",variant:"body2",children:[e.jsx("strong",{children:"MaterialSymbol"}),": Need customizable weight, fill, grade"]}),e.jsxs(a,{component:"li",variant:"body2",children:[e.jsx("strong",{children:"Icon (SVG)"}),": Need best performance with tree-shaking"]})]})]})]})},A={render:()=>e.jsxs(r,{spacing:4,children:[e.jsx(a,{variant:"h6",children:"Accessibility Examples"}),e.jsxs(r,{spacing:3,children:[e.jsx(i,{elevation:1,sx:{p:2},children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{variant:"subtitle2",children:"Decorative Icon"}),e.jsxs(r,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(n,{icon:"star",ariaHidden:!0}),e.jsx(a,{variant:"body2",children:"Premium Membership (icon is decorative)"})]})]})}),e.jsx(i,{elevation:1,sx:{p:2},children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{variant:"subtitle2",children:"Semantic Icon with Label"}),e.jsx(n,{icon:"delete",onClick:()=>alert("Delete clicked"),ariaLabel:"Delete item",size:"large",color:"error.main"})]})}),e.jsx(i,{elevation:1,sx:{p:2},children:e.jsxs(r,{spacing:1,children:[e.jsx(a,{variant:"subtitle2",children:"Icon with Title Tooltip"}),e.jsx(n,{icon:"info",title:"More information available",size:"large",color:"info.main"})]})})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    variant: 'outlined'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'star',
    variant: 'filled'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'star',
    variant: 'outlined'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'star',
    variant: 'rounded'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'star',
    variant: 'two-tone'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'star',
    variant: 'sharp'
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'add_circle',
    size: 'small'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'add_circle',
    size: 'medium'
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'add_circle',
    size: 'large'
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'add_circle',
    size: 48
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Typography variant="h2">
      <MaterialIcon {...args} /> Welcome Home
    </Typography>,
  args: {
    icon: 'home',
    size: 'inherit'
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    color: 'primary.main',
    size: 'large'
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'error',
    color: 'error.main',
    size: 'large'
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'check_circle',
    color: 'success.main',
    size: 'large'
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'palette',
    color: '#9C27B0',
    size: 'large'
  }
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'delete',
    onClick: () => alert('Icon clicked!'),
    ariaLabel: 'Delete item',
    size: 'large'
  }
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          All Material Icons Variants
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Using icon: "favorite"
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {[{
        variant: 'filled',
        label: 'Filled (Default)'
      }, {
        variant: 'outlined',
        label: 'Outlined'
      }, {
        variant: 'rounded',
        label: 'Rounded'
      }, {
        variant: 'two-tone',
        label: 'Two Tone'
      }, {
        variant: 'sharp',
        label: 'Sharp'
      }].map(({
        variant,
        label
      }) => <Grid key={variant} xs={12} sm={6} md={2.4}>
            <Paper elevation={1} sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}>
              <MaterialIcon icon="favorite" variant={variant as any} size="large" color="primary.main" />
              <Typography variant="caption" textAlign="center">
                {label}
              </Typography>
            </Paper>
          </Grid>)}
      </Grid>
    </Stack>
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={4}>
      <Typography variant="h6">All Icon Sizes</Typography>

      <Stack direction="row" spacing={4} alignItems="center">
        {[{
        size: 'small',
        label: 'Small (20px)'
      }, {
        size: 'medium',
        label: 'Medium (24px)'
      }, {
        size: 'large',
        label: 'Large (36px)'
      }, {
        size: 48,
        label: 'Custom (48px)'
      }].map(({
        size,
        label
      }) => <Stack key={label} alignItems="center" spacing={1}>
            <MaterialIcon icon="star" size={size as any} color="primary.main" />
            <Typography variant="caption">{label}</Typography>
          </Stack>)}
      </Stack>
    </Stack>
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Typography variant="h6">Common Material Icons</Typography>

      <Grid container spacing={2}>
        {['home', 'favorite', 'settings', 'delete', 'add', 'search', 'person', 'star', 'check_circle', 'error', 'info', 'warning', 'arrow_forward', 'arrow_back', 'close', 'menu'].map(iconName => <Grid key={iconName} xs={6} sm={4} md={3}>
            <Paper elevation={0} sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': {
            borderColor: 'primary.main',
            backgroundColor: 'action.hover'
          }
        }}>
              <MaterialIcon icon={iconName} size="large" />
              <Typography variant="caption" textAlign="center">
                {iconName}
              </Typography>
            </Paper>
          </Grid>)}
      </Grid>
    </Stack>
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={6}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Icon System Comparison
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Choose the right icon system for your needs
        </Typography>
      </Box>

      {/* Material Icons (Font-based) */}
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6" gutterBottom>
            1. MaterialIcon (Font-based)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            5 variants, font-based, ~100KB total
          </Typography>
        </Box>

        <Paper elevation={1} sx={{
        p: 3
      }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon icon="home" variant="filled" size="large" />
            <MaterialIcon icon="home" variant="outlined" size="large" />
            <MaterialIcon icon="home" variant="rounded" size="large" />
            <MaterialIcon icon="home" variant="two-tone" size="large" />
            <MaterialIcon icon="home" variant="sharp" size="large" />
          </Stack>
          <Typography variant="caption" sx={{
          mt: 2,
          display: 'block'
        }}>
            ✅ Use when: Need specific Material Design variants
          </Typography>
        </Paper>
      </Stack>

      {/* Material Symbols (Variable Font) */}
      <Stack spacing={2}>
        <Box>
          <Typography variant="h6" gutterBottom>
            2. MaterialSymbol (Variable Font)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Variable font, ~50KB, customizable weight/fill/grade
          </Typography>
        </Box>

        <Paper elevation={1} sx={{
        p: 3
      }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialSymbol icon="home" fill={1} size="large" />
            <MaterialSymbol icon="home" fill={0} size="large" />
            <MaterialSymbol icon="home" fill={0} weight={300} size="large" />
            <MaterialSymbol icon="home" fill={0} weight={500} size="large" />
            <MaterialSymbol icon="home" fill={0} weight={700} size="large" />
          </Stack>
          <Typography variant="caption" sx={{
          mt: 2,
          display: 'block'
        }}>
            ✅ Use when: Need variable styling (weight, fill, grade)
          </Typography>
        </Paper>
      </Stack>

      {/* Decision Guide */}
      <Paper elevation={2} sx={{
      p: 3,
      bgcolor: 'primary.50'
    }}>
        <Typography variant="subtitle1" gutterBottom fontWeight={600}>
          📋 Decision Guide
        </Typography>
        <Stack spacing={1} component="ul" sx={{
        pl: 2
      }}>
          <Typography component="li" variant="body2">
            <strong>MaterialIcon</strong>: Need outlined, rounded, or sharp
            variants
          </Typography>
          <Typography component="li" variant="body2">
            <strong>MaterialSymbol</strong>: Need customizable weight, fill,
            grade
          </Typography>
          <Typography component="li" variant="body2">
            <strong>Icon (SVG)</strong>: Need best performance with tree-shaking
          </Typography>
        </Stack>
      </Paper>
    </Stack>
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={4}>
      <Typography variant="h6">Accessibility Examples</Typography>

      <Stack spacing={3}>
        {/* Decorative Icon */}
        <Paper elevation={1} sx={{
        p: 2
      }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Decorative Icon</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <MaterialIcon icon="star" ariaHidden={true} />
              <Typography variant="body2">
                Premium Membership (icon is decorative)
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        {/* Semantic Icon with Label */}
        <Paper elevation={1} sx={{
        p: 2
      }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Semantic Icon with Label</Typography>
            <MaterialIcon icon="delete" onClick={() => alert('Delete clicked')} ariaLabel="Delete item" size="large" color="error.main" />
          </Stack>
        </Paper>

        {/* Icon with Title */}
        <Paper elevation={1} sx={{
        p: 2
      }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2">Icon with Title Tooltip</Typography>
            <MaterialIcon icon="info" title="More information available" size="large" color="info.main" />
          </Stack>
        </Paper>
      </Stack>
    </Stack>
}`,...A.parameters?.docs?.source}}};const de=["Default","WithVariant","Filled","Outlined","Rounded","TwoTone","Sharp","Small","Medium","Large","CustomSize","InheritSize","PrimaryColor","ErrorColor","SuccessColor","CustomColor","Clickable","AllVariants","AllSizes","IconGallery","IconSystemComparison","AccessibilityExamples"];export{A as AccessibilityExamples,k as AllSizes,M as AllVariants,j as Clickable,z as CustomColor,b as CustomSize,d as Default,w as ErrorColor,m as Filled,C as IconGallery,B as IconSystemComparison,S as InheritSize,f as Large,v as Medium,g as Outlined,I as PrimaryColor,u as Rounded,y as Sharp,x as Small,T as SuccessColor,h as TwoTone,p as WithVariant,de as __namedExportsOrder,ce as default};
