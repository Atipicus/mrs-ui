import{j as e,R as S}from"./iframe-BLPmWLdH.js";import{a as s,L as n}from"./ListItem-yUzEDvcl.js";import{M as t}from"./MaterialSymbol-cEDBCtg_.js";import{I as o}from"./IconButton-0gjxRU6T.js";import{B as d}from"./Box-p6I_ECHL.js";import{L as r}from"./ListItemText-CbRoSR4M.js";import{L as i}from"./ListItemIcon-CSubyPxO.js";import{D as B}from"./Divider-DegB7gxP.js";import{T as c}from"./Typography-C56izW4I.js";import"./preload-helper-PPVm8Dsz.js";import"./List-BY2-JbUv.js";import"./memoTheme-DEYF-N-o.js";import"./ListContext-BIudKXMj.js";import"./theme-helpers-CoFoCxtx.js";import"./useTheme-mA5jLGnb.js";import"./ListItem-iYIuVtJ3.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-lpkGzplD.js";import"./useForkRef-CM0N7afC.js";import"./listItemButtonClasses-ZZGmghv0.js";import"./ListItemButton-B5sjoBAc.js";import"./ButtonBase-tUTgC9_p.js";import"./useEventCallback-DJLENsCi.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CzMgArIn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CI049Rk9.js";import"./listItemTextClasses-DEVsPoEk.js";import"./useSlot-C88q11eF.js";import"./resolveComponentProps-BPbU6LNi.js";import"./listItemIconClasses-BmUMOZUg.js";import"./dividerClasses-CrERLmvD.js";const se={title:"Molecules/ListItem",component:s,tags:["autodocs"],argTypes:{button:{control:"boolean",description:"If `true`, the list item is a button (using `ListItemButton`)."},dense:{control:"boolean",description:"If `true`, compact vertical padding is used."},disableGutters:{control:"boolean",description:"If `true`, the left and right padding is removed."},divider:{control:"boolean",description:"If `true`, a 1px light border is added to the bottom."},disablePadding:{control:"boolean",description:"If `true`, all padding is removed."},selected:{control:"boolean",description:"If `true`, the list item is selected (only when button=true)."},disabled:{control:"boolean",description:"If `true`, the list item is disabled (only when button=true)."}},parameters:{layout:"centered"}},l={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsx(n,{children:e.jsx(s,{onClick:()=>console.log("Clicked"),children:e.jsx(r,{primary:"Default list item (interactive)"})})})}),parameters:{docs:{description:{story:"Default list item is interactive by default (button=true)."}}}},m={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsx(n,{children:e.jsxs(s,{onClick:()=>console.log("Clicked"),children:[e.jsx(i,{children:e.jsx(t,{icon:"inbox"})}),e.jsx(r,{primary:"List item with icon"})]})})})},x={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsx(n,{children:e.jsxs(s,{onClick:()=>console.log("Clicked"),children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"List item",secondary:"Secondary text"})]})})})},p={args:{button:!0,dense:!0,disableGutters:!0,divider:!0,disabled:!0,selected:!0,disablePadding:!0},render:a=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsx(n,{children:e.jsxs(s,{...a,onClick:()=>console.log("Clicked"),secondaryAction:e.jsx(o,{edge:"end","aria-label":"add",children:e.jsx(t,{icon:"add"})}),children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"List item"})]})})})},u={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(n,{children:[e.jsx(s,{divider:!0,children:e.jsx(r,{primary:"Item with divider"})}),e.jsx(s,{divider:!0,children:e.jsx(r,{primary:"Item with divider"})}),e.jsx(s,{children:e.jsx(r,{primary:"Last item (no divider)"})})]})})},I={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(n,{dense:!0,children:[e.jsxs(s,{dense:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Dense item 1",secondary:"Secondary"})]}),e.jsxs(s,{dense:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Dense item 2",secondary:"Secondary"})]}),e.jsxs(s,{dense:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Dense item 3",secondary:"Secondary"})]})]})})},b={render:()=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper",border:"1px solid",borderColor:"divider"},children:e.jsxs(n,{children:[e.jsxs(s,{disableGutters:!0,onClick:()=>console.log("Clicked"),children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"No horizontal padding"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsx(B,{component:"li"}),e.jsxs(s,{onClick:()=>console.log("Clicked"),children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"With horizontal padding"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]})]})})},y={render:()=>{const[a,j]=S.useState(1);return e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(n,{children:[e.jsxs(s,{onClick:()=>j(0),selected:a===0,children:[e.jsx(i,{children:e.jsx(t,{icon:"inbox"})}),e.jsx(r,{primary:"Inbox"})]}),e.jsxs(s,{onClick:()=>j(1),selected:a===1,children:[e.jsx(i,{children:e.jsx(t,{icon:"drafts"})}),e.jsx(r,{primary:"Drafts"})]}),e.jsxs(s,{onClick:()=>j(2),selected:a===2,children:[e.jsx(i,{children:e.jsx(t,{icon:"send"})}),e.jsx(r,{primary:"Sent"})]})]})})},parameters:{docs:{description:{story:"Interactive list items with selection state. Note: Selected items show text in SemiBold weight and primary.dark color (Figma spec)."}}}},h={render:()=>e.jsxs(d,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[e.jsxs(d,{children:[e.jsx(c,{variant:"body2",gutterBottom:!0,children:"Enabled (Default)"}),e.jsx(n,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(s,{onClick:()=>console.log("Clicked"),children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Enabled state"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]})})]}),e.jsxs(d,{children:[e.jsx(c,{variant:"body2",gutterBottom:!0,children:"Selected (SemiBold, primary.dark)"}),e.jsx(n,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(s,{selected:!0,onClick:()=>console.log("Clicked"),children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Selected state"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]})})]}),e.jsxs(d,{children:[e.jsx(c,{variant:"body2",gutterBottom:!0,children:"Disabled"}),e.jsx(n,{sx:{width:300,bgcolor:"background.paper"},children:e.jsxs(s,{disabled:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Disabled state"}),e.jsx(o,{edge:"end",disabled:!0,children:e.jsx(t,{icon:"add"})})]})})]})]}),parameters:{docs:{description:{story:"All interaction states. Selected state has special styling with SemiBold font weight and primary.dark color as per Figma specifications."}}}},g={render:()=>e.jsxs(d,{sx:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:3,p:2},children:[e.jsxs(d,{children:[e.jsx(c,{variant:"h6",gutterBottom:!0,children:"Dense=False, Disabled Gutters=False"}),e.jsxs(n,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsxs(s,{button:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Enabled"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{button:!0,selected:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Selected"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{button:!0,disabled:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Disabled"}),e.jsx(o,{edge:"end",disabled:!0,children:e.jsx(t,{icon:"add"})})]})]})]}),e.jsxs(d,{children:[e.jsx(c,{variant:"h6",gutterBottom:!0,children:"Dense=False, Disabled Gutters=True"}),e.jsxs(n,{sx:{width:300,bgcolor:"background.paper"},children:[e.jsxs(s,{button:!0,disableGutters:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Enabled"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{button:!0,disableGutters:!0,selected:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Selected"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{button:!0,disableGutters:!0,disabled:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Disabled"}),e.jsx(o,{edge:"end",disabled:!0,children:e.jsx(t,{icon:"add"})})]})]})]}),e.jsxs(d,{children:[e.jsx(c,{variant:"h6",gutterBottom:!0,children:"Dense=True, Disabled Gutters=False"}),e.jsxs(n,{dense:!0,sx:{width:300,bgcolor:"background.paper"},children:[e.jsxs(s,{dense:!0,button:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Enabled",secondary:"Secondary"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{dense:!0,button:!0,selected:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Selected",secondary:"Secondary"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{dense:!0,button:!0,disabled:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Disabled",secondary:"Secondary"}),e.jsx(o,{edge:"end",disabled:!0,children:e.jsx(t,{icon:"add"})})]})]})]}),e.jsxs(d,{children:[e.jsx(c,{variant:"h6",gutterBottom:!0,children:"Dense=True, Disabled Gutters=True"}),e.jsxs(n,{dense:!0,sx:{width:300,bgcolor:"background.paper"},children:[e.jsxs(s,{dense:!0,button:!0,disableGutters:!0,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Enabled",secondary:"Secondary"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{dense:!0,button:!0,disableGutters:!0,selected:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Selected",secondary:"Secondary"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]}),e.jsxs(s,{dense:!0,button:!0,disableGutters:!0,disabled:!0,sx:{mt:1},children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"Disabled",secondary:"Secondary"}),e.jsx(o,{edge:"end",disabled:!0,children:e.jsx(t,{icon:"add"})})]})]})]})]}),parameters:{docs:{description:{story:"All combinations of dense and disableGutters props with different states."}}}},L={args:{button:!1,dense:!1,disableGutters:!1,divider:!1,selected:!1,disabled:!1},render:a=>e.jsx(d,{sx:{width:300,bgcolor:"background.paper"},children:e.jsx(n,{children:e.jsxs(s,{...a,children:[e.jsx(i,{children:e.jsx(t,{icon:"add"})}),e.jsx(r,{primary:"List item",secondary:"Secondary text"}),e.jsx(o,{edge:"end",children:e.jsx(t,{icon:"add"})})]})})}),parameters:{docs:{description:{story:"Interactive playground to experiment with all ListItem props."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemText primary="Default list item (interactive)" />
        </ListItem>
      </List>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Default list item is interactive by default (button=true).'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <MaterialSymbol icon="inbox" />
          </ListItemIcon>
          <ListItemText primary="List item with icon" />
        </ListItem>
      </List>
    </Box>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <MaterialSymbol icon="add" />
          </ListItemIcon>
          <ListItemText primary="List item" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    button: true,
    dense: true,
    disableGutters: true,
    divider: true,
    disabled: true,
    selected: true,
    disablePadding: true
  },
  render: args => {
    return <Box sx={{
      width: 300,
      bgcolor: 'background.paper'
    }}>
        <List>
          <ListItem {...args} onClick={() => console.log('Clicked')} secondaryAction={<IconButton edge="end" aria-label="add">
                <MaterialSymbol icon="add" />
              </IconButton>}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="List item" />
          </ListItem>
        </List>
      </Box>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem divider>
          <ListItemText primary="Item with divider" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Item with divider" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last item (no divider)" />
        </ListItem>
      </List>
    </Box>
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List dense>
        <ListItem dense>
          <ListItemIcon>
            <MaterialSymbol icon="add" />
          </ListItemIcon>
          <ListItemText primary="Dense item 1" secondary="Secondary" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <MaterialSymbol icon="add" />
          </ListItemIcon>
          <ListItemText primary="Dense item 2" secondary="Secondary" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <MaterialSymbol icon="add" />
          </ListItemIcon>
          <ListItemText primary="Dense item 3" secondary="Secondary" />
        </ListItem>
      </List>
    </Box>
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300,
    bgcolor: 'background.paper',
    border: '1px solid',
    borderColor: 'divider'
  }}>
      <List>
        <ListItem disableGutters onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <MaterialSymbol icon="add" />
          </ListItemIcon>
          <ListItemText primary="No horizontal padding" />
          <IconButton edge="end">
            <MaterialSymbol icon="add" />
          </IconButton>
        </ListItem>
        <MuiDivider component="li" />
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <MaterialSymbol icon="add" />
          </ListItemIcon>
          <ListItemText primary="With horizontal padding" />
          <IconButton edge="end">
            <MaterialSymbol icon="add" />
          </IconButton>
        </ListItem>
      </List>
    </Box>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    return <Box sx={{
      width: 300,
      bgcolor: 'background.paper'
    }}>
        <List>
          <ListItem onClick={() => setSelectedIndex(0)} selected={selectedIndex === 0}>
            <ListItemIcon>
              <MaterialSymbol icon="inbox" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(1)} selected={selectedIndex === 1}>
            <ListItemIcon>
              <MaterialSymbol icon="drafts" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(2)} selected={selectedIndex === 2}>
            <ListItemIcon>
              <MaterialSymbol icon="send" />
            </ListItemIcon>
            <ListItemText primary="Sent" />
          </ListItem>
        </List>
      </Box>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive list items with selection state. Note: Selected items show text in SemiBold weight and primary.dark color (Figma spec).'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 2
  }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Enabled (Default)
        </Typography>
        <List sx={{
        width: 300,
        bgcolor: 'background.paper'
      }}>
          <ListItem onClick={() => console.log('Clicked')}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Enabled state" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="body2" gutterBottom>
          Selected (SemiBold, primary.dark)
        </Typography>
        <List sx={{
        width: 300,
        bgcolor: 'background.paper'
      }}>
          <ListItem selected onClick={() => console.log('Clicked')}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Selected state" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="body2" gutterBottom>
          Disabled
        </Typography>
        <List sx={{
        width: 300,
        bgcolor: 'background.paper'
      }}>
          <ListItem disabled>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Disabled state" />
            <IconButton edge="end" disabled>
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All interaction states. Selected state has special styling with SemiBold font weight and primary.dark color as per Figma specifications.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 3,
    p: 2
  }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=False, Disabled Gutters=False
        </Typography>
        <List sx={{
        width: 300,
        bgcolor: 'background.paper'
      }}>
          <ListItem button>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Enabled" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem button selected sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Selected" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem button disabled sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Disabled" />
            <IconButton edge="end" disabled>
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=False, Disabled Gutters=True
        </Typography>
        <List sx={{
        width: 300,
        bgcolor: 'background.paper'
      }}>
          <ListItem button disableGutters>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Enabled" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem button disableGutters selected sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Selected" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem button disableGutters disabled sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Disabled" />
            <IconButton edge="end" disabled>
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=True, Disabled Gutters=False
        </Typography>
        <List dense sx={{
        width: 300,
        bgcolor: 'background.paper'
      }}>
          <ListItem dense button>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Enabled" secondary="Secondary" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem dense button selected sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Selected" secondary="Secondary" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem dense button disabled sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Disabled" secondary="Secondary" />
            <IconButton edge="end" disabled>
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=True, Disabled Gutters=True
        </Typography>
        <List dense sx={{
        width: 300,
        bgcolor: 'background.paper'
      }}>
          <ListItem dense button disableGutters>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Enabled" secondary="Secondary" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem dense button disableGutters selected sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Selected" secondary="Secondary" />
            <IconButton edge="end">
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
          <ListItem dense button disableGutters disabled sx={{
          mt: 1
        }}>
            <ListItemIcon>
              <MaterialSymbol icon="add" />
            </ListItemIcon>
            <ListItemText primary="Disabled" secondary="Secondary" />
            <IconButton edge="end" disabled>
              <MaterialSymbol icon="add" />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'All combinations of dense and disableGutters props with different states.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    button: false,
    dense: false,
    disableGutters: false,
    divider: false,
    selected: false,
    disabled: false
  },
  render: args => <Box sx={{
    width: 300,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem {...args}>
          <ListItemIcon>
            <MaterialSymbol icon="add" />
          </ListItemIcon>
          <ListItemText primary="List item" secondary="Secondary text" />
          <IconButton edge="end">
            <MaterialSymbol icon="add" />
          </IconButton>
        </ListItem>
      </List>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all ListItem props.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};const re=["Default","WithIcon","WithSecondaryText","WithSecondaryAction","WithDivider","Dense","DisableGutters","InteractiveWithSelection","States","AllVariants","Playground"];export{g as AllVariants,l as Default,I as Dense,b as DisableGutters,y as InteractiveWithSelection,L as Playground,h as States,u as WithDivider,m as WithIcon,p as WithSecondaryAction,x as WithSecondaryText,re as __namedExportsOrder,se as default};
