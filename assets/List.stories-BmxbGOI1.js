import{j as e}from"./iframe-guHiHJgM.js";import{L as a,a as t}from"./ListItem-C0AxonY2.js";import{M as r}from"./MaterialSymbol-BAO3yf_G.js";import{I as b}from"./Icon-c4QP5CWw.js";import{I as o}from"./IconButton-Dj-d20Ey.js";import{B as d}from"./Box-BbQdT_CQ.js";import{L as i}from"./ListItemText-Dv03nXc6.js";import{T as n}from"./Typography-Di50O9to.js";import{L as s}from"./ListItemIcon-bfW6hAVe.js";import{L as g}from"./ListSubheader-Bky9Ksgf.js";import"./preload-helper-PPVm8Dsz.js";import"./List-DWz_G5xb.js";import"./createSimplePaletteValueFilter-N-k1R-Q1.js";import"./ListContext-DwmbI7UR.js";import"./useTheme-Me__gUwA.js";import"./ListItem-C4LlirRR.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-DU1oubEv.js";import"./useForkRef-Uy7NJ8ru.js";import"./listItemButtonClasses-yj18y1vI.js";import"./ListItemButton-DeGOTX7Z.js";import"./ButtonBase-C6XQz7ud.js";import"./useEventCallback-DI0BNUn9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cxax6mie.js";import"./CircularProgress-BOENF8kS.js";import"./listItemTextClasses-CYOdnW28.js";import"./useSlot-BwZmQJDP.js";import"./resolveComponentProps-DAy9J68u.js";import"./listItemIconClasses-B6NiNqDW.js";const Y={title:"Molecules/List",component:a,tags:["autodocs"],argTypes:{dense:{control:"boolean",description:"If `true`, compact vertical padding is used."},disablePadding:{control:"boolean",description:"If `true`, vertical padding is removed from the list."},sx:{control:"object",description:"The system prop that allows defining system overrides as well as additional CSS styles."}},parameters:{layout:"centered"}},m={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(a,{children:[e.jsx(t,{children:e.jsx(i,{primary:"List item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"List item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"List item 3"})})]})})},c={render:()=>e.jsxs(d,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsx(n,{variant:"body2",sx:{mb:2},children:"With Padding (default)"}),e.jsxs(a,{sx:{border:"1px solid",borderColor:"divider"},children:[e.jsx(t,{children:e.jsx(i,{primary:"Item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 3"})})]})]})},l={render:()=>e.jsxs(d,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsx(n,{variant:"body2",sx:{mb:2},children:"Disable Padding"}),e.jsxs(a,{disablePadding:!0,sx:{border:"1px solid",borderColor:"divider"},children:[e.jsx(t,{children:e.jsx(i,{primary:"Item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 3"})})]})]}),parameters:{docs:{description:{story:"List with vertical padding removed using disablePadding prop."}}}},x={render:()=>e.jsxs(d,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsx(n,{variant:"body2",sx:{mb:2},children:"Dense List"}),e.jsxs(a,{dense:!0,children:[e.jsx(t,{children:e.jsx(i,{primary:"Dense item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Dense item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Dense item 3"})})]})]}),parameters:{docs:{description:{story:"List with compact vertical padding for dense layouts."}}}},p={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(a,{children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"inbox"})}),e.jsx(i,{primary:"Inbox"})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"drafts"})}),e.jsx(i,{primary:"Drafts"})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"send"})}),e.jsx(i,{primary:"Sent"})]})]})})},I={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(a,{children:[e.jsxs(t,{secondaryAction:e.jsx(o,{edge:"end","aria-label":"add",children:e.jsx(r,{icon:"add"})}),children:[e.jsx(s,{children:e.jsx(r,{icon:"inbox"})}),e.jsx(i,{primary:"Inbox"})]}),e.jsxs(t,{secondaryAction:e.jsx(o,{edge:"end","aria-label":"add",children:e.jsx(r,{icon:"add"})}),children:[e.jsx(s,{children:e.jsx(r,{icon:"drafts"})}),e.jsx(i,{primary:"Drafts"})]})]})})},L={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(a,{subheader:e.jsx(g,{component:"div",id:"list-subheader",children:"Settings"}),children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(b,{name:"WifiRounded"})}),e.jsx(i,{primary:"Wi-Fi"})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(b,{name:"BluetoothRounded"})}),e.jsx(i,{primary:"Bluetooth"})]})]})})},h={render:()=>e.jsxs(d,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[e.jsxs(d,{children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Disable Padding = False, Dense = False"}),e.jsxs(a,{sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]})]})]}),e.jsxs(d,{children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Disable Padding = True, Dense = False"}),e.jsxs(a,{disablePadding:!0,sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]})]})]}),e.jsxs(d,{children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Disable Padding = False, Dense = True"}),e.jsxs(a,{dense:!0,sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]})]})]}),e.jsxs(d,{children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Disable Padding = True, Dense = True"}),e.jsxs(a,{dense:!0,disablePadding:!0,sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:[e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]}),e.jsxs(t,{children:[e.jsx(s,{children:e.jsx(r,{icon:"add"})}),e.jsx(i,{primary:"List item"}),e.jsx(o,{edge:"end",children:e.jsx(r,{icon:"add"})})]})]})]})]}),parameters:{docs:{description:{story:"All combinations of disablePadding and dense props."}}}},j={args:{dense:!1,disablePadding:!1},render:y=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(a,{...y,children:[e.jsx(t,{children:e.jsx(i,{primary:"Item 1"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 2"})}),e.jsx(t,{children:e.jsx(i,{primary:"Item 3"})})]})}),parameters:{docs:{description:{story:"Interactive playground to experiment with all List props."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <MaterialSymbol icon="inbox" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MaterialSymbol icon="drafts" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MaterialSymbol icon="send" />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
      </List>
    </Box>
}`,...p.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem secondaryAction={<IconButton edge="end" aria-label="add">
              <MaterialSymbol icon="add" />
            </IconButton>}>
          <ListItemIcon>
            <MaterialSymbol icon="inbox" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem secondaryAction={<IconButton edge="end" aria-label="add">
              <MaterialSymbol icon="add" />
            </IconButton>}>
          <ListItemIcon>
            <MaterialSymbol icon="drafts" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </Box>
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
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
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
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
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
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
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
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
}`,...j.parameters?.docs?.source}}};const Z=["Default","WithPadding","DisablePadding","Dense","WithIcons","WithSecondaryActions","WithSubheader","AllVariants","Playground"];export{h as AllVariants,m as Default,x as Dense,l as DisablePadding,j as Playground,p as WithIcons,c as WithPadding,I as WithSecondaryActions,L as WithSubheader,Z as __namedExportsOrder,Y as default};
