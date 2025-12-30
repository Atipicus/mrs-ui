import{r as x,u as K,j as o,R as F}from"./iframe-gZtTO8GF.js";import{b as J,g as X,c as V,s as f,a as Z,m as w}from"./memoTheme-DXIofXOq.js";import{u as v}from"./useSlot-B4JOn_ZD.js";import{u as xo}from"./useControlled-BS-n9Xne.js";import{C as go}from"./Collapse-DQh3hDQT.js";import{P as Ao}from"./Paper-QqUT8uNK.js";import{B as fo}from"./ButtonBase-CmgGEP9G.js";import{T as n}from"./Typography-Cpbzxi6Z.js";import{B as O}from"./Button-C4Rltp47.js";import{M as d}from"./MaterialSymbol-LwgaKelf.js";import{S as co}from"./Stack-DrmAaOvE.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-BMSf_3UK.js";import"./useForkRef-B0PKJ5yw.js";import"./useTheme-CKQkYvCl.js";import"./utils-Dk-_s8jP.js";import"./index-DzARVlfZ.js";import"./index-DK8gcBhr.js";import"./useEventCallback-BYIpU12S.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-BC_hpnXQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Button-K1Jba8Wa.js";import"./CircularProgress-CSM3WC29.js";import"./Box-CkQ7KSea.js";import"./styled-C-v2h_2o.js";import"./useThemeProps-rTC1mdVC.js";const io=x.createContext({});function bo(e){return X("MuiAccordion",e)}const Q=J("MuiAccordion",["root","heading","rounded","expanded","disabled","gutters","region"]),jo=e=>{const{classes:r,square:a,expanded:t,disabled:l,disableGutters:p}=e;return Z({root:["root",!a&&"rounded",t&&"expanded",l&&"disabled",!p&&"gutters"],heading:["heading"],region:["region"]},bo,r)},To=f(Ao,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[{[`& .${Q.region}`]:r.region},r.root,!a.square&&r.rounded,!a.disableGutters&&r.gutters]}})(w(({theme:e})=>{const r={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],r),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${Q.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${Q.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),w(({theme:e})=>({variants:[{props:r=>!r.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:r=>!r.disableGutters,style:{[`&.${Q.expanded}`]:{margin:"16px 0"}}}]}))),So=f("h3",{name:"MuiAccordion",slot:"Heading",overridesResolver:(e,r)=>r.heading})({all:"unset"}),vo=x.forwardRef(function(r,a){const t=K({props:r,name:"MuiAccordion"}),{children:l,className:p,defaultExpanded:u=!1,disabled:m=!1,disableGutters:h=!1,expanded:I,onChange:C,square:L=!1,slots:z={},slotProps:eo={},TransitionComponent:H,TransitionProps:Y,...no}=t,[y,g]=xo({controlled:I,default:u,name:"Accordion",state:"expanded"}),b=x.useCallback(ho=>{g(!y),C&&C(ho,!y)},[y,C,g]),[D,...ro]=x.Children.toArray(l),ao=x.useMemo(()=>({expanded:y,disabled:m,disableGutters:h,toggle:b}),[y,m,h,b]),j={...t,square:L,disabled:m,disableGutters:h,expanded:y},R=jo(j),so={transition:H,...z},A={transition:Y,...eo},T={slots:so,slotProps:A},[to,lo]=v("root",{elementType:To,externalForwardedProps:{...T,...no},className:V(R.root,p),shouldForwardComponentProp:!0,ownerState:j,ref:a,additionalProps:{square:L}}),[po,uo]=v("heading",{elementType:So,externalForwardedProps:T,className:R.heading,ownerState:j}),[mo,yo]=v("transition",{elementType:go,externalForwardedProps:T,ownerState:j});return o.jsxs(to,{...lo,children:[o.jsx(po,{...uo,children:o.jsx(io.Provider,{value:ao,children:D})}),o.jsx(mo,{in:y,timeout:"auto",...yo,children:o.jsx("div",{"aria-labelledby":D.props.id,id:D.props["aria-controls"],role:"region",className:R.region,children:ro})})]})});function wo(e){return X("MuiAccordionActions",e)}J("MuiAccordionActions",["root","spacing"]);const Io=e=>{const{classes:r,disableSpacing:a}=e;return Z({root:["root",!a&&"spacing"]},wo,r)},Co=f("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,!a.disableSpacing&&r.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",variants:[{props:e=>!e.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Do=x.forwardRef(function(r,a){const t=K({props:r,name:"MuiAccordionActions"}),{className:l,disableSpacing:p=!1,...u}=t,m={...t,disableSpacing:p},h=Io(m);return o.jsx(Co,{className:V(h.root,l),ref:a,ownerState:m,...u})});function Ro(e){return X("MuiAccordionDetails",e)}J("MuiAccordionDetails",["root"]);const _o=e=>{const{classes:r}=e;return Z({root:["root"]},Ro,r)},No=f("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,r)=>r.root})(w(({theme:e})=>({padding:e.spacing(1,2,2)}))),Mo=x.forwardRef(function(r,a){const t=K({props:r,name:"MuiAccordionDetails"}),{className:l,...p}=t,u=t,m=_o(u);return o.jsx(No,{className:V(m.root,l),ref:a,ownerState:u,...p})});function Po(e){return X("MuiAccordionSummary",e)}const S=J("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),ko=e=>{const{classes:r,expanded:a,disabled:t,disableGutters:l}=e;return Z({root:["root",a&&"expanded",t&&"disabled",!l&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!l&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]},Po,r)},qo=f(fo,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,r)=>r.root})(w(({theme:e})=>{const r={duration:e.transitions.duration.shortest};return{display:"flex",width:"100%",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],r),[`&.${S.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${S.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${S.disabled})`]:{cursor:"pointer"},variants:[{props:a=>!a.disableGutters,style:{[`&.${S.expanded}`]:{minHeight:64}}}]}})),Eo=f("span",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,r)=>r.content})(w(({theme:e})=>({display:"flex",textAlign:"start",flexGrow:1,margin:"12px 0",variants:[{props:r=>!r.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${S.expanded}`]:{margin:"20px 0"}}}]}))),Go=f("span",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,r)=>r.expandIconWrapper})(w(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${S.expanded}`]:{transform:"rotate(180deg)"}}))),Bo=x.forwardRef(function(r,a){const t=K({props:r,name:"MuiAccordionSummary"}),{children:l,className:p,expandIcon:u,focusVisibleClassName:m,onClick:h,slots:I,slotProps:C,...L}=t,{disabled:z=!1,disableGutters:eo,expanded:H,toggle:Y}=x.useContext(io),no=A=>{Y&&Y(A),h&&h(A)},y={...t,expanded:H,disabled:z,disableGutters:eo},g=ko(y),b={slots:I,slotProps:C},[D,ro]=v("root",{ref:a,shouldForwardComponentProp:!0,className:V(g.root,p),elementType:qo,externalForwardedProps:{...b,...L},ownerState:y,additionalProps:{focusRipple:!1,disableRipple:!0,disabled:z,"aria-expanded":H,focusVisibleClassName:V(g.focusVisible,m)},getSlotProps:A=>({...A,onClick:T=>{A.onClick?.(T),no(T)}})}),[ao,j]=v("content",{className:g.content,elementType:Eo,externalForwardedProps:b,ownerState:y}),[R,so]=v("expandIconWrapper",{className:g.expandIconWrapper,elementType:Go,externalForwardedProps:b,ownerState:y});return o.jsxs(D,{...ro,children:[o.jsx(ao,{...j,children:l}),u&&o.jsx(R,{...so,children:u})]})}),s=F.forwardRef(({children:e,defaultExpanded:r=!1,disabled:a=!1,disableGutters:t=!1,expanded:l,onChange:p,square:u=!1,sx:m,...h},I)=>o.jsx(vo,{ref:I,defaultExpanded:r,disabled:a,disableGutters:t,expanded:l,onChange:p,square:u,sx:{...m},...h,children:e}));s.displayName="Accordion";s.__docgenInfo={description:`Accordion component

Accordions are commonly used for FAQ sections, settings panels, or anywhere
you need to progressively disclose information.

@param props - Accordion component props
@returns Accordion component`,methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},description:`The content of the accordion.
Required - must include AccordionSummary and typically AccordionDetails.`},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:`If true, expands the accordion by default.
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the component is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disableGutters:{required:!1,tsType:{name:"boolean"},description:`If true, removes the margin between the top and bottom of the expanded accordion.
@default false`,defaultValue:{value:"false",computed:!1}},expanded:{required:!1,tsType:{name:"boolean"},description:`If true, expands the accordion, otherwise collapse it.
Setting this prop enables control over the accordion.`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, expanded: boolean) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:`Callback fired when the expand/collapse state is changed.

