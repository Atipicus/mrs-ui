import{j as r}from"./iframe-CaJfxxeA.js";import{T as o,a as e,A as x}from"./Toolbar-CjsD53Zy.js";import{M as d}from"./MaterialSymbol-D8ChqBBP.js";import{I as u}from"./IconButton-CNXkwKT4.js";import{T as t}from"./Typography-D7jCPIvG.js";import{B as h}from"./Button-DD50qzgq.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-C99_ze0b.js";import"./Box-DRdjk_r0.js";import"./createSimplePaletteValueFilter-B7jR09Rm.js";import"./Stack-DE-5PNYj.js";import"./Stack-n7thE6k7.js";import"./useThemeProps-DtNhxYaA.js";import"./Avatar-DUdWRYJL.js";import"./useTheme-BY3Nwc-v.js";import"./createSvgIcon-AcT3u2Lj.js";import"./useSlot-B_nPvQQX.js";import"./resolveComponentProps-DD7apTsv.js";import"./useForkRef-C3chRDOJ.js";import"./Badge-Df7BZbJy.js";import"./Badge-BFp6L2tP.js";import"./usePreviousProps-DU9cxKre.js";import"./Paper-CI5osXNJ.js";import"./IconButton-CdFiAkt1.js";import"./ButtonBase-BHnwxTjD.js";import"./useEventCallback-BYdCS-Tq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B70wwna8.js";import"./Typography-DVqwCqe_.js";import"./Button-BJKs2Jb4.js";const q={title:"Atoms/Toolbar",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Container component for AppBar content. Provides flex layout with vertical centering and consistent height (56px regular, 48px dense)."}}},argTypes:{variant:{control:"select",options:["regular","dense"],description:"Toolbar height variant",table:{defaultValue:{summary:"regular"}}},disableGutters:{control:"boolean",description:"Disable horizontal padding",table:{defaultValue:{summary:!1}}}}},n={render:()=>r.jsx(e,{position:"static",children:r.jsx(o,{children:r.jsx(t,{variant:"h6",children:"Regular Toolbar (56px)"})})})},a={render:()=>r.jsx(e,{position:"static",children:r.jsxs(o,{children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Application"}),r.jsx(h,{color:"inherit",children:"Login"})]})})},i={render:()=>r.jsx(e,{position:"static",children:r.jsxs(o,{variant:"dense",children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",children:"Dense Toolbar (48px)"})]})})},s={render:()=>r.jsx(e,{position:"static",children:r.jsx(o,{disableGutters:!0,children:r.jsx(t,{variant:"h6",sx:{px:2},children:"No Gutters (Manual Padding)"})})})},c={render:()=>r.jsx(e,{position:"static",children:r.jsxs(o,{children:[r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Title with Flex Grow"}),r.jsx(h,{color:"inherit",children:"Action 1"}),r.jsx(h,{color:"inherit",children:"Action 2"})]})})},p={render:()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{position:"static",sx:{mb:2},children:r.jsx(o,{children:r.jsx(t,{variant:"h6",children:"Regular Toolbar (56px minHeight)"})})}),r.jsx(e,{position:"static",children:r.jsx(o,{variant:"dense",children:r.jsx(t,{variant:"h6",children:"Dense Toolbar (48px minHeight)"})})})]})},l={render:()=>r.jsx(e,{position:"static",children:r.jsxs(o,{children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Dashboard"}),r.jsx(x,{userName:"John Doe",userEmail:"john.doe@example.com",notifications:!0,user:!0,userAccountInfo:!0})]})})},m={render:()=>r.jsx(e,{position:"static",color:"primary",children:r.jsxs(o,{children:[r.jsx(u,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r.jsx(d,{icon:"menu"})}),r.jsx(t,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MRS Application"}),r.jsx(x,{userName:"Jane Smith",userEmail:"jane.smith@mrs.com",notifications:!0,notificationCount:8,avatarSrc:"https://i.pravatar.cc/150?img=5",user:!0,userAccountInfo:!0,sx:{color:"inherit"}})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Toolbar with AccountStack and notifications",...m.parameters?.docs?.description}}};const K=["Default","WithMenuIcon","Dense","NoGutters","FlexibleLayout","RegularVsDense","WithAccountStack","WithAccountStackNotifications"];export{n as Default,i as Dense,c as FlexibleLayout,s as NoGutters,p as RegularVsDense,l as WithAccountStack,m as WithAccountStackNotifications,a as WithMenuIcon,K as __namedExportsOrder,q as default};
