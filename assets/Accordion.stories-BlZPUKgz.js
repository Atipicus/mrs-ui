import{r as M,u as q,j as e,R as v}from"./iframe-RE-InNC_.js";import{A as E,a as k,b as G}from"./AccordionSummary-DA4I9hxX.js";import{g as P,b as U,s as B,c as W,a as L}from"./memoTheme-G7kn0Pvq.js";import{T as o}from"./Typography-nCTxP7YE.js";import{B as I}from"./Button-b4FuI5mR.js";import{M as c}from"./MaterialSymbol-CbpUwJ-4.js";import{S as N}from"./Stack-DojPYyRc.js";import"./preload-helper-PPVm8Dsz.js";import"./useSlot-D1O1MstQ.js";import"./resolveComponentProps-A7xtSNIR.js";import"./useForkRef-svZAx5Sr.js";import"./useControlled-C3_qFTtS.js";import"./Collapse-Bmd4oJDZ.js";import"./useTheme-D0ws6B2u.js";import"./utils-bAD-a6Hf.js";import"./ButtonBase-8-1Z_Ot4.js";import"./useEventCallback-B1dOj273.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-BBoiuNW4.js";import"./index-DjYAnUp8.js";import"./Paper-CLYvTYJ4.js";import"./Typography-CVa1lmFv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Button-pb4FJMiK.js";import"./CircularProgress-MrvzDPFV.js";import"./Box-BRgWuVC-.js";import"./styled-DrT9cCNk.js";import"./useThemeProps-xGOUbMx8.js";function z(i){return P("MuiAccordionActions",i)}U("MuiAccordionActions",["root","spacing"]);const F=i=>{const{classes:d,disableSpacing:s}=i;return L({root:["root",!s&&"spacing"]},z,d)},V=B("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(i,d)=>{const{ownerState:s}=i;return[d.root,!s.disableSpacing&&d.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",variants:[{props:i=>!i.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Y=M.forwardRef(function(d,s){const t=q({props:d,name:"MuiAccordionActions"}),{className:p,disableSpacing:l=!1,..._}=t,D={...t,disableSpacing:l},C=F(D);return e.jsx(V,{className:W(C.root,p),ref:s,ownerState:D,..._})}),n=v.forwardRef(({children:i,defaultExpanded:d=!1,disabled:s=!1,disableGutters:t=!1,expanded:p,onChange:l,square:_=!1,sx:D,...C},R)=>e.jsx(E,{ref:R,defaultExpanded:d,disabled:s,disableGutters:t,expanded:p,onChange:l,square:_,sx:{...D},...C,children:i}));n.displayName="Accordion";n.__docgenInfo={description:`Accordion component

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
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const r=v.forwardRef(({children:i,expandIcon:d,focusVisibleClassName:s,sx:t,...p},l)=>e.jsx(k,{ref:l,expandIcon:d,focusVisibleClassName:s,sx:{...t},...p,children:i}));r.displayName="AccordionSummary";r.__docgenInfo={description:`AccordionSummary component

The summary acts as the header for the accordion and controls the expand/collapse behavior.
It typically contains a title and an expand icon.

@param props - AccordionSummary component props
@returns AccordionSummary component`,methods:[],displayName:"AccordionSummary",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},expandIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display as the expand indicator."},focusVisibleClassName:{required:!1,tsType:{name:"string"},description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the CSS :focus-visible selector.`}},composes:["MuiAccordionSummaryProps"]};const a=v.forwardRef(({children:i,sx:d,...s},t)=>e.jsx(G,{ref:t,sx:{...d},...s,children:i}));a.displayName="AccordionDetails";a.__docgenInfo={description:`AccordionDetails component

Contains the content that is revealed when the accordion is expanded.
This component is wrapped in a Collapse transition.

@param props - AccordionDetails component props
@returns AccordionDetails component`,methods:[],displayName:"AccordionDetails",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."}},composes:["MuiAccordionDetailsProps"]};const w=v.forwardRef(({children:i,disableSpacing:d=!1,sx:s,...t},p)=>e.jsx(Y,{ref:p,disableSpacing:d,sx:{...s},...t,children:i}));w.displayName="AccordionActions";w.__docgenInfo={description:`AccordionActions component

Provides an area for action buttons within an accordion.
Typically placed at the bottom of AccordionDetails.

@param props - AccordionActions component props
@returns AccordionActions component`,methods:[],displayName:"AccordionActions",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},disableSpacing:{required:!1,tsType:{name:"boolean"},description:`If true, the actions do not have additional margin.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiAccordionActionsProps"]};const fe={title:"Molecules/Accordion",component:n,tags:["autodocs"],argTypes:{defaultExpanded:{control:"boolean"},disabled:{control:"boolean"},disableGutters:{control:"boolean"},expanded:{control:"boolean"},square:{control:"boolean"}},args:{defaultExpanded:!1,disabled:!1,disableGutters:!1,square:!1}},m={render:i=>e.jsxs(n,{...i,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion Title"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})},h={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion 1"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion 2"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion 3"})}),e.jsx(a,{children:e.jsx(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})},y={render:()=>{const[i,d]=v.useState("panel1"),s=t=>(p,l)=>{d(l?t:!1)};return e.jsxs("div",{children:[e.jsxs(n,{expanded:i==="panel1",onChange:s("panel1"),children:[e.jsxs(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:[e.jsx(o,{sx:{width:"33%",flexShrink:0},children:"General settings"}),e.jsx(o,{sx:{color:"text.secondary"},children:"I am an accordion"})]}),e.jsx(a,{children:e.jsx(o,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),e.jsxs(n,{expanded:i==="panel2",onChange:s("panel2"),children:[e.jsxs(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:[e.jsx(o,{sx:{width:"33%",flexShrink:0},children:"Users"}),e.jsx(o,{sx:{color:"text.secondary"},children:"You are currently not an owner"})]}),e.jsx(a,{children:e.jsx(o,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),e.jsxs(n,{expanded:i==="panel3",onChange:s("panel3"),children:[e.jsxs(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:[e.jsx(o,{sx:{width:"33%",flexShrink:0},children:"Advanced settings"}),e.jsx(o,{sx:{color:"text.secondary"},children:"Filtering has been entirely disabled for whole web server"})]}),e.jsx(a,{children:e.jsx(o,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}},u={render:()=>e.jsxs("div",{children:[e.jsxs(n,{defaultExpanded:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Expanded by Default"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion is expanded by default using the defaultExpanded prop."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Collapsed by Default"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion is collapsed by default."})})]})]})},x={render:()=>e.jsxs("div",{children:[e.jsxs(n,{disabled:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Disabled Accordion"})}),e.jsx(a,{children:e.jsx(o,{children:"This content cannot be accessed because the accordion is disabled."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Enabled Accordion"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion is enabled and can be interacted with."})})]})]})},A={render:()=>e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Accordion with Actions"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion includes action buttons at the bottom using AccordionActions component."})}),e.jsxs(w,{children:[e.jsx(I,{size:"small",children:"Cancel"}),e.jsx(I,{size:"small",variant:"contained",children:"Save"})]})]})},g={render:()=>e.jsxs(N,{spacing:0,children:[e.jsxs(n,{disableGutters:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"No Gutters - Accordion 1"})}),e.jsx(a,{children:e.jsx(o,{children:"The disableGutters prop removes the margin between accordions, creating a seamless list."})})]}),e.jsxs(n,{disableGutters:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"No Gutters - Accordion 2"})}),e.jsx(a,{children:e.jsx(o,{children:"Notice there's no gap between this and the previous accordion."})})]}),e.jsxs(n,{disableGutters:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"No Gutters - Accordion 3"})}),e.jsx(a,{children:e.jsx(o,{children:"This creates a more compact, list-like appearance."})})]})]})},j={render:()=>e.jsxs("div",{children:[e.jsxs(n,{square:!0,children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Square Corners"})}),e.jsx(a,{children:e.jsx(o,{children:"The square prop removes the border radius for sharp corners instead of rounded."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Rounded Corners (Default)"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion has the default rounded corners."})})]})]})},f={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"arrow_drop_down"}),children:e.jsx(o,{children:"Arrow Drop Down Icon"})}),e.jsx(a,{children:e.jsx(o,{children:"Using arrow_drop_down icon for expand indicator."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"add"}),children:e.jsx(o,{children:"Plus/Minus Icon"})}),e.jsx(a,{children:e.jsx(o,{children:"Using add icon (becomes remove when expanded)."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"keyboard_arrow_down"}),children:e.jsx(o,{children:"Keyboard Arrow Down"})}),e.jsx(a,{children:e.jsx(o,{children:"Using keyboard_arrow_down icon for a different style."})})]})]})},b={render:()=>e.jsxs(n,{children:[e.jsx(r,{children:e.jsx(o,{children:"No Expand Icon"})}),e.jsx(a,{children:e.jsx(o,{children:"This accordion has no expand icon. It can still be expanded by clicking the summary area."})})]})},T={render:()=>e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{variant:"h6",children:"FAQ: Getting Started"})}),e.jsx(a,{children:e.jsxs(N,{spacing:2,children:[e.jsx(o,{variant:"subtitle1",fontWeight:"medium",children:"How do I create an account?"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:'To create an account, click the "Sign Up" button in the top right corner and follow the registration process.'}),e.jsx(o,{variant:"subtitle1",fontWeight:"medium",children:"What payment methods do you accept?"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:"We accept all major credit cards, PayPal, and bank transfers for enterprise customers."}),e.jsx(o,{variant:"subtitle1",fontWeight:"medium",children:"Can I cancel my subscription?"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:"Yes, you can cancel your subscription at any time from your account settings. You'll retain access until the end of your billing period."})]})}),e.jsxs(w,{children:[e.jsx(I,{size:"small",children:"More FAQs"}),e.jsx(I,{size:"small",variant:"contained",children:"Contact Support"})]})]})},S={render:()=>e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Parent Accordion"})}),e.jsx(a,{children:e.jsxs(N,{spacing:1,children:[e.jsx(o,{children:"This accordion contains nested accordions:"}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Child Accordion 1"})}),e.jsx(a,{children:e.jsx(o,{children:"Content of the first child accordion."})})]}),e.jsxs(n,{children:[e.jsx(r,{expandIcon:e.jsx(c,{icon:"expand_more"}),children:e.jsx(o,{children:"Child Accordion 2"})}),e.jsx(a,{children:e.jsx(o,{children:"Content of the second child accordion."})})]})]})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Interactive playground for Accordion component",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Basic accordion group",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Controlled accordion with state management",...y.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Accordion with default expanded state",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Disabled accordion",...x.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Accordion with actions",...A.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Accordion without gutters",...g.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Square corners (no border radius)",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Custom expand icons",...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Accordion without expand icon",...b.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Complex accordion with rich content",...T.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Nested accordions",...S.parameters?.docs?.description}}};const be=["Playground","BasicAccordion","ControlledAccordion","DefaultExpanded","DisabledAccordion","WithActions","NoGutters","SquareCorners","CustomExpandIcons","NoExpandIcon","ComplexContent","NestedAccordions"];export{h as BasicAccordion,T as ComplexContent,y as ControlledAccordion,f as CustomExpandIcons,u as DefaultExpanded,x as DisabledAccordion,S as NestedAccordions,b as NoExpandIcon,g as NoGutters,m as Playground,j as SquareCorners,A as WithActions,be as __namedExportsOrder,fe as default};
