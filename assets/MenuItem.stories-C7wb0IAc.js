import{j as e}from"./iframe-DxesKUG5.js";import{M as r}from"./MenuItem-CUxKB583.js";import{M as c}from"./MaterialSymbol-CiCAuhWc.js";import{L as m}from"./ListItemIcon-D3-V_OBs.js";import{L as l}from"./ListItemText-uq5VtTZR.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-L-LRp4ED.js";import"./memoTheme-B6Th5GL5.js";import"./ListContext-C4VWsNph.js";import"./useForkRef-C5YMB9vu.js";import"./ButtonBase-Be8Rllp-.js";import"./useEventCallback-Ctd8iJzz.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-BFANnX7P.js";import"./listItemTextClasses-B7xxSf7B.js";import"./dividerClasses-DBa9hxSO.js";import"./Box-DSvwcJiO.js";import"./useSlot-BNQ-RlnO.js";import"./resolveComponentProps-k1KtcFgI.js";import"./Typography-UCSWEJhs.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const E={title:"Atoms/MenuItem",component:r,tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"If true, the menu item will be disabled"},selected:{control:"boolean",description:"If true, the menu item will be selected"},divider:{control:"boolean",description:"If true, the menu item will be a divider"},dense:{control:"boolean",description:"If true, compact vertical padding"}}},t={args:{children:"Menu Item"}},s={args:{children:"Disabled Item",disabled:!0}},i={args:{children:"Selected Item",selected:!0}},n={args:{children:"Dense Item",dense:!0}},o={args:{children:"Item with Divider",divider:!0}},d={render:()=>e.jsxs(r,{children:[e.jsx(m,{children:e.jsx(c,{icon:"check",size:"small"})}),e.jsx(l,{children:"Item with Icon"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"200px"},children:[e.jsx(r,{children:"Default"}),e.jsx(r,{selected:!0,children:"Selected"}),e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{dense:!0,children:"Dense"}),e.jsx(r,{divider:!0,children:"With Divider"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Menu Item'
  }
}`,...t.parameters?.docs?.source},description:{story:"Default menu item",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Item',
    disabled: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Disabled menu item",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Selected Item',
    selected: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Selected menu item",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Dense Item',
    dense: true
  }
}`,...n.parameters?.docs?.source},description:{story:"Dense menu item",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Item with Divider',
    divider: true
  }
}`,...o.parameters?.docs?.source},description:{story:"With divider",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <MenuItem>
      <ListItemIcon>
        <MaterialSymbol icon="check" size="small" />
      </ListItemIcon>
      <ListItemText>Item with Icon</ListItemText>
    </MenuItem>
}`,...d.parameters?.docs?.source},description:{story:"With icon",...d.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    width: '200px'
  }}>
      <MenuItem>Default</MenuItem>
      <MenuItem selected>Selected</MenuItem>
      <MenuItem disabled>Disabled</MenuItem>
      <MenuItem dense>Dense</MenuItem>
      <MenuItem divider>With Divider</MenuItem>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"All states comparison",...a.parameters?.docs?.description}}};const _=["Default","Disabled","Selected","Dense","WithDivider","WithIcon","AllStates"];export{a as AllStates,t as Default,n as Dense,s as Disabled,i as Selected,o as WithDivider,d as WithIcon,_ as __namedExportsOrder,E as default};
