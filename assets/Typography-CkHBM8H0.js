import{R as i,j as s}from"./iframe-m0FcCUbT.js";import{u as m}from"./useTheme--qrtAMJV.js";import{T as u}from"./Typography-BAhyjZNg.js";const e=i.forwardRef(({children:a,variant:t="body1",gutterBottom:n=!1,sx:l,...o},r)=>{const p=m();return s.jsx(u,{ref:r,variant:t,gutterBottom:n,...o,sx:{fontFamily:p.typography.fontFamily,...l},children:a})});e.displayName="Typography";e.__docgenInfo={description:`Typography component

Displays text content with predefined typography styles from the theme.
Supports all standard MUI typography variants (h1-h6, body1-body2, subtitle1-subtitle2, caption, overline).

@param props - Typography component props
@returns Typography component`,methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'subtitle1'
| 'subtitle2'
| 'body1'
| 'body2'
| 'caption'
| 'overline'
| 'inherit'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"},{name:"literal",value:"'inherit'"}]},description:`Typography variant
@default 'body1'`,defaultValue:{value:"'body1'",computed:!1}},gutterBottom:{required:!1,tsType:{name:"boolean"},description:`If true, adds margin bottom to the component
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{e as T};
