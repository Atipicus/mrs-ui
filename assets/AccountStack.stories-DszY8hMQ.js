import{j as r}from"./iframe-zeeDxUUo.js";import{M as y}from"./MaterialSymbol-DioViiQf.js";import{A as o,a as A,T as v}from"./Toolbar-Da0Xjuzs.js";import{I as j}from"./IconButton-yk9nOstn.js";import{T as t}from"./Typography-DoSvPq2C.js";import{B as a}from"./Box-CTxZOSIW.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BNcCJ4TC.js";import"./memoTheme-DdwYAhEk.js";import"./Stack-CMEEoCjb.js";import"./Stack-CcurOuc4.js";import"./styled-CCPHBhBF.js";import"./useThemeProps-DBPwOPyu.js";import"./Avatar-L8gzij9q.js";import"./useTheme-BOjxn6IZ.js";import"./createSvgIcon-BC1WyBLu.js";import"./useSlot-c1o1rjQ3.js";import"./resolveComponentProps-D0MAhnil.js";import"./useForkRef-DAPN11UK.js";import"./Badge-DoXJwF78.js";import"./Badge-CnKcowyz.js";import"./usePreviousProps--3Rn5XKG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-ILlJsP_L.js";import"./IconButton-DriAkU7Q.js";import"./ButtonBase-BxiEgOWN.js";import"./useEventCallback-xd_OPibr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DC82JayO.js";import"./Typography-Bhs7JO2Z.js";const $={title:"Atoms/AccountStack",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Account stack component for displaying user information with avatar and badge. Designed for use in AppBar/Toolbar. Uses MRS Design System tokens (Nunito typography, #00686f primary color)."}}},argTypes:{user:{control:"boolean",description:"Show/hide avatar with badge",table:{defaultValue:{summary:"true"}}},userAccountInfo:{control:"boolean",description:"Show/hide user account information text",table:{defaultValue:{summary:"true"}}},notifications:{control:"boolean",description:"Show/hide notification badge on avatar",table:{defaultValue:{summary:"true"}}},userName:{control:"text",description:"User name to display",table:{defaultValue:{summary:"Martin Gómez"}}},userEmail:{control:"text",description:"User email or secondary info",table:{defaultValue:{summary:"mgomez@atipic.us"}}},avatarSrc:{control:"text",description:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"},avatarAlt:{control:"text",description:"Avatar alt text for accessibility",table:{defaultValue:{summary:"User avatar"}}},avatarPosition:{control:"select",options:["left","right"],description:"Position of avatar relative to user info",table:{defaultValue:{summary:"left"}}}}},s={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martin Gómez",userEmail:"mgomez@atipic.us"}},n={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Camila Muñoz",userEmail:"cmunoz@redsalud.cl",avatarSrc:"https://i.pravatar.cc/150?img=1"}},i={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Felipe Taborda",userEmail:"ftaborda@redsalud.cl"}},c={args:{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:5,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl"}},u={args:{user:!0,userAccountInfo:!0,notifications:!1,userName:"Juan Taborda",userEmail:"john.doe@example.com"}},l={args:{user:!0,userAccountInfo:!1,notifications:!0,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl"}},m={args:{user:!1,userAccountInfo:!0,notifications:!1,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl"}},p={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl"},render:e=>r.jsx(a,{sx:{width:"100%",minWidth:600},children:r.jsx(A,{position:"static",children:r.jsxs(v,{children:[r.jsx(j,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(y,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Dashboard"}),r.jsx(o,{...e,sx:{color:"inherit"}})]})})})},d={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Camila Muñoz",userEmail:"cmunoz@redsalud.cl",avatarSrc:"https://i.pravatar.cc/150?img=5"},render:e=>r.jsx(a,{sx:{width:"100%",minWidth:600},children:r.jsx(A,{position:"static",color:"secondary",children:r.jsxs(v,{children:[r.jsx(j,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(y,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1,color:"secondary.contrastText"},children:"MRS Application"}),r.jsx(o,{...e,sx:{color:"secondary.contrastText"}})]})})})},x={render:()=>r.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[r.jsxs(a,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"All elements visible"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martin Gómez",userEmail:"mgomez@atipic.us"})]}),r.jsxs(a,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"With notification count"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:12,userName:"Felipe Taborda",userEmail:"ftaborda@redsalud.cl",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]}),r.jsxs(a,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"No notifications"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!1,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl"})]}),r.jsxs(a,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar only"}),r.jsx(o,{user:!0,userAccountInfo:!1,notifications:!0,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]}),r.jsxs(a,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Text only"}),r.jsx(o,{user:!1,userAccountInfo:!0,notifications:!1,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl"})]})]})},h={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl"},render:e=>r.jsx(a,{sx:{width:"100%",minWidth:600},children:r.jsx(A,{position:"static",children:r.jsxs(v,{variant:"dense",children:[r.jsx(j,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(y,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Dense Toolbar"}),r.jsx(o,{...e,sx:{color:"inherit",height:32}})]})})})},f={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martin Gómez",userEmail:"mgomez@atipic.us",avatarPosition:"right"}},g={render:()=>r.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[r.jsxs(a,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar Left (default)"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martin Gómez",userEmail:"mgomez@atipic.us",avatarPosition:"left",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]}),r.jsxs(a,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar Right"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martin Gómez",userEmail:"mgomez@atipic.us",avatarPosition:"right",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]})]})},b={args:{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:3,userName:"Juan Taborda",userEmail:"jtaborda@redsalud.cl",avatarPosition:"right",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"},render:e=>r.jsx(a,{sx:{width:"100%",minWidth:600},children:r.jsx(A,{position:"static",children:r.jsxs(v,{children:[r.jsx(j,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(y,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Avatar Right Position"}),r.jsx(o,{...e,sx:{color:"inherit"}})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martin Gómez',
    userEmail: 'mgomez@atipic.us'
  }
}`,...s.parameters?.docs?.source},description:{story:"Default AccountStack with all elements visible",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Camila Muñoz',
    userEmail: 'cmunoz@redsalud.cl',
    avatarSrc: 'https://i.pravatar.cc/150?img=1'
  }
}`,...n.parameters?.docs?.source},description:{story:"AccountStack with custom user data",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Felipe Taborda',
    userEmail: 'ftaborda@redsalud.cl'
  }
}`,...i.parameters?.docs?.source},description:{story:"AccountStack with notification badge only (no count)",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 5,
    userName: 'Juan Taborda',
    userEmail: 'jtaborda@redsalud.cl'
  }
}`,...c.parameters?.docs?.source},description:{story:"AccountStack with notification count",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: false,
    userName: 'Juan Taborda',
    userEmail: 'john.doe@example.com'
  }
}`,...u.parameters?.docs?.source},description:{story:"AccountStack without notifications badge",...u.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: false,
    notifications: true,
    userName: 'Juan Taborda',
    userEmail: 'jtaborda@redsalud.cl'
  }
}`,...l.parameters?.docs?.source},description:{story:"Avatar only (no account info text)",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    user: false,
    userAccountInfo: true,
    notifications: false,
    userName: 'Juan Taborda',
    userEmail: 'jtaborda@redsalud.cl'
  }
}`,...m.parameters?.docs?.source},description:{story:"Account info text only (no avatar)",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Juan Taborda',
    userEmail: 'jtaborda@redsalud.cl'
  },
  render: args => <Box sx={{
    width: '100%',
    minWidth: 600
  }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{
          mr: 2
        }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{
          flexGrow: 1
        }}>
            MRS Dashboard
          </Typography>
          <AccountStack {...args} sx={{
          color: 'inherit'
        }} />
        </Toolbar>
      </AppBar>
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"AccountStack in AppBar context (primary color)",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Camila Muñoz',
    userEmail: 'cmunoz@redsalud.cl',
    avatarSrc: 'https://i.pravatar.cc/150?img=5'
  },
  render: args => <Box sx={{
    width: '100%',
    minWidth: 600
  }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{
          mr: 2
        }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{
          flexGrow: 1,
          color: 'secondary.contrastText'
        }}>
            MRS Application
          </Typography>
          <AccountStack {...args} sx={{
          color: 'secondary.contrastText'
        }} />
        </Toolbar>
      </AppBar>
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"AccountStack in AppBar with secondary color",...d.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 2
  }}>
      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          All elements visible
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Martin Gómez" userEmail="mgomez@atipic.us" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          With notification count
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} notificationCount={12} userName="Felipe Taborda" userEmail="ftaborda@redsalud.cl" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          No notifications
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={false} userName="Juan Taborda" userEmail="jtaborda@redsalud.cl" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Avatar only
        </Typography>
        <AccountStack user={true} userAccountInfo={false} notifications={true} userName="Juan Taborda" userEmail="jtaborda@redsalud.cl" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Text only
        </Typography>
        <AccountStack user={false} userAccountInfo={true} notifications={false} userName="Juan Taborda" userEmail="jtaborda@redsalud.cl" />
      </Box>
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"Multiple account stacks showing different states",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Juan Taborda',
    userEmail: 'jtaborda@redsalud.cl'
  },
  render: args => <Box sx={{
    width: '100%',
    minWidth: 600
  }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{
          mr: 2
        }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{
          flexGrow: 1
        }}>
            Dense Toolbar
          </Typography>
          <AccountStack {...args} sx={{
          color: 'inherit',
          height: 32
        }} />
        </Toolbar>
      </AppBar>
    </Box>
}`,...h.parameters?.docs?.source},description:{story:"Dense toolbar variant",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martin Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarPosition: 'right'
  }
}`,...f.parameters?.docs?.source},description:{story:"Avatar on the right side",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 2
  }}>
      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Avatar Left (default)
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Martin Gómez" userEmail="mgomez@atipic.us" avatarPosition="left" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Avatar Right
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Martin Gómez" userEmail="mgomez@atipic.us" avatarPosition="right" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"Avatar position comparison",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 3,
    userName: 'Juan Taborda',
    userEmail: 'jtaborda@redsalud.cl',
    avatarPosition: 'right',
    avatarSrc: 'https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no'
  },
  render: args => <Box sx={{
    width: '100%',
    minWidth: 600
  }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{
          mr: 2
        }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{
          flexGrow: 1
        }}>
            Avatar Right Position
          </Typography>
          <AccountStack {...args} sx={{
          color: 'inherit'
        }} />
        </Toolbar>
      </AppBar>
    </Box>
}`,...b.parameters?.docs?.source},description:{story:"Avatar right in AppBar",...b.parameters?.docs?.description}}};const rr=["Default","CustomUserData","WithNotificationDot","WithNotificationCount","WithoutNotifications","AvatarOnly","TextOnly","InAppBar","InAppBarSecondary","AllVariants","InDenseToolbar","AvatarRight","AvatarPositionComparison","AvatarRightInAppBar"];export{x as AllVariants,l as AvatarOnly,g as AvatarPositionComparison,f as AvatarRight,b as AvatarRightInAppBar,n as CustomUserData,s as Default,p as InAppBar,d as InAppBarSecondary,h as InDenseToolbar,m as TextOnly,c as WithNotificationCount,i as WithNotificationDot,u as WithoutNotifications,rr as __namedExportsOrder,$ as default};
