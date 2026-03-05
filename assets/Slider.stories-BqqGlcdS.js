import{R as w,j as e}from"./iframe-DQx8_g_V.js";import{S as F}from"./Slider-DurD4BV0.js";import{B as a}from"./Box-CHcgeXiQ.js";import{T as r}from"./Typography-COUO01Vf.js";import{S as n}from"./Stack-BVuQ1I4R.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DN4SvyIR.js";import"./useControlled-B8CjVrLB.js";import"./useForkRef-dCFEyD_R.js";import"./useEventCallback-DtAB4E7S.js";import"./ownerDocument-DW-IO8s5.js";import"./resolveComponentProps-BFKdE3VA.js";import"./visuallyHidden-Dan1xhjv.js";import"./isFocusVisible-B8k4qzLc.js";import"./isHostComponent-DVu5iVWx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlotProps-DRMJ5NIo.js";import"./useThemeProps-BsrmR-wD.js";const t=w.forwardRef(({size:i="medium",color:l="primary",orientation:s="horizontal",disabled:j=!1,marks:o=!1,step:V=1,min:B=0,max:k=100,valueLabelDisplay:z="off",track:C="normal",disableSwap:D=!1,value:R,defaultValue:E,onChange:M,onChangeCommitted:q,valueLabelFormat:W,scale:L,getAriaValueText:A,name:I,id:N,component:S,sx:H,...P},_)=>e.jsx(F,{ref:_,size:i,color:l,orientation:s,disabled:j,marks:o,step:V,min:B,max:k,value:R,defaultValue:E,onChange:M,onChangeCommitted:q,valueLabelDisplay:z,valueLabelFormat:W,track:C,disableSwap:D,scale:L,getAriaValueText:A,name:I,id:N,...S&&{component:S},sx:H,...P}));t.displayName="Slider";t.__docgenInfo={description:`Slider component

Sliders allow users to make selections from a range of values.
Sliders reflect a range of values along a bar, from which users may select a single value.
They are ideal for adjusting settings such as volume, brightness, or applying image filters.

@param props - Slider component props
@returns Slider component`,methods:[],displayName:"Slider",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the slider.
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:`The color of the slider.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The component orientation.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},description:`The value of the slider.
For ranged sliders, provide an array with two values.`},defaultValue:{required:!1,tsType:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},description:"The default value. Use when the component is not controlled."},disabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the slider is disabled.\n@default false",defaultValue:{value:"false",computed:!1}},marks:{required:!1,tsType:{name:"union",raw:"boolean | Array<{ value: number; label?: React.ReactNode }>",elements:[{name:"boolean"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: number; label?: React.ReactNode }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"Array<{ value: number; label?: React.ReactNode }>"}]},description:"Marks indicate predetermined values to which the user can move the slider.\nIf `true` the marks are spaced according the value of the `step` prop.\nIf an array, it should contain objects with `value` and an optional `label` keys.\n@default false",defaultValue:{value:"false",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:`The granularity with which the slider can step through values.
@default 1`,defaultValue:{value:"1",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The minimum allowed value of the slider.
Should not be equal to max.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The maximum allowed value of the slider.
Should not be equal to min.
@default 100`,defaultValue:{value:"100",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event, value: number | number[], activeThumb: number) => void",signature:{arguments:[{type:{name:"Event"},name:"event"},{type:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},name:"value"},{type:{name:"number"},name:"activeThumb"}],return:{name:"void"}}},description:`Callback function that is fired when the slider's value changed.

@param {Event} event The event source of the callback.
You can pull out the new value by accessing \`event.target.value\` (any).
**Warning**: This is a generic event not a change event.
@param {number | number[]} value The new value.
@param {number} activeThumb Index of the currently moved thumb.`},onChangeCommitted:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent | Event, value: number | number[]) => void",signature:{arguments:[{type:{name:"union",raw:"React.SyntheticEvent | Event",elements:[{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},{name:"Event"}]},name:"event"},{type:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},name:"value"}],return:{name:"void"}}},description:`Callback function that is fired when the \`mouseup\` is triggered.

