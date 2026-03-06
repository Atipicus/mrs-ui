import{R as u,j as e}from"./iframe-m0FcCUbT.js";import{B as b}from"./Box-Bzd77gh_.js";import{S as T}from"./Stack-3koFKRvk.js";import{A as w}from"./Avatar-DAVvT0Sr.js";import{B as A}from"./Badge-DrckUnNO.js";import{T as f}from"./Typography-CkHBM8H0.js";import{u as R}from"./useTheme--qrtAMJV.js";import{A as q,T as k}from"./Toolbar-CNPlvgZ_.js";const m=u.forwardRef(({user:t=!0,userAccountInfo:r=!0,notifications:a=!0,userName:o="John Doe",userEmail:n="john.doe@example.com",avatarSrc:i,avatarAlt:s="User avatar",notificationCount:l,avatarPosition:p="left",sx:g,...y},x)=>{const d=t&&e.jsx(A,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:a&&!l?"dot":"standard",invisible:!a,color:"error",badgeContent:l,children:e.jsx(w,{src:i,alt:s,sx:{width:40,height:40}})}),c=r&&e.jsxs(T,{direction:"column",spacing:0,sx:{alignItems:"flex-start"},children:[e.jsx(f,{variant:"subtitle2",sx:{lineHeight:1.2,fontWeight:600},children:o}),e.jsx(f,{variant:"subtitle2",sx:{lineHeight:1.2,fontWeight:400,color:"text.secondary",fontSize:"0.75rem"},children:n})]});return e.jsx(b,{ref:x,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",height:40,gap:2,...g},...y,children:p==="left"?e.jsxs(e.Fragment,{children:[d,c]}):e.jsxs(e.Fragment,{children:[c,d]})})});m.displayName="AccountStack";m.__docgenInfo={description:"",methods:[],displayName:"AccountStack",props:{user:{required:!1,tsType:{name:"boolean"},description:`Show/hide avatar with badge
@default true`,defaultValue:{value:"true",computed:!1}},userAccountInfo:{required:!1,tsType:{name:"boolean"},description:`Show/hide user account information text
@default true`,defaultValue:{value:"true",computed:!1}},notifications:{required:!1,tsType:{name:"boolean"},description:`Show/hide notification badge on avatar
@default true`,defaultValue:{value:"true",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:`User's name to display
@default 'John Doe'`,defaultValue:{value:"'John Doe'",computed:!1}},userEmail:{required:!1,tsType:{name:"string"},description:`User's email or secondary info to display
@default 'john.doe@example.com'`,defaultValue:{value:"'john.doe@example.com'",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image source URL"},avatarAlt:{required:!1,tsType:{name:"string"},description:`Avatar alt text for accessibility
@default 'User avatar'`,defaultValue:{value:"'User avatar'",computed:!1}},notificationCount:{required:!1,tsType:{name:"number"},description:"Number of notifications (optional, for future badge content)"},avatarPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Position of the avatar relative to user info
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},sx:{required:!1,tsType:{name:"BoxProps['sx']",raw:"BoxProps['sx']"},description:"Custom sx styles"}},composes:["Omit"]};const h=u.forwardRef(({children:t,color:r="default",position:a="fixed",elevation:o=4,enableColorOnDark:n=!1,sx:i,...s},l)=>{const p=R();return e.jsx(q,{ref:l,color:r,position:a,elevation:o,enableColorOnDark:n,sx:{fontFamily:p.typography.fontFamily,...i},...s,children:t})});h.displayName="AppBar";h.__docgenInfo={description:`AppBar component

Primary navigation component that appears at the top of the application.
Supports multiple colors from the MRS palette, positioning options, and elevation levels.

Features:
- MRS design tokens (Nunito font, MRS color palette)
- Multiple positioning options (fixed, static, sticky, absolute, relative)
- Elevation control (shadow depth 0-24)
- Light and dark mode support
- Responsive design ready

@param props - AppBar component props
@returns AppBar component`,methods:[],displayName:"AppBar",props:{color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'transparent' | 'inherit'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'inherit'"}]},description:`Color of the component (Figma variants)
- 'default': White background (palette/_components/appBar/defaultFill)
- 'primary': Uses MRS primary color (#00686f in light, #009999 in dark)
- 'secondary': Uses MRS secondary color (#99cc00 in light, #b3d633 in dark)
- 'transparent': Transparent background
- 'inherit': Inherits color from parent
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'",elements:[{name:"literal",value:"'fixed'"},{name:"literal",value:"'absolute'"},{name:"literal",value:"'sticky'"},{name:"literal",value:"'static'"},{name:"literal",value:"'relative'"}]},description:`Positioning type
- 'fixed': Fixed to top of viewport (default)
- 'absolute': Absolute positioning
- 'sticky': Sticky positioning
- 'static': Normal document flow
- 'relative': Relative positioning
@default 'fixed'`,defaultValue:{value:"'fixed'",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:`Shadow depth (elevation) from 0 to 24
Figma default: 4
@default 4`,defaultValue:{value:"4",computed:!1}},enableColorOnDark:{required:!1,tsType:{name:"boolean"},description:`Enable color on dark mode
If true, applies the color in dark mode
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the AppBar (typically Toolbar with children)"},sx:{required:!1,tsType:{name:"MuiAppBarProps['sx']",raw:"MuiAppBarProps['sx']"},description:"Custom styles using MUI sx prop"}},composes:["Omit"]};const v=u.forwardRef(({children:t,variant:r="regular",disableGutters:a=!1,sx:o,...n},i)=>e.jsx(k,{ref:i,variant:r,disableGutters:a,sx:o,...n,children:t}));v.displayName="Toolbar";v.__docgenInfo={description:`Toolbar component

Container for AppBar content with flex layout and vertical centering.
Provides regular (56px) and dense (48px) height variants.

@param props - Toolbar component props
@returns Toolbar component`,methods:[],displayName:"Toolbar",props:{variant:{required:!1,tsType:{name:"union",raw:"'regular' | 'dense'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'dense'"}]},description:`Toolbar variant
- 'regular': Default height (56px)
- 'dense': Compact height (48px)
@default 'regular'`,defaultValue:{value:"'regular'",computed:!1}},disableGutters:{required:!1,tsType:{name:"boolean"},description:`If true, disables gutter padding
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the toolbar"},sx:{required:!1,tsType:{name:"MuiToolbarProps['sx']",raw:"MuiToolbarProps['sx']"},description:"Custom styles using MUI sx prop"}},composes:["MuiToolbarProps"]};export{m as A,v as T,h as a};
