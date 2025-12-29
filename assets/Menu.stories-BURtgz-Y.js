import{R as y,j as e,r as c}from"./iframe-EaO-VOYi.js";import{M as b}from"./Menu-B18nCCCa.js";import{c as T}from"./createSvgIcon-DAfLRhUw.js";import{P as z}from"./Person-C4__kXT4.js";import{S as P}from"./Settings-CeJZoVXB.js";import{E as O}from"./Edit-Dm-55Hoc.js";import{D}from"./Delete-BgELZToE.js";import{B as u}from"./Button-BCLU8qxn.js";import{M as t}from"./MenuItem-Du4FtUYR.js";import{L as A}from"./ListItemIcon-C0-4-v9S.js";import{L as v}from"./ListItemText-DlKpeAL5.js";import{D as S}from"./Divider-CE8Nd-cA.js";import{I as w}from"./IconButton-0VTam0NK.js";import{S as H}from"./Stack-D3Lu-Yor.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-oJ_Eo6YR.js";import"./useSlot-DVa4qzjr.js";import"./resolveComponentProps-DGjEG4aL.js";import"./useForkRef-C0Tkubmw.js";import"./useSlotProps-CYMQeb8e.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BBIj7ZgT.js";import"./useTheme-Cl2A6w3p.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-Te6X-fkz.js";import"./ButtonBase-B23rqg2z.js";import"./useEventCallback-BI0QvM1y.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-DL8RxzfY.js";import"./index-KKX1dlBr.js";import"./mergeSlotProps-CMh9pGHt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CP2PRXl7.js";import"./List-BCSCoagh.js";import"./ListContext-Dk-ZZpJv.js";import"./CircularProgress-BzNe0p_d.js";import"./listItemIconClasses-CqeIOGkT.js";import"./listItemTextClasses-DjUis3QL.js";import"./dividerClasses-CiX_QcLB.js";import"./Typography-CXZsQ2aA.js";import"./useThemeProps-ae3Yobn0.js";const s=y.forwardRef(({open:o,anchorEl:n,onClose:r,children:l,anchorOrigin:i={vertical:"top",horizontal:"left"},transformOrigin:a={vertical:"top",horizontal:"left"},autoFocus:h=!1,MenuListProps:d,variant:m="selectedMenu",...L},B)=>e.jsx(b,{ref:B,open:o,anchorEl:n,onClose:r,anchorOrigin:i,transformOrigin:a,autoFocus:h,MenuListProps:d,variant:m,...L,children:l}));s.displayName="Menu";s.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{open:{required:!0,tsType:{name:"boolean"},description:`If true, the Menu is open
@default false`},anchorEl:{required:!1,tsType:{name:"MuiMenuProps['anchorEl']",raw:"MuiMenuProps['anchorEl']"},description:`An HTML element, or a function that returns one.
It is used to set the position of the menu.`},onClose:{required:!1,tsType:{name:"MuiMenuProps['onClose']",raw:"MuiMenuProps['onClose']"},description:"Callback fired when the component requests to be closed"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component (typically MenuItem elements)"},anchorOrigin:{required:!1,tsType:{name:"MuiMenuProps['anchorOrigin']",raw:"MuiMenuProps['anchorOrigin']"},description:`The position of the Menu
@default { vertical: 'top', horizontal: 'left' }`,defaultValue:{value:"{ vertical: 'top', horizontal: 'left' }",computed:!1}},transformOrigin:{required:!1,tsType:{name:"MuiMenuProps['transformOrigin']",raw:"MuiMenuProps['transformOrigin']"},description:`The position of the Menu relative to the anchor element
@default { vertical: 'top', horizontal: 'left' }`,defaultValue:{value:"{ vertical: 'top', horizontal: 'left' }",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:`If true, the Menu will automatically select the first item
@default false`,defaultValue:{value:"false",computed:!1}},MenuListProps:{required:!1,tsType:{name:"MuiMenuProps['MenuListProps']",raw:"MuiMenuProps['MenuListProps']"},description:"Props applied to the List element"},variant:{required:!1,tsType:{name:"union",raw:"'menu' | 'selectedMenu'",elements:[{name:"literal",value:"'menu'"},{name:"literal",value:"'selectedMenu'"}]},description:`The variant of the Menu
@default 'selectedMenu'`,defaultValue:{value:"'selectedMenu'",computed:!1}}},composes:["MuiMenuProps"]};const R=T(e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert"),F=T(e.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout"),Le={title:"Molecules/Menu",component:s,parameters:{layout:"centered",docs:{description:{component:"Menus display a list of choices on temporary surfaces. They appear when users interact with a button, action, or other control."}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"If true, the Menu is open"},anchorOrigin:{control:"object",description:"The position of the Menu"},transformOrigin:{control:"object",description:"The position of the Menu relative to the anchor element"},autoFocus:{control:"boolean",description:"If true, the Menu will automatically select the first item"},variant:{control:"select",options:["menu","selectedMenu"],description:"The variant of the Menu"}}},p={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Open Menu"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{onClick:()=>n(null),children:"Profile"}),e.jsx(t,{onClick:()=>n(null),children:"My account"}),e.jsx(t,{onClick:()=>n(null),children:"Logout"})]})]})}},M={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Account Menu"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(A,{children:e.jsx(z,{fontSize:"small"})}),e.jsx(v,{children:"Profile"})]}),e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(A,{children:e.jsx(P,{fontSize:"small"})}),e.jsx(v,{children:"Settings"})]}),e.jsx(S,{}),e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(A,{children:e.jsx(F,{fontSize:"small"})}),e.jsx(v,{children:"Logout"})]})]})]})}},I={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Options"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{onClick:()=>n(null),children:"New"}),e.jsx(t,{onClick:()=>n(null),children:"Open"}),e.jsx(S,{}),e.jsx(t,{onClick:()=>n(null),children:"Save"}),e.jsx(t,{onClick:()=>n(null),children:"Save As..."}),e.jsx(S,{}),e.jsx(t,{onClick:()=>n(null),children:"Exit"})]})]})}},E={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:l=>n(l.currentTarget),children:e.jsx(R,{})}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(A,{children:e.jsx(O,{fontSize:"small"})}),e.jsx(v,{children:"Edit"})]}),e.jsxs(t,{onClick:()=>n(null),children:[e.jsx(A,{children:e.jsx(D,{fontSize:"small"})}),e.jsx(v,{children:"Delete"})]})]})]})}},x={render:()=>{const[o,n]=c.useState(null),[r,l]=c.useState(null),[i,a]=c.useState(null),[h,d]=c.useState(null);return e.jsxs(H,{spacing:2,children:[e.jsx(u,{variant:"outlined",onClick:m=>n(m.currentTarget),children:"Top Left"}),e.jsxs(s,{open:!!o,anchorEl:o,onClose:()=>n(null),anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(t,{onClick:()=>n(null),children:"Item 1"}),e.jsx(t,{onClick:()=>n(null),children:"Item 2"})]}),e.jsx(u,{variant:"outlined",onClick:m=>l(m.currentTarget),children:"Top Right"}),e.jsxs(s,{open:!!r,anchorEl:r,onClose:()=>l(null),anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(t,{onClick:()=>l(null),children:"Item 1"}),e.jsx(t,{onClick:()=>l(null),children:"Item 2"})]}),e.jsx(u,{variant:"outlined",onClick:m=>a(m.currentTarget),children:"Bottom Left"}),e.jsxs(s,{open:!!i,anchorEl:i,onClose:()=>a(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(t,{onClick:()=>a(null),children:"Item 1"}),e.jsx(t,{onClick:()=>a(null),children:"Item 2"})]}),e.jsx(u,{variant:"outlined",onClick:m=>d(m.currentTarget),children:"Bottom Right"}),e.jsxs(s,{open:!!h,anchorEl:h,onClose:()=>d(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(t,{onClick:()=>d(null),children:"Item 1"}),e.jsx(t,{onClick:()=>d(null),children:"Item 2"})]})]})}},C={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Dense Menu"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),MenuListProps:{dense:!0},children:[e.jsx(t,{onClick:()=>n(null),children:"Item 1"}),e.jsx(t,{onClick:()=>n(null),children:"Item 2"}),e.jsx(t,{onClick:()=>n(null),children:"Item 3"}),e.jsx(t,{onClick:()=>n(null),children:"Item 4"}),e.jsx(t,{onClick:()=>n(null),children:"Item 5"})]})]})}},f={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Menu Options"}),e.jsxs(s,{open:r,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{onClick:()=>n(null),children:"Enabled Item"}),e.jsx(t,{disabled:!0,children:"Disabled Item"}),e.jsx(t,{onClick:()=>n(null),children:"Another Enabled"}),e.jsx(t,{disabled:!0,children:"Another Disabled"})]})]})}},g={render:()=>{const[o,n]=c.useState(null),[r,l]=c.useState(1),i=!!o,a=h=>{l(h),n(null)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:h=>n(h.currentTarget),children:"Select Language"}),e.jsxs(s,{open:i,anchorEl:o,onClose:()=>n(null),children:[e.jsx(t,{selected:r===0,onClick:()=>a(0),children:"English"}),e.jsx(t,{selected:r===1,onClick:()=>a(1),children:"Spanish"}),e.jsx(t,{selected:r===2,onClick:()=>a(2),children:"French"}),e.jsx(t,{selected:r===3,onClick:()=>a(3),children:"German"})]})]})}},k={render:()=>{const[o,n]=c.useState(null),r=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"contained",onClick:l=>n(l.currentTarget),children:"Long Menu"}),e.jsx(s,{open:r,anchorEl:o,onClose:()=>n(null),MenuListProps:{style:{maxHeight:200}},children:Array.from({length:20},(l,i)=>e.jsxs(t,{onClick:()=>n(null),children:["Item ",i+1]},i))})]})}},j={render:()=>{const[o,n]=c.useState(null),r=i=>{i.preventDefault(),n(o===null?{mouseX:i.clientX-2,mouseY:i.clientY-4}:null)},l=()=>{n(null)};return e.jsxs("div",{onContextMenu:r,style:{padding:40,border:"2px dashed #ccc",borderRadius:4,cursor:"context-menu"},children:["Right-click me to open context menu",e.jsxs(s,{open:o!==null,onClose:l,anchorReference:"anchorPosition",anchorPosition:o!==null?{top:o.mouseY,left:o.mouseX}:void 0,children:[e.jsx(t,{onClick:l,children:"Copy"}),e.jsx(t,{onClick:l,children:"Paste"}),e.jsx(S,{}),e.jsx(t,{onClick:l,children:"Delete"})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Default Menu with simple items",...p.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Menu with icons",...M.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"Menu with dividers",...I.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    return <>
        <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
          <MoreVertIcon />
        </IconButton>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Icon button menu (more common pattern)",...E.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Different anchor positions",...x.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Dense Menu (more compact)",...C.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:"Menu with disabled items",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Menu with selected item",...g.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Max height Menu (scrollable)",...k.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Context Menu (right-click)",...j.parameters?.docs?.description}}};const Be=["Default","WithIcons","WithDividers","IconButtonMenu","Positions","Dense","WithDisabledItems","WithSelectedItem","MaxHeight","ContextMenu"];export{j as ContextMenu,p as Default,C as Dense,E as IconButtonMenu,k as MaxHeight,x as Positions,f as WithDisabledItems,I as WithDividers,M as WithIcons,g as WithSelectedItem,Be as __namedExportsOrder,Le as default};
