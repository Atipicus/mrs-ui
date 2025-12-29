import{R as A,j as r}from"./iframe-EaO-VOYi.js";import{M as o,N as c}from"./Notifications-C8Q5EHB_.js";import{B as D,S as I}from"./ShoppingCart-Dq7pX8Xo.js";import{F as S}from"./Favorite-D-PrSuyd.js";import{u as N}from"./useTheme-Cl2A6w3p.js";import{B as n}from"./Box-BbO0uUMs.js";import{S as i}from"./Stack-D3Lu-Yor.js";import{T as t}from"./Typography-CXZsQ2aA.js";import{I as s}from"./IconButton-0VTam0NK.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-DAfLRhUw.js";import"./createSimplePaletteValueFilter-oJ_Eo6YR.js";import"./usePreviousProps-VQEa-ebO.js";import"./useSlot-DVa4qzjr.js";import"./resolveComponentProps-DGjEG4aL.js";import"./useForkRef-C0Tkubmw.js";import"./useThemeProps-ae3Yobn0.js";import"./ButtonBase-B23rqg2z.js";import"./useEventCallback-BI0QvM1y.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BzNe0p_d.js";const e=A.forwardRef(({children:a,color:M="default",variant:w="standard",sx:C,...T},k)=>{const f=N();return r.jsx(D,{ref:k,color:M,variant:w,...T,sx:{"& .MuiBadge-badge":{fontFamily:f.typography.fontFamily,fontWeight:f.typography.fontWeightMedium},...C},children:a})});e.displayName="Badge";e.__docgenInfo={description:`Badge component

Generates a small badge to the top-right of its child(ren).
Typically used to display notification counts or status indicators.

@param props - Badge component props
@returns Badge component`,methods:[],displayName:"Badge",props:{badgeContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content rendered within the badge"},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:`The color of the component
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'dot'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'dot'"}]},description:`The variant to use
@default 'standard'`,defaultValue:{value:"'standard'",computed:!1}},invisible:{required:!1,tsType:{name:"boolean"},description:`If true, the badge is invisible
@default false`},max:{required:!1,tsType:{name:"number"},description:`Max count to show
@default 99`},showZero:{required:!1,tsType:{name:"boolean"},description:`Controls whether the badge is hidden when badgeContent is zero
@default false`},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!0}},{key:"horizontal",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}}]}},description:`The anchor of the badge
@default { vertical: 'top', horizontal: 'right' }`},overlap:{required:!1,tsType:{name:"union",raw:"'rectangular' | 'circular'",elements:[{name:"literal",value:"'rectangular'"},{name:"literal",value:"'circular'"}]},description:`Wrapped shape the badge should overlap
@default 'rectangular'`}},composes:["MuiBadgeProps"]};const rr={title:"Atoms/Badge",component:e,tags:["autodocs"],argTypes:{badgeContent:{control:"number",description:"The content rendered within the badge"},color:{control:"select",options:["default","primary","secondary","error","info","success","warning"],description:"The color of the component"},variant:{control:"select",options:["standard","dot"],description:"The variant to use"},max:{control:"number",description:"Max count to show"},showZero:{control:"boolean",description:"Controls whether the badge is hidden when badgeContent is zero"},invisible:{control:"boolean",description:"If true, the badge is invisible"}}},d={args:{badgeContent:4,color:"primary"},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},l={args:{badgeContent:1,color:"default",variant:"standard"},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},p={args:{badgeContent:1,color:"primary",variant:"standard"},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},g={args:{badgeContent:1,color:"secondary",variant:"standard"},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},x={args:{badgeContent:1,color:"error",variant:"standard"},render:a=>r.jsx(e,{...a,children:r.jsx(c,{})})},m={args:{variant:"dot",color:"primary"},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},u={args:{variant:"dot",color:"secondary"},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},h={args:{variant:"dot",color:"error"},render:a=>r.jsx(e,{...a,children:r.jsx(c,{})})},y={args:{badgeContent:100,color:"error",max:99},render:a=>r.jsx(e,{...a,children:r.jsx(c,{})})},B={args:{badgeContent:0,color:"primary",showZero:!0},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},j={args:{badgeContent:4,color:"primary",invisible:!0},render:a=>r.jsx(e,{...a,children:r.jsx(o,{})})},b={render:()=>r.jsx(n,{sx:{p:4},children:r.jsxs(i,{spacing:4,children:[r.jsxs(n,{children:[r.jsx(t,{variant:"h6",sx:{mb:2},children:"Standard Variant"}),r.jsxs(i,{direction:"row",spacing:4,children:[r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{badgeContent:4,color:"default",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Default"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{badgeContent:4,color:"primary",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Primary"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{badgeContent:4,color:"secondary",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Secondary"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{badgeContent:4,color:"error",children:r.jsx(c,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Error"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{badgeContent:4,color:"info",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Info"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{badgeContent:4,color:"success",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Success"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{badgeContent:4,color:"warning",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Warning"})]})]})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"h6",sx:{mb:2},children:"Dot Variant"}),r.jsxs(i,{direction:"row",spacing:4,children:[r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{variant:"dot",color:"default",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Default"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{variant:"dot",color:"primary",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Primary"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{variant:"dot",color:"secondary",children:r.jsx(o,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Secondary"})]}),r.jsxs(n,{textAlign:"center",children:[r.jsx(e,{variant:"dot",color:"error",children:r.jsx(c,{})}),r.jsx(t,{variant:"caption",display:"block",sx:{mt:1},children:"Error"})]})]})]})]})}),parameters:{layout:"fullscreen"}},v={render:()=>r.jsx(n,{sx:{p:4},children:r.jsxs(i,{spacing:4,children:[r.jsxs(n,{children:[r.jsx(t,{variant:"h6",sx:{mb:2},children:"Notifications"}),r.jsxs(i,{direction:"row",spacing:2,children:[r.jsx(s,{children:r.jsx(e,{badgeContent:5,color:"error",children:r.jsx(c,{})})}),r.jsx(s,{children:r.jsx(e,{badgeContent:12,color:"primary",children:r.jsx(o,{})})}),r.jsx(s,{children:r.jsx(e,{badgeContent:100,max:99,color:"error",children:r.jsx(c,{})})})]})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"h6",sx:{mb:2},children:"Shopping Cart"}),r.jsxs(i,{direction:"row",spacing:2,children:[r.jsx(s,{children:r.jsx(e,{badgeContent:3,color:"primary",children:r.jsx(I,{})})}),r.jsx(s,{children:r.jsx(e,{badgeContent:0,showZero:!0,color:"primary",children:r.jsx(I,{})})})]})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"h6",sx:{mb:2},children:"Status Indicators"}),r.jsxs(i,{direction:"row",spacing:2,children:[r.jsx(s,{children:r.jsx(e,{variant:"dot",color:"success",children:r.jsx(o,{})})}),r.jsx(s,{children:r.jsx(e,{variant:"dot",color:"error",children:r.jsx(o,{})})}),r.jsx(s,{children:r.jsx(e,{variant:"dot",color:"warning",children:r.jsx(o,{})})})]})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"h6",sx:{mb:2},children:"Favorites"}),r.jsxs(i,{direction:"row",spacing:2,children:[r.jsx(s,{children:r.jsx(e,{badgeContent:23,color:"error",children:r.jsx(S,{})})}),r.jsx(s,{children:r.jsx(e,{variant:"dot",color:"error",children:r.jsx(S,{})})})]})]})]})}),parameters:{layout:"fullscreen"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 4,
    color: 'primary'
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...d.parameters?.docs?.source},description:{story:"Default badge with primary color",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 1,
    color: 'default',
    variant: 'standard'
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...l.parameters?.docs?.source},description:{story:"Standard badge with default color",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 1,
    color: 'primary',
    variant: 'standard'
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...p.parameters?.docs?.source},description:{story:"Standard badge with primary color",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 1,
    color: 'secondary',
    variant: 'standard'
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...g.parameters?.docs?.source},description:{story:"Standard badge with secondary color",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 1,
    color: 'error',
    variant: 'standard'
  },
  render: args => <Badge {...args}>
      <NotificationsIcon />
    </Badge>
}`,...x.parameters?.docs?.source},description:{story:"Standard badge with error color (notification)",...x.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    color: 'primary'
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...m.parameters?.docs?.source},description:{story:"Dot badge with primary color",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    color: 'secondary'
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...u.parameters?.docs?.source},description:{story:"Dot badge with secondary color",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    color: 'error'
  },
  render: args => <Badge {...args}>
      <NotificationsIcon />
    </Badge>
}`,...h.parameters?.docs?.source},description:{story:"Dot badge with error color (notification)",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 100,
    color: 'error',
    max: 99
  },
  render: args => <Badge {...args}>
      <NotificationsIcon />
    </Badge>
}`,...y.parameters?.docs?.source},description:{story:"Badge with max count",...y.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 0,
    color: 'primary',
    showZero: true
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...B.parameters?.docs?.source},description:{story:"Badge showing zero",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    badgeContent: 4,
    color: 'primary',
    invisible: true
  },
  render: args => <Badge {...args}>
      <MailIcon />
    </Badge>
}`,...j.parameters?.docs?.source},description:{story:"Invisible badge",...j.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Standard Variant
          </MuiTypography>
          <Stack direction="row" spacing={4}>
            <Box textAlign="center">
              <Badge badgeContent={4} color="default">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Default
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Primary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Secondary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Error
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="info">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Info
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="success">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Success
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="warning">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Warning
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Dot Variant
          </MuiTypography>
          <Stack direction="row" spacing={4}>
            <Box textAlign="center">
              <Badge variant="dot" color="default">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Default
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge variant="dot" color="primary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Primary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge variant="dot" color="secondary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Secondary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge variant="dot" color="error">
                <NotificationsIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{
              mt: 1
            }}>
                Error
              </MuiTypography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...b.parameters?.docs?.source},description:{story:"All colors showcase",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Notifications
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={12} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={100} max={99} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Shopping Cart
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={0} showZero color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Status Indicators
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge variant="dot" color="success">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="warning">
                <MailIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Favorites
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge badgeContent={23} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...v.parameters?.docs?.source},description:{story:"Real-world examples",...v.parameters?.docs?.description}}};const er=["Default","StandardDefault","StandardPrimary","StandardSecondary","StandardError","DotPrimary","DotSecondary","DotError","WithMax","ShowZero","Invisible","AllColors","RealWorldExamples"];export{b as AllColors,d as Default,h as DotError,m as DotPrimary,u as DotSecondary,j as Invisible,v as RealWorldExamples,B as ShowZero,l as StandardDefault,x as StandardError,p as StandardPrimary,g as StandardSecondary,y as WithMax,er as __namedExportsOrder,rr as default};
