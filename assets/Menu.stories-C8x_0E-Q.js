import{R as y,j as e,r as c}from"./iframe-baYw3PT1.js";import{M as b}from"./Menu-vvqg0ETH.js";import{M as p}from"./MaterialSymbol-CgTeZz5w.js";import{B as u}from"./Button-BnTCMX93.js";import{M as t}from"./MenuItem-Bjvn80jv.js";import{L as v}from"./ListItemIcon-BnAhvTEk.js";import{L as T}from"./ListItemText-C6-1uwRj.js";import{D as S}from"./Divider-DLYaaZQQ.js";import{I as O}from"./IconButton-RiqsTaM1.js";import{S as z}from"./Stack-d7PsPsbj.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-B5NHVBgT.js";import"./useSlot-BdR0nDEs.js";import"./resolveComponentProps-DGE65Qsh.js";import"./useForkRef-CTy98Zel.js";import"./useSlotProps-Bov7zHvQ.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-cV_u_5Bs.js";import"./useTheme-DwHTqhav.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-td3db1Dg.js";import"./utils-CK6gbS5F.js";import"./ButtonBase-D2DVdTvN.js";import"./useEventCallback-Ce1sc177.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DWp5VgVk.js";import"./index-Cs7ICvxj.js";import"./getReactElementRef-yOKJ8OTX.js";import"./mergeSlotProps-BOdlsOvE.js";import"./Modal-CPvwDiKu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BtLxKy1M.js";import"./Fade-DobVtkIM.js";import"./List-C82M1qZg.js";import"./ListContext-C4RW6PNv.js";import"./Box-DfHYOIZk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DjUtYO1i.js";import"./listItemIconClasses-hEc1Bs2P.js";import"./listItemTextClasses-DldAIQCY.js";import"./dividerClasses-BHbImljq.js";import"./Typography-S5gDVIhi.js";import"./useThemeProps-BsJkaDId.js";const s=y.forwardRef(({open:o,anchorEl:n,onClose:r,children:l,anchorOrigin:i={vertical:"top",horizontal:"left"},transformOrigin:a={vertical:"top",horizontal:"left"},autoFocus:h=!1,MenuListProps:d,variant:m="selectedMenu",...B},L)=>e.jsx(b,{ref:L,open:o,anchorEl:n,onClose:r,anchorOrigin:i,transformOrigin:a,autoFocus:h,MenuListProps:d,variant:m,...B,children:l}));s.displayName="Menu";s.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{open:{required:!0,tsType:{name:"boolean"},description:`If true, the Menu is open
@default false`},anchorEl:{required:!1,tsType:{name:"MuiMenuProps['anchorEl']",raw:"MuiMenuProps['anchorEl']"},description:`An HTML element, or a function that returns one.
It is used to set the position of the menu.`},onClose:{required:!1,tsType:{name:"MuiMenuProps['onClose']",raw:"MuiMenuProps['onClose']"},description:"Callback fired when the component requests to be closed"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component (typically MenuItem elements)"},anchorOrigin:{required:!1,tsType:{name:"MuiMenuProps['anchorOrigin']",raw:"MuiMenuProps['anchorOrigin']"},description:`The position of the Menu
@default { vertical: 'top', horizontal: 'left' }`,defaultValue:{value:"{ vertical: 'top', horizontal: 'left' }",computed:!1}},transformOrigin:{required:!1,tsType:{name:"MuiMenuProps['transformOrigin']",raw:"MuiMenuProps['transformOrigin']"},description:`The position of the Menu relative to the anchor element
@default { vertical: 'top', horizontal: 'left' }`,defaultValue:{value:"{ vertical: 'top', horizontal: 'left' }",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:`If true, the Menu will automatically select the first item
@default false`,defaultValue:{value:"false",computed:!1}},MenuListProps:{required:!1,tsType:{name:"MuiMenuProps['MenuListProps']",raw:"MuiMenuProps['MenuListProps']"},description:"Props applied to the List element"},variant:{required:!1,tsType:{name:"union",raw:"'menu' | 'selectedMenu'",elements:[{name:"literal",value:"'menu'"},{name:"literal",value:"'selectedMenu'"}]},description:`The variant of the Menu
@default 'selectedMenu'`,defaultValue:{value:"'selectedMenu'",computed:!1}}},composes:["MuiMenuProps"]};const Ae={title:"Molecules/Menu",component:s,parameters:{layout:"centered",docs:{description:{component:"Menus display a list of choices on temporary surfaces. They appear when users interact with a button, action, or other control."}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"If true, the Menu is open"},anchorOrigin:{control:"object",description:"The position of the Menu"},transformOrigin:{control:"object",description:"The position of the Menu relative to the anchor element"},autoFocus:{control:"boolean",description:"If true, the Menu will automatically select the first item"},variant:{control:"select",options:["menu","selectedMenu"],description:"The variant of the Menu"}}},M={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Open Menu"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{onClick:()=>n(null),children:"Profile"}),e.jsx(t,{onClick:()=>n(null),children:"My account"}),e.jsx(t,{onClick:()=>n(null),children:"Logout"})]})]})}},I={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Account Menu"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(v,{children:e.jsx(p,{icon:"person",size:"small"})}),e.jsx(T,{children:"Profile"})]}),e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(v,{children:e.jsx(p,{icon:"settings",size:"small"})}),e.jsx(T,{children:"Settings"})]}),e.jsx(S,{}),e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(v,{children:e.jsx(p,{icon:"logout",size:"small"})}),e.jsx(T,{children:"Logout"})]})]})]})}},E={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Options"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{onClick:()=>n(null),children:"New"}),e.jsx(t,{onClick:()=>n(null),children:"Open"}),e.jsx(S,{}),e.jsx(t,{onClick:()=>n(null),children:"Save"}),e.jsx(t,{onClick:()=>n(null),children:"Save As..."}),e.jsx(S,{}),e.jsx(t,{onClick:()=>n(null),children:"Exit"})]})]})}},x={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(O,{onClick:l=>n(l.currentTarget),children:e.jsx(p,{icon:"more_vert"})}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(v,{children:e.jsx(p,{icon:"edit",size:"small"})}),e.jsx(T,{children:"Edit"})]}),e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(v,{children:e.jsx(p,{icon:"delete",size:"small"})}),e.jsx(T,{children:"Delete"})]})]})]})}},C={render:()=>{const[o,n]=c.useState(null),[r,l]=c.useState(null),[i,a]=c.useState(null),[h,d]=c.useState(null);return e.jsxs(z,{spacing:2,children:[e.jsx(u,{variant:"outlined",onClick:m=>n(m.currentTarget),children:"Top Left"}),e.jsxs(s,{open:!!o,anchorEl:o,onClose:()=>n(null),anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(t,{onClick:()=>n(null),children:"Item 1"}),e.jsx(t,{onClick:()=>n(null),children:"Item 2"})]}),e.jsx(u,{variant:"outlined",onClick:m=>l(m.currentTarget),children:"Top Right"}),e.jsxs(s,{open:!!r,anchorEl:r,onClose:()=>l(null),anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(t,{onClick:()=>l(null),children:"Item 1"}),e.jsx(t,{onClick:()=>l(null),children:"Item 2"})]}),e.jsx(u,{variant:"outlined",onClick:m=>a(m.currentTarget),children:"Bottom Left"}),e.jsxs(s,{open:!!i,anchorEl:i,onClose:()=>a(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(t,{onClick:()=>a(null),children:"Item 1"}),e.jsx(t,{onClick:()=>a(null),children:"Item 2"})]}),e.jsx(u,{variant:"outlined",onClick:m=>d(m.currentTarget),children:"Bottom Right"}),e.jsxs(s,{open:!!h,anchorEl:h,onClose:()=>d(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(t,{onClick:()=>d(null),children:"Item 1"}),e.jsx(t,{onClick:()=>d(null),children:"Item 2"})]})]})}},g={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Dense Menu"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),MenuListProps:{dense:!0},children:[e.jsx(t,{onClick:()=>n(null),children:"Item 1"}),e.jsx(t,{onClick:()=>n(null),children:"Item 2"}),e.jsx(t,{onClick:()=>n(null),children:"Item 3"}),e.jsx(t,{onClick:()=>n(null),children:"Item 4"}),e.jsx(t,{onClick:()=>n(null),children:"Item 5"})]})]})}},k={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Menu Options"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{onClick:()=>n(null),children:"Enabled Item"}),e.jsx(t,{disabled:!0,children:"Disabled Item"}),e.jsx(t,{onClick:()=>n(null),children:"Another Enabled"}),e.jsx(t,{disabled:!0,children:"Another Disabled"})]})]})}},f={render:()=>{const[o,n]=c.useState(null),[r,l]=c.useState(1),i=!!o,a=h=>{l(h),n(null)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:h=>n(h.currentTarget),children:"Select Language"}),e.jsxs(s,{open:i,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{selected:r===0,onClick:()=>a(0),children:"English"}),e.jsx(t,{selected:r===1,onClick:()=>a(1),children:"Spanish"}),e.jsx(t,{selected:r===2,onClick:()=>a(2),children:"French"}),e.jsx(t,{selected:r===3,onClick:()=>a(3),children:"German"})]})]})}},j={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Long Menu"}),e.jsx(s,{open:r,anchorEl:o,onClose:()=>n(null),MenuListProps:{style:{maxHeight:200}},children:Array.from({length:20},(l,i)=>e.jsxs(t,{onClick:()=>n(null),children:["Item ",i+1]},i))})]})}},A={render:()=>{const[o,n]=c.useState(null),r=i=>{i.preventDefault(),n(o===null?{mouseX:i.clientX-2,mouseY:i.clientY-4}:null)},l=()=>{n(null)};return e.jsxs("div",{onContextMenu:r,style:{padding:40,border:"2px dashed #ccc",borderRadius:4,cursor:"context-menu"},children:["Right-click me to open context menu",e.jsxs(s,{open:o!==null,onClose:l,anchorReference:"anchorPosition",anchorPosition:o!==null?{top:o.mouseY,left:o.mouseX}:void 0,children:[e.jsx(t,{onClick:l,children:"Copy"}),e.jsx(t,{onClick:l,children:"Paste"}),e.jsx(S,{}),e.jsx(t,{onClick:l,children:"Delete"})]})]})}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Open Menu
        </Button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>My account</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
        </Menu>
      </>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Default Menu with simple items",...M.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Account Menu
        </Button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <MaterialSymbol icon="person" size="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <MaterialSymbol icon="settings" size="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <MaterialSymbol icon="logout" size="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </>;
  }
}`,...I.parameters?.docs?.source},description:{story:"Menu with icons",...I.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Options
        </Button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>New</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Open</MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>Save</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Save As...</MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>Exit</MenuItem>
        </Menu>
      </>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Menu with dividers",...E.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
          <MaterialSymbol icon="more_vert" />
        </IconButton>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <MaterialSymbol icon="edit" size="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <MaterialSymbol icon="delete" size="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Icon button menu (more common pattern)",...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
    const [anchorEl3, setAnchorEl3] = useState<null | HTMLElement>(null);
    const [anchorEl4, setAnchorEl4] = useState<null | HTMLElement>(null);
    return <Stack spacing={2}>
        <Button variant="outlined" onClick={e => setAnchorEl1(e.currentTarget)}>
          Top Left
        </Button>
        <Menu open={Boolean(anchorEl1)} anchorEl={anchorEl1} onClose={() => setAnchorEl1(null)} anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}>
          <MenuItem onClick={() => setAnchorEl1(null)}>Item 1</MenuItem>
          <MenuItem onClick={() => setAnchorEl1(null)}>Item 2</MenuItem>
        </Menu>

        <Button variant="outlined" onClick={e => setAnchorEl2(e.currentTarget)}>
          Top Right
        </Button>
        <Menu open={Boolean(anchorEl2)} anchorEl={anchorEl2} onClose={() => setAnchorEl2(null)} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <MenuItem onClick={() => setAnchorEl2(null)}>Item 1</MenuItem>
          <MenuItem onClick={() => setAnchorEl2(null)}>Item 2</MenuItem>
        </Menu>

        <Button variant="outlined" onClick={e => setAnchorEl3(e.currentTarget)}>
          Bottom Left
        </Button>
        <Menu open={Boolean(anchorEl3)} anchorEl={anchorEl3} onClose={() => setAnchorEl3(null)} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}>
          <MenuItem onClick={() => setAnchorEl3(null)}>Item 1</MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>Item 2</MenuItem>
        </Menu>

        <Button variant="outlined" onClick={e => setAnchorEl4(e.currentTarget)}>
          Bottom Right
        </Button>
        <Menu open={Boolean(anchorEl4)} anchorEl={anchorEl4} onClose={() => setAnchorEl4(null)} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <MenuItem onClick={() => setAnchorEl4(null)}>Item 1</MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>Item 2</MenuItem>
        </Menu>
      </Stack>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Different anchor positions",...C.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Dense Menu
        </Button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} MenuListProps={{
        dense: true
      }}>
          <MenuItem onClick={() => setAnchorEl(null)}>Item 1</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Item 2</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Item 3</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Item 4</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Item 5</MenuItem>
        </Menu>
      </>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Dense Menu (more compact)",...g.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Menu Options
        </Button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Enabled Item</MenuItem>
          <MenuItem disabled>Disabled Item</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Another Enabled</MenuItem>
          <MenuItem disabled>Another Disabled</MenuItem>
        </Menu>
      </>;
  }
}`,...k.parameters?.docs?.source},description:{story:"Menu with disabled items",...k.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleMenuItemClick = (index: number) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Select Language
        </Button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem selected={selectedIndex === 0} onClick={() => handleMenuItemClick(0)}>
            English
          </MenuItem>
          <MenuItem selected={selectedIndex === 1} onClick={() => handleMenuItemClick(1)}>
            Spanish
          </MenuItem>
          <MenuItem selected={selectedIndex === 2} onClick={() => handleMenuItemClick(2)}>
            French
          </MenuItem>
          <MenuItem selected={selectedIndex === 3} onClick={() => handleMenuItemClick(3)}>
            German
          </MenuItem>
        </Menu>
      </>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Menu with selected item",...f.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Long Menu
        </Button>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} MenuListProps={{
        style: {
          maxHeight: 200
        }
      }}>
          {Array.from({
          length: 20
        }, (_, i) => <MenuItem key={i} onClick={() => setAnchorEl(null)}>
              Item {i + 1}
            </MenuItem>)}
        </Menu>
      </>;
  }
}`,...j.parameters?.docs?.source},description:{story:"Max height Menu (scrollable)",...j.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [contextMenu, setContextMenu] = useState<{
      mouseX: number;
      mouseY: number;
    } | null>(null);
    const handleContextMenu = (event: React.MouseEvent) => {
      event.preventDefault();
      setContextMenu(contextMenu === null ? {
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4
      } : null);
    };
    const handleClose = () => {
      setContextMenu(null);
    };
    return <div onContextMenu={handleContextMenu} style={{
      padding: 40,
      border: '2px dashed #ccc',
      borderRadius: 4,
      cursor: 'context-menu'
    }}>
        Right-click me to open context menu
        <Menu open={contextMenu !== null} onClose={handleClose} anchorReference="anchorPosition" anchorPosition={contextMenu !== null ? {
        top: contextMenu.mouseY,
        left: contextMenu.mouseX
      } : undefined}>
          <MenuItem onClick={handleClose}>Copy</MenuItem>
          <MenuItem onClick={handleClose}>Paste</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:"Context Menu (right-click)",...A.parameters?.docs?.description}}};const ve=["Default","WithIcons","WithDividers","IconButtonMenu","Positions","Dense","WithDisabledItems","WithSelectedItem","MaxHeight","ContextMenu"];export{A as ContextMenu,M as Default,g as Dense,x as IconButtonMenu,j as MaxHeight,C as Positions,k as WithDisabledItems,E as WithDividers,I as WithIcons,f as WithSelectedItem,ve as __namedExportsOrder,Ae as default};
