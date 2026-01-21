import{j as t,r as f,u as De,f as je,k as _e,c as Ce,h as Ue,R as Ge}from"./iframe-DWofrwYQ.js";import{b as We,g as Xe,s as de,c as ue,a as Ye,m as Fe,d as Je}from"./memoTheme-CvD85AUt.js";import{c as xe}from"./createSvgIcon-BpxyiW6D.js";import{u as oe}from"./useSlot-r_MShutE.js";import{u as Ke}from"./useControlled-SM6T88Jq.js";import{u as Qe}from"./useForkRef-BzogBz_V.js";import{v as Ze}from"./visuallyHidden-Dan1xhjv.js";import{i as Te}from"./isFocusVisible-B8k4qzLc.js";import{F as et}from"./Favorite-DenflZ2v.js";import{S as z}from"./Stack-D2w6zfey.js";import{B as re}from"./Box-DsLx4Dsl.js";import{T as y}from"./Typography-BMAZ_vyd.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-DP0AnNyT.js";import"./styled-D7k3etPa.js";import"./useThemeProps-D2N2uu2a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const tt=xe(t.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),nt=xe(t.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function at(n){return Xe("MuiRating",n)}const _=We("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function ot(n){const e=n.toString().split(".")[1];return e?e.length:0}function ye(n,e){if(n==null)return n;const a=Math.round(n/e)*e;return Number(a.toFixed(ot(e)))}const rt=n=>{const{classes:e,size:a,readOnly:i,disabled:u,emptyValueFocused:g,focusVisible:h}=n,s={root:["root",`size${Ce(a)}`,u&&"disabled",h&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[g&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ye(s,at,e)},st=de("span",{name:"MuiRating",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:a}=n;return[{[`& .${_.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${Ce(a.size)}`],a.readOnly&&e.readOnly]}})(Fe(({theme:n})=>({display:"inline-flex",position:"relative",fontSize:n.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${_.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${_.focusVisible} .${_.iconActive}`]:{outline:"1px solid #999"},[`& .${_.visuallyHidden}`]:Ze,variants:[{props:{size:"small"},style:{fontSize:n.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:n.typography.pxToRem(30)}},{props:({ownerState:e})=>e.readOnly,style:{pointerEvents:"none"}}]}))),He=de("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:n},e)=>[e.label,n.emptyValueFocused&&e.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:n})=>n.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),it=de("span",{name:"MuiRating",slot:"Icon",overridesResolver:(n,e)=>{const{ownerState:a}=n;return[e.icon,a.iconEmpty&&e.iconEmpty,a.iconFilled&&e.iconFilled,a.iconHover&&e.iconHover,a.iconFocus&&e.iconFocus,a.iconActive&&e.iconActive]}})(Fe(({theme:n})=>({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:e})=>e.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:e})=>e.iconEmpty,style:{color:(n.vars||n).palette.action.disabled}}]}))),lt=de("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:n=>Je(n)&&n!=="iconActive",overridesResolver:(n,e)=>{const{iconActive:a}=n;return[e.decimal,a&&e.iconActive]}})({position:"relative",variants:[{props:({iconActive:n})=>n,style:{transform:"scale(1.2)"}}]});function ct(n){const{value:e,...a}=n;return t.jsx("span",{...a})}function we(n){const{classes:e,disabled:a,emptyIcon:i,focus:u,getLabelText:g,highlightSelectedOnly:h,hover:s,icon:v,IconContainerComponent:M,isActive:b,itemValue:d,labelProps:w,name:j,onBlur:S,onChange:A,onClick:R,onFocus:k,readOnly:se,ownerState:L,ratingValue:l,ratingValueRounded:C,slots:pe={},slotProps:me={}}=n,F=h?d===l:d<=l,N=d<=s,ie=d<=u,$=d===C,le=`${j}-${je()}`,q={slots:pe,slotProps:me},[O,ge]=oe("icon",{elementType:it,className:ue(e.icon,F?e.iconFilled:e.iconEmpty,N&&e.iconHover,ie&&e.iconFocus,b&&e.iconActive),externalForwardedProps:q,ownerState:{...L,iconEmpty:!F,iconFilled:F,iconHover:N,iconFocus:ie,iconActive:b},additionalProps:{value:d},internalForwardedProps:{as:M}}),[p,E]=oe("label",{elementType:He,externalForwardedProps:q,ownerState:{...L,emptyValueFocused:void 0},additionalProps:{style:w?.style,htmlFor:le}}),V=t.jsx(O,{...ge,children:i&&!F?i:v});return se?t.jsx("span",{...w,children:V}):t.jsxs(f.Fragment,{children:[t.jsxs(p,{...E,children:[V,t.jsx("span",{className:e.visuallyHidden,children:g(d)})]}),t.jsx("input",{className:e.visuallyHidden,onFocus:k,onBlur:S,onChange:A,onClick:R,disabled:a,value:d,id:le,type:"radio",name:j,checked:$})]})}const ut=t.jsx(tt,{fontSize:"inherit"}),dt=t.jsx(nt,{fontSize:"inherit"});function pt(n){return`${n||"0"} Star${n!==1?"s":""}`}const mt=f.forwardRef(function(e,a){const i=De({name:"MuiRating",props:e}),{component:u="span",className:g,defaultValue:h=null,disabled:s=!1,emptyIcon:v=dt,emptyLabelText:M="Empty",getLabelText:b=pt,highlightSelectedOnly:d=!1,icon:w=ut,IconContainerComponent:j=ct,max:S=5,name:A,onChange:R,onChangeActive:k,onMouseLeave:se,onMouseMove:L,precision:l=1,readOnly:C=!1,size:pe="medium",value:me,slots:F={},slotProps:N={},...ie}=i,$=je(A),[le,q]=Ke({controlled:me,default:h,name:"Rating"}),O=ye(le,l),ge=_e(),[{hover:p,focus:E},V]=f.useState({hover:-1,focus:-1});let B=O;p!==-1&&(B=p),E!==-1&&(B=E);const[ze,he]=f.useState(!1),be=f.useRef(),Me=Qe(be,a),ke=o=>{L&&L(o);const r=be.current,{right:m,left:ce,width:I}=r.getBoundingClientRect();let P;ge?P=(m-o.clientX)/I:P=(o.clientX-ce)/I;let x=ye(S*P+l/2,l);x=Ue(x,l,S),V(H=>H.hover===x&&H.focus===x?H:{hover:x,focus:x}),he(!1),k&&p!==x&&k(o,x)},Oe=o=>{se&&se(o);const r=-1;V({hover:r,focus:r}),k&&p!==r&&k(o,r)},Se=o=>{let r=o.target.value===""?null:parseFloat(o.target.value);p!==-1&&(r=p),q(r),R&&R(o,r)},Ee=o=>{o.clientX===0&&o.clientY===0||(V({hover:-1,focus:-1}),q(null),R&&parseFloat(o.target.value)===O&&R(o,null))},Be=o=>{Te(o.target)&&he(!0);const r=parseFloat(o.target.value);V(m=>({hover:m.hover,focus:r}))},Ie=o=>{if(p!==-1)return;Te(o.target)||he(!1);const r=-1;V(m=>({hover:m.hover,focus:r}))},[Pe,Re]=f.useState(!1),D={...i,component:u,defaultValue:h,disabled:s,emptyIcon:v,emptyLabelText:M,emptyValueFocused:Pe,focusVisible:ze,getLabelText:b,icon:w,IconContainerComponent:j,max:S,precision:l,readOnly:C,size:pe},T=rt(D),ve={slots:F,slotProps:N},[Ae,Le]=oe("root",{ref:Me,className:ue(T.root,g),elementType:st,externalForwardedProps:{...ve,...ie,component:u},getSlotProps:o=>({...o,onMouseMove:r=>{ke(r),o.onMouseMove?.(r)},onMouseLeave:r=>{Oe(r),o.onMouseLeave?.(r)}}),ownerState:D,additionalProps:{role:C?"img":null,"aria-label":C?b(B):null}}),[Ne,$e]=oe("label",{className:ue(T.label,T.labelEmptyValue),elementType:He,externalForwardedProps:ve,ownerState:D}),[qe,Ve]=oe("decimal",{className:T.decimal,elementType:lt,externalForwardedProps:ve,ownerState:D});return t.jsxs(Ae,{...Le,children:[Array.from(new Array(S)).map((o,r)=>{const m=r+1,ce={classes:T,disabled:s,emptyIcon:v,focus:E,getLabelText:b,highlightSelectedOnly:d,hover:p,icon:w,IconContainerComponent:j,name:$,onBlur:Ie,onChange:Se,onClick:Ee,onFocus:Be,ratingValue:B,ratingValueRounded:O,readOnly:C,ownerState:D,slots:F,slotProps:N},I=m===Math.ceil(B)&&(p!==-1||E!==-1);if(l<1){const P=Array.from(new Array(1/l));return f.createElement(qe,{...Ve,key:m,className:ue(Ve.className,I&&T.iconActive),iconActive:I},P.map((x,H)=>{const fe=ye(m-1+(H+1)*l,l);return t.jsx(we,{...ce,isActive:!1,itemValue:fe,labelProps:{style:P.length-1===H?{}:{width:fe===B?`${(H+1)*l*100}%`:"0%",overflow:"hidden",position:"absolute"}}},fe)}))}return t.jsx(we,{...ce,isActive:I,itemValue:m},m)}),!C&&!s&&t.jsxs(Ne,{...$e,children:[t.jsx("input",{className:T.visuallyHidden,value:"",id:`${$}-empty`,type:"radio",name:$,checked:O==null,onFocus:()=>Re(!0),onBlur:()=>Re(!1),onChange:Se}),t.jsx("span",{className:T.visuallyHidden,children:M})]})]})}),c=Ge.forwardRef(({size:n="medium",max:e=5,precision:a=1,readOnly:i=!1,disabled:u=!1,highlightSelectedOnly:g=!1,emptyIcon:h,icon:s,defaultValue:v,value:M,onChange:b,onChangeActive:d,name:w,id:j,sx:S,...A},R)=>t.jsx(mt,{ref:R,size:n,max:e,precision:a,readOnly:i,disabled:u,highlightSelectedOnly:g,emptyIcon:h,icon:s,defaultValue:v,value:M,onChange:b,onChangeActive:d,name:w,id:j,sx:S,...A}));c.displayName="Rating";c.__docgenInfo={description:`Rating component

Ratings provide insight regarding others' opinions and experiences,
and can allow the user to submit a rating of their own.

@param props - Rating component props
@returns Rating component`,methods:[],displayName:"Rating",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the rating component
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The number of rating items
@default 5`,defaultValue:{value:"5",computed:!1}},precision:{required:!1,tsType:{name:"number"},description:`The precision of the rating value (e.g., 0.5 for half ratings)
@default 1`,defaultValue:{value:"1",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:`If true, the rating is read-only
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the rating is disabled
@default false`,defaultValue:{value:"false",computed:!1}},emptyIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display when empty"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display"},defaultValue:{required:!1,tsType:{name:"number"},description:"The default value. Use when the component is not controlled"},value:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"The rating value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: number | null) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"},onChangeActive:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: number) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback function that is fired when the hover state changes"},highlightSelectedOnly:{required:!1,tsType:{name:"boolean"},description:`If true, the component is rendered with a highlight color
@default false`,defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name attribute of the radio inputs"},id:{required:!1,tsType:{name:"string"},description:"The id of the input element"}},composes:["Omit"]};const gt=xe(t.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder"),kt={title:"Components/Molecules/Rating",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"The size of the rating component"},max:{control:"number",description:"The maximum rating value"},precision:{control:"number",description:"The precision of the rating (e.g., 0.5 for half stars)"},readOnly:{control:"boolean",description:"If true, the rating is read-only"},disabled:{control:"boolean",description:"If true, the rating is disabled"},highlightSelectedOnly:{control:"boolean",description:"If true, only the selected icon is highlighted"},value:{control:"number",description:"The rating value"},defaultValue:{control:"number",description:"The default rating value"}},parameters:{docs:{description:{component:"Ratings provide insight regarding others' opinions and experiences with a product. Users can also rate products they've purchased."}}}},U={args:{defaultValue:2.5,precision:.5}},G={render:()=>t.jsxs(z,{spacing:2,children:[t.jsxs(re,{children:[t.jsx(y,{variant:"caption",component:"div",gutterBottom:!0,children:"Small"}),t.jsx(c,{size:"small",defaultValue:4})]}),t.jsxs(re,{children:[t.jsx(y,{variant:"caption",component:"div",gutterBottom:!0,children:"Medium (default)"}),t.jsx(c,{size:"medium",defaultValue:4})]}),t.jsxs(re,{children:[t.jsx(y,{variant:"caption",component:"div",gutterBottom:!0,children:"Large"}),t.jsx(c,{size:"large",defaultValue:4})]})]})},W={render:()=>t.jsxs(z,{spacing:2,children:[t.jsx(c,{defaultValue:2.5,precision:.5}),t.jsx(y,{variant:"caption",children:"Precision: 0.5 (allows half-star ratings)"})]})},X={render:function(){const[e,a]=f.useState(3);return t.jsxs(z,{spacing:2,children:[t.jsx(c,{value:e,onChange:(i,u)=>{a(u)}}),t.jsxs(y,{variant:"body2",children:["Current value: ",e!==null?e:"None"]})]})}},Y={args:{value:3.5,readOnly:!0,precision:.5}},J={args:{defaultValue:2,disabled:!0}},K={args:{value:null}},Q={render:()=>t.jsxs(z,{spacing:2,children:[t.jsxs(re,{children:[t.jsx(y,{variant:"caption",component:"div",gutterBottom:!0,children:"3 Stars Max"}),t.jsx(c,{defaultValue:2,max:3})]}),t.jsxs(re,{children:[t.jsx(y,{variant:"caption",component:"div",gutterBottom:!0,children:"10 Stars Max"}),t.jsx(c,{defaultValue:7,max:10})]})]})},Z={args:{defaultValue:3,highlightSelectedOnly:!0}},ee={args:{defaultValue:2,icon:t.jsx(et,{fontSize:"inherit"}),emptyIcon:t.jsx(gt,{fontSize:"inherit"})}},te={render:function(){const[e,a]=f.useState(2),[i,u]=f.useState(-1),g={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function h(s){return`${s} Star${s!==1?"s":""}, ${g[s]}`}return t.jsxs(z,{spacing:2,children:[t.jsx(c,{value:e,precision:.5,onChange:(s,v)=>{a(v)},onChangeActive:(s,v)=>{u(v)},getLabelText:h}),e!==null&&t.jsx(y,{variant:"body2",children:g[i!==-1?i:e]})]})}},ne={render:()=>t.jsxs(z,{spacing:2,children:[t.jsx(y,{variant:"body2",children:"Rating with radio group behavior (can deselect by clicking the same value)"}),t.jsx(c,{name:"radio-group-rating",defaultValue:3})]})},ae={render:()=>t.jsxs(z,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(c,{value:4.5,precision:.5,readOnly:!0}),t.jsx(y,{variant:"body2",color:"text.secondary",children:"4.5 out of 5 (234 reviews)"})]})};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    precision: 0.5
  }
}`,...U.parameters?.docs?.source},description:{story:"Default Rating with 5 stars",...U.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          Small
        </Typography>
        <Rating size="small" defaultValue={4} />
      </Box>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          Medium (default)
        </Typography>
        <Rating size="medium" defaultValue={4} />
      </Box>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          Large
        </Typography>
        <Rating size="large" defaultValue={4} />
      </Box>
    </Stack>
}`,...G.parameters?.docs?.source},description:{story:"Rating Sizes",...G.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Rating defaultValue={2.5} precision={0.5} />
      <Typography variant="caption">Precision: 0.5 (allows half-star ratings)</Typography>
    </Stack>
}`,...W.parameters?.docs?.source},description:{story:"Half Star Precision",...W.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function ControlledRating() {
    const [value, setValue] = useState<number | null>(3);
    return <Stack spacing={2}>
        <Rating value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }} />
        <Typography variant="body2">Current value: {value !== null ? value : 'None'}</Typography>
      </Stack>;
  }
}`,...X.parameters?.docs?.source},description:{story:"Controlled Rating",...X.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    readOnly: true,
    precision: 0.5
  }
}`,...Y.parameters?.docs?.source},description:{story:"Read-only Rating",...Y.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    disabled: true
  }
}`,...J.parameters?.docs?.source},description:{story:"Disabled Rating",...J.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    value: null
  }
}`,...K.parameters?.docs?.source},description:{story:"No Rating (Empty)",...K.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          3 Stars Max
        </Typography>
        <Rating defaultValue={2} max={3} />
      </Box>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          10 Stars Max
        </Typography>
        <Rating defaultValue={7} max={10} />
      </Box>
    </Stack>
}`,...Q.parameters?.docs?.source},description:{story:"Custom Max Value",...Q.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    highlightSelectedOnly: true
  }
}`,...Z.parameters?.docs?.source},description:{story:"Highlight Selected Only",...Z.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    icon: <FavoriteIcon fontSize="inherit" />,
    emptyIcon: <FavoriteBorderIcon fontSize="inherit" />
  }
}`,...ee.parameters?.docs?.source},description:{story:"Custom Icon (Hearts)",...ee.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: function HoverRating() {
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);
    const labels: {
      [index: string]: string;
    } = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+'
    };
    function getLabelText(value: number) {
      return \`\${value} Star\${value !== 1 ? 's' : ''}, \${labels[value]}\`;
    }
    return <Stack spacing={2}>
        <Rating value={value} precision={0.5} onChange={(_event, newValue) => {
        setValue(newValue);
      }} onChangeActive={(_event, newHover) => {
        setHover(newHover);
      }} getLabelText={getLabelText} />
        {value !== null && <Typography variant="body2">{labels[hover !== -1 ? hover : value]}</Typography>}
      </Stack>;
  }
}`,...te.parameters?.docs?.source},description:{story:"With Hover Feedback",...te.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant="body2">
        Rating with radio group behavior (can deselect by clicking the same value)
      </Typography>
      <Rating name="radio-group-rating" defaultValue={3} />
    </Stack>
}`,...ne.parameters?.docs?.source},description:{story:"Radio Group Behavior",...ne.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} direction="row" alignItems="center">
      <Rating value={4.5} precision={0.5} readOnly />
      <Typography variant="body2" color="text.secondary">
        4.5 out of 5 (234 reviews)
      </Typography>
    </Stack>
}`,...ae.parameters?.docs?.source},description:{story:"Display Only (Reviews)",...ae.parameters?.docs?.description}}};const Ot=["Default","Sizes","HalfStar","Controlled","ReadOnly","Disabled","NoRating","CustomMax","HighlightSelectedOnly","CustomIconHearts","WithHoverFeedback","RadioGroup","DisplayOnly"];export{X as Controlled,ee as CustomIconHearts,Q as CustomMax,U as Default,J as Disabled,ae as DisplayOnly,W as HalfStar,Z as HighlightSelectedOnly,K as NoRating,ne as RadioGroup,Y as ReadOnly,G as Sizes,te as WithHoverFeedback,Ot as __namedExportsOrder,kt as default};
