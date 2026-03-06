import{j as t,g as Ge,r as v,a as We,b as Ce,a0 as Xe,E as Fe,a6 as Ye,P as e,R as Je}from"./iframe-m0FcCUbT.js";import{g as Ke,c as de,a as Qe,s as pe,m as Oe,d as Ze}from"./memoTheme-C11nCEJ1.js";import{c as Re}from"./createSvgIcon-DzjuuRaM.js";import{u as re}from"./useSlot-BPbjla4P.js";import{u as en}from"./useControlled-Cm6cFOSH.js";import{u as nn}from"./useForkRef-DeUHlcp-.js";import{i as we}from"./isFocusVisible-TJLqzInv.js";import{v as tn}from"./visuallyHidden-Dan1xhjv.js";import{c as an}from"./chainPropTypes-CPkqCYVL.js";import{F as on}from"./Favorite-Bl1e7orV.js";import{S as M}from"./Stack-DLDfFx0e.js";import{T as b}from"./Typography-BAhyjZNg.js";import{B as se}from"./Box-DSq61m1Q.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useThemeProps-OFH6wkZ1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const rn=Re(t.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),sn=Re(t.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function ln(a){return Ge("MuiRating",a)}const _=Ke("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function cn(a){const n=a.toString().split(".")[1];return n?n.length:0}function be(a,n){if(a==null)return a;const o=Math.round(a/n)*n;return Number(o.toFixed(cn(n)))}const un=a=>{const{classes:n,size:o,readOnly:l,disabled:d,emptyValueFocused:f,focusVisible:h}=a,i={root:["root",`size${Fe(o)}`,d&&"disabled",h&&"focusVisible",l&&"readOnly"],label:["label","pristine"],labelEmptyValue:[f&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Qe(i,ln,n)},dn=pe("span",{name:"MuiRating",slot:"Root",overridesResolver:(a,n)=>{const{ownerState:o}=a;return[{[`& .${_.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${Fe(o.size)}`],o.readOnly&&n.readOnly]}})(Oe(({theme:a})=>({display:"inline-flex",position:"relative",fontSize:a.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${_.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${_.focusVisible} .${_.iconActive}`]:{outline:"1px solid #999"},[`& .${_.visuallyHidden}`]:tn,variants:[{props:{size:"small"},style:{fontSize:a.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:a.typography.pxToRem(30)}},{props:({ownerState:n})=>n.readOnly,style:{pointerEvents:"none"}}]}))),He=pe("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:a},n)=>[n.label,a.emptyValueFocused&&n.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:a})=>a.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),pn=pe("span",{name:"MuiRating",slot:"Icon",overridesResolver:(a,n)=>{const{ownerState:o}=a;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})(Oe(({theme:a})=>({display:"flex",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:n})=>n.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:n})=>n.iconEmpty,style:{color:(a.vars||a).palette.action.disabled}}]}))),mn=pe("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:a=>Ze(a)&&a!=="iconActive",overridesResolver:(a,n)=>{const{iconActive:o}=a;return[n.decimal,o&&n.iconActive]}})({position:"relative",variants:[{props:({iconActive:a})=>a,style:{transform:"scale(1.2)"}}]});function Me(a){const{value:n,...o}=a;return t.jsx("span",{...o})}Me.propTypes={value:e.number.isRequired};function xe(a){const{classes:n,disabled:o,emptyIcon:l,focus:d,getLabelText:f,highlightSelectedOnly:h,hover:i,icon:y,IconContainerComponent:P,isActive:R,itemValue:p,labelProps:w,name:C,onBlur:S,onChange:A,onClick:T,onFocus:I,readOnly:ie,ownerState:q,ratingValue:c,ratingValueRounded:F,slots:me={},slotProps:ge={}}=a,O=h?p===c:p<=c,N=p<=i,le=p<=d,$=p===F,ce=`${C}-${Ce()}`,D={slots:me,slotProps:ge},[z,fe]=re("icon",{elementType:pn,className:de(n.icon,O?n.iconFilled:n.iconEmpty,N&&n.iconHover,le&&n.iconFocus,R&&n.iconActive),externalForwardedProps:D,ownerState:{...q,iconEmpty:!O,iconFilled:O,iconHover:N,iconFocus:le,iconActive:R},additionalProps:{value:p},internalForwardedProps:{as:P}}),[m,E]=re("label",{elementType:He,externalForwardedProps:D,ownerState:{...q,emptyValueFocused:void 0},additionalProps:{style:w?.style,htmlFor:ce}}),V=t.jsx(z,{...fe,children:l&&!O?l:y});return ie?t.jsx("span",{...w,children:V}):t.jsxs(v.Fragment,{children:[t.jsxs(m,{...E,children:[V,t.jsx("span",{className:n.visuallyHidden,children:f(p)})]}),t.jsx("input",{className:n.visuallyHidden,onFocus:I,onBlur:S,onChange:A,onClick:T,disabled:o,value:p,id:ce,type:"radio",name:C,checked:$})]})}xe.propTypes={classes:e.object.isRequired,disabled:e.bool.isRequired,emptyIcon:e.node,focus:e.number.isRequired,getLabelText:e.func.isRequired,highlightSelectedOnly:e.bool.isRequired,hover:e.number.isRequired,icon:e.node,IconContainerComponent:e.elementType.isRequired,isActive:e.bool.isRequired,itemValue:e.number.isRequired,labelProps:e.object,name:e.string,onBlur:e.func.isRequired,onChange:e.func.isRequired,onClick:e.func.isRequired,onFocus:e.func.isRequired,ownerState:e.object.isRequired,ratingValue:e.number,ratingValueRounded:e.number,readOnly:e.bool.isRequired,slotProps:e.object,slots:e.object};const gn=t.jsx(rn,{fontSize:"inherit"}),fn=t.jsx(sn,{fontSize:"inherit"});function hn(a){return`${a||"0"} Star${a!==1?"s":""}`}const Pe=v.forwardRef(function(n,o){const l=We({name:"MuiRating",props:n}),{component:d="span",className:f,defaultValue:h=null,disabled:i=!1,emptyIcon:y=fn,emptyLabelText:P="Empty",getLabelText:R=hn,highlightSelectedOnly:p=!1,icon:w=gn,IconContainerComponent:C=Me,max:S=5,name:A,onChange:T,onChangeActive:I,onMouseLeave:ie,onMouseMove:q,precision:c=1,readOnly:F=!1,size:me="medium",value:ge,slots:O={},slotProps:N={},...le}=l,$=Ce(A),[ce,D]=en({controlled:ge,default:h,name:"Rating"}),z=be(ce,c),fe=Xe(),[{hover:m,focus:E},V]=v.useState({hover:-1,focus:-1});let k=z;m!==-1&&(k=m),E!==-1&&(k=E);const[Ie,he]=v.useState(!1),Se=v.useRef(),ze=nn(Se,o),Ee=r=>{q&&q(r);const s=Se.current,{right:g,left:ue,width:B}=s.getBoundingClientRect();let L;fe?L=(g-r.clientX)/B:L=(r.clientX-ue)/B;let x=be(S*L+c/2,c);x=Ye(x,c,S),V(H=>H.hover===x&&H.focus===x?H:{hover:x,focus:x}),he(!1),I&&m!==x&&I(r,x)},ke=r=>{ie&&ie(r);const s=-1;V({hover:s,focus:s}),I&&m!==s&&I(r,s)},Te=r=>{let s=r.target.value===""?null:parseFloat(r.target.value);m!==-1&&(s=m),D(s),T&&T(r,s)},Be=r=>{r.clientX===0&&r.clientY===0||(V({hover:-1,focus:-1}),D(null),T&&parseFloat(r.target.value)===z&&T(r,null))},Le=r=>{we(r.target)&&he(!0);const s=parseFloat(r.target.value);V(g=>({hover:g.hover,focus:s}))},Ae=r=>{if(m!==-1)return;we(r.target)||he(!1);const s=-1;V(g=>({hover:g.hover,focus:s}))},[qe,Ve]=v.useState(!1),U={...l,component:d,defaultValue:h,disabled:i,emptyIcon:y,emptyLabelText:P,emptyValueFocused:qe,focusVisible:Ie,getLabelText:R,icon:w,IconContainerComponent:C,max:S,precision:c,readOnly:F,size:me},j=un(U),ye={slots:O,slotProps:N},[Ne,$e]=re("root",{ref:ze,className:de(j.root,f),elementType:dn,externalForwardedProps:{...ye,...le,component:d},getSlotProps:r=>({...r,onMouseMove:s=>{Ee(s),r.onMouseMove?.(s)},onMouseLeave:s=>{ke(s),r.onMouseLeave?.(s)}}),ownerState:U,additionalProps:{role:F?"img":null,"aria-label":F?R(k):null}}),[De,Ue]=re("label",{className:de(j.label,j.labelEmptyValue),elementType:He,externalForwardedProps:ye,ownerState:U}),[_e,je]=re("decimal",{className:j.decimal,elementType:mn,externalForwardedProps:ye,ownerState:U});return t.jsxs(Ne,{...$e,children:[Array.from(new Array(S)).map((r,s)=>{const g=s+1,ue={classes:j,disabled:i,emptyIcon:y,focus:E,getLabelText:R,highlightSelectedOnly:p,hover:m,icon:w,IconContainerComponent:C,name:$,onBlur:Ae,onChange:Te,onClick:Be,onFocus:Le,ratingValue:k,ratingValueRounded:z,readOnly:F,ownerState:U,slots:O,slotProps:N},B=g===Math.ceil(k)&&(m!==-1||E!==-1);if(c<1){const L=Array.from(new Array(1/c));return v.createElement(_e,{...je,key:g,className:de(je.className,B&&j.iconActive),iconActive:B},L.map((x,H)=>{const ve=be(g-1+(H+1)*c,c);return t.jsx(xe,{...ue,isActive:!1,itemValue:ve,labelProps:{style:L.length-1===H?{}:{width:ve===k?`${(H+1)*c*100}%`:"0%",overflow:"hidden",position:"absolute"}}},ve)}))}return t.jsx(xe,{...ue,isActive:B,itemValue:g},g)}),!F&&!i&&t.jsxs(De,{...Ue,children:[t.jsx("input",{className:j.visuallyHidden,value:"",id:`${$}-empty`,type:"radio",name:$,checked:z==null,onFocus:()=>Ve(!0),onBlur:()=>Ve(!1),onChange:Te}),t.jsx("span",{className:j.visuallyHidden,children:P})]})]})});Pe.propTypes={children:e.node,classes:e.object,className:e.string,component:e.elementType,defaultValue:e.number,disabled:e.bool,emptyIcon:e.node,emptyLabelText:e.node,getLabelText:e.func,highlightSelectedOnly:e.bool,icon:e.node,IconContainerComponent:e.elementType,max:e.number,name:e.string,onChange:e.func,onChangeActive:e.func,onMouseLeave:e.func,onMouseMove:e.func,precision:an(e.number,a=>a.precision<.1?new Error(["MUI: The prop `precision` should be above 0.1.","A value below this limit has an imperceptible impact."].join(`
`)):null),readOnly:e.bool,size:e.oneOfType([e.oneOf(["small","medium","large"]),e.string]),slotProps:e.shape({decimal:e.oneOfType([e.func,e.object]),icon:e.oneOfType([e.func,e.object]),label:e.oneOfType([e.func,e.object]),root:e.oneOfType([e.func,e.object])}),slots:e.shape({decimal:e.elementType,icon:e.elementType,label:e.elementType,root:e.elementType}),sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),value:e.number};const u=Je.forwardRef(({size:a="medium",max:n=5,precision:o=1,readOnly:l=!1,disabled:d=!1,highlightSelectedOnly:f=!1,emptyIcon:h,icon:i,defaultValue:y,value:P,onChange:R,onChangeActive:p,name:w,id:C,sx:S,...A},T)=>t.jsx(Pe,{ref:T,size:a,max:n,precision:o,readOnly:l,disabled:d,highlightSelectedOnly:f,emptyIcon:h,icon:i,defaultValue:y,value:P,onChange:R,onChangeActive:p,name:w,id:C,sx:S,...A}));u.displayName="Rating";u.__docgenInfo={description:`Rating component

Ratings provide insight regarding others' opinions and experiences,
and can allow the user to submit a rating of their own.

@param props - Rating component props
@returns Rating component`,methods:[],displayName:"Rating",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the rating component
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The number of rating items
@default 5`,defaultValue:{value:"5",computed:!1}},precision:{required:!1,tsType:{name:"number"},description:`The precision of the rating value (e.g., 0.5 for half ratings)
@default 1`,defaultValue:{value:"1",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:`If true, the rating is read-only
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the rating is disabled
@default false`,defaultValue:{value:"false",computed:!1}},emptyIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display when empty"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to display"},defaultValue:{required:!1,tsType:{name:"number"},description:"The default value. Use when the component is not controlled"},value:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"The rating value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: number | null) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"},onChangeActive:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: number) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback function that is fired when the hover state changes"},highlightSelectedOnly:{required:!1,tsType:{name:"boolean"},description:`If true, the component is rendered with a highlight color
@default false`,defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"The name attribute of the radio inputs"},id:{required:!1,tsType:{name:"string"},description:"The id of the input element"}},composes:["Omit"]};const yn=Re(t.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder"),En={title:"Components/Molecules/Rating",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"The size of the rating component"},max:{control:"number",description:"The maximum rating value"},precision:{control:"number",description:"The precision of the rating (e.g., 0.5 for half stars)"},readOnly:{control:"boolean",description:"If true, the rating is read-only"},disabled:{control:"boolean",description:"If true, the rating is disabled"},highlightSelectedOnly:{control:"boolean",description:"If true, only the selected icon is highlighted"},value:{control:"number",description:"The rating value"},defaultValue:{control:"number",description:"The default rating value"}},parameters:{docs:{description:{component:"Ratings provide insight regarding others' opinions and experiences with a product. Users can also rate products they've purchased."}}}},G={args:{defaultValue:2.5,precision:.5}},W={render:()=>t.jsxs(M,{spacing:2,children:[t.jsxs(se,{children:[t.jsx(b,{variant:"caption",component:"div",gutterBottom:!0,children:"Small"}),t.jsx(u,{size:"small",defaultValue:4})]}),t.jsxs(se,{children:[t.jsx(b,{variant:"caption",component:"div",gutterBottom:!0,children:"Medium (default)"}),t.jsx(u,{size:"medium",defaultValue:4})]}),t.jsxs(se,{children:[t.jsx(b,{variant:"caption",component:"div",gutterBottom:!0,children:"Large"}),t.jsx(u,{size:"large",defaultValue:4})]})]})},X={render:()=>t.jsxs(M,{spacing:2,children:[t.jsx(u,{defaultValue:2.5,precision:.5}),t.jsx(b,{variant:"caption",children:"Precision: 0.5 (allows half-star ratings)"})]})},Y={render:function(){const[n,o]=v.useState(3);return t.jsxs(M,{spacing:2,children:[t.jsx(u,{value:n,onChange:(l,d)=>{o(d)}}),t.jsxs(b,{variant:"body2",children:["Current value: ",n!==null?n:"None"]})]})}},J={args:{value:3.5,readOnly:!0,precision:.5}},K={args:{defaultValue:2,disabled:!0}},Q={args:{value:null}},Z={render:()=>t.jsxs(M,{spacing:2,children:[t.jsxs(se,{children:[t.jsx(b,{variant:"caption",component:"div",gutterBottom:!0,children:"3 Stars Max"}),t.jsx(u,{defaultValue:2,max:3})]}),t.jsxs(se,{children:[t.jsx(b,{variant:"caption",component:"div",gutterBottom:!0,children:"10 Stars Max"}),t.jsx(u,{defaultValue:7,max:10})]})]})},ee={args:{defaultValue:3,highlightSelectedOnly:!0}},ne={args:{defaultValue:2,icon:t.jsx(on,{fontSize:"inherit"}),emptyIcon:t.jsx(yn,{fontSize:"inherit"})}},te={render:function(){const[n,o]=v.useState(2),[l,d]=v.useState(-1),f={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function h(i){return`${i} Star${i!==1?"s":""}, ${f[i]}`}return t.jsxs(M,{spacing:2,children:[t.jsx(u,{value:n,precision:.5,onChange:(i,y)=>{o(y)},onChangeActive:(i,y)=>{d(y)},getLabelText:h}),n!==null&&t.jsx(b,{variant:"body2",children:f[l!==-1?l:n]})]})}},ae={render:()=>t.jsxs(M,{spacing:2,children:[t.jsx(b,{variant:"body2",children:"Rating with radio group behavior (can deselect by clicking the same value)"}),t.jsx(u,{name:"radio-group-rating",defaultValue:3})]})},oe={render:()=>t.jsxs(M,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(u,{value:4.5,precision:.5,readOnly:!0}),t.jsx(b,{variant:"body2",color:"text.secondary",children:"4.5 out of 5 (234 reviews)"})]})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    precision: 0.5
  }
}`,...G.parameters?.docs?.source},description:{story:"Default Rating with 5 stars",...G.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Rating Sizes",...W.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Rating defaultValue={2.5} precision={0.5} />
      <Typography variant="caption">Precision: 0.5 (allows half-star ratings)</Typography>
    </Stack>
}`,...X.parameters?.docs?.source},description:{story:"Half Star Precision",...X.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function ControlledRating() {
    const [value, setValue] = useState<number | null>(3);
    return <Stack spacing={2}>
        <Rating value={value} onChange={(_event, newValue) => {
        setValue(newValue);
      }} />
        <Typography variant="body2">Current value: {value !== null ? value : 'None'}</Typography>
      </Stack>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Controlled Rating",...Y.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    readOnly: true,
    precision: 0.5
  }
}`,...J.parameters?.docs?.source},description:{story:"Read-only Rating",...J.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    disabled: true
  }
}`,...K.parameters?.docs?.source},description:{story:"Disabled Rating",...K.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    value: null
  }
}`,...Q.parameters?.docs?.source},description:{story:"No Rating (Empty)",...Q.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Custom Max Value",...Z.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    highlightSelectedOnly: true
  }
}`,...ee.parameters?.docs?.source},description:{story:"Highlight Selected Only",...ee.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    icon: <FavoriteIcon fontSize="inherit" />,
    emptyIcon: <FavoriteBorderIcon fontSize="inherit" />
  }
}`,...ne.parameters?.docs?.source},description:{story:"Custom Icon (Hearts)",...ne.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source},description:{story:"With Hover Feedback",...te.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Typography variant="body2">
        Rating with radio group behavior (can deselect by clicking the same value)
      </Typography>
      <Rating name="radio-group-rating" defaultValue={3} />
    </Stack>
}`,...ae.parameters?.docs?.source},description:{story:"Radio Group Behavior",...ae.parameters?.docs?.description}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} direction="row" alignItems="center">
      <Rating value={4.5} precision={0.5} readOnly />
      <Typography variant="body2" color="text.secondary">
        4.5 out of 5 (234 reviews)
      </Typography>
    </Stack>
}`,...oe.parameters?.docs?.source},description:{story:"Display Only (Reviews)",...oe.parameters?.docs?.description}}};const kn=["Default","Sizes","HalfStar","Controlled","ReadOnly","Disabled","NoRating","CustomMax","HighlightSelectedOnly","CustomIconHearts","WithHoverFeedback","RadioGroup","DisplayOnly"];export{Y as Controlled,ne as CustomIconHearts,Z as CustomMax,G as Default,K as Disabled,oe as DisplayOnly,X as HalfStar,ee as HighlightSelectedOnly,Q as NoRating,ae as RadioGroup,J as ReadOnly,W as Sizes,te as WithHoverFeedback,kn as __namedExportsOrder,En as default};
