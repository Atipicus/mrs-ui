import{u as ce,P as e,r as B,e as de,j as r,g as pe,c as me,a as le,R as xe}from"./iframe-m0FcCUbT.js";import{u as he}from"./useTheme--qrtAMJV.js";import{c as ge,a as ue,s as ye}from"./memoTheme-C11nCEJ1.js";import{i as fe}from"./isMuiElement-CG90bCKT.js";import{s as Ge,u as je}from"./useThemeProps-OFH6wkZ1.js";import{r as Ie}from"./requirePropFactory-COLy0eTH.js";import{P as u}from"./Paper-q77F6CKF.js";import{T as p}from"./Typography-CkHBM8H0.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BQ8rpTFt.js";import"./chainPropTypes-CPkqCYVL.js";import"./integerPropType-DVPNO1YA.js";import"./Typography-BAhyjZNg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const be=(n,i)=>n.filter(t=>i.includes(t)),v=(n,i,t)=>{const o=n.keys[0];Array.isArray(i)?i.forEach((d,c)=>{t((y,G)=>{c<=n.keys.length-1&&(c===0?Object.assign(y,G):y[n.up(n.keys[c])]=G)},d)}):i&&typeof i=="object"?(Object.keys(i).length>n.keys.length?n.keys:be(n.keys,Object.keys(i))).forEach(c=>{if(n.keys.includes(c)){const y=i[c];y!==void 0&&t((G,I)=>{o===c?Object.assign(G,I):G[n.up(c)]=I},y)}}):(typeof i=="number"||typeof i=="string")&&t((d,c)=>{Object.assign(d,c)},i)};function z(n){return`--Grid-${n}Spacing`}function A(n){return`--Grid-parent-${n}Spacing`}const q="--Grid-columns",T="--Grid-parent-columns",Te=({theme:n,ownerState:i})=>{const t={};return v(n.breakpoints,i.size,(o,d)=>{let c={};d==="grow"&&(c={flexBasis:0,flexGrow:1,maxWidth:"100%"}),d==="auto"&&(c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof d=="number"&&(c={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${d} / var(${T}) - (var(${T}) - ${d}) * (var(${A("column")}) / var(${T})))`}),o(t,c)}),t},ve=({theme:n,ownerState:i})=>{const t={};return v(n.breakpoints,i.offset,(o,d)=>{let c={};d==="auto"&&(c={marginLeft:"auto"}),typeof d=="number"&&(c={marginLeft:d===0?"0px":`calc(100% * ${d} / var(${T}) + var(${A("column")}) * ${d} / var(${T}))`}),o(t,c)}),t},Se=({theme:n,ownerState:i})=>{if(!i.container)return{};const t={[q]:12};return v(n.breakpoints,i.columns,(o,d)=>{const c=d??12;o(t,{[q]:c,"> *":{[T]:c}})}),t},Oe=({theme:n,ownerState:i})=>{if(!i.container)return{};const t={};return v(n.breakpoints,i.rowSpacing,(o,d)=>{const c=typeof d=="string"?d:n.spacing?.(d);o(t,{[z("row")]:c,"> *":{[A("row")]:c}})}),t},we=({theme:n,ownerState:i})=>{if(!i.container)return{};const t={};return v(n.breakpoints,i.columnSpacing,(o,d)=>{const c=typeof d=="string"?d:n.spacing?.(d);o(t,{[z("column")]:c,"> *":{[A("column")]:c}})}),t},Ce=({theme:n,ownerState:i})=>{if(!i.container)return{};const t={};return v(n.breakpoints,i.direction,(o,d)=>{o(t,{flexDirection:d})}),t},Pe=({ownerState:n})=>({minWidth:0,boxSizing:"border-box",...n.container&&{display:"flex",flexWrap:"wrap",...n.wrap&&n.wrap!=="wrap"&&{flexWrap:n.wrap},gap:`var(${z("row")}) var(${z("column")})`}}),Re=n=>{const i=[];return Object.entries(n).forEach(([t,o])=>{o!==!1&&o!==void 0&&i.push(`grid-${t}-${String(o)}`)}),i},$e=(n,i="xs")=>{function t(o){return o===void 0?!1:typeof o=="string"&&!Number.isNaN(Number(o))||typeof o=="number"&&o>0}if(t(n))return[`spacing-${i}-${String(n)}`];if(typeof n=="object"&&!Array.isArray(n)){const o=[];return Object.entries(n).forEach(([d,c])=>{t(c)&&o.push(`spacing-${d}-${String(c)}`)}),o}return[]},Me=n=>n===void 0?[]:typeof n=="object"?Object.entries(n).map(([i,t])=>`direction-${i}-${t}`):[`direction-xs-${String(n)}`],ke=n=>["item","zeroMinWidth"].includes(n)?`The \`${n}\` prop has been removed and is no longer necessary. You can safely remove it.`:`The \`${n}\` prop has been removed. See https://v6.mui.com/material-ui/migration/upgrade-to-grid-v2/ for migration instructions.`,H=[];function Ne(n,i){const t=[];n.item!==void 0&&(delete n.item,t.push("item")),n.zeroMinWidth!==void 0&&(delete n.zeroMinWidth,t.push("zeroMinWidth")),i.keys.forEach(o=>{n[o]!==void 0&&(t.push(o),delete n[o])}),t.forEach(o=>{H.includes(o)||(H.push(o),console.warn(`MUI Grid2: ${ke(o)}
`))})}const Be=me(),ze=Ge("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,i)=>i.root});function Ae(n){return je({props:n,name:"MuiGrid",defaultTheme:Be})}function De(n={}){const{createStyledComponent:i=ze,useThemeProps:t=Ae,useTheme:o=ce,componentName:d="MuiGrid"}=n,c=(h,l)=>{const{container:j,direction:x,spacing:g,wrap:m,size:D}=h,E={root:["root",j&&"container",m!=="wrap"&&`wrap-xs-${String(m)}`,...Me(x),...Re(D),...j?$e(g,l.breakpoints.keys[0]):[]]};return ue(E,W=>pe(d,W),{})};function y(h,l,j=()=>!0){const x={};return h===null||(Array.isArray(h)?h.forEach((g,m)=>{g!==null&&j(g)&&l.keys[m]&&(x[l.keys[m]]=g)}):typeof h=="object"?Object.keys(h).forEach(g=>{const m=h[g];m!=null&&j(m)&&(x[g]=m)}):x[l.keys[0]]=h),x}const G=i(Se,we,Oe,Te,Ce,Pe,ve),I=B.forwardRef(function(l,j){const x=o(),g=t(l),m=de(g);Ne(m,x.breakpoints);const{className:D,children:E,columns:W=12,container:U=!1,component:K="div",direction:Y="row",wrap:J="wrap",size:Q={},offset:V={},spacing:L=0,rowSpacing:X=L,columnSpacing:Z=L,unstable_level:b=0,...ee}=m,re=y(Q,x.breakpoints,f=>f!==!1),ne=y(V,x.breakpoints),se=l.columns??(b?void 0:W),ie=l.spacing??(b?void 0:L),te=l.rowSpacing??l.spacing??(b?void 0:X),oe=l.columnSpacing??l.spacing??(b?void 0:Z),F={...m,level:b,columns:se,container:U,direction:Y,wrap:J,spacing:ie,rowSpacing:te,columnSpacing:oe,size:re,offset:ne},ae=c(F,x);return r.jsx(G,{ref:j,as:K,ownerState:F,className:ge(ae.root,D),...ee,children:B.Children.map(E,f=>B.isValidElement(f)&&fe(f,["Grid"])&&U&&f.props.container?B.cloneElement(f,{unstable_level:f.props?.unstable_level??b+1}):f)})});return I.propTypes={children:e.node,className:e.string,columns:e.oneOfType([e.arrayOf(e.number),e.number,e.object]),columnSpacing:e.oneOfType([e.arrayOf(e.oneOfType([e.number,e.string])),e.number,e.object,e.string]),component:e.elementType,container:e.bool,direction:e.oneOfType([e.oneOf(["column-reverse","column","row-reverse","row"]),e.arrayOf(e.oneOf(["column-reverse","column","row-reverse","row"])),e.object]),offset:e.oneOfType([e.string,e.number,e.arrayOf(e.oneOfType([e.string,e.number])),e.object]),rowSpacing:e.oneOfType([e.arrayOf(e.oneOfType([e.number,e.string])),e.number,e.object,e.string]),size:e.oneOfType([e.string,e.bool,e.number,e.arrayOf(e.oneOfType([e.string,e.bool,e.number])),e.object]),spacing:e.oneOfType([e.arrayOf(e.oneOfType([e.number,e.string])),e.number,e.object,e.string]),sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),wrap:e.oneOf(["nowrap","wrap-reverse","wrap"])},I.muiName="Grid",I}const _=De({createStyledComponent:ye("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:t}=n;return[i.root,t.container&&i.container]}}),componentName:"MuiGrid2",useThemeProps:n=>le({props:n,name:"MuiGrid2"}),useTheme:he});_.propTypes={children:e.node,columns:e.oneOfType([e.arrayOf(e.number),e.number,e.object]),columnSpacing:e.oneOfType([e.arrayOf(e.oneOfType([e.number,e.string])),e.number,e.object,e.string]),container:e.bool,direction:e.oneOfType([e.oneOf(["column-reverse","column","row-reverse","row"]),e.arrayOf(e.oneOf(["column-reverse","column","row-reverse","row"])),e.object]),offset:e.oneOfType([e.string,e.number,e.arrayOf(e.oneOfType([e.string,e.number])),e.object]),rowSpacing:e.oneOfType([e.arrayOf(e.oneOfType([e.number,e.string])),e.number,e.object,e.string]),size:e.oneOfType([e.string,e.bool,e.number,e.arrayOf(e.oneOfType([e.string,e.bool,e.number])),e.object]),spacing:e.oneOfType([e.arrayOf(e.oneOfType([e.number,e.string])),e.number,e.object,e.string]),sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),unstable_level:e.number,wrap:e.oneOf(["nowrap","wrap-reverse","wrap"])};{const n=_,i=Ie("Grid2",n);n.propTypes={...n.propTypes,direction:i("container"),spacing:i("container"),wrap:i("container")}}const s=xe.forwardRef(({children:n,...i},t)=>r.jsx(_,{ref:t,...i,children:n}));s.displayName="Grid";s.__docgenInfo={description:`Grid component - responsive grid layout using CSS Grid
Uses the new Grid2 component from MUI for improved performance and flexibility

