import{r as m,g as S,a as N,j as e,P as a,E as R,Z as ve,F as Y,$ as Se,R as j}from"./iframe-m0FcCUbT.js";import{M as ne}from"./MaterialSymbol-DOQyWWmo.js";import{g as B,c as k,a as H,s as v,m as Q}from"./memoTheme-C11nCEJ1.js";import{P as w}from"./Paper-BQ8rpTFt.js";import{C as te}from"./Checkbox-B_ghSYF8.js";import{c as Ne}from"./createSvgIcon-DzjuuRaM.js";import{u as re}from"./useSlot-BPbjla4P.js";import{B as Be}from"./ButtonBase-Bd5szlVj.js";import{I as se}from"./IconButton-BtP768Mt.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DSq61m1Q.js";import"./useTheme--qrtAMJV.js";import"./chainPropTypes-CPkqCYVL.js";import"./integerPropType-DVPNO1YA.js";import"./SwitchBase-DRXZyUo6.js";import"./useFormControl-C69-cJvf.js";import"./useControlled-Cm6cFOSH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-Bkt73wcY.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useForkRef-DeUHlcp-.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./CircularProgress-nywBWFjt.js";const le=m.createContext();le.displayName="TableContext";function ke(l){return S("MuiTable",l)}B("MuiTable",["root","stickyHeader"]);const He=l=>{const{classes:o,stickyHeader:t}=l;return H({root:["root",t&&"stickyHeader"]},ke,o)},Oe=v("table",{name:"MuiTable",slot:"Root",overridesResolver:(l,o)=>{const{ownerState:t}=l;return[o.root,t.stickyHeader&&o.stickyHeader]}})(Q(({theme:l})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...l.typography.body2,padding:l.spacing(2),color:(l.vars||l).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:o})=>o.stickyHeader,style:{borderCollapse:"separate"}}]}))),ie="table",Te=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTable"}),{className:i,component:r=ie,padding:c="normal",size:d="medium",stickyHeader:b=!1,...T}=s,g={...s,component:r,padding:c,size:d,stickyHeader:b},O=He(g),z=m.useMemo(()=>({padding:c,size:d,stickyHeader:b}),[c,d,b]);return e.jsx(le.Provider,{value:z,children:e.jsx(Oe,{as:r,role:r===ie?null:"table",ref:t,className:k(O.root,i),ownerState:g,...T})})});Te.propTypes={children:a.node,classes:a.object,className:a.string,component:a.elementType,padding:a.oneOf(["checkbox","none","normal"]),size:a.oneOfType([a.oneOf(["medium","small"]),a.string]),stickyHeader:a.bool,sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object])};const I=m.createContext();I.displayName="Tablelvl2Context";function Me(l){return S("MuiTableBody",l)}B("MuiTableBody",["root"]);const $e=l=>{const{classes:o}=l;return H({root:["root"]},Me,o)},Pe=v("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(l,o)=>o.root})({display:"table-row-group"}),Ie={variant:"body"},ce="tbody",ue=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTableBody"}),{className:i,component:r=ce,...c}=s,d={...s,component:r},b=$e(d);return e.jsx(I.Provider,{value:Ie,children:e.jsx(Pe,{className:k(b.root,i),as:r,ref:t,role:r===ce?null:"rowgroup",ownerState:d,...c})})});ue.propTypes={children:a.node,classes:a.object,className:a.string,component:a.elementType,sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object])};function ze(l){return S("MuiTableCell",l)}const Ae=B("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),qe=l=>{const{classes:o,variant:t,align:s,padding:i,size:r,stickyHeader:c}=l,d={root:["root",t,c&&"stickyHeader",s!=="inherit"&&`align${R(s)}`,i!=="normal"&&`padding${R(i)}`,`size${R(r)}`]};return H(d,ze,o)},Ee=v("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(l,o)=>{const{ownerState:t}=l;return[o.root,o[t.variant],o[`size${R(t.size)}`],t.padding!=="normal"&&o[`padding${R(t.padding)}`],t.align!=="inherit"&&o[`align${R(t.align)}`],t.stickyHeader&&o.stickyHeader]}})(Q(({theme:l})=>({...l.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:l.vars?`1px solid ${l.vars.palette.TableCell.border}`:`1px solid
    ${l.palette.mode==="light"?ve(Y(l.palette.divider,1),.88):Se(Y(l.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(l.vars||l).palette.text.primary,lineHeight:l.typography.pxToRem(24),fontWeight:l.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(l.vars||l).palette.text.primary}},{props:{variant:"footer"},style:{color:(l.vars||l).palette.text.secondary,lineHeight:l.typography.pxToRem(21),fontSize:l.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${Ae.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:o})=>o.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(l.vars||l).palette.background.default}}]}))),he=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTableCell"}),{align:i="inherit",className:r,component:c,padding:d,scope:b,size:T,sortDirection:g,variant:O,...z}=s,C=m.useContext(le),M=m.useContext(I),A=M&&M.variant==="head";let $;c?$=c:$=A?"th":"td";let P=b;$==="td"?P=void 0:!P&&A&&(P="col");const X=O||M&&M.variant,Z={...s,align:i,component:$,padding:d||(C&&C.padding?C.padding:"normal"),size:T||(C&&C.size?C.size:"medium"),sortDirection:g,stickyHeader:X==="head"&&C&&C.stickyHeader,variant:X},Re=qe(Z);let oe=null;return g&&(oe=g==="asc"?"ascending":"descending"),e.jsx(Ee,{as:$,ref:t,className:k(Re.root,r),"aria-sort":oe,scope:P,ownerState:Z,...z})});he.propTypes={align:a.oneOf(["center","inherit","justify","left","right"]),children:a.node,classes:a.object,className:a.string,component:a.elementType,padding:a.oneOf(["checkbox","none","normal"]),scope:a.string,size:a.oneOfType([a.oneOf(["medium","small"]),a.string]),sortDirection:a.oneOf(["asc","desc",!1]),sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object]),variant:a.oneOfType([a.oneOf(["body","footer","head"]),a.string])};function Le(l){return S("MuiTableContainer",l)}B("MuiTableContainer",["root"]);const De=l=>{const{classes:o}=l;return H({root:["root"]},Le,o)},Fe=v("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(l,o)=>o.root})({width:"100%",overflowX:"auto"}),ye=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTableContainer"}),{className:i,component:r="div",...c}=s,d={...s,component:r},b=De(d);return e.jsx(Fe,{ref:t,as:r,className:k(b.root,i),ownerState:d,...c})});ye.propTypes={children:a.node,classes:a.object,className:a.string,component:a.elementType,sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object])};function Ue(l){return S("MuiTableFooter",l)}B("MuiTableFooter",["root"]);const We=l=>{const{classes:o}=l;return H({root:["root"]},Ue,o)},_e=v("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(l,o)=>o.root})({display:"table-footer-group"}),Ve={variant:"footer"},de="tfoot",fe=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTableFooter"}),{className:i,component:r=de,...c}=s,d={...s,component:r},b=We(d);return e.jsx(I.Provider,{value:Ve,children:e.jsx(_e,{as:r,className:k(b.root,i),ref:t,role:r===de?null:"rowgroup",ownerState:d,...c})})});fe.propTypes={children:a.node,classes:a.object,className:a.string,component:a.elementType,sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object])};function Je(l){return S("MuiTableHead",l)}B("MuiTableHead",["root"]);const Ge=l=>{const{classes:o}=l;return H({root:["root"]},Je,o)},Qe=v("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(l,o)=>o.root})({display:"table-header-group"}),Xe={variant:"head"},pe="thead",Ce=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTableHead"}),{className:i,component:r=pe,...c}=s,d={...s,component:r},b=Ge(d);return e.jsx(I.Provider,{value:Xe,children:e.jsx(Qe,{as:r,className:k(b.root,i),ref:t,role:r===pe?null:"rowgroup",ownerState:d,...c})})});Ce.propTypes={children:a.node,classes:a.object,className:a.string,component:a.elementType,sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object])};function Ze(l){return S("MuiTableRow",l)}const be=B("MuiTableRow",["root","selected","hover","head","footer"]),Ke=l=>{const{classes:o,selected:t,hover:s,head:i,footer:r}=l;return H({root:["root",t&&"selected",s&&"hover",i&&"head",r&&"footer"]},Ze,o)},Ye=v("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(l,o)=>{const{ownerState:t}=l;return[o.root,t.head&&o.head,t.footer&&o.footer]}})(Q(({theme:l})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${be.hover}:hover`]:{backgroundColor:(l.vars||l).palette.action.hover},[`&.${be.selected}`]:{backgroundColor:l.vars?`rgba(${l.vars.palette.primary.mainChannel} / ${l.vars.palette.action.selectedOpacity})`:Y(l.palette.primary.main,l.palette.action.selectedOpacity),"&:hover":{backgroundColor:l.vars?`rgba(${l.vars.palette.primary.mainChannel} / calc(${l.vars.palette.action.selectedOpacity} + ${l.vars.palette.action.hoverOpacity}))`:Y(l.palette.primary.main,l.palette.action.selectedOpacity+l.palette.action.hoverOpacity)}}}))),me="tr",xe=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTableRow"}),{className:i,component:r=me,hover:c=!1,selected:d=!1,...b}=s,T=m.useContext(I),g={...s,component:r,hover:c,selected:d,head:T&&T.variant==="head",footer:T&&T.variant==="footer"},O=Ke(g);return e.jsx(Ye,{as:r,ref:t,className:k(O.root,i),role:r===me?null:"row",ownerState:g,...b})});xe.propTypes={children:a.node,classes:a.object,className:a.string,component:a.elementType,hover:a.bool,selected:a.bool,sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object])};const el=Ne(e.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function ll(l){return S("MuiTableSortLabel",l)}const ee=B("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),al=l=>{const{classes:o,direction:t,active:s}=l,i={root:["root",s&&"active",`direction${R(t)}`],icon:["icon",`iconDirection${R(t)}`]};return H(i,ll,o)},ol=v(Be,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(l,o)=>{const{ownerState:t}=l;return[o.root,t.active&&o.active]}})(Q(({theme:l})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(l.vars||l).palette.text.secondary},"&:hover":{color:(l.vars||l).palette.text.secondary,[`& .${ee.icon}`]:{opacity:.5}},[`&.${ee.active}`]:{color:(l.vars||l).palette.text.primary,[`& .${ee.icon}`]:{opacity:1,color:(l.vars||l).palette.text.secondary}}}))),nl=v("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(l,o)=>{const{ownerState:t}=l;return[o.icon,o[`iconDirection${R(t.direction)}`]]}})(Q(({theme:l})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:l.transitions.create(["opacity","transform"],{duration:l.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),K=m.forwardRef(function(o,t){const s=N({props:o,name:"MuiTableSortLabel"}),{active:i=!1,children:r,className:c,direction:d="asc",hideSortIcon:b=!1,IconComponent:T=el,slots:g={},slotProps:O={},...z}=s,C={...s,active:i,direction:d,hideSortIcon:b,IconComponent:T},M=al(C),A={slots:g,slotProps:O},[$,P]=re("root",{elementType:ol,externalForwardedProps:A,ownerState:C,className:k(M.root,c),ref:t}),[X,Z]=re("icon",{elementType:nl,externalForwardedProps:A,ownerState:C,className:M.icon});return e.jsxs($,{disableRipple:!0,component:"span",...P,...z,children:[r,b&&!i?null:e.jsx(X,{as:T,...Z})]})});K.propTypes={active:a.bool,children:a.node,classes:a.object,className:a.string,direction:a.oneOf(["asc","desc"]),hideSortIcon:a.bool,IconComponent:a.elementType,slotProps:a.shape({icon:a.oneOfType([a.func,a.object]),root:a.oneOfType([a.func,a.object])}),slots:a.shape({icon:a.elementType,root:a.elementType}),sx:a.oneOfType([a.arrayOf(a.oneOfType([a.func,a.object,a.bool])),a.func,a.object])};const ge=j.forwardRef(({children:l,size:o="medium",stickyHeader:t=!1,padding:s="normal",...i},r)=>e.jsx(Te,{ref:r,size:o,stickyHeader:t,padding:s,...i,children:l})),h=j.memo(ge);h.displayName="Table";const x=j.forwardRef(({children:l,...o},t)=>e.jsx(ye,{ref:t,...o,children:l}));x.displayName="TableContainer";const y=j.forwardRef(({children:l,...o},t)=>e.jsx(Ce,{ref:t,...o,children:l}));y.displayName="TableHead";const f=j.forwardRef(({children:l,...o},t)=>e.jsx(ue,{ref:t,...o,children:l}));f.displayName="TableBody";const ae=j.forwardRef(({children:l,...o},t)=>e.jsx(fe,{ref:t,...o,children:l}));ae.displayName="TableFooter";const je=j.forwardRef(({children:l,selected:o=!1,hover:t=!1,...s},i)=>e.jsx(xe,{ref:i,selected:o,hover:t,...s,children:l})),p=j.memo(je);p.displayName="TableRow";const we=j.forwardRef(({children:l,align:o="left",padding:t="normal",size:s="medium",variant:i,colSpan:r,rowSpan:c,sortDirection:d,...b},T)=>e.jsx(he,{ref:T,align:o,padding:t,size:s,variant:i,colSpan:r,rowSpan:c,sortDirection:d,...b,children:l})),n=j.memo(we);n.displayName="TableCell";ge.__docgenInfo={description:`Table component for displaying tabular data

Memoized for performance with large datasets.
Re-renders only when props change.`,methods:[],displayName:"TableBase",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table (typically TableHead, TableBody, TableFooter)"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the table
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:`If true, the table will take up the full width of its container
@default false`,defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'normal' | 'checkbox' | 'none'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'none'"}]},description:`Set the table padding
@default 'normal'`,defaultValue:{value:"'normal'",computed:!1}}},composes:["MuiTableProps"]};x.__docgenInfo={description:"TableContainer component - wrapper for Table with scroll support",methods:[],displayName:"TableContainer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the container (typically a Table)"},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node"}},composes:["MuiTableContainerProps"]};y.__docgenInfo={description:"TableHead component - table header section",methods:[],displayName:"TableHead",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table head (typically TableRow with TableCell)"}},composes:["MuiTableHeadProps"]};f.__docgenInfo={description:"TableBody component - table body section",methods:[],displayName:"TableBody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table body (typically TableRow elements)"}},composes:["MuiTableBodyProps"]};ae.__docgenInfo={description:"TableFooter component - table footer section",methods:[],displayName:"TableFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the table footer (typically TableRow)"}},composes:["MuiTableFooterProps"]};je.__docgenInfo={description:`TableRow component - row in a table

Memoized to prevent unnecessary re-renders in large tables.`,methods:[],displayName:"TableRowBase",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the row (typically TableCell elements)"},selected:{required:!1,tsType:{name:"boolean"},description:`If true, the row will be selected
@default false`,defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:`If true, the row will have hover effect
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiTableRowProps"]};we.__docgenInfo={description:`TableCell component - cell in a table row

Memoized to optimize rendering of large tables with many cells.`,methods:[],displayName:"TableCellBase",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the cell"},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify' | 'inherit'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"},{name:"literal",value:"'inherit'"}]},description:`Set the text alignment
@default 'left'`,defaultValue:{value:"'left'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'normal' | 'checkbox' | 'none'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'none'"}]},description:`Set the padding
@default 'normal'`,defaultValue:{value:"'normal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`Set the size
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'head' | 'body' | 'footer'",elements:[{name:"literal",value:"'head'"},{name:"literal",value:"'body'"},{name:"literal",value:"'footer'"}]},description:"Set the scope attribute"},colSpan:{required:!1,tsType:{name:"number"},description:"Set the number of columns a cell should span"},rowSpan:{required:!1,tsType:{name:"number"},description:"Set the number of rows a cell should span"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | false",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"false"}]},description:"Set aria-sort for sortable columns"}},composes:["MuiTableCellProps"]};const Hl={title:"Molecules/Table",component:h,parameters:{layout:"centered",docs:{description:{component:"Tables display sets of data. They can be fully customized and include features like sorting, filtering, and pagination."}}},tags:["autodocs"]},u=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Editor"},{id:4,name:"Alice Williams",email:"alice@example.com",role:"User"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"Admin"}],q={render:()=>e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(f,{children:u.map(l=>e.jsxs(p,{children:[e.jsx(n,{children:l.name}),e.jsx(n,{children:l.email}),e.jsx(n,{children:l.role})]},l.id))})]})})},E={render:()=>e.jsx(x,{component:w,children:e.jsxs(h,{size:"small",children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(f,{children:u.map(l=>e.jsxs(p,{children:[e.jsx(n,{children:l.name}),e.jsx(n,{children:l.email}),e.jsx(n,{children:l.role})]},l.id))})]})})},L={render:()=>e.jsx(x,{component:w,sx:{maxHeight:300},children:e.jsxs(h,{stickyHeader:!0,children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(f,{children:[...u,...u,...u].map((l,o)=>e.jsxs(p,{children:[e.jsx(n,{children:l.name}),e.jsx(n,{children:l.email}),e.jsx(n,{children:l.role})]},o))})]})})},D={render:()=>e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(f,{children:u.map(l=>e.jsxs(p,{hover:!0,children:[e.jsx(n,{children:l.name}),e.jsx(n,{children:l.email}),e.jsx(n,{children:l.role})]},l.id))})]})})},F={render:()=>{const[l,o]=m.useState([]),t=i=>{i.target.checked?o(u.map(r=>r.id)):o([])},s=i=>{const r=l.indexOf(i);let c=[];r===-1?c=c.concat(l,i):r===0?c=c.concat(l.slice(1)):r===l.length-1?c=c.concat(l.slice(0,-1)):r>0&&(c=c.concat(l.slice(0,r),l.slice(r+1))),o(c)};return e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{padding:"checkbox",children:e.jsx(te,{checked:l.length===u.length,indeterminate:l.length>0&&l.length<u.length,onChange:t})}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(f,{children:u.map(i=>{const r=l.indexOf(i.id)!==-1;return e.jsxs(p,{hover:!0,selected:r,onClick:()=>s(i.id),sx:{cursor:"pointer"},children:[e.jsx(n,{padding:"checkbox",children:e.jsx(te,{checked:r})}),e.jsx(n,{children:i.name}),e.jsx(n,{children:i.email}),e.jsx(n,{children:i.role})]},i.id)})})]})})}},U={render:()=>{const[l,o]=m.useState("asc"),[t,s]=m.useState("name"),i=c=>{o(t===c&&l==="asc"?"desc":"asc"),s(c)},r=[...u].sort((c,d)=>l==="asc"?c[t]<d[t]?-1:1:c[t]>d[t]?-1:1);return e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(K,{active:t==="name",direction:t==="name"?l:"asc",onClick:()=>i("name"),children:"Name"})}),e.jsx(n,{children:e.jsx(K,{active:t==="email",direction:t==="email"?l:"asc",onClick:()=>i("email"),children:"Email"})}),e.jsx(n,{children:e.jsx(K,{active:t==="role",direction:t==="role"?l:"asc",onClick:()=>i("role"),children:"Role"})})]})}),e.jsx(f,{children:r.map(c=>e.jsxs(p,{hover:!0,children:[e.jsx(n,{children:c.name}),e.jsx(n,{children:c.email}),e.jsx(n,{children:c.role})]},c.id))})]})})}},W={render:()=>e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"}),e.jsx(n,{align:"right",children:"Actions"})]})}),e.jsx(f,{children:u.map(l=>e.jsxs(p,{hover:!0,children:[e.jsx(n,{children:l.name}),e.jsx(n,{children:l.email}),e.jsx(n,{children:l.role}),e.jsxs(n,{align:"right",children:[e.jsx(se,{size:"small",color:"primary",children:e.jsx(ne,{icon:"edit",size:"small"})}),e.jsx(se,{size:"small",color:"error",children:e.jsx(ne,{icon:"delete",size:"small"})})]})]},l.id))})]})})},_={render:()=>{const l=[{item:"Product A",quantity:10,price:50,total:500},{item:"Product B",quantity:5,price:100,total:500},{item:"Product C",quantity:8,price:75,total:600}],o=l.reduce((t,s)=>t+s.total,0);return e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Item"}),e.jsx(n,{align:"right",children:"Quantity"}),e.jsx(n,{align:"right",children:"Price"}),e.jsx(n,{align:"right",children:"Total"})]})}),e.jsx(f,{children:l.map((t,s)=>e.jsxs(p,{children:[e.jsx(n,{children:t.item}),e.jsx(n,{align:"right",children:t.quantity}),e.jsxs(n,{align:"right",children:["$",t.price]}),e.jsxs(n,{align:"right",children:["$",t.total]})]},s))}),e.jsx(ae,{children:e.jsxs(p,{children:[e.jsx(n,{colSpan:3,align:"right",children:e.jsx("strong",{children:"Grand Total:"})}),e.jsx(n,{align:"right",children:e.jsxs("strong",{children:["$",o]})})]})})]})})}},V={render:()=>e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsxs(y,{children:[e.jsxs(p,{children:[e.jsx(n,{colSpan:2,align:"center",children:"Personal Info"}),e.jsx(n,{colSpan:2,align:"center",children:"Contact"})]}),e.jsxs(p,{children:[e.jsx(n,{children:"First Name"}),e.jsx(n,{children:"Last Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Phone"})]})]}),e.jsxs(f,{children:[e.jsxs(p,{children:[e.jsx(n,{children:"John"}),e.jsx(n,{children:"Doe"}),e.jsx(n,{children:"john@example.com"}),e.jsx(n,{children:"555-1234"})]}),e.jsxs(p,{children:[e.jsx(n,{children:"Jane"}),e.jsx(n,{children:"Smith"}),e.jsx(n,{children:"jane@example.com"}),e.jsx(n,{children:"555-5678"})]})]})]})})},J={render:()=>e.jsx(x,{component:w,children:e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{align:"left",children:"Left Aligned"}),e.jsx(n,{align:"center",children:"Center Aligned"}),e.jsx(n,{align:"right",children:"Right Aligned"})]})}),e.jsx(f,{children:[1,2,3].map(l=>e.jsxs(p,{children:[e.jsxs(n,{align:"left",children:["Row ",l]}),e.jsxs(n,{align:"center",children:["Data ",l]}),e.jsxs(n,{align:"right",children:["$",l*100]})]},l))})]})})},G={render:()=>e.jsxs(h,{children:[e.jsx(y,{children:e.jsxs(p,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(f,{children:u.slice(0,3).map(l=>e.jsxs(p,{children:[e.jsx(n,{children:l.name}),e.jsx(n,{children:l.email}),e.jsx(n,{children:l.role})]},l.id))})]})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:"Default Table with basic structure",...q.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Dense table (smaller padding)",...E.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Table with sticky header (scrollable)",...L.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Table with hover effect",...D.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Table with selectable rows",...F.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"Table with sortable columns",...U.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Table with actions",...W.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"Table with footer",..._.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"Table with colspan and rowspan",...V.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"Table with alignment options",...J.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:"Without TableContainer (no Paper wrapper)",...G.parameters?.docs?.description}}};const Ol=["Default","Dense","StickyHeader","WithHover","Selectable","Sortable","WithActions","WithFooter","WithSpans","WithAlignment","WithoutContainer"];export{q as Default,E as Dense,F as Selectable,U as Sortable,L as StickyHeader,W as WithActions,J as WithAlignment,_ as WithFooter,D as WithHover,V as WithSpans,G as WithoutContainer,Ol as __namedExportsOrder,Hl as default};
