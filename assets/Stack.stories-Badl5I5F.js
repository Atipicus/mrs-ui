import{j as e}from"./iframe-Bf0p-10g.js";import{S as t}from"./Stack-B1s-j0-P.js";import{P as w}from"./Paper-DjV8_fUm.js";import{D as S}from"./Divider-DaSrFf0d.js";import{B as g}from"./Button-8BCT210e.js";import{C as j}from"./Chip-Dxpj9hl6.js";import"./preload-helper-PPVm8Dsz.js";import"./Stack-JG3aZ3C3.js";import"./createSimplePaletteValueFilter-CFqqyMQL.js";import"./useThemeProps-NvJQ2Xdn.js";import"./Paper-moN_1IBd.js";import"./useTheme-BbnQPM-2.js";import"./Divider-QP05fqPZ.js";import"./dividerClasses-UNPQwTGB.js";import"./Button-ChPoXziC.js";import"./ButtonBase-CK-fqNHV.js";import"./useForkRef-mnbaXvWm.js";import"./useEventCallback-BOWsNkBB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C85rUP-r.js";import"./Chip-DnsR2XMQ.js";import"./createSvgIcon-Doqq-Dps.js";const H={title:"Atoms/Stack",component:t,tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","row-reverse","column","column-reverse"],description:"The direction of the stack"},spacing:{control:"number",description:"The space between children"}}},r=({children:v})=>e.jsx(w,{sx:{padding:2,textAlign:"center"},children:v}),s={render:()=>e.jsxs(t,{spacing:2,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},i={render:()=>e.jsxs(t,{direction:"row",spacing:2,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},n={render:()=>e.jsxs(t,{direction:"column",spacing:2,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},c={render:()=>e.jsxs(t,{direction:"row-reverse",spacing:2,children:[e.jsx(r,{children:"Item 1 (appears last)"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3 (appears first)"})]})},o={render:()=>e.jsxs(t,{direction:"column-reverse",spacing:2,children:[e.jsx(r,{children:"Item 1 (appears last)"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3 (appears first)"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Spacing: 0"}),e.jsxs(t,{direction:"row",spacing:0,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Spacing: 1"}),e.jsxs(t,{direction:"row",spacing:1,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Spacing: 2"}),e.jsxs(t,{direction:"row",spacing:2,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Spacing: 4"}),e.jsxs(t,{direction:"row",spacing:4,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]})]})},m={render:()=>e.jsxs(t,{spacing:2,divider:e.jsx(S,{}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},d={render:()=>e.jsxs(t,{direction:"row",spacing:2,divider:e.jsx(S,{orientation:"vertical",flexItem:!0}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},p={render:()=>e.jsxs(t,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(r,{children:"Column on mobile, Row on desktop"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},l={render:()=>e.jsxs(t,{direction:"row",spacing:{xs:1,sm:2,md:3,lg:4},children:[e.jsx(r,{children:"Spacing increases with screen size"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},I={render:()=>e.jsxs(t,{direction:"row",spacing:2,children:[e.jsx(g,{variant:"contained",children:"Save"}),e.jsx(g,{variant:"outlined",children:"Cancel"}),e.jsx(g,{variant:"text",children:"Reset"})]})},x={render:()=>e.jsxs(t,{direction:"row",spacing:1,children:[e.jsx(j,{label:"React",color:"primary"}),e.jsx(j,{label:"TypeScript",color:"secondary"}),e.jsx(j,{label:"Material-UI",color:"success"}),e.jsx(j,{label:"Storybook",color:"info"})]})},h={render:()=>e.jsxs(t,{spacing:3,children:[e.jsxs(t,{direction:"row",spacing:2,children:[e.jsx(r,{children:"Row 1, Col 1"}),e.jsx(r,{children:"Row 1, Col 2"}),e.jsx(r,{children:"Row 1, Col 3"})]}),e.jsxs(t,{direction:"row",spacing:2,children:[e.jsx(r,{children:"Row 2, Col 1"}),e.jsx(r,{children:"Row 2, Col 2"}),e.jsx(r,{children:"Row 2, Col 3"})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Without useFlexGap (default - uses margin)"}),e.jsxs(t,{direction:"row",spacing:2,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"With useFlexGap (uses CSS gap property)"}),e.jsxs(t,{direction:"row",spacing:2,useFlexGap:!0,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
}`,...s.parameters?.docs?.source},description:{story:"Basic column stack",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
}`,...i.parameters?.docs?.source},description:{story:"Row direction",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
}`,...n.parameters?.docs?.source},description:{story:"Column direction (default)",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row-reverse" spacing={2}>
      <Item>Item 1 (appears last)</Item>
      <Item>Item 2</Item>
      <Item>Item 3 (appears first)</Item>
    </Stack>
}`,...c.parameters?.docs?.source},description:{story:"Row reverse",...c.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="column-reverse" spacing={2}>
      <Item>Item 1 (appears last)</Item>
      <Item>Item 2</Item>
      <Item>Item 3 (appears first)</Item>
    </Stack>
}`,...o.parameters?.docs?.source},description:{story:"Column reverse",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <p>Spacing: 0</p>
        <Stack direction="row" spacing={0}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>Spacing: 1</p>
        <Stack direction="row" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>Spacing: 2</p>
        <Stack direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>Spacing: 4</p>
        <Stack direction="row" spacing={4}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Different spacing values",...a.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} divider={<Divider />}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
}`,...m.parameters?.docs?.source},description:{story:"With divider",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"Row with divider",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction={{
    xs: 'column',
    sm: 'row'
  }} spacing={2}>
      <Item>Column on mobile, Row on desktop</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"Responsive direction",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={{
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
  }}>
      <Item>Spacing increases with screen size</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
}`,...l.parameters?.docs?.source},description:{story:"Responsive spacing",...l.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <Button variant="contained">Save</Button>
      <Button variant="outlined">Cancel</Button>
      <Button variant="text">Reset</Button>
    </Stack>
}`,...I.parameters?.docs?.source},description:{story:"Button group",...I.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={1}>
      <Chip label="React" color="primary" />
      <Chip label="TypeScript" color="secondary" />
      <Chip label="Material-UI" color="success" />
      <Chip label="Storybook" color="info" />
    </Stack>
}`,...x.parameters?.docs?.source},description:{story:"Chip stack",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Stack direction="row" spacing={2}>
        <Item>Row 1, Col 1</Item>
        <Item>Row 1, Col 2</Item>
        <Item>Row 1, Col 3</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item>Row 2, Col 1</Item>
        <Item>Row 2, Col 2</Item>
        <Item>Row 2, Col 3</Item>
      </Stack>
    </Stack>
}`,...h.parameters?.docs?.source},description:{story:"Nested stacks",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <p>Without useFlexGap (default - uses margin)</p>
        <Stack direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>With useFlexGap (uses CSS gap property)</p>
        <Stack direction="row" spacing={2} useFlexGap>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"useFlexGap",...u.parameters?.docs?.description}}};const J=["Basic","Row","Column","RowReverse","ColumnReverse","DifferentSpacing","WithDivider","RowWithDivider","ResponsiveDirection","ResponsiveSpacing","ButtonGroup","ChipStack","NestedStacks","UseFlexGap"];export{s as Basic,I as ButtonGroup,x as ChipStack,n as Column,o as ColumnReverse,a as DifferentSpacing,h as NestedStacks,p as ResponsiveDirection,l as ResponsiveSpacing,i as Row,c as RowReverse,d as RowWithDivider,u as UseFlexGap,m as WithDivider,J as __namedExportsOrder,H as default};
