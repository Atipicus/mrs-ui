import{j as e}from"./iframe-RE-InNC_.js";import{C as a}from"./Chip-O8MmkQyX.js";import{A as i}from"./Avatar-BANXhOz2.js";import{S as l}from"./Stack-DojPYyRc.js";import{B as r}from"./Box-BRgWuVC-.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-CIza_VYj.js";import"./memoTheme-G7kn0Pvq.js";import"./createSvgIcon-DHEONRxe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useForkRef-svZAx5Sr.js";import"./ButtonBase-8-1Z_Ot4.js";import"./useEventCallback-B1dOj273.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-D0ws6B2u.js";import"./useSlot-D1O1MstQ.js";import"./resolveComponentProps-A7xtSNIR.js";import"./styled-DrT9cCNk.js";import"./useThemeProps-xGOUbMx8.js";const M={title:"Atoms/Chip",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"The content of the component"},size:{control:"select",options:["small","medium"],description:"The size of the component"},color:{control:"select",options:["default","primary","secondary","error","info","success","warning"],description:"The color of the component"},variant:{control:"select",options:["filled","outlined"],description:"The variant to use"},disabled:{control:"boolean",description:"If true, the component is disabled"},clickable:{control:"boolean",description:"If true, the chip will appear clickable"},onClick:{action:"clicked",description:"Callback fired when the chip is clicked"},onDelete:{action:"deleted",description:"Callback fired when the delete icon is clicked"}},args:{label:"Chip",size:"medium",color:"default",variant:"filled",disabled:!1,clickable:!1}},t={args:{}},o={render:()=>e.jsxs(l,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(a,{label:"Small",size:"small"}),e.jsx(a,{label:"Medium",size:"medium"})]})},s={render:()=>e.jsx(l,{spacing:2,children:e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Default",color:"default",variant:"filled"}),e.jsx(a,{label:"Primary",color:"primary",variant:"filled"}),e.jsx(a,{label:"Secondary",color:"secondary",variant:"filled"}),e.jsx(a,{label:"Error",color:"error",variant:"filled"}),e.jsx(a,{label:"Warning",color:"warning",variant:"filled"}),e.jsx(a,{label:"Info",color:"info",variant:"filled"}),e.jsx(a,{label:"Success",color:"success",variant:"filled"})]})})},n={render:()=>e.jsx(l,{spacing:2,children:e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Default",color:"default",variant:"outlined"}),e.jsx(a,{label:"Primary",color:"primary",variant:"outlined"}),e.jsx(a,{label:"Secondary",color:"secondary",variant:"outlined"}),e.jsx(a,{label:"Error",color:"error",variant:"outlined"}),e.jsx(a,{label:"Warning",color:"warning",variant:"outlined"}),e.jsx(a,{label:"Info",color:"info",variant:"outlined"}),e.jsx(a,{label:"Success",color:"success",variant:"outlined"})]})})},c={render:()=>e.jsx(l,{spacing:2,children:e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Default Disabled",color:"default",disabled:!0}),e.jsx(a,{label:"Primary Disabled",color:"primary",disabled:!0}),e.jsx(a,{label:"Outlined Disabled",color:"default",variant:"outlined",disabled:!0}),e.jsx(a,{label:"Primary Outlined Disabled",color:"primary",variant:"outlined",disabled:!0})]})})},d={render:()=>e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Clickable",clickable:!0,onClick:()=>alert("Clicked!")}),e.jsx(a,{label:"Primary Clickable",color:"primary",clickable:!0,onClick:()=>alert("Clicked!")}),e.jsx(a,{label:"Outlined Clickable",variant:"outlined",clickable:!0,onClick:()=>alert("Clicked!")})]})},p={render:()=>e.jsx(l,{spacing:2,children:e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Avatar",avatar:e.jsx(i,{children:"M"})}),e.jsx(a,{label:"Avatar Primary",color:"primary",avatar:e.jsx(i,{children:"P"})}),e.jsx(a,{label:"Avatar Small",size:"small",avatar:e.jsx(i,{size:"18px",children:"S"})}),e.jsx(a,{label:"Avatar Outlined",variant:"outlined",avatar:e.jsx(i,{children:"O"})})]})})},b={render:()=>e.jsx(l,{spacing:2,children:e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Deletable",onDelete:()=>alert("Delete clicked!")}),e.jsx(a,{label:"Primary",color:"primary",onDelete:()=>alert("Delete clicked!")}),e.jsx(a,{label:"Small",size:"small",onDelete:()=>alert("Delete clicked!")}),e.jsx(a,{label:"Outlined",variant:"outlined",onDelete:()=>alert("Delete clicked!")})]})})},m={render:()=>e.jsx(l,{spacing:2,children:e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Complete",avatar:e.jsx(i,{children:"C"}),onDelete:()=>alert("Delete clicked!")}),e.jsx(a,{label:"Primary",color:"primary",avatar:e.jsx(i,{children:"P"}),onDelete:()=>alert("Delete clicked!")}),e.jsx(a,{label:"Small",size:"small",avatar:e.jsx(i,{size:"18px",children:"S"}),onDelete:()=>alert("Delete clicked!")}),e.jsx(a,{label:"Outlined",variant:"outlined",avatar:e.jsx(i,{children:"O"}),onDelete:()=>alert("Delete clicked!")})]})})},x={render:()=>e.jsx(r,{sx:{p:4},children:e.jsxs(l,{spacing:4,children:[e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Medium - Default - Filled"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic"}),e.jsx(a,{label:"Clickable",onClick:()=>{}}),e.jsx(a,{label:"Deletable",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",avatar:e.jsx(i,{children:"A"})}),e.jsx(a,{label:"Complete",avatar:e.jsx(i,{children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",disabled:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Medium - Primary - Filled"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic",color:"primary"}),e.jsx(a,{label:"Clickable",color:"primary",onClick:()=>{}}),e.jsx(a,{label:"Deletable",color:"primary",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",color:"primary",avatar:e.jsx(i,{children:"A"})}),e.jsx(a,{label:"Complete",color:"primary",avatar:e.jsx(i,{children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",color:"primary",disabled:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Small - Default - Filled"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic",size:"small"}),e.jsx(a,{label:"Clickable",size:"small",onClick:()=>{}}),e.jsx(a,{label:"Deletable",size:"small",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",size:"small",avatar:e.jsx(i,{size:"18px",children:"A"})}),e.jsx(a,{label:"Complete",size:"small",avatar:e.jsx(i,{size:"18px",children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",size:"small",disabled:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Small - Primary - Filled"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic",size:"small",color:"primary"}),e.jsx(a,{label:"Clickable",size:"small",color:"primary",onClick:()=>{}}),e.jsx(a,{label:"Deletable",size:"small",color:"primary",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",size:"small",color:"primary",avatar:e.jsx(i,{size:"18px",children:"A"})}),e.jsx(a,{label:"Complete",size:"small",color:"primary",avatar:e.jsx(i,{size:"18px",children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",size:"small",color:"primary",disabled:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Medium - Default - Outlined"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic",variant:"outlined"}),e.jsx(a,{label:"Clickable",variant:"outlined",onClick:()=>{}}),e.jsx(a,{label:"Deletable",variant:"outlined",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",variant:"outlined",avatar:e.jsx(i,{children:"A"})}),e.jsx(a,{label:"Complete",variant:"outlined",avatar:e.jsx(i,{children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",variant:"outlined",disabled:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Medium - Primary - Outlined"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic",color:"primary",variant:"outlined"}),e.jsx(a,{label:"Clickable",color:"primary",variant:"outlined",onClick:()=>{}}),e.jsx(a,{label:"Deletable",color:"primary",variant:"outlined",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",color:"primary",variant:"outlined",avatar:e.jsx(i,{children:"A"})}),e.jsx(a,{label:"Complete",color:"primary",variant:"outlined",avatar:e.jsx(i,{children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",color:"primary",variant:"outlined",disabled:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Small - Default - Outlined"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic",size:"small",variant:"outlined"}),e.jsx(a,{label:"Clickable",size:"small",variant:"outlined",onClick:()=>{}}),e.jsx(a,{label:"Deletable",size:"small",variant:"outlined",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",size:"small",variant:"outlined",avatar:e.jsx(i,{size:"18px",children:"A"})}),e.jsx(a,{label:"Complete",size:"small",variant:"outlined",avatar:e.jsx(i,{size:"18px",children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",size:"small",variant:"outlined",disabled:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Small - Primary - Outlined"}),e.jsxs(l,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(a,{label:"Basic",size:"small",color:"primary",variant:"outlined"}),e.jsx(a,{label:"Clickable",size:"small",color:"primary",variant:"outlined",onClick:()=>{}}),e.jsx(a,{label:"Deletable",size:"small",color:"primary",variant:"outlined",onDelete:()=>{}}),e.jsx(a,{label:"Avatar",size:"small",color:"primary",variant:"outlined",avatar:e.jsx(i,{size:"18px",children:"A"})}),e.jsx(a,{label:"Complete",size:"small",color:"primary",variant:"outlined",avatar:e.jsx(i,{size:"18px",children:"C"}),onDelete:()=>{}}),e.jsx(a,{label:"Disabled",size:"small",color:"primary",variant:"outlined",disabled:!0})]})]})]})}),parameters:{layout:"fullscreen"}},h={render:()=>e.jsx(r,{sx:{p:4},children:e.jsxs(l,{spacing:4,children:[e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Filter Tags"}),e.jsxs(l,{direction:"row",spacing:1,flexWrap:"wrap",children:[e.jsx(a,{label:"Active",color:"success",size:"small"}),e.jsx(a,{label:"Pending",color:"warning",size:"small"}),e.jsx(a,{label:"Cancelled",color:"error",size:"small"}),e.jsx(a,{label:"All",size:"small"})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Selected Items"}),e.jsxs(l,{direction:"row",spacing:1,flexWrap:"wrap",children:[e.jsx(a,{label:"React",onDelete:()=>{}}),e.jsx(a,{label:"TypeScript",onDelete:()=>{}}),e.jsx(a,{label:"Material-UI",onDelete:()=>{}}),e.jsx(a,{label:"Storybook",onDelete:()=>{}})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"User Tags"}),e.jsxs(l,{direction:"row",spacing:1,flexWrap:"wrap",children:[e.jsx(a,{label:"John Doe",avatar:e.jsx(i,{children:"JD"}),onDelete:()=>{}}),e.jsx(a,{label:"Jane Smith",avatar:e.jsx(i,{children:"JS"}),onDelete:()=>{}}),e.jsx(a,{label:"Bob Johnson",avatar:e.jsx(i,{children:"BJ"}),onDelete:()=>{}})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Category Tags"}),e.jsxs(l,{direction:"row",spacing:1,flexWrap:"wrap",children:[e.jsx(a,{label:"Frontend",color:"primary",variant:"outlined",clickable:!0}),e.jsx(a,{label:"Backend",color:"primary",variant:"outlined",clickable:!0}),e.jsx(a,{label:"DevOps",color:"primary",variant:"outlined",clickable:!0}),e.jsx(a,{label:"Design",color:"primary",variant:"outlined",clickable:!0})]})]}),e.jsxs(r,{children:[e.jsx(r,{sx:{mb:2,fontWeight:"bold"},children:"Status Indicators"}),e.jsxs(l,{direction:"row",spacing:1,flexWrap:"wrap",children:[e.jsx(a,{label:"Online",color:"success",size:"small"}),e.jsx(a,{label:"Away",color:"warning",size:"small"}),e.jsx(a,{label:"Busy",color:"error",size:"small"}),e.jsx(a,{label:"Offline",color:"default",size:"small"})]})]})]})}),parameters:{layout:"fullscreen"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source},description:{story:"Default chip",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
}`,...o.parameters?.docs?.source},description:{story:"Chip sizes",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Default" color="default" variant="filled" />
        <Chip label="Primary" color="primary" variant="filled" />
        <Chip label="Secondary" color="secondary" variant="filled" />
        <Chip label="Error" color="error" variant="filled" />
        <Chip label="Warning" color="warning" variant="filled" />
        <Chip label="Info" color="info" variant="filled" />
        <Chip label="Success" color="success" variant="filled" />
      </Stack>
    </Stack>
}`,...s.parameters?.docs?.source},description:{story:"Chip colors - Filled variant",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Default" color="default" variant="outlined" />
        <Chip label="Primary" color="primary" variant="outlined" />
        <Chip label="Secondary" color="secondary" variant="outlined" />
        <Chip label="Error" color="error" variant="outlined" />
        <Chip label="Warning" color="warning" variant="outlined" />
        <Chip label="Info" color="info" variant="outlined" />
        <Chip label="Success" color="success" variant="outlined" />
      </Stack>
    </Stack>
}`,...n.parameters?.docs?.source},description:{story:"Chip colors - Outlined variant",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Default Disabled" color="default" disabled />
        <Chip label="Primary Disabled" color="primary" disabled />
        <Chip label="Outlined Disabled" color="default" variant="outlined" disabled />
        <Chip label="Primary Outlined Disabled" color="primary" variant="outlined" disabled />
      </Stack>
    </Stack>
}`,...c.parameters?.docs?.source},description:{story:"Disabled chips",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} flexWrap="wrap">
      <Chip label="Clickable" clickable onClick={() => alert('Clicked!')} />
      <Chip label="Primary Clickable" color="primary" clickable onClick={() => alert('Clicked!')} />
      <Chip label="Outlined Clickable" variant="outlined" clickable onClick={() => alert('Clicked!')} />
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"Clickable chips",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Avatar" avatar={<Avatar>M</Avatar>} />
        <Chip label="Avatar Primary" color="primary" avatar={<Avatar>P</Avatar>} />
        <Chip label="Avatar Small" size="small" avatar={<Avatar size="18px">S</Avatar>} />
        <Chip label="Avatar Outlined" variant="outlined" avatar={<Avatar>O</Avatar>} />
      </Stack>
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"Chips with avatar",...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Deletable" onDelete={() => alert('Delete clicked!')} />
        <Chip label="Primary" color="primary" onDelete={() => alert('Delete clicked!')} />
        <Chip label="Small" size="small" onDelete={() => alert('Delete clicked!')} />
        <Chip label="Outlined" variant="outlined" onDelete={() => alert('Delete clicked!')} />
      </Stack>
    </Stack>
}`,...b.parameters?.docs?.source},description:{story:"Deletable chips",...b.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Complete" avatar={<Avatar>C</Avatar>} onDelete={() => alert('Delete clicked!')} />
        <Chip label="Primary" color="primary" avatar={<Avatar>P</Avatar>} onDelete={() => alert('Delete clicked!')} />
        <Chip label="Small" size="small" avatar={<Avatar size="18px">S</Avatar>} onDelete={() => alert('Delete clicked!')} />
        <Chip label="Outlined" variant="outlined" avatar={<Avatar>O</Avatar>} onDelete={() => alert('Delete clicked!')} />
      </Stack>
    </Stack>
}`,...m.parameters?.docs?.source},description:{story:"Chips with avatar and delete",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Medium - Default - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" />
            <Chip label="Clickable" onClick={() => {}} />
            <Chip label="Deletable" onDelete={() => {}} />
            <Chip label="Avatar" avatar={<Avatar>A</Avatar>} />
            <Chip label="Complete" avatar={<Avatar>C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Medium - Primary - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" color="primary" />
            <Chip label="Clickable" color="primary" onClick={() => {}} />
            <Chip label="Deletable" color="primary" onDelete={() => {}} />
            <Chip label="Avatar" color="primary" avatar={<Avatar>A</Avatar>} />
            <Chip label="Complete" color="primary" avatar={<Avatar>C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" color="primary" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Small - Default - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" />
            <Chip label="Clickable" size="small" onClick={() => {}} />
            <Chip label="Deletable" size="small" onDelete={() => {}} />
            <Chip label="Avatar" size="small" avatar={<Avatar size="18px">A</Avatar>} />
            <Chip label="Complete" size="small" avatar={<Avatar size="18px">C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" size="small" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Small - Primary - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" color="primary" />
            <Chip label="Clickable" size="small" color="primary" onClick={() => {}} />
            <Chip label="Deletable" size="small" color="primary" onDelete={() => {}} />
            <Chip label="Avatar" size="small" color="primary" avatar={<Avatar size="18px">A</Avatar>} />
            <Chip label="Complete" size="small" color="primary" avatar={<Avatar size="18px">C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" size="small" color="primary" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Medium - Default - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" variant="outlined" />
            <Chip label="Clickable" variant="outlined" onClick={() => {}} />
            <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
            <Chip label="Avatar" variant="outlined" avatar={<Avatar>A</Avatar>} />
            <Chip label="Complete" variant="outlined" avatar={<Avatar>C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" variant="outlined" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Medium - Primary - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" color="primary" variant="outlined" />
            <Chip label="Clickable" color="primary" variant="outlined" onClick={() => {}} />
            <Chip label="Deletable" color="primary" variant="outlined" onDelete={() => {}} />
            <Chip label="Avatar" color="primary" variant="outlined" avatar={<Avatar>A</Avatar>} />
            <Chip label="Complete" color="primary" variant="outlined" avatar={<Avatar>C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" color="primary" variant="outlined" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Small - Default - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" variant="outlined" />
            <Chip label="Clickable" size="small" variant="outlined" onClick={() => {}} />
            <Chip label="Deletable" size="small" variant="outlined" onDelete={() => {}} />
            <Chip label="Avatar" size="small" variant="outlined" avatar={<Avatar size="18px">A</Avatar>} />
            <Chip label="Complete" size="small" variant="outlined" avatar={<Avatar size="18px">C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" size="small" variant="outlined" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Small - Primary - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" color="primary" variant="outlined" />
            <Chip label="Clickable" size="small" color="primary" variant="outlined" onClick={() => {}} />
            <Chip label="Deletable" size="small" color="primary" variant="outlined" onDelete={() => {}} />
            <Chip label="Avatar" size="small" color="primary" variant="outlined" avatar={<Avatar size="18px">A</Avatar>} />
            <Chip label="Complete" size="small" color="primary" variant="outlined" avatar={<Avatar size="18px">C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" size="small" color="primary" variant="outlined" disabled />
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...x.parameters?.docs?.source},description:{story:"All variants showcase",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Filter Tags</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="Active" color="success" size="small" />
            <Chip label="Pending" color="warning" size="small" />
            <Chip label="Cancelled" color="error" size="small" />
            <Chip label="All" size="small" />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Selected Items</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="React" onDelete={() => {}} />
            <Chip label="TypeScript" onDelete={() => {}} />
            <Chip label="Material-UI" onDelete={() => {}} />
            <Chip label="Storybook" onDelete={() => {}} />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>User Tags</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="John Doe" avatar={<Avatar>JD</Avatar>} onDelete={() => {}} />
            <Chip label="Jane Smith" avatar={<Avatar>JS</Avatar>} onDelete={() => {}} />
            <Chip label="Bob Johnson" avatar={<Avatar>BJ</Avatar>} onDelete={() => {}} />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Category Tags</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="Frontend" color="primary" variant="outlined" clickable />
            <Chip label="Backend" color="primary" variant="outlined" clickable />
            <Chip label="DevOps" color="primary" variant="outlined" clickable />
            <Chip label="Design" color="primary" variant="outlined" clickable />
          </Stack>
        </Box>

        <Box>
          <Box sx={{
          mb: 2,
          fontWeight: 'bold'
        }}>Status Indicators</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="Online" color="success" size="small" />
            <Chip label="Away" color="warning" size="small" />
            <Chip label="Busy" color="error" size="small" />
            <Chip label="Offline" color="default" size="small" />
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...h.parameters?.docs?.source},description:{story:"Real-world examples",...h.parameters?.docs?.description}}};const T=["Default","Sizes","ColorsFilled","ColorsOutlined","Disabled","Clickable","WithAvatar","Deletable","WithAvatarAndDelete","AllVariants","RealWorldExamples"];export{x as AllVariants,d as Clickable,s as ColorsFilled,n as ColorsOutlined,t as Default,b as Deletable,c as Disabled,h as RealWorldExamples,o as Sizes,p as WithAvatar,m as WithAvatarAndDelete,T as __namedExportsOrder,M as default};
