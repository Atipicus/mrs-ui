import{j as r}from"./iframe-CckttRrP.js";import{M as A}from"./MaterialSymbol-C4g2eVab.js";import{A as o,a as v,T as j}from"./Toolbar-BdwKWVFd.js";import{I as S}from"./IconButton-Dm4jcS0b.js";import{T as t}from"./Typography-B8ayrIoU.js";import{B as e}from"./Box-BySoNsZ0.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-MINljk0S.js";import"./memoTheme-D40aOm1p.js";import"./Stack-C1HYDbMg.js";import"./Stack-B-CToEQK.js";import"./styled-Yz1ixKRP.js";import"./useThemeProps-jBpPjYFU.js";import"./Avatar-CE69L1my.js";import"./useTheme-BEZ5DwR-.js";import"./createSvgIcon-ZFHZ2TuZ.js";import"./useSlot-CgXclaX5.js";import"./resolveComponentProps-DRuAR2bf.js";import"./useForkRef-BrpzIuMK.js";import"./Badge-Qs0moTkc.js";import"./Badge-DMW9Uc_Y.js";import"./usePreviousProps-DOTFY2ky.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-Bui-Aeo_.js";import"./IconButton-C7LeTJlp.js";import"./ButtonBase-ExDGUqAK.js";import"./useEventCallback-CPSVspcQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dak25OHr.js";import"./Typography-CJ6AbGd8.js";const $={title:"Atoms/AccountStack",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Account stack component for displaying user information with avatar and badge. Designed for use in AppBar/Toolbar. Uses MRS Design System tokens (Nunito typography, #00686f primary color)."}}},argTypes:{user:{control:"boolean",description:"Show/hide avatar with badge",table:{defaultValue:{summary:"true"}}},userAccountInfo:{control:"boolean",description:"Show/hide user account information text",table:{defaultValue:{summary:"true"}}},notifications:{control:"boolean",description:"Show/hide notification badge on avatar",table:{defaultValue:{summary:"true"}}},userName:{control:"text",description:"User name to display",table:{defaultValue:{summary:"John Doe"}}},userEmail:{control:"text",description:"User email or secondary info",table:{defaultValue:{summary:"john.doe@example.com"}}},avatarSrc:{control:"text",description:"Avatar image URL"},avatarAlt:{control:"text",description:"Avatar alt text for accessibility",table:{defaultValue:{summary:"User avatar"}}},avatarPosition:{control:"select",options:["left","right"],description:"Position of avatar relative to user info",table:{defaultValue:{summary:"left"}}}}},s={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com"}},i={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Jane Smith",userEmail:"jane.smith@mrs.com",avatarSrc:"https://i.pravatar.cc/150?img=1"}},n={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com"}},c={args:{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:5,userName:"John Doe",userEmail:"john.doe@example.com"}},u={args:{user:!0,userAccountInfo:!0,notifications:!1,userName:"John Doe",userEmail:"john.doe@example.com"}},m={args:{user:!0,userAccountInfo:!1,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com"}},p={args:{user:!1,userAccountInfo:!0,notifications:!1,userName:"John Doe",userEmail:"john.doe@example.com"}},l={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com"},render:a=>r.jsx(e,{sx:{width:"100%",minWidth:600},children:r.jsx(v,{position:"static",children:r.jsxs(j,{children:[r.jsx(S,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(A,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Dashboard"}),r.jsx(o,{...a,sx:{color:"inherit"}})]})})})},d={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Jane Smith",userEmail:"jane.smith@mrs.com",avatarSrc:"https://i.pravatar.cc/150?img=5"},render:a=>r.jsx(e,{sx:{width:"100%",minWidth:600},children:r.jsx(v,{position:"static",color:"secondary",children:r.jsxs(j,{children:[r.jsx(S,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(A,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1,color:"secondary.contrastText"},children:"MRS Application"}),r.jsx(o,{...a,sx:{color:"secondary.contrastText"}})]})})})},h={render:()=>r.jsxs(e,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[r.jsxs(e,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"All elements visible"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com"})]}),r.jsxs(e,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"With notification count"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:12,userName:"Jane Smith",userEmail:"jane.smith@mrs.com",avatarSrc:"https://i.pravatar.cc/150?img=5"})]}),r.jsxs(e,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"No notifications"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!1,userName:"Mike Johnson",userEmail:"mike.j@example.com"})]}),r.jsxs(e,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar only"}),r.jsx(o,{user:!0,userAccountInfo:!1,notifications:!0,userName:"Sarah Lee",avatarSrc:"https://i.pravatar.cc/150?img=10"})]}),r.jsxs(e,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Text only"}),r.jsx(o,{user:!1,userAccountInfo:!0,notifications:!1,userName:"David Chen",userEmail:"david.chen@mrs.com"})]})]})},x={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com"},render:a=>r.jsx(e,{sx:{width:"100%",minWidth:600},children:r.jsx(v,{position:"static",children:r.jsxs(j,{variant:"dense",children:[r.jsx(S,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(A,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Dense Toolbar"}),r.jsx(o,{...a,sx:{color:"inherit",height:32}})]})})})},f={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com",avatarPosition:"right"}},g={render:()=>r.jsxs(e,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[r.jsxs(e,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar Left (default)"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Jane Smith",userEmail:"jane.smith@mrs.com",avatarPosition:"left",avatarSrc:"https://i.pravatar.cc/150?img=5"})]}),r.jsxs(e,{children:[r.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar Right"}),r.jsx(o,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Jane Smith",userEmail:"jane.smith@mrs.com",avatarPosition:"right",avatarSrc:"https://i.pravatar.cc/150?img=5"})]})]})},y={args:{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:3,userName:"Jane Smith",userEmail:"jane.smith@mrs.com",avatarPosition:"right",avatarSrc:"https://i.pravatar.cc/150?img=5"},render:a=>r.jsx(e,{sx:{width:"100%",minWidth:600},children:r.jsx(v,{position:"static",children:r.jsxs(j,{children:[r.jsx(S,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(A,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Avatar Right Position"}),r.jsx(o,{...a,sx:{color:"inherit"}})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
  }
}`,...s.parameters?.docs?.source},description:{story:"Default AccountStack with all elements visible",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Jane Smith',
    userEmail: 'jane.smith@mrs.com',
    avatarSrc: 'https://i.pravatar.cc/150?img=1'
  }
}`,...i.parameters?.docs?.source},description:{story:"AccountStack with custom user data",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
  }
}`,...n.parameters?.docs?.source},description:{story:"AccountStack with notification badge only (no count)",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 5,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
  }
}`,...c.parameters?.docs?.source},description:{story:"AccountStack with notification count",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: false,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
  }
}`,...u.parameters?.docs?.source},description:{story:"AccountStack without notifications badge",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: false,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
  }
}`,...m.parameters?.docs?.source},description:{story:"Avatar only (no account info text)",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    user: false,
    userAccountInfo: true,
    notifications: false,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
  }
}`,...p.parameters?.docs?.source},description:{story:"Account info text only (no avatar)",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
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
}`,...l.parameters?.docs?.source},description:{story:"AccountStack in AppBar context (primary color)",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Jane Smith',
    userEmail: 'jane.smith@mrs.com',
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
}`,...d.parameters?.docs?.source},description:{story:"AccountStack in AppBar with secondary color",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="John Doe" userEmail="john.doe@example.com" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          With notification count
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} notificationCount={12} userName="Jane Smith" userEmail="jane.smith@mrs.com" avatarSrc="https://i.pravatar.cc/150?img=5" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          No notifications
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={false} userName="Mike Johnson" userEmail="mike.j@example.com" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Avatar only
        </Typography>
        <AccountStack user={true} userAccountInfo={false} notifications={true} userName="Sarah Lee" avatarSrc="https://i.pravatar.cc/150?img=10" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Text only
        </Typography>
        <AccountStack user={false} userAccountInfo={true} notifications={false} userName="David Chen" userEmail="david.chen@mrs.com" />
      </Box>
    </Box>
}`,...h.parameters?.docs?.source},description:{story:"Multiple account stacks showing different states",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
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
}`,...x.parameters?.docs?.source},description:{story:"Dense toolbar variant",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
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
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Jane Smith" userEmail="jane.smith@mrs.com" avatarPosition="left" avatarSrc="https://i.pravatar.cc/150?img=5" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Avatar Right
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Jane Smith" userEmail="jane.smith@mrs.com" avatarPosition="right" avatarSrc="https://i.pravatar.cc/150?img=5" />
      </Box>
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"Avatar position comparison",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 3,
    userName: 'Jane Smith',
    userEmail: 'jane.smith@mrs.com',
    avatarPosition: 'right',
    avatarSrc: 'https://i.pravatar.cc/150?img=5'
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
}`,...y.parameters?.docs?.source},description:{story:"Avatar right in AppBar",...y.parameters?.docs?.description}}};const rr=["Default","CustomUserData","WithNotificationDot","WithNotificationCount","WithoutNotifications","AvatarOnly","TextOnly","InAppBar","InAppBarSecondary","AllVariants","InDenseToolbar","AvatarRight","AvatarPositionComparison","AvatarRightInAppBar"];export{h as AllVariants,m as AvatarOnly,g as AvatarPositionComparison,f as AvatarRight,y as AvatarRightInAppBar,i as CustomUserData,s as Default,l as InAppBar,d as InAppBarSecondary,x as InDenseToolbar,p as TextOnly,c as WithNotificationCount,n as WithNotificationDot,u as WithoutNotifications,rr as __namedExportsOrder,$ as default};
