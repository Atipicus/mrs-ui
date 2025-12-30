import{j as r}from"./iframe-gZtTO8GF.js";import{D as t}from"./Divider-BZ7gndd3.js";import{B as i}from"./Box-CkQ7KSea.js";import{T as e}from"./Typography-BC_hpnXQ.js";import{S as u}from"./Stack-DrmAaOvE.js";import{L as b}from"./List-CxlzNAAf.js";import{L as o}from"./ListItem-WxE2E6T7.js";import{L as s}from"./ListItemText-yqkfLopp.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CKQkYvCl.js";import"./Divider-CHmZK9yF.js";import"./memoTheme-DXIofXOq.js";import"./dividerClasses-C6G62waq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./styled-C-v2h_2o.js";import"./useThemeProps-rTC1mdVC.js";import"./ListContext-CIsIg9XC.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-DU-gZyRb.js";import"./useForkRef-B0PKJ5yw.js";import"./listItemButtonClasses-RPMygcif.js";import"./listItemTextClasses-DXwzXPhd.js";import"./useSlot-B4JOn_ZD.js";import"./resolveComponentProps-BMSf_3UK.js";const q={title:"Atoms/Divider",component:t,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the divider"},variant:{control:"select",options:["fullWidth","inset","middle"],description:"The variant to use"},light:{control:"boolean",description:"If true, the divider will have a lighter color"},absolute:{control:"boolean",description:"Absolutely position the divider"},flexItem:{control:"boolean",description:"If true, a vertical divider will have the correct height"}}},n={args:{orientation:"horizontal"},render:a=>r.jsxs(i,{sx:{width:"100%",maxWidth:360},children:[r.jsx(e,{variant:"body1",children:"Content above"}),r.jsx(t,{...a}),r.jsx(e,{variant:"body1",children:"Content below"})]})},d={args:{orientation:"vertical",flexItem:!0},render:a=>r.jsxs(u,{direction:"row",spacing:2,sx:{height:100},children:[r.jsx(e,{variant:"body1",children:"Left"}),r.jsx(t,{...a}),r.jsx(e,{variant:"body1",children:"Right"})]})},c={args:{variant:"fullWidth"},render:a=>r.jsx(i,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(s,{primary:"Item 1"})}),r.jsx(t,{...a}),r.jsx(o,{children:r.jsx(s,{primary:"Item 2"})}),r.jsx(t,{...a}),r.jsx(o,{children:r.jsx(s,{primary:"Item 3"})})]})})},p={args:{variant:"inset"},render:a=>r.jsx(i,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(s,{primary:"Item 1"})}),r.jsx(t,{...a}),r.jsx(o,{children:r.jsx(s,{primary:"Item 2"})}),r.jsx(t,{...a}),r.jsx(o,{children:r.jsx(s,{primary:"Item 3"})})]})})},l={args:{variant:"middle"},render:a=>r.jsx(i,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(s,{primary:"Item 1"})}),r.jsx(t,{...a}),r.jsx(o,{children:r.jsx(s,{primary:"Item 2"})}),r.jsx(t,{...a}),r.jsx(o,{children:r.jsx(s,{primary:"Item 3"})})]})})},x={args:{light:!0},render:a=>r.jsxs(i,{sx:{width:"100%",maxWidth:360,bgcolor:"grey.900",p:2},children:[r.jsx(e,{variant:"body1",color:"white",children:"Content above"}),r.jsx(t,{...a}),r.jsx(e,{variant:"body1",color:"white",children:"Content below"})]})},h={render:()=>r.jsxs(i,{sx:{width:"100%",maxWidth:360},children:[r.jsx(e,{variant:"body1",children:"Content above"}),r.jsx(t,{children:"CENTER"}),r.jsx(e,{variant:"body1",children:"Content below"})]})},m={render:()=>r.jsxs(i,{sx:{width:"100%",maxWidth:360},children:[r.jsx(e,{variant:"body1",children:"Content above"}),r.jsx(t,{textAlign:"left",children:"LEFT"}),r.jsx(e,{variant:"body1",children:"Content below"})]})},y={render:()=>r.jsxs(i,{sx:{width:"100%",maxWidth:360},children:[r.jsx(e,{variant:"body1",children:"Content above"}),r.jsx(t,{textAlign:"right",children:"RIGHT"}),r.jsx(e,{variant:"body1",children:"Content below"})]})},g={render:()=>r.jsxs(i,{sx:{display:"flex",alignItems:"center",height:100},children:[r.jsx(e,{variant:"body1",children:"Left Content"}),r.jsx(t,{orientation:"vertical",flexItem:!0,sx:{mx:2}}),r.jsx(e,{variant:"body1",children:"Center Content"}),r.jsx(t,{orientation:"vertical",flexItem:!0,sx:{mx:2}}),r.jsx(e,{variant:"body1",children:"Right Content"})]})},v={render:()=>r.jsx(i,{sx:{p:4},children:r.jsxs(u,{spacing:4,children:[r.jsxs(i,{children:[r.jsx(e,{variant:"h6",sx:{mb:2},children:"Horizontal Dividers"}),r.jsxs(u,{spacing:2,children:[r.jsxs(i,{children:[r.jsx(e,{variant:"body2",sx:{mb:1,color:"text.secondary"},children:"Full Width"}),r.jsx(t,{variant:"fullWidth"})]}),r.jsxs(i,{children:[r.jsx(e,{variant:"body2",sx:{mb:1,color:"text.secondary"},children:"Inset"}),r.jsx(t,{variant:"inset"})]}),r.jsxs(i,{children:[r.jsx(e,{variant:"body2",sx:{mb:1,color:"text.secondary"},children:"Middle"}),r.jsx(t,{variant:"middle"})]})]})]}),r.jsxs(i,{children:[r.jsx(e,{variant:"h6",sx:{mb:2},children:"Vertical Dividers"}),r.jsxs(u,{direction:"row",spacing:2,sx:{height:100,alignItems:"center"},children:[r.jsx(e,{variant:"body2",children:"Item 1"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(e,{variant:"body2",children:"Item 2"}),r.jsx(t,{orientation:"vertical",flexItem:!0}),r.jsx(e,{variant:"body2",children:"Item 3"})]})]}),r.jsxs(i,{children:[r.jsx(e,{variant:"h6",sx:{mb:2},children:"With Text"}),r.jsxs(u,{spacing:2,children:[r.jsx(t,{textAlign:"left",children:"LEFT"}),r.jsx(t,{children:"CENTER"}),r.jsx(t,{textAlign:"right",children:"RIGHT"})]})]}),r.jsxs(i,{children:[r.jsx(e,{variant:"h6",sx:{mb:2},children:"Light Variant"}),r.jsxs(i,{sx:{bgcolor:"grey.900",p:2},children:[r.jsx(e,{variant:"body2",color:"white",sx:{mb:1},children:"Content above"}),r.jsx(t,{light:!0}),r.jsx(e,{variant:"body2",color:"white",sx:{mt:1},children:"Content below"})]})]})]})}),parameters:{layout:"fullscreen"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <Box sx={{
    width: '100%',
    maxWidth: 360
  }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider {...args} />
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
}`,...n.parameters?.docs?.source},description:{story:"Default horizontal divider",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    flexItem: true
  },
  render: args => <Stack direction="row" spacing={2} sx={{
    height: 100
  }}>
      <MuiTypography variant="body1">Left</MuiTypography>
      <Divider {...args} />
      <MuiTypography variant="body1">Right</MuiTypography>
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"Vertical divider",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fullWidth'
  },
  render: args => <Box sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"Full width variant (default)",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inset'
  },
  render: args => <Box sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"Inset variant",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'middle'
  },
  render: args => <Box sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
}`,...l.parameters?.docs?.source},description:{story:"Middle variant",...l.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    light: true
  },
  render: args => <Box sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'grey.900',
    p: 2
  }}>
      <MuiTypography variant="body1" color="white">
        Content above
      </MuiTypography>
      <Divider {...args} />
      <MuiTypography variant="body1" color="white">
        Content below
      </MuiTypography>
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"Light divider",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 360
  }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider>CENTER</Divider>
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
}`,...h.parameters?.docs?.source},description:{story:"Divider with text",...h.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 360
  }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider textAlign="left">LEFT</Divider>
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
}`,...m.parameters?.docs?.source},description:{story:"Divider with text aligned left",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 360
  }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider textAlign="right">RIGHT</Divider>
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
}`,...y.parameters?.docs?.source},description:{story:"Divider with text aligned right",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    height: 100
  }}>
      <MuiTypography variant="body1">Left Content</MuiTypography>
      <Divider orientation="vertical" flexItem sx={{
      mx: 2
    }} />
      <MuiTypography variant="body1">Center Content</MuiTypography>
      <Divider orientation="vertical" flexItem sx={{
      mx: 2
    }} />
      <MuiTypography variant="body1">Right Content</MuiTypography>
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"Vertical divider in flex container",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Horizontal Dividers
          </MuiTypography>
          <Stack spacing={2}>
            <Box>
              <MuiTypography variant="body2" sx={{
              mb: 1,
              color: 'text.secondary'
            }}>
                Full Width
              </MuiTypography>
              <Divider variant="fullWidth" />
            </Box>
            <Box>
              <MuiTypography variant="body2" sx={{
              mb: 1,
              color: 'text.secondary'
            }}>
                Inset
              </MuiTypography>
              <Divider variant="inset" />
            </Box>
            <Box>
              <MuiTypography variant="body2" sx={{
              mb: 1,
              color: 'text.secondary'
            }}>
                Middle
              </MuiTypography>
              <Divider variant="middle" />
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Vertical Dividers
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{
          height: 100,
          alignItems: 'center'
        }}>
            <MuiTypography variant="body2">Item 1</MuiTypography>
            <Divider orientation="vertical" flexItem />
            <MuiTypography variant="body2">Item 2</MuiTypography>
            <Divider orientation="vertical" flexItem />
            <MuiTypography variant="body2">Item 3</MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            With Text
          </MuiTypography>
          <Stack spacing={2}>
            <Divider textAlign="left">LEFT</Divider>
            <Divider>CENTER</Divider>
            <Divider textAlign="right">RIGHT</Divider>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Light Variant
          </MuiTypography>
          <Box sx={{
          bgcolor: 'grey.900',
          p: 2
        }}>
            <MuiTypography variant="body2" color="white" sx={{
            mb: 1
          }}>
              Content above
            </MuiTypography>
            <Divider light />
            <MuiTypography variant="body2" color="white" sx={{
            mt: 1
          }}>
              Content below
            </MuiTypography>
          </Box>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...v.parameters?.docs?.source},description:{story:"All variants showcase",...v.parameters?.docs?.description}}};const J=["Horizontal","Vertical","FullWidth","Inset","Middle","Light","WithText","TextAlignLeft","TextAlignRight","VerticalInFlex","AllVariants"];export{v as AllVariants,c as FullWidth,n as Horizontal,p as Inset,x as Light,l as Middle,m as TextAlignLeft,y as TextAlignRight,d as Vertical,g as VerticalInFlex,h as WithText,J as __namedExportsOrder,q as default};
