import{R as v,j as t}from"./iframe-zeeDxUUo.js";import{s as R}from"./memoTheme-DdwYAhEk.js";import{T as D}from"./Tooltip-CIYtodml.js";import{B as o}from"./Button-CSSg-efm.js";import{I as a}from"./IconButton-yk9nOstn.js";import{M as s}from"./MaterialSymbol-DioViiQf.js";import{B as r}from"./Box-BNcCJ4TC.js";import{S as l}from"./Stack-CcurOuc4.js";import{T as i}from"./Typography-Bhs7JO2Z.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BOjxn6IZ.js";import"./useSlot-c1o1rjQ3.js";import"./resolveComponentProps-D0MAhnil.js";import"./useForkRef-DAPN11UK.js";import"./ButtonBase-BxiEgOWN.js";import"./useEventCallback-xd_OPibr.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-DCnw2Mat.js";import"./getReactElementRef-Zt7I0qGC.js";import"./Grow-D9TYHJo4.js";import"./utils-oWGx_9ve.js";import"./index-DSi2Tpba.js";import"./index-DlptTVzo.js";import"./Popper-CDQQQfPz.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DpuageQq.js";import"./useSlotProps-BpQ4xduo.js";import"./Button-BH_WT_9C.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DC82JayO.js";import"./IconButton-DriAkU7Q.js";import"./styled-CCPHBhBF.js";import"./useThemeProps-DBPwOPyu.js";const S=R(v.forwardRef(({className:n,...b},w)=>t.jsx(D,{ref:w,...b,classes:{popper:n}})))(({theme:n})=>({"& .MuiTooltip-tooltip":{backgroundColor:"rgba(97, 97, 97, 0.9)",color:n.palette.common.white,fontSize:"0.625rem",fontWeight:n.typography.fontWeightMedium,lineHeight:"14px",padding:"4px 8px",borderRadius:n.shape.sm,fontFamily:n.typography.fontFamily},"& .MuiTooltip-arrow":{color:"rgba(97, 97, 97, 0.9)"}}));S.displayName="StyledTooltip";const e=v.forwardRef(({children:n,arrow:b=!0,placement:w="bottom",...M},C)=>t.jsx(S,{ref:C,arrow:b,placement:w,...M,children:n}));e.displayName="Tooltip";e.__docgenInfo={description:`Tooltip component

Tooltips display informative text when users hover over, focus on, or tap an element.

@param props - Tooltip component props
@returns Tooltip component`,methods:[],displayName:"Tooltip",props:{title:{required:!0,tsType:{name:"NonNullable",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"NonNullable<React.ReactNode>"},description:`Tooltip title/content
Required when the component is not used as a simple wrapper`},placement:{required:!1,tsType:{name:"union",raw:`| 'bottom-end'
| 'bottom-start'
| 'bottom'
| 'left-end'
| 'left-start'
| 'left'
| 'right-end'
| 'right-start'
| 'right'
| 'top-end'
| 'top-start'
| 'top'`,elements:[{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top'"}]},description:`The placement of the tooltip
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},arrow:{required:!1,tsType:{name:"boolean"},description:`If true, adds an arrow to the tooltip
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["MuiTooltipProps"]};const pt={title:"Atoms/Tooltip",component:e,tags:["autodocs"],argTypes:{title:{control:"text",description:"Tooltip content"},placement:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],description:"Tooltip placement relative to the child element"},arrow:{control:"boolean",description:"If true, adds an arrow to the tooltip"},enterDelay:{control:"number",description:"The number of milliseconds to wait before showing the tooltip"},leaveDelay:{control:"number",description:"The number of milliseconds to wait before hiding the tooltip"},disableHoverListener:{control:"boolean",description:"If true, do not respond to hover events"},disableFocusListener:{control:"boolean",description:"If true, do not respond to focus events"},disableTouchListener:{control:"boolean",description:"If true, do not respond to touch events"},open:{control:"boolean",description:"If true, the tooltip is shown (controlled mode)"}},args:{title:"My Tooltip",arrow:!0,placement:"bottom"}},p={args:{title:"My Tooltip"},render:n=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(e,{...n,children:t.jsx(o,{children:"Hover me"})})})},c={args:{title:"My Tooltip",arrow:!1},render:n=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(e,{...n,children:t.jsx(o,{children:"Hover me"})})})},d={args:{title:"My Tooltip",placement:"top"},render:n=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(e,{...n,children:t.jsx(o,{children:"Top"})})})},m={args:{title:"My Tooltip",placement:"bottom"},render:n=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(e,{...n,children:t.jsx(o,{children:"Bottom"})})})},x={args:{title:"My Tooltip",placement:"left"},render:n=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(e,{...n,children:t.jsx(o,{children:"Left"})})})},h={args:{title:"My Tooltip",placement:"right"},render:n=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:8},children:t.jsx(e,{...n,children:t.jsx(o,{children:"Right"})})})},u={render:()=>t.jsx(r,{sx:{p:8},children:t.jsxs(l,{spacing:4,children:[t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Top Placements"}),t.jsxs(l,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(e,{title:"Top Start",placement:"top-start",children:t.jsx(o,{children:"Top Start"})}),t.jsx(e,{title:"Top",placement:"top",children:t.jsx(o,{children:"Top"})}),t.jsx(e,{title:"Top End",placement:"top-end",children:t.jsx(o,{children:"Top End"})})]})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Bottom Placements"}),t.jsxs(l,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(e,{title:"Bottom Start",placement:"bottom-start",children:t.jsx(o,{children:"Bottom Start"})}),t.jsx(e,{title:"Bottom",placement:"bottom",children:t.jsx(o,{children:"Bottom"})}),t.jsx(e,{title:"Bottom End",placement:"bottom-end",children:t.jsx(o,{children:"Bottom End"})})]})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Left Placements"}),t.jsxs(l,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(e,{title:"Left Start",placement:"left-start",children:t.jsx(o,{children:"Left Start"})}),t.jsx(e,{title:"Left",placement:"left",children:t.jsx(o,{children:"Left"})}),t.jsx(e,{title:"Left End",placement:"left-end",children:t.jsx(o,{children:"Left End"})})]})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Right Placements"}),t.jsxs(l,{direction:"row",spacing:2,justifyContent:"center",children:[t.jsx(e,{title:"Right Start",placement:"right-start",children:t.jsx(o,{children:"Right Start"})}),t.jsx(e,{title:"Right",placement:"right",children:t.jsx(o,{children:"Right"})}),t.jsx(e,{title:"Right End",placement:"right-end",children:t.jsx(o,{children:"Right End"})})]})]})]})}),parameters:{layout:"fullscreen"}},y={render:()=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsxs(l,{direction:"row",spacing:2,children:[t.jsx(e,{title:"Delete",children:t.jsx(a,{"aria-label":"delete",children:t.jsx(s,{icon:"delete"})})}),t.jsx(e,{title:"Add",children:t.jsx(a,{"aria-label":"add",children:t.jsx(s,{icon:"add"})})})]})})},T={render:()=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsxs(l,{direction:"row",spacing:2,children:[t.jsx(e,{title:"Default delay",children:t.jsx(o,{children:"Default"})}),t.jsx(e,{title:"500ms enter delay",enterDelay:500,children:t.jsx(o,{children:"Enter Delay 500ms"})}),t.jsx(e,{title:"500ms leave delay",leaveDelay:500,children:t.jsx(o,{children:"Leave Delay 500ms"})})]})})},g={render:()=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(e,{title:t.jsxs(r,{children:[t.jsx(i,{variant:"subtitle2",sx:{color:"inherit"},children:"Complex Tooltip"}),t.jsx(i,{variant:"body2",sx:{color:"inherit",mt:.5},children:"This tooltip contains multiple lines of text and can include rich content."})]}),children:t.jsx(o,{children:"Hover for complex tooltip"})})})},B={render:()=>t.jsx(r,{sx:{display:"flex",justifyContent:"center",p:4},children:t.jsx(e,{title:"This tooltip is always visible",open:!0,children:t.jsx(o,{children:"Always showing tooltip"})})})},j={render:()=>t.jsx(r,{sx:{p:4},children:t.jsxs(l,{spacing:4,children:[t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Action Buttons with Tooltips"}),t.jsxs(l,{direction:"row",spacing:1,children:[t.jsx(e,{title:"Save changes",children:t.jsx(a,{"aria-label":"save",children:t.jsx(s,{icon:"add"})})}),t.jsx(e,{title:"Delete item",children:t.jsx(a,{"aria-label":"delete",color:"error",children:t.jsx(s,{icon:"delete"})})})]})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Help Text"}),t.jsx(e,{title:"Click to learn more about this feature",children:t.jsx(o,{variant:"outlined",children:"What's this?"})})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Disabled Button with Tooltip"}),t.jsx(e,{title:"This feature is coming soon",children:t.jsx("span",{children:t.jsx(o,{disabled:!0,children:"Coming Soon"})})})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h6",sx:{mb:2},children:"Long Text Truncation"}),t.jsx(e,{title:"This is a very long text that would be truncated in the UI but fully visible in the tooltip",children:t.jsx(i,{sx:{maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"This is a very long text that would be truncated..."})})]})]})}),parameters:{layout:"fullscreen"}},f={render:()=>t.jsx(r,{sx:{p:4},children:t.jsxs(l,{spacing:4,children:[t.jsxs(r,{children:[t.jsx(i,{variant:"h4",gutterBottom:!0,children:"Tooltip Placements"}),t.jsxs(r,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:4,mt:4},children:[t.jsx(r,{textAlign:"center",children:t.jsx(e,{title:"Top",placement:"top",children:t.jsx(o,{children:"Top"})})}),t.jsx(r,{textAlign:"center",children:t.jsx(e,{title:"Bottom",placement:"bottom",children:t.jsx(o,{children:"Bottom"})})}),t.jsx(r,{textAlign:"center",children:t.jsx(e,{title:"Left",placement:"left",children:t.jsx(o,{children:"Left"})})}),t.jsx(r,{textAlign:"center",children:t.jsx(e,{title:"Right",placement:"right",children:t.jsx(o,{children:"Right"})})}),t.jsx(r,{textAlign:"center",children:t.jsx(e,{title:"No Arrow",arrow:!1,children:t.jsx(o,{children:"No Arrow"})})})]})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h4",gutterBottom:!0,children:"With Icon Buttons"}),t.jsxs(l,{direction:"row",spacing:2,sx:{mt:2},children:[t.jsx(e,{title:"Add item",children:t.jsx(a,{"aria-label":"add",children:t.jsx(s,{icon:"add"})})}),t.jsx(e,{title:"Delete item",children:t.jsx(a,{"aria-label":"delete",color:"error",children:t.jsx(s,{icon:"delete"})})})]})]}),t.jsxs(r,{children:[t.jsx(i,{variant:"h4",gutterBottom:!0,children:"Custom Delays"}),t.jsxs(l,{direction:"row",spacing:2,sx:{mt:2},children:[t.jsx(e,{title:"Instant",children:t.jsx(o,{children:"Instant"})}),t.jsx(e,{title:"Delayed (500ms)",enterDelay:500,children:t.jsx(o,{children:"Delayed"})})]})]})]})}),parameters:{layout:"fullscreen"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"Default tooltip with arrow",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    arrow: false
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"Tooltip without arrow",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'top'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Top</Button>
      </Tooltip>
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"Tooltip positioned at the top",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'bottom'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Bottom</Button>
      </Tooltip>
    </Box>
}`,...m.parameters?.docs?.source},description:{story:"Tooltip positioned at the bottom",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'left'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Left</Button>
      </Tooltip>
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"Tooltip positioned on the left",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Tooltip',
    placement: 'right'
  },
  render: args => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 8
  }}>
      <Tooltip {...args}>
        <Button>Right</Button>
      </Tooltip>
    </Box>
}`,...h.parameters?.docs?.source},description:{story:"Tooltip positioned on the right",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 8
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Top Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Top Start" placement="top-start">
              <Button>Top Start</Button>
            </Tooltip>
            <Tooltip title="Top" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip title="Top End" placement="top-end">
              <Button>Top End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Bottom Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Bottom Start" placement="bottom-start">
              <Button>Bottom Start</Button>
            </Tooltip>
            <Tooltip title="Bottom" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip title="Bottom End" placement="bottom-end">
              <Button>Bottom End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Left Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Left Start" placement="left-start">
              <Button>Left Start</Button>
            </Tooltip>
            <Tooltip title="Left" placement="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip title="Left End" placement="left-end">
              <Button>Left End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Right Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Right Start" placement="right-start">
              <Button>Right Start</Button>
            </Tooltip>
            <Tooltip title="Right" placement="right">
              <Button>Right</Button>
            </Tooltip>
            <Tooltip title="Right End" placement="right-end">
              <Button>Right End</Button>
            </Tooltip>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...u.parameters?.docs?.source},description:{story:"All placement options",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <MaterialSymbol icon="delete" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add">
          <IconButton aria-label="add">
            <MaterialSymbol icon="add" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
}`,...y.parameters?.docs?.source},description:{story:"Tooltip with icon button",...y.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Default delay">
          <Button>Default</Button>
        </Tooltip>
        <Tooltip title="500ms enter delay" enterDelay={500}>
          <Button>Enter Delay 500ms</Button>
        </Tooltip>
        <Tooltip title="500ms leave delay" leaveDelay={500}>
          <Button>Leave Delay 500ms</Button>
        </Tooltip>
      </Stack>
    </Box>
}`,...T.parameters?.docs?.source},description:{story:"Tooltip with custom delay",...T.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip title={<Box>
            <MuiTypography variant="subtitle2" sx={{
        color: 'inherit'
      }}>
              Complex Tooltip
            </MuiTypography>
            <MuiTypography variant="body2" sx={{
        color: 'inherit',
        mt: 0.5
      }}>
              This tooltip contains multiple lines of text and can include rich content.
            </MuiTypography>
          </Box>}>
        <Button>Hover for complex tooltip</Button>
      </Tooltip>
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"Tooltip with complex content",...g.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    p: 4
  }}>
      <Tooltip title="This tooltip is always visible" open={true}>
        <Button>Always showing tooltip</Button>
      </Tooltip>
    </Box>
}`,...B.parameters?.docs?.source},description:{story:"Controlled tooltip (always open)",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Action Buttons with Tooltips
          </MuiTypography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Save changes">
              <IconButton aria-label="save">
                <MaterialSymbol icon="add" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <MaterialSymbol icon="delete" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Help Text
          </MuiTypography>
          <Tooltip title="Click to learn more about this feature">
            <Button variant="outlined">What's this?</Button>
          </Tooltip>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Disabled Button with Tooltip
          </MuiTypography>
          <Tooltip title="This feature is coming soon">
            {/* Wrap disabled button in span to make tooltip work */}
            <span>
              <Button disabled>Coming Soon</Button>
            </span>
          </Tooltip>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{
          mb: 2
        }}>
            Long Text Truncation
          </MuiTypography>
          <Tooltip title="This is a very long text that would be truncated in the UI but fully visible in the tooltip">
            <MuiTypography sx={{
            maxWidth: 200,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
              This is a very long text that would be truncated...
            </MuiTypography>
          </Tooltip>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...j.parameters?.docs?.source},description:{story:"Real-world examples",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Tooltip Placements
          </MuiTypography>
          <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,
          mt: 4
        }}>
            <Box textAlign="center">
              <Tooltip title="Top" placement="top">
                <Button>Top</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Bottom" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Left" placement="left">
                <Button>Left</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Right" placement="right">
                <Button>Right</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="No Arrow" arrow={false}>
                <Button>No Arrow</Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box>
          <MuiTypography variant="h4" gutterBottom>
            With Icon Buttons
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{
          mt: 2
        }}>
            <Tooltip title="Add item">
              <IconButton aria-label="add">
                <MaterialSymbol icon="add" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <MaterialSymbol icon="delete" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Custom Delays
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{
          mt: 2
        }}>
            <Tooltip title="Instant">
              <Button>Instant</Button>
            </Tooltip>
            <Tooltip title="Delayed (500ms)" enterDelay={500}>
              <Button>Delayed</Button>
            </Tooltip>
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...f.parameters?.docs?.source},description:{story:"Full showcase",...f.parameters?.docs?.description}}};const ct=["Default","WithoutArrow","PlacementTop","PlacementBottom","PlacementLeft","PlacementRight","AllPlacements","WithIconButton","WithDelay","ComplexContent","Controlled","RealWorldExamples","FullShowcase"];export{u as AllPlacements,g as ComplexContent,B as Controlled,p as Default,f as FullShowcase,m as PlacementBottom,x as PlacementLeft,h as PlacementRight,d as PlacementTop,j as RealWorldExamples,T as WithDelay,y as WithIconButton,c as WithoutArrow,ct as __namedExportsOrder,pt as default};
