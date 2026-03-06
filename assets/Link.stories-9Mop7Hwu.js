import{j as r}from"./iframe-m0FcCUbT.js";import{L as e}from"./Link-BGFu_keg.js";import{T as f}from"./Typography-CkHBM8H0.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C11nCEJ1.js";import"./useTheme--qrtAMJV.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-BAhyjZNg.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";const A={title:"Atoms/Link",component:e,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","error","warning","info","success","inherit","textPrimary","textSecondary"],description:"The color of the link"},underline:{control:"select",options:["none","hover","always"],description:"Controls when the link should have an underline"},variant:{control:"select",options:["body1","body2","button","caption","h1","h2","h3","h4","h5","h6","inherit","overline","subtitle1","subtitle2"],description:"Applies the theme typography styles"}}},n={args:{href:"https://example.com",children:"Click here"}},i={args:{href:"https://example.com",color:"primary",children:"Primary Link"}},o={args:{href:"https://example.com",color:"secondary",children:"Secondary Link"}},t={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(e,{href:"#",underline:"none",children:"No underline"}),r.jsx(e,{href:"#",underline:"hover",children:"Underline on hover (default)"}),r.jsx(e,{href:"#",underline:"always",children:"Always underlined"})]})},a={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(e,{href:"#",color:"primary",children:"Primary"}),r.jsx(e,{href:"#",color:"secondary",children:"Secondary"}),r.jsx(e,{href:"#",color:"error",children:"Error"}),r.jsx(e,{href:"#",color:"warning",children:"Warning"}),r.jsx(e,{href:"#",color:"info",children:"Info"}),r.jsx(e,{href:"#",color:"success",children:"Success"}),r.jsx(e,{href:"#",color:"inherit",children:"Inherit"}),r.jsx(e,{href:"#",color:"textPrimary",children:"Text Primary"}),r.jsx(e,{href:"#",color:"textSecondary",children:"Text Secondary"})]})},s={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(e,{href:"#",variant:"h1",children:"Heading 1 Link"}),r.jsx(e,{href:"#",variant:"h2",children:"Heading 2 Link"}),r.jsx(e,{href:"#",variant:"h3",children:"Heading 3 Link"}),r.jsx(e,{href:"#",variant:"body1",children:"Body 1 Link (default)"}),r.jsx(e,{href:"#",variant:"body2",children:"Body 2 Link"}),r.jsx(e,{href:"#",variant:"caption",children:"Caption Link"}),r.jsx(e,{href:"#",variant:"button",children:"Button Link"})]})},c={args:{href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:"Open in new tab"}},l={render:()=>r.jsxs(f,{variant:"body1",children:["This is a paragraph with an"," ",r.jsx(e,{href:"#",color:"primary",children:"inline link"})," ","that inherits the text styling."]})},d={render:()=>r.jsx(e,{href:"#",onClick:L=>{L.preventDefault(),alert("Link clicked!")},children:"Click me (prevents default)"})},p={render:()=>r.jsx(e,{component:"button",disabled:!0,sx:{color:"text.disabled",cursor:"not-allowed",pointerEvents:"none"},children:"Disabled Link"})},h={render:()=>r.jsx(e,{component:"button",variant:"button",onClick:()=>alert("Button link clicked!"),sx:{border:"none",background:"none"},children:"Link as Button"})},m={render:()=>r.jsxs("nav",{style:{display:"flex",gap:"24px"},children:[r.jsx(e,{href:"#",underline:"hover",children:"Home"}),r.jsx(e,{href:"#",underline:"hover",children:"About"}),r.jsx(e,{href:"#",underline:"hover",children:"Services"}),r.jsx(e,{href:"#",underline:"hover",children:"Contact"})]})},u={render:()=>r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(e,{href:"#",color:"primary",children:"Documentation"})}),r.jsx("li",{children:r.jsx(e,{href:"#",color:"primary",children:"API Reference"})}),r.jsx("li",{children:r.jsx(e,{href:"#",color:"primary",children:"Examples"})}),r.jsx("li",{children:r.jsx(e,{href:"#",color:"primary",children:"GitHub Repository"})})]})},y={args:{variant:"overline"},render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[r.jsx(e,{href:"#",color:"inherit",underline:"hover",children:"Home"}),r.jsx("span",{children:"/"}),r.jsx(e,{href:"#",color:"inherit",underline:"hover",children:"Products"}),r.jsx("span",{children:"/"}),r.jsx(e,{href:"#",color:"inherit",underline:"hover",children:"Category"}),r.jsx("span",{children:"/"}),r.jsx(f,{variant:"body1",component:"span",children:"Current Page"})]})},x={render:()=>r.jsxs("footer",{style:{display:"flex",gap:"32px",padding:"24px",backgroundColor:"#f5f5f5"},children:[r.jsxs("div",{children:[r.jsx(f,{variant:"h6",gutterBottom:!0,children:"Company"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(e,{href:"#",color:"textPrimary",underline:"hover",children:"About Us"}),r.jsx(e,{href:"#",color:"textPrimary",underline:"hover",children:"Careers"}),r.jsx(e,{href:"#",color:"textPrimary",underline:"hover",children:"Press"})]})]}),r.jsxs("div",{children:[r.jsx(f,{variant:"h6",gutterBottom:!0,children:"Support"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(e,{href:"#",color:"textPrimary",underline:"hover",children:"Help Center"}),r.jsx(e,{href:"#",color:"textPrimary",underline:"hover",children:"Contact Us"}),r.jsx(e,{href:"#",color:"textPrimary",underline:"hover",children:"FAQ"})]})]})]})},k={render:()=>r.jsx(e,{href:"#",sx:{fontSize:"20px",fontWeight:600,textDecoration:"none",color:"primary.main","&:hover":{textDecoration:"underline",color:"primary.dark"}},children:"Custom Styled Link"})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'Click here'
  }
}`,...n.parameters?.docs?.source},description:{story:"Basic link",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    color: 'primary',
    children: 'Primary Link'
  }
}`,...i.parameters?.docs?.source},description:{story:"Link with primary color",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    color: 'secondary',
    children: 'Secondary Link'
  }
}`,...o.parameters?.docs?.source},description:{story:"Link with secondary color",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Underline variants",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"All colors",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Typography variants",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open in new tab'
  }
}`,...c.parameters?.docs?.source},description:{story:"External link (opens in new tab)",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Typography variant="body1">
      This is a paragraph with an{' '}
      <Link href="#" color="primary">
        inline link
      </Link>{' '}
      that inherits the text styling.
    </Typography>
}`,...l.parameters?.docs?.source},description:{story:"Link in text",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Link href="#" onClick={e => {
    e.preventDefault();
    alert('Link clicked!');
  }}>
      Click me (prevents default)
    </Link>
}`,...d.parameters?.docs?.source},description:{story:"Link with onClick handler",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Link component="button" disabled sx={{
    color: 'text.disabled',
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }}>
      Disabled Link
    </Link>
}`,...p.parameters?.docs?.source},description:{story:"Disabled appearance (using button element)",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Link component="button" variant="button" onClick={() => alert('Button link clicked!')} sx={{
    border: 'none',
    background: 'none'
  }}>
      Link as Button
    </Link>
}`,...h.parameters?.docs?.source},description:{story:"Link as button",...h.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Navigation links",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Links in a list",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Breadcrumb links",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Footer links",...x.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Custom styled link",...k.parameters?.docs?.description}}};const H=["Basic","Primary","Secondary","UnderlineVariants","AllColors","TypographyVariants","ExternalLink","InlineLink","WithOnClick","DisabledAppearance","AsButton","NavigationLinks","InList","Breadcrumbs","FooterLinks","CustomStyled"];export{a as AllColors,h as AsButton,n as Basic,y as Breadcrumbs,k as CustomStyled,p as DisabledAppearance,c as ExternalLink,x as FooterLinks,u as InList,l as InlineLink,m as NavigationLinks,i as Primary,o as Secondary,s as TypographyVariants,t as UnderlineVariants,d as WithOnClick,H as __namedExportsOrder,A as default};
