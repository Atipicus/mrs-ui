import{j as r}from"./iframe-BLPmWLdH.js";import{T as o,a as t,A as x}from"./Toolbar-C7Crfu7I.js";import{M as d}from"./MaterialSymbol-cEDBCtg_.js";import{I as u}from"./IconButton-0gjxRU6T.js";import{T as e}from"./Typography-CjUz1Aj3.js";import{B as h}from"./Button-BVEwaY36.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-C1EBZbry.js";import"./Box-p6I_ECHL.js";import"./memoTheme-DEYF-N-o.js";import"./Stack-DxaHuVeu.js";import"./Stack-CdWmLSiL.js";import"./useThemeProps-CQqoIt60.js";import"./Avatar-Dj7SmTbO.js";import"./useTheme-mA5jLGnb.js";import"./createSvgIcon-4EnE_moI.js";import"./useSlot-C88q11eF.js";import"./resolveComponentProps-BPbU6LNi.js";import"./useForkRef-CM0N7afC.js";import"./Badge-DKpaIW9Z.js";import"./Badge-DEkRiDe7.js";import"./usePreviousProps-BsSXLFn9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Toolbar-OToMfQxK.js";import"./Paper-BHVlsmxd.js";import"./IconButton-CzMgArIn.js";import"./ButtonBase-tUTgC9_p.js";import"./useEventCallback-DJLENsCi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CI049Rk9.js";import"./Typography-C56izW4I.js";import"./theme-helpers-CoFoCxtx.js";import"./Button-CFAktZt6.js";const U={title:"Atoms/Toolbar",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Container component for AppBar content. Provides flex layout with vertical centering and consistent height (56px regular, 48px dense)."}}},argTypes:{variant:{control:"select",options:["regular","dense"],description:"Toolbar height variant",table:{defaultValue:{summary:"regular"}}},disableGutters:{control:"boolean",description:"Disable horizontal padding",table:{defaultValue:{summary:!1}}}}},n={render:()=>r.jsx(t,{position:"static",children:r.jsx(o,{children:r.jsx(e,{variant:"h6",children:"Regular Toolbar (56px)"})})})},a={render:()=>r.jsx(t,{position:"static",children:r.jsxs(o,{children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(e,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Application"}),r.jsx(h,{color:"inherit",children:"Login"})]})})},i={render:()=>r.jsx(t,{position:"static",children:r.jsxs(o,{variant:"dense",children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(e,{variant:"h6",component:"div",children:"Dense Toolbar (48px)"})]})})},s={render:()=>r.jsx(t,{position:"static",children:r.jsx(o,{disableGutters:!0,children:r.jsx(e,{variant:"h6",sx:{px:2},children:"No Gutters (Manual Padding)"})})})},c={render:()=>r.jsx(t,{position:"static",children:r.jsxs(o,{children:[r.jsx(e,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Title with Flex Grow"}),r.jsx(h,{color:"inherit",children:"Action 1"}),r.jsx(h,{color:"inherit",children:"Action 2"})]})})},p={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(t,{position:"static",sx:{mb:2},children:r.jsx(o,{children:r.jsx(e,{variant:"h6",children:"Regular Toolbar (56px minHeight)"})})}),r.jsx(t,{position:"static",children:r.jsx(o,{variant:"dense",children:r.jsx(e,{variant:"h6",children:"Dense Toolbar (48px minHeight)"})})})]})},l={render:()=>r.jsx(t,{position:"static",children:r.jsxs(o,{children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(e,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Dashboard"}),r.jsx(x,{userName:"John Doe",userEmail:"john.doe@example.com",notifications:!0,user:!0,userAccountInfo:!0})]})})},m={render:()=>r.jsx(t,{position:"static",color:"primary",children:r.jsxs(o,{children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(e,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Application"}),r.jsx(x,{userName:"Jane Smith",userEmail:"jane.smith@mrs.com",notifications:!0,notificationCount:8,avatarSrc:"https://i.pravatar.cc/150?img=5",user:!0,userAccountInfo:!0,sx:{color:"inherit"}})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Regular Toolbar (56px)</Typography>
      </Toolbar>
    </AppBar>
}`,...n.parameters?.docs?.source},description:{story:"Default Toolbar with regular height (56px)",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{
        mr: 2
      }}>
          <MaterialSymbol icon="menu" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{
        flexGrow: 1
      }}>
          MRS Application
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
}`,...a.parameters?.docs?.source},description:{story:"Toolbar with menu icon and title",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{
        mr: 2
      }}>
          <MaterialSymbol icon="menu" />
        </IconButton>
        <Typography variant="h6" component="div">
          Dense Toolbar (48px)
        </Typography>
      </Toolbar>
    </AppBar>
}`,...i.parameters?.docs?.source},description:{story:"Dense variant with compact height (48px)",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static">
      <Toolbar disableGutters>
        <Typography variant="h6" sx={{
        px: 2
      }}>
          No Gutters (Manual Padding)
        </Typography>
      </Toolbar>
    </AppBar>
}`,...s.parameters?.docs?.source},description:{story:"Toolbar without gutter padding",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{
        flexGrow: 1
      }}>
          Title with Flex Grow
        </Typography>
        <Button color="inherit">Action 1</Button>
        <Button color="inherit">Action 2</Button>
      </Toolbar>
    </AppBar>
}`,...c.parameters?.docs?.source},description:{story:"Toolbar with flexible layout",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <AppBar position="static" sx={{
      mb: 2
    }}>
        <Toolbar>
          <Typography variant="h6">Regular Toolbar (56px minHeight)</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">Dense Toolbar (48px minHeight)</Typography>
        </Toolbar>
      </AppBar>
    </>
}`,...p.parameters?.docs?.source},description:{story:"Comparison of regular vs dense",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{
        mr: 2
      }}>
          <MaterialSymbol icon="menu" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{
        flexGrow: 1
      }}>
          MRS Dashboard
        </Typography>
        <AccountStack userName="John Doe" userEmail="john.doe@example.com" notifications user userAccountInfo />
      </Toolbar>
    </AppBar>
}`,...l.parameters?.docs?.source},description:{story:"Toolbar with AccountStack component",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{
        mr: 2
      }}>
          <MaterialSymbol icon="menu" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{
        flexGrow: 1
      }}>
          MRS Application
        </Typography>
        <AccountStack userName="Jane Smith" userEmail="jane.smith@mrs.com" notifications notificationCount={8} avatarSrc="https://i.pravatar.cc/150?img=5" user userAccountInfo sx={{
        color: 'inherit'
      }} />
      </Toolbar>
    </AppBar>
}`,...m.parameters?.docs?.source},description:{story:"Toolbar with AccountStack and notifications",...m.parameters?.docs?.description}}};const X=["Default","WithMenuIcon","Dense","NoGutters","FlexibleLayout","RegularVsDense","WithAccountStack","WithAccountStackNotifications"];export{n as Default,i as Dense,c as FlexibleLayout,s as NoGutters,p as RegularVsDense,l as WithAccountStack,m as WithAccountStackNotifications,a as WithMenuIcon,X as __namedExportsOrder,U as default};
