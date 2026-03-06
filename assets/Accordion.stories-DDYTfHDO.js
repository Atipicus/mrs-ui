import{g as E,r as k,a as G,j as e,P as p,R as D}from"./iframe-m0FcCUbT.js";import{A as P,a as U,b as B}from"./AccordionSummary-s8dvM3B6.js";import{g as W,c as L,a as z,s as F}from"./memoTheme-C11nCEJ1.js";import{T as o}from"./Typography-CkHBM8H0.js";import{B as w}from"./Button-Cu9UkBT5.js";import{M as c}from"./MaterialSymbol-DOQyWWmo.js";import{S as R}from"./Stack-DLDfFx0e.js";import"./preload-helper-PPVm8Dsz.js";import"./useSlot-BPbjla4P.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useForkRef-DeUHlcp-.js";import"./useControlled-Cm6cFOSH.js";import"./Collapse-CLX8PkYR.js";import"./useTheme--qrtAMJV.js";import"./utils-e4gBpPL7.js";import"./ButtonBase-Bd5szlVj.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./index-CMwIBjt_.js";import"./index-DWLUMx4m.js";import"./Paper-BQ8rpTFt.js";import"./integerPropType-DVPNO1YA.js";import"./Typography-BAhyjZNg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./theme-helpers-CoFoCxtx.js";import"./Button-CJ6MgozL.js";import"./CircularProgress-nywBWFjt.js";import"./Box-DSq61m1Q.js";import"./useThemeProps-OFH6wkZ1.js";function V(i){return E("MuiAccordionActions",i)}W("MuiAccordionActions",["root","spacing"]);const Y=i=>{const{classes:d,disableSpacing:s}=i;return z({root:["root",!s&&"spacing"]},V,d)},O=F("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(i,d)=>{const{ownerState:s}=i;return[d.root,!s.disableSpacing&&d.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",variants:[{props:i=>!i.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),M=k.forwardRef(function(d,s){const t=G({props:d,name:"MuiAccordionActions"}),{className:l,disableSpacing:m=!1,...C}=t,I={...t,disableSpacing:m},N=Y(I);return e.jsx(O,{className:L(N.root,l),ref:s,ownerState:I,...C})});M.propTypes={children:p.node,classes:p.object,className:p.string,disableSpacing:p.bool,sx:p.oneOfType([p.arrayOf(p.oneOfType([p.func,p.object,p.bool])),p.func,p.object])};const n=D.forwardRef(({children:i,defaultExpanded:d=!1,disabled:s=!1,disableGutters:t=!1,expanded:l,onChange:m,square:C=!1,sx:I,...N},q)=>e.jsx(P,{ref:q,defaultExpanded:d,disabled:s,disableGutters:t,expanded:l,onChange:m,square:C,sx:{...I},...N,children:i}));n.displayName="Accordion";n.__docgenInfo={description:`Accordion component

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
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const r=D.forwardRef(({children:i,expandIcon:d,focusVisibleClassName:s,sx:t,...l},m)=>e.jsx(U,{ref:m,expandIcon:d,focusVisibleClassName:s,sx:{...t},...l,children:i}));r.displayName="AccordionSummary";r.__docgenInfo={description:`AccordionSummary component

The summary acts as the header for the accordion and controls the expand/collapse behavior.
It typically contains a title and an expand icon.

@param props - AccordionSummary component props
@returns AccordionSummary component`,methods:[],displayName:"AccordionSummary",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},expandIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display as the expand indicator."},focusVisibleClassName:{required:!1,tsType:{name:"string"},description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the CSS :focus-visible selector.`}},composes:["MuiAccordionSummaryProps"]};const a=D.forwardRef(({children:i,sx:d,...s},t)=>e.jsx(B,{ref:t,sx:{...d},...s,children:i}));a.displayName="AccordionDetails";a.__docgenInfo={description:`AccordionDetails component

Contains the content that is revealed when the accordion is expanded.
This component is wrapped in a Collapse transition.

@param props - AccordionDetails component props
@returns AccordionDetails component`,methods:[],displayName:"AccordionDetails",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."}},composes:["MuiAccordionDetailsProps"]};const _=D.forwardRef(({children:i,disableSpacing:d=!1,sx:s,...t},l)=>e.jsx(M,{ref:l,disableSpacing:d,sx:{...s},...t,children:i}));_.displayName="AccordionActions";_.__docgenInfo={description:`AccordionActions component

Provides an area for action buttons within an accordion.
Typically placed at the bottom of AccordionDetails.

@param props - AccordionActions component props
@returns AccordionActions component`,methods:[],displayName:"AccordionActions",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},disableSpacing:{required:!1,tsType:{name:"boolean"},description:`If true, the actions do not have additional margin.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiAccordionActionsProps"]};const ve={title:"Molecules/Accordion",component:n,tags:["autodocs"],argTypes:{defaultExpanded:{control:"boolean"},disabled:{control:"boolean"},disableGutters:{control:"boolean"},expanded:{control:"boolean"},square:{control:"boolean"}},args:{defaultExpanded:!1,disabled:!1,disableGutters:!1,square:!1}},h={render:i=>e.jsxs(n,{...i,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion Title"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})},y={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion 1"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion 2"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion 3"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},u={render:()=>{const[i,d]=D.useState("panel1"),s=t=>(l,m)=>{d(m?t:!1)};return e.jsxs("div",{children:[e.jsxs(n,{expanded:i==="panel1",onChange:s("panel1"),children:[e.jsxs(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:[e.jsx(o,{sx:{width:"33%",flexShrink:0},children:"General settings"}),e.jsx(o,{sx:{color:"text.secondary"},children:"I am an accordion"})]}),e.jsx(a,{children:e.jsx(o,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),e.jsxs(n,{expanded:i==="panel2",onChange:s("panel2"),children:[e.jsxs(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:[e.jsx(o,{sx:{width:"33%",flexShrink:0},children:"Users"}),e.jsx(o,{sx:{color:"text.secondary"},children:"You are currently not an owner"})]}),e.jsx(a,{children:e.jsx(o,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),e.jsxs(n,{expanded:i==="panel3",onChange:s("panel3"),children:[e.jsxs(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:[e.jsx(o,{sx:{width:"33%",flexShrink:0},children:"Advanced settings"}),e.jsx(o,{sx:{color:"text.secondary"},children:"Filtering has been entirely disabled for whole web server"})]}),e.jsx(a,{children:e.jsx(o,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}},x={render:()=>e.jsxs("div",{children:[e.jsxs(n,{defaultExpanded:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Expanded by Default"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion is expanded by default using the defaultExpanded prop."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Collapsed by Default"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion is collapsed by default."})})]})]})},A={render:()=>e.jsxs("div",{children:[e.jsxs(n,{disabled:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Disabled Accordion"})}),e.jsx(a,{children:e.jsx(o,{children:"This content cannot be accessed because the accordion is disabled."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Enabled Accordion"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion is enabled and can be interacted with."})})]})]})},g={render:()=>e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion with Actions"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion includes action buttons at the bottom using AccordionActions component."})}),e.jsxs(_,{children:[e.jsx(w,{size:"small",children:"Cancel"}),e.jsx(w,{size:"small",variant:"contained",children:"Save"})]})]})},j={render:()=>e.jsxs(R,{spacing:0,children:[e.jsxs(n,{disableGutters:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"No Gutters - Accordion 1"})}),e.jsx(a,{children:e.jsx(o,{children:"The disableGutters prop removes the margin between accordions, creating a seamless list."})})]}),e.jsxs(n,{disableGutters:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"No Gutters - Accordion 2"})}),e.jsx(a,{children:e.jsx(o,{children:"Notice there's no gap between this and the previous accordion."})})]}),e.jsxs(n,{disableGutters:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"No Gutters - Accordion 3"})}),e.jsx(a,{children:e.jsx(o,{children:"This creates a more compact, list-like appearance."})})]})]})},f={render:()=>e.jsxs("div",{children:[e.jsxs(n,{square:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Square Corners"})}),e.jsx(a,{children:e.jsx(o,{children:"The square prop removes the border radius for sharp corners instead of rounded."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Rounded Corners (Default)"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion has the default rounded corners."})})]})]})},b={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"arrow_drop_down"}),children:e.jsx(o,{children:"Arrow Drop Down Icon"})}),e.jsx(a,{children:e.jsx(o,{children:"Using arrow_drop_down icon for expand indicator."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"add"}),children:e.jsx(o,{children:"Plus/Minus Icon"})}),e.jsx(a,{children:e.jsx(o,{children:"Using add icon (becomes remove when expanded)."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"keyboard_arrow_down"}),children:e.jsx(o,{children:"Keyboard Arrow Down"})}),e.jsx(a,{children:e.jsx(o,{children:"Using keyboard_arrow_down icon for a different style."})})]})]})},T={render:()=>e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(o,{children:"No Expand Icon"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion has no expand icon. It can still be expanded by clicking the summary area."})})]})},S={render:()=>e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{variant:"h6",children:"FAQ: Getting Started"})}),e.jsx(a,{children:e.jsxs(R,{spacing:2,children:[e.jsx(o,{variant:"subtitle1",fontWeight:"medium",children:"How do I create an account?"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:'To create an account, click the "Sign Up" button in the top right corner and follow the registration process.'}),e.jsx(o,{variant:"subtitle1",fontWeight:"medium",children:"What payment methods do you accept?"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:"We accept all major credit cards, PayPal, and bank transfers for enterprise customers."}),e.jsx(o,{variant:"subtitle1",fontWeight:"medium",children:"Can I cancel my subscription?"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:"Yes, you can cancel your subscription at any time from your account settings. You'll retain access until the end of your billing period."})]})}),e.jsxs(_,{children:[e.jsx(w,{size:"small",children:"More FAQs"}),e.jsx(w,{size:"small",variant:"contained",children:"Contact Support"})]})]})},v={render:()=>e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Parent Accordion"})}),e.jsx(a,{children:e.jsxs(R,{spacing:1,children:[e.jsx(o,{children:"This accordion contains nested accordions:"}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Child Accordion 1"})}),e.jsx(a,{children:e.jsx(o,{children:"Content of the first child accordion."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Child Accordion 2"})}),e.jsx(a,{children:e.jsx(o,{children:"Content of the second child accordion."})})]})]})})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Interactive playground for Accordion component",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Basic accordion group",...y.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
          }}>You are currently not an owner</Typography>
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
}`,...u.parameters?.docs?.source},description:{story:"Controlled accordion with state management",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Accordion with default expanded state",...x.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Accordion disabled>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This content cannot be accessed because the accordion is disabled.
          </Typography>
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
}`,...A.parameters?.docs?.source},description:{story:"Disabled accordion",...A.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Accordion with actions",...g.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Accordion without gutters",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Square corners (no border radius)",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Custom expand icons",...b.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Accordion without expand icon",...T.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Complex accordion with rich content",...S.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Nested accordions",...v.parameters?.docs?.description}}};const De=["Playground","BasicAccordion","ControlledAccordion","DefaultExpanded","DisabledAccordion","WithActions","NoGutters","SquareCorners","CustomExpandIcons","NoExpandIcon","ComplexContent","NestedAccordions"];export{y as BasicAccordion,S as ComplexContent,u as ControlledAccordion,b as CustomExpandIcons,x as DefaultExpanded,A as DisabledAccordion,v as NestedAccordions,T as NoExpandIcon,j as NoGutters,h as Playground,f as SquareCorners,g as WithActions,De as __namedExportsOrder,ve as default};
