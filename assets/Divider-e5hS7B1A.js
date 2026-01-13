import{R as l,j as o}from"./iframe-BX_m0INg.js";import{u as s}from"./useTheme-DkaT9Bto.js";import{D as d}from"./Divider-DzppxW1Z.js";const e=l.forwardRef(({orientation:i="horizontal",sx:t,...a},r)=>{const n=s();return o.jsx(d,{ref:r,orientation:i,...a,sx:{borderColor:n.palette.divider,...t}})});e.displayName="Divider";e.__docgenInfo={description:`Divider component

A thin line that groups content in lists and layouts.
Supports both horizontal and vertical orientations.

@param props - Divider component props
@returns Divider component`,methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Orientation of the divider
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},light:{required:!1,tsType:{name:"boolean"},description:`If true, the divider will have a lighter color
@default false`},variant:{required:!1,tsType:{name:"union",raw:"'fullWidth' | 'inset' | 'middle'",elements:[{name:"literal",value:"'fullWidth'"},{name:"literal",value:"'inset'"},{name:"literal",value:"'middle'"}]},description:`Variant of the divider
@default 'fullWidth'`},absolute:{required:!1,tsType:{name:"boolean"},description:`If true, the divider will be absolutely positioned
@default false`},flexItem:{required:!1,tsType:{name:"boolean"},description:`If true, a vertical divider will have the correct height when used in flex container
@default false`}},composes:["MuiDividerProps"]};export{e as D};
