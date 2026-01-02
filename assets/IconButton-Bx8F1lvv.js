import{R as i,j as u}from"./iframe-kf3iXV71.js";import{u as m}from"./useTheme-CFqsrFsw.js";import{I as d}from"./IconButton-DvZv5XsK.js";const e=i.forwardRef(({children:a,color:n="default",size:t="medium",sx:l,...o},r)=>{const s=m();return u.jsx(d,{ref:r,color:n,size:t,...o,sx:{fontFamily:s.typography.fontFamily,...l},children:a})});e.displayName="IconButton";e.__docgenInfo={description:`IconButton component

Icon buttons are commonly found in app bars and toolbars.
Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected.

@param props - IconButton component props
@returns IconButton component`,methods:[],displayName:"IconButton",props:{color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'default'
| 'primary'
| 'secondary'
| 'error'
| 'info'
| 'success'
| 'warning'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:`The color of the component
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the button
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the button will be disabled
@default false`},edge:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | false",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"false"}]},description:`If given, uses a negative margin to counteract the padding on one side
@default false`},disableRipple:{required:!1,tsType:{name:"boolean"},description:`If true, the ripple effect is disabled
@default false`},disableFocusRipple:{required:!1,tsType:{name:"boolean"},description:`If true, the focus ripple is disabled
@default false`}},composes:["MuiIconButtonProps"]};export{e as I};
