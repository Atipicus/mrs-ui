import{g as Y,r as l,a as G,j as o,N as ro,P as n,R as J}from"./iframe-m0FcCUbT.js";import{g as K,c as Q,a as X,s as P,m as W}from"./memoTheme-C11nCEJ1.js";import{u as $}from"./useSlot-BPbjla4P.js";import{B as lo}from"./ButtonBase-Bd5szlVj.js";import{u as co}from"./unsupportedProp-CndhPpMQ.js";import{c as H}from"./createSvgIcon-DzjuuRaM.js";import{F as p}from"./Favorite-Bl1e7orV.js";import{M as d}from"./MaterialSymbol-DOQyWWmo.js";import{B as c}from"./Box-DSq61m1Q.js";import{P as uo}from"./Paper-BQ8rpTFt.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useForkRef-DeUHlcp-.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./useTheme--qrtAMJV.js";import"./integerPropType-DVPNO1YA.js";function mo(a){return Y("MuiBottomNavigation",a)}K("MuiBottomNavigation",["root"]);const po=a=>{const{classes:e}=a;return X({root:["root"]},mo,e)},vo=P("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(a,e)=>e.root})(W(({theme:a})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(a.vars||a).palette.background.paper}))),Z=l.forwardRef(function(e,i){const r=G({props:e,name:"MuiBottomNavigation"}),{children:s,className:T,component:R="div",onChange:L,showLabels:h=!1,value:E,...U}=r,I={...r,component:R,showLabels:h},_=po(I);return o.jsx(vo,{as:R,className:Q(_.root,T),ref:i,ownerState:I,...U,children:l.Children.map(s,(m,O)=>{if(!l.isValidElement(m))return null;ro.isFragment(m)&&console.error(["MUI: The BottomNavigation component doesn't accept a Fragment as a child.","Consider providing an array instead."].join(`
`));const x=m.props.value===void 0?O:m.props.value;return l.cloneElement(m,{selected:x===E,showLabel:m.props.showLabel!==void 0?m.props.showLabel:h,value:x,onChange:L})})})});Z.propTypes={children:n.node,classes:n.object,className:n.string,component:n.elementType,onChange:n.func,showLabels:n.bool,sx:n.oneOfType([n.arrayOf(n.oneOfType([n.func,n.object,n.bool])),n.func,n.object]),value:n.any};function bo(a){return Y("MuiBottomNavigationAction",a)}const oo=K("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),xo=a=>{const{classes:e,showLabel:i,selected:r}=a;return X({root:["root",!i&&!r&&"iconOnly",r&&"selected"],label:["label",!i&&!r&&"iconOnly",r&&"selected"]},bo,e)},ho=P(lo,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:i}=a;return[e.root,!i.showLabel&&!i.selected&&e.iconOnly]}})(W(({theme:a})=>({transition:a.transitions.create(["color","padding-top"],{duration:a.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(a.vars||a).palette.text.secondary,flexDirection:"column",flex:"1",[`&.${oo.selected}`]:{color:(a.vars||a).palette.primary.main},variants:[{props:({showLabel:e,selected:i})=>!e&&!i,style:{paddingTop:14}},{props:({showLabel:e,selected:i,label:r})=>!e&&!i&&!r,style:{paddingTop:0}}]}))),go=P("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(a,e)=>e.label})(W(({theme:a})=>({fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s",[`&.${oo.selected}`]:{fontSize:a.typography.pxToRem(14)},variants:[{props:({showLabel:e,selected:i})=>!e&&!i,style:{opacity:0,transitionDelay:"0s"}}]}))),eo=l.forwardRef(function(e,i){const r=G({props:e,name:"MuiBottomNavigationAction"}),{className:s,icon:T,label:R,onChange:L,onClick:h,selected:E,showLabel:U,value:I,slots:_={},slotProps:m={},...O}=r,x=r,k=xo(x),to=g=>{L&&L(g,I),h&&h(g)},q={slots:_,slotProps:m},[ao,no]=$("root",{elementType:ho,externalForwardedProps:{...q,...O},shouldForwardComponentProp:!0,ownerState:x,ref:i,className:Q(k.root,s),additionalProps:{focusRipple:!0},getSlotProps:g=>({...g,onClick:z=>{g.onClick?.(z),to(z)}})}),[io,so]=$("label",{elementType:go,externalForwardedProps:q,ownerState:x,className:k.label});return o.jsxs(ao,{...no,children:[T,o.jsx(io,{...so,children:R})]})});eo.propTypes={children:co,classes:n.object,className:n.string,icon:n.node,label:n.node,onChange:n.func,onClick:n.func,showLabel:n.bool,slotProps:n.shape({label:n.oneOfType([n.func,n.object]),root:n.oneOfType([n.func,n.object])}),slots:n.shape({label:n.elementType,root:n.elementType}),sx:n.oneOfType([n.arrayOf(n.oneOfType([n.func,n.object,n.bool])),n.func,n.object]),value:n.any};const u=J.forwardRef((a,e)=>o.jsx(Z,{ref:e,...a}));u.displayName="BottomNavigation";u.__docgenInfo={description:`BottomNavigation component

Bottom navigation bars allow movement between primary destinations in an app.

@param props - BottomNavigation component props
@returns BottomNavigation component`,methods:[],displayName:"BottomNavigation",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: any) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"},showLabels:{required:!1,tsType:{name:"boolean"},description:`If true, all BottomNavigationActions will show their labels
@default false`},value:{required:!1,tsType:{name:"any"},description:"The value of the currently selected BottomNavigationAction"}},composes:["MuiBottomNavigationProps"]};const t=J.forwardRef((a,e)=>o.jsx(eo,{ref:e,...a}));t.displayName="BottomNavigationAction";t.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationAction",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label element"},showLabel:{required:!1,tsType:{name:"boolean"},description:`If true, the BottomNavigationAction will show its label
@default false`},value:{required:!1,tsType:{name:"any"},description:"You can provide your own value. Otherwise, it falls back to the child position index"}},composes:["MuiBottomNavigationActionProps"]};const v=H(o.jsx("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"Restore"),b=H(o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),D=H(o.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"}),"Folder"),Wo={title:"Components/Molecules/BottomNavigation",component:u,tags:["autodocs"],argTypes:{showLabels:{control:"boolean",description:"Show labels for all actions"}},parameters:{docs:{description:{component:"Bottom navigation bars allow movement between primary destinations in an app. Typically used for mobile applications."}}}},N={render:function(){const[e,i]=l.useState(0);return o.jsx(c,{sx:{width:500},children:o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(v,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(p,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(b,{})})]})})}},y={render:function(){const[e,i]=l.useState(0);return o.jsx(c,{sx:{width:500},children:o.jsxs(u,{value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(v,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(p,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(b,{})})]})})}},B={render:function(){const[e,i]=l.useState(0);return o.jsxs(c,{sx:{pb:7,height:300,position:"relative"},children:[o.jsxs(c,{sx:{p:2},children:[o.jsx("p",{children:"Content area"}),o.jsx("p",{children:"Scroll down to see the bottom navigation"})]}),o.jsx(uo,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(v,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(p,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(b,{})})]})})]})}},j={render:function(){const[e,i]=l.useState(0);return o.jsx(c,{sx:{width:500},children:o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Recents",icon:o.jsx(v,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(p,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(b,{})}),o.jsx(t,{label:"Folder",icon:o.jsx(D,{})})]})})}},f={render:function(){const[e,i]=l.useState("recents");return o.jsxs(c,{sx:{width:500},children:[o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Recents",value:"recents",icon:o.jsx(v,{})}),o.jsx(t,{label:"Favorites",value:"favorites",icon:o.jsx(p,{})}),o.jsx(t,{label:"Nearby",value:"nearby",icon:o.jsx(b,{})})]}),o.jsxs(c,{sx:{mt:2,p:2,bgcolor:"grey.100",borderRadius:1},children:["Current value: ",o.jsx("strong",{children:e})]})]})}},w={render:()=>o.jsx(c,{sx:{width:500},children:o.jsxs(u,{showLabels:!0,children:[o.jsx(t,{label:"Recents",icon:o.jsx(v,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(p,{})}),o.jsx(t,{label:"Nearby",icon:o.jsx(b,{})})]})})},S={render:function(){const[e,i]=l.useState(0);return o.jsxs(c,{sx:{width:"100%",maxWidth:600,mx:"auto",border:"1px solid",borderColor:"divider",borderRadius:1},children:[o.jsxs(c,{sx:{p:2,minHeight:200},children:[o.jsx("h3",{children:"Mobile App Simulation"}),o.jsx("p",{children:"Navigate using the bottom navigation bar"})]}),o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},sx:{borderTop:"1px solid",borderColor:"divider"},children:[o.jsx(t,{label:"Home",icon:o.jsx(v,{})}),o.jsx(t,{label:"Favorites",icon:o.jsx(p,{})}),o.jsx(t,{label:"Map",icon:o.jsx(b,{})}),o.jsx(t,{label:"Files",icon:o.jsx(D,{})})]})]})}},M={render:function(){const[e,i]=l.useState(0);return o.jsx(c,{sx:{width:500},children:o.jsxs(u,{value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{icon:o.jsx(v,{})}),o.jsx(t,{icon:o.jsx(p,{})}),o.jsx(t,{icon:o.jsx(b,{})}),o.jsx(t,{icon:o.jsx(D,{})})]})})}},A={render:function(){const[e,i]=l.useState(0);return o.jsx(c,{sx:{width:500},children:o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Home",icon:o.jsx(d,{icon:"home"})}),o.jsx(t,{label:"Favorites",icon:o.jsx(d,{icon:"favorite"})}),o.jsx(t,{label:"Location",icon:o.jsx(d,{icon:"location_on"})})]})})}},C={render:function(){const[e,i]=l.useState(0);return o.jsx(c,{sx:{width:500},children:o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Dashboard",icon:o.jsx(d,{icon:"dashboard",fill:1})}),o.jsx(t,{label:"Shopping",icon:o.jsx(d,{icon:"shopping_cart",fill:1})}),o.jsx(t,{label:"Notifications",icon:o.jsx(d,{icon:"notifications",fill:1})}),o.jsx(t,{label:"Profile",icon:o.jsx(d,{icon:"account_circle",fill:1})})]})})}},V={render:function(){const[e,i]=l.useState(0);return o.jsx(c,{sx:{width:500},children:o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},children:[o.jsx(t,{label:"Explore",icon:o.jsx(d,{icon:"explore",weight:400})}),o.jsx(t,{label:"Search",icon:o.jsx(d,{icon:"search",weight:400})}),o.jsx(t,{label:"Settings",icon:o.jsx(d,{icon:"settings",weight:400})})]})})}},F={render:function(){const[e,i]=l.useState(0);return o.jsxs(c,{sx:{width:"100%",maxWidth:600,mx:"auto",border:"1px solid",borderColor:"divider",borderRadius:1},children:[o.jsxs(c,{sx:{p:2,minHeight:200},children:[o.jsx("h3",{children:"MRS Mobile App"}),o.jsx("p",{children:"Modern navigation with Material Symbols"})]}),o.jsxs(u,{showLabels:!0,value:e,onChange:(r,s)=>{i(s)},sx:{borderTop:"1px solid",borderColor:"divider"},children:[o.jsx(t,{label:"Home",icon:o.jsx(d,{icon:"home",fill:e===0?1:0})}),o.jsx(t,{label:"Orders",icon:o.jsx(d,{icon:"receipt_long",fill:e===1?1:0})}),o.jsx(t,{label:"Map",icon:o.jsx(d,{icon:"map",fill:e===2?1:0})}),o.jsx(t,{label:"Profile",icon:o.jsx(d,{icon:"person",fill:e===3?1:0})})]})]})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Default BottomNavigation",...N.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Without labels (labels appear on selection)",...y.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Fixed at bottom (mobile style)",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Four actions",...j.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"With value mapping (string values)",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 500
  }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
}`,...w.parameters?.docs?.source},description:{story:"Uncontrolled (no value prop)",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Full width mobile example",...S.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Icons only (no labels shown)",...M.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"With Material Symbols (Modern variant)",...A.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Material Symbols with filled variant",...C.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"Material Symbols with custom weights",...V.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Full-width mobile with Material Symbols",...F.parameters?.docs?.description}}};const Ho=["Default","WithoutLabels","FixedAtBottom","FourActions","WithValueMapping","Uncontrolled","FullWidthMobile","IconsOnly","WithMaterialSymbols","MaterialSymbolsFilled","MaterialSymbolsCustom","MobileWithMaterialSymbols"];export{N as Default,B as FixedAtBottom,j as FourActions,S as FullWidthMobile,M as IconsOnly,V as MaterialSymbolsCustom,C as MaterialSymbolsFilled,F as MobileWithMaterialSymbols,w as Uncontrolled,A as WithMaterialSymbols,f as WithValueMapping,y as WithoutLabels,Ho as __namedExportsOrder,Wo as default};
