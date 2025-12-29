import{j as e,R as p}from"./iframe-Ll-6DOMq.js";import{D as a}from"./Drawer-JlRqhH4i.js";import{L as l,a as s}from"./ListItem-D7sqdlGe.js";import{D as d}from"./Divider-Cq84o_Wq.js";import{I as h}from"./IconButton-CDcEjWBg.js";import{B as c}from"./Button-bPB9cu8o.js";import{T as n}from"./Typography-DjXrEFD7.js";import{B as o}from"./Box-Cixmyldk.js";import{M as O}from"./Menu-Co32rKth.js";import{I as k}from"./Inbox-DXcFgSHq.js";import{M}from"./Mail-CrqMube9.js";import{H as R}from"./Home-KYRiUJD-.js";import{S as P}from"./Settings-C2QWit7m.js";import{c as N}from"./createSvgIcon-B--y33RA.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-DU8NCu1L.js";import"./createSimplePaletteValueFilter-Cr3O56rL.js";import"./useSlot-CKkKY_MB.js";import"./resolveComponentProps--b04hUqz.js";import"./useForkRef-CyvFleoK.js";import"./mergeSlotProps-DeIBauIu.js";import"./utils-uJiPiMxz.js";import"./ButtonBase-Dmk_TwK3.js";import"./useEventCallback-CNwJKNkp.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-B1ARROd1.js";import"./index-BlpryoIJ.js";import"./getReactElementRef-CccO5-FT.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CYbFbffj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BqQ1a4AE.js";import"./Paper-BbkAovIa.js";import"./List-sWKbttLs.js";import"./ListContext-Dyk9lgPk.js";import"./ListItem-BfUiyZu2.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-DfG1cH3M.js";import"./listItemButtonClasses-DAkIfGUV.js";import"./ListItemButton-WPOtJWzj.js";import"./Divider-B16MBj2j.js";import"./dividerClasses-D66snz_T.js";import"./IconButton-BoOLUbup.js";import"./CircularProgress-D8a3t22V.js";import"./Button-6KJooc4K.js";import"./Typography-BDVHBFsV.js";import"./Box-CT6B1tpM.js";const H=N(e.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),Me={title:"Molecules/Drawer",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Side navigation panel component. Provides three variants (temporary, persistent, permanent) for different use cases. Temporary for mobile, persistent for toggleable desktop nav, permanent for always-visible navigation."}}},argTypes:{anchor:{control:"select",options:["left","right","top","bottom"],description:"Side from which the drawer appears",table:{defaultValue:{summary:"left"}}},variant:{control:"select",options:["temporary","persistent","permanent"],description:"Drawer behavior type",table:{defaultValue:{summary:"temporary"}}},open:{control:"boolean",description:"If true, the drawer is open",table:{defaultValue:{summary:!1}}},elevation:{control:{type:"range",min:0,max:24,step:1},description:"Shadow depth elevation",table:{defaultValue:{summary:16}}},hideBackdrop:{control:"boolean",description:"If true, the backdrop is not rendered",table:{defaultValue:{summary:!1}}}}},m={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"contained",onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(a,{open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Drawer Menu"}),e.jsx(d,{sx:{my:2}}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(k,{sx:{mr:2}}),"Inbox"]}),e.jsxs(s,{children:[e.jsx(M,{sx:{mr:2}}),"Mail"]})]})]})})]})}},u={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(h,{onClick:()=>r(!0),children:e.jsx(O,{})}),e.jsx(a,{anchor:"left",open:t,onClose:()=>r(!1),children:e.jsx(o,{sx:{width:250},role:"presentation",children:e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(R,{sx:{mr:2}}),"Home"]}),e.jsxs(s,{children:[e.jsx(k,{sx:{mr:2}}),"Inbox"]}),e.jsxs(s,{children:[e.jsx(M,{sx:{mr:2}}),"Mail"]}),e.jsxs(s,{children:[e.jsx(P,{sx:{mr:2}}),"Settings"]})]})})})]})}},y={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"outlined",onClick:()=>r(!0),children:"Open Right Drawer"}),e.jsx(a,{anchor:"right",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",children:"Right Side Menu"}),e.jsx(d,{sx:{my:2}}),e.jsxs(l,{children:[e.jsx(s,{children:"Menu Item 1"}),e.jsx(s,{children:"Menu Item 2"}),e.jsx(s,{children:"Menu Item 3"})]})]})})]})}},g={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"contained",onClick:()=>r(!0),children:"Open Top Drawer"}),e.jsx(a,{anchor:"top",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{height:200,p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Top Drawer"}),e.jsx(n,{children:"Useful for notifications or quick access menus."})]})})]})}},w={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"outlined",onClick:()=>r(!0),children:"Open Bottom Drawer"}),e.jsx(a,{anchor:"bottom",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{height:200,p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Bottom Drawer"}),e.jsx(n,{children:"Common for mobile action sheets or filters."})]})})]})}},j={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(h,{onClick:()=>r(!0),children:e.jsx(O,{})}),e.jsx(a,{variant:"temporary",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Temporary Drawer"}),e.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"Closes when clicking outside or pressing ESC. Best for mobile."}),e.jsx(d,{sx:{my:2}}),e.jsxs(l,{children:[e.jsx(s,{children:"Navigation Item 1"}),e.jsx(s,{children:"Navigation Item 2"}),e.jsx(s,{children:"Navigation Item 3"})]})]})})]})}},f={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(a,{variant:"persistent",anchor:"left",open:t,sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},children:e.jsxs(o,{sx:{p:2},children:[e.jsxs(o,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[e.jsx(n,{variant:"h6",children:"Persistent"}),e.jsx(h,{onClick:()=>r(!1),children:e.jsx(H,{})})]}),e.jsx(d,{sx:{mb:2}}),e.jsxs(l,{children:[e.jsx(s,{children:"Dashboard"}),e.jsx(s,{children:"Analytics"}),e.jsx(s,{children:"Reports"}),e.jsx(s,{children:"Settings"})]})]})}),e.jsxs(o,{sx:{flexGrow:1,p:3,transition:"margin 0.3s",ml:0},children:[e.jsx(h,{onClick:()=>r(!t),sx:{mb:2},children:e.jsx(O,{})}),e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),e.jsx(n,{paragraph:!0,children:"Persistent drawer pushes content to the side when open. Content shifts with the drawer."}),e.jsx(n,{paragraph:!0,children:"Click the menu icon to toggle the drawer. The drawer will stay open until explicitly closed."})]})]})}},B={render:()=>e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(a,{variant:"permanent",anchor:"left",sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},children:e.jsxs(o,{sx:{p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Permanent Drawer"}),e.jsx(d,{sx:{my:2}}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(R,{sx:{mr:2}}),"Home"]}),e.jsxs(s,{children:[e.jsx(k,{sx:{mr:2}}),"Inbox"]}),e.jsxs(s,{children:[e.jsx(M,{sx:{mr:2}}),"Mail"]}),e.jsxs(s,{children:[e.jsx(P,{sx:{mr:2}}),"Settings"]})]})]})}),e.jsxs(o,{sx:{flexGrow:1,p:3},children:[e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),e.jsx(n,{paragraph:!0,children:"Permanent drawer is always visible and cannot be closed. Best for desktop applications where navigation is always needed."}),e.jsx(n,{paragraph:!0,children:"Content is displayed alongside the drawer. The drawer is part of the page layout."})]})]})},v={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"contained",onClick:()=>r(!0),children:"Open Drawer (Elevation 24)"}),e.jsx(a,{elevation:24,open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"High Elevation"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"This drawer has maximum elevation (24) for a prominent shadow."})]})})]})}},b={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"outlined",onClick:()=>r(!0),children:"Open Drawer (No Shadow)"}),e.jsx(a,{elevation:0,open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"No Elevation"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"This drawer has no shadow (elevation: 0)."})]})})]})}},I={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"contained",onClick:()=>r(!0),children:"Open Without Backdrop"}),e.jsx(a,{hideBackdrop:!0,open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"No Backdrop"}),e.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"No overlay behind the drawer. Content remains interactive."}),e.jsx(c,{onClick:()=>r(!1),children:"Close"})]})}),e.jsx(o,{sx:{p:3},children:e.jsx(n,{children:"You can still interact with this content while the drawer is open because there's no backdrop."})})]})}},D={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"contained",onClick:()=>r(!0),children:"Open Wide Drawer"}),e.jsx(a,{open:t,onClose:()=>r(!1),slotProps:{paper:{sx:{width:400}}},children:e.jsxs(o,{sx:{p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Wide Drawer (400px)"}),e.jsx(d,{sx:{my:2}}),e.jsx(n,{paragraph:!0,children:"This drawer is 400px wide instead of the standard 250px."}),e.jsx(n,{paragraph:!0,children:"Width can be customized using the slotProps.paper.sx prop."})]})})]})}},C={render:()=>{const[t,r]=p.useState(!1),x=e.jsxs(o,{sx:{width:240,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Responsive Navigation"}),e.jsx(d,{sx:{my:2}}),e.jsxs(l,{children:[e.jsx(s,{children:"Home"}),e.jsx(s,{children:"Products"}),e.jsx(s,{children:"About"}),e.jsx(s,{children:"Contact"})]})]});return e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(a,{variant:"temporary",open:t,onClose:()=>r(!1),sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:x}),e.jsx(a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},open:!0,children:x}),e.jsxs(o,{sx:{flexGrow:1,p:3},children:[e.jsx(h,{onClick:()=>r(!0),sx:{display:{sm:"none"},mb:2},children:e.jsx(O,{})}),e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Responsive Layout"}),e.jsx(n,{paragraph:!0,children:"On mobile (xs): Temporary drawer with hamburger menu."}),e.jsx(n,{paragraph:!0,children:"On desktop (sm+): Permanent drawer always visible."}),e.jsx(n,{paragraph:!0,children:"Resize your browser to see the responsive behavior."})]})]})}},T={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{children:[e.jsx(c,{variant:"contained",onClick:()=>r(!0),children:"Open Colored Drawer"}),e.jsx(a,{open:t,onClose:()=>r(!1),slotProps:{paper:{sx:{backgroundColor:"primary.main",color:"primary.contrastText"}}},children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Custom Background"}),e.jsx(d,{sx:{my:2,borderColor:"rgba(255,255,255,0.2)"}}),e.jsxs(l,{children:[e.jsx(s,{sx:{color:"inherit"},children:"Menu Item 1"}),e.jsx(s,{sx:{color:"inherit"},children:"Menu Item 2"}),e.jsx(s,{sx:{color:"inherit"},children:"Menu Item 3"})]})]})})]})}},L={render:()=>{const[t,r]=p.useState(!1);return e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(a,{variant:"permanent",open:t,sx:{width:t?240:64,flexShrink:0,transition:"width 0.3s","& .MuiDrawer-paper":{width:t?240:64,overflowX:"hidden",transition:"width 0.3s"}},children:e.jsxs(o,{sx:{p:2},children:[e.jsx(h,{onClick:()=>r(!t),children:e.jsx(O,{})}),t&&e.jsx(n,{variant:"h6",sx:{mt:2},children:"Mini Drawer"}),e.jsxs(l,{sx:{mt:2},children:[e.jsxs(s,{children:[e.jsx(R,{sx:{mr:t?2:0}}),t&&"Home"]}),e.jsxs(s,{children:[e.jsx(k,{sx:{mr:t?2:0}}),t&&"Inbox"]}),e.jsxs(s,{children:[e.jsx(M,{sx:{mr:t?2:0}}),t&&"Mail"]})]})]})}),e.jsxs(o,{sx:{flexGrow:1,p:3},children:[e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Mini Variant Drawer"}),e.jsx(n,{paragraph:!0,children:"Click the menu icon in the drawer to toggle between mini and expanded states."}),e.jsx(n,{paragraph:!0,children:"When collapsed, shows only icons. When expanded, shows labels too."})]})]})}},S={render:()=>{const[t,r]=p.useState({left:!1,right:!1,top:!1,bottom:!1}),x=(i,A)=>{r({...t,[i]:A})};return e.jsxs(o,{sx:{textAlign:"center",p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Drawer Anchor Positions"}),e.jsx(o,{sx:{display:"flex",gap:2,justifyContent:"center",mt:3},children:["left","right","top","bottom"].map(i=>e.jsx(c,{variant:"outlined",onClick:()=>x(i,!0),children:i},i))}),["left","right","top","bottom"].map(i=>e.jsx(a,{anchor:i,open:t[i],onClose:()=>x(i,!1),children:e.jsxs(o,{sx:{width:i==="top"||i==="bottom"?"auto":250,height:i==="top"||i==="bottom"?150:"auto",p:2},children:[e.jsxs(n,{variant:"h6",children:[i.toUpperCase()," Drawer"]}),e.jsx(d,{sx:{my:2}}),e.jsxs(n,{children:["Drawer from the ",i," edge."]})]})},i))]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250,
          p: 2
        }}>
            <Typography variant="h6" gutterBottom>
              Drawer Menu
            </Typography>
            <Divider sx={{
            my: 2
          }} />
            <List>
              <ListItem>
                <InboxIcon sx={{
                mr: 2
              }} />
                Inbox
              </ListItem>
              <ListItem>
                <MailIcon sx={{
                mr: 2
              }} />
                Mail
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Default temporary drawer from the left side",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250
        }} role="presentation">
            <List>
              <ListItem>
                <HomeIcon sx={{
                mr: 2
              }} />
                Home
              </ListItem>
              <ListItem>
                <InboxIcon sx={{
                mr: 2
              }} />
                Inbox
              </ListItem>
              <ListItem>
                <MailIcon sx={{
                mr: 2
              }} />
                Mail
              </ListItem>
              <ListItem>
                <SettingsIcon sx={{
                mr: 2
              }} />
                Settings
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Drawer anchored to the left (default)",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Right Drawer
        </Button>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250,
          p: 2
        }}>
            <Typography variant="h6">Right Side Menu</Typography>
            <Divider sx={{
            my: 2
          }} />
            <List>
              <ListItem>Menu Item 1</ListItem>
              <ListItem>Menu Item 2</ListItem>
              <ListItem>Menu Item 3</ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Drawer anchored to the right",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Top Drawer
        </Button>
        <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          height: 200,
          p: 3
        }}>
            <Typography variant="h5" gutterBottom>
              Top Drawer
            </Typography>
            <Typography>Useful for notifications or quick access menus.</Typography>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Drawer anchored to the top",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Bottom Drawer
        </Button>
        <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          height: 200,
          p: 3
        }}>
            <Typography variant="h5" gutterBottom>
              Bottom Drawer
            </Typography>
            <Typography>Common for mobile action sheets or filters.</Typography>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...w.parameters?.docs?.source},description:{story:"Drawer anchored to the bottom",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer variant="temporary" open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250,
          p: 2
        }}>
            <Typography variant="h6" gutterBottom>
              Temporary Drawer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
            mb: 2
          }}>
              Closes when clicking outside or pressing ESC. Best for mobile.
            </Typography>
            <Divider sx={{
            my: 2
          }} />
            <List>
              <ListItem>Navigation Item 1</ListItem>
              <ListItem>Navigation Item 2</ListItem>
              <ListItem>Navigation Item 3</ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...j.parameters?.docs?.source},description:{story:"Temporary drawer (default) - mobile pattern",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box sx={{
      display: 'flex'
    }}>
        <Drawer variant="persistent" anchor="left" open={open} sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box'
        }
      }}>
          <Box sx={{
          p: 2
        }}>
            <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}>
              <Typography variant="h6">Persistent</Typography>
              <IconButton onClick={() => setOpen(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>
            <Divider sx={{
            mb: 2
          }} />
            <List>
              <ListItem>Dashboard</ListItem>
              <ListItem>Analytics</ListItem>
              <ListItem>Reports</ListItem>
              <ListItem>Settings</ListItem>
            </List>
          </Box>
        </Drawer>
        <Box sx={{
        flexGrow: 1,
        p: 3,
        transition: 'margin 0.3s',
        ml: open ? 0 : 0
      }}>
          <IconButton onClick={() => setOpen(!open)} sx={{
          mb: 2
        }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" gutterBottom>
            Main Content Area
          </Typography>
          <Typography paragraph>
            Persistent drawer pushes content to the side when open. Content shifts with the drawer.
          </Typography>
          <Typography paragraph>
            Click the menu icon to toggle the drawer. The drawer will stay open until explicitly closed.
          </Typography>
        </Box>
      </Box>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Persistent drawer - stays open, pushes content",...f.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex'
  }}>
      <Drawer variant="permanent" anchor="left" sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box'
      }
    }}>
        <Box sx={{
        p: 2
      }}>
          <Typography variant="h6" gutterBottom>
            Permanent Drawer
          </Typography>
          <Divider sx={{
          my: 2
        }} />
          <List>
            <ListItem>
              <HomeIcon sx={{
              mr: 2
            }} />
              Home
            </ListItem>
            <ListItem>
              <InboxIcon sx={{
              mr: 2
            }} />
              Inbox
            </ListItem>
            <ListItem>
              <MailIcon sx={{
              mr: 2
            }} />
              Mail
            </ListItem>
            <ListItem>
              <SettingsIcon sx={{
              mr: 2
            }} />
              Settings
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{
      flexGrow: 1,
      p: 3
    }}>
        <Typography variant="h4" gutterBottom>
          Main Content Area
        </Typography>
        <Typography paragraph>
          Permanent drawer is always visible and cannot be closed. Best for desktop applications
          where navigation is always needed.
        </Typography>
        <Typography paragraph>
          Content is displayed alongside the drawer. The drawer is part of the page layout.
        </Typography>
      </Box>
    </Box>
}`,...B.parameters?.docs?.source},description:{story:"Permanent drawer - always visible",...B.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Drawer (Elevation 24)
        </Button>
        <Drawer elevation={24} open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250,
          p: 2
        }}>
            <Typography variant="h6" gutterBottom>
              High Elevation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This drawer has maximum elevation (24) for a prominent shadow.
            </Typography>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Drawer with custom elevation",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Drawer (No Shadow)
        </Button>
        <Drawer elevation={0} open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250,
          p: 2
        }}>
            <Typography variant="h6" gutterBottom>
              No Elevation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This drawer has no shadow (elevation: 0).
            </Typography>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Drawer with no elevation",...b.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Without Backdrop
        </Button>
        <Drawer hideBackdrop open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250,
          p: 2
        }}>
            <Typography variant="h6" gutterBottom>
              No Backdrop
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
            mb: 2
          }}>
              No overlay behind the drawer. Content remains interactive.
            </Typography>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </Drawer>
        <Box sx={{
        p: 3
      }}>
          <Typography>
            You can still interact with this content while the drawer is open because there's no
            backdrop.
          </Typography>
        </Box>
      </Box>;
  }
}`,...I.parameters?.docs?.source},description:{story:"Drawer without backdrop",...I.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Wide Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)} slotProps={{
        paper: {
          sx: {
            width: 400
          }
        }
      }}>
          <Box sx={{
          p: 3
        }}>
            <Typography variant="h5" gutterBottom>
              Wide Drawer (400px)
            </Typography>
            <Divider sx={{
            my: 2
          }} />
            <Typography paragraph>
              This drawer is 400px wide instead of the standard 250px.
            </Typography>
            <Typography paragraph>
              Width can be customized using the slotProps.paper.sx prop.
            </Typography>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...D.parameters?.docs?.source},description:{story:"Drawer with custom width",...D.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const drawerContent = <Box sx={{
      width: 240,
      p: 2
    }}>
        <Typography variant="h6" gutterBottom>
          Responsive Navigation
        </Typography>
        <Divider sx={{
        my: 2
      }} />
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Box>;
    return <Box sx={{
      display: 'flex'
    }}>
        {/* Mobile drawer (temporary) */}
        <Drawer variant="temporary" open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{
        display: {
          xs: 'block',
          sm: 'none'
        },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240
        }
      }}>
          {drawerContent}
        </Drawer>

        {/* Desktop drawer (permanent) */}
        <Drawer variant="permanent" sx={{
        display: {
          xs: 'none',
          sm: 'block'
        },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240
        }
      }} open>
          {drawerContent}
        </Drawer>

        <Box sx={{
        flexGrow: 1,
        p: 3
      }}>
          <IconButton onClick={() => setMobileOpen(true)} sx={{
          display: {
            sm: 'none'
          },
          mb: 2
        }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" gutterBottom>
            Responsive Layout
          </Typography>
          <Typography paragraph>
            On mobile (xs): Temporary drawer with hamburger menu.
          </Typography>
          <Typography paragraph>
            On desktop (sm+): Permanent drawer always visible.
          </Typography>
          <Typography paragraph>Resize your browser to see the responsive behavior.</Typography>
        </Box>
      </Box>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Responsive drawer - temporary on mobile, permanent on desktop",...C.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Colored Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)} slotProps={{
        paper: {
          sx: {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText'
          }
        }
      }}>
          <Box sx={{
          width: 250,
          p: 2
        }}>
            <Typography variant="h6" gutterBottom>
              Custom Background
            </Typography>
            <Divider sx={{
            my: 2,
            borderColor: 'rgba(255,255,255,0.2)'
          }} />
            <List>
              <ListItem sx={{
              color: 'inherit'
            }}>Menu Item 1</ListItem>
              <ListItem sx={{
              color: 'inherit'
            }}>Menu Item 2</ListItem>
              <ListItem sx={{
              color: 'inherit'
            }}>Menu Item 3</ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Drawer with custom background color",...T.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box sx={{
      display: 'flex'
    }}>
        <Drawer variant="permanent" open={open} sx={{
        width: open ? 240 : 64,
        flexShrink: 0,
        transition: 'width 0.3s',
        '& .MuiDrawer-paper': {
          width: open ? 240 : 64,
          overflowX: 'hidden',
          transition: 'width 0.3s'
        }
      }}>
          <Box sx={{
          p: 2
        }}>
            <IconButton onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
            {open && <Typography variant="h6" sx={{
            mt: 2
          }}>
                Mini Drawer
              </Typography>}
            <List sx={{
            mt: 2
          }}>
              <ListItem>
                <HomeIcon sx={{
                mr: open ? 2 : 0
              }} />
                {open && 'Home'}
              </ListItem>
              <ListItem>
                <InboxIcon sx={{
                mr: open ? 2 : 0
              }} />
                {open && 'Inbox'}
              </ListItem>
              <ListItem>
                <MailIcon sx={{
                mr: open ? 2 : 0
              }} />
                {open && 'Mail'}
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box sx={{
        flexGrow: 1,
        p: 3
      }}>
          <Typography variant="h4" gutterBottom>
            Mini Variant Drawer
          </Typography>
          <Typography paragraph>
            Click the menu icon in the drawer to toggle between mini and expanded states.
          </Typography>
          <Typography paragraph>
            When collapsed, shows only icons. When expanded, shows labels too.
          </Typography>
        </Box>
      </Box>;
  }
}`,...L.parameters?.docs?.source},description:{story:"Mini variant drawer (clipped)",...L.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = React.useState({
      left: false,
      right: false,
      top: false,
      bottom: false
    });
    const toggleDrawer = (anchor: 'left' | 'right' | 'top' | 'bottom', open: boolean) => {
      setState({
        ...state,
        [anchor]: open
      });
    };
    return <Box sx={{
      textAlign: 'center',
      p: 3
    }}>
        <Typography variant="h5" gutterBottom>
          Drawer Anchor Positions
        </Typography>
        <Box sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        mt: 3
      }}>
          {(['left', 'right', 'top', 'bottom'] as const).map(anchor => <Button key={anchor} variant="outlined" onClick={() => toggleDrawer(anchor, true)}>
              {anchor}
            </Button>)}
        </Box>

        {(['left', 'right', 'top', 'bottom'] as const).map(anchor => <Drawer key={anchor} anchor={anchor} open={state[anchor]} onClose={() => toggleDrawer(anchor, false)}>
            <Box sx={{
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
          height: anchor === 'top' || anchor === 'bottom' ? 150 : 'auto',
          p: 2
        }}>
              <Typography variant="h6">{anchor.toUpperCase()} Drawer</Typography>
              <Divider sx={{
            my: 2
          }} />
              <Typography>Drawer from the {anchor} edge.</Typography>
            </Box>
          </Drawer>)}
      </Box>;
  }
}`,...S.parameters?.docs?.source},description:{story:"All anchor positions comparison",...S.parameters?.docs?.description}}};const Re=["Default","AnchorLeft","AnchorRight","AnchorTop","AnchorBottom","TemporaryVariant","PersistentVariant","PermanentVariant","CustomElevation","NoElevation","NoBackdrop","CustomWidth","ResponsiveDrawer","CustomBackground","MiniVariant","AllAnchors"];export{S as AllAnchors,w as AnchorBottom,u as AnchorLeft,y as AnchorRight,g as AnchorTop,T as CustomBackground,v as CustomElevation,D as CustomWidth,m as Default,L as MiniVariant,I as NoBackdrop,b as NoElevation,B as PermanentVariant,f as PersistentVariant,C as ResponsiveDrawer,j as TemporaryVariant,Re as __namedExportsOrder,Me as default};