@param {React.SyntheticEvent} event The event source of the callback.
@param {boolean} expanded The expanded state of the accordion.`},square:{required:!1,tsType:{name:"boolean"},description:`If true, rounded corners are disabled.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const c=F.forwardRef(({children:e,expandIcon:r,focusVisibleClassName:a,sx:t,...l},p)=>o.jsx(Bo,{ref:p,expandIcon:r,focusVisibleClassName:a,sx:{...t},...l,children:e}));c.displayName="AccordionSummary";c.__docgenInfo={description:`AccordionSummary component

The summary acts as the header for the accordion and controls the expand/collapse behavior.
It typically contains a title and an expand icon.

@param props - AccordionSummary component props
@returns AccordionSummary component`,methods:[],displayName:"AccordionSummary",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},expandIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display as the expand indicator."},focusVisibleClassName:{required:!1,tsType:{name:"string"},description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the CSS :focus-visible selector.`}},composes:["MuiAccordionSummaryProps"]};const i=F.forwardRef(({children:e,sx:r,...a},t)=>o.jsx(Mo,{ref:t,sx:{...r},...a,children:e}));i.displayName="AccordionDetails";i.__docgenInfo={description:`AccordionDetails component

Contains the content that is revealed when the accordion is expanded.
This component is wrapped in a Collapse transition.

