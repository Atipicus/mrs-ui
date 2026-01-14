import{j as e,R as S}from"./iframe-CckttRrP.js";import{E as a}from"./ExpandableNavItem-BX8cvcH5.js";import{M as l}from"./MaterialSymbol-C4g2eVab.js";import{L as f}from"./List-DxqDo-Dc.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BEZ5DwR-.js";import"./ListItemButton-A4T3zMPL.js";import"./memoTheme-D40aOm1p.js";import"./ListContext-GaF7-EKi.js";import"./listItemButtonClasses-CEE_zCSX.js";import"./useForkRef-BrpzIuMK.js";import"./ButtonBase-ExDGUqAK.js";import"./useEventCallback-CPSVspcQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./ListItemIcon-xYLmMms-.js";import"./listItemIconClasses-CeE6nEyE.js";import"./ListItemText-CW6ATJMx.js";import"./listItemTextClasses-K2mRpQdi.js";import"./useSlot-CgXclaX5.js";import"./resolveComponentProps-DRuAR2bf.js";import"./Typography-CJ6AbGd8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Collapse-CjnmaPL0.js";import"./utils-lOMGRC3H.js";import"./index-kgCUEM1X.js";import"./index-Bh9eExNx.js";import"./Box-MINljk0S.js";const J={title:"Molecules/ExpandableNavItem",component:a,tags:["autodocs"],decorators:[r=>e.jsx(f,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsx(r,{})})]},n={render:()=>e.jsx(a,{label:"Inbox",icon:e.jsx(l,{icon:"inbox"}),isOpen:!1,children:[{label:"All Mail",icon:e.jsx(l,{icon:"drafts"})},{label:"Sent",icon:e.jsx(l,{icon:"send"})},{label:"Drafts",icon:e.jsx(l,{icon:"drafts"})}]})},i={render:()=>e.jsx(a,{label:"Inbox",icon:e.jsx(l,{icon:"inbox"}),isOpen:!0,children:[{label:"All Mail",icon:e.jsx(l,{icon:"drafts"})},{label:"Sent",icon:e.jsx(l,{icon:"send"})},{label:"Drafts",icon:e.jsx(l,{icon:"drafts"})}]})},s={render:()=>e.jsx(a,{label:"Categories",isOpen:!1,children:[{label:"Technology"},{label:"Design"},{label:"Business"}]})},c={render:()=>e.jsx(a,{label:"Inbox",icon:e.jsx(l,{icon:"inbox"}),isOpen:!0,selected:!0,children:[{label:"All Mail",icon:e.jsx(l,{icon:"drafts"})},{label:"Sent",icon:e.jsx(l,{icon:"send"})}]})},d={render:()=>e.jsx(a,{label:"Inbox",icon:e.jsx(l,{icon:"inbox"}),isOpen:!0,children:[{label:"All Mail",icon:e.jsx(l,{icon:"drafts"})},{label:"Sent",icon:e.jsx(l,{icon:"send"}),selected:!0},{label:"Drafts",icon:e.jsx(l,{icon:"drafts"})}]})},b={render:()=>e.jsx(a,{label:"Inbox",icon:e.jsx(l,{icon:"inbox"}),isOpen:!1,onClick:()=>alert("Parent clicked"),children:[{label:"All Mail",icon:e.jsx(l,{icon:"drafts"}),onClick:()=>alert("All Mail clicked")},{label:"Sent",icon:e.jsx(l,{icon:"send"}),onClick:()=>alert("Sent clicked")},{label:"Drafts",icon:e.jsx(l,{icon:"drafts"}),onClick:()=>alert("Drafts clicked")}]})},p={render:()=>{const[r,g]=S.useState(!1),[o,t]=S.useState(null);return e.jsx(a,{label:"Products",icon:e.jsx(l,{icon:"inbox"}),isOpen:r,onToggle:()=>g(!r),children:[{label:"All Products",icon:e.jsx(l,{icon:"star_border"}),selected:o===0,onClick:()=>t(0)},{label:"Categories",selected:o===1,onClick:()=>t(1)},{label:"Tags",selected:o===2,onClick:()=>t(2)}]})}},m={render:()=>{const[r,g]=S.useState({inbox:!1,starred:!1}),o=t=>{g(h=>({...h,[t]:!h[t]}))};return e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Inbox",icon:e.jsx(l,{icon:"inbox"}),isOpen:r.inbox,onToggle:()=>o("inbox"),children:[{label:"All Mail",icon:e.jsx(l,{icon:"drafts"})},{label:"Sent",icon:e.jsx(l,{icon:"send"})}]}),e.jsx(a,{label:"Starred",icon:e.jsx(l,{icon:"star_border"}),isOpen:r.starred,onToggle:()=>o("starred"),children:[{label:"Important"},{label:"Favorites"}]})]})},decorators:[r=>e.jsx(f,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsx(r,{})})]},x={render:()=>e.jsx(a,{label:"Documentation",icon:e.jsx(l,{icon:"inbox"}),isOpen:!0,children:[{label:"Getting Started"},{label:"Components"},{label:"API Reference"},{label:"Guides"},{label:"Examples"},{label:"FAQ"},{label:"Changelog"},{label:"Contributing"}]})},u={render:()=>e.jsx(a,{label:"Very Long Parent Label That Might Wrap",icon:e.jsx(l,{icon:"inbox"}),isOpen:!0,children:[{label:"This is a very long child item label that might wrap to multiple lines"},{label:"Another long label for testing purposes"},{label:"Short label"}]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<MaterialSymbol icon="inbox" />} isOpen={false} children={[{
    label: 'All Mail',
    icon: <MaterialSymbol icon="drafts" />
  }, {
    label: 'Sent',
    icon: <MaterialSymbol icon="send" />
  }, {
    label: 'Drafts',
    icon: <MaterialSymbol icon="drafts" />
  }]} />
}`,...n.parameters?.docs?.source},description:{story:"Default expandable navigation item with icon",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<MaterialSymbol icon="inbox" />} isOpen={true} children={[{
    label: 'All Mail',
    icon: <MaterialSymbol icon="drafts" />
  }, {
    label: 'Sent',
    icon: <MaterialSymbol icon="send" />
  }, {
    label: 'Drafts',
    icon: <MaterialSymbol icon="drafts" />
  }]} />
}`,...i.parameters?.docs?.source},description:{story:"Expanded state",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Categories" isOpen={false} children={[{
    label: 'Technology'
  }, {
    label: 'Design'
  }, {
    label: 'Business'
  }]} />
}`,...s.parameters?.docs?.source},description:{story:"Without icon",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<MaterialSymbol icon="inbox" />} isOpen={true} selected={true} children={[{
    label: 'All Mail',
    icon: <MaterialSymbol icon="drafts" />
  }, {
    label: 'Sent',
    icon: <MaterialSymbol icon="send" />
  }]} />
}`,...c.parameters?.docs?.source},description:{story:"Selected parent item",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<MaterialSymbol icon="inbox" />} isOpen={true} children={[{
    label: 'All Mail',
    icon: <MaterialSymbol icon="drafts" />
  }, {
    label: 'Sent',
    icon: <MaterialSymbol icon="send" />,
    selected: true
  }, {
    label: 'Drafts',
    icon: <MaterialSymbol icon="drafts" />
  }]} />
}`,...d.parameters?.docs?.source},description:{story:"Selected child item",...d.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Inbox" icon={<MaterialSymbol icon="inbox" />} isOpen={false} onClick={() => alert('Parent clicked')} children={[{
    label: 'All Mail',
    icon: <MaterialSymbol icon="drafts" />,
    onClick: () => alert('All Mail clicked')
  }, {
    label: 'Sent',
    icon: <MaterialSymbol icon="send" />,
    onClick: () => alert('Sent clicked')
  }, {
    label: 'Drafts',
    icon: <MaterialSymbol icon="drafts" />,
    onClick: () => alert('Drafts clicked')
  }]} />
}`,...b.parameters?.docs?.source},description:{story:"With click handlers",...b.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [selectedChild, setSelectedChild] = React.useState<number | null>(null);
    return <ExpandableNavItem label="Products" icon={<MaterialSymbol icon="inbox" />} isOpen={open} onToggle={() => setOpen(!open)} children={[{
      label: 'All Products',
      icon: <MaterialSymbol icon="star_border" />,
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
}`,...p.parameters?.docs?.source},description:{story:"Interactive example with state management",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <ExpandableNavItem label="Inbox" icon={<MaterialSymbol icon="inbox" />} isOpen={openItems.inbox} onToggle={() => toggleItem('inbox')} children={[{
        label: 'All Mail',
        icon: <MaterialSymbol icon="drafts" />
      }, {
        label: 'Sent',
        icon: <MaterialSymbol icon="send" />
      }]} />
        <ExpandableNavItem label="Starred" icon={<MaterialSymbol icon="star_border" />} isOpen={openItems.starred} onToggle={() => toggleItem('starred')} children={[{
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
}`,...m.parameters?.docs?.source},description:{story:"Multiple expandable items",...m.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Documentation" icon={<MaterialSymbol icon="inbox" />} isOpen={true} children={[{
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
}`,...x.parameters?.docs?.source},description:{story:"Deep nesting (parent with many children)",...x.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableNavItem label="Very Long Parent Label That Might Wrap" icon={<MaterialSymbol icon="inbox" />} isOpen={true} children={[{
    label: 'This is a very long child item label that might wrap to multiple lines'
  }, {
    label: 'Another long label for testing purposes'
  }, {
    label: 'Short label'
  }]} />
}`,...u.parameters?.docs?.source},description:{story:"Long label text",...u.parameters?.docs?.description}}};const K=["Default","Expanded","WithoutIcon","SelectedParent","SelectedChild","WithClickHandlers","Interactive","MultipleItems","DeepNesting","LongLabels"];export{x as DeepNesting,n as Default,i as Expanded,p as Interactive,u as LongLabels,m as MultipleItems,d as SelectedChild,c as SelectedParent,b as WithClickHandlers,s as WithoutIcon,K as __namedExportsOrder,J as default};
