import{r as p,a as v,j as e,b as j,W as Ce,d as K,X as xe,R as g}from"./iframe-DQx8_g_V.js";import{M as ae}from"./MaterialSymbol-CpJx0R1p.js";import{g as S,b as B,c as k,a as N,s as R,m as J}from"./memoTheme-DN4SvyIR.js";import{P as w}from"./Paper-BN8KY7Ge.js";import{C as oe}from"./Checkbox-CrbgVaFH.js";import{c as ye}from"./createSvgIcon-Cb3EI41T.js";import{u as ne}from"./useSlot-B_5D0USw.js";import{B as fe}from"./ButtonBase-CkEqPcMX.js";import{I as te}from"./IconButton-BF5v1Hm0.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CHcgeXiQ.js";import"./useTheme-CwEaitdl.js";import"./SwitchBase-LxshaGp5.js";import"./useFormControl-D3o9b5hJ.js";import"./useControlled-B8CjVrLB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-BNiZ-xjU.js";import"./resolveComponentProps-BFKdE3VA.js";import"./useForkRef-dCFEyD_R.js";import"./useEventCallback-DtAB4E7S.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZoBasVL.js";const pe=p.createContext();function ge(l){return S("MuiTable",l)}B("MuiTable",["root","stickyHeader"]);const we=l=>{const{classes:a,stickyHeader:n}=l;return N({root:["root",n&&"stickyHeader"]},ge,a)},je=R("table",{name:"MuiTable",slot:"Root",overridesResolver:(l,a)=>{const{ownerState:n}=l;return[a.root,n.stickyHeader&&a.stickyHeader]}})(J(({theme:l})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...l.typography.body2,padding:l.spacing(2),color:(l.vars||l).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:a})=>a.stickyHeader,style:{borderCollapse:"separate"}}]}))),re="table",Re=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTable"}),{className:s,component:t=re,padding:i="normal",size:c="medium",stickyHeader:b=!1,...m}=r,f={...r,component:t,padding:i,size:c,stickyHeader:b},H=we(f),I=p.useMemo(()=>({padding:i,size:c,stickyHeader:b}),[i,c,b]);return e.jsx(pe.Provider,{value:I,children:e.jsx(je,{as:t,role:t===re?null:"table",ref:n,className:k(H.root,s),ownerState:f,...m})})}),G=p.createContext();function ve(l){return S("MuiTableBody",l)}B("MuiTableBody",["root"]);const Se=l=>{const{classes:a}=l;return N({root:["root"]},ve,a)},Be=R("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(l,a)=>a.root})({display:"table-row-group"}),ke={variant:"body"},se="tbody",Ne=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTableBody"}),{className:s,component:t=se,...i}=r,c={...r,component:t},b=Se(c);return e.jsx(G.Provider,{value:ke,children:e.jsx(Be,{className:k(b.root,s),as:t,ref:n,role:t===se?null:"rowgroup",ownerState:c,...i})})});function He(l){return S("MuiTableCell",l)}const Me=B("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),$e=l=>{const{classes:a,variant:n,align:r,padding:s,size:t,stickyHeader:i}=l,c={root:["root",n,i&&"stickyHeader",r!=="inherit"&&`align${j(r)}`,s!=="normal"&&`padding${j(s)}`,`size${j(t)}`]};return N(c,He,a)},Pe=R("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(l,a)=>{const{ownerState:n}=l;return[a.root,a[n.variant],a[`size${j(n.size)}`],n.padding!=="normal"&&a[`padding${j(n.padding)}`],n.align!=="inherit"&&a[`align${j(n.align)}`],n.stickyHeader&&a.stickyHeader]}})(J(({theme:l})=>({...l.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:l.vars?`1px solid ${l.vars.palette.TableCell.border}`:`1px solid
    ${l.palette.mode==="light"?Ce(K(l.palette.divider,1),.88):xe(K(l.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(l.vars||l).palette.text.primary,lineHeight:l.typography.pxToRem(24),fontWeight:l.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(l.vars||l).palette.text.primary}},{props:{variant:"footer"},style:{color:(l.vars||l).palette.text.secondary,lineHeight:l.typography.pxToRem(21),fontSize:l.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${Me.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:a})=>a.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(l.vars||l).palette.background.default}}]}))),Ie=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTableCell"}),{align:s="inherit",className:t,component:i,padding:c,scope:b,size:m,sortDirection:f,variant:H,...I}=r,x=p.useContext(pe),M=p.useContext(G),z=M&&M.variant==="head";let $;i?$=i:$=z?"th":"td";let P=b;$==="td"?P=void 0:!P&&z&&(P="col");const Q=H||M&&M.variant,X={...r,align:s,component:$,padding:c||(x&&x.padding?x.padding:"normal"),size:m||(x&&x.size?x.size:"medium"),sortDirection:f,stickyHeader:Q==="head"&&x&&x.stickyHeader,variant:Q},ue=$e(X);let le=null;return f&&(le=f==="asc"?"ascending":"descending"),e.jsx(Pe,{as:$,ref:n,className:k(ue.root,t),"aria-sort":le,scope:P,ownerState:X,...I})});function ze(l){return S("MuiTableContainer",l)}B("MuiTableContainer",["root"]);const Ae=l=>{const{classes:a}=l;return N({root:["root"]},ze,a)},qe=R("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(l,a)=>a.root})({width:"100%",overflowX:"auto"}),Ee=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTableContainer"}),{className:s,component:t="div",...i}=r,c={...r,component:t},b=Ae(c);return e.jsx(qe,{ref:n,as:t,className:k(b.root,s),ownerState:c,...i})});function Le(l){return S("MuiTableFooter",l)}B("MuiTableFooter",["root"]);const De=l=>{const{classes:a}=l;return N({root:["root"]},Le,a)},Oe=R("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(l,a)=>a.root})({display:"table-footer-group"}),Fe={variant:"footer"},ie="tfoot",Ue=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTableFooter"}),{className:s,component:t=ie,...i}=r,c={...r,component:t},b=De(c);return e.jsx(G.Provider,{value:Fe,children:e.jsx(Oe,{as:t,className:k(b.root,s),ref:n,role:t===ie?null:"rowgroup",ownerState:c,...i})})});function We(l){return S("MuiTableHead",l)}B("MuiTableHead",["root"]);const _e=l=>{const{classes:a}=l;return N({root:["root"]},We,a)},Ve=R("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(l,a)=>a.root})({display:"table-header-group"}),Je={variant:"head"},ce="thead",Ge=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTableHead"}),{className:s,component:t=ce,...i}=r,c={...r,component:t},b=_e(c);return e.jsx(G.Provider,{value:Je,children:e.jsx(Ve,{as:t,className:k(b.root,s),ref:n,role:t===ce?null:"rowgroup",ownerState:c,...i})})});function Qe(l){return S("MuiTableRow",l)}const de=B("MuiTableRow",["root","selected","hover","head","footer"]),Xe=l=>{const{classes:a,selected:n,hover:r,head:s,footer:t}=l;return N({root:["root",n&&"selected",r&&"hover",s&&"head",t&&"footer"]},Qe,a)},Ke=R("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(l,a)=>{const{ownerState:n}=l;return[a.root,n.head&&a.head,n.footer&&a.footer]}})(J(({theme:l})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${de.hover}:hover`]:{backgroundColor:(l.vars||l).palette.action.hover},[`&.${de.selected}`]:{backgroundColor:l.vars?`rgba(${l.vars.palette.primary.mainChannel} / ${l.vars.palette.action.selectedOpacity})`:K(l.palette.primary.main,l.palette.action.selectedOpacity),"&:hover":{backgroundColor:l.vars?`rgba(${l.vars.palette.primary.mainChannel} / calc(${l.vars.palette.action.selectedOpacity} + ${l.vars.palette.action.hoverOpacity}))`:K(l.palette.primary.main,l.palette.action.selectedOpacity+l.palette.action.hoverOpacity)}}}))),be="tr",Ye=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTableRow"}),{className:s,component:t=be,hover:i=!1,selected:c=!1,...b}=r,m=p.useContext(G),f={...r,component:t,hover:i,selected:c,head:m&&m.variant==="head",footer:m&&m.variant==="footer"},H=Xe(f);return e.jsx(Ke,{as:t,ref:n,className:k(H.root,s),role:t===be?null:"row",ownerState:f,...b})}),Ze=ye(e.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function el(l){return S("MuiTableSortLabel",l)}const Y=B("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),ll=l=>{const{classes:a,direction:n,active:r}=l,s={root:["root",r&&"active",`direction${j(n)}`],icon:["icon",`iconDirection${j(n)}`]};return N(s,el,a)},al=R(fe,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(l,a)=>{const{ownerState:n}=l;return[a.root,n.active&&a.active]}})(J(({theme:l})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(l.vars||l).palette.text.secondary},"&:hover":{color:(l.vars||l).palette.text.secondary,[`& .${Y.icon}`]:{opacity:.5}},[`&.${Y.active}`]:{color:(l.vars||l).palette.text.primary,[`& .${Y.icon}`]:{opacity:1,color:(l.vars||l).palette.text.secondary}}}))),ol=R("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(l,a)=>{const{ownerState:n}=l;return[a.icon,a[`iconDirection${j(n.direction)}`]]}})(J(({theme:l})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:l.transitions.create(["opacity","transform"],{duration:l.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),Z=p.forwardRef(function(a,n){const r=v({props:a,name:"MuiTableSortLabel"}),{active:s=!1,children:t,className:i,direction:c="asc",hideSortIcon:b=!1,IconComponent:m=Ze,slots:f={},slotProps:H={},...I}=r,x={...r,active:s,direction:c,hideSortIcon:b,IconComponent:m},M=ll(x),z={slots:f,slotProps:H},[$,P]=ne("root",{elementType:al,externalForwardedProps:z,ownerState:x,className:k(M.root,i),ref:n}),[Q,X]=ne("icon",{elementType:ol,externalForwardedProps:z,ownerState:x,className:M.icon});return e.jsxs($,{disableRipple:!0,component:"span",...P,...I,children:[t,b&&!s?null:e.jsx(Q,{as:m,...X})]})}),me=g.forwardRef(({children:l,size:a="medium",stickyHeader:n=!1,padding:r="normal",...s},t)=>e.jsx(Re,{ref:t,size:a,stickyHeader:n,padding:r,...s,children:l})),h=g.memo(me);h.displayName="Table";const y=g.forwardRef(({children:l,...a},n)=>e.jsx(Ee,{ref:n,...a,children:l}));y.displayName="TableContainer";const u=g.forwardRef(({children:l,...a},n)=>e.jsx(Ge,{ref:n,...a,children:l}));u.displayName="TableHead";const C=g.forwardRef(({children:l,...a},n)=>e.jsx(Ne,{ref:n,...a,children:l}));C.displayName="TableBody";const ee=g.forwardRef(({children:l,...a},n)=>e.jsx(Ue,{ref:n,...a,children:l}));ee.displayName="TableFooter";const Te=g.forwardRef(({children:l,selected:a=!1,hover:n=!1,...r},s)=>e.jsx(Ye,{ref:s,selected:a,hover:n,...r,children:l})),d=g.memo(Te);d.displayName="TableRow";const he=g.forwardRef(({children:l,align:a="left",padding:n="normal",size:r="medium",variant:s,colSpan:t,rowSpan:i,sortDirection:c,...b},m)=>e.jsx(Ie,{ref:m,align:a,padding:n,size:r,variant:s,colSpan:t,rowSpan:i,sortDirection:c,...b,children:l})),o=g.memo(he);o.displayName="TableCell";me.__docgenInfo={description:`Table component for displaying tabular data

Memoized for performance with large datasets.
Re-renders only when props change.`,methods:[],displayName:"TableBase",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table (typically TableHead, TableBody, TableFooter)"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the table
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:`If true, the table will take up the full width of its container
@default false`,defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'normal' | 'checkbox' | 'none'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'none'"}]},description:`Set the table padding
@default 'normal'`,defaultValue:{value:"'normal'",computed:!1}}},composes:["MuiTableProps"]};y.__docgenInfo={description:"TableContainer component - wrapper for Table with scroll support",methods:[],displayName:"TableContainer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the container (typically a Table)"},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node"}},composes:["MuiTableContainerProps"]};u.__docgenInfo={description:"TableHead component - table header section",methods:[],displayName:"TableHead",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table head (typically TableRow with TableCell)"}},composes:["MuiTableHeadProps"]};C.__docgenInfo={description:"TableBody component - table body section",methods:[],displayName:"TableBody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table body (typically TableRow elements)"}},composes:["MuiTableBodyProps"]};ee.__docgenInfo={description:"TableFooter component - table footer section",methods:[],displayName:"TableFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table footer (typically TableRow)"}},composes:["MuiTableFooterProps"]};Te.__docgenInfo={description:`TableRow component - row in a table

Memoized to prevent unnecessary re-renders in large tables.`,methods:[],displayName:"TableRowBase",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the row (typically TableCell elements)"},selected:{required:!1,tsType:{name:"boolean"},description:`If true, the row will be selected
@default false`,defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:`If true, the row will have hover effect
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiTableRowProps"]};he.__docgenInfo={description:`TableCell component - cell in a table row

Memoized to optimize rendering of large tables with many cells.`,methods:[],displayName:"TableCellBase",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the cell"},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify' | 'inherit'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"},{name:"literal",value:"'inherit'"}]},description:`Set the text alignment
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'normal' | 'checkbox' | 'none'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'none'"}]},description:`Set the padding
@default 'normal'`,defaultValue:{value:"'normal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`Set the size
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'head' | 'body' | 'footer'",elements:[{name:"literal",value:"'head'"},{name:"literal",value:"'body'"},{name:"literal",value:"'footer'"}]},description:"Set the scope attribute"},colSpan:{required:!1,tsType:{name:"number"},description:"Set the number of columns a cell should span"},rowSpan:{required:!1,tsType:{name:"number"},description:"Set the number of rows a cell should span"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | false",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"false"}]},description:"Set aria-sort for sortable columns"}},composes:["MuiTableCellProps"]};const Sl={title:"Molecules/Table",component:h,parameters:{layout:"centered",docs:{description:{component:"Tables display sets of data. They can be fully customized and include features like sorting, filtering, and pagination."}}},tags:["autodocs"]},T=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Editor"},{id:4,name:"Alice Williams",email:"alice@example.com",role:"User"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"Admin"}],A={render:()=>e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Role"})]})}),e.jsx(C,{children:T.map(l=>e.jsxs(d,{children:[e.jsx(o,{children:l.name}),e.jsx(o,{children:l.email}),e.jsx(o,{children:l.role})]},l.id))})]})})},q={render:()=>e.jsx(y,{component:w,children:e.jsxs(h,{size:"small",children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Role"})]})}),e.jsx(C,{children:T.map(l=>e.jsxs(d,{children:[e.jsx(o,{children:l.name}),e.jsx(o,{children:l.email}),e.jsx(o,{children:l.role})]},l.id))})]})})},E={render:()=>e.jsx(y,{component:w,sx:{maxHeight:300},children:e.jsxs(h,{stickyHeader:!0,children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Role"})]})}),e.jsx(C,{children:[...T,...T,...T].map((l,a)=>e.jsxs(d,{children:[e.jsx(o,{children:l.name}),e.jsx(o,{children:l.email}),e.jsx(o,{children:l.role})]},a))})]})})},L={render:()=>e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Role"})]})}),e.jsx(C,{children:T.map(l=>e.jsxs(d,{hover:!0,children:[e.jsx(o,{children:l.name}),e.jsx(o,{children:l.email}),e.jsx(o,{children:l.role})]},l.id))})]})})},D={render:()=>{const[l,a]=p.useState([]),n=s=>{s.target.checked?a(T.map(t=>t.id)):a([])},r=s=>{const t=l.indexOf(s);let i=[];t===-1?i=i.concat(l,s):t===0?i=i.concat(l.slice(1)):t===l.length-1?i=i.concat(l.slice(0,-1)):t>0&&(i=i.concat(l.slice(0,t),l.slice(t+1))),a(i)};return e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{padding:"checkbox",children:e.jsx(oe,{checked:l.length===T.length,indeterminate:l.length>0&&l.length<T.length,onChange:n})}),e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Role"})]})}),e.jsx(C,{children:T.map(s=>{const t=l.indexOf(s.id)!==-1;return e.jsxs(d,{hover:!0,selected:t,onClick:()=>r(s.id),sx:{cursor:"pointer"},children:[e.jsx(o,{padding:"checkbox",children:e.jsx(oe,{checked:t})}),e.jsx(o,{children:s.name}),e.jsx(o,{children:s.email}),e.jsx(o,{children:s.role})]},s.id)})})]})})}},O={render:()=>{const[l,a]=p.useState("asc"),[n,r]=p.useState("name"),s=i=>{a(n===i&&l==="asc"?"desc":"asc"),r(i)},t=[...T].sort((i,c)=>l==="asc"?i[n]<c[n]?-1:1:i[n]>c[n]?-1:1);return e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:e.jsx(Z,{active:n==="name",direction:n==="name"?l:"asc",onClick:()=>s("name"),children:"Name"})}),e.jsx(o,{children:e.jsx(Z,{active:n==="email",direction:n==="email"?l:"asc",onClick:()=>s("email"),children:"Email"})}),e.jsx(o,{children:e.jsx(Z,{active:n==="role",direction:n==="role"?l:"asc",onClick:()=>s("role"),children:"Role"})})]})}),e.jsx(C,{children:t.map(i=>e.jsxs(d,{hover:!0,children:[e.jsx(o,{children:i.name}),e.jsx(o,{children:i.email}),e.jsx(o,{children:i.role})]},i.id))})]})})}},F={render:()=>e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Role"}),e.jsx(o,{align:"right",children:"Actions"})]})}),e.jsx(C,{children:T.map(l=>e.jsxs(d,{hover:!0,children:[e.jsx(o,{children:l.name}),e.jsx(o,{children:l.email}),e.jsx(o,{children:l.role}),e.jsxs(o,{align:"right",children:[e.jsx(te,{size:"small",color:"primary",children:e.jsx(ae,{icon:"edit",size:"small"})}),e.jsx(te,{size:"small",color:"error",children:e.jsx(ae,{icon:"delete",size:"small"})})]})]},l.id))})]})})},U={render:()=>{const l=[{item:"Product A",quantity:10,price:50,total:500},{item:"Product B",quantity:5,price:100,total:500},{item:"Product C",quantity:8,price:75,total:600}],a=l.reduce((n,r)=>n+r.total,0);return e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Item"}),e.jsx(o,{align:"right",children:"Quantity"}),e.jsx(o,{align:"right",children:"Price"}),e.jsx(o,{align:"right",children:"Total"})]})}),e.jsx(C,{children:l.map((n,r)=>e.jsxs(d,{children:[e.jsx(o,{children:n.item}),e.jsx(o,{align:"right",children:n.quantity}),e.jsxs(o,{align:"right",children:["$",n.price]}),e.jsxs(o,{align:"right",children:["$",n.total]})]},r))}),e.jsx(ee,{children:e.jsxs(d,{children:[e.jsx(o,{colSpan:3,align:"right",children:e.jsx("strong",{children:"Grand Total:"})}),e.jsx(o,{align:"right",children:e.jsxs("strong",{children:["$",a]})})]})})]})})}},W={render:()=>e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsxs(u,{children:[e.jsxs(d,{children:[e.jsx(o,{colSpan:2,align:"center",children:"Personal Info"}),e.jsx(o,{colSpan:2,align:"center",children:"Contact"})]}),e.jsxs(d,{children:[e.jsx(o,{children:"First Name"}),e.jsx(o,{children:"Last Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Phone"})]})]}),e.jsxs(C,{children:[e.jsxs(d,{children:[e.jsx(o,{children:"John"}),e.jsx(o,{children:"Doe"}),e.jsx(o,{children:"john@example.com"}),e.jsx(o,{children:"555-1234"})]}),e.jsxs(d,{children:[e.jsx(o,{children:"Jane"}),e.jsx(o,{children:"Smith"}),e.jsx(o,{children:"jane@example.com"}),e.jsx(o,{children:"555-5678"})]})]})]})})},_={render:()=>e.jsx(y,{component:w,children:e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{align:"left",children:"Left Aligned"}),e.jsx(o,{align:"center",children:"Center Aligned"}),e.jsx(o,{align:"right",children:"Right Aligned"})]})}),e.jsx(C,{children:[1,2,3].map(l=>e.jsxs(d,{children:[e.jsxs(o,{align:"left",children:["Row ",l]}),e.jsxs(o,{align:"center",children:["Data ",l]}),e.jsxs(o,{align:"right",children:["$",l*100]})]},l))})]})})},V={render:()=>e.jsxs(h,{children:[e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Role"})]})}),e.jsx(C,{children:T.slice(0,3).map(l=>e.jsxs(d,{children:[e.jsx(o,{children:l.name}),e.jsx(o,{children:l.email}),e.jsx(o,{children:l.role})]},l.id))})]})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...A.parameters?.docs?.source},description:{story:"Default Table with basic structure",...A.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...q.parameters?.docs?.source},description:{story:"Dense table (smaller padding)",...q.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper} sx={{
    maxHeight: 300
  }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...rows, ...rows, ...rows].map((row, index) => <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...E.parameters?.docs?.source},description:{story:"Table with sticky header (scrollable)",...E.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...L.parameters?.docs?.source},description:{story:"Table with hover effect",...L.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setSelected(rows.map(r => r.id));
      } else {
        setSelected([]);
      }
    };
    const handleSelect = (id: number) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: number[] = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }
      setSelected(newSelected);
    };
    return <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox checked={selected.length === rows.length} indeterminate={selected.length > 0 && selected.length < rows.length} onChange={handleSelectAll} />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
            const isSelected = selected.indexOf(row.id) !== -1;
            return <TableRow key={row.id} hover selected={isSelected} onClick={() => handleSelect(row.id)} sx={{
              cursor: 'pointer'
            }}>
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>;
          })}
          </TableBody>
        </Table>
      </TableContainer>;
  }
}`,...D.parameters?.docs?.source},description:{story:"Table with selectable rows",...D.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    type Order = 'asc' | 'desc';
    type OrderBy = 'name' | 'email' | 'role';
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<OrderBy>('name');
    const handleSort = (property: OrderBy) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    const sortedRows = [...rows].sort((a, b) => {
      if (order === 'asc') {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      }
      return a[orderBy] > b[orderBy] ? -1 : 1;
    });
    return <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel active={orderBy === 'name'} direction={orderBy === 'name' ? order : 'asc'} onClick={() => handleSort('name')}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel active={orderBy === 'email'} direction={orderBy === 'email' ? order : 'asc'} onClick={() => handleSort('email')}>
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel active={orderBy === 'role'} direction={orderBy === 'role' ? order : 'asc'} onClick={() => handleSort('role')}>
                  Role
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map(row => <TableRow key={row.id} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>;
  }
}`,...O.parameters?.docs?.source},description:{story:"Table with sortable columns",...O.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="right">
                <IconButton size="small" color="primary">
                  <MaterialSymbol icon="edit" size="small" />
                </IconButton>
                <IconButton size="small" color="error">
                  <MaterialSymbol icon="delete" size="small" />
                </IconButton>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...F.parameters?.docs?.source},description:{story:"Table with actions",...F.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      item: 'Product A',
      quantity: 10,
      price: 50,
      total: 500
    }, {
      item: 'Product B',
      quantity: 5,
      price: 100,
      total: 500
    }, {
      item: 'Product C',
      quantity: 8,
      price: 75,
      total: 600
    }];
    const grandTotal = data.reduce((sum, row) => sum + row.total, 0);
    return <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => <TableRow key={index}>
                <TableCell>{row.item}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">\${row.price}</TableCell>
                <TableCell align="right">\${row.total}</TableCell>
              </TableRow>)}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} align="right">
                <strong>Grand Total:</strong>
              </TableCell>
              <TableCell align="right">
                <strong>\${grandTotal}</strong>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>;
  }
}`,...U.parameters?.docs?.source},description:{story:"Table with footer",...U.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center">
              Personal Info
            </TableCell>
            <TableCell colSpan={2} align="center">
              Contact
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>555-1234</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane</TableCell>
            <TableCell>Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>555-5678</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
}`,...W.parameters?.docs?.source},description:{story:"Table with colspan and rowspan",...W.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Left Aligned</TableCell>
            <TableCell align="center">Center Aligned</TableCell>
            <TableCell align="right">Right Aligned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3].map(row => <TableRow key={row}>
              <TableCell align="left">Row {row}</TableCell>
              <TableCell align="center">Data {row}</TableCell>
              <TableCell align="right">\${row * 100}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,..._.parameters?.docs?.source},description:{story:"Table with alignment options",..._.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.slice(0, 3).map(row => <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...V.parameters?.docs?.source},description:{story:"Without TableContainer (no Paper wrapper)",...V.parameters?.docs?.description}}};const Bl=["Default","Dense","StickyHeader","WithHover","Selectable","Sortable","WithActions","WithFooter","WithSpans","WithAlignment","WithoutContainer"];export{A as Default,q as Dense,D as Selectable,O as Sortable,E as StickyHeader,F as WithActions,_ as WithAlignment,U as WithFooter,L as WithHover,W as WithSpans,V as WithoutContainer,Bl as __namedExportsOrder,Sl as default};
