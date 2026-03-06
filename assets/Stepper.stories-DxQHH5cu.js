import{R as u,j as e,r as v}from"./iframe-m0FcCUbT.js";import{S as y,a as j,b as R}from"./Stepper-RG5uSjnj.js";import{B as f}from"./Box-DSq61m1Q.js";import{B as h}from"./Button-CJ6MgozL.js";import{T as L}from"./Typography-BAhyjZNg.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-C11nCEJ1.js";import"./integerPropType-DVPNO1YA.js";import"./useSlot-BPbjla4P.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useForkRef-DeUHlcp-.js";import"./createSvgIcon-DzjuuRaM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bd5szlVj.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./CircularProgress-nywBWFjt.js";const s=u.forwardRef(({children:t,activeStep:r=0,orientation:a="horizontal",alternativeLabel:o=!1,nonLinear:i=!1,...l},x)=>e.jsx(y,{ref:x,activeStep:r,orientation:a,alternativeLabel:o,nonLinear:i,...l,children:t}));s.displayName="Stepper";const p=u.forwardRef(({children:t,active:r,completed:a,disabled:o,...i},l)=>e.jsx(j,{ref:l,active:r,completed:a,disabled:o,...i,children:t}));p.displayName="Step";const n=u.forwardRef(({children:t,error:r,optional:a,icon:o,...i},l)=>e.jsx(R,{ref:l,error:r,optional:a,icon:o,...i,children:t}));n.displayName="StepLabel";s.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},alternativeLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},nonLinear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["MuiStepperProps"]};p.__docgenInfo={description:"",methods:[],displayName:"Step",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},completed:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["MuiStepProps"]};n.__docgenInfo={description:"",methods:[],displayName:"StepLabel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},optional:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["MuiStepLabelProps"]};const W={title:"Molecules/Stepper",component:s,parameters:{layout:"centered",docs:{description:{component:"Steppers display progress through a sequence of logical and numbered steps."}}},tags:["autodocs"]},b=["Select campaign settings","Create an ad group","Create an ad"],c={render:()=>{const[t,r]=v.useState(0);return e.jsxs(f,{sx:{width:"100%"},children:[e.jsx(s,{activeStep:t,children:b.map(a=>e.jsx(p,{children:e.jsx(n,{children:a})},a))}),e.jsxs(f,{sx:{mt:2},children:[e.jsx(h,{disabled:t===0,onClick:()=>r(a=>a-1),children:"Back"}),e.jsx(h,{disabled:t===2,onClick:()=>r(a=>a+1),children:"Next"})]})]})}},d={render:()=>e.jsx(s,{activeStep:1,alternativeLabel:!0,children:b.map(t=>e.jsx(p,{children:e.jsx(n,{children:t})},t))})},m={render:()=>e.jsx(s,{activeStep:1,orientation:"vertical",children:b.map(t=>e.jsx(p,{children:e.jsx(n,{children:t})},t))})},S={render:()=>e.jsxs(s,{activeStep:1,children:[e.jsx(p,{children:e.jsx(n,{children:"Step 1"})}),e.jsx(p,{children:e.jsx(n,{optional:e.jsx(L,{variant:"caption",children:"Optional"}),children:"Step 2"})}),e.jsx(p,{children:e.jsx(n,{children:"Step 3"})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    return <Box sx={{
      width: '100%'
    }}>
        <Stepper activeStep={activeStep}>
          {steps.map(label => <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>)}
        </Stepper>
        <Box sx={{
        mt: 2
      }}>
          <Button disabled={activeStep === 0} onClick={() => setActiveStep(prev => prev - 1)}>
            Back
          </Button>
          <Button disabled={activeStep === 2} onClick={() => setActiveStep(prev => prev + 1)}>
            Next
          </Button>
        </Box>
      </Box>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stepper activeStep={1} alternativeLabel>
      {steps.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stepper activeStep={1} orientation="vertical">
      {steps.map(label => <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>)}
    </Stepper>
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Stepper activeStep={1}>
      <Step>
        <StepLabel>Step 1</StepLabel>
      </Step>
      <Step>
        <StepLabel optional={<Typography variant="caption">Optional</Typography>}>Step 2</StepLabel>
      </Step>
      <Step>
        <StepLabel>Step 3</StepLabel>
      </Step>
    </Stepper>
}`,...S.parameters?.docs?.source}}};const F=["Default","AlternativeLabel","Vertical","WithOptionalLabel"];export{d as AlternativeLabel,c as Default,m as Vertical,S as WithOptionalLabel,F as __namedExportsOrder,W as default};