@param props - AccordionDetails component props
@returns AccordionDetails component`,methods:[],displayName:"AccordionDetails",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."}},composes:["MuiAccordionDetailsProps"]};const oo=F.forwardRef(({children:e,disableSpacing:r=!1,sx:a,...t},l)=>o.jsx(Do,{ref:l,disableSpacing:r,sx:{...a},...t,children:e}));oo.displayName="AccordionActions";oo.__docgenInfo={description:`AccordionActions component

Provides an area for action buttons within an accordion.
Typically placed at the bottom of AccordionDetails.

@param props - AccordionActions component props
@returns AccordionActions component`,methods:[],displayName:"AccordionActions",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},disableSpacing:{required:!1,tsType:{name:"boolean"},description:`If true, the actions do not have additional margin.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiAccordionActionsProps"]};const ue={title:"Molecules/Accordion",component:s,tags:["autodocs"],argTypes:{defaultExpanded:{control:"boolean"},disabled:{control:"boolean"},disableGutters:{control:"boolean"},expanded:{control:"boolean"},square:{control:"boolean"}},args:{defaultExpanded:!1,disabled:!1,disableGutters:!1,square:!1}},_={render:e=>o.jsxs(s,{...e,children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Accordion Title"})}),o.jsx(i,{children:o.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})},N={render:()=>o.jsxs("div",{children:[o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Accordion 1"})}),o.jsx(i,{children:o.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Accordion 2"})}),o.jsx(i,{children:o.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Accordion 3"})}),o.jsx(i,{children:o.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},M={render:()=>{const[e,r]=F.useState("panel1"),a=t=>(l,p)=>{r(p?t:!1)};return o.jsxs("div",{children:[o.jsxs(s,{expanded:e==="panel1",onChange:a("panel1"),children:[o.jsxs(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:[o.jsx(n,{sx:{width:"33%",flexShrink:0},children:"General settings"}),o.jsx(n,{sx:{color:"text.secondary"},children:"I am an accordion"})]}),o.jsx(i,{children:o.jsx(n,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),o.jsxs(s,{expanded:e==="panel2",onChange:a("panel2"),children:[o.jsxs(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:[o.jsx(n,{sx:{width:"33%",flexShrink:0},children:"Users"}),o.jsx(n,{sx:{color:"text.secondary"},children:"You are currently not an owner"})]}),o.jsx(i,{children:o.jsx(n,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),o.jsxs(s,{expanded:e==="panel3",onChange:a("panel3"),children:[o.jsxs(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:[o.jsx(n,{sx:{width:"33%",flexShrink:0},children:"Advanced settings"}),o.jsx(n,{sx:{color:"text.secondary"},children:"Filtering has been entirely disabled for whole web server"})]}),o.jsx(i,{children:o.jsx(n,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}},P={render:()=>o.jsxs("div",{children:[o.jsxs(s,{defaultExpanded:!0,children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Expanded by Default"})}),o.jsx(i,{children:o.jsx(n,{children:"This accordion is expanded by default using the defaultExpanded prop."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Collapsed by Default"})}),o.jsx(i,{children:o.jsx(n,{children:"This accordion is collapsed by default."})})]})]})},k={render:()=>o.jsxs("div",{children:[o.jsxs(s,{disabled:!0,children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Disabled Accordion"})}),o.jsx(i,{children:o.jsx(n,{children:"This content cannot be accessed because the accordion is disabled."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Enabled Accordion"})}),o.jsx(i,{children:o.jsx(n,{children:"This accordion is enabled and can be interacted with."})})]})]})},q={render:()=>o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Accordion with Actions"})}),o.jsx(i,{children:o.jsx(n,{children:"This accordion includes action buttons at the bottom using AccordionActions component."})}),o.jsxs(oo,{children:[o.jsx(O,{size:"small",children:"Cancel"}),o.jsx(O,{size:"small",variant:"contained",children:"Save"})]})]})},E={render:()=>o.jsxs(co,{spacing:0,children:[o.jsxs(s,{disableGutters:!0,children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"No Gutters - Accordion 1"})}),o.jsx(i,{children:o.jsx(n,{children:"The disableGutters prop removes the margin between accordions, creating a seamless list."})})]}),o.jsxs(s,{disableGutters:!0,children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"No Gutters - Accordion 2"})}),o.jsx(i,{children:o.jsx(n,{children:"Notice there's no gap between this and the previous accordion."})})]}),o.jsxs(s,{disableGutters:!0,children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"No Gutters - Accordion 3"})}),o.jsx(i,{children:o.jsx(n,{children:"This creates a more compact, list-like appearance."})})]})]})},G={render:()=>o.jsxs("div",{children:[o.jsxs(s,{square:!0,children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Square Corners"})}),o.jsx(i,{children:o.jsx(n,{children:"The square prop removes the border radius for sharp corners instead of rounded."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Rounded Corners (Default)"})}),o.jsx(i,{children:o.jsx(n,{children:"This accordion has the default rounded corners."})})]})]})},B={render:()=>o.jsxs("div",{children:[o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"arrow_drop_down"}),children:o.jsx(n,{children:"Arrow Drop Down Icon"})}),o.jsx(i,{children:o.jsx(n,{children:"Using arrow_drop_down icon for expand indicator."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"add"}),children:o.jsx(n,{children:"Plus/Minus Icon"})}),o.jsx(i,{children:o.jsx(n,{children:"Using add icon (becomes remove when expanded)."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"keyboard_arrow_down"}),children:o.jsx(n,{children:"Keyboard Arrow Down"})}),o.jsx(i,{children:o.jsx(n,{children:"Using keyboard_arrow_down icon for a different style."})})]})]})},W={render:()=>o.jsxs(s,{children:[o.jsx(c,{children:o.jsx(n,{children:"No Expand Icon"})}),o.jsx(i,{children:o.jsx(n,{children:"This accordion has no expand icon. It can still be expanded by clicking the summary area."})})]})},U={render:()=>o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{variant:"h6",children:"FAQ: Getting Started"})}),o.jsx(i,{children:o.jsxs(co,{spacing:2,children:[o.jsx(n,{variant:"subtitle1",fontWeight:"medium",children:"How do I create an account?"}),o.jsx(n,{variant:"body2",color:"text.secondary",children:'To create an account, click the "Sign Up" button in the top right corner and follow the registration process.'}),o.jsx(n,{variant:"subtitle1",fontWeight:"medium",children:"What payment methods do you accept?"}),o.jsx(n,{variant:"body2",color:"text.secondary",children:"We accept all major credit cards, PayPal, and bank transfers for enterprise customers."}),o.jsx(n,{variant:"subtitle1",fontWeight:"medium",children:"Can I cancel my subscription?"}),o.jsx(n,{variant:"body2",color:"text.secondary",children:"Yes, you can cancel your subscription at any time from your account settings. You'll retain access until the end of your billing period."})]})}),o.jsxs(oo,{children:[o.jsx(O,{size:"small",children:"More FAQs"}),o.jsx(O,{size:"small",variant:"contained",children:"Contact Support"})]})]})},$={render:()=>o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Parent Accordion"})}),o.jsx(i,{children:o.jsxs(co,{spacing:1,children:[o.jsx(n,{children:"This accordion contains nested accordions:"}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Child Accordion 1"})}),o.jsx(i,{children:o.jsx(n,{children:"Content of the first child accordion."})})]}),o.jsxs(s,{children:[o.jsx(c,{expandIcon:o.jsx(d,{icon:"expand_more"}),children:o.jsx(n,{children:"Child Accordion 2"})}),o.jsx(i,{children:o.jsx(n,{children:"Content of the second child accordion."})})]})]})})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography>Accordion Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
}`,..._.parameters?.docs?.source},description:{story:"Interactive playground for Accordion component",..._.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
}`,...N.parameters?.docs?.source},description:{story:"Basic accordion group",...N.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    return <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
            <Typography sx={{
            width: '33%',
            flexShrink: 0
          }}>General settings</Typography>
            <Typography sx={{
            color: 'text.secondary'
          }}>I am an accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
            <Typography sx={{
            width: '33%',
            flexShrink: 0
          }}>Users</Typography>
            <Typography sx={{
            color: 'text.secondary'
          }}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
            <Typography sx={{
            width: '33%',
            flexShrink: 0
          }}>Advanced settings</Typography>
            <Typography sx={{
            color: 'text.secondary'
          }}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Controlled accordion with state management",...M.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Expanded by Default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This accordion is expanded by default using the defaultExpanded prop.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Collapsed by Default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This accordion is collapsed by default.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
}`,...P.parameters?.docs?.source},description:{story:"Accordion with default expanded state",...P.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion disabled>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This content cannot be accessed because the accordion is disabled.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Enabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This accordion is enabled and can be interacted with.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
}`,...k.parameters?.docs?.source},description:{story:"Disabled accordion",...k.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography>Accordion with Actions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This accordion includes action buttons at the bottom using AccordionActions component.
        </Typography>
      </AccordionDetails>
      <AccordionActions>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained">
          Save
        </Button>
      </AccordionActions>
    </Accordion>
}`,...q.parameters?.docs?.source},description:{story:"Accordion with actions",...q.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={0}>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>No Gutters - Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The disableGutters prop removes the margin between accordions, creating a seamless list.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>No Gutters - Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Notice there's no gap between this and the previous accordion.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>No Gutters - Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This creates a more compact, list-like appearance.</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
}`,...E.parameters?.docs?.source},description:{story:"Accordion without gutters",...E.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion square>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Square Corners</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The square prop removes the border radius for sharp corners instead of rounded.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Rounded Corners (Default)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This accordion has the default rounded corners.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
}`,...G.parameters?.docs?.source},description:{story:"Square corners (no border radius)",...G.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="arrow_drop_down" />}>
          <Typography>Arrow Drop Down Icon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Using arrow_drop_down icon for expand indicator.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="add" />}>
          <Typography>Plus/Minus Icon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Using add icon (becomes remove when expanded).</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="keyboard_arrow_down" />}>
          <Typography>Keyboard Arrow Down</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Using keyboard_arrow_down icon for a different style.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
}`,...B.parameters?.docs?.source},description:{story:"Custom expand icons",...B.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion>
      <AccordionSummary>
        <Typography>No Expand Icon</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This accordion has no expand icon. It can still be expanded by clicking the summary area.
        </Typography>
      </AccordionDetails>
    </Accordion>
}`,...W.parameters?.docs?.source},description:{story:"Accordion without expand icon",...W.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography variant="h6">FAQ: Getting Started</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <Typography variant="subtitle1" fontWeight="medium">
            How do I create an account?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            To create an account, click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Typography>

          <Typography variant="subtitle1" fontWeight="medium">
            What payment methods do you accept?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
          </Typography>

          <Typography variant="subtitle1" fontWeight="medium">
            Can I cancel my subscription?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yes, you can cancel your subscription at any time from your account settings. You'll
            retain access until the end of your billing period.
          </Typography>
        </Stack>
      </AccordionDetails>
      <AccordionActions>
        <Button size="small">More FAQs</Button>
        <Button size="small" variant="contained">
          Contact Support
        </Button>
      </AccordionActions>
    </Accordion>
}`,...U.parameters?.docs?.source},description:{story:"Complex accordion with rich content",...U.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography>Parent Accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>
          <Typography>This accordion contains nested accordions:</Typography>

          <Accordion>
            <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
              <Typography>Child Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Content of the first child accordion.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
              <Typography>Child Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Content of the second child accordion.</Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </AccordionDetails>
    </Accordion>
}`,...$.parameters?.docs?.source},description:{story:"Nested accordions",...$.parameters?.docs?.description}}};const me=["Playground","BasicAccordion","ControlledAccordion","DefaultExpanded","DisabledAccordion","WithActions","NoGutters","SquareCorners","CustomExpandIcons","NoExpandIcon","ComplexContent","NestedAccordions"];export{N as BasicAccordion,U as ComplexContent,M as ControlledAccordion,B as CustomExpandIcons,P as DefaultExpanded,k as DisabledAccordion,$ as NestedAccordions,W as NoExpandIcon,E as NoGutters,_ as Playground,G as SquareCorners,q as WithActions,me as __namedExportsOrder,ue as default};
