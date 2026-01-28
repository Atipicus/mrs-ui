import{f as Kt,r as I,u as _t,j as o,c as qt,d as Ot}from"./iframe-DxesKUG5.js";import{C as Jt}from"./Chip-BCs2-ZuZ.js";import{b as Qt,g as Yt,s as H,c as Tt,a as Xt,m as Te}from"./memoTheme-B6Th5GL5.js";import{A as Zt,f as Oe,i as ce,o as Vt,b as vt}from"./Select-CROGGtfS.js";import{C as eo}from"./Close-COmCzIFa.js";import{u as It}from"./useSlot-BNQ-RlnO.js";import{u as Ct}from"./useControlled-74n3lbz6.js";import{u as to}from"./usePreviousProps-O5rKS0uq.js";import{u as lt}from"./useEventCallback-Ctd8iJzz.js";import{s as oo}from"./Portal-DjyyoNyY.js";import{P as zt}from"./Paper-B5PjxauP.js";import{P as Nt}from"./Popper-BaWVi6fF.js";import{C as ro}from"./Chip-DApYe1Kj.js";import{I as Ht}from"./IconButton-CsfrsL54.js";import{L as no}from"./ListSubheader-6D1h9w-8.js";import{T as lo}from"./TextField-B-gnLrg5.js";import{T as x}from"./Typography-JZHisPaC.js";import{S as N}from"./Stack-B9YJO_zS.js";import{B as f}from"./Box-DSvwcJiO.js";import"./preload-helper-PPVm8Dsz.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGRz5sF4.js";import"./FormLabel-CZQ5-iCk.js";import"./isMuiElement-D0L_tVWv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Menu-Dftixyz6.js";import"./useSlotProps-cnyHoBat.js";import"./resolveComponentProps-k1KtcFgI.js";import"./useForkRef-C5YMB9vu.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-wcyDEEKY.js";import"./useTheme-IYqs0tYS.js";import"./utils-BQoIxAYs.js";import"./ButtonBase-Be8Rllp-.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-C4KZ8Es5.js";import"./index-DKvoSd49.js";import"./getReactElementRef-BXhN29jQ.js";import"./mergeSlotProps-CMk3k77_.js";import"./Modal-BwMv3NOR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-BMIW7GC5.js";import"./List-DBGJWNkI.js";import"./ListContext-C4VWsNph.js";import"./createSvgIcon-Bhh-g1_u.js";import"./CircularProgress-CTAsBObl.js";import"./FormHelperText-Bp4w-F5W.js";import"./Typography-UCSWEJhs.js";import"./styled-BrCQhrUM.js";import"./useThemeProps-D7AeT9dZ.js";function Mt(r){return r.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function ao(r={}){const{ignoreAccents:l=!0,ignoreCase:S=!0,limit:b,matchFrom:U="any",stringify:D,trim:B=!1}=r;return(k,{inputValue:G,getOptionLabel:F})=>{let j=B?G.trim():G;S&&(j=j.toLowerCase()),l&&(j=Mt(j));const Q=j?k.filter(ue=>{let A=(D||F)(ue);return S&&(A=A.toLowerCase()),l&&(A=Mt(A)),U==="start"?A.startsWith(j):A.includes(j)}):k;return typeof b=="number"?Q.slice(0,b):Q}}const io=ao(),Wt=5,so=r=>r.current!==null&&r.current.parentElement?.contains(document.activeElement),po=[];function Dt(r,l,S){if(l||r==null)return"";const b=S(r);return typeof b=="string"?b:""}function co(r){const{unstable_isActiveElementInListbox:l=so,unstable_classNamePrefix:S="Mui",autoComplete:b=!1,autoHighlight:U=!1,autoSelect:D=!1,blurOnSelect:B=!1,clearOnBlur:k=!r.freeSolo,clearOnEscape:G=!1,componentName:F="useAutocomplete",defaultValue:j=r.multiple?po:null,disableClearable:Q=!1,disableCloseOnSelect:ue=!1,disabled:A,disabledItemsFocusable:de=!1,disableListWrap:me=!1,filterOptions:he=io,filterSelectedOptions:fe=!1,freeSolo:X=!1,getOptionDisabled:L,getOptionKey:Ge,getOptionLabel:ve=t=>t.label??t,groupBy:re,handleHomeEndKeys:at=!r.freeSolo,id:jt,includeInputInList:Ie=!1,inputValue:Ke,isOptionEqualToValue:ne=(t,e)=>t===e,multiple:h=!1,onChange:it,onClose:st,onHighlightChange:_e,onInputChange:Z,onOpen:Je,open:Pt,openOnFocus:At=!1,options:wt,readOnly:xe=!1,selectOnFocus:Ce=!r.freeSolo,value:Qe}=r,R=Kt(jt);let C=ve;C=t=>{const e=ve(t);return typeof e!="string"?String(e):e};const je=I.useRef(!1),Pe=I.useRef(!0),T=I.useRef(null),V=I.useRef(null),[Ae,$t]=I.useState(null),[M,Ye]=I.useState(-1),pt=U?0:-1,w=I.useRef(pt),Xe=I.useRef(Dt(j??Qe,h,C)).current,[a,ct]=Ct({controlled:Qe,default:j,name:F}),[d,ge]=Ct({controlled:Ke,default:Xe,name:F,state:"inputValue"}),[le,Ze]=I.useState(!1),be=I.useCallback((t,e,n)=>{if(!(h?a.length<e.length:e!==null)&&!k)return;const p=Dt(e,h,C);d!==p&&(ge(p),Z&&Z(t,p,n))},[C,d,h,Z,ge,k,a]),[ee,we]=Ct({controlled:Pt,default:!1,name:F,state:"open"}),[kt,ye]=I.useState(!0),et=!h&&a!=null&&d===C(a),$=ee&&!xe,y=$?he(wt.filter(t=>!(fe&&(h?a:[a]).some(e=>e!==null&&ne(t,e)))),{inputValue:et&&kt?"":d,getOptionLabel:C}):[],E=to({filteredOptions:y,value:a,inputValue:d});I.useEffect(()=>{const t=a!==E.value;le&&!t||X&&!t||be(null,a,"reset")},[a,be,le,E.value,X]);const tt=ee&&y.length>0&&!xe,ae=lt(t=>{t===-1?T.current.focus():Ae.querySelector(`[data-tag-index="${t}"]`).focus()});I.useEffect(()=>{h&&M>a.length-1&&(Ye(-1),ae(-1))},[a,h,M,ae]);function ut(t,e){if(!V.current||t<0||t>=y.length)return-1;let n=t;for(;;){const i=V.current.querySelector(`[data-option-index="${n}"]`),p=de?!1:!i||i.disabled||i.getAttribute("aria-disabled")==="true";if(i&&i.hasAttribute("tabindex")&&!p)return n;if(e==="next"?n=(n+1)%y.length:n=(n-1+y.length)%y.length,n===t)return-1}}const Y=lt(({event:t,index:e,reason:n})=>{if(w.current=e,e===-1?T.current.removeAttribute("aria-activedescendant"):T.current.setAttribute("aria-activedescendant",`${R}-option-${e}`),_e&&["mouse","keyboard","touch"].includes(n)&&_e(t,e===-1?null:y[e],n),!V.current)return;const i=V.current.querySelector(`[role="option"].${S}-focused`);i&&(i.classList.remove(`${S}-focused`),i.classList.remove(`${S}-focusVisible`));let p=V.current;if(V.current.getAttribute("role")!=="listbox"&&(p=V.current.parentElement.querySelector('[role="listbox"]')),!p)return;if(e===-1){p.scrollTop=0;return}const m=V.current.querySelector(`[data-option-index="${e}"]`);if(m&&(m.classList.add(`${S}-focused`),n==="keyboard"&&m.classList.add(`${S}-focusVisible`),p.scrollHeight>p.clientHeight&&n!=="mouse"&&n!=="touch")){const O=m,W=p.clientHeight+p.scrollTop,St=O.offsetTop+O.offsetHeight;St>W?p.scrollTop=St-p.clientHeight:O.offsetTop-O.offsetHeight*(re?1.3:0)<p.scrollTop&&(p.scrollTop=O.offsetTop-O.offsetHeight*(re?1.3:0))}}),q=lt(({event:t,diff:e,direction:n="next",reason:i})=>{if(!$)return;const m=ut((()=>{const O=y.length-1;if(e==="reset")return pt;if(e==="start")return 0;if(e==="end")return O;const W=w.current+e;return W<0?W===-1&&Ie?-1:me&&w.current!==-1||Math.abs(e)>1?0:O:W>O?W===O+1&&Ie?-1:me||Math.abs(e)>1?O:0:W})(),n);if(Y({index:m,reason:i,event:t}),b&&e!=="reset")if(m===-1)T.current.value=d;else{const O=C(y[m]);T.current.value=O,O.toLowerCase().indexOf(d.toLowerCase())===0&&d.length>0&&T.current.setSelectionRange(d.length,O.length)}}),dt=()=>{const t=(e,n)=>{const i=e?C(e):"",p=n?C(n):"";return i===p};if(w.current!==-1&&E.filteredOptions&&E.filteredOptions.length!==y.length&&E.inputValue===d&&(h?a.length===E.value.length&&E.value.every((e,n)=>C(a[n])===C(e)):t(E.value,a))){const e=E.filteredOptions[w.current];if(e)return y.findIndex(n=>C(n)===C(e))}return-1},$e=I.useCallback(()=>{if(!$)return;const t=dt();if(t!==-1){w.current=t;return}const e=h?a[0]:a;if(y.length===0||e==null){q({diff:"reset"});return}if(V.current){if(e!=null){const n=y[w.current];if(h&&n&&a.findIndex(p=>ne(n,p))!==-1)return;const i=y.findIndex(p=>ne(p,e));i===-1?q({diff:"reset"}):Y({index:i});return}if(w.current>=y.length-1){Y({index:y.length-1});return}Y({index:w.current})}},[y.length,h?!1:a,fe,q,Y,$,d,h]),mt=lt(t=>{oo(V,t),t&&$e()});I.useEffect(()=>{$e()},[$e]);const z=t=>{ee||(we(!0),ye(!0),Je&&Je(t))},ie=(t,e)=>{ee&&(we(!1),st&&st(t,e))},te=(t,e,n,i)=>{if(h){if(a.length===e.length&&a.every((p,m)=>p===e[m]))return}else if(a===e)return;it&&it(t,e,n,i),ct(e)},Se=I.useRef(!1),K=(t,e,n="selectOption",i="options")=>{let p=n,m=e;if(h){m=Array.isArray(a)?a.slice():[];const O=m.findIndex(W=>ne(e,W));O===-1?m.push(e):i!=="freeSolo"&&(m.splice(O,1),p="removeOption")}be(t,m,p),te(t,m,p,{option:e}),!ue&&(!t||!t.ctrlKey&&!t.metaKey)&&ie(t,p),(B===!0||B==="touch"&&Se.current||B==="mouse"&&!Se.current)&&T.current.blur()};function ot(t,e){if(t===-1)return-1;let n=t;for(;;){if(e==="next"&&n===a.length||e==="previous"&&n===-1)return-1;const i=Ae.querySelector(`[data-tag-index="${n}"]`);if(!i||!i.hasAttribute("tabindex")||i.disabled||i.getAttribute("aria-disabled")==="true")n+=e==="next"?1:-1;else return n}}const rt=(t,e)=>{if(!h)return;d===""&&ie(t,"toggleInput");let n=M;M===-1?d===""&&e==="previous"&&(n=a.length-1):(n+=e==="next"?1:-1,n<0&&(n=0),n===a.length&&(n=-1)),n=ot(n,e),Ye(n),ae(n)},se=t=>{je.current=!0,ge(""),Z&&Z(t,"","clear"),te(t,h?[]:null,"clear")},ht=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(M!==-1&&!["ArrowLeft","ArrowRight"].includes(e.key)&&(Ye(-1),ae(-1)),e.which!==229))switch(e.key){case"Home":$&&at&&(e.preventDefault(),q({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":$&&at&&(e.preventDefault(),q({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),q({diff:-Wt,direction:"previous",reason:"keyboard",event:e}),z(e);break;case"PageDown":e.preventDefault(),q({diff:Wt,direction:"next",reason:"keyboard",event:e}),z(e);break;case"ArrowDown":e.preventDefault(),q({diff:1,direction:"next",reason:"keyboard",event:e}),z(e);break;case"ArrowUp":e.preventDefault(),q({diff:-1,direction:"previous",reason:"keyboard",event:e}),z(e);break;case"ArrowLeft":rt(e,"previous");break;case"ArrowRight":rt(e,"next");break;case"Enter":if(w.current!==-1&&$){const n=y[w.current],i=L?L(n):!1;if(e.preventDefault(),i)return;K(e,n,"selectOption"),b&&T.current.setSelectionRange(T.current.value.length,T.current.value.length)}else X&&d!==""&&et===!1&&(h&&e.preventDefault(),K(e,d,"createOption","freeSolo"));break;case"Escape":$?(e.preventDefault(),e.stopPropagation(),ie(e,"escape")):G&&(d!==""||h&&a.length>0)&&(e.preventDefault(),e.stopPropagation(),se(e));break;case"Backspace":if(h&&!xe&&d===""&&a.length>0){const n=M===-1?a.length-1:M,i=a.slice();i.splice(n,1),te(e,i,"removeOption",{option:a[n]})}break;case"Delete":if(h&&!xe&&d===""&&a.length>0&&M!==-1){const n=M,i=a.slice();i.splice(n,1),te(e,i,"removeOption",{option:a[n]})}break}},ft=t=>{Ze(!0),At&&!je.current&&z(t)},pe=t=>{if(l(V)){T.current.focus();return}Ze(!1),Pe.current=!0,je.current=!1,D&&w.current!==-1&&$?K(t,y[w.current],"blur"):D&&X&&d!==""?K(t,d,"blur","freeSolo"):k&&be(t,a,"blur"),ie(t,"blur")},ke=t=>{const e=t.target.value;d!==e&&(ge(e),ye(!1),Z&&Z(t,e,"input")),e===""?!Q&&!h&&te(t,null,"clear"):z(t)},Be=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));w.current!==e&&Y({event:t,index:e,reason:"mouse"})},xt=t=>{Y({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Se.current=!0},gt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));K(t,y[e],"selectOption"),Se.current=!1},bt=t=>e=>{const n=a.slice();n.splice(t,1),te(e,n,"removeOption",{option:a[t]})},yt=t=>{ee?ie(t,"toggleInput"):z(t)},Le=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==R&&t.preventDefault()},P=t=>{t.currentTarget.contains(t.target)&&(T.current.focus(),Ce&&Pe.current&&T.current.selectionEnd-T.current.selectionStart===0&&T.current.select(),Pe.current=!1)},v=t=>{!A&&(d===""||!ee)&&yt(t)};let _=X&&d.length>0;_=_||(h?a.length>0:a!==null);let nt=y;return re&&(nt=y.reduce((t,e,n)=>{const i=re(e);return t.length>0&&t[t.length-1].group===i?t[t.length-1].options.push(e):t.push({key:n,index:n,group:i,options:[e]}),t},[])),A&&le&&pe(),{getRootProps:(t={})=>({...t,onKeyDown:ht(t),onMouseDown:Le,onClick:P}),getInputLabelProps:()=>({id:`${R}-label`,htmlFor:R}),getInputProps:()=>({id:R,value:d,onBlur:pe,onFocus:ft,onChange:ke,onMouseDown:v,"aria-activedescendant":$?"":null,"aria-autocomplete":b?"both":"list","aria-controls":tt?`${R}-listbox`:void 0,"aria-expanded":tt,autoComplete:"off",ref:T,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:A}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:se}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:yt}),getTagProps:({index:t})=>({key:t,"data-tag-index":t,tabIndex:-1,...!xe&&{onDelete:bt(t)}}),getListboxProps:()=>({role:"listbox",id:`${R}-listbox`,"aria-labelledby":`${R}-label`,ref:mt,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const n=(h?a:[a]).some(p=>p!=null&&ne(e,p)),i=L?L(e):!1;return{key:Ge?.(e)??C(e),tabIndex:-1,role:"option",id:`${R}-option-${t}`,onMouseMove:Be,onClick:gt,onTouchStart:xt,"data-option-index":t,"aria-disabled":i,"aria-selected":n}},id:R,inputValue:d,value:a,dirty:_,expanded:$&&Ae,popupOpen:$,focused:le||M!==-1,anchorEl:Ae,setAnchorEl:$t,focusedTag:M,groupedOptions:nt}}function uo(r){return Yt("MuiAutocomplete",r)}const s=Qt("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Ft,Et;const mo=r=>{const{classes:l,disablePortal:S,expanded:b,focused:U,fullWidth:D,hasClearIcon:B,hasPopupIcon:k,inputFocused:G,popupOpen:F,size:j}=r,Q={root:["root",b&&"expanded",U&&"focused",D&&"fullWidth",B&&"hasClearIcon",k&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",G&&"inputFocused"],tag:["tag",`tagSize${qt(j)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",F&&"popupIndicatorOpen"],popper:["popper",S&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return Xt(Q,uo,l)},ho=H("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(r,l)=>{const{ownerState:S}=r,{fullWidth:b,hasClearIcon:U,hasPopupIcon:D,inputFocused:B,size:k}=S;return[{[`& .${s.tag}`]:l.tag},{[`& .${s.tag}`]:l[`tagSize${qt(k)}`]},{[`& .${s.inputRoot}`]:l.inputRoot},{[`& .${s.input}`]:l.input},{[`& .${s.input}`]:B&&l.inputFocused},l.root,b&&l.fullWidth,D&&l.hasPopupIcon,U&&l.hasClearIcon]}})({[`&.${s.focused} .${s.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${s.clearIndicator}`]:{visibility:"visible"}},[`& .${s.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${s.inputRoot}`]:{[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:30},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:56},[`& .${s.input}`]:{width:0,minWidth:30}},[`& .${vt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${vt.root}.${ce.sizeSmall}`]:{[`& .${vt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Vt.root}`]:{padding:9,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:39},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:65},[`& .${s.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${Vt.root}.${ce.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${s.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Oe.root}`]:{paddingTop:19,paddingLeft:8,[`.${s.hasPopupIcon}&, .${s.hasClearIcon}&`]:{paddingRight:39},[`.${s.hasPopupIcon}.${s.hasClearIcon}&`]:{paddingRight:65},[`& .${Oe.input}`]:{padding:"7px 4px"},[`& .${s.endAdornment}`]:{right:9}},[`& .${Oe.root}.${ce.sizeSmall}`]:{paddingBottom:1,[`& .${Oe.input}`]:{padding:"2.5px 4px"}},[`& .${ce.hiddenLabel}`]:{paddingTop:8},[`& .${Oe.root}.${ce.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${s.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Oe.root}.${ce.hiddenLabel}.${ce.sizeSmall}`]:{[`& .${s.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${s.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${s.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${s.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${s.inputRoot}`]:{flexWrap:"wrap"}}}]}),fo=H("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(r,l)=>l.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),xo=H(Ht,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(r,l)=>l.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),go=H(Ht,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:(r,l)=>{const{ownerState:S}=r;return[l.popupIndicator,S.popupOpen&&l.popupIndicatorOpen]}})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),bo=H(Nt,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(r,l)=>{const{ownerState:S}=r;return[{[`& .${s.option}`]:l.option},l.popper,S.disablePortal&&l.popperDisablePortal]}})(Te(({theme:r})=>({zIndex:(r.vars||r).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]}))),yo=H(zt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(r,l)=>l.paper})(Te(({theme:r})=>({...r.typography.body1,overflow:"auto"}))),So=H("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(r,l)=>l.loading})(Te(({theme:r})=>({color:(r.vars||r).palette.text.secondary,padding:"14px 16px"}))),Oo=H("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(r,l)=>l.noOptions})(Te(({theme:r})=>({color:(r.vars||r).palette.text.secondary,padding:"14px 16px"}))),To=H("ul",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(r,l)=>l.listbox})(Te(({theme:r})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${s.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[r.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${s.focused}`]:{backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(r.vars||r).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${s.focusVisible}`]:{backgroundColor:(r.vars||r).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / ${r.vars.palette.action.selectedOpacity})`:Ot(r.palette.primary.main,r.palette.action.selectedOpacity),[`&.${s.focused}`]:{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / calc(${r.vars.palette.action.selectedOpacity} + ${r.vars.palette.action.hoverOpacity}))`:Ot(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(r.vars||r).palette.action.selected}},[`&.${s.focusVisible}`]:{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / calc(${r.vars.palette.action.selectedOpacity} + ${r.vars.palette.action.focusOpacity}))`:Ot(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)}}}}))),vo=H(no,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(r,l)=>l.groupLabel})(Te(({theme:r})=>({backgroundColor:(r.vars||r).palette.background.paper,top:-8}))),Io=H("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(r,l)=>l.groupUl})({padding:0,[`& .${s.option}`]:{paddingLeft:24}}),Co=I.forwardRef(function(l,S){const b=_t({props:l,name:"MuiAutocomplete"}),{autoComplete:U=!1,autoHighlight:D=!1,autoSelect:B=!1,blurOnSelect:k=!1,ChipProps:G,className:F,clearIcon:j=Ft||(Ft=o.jsx(eo,{fontSize:"small"})),clearOnBlur:Q=!b.freeSolo,clearOnEscape:ue=!1,clearText:A="Clear",closeText:de="Close",componentsProps:me,defaultValue:he=b.multiple?[]:null,disableClearable:fe=!1,disableCloseOnSelect:X=!1,disabled:L=!1,disabledItemsFocusable:Ge=!1,disableListWrap:ve=!1,disablePortal:re=!1,filterOptions:at,filterSelectedOptions:jt=!1,forcePopupIcon:Ie="auto",freeSolo:Ke=!1,fullWidth:ne=!1,getLimitTagsText:h=c=>`+${c}`,getOptionDisabled:it,getOptionKey:st,getOptionLabel:_e,isOptionEqualToValue:Z,groupBy:Je,handleHomeEndKeys:Pt=!b.freeSolo,id:At,includeInputInList:wt=!1,inputValue:xe,limitTags:Ce=-1,ListboxComponent:Qe,ListboxProps:R,loading:C=!1,loadingText:je="Loading…",multiple:Pe=!1,noOptionsText:T="No options",onChange:V,onClose:Ae,onHighlightChange:$t,onInputChange:M,onOpen:Ye,open:pt,openOnFocus:w=!1,openText:Xe="Open",options:a,PaperComponent:ct,PopperComponent:d,popupIcon:ge=Et||(Et=o.jsx(Zt,{})),readOnly:le=!1,renderGroup:Ze,renderInput:be,renderOption:ee,renderTags:we,selectOnFocus:kt=!b.freeSolo,size:ye="medium",slots:et={},slotProps:$={},value:y,...E}=b,{getRootProps:tt,getInputProps:ae,getInputLabelProps:ut,getPopupIndicatorProps:Y,getClearProps:q,getTagProps:dt,getListboxProps:$e,getOptionProps:mt,value:z,dirty:ie,expanded:te,id:Se,popupOpen:K,focused:ot,focusedTag:rt,anchorEl:se,setAnchorEl:ht,inputValue:ft,groupedOptions:pe}=co({...b,componentName:"Autocomplete"}),ke=!fe&&!L&&ie&&!le,Be=(!Ke||Ie===!0)&&Ie!==!1,{onMouseDown:xt}=ae(),{ref:gt,...bt}=$e(),Le=_e||(c=>c.label??c),P={...b,disablePortal:re,expanded:te,focused:ot,fullWidth:ne,getOptionLabel:Le,hasClearIcon:ke,hasPopupIcon:Be,inputFocused:rt===-1,popupOpen:K,size:ye},v=mo(P),_={slots:{paper:ct,popper:d,...et},slotProps:{chip:G,listbox:R,...me,...$}},[nt,t]=It("listbox",{elementType:To,externalForwardedProps:_,ownerState:P,className:v.listbox,additionalProps:bt,ref:gt}),[e,n]=It("paper",{elementType:zt,externalForwardedProps:_,ownerState:P,className:v.paper}),[i,p]=It("popper",{elementType:Nt,externalForwardedProps:_,ownerState:P,className:v.popper,additionalProps:{disablePortal:re,style:{width:se?se.clientWidth:null},role:"presentation",anchorEl:se,open:K}});let m;if(Pe&&z.length>0){const c=J=>({className:v.tag,disabled:L,...dt(J)});we?m=we(z,c,P):m=z.map((J,oe)=>{const{key:Re,...Gt}=c({index:oe});return o.jsx(ro,{label:Le(J),size:ye,...Gt,..._.slotProps.chip},Re)})}if(Ce>-1&&Array.isArray(m)){const c=m.length-Ce;!ot&&c>0&&(m=m.splice(0,Ce),m.push(o.jsx("span",{className:v.tag,children:h(c)},m.length)))}const W=Ze||(c=>o.jsxs("li",{children:[o.jsx(vo,{className:v.groupLabel,ownerState:P,component:"div",children:c.group}),o.jsx(Io,{className:v.groupUl,ownerState:P,children:c.children})]},c.key)),Ut=ee||((c,J)=>{const{key:oe,...Re}=c;return o.jsx("li",{...Re,children:Le(J)},oe)}),Bt=(c,J)=>{const oe=mt({option:c,index:J});return Ut({...oe,className:v.option},c,{selected:oe["aria-selected"],index:J,inputValue:ft},P)},Lt=_.slotProps.clearIndicator,Rt=_.slotProps.popupIndicator;return o.jsxs(I.Fragment,{children:[o.jsx(ho,{ref:S,className:Tt(v.root,F),ownerState:P,...tt(E),children:be({id:Se,disabled:L,fullWidth:!0,size:ye==="small"?"small":void 0,InputLabelProps:ut(),InputProps:{ref:ht,className:v.inputRoot,startAdornment:m,onMouseDown:c=>{c.target===c.currentTarget&&xt(c)},...(ke||Be)&&{endAdornment:o.jsxs(fo,{className:v.endAdornment,ownerState:P,children:[ke?o.jsx(xo,{...q(),"aria-label":A,title:A,ownerState:P,...Lt,className:Tt(v.clearIndicator,Lt?.className),children:j}):null,Be?o.jsx(go,{...Y(),disabled:L,"aria-label":K?de:Xe,title:K?de:Xe,ownerState:P,...Rt,className:Tt(v.popupIndicator,Rt?.className),children:ge}):null]})}},inputProps:{className:v.input,disabled:L,readOnly:le,...ae()}})}),se?o.jsx(bo,{as:i,...p,children:o.jsxs(yo,{as:e,...n,children:[C&&pe.length===0?o.jsx(So,{className:v.loading,ownerState:P,children:je}):null,pe.length===0&&!Ke&&!C?o.jsx(Oo,{className:v.noOptions,ownerState:P,role:"presentation",onMouseDown:c=>{c.preventDefault()},children:T}):null,pe.length>0?o.jsx(nt,{as:Qe,...t,children:pe.map((c,J)=>Je?W({key:c.key,group:c.group,children:c.options.map((oe,Re)=>Bt(oe,c.index+Re))}):Bt(c,J))}):null]})}):null]})}),u=r=>{const{options:l,label:S,placeholder:b="Select option",error:U=!1,helperText:D,required:B=!1,disabled:k=!1,readOnly:G=!1,size:F="medium",multiple:j=!1,disableClearable:Q=!1,freeSolo:ue=!1,fullWidth:A=!1,sx:de,...me}=r;return o.jsx(Co,{...me,options:l,multiple:j,disableClearable:Q,freeSolo:ue,disabled:k,readOnly:G,fullWidth:A,size:F,renderInput:he=>o.jsx(lo,{...he,label:S,placeholder:b,error:U,helperText:D,required:B,variant:"outlined"}),renderTags:(he,fe)=>he.map((X,L)=>{const{key:Ge,...ve}=fe({index:L});return o.jsx(Jt,{label:String(X),size:"small",...ve},Ge)}),sx:{...de}})};u.displayName="Autocomplete";u.__docgenInfo={description:`Autocomplete component

The autocomplete is a normal text input enhanced by a panel of suggested options.
Supports both single and multiple selection modes.

@param props - Autocomplete component props
@returns Autocomplete component`,methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Array of options to display in the dropdown"},label:{required:!1,tsType:{name:"string"},description:"Label for the input field"},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text when no value is selected
@default "Select option"`},error:{required:!1,tsType:{name:"boolean"},description:"If `true`, the component is in an error state\n@default false"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the input"},required:{required:!1,tsType:{name:"boolean"},description:"If `true`, the component is required\n@default false"},disabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the autocomplete is disabled\n@default false"},readOnly:{required:!1,tsType:{name:"boolean"},description:"If `true`, the component is read-only\n@default false"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the component
@default 'medium'`},multiple:{required:!1,tsType:{name:"Multiple"},description:"If `true`, the user can select multiple values\n@default false"},disableClearable:{required:!1,tsType:{name:"DisableClearable"},description:"If `true`, the clear button is hidden\n@default false"},freeSolo:{required:!1,tsType:{name:"FreeSolo"},description:"If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options\n@default false"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If `true`, the input will take up the full width of its container\n@default false"}},composes:["Omit"]};const g=["Option 1","Option 2","Option 3","Option 4","Option 5"],Ir={title:"Molecules/Autocomplete",component:u,tags:["autodocs"],argTypes:{options:{control:"object",description:"Array of options to display"},label:{control:"text",description:"Label for the input field"},placeholder:{control:"text",description:"Placeholder text"},size:{control:"select",options:["small","medium"],description:"The size of the component"},multiple:{control:"boolean",description:"If true, user can select multiple values"},disabled:{control:"boolean",description:"If true, the component is disabled"},error:{control:"boolean",description:"If true, the component is in error state"},required:{control:"boolean",description:"If true, the component is required"},fullWidth:{control:"boolean",description:"If true, takes full width of container"}},args:{options:g,label:"Select option",placeholder:"Select option",size:"medium",multiple:!1,disabled:!1,error:!1,required:!1,fullWidth:!1}},Ve={args:{}},Me={render:()=>o.jsxs(N,{spacing:3,children:[o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Single Value - Closed"}),o.jsx(u,{options:g,label:"Option",placeholder:"Select option",sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Single Value - With Default Value"}),o.jsx(u,{options:g,label:"Option",defaultValue:"Option 1",sx:{width:300}})]})]})},We={render:()=>o.jsxs(N,{spacing:3,children:[o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Multiple Values - Empty"}),o.jsx(u,{multiple:!0,options:g,label:"Options",placeholder:"Select options",sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Multiple Values - With Chips"}),o.jsx(u,{multiple:!0,options:g,label:"Options",placeholder:"Select options",defaultValue:["Option 1","Option 2"],sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Multiple Values - Many Chips"}),o.jsx(u,{multiple:!0,options:g,label:"Options",placeholder:"Select options",defaultValue:["Option 1","Option 2","Option 3","Option 4"],sx:{width:300}})]})]})},De={render:()=>o.jsxs(N,{spacing:3,children:[o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Medium Size (default)"}),o.jsx(u,{options:g,label:"Select option",size:"medium",sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Small Size"}),o.jsx(u,{options:g,label:"Select option",size:"small",sx:{width:300}})]})]})},Fe={render:()=>o.jsxs(N,{spacing:3,children:[o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Enabled (default)"}),o.jsx(u,{options:g,label:"Select option",sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"With Value"}),o.jsx(u,{options:g,label:"Select option",defaultValue:"Option 1",sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Disabled"}),o.jsx(u,{options:g,label:"Select option",defaultValue:"Option 1",disabled:!0,sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Read-only"}),o.jsx(u,{options:g,label:"Select option",defaultValue:"Option 1",readOnly:!0,sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Error"}),o.jsx(u,{options:g,label:"Select option",error:!0,helperText:"This field is required",sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Required"}),o.jsx(u,{options:g,label:"Select option",required:!0,sx:{width:300}})]})]})},Ee={render:()=>o.jsxs(N,{spacing:3,children:[o.jsx(u,{options:g,label:"Select option",helperText:"Choose your preferred option",sx:{width:300}}),o.jsx(u,{options:g,label:"Select option",error:!0,helperText:"This field is required",sx:{width:300}})]})},qe={render:()=>o.jsxs(N,{spacing:3,children:[o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"With Clear Button (default)"}),o.jsx(u,{options:g,label:"Select option",defaultValue:"Option 1",sx:{width:300}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Without Clear Button"}),o.jsx(u,{options:g,label:"Select option",defaultValue:"Option 1",disableClearable:!0,sx:{width:300}})]})]})},ze={render:()=>o.jsx(N,{spacing:3,children:o.jsxs(f,{children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Free Solo - Type custom value"}),o.jsx(u,{options:g,label:"Enter or select option",freeSolo:!0,sx:{width:300}})]})})},Ne={render:()=>o.jsxs(f,{sx:{width:"100%"},children:[o.jsx(x,{variant:"body2",sx:{mb:1},children:"Full Width"}),o.jsx(u,{options:g,label:"Select option",fullWidth:!0})]})},He={render:()=>o.jsx(f,{sx:{p:4},children:o.jsxs(N,{spacing:4,children:[o.jsxs(f,{children:[o.jsx(x,{variant:"h6",sx:{mb:2},children:"Country Selector"}),o.jsx(u,{options:["United States","United Kingdom","Canada","Australia","Germany","France","Spain","Italy"],label:"Country",placeholder:"Select your country",sx:{maxWidth:400}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"h6",sx:{mb:2},children:"Tags/Categories (Multiple Selection)"}),o.jsx(u,{multiple:!0,options:["React","TypeScript","JavaScript","Node.js","Python","CSS","HTML","GraphQL"],label:"Skills",placeholder:"Select your skills",defaultValue:["React","TypeScript"],sx:{maxWidth:600}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"h6",sx:{mb:2},children:"Search with Free Solo"}),o.jsx(u,{freeSolo:!0,options:["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"],label:"Search fruits",placeholder:"Type or select a fruit",helperText:"You can type a custom value or select from the list",sx:{maxWidth:400}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"h6",sx:{mb:2},children:"Required Field with Error"}),o.jsx(u,{options:["Option 1","Option 2","Option 3"],label:"Required field",placeholder:"Please select an option",required:!0,error:!0,helperText:"This field is required",sx:{maxWidth:400}})]}),o.jsxs(f,{children:[o.jsx(x,{variant:"h6",sx:{mb:2},children:"Email Recipients (Multiple, Small)"}),o.jsx(u,{multiple:!0,size:"small",options:["john@example.com","jane@example.com","bob@example.com","alice@example.com"],label:"To",placeholder:"Add recipients",freeSolo:!0,sx:{maxWidth:600}})]})]})}),parameters:{layout:"fullscreen"}},Ue={render:()=>o.jsxs(f,{sx:{p:4},children:[o.jsx(x,{variant:"h6",sx:{mb:3},children:"Single vs Multiple Selection"}),o.jsxs(N,{direction:"row",spacing:4,flexWrap:"wrap",children:[o.jsxs(f,{sx:{flex:"1 1 300px",minWidth:300},children:[o.jsx(x,{variant:"subtitle2",sx:{mb:2},children:"Single Selection"}),o.jsxs(N,{spacing:2,children:[o.jsx(u,{options:g,label:"Option",placeholder:"Select one"}),o.jsx(u,{options:g,label:"Option",placeholder:"Select one",defaultValue:"Option 1"})]})]}),o.jsxs(f,{sx:{flex:"1 1 300px",minWidth:300},children:[o.jsx(x,{variant:"subtitle2",sx:{mb:2},children:"Multiple Selection"}),o.jsxs(N,{spacing:2,children:[o.jsx(u,{multiple:!0,options:g,label:"Options",placeholder:"Select multiple"}),o.jsx(u,{multiple:!0,options:g,label:"Options",placeholder:"Select multiple",defaultValue:["Option 1","Option 2"]})]})]})]})]}),parameters:{layout:"fullscreen"}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...Ve.parameters?.docs?.source},description:{story:"Default autocomplete with single selection",...Ve.parameters?.docs?.description}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Single Value - Closed
        </Typography>
        <Autocomplete options={options} label="Option" placeholder="Select option" sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Single Value - With Default Value
        </Typography>
        <Autocomplete options={options} label="Option" defaultValue="Option 1" sx={{
        width: 300
      }} />
      </Box>
    </Stack>
}`,...Me.parameters?.docs?.source},description:{story:"Single value selection modes",...Me.parameters?.docs?.description}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Multiple Values - Empty
        </Typography>
        <Autocomplete multiple options={options} label="Options" placeholder="Select options" sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Multiple Values - With Chips
        </Typography>
        <Autocomplete multiple options={options} label="Options" placeholder="Select options" defaultValue={['Option 1', 'Option 2']} sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Multiple Values - Many Chips
        </Typography>
        <Autocomplete multiple options={options} label="Options" placeholder="Select options" defaultValue={['Option 1', 'Option 2', 'Option 3', 'Option 4']} sx={{
        width: 300
      }} />
      </Box>
    </Stack>
}`,...We.parameters?.docs?.source},description:{story:"Multiple value selection with chips",...We.parameters?.docs?.description}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Medium Size (default)
        </Typography>
        <Autocomplete options={options} label="Select option" size="medium" sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Small Size
        </Typography>
        <Autocomplete options={options} label="Select option" size="small" sx={{
        width: 300
      }} />
      </Box>
    </Stack>
}`,...De.parameters?.docs?.source},description:{story:"Different sizes",...De.parameters?.docs?.description}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Enabled (default)
        </Typography>
        <Autocomplete options={options} label="Select option" sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          With Value
        </Typography>
        <Autocomplete options={options} label="Select option" defaultValue="Option 1" sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Disabled
        </Typography>
        <Autocomplete options={options} label="Select option" defaultValue="Option 1" disabled sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Read-only
        </Typography>
        <Autocomplete options={options} label="Select option" defaultValue="Option 1" readOnly sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Error
        </Typography>
        <Autocomplete options={options} label="Select option" error helperText="This field is required" sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Required
        </Typography>
        <Autocomplete options={options} label="Select option" required sx={{
        width: 300
      }} />
      </Box>
    </Stack>
}`,...Fe.parameters?.docs?.source},description:{story:"States and variations",...Fe.parameters?.docs?.description}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Autocomplete options={options} label="Select option" helperText="Choose your preferred option" sx={{
      width: 300
    }} />
      <Autocomplete options={options} label="Select option" error helperText="This field is required" sx={{
      width: 300
    }} />
    </Stack>
}`,...Ee.parameters?.docs?.source},description:{story:"With helper text",...Ee.parameters?.docs?.description}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          With Clear Button (default)
        </Typography>
        <Autocomplete options={options} label="Select option" defaultValue="Option 1" sx={{
        width: 300
      }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Without Clear Button
        </Typography>
        <Autocomplete options={options} label="Select option" defaultValue="Option 1" disableClearable sx={{
        width: 300
      }} />
      </Box>
    </Stack>
}`,...qe.parameters?.docs?.source},description:{story:"Clearable options",...qe.parameters?.docs?.description}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{
        mb: 1
      }}>
          Free Solo - Type custom value
        </Typography>
        <Autocomplete options={options} label="Enter or select option" freeSolo sx={{
        width: 300
      }} />
      </Box>
    </Stack>
}`,...ze.parameters?.docs?.source},description:{story:"Free solo mode (allows custom input)",...ze.parameters?.docs?.description}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%'
  }}>
      <Typography variant="body2" sx={{
      mb: 1
    }}>
        Full Width
      </Typography>
      <Autocomplete options={options} label="Select option" fullWidth />
    </Box>
}`,...Ne.parameters?.docs?.source},description:{story:"Full width autocomplete",...Ne.parameters?.docs?.description}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{
          mb: 2
        }}>
            Country Selector
          </Typography>
          <Autocomplete options={['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Spain', 'Italy']} label="Country" placeholder="Select your country" sx={{
          maxWidth: 400
        }} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{
          mb: 2
        }}>
            Tags/Categories (Multiple Selection)
          </Typography>
          <Autocomplete multiple options={['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'CSS', 'HTML', 'GraphQL']} label="Skills" placeholder="Select your skills" defaultValue={['React', 'TypeScript']} sx={{
          maxWidth: 600
        }} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{
          mb: 2
        }}>
            Search with Free Solo
          </Typography>
          <Autocomplete freeSolo options={['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']} label="Search fruits" placeholder="Type or select a fruit" helperText="You can type a custom value or select from the list" sx={{
          maxWidth: 400
        }} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{
          mb: 2
        }}>
            Required Field with Error
          </Typography>
          <Autocomplete options={['Option 1', 'Option 2', 'Option 3']} label="Required field" placeholder="Please select an option" required error helperText="This field is required" sx={{
          maxWidth: 400
        }} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{
          mb: 2
        }}>
            Email Recipients (Multiple, Small)
          </Typography>
          <Autocomplete multiple size="small" options={['john@example.com', 'jane@example.com', 'bob@example.com', 'alice@example.com']} label="To" placeholder="Add recipients" freeSolo sx={{
          maxWidth: 600
        }} />
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...He.parameters?.docs?.source},description:{story:"Real-world examples",...He.parameters?.docs?.description}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 4
  }}>
      <Typography variant="h6" sx={{
      mb: 3
    }}>
        Single vs Multiple Selection
      </Typography>
      <Stack direction="row" spacing={4} flexWrap="wrap">
        <Box sx={{
        flex: '1 1 300px',
        minWidth: 300
      }}>
          <Typography variant="subtitle2" sx={{
          mb: 2
        }}>
            Single Selection
          </Typography>
          <Stack spacing={2}>
            <Autocomplete options={options} label="Option" placeholder="Select one" />
            <Autocomplete options={options} label="Option" placeholder="Select one" defaultValue="Option 1" />
          </Stack>
        </Box>

        <Box sx={{
        flex: '1 1 300px',
        minWidth: 300
      }}>
          <Typography variant="subtitle2" sx={{
          mb: 2
        }}>
            Multiple Selection
          </Typography>
          <Stack spacing={2}>
            <Autocomplete multiple options={options} label="Options" placeholder="Select multiple" />
            <Autocomplete multiple options={options} label="Options" placeholder="Select multiple" defaultValue={['Option 1', 'Option 2']} />
          </Stack>
        </Box>
      </Stack>
    </Box>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...Ue.parameters?.docs?.source},description:{story:"Comparison showcase",...Ue.parameters?.docs?.description}}};const Cr=["Default","SingleValue","MultipleValues","Sizes","States","WithHelperText","Clearable","FreeSolo","FullWidth","RealWorldExamples","Comparison"];export{qe as Clearable,Ue as Comparison,Ve as Default,ze as FreeSolo,Ne as FullWidth,We as MultipleValues,He as RealWorldExamples,Me as SingleValue,De as Sizes,Fe as States,Ee as WithHelperText,Cr as __namedExportsOrder,Ir as default};
