import{j as e}from"./iframe-Ll-6DOMq.js";import{M as r}from"./MenuItem-BoqZJc42.js";import{c as a}from"./createSvgIcon-B--y33RA.js";import{L as m}from"./ListItemIcon-BbAeOygn.js";import{L as l}from"./ListItemText-Ckv0OS8_.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-B0yw00RV.js";import"./createSimplePaletteValueFilter-Cr3O56rL.js";import"./ListContext-Dyk9lgPk.js";import"./useForkRef-CyvFleoK.js";import"./ButtonBase-Dmk_TwK3.js";import"./useEventCallback-CNwJKNkp.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-BThAd0_I.js";import"./listItemTextClasses-sqITzjah.js";import"./dividerClasses-D66snz_T.js";import"./useSlot-CKkKY_MB.js";import"./resolveComponentProps--b04hUqz.js";import"./Typography-BDVHBFsV.js";const p=a(e.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),z={title:"Atoms/MenuItem",component:r,tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"If true, the menu item will be disabled"},selected:{control:"boolean",description:"If true, the menu item will be selected"},divider:{control:"boolean",description:"If true, the menu item will be a divider"},dense:{control:"boolean",description:"If true, compact vertical padding"}}},t={args:{children:"Menu Item"}},s={args:{children:"Disabled Item",disabled:!0}},i={args:{children:"Selected Item",selected:!0}},n={args:{children:"Dense Item",dense:!0}},o={args:{children:"Item with Divider",divider:!0}},d={render:()=>e.jsxs(r,{children:[e.jsx(m,{children:e.jsx(p,{fontSize:"small"})}),e.jsx(l,{children:"Item with Icon"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"200px"},children:[e.jsx(r,{children:"Default"}),e.jsx(r,{selected:!0,children:"Selected"}),e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{dense:!0,children:"Dense"}),e.jsx(r,{divider:!0,children:"With Divider"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        <CheckIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Item with Icon</ListItemText>
    </MenuItem>
}`,...d.parameters?.docs?.source},description:{story:"With icon",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"All states comparison",...c.parameters?.docs?.description}}};const C=["Default","Disabled","Selected","Dense","WithDivider","WithIcon","AllStates"];export{c as AllStates,t as Default,n as Dense,s as Disabled,i as Selected,o as WithDivider,d as WithIcon,C as __namedExportsOrder,z as default};
