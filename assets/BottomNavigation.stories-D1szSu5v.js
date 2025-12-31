import{r,u as $,j as o,R as Y}from"./iframe-Dluh1Z2i.js";import{g as G,b as J,s as W,c as K,a as Q,m as O}from"./memoTheme-234kV0RJ.js";import{u as z}from"./useSlot-BqkReWvI.js";import{B as no}from"./ButtonBase-0gLZcDB_.js";import{c as P}from"./createSvgIcon-mOm-xmYV.js";import{F as m}from"./Favorite-CxVGFe1z.js";import{M as u}from"./MaterialSymbol-nmEQdzdr.js";import{B as l}from"./Box-C8dgWXZ9.js";import{P as io}from"./Paper-BjEN7IDN.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-D1-70Kgl.js";import"./useForkRef-ClJ94mF_.js";import"./useEventCallback-Co9Xi1US.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-D_tq5Sfk.js";function so(a){return G("MuiBottomNavigation",a)}J("MuiBottomNavigation",["root"]);const ro=a=>{const{classes:e}=a;return Q({root:["root"]},so,e)},lo=W("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(a,e)=>e.root})(O(({theme:a})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(a.vars||a).palette.background.paper}))),co=r.forwardRef(function(e,n){const s=$({props:e,name:"MuiBottomNavigation"}),{children:i,className:I,component:F="div",onChange:R,showLabels:x=!1,value:D,...E}=s,L={...s,component:F,showLabels:x},_=ro(L);return o.jsx(lo,{as:F,className:K(_.root,I),ref:n,ownerState:L,...E,children:r.Children.map(i,(d,T)=>{if(!r.isValidElement(d))return null;const b=d.props.value===void 0?T:d.props.value;return r.cloneElement(d,{selected:b===D,showLabel:d.props.showLabel!==void 0?d.props.showLabel:x,value:b,onChange:R})})})});function uo(a){return G("MuiBottomNavigationAction",a)}const X=J("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),mo=a=>{const{classes:e,showLabel:n,selected:s}=a;return Q({root:["root",!n&&!s&&"iconOnly",s&&"selected"],label:["label",!n&&!s&&"iconOnly",s&&"selected"]},uo,e)},po=W(no,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,!n.showLabel&&!n.selected&&e.iconOnly]}})(O(({theme:a})=>({transition:a.transitions.create(["color","padding-top"],{duration:a.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(a.vars||a).palette.text.secondary,flexDirection:"column",flex:"1",[`&.${X.selected}`]:{color:(a.vars||a).palette.primary.main},variants:[{props:({showLabel:e,selected:n})=>!e&&!n,style:{paddingTop:14}},{props:({showLabel:e,selected:n,label:s})=>!e&&!n&&!s,style:{paddingTop:0}}]}))),vo=W("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(a,e)=>e.label})(O(({theme:a})=>({fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s",[`&.${X.selected}`]:{fontSize:a.typography.pxToRem(14)},variants:[{props:({showLabel:e,selected:n})=>!e&&!n,style:{opacity:0,transitionDelay:"0s"}}]}))),bo=r.forwardRef(function(e,n){const s=$({props:e,name:"MuiBottomNavigationAction"}),{className:i,icon:I,label:F,onChange:R,onClick:x,selected:D,showLabel:E,value:L,slots:_={},slotProps:d={},...T}=s,b=s,U=mo(b),Z=h=>{R&&R(h,L),x&&x(h)},k={slots:_,slotProps:d},[oo,eo]=z("root",{elementType:po,externalForwardedProps:{...k,...T},shouldForwardComponentProp:!0,ownerState:b,ref:n,className:K(U.root,i),additionalProps:{focusRipple:!0},getSlotProps:h=>({...h,onClick:q=>{h.onClick?.(q),Z(q)}})}),[to,ao]=z("label",{elementType:vo,externalForwardedProps:k,ownerState:b,className:U.label});return o.jsxs(oo,{...eo,children:[I,o.jsx(to,{...ao,children:F})]})}),c=Y.forwardRef((a,e)=>o.jsx(co,{ref:e,...a}));c.displayName="BottomNavigation";c.__docgenInfo={description:`BottomNavigation component

Bottom navigation bars allow movement between primary destinations in an app.

@param props - BottomNavigation component props
@returns BottomNavigation component`,methods:[],displayName:"BottomNavigation",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: any) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"},showLabels:{required:!1,tsType:{name:"boolean"},description:`If true, all BottomNavigationActions will show their labels
@default false`},value:{required:!1,tsType:{name:"any"},description:"The value of the currently selected BottomNavigationAction"}},composes:["MuiBottomNavigationProps"]};const t=Y.forwardRef((a,e)=>o.jsx(bo,{ref:e,...a}));t.displayName="BottomNavigationAction";t.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationAction",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label element"},showLabel:{required:!1,tsType:{name:"boolean"},description:`If true, the BottomNavigationAction will show its label
@default false`},value:{required:!1,tsType:{name:"any"},description:"You can provide your own value. Otherwise, it falls back to the child position index"}},composes:["MuiBottomNavigationActionProps"]};const p=P(o.jsx("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"Restore"),v=P(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),H=P(o.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"}),"Folder"),Ro={title:"Components/Molecules/BottomNavigation",component:c,tags:["autodocs"],argTypes:{showLabels:{control:"boolean",description:"Show labels for all actions"}},parameters:{docs:{description:{component:"Bottom navigation bars allow movement between primary destinations in an app. Typically used for mobile applications."}}}},g={render:function(){const[e,n]=r.useState(0);return o.jsx(l,{sx:{width:500},children:o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(p,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(m,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(v,{})})]})})}},N={render:function(){const[e,n]=r.useState(0);return o.jsx(l,{sx:{width:500},children:o.jsxs(c,{value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(p,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(m,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(v,{})})]})})}},B={render:function(){const[e,n]=r.useState(0);return o.jsxs(l,{sx:{pb:7,height:300,position:"relative"},children:[o.jsxs(l,{sx:{p:2},children:[o.jsx("p",{children:"Content area"}),o.jsx("p",{children:"Scroll down to see the bottom navigation"})]}),o.jsx(io,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(p,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(m,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(v,{})})]})})]})}},y={render:function(){const[e,n]=r.useState(0);return o.jsx(l,{sx:{width:500},children:o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(p,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(m,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(v,{})}),o.jsx(t,{label:"Folder",icon:o.jsx(H,{})})]})})}},j={render:function(){const[e,n]=r.useState("recents");return o.jsxs(l,{sx:{width:500},children:[o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Recents",value:"recents",icon:o.jsx(p,{})}),o.jsx(t,{label:"Favorites",value:"favorites",icon:o.jsx(m,{})}),o.jsx(t,{label:"Nearby",value:"nearby",icon:o.jsx(v,{})})]}),o.jsxs(l,{sx:{mt:2,p:2,bgcolor:"grey.100",borderRadius:1},children:["Current value: ",o.jsx("strong",{children:e})]})]})}},f={render:()=>o.jsx(l,{sx:{width:500},children:o.jsxs(c,{showLabels:!0,children:[o.jsx(t,{label:"Recents",icon:o.jsx(p,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(m,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(v,{})})]})})},w={render:function(){const[e,n]=r.useState(0);return o.jsxs(l,{sx:{width:"100%",maxWidth:600,mx:"auto",border:"1px solid",borderColor:"divider",borderRadius:1},children:[o.jsxs(l,{sx:{p:2,minHeight:200},children:[o.jsx("h3",{children:"Mobile App Simulation"}),o.jsx("p",{children:"Navigate using the bottom navigation bar"})]}),o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},sx:{borderTop:"1px solid",borderColor:"divider"},children:[o.jsx(t,{label:"Home",icon:o.jsx(p,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(m,{})}),o.jsx(t,{label:"Map",icon:o.jsx(v,{})}),o.jsx(t,{label:"Files",icon:o.jsx(H,{})})]})]})}},S={render:function(){const[e,n]=r.useState(0);return o.jsx(l,{sx:{width:500},children:o.jsxs(c,{value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{icon:o.jsx(p,{})}),o.jsx(t,{icon:o.jsx(m,{})}),o.jsx(t,{icon:o.jsx(v,{})}),o.jsx(t,{icon:o.jsx(H,{})})]})})}},M={render:function(){const[e,n]=r.useState(0);return o.jsx(l,{sx:{width:500},children:o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Home",icon:o.jsx(u,{icon:"home"})}),o.jsx(t,{label:"Favorites",icon:o.jsx(u,{icon:"favorite"})}),o.jsx(t,{label:"Location",icon:o.jsx(u,{icon:"location_on"})})]})})}},A={render:function(){const[e,n]=r.useState(0);return o.jsx(l,{sx:{width:500},children:o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Dashboard",icon:o.jsx(u,{icon:"dashboard",fill:1})}),o.jsx(t,{label:"Shopping",icon:o.jsx(u,{icon:"shopping_cart",fill:1})}),o.jsx(t,{label:"Notifications",icon:o.jsx(u,{icon:"notifications",fill:1})}),o.jsx(t,{label:"Profile",icon:o.jsx(u,{icon:"account_circle",fill:1})})]})})}},V={render:function(){const[e,n]=r.useState(0);return o.jsx(l,{sx:{width:500},children:o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},children:[o.jsx(t,{label:"Explore",icon:o.jsx(u,{icon:"explore",weight:400})}),o.jsx(t,{label:"Search",icon:o.jsx(u,{icon:"search",weight:400})}),o.jsx(t,{label:"Settings",icon:o.jsx(u,{icon:"settings",weight:400})})]})})}},C={render:function(){const[e,n]=r.useState(0);return o.jsxs(l,{sx:{width:"100%",maxWidth:600,mx:"auto",border:"1px solid",borderColor:"divider",borderRadius:1},children:[o.jsxs(l,{sx:{p:2,minHeight:200},children:[o.jsx("h3",{children:"MRS Mobile App"}),o.jsx("p",{children:"Modern navigation with Material Symbols"})]}),o.jsxs(c,{showLabels:!0,value:e,onChange:(s,i)=>{n(i)},sx:{borderTop:"1px solid",borderColor:"divider"},children:[o.jsx(t,{label:"Home",icon:o.jsx(u,{icon:"home",fill:e===0?1:0})}),o.jsx(t,{label:"Orders",icon:o.jsx(u,{icon:"receipt_long",fill:e===1?1:0})}),o.jsx(t,{label:"Map",icon:o.jsx(u,{icon:"map",fill:e===2?1:0})}),o.jsx(t,{label:"Profile",icon:o.jsx(u,{icon:"person",fill:e===3?1:0})})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function DefaultBottomNavigation() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Default BottomNavigation",...g.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function WithoutLabelsNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>;
  }
}`,...N.parameters?.docs?.source},description:{story:"Without labels (labels appear on selection)",...N.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function FixedBottomNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      pb: 7,
      height: 300,
      position: 'relative'
    }}>
        <Box sx={{
        p: 2
      }}>
          <p>Content area</p>
          <p>Scroll down to see the bottom navigation</p>
        </Box>
        <Paper sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
      }} elevation={3}>
          <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
          setValue(newValue);
        }}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>;
  }
}`,...B.parameters?.docs?.source},description:{story:"Fixed at bottom (mobile style)",...B.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function FourActionsNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </Box>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Four actions",...y.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function ValueMappingNav() {
    const [value, setValue] = useState('recents');
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
        <Box sx={{
        mt: 2,
        p: 2,
        bgcolor: 'grey.100',
        borderRadius: 1
      }}>
          Current value: <strong>{value}</strong>
        </Box>
      </Box>;
  }
}`,...j.parameters?.docs?.source},description:{story:"With value mapping (string values)",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 500
  }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
}`,...f.parameters?.docs?.source},description:{story:"Uncontrolled (no value prop)",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function FullWidthNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: '100%',
      maxWidth: 600,
      mx: 'auto',
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 1
    }}>
        <Box sx={{
        p: 2,
        minHeight: 200
      }}>
          <h3>Mobile App Simulation</h3>
          <p>Navigate using the bottom navigation bar</p>
        </Box>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }} sx={{
        borderTop: '1px solid',
        borderColor: 'divider'
      }}>
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Files" icon={<FolderIcon />} />
        </BottomNavigation>
      </Box>;
  }
}`,...w.parameters?.docs?.source},description:{story:"Full width mobile example",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function IconsOnlyNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction icon={<RestoreIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
          <BottomNavigationAction icon={<LocationOnIcon />} />
          <BottomNavigationAction icon={<FolderIcon />} />
        </BottomNavigation>
      </Box>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Icons only (no labels shown)",...S.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function MaterialSymbolsNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction label="Home" icon={<MaterialSymbol icon="home" />} />
          <BottomNavigationAction label="Favorites" icon={<MaterialSymbol icon="favorite" />} />
          <BottomNavigationAction label="Location" icon={<MaterialSymbol icon="location_on" />} />
        </BottomNavigation>
      </Box>;
  }
}`,...M.parameters?.docs?.source},description:{story:"With Material Symbols (Modern variant)",...M.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function MaterialSymbolsFilledNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction label="Dashboard" icon={<MaterialSymbol icon="dashboard" fill={1} />} />
          <BottomNavigationAction label="Shopping" icon={<MaterialSymbol icon="shopping_cart" fill={1} />} />
          <BottomNavigationAction label="Notifications" icon={<MaterialSymbol icon="notifications" fill={1} />} />
          <BottomNavigationAction label="Profile" icon={<MaterialSymbol icon="account_circle" fill={1} />} />
        </BottomNavigation>
      </Box>;
  }
}`,...A.parameters?.docs?.source},description:{story:"Material Symbols with filled variant",...A.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function MaterialSymbolsCustomNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }}>
          <BottomNavigationAction label="Explore" icon={<MaterialSymbol icon="explore" weight={400} />} />
          <BottomNavigationAction label="Search" icon={<MaterialSymbol icon="search" weight={400} />} />
          <BottomNavigationAction label="Settings" icon={<MaterialSymbol icon="settings" weight={400} />} />
        </BottomNavigation>
      </Box>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Material Symbols with custom weights",...V.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function MobileMaterialSymbolsNav() {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: '100%',
      maxWidth: 600,
      mx: 'auto',
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 1
    }}>
        <Box sx={{
        p: 2,
        minHeight: 200
      }}>
          <h3>MRS Mobile App</h3>
          <p>Modern navigation with Material Symbols</p>
        </Box>
        <BottomNavigation showLabels value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }} sx={{
        borderTop: '1px solid',
        borderColor: 'divider'
      }}>
          <BottomNavigationAction label="Home" icon={<MaterialSymbol icon="home" fill={value === 0 ? 1 : 0} />} />
          <BottomNavigationAction label="Orders" icon={<MaterialSymbol icon="receipt_long" fill={value === 1 ? 1 : 0} />} />
          <BottomNavigationAction label="Map" icon={<MaterialSymbol icon="map" fill={value === 2 ? 1 : 0} />} />
          <BottomNavigationAction label="Profile" icon={<MaterialSymbol icon="person" fill={value === 3 ? 1 : 0} />} />
        </BottomNavigation>
      </Box>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Full-width mobile with Material Symbols",...C.parameters?.docs?.description}}};const Lo=["Default","WithoutLabels","FixedAtBottom","FourActions","WithValueMapping","Uncontrolled","FullWidthMobile","IconsOnly","WithMaterialSymbols","MaterialSymbolsFilled","MaterialSymbolsCustom","MobileWithMaterialSymbols"];export{g as Default,B as FixedAtBottom,y as FourActions,w as FullWidthMobile,S as IconsOnly,V as MaterialSymbolsCustom,A as MaterialSymbolsFilled,C as MobileWithMaterialSymbols,f as Uncontrolled,M as WithMaterialSymbols,j as WithValueMapping,N as WithoutLabels,Lo as __namedExportsOrder,Ro as default};
