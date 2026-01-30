import{j as e}from"./iframe-KbWxCWh5.js";import{F as r}from"./FormControlLabel-BUl-jvjR.js";import{C as o}from"./Checkbox-l54hadPb.js";import{R as x}from"./Radio-DVx3mAgn.js";import{S as h}from"./Switch-DcF8cS8E.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControlLabel-5mBF7I7P.js";import"./memoTheme-CD-unLW0.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-DGoob9yj.js";import"./resolveComponentProps-DiXWND4P.js";import"./useForkRef-DdHlOThs.js";import"./useFormControl-Bv0b7xXl.js";import"./Typography-C621kO0v.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Checkbox-B3p4kLR4.js";import"./SwitchBase-CrB5xXyr.js";import"./useControlled-CJxix2li.js";import"./ButtonBase-BsRfRYMN.js";import"./useEventCallback-CUjcavDR.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Bphyg1jv.js";import"./mergeSlotProps-DJ5NIoUb.js";import"./Radio-2Fhj96eH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Switch-BL_A5J7C.js";const H={title:"Atoms/FormControlLabel",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"The label text"},labelPlacement:{control:"select",options:["end","start","top","bottom"],description:"The position of the label"},disabled:{control:"boolean",description:"If true, the component is disabled"},required:{control:"boolean",description:"If true, the control is required"}}},t={args:{control:e.jsx(o,{}),label:"Remember me"}},a={args:{control:e.jsx(x,{}),label:"Radio option"}},l={args:{control:e.jsx(h,{}),label:"Enable notifications"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{control:e.jsx(o,{}),label:"Disabled Checkbox",disabled:!0}),e.jsx(r,{control:e.jsx(x,{}),label:"Disabled Radio",disabled:!0}),e.jsx(r,{control:e.jsx(h,{}),label:"Disabled Switch",disabled:!0})]})},c={args:{control:e.jsx(o,{}),label:"Label at end",labelPlacement:"end"}},n={args:{control:e.jsx(o,{}),label:"Label at start",labelPlacement:"start"}},i={args:{control:e.jsx(o,{}),label:"Label on top",labelPlacement:"top"}},d={args:{control:e.jsx(o,{}),label:"Label on bottom",labelPlacement:"bottom"}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"End",labelPlacement:"end"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"Start",labelPlacement:"start"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"Top",labelPlacement:"top"}),e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"Bottom",labelPlacement:"bottom"})]})},p={args:{control:e.jsx(o,{}),label:"I agree to the terms and conditions",required:!0}},b={render:()=>e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"Custom styled label",sx:{"& .MuiFormControlLabel-label":{fontSize:"18px",fontWeight:600,color:"primary.main"}}})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{control:e.jsx(o,{defaultChecked:!0}),label:"Checkbox Control"}),e.jsx(r,{control:e.jsx(x,{defaultChecked:!0}),label:"Radio Control"}),e.jsx(r,{control:e.jsx(h,{defaultChecked:!0}),label:"Switch Control"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Checkbox />,
    label: 'Remember me'
  }
}`,...t.parameters?.docs?.source},description:{story:"Basic with Checkbox",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Radio />,
    label: 'Radio option'
  }
}`,...a.parameters?.docs?.source},description:{story:"With Radio",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Switch />,
    label: 'Enable notifications'
  }
}`,...l.parameters?.docs?.source},description:{story:"With Switch",...l.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <FormControlLabel control={<Checkbox />} label="Disabled Checkbox" disabled />
      <FormControlLabel control={<Radio />} label="Disabled Radio" disabled />
      <FormControlLabel control={<Switch />} label="Disabled Switch" disabled />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Disabled state",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Checkbox />,
    label: 'Label at end',
    labelPlacement: 'end'
  }
}`,...c.parameters?.docs?.source},description:{story:"Label placement - End (default)",...c.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Checkbox />,
    label: 'Label at start',
    labelPlacement: 'start'
  }
}`,...n.parameters?.docs?.source},description:{story:"Label placement - Start",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Checkbox />,
    label: 'Label on top',
    labelPlacement: 'top'
  }
}`,...i.parameters?.docs?.source},description:{story:"Label placement - Top",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Checkbox />,
    label: 'Label on bottom',
    labelPlacement: 'bottom'
  }
}`,...d.parameters?.docs?.source},description:{story:"Label placement - Bottom",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px'
  }}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="End" labelPlacement="end" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Start" labelPlacement="start" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Top" labelPlacement="top" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Bottom" labelPlacement="bottom" />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"All label placements comparison",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    control: <Checkbox />,
    label: 'I agree to the terms and conditions',
    required: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Required field",...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FormControlLabel control={<Checkbox defaultChecked />} label="Custom styled label" sx={{
    '& .MuiFormControlLabel-label': {
      fontSize: '18px',
      fontWeight: 600,
      color: 'primary.main'
    }
  }} />
}`,...b.parameters?.docs?.source},description:{story:"With custom styling",...b.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox Control" />
      <FormControlLabel control={<Radio defaultChecked />} label="Radio Control" />
      <FormControlLabel control={<Switch defaultChecked />} label="Switch Control" />
    </div>
}`,...u.parameters?.docs?.source},description:{story:"All control types",...u.parameters?.docs?.description}}};const J=["WithCheckbox","WithRadio","WithSwitch","Disabled","LabelPlacementEnd","LabelPlacementStart","LabelPlacementTop","LabelPlacementBottom","AllLabelPlacements","Required","CustomStyling","AllControlTypes"];export{u as AllControlTypes,m as AllLabelPlacements,b as CustomStyling,s as Disabled,d as LabelPlacementBottom,c as LabelPlacementEnd,n as LabelPlacementStart,i as LabelPlacementTop,p as Required,t as WithCheckbox,a as WithRadio,l as WithSwitch,J as __namedExportsOrder,H as default};
