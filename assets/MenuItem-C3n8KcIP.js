import{R as l,j as s}from"./iframe-DWofrwYQ.js";import{M as r}from"./MenuItem-BNRNF9lE.js";const t=l.forwardRef(({children:n,sx:o,...a},i)=>s.jsx(r,{ref:i,sx:{fontFamily:e=>e.typography.fontFamily,fontSize:e=>e.typography.body1.fontSize,fontWeight:e=>e.typography.fontWeightRegular,lineHeight:e=>e.typography.body1.lineHeight,"&:hover":{backgroundColor:e=>e.palette.action.hover},"&.Mui-selected":{backgroundColor:e=>e.palette.action.selected,"&:hover":{backgroundColor:e=>e.palette.action.selected}},"&.Mui-focusVisible":{backgroundColor:e=>e.palette.action.hover},...o},...a,children:n}));t.displayName="MenuItem";t.__docgenInfo={description:`MenuItem component

Menu items are used in menus, selects, and other components
to display selectable options.

@param props - MenuItem component props
@returns MenuItem component

@example
\`\`\`tsx
// In a Select
<Select>
  <MenuItem value="option1">Option 1</MenuItem>
  <MenuItem value="option2">Option 2</MenuItem>
</Select>

// Disabled
<MenuItem value="disabled" disabled>
  Disabled Option
</MenuItem>

// Selected
<MenuItem value="selected" selected>
  Selected Option
</MenuItem>
\`\`\``,methods:[],displayName:"MenuItem",props:{value:{required:!1,tsType:{name:"any"},description:"The value of the menu item"},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the menu item will be disabled
@default false`},selected:{required:!1,tsType:{name:"boolean"},description:`If true, the menu item will be selected
@default false`},divider:{required:!1,tsType:{name:"boolean"},description:`If true, the menu item will be a divider
@default false`},dense:{required:!1,tsType:{name:"boolean"},description:`If true, compact vertical padding designed for keyboard and mouse input
@default false`},disableGutters:{required:!1,tsType:{name:"boolean"},description:`If true, the left and right padding is removed
@default false`}},composes:["MuiMenuItemProps"]};export{t as M};
