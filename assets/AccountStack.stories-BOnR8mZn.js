import{j as o}from"./iframe-KbWxCWh5.js";import{M as y}from"./MaterialSymbol-CRf15fzs.js";import{A as e,a as b,T as v}from"./Toolbar-CWu8wWu4.js";import{I as S}from"./IconButton-DnDw_idy.js";import{T as t}from"./Typography-BIMpNTqK.js";import{B as r}from"./Box-fS8aAGfG.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CD9f05Kp.js";import"./memoTheme-CD-unLW0.js";import"./Stack-CCygCoiZ.js";import"./Stack-BHqhZ3r1.js";import"./useThemeProps-CuvCnmBf.js";import"./Avatar-DE0MKnKI.js";import"./useTheme-JDDLTmum.js";import"./createSvgIcon-Bphyg1jv.js";import"./useSlot-DGoob9yj.js";import"./resolveComponentProps-DiXWND4P.js";import"./useForkRef-DdHlOThs.js";import"./Badge-CcRSFJcH.js";import"./Badge-CWWvegHn.js";import"./usePreviousProps-CwXFkRJD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-YSH2Mx2W.js";import"./IconButton-DhlIiiDw.js";import"./ButtonBase-BsRfRYMN.js";import"./useEventCallback-CUjcavDR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BrtbgswC.js";import"./Typography-C621kO0v.js";const Y={title:"Atoms/AccountStack",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Account stack component for displaying user information with avatar and badge. Designed for use in AppBar/Toolbar. Uses MRS Design System tokens (Nunito typography, #00686f primary color)."}}},argTypes:{user:{control:"boolean",description:"Show/hide avatar with badge",table:{defaultValue:{summary:"true"}}},userAccountInfo:{control:"boolean",description:"Show/hide user account information text",table:{defaultValue:{summary:"true"}}},notifications:{control:"boolean",description:"Show/hide notification badge on avatar",table:{defaultValue:{summary:"true"}}},userName:{control:"text",description:"User name to display",table:{defaultValue:{summary:"John Doe"}}},userEmail:{control:"text",description:"User email or secondary info",table:{defaultValue:{summary:"john.doe@example.com"}}},avatarSrc:{control:"text",description:"Avatar image URL"},avatarAlt:{control:"text",description:"Avatar alt text for accessibility",table:{defaultValue:{summary:"User avatar"}}},avatarPosition:{control:"select",options:["left","right"],description:"Position of avatar relative to user info",table:{defaultValue:{summary:"left"}}}}},s={args:{user:!1,userAccountInfo:!1,notifications:!1,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"}},n={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"}},i={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"John Doe",userEmail:"john.doe@example.com"}},c={args:{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:5,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"}},u={args:{user:!0,userAccountInfo:!0,notifications:!1,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"}},m={args:{user:!0,userAccountInfo:!1,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"}},p={args:{user:!1,userAccountInfo:!0,notifications:!1,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"}},l={args:{user:!0,userAccountInfo:!1,notifications:!1,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"},render:a=>o.jsx(r,{sx:{width:"100%",minWidth:600},children:o.jsx(b,{position:"static",children:o.jsxs(v,{children:[o.jsx(S,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:o.jsx(y,{icon:"menu"})}),o.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Dashboard"}),o.jsx(e,{...a,sx:{color:"inherit"}})]})})})},d={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"},render:a=>o.jsx(r,{sx:{width:"100%",minWidth:600},children:o.jsx(b,{position:"static",color:"secondary",children:o.jsxs(v,{children:[o.jsx(S,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:o.jsx(y,{icon:"menu"})}),o.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1,color:"secondary.contrastText"},children:"MRS Application"}),o.jsx(e,{...a,sx:{color:"secondary.contrastText"}})]})})})},x={render:()=>o.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[o.jsxs(r,{children:[o.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"All elements visible"}),o.jsx(e,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"})]}),o.jsxs(r,{children:[o.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"With notification count"}),o.jsx(e,{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:12,userName:"Martín Gómez",userEmail:"mgomez@atipic.us",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]}),o.jsxs(r,{children:[o.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"No notifications"}),o.jsx(e,{user:!0,userAccountInfo:!0,notifications:!1,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"})]}),o.jsxs(r,{children:[o.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar only"}),o.jsx(e,{user:!0,userAccountInfo:!1,notifications:!0,userName:"Martín Gómez",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]}),o.jsxs(r,{children:[o.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Text only"}),o.jsx(e,{user:!1,userAccountInfo:!0,notifications:!1,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"})]})]})},g={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us"},render:a=>o.jsx(r,{sx:{width:"100%",minWidth:600},children:o.jsx(b,{position:"static",children:o.jsxs(v,{variant:"dense",children:[o.jsx(S,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:o.jsx(y,{icon:"menu"})}),o.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Dense Toolbar"}),o.jsx(e,{...a,sx:{color:"inherit",height:32}})]})})})},h={args:{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us",avatarPosition:"right"}},f={render:()=>o.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[o.jsxs(r,{children:[o.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar Left (default)"}),o.jsx(e,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us",avatarPosition:"left",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]}),o.jsxs(r,{children:[o.jsx(t,{variant:"caption",sx:{mb:1,display:"block"},children:"Avatar Right"}),o.jsx(e,{user:!0,userAccountInfo:!0,notifications:!0,userName:"Martín Gómez",userEmail:"mgomez@atipic.us",avatarPosition:"right",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"})]})]})},A={args:{user:!0,userAccountInfo:!0,notifications:!0,notificationCount:3,userName:"Martín Gómez",userEmail:"mgomez@atipic.us",avatarPosition:"right",avatarSrc:"https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"},render:a=>o.jsx(r,{sx:{width:"100%",minWidth:600},children:o.jsx(b,{position:"static",children:o.jsxs(v,{children:[o.jsx(S,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:o.jsx(y,{icon:"menu"})}),o.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Avatar Right Position"}),o.jsx(e,{...a,sx:{color:"inherit"}})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    user: false,
    userAccountInfo: false,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us'
  }
}`,...s.parameters?.docs?.source},description:{story:"Default AccountStack with all elements visible",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarSrc: 'https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no'
  }
}`,...n.parameters?.docs?.source},description:{story:"AccountStack with custom user data",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com'
  }
}`,...i.parameters?.docs?.source},description:{story:"AccountStack with notification badge only (no count)",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 5,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us'
  }
}`,...c.parameters?.docs?.source},description:{story:"AccountStack with notification count",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us'
  }
}`,...u.parameters?.docs?.source},description:{story:"AccountStack without notifications badge",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: false,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us'
  }
}`,...m.parameters?.docs?.source},description:{story:"Avatar only (no account info text)",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    user: false,
    userAccountInfo: true,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us'
  }
}`,...p.parameters?.docs?.source},description:{story:"Account info text only (no avatar)",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: false,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us'
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
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarSrc: 'https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no'
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
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Martín Gómez" userEmail="mgomez@atipic.us" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          With notification count
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} notificationCount={12} userName="Martín Gómez" userEmail="mgomez@atipic.us" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          No notifications
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={false} userName="Martín Gómez" userEmail="mgomez@atipic.us" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Avatar only
        </Typography>
        <AccountStack user={true} userAccountInfo={false} notifications={true} userName="Martín Gómez" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Text only
        </Typography>
        <AccountStack user={false} userAccountInfo={true} notifications={false} userName="Martín Gómez" userEmail="mgomez@atipic.us" />
      </Box>
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"Multiple account stacks showing different states",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us'
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
}`,...g.parameters?.docs?.source},description:{story:"Dense toolbar variant",...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarPosition: 'right'
  }
}`,...h.parameters?.docs?.source},description:{story:"Avatar on the right side",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Martín Gómez" userEmail="mgomez@atipic.us" avatarPosition="left" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>

      <Box>
        <Typography variant="caption" sx={{
        mb: 1,
        display: 'block'
      }}>
          Avatar Right
        </Typography>
        <AccountStack user={true} userAccountInfo={true} notifications={true} userName="Martín Gómez" userEmail="mgomez@atipic.us" avatarPosition="right" avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no" />
      </Box>
    </Box>
}`,...f.parameters?.docs?.source},description:{story:"Avatar position comparison",...f.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 3,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
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
}`,...A.parameters?.docs?.source},description:{story:"Avatar right in AppBar",...A.parameters?.docs?.description}}};const $=["Default","CustomUserData","WithNotificationDot","WithNotificationCount","WithoutNotifications","AvatarOnly","TextOnly","InAppBar","InAppBarSecondary","AllVariants","InDenseToolbar","AvatarRight","AvatarPositionComparison","AvatarRightInAppBar"];export{x as AllVariants,m as AvatarOnly,f as AvatarPositionComparison,h as AvatarRight,A as AvatarRightInAppBar,n as CustomUserData,s as Default,l as InAppBar,d as InAppBarSecondary,g as InDenseToolbar,p as TextOnly,c as WithNotificationCount,i as WithNotificationDot,u as WithoutNotifications,$ as __namedExportsOrder,Y as default};
