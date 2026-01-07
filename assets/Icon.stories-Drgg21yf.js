import{R as b,j as e}from"./iframe-D1RbjC5Q.js";import{M as v}from"./MaterialSymbol-Bz3wm6qN.js";import{I as T}from"./Icon-DlrVc0o_.js";import{T as o}from"./Typography-Bs4iIcdt.js";import{B as n}from"./Box-UhoF91Mg.js";import{S as a}from"./Stack-DUvBP7K6.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-BHji7iGl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./styled-BOMv-r7W.js";import"./useThemeProps-BF4rPfby.js";function N(i){return!i.type||i.type==="svg"}function B(i){return i.type==="font"}const r=b.forwardRef((i,S)=>{const{size:z="medium"}=i,I=z==="inherit"?"inherit":z;if(N(i)){const{icon:f,sx:j,...M}=i;return e.jsx(f,{ref:S,fontSize:I,...M,sx:{color:"inherit",...j}})}if(B(i)){const{iconName:f,sx:j,...M}=i;return e.jsx(T,{ref:S,fontSize:I,...M,sx:{color:"inherit",...j},children:f})}return null});r.displayName="Icon";r.__docgenInfo={description:`Icon component

Displays icons with predefined sizes from the theme.
Supports both SVG icons from @mui/icons-material and Font icons from Material Icons.

@param props - Icon component props
@returns Icon component`,methods:[],displayName:"Icon"};const H={title:"Atoms/Icon",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large","inherit"],description:"Size of the icon"}}},t={args:{type:"font",iconName:"add",size:"medium"}},s={args:{type:"font",iconName:"add",size:"small"}},c={args:{type:"font",iconName:"add",size:"medium"}},p={args:{type:"font",iconName:"add",size:"large"}},m={args:{type:"font",iconName:"add",size:"inherit"},render:i=>e.jsxs(o,{variant:"h3",children:["Text with icon ",e.jsx(r,{...i})]})},d={args:{type:"font",iconName:"favorite",size:"medium"},render:i=>e.jsx(r,{...i,sx:{color:"primary.main"}})},l={args:{type:"font",iconName:"favorite",size:"medium"},render:i=>e.jsx(r,{...i,sx:{color:"secondary.main"}})},y={args:{type:"font",iconName:"delete",size:"medium"},render:i=>e.jsx(r,{...i,sx:{color:"error.main"}})},x={args:{type:"font",iconName:"favorite",size:"medium"},render:i=>e.jsx(r,{...i,sx:{color:"success.main"}})},g={render:()=>e.jsx(n,{sx:{p:4},children:e.jsx(a,{spacing:4,children:e.jsxs(n,{children:[e.jsx(o,{variant:"h6",sx:{mb:2},children:"Font Icons - All Sizes"}),e.jsxs(a,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"add",size:"small"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Small"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"add",size:"medium"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Medium"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"add",size:"large"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Large"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(o,{variant:"h4",children:e.jsx(r,{type:"font",iconName:"add",size:"inherit"})}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Inherit"})]})]})]})})}),parameters:{layout:"fullscreen"}},u={render:()=>e.jsxs(n,{sx:{p:4},children:[e.jsx(o,{variant:"h5",sx:{mb:3},children:"Common Icons (Font Icons)"}),e.jsxs(a,{spacing:4,children:[e.jsxs(n,{children:[e.jsx(o,{variant:"subtitle2",sx:{mb:2},children:"Action Icons"}),e.jsxs(a,{direction:"row",spacing:3,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"add",size:"medium"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Add"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"delete",size:"medium",sx:{color:"error.main"}}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Delete"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"search",size:"medium"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Search"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"settings",size:"medium"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Settings"})]})]})]}),e.jsxs(n,{children:[e.jsx(o,{variant:"subtitle2",sx:{mb:2},children:"Navigation Icons"}),e.jsxs(a,{direction:"row",spacing:3,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"home",size:"medium"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Home"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{type:"font",iconName:"favorite",size:"medium",sx:{color:"error.main"}}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Favorite"})]})]})]}),e.jsxs(n,{children:[e.jsx(o,{variant:"subtitle2",sx:{mb:2},children:"With Text (Inherit Size)"}),e.jsxs(a,{spacing:2,children:[e.jsxs(o,{variant:"h4",children:[e.jsx(r,{type:"font",iconName:"home",size:"inherit"})," Home Page"]}),e.jsxs(o,{variant:"body1",children:[e.jsx(r,{type:"font",iconName:"favorite",size:"inherit",sx:{color:"error.main"}})," This is your favorite"]}),e.jsxs(o,{variant:"caption",children:[e.jsx(r,{type:"font",iconName:"settings",size:"inherit"})," Settings"]})]})]})]})]}),parameters:{layout:"fullscreen"}},h={render:()=>e.jsxs(n,{sx:{p:4},children:[e.jsx(o,{variant:"h5",sx:{mb:3},children:"Recommended: Use MaterialSymbol Directly"}),e.jsx(o,{variant:"body2",sx:{mb:3,color:"text.secondary"},children:"For new implementations, use MaterialSymbol directly instead of wrapping in Icon component."}),e.jsxs(a,{direction:"row",spacing:3,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(v,{icon:"add",size:"small"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Small"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(v,{icon:"add",size:"medium"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Medium"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(v,{icon:"add",size:"large"}),e.jsx(o,{variant:"caption",display:"block",sx:{mt:1},children:"Large"})]})]})]}),parameters:{layout:"fullscreen"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'medium'
  } as any
}`,...t.parameters?.docs?.source},description:{story:"Default icon using MaterialSymbol font (Medium size)",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'small'
  } as any
}`,...s.parameters?.docs?.source},description:{story:"Small font icon",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'medium'
  } as any
}`,...c.parameters?.docs?.source},description:{story:"Medium font icon",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'large'
  } as any
}`,...p.parameters?.docs?.source},description:{story:"Large font icon",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'inherit'
  } as any,
  render: args => <MuiTypography variant="h3">
      Text with icon <Icon {...args} />
    </MuiTypography>
}`,...m.parameters?.docs?.source},description:{story:"Inherit size font icon",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'primary.main'
  }} />
}`,...d.parameters?.docs?.source},description:{story:"Primary color icon",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'secondary.main'
  }} />
}`,...l.parameters?.docs?.source},description:{story:"Secondary color icon",...l.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'delete',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'error.main'
  }} />
}`,...y.parameters?.docs?.source},description:{story:"Error color icon",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'success.main'
  }} />
}`,...x.parameters?.docs?.source},description:{story:"Success color icon",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Font Icons - All Sizes
          </MuiTypography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="small" />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Small
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Medium
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="large" />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Large
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <MuiTypography variant="h4">
                <Icon type="font" iconName="add" size="inherit" />
              </MuiTypography>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Inherit
              </MuiTypography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...g.parameters?.docs?.source},description:{story:"All sizes showcase with font icons",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <MuiTypography variant="h5" sx={{
      mb: 3
    }}>
        Common Icons (Font Icons)
      </MuiTypography>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="subtitle2" sx={{
          mb: 2
        }}>
            Action Icons
          </MuiTypography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Add
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="delete" size="medium" sx={{
              color: 'error.main'
            }} />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Delete
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="search" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Search
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="settings" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Settings
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="subtitle2" sx={{
          mb: 2
        }}>
            Navigation Icons
          </MuiTypography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box textAlign="center">
              <Icon type="font" iconName="home" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Home
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="favorite" size="medium" sx={{
              color: 'error.main'
            }} />
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Favorite
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="subtitle2" sx={{
          mb: 2
        }}>
            With Text (Inherit Size)
          </MuiTypography>
          <Stack spacing={2}>
            <MuiTypography variant="h4">
              <Icon type="font" iconName="home" size="inherit" /> Home Page
            </MuiTypography>
            <MuiTypography variant="body1">
              <Icon type="font" iconName="favorite" size="inherit" sx={{
              color: 'error.main'
            }} /> This is your
              favorite
            </MuiTypography>
            <MuiTypography variant="caption">
              <Icon type="font" iconName="settings" size="inherit" /> Settings
            </MuiTypography>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...u.parameters?.docs?.source},description:{story:"Icon gallery showcase with font icons",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <MuiTypography variant="h5" sx={{
      mb: 3
    }}>
        Recommended: Use MaterialSymbol Directly
      </MuiTypography>
      <MuiTypography variant="body2" sx={{
      mb: 3,
      color: 'text.secondary'
    }}>
        For new implementations, use MaterialSymbol directly instead of wrapping in Icon component.
      </MuiTypography>
      <Stack direction="row" spacing={3} alignItems="center">
        <Box textAlign="center">
          <MaterialSymbol icon="add" size="small" />
          <MuiTypography variant="caption" display="block" sx={{
          mt: 1
        }}>
            Small
          </MuiTypography>
        </Box>
        <Box textAlign="center">
          <MaterialSymbol icon="add" size="medium" />
          <MuiTypography variant="caption" display="block" sx={{
          mt: 1
        }}>
            Medium
          </MuiTypography>
        </Box>
        <Box textAlign="center">
          <MaterialSymbol icon="add" size="large" />
          <MuiTypography variant="caption" display="block" sx={{
          mt: 1
        }}>
            Large
          </MuiTypography>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...h.parameters?.docs?.source},description:{story:"Recommended: Use MaterialSymbol directly",...h.parameters?.docs?.description}}};const _=["Default","SmallFont","MediumFont","LargeFont","InheritFont","PrimaryColor","SecondaryColor","ErrorColor","SuccessColor","AllSizes","IconGallery","RecommendedUsage"];export{g as AllSizes,t as Default,y as ErrorColor,u as IconGallery,m as InheritFont,p as LargeFont,c as MediumFont,d as PrimaryColor,h as RecommendedUsage,l as SecondaryColor,s as SmallFont,x as SuccessColor,_ as __namedExportsOrder,H as default};
