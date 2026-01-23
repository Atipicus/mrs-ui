import{R as C,j as e,r as c}from"./iframe-BpxNhWet.js";import{R as j}from"./RadioGroup-RfB_5UVn.js";import{R as r}from"./Radio-CNeRpnLu.js";import{F as l}from"./FormControlLabel-BMDHn_An.js";import{F as s,a as i}from"./FormLabel-D-0J4tLk.js";import{F as h}from"./FormHelperText-Cda8_Kiz.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-RRFU8_yt.js";import"./Radio-BkrtPfVT.js";import"./SwitchBase-BxGeCOXr.js";import"./useFormControl-77QNqV7W.js";import"./useSlot-DZOfbP_c.js";import"./resolveComponentProps-BSmzc2Aq.js";import"./useForkRef-n-W_vIsh.js";import"./useControlled-7guYJBA6.js";import"./ButtonBase-y6gtY0yW.js";import"./useEventCallback-VkQVGqps.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DVmvGiTa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-BzG2kZrH.js";import"./formControlState-Dq1zat_P.js";import"./FormControlLabel-BIzAjREH.js";import"./Typography-CmwbP09K.js";import"./isMuiElement-CUZxY96J.js";const n=C.forwardRef(({children:o,...a},t)=>e.jsx(j,{ref:t,...a,children:o}));n.displayName="RadioGroup";n.__docgenInfo={description:`RadioGroup component - groups Radio buttons together
Provides a wrapper around a set of Radio components

@example
\`\`\`tsx
<RadioGroup value={value} onChange={handleChange}>
  <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
  <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
</RadioGroup>
\`\`\``,methods:[],displayName:"RadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:"The name used to reference the value of the control"},value:{required:!1,tsType:{name:"any"},description:"The value of the selected radio button"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>, value: string) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when a radio button is selected"},defaultValue:{required:!1,tsType:{name:"any"},description:"The default value. Use when the component is not controlled"},row:{required:!1,tsType:{name:"boolean"},description:"Display group of elements in a compact row"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"}},composes:["MuiRadioGroupProps"]};const Y={title:"Atoms/RadioGroup",component:n,tags:["autodocs"],argTypes:{row:{control:"boolean",description:"Display group of elements in a compact row"},defaultValue:{control:"text",description:"The default value"}}},d={render:()=>{const[o,a]=c.useState("option1");return e.jsxs(n,{value:o,onChange:t=>a(t.target.value),children:[e.jsx(l,{value:"option1",control:e.jsx(r,{}),label:"Option 1"}),e.jsx(l,{value:"option2",control:e.jsx(r,{}),label:"Option 2"}),e.jsx(l,{value:"option3",control:e.jsx(r,{}),label:"Option 3"})]})}},u={render:()=>{const[o,a]=c.useState("female");return e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsxs(n,{value:o,onChange:t=>a(t.target.value),children:[e.jsx(l,{value:"female",control:e.jsx(r,{}),label:"Female"}),e.jsx(l,{value:"male",control:e.jsx(r,{}),label:"Male"}),e.jsx(l,{value:"other",control:e.jsx(r,{}),label:"Other"})]}),e.jsx(h,{children:"Select your gender"})]})}},p={render:()=>{const[o,a]=c.useState("yes");return e.jsxs(s,{children:[e.jsx(i,{children:"Do you agree?"}),e.jsxs(n,{row:!0,value:o,onChange:t=>a(t.target.value),children:[e.jsx(l,{value:"yes",control:e.jsx(r,{}),label:"Yes"}),e.jsx(l,{value:"no",control:e.jsx(r,{}),label:"No"}),e.jsx(l,{value:"maybe",control:e.jsx(r,{}),label:"Maybe"})]})]})}},m={render:()=>{const[o,a]=c.useState("option1");return e.jsxs(s,{children:[e.jsx(i,{children:"Choose an option"}),e.jsxs(n,{value:o,onChange:t=>a(t.target.value),children:[e.jsx(l,{value:"option1",control:e.jsx(r,{}),label:"Available Option 1"}),e.jsx(l,{value:"option2",control:e.jsx(r,{}),label:"Available Option 2"}),e.jsx(l,{value:"option3",control:e.jsx(r,{}),label:"Disabled Option",disabled:!0})]})]})}},b={render:()=>{const[o,a]=c.useState("");return e.jsxs(s,{error:!0,children:[e.jsx(i,{children:"Required Selection"}),e.jsxs(n,{value:o,onChange:t=>a(t.target.value),children:[e.jsx(l,{value:"option1",control:e.jsx(r,{}),label:"Option 1"}),e.jsx(l,{value:"option2",control:e.jsx(r,{}),label:"Option 2"})]}),e.jsx(h,{children:"Please select an option"})]})}},v={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:["primary","secondary","error","warning","info","success"].map(o=>e.jsxs(s,{children:[e.jsx(i,{children:o.charAt(0).toUpperCase()+o.slice(1)}),e.jsxs(n,{defaultValue:"option1",children:[e.jsx(l,{value:"option1",control:e.jsx(r,{color:o}),label:"Option 1"}),e.jsx(l,{value:"option2",control:e.jsx(r,{color:o}),label:"Option 2"})]})]},o))})},x={render:()=>{const[o,a]=c.useState("controlled1");return e.jsxs("div",{style:{display:"flex",gap:"48px"},children:[e.jsxs(s,{children:[e.jsx(i,{children:"Controlled"}),e.jsxs(n,{value:o,onChange:t=>a(t.target.value),children:[e.jsx(l,{value:"controlled1",control:e.jsx(r,{}),label:"Controlled 1"}),e.jsx(l,{value:"controlled2",control:e.jsx(r,{}),label:"Controlled 2"})]}),e.jsxs(h,{children:["Value: ",o]})]}),e.jsxs(s,{children:[e.jsx(i,{children:"Uncontrolled"}),e.jsxs(n,{defaultValue:"uncontrolled1",children:[e.jsx(l,{value:"uncontrolled1",control:e.jsx(r,{}),label:"Uncontrolled 1"}),e.jsx(l,{value:"uncontrolled2",control:e.jsx(r,{}),label:"Uncontrolled 2"})]}),e.jsx(h,{children:"Uses defaultValue"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
      </RadioGroup>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Basic radio group",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('female');
    return <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>Select your gender</FormHelperText>
      </FormControl>;
  }
}`,...u.parameters?.docs?.source},description:{story:"With label and helper text",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('yes');
    return <FormControl>
        <FormLabel>Do you agree?</FormLabel>
        <RadioGroup row value={value} onChange={e => setValue(e.target.value)}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
        </RadioGroup>
      </FormControl>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Row layout",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <FormControl>
        <FormLabel>Choose an option</FormLabel>
        <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
          <FormControlLabel value="option1" control={<Radio />} label="Available Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Available Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Disabled Option" disabled />
        </RadioGroup>
      </FormControl>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Disabled options",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <FormControl error>
        <FormLabel>Required Selection</FormLabel>
        <RadioGroup value={value} onChange={e => setValue(e.target.value)}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
        <FormHelperText>Please select an option</FormHelperText>
      </FormControl>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Error state",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(color => <FormControl key={color}>
            <FormLabel>{color.charAt(0).toUpperCase() + color.slice(1)}</FormLabel>
            <RadioGroup defaultValue="option1">
              <FormControlLabel value="option1" control={<Radio color={color} />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio color={color} />} label="Option 2" />
            </RadioGroup>
          </FormControl>)}
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:"All colors",...v.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [controlledValue, setControlledValue] = useState('controlled1');
    return <div style={{
      display: 'flex',
      gap: '48px'
    }}>
        <FormControl>
          <FormLabel>Controlled</FormLabel>
          <RadioGroup value={controlledValue} onChange={e => setControlledValue(e.target.value)}>
            <FormControlLabel value="controlled1" control={<Radio />} label="Controlled 1" />
            <FormControlLabel value="controlled2" control={<Radio />} label="Controlled 2" />
          </RadioGroup>
          <FormHelperText>Value: {controlledValue}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Uncontrolled</FormLabel>
          <RadioGroup defaultValue="uncontrolled1">
            <FormControlLabel value="uncontrolled1" control={<Radio />} label="Uncontrolled 1" />
            <FormControlLabel value="uncontrolled2" control={<Radio />} label="Uncontrolled 2" />
          </RadioGroup>
          <FormHelperText>Uses defaultValue</FormHelperText>
        </FormControl>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Controlled vs Uncontrolled",...x.parameters?.docs?.description}}};const $=["Basic","WithLabel","Row","WithDisabledOption","Error","AllColors","ControlledVsUncontrolled"];export{v as AllColors,d as Basic,x as ControlledVsUncontrolled,b as Error,p as Row,m as WithDisabledOption,u as WithLabel,$ as __namedExportsOrder,Y as default};
