import{R,j as e,r as i}from"./iframe-BPbf4MnO.js";import{a as F,T as E}from"./Tabs-C-I_i8ZQ.js";import{M as d}from"./MaterialSymbol-DFTX9HeP.js";import{B as o}from"./Box-DCr-n08M.js";import{B as I}from"./Badge-6cK6S-xW.js";import{T as O}from"./Typography-JXIqQdEC.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-DpAFHVj5.js";import"./ButtonBase-COqR6ygO.js";import"./useForkRef-BpHYd2s2.js";import"./useEventCallback-CWPHUYlg.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-Bvzf3Z5_.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-ceg9wdw5.js";import"./resolveComponentProps-B0ZiqZCs.js";import"./useSlotProps-BYQZFWCa.js";import"./createSvgIcon-U23L9q-F.js";import"./usePreviousProps-CJNlvomE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const s=R.forwardRef(({value:n,onChange:l,children:r,variant:t="standard",indicatorColor:u="primary",textColor:C="primary",centered:B=!1,scrollButtons:P="auto",allowScrollButtonsMobile:M=!1,orientation:W="horizontal",TabIndicatorProps:D,ScrollButtonComponent:q,...A},N)=>e.jsx(F,{ref:N,value:n,onChange:l,variant:t,indicatorColor:u,textColor:C,centered:B,scrollButtons:P,allowScrollButtonsMobile:M,orientation:W,TabIndicatorProps:D,ScrollButtonComponent:q,...A,children:r}));s.displayName="Tabs";const a=R.forwardRef(({label:n,value:l,icon:r,disabled:t=!1,wrapped:u=!1,iconPosition:C="top",...B},P)=>e.jsx(E,{ref:P,label:n,value:l,icon:r,disabled:t,wrapped:u,iconPosition:C,...B}));a.displayName="Tab";s.__docgenInfo={description:"Tabs component for navigation between different views",methods:[],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"union",raw:"number | string | false",elements:[{name:"number"},{name:"string"},{name:"literal",value:"false"}]},description:"The value of the currently selected Tab"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: number | string) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component (typically Tab elements)"},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'scrollable' | 'fullWidth'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'scrollable'"},{name:"literal",value:"'fullWidth'"}]},description:`The variant of the tabs
@default 'standard'`,defaultValue:{value:"'standard'",computed:!1}},indicatorColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The indicator color
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},textColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'inherit'"}]},description:`The text color
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:`If true, the tabs are centered
@default false`,defaultValue:{value:"false",computed:!1}},scrollButtons:{required:!1,tsType:{name:"union",raw:"'auto' | true | false",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:`Determines the alignment of the scroll buttons
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}},allowScrollButtonsMobile:{required:!1,tsType:{name:"boolean"},description:`If true, allows scrolling the tabs with mouse wheel
@default false`,defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The component orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},TabIndicatorProps:{required:!1,tsType:{name:"MuiTabsProps['TabIndicatorProps']",raw:"MuiTabsProps['TabIndicatorProps']"},description:"Props applied to the TabIndicator element"},ScrollButtonComponent:{required:!1,tsType:{name:"MuiTabsProps['ScrollButtonComponent']",raw:"MuiTabsProps['ScrollButtonComponent']"},description:"Props applied to the ScrollButtonComponent element"}},composes:["MuiTabsProps"]};a.__docgenInfo={description:"Tab component for individual tab item",methods:[],displayName:"Tab",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label content"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The value of the tab"},icon:{required:!1,tsType:{name:"union",raw:"React.ReactElement | string",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"string"}]},description:"The icon element"},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the tab is disabled
@default false`,defaultValue:{value:"false",computed:!1}},wrapped:{required:!1,tsType:{name:"boolean"},description:`If true, the tab is wrapped
@default false`,defaultValue:{value:"false",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'start' | 'end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`The icon position
@default 'top'`,defaultValue:{value:"'top'",computed:!1}}},composes:["Omit"]};const oe={title:"Molecules/Tabs",component:s,parameters:{layout:"centered",docs:{description:{component:"Tabs make it easy to explore and switch between different views. They organize and allow navigation between groups of content that are related and at the same hierarchical level."}}},tags:["autodocs"],argTypes:{value:{control:"number",description:"The value of the currently selected Tab"},variant:{control:"select",options:["standard","scrollable","fullWidth"],description:"The variant of the tabs"},indicatorColor:{control:"select",options:["primary","secondary"],description:"The indicator color"},textColor:{control:"select",options:["primary","secondary","inherit"],description:"The text color"},centered:{control:"boolean",description:"If true, the tabs are centered"},orientation:{control:"select",options:["horizontal","vertical"],description:"The component orientation"}}};function c(n){const{children:l,value:r,index:t,...u}=n;return e.jsx("div",{role:"tabpanel",hidden:r!==t,id:`tabpanel-${t}`,"aria-labelledby":`tab-${t}`,...u,children:r===t&&e.jsx(o,{sx:{p:3},children:e.jsx(O,{children:l})})})}const b={args:{centered:!1,indicatorColor:"primary",textColor:"secondary",variant:"fullWidth",value:4,orientation:"vertical"},render:()=>{const[n,l]=i.useState(0);return e.jsxs(o,{sx:{width:500},children:[e.jsxs(s,{value:n,onChange:(r,t)=>l(t),children:[e.jsx(a,{label:"Tab 1"}),e.jsx(a,{label:"Tab 2"}),e.jsx(a,{label:"Tab 3"})]}),e.jsx(c,{value:n,index:0,children:"Content for Tab 1"}),e.jsx(c,{value:n,index:1,children:"Content for Tab 2"}),e.jsx(c,{value:n,index:2,children:"Content for Tab 3"})]})}},p={render:()=>{const[n,l]=i.useState(0);return e.jsxs(o,{sx:{width:500},children:[e.jsxs(s,{value:n,onChange:(r,t)=>l(t),children:[e.jsx(a,{icon:e.jsx(d,{icon:"phone"}),label:"Calls"}),e.jsx(a,{icon:e.jsx(d,{icon:"favorite"}),label:"Favorites"}),e.jsx(a,{icon:e.jsx(d,{icon:"person_pin"}),label:"Contacts"})]}),e.jsx(c,{value:n,index:0,children:"Recent calls"}),e.jsx(c,{value:n,index:1,children:"Favorite contacts"}),e.jsx(c,{value:n,index:2,children:"All contacts"})]})}},m={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:400},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),children:[e.jsx(a,{icon:e.jsx(d,{icon:"home"}),"aria-label":"home"}),e.jsx(a,{icon:e.jsx(d,{icon:"favorite"}),"aria-label":"favorites"}),e.jsx(a,{icon:e.jsx(d,{icon:"shopping_cart"}),"aria-label":"cart"})]})})}},h={render:()=>{const[n,l]=i.useState(0);return e.jsxs(o,{sx:{width:600},children:[e.jsxs(s,{value:n,onChange:(r,t)=>l(t),variant:"fullWidth",children:[e.jsx(a,{label:"Overview"}),e.jsx(a,{label:"Details"}),e.jsx(a,{label:"Settings"})]}),e.jsx(c,{value:n,index:0,children:"Overview content"}),e.jsx(c,{value:n,index:1,children:"Detailed information"}),e.jsx(c,{value:n,index:2,children:"Settings panel"})]})}},x={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:600},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),centered:!0,children:[e.jsx(a,{label:"Tab 1"}),e.jsx(a,{label:"Tab 2"}),e.jsx(a,{label:"Tab 3"})]})})}},T={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:400},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),variant:"scrollable",scrollButtons:"auto",children:[e.jsx(a,{label:"Item One"}),e.jsx(a,{label:"Item Two"}),e.jsx(a,{label:"Item Three"}),e.jsx(a,{label:"Item Four"}),e.jsx(a,{label:"Item Five"}),e.jsx(a,{label:"Item Six"}),e.jsx(a,{label:"Item Seven"})]})})}},v={args:{value:1},render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:400},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[e.jsx(a,{label:"Tab 1"}),e.jsx(a,{label:"Tab 2"}),e.jsx(a,{label:"Tab 3"}),e.jsx(a,{label:"Tab 4"}),e.jsx(a,{label:"Tab 5"}),e.jsx(a,{label:"Tab 6"})]})})}},f={render:()=>{const[n,l]=i.useState(0);return e.jsxs(o,{sx:{display:"flex",height:300},children:[e.jsxs(s,{value:n,onChange:(r,t)=>l(t),orientation:"vertical",sx:{borderRight:1,borderColor:"divider"},children:[e.jsx(a,{label:"Profile"}),e.jsx(a,{label:"Security"}),e.jsx(a,{label:"Notifications"}),e.jsx(a,{label:"Billing"})]}),e.jsx(c,{value:n,index:0,children:"Profile settings"}),e.jsx(c,{value:n,index:1,children:"Security settings"}),e.jsx(c,{value:n,index:2,children:"Notification preferences"}),e.jsx(c,{value:n,index:3,children:"Billing information"})]})}},y={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:500},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),indicatorColor:"secondary",textColor:"secondary",children:[e.jsx(a,{label:"Active"}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Active"})]})})}},g={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:500},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),children:[e.jsx(a,{label:"Active"}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Active"}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Active"})]})})}},j={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:500},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),children:[e.jsx(a,{label:"Messages",icon:e.jsx(I,{badgeContent:4,color:"primary"})}),e.jsx(a,{label:"Notifications",icon:e.jsx(I,{badgeContent:12,color:"secondary"})}),e.jsx(a,{label:"Updates"})]})})}},w={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:600},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),children:[e.jsx(a,{icon:e.jsx(d,{icon:"phone"}),label:"Top (default)",iconPosition:"top"}),e.jsx(a,{icon:e.jsx(d,{icon:"phone"}),label:"Bottom",iconPosition:"bottom"}),e.jsx(a,{icon:e.jsx(d,{icon:"phone"}),label:"Start",iconPosition:"start"}),e.jsx(a,{icon:e.jsx(d,{icon:"phone"}),label:"End",iconPosition:"end"})]})})}},S={render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:400},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),children:[e.jsx(a,{label:"Short"}),e.jsx(a,{wrapped:!0,label:"This is a very long tab label that wraps"}),e.jsx(a,{label:"Short"})]})})}},V={args:{indicatorColor:"primary",variant:"scrollable"},render:()=>{const[n,l]=i.useState(0);return e.jsx(o,{sx:{width:500},children:e.jsxs(s,{value:n,onChange:(r,t)=>l(t),TabIndicatorProps:{style:{backgroundColor:"#ff6b6b",height:4}},sx:{"& .MuiTab-root":{fontWeight:"bold",fontSize:"1rem"}},children:[e.jsx(a,{label:"Dashboard"}),e.jsx(a,{label:"Analytics"}),e.jsx(a,{label:"Reports"})]})})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    centered: false,
    indicatorColor: "primary",
    textColor: "secondary",
    variant: "fullWidth",
    value: 4,
    orientation: "vertical"
  },
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Content for Tab 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content for Tab 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content for Tab 3
        </TabPanel>
      </Box>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Default Tabs with panels",...b.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<MaterialSymbol icon="phone" />} label="Calls" />
          <Tab icon={<MaterialSymbol icon="favorite" />} label="Favorites" />
          <Tab icon={<MaterialSymbol icon="person_pin" />} label="Contacts" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Recent calls
        </TabPanel>
        <TabPanel value={value} index={1}>
          Favorite contacts
        </TabPanel>
        <TabPanel value={value} index={2}>
          All contacts
        </TabPanel>
      </Box>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Tabs with icons",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<MaterialSymbol icon="home" />} aria-label="home" />
          <Tab icon={<MaterialSymbol icon="favorite" />} aria-label="favorites" />
          <Tab icon={<MaterialSymbol icon="shopping_cart" />} aria-label="cart" />
        </Tabs>
      </Box>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Icon-only tabs",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 600
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="fullWidth">
          <Tab label="Overview" />
          <Tab label="Details" />
          <Tab label="Settings" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Overview content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Detailed information
        </TabPanel>
        <TabPanel value={value} index={2}>
          Settings panel
        </TabPanel>
      </Box>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Full width tabs",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 600
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} centered>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Box>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Centered tabs",...x.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="scrollable" scrollButtons="auto">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Scrollable tabs",...T.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1
  },
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="scrollable" scrollButtons allowScrollButtonsMobile>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
          <Tab label="Tab 4" />
          <Tab label="Tab 5" />
          <Tab label="Tab 6" />
        </Tabs>
      </Box>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Scrollable with forced scroll buttons",...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      display: 'flex',
      height: 300
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} orientation="vertical" sx={{
        borderRight: 1,
        borderColor: 'divider'
      }}>
          <Tab label="Profile" />
          <Tab label="Security" />
          <Tab label="Notifications" />
          <Tab label="Billing" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Profile settings
        </TabPanel>
        <TabPanel value={value} index={1}>
          Security settings
        </TabPanel>
        <TabPanel value={value} index={2}>
          Notification preferences
        </TabPanel>
        <TabPanel value={value} index={3}>
          Billing information
        </TabPanel>
      </Box>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Vertical tabs",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} indicatorColor="secondary" textColor="secondary">
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Box>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Secondary color",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Box>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Disabled tabs",...g.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Messages" icon={<Badge badgeContent={4} color="primary" />} />
          <Tab label="Notifications" icon={<Badge badgeContent={12} color="secondary" />} />
          <Tab label="Updates" />
        </Tabs>
      </Box>;
  }
}`,...j.parameters?.docs?.source},description:{story:"Tabs with badge",...j.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 600
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<MaterialSymbol icon="phone" />} label="Top (default)" iconPosition="top" />
          <Tab icon={<MaterialSymbol icon="phone" />} label="Bottom" iconPosition="bottom" />
          <Tab icon={<MaterialSymbol icon="phone" />} label="Start" iconPosition="start" />
          <Tab icon={<MaterialSymbol icon="phone" />} label="End" iconPosition="end" />
        </Tabs>
      </Box>;
  }
}`,...w.parameters?.docs?.source},description:{story:"Icon position variants",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Short" />
          <Tab wrapped label="This is a very long tab label that wraps" />
          <Tab label="Short" />
        </Tabs>
      </Box>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Wrapped tab labels",...S.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    indicatorColor: "primary",
    variant: "scrollable"
  },
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} TabIndicatorProps={{
        style: {
          backgroundColor: '#ff6b6b',
          height: 4
        }
      }} sx={{
        '& .MuiTab-root': {
          fontWeight: 'bold',
          fontSize: '1rem'
        }
      }}>
          <Tab label="Dashboard" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
        </Tabs>
      </Box>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Custom styling",...V.parameters?.docs?.description}}};const ie=["Default","WithIcons","IconOnly","FullWidth","Centered","Scrollable","ScrollableForced","Vertical","SecondaryColor","WithDisabled","WithBadge","IconPositions","WrappedLabels","CustomStyling"];export{x as Centered,V as CustomStyling,b as Default,h as FullWidth,m as IconOnly,w as IconPositions,T as Scrollable,v as ScrollableForced,y as SecondaryColor,f as Vertical,j as WithBadge,g as WithDisabled,p as WithIcons,S as WrappedLabels,ie as __namedExportsOrder,oe as default};
