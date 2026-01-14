import{b as tr,r as B,e as ar,j as r,a as dr,u as or,R as cr}from"./iframe-CckttRrP.js";import{u as mr}from"./useTheme-BEZ5DwR-.js";import{c as pr,a as xr,g as lr,s as hr}from"./memoTheme-D40aOm1p.js";import{s as gr}from"./styled-Yz1ixKRP.js";import{i as ur}from"./isMuiElement-BGa7mOkb.js";import{u as Gr}from"./useThemeProps-jBpPjYFU.js";import{P as g}from"./Paper-g-0mTNWW.js";import{T as c}from"./Typography-B8ayrIoU.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-Bui-Aeo_.js";import"./Typography-CJ6AbGd8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const yr=(e,s)=>e.filter(i=>s.includes(i)),S=(e,s,i)=>{const o=e.keys[0];Array.isArray(s)?s.forEach((d,a)=>{i((u,y)=>{a<=e.keys.length-1&&(a===0?Object.assign(u,y):u[e.up(e.keys[a])]=y)},d)}):s&&typeof s=="object"?(Object.keys(s).length>e.keys.length?e.keys:yr(e.keys,Object.keys(s))).forEach(a=>{if(e.keys.includes(a)){const u=s[a];u!==void 0&&i((y,v)=>{o===a?Object.assign(y,v):y[e.up(a)]=v},u)}}):(typeof s=="number"||typeof s=="string")&&i((d,a)=>{Object.assign(d,a)},s)};function A(e){return`--Grid-${e}Spacing`}function z(e){return`--Grid-parent-${e}Spacing`}const U="--Grid-columns",I="--Grid-parent-columns",jr=({theme:e,ownerState:s})=>{const i={};return S(e.breakpoints,s.size,(o,d)=>{let a={};d==="grow"&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),d==="auto"&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof d=="number"&&(a={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${d} / var(${I}) - (var(${I}) - ${d}) * (var(${z("column")}) / var(${I})))`}),o(i,a)}),i},fr=({theme:e,ownerState:s})=>{const i={};return S(e.breakpoints,s.offset,(o,d)=>{let a={};d==="auto"&&(a={marginLeft:"auto"}),typeof d=="number"&&(a={marginLeft:d===0?"0px":`calc(100% * ${d} / var(${I}) + var(${z("column")}) * ${d} / var(${I}))`}),o(i,a)}),i},Ir=({theme:e,ownerState:s})=>{if(!s.container)return{};const i={[U]:12};return S(e.breakpoints,s.columns,(o,d)=>{const a=d??12;o(i,{[U]:a,"> *":{[I]:a}})}),i},Sr=({theme:e,ownerState:s})=>{if(!s.container)return{};const i={};return S(e.breakpoints,s.rowSpacing,(o,d)=>{const a=typeof d=="string"?d:e.spacing?.(d);o(i,{[A("row")]:a,"> *":{[z("row")]:a}})}),i},vr=({theme:e,ownerState:s})=>{if(!s.container)return{};const i={};return S(e.breakpoints,s.columnSpacing,(o,d)=>{const a=typeof d=="string"?d:e.spacing?.(d);o(i,{[A("column")]:a,"> *":{[z("column")]:a}})}),i},br=({theme:e,ownerState:s})=>{if(!s.container)return{};const i={};return S(e.breakpoints,s.direction,(o,d)=>{o(i,{flexDirection:d})}),i},Tr=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${A("row")}) var(${A("column")})`}}),Cr=e=>{const s=[];return Object.entries(e).forEach(([i,o])=>{o!==!1&&o!==void 0&&s.push(`grid-${i}-${String(o)}`)}),s},wr=(e,s="xs")=>{function i(o){return o===void 0?!1:typeof o=="string"&&!Number.isNaN(Number(o))||typeof o=="number"&&o>0}if(i(e))return[`spacing-${s}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const o=[];return Object.entries(e).forEach(([d,a])=>{i(a)&&o.push(`spacing-${d}-${String(a)}`)}),o}return[]},Pr=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([s,i])=>`direction-${s}-${i}`):[`direction-xs-${String(e)}`];function Rr(e,s){e.item!==void 0&&delete e.item,e.zeroMinWidth!==void 0&&delete e.zeroMinWidth,s.keys.forEach(i=>{e[i]!==void 0&&delete e[i]})}const $r=dr(),kr=gr("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,s)=>s.root});function Mr(e){return Gr({props:e,name:"MuiGrid",defaultTheme:$r})}function Nr(e={}){const{createStyledComponent:s=kr,useThemeProps:i=Mr,useTheme:o=tr,componentName:d="MuiGrid"}=e,a=(l,p)=>{const{container:j,direction:x,spacing:h,wrap:m,size:D}=l,E={root:["root",j&&"container",m!=="wrap"&&`wrap-xs-${String(m)}`,...Pr(x),...Cr(D),...j?wr(h,p.breakpoints.keys[0]):[]]};return xr(E,O=>lr(d,O),{})};function u(l,p,j=()=>!0){const x={};return l===null||(Array.isArray(l)?l.forEach((h,m)=>{h!==null&&j(h)&&p.keys[m]&&(x[p.keys[m]]=h)}):typeof l=="object"?Object.keys(l).forEach(h=>{const m=l[h];m!=null&&j(m)&&(x[h]=m)}):x[p.keys[0]]=l),x}const y=s(Ir,vr,Sr,jr,br,Tr,fr),v=B.forwardRef(function(p,j){const x=o(),h=i(p),m=ar(h);Rr(m,x.breakpoints);const{className:D,children:E,columns:O=12,container:L=!1,component:F="div",direction:H="row",wrap:K="wrap",size:q={},offset:J={},spacing:W=0,rowSpacing:Q=W,columnSpacing:V=W,unstable_level:f=0,...X}=m,Y=u(q,x.breakpoints,G=>G!==!1),Z=u(J,x.breakpoints),rr=p.columns??(f?void 0:O),er=p.spacing??(f?void 0:W),nr=p.rowSpacing??p.spacing??(f?void 0:Q),sr=p.columnSpacing??p.spacing??(f?void 0:V),_={...m,level:f,columns:rr,container:L,direction:H,wrap:K,spacing:er,rowSpacing:nr,columnSpacing:sr,size:Y,offset:Z},ir=a(_,x);return r.jsx(y,{ref:j,as:F,ownerState:_,className:pr(ir.root,D),...X,children:B.Children.map(E,G=>B.isValidElement(G)&&ur(G,["Grid"])&&L&&G.props.container?B.cloneElement(G,{unstable_level:G.props?.unstable_level??f+1}):G)})});return v.muiName="Grid",v}const Br=Nr({createStyledComponent:hr("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:i}=e;return[s.root,i.container&&s.container]}}),componentName:"MuiGrid2",useThemeProps:e=>or({props:e,name:"MuiGrid2"}),useTheme:mr}),n=cr.forwardRef(({children:e,...s},i)=>r.jsx(Br,{ref:i,...s,children:e}));n.displayName="Grid";n.__docgenInfo={description:`Grid component - responsive grid layout using CSS Grid
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
\`\`\``,methods:[],displayName:"Grid",composes:["MuiGridProps"]};const qr={title:"Atoms/Grid",component:n,tags:["autodocs"],argTypes:{container:{control:"boolean",description:"If true, the component will have the flex container behavior"},spacing:{control:"number",description:"Defines the space between the type item components"}}},t=({children:e})=>r.jsx(g,{sx:{padding:2,textAlign:"center",height:"100%"},children:e}),b={render:()=>r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{xs:12,children:r.jsx(t,{children:"xs=12"})}),r.jsx(n,{xs:6,children:r.jsx(t,{children:"xs=6"})}),r.jsx(n,{xs:6,children:r.jsx(t,{children:"xs=6"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"xs=4"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"xs=4"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"xs=4"})})]})},T={render:()=>r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{xs:12,sm:6,md:4,lg:3,children:r.jsx(t,{children:"Responsive"})}),r.jsx(n,{xs:12,sm:6,md:4,lg:3,children:r.jsx(t,{children:"Grid"})}),r.jsx(n,{xs:12,sm:6,md:4,lg:3,children:r.jsx(t,{children:"Items"})}),r.jsx(n,{xs:12,sm:6,md:4,lg:3,children:r.jsx(t,{children:"Resize"})})]})},C={render:()=>r.jsxs(n,{container:!0,spacing:3,children:[r.jsx(n,{xs:"auto",children:r.jsx(t,{children:"Auto"})}),r.jsx(n,{xs:6,children:r.jsx(t,{children:"xs=6"})}),r.jsx(n,{xs:"auto",children:r.jsx(t,{children:"Auto"})})]})},w={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[r.jsxs("div",{children:[r.jsx(c,{variant:"h6",gutterBottom:!0,children:"Spacing: 1"}),r.jsxs(n,{container:!0,spacing:1,children:[r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 1"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 2"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 3"})})]})]}),r.jsxs("div",{children:[r.jsx(c,{variant:"h6",gutterBottom:!0,children:"Spacing: 2"}),r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 1"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 2"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 3"})})]})]}),r.jsxs("div",{children:[r.jsx(c,{variant:"h6",gutterBottom:!0,children:"Spacing: 4"}),r.jsxs(n,{container:!0,spacing:4,children:[r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 1"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 2"})}),r.jsx(n,{xs:4,children:r.jsx(t,{children:"Item 3"})})]})]})]})},P={render:()=>r.jsxs(n,{container:!0,rowSpacing:1,columnSpacing:2,children:[r.jsx(n,{xs:6,children:r.jsx(t,{children:"Row spacing: 1"})}),r.jsx(n,{xs:6,children:r.jsx(t,{children:"Column spacing: 2"})}),r.jsx(n,{xs:6,children:r.jsx(t,{children:"Item 3"})}),r.jsx(n,{xs:6,children:r.jsx(t,{children:"Item 4"})})]})},R={render:()=>r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{xs:12,md:6,children:r.jsx(t,{children:r.jsxs(n,{container:!0,spacing:1,children:[r.jsx(n,{xs:6,children:r.jsx(g,{sx:{padding:1,backgroundColor:"primary.light"},children:"Nested 1"})}),r.jsx(n,{xs:6,children:r.jsx(g,{sx:{padding:1,backgroundColor:"primary.light"},children:"Nested 2"})})]})})}),r.jsx(n,{xs:12,md:6,children:r.jsx(t,{children:"Regular Grid Item"})})]})},$={render:()=>r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{xs:12,children:r.jsx(t,{children:"Header (xs=12)"})}),r.jsx(n,{xs:12,md:3,children:r.jsx(t,{children:"Sidebar (xs=12, md=3)"})}),r.jsx(n,{xs:12,md:6,children:r.jsx(t,{children:"Main Content (xs=12, md=6)"})}),r.jsx(n,{xs:12,md:3,children:r.jsx(t,{children:"Right Sidebar (xs=12, md=3)"})}),r.jsx(n,{xs:12,children:r.jsx(t,{children:"Footer (xs=12)"})})]})},k={render:()=>r.jsx(n,{container:!0,spacing:3,children:[1,2,3,4,5,6].map(e=>r.jsx(n,{xs:12,sm:6,md:4,children:r.jsxs(g,{sx:{padding:3},children:[r.jsxs(c,{variant:"h5",gutterBottom:!0,children:["Card ",e]}),r.jsx(c,{variant:"body2",color:"text.secondary",children:"This is a card in a responsive grid layout."})]})},e))})},M={render:()=>r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{xs:12,md:8,children:r.jsx(g,{sx:{padding:2,height:200},children:r.jsx(c,{variant:"h6",children:"Main Chart"})})}),r.jsx(n,{xs:12,md:4,children:r.jsx(g,{sx:{padding:2,height:200},children:r.jsx(c,{variant:"h6",children:"Stats"})})}),r.jsx(n,{xs:12,sm:6,md:3,children:r.jsxs(g,{sx:{padding:2},children:[r.jsx(c,{variant:"h6",children:"Metric 1"}),r.jsx(c,{variant:"h4",children:"1,234"})]})}),r.jsx(n,{xs:12,sm:6,md:3,children:r.jsxs(g,{sx:{padding:2},children:[r.jsx(c,{variant:"h6",children:"Metric 2"}),r.jsx(c,{variant:"h4",children:"5,678"})]})}),r.jsx(n,{xs:12,sm:6,md:3,children:r.jsxs(g,{sx:{padding:2},children:[r.jsx(c,{variant:"h6",children:"Metric 3"}),r.jsx(c,{variant:"h4",children:"9,012"})]})}),r.jsx(n,{xs:12,sm:6,md:3,children:r.jsxs(g,{sx:{padding:2},children:[r.jsx(c,{variant:"h6",children:"Metric 4"}),r.jsx(c,{variant:"h4",children:"3,456"})]})})]})},N={render:()=>r.jsxs(n,{container:!0,spacing:2,children:[r.jsx(n,{xs:12,children:r.jsx(c,{variant:"h6",gutterBottom:!0,children:"1 column on mobile, 2 on tablet, 4 on desktop"})}),[1,2,3,4,5,6,7,8].map(e=>r.jsx(n,{xs:12,sm:6,lg:3,children:r.jsxs(t,{children:["Item ",e]})},e))]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Basic grid",...b.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Responsive grid",...T.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Auto width",...C.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Different spacing",...w.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Complex layout",...$.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Card grid",...k.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Dashboard layout",...M.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Responsive columns",...N.parameters?.docs?.description}}};const Jr=["Basic","Responsive","AutoWidth","DifferentSpacing","RowColumnSpacing","NestedGrid","ComplexLayout","CardGrid","DashboardLayout","ResponsiveColumns"];export{C as AutoWidth,b as Basic,k as CardGrid,$ as ComplexLayout,M as DashboardLayout,w as DifferentSpacing,R as NestedGrid,T as Responsive,N as ResponsiveColumns,P as RowColumnSpacing,Jr as __namedExportsOrder,qr as default};
