import{R as u,j as d}from"./iframe-D1RbjC5Q.js";import{T as m}from"./TextField-W4TdLGOG.js";const n=u.forwardRef(({variant:t="outlined",color:a="primary",size:r="medium",fullWidth:l=!1,sx:i,...o},s)=>d.jsx(m,{ref:s,variant:t,color:a,size:r,fullWidth:l,sx:{"& .MuiInputBase-root":{fontFamily:e=>e.typography.fontFamily},"& .MuiInputLabel-root":{fontFamily:e=>e.typography.fontFamily,fontWeight:e=>e.typography.fontWeightRegular},"& .MuiFormHelperText-root":{fontFamily:e=>e.typography.fontFamily,fontSize:e=>e.typography.caption.fontSize},...t==="outlined"&&{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:e=>e.palette._components?.input?.outlined?.enabledBorder||e.palette.divider},"&:hover fieldset":{borderColor:e=>e.palette.text.primary},"&.Mui-focused fieldset":{borderWidth:2}}},...t==="filled"&&{"& .MuiFilledInput-root":{backgroundColor:e=>e.palette._components?.input?.filled?.enabledFill||"rgba(0, 0, 0, 0.06)","&:hover":{backgroundColor:e=>e.palette._components?.input?.filled?.enabledFill||"rgba(0, 0, 0, 0.09)"},"&.Mui-focused":{backgroundColor:e=>e.palette._components?.input?.filled?.enabledFill||"rgba(0, 0, 0, 0.06)"}}},...t==="standard"&&{"& .MuiInput-root":{"&:before":{borderBottomColor:e=>e.palette._components?.input?.standard?.enabledBorder||e.palette.divider},"&:hover:not(.Mui-disabled):before":{borderBottomColor:e=>e.palette.text.primary}}},...i},...o}));n.displayName="TextField";n.__docgenInfo={description:`TextField component

Text fields let users enter and edit text.
Supports multiple variants (outlined, filled, standard),
sizes (small, medium), and states (error, disabled, etc.).

@param props - TextField component props
@returns TextField component

@example
\`\`\`tsx
// Basic usage
<TextField label="Email" placeholder="Enter your email" />

// With helper text and error
<TextField
  label="Password"
  type="password"
  error
  helperText="Password is required"
/>

// Multiline
<TextField
  label="Description"
  multiline
  rows={4}
  placeholder="Enter description"
/>
\`\`\``,methods:[],displayName:"TextField",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`The color of the component
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:`The variant to use
@default 'outlined'`,defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the component
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:`If true, the input element is required
@default false`},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the component is disabled
@default false`},error:{required:!1,tsType:{name:"boolean"},description:`If true, the input will indicate an error
@default false`},autoFocus:{required:!1,tsType:{name:"boolean"},description:`If true, the input element will be focused during the first mount
@default false`},multiline:{required:!1,tsType:{name:"boolean"},description:`If true, a textarea element is rendered instead of an input
@default false`},rows:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Number of rows to display when multiline option is set to true"},maxRows:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum number of rows to display when multiline option is set to true"},minRows:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Minimum number of rows to display when multiline option is set to true"},fullWidth:{required:!1,tsType:{name:"boolean"},description:`If true, the input will take up the full width of its container
@default false`,defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"The label content"},placeholder:{required:!1,tsType:{name:"string"},description:"The short hint displayed in the input before the user enters a value"},helperText:{required:!1,tsType:{name:"string"},description:"The helper text content"},defaultValue:{required:!1,tsType:{name:"unknown"},description:"The default value. Use when the component is not controlled"},value:{required:!1,tsType:{name:"unknown"},description:"The value of the input element, required for a controlled component"},type:{required:!1,tsType:{name:"string"},description:`Type of the input element
@default 'text'`},name:{required:!1,tsType:{name:"string"},description:"Name attribute of the input element"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"event"}],return:{name:"void"}}},description:"Callback fired when the value is changed"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"event"}],return:{name:"void"}}},description:"Callback fired when the input is blurred"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"event"}],return:{name:"void"}}},description:"Callback fired when the input is focused"}},composes:["Omit"]};export{n as T};
