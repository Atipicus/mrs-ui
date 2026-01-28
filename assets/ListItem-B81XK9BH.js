import{R as g,j as d,d as u}from"./iframe-ksEUl1J1.js";import{L as k}from"./List-By5TW1qu.js";import{g as C}from"./theme-helpers-CoFoCxtx.js";import{u as V}from"./useTheme-BZCX2e7m.js";import{L as T}from"./ListItem-BnJStzTG.js";import{L as M}from"./ListItemButton-DF2zBliW.js";const L=g.forwardRef(({children:t,dense:p=!1,disablePadding:a=!1,subheader:s,component:o="ul",sx:i,...n},r)=>d.jsx(k,{ref:r,dense:p,disablePadding:a,subheader:s,component:o,sx:i,...n,children:t}));L.displayName="List";L.__docgenInfo={description:`List component

Lists are continuous, vertical indexes of text or images.
They are composed of items containing primary and supplemental actions.

@param props - List component props
@returns List component`,methods:[],displayName:"List",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},dense:{required:!1,tsType:{name:"boolean"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used.\nThe prop defaults to the value inherited from the parent List component.\n@default false",defaultValue:{value:"false",computed:!1}},disablePadding:{required:!1,tsType:{name:"boolean"},description:"If `true`, vertical padding is removed from the list.\n@default false",defaultValue:{value:"false",computed:!1}},subheader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the subheader, normally `ListSubheader`."},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`The component used for the root node.
Either a string to use a HTML element or a component.
@default 'ul'`,defaultValue:{value:"'ul'",computed:!1}},sx:{required:!1,tsType:{name:"MuiListProps['sx']",raw:"MuiListProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles."}},composes:["MuiListProps"]};const b=g.forwardRef(({children:t,button:p=!0,dense:a=!1,disableGutters:s=!1,divider:o=!1,disablePadding:i=!1,secondaryAction:n,alignItems:r="center",selected:c=!1,disabled:I=!1,autoFocus:R=!1,onClick:x,component:l,sx:m,...f},y)=>{const e=V(),w=C(e),h=e.palette.primary._states?.hover??u(e.palette.primary.main,.08),q=e.palette.primary._states?.focus??u(e.palette.primary.main,.12),v=e.palette.primary._states?.selected??u(e.palette.primary.main,.12);return p?d.jsx(T,{ref:y,dense:a,disableGutters:s,divider:o,disablePadding:i,secondaryAction:n,...l&&{component:l},sx:m,...f,children:d.jsx(M,{selected:c,disabled:I,autoFocus:R,onClick:x,alignItems:r,sx:{"&:hover":{backgroundColor:h},"&:active":{backgroundColor:v},"&.Mui-focusVisible":{outline:`3px solid ${q}`,outlineOffset:0,borderRadius:w.sm},"&.Mui-selected":{backgroundColor:v,"&:hover":{backgroundColor:h}},...c&&{"& .MuiListItemText-primary":{fontFamily:e.typography.subtitle1.fontFamily,fontWeight:e.typography.subtitle1.fontWeight,color:e.palette.primary.dark}}},children:t})}):d.jsx(T,{ref:y,dense:a,disableGutters:s,divider:o,disablePadding:i,secondaryAction:n,alignItems:r,...l&&{component:l},sx:m,...f,children:t})});b.displayName="ListItem";b.__docgenInfo={description:`ListItem component

ListItem is an interactive list item component by default.
When button prop is true (default), it wraps children with ListItemButton for interactivity.

Key features:
- Interactive by default with hover, focus, and selected states
- Selected state uses SemiBold font and primary.dark color
- Dense mode for compact layouts
- Support for icons, secondary text, and actions

@param props - ListItem component props
@returns ListItem component`,methods:[],displayName:"ListItem",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},button:{required:!1,tsType:{name:"boolean"},description:"If `true`, the list item is interactive (clickable).\nBy default, ListItem is always interactive unless explicitly disabled.\n@default true",defaultValue:{value:"true",computed:!1}},dense:{required:!1,tsType:{name:"boolean"},description:`If \`true\`, compact vertical padding designed for keyboard and mouse input is used.
- Regular: 8px vertical padding
- Dense: 4px vertical padding
@default false`,defaultValue:{value:"false",computed:!1}},disableGutters:{required:!1,tsType:{name:"boolean"},description:`If \`true\`, the left and right padding is removed.
- Regular: 16px horizontal padding
- Disabled: 0px horizontal padding
@default false`,defaultValue:{value:"false",computed:!1}},divider:{required:!1,tsType:{name:"boolean"},description:"If `true`, a 1px light border is added to the bottom of the list item.\n@default false",defaultValue:{value:"false",computed:!1}},disablePadding:{required:!1,tsType:{name:"boolean"},description:"If `true`, all padding is removed.\n@default false",defaultValue:{value:"false",computed:!1}},secondaryAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`The element to display at the end of ListItem.
Typically used for IconButton or other actions.`},alignItems:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"}]},description:"Defines the `align-items` style property.\n@default 'center'",defaultValue:{value:"'center'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:`If \`true\`, the list item is in selected state.
Selected state applies special styling:
- Background: primary._states.focus
- Text: SemiBold weight and primary.dark color
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the list item is disabled and non-interactive.\n@default false",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"If `true`, the element will receive focus automatically.\n@default false",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"MuiListItemButtonProps['onClick']",raw:"MuiListItemButtonProps['onClick']"},description:`Callback fired when the component is clicked.
Uses ListItemButton signature (div) for interactive mode while staying compatible with LI root.`},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`The component used for the root node.
Either a string to use a HTML element or a component.`},sx:{required:!1,tsType:{name:"MuiListItemProps['sx']",raw:"MuiListItemProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles."}},composes:["Omit","Pick"]};export{L,b as a};
