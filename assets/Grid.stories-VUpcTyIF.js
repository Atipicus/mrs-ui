import{b as ae,r as N,e as te,j as e,a as oe,u as me,R as de}from"./iframe-CaJfxxeA.js";import{u as le}from"./useTheme-BY3Nwc-v.js";import{c as ce,a as ue,g as pe,s as xe}from"./createSimplePaletteValueFilter-B7jR09Rm.js";import{s as ge,u as he}from"./useThemeProps-DtNhxYaA.js";import{i as ye}from"./isMuiElement-1rWydckO.js";import{P as g}from"./Paper-B2zxsB3m.js";import{T as d}from"./Typography-D7jCPIvG.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-CI5osXNJ.js";import"./Typography-DVqwCqe_.js";const fe=(r,i)=>r.filter(s=>i.includes(s)),b=(r,i,s)=>{const m=r.keys[0];Array.isArray(i)?i.forEach((o,t)=>{s((h,f)=>{t<=r.keys.length-1&&(t===0?Object.assign(h,f):h[r.up(r.keys[t])]=f)},o)}):i&&typeof i=="object"?(Object.keys(i).length>r.keys.length?r.keys:fe(r.keys,Object.keys(i))).forEach(t=>{if(r.keys.includes(t)){const h=i[t];h!==void 0&&s((f,I)=>{m===t?Object.assign(f,I):f[r.up(t)]=I},h)}}):(typeof i=="number"||typeof i=="string")&&s((o,t)=>{Object.assign(o,t)},i)};function D(r){return`--Grid-${r}Spacing`}function B(r){return`--Grid-parent-${r}Spacing`}const _="--Grid-columns",v="--Grid-parent-columns",Ge=({theme:r,ownerState:i})=>{const s={};return b(r.breakpoints,i.size,(m,o)=>{let t={};o==="grow"&&(t={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(t={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(t={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / var(${v}) - (var(${v}) - ${o}) * (var(${B("column")}) / var(${v})))`}),m(s,t)}),s},je=({theme:r,ownerState:i})=>{const s={};return b(r.breakpoints,i.offset,(m,o)=>{let t={};o==="auto"&&(t={marginLeft:"auto"}),typeof o=="number"&&(t={marginLeft:o===0?"0px":`calc(100% * ${o} / var(${v}) + var(${B("column")}) * ${o} / var(${v}))`}),m(s,t)}),s},ve=({theme:r,ownerState:i})=>{if(!i.container)return{};const s={[_]:12};return b(r.breakpoints,i.columns,(m,o)=>{const t=o??12;m(s,{[_]:t,"> *":{[v]:t}})}),s},be=({theme:r,ownerState:i})=>{if(!i.container)return{};const s={};return b(r.breakpoints,i.rowSpacing,(m,o)=>{const t=typeof o=="string"?o:r.spacing?.(o);m(s,{[D("row")]:t,"> *":{[B("row")]:t}})}),s},Ie=({theme:r,ownerState:i})=>{if(!i.container)return{};const s={};return b(r.breakpoints,i.columnSpacing,(m,o)=>{const t=typeof o=="string"?o:r.spacing?.(o);m(s,{[D("column")]:t,"> *":{[B("column")]:t}})}),s},we=({theme:r,ownerState:i})=>{if(!i.container)return{};const s={};return b(r.breakpoints,i.direction,(m,o)=>{m(s,{flexDirection:o})}),s},Se=({ownerState:r})=>({minWidth:0,boxSizing:"border-box",...r.container&&{display:"flex",flexWrap:"wrap",...r.wrap&&r.wrap!=="wrap"&&{flexWrap:r.wrap},gap:`var(${D("row")}) var(${D("column")})`}}),Te=r=>{const i=[];return Object.entries(r).forEach(([s,m])=>{m!==!1&&m!==void 0&&i.push(`grid-${s}-${String(m)}`)}),i},ke=(r,i="xs")=>{function s(m){return m===void 0?!1:typeof m=="string"&&!Number.isNaN(Number(m))||typeof m=="number"&&m>0}if(s(r))return[`spacing-${i}-${String(r)}`];if(typeof r=="object"&&!Array.isArray(r)){const m=[];return Object.entries(r).forEach(([o,t])=>{s(t)&&m.push(`spacing-${o}-${String(t)}`)}),m}return[]},Ce=r=>r===void 0?[]:typeof r=="object"?Object.entries(r).map(([i,s])=>`direction-${i}-${s}`):[`direction-xs-${String(r)}`];function Re(r,i){r.item!==void 0&&delete r.item,r.zeroMinWidth!==void 0&&delete r.zeroMinWidth,i.keys.forEach(s=>{r[s]!==void 0&&delete r[s]})}const Pe=oe(),$e=ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(r,i)=>i.root});function qe(r){return he({props:r,name:"MuiGrid",defaultTheme:Pe})}function Me(r={}){const{createStyledComponent:i=$e,useThemeProps:s=qe,useTheme:m=ae,componentName:o="MuiGrid"}=r,t=(p,c)=>{const{container:G,direction:u,spacing:x,wrap:l,size:A}=p,E={root:["root",G&&"container",l!=="wrap"&&`wrap-xs-${String(l)}`,...Ce(u),...Te(A),...G?ke(x,c.breakpoints.keys[0]):[]]};return ue(E,z=>pe(o,z),{})};function h(p,c,G=()=>!0){const u={};return p===null||(Array.isArray(p)?p.forEach((x,l)=>{x!==null&&G(x)&&c.keys[l]&&(u[c.keys[l]]=x)}):typeof p=="object"?Object.keys(p).forEach(x=>{const l=p[x];l!=null&&G(l)&&(u[x]=l)}):u[c.keys[0]]=p),u}const f=i(ve,Ie,be,Ge,we,Se,je),I=N.forwardRef(function(c,G){const u=m(),x=s(c),l=te(x);Re(l,u.breakpoints);const{className:A,children:E,columns:z=12,container:W=!1,component:U="div",direction:F="row",wrap:H="wrap",size:K={},offset:J={},spacing:O=0,rowSpacing:Q=O,columnSpacing:V=O,unstable_level:j=0,...X}=l,Y=h(K,u.breakpoints,y=>y!==!1),Z=h(J,u.breakpoints),ee=c.columns??(j?void 0:z),re=c.spacing??(j?void 0:O),ne=c.rowSpacing??c.spacing??(j?void 0:Q),ie=c.columnSpacing??c.spacing??(j?void 0:V),L={...l,level:j,columns:ee,container:W,direction:F,wrap:H,spacing:re,rowSpacing:ne,columnSpacing:ie,size:Y,offset:Z},se=t(L,u);return e.jsx(f,{ref:G,as:U,ownerState:L,className:ce(se.root,A),...X,children:N.Children.map(E,y=>N.isValidElement(y)&&ye(y,["Grid"])&&W&&y.props.container?N.cloneElement(y,{unstable_level:y.props?.unstable_level??j+1}):y)})});return I.muiName="Grid",I}const Ne=Me({createStyledComponent:xe("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(r,i)=>{const{ownerState:s}=r;return[i.root,s.container&&i.container]}}),componentName:"MuiGrid2",useThemeProps:r=>me({props:r,name:"MuiGrid2"}),useTheme:le}),n=de.forwardRef(({children:r,...i},s)=>e.jsx(Ne,{ref:s,...i,children:r}));n.displayName="Grid";n.__docgenInfo={description:`Grid component - responsive grid layout using CSS Grid
Uses the new Grid2 component from MUI for improved performance and flexibility

@example
\`\`\`tsx
<Grid container spacing={2}>
  <Grid xs={12} md={6}>
    <Item>1</Item>
  </Grid>
  <Grid xs={12} md={6}>
    <Item>2</Item>
  </Grid>
</Grid>
\`\`\``,methods:[],displayName:"Grid",props:{container:{required:!1,tsType:{name:"boolean"},description:"If true, the component will have the flex container behavior"},xs:{required:!1,tsType:{name:"union",raw:"boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"boolean"},{name:"literal",value:"'auto'"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Defines the number of grids the component is going to use"},sm:{required:!1,tsType:{name:"union",raw:"boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"boolean"},{name:"literal",value:"'auto'"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Defines the number of grids for sm breakpoint"},md:{required:!1,tsType:{name:"union",raw:"boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"boolean"},{name:"literal",value:"'auto'"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Defines the number of grids for md breakpoint"},lg:{required:!1,tsType:{name:"union",raw:"boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"boolean"},{name:"literal",value:"'auto'"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Defines the number of grids for lg breakpoint"},xl:{required:!1,tsType:{name:"union",raw:"boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"boolean"},{name:"literal",value:"'auto'"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Defines the number of grids for xl breakpoint"},spacing:{required:!1,tsType:{name:"union",raw:"number | string | { xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string }",elements:[{name:"number"},{name:"string"},{name:"signature",type:"object",raw:"{ xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string }",signature:{properties:[{key:"xs",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:"Defines the space between the type item components"},columnSpacing:{required:!1,tsType:{name:"union",raw:"number | string | { xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string }",elements:[{name:"number"},{name:"string"},{name:"signature",type:"object",raw:"{ xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string }",signature:{properties:[{key:"xs",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:"Defines the column-gap"},rowSpacing:{required:!1,tsType:{name:"union",raw:"number | string | { xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string }",elements:[{name:"number"},{name:"string"},{name:"signature",type:"object",raw:"{ xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string }",signature:{properties:[{key:"xs",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"sm",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"md",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"lg",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}},{key:"xl",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1}}]}}]},description:"Defines the row-gap"},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node"},sx:{required:!1,tsType:{name:"MuiGridProps['sx']",raw:"MuiGridProps['sx']"},description:"The system prop that allows defining system overrides as well as additional CSS styles"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"}},composes:["MuiGridProps"]};const Fe={title:"Atoms/Grid",component:n,tags:["autodocs"],argTypes:{container:{control:"boolean",description:"If true, the component will have the flex container behavior"},spacing:{control:"number",description:"Defines the space between the type item components"}}},a=({children:r})=>e.jsx(g,{sx:{padding:2,textAlign:"center",height:"100%"},children:r}),w={render:()=>e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{xs:12,children:e.jsx(a,{children:"xs=12"})}),e.jsx(n,{xs:6,children:e.jsx(a,{children:"xs=6"})}),e.jsx(n,{xs:6,children:e.jsx(a,{children:"xs=6"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"xs=4"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"xs=4"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"xs=4"})})]})},S={render:()=>e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{xs:12,sm:6,md:4,lg:3,children:e.jsx(a,{children:"Responsive"})}),e.jsx(n,{xs:12,sm:6,md:4,lg:3,children:e.jsx(a,{children:"Grid"})}),e.jsx(n,{xs:12,sm:6,md:4,lg:3,children:e.jsx(a,{children:"Items"})}),e.jsx(n,{xs:12,sm:6,md:4,lg:3,children:e.jsx(a,{children:"Resize"})})]})},T={render:()=>e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{xs:"auto",children:e.jsx(a,{children:"Auto"})}),e.jsx(n,{xs:6,children:e.jsx(a,{children:"xs=6"})}),e.jsx(n,{xs:"auto",children:e.jsx(a,{children:"Auto"})})]})},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(d,{variant:"h6",gutterBottom:!0,children:"Spacing: 1"}),e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 1"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 2"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 3"})})]})]}),e.jsxs("div",{children:[e.jsx(d,{variant:"h6",gutterBottom:!0,children:"Spacing: 2"}),e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 1"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 2"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 3"})})]})]}),e.jsxs("div",{children:[e.jsx(d,{variant:"h6",gutterBottom:!0,children:"Spacing: 4"}),e.jsxs(n,{container:!0,spacing:4,children:[e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 1"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 2"})}),e.jsx(n,{xs:4,children:e.jsx(a,{children:"Item 3"})})]})]})]})},C={render:()=>e.jsxs(n,{container:!0,rowSpacing:1,columnSpacing:2,children:[e.jsx(n,{xs:6,children:e.jsx(a,{children:"Row spacing: 1"})}),e.jsx(n,{xs:6,children:e.jsx(a,{children:"Column spacing: 2"})}),e.jsx(n,{xs:6,children:e.jsx(a,{children:"Item 3"})}),e.jsx(n,{xs:6,children:e.jsx(a,{children:"Item 4"})})]})},R={render:()=>e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{xs:12,md:6,children:e.jsx(a,{children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{xs:6,children:e.jsx(g,{sx:{padding:1,backgroundColor:"primary.light"},children:"Nested 1"})}),e.jsx(n,{xs:6,children:e.jsx(g,{sx:{padding:1,backgroundColor:"primary.light"},children:"Nested 2"})})]})})}),e.jsx(n,{xs:12,md:6,children:e.jsx(a,{children:"Regular Grid Item"})})]})},P={render:()=>e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{xs:12,children:e.jsx(a,{children:"Header (xs=12)"})}),e.jsx(n,{xs:12,md:3,children:e.jsx(a,{children:"Sidebar (xs=12, md=3)"})}),e.jsx(n,{xs:12,md:6,children:e.jsx(a,{children:"Main Content (xs=12, md=6)"})}),e.jsx(n,{xs:12,md:3,children:e.jsx(a,{children:"Right Sidebar (xs=12, md=3)"})}),e.jsx(n,{xs:12,children:e.jsx(a,{children:"Footer (xs=12)"})})]})},$={render:()=>e.jsx(n,{container:!0,spacing:3,children:[1,2,3,4,5,6].map(r=>e.jsx(n,{xs:12,sm:6,md:4,children:e.jsxs(g,{sx:{padding:3},children:[e.jsxs(d,{variant:"h5",gutterBottom:!0,children:["Card ",r]}),e.jsx(d,{variant:"body2",color:"text.secondary",children:"This is a card in a responsive grid layout."})]})},r))})},q={render:()=>e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{xs:12,md:8,children:e.jsx(g,{sx:{padding:2,height:200},children:e.jsx(d,{variant:"h6",children:"Main Chart"})})}),e.jsx(n,{xs:12,md:4,children:e.jsx(g,{sx:{padding:2,height:200},children:e.jsx(d,{variant:"h6",children:"Stats"})})}),e.jsx(n,{xs:12,sm:6,md:3,children:e.jsxs(g,{sx:{padding:2},children:[e.jsx(d,{variant:"h6",children:"Metric 1"}),e.jsx(d,{variant:"h4",children:"1,234"})]})}),e.jsx(n,{xs:12,sm:6,md:3,children:e.jsxs(g,{sx:{padding:2},children:[e.jsx(d,{variant:"h6",children:"Metric 2"}),e.jsx(d,{variant:"h4",children:"5,678"})]})}),e.jsx(n,{xs:12,sm:6,md:3,children:e.jsxs(g,{sx:{padding:2},children:[e.jsx(d,{variant:"h6",children:"Metric 3"}),e.jsx(d,{variant:"h4",children:"9,012"})]})}),e.jsx(n,{xs:12,sm:6,md:3,children:e.jsxs(g,{sx:{padding:2},children:[e.jsx(d,{variant:"h6",children:"Metric 4"}),e.jsx(d,{variant:"h4",children:"3,456"})]})})]})},M={render:()=>e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{xs:12,children:e.jsx(d,{variant:"h6",gutterBottom:!0,children:"1 column on mobile, 2 on tablet, 4 on desktop"})}),[1,2,3,4,5,6,7,8].map(r=>e.jsx(n,{xs:12,sm:6,lg:3,children:e.jsxs(a,{children:["Item ",r]})},r))]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      <Grid xs={12}>
        <Item>xs=12</Item>
      </Grid>
      <Grid xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
    </Grid>
}`,...w.parameters?.docs?.source},description:{story:"Basic grid",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Responsive</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Grid</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Items</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Resize</Item>
      </Grid>
    </Grid>
}`,...S.parameters?.docs?.source},description:{story:"Responsive grid",...S.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={3}>
      <Grid xs="auto">
        <Item>Auto</Item>
      </Grid>
      <Grid xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid xs="auto">
        <Item>Auto</Item>
      </Grid>
    </Grid>
}`,...T.parameters?.docs?.source},description:{story:"Auto width",...T.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="h6" gutterBottom>
          Spacing: 1
        </Typography>
        <Grid container spacing={1}>
          <Grid xs={4}>
            <Item>Item 1</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 2</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 3</Item>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          Spacing: 2
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Item>Item 1</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 2</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 3</Item>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          Spacing: 4
        </Typography>
        <Grid container spacing={4}>
          <Grid xs={4}>
            <Item>Item 1</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 2</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 3</Item>
          </Grid>
        </Grid>
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:"Different spacing",...k.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container rowSpacing={1} columnSpacing={2}>
      <Grid xs={6}>
        <Item>Row spacing: 1</Item>
      </Grid>
      <Grid xs={6}>
        <Item>Column spacing: 2</Item>
      </Grid>
      <Grid xs={6}>
        <Item>Item 3</Item>
      </Grid>
      <Grid xs={6}>
        <Item>Item 4</Item>
      </Grid>
    </Grid>
}`,...C.parameters?.docs?.source},description:{story:"Row and column spacing",...C.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Item>
          <Grid container spacing={1}>
            <Grid xs={6}>
              <Paper sx={{
              padding: 1,
              backgroundColor: 'primary.light'
            }}>Nested 1</Paper>
            </Grid>
            <Grid xs={6}>
              <Paper sx={{
              padding: 1,
              backgroundColor: 'primary.light'
            }}>Nested 2</Paper>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid xs={12} md={6}>
        <Item>Regular Grid Item</Item>
      </Grid>
    </Grid>
}`,...R.parameters?.docs?.source},description:{story:"Nested grid",...R.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      <Grid xs={12}>
        <Item>Header (xs=12)</Item>
      </Grid>
      <Grid xs={12} md={3}>
        <Item>Sidebar (xs=12, md=3)</Item>
      </Grid>
      <Grid xs={12} md={6}>
        <Item>Main Content (xs=12, md=6)</Item>
      </Grid>
      <Grid xs={12} md={3}>
        <Item>Right Sidebar (xs=12, md=3)</Item>
      </Grid>
      <Grid xs={12}>
        <Item>Footer (xs=12)</Item>
      </Grid>
    </Grid>
}`,...P.parameters?.docs?.source},description:{story:"Complex layout",...P.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map(item => <Grid key={item} xs={12} sm={6} md={4}>
          <Paper sx={{
        padding: 3
      }}>
            <Typography variant="h5" gutterBottom>
              Card {item}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a card in a responsive grid layout.
            </Typography>
          </Paper>
        </Grid>)}
    </Grid>
}`,...$.parameters?.docs?.source},description:{story:"Card grid",...$.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      <Grid xs={12} md={8}>
        <Paper sx={{
        padding: 2,
        height: 200
      }}>
          <Typography variant="h6">Main Chart</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} md={4}>
        <Paper sx={{
        padding: 2,
        height: 200
      }}>
          <Typography variant="h6">Stats</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{
        padding: 2
      }}>
          <Typography variant="h6">Metric 1</Typography>
          <Typography variant="h4">1,234</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{
        padding: 2
      }}>
          <Typography variant="h6">Metric 2</Typography>
          <Typography variant="h4">5,678</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{
        padding: 2
      }}>
          <Typography variant="h6">Metric 3</Typography>
          <Typography variant="h4">9,012</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{
        padding: 2
      }}>
          <Typography variant="h6">Metric 4</Typography>
          <Typography variant="h4">3,456</Typography>
        </Paper>
      </Grid>
    </Grid>
}`,...q.parameters?.docs?.source},description:{story:"Dashboard layout",...q.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography variant="h6" gutterBottom>
          1 column on mobile, 2 on tablet, 4 on desktop
        </Typography>
      </Grid>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => <Grid key={item} xs={12} sm={6} lg={3}>
          <Item>Item {item}</Item>
        </Grid>)}
    </Grid>
}`,...M.parameters?.docs?.source},description:{story:"Responsive columns",...M.parameters?.docs?.description}}};const He=["Basic","Responsive","AutoWidth","DifferentSpacing","RowColumnSpacing","NestedGrid","ComplexLayout","CardGrid","DashboardLayout","ResponsiveColumns"];export{T as AutoWidth,w as Basic,$ as CardGrid,P as ComplexLayout,q as DashboardLayout,k as DifferentSpacing,R as NestedGrid,S as Responsive,M as ResponsiveColumns,C as RowColumnSpacing,He as __namedExportsOrder,Fe as default};
