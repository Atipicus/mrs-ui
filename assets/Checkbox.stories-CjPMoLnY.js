import{j as e,R as z}from"./iframe-Bf0p-10g.js";import{C as r}from"./Checkbox-DxYZf3nA.js";import{S as a}from"./Stack-JG3aZ3C3.js";import{B as o}from"./Box-Dt15EP8F.js";import{T as c}from"./Typography-Dv1Rwxa5.js";import{F as s}from"./FormControlLabel-Cqjzq4mc.js";import{F as w}from"./FormGroup-9E-R2lLu.js";import"./preload-helper-PPVm8Dsz.js";import"./Checkbox-n7fIUGGm.js";import"./createSimplePaletteValueFilter-CFqqyMQL.js";import"./SwitchBase-PSaUmCPf.js";import"./useFormControl-CCjWf8vc.js";import"./useSlot-DCrjdO1I.js";import"./resolveComponentProps-CgVaspa1.js";import"./useForkRef-mnbaXvWm.js";import"./useControlled-CaZB-hQu.js";import"./ButtonBase-CK-fqNHV.js";import"./useEventCallback-BOWsNkBB.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Doqq-Dps.js";import"./mergeSlotProps-DXlRdHCZ.js";import"./useThemeProps-NvJQ2Xdn.js";import"./formControlState-Dq1zat_P.js";const X={title:"Atoms/Checkbox",component:r,tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"If `true`, the component is checked."},indeterminate:{control:"boolean",description:"If `true`, the component appears indeterminate."},size:{control:"select",options:["small","medium","large"],description:"The size of the component."},color:{control:"select",options:["default","primary"],description:"The color of the component."},disabled:{control:"boolean",description:"If `true`, the component is disabled."},disableRipple:{control:"boolean",description:"If `true`, the ripple effect is disabled."},required:{control:"boolean",description:"If `true`, the input element is required."},onChange:{action:"onChange",description:"Callback fired when the state is changed."},sx:{control:"object",description:"The system prop that allows defining system overrides as well as additional CSS styles."}},parameters:{layout:"centered"}},p={args:{}},m={args:{checked:!0}},x={args:{indeterminate:!0}},k={render:()=>e.jsxs(a,{spacing:2,children:[e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Small"}),e.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(r,{size:"small"}),e.jsx(r,{size:"small",checked:!0}),e.jsx(r,{size:"small",indeterminate:!0})]})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Medium (default)"}),e.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(r,{size:"medium"}),e.jsx(r,{size:"medium",checked:!0}),e.jsx(r,{size:"medium",indeterminate:!0})]})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Large"}),e.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(r,{size:"large"}),e.jsx(r,{size:"large",checked:!0}),e.jsx(r,{size:"large",indeterminate:!0})]})]})]})},b={render:()=>e.jsxs(a,{spacing:2,children:[e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Primary (default)"}),e.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(r,{color:"primary"}),e.jsx(r,{color:"primary",checked:!0}),e.jsx(r,{color:"primary",indeterminate:!0})]})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Default (black)"}),e.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(r,{color:"default"}),e.jsx(r,{color:"default",checked:!0}),e.jsx(r,{color:"default",indeterminate:!0})]})]})]})},u={render:()=>e.jsxs(a,{spacing:2,children:[e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Unchecked"}),e.jsx(r,{})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Checked"}),e.jsx(r,{checked:!0})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Indeterminate"}),e.jsx(r,{indeterminate:!0})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Disabled (unchecked)"}),e.jsx(r,{disabled:!0})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Disabled (checked)"}),e.jsx(r,{disabled:!0,checked:!0})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Disabled (indeterminate)"}),e.jsx(r,{disabled:!0,indeterminate:!0})]})]})},g={render:()=>e.jsxs(a,{spacing:2,children:[e.jsx(s,{control:e.jsx(r,{}),label:"Unchecked"}),e.jsx(s,{control:e.jsx(r,{checked:!0}),label:"Checked"}),e.jsx(s,{control:e.jsx(r,{indeterminate:!0}),label:"Indeterminate"}),e.jsx(s,{control:e.jsx(r,{disabled:!0}),label:"Disabled"}),e.jsx(s,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"Disabled & Checked"})]}),parameters:{docs:{description:{story:"Checkboxes with labels using FormControlLabel component."}}}},C={render:()=>{const[n,i]=z.useState(!1),l=h=>{i(h.target.checked)};return e.jsx(o,{children:e.jsx(s,{control:e.jsx(r,{checked:n,onChange:l}),label:`Checkbox is ${n?"checked":"unchecked"}`})})},parameters:{docs:{description:{story:"Example of a controlled checkbox with React state."}}}},y={render:()=>{const[n,i]=z.useState([!0,!1,!1]),l=d=>{const t=[d.target.checked,n[1],n[2]];i(t)},h=d=>{const t=[n[0],d.target.checked,n[2]];i(t)},T=d=>{const t=[n[0],n[1],d.target.checked];i(t)};return e.jsxs(w,{children:[e.jsx(s,{control:e.jsx(r,{checked:n[0],onChange:l}),label:"Option 1"}),e.jsx(s,{control:e.jsx(r,{checked:n[1],onChange:h}),label:"Option 2"}),e.jsx(s,{control:e.jsx(r,{checked:n[2],onChange:T}),label:"Option 3"})]})},parameters:{docs:{description:{story:"Multiple checkboxes in a group, each with independent state."}}}},j={render:()=>{const[n,i]=z.useState([!0,!1]),l=t=>{i([t.target.checked,t.target.checked])},h=t=>{i([n[0],t.target.checked])},T=t=>{i([t.target.checked,n[1]])},d=e.jsxs(o,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e.jsx(s,{control:e.jsx(r,{checked:n[0],onChange:h}),label:"Child 1"}),e.jsx(s,{control:e.jsx(r,{checked:n[1],onChange:T}),label:"Child 2"})]});return e.jsxs("div",{children:[e.jsx(s,{control:e.jsx(r,{checked:n[0]&&n[1],indeterminate:n[0]!==n[1],onChange:l}),label:"Parent"}),d]})},parameters:{docs:{description:{story:"Parent checkbox controls two children. Shows indeterminate state when only some children are checked."}}}},f={render:()=>e.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx(c,{variant:"h6",children:"All Size and Color Combinations"}),["small","medium","large"].map(n=>e.jsxs(o,{children:[e.jsxs(c,{variant:"body2",sx:{mb:1,fontWeight:"bold"},children:["Size: ",n]}),e.jsxs(a,{spacing:1,children:[e.jsxs(o,{children:[e.jsx(c,{variant:"caption",children:"Primary"}),e.jsxs(a,{direction:"row",spacing:1,children:[e.jsx(r,{size:n,color:"primary"}),e.jsx(r,{size:n,color:"primary",checked:!0}),e.jsx(r,{size:n,color:"primary",indeterminate:!0}),e.jsx(r,{size:n,color:"primary",disabled:!0}),e.jsx(r,{size:n,color:"primary",disabled:!0,checked:!0})]})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"caption",children:"Default"}),e.jsxs(a,{direction:"row",spacing:1,children:[e.jsx(r,{size:n,color:"default"}),e.jsx(r,{size:n,color:"default",checked:!0}),e.jsx(r,{size:n,color:"default",indeterminate:!0}),e.jsx(r,{size:n,color:"default",disabled:!0}),e.jsx(r,{size:n,color:"default",disabled:!0,checked:!0})]})]})]})]},n))]}),parameters:{docs:{description:{story:"Comprehensive view of all checkbox size and color combinations with different states."}}}},S={render:()=>e.jsxs(a,{spacing:2,children:[e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Custom Color"}),e.jsx(r,{sx:{color:"purple","&.Mui-checked":{color:"purple"}}})]}),e.jsxs(o,{children:[e.jsx(c,{variant:"body2",sx:{mb:1},children:"Custom Size (using sx)"}),e.jsx(r,{sx:{"& .MuiSvgIcon-root":{fontSize:32}}})]})]}),parameters:{docs:{description:{story:"Examples of custom styling using the sx prop."}}}},v={args:{checked:!1,indeterminate:!1,size:"medium",color:"primary",disabled:!1,disableRipple:!1,required:!1},parameters:{docs:{description:{story:"Interactive playground to experiment with all Checkbox props."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Small
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox size="small" />
          <Checkbox size="small" checked />
          <Checkbox size="small" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox size="medium" />
          <Checkbox size="medium" checked />
          <Checkbox size="medium" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Large
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox size="large" />
          <Checkbox size="large" checked />
          <Checkbox size="large" indeterminate />
        </Stack>
      </Box>
    </Stack>
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Primary (default)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox color="primary" />
          <Checkbox color="primary" checked />
          <Checkbox color="primary" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Default (black)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox color="default" />
          <Checkbox color="default" checked />
          <Checkbox color="default" indeterminate />
        </Stack>
      </Box>
    </Stack>
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Unchecked
        </Typography>
        <Checkbox />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Checked
        </Typography>
        <Checkbox checked />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Indeterminate
        </Typography>
        <Checkbox indeterminate />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Disabled (unchecked)
        </Typography>
        <Checkbox disabled />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Disabled (checked)
        </Typography>
        <Checkbox disabled checked />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Disabled (indeterminate)
        </Typography>
        <Checkbox disabled indeterminate />
      </Box>
    </Stack>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel control={<Checkbox checked />} label="Checked" />
      <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Disabled & Checked" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes with labels using FormControlLabel component.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return <Box>
        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />} label={\`Checkbox is \${checked ? 'checked' : 'unchecked'}\`} />
      </Box>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled checkbox with React state.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState([true, false, false]);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [event.target.checked, checked[1], checked[2]];
      setChecked(newChecked);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [checked[0], event.target.checked, checked[2]];
      setChecked(newChecked);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [checked[0], checked[1], event.target.checked];
      setChecked(newChecked);
    };
    return <FormGroup>
        <FormControlLabel control={<Checkbox checked={checked[0]} onChange={handleChange1} />} label="Option 1" />
        <FormControlLabel control={<Checkbox checked={checked[1]} onChange={handleChange2} />} label="Option 2" />
        <FormControlLabel control={<Checkbox checked={checked[2]} onChange={handleChange3} />} label="Option 3" />
      </FormGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes in a group, each with independent state.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState([true, false]);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const children = <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      ml: 3
    }}>
        <FormControlLabel control={<Checkbox checked={checked[0]} onChange={handleChange2} />} label="Child 1" />
        <FormControlLabel control={<Checkbox checked={checked[1]} onChange={handleChange3} />} label="Child 2" />
      </Box>;
    return <div>
        <FormControlLabel control={<Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />} label="Parent" />
        {children}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Parent checkbox controls two children. Shows indeterminate state when only some children are checked.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  }}>
      <Typography variant="h6">All Size and Color Combinations</Typography>

      {(['small', 'medium', 'large'] as const).map(size => <Box key={size}>
          <Typography variant="body2" sx={{
        mb: 1,
        fontWeight: 'bold'
      }}>
            Size: {size}
          </Typography>
          <Stack spacing={1}>
            <Box>
              <Typography variant="caption">Primary</Typography>
              <Stack direction="row" spacing={1}>
                <Checkbox size={size} color="primary" />
                <Checkbox size={size} color="primary" checked />
                <Checkbox size={size} color="primary" indeterminate />
                <Checkbox size={size} color="primary" disabled />
                <Checkbox size={size} color="primary" disabled checked />
              </Stack>
            </Box>
            <Box>
              <Typography variant="caption">Default</Typography>
              <Stack direction="row" spacing={1}>
                <Checkbox size={size} color="default" />
                <Checkbox size={size} color="default" checked />
                <Checkbox size={size} color="default" indeterminate />
                <Checkbox size={size} color="default" disabled />
                <Checkbox size={size} color="default" disabled checked />
              </Stack>
            </Box>
          </Stack>
        </Box>)}
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive view of all checkbox size and color combinations with different states.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Custom Color
        </Typography>
        <Checkbox sx={{
        color: 'purple',
        '&.Mui-checked': {
          color: 'purple'
        }
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Custom Size (using sx)
        </Typography>
        <Checkbox sx={{
        '& .MuiSvgIcon-root': {
          fontSize: 32
        }
      }} />
      </Box>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of custom styling using the sx prop.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    indeterminate: false,
    size: 'medium',
    color: 'primary',
    disabled: false,
    disableRipple: false,
    required: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Checkbox props.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const Y=["Default","Checked","Indeterminate","Sizes","Colors","States","WithLabels","ControlledCheckbox","CheckboxGroup","ParentChildCheckboxes","AllCombinations","CustomStyling","Playground"];export{f as AllCombinations,y as CheckboxGroup,m as Checked,b as Colors,C as ControlledCheckbox,S as CustomStyling,p as Default,x as Indeterminate,j as ParentChildCheckboxes,v as Playground,k as Sizes,u as States,g as WithLabels,Y as __namedExportsOrder,X as default};
