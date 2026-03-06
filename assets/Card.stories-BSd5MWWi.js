import{g as H,r as D,a as U,j as e,P as r,R as q}from"./iframe-m0FcCUbT.js";import{C as re,a as ne}from"./CardContent-s39Wow6c.js";import{g as $,c as V,a as G,s as _,m as Q}from"./memoTheme-C11nCEJ1.js";import{u as K}from"./useSlot-BPbjla4P.js";import{B as te}from"./ButtonBase-Bd5szlVj.js";import{C as oe}from"./CardHeader-CZ7PS5-K.js";import{c as se}from"./chainPropTypes-CPkqCYVL.js";import{B as C}from"./Button-Cu9UkBT5.js";import{T as n}from"./Typography-CkHBM8H0.js";import{A as ie}from"./Avatar-DAVvT0Sr.js";import{I as g}from"./IconButton-Ce0KB6fI.js";import{M as x}from"./MaterialSymbol-DOQyWWmo.js";import{B as P}from"./Box-DSq61m1Q.js";import{S as z}from"./Stack-DLDfFx0e.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BQ8rpTFt.js";import"./useTheme--qrtAMJV.js";import"./integerPropType-DVPNO1YA.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useForkRef-DeUHlcp-.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./Typography-BAhyjZNg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./theme-helpers-CoFoCxtx.js";import"./Button-CJ6MgozL.js";import"./CircularProgress-nywBWFjt.js";import"./createSvgIcon-DzjuuRaM.js";import"./IconButton-BtP768Mt.js";import"./useThemeProps-OFH6wkZ1.js";function de(a){return H("MuiCardActionArea",a)}const F=$("MuiCardActionArea",["root","focusVisible","focusHighlight"]),ce=a=>{const{classes:t}=a;return G({root:["root"],focusHighlight:["focusHighlight"]},de,t)},le=_(te,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(a,t)=>t.root})(Q(({theme:a})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${F.focusHighlight}`]:{opacity:(a.vars||a).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${F.focusVisible} .${F.focusHighlight}`]:{opacity:(a.vars||a).palette.action.focusOpacity}}))),pe=_("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(a,t)=>t.focusHighlight})(Q(({theme:a})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:a.transitions.create("opacity",{duration:a.transitions.duration.short})}))),X=D.forwardRef(function(t,o){const s=U({props:t,name:"MuiCardActionArea"}),{children:c,className:m,focusVisibleClassName:p,slots:l={},slotProps:v={},...N}=s,f=s,h=ce(f),E={slots:l,slotProps:v},[L,O]=K("root",{elementType:le,externalForwardedProps:{...E,...N},shouldForwardComponentProp:!0,ownerState:f,ref:o,className:V(h.root,m),additionalProps:{focusVisibleClassName:V(p,h.focusVisible)}}),[ee,ae]=K("focusHighlight",{elementType:pe,externalForwardedProps:E,ownerState:f,ref:o,className:h.focusHighlight});return e.jsxs(L,{...O,children:[c,e.jsx(ee,{...ae})]})});X.propTypes={children:r.node,classes:r.object,className:r.string,focusVisibleClassName:r.string,slotProps:r.shape({focusHighlight:r.oneOfType([r.func,r.object]),root:r.oneOfType([r.func,r.object])}),slots:r.shape({focusHighlight:r.elementType,root:r.elementType}),sx:r.oneOfType([r.arrayOf(r.oneOfType([r.func,r.object,r.bool])),r.func,r.object])};function me(a){return H("MuiCardActions",a)}$("MuiCardActions",["root","spacing"]);const he=a=>{const{classes:t,disableSpacing:o}=a;return G({root:["root",!o&&"spacing"]},me,t)},ue=_("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,!o.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Y=D.forwardRef(function(t,o){const s=U({props:t,name:"MuiCardActions"}),{disableSpacing:c=!1,className:m,...p}=s,l={...s,disableSpacing:c},v=he(l);return e.jsx(ue,{className:V(v.root,m),ownerState:l,ref:o,...p})});Y.propTypes={children:r.node,classes:r.object,className:r.string,disableSpacing:r.bool,sx:r.oneOfType([r.arrayOf(r.oneOfType([r.func,r.object,r.bool])),r.func,r.object])};function ye(a){return H("MuiCardMedia",a)}$("MuiCardMedia",["root","media","img"]);const ge=a=>{const{classes:t,isMediaComponent:o,isImageComponent:s}=a;return G({root:["root",o&&"media",s&&"img"]},ye,t)},xe=_("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a,{isMediaComponent:s,isImageComponent:c}=o;return[t.root,s&&t.media,c&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),Ce=["video","audio","picture","iframe","img"],ve=["picture","img"],Z=D.forwardRef(function(t,o){const s=U({props:t,name:"MuiCardMedia"}),{children:c,className:m,component:p="div",image:l,src:v,style:N,...f}=s,h=Ce.includes(p),E=!h&&l?{backgroundImage:`url("${l}")`,...N}:N,L={...s,component:p,isMediaComponent:h,isImageComponent:ve.includes(p)},O=ge(L);return e.jsx(xe,{className:V(O.root,m),as:p,role:!h&&l?"img":void 0,ref:o,style:E,ownerState:L,src:h?l||v:void 0,...f,children:c})});Z.propTypes={children:se(r.node,a=>!a.children&&!a.image&&!a.src&&!a.component?new Error("MUI: Either `children`, `image`, `src` or `component` prop must be specified."):null),classes:r.object,className:r.string,component:r.elementType,image:r.string,src:r.string,style:r.object,sx:r.oneOfType([r.arrayOf(r.oneOfType([r.func,r.object,r.bool])),r.func,r.object])};const i=q.forwardRef(({children:a,variant:t="elevation",elevation:o=1,square:s=!1,raised:c=!1,sx:m,...p},l)=>e.jsx(re,{ref:l,variant:t,elevation:t==="elevation"?c?8:o:0,square:s,sx:{...m},...p,children:a}));i.displayName="Card";i.__docgenInfo={description:`Card component

Cards contain content and actions about a single subject.
They should be easy to scan for relevant and actionable information.
Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

@param props - Card component props
@returns Card component`,methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'elevation' | 'outlined'",elements:[{name:"literal",value:"'elevation'"},{name:"literal",value:"'outlined'"}]},description:`The variant to use for the Paper component
@default 'elevation'`,defaultValue:{value:"'elevation'",computed:!1}},elevation:{required:!1,tsType:{name:"PaperProps['elevation']",raw:"PaperProps['elevation']"},description:`Shadow depth for elevation variant (0-24)
According to Figma specs, default is 1
@default 1`,defaultValue:{value:"1",computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:`If true, rounded corners are disabled
According to Figma specs, default is false (uses borderRadius token)
@default false`,defaultValue:{value:"false",computed:!1}},raised:{required:!1,tsType:{name:"boolean"},description:`If true, the card will take up the full width of its container
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const J=q.forwardRef(({children:a,disabled:t=!1,sx:o,...s},c)=>e.jsx(X,{ref:c,disabled:t,sx:{...o},...s,children:a}));J.displayName="CardActionArea";J.__docgenInfo={description:`CardActionArea component

Provides an actionable area within a Card. It's typically used to wrap
the main content of a Card to make the entire Card clickable.

@param props - CardActionArea component props
@returns CardActionArea component`,methods:[],displayName:"CardActionArea",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiCardActionAreaProps"]};const y=q.forwardRef(({children:a,disableSpacing:t=!1,sx:o,...s},c)=>e.jsx(Y,{ref:c,disableSpacing:t,sx:{...o},...s,children:a}));y.displayName="CardActions";y.__docgenInfo={description:`CardActions component

Provides an area for action buttons or other interactive elements within a Card.
Typically placed at the bottom of a Card.

@param props - CardActions component props
@returns CardActions component`,methods:[],displayName:"CardActions",props:{disableSpacing:{required:!1,tsType:{name:"boolean"},description:`If true, the actions will not have additional margin
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiCardActionsProps"]};const d=q.forwardRef(({children:a,component:t="div",sx:o,...s},c)=>e.jsx(ne,{ref:c,component:t,sx:{...o},...s,children:a}));d.displayName="CardContent";d.__docgenInfo={description:`CardContent component

Provides the main content area within a Card. Adds padding and spacing
according to Material Design specifications.

@param props - CardContent component props
@returns CardContent component`,methods:[],displayName:"CardContent",props:{component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node",defaultValue:{value:"'div'",computed:!1}}},composes:["MuiCardContentProps"]};const u=q.forwardRef(({component:a="div",image:t,src:o,sx:s,...c},m)=>e.jsx(Z,{ref:m,component:a,image:t,src:o,sx:{...s},...c}));u.displayName="CardMedia";u.__docgenInfo={description:`CardMedia component

Displays media content within a Card. Can be used for images, videos,
or other media types. Supports both background images and direct media elements.

@param props - CardMedia component props
@returns CardMedia component`,methods:[],displayName:"CardMedia",props:{component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`The component used for the root node
Either a string to use a HTML element or a component`,defaultValue:{value:"'div'",computed:!1}},image:{required:!1,tsType:{name:"string"},description:`Image to be displayed as a background image.
Either image or src (but not both) can be used.
Note: caller is responsible for escaping the value.`},src:{required:!1,tsType:{name:"string"},description:`An alias for image property.
Available only with media components.
Media components: video, audio, picture, iframe, img.`}},composes:["MuiCardMediaProps"]};const Xe={title:"Molecules/Card",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevation","outlined"]},elevation:{control:{type:"range",min:0,max:24,step:1}},square:{control:"boolean"},raised:{control:"boolean"}},args:{variant:"elevation",elevation:1,square:!1,raised:!1}},b={render:a=>e.jsxs(i,{...a,sx:{maxWidth:345},children:[e.jsx(u,{component:"img",height:"140",image:"https://mui.com/static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),e.jsxs(d,{children:[e.jsx(n,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."})]}),e.jsxs(y,{children:[e.jsx(C,{size:"small",children:"Share"}),e.jsx(C,{size:"small",children:"Learn More"})]})]})},j={render:()=>e.jsx(z,{spacing:3,children:[0,1,2,4,8,12,16,24].map(a=>e.jsx(i,{elevation:a,sx:{maxWidth:345},children:e.jsxs(d,{children:[e.jsxs(n,{variant:"h6",children:["Elevation ",a]}),e.jsxs(n,{variant:"body2",color:"text.secondary",children:["Card with elevation level ",a]})]})},a))})},T={args:{elevation:22},render:()=>e.jsxs(z,{direction:"row",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(i,{variant:"elevation",elevation:1,sx:{maxWidth:345},children:e.jsxs(d,{children:[e.jsx(n,{variant:"h6",children:"Elevation Variant"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Card with elevation (default variant)"})]})}),e.jsx(i,{variant:"outlined",sx:{maxWidth:345},children:e.jsxs(d,{children:[e.jsx(n,{variant:"h6",children:"Outlined Variant"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Card with border, no shadow"})]})})]})},w={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsx(oe,{avatar:e.jsx(ie,{sx:{bgcolor:"primary.main"},"aria-label":"recipe",children:"R"}),action:e.jsx(g,{"aria-label":"settings",children:e.jsx(x,{icon:"more_vert"})}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2023"}),e.jsx(u,{component:"img",height:"194",image:"https://mui.com/static/images/cards/paella.jpg",alt:"Paella dish"}),e.jsx(d,{children:e.jsx(n,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),e.jsxs(y,{disableSpacing:!0,children:[e.jsx(g,{"aria-label":"add to favorites",children:e.jsx(x,{icon:"favorite"})}),e.jsx(g,{"aria-label":"share",children:e.jsx(x,{icon:"share"})})]})]})},A={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsxs(J,{children:[e.jsx(u,{component:"img",height:"140",image:"https://mui.com/static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),e.jsxs(d,{children:[e.jsx(n,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."})]})]}),e.jsx(y,{children:e.jsx(C,{size:"small",color:"primary",children:"Share"})})]})},S={render:()=>e.jsxs(i,{sx:{minWidth:275},children:[e.jsxs(d,{children:[e.jsx(n,{variant:"h5",component:"div",children:"be·nev·o·lent"}),e.jsx(n,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),e.jsxs(n,{variant:"body2",children:["well meaning and kindly.",e.jsx("br",{}),'"a benevolent smile"']})]}),e.jsx(y,{children:e.jsx(C,{size:"small",children:"Learn More"})})]})},M={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsx(u,{sx:{height:140},image:"https://mui.com/static/images/cards/contemplative-reptile.jpg",title:"green iguana"}),e.jsxs(d,{children:[e.jsx(n,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."})]}),e.jsxs(y,{children:[e.jsx(C,{size:"small",children:"Share"}),e.jsx(C,{size:"small",children:"Learn More"})]})]})},B={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsx(u,{component:"video",height:"200",src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Sample video",controls:!0}),e.jsxs(d,{children:[e.jsx(n,{gutterBottom:!0,variant:"h5",component:"div",children:"Video Content"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Cards can contain video media elements using the CardMedia component."})]})]})},R={render:()=>e.jsxs(z,{spacing:3,children:[e.jsxs(P,{children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Default Width (600px)"}),e.jsx(i,{sx:{width:600},children:e.jsx(d,{children:e.jsx(n,{variant:"body1",children:"According to Figma specs, cards have a width of 600px on regular screens."})})})]}),e.jsxs(P,{children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Small Screen Width (444px)"}),e.jsx(i,{sx:{width:444},children:e.jsx(d,{children:e.jsx(n,{variant:"body1",children:"On small screens (Small Screen=True), cards have a width of 444px."})})})]}),e.jsxs(P,{children:[e.jsx(n,{variant:"h6",gutterBottom:!0,children:"Responsive Width (breakpoint-based)"}),e.jsx(i,{sx:{width:{xs:444,sm:600}},children:e.jsx(d,{children:e.jsx(n,{variant:"body1",children:"This card uses responsive widths: 444px on xs, 600px on sm and up."})})})]})]})},k={render:()=>e.jsxs(z,{direction:"row",spacing:2,children:[e.jsx(i,{sx:{maxWidth:345},square:!1,children:e.jsxs(d,{children:[e.jsx(n,{variant:"h6",children:"Rounded (Default)"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Uses theme.shape.borderRadius"})]})}),e.jsx(i,{sx:{maxWidth:345},square:!0,children:e.jsxs(d,{children:[e.jsx(n,{variant:"h6",children:"Square Corners"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"square=true removes border radius"})]})})]})},W={render:()=>e.jsxs(z,{direction:"row",spacing:2,children:[e.jsx(i,{sx:{maxWidth:345},raised:!1,children:e.jsxs(d,{children:[e.jsx(n,{variant:"h6",children:"Normal Card"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Elevation 1 (default)"})]})}),e.jsx(i,{sx:{maxWidth:345},raised:!0,children:e.jsxs(d,{children:[e.jsx(n,{variant:"h6",children:"Raised Card"}),e.jsx(n,{variant:"body2",color:"text.secondary",children:"Elevation 8 (raised=true)"})]})})]})},I={render:()=>e.jsxs(i,{sx:{display:"flex",maxWidth:600},children:[e.jsx(u,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"}),e.jsxs(P,{sx:{display:"flex",flexDirection:"column"},children:[e.jsxs(d,{sx:{flex:"1 0 auto"},children:[e.jsx(n,{component:"div",variant:"h5",children:"Live From Space"}),e.jsx(n,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}),e.jsxs(P,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:[e.jsx(g,{"aria-label":"previous",children:e.jsx(x,{icon:"skip_previous"})}),e.jsx(g,{"aria-label":"play/pause",children:e.jsx(x,{icon:"play_circle",size:38})}),e.jsx(g,{"aria-label":"next",children:e.jsx(x,{icon:"skip_next"})})]})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} sx={{
    maxWidth: 345
  }}>
      <CardMedia component="img" height="140" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
}`,...b.parameters?.docs?.source},description:{story:"Interactive playground for Card component",...b.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      {[0, 1, 2, 4, 8, 12, 16, 24].map(elevation => <Card key={elevation} elevation={elevation} sx={{
      maxWidth: 345
    }}>
          <CardContent>
            <Typography variant="h6">Elevation {elevation}</Typography>
            <Typography variant="body2" color="text.secondary">
              Card with elevation level {elevation}
            </Typography>
          </CardContent>
        </Card>)}
    </Stack>
}`,...j.parameters?.docs?.source},description:{story:`Card with different elevation levels
According to Figma specs, default elevation is 1`,...j.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 22
  },
  render: () => <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      <Card variant="elevation" elevation={1} sx={{
      maxWidth: 345
    }}>
        <CardContent>
          <Typography variant="h6">Elevation Variant</Typography>
          <Typography variant="body2" color="text.secondary">
            Card with elevation (default variant)
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{
      maxWidth: 345
    }}>
        <CardContent>
          <Typography variant="h6">Outlined Variant</Typography>
          <Typography variant="body2" color="text.secondary">
            Card with border, no shadow
          </Typography>
        </CardContent>
      </Card>
    </Stack>
}`,...T.parameters?.docs?.source},description:{story:"Card variants: elevation vs outlined",...T.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardHeader avatar={<Avatar sx={{
      bgcolor: 'primary.main'
    }} aria-label="recipe">
            R
          </Avatar>} action={<IconButton aria-label="settings">
            <MaterialSymbol icon="more_vert" />
          </IconButton>} title="Shrimp and Chorizo Paella" subheader="September 14, 2023" />
      <CardMedia component="img" height="194" image="https://mui.com/static/images/cards/paella.jpg" alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MaterialSymbol icon="favorite" />
        </IconButton>
        <IconButton aria-label="share">
          <MaterialSymbol icon="share" />
        </IconButton>
      </CardActions>
    </Card>
}`,...w.parameters?.docs?.source},description:{story:"Card with header, content, and actions",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
}`,...A.parameters?.docs?.source},description:{story:"Card with CardActionArea for clickable cards",...A.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    minWidth: 275
  }}>
      <CardContent>
        <Typography variant="h5" component="div">
          be·nev·o·lent
        </Typography>
        <Typography sx={{
        mb: 1.5
      }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          "a benevolent smile"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
}`,...S.parameters?.docs?.source},description:{story:"Simple card with just content",...S.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardMedia sx={{
      height: 140
    }} image="https://mui.com/static/images/cards/contemplative-reptile.jpg" title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
}`,...M.parameters?.docs?.source},description:{story:"Media card with image",...M.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardMedia component="video" height="200" src="https://www.w3schools.com/html/mov_bbb.mp4" title="Sample video" controls />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Video Content
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cards can contain video media elements using the CardMedia component.
        </Typography>
      </CardContent>
    </Card>
}`,...B.parameters?.docs?.source},description:{story:"Card with video media",...B.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Default Width (600px)
        </Typography>
        <Card sx={{
        width: 600
      }}>
          <CardContent>
            <Typography variant="body1">
              According to Figma specs, cards have a width of 600px on regular screens.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Small Screen Width (444px)
        </Typography>
        <Card sx={{
        width: 444
      }}>
          <CardContent>
            <Typography variant="body1">
              On small screens (Small Screen=True), cards have a width of 444px.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Responsive Width (breakpoint-based)
        </Typography>
        <Card sx={{
        width: {
          xs: 444,
          sm: 600
        }
      }}>
          <CardContent>
            <Typography variant="body1">
              This card uses responsive widths: 444px on xs, 600px on sm and up.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Stack>
}`,...R.parameters?.docs?.source},description:{story:`Responsive cards based on Figma specs
Default width: 600px, Small screen: 444px`,...R.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <Card sx={{
      maxWidth: 345
    }} square={false}>
        <CardContent>
          <Typography variant="h6">Rounded (Default)</Typography>
          <Typography variant="body2" color="text.secondary">
            Uses theme.shape.borderRadius
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{
      maxWidth: 345
    }} square={true}>
        <CardContent>
          <Typography variant="h6">Square Corners</Typography>
          <Typography variant="body2" color="text.secondary">
            square=true removes border radius
          </Typography>
        </CardContent>
      </Card>
    </Stack>
}`,...k.parameters?.docs?.source},description:{story:"Card with square corners (square=true)",...k.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <Card sx={{
      maxWidth: 345
    }} raised={false}>
        <CardContent>
          <Typography variant="h6">Normal Card</Typography>
          <Typography variant="body2" color="text.secondary">
            Elevation 1 (default)
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{
      maxWidth: 345
    }} raised={true}>
        <CardContent>
          <Typography variant="h6">Raised Card</Typography>
          <Typography variant="body2" color="text.secondary">
            Elevation 8 (raised=true)
          </Typography>
        </CardContent>
      </Card>
    </Stack>
}`,...W.parameters?.docs?.source},description:{story:"Raised card with higher elevation",...W.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    display: 'flex',
    maxWidth: 600
  }}>
      <CardMedia component="img" sx={{
      width: 151
    }} image="https://mui.com/static/images/cards/live-from-space.jpg" alt="Live from space album cover" />
      <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <CardContent sx={{
        flex: '1 0 auto'
      }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        pl: 1,
        pb: 1
      }}>
          <IconButton aria-label="previous">
            <MaterialSymbol icon="skip_previous" />
          </IconButton>
          <IconButton aria-label="play/pause">
            <MaterialSymbol icon="play_circle" size={38} />
          </IconButton>
          <IconButton aria-label="next">
            <MaterialSymbol icon="skip_next" />
          </IconButton>
        </Box>
      </Box>
    </Card>
}`,...I.parameters?.docs?.source},description:{story:"Card with custom content layout",...I.parameters?.docs?.description}}};const Ye=["Playground","Elevations","Variants","CompleteCard","ActionAreaCard","SimpleCard","MediaCard","VideoCard","ResponsiveWidths","SquareCard","RaisedCard","CustomLayout"];export{A as ActionAreaCard,w as CompleteCard,I as CustomLayout,j as Elevations,M as MediaCard,b as Playground,W as RaisedCard,R as ResponsiveWidths,S as SimpleCard,k as SquareCard,T as Variants,B as VideoCard,Ye as __namedExportsOrder,Xe as default};
