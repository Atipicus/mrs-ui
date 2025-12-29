import{R as s,j as d}from"./iframe-Bf0p-10g.js";import{u}from"./useTheme-BbnQPM-2.js";import{B as m}from"./Badge-DiMkQaOX.js";const a=s.forwardRef(({children:t,color:r="default",variant:n="standard",sx:l,...o},i)=>{const e=u();return d.jsx(m,{ref:i,color:r,variant:n,...o,sx:{"& .MuiBadge-badge":{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium},...l},children:t})});a.displayName="Badge";a.__docgenInfo={description:`Badge component

Generates a small badge to the top-right of its child(ren).
Typically used to display notification counts or status indicators.

@param props - Badge component props
@returns Badge component`,methods:[],displayName:"Badge",props:{badgeContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content rendered within the badge"},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:`The color of the component
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'dot'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'dot'"}]},description:`The variant to use
@default 'standard'`,defaultValue:{value:"'standard'",computed:!1}},invisible:{required:!1,tsType:{name:"boolean"},description:`If true, the badge is invisible
@default false`},max:{required:!1,tsType:{name:"number"},description:`Max count to show
@default 99`},showZero:{required:!1,tsType:{name:"boolean"},description:`Controls whether the badge is hidden when badgeContent is zero
@default false`},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
}`,signature:{properties:[{key:"vertical",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!0}},{key:"horizontal",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}}]}},description:`The anchor of the badge
@default { vertical: 'top', horizontal: 'right' }`},overlap:{required:!1,tsType:{name:"union",raw:"'rectangular' | 'circular'",elements:[{name:"literal",value:"'rectangular'"},{name:"literal",value:"'circular'"}]},description:`Wrapped shape the badge should overlap
@default 'rectangular'`}},composes:["MuiBadgeProps"]};export{a as B};
