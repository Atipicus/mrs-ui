import{j as e,R as f}from"./iframe-Bf0p-10g.js";import{R as a}from"./Radio-DGZTw1AA.js";import{S as o}from"./Stack-JG3aZ3C3.js";import{B as l}from"./Box-Dt15EP8F.js";import{T as i}from"./Typography-Dv1Rwxa5.js";import{F as S,a as v}from"./FormLabel-CqgDsD2s.js";import{R as P}from"./RadioGroup-DbVo7bcS.js";import{F as t}from"./FormControlLabel-Cqjzq4mc.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-CFqqyMQL.js";import"./SwitchBase-PSaUmCPf.js";import"./useFormControl-CCjWf8vc.js";import"./useSlot-DCrjdO1I.js";import"./resolveComponentProps-CgVaspa1.js";import"./useForkRef-mnbaXvWm.js";import"./useControlled-CaZB-hQu.js";import"./ButtonBase-CK-fqNHV.js";import"./useEventCallback-BOWsNkBB.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Doqq-Dps.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useThemeProps-NvJQ2Xdn.js";import"./isMuiElement-BISMxPxg.js";import"./formControlState-Dq1zat_P.js";import"./FormGroup-9E-R2lLu.js";const X={title:"Atoms/Radio",component:a,tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"If `true`, the component is checked."},size:{control:"select",options:["small","medium","large"],description:"The size of the component."},color:{control:"select",options:["default","primary"],description:"The color of the component."},disabled:{control:"boolean",description:"If `true`, the component is disabled."},disableRipple:{control:"boolean",description:"If `true`, the ripple effect is disabled."},required:{control:"boolean",description:"If `true`, the component appears indeterminate."},onChange:{action:"onChange",description:"Callback fired when the state is changed."},value:{control:"text",description:"The value of the component."},id:{control:"text",description:"The id of the `input` element."},sx:{control:"object",description:"The system prop that allows defining system overrides as well as additional CSS styles."}},parameters:{layout:"centered"}},d={args:{inputProps:{"aria-label":"Default radio"}}},p={render:r=>e.jsxs(o,{direction:"row",spacing:2,alignItems:"center",children:[e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Small"}),e.jsx(a,{...r,size:"small",inputProps:{"aria-label":"Small radio"}})]}),e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Medium (default)"}),e.jsx(a,{...r,size:"medium",inputProps:{"aria-label":"Medium radio"}})]}),e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Large"}),e.jsx(a,{...r,size:"large",inputProps:{"aria-label":"Large radio"}})]})]})},u={render:r=>e.jsxs(o,{direction:"row",spacing:3,alignItems:"center",children:[e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Default"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{...r,color:"default",inputProps:{"aria-label":"Default unchecked"}}),e.jsx(a,{...r,color:"default",checked:!0,inputProps:{"aria-label":"Default checked"}})]})]}),e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Primary"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{...r,color:"primary",inputProps:{"aria-label":"Primary unchecked"}}),e.jsx(a,{...r,color:"primary",checked:!0,inputProps:{"aria-label":"Primary checked"}})]})]})]})},m={render:r=>e.jsxs(o,{spacing:2,children:[e.jsxs(l,{children:[e.jsx(i,{variant:"body2",gutterBottom:!0,children:"Unchecked"}),e.jsxs(o,{direction:"row",spacing:2,children:[e.jsx(a,{...r,inputProps:{"aria-label":"Unchecked enabled"}}),e.jsx(a,{...r,disabled:!0,inputProps:{"aria-label":"Unchecked disabled"}})]})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"body2",gutterBottom:!0,children:"Checked"}),e.jsxs(o,{direction:"row",spacing:2,children:[e.jsx(a,{...r,checked:!0,inputProps:{"aria-label":"Checked enabled"}}),e.jsx(a,{...r,checked:!0,disabled:!0,inputProps:{"aria-label":"Checked disabled"}})]})]})]})},b={render:r=>e.jsxs(o,{direction:"row",spacing:2,children:[e.jsx(a,{...r,disabled:!0,inputProps:{"aria-label":"Disabled unchecked"}}),e.jsx(a,{...r,disabled:!0,checked:!0,inputProps:{"aria-label":"Disabled checked"}})]})},h={render:r=>{const[s,n]=f.useState("female"),c=R=>{n(R.target.value)};return e.jsxs(S,{children:[e.jsx(v,{id:"demo-radio-buttons-group-label",children:"Gender"}),e.jsxs(P,{"aria-labelledby":"demo-radio-buttons-group-label",value:s,onChange:c,name:"radio-buttons-group",children:[e.jsx(t,{value:"female",control:e.jsx(a,{...r}),label:"Female"}),e.jsx(t,{value:"male",control:e.jsx(a,{...r}),label:"Male"}),e.jsx(t,{value:"other",control:e.jsx(a,{...r}),label:"Other"}),e.jsx(t,{value:"disabled",disabled:!0,control:e.jsx(a,{...r}),label:"Disabled"})]})]})}},g={render:()=>e.jsxs(o,{spacing:3,children:[e.jsxs(l,{children:[e.jsx(i,{variant:"h6",gutterBottom:!0,children:"Small Size"}),e.jsxs(o,{direction:"row",spacing:2,children:[e.jsxs(l,{children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Default"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{size:"small",color:"default",inputProps:{"aria-label":"Small default unchecked"}}),e.jsx(a,{size:"small",color:"default",checked:!0,inputProps:{"aria-label":"Small default checked"}}),e.jsx(a,{size:"small",color:"default",disabled:!0,inputProps:{"aria-label":"Small default disabled"}})]})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Primary"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{size:"small",color:"primary",inputProps:{"aria-label":"Small primary unchecked"}}),e.jsx(a,{size:"small",color:"primary",checked:!0,inputProps:{"aria-label":"Small primary checked"}}),e.jsx(a,{size:"small",color:"primary",disabled:!0,inputProps:{"aria-label":"Small primary disabled"}})]})]})]})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"h6",gutterBottom:!0,children:"Medium Size (Default)"}),e.jsxs(o,{direction:"row",spacing:2,children:[e.jsxs(l,{children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Default"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{size:"medium",color:"default",inputProps:{"aria-label":"Medium default unchecked"}}),e.jsx(a,{size:"medium",color:"default",checked:!0,inputProps:{"aria-label":"Medium default checked"}}),e.jsx(a,{size:"medium",color:"default",disabled:!0,inputProps:{"aria-label":"Medium default disabled"}})]})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Primary"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{size:"medium",color:"primary",inputProps:{"aria-label":"Medium primary unchecked"}}),e.jsx(a,{size:"medium",color:"primary",checked:!0,inputProps:{"aria-label":"Medium primary checked"}}),e.jsx(a,{size:"medium",color:"primary",disabled:!0,inputProps:{"aria-label":"Medium primary disabled"}})]})]})]})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"h6",gutterBottom:!0,children:"Large Size"}),e.jsxs(o,{direction:"row",spacing:2,children:[e.jsxs(l,{children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Default"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{size:"large",color:"default",inputProps:{"aria-label":"Large default unchecked"}}),e.jsx(a,{size:"large",color:"default",checked:!0,inputProps:{"aria-label":"Large default checked"}}),e.jsx(a,{size:"large",color:"default",disabled:!0,inputProps:{"aria-label":"Large default disabled"}})]})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Primary"}),e.jsxs(o,{direction:"row",spacing:1,children:[e.jsx(a,{size:"large",color:"primary",inputProps:{"aria-label":"Large primary unchecked"}}),e.jsx(a,{size:"large",color:"primary",checked:!0,inputProps:{"aria-label":"Large primary checked"}}),e.jsx(a,{size:"large",color:"primary",disabled:!0,inputProps:{"aria-label":"Large primary disabled"}})]})]})]})]})]})},y={render:()=>{const[r,s]=f.useState("option1"),n=c=>{s(c.target.value)};return e.jsxs(S,{component:"fieldset",children:[e.jsx(v,{component:"legend",children:"Select an option"}),e.jsxs(P,{value:r,onChange:n,name:"radio-group-example",children:[e.jsx(t,{value:"option1",control:e.jsx(a,{}),label:"Option 1"}),e.jsx(t,{value:"option2",control:e.jsx(a,{}),label:"Option 2"}),e.jsx(t,{value:"option3",control:e.jsx(a,{}),label:"Option 3"})]}),e.jsxs(i,{variant:"body2",sx:{mt:2},children:["Selected value: ",e.jsx("strong",{children:r})]})]})}},x={render:()=>{const[r,s]=f.useState("yes"),n=c=>{s(c.target.value)};return e.jsxs(S,{children:[e.jsx(v,{id:"horizontal-radio-group-label",children:"Do you agree?"}),e.jsxs(P,{row:!0,"aria-labelledby":"horizontal-radio-group-label",value:r,onChange:n,name:"horizontal-radio-group",children:[e.jsx(t,{value:"yes",control:e.jsx(a,{}),label:"Yes"}),e.jsx(t,{value:"no",control:e.jsx(a,{}),label:"No"}),e.jsx(t,{value:"maybe",control:e.jsx(a,{}),label:"Maybe"})]})]})}},k={render:r=>e.jsxs(o,{direction:"row",spacing:2,children:[e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"With Ripple (default)"}),e.jsx(a,{...r,inputProps:{"aria-label":"With ripple"}})]}),e.jsxs(l,{textAlign:"center",children:[e.jsx(i,{variant:"caption",display:"block",mb:1,children:"Without Ripple"}),e.jsx(a,{...r,disableRipple:!0,inputProps:{"aria-label":"Without ripple"}})]})]})},j={args:{size:"medium",color:"primary",disabled:!1,checked:!1,disableRipple:!1,required:!1,inputProps:{"aria-label":"Playground radio"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    inputProps: {
      'aria-label': 'Default radio'
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={2} alignItems="center">
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Small
        </Typography>
        <Radio {...args} size="small" inputProps={{
        'aria-label': 'Small radio'
      }} />
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Medium (default)
        </Typography>
        <Radio {...args} size="medium" inputProps={{
        'aria-label': 'Medium radio'
      }} />
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Large
        </Typography>
        <Radio {...args} size="large" inputProps={{
        'aria-label': 'Large radio'
      }} />
      </Box>
    </Stack>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={3} alignItems="center">
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Default
        </Typography>
        <Stack direction="row" spacing={1}>
          <Radio {...args} color="default" inputProps={{
          'aria-label': 'Default unchecked'
        }} />
          <Radio {...args} color="default" checked inputProps={{
          'aria-label': 'Default checked'
        }} />
        </Stack>
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Primary
        </Typography>
        <Stack direction="row" spacing={1}>
          <Radio {...args} color="primary" inputProps={{
          'aria-label': 'Primary unchecked'
        }} />
          <Radio {...args} color="primary" checked inputProps={{
          'aria-label': 'Primary checked'
        }} />
        </Stack>
      </Box>
    </Stack>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Unchecked
        </Typography>
        <Stack direction="row" spacing={2}>
          <Radio {...args} inputProps={{
          'aria-label': 'Unchecked enabled'
        }} />
          <Radio {...args} disabled inputProps={{
          'aria-label': 'Unchecked disabled'
        }} />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Checked
        </Typography>
        <Stack direction="row" spacing={2}>
          <Radio {...args} checked inputProps={{
          'aria-label': 'Checked enabled'
        }} />
          <Radio {...args} checked disabled inputProps={{
          'aria-label': 'Checked disabled'
        }} />
        </Stack>
      </Box>
    </Stack>
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={2}>
      <Radio {...args} disabled inputProps={{
      'aria-label': 'Disabled unchecked'
    }} />
      <Radio {...args} disabled checked inputProps={{
      'aria-label': 'Disabled checked'
    }} />
    </Stack>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = React.useState('female');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };
    return <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <MuiRadioGroup aria-labelledby="demo-radio-buttons-group-label" value={selectedValue} onChange={handleChange} name="radio-buttons-group">
          <FormControlLabel value="female" control={<Radio {...args} />} label="Female" />
          <FormControlLabel value="male" control={<Radio {...args} />} label="Male" />
          <FormControlLabel value="other" control={<Radio {...args} />} label="Other" />
          <FormControlLabel value="disabled" disabled control={<Radio {...args} />} label="Disabled" />
        </MuiRadioGroup>
      </FormControl>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Small Size
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Default
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio size="small" color="default" inputProps={{
              'aria-label': 'Small default unchecked'
            }} />
              <Radio size="small" color="default" checked inputProps={{
              'aria-label': 'Small default checked'
            }} />
              <Radio size="small" color="default" disabled inputProps={{
              'aria-label': 'Small default disabled'
            }} />
            </Stack>
          </Box>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Primary
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio size="small" color="primary" inputProps={{
              'aria-label': 'Small primary unchecked'
            }} />
              <Radio size="small" color="primary" checked inputProps={{
              'aria-label': 'Small primary checked'
            }} />
              <Radio size="small" color="primary" disabled inputProps={{
              'aria-label': 'Small primary disabled'
            }} />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Medium Size (Default)
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Default
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio size="medium" color="default" inputProps={{
              'aria-label': 'Medium default unchecked'
            }} />
              <Radio size="medium" color="default" checked inputProps={{
              'aria-label': 'Medium default checked'
            }} />
              <Radio size="medium" color="default" disabled inputProps={{
              'aria-label': 'Medium default disabled'
            }} />
            </Stack>
          </Box>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Primary
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio size="medium" color="primary" inputProps={{
              'aria-label': 'Medium primary unchecked'
            }} />
              <Radio size="medium" color="primary" checked inputProps={{
              'aria-label': 'Medium primary checked'
            }} />
              <Radio size="medium" color="primary" disabled inputProps={{
              'aria-label': 'Medium primary disabled'
            }} />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Large Size
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Default
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio size="large" color="default" inputProps={{
              'aria-label': 'Large default unchecked'
            }} />
              <Radio size="large" color="default" checked inputProps={{
              'aria-label': 'Large default checked'
            }} />
              <Radio size="large" color="default" disabled inputProps={{
              'aria-label': 'Large default disabled'
            }} />
            </Stack>
          </Box>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Primary
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio size="large" color="primary" inputProps={{
              'aria-label': 'Large primary unchecked'
            }} />
              <Radio size="large" color="primary" checked inputProps={{
              'aria-label': 'Large primary checked'
            }} />
              <Radio size="large" color="primary" disabled inputProps={{
              'aria-label': 'Large primary disabled'
            }} />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('option1');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return <FormControl component="fieldset">
        <FormLabel component="legend">Select an option</FormLabel>
        <MuiRadioGroup value={value} onChange={handleChange} name="radio-group-example">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </MuiRadioGroup>
        <Typography variant="body2" sx={{
        mt: 2
      }}>
          Selected value: <strong>{value}</strong>
        </Typography>
      </FormControl>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('yes');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return <FormControl>
        <FormLabel id="horizontal-radio-group-label">Do you agree?</FormLabel>
        <MuiRadioGroup row aria-labelledby="horizontal-radio-group-label" value={value} onChange={handleChange} name="horizontal-radio-group">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
        </MuiRadioGroup>
      </FormControl>;
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <Stack direction="row" spacing={2}>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          With Ripple (default)
        </Typography>
        <Radio {...args} inputProps={{
        'aria-label': 'With ripple'
      }} />
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Without Ripple
        </Typography>
        <Radio {...args} disableRipple inputProps={{
        'aria-label': 'Without ripple'
      }} />
      </Box>
    </Stack>
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
    checked: false,
    disableRipple: false,
    required: false,
    inputProps: {
      'aria-label': 'Playground radio'
    }
  }
}`,...j.parameters?.docs?.source}}};const Z=["Default","Sizes","Colors","States","Disabled","WithLabels","AllSizesAndColors","RadioGroupExample","HorizontalRadioGroup","WithoutRipple","Playground"];export{g as AllSizesAndColors,u as Colors,d as Default,b as Disabled,x as HorizontalRadioGroup,j as Playground,y as RadioGroupExample,p as Sizes,m as States,h as WithLabels,k as WithoutRipple,Z as __namedExportsOrder,X as default};
