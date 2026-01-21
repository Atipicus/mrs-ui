import{r as F,u as C,j as e,c as I,R}from"./iframe-DWofrwYQ.js";import{M as b}from"./MaterialSymbol-CQ7J3d5W.js";import{g as D,b as P,s as U,c as L,a as E,m as $}from"./memoTheme-CvD85AUt.js";import{c as H}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{T as r}from"./Typography-BMAZ_vyd.js";import{B as n}from"./Box-DsLx4Dsl.js";import{S as p}from"./Stack-D2w6zfey.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-D7k3etPa.js";import"./useThemeProps-D2N2uu2a.js";function _(o){return D("MuiIcon",o)}P("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const G=o=>{const{color:t,fontSize:a,classes:c}=o,s={root:["root",t!=="inherit"&&`color${I(t)}`,`fontSize${I(a)}`]};return E(s,_,c)},O=U("span",{name:"MuiIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.root,a.color!=="inherit"&&t[`color${I(a.color)}`],t[`fontSize${I(a.fontSize)}`]]}})($(({theme:o})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,variants:[{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:o.typography.pxToRem(20)}},{props:{fontSize:"medium"},style:{fontSize:o.typography.pxToRem(24)}},{props:{fontSize:"large"},style:{fontSize:o.typography.pxToRem(36)}},{props:{color:"action"},style:{color:(o.vars||o).palette.action.active}},{props:{color:"disabled"},style:{color:(o.vars||o).palette.action.disabled}},{props:{color:"inherit"},style:{color:void 0}},...Object.entries(o.palette).filter(H()).map(([t])=>({props:{color:t},style:{color:(o.vars||o).palette[t].main}}))]}))),k=F.forwardRef(function(t,a){const c=C({props:t,name:"MuiIcon"}),{baseClassName:s="material-icons",className:l,color:m="inherit",component:T="span",fontSize:B="medium",...A}=c,N={...c,baseClassName:s,color:m,component:T,fontSize:B},w=G(N);return e.jsx(O,{as:T,className:L(s,"notranslate",w.root,l),ownerState:N,"aria-hidden":!0,ref:a,...A})});k.muiName="Icon";function V(o){return!o.type||o.type==="svg"}function W(o){return o.type==="font"}const i=R.forwardRef((o,t)=>{const{size:a="medium"}=o,c=a==="inherit"?"inherit":a;if(V(o)){const{icon:s,sx:l,...m}=o;return e.jsx(s,{ref:t,fontSize:c,...m,sx:{color:"inherit",...l}})}if(W(o)){const{iconName:s,sx:l,...m}=o;return e.jsx(k,{ref:t,fontSize:c,...m,sx:{color:"inherit",...l},children:s})}return null});i.displayName="Icon";i.__docgenInfo={description:`Icon component

Displays icons with predefined sizes from the theme.
Supports both SVG icons from @mui/icons-material and Font icons from Material Icons.

@param props - Icon component props
@returns Icon component`,methods:[],displayName:"Icon"};const ie={title:"Atoms/Icon",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large","inherit"],description:"Size of the icon"}}},d={args:{type:"font",iconName:"add",size:"medium"}},y={args:{type:"font",iconName:"add",size:"small"}},x={args:{type:"font",iconName:"add",size:"medium"}},u={args:{type:"font",iconName:"add",size:"large"}},g={args:{type:"font",iconName:"add",size:"inherit"},render:o=>e.jsxs(r,{variant:"h3",children:["Text with icon ",e.jsx(i,{...o})]})},h={args:{type:"font",iconName:"favorite",size:"medium"},render:o=>e.jsx(i,{...o,sx:{color:"primary.main"}})},f={args:{type:"font",iconName:"favorite",size:"medium"},render:o=>e.jsx(i,{...o,sx:{color:"secondary.main"}})},S={args:{type:"font",iconName:"delete",size:"medium"},render:o=>e.jsx(i,{...o,sx:{color:"error.main"}})},z={args:{type:"font",iconName:"favorite",size:"medium"},render:o=>e.jsx(i,{...o,sx:{color:"success.main"}})},j={render:()=>e.jsx(n,{sx:{p:4},children:e.jsx(p,{spacing:4,children:e.jsxs(n,{children:[e.jsx(r,{variant:"h6",sx:{mb:2},children:"Font Icons - All Sizes"}),e.jsxs(p,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"add",size:"small"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Small"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"add",size:"medium"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Medium"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"add",size:"large"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Large"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(r,{variant:"h4",children:e.jsx(i,{type:"font",iconName:"add",size:"inherit"})}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Inherit"})]})]})]})})}),parameters:{layout:"fullscreen"}},v={render:()=>e.jsxs(n,{sx:{p:4},children:[e.jsx(r,{variant:"h5",sx:{mb:3},children:"Common Icons (Font Icons)"}),e.jsxs(p,{spacing:4,children:[e.jsxs(n,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:2},children:"Action Icons"}),e.jsxs(p,{direction:"row",spacing:3,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"add",size:"medium"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Add"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"delete",size:"medium",sx:{color:"error.main"}}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Delete"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"search",size:"medium"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Search"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"settings",size:"medium"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Settings"})]})]})]}),e.jsxs(n,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:2},children:"Navigation Icons"}),e.jsxs(p,{direction:"row",spacing:3,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"home",size:"medium"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Home"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(i,{type:"font",iconName:"favorite",size:"medium",sx:{color:"error.main"}}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Favorite"})]})]})]}),e.jsxs(n,{children:[e.jsx(r,{variant:"subtitle2",sx:{mb:2},children:"With Text (Inherit Size)"}),e.jsxs(p,{spacing:2,children:[e.jsxs(r,{variant:"h4",children:[e.jsx(i,{type:"font",iconName:"home",size:"inherit"})," Home Page"]}),e.jsxs(r,{variant:"body1",children:[e.jsx(i,{type:"font",iconName:"favorite",size:"inherit",sx:{color:"error.main"}})," ","This is your favorite"]}),e.jsxs(r,{variant:"caption",children:[e.jsx(i,{type:"font",iconName:"settings",size:"inherit"})," Settings"]})]})]})]})]}),parameters:{layout:"fullscreen"}},M={render:()=>e.jsxs(n,{sx:{p:4},children:[e.jsx(r,{variant:"h5",sx:{mb:3},children:"Recommended: Use MaterialSymbol Directly"}),e.jsx(r,{variant:"body2",sx:{mb:3,color:"text.secondary"},children:"For new implementations, use MaterialSymbol directly instead of wrapping in Icon component."}),e.jsxs(p,{direction:"row",spacing:3,alignItems:"center",children:[e.jsxs(n,{textAlign:"center",children:[e.jsx(b,{icon:"add",size:"small"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Small"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(b,{icon:"add",size:"medium"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Medium"})]}),e.jsxs(n,{textAlign:"center",children:[e.jsx(b,{icon:"add",size:"large"}),e.jsx(r,{variant:"caption",display:"block",sx:{mt:1},children:"Large"})]})]})]}),parameters:{layout:"fullscreen"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'medium'
  } as any
}`,...d.parameters?.docs?.source},description:{story:"Default icon using MaterialSymbol font (Medium size)",...d.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'small'
  } as any
}`,...y.parameters?.docs?.source},description:{story:"Small font icon",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'medium'
  } as any
}`,...x.parameters?.docs?.source},description:{story:"Medium font icon",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'large'
  } as any
}`,...u.parameters?.docs?.source},description:{story:"Large font icon",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'add',
    size: 'inherit'
  } as any,
  render: args => <MuiTypography variant="h3">
      Text with icon <Icon {...args} />
    </MuiTypography>
}`,...g.parameters?.docs?.source},description:{story:"Inherit size font icon",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'primary.main'
  }} />
}`,...h.parameters?.docs?.source},description:{story:"Primary color icon",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'secondary.main'
  }} />
}`,...f.parameters?.docs?.source},description:{story:"Secondary color icon",...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'delete',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'error.main'
  }} />
}`,...S.parameters?.docs?.source},description:{story:"Error color icon",...S.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium'
  } as any,
  render: args => <Icon {...args} sx={{
    color: 'success.main'
  }} />
}`,...z.parameters?.docs?.source},description:{story:"Success color icon",...z.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"All sizes showcase with font icons",...j.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
            }} />{' '}
              This is your favorite
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
}`,...v.parameters?.docs?.source},description:{story:"Icon gallery showcase with font icons",...v.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Recommended: Use MaterialSymbol directly",...M.parameters?.docs?.description}}};const ne=["Default","SmallFont","MediumFont","LargeFont","InheritFont","PrimaryColor","SecondaryColor","ErrorColor","SuccessColor","AllSizes","IconGallery","RecommendedUsage"];export{j as AllSizes,d as Default,S as ErrorColor,v as IconGallery,g as InheritFont,u as LargeFont,x as MediumFont,h as PrimaryColor,M as RecommendedUsage,f as SecondaryColor,y as SmallFont,z as SuccessColor,ne as __namedExportsOrder,ie as default};
