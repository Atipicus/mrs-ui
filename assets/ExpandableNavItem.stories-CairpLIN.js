import{j as e,R as S}from"./iframe-Bf0p-10g.js";import{E as l,D as r,S as s}from"./Send-BHvoTdH4.js";import{I as t}from"./Inbox-Ivgp9qlF.js";import{c as D}from"./createSvgIcon-Doqq-Dps.js";import{L as j}from"./List-CE1qvQVt.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BbnQPM-2.js";import"./ListItemButton-0EowQ0oD.js";import"./createSimplePaletteValueFilter-CFqqyMQL.js";import"./ListContext-BkplqCot.js";import"./listItemButtonClasses-hOHFse_1.js";import"./useForkRef-mnbaXvWm.js";import"./ButtonBase-CK-fqNHV.js";import"./useEventCallback-BOWsNkBB.js";import"./isFocusVisible-B8k4qzLc.js";import"./ListItemIcon-CB6tLFN0.js";import"./listItemIconClasses-BibaDTRy.js";import"./ListItemText-TQZkK7wL.js";import"./listItemTextClasses-vtqqJ3Sq.js";import"./useSlot-DCrjdO1I.js";import"./resolveComponentProps-CgVaspa1.js";import"./Typography-Dv1Rwxa5.js";import"./utils-CtxyYRZu.js";import"./index-CoZST3LT.js";import"./index-2oKovSle.js";const C=D(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorder"),U={title:"Molecules/ExpandableNavItem",component:l,tags:["autodocs"],decorators:[a=>e.jsx(j,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsx(a,{})})]},c={render:()=>e.jsx(l,{label:"Inbox",icon:e.jsx(t,{}),isOpen:!1,children:[{label:"All Mail",icon:e.jsx(r,{})},{label:"Sent",icon:e.jsx(s,{})},{label:"Drafts",icon:e.jsx(r,{})}]})},i={render:()=>e.jsx(l,{label:"Inbox",icon:e.jsx(t,{}),isOpen:!0,children:[{label:"All Mail",icon:e.jsx(r,{})},{label:"Sent",icon:e.jsx(s,{})},{label:"Drafts",icon:e.jsx(r,{})}]})},d={render:()=>e.jsx(l,{label:"Categories",isOpen:!1,children:[{label:"Technology"},{label:"Design"},{label:"Business"}]})},p={render:()=>e.jsx(l,{label:"Inbox",icon:e.jsx(t,{}),isOpen:!0,selected:!0,children:[{label:"All Mail",icon:e.jsx(r,{})},{label:"Sent",icon:e.jsx(s,{})}]})},b={render:()=>e.jsx(l,{label:"Inbox",icon:e.jsx(t,{}),isOpen:!0,children:[{label:"All Mail",icon:e.jsx(r,{})},{label:"Sent",icon:e.jsx(s,{}),selected:!0},{label:"Drafts",icon:e.jsx(r,{})}]})},m={render:()=>e.jsx(l,{label:"Inbox",icon:e.jsx(t,{}),isOpen:!1,onClick:()=>alert("Parent clicked"),children:[{label:"All Mail",icon:e.jsx(r,{}),onClick:()=>alert("All Mail clicked")},{label:"Sent",icon:e.jsx(s,{}),onClick:()=>alert("Sent clicked")},{label:"Drafts",icon:e.jsx(r,{}),onClick:()=>alert("Drafts clicked")}]})},x={render:()=>{const[a,h]=S.useState(!1),[o,n]=S.useState(null);return e.jsx(l,{label:"Products",icon:e.jsx(t,{}),isOpen:a,onToggle:()=>h(!a),children:[{label:"All Products",icon:e.jsx(C,{}),selected:o===0,onClick:()=>n(0)},{label:"Categories",selected:o===1,onClick:()=>n(1)},{label:"Tags",selected:o===2,onClick:()=>n(2)}]})}},u={render:()=>{const[a,h]=S.useState({inbox:!1,starred:!1}),o=n=>{h(f=>({...f,[n]:!f[n]}))};return e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"Inbox",icon:e.jsx(t,{}),isOpen:a.inbox,onToggle:()=>o("inbox"),children:[{label:"All Mail",icon:e.jsx(r,{})},{label:"Sent",icon:e.jsx(s,{})}]}),e.jsx(l,{label:"Starred",icon:e.jsx(C,{}),isOpen:a.starred,onToggle:()=>o("starred"),children:[{label:"Important"},{label:"Favorites"}]})]})},decorators:[a=>e.jsx(j,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsx(a,{})})]},I={render:()=>e.jsx(l,{label:"Documentation",icon:e.jsx(t,{}),isOpen:!0,children:[{label:"Getting Started"},{label:"Components"},{label:"API Reference"},{label:"Guides"},{label:"Examples"},{label:"FAQ"},{label:"Changelog"},{label:"Contributing"}]})},g={render:()=>e.jsx(l,{label:"Very Long Parent Label That Might Wrap",icon:e.jsx(t,{}),isOpen:!0,children:[{label:"This is a very long child item label that might wrap to multiple lines"},{label:"Another long label for testing purposes"},{label:"Short label"}]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<InboxIcon />} isOpen={false} children={[{
    label: 'All Mail',
    icon: <DraftsIcon />
  }, {
    label: 'Sent',
    icon: <SendIcon />
  }, {
    label: 'Drafts',
    icon: <DraftsIcon />
  }]} />
}`,...c.parameters?.docs?.source},description:{story:"Default expandable navigation item with icon",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<InboxIcon />} isOpen={true} children={[{
    label: 'All Mail',
    icon: <DraftsIcon />
  }, {
    label: 'Sent',
    icon: <SendIcon />
  }, {
    label: 'Drafts',
    icon: <DraftsIcon />
  }]} />
}`,...i.parameters?.docs?.source},description:{story:"Expanded state",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Categories" isOpen={false} children={[{
    label: 'Technology'
  }, {
    label: 'Design'
  }, {
    label: 'Business'
  }]} />
}`,...d.parameters?.docs?.source},description:{story:"Without icon",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<InboxIcon />} isOpen={true} selected={true} children={[{
    label: 'All Mail',
    icon: <DraftsIcon />
  }, {
    label: 'Sent',
    icon: <SendIcon />
  }]} />
}`,...p.parameters?.docs?.source},description:{story:"Selected parent item",...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<InboxIcon />} isOpen={true} children={[{
    label: 'All Mail',
    icon: <DraftsIcon />
  }, {
    label: 'Sent',
    icon: <SendIcon />,
    selected: true
  }, {
    label: 'Drafts',
    icon: <DraftsIcon />
  }]} />
}`,...b.parameters?.docs?.source},description:{story:"Selected child item",...b.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<InboxIcon />} isOpen={false} onClick={() => alert('Parent clicked')} children={[{
    label: 'All Mail',
    icon: <DraftsIcon />,
    onClick: () => alert('All Mail clicked')
  }, {
    label: 'Sent',
    icon: <SendIcon />,
    onClick: () => alert('Sent clicked')
  }, {
    label: 'Drafts',
    icon: <DraftsIcon />,
    onClick: () => alert('Drafts clicked')
  }]} />
}`,...m.parameters?.docs?.source},description:{story:"With click handlers",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [selectedChild, setSelectedChild] = React.useState<number | null>(null);
    return <ExpandableNavItem label="Products" icon={<InboxIcon />} isOpen={open} onToggle={() => setOpen(!open)} children={[{
      label: 'All Products',
      icon: <StarBorderIcon />,
      selected: selectedChild === 0,
      onClick: () => setSelectedChild(0)
    }, {
      label: 'Categories',
      selected: selectedChild === 1,
      onClick: () => setSelectedChild(1)
    }, {
      label: 'Tags',
      selected: selectedChild === 2,
      onClick: () => setSelectedChild(2)
    }]} />;
  }
}`,...x.parameters?.docs?.source},description:{story:"Interactive example with state management",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
      inbox: false,
      starred: false
    });
    const toggleItem = (key: string) => {
      setOpenItems(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    return <>
        <ExpandableNavItem label="Inbox" icon={<InboxIcon />} isOpen={openItems.inbox} onToggle={() => toggleItem('inbox')} children={[{
        label: 'All Mail',
        icon: <DraftsIcon />
      }, {
        label: 'Sent',
        icon: <SendIcon />
      }]} />
        <ExpandableNavItem label="Starred" icon={<StarBorderIcon />} isOpen={openItems.starred} onToggle={() => toggleItem('starred')} children={[{
        label: 'Important'
      }, {
        label: 'Favorites'
      }]} />
      </>;
  },
  decorators: [Story => <List sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>
        <Story />
      </List>]
}`,...u.parameters?.docs?.source},description:{story:"Multiple expandable items",...u.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Documentation" icon={<InboxIcon />} isOpen={true} children={[{
    label: 'Getting Started'
  }, {
    label: 'Components'
  }, {
    label: 'API Reference'
  }, {
    label: 'Guides'
  }, {
    label: 'Examples'
  }, {
    label: 'FAQ'
  }, {
    label: 'Changelog'
  }, {
    label: 'Contributing'
  }]} />
}`,...I.parameters?.docs?.source},description:{story:"Deep nesting (parent with many children)",...I.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Very Long Parent Label That Might Wrap" icon={<InboxIcon />} isOpen={true} children={[{
    label: 'This is a very long child item label that might wrap to multiple lines'
  }, {
    label: 'Another long label for testing purposes'
  }, {
    label: 'Short label'
  }]} />
}`,...g.parameters?.docs?.source},description:{story:"Long label text",...g.parameters?.docs?.description}}};const X=["Default","Expanded","WithoutIcon","SelectedParent","SelectedChild","WithClickHandlers","Interactive","MultipleItems","DeepNesting","LongLabels"];export{I as DeepNesting,c as Default,i as Expanded,x as Interactive,g as LongLabels,u as MultipleItems,b as SelectedChild,p as SelectedParent,m as WithClickHandlers,d as WithoutIcon,X as __namedExportsOrder,U as default};
