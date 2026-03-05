import{g as T,d as P,r as $,a as G,j as e,b as N,R as Q}from"./iframe-DQx8_g_V.js";import{g as J,b as K,c as X,a as Y,s as Z,m as ee}from"./memoTheme-DN4SvyIR.js";import{u as re}from"./useTheme-CwEaitdl.js";import{c as ne}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{T as ie}from"./Typography-COUO01Vf.js";import{i as F}from"./isFocusVisible-B8k4qzLc.js";import{T as D}from"./Typography-CZi8l96O.js";import"./preload-helper-PPVm8Dsz.js";function oe(n){return J("MuiLink",n)}const te=K("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),ae=({theme:n,ownerState:i})=>{const o=i.color,t=T(n,`palette.${o}.main`,!1)||T(n,`palette.${o}`,!1)||i.color,a=T(n,`palette.${o}.mainChannel`)||T(n,`palette.${o}Channel`);return"vars"in n&&a?`rgba(${a} / 0.4)`:P(t,.4)},M={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},se=n=>{const{classes:i,component:o,focusVisible:t,underline:a}=n,c={root:["root",`underline${N(a)}`,o==="button"&&"button",t&&"focusVisible"]};return Y(c,oe,i)},le=Z(ie,{name:"MuiLink",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:o}=n;return[i.root,i[`underline${N(o.underline)}`],o.component==="button"&&i.button]}})(ee(({theme:n})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:i,ownerState:o})=>i==="always"&&o.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(n.palette).filter(ne()).map(([i])=>({props:{underline:"always",color:i},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette[i].mainChannel} / 0.4)`:P(n.palette[i].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.primaryChannel} / 0.4)`:P(n.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":n.vars?`rgba(${n.vars.palette.text.secondaryChannel} / 0.4)`:P(n.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(n.vars||n).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${te.focusVisible}`]:{outline:"auto"}}}]}))),ce=$.forwardRef(function(i,o){const t=G({props:i,name:"MuiLink"}),a=re(),{className:c,color:s="primary",component:l="a",onBlur:R,onFocus:H,TypographyClasses:W,underline:E="always",variant:U="inherit",sx:A,...V}=t,[q,I]=$.useState(!1),O=d=>{F(d.target)||I(!1),R&&R(d)},_=d=>{F(d.target)&&I(!0),H&&H(d)},B={...t,color:s,component:l,focusVisible:q,underline:E,variant:U},z=se(B);return e.jsx(le,{color:s,className:X(z.root,c),classes:W,component:l,onBlur:O,onFocus:_,ref:o,ownerState:B,variant:U,...V,sx:[...M[s]===void 0?[{color:s}]:[],...Array.isArray(A)?A:[A]],style:{...V.style,...E==="always"&&s!=="inherit"&&!M[s]&&{"--Link-underlineColor":ae({theme:a,ownerState:B})}}})}),r=Q.forwardRef(({color:n="primary",underline:i="hover",variant:o="body1",children:t,sx:a,...c},s)=>e.jsx(ce,{ref:s,color:n,underline:i,variant:o,sx:{fontFamily:l=>l.typography.fontFamily,cursor:"pointer","&:focus-visible":{outline:l=>`2px solid ${l.palette.primary.main}`,outlineOffset:"2px",borderRadius:"2px"},...a},...c,children:t}));r.displayName="Link";r.__docgenInfo={description:`Link component - accessible hyperlink
Wraps MUI Link with design system theme integration

@example
\`\`\`tsx
<Link href="https://example.com">Click here</Link>
<Link href="/about" color="primary" underline="hover">About</Link>
\`\`\``,methods:[],displayName:"Link",props:{color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'error'
| 'warning'
| 'info'
| 'success'
| 'inherit'
| 'textPrimary'
| 'textSecondary'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'inherit'"},{name:"literal",value:"'textPrimary'"},{name:"literal",value:"'textSecondary'"}]},description:"The color of the link",defaultValue:{value:"'primary'",computed:!1}},underline:{required:!1,tsType:{name:"union",raw:"'none' | 'hover' | 'always'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"}]},description:"Controls when the link should have an underline",defaultValue:{value:"'hover'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'body1'
| 'body2'
| 'button'
| 'caption'
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'inherit'
| 'overline'
| 'subtitle1'
| 'subtitle2'`,elements:[{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'button'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'inherit'"},{name:"literal",value:"'overline'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"}]},description:"Applies the theme typography styles",defaultValue:{value:"'body1'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"The URL to link to"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the link"},target:{required:!1,tsType:{name:"string"},description:"The target attribute for the link"},rel:{required:!1,tsType:{name:"string"},description:"The rel attribute for the link"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback fired when the link is clicked"}},composes:["Omit"]};const ke={title:"Atoms/Link",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","error","warning","info","success","inherit","textPrimary","textSecondary"],description:"The color of the link"},underline:{control:"select",options:["none","hover","always"],description:"Controls when the link should have an underline"},variant:{control:"select",options:["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"],description:"Applies the theme typography styles"}}},p={args:{href:"https://example.com",children:"Click here"}},u={args:{href:"https://example.com",color:"primary",children:"Primary Link"}},h={args:{href:"https://example.com",color:"secondary",children:"Secondary Link"}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{href:"#",underline:"none",children:"No underline"}),e.jsx(r,{href:"#",underline:"hover",children:"Underline on hover (default)"}),e.jsx(r,{href:"#",underline:"always",children:"Always underlined"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{href:"#",color:"primary",children:"Primary"}),e.jsx(r,{href:"#",color:"secondary",children:"Secondary"}),e.jsx(r,{href:"#",color:"error",children:"Error"}),e.jsx(r,{href:"#",color:"warning",children:"Warning"}),e.jsx(r,{href:"#",color:"info",children:"Info"}),e.jsx(r,{href:"#",color:"success",children:"Success"}),e.jsx(r,{href:"#",color:"inherit",children:"Inherit"}),e.jsx(r,{href:"#",color:"textPrimary",children:"Text Primary"}),e.jsx(r,{href:"#",color:"textSecondary",children:"Text Secondary"})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{href:"#",variant:"h1",children:"Heading 1 Link"}),e.jsx(r,{href:"#",variant:"h2",children:"Heading 2 Link"}),e.jsx(r,{href:"#",variant:"h3",children:"Heading 3 Link"}),e.jsx(r,{href:"#",variant:"body1",children:"Body 1 Link (default)"}),e.jsx(r,{href:"#",variant:"body2",children:"Body 2 Link"}),e.jsx(r,{href:"#",variant:"caption",children:"Caption Link"}),e.jsx(r,{href:"#",variant:"button",children:"Button Link"})]})},x={args:{href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:"Open in new tab"}},k={render:()=>e.jsxs(D,{variant:"body1",children:["This is a paragraph with an"," ",e.jsx(r,{href:"#",color:"primary",children:"inline link"})," ","that inherits the text styling."]})},v={render:()=>e.jsx(r,{href:"#",onClick:n=>{n.preventDefault(),alert("Link clicked!")},children:"Click me (prevents default)"})},L={render:()=>e.jsx(r,{component:"button",disabled:!0,sx:{color:"text.disabled",cursor:"not-allowed",pointerEvents:"none"},children:"Disabled Link"})},g={render:()=>e.jsx(r,{component:"button",variant:"button",onClick:()=>alert("Button link clicked!"),sx:{border:"none",background:"none"},children:"Link as Button"})},b={render:()=>e.jsxs("nav",{style:{display:"flex",gap:"24px"},children:[e.jsx(r,{href:"#",underline:"hover",children:"Home"}),e.jsx(r,{href:"#",underline:"hover",children:"About"}),e.jsx(r,{href:"#",underline:"hover",children:"Services"}),e.jsx(r,{href:"#",underline:"hover",children:"Contact"})]})},j={render:()=>e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{href:"#",color:"primary",children:"Documentation"})}),e.jsx("li",{children:e.jsx(r,{href:"#",color:"primary",children:"API Reference"})}),e.jsx("li",{children:e.jsx(r,{href:"#",color:"primary",children:"Examples"})}),e.jsx("li",{children:e.jsx(r,{href:"#",color:"primary",children:"GitHub Repository"})})]})},C={args:{variant:"overline"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(r,{href:"#",color:"inherit",underline:"hover",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(r,{href:"#",color:"inherit",underline:"hover",children:"Products"}),e.jsx("span",{children:"/"}),e.jsx(r,{href:"#",color:"inherit",underline:"hover",children:"Category"}),e.jsx("span",{children:"/"}),e.jsx(D,{variant:"body1",component:"span",children:"Current Page"})]})},S={render:()=>e.jsxs("footer",{style:{display:"flex",gap:"32px",padding:"24px",backgroundColor:"#f5f5f5"},children:[e.jsxs("div",{children:[e.jsx(D,{variant:"h6",gutterBottom:!0,children:"Company"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{href:"#",color:"textPrimary",underline:"hover",children:"About Us"}),e.jsx(r,{href:"#",color:"textPrimary",underline:"hover",children:"Careers"}),e.jsx(r,{href:"#",color:"textPrimary",underline:"hover",children:"Press"})]})]}),e.jsxs("div",{children:[e.jsx(D,{variant:"h6",gutterBottom:!0,children:"Support"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{href:"#",color:"textPrimary",underline:"hover",children:"Help Center"}),e.jsx(r,{href:"#",color:"textPrimary",underline:"hover",children:"Contact Us"}),e.jsx(r,{href:"#",color:"textPrimary",underline:"hover",children:"FAQ"})]})]})]})},w={render:()=>e.jsx(r,{href:"#",sx:{fontSize:"20px",fontWeight:600,textDecoration:"none",color:"primary.main","&:hover":{textDecoration:"underline",color:"primary.dark"}},children:"Custom Styled Link"})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'Click here'
  }
}`,...p.parameters?.docs?.source},description:{story:"Basic link",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    color: 'primary',
    children: 'Primary Link'
  }
}`,...u.parameters?.docs?.source},description:{story:"Link with primary color",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    color: 'secondary',
    children: 'Secondary Link'
  }
}`,...h.parameters?.docs?.source},description:{story:"Link with secondary color",...h.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Link href="#" underline="none">
        No underline
      </Link>
      <Link href="#" underline="hover">
        Underline on hover (default)
      </Link>
      <Link href="#" underline="always">
        Always underlined
      </Link>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Underline variants",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Link href="#" color="primary">
        Primary
      </Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="error">
        Error
      </Link>
      <Link href="#" color="warning">
        Warning
      </Link>
      <Link href="#" color="info">
        Info
      </Link>
      <Link href="#" color="success">
        Success
      </Link>
      <Link href="#" color="inherit">
        Inherit
      </Link>
      <Link href="#" color="textPrimary">
        Text Primary
      </Link>
      <Link href="#" color="textSecondary">
        Text Secondary
      </Link>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"All colors",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Link href="#" variant="h1">
        Heading 1 Link
      </Link>
      <Link href="#" variant="h2">
        Heading 2 Link
      </Link>
      <Link href="#" variant="h3">
        Heading 3 Link
      </Link>
      <Link href="#" variant="body1">
        Body 1 Link (default)
      </Link>
      <Link href="#" variant="body2">
        Body 2 Link
      </Link>
      <Link href="#" variant="caption">
        Caption Link
      </Link>
      <Link href="#" variant="button">
        Button Link
      </Link>
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Typography variants",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open in new tab'
  }
}`,...x.parameters?.docs?.source},description:{story:"External link (opens in new tab)",...x.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Typography variant="body1">
      This is a paragraph with an{' '}
      <Link href="#" color="primary">
        inline link
      </Link>{' '}
      that inherits the text styling.
    </Typography>
}`,...k.parameters?.docs?.source},description:{story:"Link in text",...k.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Link href="#" onClick={e => {
    e.preventDefault();
    alert('Link clicked!');
  }}>
      Click me (prevents default)
    </Link>
}`,...v.parameters?.docs?.source},description:{story:"Link with onClick handler",...v.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Link component="button" disabled sx={{
    color: 'text.disabled',
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }}>
      Disabled Link
    </Link>
}`,...L.parameters?.docs?.source},description:{story:"Disabled appearance (using button element)",...L.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Link component="button" variant="button" onClick={() => alert('Button link clicked!')} sx={{
    border: 'none',
    background: 'none'
  }}>
      Link as Button
    </Link>
}`,...g.parameters?.docs?.source},description:{story:"Link as button",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <nav style={{
    display: 'flex',
    gap: '24px'
  }}>
      <Link href="#" underline="hover">
        Home
      </Link>
      <Link href="#" underline="hover">
        About
      </Link>
      <Link href="#" underline="hover">
        Services
      </Link>
      <Link href="#" underline="hover">
        Contact
      </Link>
    </nav>
}`,...b.parameters?.docs?.source},description:{story:"Navigation links",...b.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ul>
      <li>
        <Link href="#" color="primary">
          Documentation
        </Link>
      </li>
      <li>
        <Link href="#" color="primary">
          API Reference
        </Link>
      </li>
      <li>
        <Link href="#" color="primary">
          Examples
        </Link>
      </li>
      <li>
        <Link href="#" color="primary">
          GitHub Repository
        </Link>
      </li>
    </ul>
}`,...j.parameters?.docs?.source},description:{story:"Links in a list",...j.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'overline'
  },
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Link href="#" color="inherit" underline="hover">
        Home
      </Link>
      <span>/</span>
      <Link href="#" color="inherit" underline="hover">
        Products
      </Link>
      <span>/</span>
      <Link href="#" color="inherit" underline="hover">
        Category
      </Link>
      <span>/</span>
      <Typography variant="body1" component="span">
        Current Page
      </Typography>
    </div>
}`,...C.parameters?.docs?.source},description:{story:"Breadcrumb links",...C.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <footer style={{
    display: 'flex',
    gap: '32px',
    padding: '24px',
    backgroundColor: '#f5f5f5'
  }}>
      <div>
        <Typography variant="h6" gutterBottom>
          Company
        </Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Link href="#" color="textPrimary" underline="hover">
            About Us
          </Link>
          <Link href="#" color="textPrimary" underline="hover">
            Careers
          </Link>
          <Link href="#" color="textPrimary" underline="hover">
            Press
          </Link>
        </div>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          Support
        </Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Link href="#" color="textPrimary" underline="hover">
            Help Center
          </Link>
          <Link href="#" color="textPrimary" underline="hover">
            Contact Us
          </Link>
          <Link href="#" color="textPrimary" underline="hover">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
}`,...S.parameters?.docs?.source},description:{story:"Footer links",...S.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Link href="#" sx={{
    fontSize: '20px',
    fontWeight: 600,
    textDecoration: 'none',
    color: 'primary.main',
    '&:hover': {
      textDecoration: 'underline',
      color: 'primary.dark'
    }
  }}>
      Custom Styled Link
    </Link>
}`,...w.parameters?.docs?.source},description:{story:"Custom styled link",...w.parameters?.docs?.description}}};const ve=["Basic","Primary","Secondary","UnderlineVariants","AllColors","TypographyVariants","ExternalLink","InlineLink","WithOnClick","DisabledAppearance","AsButton","NavigationLinks","InList","Breadcrumbs","FooterLinks","CustomStyled"];export{y as AllColors,g as AsButton,p as Basic,C as Breadcrumbs,w as CustomStyled,L as DisabledAppearance,x as ExternalLink,S as FooterLinks,j as InList,k as InlineLink,b as NavigationLinks,u as Primary,h as Secondary,f as TypographyVariants,m as UnderlineVariants,v as WithOnClick,ve as __namedExportsOrder,ke as default};
