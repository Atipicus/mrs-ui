import{R as w,j as e,r as u}from"./iframe-DxesKUG5.js";import{S as L,I as i}from"./Select-CROGGtfS.js";import{M as t}from"./MenuItem-CUxKB583.js";import{F as s}from"./FormLabel-CZQ5-iCk.js";import{F}from"./FormHelperText-Bp4w-F5W.js";import{B as A}from"./Box-DSvwcJiO.js";import{C as V}from"./Chip-DApYe1Kj.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B6Th5GL5.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGRz5sF4.js";import"./Menu-Dftixyz6.js";import"./useSlot-BNQ-RlnO.js";import"./resolveComponentProps-k1KtcFgI.js";import"./useForkRef-C5YMB9vu.js";import"./useSlotProps-cnyHoBat.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B5PjxauP.js";import"./useTheme-IYqs0tYS.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-wcyDEEKY.js";import"./utils-BQoIxAYs.js";import"./ButtonBase-Be8Rllp-.js";import"./useEventCallback-Ctd8iJzz.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-C4KZ8Es5.js";import"./index-DKvoSd49.js";import"./getReactElementRef-BXhN29jQ.js";import"./mergeSlotProps-CMk3k77_.js";import"./Modal-BwMv3NOR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DjyyoNyY.js";import"./Fade-BMIW7GC5.js";import"./List-DBGJWNkI.js";import"./ListContext-C4VWsNph.js";import"./useControlled-74n3lbz6.js";import"./createSvgIcon-Bhh-g1_u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./MenuItem-L-LRp4ED.js";import"./listItemIconClasses-BFANnX7P.js";import"./listItemTextClasses-B7xxSf7B.js";import"./dividerClasses-DBa9hxSO.js";import"./isMuiElement-D0L_tVWv.js";const r=w.forwardRef(({variant:n="outlined",color:l="primary",size:a="medium",fullWidth:p=!1,sx:O,...T},d)=>e.jsx(L,{ref:d,variant:n,color:l,size:a,fullWidth:p,sx:{fontFamily:o=>o.typography.fontFamily,...n==="outlined"&&{"& .MuiOutlinedInput-notchedOutline":{borderColor:o=>o.palette._components?.input?.outlined?.enabledBorder||o.palette.divider},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:o=>o.palette.text.primary},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:2}},...n==="filled"&&{backgroundColor:o=>o.palette._components?.input?.filled?.enabledFill||"rgba(0, 0, 0, 0.06)","&:hover":{backgroundColor:o=>o.palette._components?.input?.filled?.enabledFill||"rgba(0, 0, 0, 0.09)"},"&.Mui-focused":{backgroundColor:o=>o.palette._components?.input?.filled?.enabledFill||"rgba(0, 0, 0, 0.06)"}},...n==="standard"&&{"&:before":{borderBottomColor:o=>o.palette._components?.input?.standard?.enabledBorder||o.palette.divider},"&:hover:not(.Mui-disabled):before":{borderBottomColor:o=>o.palette.text.primary}},...O},...T}));r.displayName="Select";r.__docgenInfo={description:`Select component

Select components are used for collecting user provided information from a list of options.
Supports single and multiple selection, different variants, sizes, and states.

@param props - Select component props
@returns Select component

@example
\`\`\`tsx
// Basic usage
<Select value={age} onChange={handleChange}>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>

// With label (use FormControl)
<FormControl>
  <InputLabel>Age</InputLabel>
  <Select value={age} onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
  </Select>
</FormControl>

// Multiple selection
<Select multiple value={values} onChange={handleChange}>
  <MenuItem value="option1">Option 1</MenuItem>
  <MenuItem value="option2">Option 2</MenuItem>
</Select>
\`\`\``,methods:[],displayName:"Select",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`The color of the component
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:`The variant to use
@default 'outlined'`,defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the component
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},value:{required:!1,tsType:{name:"any"},description:"The input value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SelectChangeEvent<any>, child: React.ReactNode) => void",signature:{arguments:[{type:{name:"SelectChangeEvent",elements:[{name:"any"}],raw:"SelectChangeEvent<any>"},name:"event"},{type:{name:"ReactReactNode",raw:"React.ReactNode"},name:"child"}],return:{name:"void"}}},description:"Callback fired when the value is changed"},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the component is disabled
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`If true, the select will indicate an error
@default false`},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the select will take up the full width
@default false`,defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"The label content"},multiple:{required:!1,tsType:{name:"boolean"},description:`If true, value must be an array and the menu will support multiple selections
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`If true, the component is required
@default false`},native:{required:!1,tsType:{name:"boolean"},description:`If true, the select is in native mode (uses native HTML select)
@default false`},renderValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Render the selected value"},autoFocus:{required:!1,tsType:{name:"boolean"},description:`If true, the Select opens automatically on mount
@default false`},autoWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the component is auto-width
@default false`},defaultValue:{required:!1,tsType:{name:"any"},description:"The default value. Use when the component is not controlled"},id:{required:!1,tsType:{name:"string"},description:"The id of the wrapper element"},name:{required:!1,tsType:{name:"string"},description:"Name attribute of the select element"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the component requests to be closed"},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired when the component requests to be opened"},open:{required:!1,tsType:{name:"boolean"},description:"If true, the menu is open"}},composes:["Omit"]};const ye={title:"Atoms/Select",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","filled","standard"],description:"The variant of the select"},color:{control:"select",options:["primary","secondary","error","warning","info","success"],description:"The color of the select"},size:{control:"select",options:["small","medium"],description:"The size of the select"},disabled:{control:"boolean",description:"If true, the select will be disabled"},error:{control:"boolean",description:"If true, the select will indicate an error"},fullWidth:{control:"boolean",description:"If true, the select will take up the full width"},multiple:{control:"boolean",description:"If true, allows multiple selections"}}},c={render:()=>{const[n,l]=u.useState("");return e.jsxs(r,{value:n,onChange:a=>l(a.target.value),displayEmpty:!0,children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:10,children:"Ten"}),e.jsx(t,{value:20,children:"Twenty"}),e.jsx(t,{value:30,children:"Thirty"})]})}},m={render:()=>{const[n,l]=u.useState("");return e.jsxs(s,{fullWidth:!0,children:[e.jsx(i,{id:"age-label",children:"Age"}),e.jsxs(r,{labelId:"age-label",value:n,label:"Age",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:10,children:"Ten"}),e.jsx(t,{value:20,children:"Twenty"}),e.jsx(t,{value:30,children:"Thirty"})]})]})}},v={render:()=>{const[n,l]=u.useState("");return e.jsxs(s,{fullWidth:!0,children:[e.jsx(i,{id:"age-helper-label",children:"Age"}),e.jsxs(r,{labelId:"age-helper-label",value:n,label:"Age",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:10,children:"Ten"}),e.jsx(t,{value:20,children:"Twenty"}),e.jsx(t,{value:30,children:"Thirty"})]}),e.jsx(F,{children:"Please select your age range"})]})}},h={render:()=>{const[n,l]=u.useState("option1");return e.jsxs(s,{children:[e.jsx(i,{children:"Outlined"}),e.jsxs(r,{variant:"outlined",value:n,label:"Outlined",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"})]})]})}},g={render:()=>{const[n,l]=u.useState("option1");return e.jsxs(s,{variant:"filled",children:[e.jsx(i,{children:"Filled"}),e.jsxs(r,{variant:"filled",value:n,label:"Filled",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"})]})]})}},I={render:()=>{const[n,l]=u.useState("option1");return e.jsxs(s,{variant:"standard",children:[e.jsx(i,{children:"Standard"}),e.jsxs(r,{variant:"standard",value:n,label:"Standard",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"})]})]})}},f={render:()=>{const[n,l]=u.useState("option1");return e.jsxs(s,{size:"small",children:[e.jsx(i,{children:"Small"}),e.jsxs(r,{size:"small",value:n,label:"Small",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"})]})]})}},b={render:()=>{const[n,l]=u.useState("");return e.jsxs(s,{error:!0,fullWidth:!0,children:[e.jsx(i,{children:"Required Field"}),e.jsxs(r,{value:n,label:"Required Field",error:!0,onChange:a=>l(a.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"})]}),e.jsx(F,{children:"This field is required"})]})}},x={render:()=>e.jsxs(s,{disabled:!0,children:[e.jsx(i,{children:"Disabled"}),e.jsxs(r,{value:"option1",label:"Disabled",disabled:!0,children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"})]})]})},S={render:()=>{const[n,l]=u.useState([]);return e.jsxs(s,{fullWidth:!0,children:[e.jsx(i,{children:"Multiple Select"}),e.jsxs(r,{multiple:!0,value:n,label:"Multiple Select",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"}),e.jsx(t,{value:"option4",children:"Option 4"})]})]})}},M={render:()=>{const[n,l]=u.useState([]);return e.jsxs(s,{fullWidth:!0,children:[e.jsx(i,{children:"Select Tags"}),e.jsxs(r,{multiple:!0,value:n,label:"Select Tags",onChange:a=>l(a.target.value),renderValue:a=>e.jsx(A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:a.map(p=>e.jsx(V,{label:p,size:"small"},p))}),children:[e.jsx(t,{value:"React",children:"React"}),e.jsx(t,{value:"TypeScript",children:"TypeScript"}),e.jsx(t,{value:"Material-UI",children:"Material-UI"}),e.jsx(t,{value:"Storybook",children:"Storybook"})]})]})}},y={render:()=>{const[n,l]=u.useState("option1");return e.jsxs(s,{children:[e.jsx(i,{children:"Auto Width"}),e.jsxs(r,{autoWidth:!0,value:n,label:"Auto Width",onChange:a=>l(a.target.value),children:[e.jsx(t,{value:"option1",children:"Short"}),e.jsx(t,{value:"option2",children:"Medium Length Option"}),e.jsx(t,{value:"option3",children:"Very Long Option Text Here"})]})]})}},j={render:()=>{const[n,l]=u.useState("option1"),[a,p]=u.useState("option1"),[O,T]=u.useState("option1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs(s,{children:[e.jsx(i,{children:"Outlined"}),e.jsxs(r,{variant:"outlined",value:n,label:"Outlined",onChange:d=>l(d.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"})]})]}),e.jsxs(s,{variant:"filled",children:[e.jsx(i,{children:"Filled"}),e.jsxs(r,{variant:"filled",value:a,label:"Filled",onChange:d=>p(d.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"})]})]}),e.jsxs(s,{variant:"standard",children:[e.jsx(i,{children:"Standard"}),e.jsxs(r,{variant:"standard",value:O,label:"Standard",onChange:d=>T(d.target.value),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"})]})]})]})}},C={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["primary","secondary","error","warning","info","success"].map(n=>e.jsxs(s,{children:[e.jsx(i,{children:n.charAt(0).toUpperCase()+n.slice(1)}),e.jsxs(r,{color:n,value:"option1",label:n.charAt(0).toUpperCase()+n.slice(1),children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"})]})]},n))})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [age, setAge] = useState('');
    return <Select value={age} onChange={e => setAge(e.target.value as string)} displayEmpty>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>;
  }
}`,...c.parameters?.docs?.source},description:{story:"Basic select",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [age, setAge] = useState('');
    return <FormControl fullWidth>
        <InputLabel id="age-label">Age</InputLabel>
        <Select labelId="age-label" value={age} label="Age" onChange={e => setAge(e.target.value as string)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...m.parameters?.docs?.source},description:{story:"With label (using FormControl)",...m.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [age, setAge] = useState('');
    return <FormControl fullWidth>
        <InputLabel id="age-helper-label">Age</InputLabel>
        <Select labelId="age-helper-label" value={age} label="Age" onChange={e => setAge(e.target.value as string)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Please select your age range</FormHelperText>
      </FormControl>;
  }
}`,...v.parameters?.docs?.source},description:{story:"With helper text",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <FormControl>
        <InputLabel>Outlined</InputLabel>
        <Select variant="outlined" value={value} label="Outlined" onChange={e => setValue(e.target.value as string)}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Outlined variant (default)",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <FormControl variant="filled">
        <InputLabel>Filled</InputLabel>
        <Select variant="filled" value={value} label="Filled" onChange={e => setValue(e.target.value as string)}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Filled variant",...g.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <FormControl variant="standard">
        <InputLabel>Standard</InputLabel>
        <Select variant="standard" value={value} label="Standard" onChange={e => setValue(e.target.value as string)}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...I.parameters?.docs?.source},description:{story:"Standard variant",...I.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <FormControl size="small">
        <InputLabel>Small</InputLabel>
        <Select size="small" value={value} label="Small" onChange={e => setValue(e.target.value as string)}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Small size",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <FormControl error fullWidth>
        <InputLabel>Required Field</InputLabel>
        <Select value={value} label="Required Field" error onChange={e => setValue(e.target.value as string)}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
        <FormHelperText>This field is required</FormHelperText>
      </FormControl>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Error state",...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <FormControl disabled>
      <InputLabel>Disabled</InputLabel>
      <Select value="option1" label="Disabled" disabled>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </Select>
    </FormControl>
}`,...x.parameters?.docs?.source},description:{story:"Disabled state",...x.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return <FormControl fullWidth>
        <InputLabel>Multiple Select</InputLabel>
        <Select multiple value={values} label="Multiple Select" onChange={e => setValues(e.target.value as string[])}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
          <MenuItem value="option4">Option 4</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Multiple selection",...S.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return <FormControl fullWidth>
        <InputLabel>Select Tags</InputLabel>
        <Select multiple value={values} label="Select Tags" onChange={e => setValues(e.target.value as string[])} renderValue={selected => <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.5
      }}>
              {(selected as string[]).map(value => <Chip key={value} label={value} size="small" />)}
            </Box>}>
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="TypeScript">TypeScript</MenuItem>
          <MenuItem value="Material-UI">Material-UI</MenuItem>
          <MenuItem value="Storybook">Storybook</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Multiple selection with chips",...M.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <FormControl>
        <InputLabel>Auto Width</InputLabel>
        <Select autoWidth value={value} label="Auto Width" onChange={e => setValue(e.target.value as string)}>
          <MenuItem value="option1">Short</MenuItem>
          <MenuItem value="option2">Medium Length Option</MenuItem>
          <MenuItem value="option3">Very Long Option Text Here</MenuItem>
        </Select>
      </FormControl>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Auto width",...y.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [outlined, setOutlined] = useState('option1');
    const [filled, setFilled] = useState('option1');
    const [standard, setStandard] = useState('option1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <FormControl>
          <InputLabel>Outlined</InputLabel>
          <Select variant="outlined" value={outlined} label="Outlined" onChange={e => setOutlined(e.target.value as string)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled">
          <InputLabel>Filled</InputLabel>
          <Select variant="filled" value={filled} label="Filled" onChange={e => setFilled(e.target.value as string)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard">
          <InputLabel>Standard</InputLabel>
          <Select variant="standard" value={standard} label="Standard" onChange={e => setStandard(e.target.value as string)}>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:"All variants comparison",...j.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(color => <FormControl key={color}>
            <InputLabel>{color.charAt(0).toUpperCase() + color.slice(1)}</InputLabel>
            <Select color={color} value="option1" label={color.charAt(0).toUpperCase() + color.slice(1)}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </FormControl>)}
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:"All colors comparison",...C.parameters?.docs?.description}}};const je=["Basic","WithLabel","WithHelperText","Outlined","Filled","Standard","Small","Error","Disabled","Multiple","MultipleWithChips","AutoWidth","AllVariants","AllColors"];export{C as AllColors,j as AllVariants,y as AutoWidth,c as Basic,x as Disabled,b as Error,g as Filled,S as Multiple,M as MultipleWithChips,h as Outlined,f as Small,I as Standard,v as WithHelperText,m as WithLabel,je as __namedExportsOrder,ye as default};
