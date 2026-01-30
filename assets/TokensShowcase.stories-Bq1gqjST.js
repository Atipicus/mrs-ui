import{j as e}from"./iframe-BLPmWLdH.js";import{c as u,t as r,s as v,a as T}from"./tokens-CENFdYCN.js";import{u as j}from"./useTheme-mA5jLGnb.js";import{B as o}from"./Box-p6I_ECHL.js";import{T as n}from"./Typography-C56izW4I.js";import{G as a}from"./Grid-CqDBAfGD.js";import{S as h}from"./Stack-CdWmLSiL.js";import{P as s}from"./Paper-BHVlsmxd.js";import{C as k}from"./Chip-DPzoNco7.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DEYF-N-o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useThemeProps-CQqoIt60.js";import"./createSvgIcon-4EnE_moI.js";import"./useForkRef-CM0N7afC.js";import"./ButtonBase-tUTgC9_p.js";import"./useEventCallback-DJLENsCi.js";import"./isFocusVisible-B8k4qzLc.js";const L={title:"Theme/Design Tokens",parameters:{layout:"padded",docs:{description:{component:"Complete showcase of MRS Design System tokens including colors, typography, shapes, and spacing."}}}},y={render:()=>{const p=j(),d=p.palette.mode==="dark",c=d?u.dark:u.light;return e.jsxs(o,{children:[e.jsxs(n,{variant:"h4",mb:3,children:["Color Tokens (",d?"Dark":"Light"," Mode)"]}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(n,{variant:"h6",mb:2,children:"Primary"}),e.jsx(h,{spacing:1,children:Object.entries(c.primary||{}).map(([i,t])=>e.jsxs(o,{display:"flex",alignItems:"center",gap:2,children:[e.jsx(o,{sx:{width:60,height:60,backgroundColor:t,borderRadius:1,border:`2px solid ${p.palette.divider}`}}),e.jsxs(o,{children:[e.jsx(n,{variant:"body2",fontWeight:"bold",children:i}),e.jsx(n,{variant:"caption",color:"text.secondary",children:t})]})]},i))})]}),e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(n,{variant:"h6",mb:2,children:"Secondary"}),e.jsx(h,{spacing:1,children:Object.entries(c.secondary||{}).map(([i,t])=>e.jsxs(o,{display:"flex",alignItems:"center",gap:2,children:[e.jsx(o,{sx:{width:60,height:60,backgroundColor:t,borderRadius:1,border:`2px solid ${p.palette.divider}`}}),e.jsxs(o,{children:[e.jsx(n,{variant:"body2",fontWeight:"bold",children:i}),e.jsx(n,{variant:"caption",color:"text.secondary",children:t})]})]},i))})]}),e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(n,{variant:"h6",mb:2,children:"Status Colors"}),e.jsx(h,{spacing:1,children:["error","warning","info","success"].map(i=>{const t=c[i],b=t&&typeof t=="object"&&"main"in t?t.main:null;return b?e.jsxs(o,{display:"flex",alignItems:"center",gap:2,children:[e.jsx(o,{sx:{width:60,height:60,backgroundColor:b,borderRadius:1,border:`2px solid ${p.palette.divider}`}}),e.jsxs(o,{children:[e.jsx(n,{variant:"body2",fontWeight:"bold",children:i}),e.jsx(n,{variant:"caption",color:"text.secondary",children:b})]})]},i):null})})]}),e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(n,{variant:"h6",mb:2,children:"Background"}),e.jsx(h,{spacing:1,children:Object.entries(c.background||{}).map(([i,t])=>e.jsxs(o,{display:"flex",alignItems:"center",gap:2,children:[e.jsx(o,{sx:{width:60,height:60,backgroundColor:t,borderRadius:1,border:`2px solid ${p.palette.divider}`}}),e.jsxs(o,{children:[e.jsx(n,{variant:"body2",fontWeight:"bold",children:i}),e.jsx(n,{variant:"caption",color:"text.secondary",children:t})]})]},i))})]}),e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(n,{variant:"h6",mb:2,children:"Text Colors"}),e.jsx(h,{spacing:1,children:Object.entries(c.text||{}).map(([i,t])=>e.jsxs(o,{display:"flex",alignItems:"center",gap:2,children:[e.jsx(o,{sx:{width:60,height:60,backgroundColor:t,borderRadius:1,border:`2px solid ${p.palette.divider}`}}),e.jsxs(o,{children:[e.jsx(n,{variant:"body2",fontWeight:"bold",children:i}),e.jsx(n,{variant:"caption",color:"text.secondary",children:t})]})]},i))})]}),e.jsxs(a,{item:!0,xs:12,sm:6,md:4,children:[e.jsx(n,{variant:"h6",mb:2,children:"Action Colors"}),e.jsx(h,{spacing:1,children:Object.entries(c.action||{}).map(([i,t])=>e.jsxs(o,{display:"flex",alignItems:"center",gap:2,children:[e.jsx(o,{sx:{width:60,height:60,backgroundColor:t,borderRadius:1,border:`2px solid ${p.palette.divider}`}}),e.jsxs(o,{children:[e.jsx(n,{variant:"body2",fontWeight:"bold",children:i}),e.jsx(n,{variant:"caption",color:"text.secondary",children:t})]})]},i))})]})]})]})}},l={render:()=>e.jsxs(o,{children:[e.jsx(n,{variant:"h4",mb:3,children:"Typography Tokens"}),e.jsxs(a,{container:!0,spacing:2,mb:4,children:[e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"h1",children:"Heading 1 (h1)"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.h1?.fontWeight," | Size: ",r.h1?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"h2",children:"Heading 2 (h2)"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.h2?.fontWeight," | Size: ",r.h2?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"h3",children:"Heading 3 (h3)"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.h3?.fontWeight," | Size: ",r.h3?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"h4",children:"Heading 4 (h4)"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.h4?.fontWeight," | Size: ",r.h4?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"h5",children:"Heading 5 (h5)"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.h5?.fontWeight," | Size: ",r.h5?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"h6",children:"Heading 6 (h6)"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.h6?.fontWeight," | Size: ",r.h6?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"body1",children:"Body 1 - The quick brown fox jumps over the lazy dog"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.body1?.fontWeight," | Size: ",r.body1?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"body2",children:"Body 2 - The quick brown fox jumps over the lazy dog"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.body2?.fontWeight," | Size: ",r.body2?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"button",children:"Button Text"}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:["Font Weight: ",r.button?.fontWeight," | Size: ",r.button?.fontSize]})]})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(s,{sx:{p:3},children:[e.jsx(n,{variant:"caption",children:"Caption text for small labels"}),e.jsxs(n,{variant:"caption",color:"text.secondary",display:"block",children:["Font Weight: ",r.caption?.fontWeight," | Size: ",r.caption?.fontSize]})]})})]})]})},x={render:()=>e.jsxs(o,{children:[e.jsx(n,{variant:"h4",mb:3,children:"Shape Tokens (Border Radius)"}),e.jsx(a,{container:!0,spacing:3,children:Object.entries(v).map(([p,d])=>e.jsx(a,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsxs(s,{sx:{p:2,textAlign:"center"},children:[e.jsx(o,{sx:{width:100,height:100,backgroundColor:"primary.main",borderRadius:d,margin:"0 auto 16px"}}),e.jsx(n,{variant:"body2",fontWeight:"bold",children:p}),e.jsxs(n,{variant:"caption",color:"text.secondary",children:[d,"px"]})]})},p))})]})},g={render:()=>e.jsxs(o,{children:[e.jsx(n,{variant:"h4",mb:3,children:"Spacing Scale (8px base grid)"}),e.jsxs(o,{mb:3,children:[e.jsx(n,{variant:"body1",mb:2,children:"Spacing values in pixels:"}),e.jsx(h,{direction:"row",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:T.map((p,d)=>e.jsx(k,{label:`${d} × 8px = ${p}px`,variant:"outlined",size:"small"},d))})]}),e.jsx(n,{variant:"h6",mb:2,children:"Visual Representation:"}),e.jsx(o,{children:T.slice(0,8).map((p,d)=>e.jsxs(o,{mb:2,children:[e.jsxs(n,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:1},children:["Index ",d," = ",p,"px"]}),e.jsx(o,{sx:{width:p,height:20,backgroundColor:"primary.main",borderRadius:1}})]},d))})]})},m={render:()=>e.jsxs(o,{children:[e.jsx(n,{variant:"h4",mb:3,children:"Component Tokens Usage"}),e.jsx(n,{variant:"h6",mb:2,children:"How tokens are applied to components:"}),e.jsx(o,{sx:{p:2,backgroundColor:"background.paper",borderRadius:2,mb:3,fontFamily:"monospace",fontSize:"0.875rem",overflow:"auto"},component:s,children:e.jsx("pre",{children:`// Button Example - src/theme/theme.ts
MuiButton: {
  styleOverrides: {
    root: {
      ...styleCompositions.button.base(),  // Uses border-radius, font-weight, etc.
      textTransform: 'none',
    },
    sizeSmall: styleCompositions.button.sizes.small,
    sizeMedium: styleCompositions.button.sizes.medium,
    sizeLarge: styleCompositions.button.sizes.large,
  },
}

// Result: All buttons automatically get:
// - Border radius: 8px (shapeTokens.md)
// - Font weight: 600 (typography.fontWeightSemiBold)
// - Consistent sizing and padding across variants
`})}),e.jsx(n,{variant:"h6",mb:2,children:"Key Takeaways:"}),e.jsxs(h,{spacing:2,children:[e.jsxs(s,{sx:{p:2},children:[e.jsx(n,{variant:"body2",fontWeight:"bold",mb:1,children:"✓ Single Source of Truth"}),e.jsx(n,{variant:"body2",children:"All tokens are defined in one place (tokens-import.ts) and applied through theme.ts"})]}),e.jsxs(s,{sx:{p:2},children:[e.jsx(n,{variant:"body2",fontWeight:"bold",mb:1,children:"✓ Reusable Compositions"}),e.jsx(n,{variant:"body2",children:"styleCompositions.ts provides reusable style patterns to reduce duplication"})]}),e.jsxs(s,{sx:{p:2},children:[e.jsx(n,{variant:"body2",fontWeight:"bold",mb:1,children:"✓ Automatic Dark Mode"}),e.jsx(n,{variant:"body2",children:"Light and dark mode tokens are automatically applied based on theme.palette.mode"})]}),e.jsxs(s,{sx:{p:2},children:[e.jsx(n,{variant:"body2",fontWeight:"bold",mb:1,children:"✓ Type Safe"}),e.jsx(n,{variant:"body2",children:"All tokens are TypeScript-defined for compile-time validation"})]})]})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const modeColors = isDark ? colors.dark : colors.light;
    return <Box>
        <Typography variant="h4" mb={3}>
          Color Tokens ({isDark ? 'Dark' : 'Light'} Mode)
        </Typography>

        <Grid container spacing={3}>
          {/* Primary Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Primary</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.primary || {}).map(([key, value]) => <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box sx={{
                width: 60,
                height: 60,
                backgroundColor: value as string,
                borderRadius: 1,
                border: \`2px solid \${theme.palette.divider}\`
              }} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>)}
            </Stack>
          </Grid>

          {/* Secondary Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Secondary</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.secondary || {}).map(([key, value]) => <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box sx={{
                width: 60,
                height: 60,
                backgroundColor: value as string,
                borderRadius: 1,
                border: \`2px solid \${theme.palette.divider}\`
              }} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>)}
            </Stack>
          </Grid>

          {/* Status Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Status Colors</Typography>
            <Stack spacing={1}>
              {['error', 'warning', 'info', 'success'].map(status => {
              const colorObj = modeColors[status as keyof typeof modeColors];
              const main = colorObj && typeof colorObj === 'object' && 'main' in colorObj ? (colorObj as any).main : null;
              return main ? <Box key={status} display="flex" alignItems="center" gap={2}>
                    <Box sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: main,
                  borderRadius: 1,
                  border: \`2px solid \${theme.palette.divider}\`
                }} />
                    <Box>
                      <Typography variant="body2" fontWeight="bold">{status}</Typography>
                      <Typography variant="caption" color="text.secondary">{main}</Typography>
                    </Box>
                  </Box> : null;
            })}
            </Stack>
          </Grid>

          {/* Background & Text */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Background</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.background || {}).map(([key, value]) => <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box sx={{
                width: 60,
                height: 60,
                backgroundColor: value as string,
                borderRadius: 1,
                border: \`2px solid \${theme.palette.divider}\`
              }} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>)}
            </Stack>
          </Grid>

          {/* Text Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Text Colors</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.text || {}).map(([key, value]) => <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box sx={{
                width: 60,
                height: 60,
                backgroundColor: value as string,
                borderRadius: 1,
                border: \`2px solid \${theme.palette.divider}\`
              }} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>)}
            </Stack>
          </Grid>

          {/* Action Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Action Colors</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.action || {}).map(([key, value]) => <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box sx={{
                width: 60,
                height: 60,
                backgroundColor: value as string,
                borderRadius: 1,
                border: \`2px solid \${theme.palette.divider}\`
              }} />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>)}
            </Stack>
          </Grid>
        </Grid>
      </Box>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Color tokens in both light and dark modes",...y.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography variant="h4" mb={3}>
        Typography Tokens
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="h1">Heading 1 (h1)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h1?.fontWeight} | Size: {typography.h1?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="h2">Heading 2 (h2)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h2?.fontWeight} | Size: {typography.h2?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="h3">Heading 3 (h3)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h3?.fontWeight} | Size: {typography.h3?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="h4">Heading 4 (h4)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h4?.fontWeight} | Size: {typography.h4?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="h5">Heading 5 (h5)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h5?.fontWeight} | Size: {typography.h5?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="h6">Heading 6 (h6)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h6?.fontWeight} | Size: {typography.h6?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="body1">Body 1 - The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.body1?.fontWeight} | Size: {typography.body1?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="body2">Body 2 - The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.body2?.fontWeight} | Size: {typography.body2?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="button">Button Text</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.button?.fontWeight} | Size: {typography.button?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
          p: 3
        }}>
            <Typography variant="caption">Caption text for small labels</Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              Font Weight: {typography.caption?.fontWeight} | Size: {typography.caption?.fontSize}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
}`,...l.parameters?.docs?.source},description:{story:"Typography variants and scales",...l.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography variant="h4" mb={3}>
        Shape Tokens (Border Radius)
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(shape).map(([key, value]) => <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <Paper sx={{
          p: 2,
          textAlign: 'center'
        }}>
              <Box sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            borderRadius: value as number,
            margin: '0 auto 16px'
          }} />
              <Typography variant="body2" fontWeight="bold">
                {key}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {value}px
              </Typography>
            </Paper>
          </Grid>)}
      </Grid>
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"Shape and border radius tokens",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography variant="h4" mb={3}>
        Spacing Scale (8px base grid)
      </Typography>

      <Box mb={3}>
        <Typography variant="body1" mb={2}>
          Spacing values in pixels:
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {spacing.map((value, index) => <Chip key={index} label={\`\${index} × 8px = \${value}px\`} variant="outlined" size="small" />)}
        </Stack>
      </Box>

      <Typography variant="h6" mb={2}>
        Visual Representation:
      </Typography>

      <Box>
        {spacing.slice(0, 8).map((value, index) => <Box key={index} mb={2}>
            <Typography variant="caption" color="text.secondary" sx={{
          display: 'block',
          mb: 1
        }}>
              Index {index} = {value}px
            </Typography>
            <Box sx={{
          width: value,
          height: 20,
          backgroundColor: 'primary.main',
          borderRadius: 1
        }} />
          </Box>)}
      </Box>
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"Spacing scale",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <Typography variant="h4" mb={3}>
        Component Tokens Usage
      </Typography>

      <Typography variant="h6" mb={2}>
        How tokens are applied to components:
      </Typography>

      <Box sx={{
      p: 2,
      backgroundColor: 'background.paper',
      borderRadius: 2,
      mb: 3,
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      overflow: 'auto'
    }} component={Paper}>
        <pre>{\`// Button Example - src/theme/theme.ts
MuiButton: {
  styleOverrides: {
    root: {
      ...styleCompositions.button.base(),  // Uses border-radius, font-weight, etc.
      textTransform: 'none',
    },
    sizeSmall: styleCompositions.button.sizes.small,
    sizeMedium: styleCompositions.button.sizes.medium,
    sizeLarge: styleCompositions.button.sizes.large,
  },
}

// Result: All buttons automatically get:
// - Border radius: 8px (shapeTokens.md)
// - Font weight: 600 (typography.fontWeightSemiBold)
// - Consistent sizing and padding across variants
\`}</pre>
      </Box>

      <Typography variant="h6" mb={2}>
        Key Takeaways:
      </Typography>

      <Stack spacing={2}>
        <Paper sx={{
        p: 2
      }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Single Source of Truth
          </Typography>
          <Typography variant="body2">
            All tokens are defined in one place (tokens-import.ts) and applied through theme.ts
          </Typography>
        </Paper>

        <Paper sx={{
        p: 2
      }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Reusable Compositions
          </Typography>
          <Typography variant="body2">
            styleCompositions.ts provides reusable style patterns to reduce duplication
          </Typography>
        </Paper>

        <Paper sx={{
        p: 2
      }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Automatic Dark Mode
          </Typography>
          <Typography variant="body2">
            Light and dark mode tokens are automatically applied based on theme.palette.mode
          </Typography>
        </Paper>

        <Paper sx={{
        p: 2
      }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Type Safe
          </Typography>
          <Typography variant="body2">
            All tokens are TypeScript-defined for compile-time validation
          </Typography>
        </Paper>
      </Stack>
    </Box>
}`,...m.parameters?.docs?.source},description:{story:"Component tokens usage examples",...m.parameters?.docs?.description}}};const U=["ColorTokens","TypographyTokens","ShapeTokens","SpacingTokens","ComponentTokensUsage"];export{y as ColorTokens,m as ComponentTokensUsage,x as ShapeTokens,g as SpacingTokens,l as TypographyTokens,U as __namedExportsOrder,L as default};
