import{j as e,R as S}from"./iframe-gZtTO8GF.js";import{S as r}from"./Switch-BDNvTbJq.js";import{S as o}from"./Stack-DrmAaOvE.js";import{B as t}from"./Box-CkQ7KSea.js";import{T as n}from"./Typography-BC_hpnXQ.js";import{F as y}from"./FormGroup-D5WPSXl0.js";import{F as s}from"./FormControlLabel-BYSQOIXe.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DXIofXOq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-cXiOB0-y.js";import"./useFormControl-CKkatsgy.js";import"./useSlot-B4JOn_ZD.js";import"./resolveComponentProps-BMSf_3UK.js";import"./useForkRef-B0PKJ5yw.js";import"./useControlled-BS-n9Xne.js";import"./ButtonBase-CmgGEP9G.js";import"./useEventCallback-BYIpU12S.js";import"./isFocusVisible-B8k4qzLc.js";import"./styled-C-v2h_2o.js";import"./useThemeProps-rTC1mdVC.js";import"./formControlState-Dq1zat_P.js";const $={title:"Atoms/Switch",component:r,tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"If `true`, the component is checked."},size:{control:"select",options:["small","medium"],description:"The size of the component."},color:{control:"select",options:["default","primary"],description:"The color of the component."},disabled:{control:"boolean",description:"If `true`, the component is disabled."},disableRipple:{control:"boolean",description:"If `true`, the ripple effect is disabled."},required:{control:"boolean",description:"If `true`, the input element is required."},onChange:{action:"onChange",description:"Callback fired when the state is changed."},sx:{control:"object",description:"The system prop that allows defining system overrides as well as additional CSS styles."}},parameters:{layout:"centered"}},a={args:{}},c={args:{checked:!0}},i={render:()=>e.jsxs(o,{spacing:2,children:[e.jsxs(t,{children:[e.jsx(n,{variant:"body2",sx:{mb:1},children:"Small"}),e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{size:"small"}),e.jsx(r,{size:"small",checked:!0})]})]}),e.jsxs(t,{children:[e.jsx(n,{variant:"body2",sx:{mb:1},children:"Medium (default)"}),e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{size:"medium"}),e.jsx(r,{size:"medium",checked:!0})]})]})]})},l={render:()=>e.jsxs(o,{spacing:2,children:[e.jsxs(t,{children:[e.jsx(n,{variant:"body2",sx:{mb:1},children:"Primary (default)"}),e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{color:"primary"}),e.jsx(r,{color:"primary",checked:!0}),e.jsx(r,{color:"primary",disabled:!0})]})]}),e.jsxs(t,{children:[e.jsx(n,{variant:"body2",sx:{mb:1},children:"Default"}),e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{color:"default"}),e.jsx(r,{color:"default",checked:!0}),e.jsx(r,{color:"default",disabled:!0})]})]})]})},d={render:()=>e.jsxs(o,{spacing:2,children:[e.jsxs(t,{children:[e.jsx(n,{variant:"body2",sx:{mb:1},children:"Enabled"}),e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{}),e.jsx(r,{checked:!0})]})]}),e.jsxs(t,{children:[e.jsx(n,{variant:"body2",sx:{mb:1},children:"Disabled"}),e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(r,{disabled:!0}),e.jsx(r,{disabled:!0,checked:!0})]})]})]})},p={render:()=>e.jsxs(y,{children:[e.jsx(s,{control:e.jsx(r,{}),label:"Off"}),e.jsx(s,{control:e.jsx(r,{defaultChecked:!0}),label:"On"}),e.jsx(s,{control:e.jsx(r,{disabled:!0}),label:"Disabled off"}),e.jsx(s,{control:e.jsx(r,{disabled:!0,defaultChecked:!0}),label:"Disabled on"})]}),parameters:{docs:{description:{story:"Switches with labels using FormControlLabel component."}}}},m={render:()=>{const[u,b]=S.useState(!1),x=g=>{b(g.target.checked)};return e.jsx(s,{control:e.jsx(r,{checked:u,onChange:x}),label:`Switch is ${u?"on":"off"}`})},parameters:{docs:{description:{story:"Example of a controlled switch with React state."}}}},h={args:{checked:!1,size:"medium",color:"primary",disabled:!1,disableRipple:!1,required:!1},parameters:{docs:{description:{story:"Interactive playground to experiment with all Switch props."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Small
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch size="small" />
          <Switch size="small" checked />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch size="medium" />
          <Switch size="medium" checked />
        </Stack>
      </Box>
    </Stack>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Primary (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch color="primary" />
          <Switch color="primary" checked />
          <Switch color="primary" disabled />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Default
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch color="default" />
          <Switch color="default" checked />
          <Switch color="default" disabled />
        </Stack>
      </Box>
    </Stack>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Enabled
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch />
          <Switch checked />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch disabled />
          <Switch disabled checked />
        </Stack>
      </Box>
    </Stack>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <FormGroup>
      <FormControlLabel control={<Switch />} label="Off" />
      <FormControlLabel control={<Switch defaultChecked />} label="On" />
      <FormControlLabel control={<Switch disabled />} label="Disabled off" />
      <FormControlLabel control={<Switch disabled defaultChecked />} label="Disabled on" />
    </FormGroup>,
  parameters: {
    docs: {
      description: {
        story: 'Switches with labels using FormControlLabel component.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label={\`Switch is \${checked ? 'on' : 'off'}\`} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled switch with React state.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'medium',
    color: 'primary',
    disabled: false,
    disableRipple: false,
    required: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Switch props.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const A=["Default","Checked","Sizes","Colors","States","WithLabels","Controlled","Playground"];export{c as Checked,l as Colors,m as Controlled,a as Default,h as Playground,i as Sizes,d as States,p as WithLabels,A as __namedExportsOrder,$ as default};
