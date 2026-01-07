import{R as f,j as e,r as k}from"./iframe-BPbf4MnO.js";import{F as L}from"./FormGroup-DptsrFsA.js";import{F as o}from"./FormControlLabel-BZkvbWTS.js";import{C as n}from"./Checkbox-Dknqpxx6.js";import{F as i,a as d}from"./FormLabel-DHAN4jCb.js";import{F}from"./FormHelperText-CKJ54Ae6.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DpAFHVj5.js";import"./useFormControl-F8m2Db3c.js";import"./formControlState-Dq1zat_P.js";import"./FormControlLabel-CyRcgGWj.js";import"./useSlot-ceg9wdw5.js";import"./resolveComponentProps-B0ZiqZCs.js";import"./useForkRef-BpHYd2s2.js";import"./Typography-JXIqQdEC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Checkbox-ByHFHn8F.js";import"./SwitchBase-BfVXvZP6.js";import"./useControlled-CHWc9n_e.js";import"./ButtonBase-COqR6ygO.js";import"./useEventCallback-CWPHUYlg.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-U23L9q-F.js";import"./mergeSlotProps-CaxcUijV.js";import"./isMuiElement-DbLvnWJB.js";const a=f.forwardRef(({children:t,...l},r)=>e.jsx(L,{ref:r,...l,children:t}));a.displayName="FormGroup";a.__docgenInfo={description:`FormGroup component - groups form controls
Provides a helpful wrapper used to group selection control components

@example
\`\`\`tsx
<FormGroup>
  <FormControlLabel control={<Checkbox />} label="Option 1" />
  <FormControlLabel control={<Checkbox />} label="Option 2" />
</FormGroup>
\`\`\``,methods:[],displayName:"FormGroup",props:{row:{required:!1,tsType:{name:"boolean"},description:"Display group of elements in a compact row"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"},sx:{required:!1,tsType:{name:"MuiFormGroupProps['sx']",raw:"MuiFormGroupProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles"}},composes:["MuiFormGroupProps"]};const z={title:"Atoms/FormGroup",component:a,tags:["autodocs"],argTypes:{row:{control:"boolean",description:"Display group of elements in a compact row"}}},p={render:()=>e.jsxs(a,{children:[e.jsx(o,{control:e.jsx(n,{defaultChecked:!0}),label:"Option 1"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 2"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 3"})]})},m={render:()=>{const[t,l]=k.useState({gilad:!0,jason:!1,antoine:!1}),r=s=>{l({...t,[s.target.name]:s.target.checked})};return e.jsxs(i,{component:"fieldset",children:[e.jsx(d,{component:"legend",children:"Assign responsibility"}),e.jsxs(a,{children:[e.jsx(o,{control:e.jsx(n,{checked:t.gilad,onChange:r,name:"gilad"}),label:"Gilad Gray"}),e.jsx(o,{control:e.jsx(n,{checked:t.jason,onChange:r,name:"jason"}),label:"Jason Killian"}),e.jsx(o,{control:e.jsx(n,{checked:t.antoine,onChange:r,name:"antoine"}),label:"Antoine Llorca"})]}),e.jsx(F,{children:"Select team members"})]})}},h={render:()=>e.jsxs(i,{component:"fieldset",children:[e.jsx(d,{component:"legend",children:"Select options"}),e.jsxs(a,{row:!0,children:[e.jsx(o,{control:e.jsx(n,{defaultChecked:!0}),label:"Option 1"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 2"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 3"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 4"})]})]})},b={render:()=>e.jsxs(a,{children:[e.jsx(o,{control:e.jsx(n,{defaultChecked:!0}),label:"Available Option 1"}),e.jsx(o,{control:e.jsx(n,{}),label:"Available Option 2"}),e.jsx(o,{control:e.jsx(n,{}),label:"Disabled Option",disabled:!0}),e.jsx(o,{control:e.jsx(n,{defaultChecked:!0}),label:"Disabled Checked",disabled:!0})]})},C={render:()=>{const[t,l]=k.useState({option1:!1,option2:!1,option3:!1}),r=g=>{l({...t,[g.target.name]:g.target.checked})},s=!t.option1&&!t.option2&&!t.option3;return e.jsxs(i,{error:s,component:"fieldset",children:[e.jsx(d,{component:"legend",children:"Pick at least one"}),e.jsxs(a,{children:[e.jsx(o,{control:e.jsx(n,{checked:t.option1,onChange:r,name:"option1"}),label:"Option 1"}),e.jsx(o,{control:e.jsx(n,{checked:t.option2,onChange:r,name:"option2"}),label:"Option 2"}),e.jsx(o,{control:e.jsx(n,{checked:t.option3,onChange:r,name:"option3"}),label:"Option 3"})]}),e.jsx(F,{children:s?"You must select at least one option":" "})]})}},x={render:()=>{const[t,l]=k.useState([!0,!1]),r=c=>{l([c.target.checked,c.target.checked])},s=c=>{l([c.target.checked,t[1]])},g=c=>{l([t[0],c.target.checked])},j=e.jsxs(a,{sx:{marginLeft:3},children:[e.jsx(o,{control:e.jsx(n,{checked:t[0],onChange:s}),label:"Child 1"}),e.jsx(o,{control:e.jsx(n,{checked:t[1],onChange:g}),label:"Child 2"})]});return e.jsxs(i,{component:"fieldset",children:[e.jsx(d,{component:"legend",children:"Select children"}),e.jsx(o,{label:"Parent",control:e.jsx(n,{checked:t[0]&&t[1],indeterminate:t[0]!==t[1],onChange:r})}),j]})}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"48px"},children:[e.jsxs(i,{component:"fieldset",children:[e.jsx(d,{component:"legend",children:"Column Layout"}),e.jsxs(a,{children:[e.jsx(o,{control:e.jsx(n,{defaultChecked:!0}),label:"Option 1"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 2"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 3"})]})]}),e.jsxs(i,{component:"fieldset",children:[e.jsx(d,{component:"legend",children:"Row Layout"}),e.jsxs(a,{row:!0,children:[e.jsx(o,{control:e.jsx(n,{defaultChecked:!0}),label:"Option 1"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 2"}),e.jsx(o,{control:e.jsx(n,{}),label:"Option 3"})]})]})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
      <FormControlLabel control={<Checkbox />} label="Option 2" />
      <FormControlLabel control={<Checkbox />} label="Option 3" />
    </FormGroup>
}`,...p.parameters?.docs?.source},description:{story:"Basic checkbox group",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState({
      gilad: true,
      jason: false,
      antoine: false
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked
      });
    };
    return <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={state.gilad} onChange={handleChange} name="gilad" />} label="Gilad Gray" />
          <FormControlLabel control={<Checkbox checked={state.jason} onChange={handleChange} name="jason" />} label="Jason Killian" />
          <FormControlLabel control={<Checkbox checked={state.antoine} onChange={handleChange} name="antoine" />} label="Antoine Llorca" />
        </FormGroup>
        <FormHelperText>Select team members</FormHelperText>
      </FormControl>;
  }
}`,...m.parameters?.docs?.source},description:{story:"With label and helper text",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <FormControl component="fieldset">
      <FormLabel component="legend">Select options</FormLabel>
      <FormGroup row>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
        <FormControlLabel control={<Checkbox />} label="Option 2" />
        <FormControlLabel control={<Checkbox />} label="Option 3" />
        <FormControlLabel control={<Checkbox />} label="Option 4" />
      </FormGroup>
    </FormControl>
}`,...h.parameters?.docs?.source},description:{story:"Row layout",...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Available Option 1" />
      <FormControlLabel control={<Checkbox />} label="Available Option 2" />
      <FormControlLabel control={<Checkbox />} label="Disabled Option" disabled />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Disabled Checked" disabled />
    </FormGroup>
}`,...b.parameters?.docs?.source},description:{story:"With disabled options",...b.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState({
      option1: false,
      option2: false,
      option3: false
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked
      });
    };
    const error = !state.option1 && !state.option2 && !state.option3;
    return <FormControl error={error} component="fieldset">
        <FormLabel component="legend">Pick at least one</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={state.option1} onChange={handleChange} name="option1" />} label="Option 1" />
          <FormControlLabel control={<Checkbox checked={state.option2} onChange={handleChange} name="option2" />} label="Option 2" />
          <FormControlLabel control={<Checkbox checked={state.option3} onChange={handleChange} name="option3" />} label="Option 3" />
        </FormGroup>
        <FormHelperText>{error ? 'You must select at least one option' : ' '}</FormHelperText>
      </FormControl>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Error state",...C.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    const children = <FormGroup sx={{
      marginLeft: 3
    }}>
        <FormControlLabel control={<Checkbox checked={checked[0]} onChange={handleChange2} />} label="Child 1" />
        <FormControlLabel control={<Checkbox checked={checked[1]} onChange={handleChange3} />} label="Child 2" />
      </FormGroup>;
    return <FormControl component="fieldset">
        <FormLabel component="legend">Select children</FormLabel>
        <FormControlLabel label="Parent" control={<Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />} />
        {children}
      </FormControl>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Indeterminate checkbox",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '48px'
  }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Column Layout</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Row Layout</FormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
        </FormGroup>
      </FormControl>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Column vs Row comparison",...u.parameters?.docs?.description}}};const Q=["Basic","WithLabel","Row","WithDisabledOptions","Error","WithIndeterminate","ColumnVsRow"];export{p as Basic,u as ColumnVsRow,C as Error,h as Row,b as WithDisabledOptions,x as WithIndeterminate,m as WithLabel,Q as __namedExportsOrder,z as default};
