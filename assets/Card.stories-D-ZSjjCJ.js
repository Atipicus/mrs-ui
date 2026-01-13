import{r as K,u as Q,j as e,R}from"./iframe-BX_m0INg.js";import{C as xe,a as Ce}from"./CardContent-zTVDlYHe.js";import{b as X,g as Y,c as G,s as v,a as Z,m as oe}from"./memoTheme-8ngm_e9n.js";import{u as C}from"./useSlot-C_OMo35G.js";import{B as ve}from"./ButtonBase-DUzTVJ1S.js";import{T as D,t as te}from"./Typography-Ihno-1Sj.js";import{B as M}from"./Button-mp_N6L_T.js";import{T as t}from"./Typography-BRAz92WF.js";import{A as fe}from"./Avatar-DTg4O0xz.js";import{I as A}from"./IconButton--F-a-Mck.js";import{M as S}from"./MaterialSymbol-Cva9naQg.js";import{S as U}from"./Stack-CBy24XoD.js";import{B as O}from"./Box-sD-QYSf6.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-DkkDOLXi.js";import"./useTheme-DkaT9Bto.js";import"./resolveComponentProps-CD5ULNUU.js";import"./useForkRef-CzPRO80O.js";import"./useEventCallback-BUqRJrDk.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Button-BXs0-2Rf.js";import"./CircularProgress-Db8vbv0n.js";import"./createSvgIcon-DgIDPxif.js";import"./IconButton-BN50JHAa.js";import"./styled-CoSBqqsE.js";import"./useThemeProps-BxdngXTB.js";function be(a){return Y("MuiCardActionArea",a)}const ee=X("MuiCardActionArea",["root","focusVisible","focusHighlight"]),je=a=>{const{classes:r}=a;return Z({root:["root"],focusHighlight:["focusHighlight"]},be,r)},Te=v(ve,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(a,r)=>r.root})(oe(({theme:a})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${ee.focusHighlight}`]:{opacity:(a.vars||a).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${ee.focusVisible} .${ee.focusHighlight}`]:{opacity:(a.vars||a).palette.action.focusOpacity}}))),we=v("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(a,r)=>r.focusHighlight})(oe(({theme:a})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:a.transitions.create("opacity",{duration:a.transitions.duration.short})}))),Ae=K.forwardRef(function(r,o){const n=Q({props:r,name:"MuiCardActionArea"}),{children:s,className:l,focusVisibleClassName:p,slots:c={},slotProps:h={},...g}=n,u=n,m=je(u),j={slots:c,slotProps:h},[T,B]=C("root",{elementType:Te,externalForwardedProps:{...j,...g},shouldForwardComponentProp:!0,ownerState:u,ref:o,className:G(m.root,l),additionalProps:{focusVisibleClassName:G(p,m.focusVisible)}}),[y,x]=C("focusHighlight",{elementType:we,externalForwardedProps:j,ownerState:u,ref:o,className:m.focusHighlight});return e.jsxs(T,{...B,children:[s,e.jsx(y,{...x})]})});function Se(a){return Y("MuiCardActions",a)}X("MuiCardActions",["root","spacing"]);const Me=a=>{const{classes:r,disableSpacing:o}=a;return Z({root:["root",!o&&"spacing"]},Se,r)},Re=v("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:o}=a;return[r.root,!o.disableSpacing&&r.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Be=K.forwardRef(function(r,o){const n=Q({props:r,name:"MuiCardActions"}),{disableSpacing:s=!1,className:l,...p}=n,c={...n,disableSpacing:s},h=Me(c);return e.jsx(Re,{className:G(h.root,l),ownerState:c,ref:o,...p})});function Pe(a){return Y("MuiCardHeader",a)}const J=X("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Ne=a=>{const{classes:r}=a;return Z({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Pe,r)},ke=v("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,r)=>[{[`& .${J.title}`]:r.title},{[`& .${J.subheader}`]:r.subheader},r.root]})({display:"flex",alignItems:"center",padding:16}),qe=v("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Ie=v("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),We=v("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,r)=>r.content})({flex:"1 1 auto",[`.${te.root}:where(& .${J.title})`]:{display:"block"},[`.${te.root}:where(& .${J.subheader})`]:{display:"block"}}),He=K.forwardRef(function(r,o){const n=Q({props:r,name:"MuiCardHeader"}),{action:s,avatar:l,component:p="div",disableTypography:c=!1,subheader:h,subheaderTypographyProps:g,title:u,titleTypographyProps:m,slots:j={},slotProps:T={},...B}=n,y={...n,component:p,disableTypography:c},x=Ne(y),w={slots:j,slotProps:{title:m,subheader:g,...T}};let P=u;const[ne,se]=C("title",{className:x.title,elementType:D,externalForwardedProps:w,ownerState:y,additionalProps:{variant:l?"body2":"h5",component:"span"}});P!=null&&P.type!==D&&!c&&(P=e.jsx(ne,{...se,children:P}));let N=h;const[ie,de]=C("subheader",{className:x.subheader,elementType:D,externalForwardedProps:w,ownerState:y,additionalProps:{variant:l?"body2":"body1",color:"textSecondary",component:"span"}});N!=null&&N.type!==D&&!c&&(N=e.jsx(ie,{...de,children:N}));const[ce,le]=C("root",{ref:o,className:x.root,elementType:ke,externalForwardedProps:{...w,...B,component:p},ownerState:y}),[pe,me]=C("avatar",{className:x.avatar,elementType:qe,externalForwardedProps:w,ownerState:y}),[he,ue]=C("content",{className:x.content,elementType:We,externalForwardedProps:w,ownerState:y}),[ye,ge]=C("action",{className:x.action,elementType:Ie,externalForwardedProps:w,ownerState:y});return e.jsxs(ce,{...le,children:[l&&e.jsx(pe,{...me,children:l}),e.jsxs(he,{...ue,children:[P,N]}),s&&e.jsx(ye,{...ge,children:s})]})});function ze(a){return Y("MuiCardMedia",a)}X("MuiCardMedia",["root","media","img"]);const Ee=a=>{const{classes:r,isMediaComponent:o,isImageComponent:n}=a;return Z({root:["root",o&&"media",n&&"img"]},ze,r)},Le=v("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:o}=a,{isMediaComponent:n,isImageComponent:s}=o;return[r.root,n&&r.media,s&&r.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),_e=["video","audio","picture","iframe","img"],Ve=["picture","img"],$e=K.forwardRef(function(r,o){const n=Q({props:r,name:"MuiCardMedia"}),{children:s,className:l,component:p="div",image:c,src:h,style:g,...u}=n,m=_e.includes(p),j=!m&&c?{backgroundImage:`url("${c}")`,...g}:g,T={...n,component:p,isMediaComponent:m,isImageComponent:Ve.includes(p)},B=Ee(T);return e.jsx(Le,{className:G(B.root,l),as:p,role:!m&&c?"img":void 0,ref:o,style:j,ownerState:T,src:m?c||h:void 0,...u,children:s})}),i=R.forwardRef(({children:a,variant:r="elevation",elevation:o=1,square:n=!1,raised:s=!1,sx:l,...p},c)=>e.jsx(xe,{ref:c,variant:r,elevation:r==="elevation"?s?8:o:0,square:n,sx:{...l},...p,children:a}));i.displayName="Card";i.__docgenInfo={description:`Card component

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
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ae=R.forwardRef(({children:a,disabled:r=!1,sx:o,...n},s)=>e.jsx(Ae,{ref:s,disabled:r,sx:{...o},...n,children:a}));ae.displayName="CardActionArea";ae.__docgenInfo={description:`CardActionArea component

Provides an actionable area within a Card. It's typically used to wrap
the main content of a Card to make the entire Card clickable.

@param props - CardActionArea component props
@returns CardActionArea component`,methods:[],displayName:"CardActionArea",props:{disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the component is disabled
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiCardActionAreaProps"]};const b=R.forwardRef(({children:a,disableSpacing:r=!1,sx:o,...n},s)=>e.jsx(Be,{ref:s,disableSpacing:r,sx:{...o},...n,children:a}));b.displayName="CardActions";b.__docgenInfo={description:`CardActions component

Provides an area for action buttons or other interactive elements within a Card.
Typically placed at the bottom of a Card.

@param props - CardActions component props
@returns CardActions component`,methods:[],displayName:"CardActions",props:{disableSpacing:{required:!1,tsType:{name:"boolean"},description:`If true, the actions will not have additional margin
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["MuiCardActionsProps"]};const d=R.forwardRef(({children:a,component:r="div",sx:o,...n},s)=>e.jsx(Ce,{ref:s,component:r,sx:{...o},...n,children:a}));d.displayName="CardContent";d.__docgenInfo={description:`CardContent component

Provides the main content area within a Card. Adds padding and spacing
according to Material Design specifications.

@param props - CardContent component props
@returns CardContent component`,methods:[],displayName:"CardContent",props:{component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node",defaultValue:{value:"'div'",computed:!1}}},composes:["MuiCardContentProps"]};const re=R.forwardRef(({action:a,avatar:r,component:o="div",disableTypography:n=!1,subheader:s,subheaderTypographyProps:l,title:p,titleTypographyProps:c,sx:h,...g},u)=>e.jsx(He,{ref:u,action:a,avatar:r,component:o,disableTypography:n,subheader:s,subheaderTypographyProps:l,title:p,titleTypographyProps:c,sx:{...h},...g}));re.displayName="CardHeader";re.__docgenInfo={description:`CardHeader component

Provides a header area within a Card. Supports an optional avatar,
title, subheader, and action elements.

@param props - CardHeader component props
@returns CardHeader component`,methods:[],displayName:"CardHeader",props:{action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The action to display in the card header"},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The Avatar element to display"},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The component used for the root node",defaultValue:{value:"'div'",computed:!1}},disableTypography:{required:!1,tsType:{name:"boolean"},description:`If true, the children won't be wrapped by a Typography component.
This can be useful to render an alternative Typography variant by wrapping
the title text, and optional subheader text with the Typography component.
@default false`,defaultValue:{value:"false",computed:!1}},subheader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"},subheaderTypographyProps:{required:!1,tsType:{name:"object"},description:`These props will be forwarded to the subheader
(as long as disableTypography is not true).`},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component"},titleTypographyProps:{required:!1,tsType:{name:"object"},description:`These props will be forwarded to the title
(as long as disableTypography is not true).`}},composes:["MuiCardHeaderProps"]};const f=R.forwardRef(({component:a="div",image:r,src:o,sx:n,...s},l)=>e.jsx($e,{ref:l,component:a,image:r,src:o,sx:{...n},...s}));f.displayName="CardMedia";f.__docgenInfo={description:`CardMedia component

Displays media content within a Card. Can be used for images, videos,
or other media types. Supports both background images and direct media elements.

@param props - CardMedia component props
@returns CardMedia component`,methods:[],displayName:"CardMedia",props:{component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`The component used for the root node
Either a string to use a HTML element or a component`,defaultValue:{value:"'div'",computed:!1}},image:{required:!1,tsType:{name:"string"},description:`Image to be displayed as a background image.
Either image or src (but not both) can be used.
Note: caller is responsible for escaping the value.`},src:{required:!1,tsType:{name:"string"},description:`An alias for image property.
Available only with media components.
Media components: video, audio, picture, iframe, img.`}},composes:["MuiCardMediaProps"]};const ga={title:"Molecules/Card",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevation","outlined"]},elevation:{control:{type:"range",min:0,max:24,step:1}},square:{control:"boolean"},raised:{control:"boolean"}},args:{variant:"elevation",elevation:1,square:!1,raised:!1}},k={render:a=>e.jsxs(i,{...a,sx:{maxWidth:345},children:[e.jsx(f,{component:"img",height:"140",image:"https://mui.com/static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),e.jsxs(d,{children:[e.jsx(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."})]}),e.jsxs(b,{children:[e.jsx(M,{size:"small",children:"Share"}),e.jsx(M,{size:"small",children:"Learn More"})]})]})},q={render:()=>e.jsx(U,{spacing:3,children:[0,1,2,4,8,12,16,24].map(a=>e.jsx(i,{elevation:a,sx:{maxWidth:345},children:e.jsxs(d,{children:[e.jsxs(t,{variant:"h6",children:["Elevation ",a]}),e.jsxs(t,{variant:"body2",color:"text.secondary",children:["Card with elevation level ",a]})]})},a))})},I={args:{elevation:22},render:()=>e.jsxs(U,{direction:"row",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(i,{variant:"elevation",elevation:1,sx:{maxWidth:345},children:e.jsxs(d,{children:[e.jsx(t,{variant:"h6",children:"Elevation Variant"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Card with elevation (default variant)"})]})}),e.jsx(i,{variant:"outlined",sx:{maxWidth:345},children:e.jsxs(d,{children:[e.jsx(t,{variant:"h6",children:"Outlined Variant"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Card with border, no shadow"})]})})]})},W={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsx(re,{avatar:e.jsx(fe,{sx:{bgcolor:"primary.main"},"aria-label":"recipe",children:"R"}),action:e.jsx(A,{"aria-label":"settings",children:e.jsx(S,{icon:"more_vert"})}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2023"}),e.jsx(f,{component:"img",height:"194",image:"https://mui.com/static/images/cards/paella.jpg",alt:"Paella dish"}),e.jsx(d,{children:e.jsx(t,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),e.jsxs(b,{disableSpacing:!0,children:[e.jsx(A,{"aria-label":"add to favorites",children:e.jsx(S,{icon:"favorite"})}),e.jsx(A,{"aria-label":"share",children:e.jsx(S,{icon:"share"})})]})]})},H={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsxs(ae,{children:[e.jsx(f,{component:"img",height:"140",image:"https://mui.com/static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),e.jsxs(d,{children:[e.jsx(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."})]})]}),e.jsx(b,{children:e.jsx(M,{size:"small",color:"primary",children:"Share"})})]})},z={render:()=>e.jsxs(i,{sx:{minWidth:275},children:[e.jsxs(d,{children:[e.jsx(t,{variant:"h5",component:"div",children:"be·nev·o·lent"}),e.jsx(t,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),e.jsxs(t,{variant:"body2",children:["well meaning and kindly.",e.jsx("br",{}),'"a benevolent smile"']})]}),e.jsx(b,{children:e.jsx(M,{size:"small",children:"Learn More"})})]})},E={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsx(f,{sx:{height:140},image:"https://mui.com/static/images/cards/contemplative-reptile.jpg",title:"green iguana"}),e.jsxs(d,{children:[e.jsx(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."})]}),e.jsxs(b,{children:[e.jsx(M,{size:"small",children:"Share"}),e.jsx(M,{size:"small",children:"Learn More"})]})]})},L={render:()=>e.jsxs(i,{sx:{maxWidth:345},children:[e.jsx(f,{component:"video",height:"200",src:"https://www.w3schools.com/html/mov_bbb.mp4",title:"Sample video",controls:!0}),e.jsxs(d,{children:[e.jsx(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Video Content"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Cards can contain video media elements using the CardMedia component."})]})]})},_={render:()=>e.jsxs(U,{spacing:3,children:[e.jsxs(O,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Default Width (600px)"}),e.jsx(i,{sx:{width:600},children:e.jsx(d,{children:e.jsx(t,{variant:"body1",children:"According to Figma specs, cards have a width of 600px on regular screens."})})})]}),e.jsxs(O,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Small Screen Width (444px)"}),e.jsx(i,{sx:{width:444},children:e.jsx(d,{children:e.jsx(t,{variant:"body1",children:"On small screens (Small Screen=True), cards have a width of 444px."})})})]}),e.jsxs(O,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Responsive Width (breakpoint-based)"}),e.jsx(i,{sx:{width:{xs:444,sm:600}},children:e.jsx(d,{children:e.jsx(t,{variant:"body1",children:"This card uses responsive widths: 444px on xs, 600px on sm and up."})})})]})]})},V={render:()=>e.jsxs(U,{direction:"row",spacing:2,children:[e.jsx(i,{sx:{maxWidth:345},square:!1,children:e.jsxs(d,{children:[e.jsx(t,{variant:"h6",children:"Rounded (Default)"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Uses theme.shape.borderRadius"})]})}),e.jsx(i,{sx:{maxWidth:345},square:!0,children:e.jsxs(d,{children:[e.jsx(t,{variant:"h6",children:"Square Corners"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"square=true removes border radius"})]})})]})},$={render:()=>e.jsxs(U,{direction:"row",spacing:2,children:[e.jsx(i,{sx:{maxWidth:345},raised:!1,children:e.jsxs(d,{children:[e.jsx(t,{variant:"h6",children:"Normal Card"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Elevation 1 (default)"})]})}),e.jsx(i,{sx:{maxWidth:345},raised:!0,children:e.jsxs(d,{children:[e.jsx(t,{variant:"h6",children:"Raised Card"}),e.jsx(t,{variant:"body2",color:"text.secondary",children:"Elevation 8 (raised=true)"})]})})]})},F={render:()=>e.jsxs(i,{sx:{display:"flex",maxWidth:600},children:[e.jsx(f,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"}),e.jsxs(O,{sx:{display:"flex",flexDirection:"column"},children:[e.jsxs(d,{sx:{flex:"1 0 auto"},children:[e.jsx(t,{component:"div",variant:"h5",children:"Live From Space"}),e.jsx(t,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}),e.jsxs(O,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:[e.jsx(A,{"aria-label":"previous",children:e.jsx(S,{icon:"skip_previous"})}),e.jsx(A,{"aria-label":"play/pause",children:e.jsx(S,{icon:"play_circle",size:38})}),e.jsx(A,{"aria-label":"next",children:e.jsx(S,{icon:"skip_next"})})]})]})]})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Interactive playground for Card component",...k.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Card with different elevation levels
According to Figma specs, default elevation is 1`,...q.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"Card variants: elevation vs outlined",...I.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Card with header, content, and actions",...W.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"Card with CardActionArea for clickable cards",...H.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"Simple card with just content",...z.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Media card with image",...E.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Card with video media",...L.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Responsive cards based on Figma specs
Default width: 600px, Small screen: 444px`,..._.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"Card with square corners (square=true)",...V.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Raised card with higher elevation",...$.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Card with custom content layout",...F.parameters?.docs?.description}}};const xa=["Playground","Elevations","Variants","CompleteCard","ActionAreaCard","SimpleCard","MediaCard","VideoCard","ResponsiveWidths","SquareCard","RaisedCard","CustomLayout"];export{H as ActionAreaCard,W as CompleteCard,F as CustomLayout,q as Elevations,E as MediaCard,k as Playground,$ as RaisedCard,_ as ResponsiveWidths,z as SimpleCard,V as SquareCard,I as Variants,L as VideoCard,xa as __namedExportsOrder,ga as default};
