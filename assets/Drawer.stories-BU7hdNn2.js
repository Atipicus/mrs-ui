import{j as e,R as c}from"./iframe-CaJfxxeA.js";import{D as i}from"./Drawer-CuWhNoE_.js";import{L as d,a as s}from"./ListItem-DgAOhsma.js";import{D as h}from"./Divider-C_QsBzDG.js";import{I as m}from"./IconButton-CNXkwKT4.js";import{B as l}from"./Button-DD50qzgq.js";import{T as n}from"./Typography-D7jCPIvG.js";import{M as a}from"./MaterialSymbol-D8ChqBBP.js";import{B as o}from"./Box-C99_ze0b.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BY3Nwc-v.js";import"./createSimplePaletteValueFilter-B7jR09Rm.js";import"./useSlot-B_nPvQQX.js";import"./resolveComponentProps-DD7apTsv.js";import"./useForkRef-C3chRDOJ.js";import"./mergeSlotProps-COFBH2y_.js";import"./utils-BCO3XpyG.js";import"./ButtonBase-BHnwxTjD.js";import"./useEventCallback-BYdCS-Tq.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BkrHF929.js";import"./index-BGvov6K-.js";import"./getReactElementRef-PJPOUa7x.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-ChwA72F2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DWu0DfK1.js";import"./Paper-CI5osXNJ.js";import"./List-CEucsaYR.js";import"./ListContext-2reKN68E.js";import"./ListItem-CgpX3Sy_.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-1rWydckO.js";import"./listItemButtonClasses-CK4Pr2Uh.js";import"./ListItemButton-DzSofQKB.js";import"./Divider-DzQs76_K.js";import"./dividerClasses-DQUHGsGO.js";import"./IconButton-CdFiAkt1.js";import"./CircularProgress-B70wwna8.js";import"./Button-BJKs2Jb4.js";import"./Typography-DVqwCqe_.js";import"./Box-DRdjk_r0.js";const Be={title:"Molecules/Drawer",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Side navigation panel component. Provides three variants (temporary, persistent, permanent) for different use cases. Temporary for mobile, persistent for toggleable desktop nav, permanent for always-visible navigation."}}},argTypes:{anchor:{control:"select",options:["left","right","top","bottom"],description:"Side from which the drawer appears",table:{defaultValue:{summary:"left"}}},variant:{control:"select",options:["temporary","persistent","permanent"],description:"Drawer behavior type",table:{defaultValue:{summary:"temporary"}}},open:{control:"boolean",description:"If true, the drawer is open",table:{defaultValue:{summary:!1}}},elevation:{control:{type:"range",min:0,max:24,step:1},description:"Shadow depth elevation",table:{defaultValue:{summary:16}}},hideBackdrop:{control:"boolean",description:"If true, the backdrop is not rendered",table:{defaultValue:{summary:!1}}}}},u={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"contained",onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(i,{open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Drawer Menu"}),e.jsx(h,{sx:{my:2}}),e.jsxs(d,{children:[e.jsxs(s,{children:[e.jsx(a,{icon:"inbox",sx:{mr:2}}),"Inbox"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"mail",sx:{mr:2}}),"Mail"]})]})]})})]})}},y={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(m,{onClick:()=>r(!0),children:e.jsx(a,{icon:"menu"})}),e.jsx(i,{anchor:"left",open:t,onClose:()=>r(!1),children:e.jsx(o,{sx:{width:250},role:"presentation",children:e.jsxs(d,{children:[e.jsxs(s,{children:[e.jsx(a,{icon:"home",sx:{mr:2}}),"Home"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"inbox",sx:{mr:2}}),"Inbox"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"mail",sx:{mr:2}}),"Mail"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"settings",sx:{mr:2}}),"Settings"]})]})})})]})}},g={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"outlined",onClick:()=>r(!0),children:"Open Right Drawer"}),e.jsx(i,{anchor:"right",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",children:"Right Side Menu"}),e.jsx(h,{sx:{my:2}}),e.jsxs(d,{children:[e.jsx(s,{children:"Menu Item 1"}),e.jsx(s,{children:"Menu Item 2"}),e.jsx(s,{children:"Menu Item 3"})]})]})})]})}},w={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"contained",onClick:()=>r(!0),children:"Open Top Drawer"}),e.jsx(i,{anchor:"top",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{height:200,p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Top Drawer"}),e.jsx(n,{children:"Useful for notifications or quick access menus."})]})})]})}},j={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"outlined",onClick:()=>r(!0),children:"Open Bottom Drawer"}),e.jsx(i,{anchor:"bottom",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{height:200,p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Bottom Drawer"}),e.jsx(n,{children:"Common for mobile action sheets or filters."})]})})]})}},f={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(m,{onClick:()=>r(!0),children:e.jsx(a,{icon:"menu"})}),e.jsx(i,{variant:"temporary",open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Temporary Drawer"}),e.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"Closes when clicking outside or pressing ESC. Best for mobile."}),e.jsx(h,{sx:{my:2}}),e.jsxs(d,{children:[e.jsx(s,{children:"Navigation Item 1"}),e.jsx(s,{children:"Navigation Item 2"}),e.jsx(s,{children:"Navigation Item 3"})]})]})})]})}},B={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(i,{variant:"persistent",anchor:"left",open:t,sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},children:e.jsxs(o,{sx:{p:2},children:[e.jsxs(o,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[e.jsx(n,{variant:"h6",children:"Persistent"}),e.jsx(m,{onClick:()=>r(!1),children:e.jsx(a,{icon:"chevron_left"})})]}),e.jsx(h,{sx:{mb:2}}),e.jsxs(d,{children:[e.jsx(s,{children:"Dashboard"}),e.jsx(s,{children:"Analytics"}),e.jsx(s,{children:"Reports"}),e.jsx(s,{children:"Settings"})]})]})}),e.jsxs(o,{sx:{flexGrow:1,p:3,transition:"margin 0.3s",ml:0},children:[e.jsx(m,{onClick:()=>r(!t),sx:{mb:2},children:e.jsx(a,{icon:"menu"})}),e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),e.jsx(n,{paragraph:!0,children:"Persistent drawer pushes content to the side when open. Content shifts with the drawer."}),e.jsx(n,{paragraph:!0,children:"Click the menu icon to toggle the drawer. The drawer will stay open until explicitly closed."})]})]})}},b={render:()=>e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(i,{variant:"permanent",anchor:"left",sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},children:e.jsxs(o,{sx:{p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Permanent Drawer"}),e.jsx(h,{sx:{my:2}}),e.jsxs(d,{children:[e.jsxs(s,{children:[e.jsx(a,{icon:"home",sx:{mr:2}}),"Home"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"inbox",sx:{mr:2}}),"Inbox"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"mail",sx:{mr:2}}),"Mail"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"settings",sx:{mr:2}}),"Settings"]})]})]})}),e.jsxs(o,{sx:{flexGrow:1,p:3},children:[e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Main Content Area"}),e.jsx(n,{paragraph:!0,children:"Permanent drawer is always visible and cannot be closed. Best for desktop applications where navigation is always needed."}),e.jsx(n,{paragraph:!0,children:"Content is displayed alongside the drawer. The drawer is part of the page layout."})]})]})},v={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"contained",onClick:()=>r(!0),children:"Open Drawer (Elevation 24)"}),e.jsx(i,{elevation:24,open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"High Elevation"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"This drawer has maximum elevation (24) for a prominent shadow."})]})})]})}},D={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"outlined",onClick:()=>r(!0),children:"Open Drawer (No Shadow)"}),e.jsx(i,{elevation:0,open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"No Elevation"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"This drawer has no shadow (elevation: 0)."})]})})]})}},C={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"contained",onClick:()=>r(!0),children:"Open Without Backdrop"}),e.jsx(i,{hideBackdrop:!0,open:t,onClose:()=>r(!1),children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"No Backdrop"}),e.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"No overlay behind the drawer. Content remains interactive."}),e.jsx(l,{onClick:()=>r(!1),children:"Close"})]})}),e.jsx(o,{sx:{p:3},children:e.jsx(n,{children:"You can still interact with this content while the drawer is open because there's no backdrop."})})]})}},T={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"contained",onClick:()=>r(!0),children:"Open Wide Drawer"}),e.jsx(i,{open:t,onClose:()=>r(!1),slotProps:{paper:{sx:{width:400}}},children:e.jsxs(o,{sx:{p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Wide Drawer (400px)"}),e.jsx(h,{sx:{my:2}}),e.jsx(n,{paragraph:!0,children:"This drawer is 400px wide instead of the standard 250px."}),e.jsx(n,{paragraph:!0,children:"Width can be customized using the slotProps.paper.sx prop."})]})})]})}},I={render:()=>{const[t,r]=c.useState(!1),x=e.jsxs(o,{sx:{width:240,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Responsive Navigation"}),e.jsx(h,{sx:{my:2}}),e.jsxs(d,{children:[e.jsx(s,{children:"Home"}),e.jsx(s,{children:"Products"}),e.jsx(s,{children:"About"}),e.jsx(s,{children:"Contact"})]})]});return e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(i,{variant:"temporary",open:t,onClose:()=>r(!1),sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:x}),e.jsx(i,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},open:!0,children:x}),e.jsxs(o,{sx:{flexGrow:1,p:3},children:[e.jsx(m,{onClick:()=>r(!0),sx:{display:{sm:"none"},mb:2},children:e.jsx(a,{icon:"menu"})}),e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Responsive Layout"}),e.jsx(n,{paragraph:!0,children:"On mobile (xs): Temporary drawer with hamburger menu."}),e.jsx(n,{paragraph:!0,children:"On desktop (sm+): Permanent drawer always visible."}),e.jsx(n,{paragraph:!0,children:"Resize your browser to see the responsive behavior."})]})]})}},S={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{children:[e.jsx(l,{variant:"contained",onClick:()=>r(!0),children:"Open Colored Drawer"}),e.jsx(i,{open:t,onClose:()=>r(!1),slotProps:{paper:{sx:{backgroundColor:"primary.main",color:"primary.contrastText"}}},children:e.jsxs(o,{sx:{width:250,p:2},children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Custom Background"}),e.jsx(h,{sx:{my:2,borderColor:"rgba(255,255,255,0.2)"}}),e.jsxs(d,{children:[e.jsx(s,{sx:{color:"inherit"},children:"Menu Item 1"}),e.jsx(s,{sx:{color:"inherit"},children:"Menu Item 2"}),e.jsx(s,{sx:{color:"inherit"},children:"Menu Item 3"})]})]})})]})}},L={render:()=>{const[t,r]=c.useState(!1);return e.jsxs(o,{sx:{display:"flex"},children:[e.jsx(i,{variant:"permanent",open:t,sx:{width:t?240:64,flexShrink:0,transition:"width 0.3s","& .MuiDrawer-paper":{width:t?240:64,overflowX:"hidden",transition:"width 0.3s"}},children:e.jsxs(o,{sx:{p:2},children:[e.jsx(m,{onClick:()=>r(!t),children:e.jsx(a,{icon:"menu"})}),t&&e.jsx(n,{variant:"h6",sx:{mt:2},children:"Mini Drawer"}),e.jsxs(d,{sx:{mt:2},children:[e.jsxs(s,{children:[e.jsx(a,{icon:"home",sx:{mr:t?2:0}}),t&&"Home"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"inbox",sx:{mr:t?2:0}}),t&&"Inbox"]}),e.jsxs(s,{children:[e.jsx(a,{icon:"mail",sx:{mr:t?2:0}}),t&&"Mail"]})]})]})}),e.jsxs(o,{sx:{flexGrow:1,p:3},children:[e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Mini Variant Drawer"}),e.jsx(n,{paragraph:!0,children:"Click the menu icon in the drawer to toggle between mini and expanded states."}),e.jsx(n,{paragraph:!0,children:"When collapsed, shows only icons. When expanded, shows labels too."})]})]})}},O={render:()=>{const[t,r]=c.useState({left:!1,right:!1,top:!1,bottom:!1}),x=(p,k)=>{r({...t,[p]:k})};return e.jsxs(o,{sx:{textAlign:"center",p:3},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Drawer Anchor Positions"}),e.jsx(o,{sx:{display:"flex",gap:2,justifyContent:"center",mt:3},children:["left","right","top","bottom"].map(p=>e.jsx(l,{variant:"outlined",onClick:()=>x(p,!0),children:p},p))}),["left","right","top","bottom"].map(p=>e.jsx(i,{anchor:p,open:t[p],onClose:()=>x(p,!1),children:e.jsxs(o,{sx:{width:p==="top"||p==="bottom"?"auto":250,height:p==="top"||p==="bottom"?150:"auto",p:2},children:[e.jsxs(n,{variant:"h6",children:[p.toUpperCase()," Drawer"]}),e.jsx(h,{sx:{my:2}}),e.jsxs(n,{children:["Drawer from the ",p," edge."]})]})},p))]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
                <MaterialSymbol icon="inbox" sx={{
                mr: 2
              }} />
                Inbox
              </ListItem>
              <ListItem>
                <MaterialSymbol icon="mail" sx={{
                mr: 2
              }} />
                Mail
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...u.parameters?.docs?.source},description:{story:"Default temporary drawer from the left side",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <IconButton onClick={() => setOpen(true)}>
          <MaterialSymbol icon="menu" />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{
          width: 250
        }} role="presentation">
            <List>
              <ListItem>
                <MaterialSymbol icon="home" sx={{
                mr: 2
              }} />
                Home
              </ListItem>
              <ListItem>
                <MaterialSymbol icon="inbox" sx={{
                mr: 2
              }} />
                Inbox
              </ListItem>
              <ListItem>
                <MaterialSymbol icon="mail" sx={{
                mr: 2
              }} />
                Mail
              </ListItem>
              <ListItem>
                <MaterialSymbol icon="settings" sx={{
                mr: 2
              }} />
                Settings
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Drawer anchored to the left (default)",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Drawer anchored to the right",...g.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Drawer anchored to the top",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Drawer anchored to the bottom",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Box>
        <IconButton onClick={() => setOpen(true)}>
          <MaterialSymbol icon="menu" />
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
}`,...f.parameters?.docs?.source},description:{story:"Temporary drawer (default) - mobile pattern",...f.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
                <MaterialSymbol icon="chevron_left" />
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
            <MaterialSymbol icon="menu" />
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
}`,...B.parameters?.docs?.source},description:{story:"Persistent drawer - stays open, pushes content",...B.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
              <MaterialSymbol icon="home" sx={{
              mr: 2
            }} />
              Home
            </ListItem>
            <ListItem>
              <MaterialSymbol icon="inbox" sx={{
              mr: 2
            }} />
              Inbox
            </ListItem>
            <ListItem>
              <MaterialSymbol icon="mail" sx={{
              mr: 2
            }} />
              Mail
            </ListItem>
            <ListItem>
              <MaterialSymbol icon="settings" sx={{
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
}`,...b.parameters?.docs?.source},description:{story:"Permanent drawer - always visible",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Drawer with custom elevation",...v.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Drawer with no elevation",...D.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Drawer without backdrop",...C.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Drawer with custom width",...T.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
            <MaterialSymbol icon="menu" />
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
}`,...I.parameters?.docs?.source},description:{story:"Responsive drawer - temporary on mobile, permanent on desktop",...I.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Drawer with custom background color",...S.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
              <MaterialSymbol icon="menu" />
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
                <MaterialSymbol icon="home" sx={{
                mr: open ? 2 : 0
              }} />
                {open && 'Home'}
              </ListItem>
              <ListItem>
                <MaterialSymbol icon="inbox" sx={{
                mr: open ? 2 : 0
              }} />
                {open && 'Inbox'}
              </ListItem>
              <ListItem>
                <MaterialSymbol icon="mail" sx={{
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
}`,...L.parameters?.docs?.source},description:{story:"Mini variant drawer (clipped)",...L.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"All anchor positions comparison",...O.parameters?.docs?.description}}};const be=["Default","AnchorLeft","AnchorRight","AnchorTop","AnchorBottom","TemporaryVariant","PersistentVariant","PermanentVariant","CustomElevation","NoElevation","NoBackdrop","CustomWidth","ResponsiveDrawer","CustomBackground","MiniVariant","AllAnchors"];export{O as AllAnchors,j as AnchorBottom,y as AnchorLeft,g as AnchorRight,w as AnchorTop,S as CustomBackground,v as CustomElevation,T as CustomWidth,u as Default,L as MiniVariant,C as NoBackdrop,D as NoElevation,b as PermanentVariant,B as PersistentVariant,I as ResponsiveDrawer,f as TemporaryVariant,be as __namedExportsOrder,Be as default};