@example
\`\`\`tsx
<Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 6 }}>
    <Item>1</Item>
  </Grid>
  <Grid size={{ xs: 12, md: 6 }}>
    <Item>2</Item>
  </Grid>
</Grid>
\`\`\``,methods:[],displayName:"Grid",composes:["MuiGridProps"]};const Ze={title:"Atoms/Grid",component:s,tags:["autodocs"],argTypes:{container:{control:"boolean",description:"If true, the component will have the flex container behavior"},spacing:{control:"number",description:"Defines the space between the type item components"}}},a=({children:n})=>r.jsx(u,{sx:{padding:2,textAlign:"center",height:"100%"},children:n}),S={render:()=>r.jsxs(s,{container:!0,spacing:2,children:[r.jsx(s,{xs:12,children:r.jsx(a,{children:"xs=12"})}),r.jsx(s,{xs:6,children:r.jsx(a,{children:"xs=6"})}),r.jsx(s,{xs:6,children:r.jsx(a,{children:"xs=6"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"xs=4"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"xs=4"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"xs=4"})})]})},O={render:()=>r.jsxs(s,{container:!0,spacing:2,children:[r.jsx(s,{xs:12,sm:6,md:4,lg:3,children:r.jsx(a,{children:"Responsive"})}),r.jsx(s,{xs:12,sm:6,md:4,lg:3,children:r.jsx(a,{children:"Grid"})}),r.jsx(s,{xs:12,sm:6,md:4,lg:3,children:r.jsx(a,{children:"Items"})}),r.jsx(s,{xs:12,sm:6,md:4,lg:3,children:r.jsx(a,{children:"Resize"})})]})},w={render:()=>r.jsxs(s,{container:!0,spacing:3,children:[r.jsx(s,{xs:"auto",children:r.jsx(a,{children:"Auto"})}),r.jsx(s,{xs:6,children:r.jsx(a,{children:"xs=6"})}),r.jsx(s,{xs:"auto",children:r.jsx(a,{children:"Auto"})})]})},C={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{children:[r.jsx(p,{variant:"h6",gutterBottom:!0,children:"Spacing: 1"}),r.jsxs(s,{container:!0,spacing:1,children:[r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 1"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 2"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 3"})})]})]}),r.jsxs("div",{children:[r.jsx(p,{variant:"h6",gutterBottom:!0,children:"Spacing: 2"}),r.jsxs(s,{container:!0,spacing:2,children:[r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 1"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 2"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 3"})})]})]}),r.jsxs("div",{children:[r.jsx(p,{variant:"h6",gutterBottom:!0,children:"Spacing: 4"}),r.jsxs(s,{container:!0,spacing:4,children:[r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 1"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 2"})}),r.jsx(s,{xs:4,children:r.jsx(a,{children:"Item 3"})})]})]})]})},P={render:()=>r.jsxs(s,{container:!0,rowSpacing:1,columnSpacing:2,children:[r.jsx(s,{xs:6,children:r.jsx(a,{children:"Row spacing: 1"})}),r.jsx(s,{xs:6,children:r.jsx(a,{children:"Column spacing: 2"})}),r.jsx(s,{xs:6,children:r.jsx(a,{children:"Item 3"})}),r.jsx(s,{xs:6,children:r.jsx(a,{children:"Item 4"})})]})},R={render:()=>r.jsxs(s,{container:!0,spacing:2,children:[r.jsx(s,{xs:12,md:6,children:r.jsx(a,{children:r.jsxs(s,{container:!0,spacing:1,children:[r.jsx(s,{xs:6,children:r.jsx(u,{sx:{padding:1,backgroundColor:"primary.light"},children:"Nested 1"})}),r.jsx(s,{xs:6,children:r.jsx(u,{sx:{padding:1,backgroundColor:"primary.light"},children:"Nested 2"})})]})})}),r.jsx(s,{xs:12,md:6,children:r.jsx(a,{children:"Regular Grid Item"})})]})},$={render:()=>r.jsxs(s,{container:!0,spacing:2,children:[r.jsx(s,{xs:12,children:r.jsx(a,{children:"Header (xs=12)"})}),r.jsx(s,{xs:12,md:3,children:r.jsx(a,{children:"Sidebar (xs=12, md=3)"})}),r.jsx(s,{xs:12,md:6,children:r.jsx(a,{children:"Main Content (xs=12, md=6)"})}),r.jsx(s,{xs:12,md:3,children:r.jsx(a,{children:"Right Sidebar (xs=12, md=3)"})}),r.jsx(s,{xs:12,children:r.jsx(a,{children:"Footer (xs=12)"})})]})},M={render:()=>r.jsx(s,{container:!0,spacing:3,children:[1,2,3,4,5,6].map(n=>r.jsx(s,{xs:12,sm:6,md:4,children:r.jsxs(u,{sx:{padding:3},children:[r.jsxs(p,{variant:"h5",gutterBottom:!0,children:["Card ",n]}),r.jsx(p,{variant:"body2",color:"text.secondary",children:"This is a card in a responsive grid layout."})]})},n))})},k={render:()=>r.jsxs(s,{container:!0,spacing:2,children:[r.jsx(s,{xs:12,md:8,children:r.jsx(u,{sx:{padding:2,height:200},children:r.jsx(p,{variant:"h6",children:"Main Chart"})})}),r.jsx(s,{xs:12,md:4,children:r.jsx(u,{sx:{padding:2,height:200},children:r.jsx(p,{variant:"h6",children:"Stats"})})}),r.jsx(s,{xs:12,sm:6,md:3,children:r.jsxs(u,{sx:{padding:2},children:[r.jsx(p,{variant:"h6",children:"Metric 1"}),r.jsx(p,{variant:"h4",children:"1,234"})]})}),r.jsx(s,{xs:12,sm:6,md:3,children:r.jsxs(u,{sx:{padding:2},children:[r.jsx(p,{variant:"h6",children:"Metric 2"}),r.jsx(p,{variant:"h4",children:"5,678"})]})}),r.jsx(s,{xs:12,sm:6,md:3,children:r.jsxs(u,{sx:{padding:2},children:[r.jsx(p,{variant:"h6",children:"Metric 3"}),r.jsx(p,{variant:"h4",children:"9,012"})]})}),r.jsx(s,{xs:12,sm:6,md:3,children:r.jsxs(u,{sx:{padding:2},children:[r.jsx(p,{variant:"h6",children:"Metric 4"}),r.jsx(p,{variant:"h4",children:"3,456"})]})})]})},N={render:()=>r.jsxs(s,{container:!0,spacing:2,children:[r.jsx(s,{xs:12,children:r.jsx(p,{variant:"h6",gutterBottom:!0,children:"1 column on mobile, 2 on tablet, 4 on desktop"})}),[1,2,3,4,5,6,7,8].map(n=>r.jsx(s,{xs:12,sm:6,lg:3,children:r.jsxs(a,{children:["Item ",n]})},n))]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Basic grid",...S.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"Responsive grid",...O.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Auto width",...w.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Different spacing",...C.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"Row and column spacing",...P.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Nested grid",...R.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Complex layout",...$.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Card grid",...M.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Dashboard layout",...k.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Responsive columns",...N.parameters?.docs?.description}}};const er=["Basic","Responsive","AutoWidth","DifferentSpacing","RowColumnSpacing","NestedGrid","ComplexLayout","CardGrid","DashboardLayout","ResponsiveColumns"];export{w as AutoWidth,S as Basic,M as CardGrid,$ as ComplexLayout,k as DashboardLayout,C as DifferentSpacing,R as NestedGrid,O as Responsive,N as ResponsiveColumns,P as RowColumnSpacing,er as __namedExportsOrder,Ze as default};
