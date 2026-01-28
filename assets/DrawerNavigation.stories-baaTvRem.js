import{R as d,r as W,j as e}from"./iframe-ksEUl1J1.js";import{E as _}from"./ExpandableNavItem-dPvx-73c.js";import{u as E}from"./useTheme-BZCX2e7m.js";import{B as r}from"./Box-VjXBqRCE.js";import{L}from"./List-By5TW1qu.js";import{D as N}from"./Divider-fFtZ4kT5.js";import{L as q}from"./ListItemButton-DF2zBliW.js";import{L as G}from"./ListItemIcon-DsgAUmN_.js";import{L as H}from"./ListItemText-Bgyv0jmL.js";import{D as M}from"./Drawer-Cn_jtwmR.js";import{M as t}from"./MaterialSymbol-B9_crDyh.js";import{B}from"./Button-CN_OelDD.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-eZJwLbqn.js";import"./memoTheme-ByI79eT_.js";import"./utils-CtRLzdzE.js";import"./ButtonBase-BCHpqMax.js";import"./useForkRef-dJFPE8JX.js";import"./useEventCallback-BGg_9Wu1.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-O3MGOP4c.js";import"./index-DuFvOZ5L.js";import"./ListContext-BevqiPxT.js";import"./dividerClasses-CUN9Obtx.js";import"./listItemButtonClasses-BXhhl62_.js";import"./listItemIconClasses-BZL_j4GR.js";import"./listItemTextClasses-DHN6omli.js";import"./useSlot-CRL9EEIC.js";import"./resolveComponentProps-D8a--WdG.js";import"./Typography-Jamm0VLG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-7mMm4sKl.js";import"./Slide-CnGdTmjt.js";import"./getReactElementRef-Bz3ygrk6.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-B-6CVN17.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CmzTU6Cg.js";import"./Fade-B36y7gQQ.js";import"./Paper-C3iNG8Wt.js";import"./CircularProgress-BjtrEfdk.js";function T(a){return a.expandable===!0}const n=d.forwardRef(({items:a,width:l=256,paddingTop:o=32,paddingBottom:i=32,sx:p,listSx:C,onItemClick:I},P)=>{const D=E(),[A,F]=W.useState(()=>{const s={};return a.forEach((c,b)=>{if(T(c)){const k=c.id||`item-${b}`;s[k]=c.defaultOpen||!1}}),s}),R=s=>{F(c=>({...c,[s]:!c[s]}))},O=s=>{s.onClick&&s.onClick(),I&&I(s)};return e.jsx(r,{ref:P,sx:{width:l,paddingTop:`${o}px`,paddingBottom:`${i}px`,fontFamily:D.typography.fontFamily,...p},children:e.jsx(L,{sx:{"& .MuiListItemButton-root":{fontFamily:D.typography.fontFamily},...C},children:a.map((s,c)=>{const b=s.id||`item-${c}`,k=c===a.length-1;if(T(s))return e.jsxs(d.Fragment,{children:[e.jsx(_,{label:s.label,icon:s.icon,isOpen:A[b],onToggle:()=>R(b),selected:s.selected,onClick:()=>O(s),children:s.children}),(s.divider||!k&&a[c+1]?.divider)&&e.jsx(N,{sx:{my:1}})]},b);const m=s;return e.jsxs(d.Fragment,{children:[e.jsxs(q,{selected:m.selected,onClick:()=>O(m),sx:{fontFamily:D.typography.fontFamily},children:[m.icon&&e.jsx(G,{sx:{minWidth:40},children:m.icon}),e.jsx(H,{primary:m.label,primaryTypographyProps:{fontFamily:D.typography.fontFamily,fontWeight:m.selected?600:400}})]}),(m.divider||!k&&a[c+1]?.divider)&&e.jsx(N,{sx:{my:1}})]},b)})})})});n.displayName="DrawerNavigation";n.__docgenInfo={description:`DrawerNavigation component

Full-featured navigation component for use within Drawer.
Supports simple and expandable navigation items with icons.

Features:
- Simple and expandable navigation items
- Icon support for all items
- Selected/active state highlighting
- Optional dividers between items
- Configurable width and padding (defaults from Figma)
- MRS design tokens (Nunito font, MRS colors)
- Full accessibility support

@param props - DrawerNavigation component props
@returns DrawerNavigation component`,methods:[],displayName:"DrawerNavigation",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"SimpleNavItem | ExpandableNavItem",elements:[{name:"SimpleNavItem"},{name:"ExpandableNavItem"}]}],raw:"DrawerNavItem[]"},description:"Array of navigation items"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the navigation (default: 256px from Figma)",defaultValue:{value:"256",computed:!1}},paddingTop:{required:!1,tsType:{name:"number"},description:"Top padding (default: 32px from Figma)",defaultValue:{value:"32",computed:!1}},paddingBottom:{required:!1,tsType:{name:"number"},description:"Bottom padding (default: 32px from Figma)",defaultValue:{value:"32",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"Custom sx styles for the container"},listSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"Custom sx styles for the List component"},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DrawerNavItemBase) => void",signature:{arguments:[{type:{name:"DrawerNavItemBase"},name:"item"}],return:{name:"void"}}},description:"Callback when a navigation item is clicked"}}};const Te={title:"Molecules/DrawerNavigation",component:n,tags:["autodocs"],argTypes:{width:{control:"number",description:"Width of the navigation (default: 256px)"},paddingTop:{control:"number",description:"Top padding (default: 32px)"},paddingBottom:{control:"number",description:"Bottom padding (default: 32px)"}}},u={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:400},children:e.jsx(n,{items:[{label:"Dashboard",icon:e.jsx(t,{icon:"home"}),selected:!0},{label:"Inbox",icon:e.jsx(t,{icon:"inbox"})},{label:"Settings",icon:e.jsx(t,{icon:"settings"})}]})})},x={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:500},children:e.jsx(n,{items:[{label:"Dashboard",icon:e.jsx(t,{icon:"home"}),selected:!0},{label:"Products",icon:e.jsx(t,{icon:"inbox"}),expandable:!0,defaultOpen:!0,children:[{label:"All Products",icon:e.jsx(t,{icon:"layers"})},{label:"Categories"},{label:"Tags"}]},{label:"Customers",icon:e.jsx(t,{icon:"people"})},{label:"Settings",icon:e.jsx(t,{icon:"settings"})}]})})},h={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:600},children:e.jsx(n,{items:[{label:"Dashboard",icon:e.jsx(t,{icon:"home"}),selected:!0},{label:"Mail",icon:e.jsx(t,{icon:"inbox"}),expandable:!0,children:[{label:"Inbox",icon:e.jsx(t,{icon:"inbox"})},{label:"Sent",icon:e.jsx(t,{icon:"send"})},{label:"Drafts",icon:e.jsx(t,{icon:"drafts"})}]},{label:"Analytics",icon:e.jsx(t,{icon:"bar_chart"})},{label:"E-commerce",icon:e.jsx(t,{icon:"shopping_cart"}),expandable:!0,children:[{label:"Products"},{label:"Orders"},{label:"Customers"}]},{label:"Settings",icon:e.jsx(t,{icon:"settings"})}]})})},g={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:400},children:e.jsx(n,{items:[{label:"Dashboard",icon:e.jsx(t,{icon:"home"}),divider:!0},{label:"Inbox",icon:e.jsx(t,{icon:"inbox"})},{label:"Customers",icon:e.jsx(t,{icon:"people"}),divider:!0},{label:"Settings",icon:e.jsx(t,{icon:"settings"})}]})})},S={render:()=>{const[a,l]=d.useState(!1),[o,i]=d.useState(0),p=[{id:"dashboard",label:"Dashboard",icon:e.jsx(t,{icon:"home"}),selected:o===0,onClick:()=>i(0)},{id:"products",label:"Products",icon:e.jsx(t,{icon:"inbox"}),expandable:!0,defaultOpen:!0,children:[{label:"All Products",selected:o===1,onClick:()=>i(1)},{label:"Categories",selected:o===2,onClick:()=>i(2)}]},{id:"customers",label:"Customers",icon:e.jsx(t,{icon:"people"}),selected:o===3,onClick:()=>i(3)},{id:"analytics",label:"Analytics",icon:e.jsx(t,{icon:"bar_chart"}),selected:o===4,onClick:()=>i(4)},{id:"settings",label:"Settings",icon:e.jsx(t,{icon:"settings"}),selected:o===5,onClick:()=>i(5)}];return e.jsxs(e.Fragment,{children:[e.jsx(B,{variant:"contained",onClick:()=>l(!0),children:"Open Drawer"}),e.jsx(M,{open:a,onClose:()=>l(!1),anchor:"left",children:e.jsx(n,{items:p})})]})}},y={render:()=>{const[a,l]=d.useState(!0),[o,i]=d.useState(0),p=[{id:"home",label:"Home",icon:e.jsx(t,{icon:"home"}),selected:o===0,onClick:()=>i(0)},{id:"mail",label:"Mail",icon:e.jsx(t,{icon:"inbox"}),expandable:!0,children:[{label:"Inbox",icon:e.jsx(t,{icon:"inbox"}),selected:o===1,onClick:()=>i(1)},{label:"Sent",icon:e.jsx(t,{icon:"send"}),selected:o===2,onClick:()=>i(2)}]},{id:"settings",label:"Settings",icon:e.jsx(t,{icon:"settings"}),selected:o===3,onClick:()=>i(3)}];return e.jsxs(r,{sx:{display:"flex"},children:[e.jsx(M,{variant:"persistent",open:a,anchor:"left",children:e.jsx(n,{items:p})}),e.jsxs(r,{sx:{flexGrow:1,p:3},children:[e.jsxs(B,{variant:"contained",onClick:()=>l(!a),children:[a?"Close":"Open"," Drawer"]}),e.jsxs(r,{sx:{mt:2},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsxs("p",{children:["Selected item: ",o]})]})]})]})}},f={render:()=>{const[a,l]=d.useState(!1),o=[{label:"Profile",icon:e.jsx(t,{icon:"people"})},{label:"Settings",icon:e.jsx(t,{icon:"settings"})},{label:"Help",icon:e.jsx(t,{icon:"inbox"})}];return e.jsxs(e.Fragment,{children:[e.jsx(B,{variant:"contained",onClick:()=>l(!0),children:"Open Right Drawer"}),e.jsx(M,{open:a,onClose:()=>l(!1),anchor:"right",children:e.jsx(n,{items:o})})]})}},w={render:()=>e.jsx(r,{sx:{width:320,bgcolor:"background.paper",height:400},children:e.jsx(n,{width:320,paddingTop:16,paddingBottom:16,items:[{label:"Dashboard",icon:e.jsx(t,{icon:"home"})},{label:"Inbox",icon:e.jsx(t,{icon:"inbox"})},{label:"Settings",icon:e.jsx(t,{icon:"settings"})}]})})},j={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:400},children:e.jsx(n,{items:[{label:"Home",selected:!0},{label:"Documentation",expandable:!0,children:[{label:"Getting Started"},{label:"Components"},{label:"API Reference"}]},{label:"Support"}]})})},v={render:()=>{const[a,l]=d.useState(!0),[o,i]=d.useState("dashboard"),p=[{id:"dashboard",label:"Dashboard",icon:e.jsx(t,{icon:"home"}),selected:o==="dashboard",onClick:()=>i("dashboard"),divider:!0},{id:"products",label:"Products",icon:e.jsx(t,{icon:"shopping_cart"}),expandable:!0,defaultOpen:o.startsWith("products"),children:[{id:"products-all",label:"All Products",selected:o==="products-all",onClick:()=>i("products-all")},{id:"products-categories",label:"Categories",selected:o==="products-categories",onClick:()=>i("products-categories")},{id:"products-inventory",label:"Inventory",selected:o==="products-inventory",onClick:()=>i("products-inventory")}]},{id:"customers",label:"Customers",icon:e.jsx(t,{icon:"people"}),selected:o==="customers",onClick:()=>i("customers")},{id:"analytics",label:"Analytics",icon:e.jsx(t,{icon:"bar_chart"}),selected:o==="analytics",onClick:()=>i("analytics"),divider:!0},{id:"settings",label:"Settings",icon:e.jsx(t,{icon:"settings"}),selected:o==="settings",onClick:()=>i("settings")}];return e.jsxs(r,{sx:{display:"flex",height:"100vh"},children:[e.jsx(M,{variant:"persistent",open:a,anchor:"left",sx:{"& .MuiDrawer-paper":{position:"relative"}},children:e.jsx(n,{items:p})}),e.jsxs(r,{sx:{flexGrow:1,p:3,bgcolor:"#f5f5f5"},children:[e.jsxs(B,{variant:"outlined",onClick:()=>l(!a),sx:{mb:2},children:[a?"Close":"Open"," Navigation"]}),e.jsxs(r,{sx:{bgcolor:"white",p:3,borderRadius:1},children:[e.jsx("h1",{children:o.split("-").map(C=>C.charAt(0).toUpperCase()+C.slice(1)).join(" ")}),e.jsx("p",{children:"This is the content area for the selected navigation item."})]})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 400
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <MaterialSymbol icon="home" />,
      selected: true
    }, {
      label: 'Inbox',
      icon: <MaterialSymbol icon="inbox" />
    }, {
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />
    }]} />
    </Box>
}`,...u.parameters?.docs?.source},description:{story:"Default navigation with simple items",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 500
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <MaterialSymbol icon="home" />,
      selected: true
    }, {
      label: 'Products',
      icon: <MaterialSymbol icon="inbox" />,
      expandable: true,
      defaultOpen: true,
      children: [{
        label: 'All Products',
        icon: <MaterialSymbol icon="layers" />
      }, {
        label: 'Categories'
      }, {
        label: 'Tags'
      }]
    }, {
      label: 'Customers',
      icon: <MaterialSymbol icon="people" />
    }, {
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />
    }]} />
    </Box>
}`,...x.parameters?.docs?.source},description:{story:"Navigation with expandable items",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 600
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <MaterialSymbol icon="home" />,
      selected: true
    }, {
      label: 'Mail',
      icon: <MaterialSymbol icon="inbox" />,
      expandable: true,
      children: [{
        label: 'Inbox',
        icon: <MaterialSymbol icon="inbox" />
      }, {
        label: 'Sent',
        icon: <MaterialSymbol icon="send" />
      }, {
        label: 'Drafts',
        icon: <MaterialSymbol icon="drafts" />
      }]
    }, {
      label: 'Analytics',
      icon: <MaterialSymbol icon="bar_chart" />
    }, {
      label: 'E-commerce',
      icon: <MaterialSymbol icon="shopping_cart" />,
      expandable: true,
      children: [{
        label: 'Products'
      }, {
        label: 'Orders'
      }, {
        label: 'Customers'
      }]
    }, {
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />
    }]} />
    </Box>
}`,...h.parameters?.docs?.source},description:{story:"Mixed simple and expandable items",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 400
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <MaterialSymbol icon="home" />,
      divider: true
    }, {
      label: 'Inbox',
      icon: <MaterialSymbol icon="inbox" />
    }, {
      label: 'Customers',
      icon: <MaterialSymbol icon="people" />,
      divider: true
    }, {
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />
    }]} />
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"With dividers",...g.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const items = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <MaterialSymbol icon="home" />,
      selected: selected === 0,
      onClick: () => setSelected(0)
    }, {
      id: 'products',
      label: 'Products',
      icon: <MaterialSymbol icon="inbox" />,
      expandable: true as const,
      defaultOpen: true,
      children: [{
        label: 'All Products',
        selected: selected === 1,
        onClick: () => setSelected(1)
      }, {
        label: 'Categories',
        selected: selected === 2,
        onClick: () => setSelected(2)
      }]
    }, {
      id: 'customers',
      label: 'Customers',
      icon: <MaterialSymbol icon="people" />,
      selected: selected === 3,
      onClick: () => setSelected(3)
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: <MaterialSymbol icon="bar_chart" />,
      selected: selected === 4,
      onClick: () => setSelected(4)
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />,
      selected: selected === 5,
      onClick: () => setSelected(5)
    }];
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
          <DrawerNavigation items={items} />
        </Drawer>
      </>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Composition with Drawer component",...S.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(0);
    const items = [{
      id: 'home',
      label: 'Home',
      icon: <MaterialSymbol icon="home" />,
      selected: selected === 0,
      onClick: () => setSelected(0)
    }, {
      id: 'mail',
      label: 'Mail',
      icon: <MaterialSymbol icon="inbox" />,
      expandable: true as const,
      children: [{
        label: 'Inbox',
        icon: <MaterialSymbol icon="inbox" />,
        selected: selected === 1,
        onClick: () => setSelected(1)
      }, {
        label: 'Sent',
        icon: <MaterialSymbol icon="send" />,
        selected: selected === 2,
        onClick: () => setSelected(2)
      }]
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />,
      selected: selected === 3,
      onClick: () => setSelected(3)
    }];
    return <Box sx={{
      display: 'flex'
    }}>
        <Drawer variant="persistent" open={open} anchor="left">
          <DrawerNavigation items={items} />
        </Drawer>
        <Box sx={{
        flexGrow: 1,
        p: 3
      }}>
          <Button variant="contained" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'} Drawer
          </Button>
          <Box sx={{
          mt: 2
        }}>
            <h2>Main Content Area</h2>
            <p>Selected item: {selected}</p>
          </Box>
        </Box>
      </Box>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Persistent drawer with navigation",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const items = [{
      label: 'Profile',
      icon: <MaterialSymbol icon="people" />
    }, {
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />
    }, {
      label: 'Help',
      icon: <MaterialSymbol icon="inbox" />
    }];
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Right Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
          <DrawerNavigation items={items} />
        </Drawer>
      </>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Right-side drawer with navigation",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 320,
    bgcolor: 'background.paper',
    height: 400
  }}>
      <DrawerNavigation width={320} paddingTop={16} paddingBottom={16} items={[{
      label: 'Dashboard',
      icon: <MaterialSymbol icon="home" />
    }, {
      label: 'Inbox',
      icon: <MaterialSymbol icon="inbox" />
    }, {
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />
    }]} />
    </Box>
}`,...w.parameters?.docs?.source},description:{story:"Custom width and padding",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 400
  }}>
      <DrawerNavigation items={[{
      label: 'Home',
      selected: true
    }, {
      label: 'Documentation',
      expandable: true,
      children: [{
        label: 'Getting Started'
      }, {
        label: 'Components'
      }, {
        label: 'API Reference'
      }]
    }, {
      label: 'Support'
    }]} />
    </Box>
}`,...j.parameters?.docs?.source},description:{story:"Without icons",...j.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const [selected, setSelected] = React.useState('dashboard');
    const items = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <MaterialSymbol icon="home" />,
      selected: selected === 'dashboard',
      onClick: () => setSelected('dashboard'),
      divider: true
    }, {
      id: 'products',
      label: 'Products',
      icon: <MaterialSymbol icon="shopping_cart" />,
      expandable: true as const,
      defaultOpen: selected.startsWith('products'),
      children: [{
        id: 'products-all',
        label: 'All Products',
        selected: selected === 'products-all',
        onClick: () => setSelected('products-all')
      }, {
        id: 'products-categories',
        label: 'Categories',
        selected: selected === 'products-categories',
        onClick: () => setSelected('products-categories')
      }, {
        id: 'products-inventory',
        label: 'Inventory',
        selected: selected === 'products-inventory',
        onClick: () => setSelected('products-inventory')
      }]
    }, {
      id: 'customers',
      label: 'Customers',
      icon: <MaterialSymbol icon="people" />,
      selected: selected === 'customers',
      onClick: () => setSelected('customers')
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: <MaterialSymbol icon="bar_chart" />,
      selected: selected === 'analytics',
      onClick: () => setSelected('analytics'),
      divider: true
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <MaterialSymbol icon="settings" />,
      selected: selected === 'settings',
      onClick: () => setSelected('settings')
    }];
    return <Box sx={{
      display: 'flex',
      height: '100vh'
    }}>
        <Drawer variant="persistent" open={drawerOpen} anchor="left" sx={{
        '& .MuiDrawer-paper': {
          position: 'relative'
        }
      }}>
          <DrawerNavigation items={items} />
        </Drawer>
        <Box sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: '#f5f5f5'
      }}>
          <Button variant="outlined" onClick={() => setDrawerOpen(!drawerOpen)} sx={{
          mb: 2
        }}>
            {drawerOpen ? 'Close' : 'Open'} Navigation
          </Button>
          <Box sx={{
          bgcolor: 'white',
          p: 3,
          borderRadius: 1
        }}>
            <h1>
              {selected.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <p>This is the content area for the selected navigation item.</p>
          </Box>
        </Box>
      </Box>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Full application example",...v.parameters?.docs?.description}}};const Pe=["Default","WithExpandableItems","MixedItems","WithDividers","WithDrawer","PersistentDrawer","RightDrawer","CustomDimensions","WithoutIcons","FullApplication"];export{w as CustomDimensions,u as Default,v as FullApplication,h as MixedItems,y as PersistentDrawer,f as RightDrawer,g as WithDividers,S as WithDrawer,x as WithExpandableItems,j as WithoutIcons,Pe as __namedExportsOrder,Te as default};
