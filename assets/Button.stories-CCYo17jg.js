import{B as u}from"./Button-Cu9UkBT5.js";import"./iframe-m0FcCUbT.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-helpers-CoFoCxtx.js";import"./useTheme--qrtAMJV.js";import"./Button-CJ6MgozL.js";import"./memoTheme-C11nCEJ1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bd5szlVj.js";import"./useForkRef-DeUHlcp-.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./CircularProgress-nywBWFjt.js";const D={title:"Atoms/Button",component:u,tags:["autodocs"],argTypes:{variant:{control:"select",options:["contained","outlined","text"],description:"The variant of the button"},color:{control:"select",options:["primary","secondary","error","warning","info","success"],description:"The color of the button"},size:{control:"select",options:["small","medium","large"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},fullWidth:{control:"boolean",description:"Whether the button takes full width"}}},r={args:{variant:"contained",color:"primary",children:"Primary Button"}},o={args:{variant:"contained",color:"secondary",children:"Secondary Button"}},e={args:{variant:"outlined",color:"primary",children:"Outlined Button"}},t={args:{variant:"text",color:"primary",children:"Text Button"}},n={args:{variant:"contained",color:"primary",size:"small",children:"Small Button"}},a={args:{variant:"contained",color:"primary",size:"medium",children:"Medium Button"}},s={args:{variant:"contained",color:"primary",size:"large",children:"Large Button"}},i={args:{variant:"contained",color:"primary",disabled:!0,children:"Disabled Button"}},c={args:{variant:"contained",color:"primary",fullWidth:!0,children:"Full Width Button"}},d={args:{variant:"contained",color:"error",children:"Error Button"}},p={args:{variant:"contained",color:"warning",children:"Warning Button"}},l={args:{variant:"contained",color:"info",children:"Info Button"}},m={args:{variant:"contained",color:"success",children:"Success Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button'
  }
}`,...r.parameters?.docs?.source},description:{story:"Primary contained button",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Secondary Button'
  }
}`,...o.parameters?.docs?.source},description:{story:"Secondary contained button",...o.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button'
  }
}`,...e.parameters?.docs?.source},description:{story:"Outlined button",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button'
  }
}`,...t.parameters?.docs?.source},description:{story:"Text button",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'small',
    children: 'Small Button'
  }
}`,...n.parameters?.docs?.source},description:{story:"Small button",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    children: 'Medium Button'
  }
}`,...a.parameters?.docs?.source},description:{story:"Medium button (default)",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'large',
    children: 'Large Button'
  }
}`,...s.parameters?.docs?.source},description:{story:"Large button",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...i.parameters?.docs?.source},description:{story:"Disabled button",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...c.parameters?.docs?.source},description:{story:"Full width button",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'error',
    children: 'Error Button'
  }
}`,...d.parameters?.docs?.source},description:{story:"Error button",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'warning',
    children: 'Warning Button'
  }
}`,...p.parameters?.docs?.source},description:{story:"Warning button",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'info',
    children: 'Info Button'
  }
}`,...l.parameters?.docs?.source},description:{story:"Info button",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'success',
    children: 'Success Button'
  }
}`,...m.parameters?.docs?.source},description:{story:"Success button",...m.parameters?.docs?.description}}};const F=["Primary","Secondary","Outlined","Text","Small","Medium","Large","Disabled","FullWidth","Error","Warning","Info","Success"];export{i as Disabled,d as Error,c as FullWidth,l as Info,s as Large,a as Medium,e as Outlined,r as Primary,o as Secondary,n as Small,m as Success,t as Text,p as Warning,F as __namedExportsOrder,D as default};
