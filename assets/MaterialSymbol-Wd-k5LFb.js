import{R as b,j as x}from"./iframe-Dl9r9HZP.js";import{B as M}from"./Box-BkVDr85C.js";const s=b.forwardRef(({icon:m,size:e="medium",fill:u=0,weight:c=300,grade:d=100,color:p,className:f="",sx:g,ariaLabel:l,ariaHidden:i=!1,onClick:t,...h},y)=>{let n,a;if(e==="inherit")n="inherit",a=24;else if(typeof e=="number")n=e,a=e;else{const r={small:{fontSize:20,opsz:20},medium:{fontSize:24,opsz:24},large:{fontSize:36,opsz:40}};n=r[e].fontSize,a=r[e].opsz}const v=`'FILL' ${u}, 'wght' ${c}, 'GRAD' ${d}, 'opsz' ${a}`,S=["material-symbols-rounded",f].filter(Boolean).join(" "),o=!!t;return x.jsx(M,{ref:y,component:"span",className:S,"aria-label":l,"aria-hidden":i,role:l&&!i?"img":void 0,onClick:t,style:{fontVariationSettings:v},sx:{fontSize:typeof n=="number"?`${n}px`:n,color:p||"inherit",userSelect:"none",cursor:o?"pointer":"inherit",...o&&{transition:"opacity 0.2s ease-in-out","&:hover":{opacity:.7},"&:active":{opacity:.5}},...g},...h,children:m})});s.displayName="MaterialSymbol";s.__docgenInfo={description:`MaterialSymbol Component

Renders icons from Google's Material Symbols library using variable font technology.
Provides customizable weight, fill, grade, and size properties.

**MRS Design System Defaults:**
- Variant: Rounded
- Weight: 300 (Light)
- Fill: 0 (Outlined)
- Grade: 100 (Lighter visual weight)

@example
Basic usage
\`\`\`tsx
<MaterialSymbol icon="home" />
\`\`\`

@example
With size and fill
\`\`\`tsx
<MaterialSymbol icon="favorite" size="large" fill={1} />
\`\`\`

@example
With custom color and weight
\`\`\`tsx
<MaterialSymbol
  icon="settings"
  color="primary.main"
  weight={500}
/>
\`\`\`

@example
Clickable icon
\`\`\`tsx
<MaterialSymbol
  icon="close"
  onClick={() => console.log('clicked')}
  ariaLabel="Close"
/>
\`\`\``,methods:[],displayName:"MaterialSymbol",props:{icon:{required:!0,tsType:{name:"string"},description:`Icon name from Material Symbols library
Use snake_case format (e.g., "home", "check_circle", "arrow_forward")
Browse icons: https://fonts.google.com/icons

@example "close"
@example "check"
@example "settings"
@example "account_circle"`},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'inherit' | number",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'inherit'"},{name:"number"}]},description:`Icon size
- 'small': 20px
- 'medium': 24px (default)
- 'large': 36px
- number: Custom size in pixels

@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},fill:{required:!1,tsType:{name:"union",raw:"0 | 1",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"}]},description:`Fill style - controls whether icon is outlined or filled
- 0: Outlined (default)
- 1: Filled

@default 0`,defaultValue:{value:"0",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"100 | 200 | 300 | 400 | 500 | 600 | 700",elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"}]},description:`Weight - thickness of icon strokes
- 100: Thin
- 200: Extra Light
- 300: Light (MRS default)
- 400: Regular
- 500: Medium
- 600: Semi Bold
- 700: Bold

@default 300`,defaultValue:{value:"300",computed:!1}},grade:{required:!1,tsType:{name:"number"},description:`Grade - visual weight adjustment without changing physical size
Range: -50 to 200
- Negative values: Lighter appearance
- Positive values: Heavier appearance

@default 100`,defaultValue:{value:"100",computed:!1}},color:{required:!1,tsType:{name:"string"},description:`Color - can be any valid CSS color or MUI theme path

@example "red"
@example "#00686f"
@example "primary.main"`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"MUI sx prop for custom styling"},ariaLabel:{required:!1,tsType:{name:"string"},description:`ARIA label for accessibility
Recommended for icon-only buttons or when icon conveys meaning`},ariaHidden:{required:!1,tsType:{name:"boolean"},description:`ARIA hidden - hides icon from screen readers
Use when icon is purely decorative

@default false`,defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler - makes icon clickable"}}};export{s as M};