@param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
@param {number | number[]} value The new value.`},valueLabelDisplay:{required:!1,tsType:{name:"union",raw:"'auto' | 'on' | 'off'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'on'"},{name:"literal",value:"'off'"}]},description:"Controls when the value label is displayed:\n- `auto` the value label will display when the thumb is hovered or focused.\n- `on` will display persistently.\n- `off` will never display.\n@default 'off'",defaultValue:{value:"'off'",computed:!1}},valueLabelFormat:{required:!1,tsType:{name:"union",raw:"string | ((value: number, index: number) => React.ReactNode)",elements:[{name:"string"},{name:"unknown"}]},description:"The format function the value label's value."},scale:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => number",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"number"}}},description:`A transformation function, to change the scale of the slider.
@default (x) => x`},track:{required:!1,tsType:{name:"union",raw:"'normal' | 'inverted' | false",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'inverted'"},{name:"literal",value:"false"}]},description:"The track presentation:\n- `normal` the track will render a bar representing the slider value.\n- `inverted` the track will render a bar representing the remaining slider value.\n- `false` the track will render without a bar.\n@default 'normal'",defaultValue:{value:"'normal'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name attribute of the input element."},id:{required:!1,tsType:{name:"string"},description:"The id of the input element."},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`The component used for the root node.
Either a string to use a HTML element or a component.`},disableSwap:{required:!1,tsType:{name:"boolean"},description:"If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.\n@default false",defaultValue:{value:"false",computed:!1}},getAriaValueText:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, index: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:`Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
This is important for screen reader users.
@param {number} value The thumb label's value to format.
@param {number} index The thumb label's index to format.`},"aria-label":{required:!1,tsType:{name:"string"},description:"The label of the slider."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"The id of the element containing a label for the slider."},sx:{required:!1,tsType:{name:"MuiSliderProps['sx']",raw:"MuiSliderProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles."}},composes:["Omit"]};const oe={title:"Atoms/Slider",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"],description:"The size of the slider."},color:{control:"select",options:["primary","secondary","error","info","success","warning"],description:"The color of the slider."},orientation:{control:"select",options:["horizontal","vertical"],description:"The component orientation."},disabled:{control:"boolean",description:"If `true`, the slider is disabled."},marks:{control:"boolean",description:"If `true`, marks are displayed."},step:{control:"number",description:"The granularity with which the slider can step through values."},min:{control:"number",description:"The minimum allowed value of the slider."},max:{control:"number",description:"The maximum allowed value of the slider."},valueLabelDisplay:{control:"select",options:["auto","on","off"],description:"Controls when the value label is displayed."},track:{control:"select",options:["normal","inverted",!1],description:"The track presentation."},sx:{control:"object",description:"The system prop that allows defining system overrides as well as additional CSS styles."}},parameters:{layout:"centered"}},d={args:{defaultValue:30},render:i=>e.jsx(a,{sx:{width:300},children:e.jsx(t,{...i})})},u={render:()=>e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Continuous Slider"}),e.jsx(t,{defaultValue:30,"aria-label":"Default"})]}),parameters:{docs:{description:{story:"A continuous slider allows users to select a value along a subjective range."}}}},c={render:()=>e.jsxs(n,{spacing:3,sx:{width:300},children:[e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Small"}),e.jsx(t,{size:"small",defaultValue:30,"aria-label":"Small"})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Medium (default)"}),e.jsx(t,{size:"medium",defaultValue:50,"aria-label":"Medium"})]})]})},m={render:()=>e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Discrete slider with marks"}),e.jsx(t,{defaultValue:30,step:10,marks:!0,min:0,max:100,valueLabelDisplay:"auto","aria-label":"Discrete"})]}),parameters:{docs:{description:{story:"Discrete sliders can be adjusted to a specific value by referencing its value indicator."}}}},p={render:()=>{const i=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];return e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Custom marks"}),e.jsx(t,{defaultValue:20,step:10,marks:i,valueLabelDisplay:"auto","aria-label":"Custom marks"})]})}},h={render:()=>{const[i,l]=w.useState([20,40]),s=(j,o)=>{l(o)};return e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Range Slider"}),e.jsx(t,{value:i,onChange:s,valueLabelDisplay:"auto","aria-label":"Range"})]})},parameters:{docs:{description:{story:"The slider can be used to set the start and end of a range by supplying an array of values."}}}},y={render:()=>e.jsxs(n,{spacing:3,sx:{width:300},children:[e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Enabled"}),e.jsx(t,{defaultValue:30})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Disabled"}),e.jsx(t,{defaultValue:30,disabled:!0})]})]})},v={render:()=>e.jsxs(n,{direction:"row",spacing:3,sx:{height:300},children:[e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Continuous"}),e.jsx(t,{orientation:"vertical",defaultValue:30,valueLabelDisplay:"auto","aria-label":"Vertical"})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"With marks"}),e.jsx(t,{orientation:"vertical",defaultValue:30,marks:!0,step:10,valueLabelDisplay:"auto","aria-label":"Vertical with marks"})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Range"}),e.jsx(t,{orientation:"vertical",defaultValue:[20,40],valueLabelDisplay:"auto","aria-label":"Vertical range"})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Disabled"}),e.jsx(t,{orientation:"vertical",defaultValue:30,disabled:!0,"aria-label":"Disabled vertical"})]})]}),parameters:{docs:{description:{story:'Set the orientation prop to "vertical" to create vertical sliders. The thumb will track vertical movement instead of horizontal movement.'}}}},x={render:()=>e.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:4,width:"100%",p:3},children:[e.jsx(r,{variant:"h6",children:"All Horizontal Slider Variants"}),e.jsxs(a,{children:[e.jsx(r,{variant:"body1",sx:{mb:2,fontWeight:"bold"},children:"Size: Medium"}),e.jsxs(n,{spacing:2,children:[e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Continuous - Enabled"}),e.jsx(t,{size:"medium",defaultValue:30})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Continuous - Disabled"}),e.jsx(t,{size:"medium",defaultValue:30,disabled:!0})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"With Marks - Enabled"}),e.jsx(t,{size:"medium",defaultValue:30,marks:!0,step:10})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"With Marks - Disabled"}),e.jsx(t,{size:"medium",defaultValue:30,marks:!0,step:10,disabled:!0})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Range - Enabled"}),e.jsx(t,{size:"medium",defaultValue:[20,40]})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Range - Disabled"}),e.jsx(t,{size:"medium",defaultValue:[20,40],disabled:!0})]})]})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body1",sx:{mb:2,fontWeight:"bold"},children:"Size: Small"}),e.jsxs(n,{spacing:2,children:[e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Continuous - Enabled"}),e.jsx(t,{size:"small",defaultValue:30})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Continuous - Disabled"}),e.jsx(t,{size:"small",defaultValue:30,disabled:!0})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"With Marks - Enabled"}),e.jsx(t,{size:"small",defaultValue:30,marks:!0,step:10})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"With Marks - Disabled"}),e.jsx(t,{size:"small",defaultValue:30,marks:!0,step:10,disabled:!0})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Range - Enabled"}),e.jsx(t,{size:"small",defaultValue:[20,40]})]}),e.jsxs(a,{sx:{width:300},children:[e.jsx(r,{variant:"caption",children:"Range - Disabled"}),e.jsx(t,{size:"small",defaultValue:[20,40],disabled:!0})]})]})]})]}),parameters:{docs:{description:{story:"Comprehensive view of all horizontal slider size and variant combinations with different states."}}}},b={render:()=>e.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:4,p:3},children:[e.jsx(r,{variant:"h6",children:"All Vertical Slider Variants"}),e.jsxs(a,{children:[e.jsx(r,{variant:"body1",sx:{mb:2,fontWeight:"bold"},children:"Size: Medium"}),e.jsxs(n,{direction:"row",spacing:3,sx:{height:300},children:[e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Continuous"}),e.jsx(t,{size:"medium",orientation:"vertical",defaultValue:30})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Continuous (Disabled)"}),e.jsx(t,{size:"medium",orientation:"vertical",defaultValue:30,disabled:!0})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"With Marks"}),e.jsx(t,{size:"medium",orientation:"vertical",defaultValue:30,marks:!0,step:10})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Marks (Disabled)"}),e.jsx(t,{size:"medium",orientation:"vertical",defaultValue:30,marks:!0,step:10,disabled:!0})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Range"}),e.jsx(t,{size:"medium",orientation:"vertical",defaultValue:[20,40]})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Range (Disabled)"}),e.jsx(t,{size:"medium",orientation:"vertical",defaultValue:[20,40],disabled:!0})]})]})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body1",sx:{mb:2,fontWeight:"bold"},children:"Size: Small"}),e.jsxs(n,{direction:"row",spacing:3,sx:{height:300},children:[e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Continuous"}),e.jsx(t,{size:"small",orientation:"vertical",defaultValue:30})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Continuous (Disabled)"}),e.jsx(t,{size:"small",orientation:"vertical",defaultValue:30,disabled:!0})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"With Marks"}),e.jsx(t,{size:"small",orientation:"vertical",defaultValue:30,marks:!0,step:10})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Marks (Disabled)"}),e.jsx(t,{size:"small",orientation:"vertical",defaultValue:30,marks:!0,step:10,disabled:!0})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Range"}),e.jsx(t,{size:"small",orientation:"vertical",defaultValue:[20,40]})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"caption",children:"Range (Disabled)"}),e.jsx(t,{size:"small",orientation:"vertical",defaultValue:[20,40],disabled:!0})]})]})]})]}),parameters:{docs:{description:{story:"Comprehensive view of all vertical slider size and variant combinations with different states."}}}},g={render:()=>{const[i,l]=w.useState(30),s=(j,o)=>{l(o)};return e.jsxs(a,{sx:{width:300},children:[e.jsxs(r,{variant:"body2",gutterBottom:!0,children:["Controlled Slider: ",i]}),e.jsx(t,{value:i,onChange:s,"aria-label":"Controlled"})]})},parameters:{docs:{description:{story:"Example of a controlled slider with React state."}}}},f={render:()=>e.jsxs(n,{spacing:3,sx:{width:300},children:[e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Value label auto (on hover)"}),e.jsx(t,{defaultValue:30,valueLabelDisplay:"auto"})]}),e.jsxs(a,{children:[e.jsx(r,{variant:"body2",gutterBottom:!0,children:"Value label always on"}),e.jsx(t,{defaultValue:50,valueLabelDisplay:"on"})]})]})},T={args:{size:"medium",color:"primary",orientation:"horizontal",defaultValue:30,disabled:!1,marks:!1,step:1,min:0,max:100,valueLabelDisplay:"off",track:"normal"},render:i=>e.jsx(a,{sx:{width:i.orientation==="vertical"?"auto":300,height:i.orientation==="vertical"?300:"auto"},children:e.jsx(t,{...i})}),parameters:{docs:{description:{story:"Interactive playground to experiment with all Slider props."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 30
  },
  render: args => <Box sx={{
    width: 300
  }}>
      <Slider {...args} />
    </Box>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300
  }}>
      <Typography variant="body2" gutterBottom>
        Continuous Slider
      </Typography>
      <Slider defaultValue={30} aria-label="Default" />
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'A continuous slider allows users to select a value along a subjective range.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Small
        </Typography>
        <Slider size="small" defaultValue={30} aria-label="Small" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Medium (default)
        </Typography>
        <Slider size="medium" defaultValue={50} aria-label="Medium" />
      </Box>
    </Stack>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300
  }}>
      <Typography variant="body2" gutterBottom>
        Discrete slider with marks
      </Typography>
      <Slider defaultValue={30} step={10} marks min={0} max={100} valueLabelDisplay="auto" aria-label="Discrete" />
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Discrete sliders can be adjusted to a specific value by referencing its value indicator.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const marks = [{
      value: 0,
      label: '0°C'
    }, {
      value: 20,
      label: '20°C'
    }, {
      value: 37,
      label: '37°C'
    }, {
      value: 100,
      label: '100°C'
    }];
    return <Box sx={{
      width: 300
    }}>
        <Typography variant="body2" gutterBottom>
          Custom marks
        </Typography>
        <Slider defaultValue={20} step={10} marks={marks} valueLabelDisplay="auto" aria-label="Custom marks" />
      </Box>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<number[]>([20, 40]);
    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };
    return <Box sx={{
      width: 300
    }}>
        <Typography variant="body2" gutterBottom>
          Range Slider
        </Typography>
        <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-label="Range" />
      </Box>;
  },
  parameters: {
    docs: {
      description: {
        story: 'The slider can be used to set the start and end of a range by supplying an array of values.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Enabled
        </Typography>
        <Slider defaultValue={30} />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Disabled
        </Typography>
        <Slider defaultValue={30} disabled />
      </Box>
    </Stack>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={3} sx={{
    height: 300
  }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Continuous
        </Typography>
        <Slider orientation="vertical" defaultValue={30} valueLabelDisplay="auto" aria-label="Vertical" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          With marks
        </Typography>
        <Slider orientation="vertical" defaultValue={30} marks step={10} valueLabelDisplay="auto" aria-label="Vertical with marks" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Range
        </Typography>
        <Slider orientation="vertical" defaultValue={[20, 40]} valueLabelDisplay="auto" aria-label="Vertical range" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Disabled
        </Typography>
        <Slider orientation="vertical" defaultValue={30} disabled aria-label="Disabled vertical" />
      </Box>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Set the orientation prop to "vertical" to create vertical sliders. The thumb will track vertical movement instead of horizontal movement.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
    p: 3
  }}>
      <Typography variant="h6">All Horizontal Slider Variants</Typography>

      {/* Medium Size */}
      <Box>
        <Typography variant="body1" sx={{
        mb: 2,
        fontWeight: 'bold'
      }}>
          Size: Medium
        </Typography>
        <Stack spacing={2}>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Continuous - Enabled</Typography>
            <Slider size="medium" defaultValue={30} />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Continuous - Disabled</Typography>
            <Slider size="medium" defaultValue={30} disabled />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">With Marks - Enabled</Typography>
            <Slider size="medium" defaultValue={30} marks step={10} />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">With Marks - Disabled</Typography>
            <Slider size="medium" defaultValue={30} marks step={10} disabled />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Range - Enabled</Typography>
            <Slider size="medium" defaultValue={[20, 40]} />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Range - Disabled</Typography>
            <Slider size="medium" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>

      {/* Small Size */}
      <Box>
        <Typography variant="body1" sx={{
        mb: 2,
        fontWeight: 'bold'
      }}>
          Size: Small
        </Typography>
        <Stack spacing={2}>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Continuous - Enabled</Typography>
            <Slider size="small" defaultValue={30} />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Continuous - Disabled</Typography>
            <Slider size="small" defaultValue={30} disabled />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">With Marks - Enabled</Typography>
            <Slider size="small" defaultValue={30} marks step={10} />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">With Marks - Disabled</Typography>
            <Slider size="small" defaultValue={30} marks step={10} disabled />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Range - Enabled</Typography>
            <Slider size="small" defaultValue={[20, 40]} />
          </Box>
          <Box sx={{
          width: 300
        }}>
            <Typography variant="caption">Range - Disabled</Typography>
            <Slider size="small" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive view of all horizontal slider size and variant combinations with different states.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    p: 3
  }}>
      <Typography variant="h6">All Vertical Slider Variants</Typography>

      {/* Medium Size */}
      <Box>
        <Typography variant="body1" sx={{
        mb: 2,
        fontWeight: 'bold'
      }}>
          Size: Medium
        </Typography>
        <Stack direction="row" spacing={3} sx={{
        height: 300
      }}>
          <Box>
            <Typography variant="caption">Continuous</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={30} />
          </Box>
          <Box>
            <Typography variant="caption">Continuous (Disabled)</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={30} disabled />
          </Box>
          <Box>
            <Typography variant="caption">With Marks</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={30} marks step={10} />
          </Box>
          <Box>
            <Typography variant="caption">Marks (Disabled)</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={30} marks step={10} disabled />
          </Box>
          <Box>
            <Typography variant="caption">Range</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={[20, 40]} />
          </Box>
          <Box>
            <Typography variant="caption">Range (Disabled)</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>

      {/* Small Size */}
      <Box>
        <Typography variant="body1" sx={{
        mb: 2,
        fontWeight: 'bold'
      }}>
          Size: Small
        </Typography>
        <Stack direction="row" spacing={3} sx={{
        height: 300
      }}>
          <Box>
            <Typography variant="caption">Continuous</Typography>
            <Slider size="small" orientation="vertical" defaultValue={30} />
          </Box>
          <Box>
            <Typography variant="caption">Continuous (Disabled)</Typography>
            <Slider size="small" orientation="vertical" defaultValue={30} disabled />
          </Box>
          <Box>
            <Typography variant="caption">With Marks</Typography>
            <Slider size="small" orientation="vertical" defaultValue={30} marks step={10} />
          </Box>
          <Box>
            <Typography variant="caption">Marks (Disabled)</Typography>
            <Slider size="small" orientation="vertical" defaultValue={30} marks step={10} disabled />
          </Box>
          <Box>
            <Typography variant="caption">Range</Typography>
            <Slider size="small" orientation="vertical" defaultValue={[20, 40]} />
          </Box>
          <Box>
            <Typography variant="caption">Range (Disabled)</Typography>
            <Slider size="small" orientation="vertical" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive view of all vertical slider size and variant combinations with different states.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<number>(30);
    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };
    return <Box sx={{
      width: 300
    }}>
        <Typography variant="body2" gutterBottom>
          Controlled Slider: {value}
        </Typography>
        <Slider value={value} onChange={handleChange} aria-label="Controlled" />
      </Box>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled slider with React state.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Value label auto (on hover)
        </Typography>
        <Slider defaultValue={30} valueLabelDisplay="auto" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Value label always on
        </Typography>
        <Slider defaultValue={50} valueLabelDisplay="on" />
      </Box>
    </Stack>
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'primary',
    orientation: 'horizontal',
    defaultValue: 30,
    disabled: false,
    marks: false,
    step: 1,
    min: 0,
    max: 100,
    valueLabelDisplay: 'off',
    track: 'normal'
  },
  render: args => <Box sx={{
    width: args.orientation === 'vertical' ? 'auto' : 300,
    height: args.orientation === 'vertical' ? 300 : 'auto'
  }}>
      <Slider {...args} />
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Slider props.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};const de=["Default","ContinuousSlider","Sizes","WithMarks","CustomMarks","RangeSlider","States","Vertical","AllHorizontalVariants","AllVerticalVariants","Controlled","WithValueLabel","Playground"];export{x as AllHorizontalVariants,b as AllVerticalVariants,u as ContinuousSlider,g as Controlled,p as CustomMarks,d as Default,T as Playground,h as RangeSlider,c as Sizes,y as States,v as Vertical,m as WithMarks,f as WithValueLabel,de as __namedExportsOrder,oe as default};
