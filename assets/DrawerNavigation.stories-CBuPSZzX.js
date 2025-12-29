import{R as c,r as V,j as e}from"./iframe-Ll-6DOMq.js";import{E as _,S as L,D as $}from"./Send-jp2Tf8jO.js";import{u as U}from"./useTheme-DU8NCu1L.js";import{B as r}from"./Box-CT6B1tpM.js";import{L as J}from"./List-sWKbttLs.js";import{D as M}from"./Divider-B16MBj2j.js";import{L as K}from"./ListItemButton-WPOtJWzj.js";import{L as Q}from"./ListItemIcon-BbAeOygn.js";import{L as X}from"./ListItemText-Ckv0OS8_.js";import{D as P}from"./Drawer-JlRqhH4i.js";import{H as m}from"./Home-KYRiUJD-.js";import{I as d}from"./Inbox-DXcFgSHq.js";import{S as p}from"./Settings-C2QWit7m.js";import{c as T}from"./createSvgIcon-B--y33RA.js";import{S as W}from"./ShoppingCart-CunLtgyg.js";import{B as N}from"./Button-6KJooc4K.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-Cr3O56rL.js";import"./utils-uJiPiMxz.js";import"./ButtonBase-Dmk_TwK3.js";import"./useForkRef-CyvFleoK.js";import"./useEventCallback-CNwJKNkp.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-B1ARROd1.js";import"./index-BlpryoIJ.js";import"./ListContext-Dyk9lgPk.js";import"./dividerClasses-D66snz_T.js";import"./listItemButtonClasses-DAkIfGUV.js";import"./listItemIconClasses-BThAd0_I.js";import"./listItemTextClasses-sqITzjah.js";import"./useSlot-CKkKY_MB.js";import"./resolveComponentProps--b04hUqz.js";import"./Typography-BDVHBFsV.js";import"./mergeSlotProps-DeIBauIu.js";import"./getReactElementRef-CccO5-FT.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CYbFbffj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BqQ1a4AE.js";import"./Paper-BbkAovIa.js";import"./CircularProgress-D8a3t22V.js";function H(o){return o.expandable===!0}const a=c.forwardRef(({items:o,width:i=256,paddingTop:t=32,paddingBottom:n=32,sx:u,listSx:k,onItemClick:F},E)=>{const B=U(),[q,G]=V.useState(()=>{const s={};return o.forEach((l,x)=>{if(H(l)){const O=l.id||`item-${x}`;s[O]=l.defaultOpen||!1}}),s}),z=s=>{G(l=>({...l,[s]:!l[s]}))},R=s=>{s.onClick&&s.onClick(),F&&F(s)};return e.jsx(r,{ref:E,sx:{width:i,paddingTop:`${t}px`,paddingBottom:`${n}px`,fontFamily:B.typography.fontFamily,...u},children:e.jsx(J,{sx:{"& .MuiListItemButton-root":{fontFamily:B.typography.fontFamily},...k},children:o.map((s,l)=>{const x=s.id||`item-${l}`,O=l===o.length-1;if(H(s))return e.jsxs(c.Fragment,{children:[e.jsx(_,{label:s.label,icon:s.icon,isOpen:q[x],onToggle:()=>z(x),selected:s.selected,onClick:()=>R(s),children:s.children}),(s.divider||!O&&o[l+1]?.divider)&&e.jsx(M,{sx:{my:1}})]},x);const b=s;return e.jsxs(c.Fragment,{children:[e.jsxs(K,{selected:b.selected,onClick:()=>R(b),sx:{fontFamily:B.typography.fontFamily},children:[b.icon&&e.jsx(Q,{sx:{minWidth:40},children:b.icon}),e.jsx(X,{primary:b.label,primaryTypographyProps:{fontFamily:B.typography.fontFamily,fontWeight:b.selected?600:400}})]}),(b.divider||!O&&o[l+1]?.divider)&&e.jsx(M,{sx:{my:1}})]},x)})})})});a.displayName="DrawerNavigation";a.__docgenInfo={description:`DrawerNavigation component

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
@returns DrawerNavigation component`,methods:[],displayName:"DrawerNavigation",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"SimpleNavItem | ExpandableNavItem",elements:[{name:"SimpleNavItem"},{name:"ExpandableNavItem"}]}],raw:"DrawerNavItem[]"},description:"Array of navigation items"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the navigation (default: 256px from Figma)",defaultValue:{value:"256",computed:!1}},paddingTop:{required:!1,tsType:{name:"number"},description:"Top padding (default: 32px from Figma)",defaultValue:{value:"32",computed:!1}},paddingBottom:{required:!1,tsType:{name:"number"},description:"Bottom padding (default: 32px from Figma)",defaultValue:{value:"32",computed:!1}},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"Custom sx styles for the container"},listSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"Custom sx styles for the List component"},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DrawerNavItemBase) => void",signature:{arguments:[{type:{name:"DrawerNavItemBase"},name:"item"}],return:{name:"void"}}},description:"Callback when a navigation item is clicked"}}};const D=T(e.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People"),A=T(e.jsx("path",{d:"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"}),"BarChart"),Y=T(e.jsx("path",{d:"m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27z"}),"Layers"),qe={title:"Molecules/DrawerNavigation",component:a,tags:["autodocs"],argTypes:{width:{control:"number",description:"Width of the navigation (default: 256px)"},paddingTop:{control:"number",description:"Top padding (default: 32px)"},paddingBottom:{control:"number",description:"Bottom padding (default: 32px)"}}},h={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:400},children:e.jsx(a,{items:[{label:"Dashboard",icon:e.jsx(m,{}),selected:!0},{label:"Inbox",icon:e.jsx(d,{})},{label:"Settings",icon:e.jsx(p,{})}]})})},g={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:500},children:e.jsx(a,{items:[{label:"Dashboard",icon:e.jsx(m,{}),selected:!0},{label:"Products",icon:e.jsx(d,{}),expandable:!0,defaultOpen:!0,children:[{label:"All Products",icon:e.jsx(Y,{})},{label:"Categories"},{label:"Tags"}]},{label:"Customers",icon:e.jsx(D,{})},{label:"Settings",icon:e.jsx(p,{})}]})})},f={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:600},children:e.jsx(a,{items:[{label:"Dashboard",icon:e.jsx(m,{}),selected:!0},{label:"Mail",icon:e.jsx(d,{}),expandable:!0,children:[{label:"Inbox",icon:e.jsx(d,{})},{label:"Sent",icon:e.jsx(L,{})},{label:"Drafts",icon:e.jsx($,{})}]},{label:"Analytics",icon:e.jsx(A,{})},{label:"E-commerce",icon:e.jsx(W,{}),expandable:!0,children:[{label:"Products"},{label:"Orders"},{label:"Customers"}]},{label:"Settings",icon:e.jsx(p,{})}]})})},S={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:400},children:e.jsx(a,{items:[{label:"Dashboard",icon:e.jsx(m,{}),divider:!0},{label:"Inbox",icon:e.jsx(d,{})},{label:"Customers",icon:e.jsx(D,{}),divider:!0},{label:"Settings",icon:e.jsx(p,{})}]})})},I={render:()=>{const[o,i]=c.useState(!1),[t,n]=c.useState(0),u=[{id:"dashboard",label:"Dashboard",icon:e.jsx(m,{}),selected:t===0,onClick:()=>n(0)},{id:"products",label:"Products",icon:e.jsx(d,{}),expandable:!0,defaultOpen:!0,children:[{label:"All Products",selected:t===1,onClick:()=>n(1)},{label:"Categories",selected:t===2,onClick:()=>n(2)}]},{id:"customers",label:"Customers",icon:e.jsx(D,{}),selected:t===3,onClick:()=>n(3)},{id:"analytics",label:"Analytics",icon:e.jsx(A,{}),selected:t===4,onClick:()=>n(4)},{id:"settings",label:"Settings",icon:e.jsx(p,{}),selected:t===5,onClick:()=>n(5)}];return e.jsxs(e.Fragment,{children:[e.jsx(N,{variant:"contained",onClick:()=>i(!0),children:"Open Drawer"}),e.jsx(P,{open:o,onClose:()=>i(!1),anchor:"left",children:e.jsx(a,{items:u})})]})}},w={render:()=>{const[o,i]=c.useState(!0),[t,n]=c.useState(0),u=[{id:"home",label:"Home",icon:e.jsx(m,{}),selected:t===0,onClick:()=>n(0)},{id:"mail",label:"Mail",icon:e.jsx(d,{}),expandable:!0,children:[{label:"Inbox",icon:e.jsx(d,{}),selected:t===1,onClick:()=>n(1)},{label:"Sent",icon:e.jsx(L,{}),selected:t===2,onClick:()=>n(2)}]},{id:"settings",label:"Settings",icon:e.jsx(p,{}),selected:t===3,onClick:()=>n(3)}];return e.jsxs(r,{sx:{display:"flex"},children:[e.jsx(P,{variant:"persistent",open:o,anchor:"left",children:e.jsx(a,{items:u})}),e.jsxs(r,{sx:{flexGrow:1,p:3},children:[e.jsxs(N,{variant:"contained",onClick:()=>i(!o),children:[o?"Close":"Open"," Drawer"]}),e.jsxs(r,{sx:{mt:2},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsxs("p",{children:["Selected item: ",t]})]})]})]})}},j={render:()=>{const[o,i]=c.useState(!1),t=[{label:"Profile",icon:e.jsx(D,{})},{label:"Settings",icon:e.jsx(p,{})},{label:"Help",icon:e.jsx(d,{})}];return e.jsxs(e.Fragment,{children:[e.jsx(N,{variant:"contained",onClick:()=>i(!0),children:"Open Right Drawer"}),e.jsx(P,{open:o,onClose:()=>i(!1),anchor:"right",children:e.jsx(a,{items:t})})]})}},C={render:()=>e.jsx(r,{sx:{width:320,bgcolor:"background.paper",height:400},children:e.jsx(a,{width:320,paddingTop:16,paddingBottom:16,items:[{label:"Dashboard",icon:e.jsx(m,{})},{label:"Inbox",icon:e.jsx(d,{})},{label:"Settings",icon:e.jsx(p,{})}]})})},v={render:()=>e.jsx(r,{sx:{width:256,bgcolor:"background.paper",height:400},children:e.jsx(a,{items:[{label:"Home",selected:!0},{label:"Documentation",expandable:!0,children:[{label:"Getting Started"},{label:"Components"},{label:"API Reference"}]},{label:"Support"}]})})},y={render:()=>{const[o,i]=c.useState(!0),[t,n]=c.useState("dashboard"),u=[{id:"dashboard",label:"Dashboard",icon:e.jsx(m,{}),selected:t==="dashboard",onClick:()=>n("dashboard"),divider:!0},{id:"products",label:"Products",icon:e.jsx(W,{}),expandable:!0,defaultOpen:t.startsWith("products"),children:[{id:"products-all",label:"All Products",selected:t==="products-all",onClick:()=>n("products-all")},{id:"products-categories",label:"Categories",selected:t==="products-categories",onClick:()=>n("products-categories")},{id:"products-inventory",label:"Inventory",selected:t==="products-inventory",onClick:()=>n("products-inventory")}]},{id:"customers",label:"Customers",icon:e.jsx(D,{}),selected:t==="customers",onClick:()=>n("customers")},{id:"analytics",label:"Analytics",icon:e.jsx(A,{}),selected:t==="analytics",onClick:()=>n("analytics"),divider:!0},{id:"settings",label:"Settings",icon:e.jsx(p,{}),selected:t==="settings",onClick:()=>n("settings")}];return e.jsxs(r,{sx:{display:"flex",height:"100vh"},children:[e.jsx(P,{variant:"persistent",open:o,anchor:"left",sx:{"& .MuiDrawer-paper":{position:"relative"}},children:e.jsx(a,{items:u})}),e.jsxs(r,{sx:{flexGrow:1,p:3,bgcolor:"#f5f5f5"},children:[e.jsxs(N,{variant:"outlined",onClick:()=>i(!o),sx:{mb:2},children:[o?"Close":"Open"," Navigation"]}),e.jsxs(r,{sx:{bgcolor:"white",p:3,borderRadius:1},children:[e.jsx("h1",{children:t.split("-").map(k=>k.charAt(0).toUpperCase()+k.slice(1)).join(" ")}),e.jsx("p",{children:"This is the content area for the selected navigation item."})]})]})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 400
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <HomeIcon />,
      selected: true
    }, {
      label: 'Inbox',
      icon: <InboxIcon />
    }, {
      label: 'Settings',
      icon: <SettingsIcon />
    }]} />
    </Box>
}`,...h.parameters?.docs?.source},description:{story:"Default navigation with simple items",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 500
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <HomeIcon />,
      selected: true
    }, {
      label: 'Products',
      icon: <InboxIcon />,
      expandable: true,
      defaultOpen: true,
      children: [{
        label: 'All Products',
        icon: <LayersIcon />
      }, {
        label: 'Categories'
      }, {
        label: 'Tags'
      }]
    }, {
      label: 'Customers',
      icon: <PeopleIcon />
    }, {
      label: 'Settings',
      icon: <SettingsIcon />
    }]} />
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"Navigation with expandable items",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 600
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <HomeIcon />,
      selected: true
    }, {
      label: 'Mail',
      icon: <InboxIcon />,
      expandable: true,
      children: [{
        label: 'Inbox',
        icon: <InboxIcon />
      }, {
        label: 'Sent',
        icon: <SendIcon />
      }, {
        label: 'Drafts',
        icon: <DraftsIcon />
      }]
    }, {
      label: 'Analytics',
      icon: <BarChartIcon />
    }, {
      label: 'E-commerce',
      icon: <ShoppingCartIcon />,
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
      icon: <SettingsIcon />
    }]} />
    </Box>
}`,...f.parameters?.docs?.source},description:{story:"Mixed simple and expandable items",...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 256,
    bgcolor: 'background.paper',
    height: 400
  }}>
      <DrawerNavigation items={[{
      label: 'Dashboard',
      icon: <HomeIcon />,
      divider: true
    }, {
      label: 'Inbox',
      icon: <InboxIcon />
    }, {
      label: 'Customers',
      icon: <PeopleIcon />,
      divider: true
    }, {
      label: 'Settings',
      icon: <SettingsIcon />
    }]} />
    </Box>
}`,...S.parameters?.docs?.source},description:{story:"With dividers",...S.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const items = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <HomeIcon />,
      selected: selected === 0,
      onClick: () => setSelected(0)
    }, {
      id: 'products',
      label: 'Products',
      icon: <InboxIcon />,
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
      icon: <PeopleIcon />,
      selected: selected === 3,
      onClick: () => setSelected(3)
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChartIcon />,
      selected: selected === 4,
      onClick: () => setSelected(4)
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
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
}`,...I.parameters?.docs?.source},description:{story:"Composition with Drawer component",...I.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(0);
    const items = [{
      id: 'home',
      label: 'Home',
      icon: <HomeIcon />,
      selected: selected === 0,
      onClick: () => setSelected(0)
    }, {
      id: 'mail',
      label: 'Mail',
      icon: <InboxIcon />,
      expandable: true as const,
      children: [{
        label: 'Inbox',
        icon: <InboxIcon />,
        selected: selected === 1,
        onClick: () => setSelected(1)
      }, {
        label: 'Sent',
        icon: <SendIcon />,
        selected: selected === 2,
        onClick: () => setSelected(2)
      }]
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
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
}`,...w.parameters?.docs?.source},description:{story:"Persistent drawer with navigation",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const items = [{
      label: 'Profile',
      icon: <PeopleIcon />
    }, {
      label: 'Settings',
      icon: <SettingsIcon />
    }, {
      label: 'Help',
      icon: <InboxIcon />
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
}`,...j.parameters?.docs?.source},description:{story:"Right-side drawer with navigation",...j.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 320,
    bgcolor: 'background.paper',
    height: 400
  }}>
      <DrawerNavigation width={320} paddingTop={16} paddingBottom={16} items={[{
      label: 'Dashboard',
      icon: <HomeIcon />
    }, {
      label: 'Inbox',
      icon: <InboxIcon />
    }, {
      label: 'Settings',
      icon: <SettingsIcon />
    }]} />
    </Box>
}`,...C.parameters?.docs?.source},description:{story:"Custom width and padding",...C.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Without icons",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const [selected, setSelected] = React.useState('dashboard');
    const items = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <HomeIcon />,
      selected: selected === 'dashboard',
      onClick: () => setSelected('dashboard'),
      divider: true
    }, {
      id: 'products',
      label: 'Products',
      icon: <ShoppingCartIcon />,
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
      icon: <PeopleIcon />,
      selected: selected === 'customers',
      onClick: () => setSelected('customers')
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChartIcon />,
      selected: selected === 'analytics',
      onClick: () => setSelected('analytics'),
      divider: true
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
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
}`,...y.parameters?.docs?.source},description:{story:"Full application example",...y.parameters?.docs?.description}}};const Ge=["Default","WithExpandableItems","MixedItems","WithDividers","WithDrawer","PersistentDrawer","RightDrawer","CustomDimensions","WithoutIcons","FullApplication"];export{C as CustomDimensions,h as Default,y as FullApplication,f as MixedItems,w as PersistentDrawer,j as RightDrawer,S as WithDividers,I as WithDrawer,g as WithExpandableItems,v as WithoutIcons,Ge as __namedExportsOrder,qe as default};
