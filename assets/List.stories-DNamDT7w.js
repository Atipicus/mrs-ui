import{j as e}from"./iframe-Ll-6DOMq.js";import{I as g,D as b,S as B,A as r}from"./SendRounded-DWky0by4.js";import{L as c,a as t}from"./ListItem-D7sqdlGe.js";import{I as s}from"./Icon-CC2tsao9.js";import{I as n}from"./IconButton-CDcEjWBg.js";import{B as d}from"./Box-CT6B1tpM.js";import{L as i}from"./ListItemText-Ckv0OS8_.js";import{T as a}from"./Typography-BDVHBFsV.js";import{L as o}from"./ListItemIcon-BbAeOygn.js";import{L as T}from"./ListSubheader-1uwLJISG.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-B--y33RA.js";import"./createSimplePaletteValueFilter-Cr3O56rL.js";import"./List-sWKbttLs.js";import"./ListContext-Dyk9lgPk.js";import"./useTheme-DU8NCu1L.js";import"./ListItem-BfUiyZu2.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-DfG1cH3M.js";import"./useForkRef-CyvFleoK.js";import"./listItemButtonClasses-DAkIfGUV.js";import"./ListItemButton-WPOtJWzj.js";import"./ButtonBase-Dmk_TwK3.js";import"./useEventCallback-CNwJKNkp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BoOLUbup.js";import"./CircularProgress-D8a3t22V.js";import"./listItemTextClasses-sqITzjah.js";import"./useSlot-CKkKY_MB.js";import"./resolveComponentProps--b04hUqz.js";import"./listItemIconClasses-BThAd0_I.js";const te={title:"Molecules/List",component:c,tags:["autodocs"],argTypes:{dense:{control:"boolean",description:"If `true`, compact vertical padding is used."},disablePadding:{control:"boolean",description:"If `true`, vertical padding is removed from the list."},sx:{control:"object",description:"The system prop that allows defining system overrides as well as additional CSS styles."}},parameters:{layout:"centered"}},m={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(c,{children:[e.jsx(t,{children:e.jsx(i,{primary:"List item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"List item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"List item 3"})})]})})},I={render:()=>e.jsxs(d,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsx(a,{variant:"body2",sx:{mb:2},children:"With Padding (default)"}),e.jsxs(c,{sx:{border:"1px solid",borderColor:"divider"},children:[e.jsx(t,{children:e.jsx(i,{primary:"Item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 3"})})]})]})},x={render:()=>e.jsxs(d,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsx(a,{variant:"body2",sx:{mb:2},children:"Disable Padding"}),e.jsxs(c,{disablePadding:!0,sx:{border:"1px solid",borderColor:"divider"},children:[e.jsx(t,{children:e.jsx(i,{primary:"Item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 3"})})]})]}),parameters:{docs:{description:{story:"List with vertical padding removed using disablePadding prop."}}}},p={render:()=>e.jsxs(d,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsx(a,{variant:"body2",sx:{mb:2},children:"Dense List"}),e.jsxs(c,{dense:!0,children:[e.jsx(t,{children:e.jsx(i,{primary:"Dense item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Dense item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Dense item 3"})})]})]}),parameters:{docs:{description:{story:"List with compact vertical padding for dense layouts."}}}},l={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(c,{children:[e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:g})}),e.jsx(i,{primary:"Inbox"})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:b})}),e.jsx(i,{primary:"Drafts"})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:B})}),e.jsx(i,{primary:"Sent"})]})]})})},L={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(c,{children:[e.jsxs(t,{secondaryAction:e.jsx(n,{edge:"end","aria-label":"add",children:e.jsx(s,{icon:r})}),children:[e.jsx(o,{children:e.jsx(s,{icon:g})}),e.jsx(i,{primary:"Inbox"})]}),e.jsxs(t,{secondaryAction:e.jsx(n,{edge:"end","aria-label":"add",children:e.jsx(s,{icon:r})}),children:[e.jsx(o,{children:e.jsx(s,{icon:b})}),e.jsx(i,{primary:"Drafts"})]})]})})},u={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(c,{subheader:e.jsx(T,{component:"div",id:"list-subheader",children:"Settings"}),children:[e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{name:"WifiRounded"})}),e.jsx(i,{primary:"Wi-Fi"})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{name:"BluetoothRounded"})}),e.jsx(i,{primary:"Bluetooth"})]})]})})},h={render:()=>e.jsxs(d,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[e.jsxs(d,{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Disable Padding = False, Dense = False"}),e.jsxs(c,{sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]})]})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Disable Padding = True, Dense = False"}),e.jsxs(c,{disablePadding:!0,sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]})]})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Disable Padding = False, Dense = True"}),e.jsxs(c,{dense:!0,sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]})]})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Disable Padding = True, Dense = True"}),e.jsxs(c,{dense:!0,disablePadding:!0,sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(s,{icon:r})}),e.jsx(i,{primary:"List item"}),e.jsx(n,{edge:"end",children:e.jsx(s,{icon:r})})]})]})]})]}),parameters:{docs:{description:{story:"All combinations of disablePadding and dense props."}}}},j={args:{dense:!1,disablePadding:!1},render:y=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(c,{...y,children:[e.jsx(t,{children:e.jsx(i,{primary:"Item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 3"})})]})}),parameters:{docs:{description:{story:"Interactive playground to experiment with all List props."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem>
          <ListItemText primary="List item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 3" />
        </ListItem>
      </List>
    </Box>
}`,...m.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <Typography variant="body2" sx={{
      mb: 2
    }}>
        With Padding (default)
      </Typography>
      <List sx={{
      border: '1px solid',
      borderColor: 'divider'
    }}>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <Typography variant="body2" sx={{
      mb: 2
    }}>
        Disable Padding
      </Typography>
      <List disablePadding sx={{
      border: '1px solid',
      borderColor: 'divider'
    }}>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'List with vertical padding removed using disablePadding prop.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <Typography variant="body2" sx={{
      mb: 2
    }}>
        Dense List
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Dense item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dense item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dense item 3" />
        </ListItem>
      </List>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'List with compact vertical padding for dense layouts.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <Icon icon={InboxRoundedIcon} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon icon={DraftsRoundedIcon} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon icon={SendRoundedIcon} />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
      </List>
    </Box>
}`,...l.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem secondaryAction={<IconButton edge="end" aria-label="add">
              <Icon icon={AddRoundedIcon} />
            </IconButton>}>
          <ListItemIcon>
            <Icon icon={InboxRoundedIcon} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem secondaryAction={<IconButton edge="end" aria-label="add">
              <Icon icon={AddRoundedIcon} />
            </IconButton>}>
          <ListItemIcon>
            <Icon icon={DraftsRoundedIcon} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </Box>
}`,...L.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List subheader={<ListSubheader component="div" id="list-subheader">
            Settings
          </ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <Icon name="WifiRounded" />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon name="BluetoothRounded" />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
        </ListItem>
      </List>
    </Box>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 2
  }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = False, Dense = False
        </Typography>
        <List sx={{
        width: 300,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = True, Dense = False
        </Typography>
        <List disablePadding sx={{
        width: 300,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = False, Dense = True
        </Typography>
        <List dense sx={{
        width: 300,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = True, Dense = True
        </Typography>
        <List dense disablePadding sx={{
        width: 300,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider'
      }}>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon icon={AddRoundedIcon} />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon icon={AddRoundedIcon} />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All combinations of disablePadding and dense props.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    dense: false,
    disablePadding: false
  },
  render: args => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List {...args}>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all List props.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};const ie=["Default","WithPadding","DisablePadding","Dense","WithIcons","WithSecondaryActions","WithSubheader","AllVariants","Playground"];export{h as AllVariants,m as Default,p as Dense,x as DisablePadding,j as Playground,l as WithIcons,I as WithPadding,L as WithSecondaryActions,u as WithSubheader,ie as __namedExportsOrder,te as default};
