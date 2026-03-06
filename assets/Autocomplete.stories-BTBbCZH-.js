import{b as Yt,r as I,g as Qt,a as Xt,j as o,E as Nt,F as Ot,P as n}from"./iframe-m0FcCUbT.js";import{C as Zt}from"./Chip-CszP4ZIS.js";import{g as eo,c as vt,a as to,s as U,m as ve}from"./memoTheme-C11nCEJ1.js";import{A as oo,f as Oe,i as ue,o as Mt,b as It}from"./Select-BLLXmAAY.js";import{C as no}from"./Close-CUuiMhwH.js";import{u as jt}from"./useSlot-BPbjla4P.js";import{u as Ct}from"./useControlled-Cm6cFOSH.js";import{u as ro}from"./usePreviousProps-BhTBul9M.js";import{u as it}from"./useEventCallback-Cbn4Qfni.js";import{s as lo}from"./Portal-BROk4iQM.js";import{P as Ht}from"./Paper-BQ8rpTFt.js";import{P as Ut}from"./Popper-Bro-exFz.js";import{C as ao}from"./Chip-vNwtB8Bl.js";import{I as Gt}from"./IconButton-BtP768Mt.js";import{L as io}from"./ListSubheader-BH-aUMXi.js";import{i as so}from"./integerPropType-DVPNO1YA.js";import{c as Wt}from"./chainPropTypes-CPkqCYVL.js";import{T as po}from"./TextField-CmRpz8i1.js";import{T as g}from"./Typography-CkHBM8H0.js";import{S as H}from"./Stack-DLDfFx0e.js";import{B as x}from"./Box-DSq61m1Q.js";import"./preload-helper-PPVm8Dsz.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C69-cJvf.js";import"./FormLabel-sR584vL_.js";import"./isMuiElement-CG90bCKT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Menu-Dcsn98hI.js";import"./useSlotProps-RklMYb_o.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useForkRef-DeUHlcp-.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-DT4E6Ksq.js";import"./useTheme--qrtAMJV.js";import"./utils-e4gBpPL7.js";import"./ButtonBase-Bd5szlVj.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./index-CMwIBjt_.js";import"./index-DWLUMx4m.js";import"./getReactElementRef-DAzX-jKI.js";import"./mergeSlotProps-Bkt73wcY.js";import"./Modal-DCqzUJ55.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Fade-DvsUOEyO.js";import"./HTMLElementType-Bpqya3bH.js";import"./List-Ba_CvKvH.js";import"./ListContext-CR7FhADn.js";import"./createSvgIcon-DzjuuRaM.js";import"./unsupportedProp-CndhPpMQ.js";import"./CircularProgress-nywBWFjt.js";import"./FormHelperText-C1e4lLm_.js";import"./Typography-BAhyjZNg.js";import"./useThemeProps-OFH6wkZ1.js";function Et(r){return r.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function co(r={}){const{ignoreAccents:a=!0,ignoreCase:O=!0,limit:y,matchFrom:G="any",stringify:F,trim:R=!1}=r;return(V,{inputValue:K,getOptionLabel:j})=>{let P=R?K.trim():K;O&&(P=P.toLowerCase()),a&&(P=Et(P));const Q=P?V.filter(de=>{let $=(F||j)(de);return O&&($=$.toLowerCase()),a&&($=Et($)),G==="start"?$.startsWith(P):$.includes(P)}):V;return typeof y=="number"?Q.slice(0,y):Q}}const uo=co(),Dt=5,mo=r=>r.current!==null&&r.current.parentElement?.contains(document.activeElement),fo=[];function Ft(r,a,O){if(a||r==null)return"";const y=O(r);return typeof y=="string"?y:""}function ho(r){const{unstable_isActiveElementInListbox:a=mo,unstable_classNamePrefix:O="Mui",autoComplete:y=!1,autoHighlight:G=!1,autoSelect:F=!1,blurOnSelect:R=!1,clearOnBlur:V=!r.freeSolo,clearOnEscape:K=!1,componentName:j="useAutocomplete",defaultValue:P=r.multiple?fo:null,disableClearable:Q=!1,disableCloseOnSelect:de=!1,disabled:$,disabledItemsFocusable:me=!1,disableListWrap:fe=!1,filterOptions:he=uo,filterSelectedOptions:xe=!1,freeSolo:Z=!1,getOptionDisabled:M,getOptionKey:_e,getOptionLabel:Ie=t=>t.label??t,groupBy:le,handleHomeEndKeys:st=!r.freeSolo,id:wt,includeInputInList:je=!1,inputValue:Je,isOptionEqualToValue:ee=(t,e)=>t===e,multiple:h=!1,onChange:pt,onClose:ct,onHighlightChange:Ye,onInputChange:te,onOpen:Qe,open:Pt,openOnFocus:At=!1,options:$t,readOnly:ge=!1,selectOnFocus:Ce=!r.freeSolo,value:Xe}=r,W=Yt(wt);let w=Ie;w=t=>{const e=Ie(t);if(typeof e!="string"){{const l=e===void 0?"undefined":`${typeof e} (${e})`;console.error(`MUI: The \`getOptionLabel\` method of ${j} returned ${l} instead of a string for ${JSON.stringify(t)}.`)}return String(e)}return e};const we=I.useRef(!1),Pe=I.useRef(!0),S=I.useRef(null),E=I.useRef(null),[Ae,kt]=I.useState(null),[D,Ze]=I.useState(-1),ut=G?0:-1,k=I.useRef(ut),et=I.useRef(Ft(P??Xe,h,w)).current,[i,dt]=Ct({controlled:Xe,default:P,name:j}),[f,be]=Ct({controlled:Je,default:et,name:j,state:"inputValue"}),[ae,tt]=I.useState(!1),ye=I.useCallback((t,e,l)=>{if(!(h?i.length<e.length:e!==null)&&!V)return;const c=Ft(e,h,w);f!==c&&(be(c),te&&te(t,c,l))},[w,f,h,te,be,V,i]),[oe,$e]=Ct({controlled:Pt,default:!1,name:j,state:"open"}),[Bt,Se]=I.useState(!0),ot=!h&&i!=null&&f===w(i),L=oe&&!ge,T=L?he($t.filter(t=>!(xe&&(h?i:[i]).some(e=>e!==null&&ee(t,e)))),{inputValue:ot&&Bt?"":f,getOptionLabel:w}):[],q=ro({filteredOptions:T,value:i,inputValue:f});I.useEffect(()=>{const t=i!==q.value;ae&&!t||Z&&!t||ye(null,i,"reset")},[i,ye,ae,q.value,Z]);const nt=oe&&T.length>0&&!ge,ie=it(t=>{t===-1?S.current.focus():Ae.querySelector(`[data-tag-index="${t}"]`).focus()});I.useEffect(()=>{h&&D>i.length-1&&(Ze(-1),ie(-1))},[i,h,D,ie]);function mt(t,e){if(!E.current||t<0||t>=T.length)return-1;let l=t;for(;;){const s=E.current.querySelector(`[data-option-index="${l}"]`),c=me?!1:!s||s.disabled||s.getAttribute("aria-disabled")==="true";if(s&&s.hasAttribute("tabindex")&&!c)return l;if(e==="next"?l=(l+1)%T.length:l=(l-1+T.length)%T.length,l===t)return-1}}const X=it(({event:t,index:e,reason:l})=>{if(k.current=e,e===-1?S.current.removeAttribute("aria-activedescendant"):S.current.setAttribute("aria-activedescendant",`${W}-option-${e}`),Ye&&["mouse","keyboard","touch"].includes(l)&&Ye(t,e===-1?null:T[e],l),!E.current)return;const s=E.current.querySelector(`[role="option"].${O}-focused`);s&&(s.classList.remove(`${O}-focused`),s.classList.remove(`${O}-focusVisible`));let c=E.current;if(E.current.getAttribute("role")!=="listbox"&&(c=E.current.parentElement.querySelector('[role="listbox"]')),!c)return;if(e===-1){c.scrollTop=0;return}const u=E.current.querySelector(`[data-option-index="${e}"]`);if(u&&(u.classList.add(`${O}-focused`),l==="keyboard"&&u.classList.add(`${O}-focusVisible`),c.scrollHeight>c.clientHeight&&l!=="mouse"&&l!=="touch")){const v=u,B=c.clientHeight+c.scrollTop,Re=v.offsetTop+v.offsetHeight;Re>B?c.scrollTop=Re-c.clientHeight:v.offsetTop-v.offsetHeight*(le?1.3:0)<c.scrollTop&&(c.scrollTop=v.offsetTop-v.offsetHeight*(le?1.3:0))}}),z=it(({event:t,diff:e,direction:l="next",reason:s})=>{if(!L)return;const u=mt((()=>{const v=T.length-1;if(e==="reset")return ut;if(e==="start")return 0;if(e==="end")return v;const B=k.current+e;return B<0?B===-1&&je?-1:fe&&k.current!==-1||Math.abs(e)>1?0:v:B>v?B===v+1&&je?-1:fe||Math.abs(e)>1?v:0:B})(),l);if(X({index:u,reason:s,event:t}),y&&e!=="reset")if(u===-1)S.current.value=f;else{const v=w(T[u]);S.current.value=v,v.toLowerCase().indexOf(f.toLowerCase())===0&&f.length>0&&S.current.setSelectionRange(f.length,v.length)}}),ft=()=>{const t=(e,l)=>{const s=e?w(e):"",c=l?w(l):"";return s===c};if(k.current!==-1&&q.filteredOptions&&q.filteredOptions.length!==T.length&&q.inputValue===f&&(h?i.length===q.value.length&&q.value.every((e,l)=>w(i[l])===w(e)):t(q.value,i))){const e=q.filteredOptions[k.current];if(e)return T.findIndex(l=>w(l)===w(e))}return-1},ke=I.useCallback(()=>{if(!L)return;const t=ft();if(t!==-1){k.current=t;return}const e=h?i[0]:i;if(T.length===0||e==null){z({diff:"reset"});return}if(E.current){if(e!=null){const l=T[k.current];if(h&&l&&i.findIndex(c=>ee(l,c))!==-1)return;const s=T.findIndex(c=>ee(c,e));s===-1?z({diff:"reset"}):X({index:s});return}if(k.current>=T.length-1){X({index:T.length-1});return}X({index:k.current})}},[T.length,h?!1:i,xe,z,X,L,f,h]),ht=it(t=>{lo(E,t),t&&ke()});I.useEffect(()=>{(!S.current||S.current.nodeName!=="INPUT")&&(S.current&&S.current.nodeName==="TEXTAREA"?console.warn([`A textarea element was provided to ${j} where input was expected.`,"This is not a supported scenario but it may work under certain conditions.","A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).","Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)):console.error([`MUI: Unable to find the input element. It was resolved to ${S.current} while an HTMLInputElement was expected.`,`Instead, ${j} expects an input element.`,"",j==="useAutocomplete"?"Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed.":"Make sure you have customized the input component correctly."].join(`
`)))},[j]),I.useEffect(()=>{ke()},[ke]);const N=t=>{oe||($e(!0),Se(!0),Qe&&Qe(t))},se=(t,e)=>{oe&&($e(!1),ct&&ct(t,e))},ne=(t,e,l,s)=>{if(h){if(i.length===e.length&&i.every((c,u)=>c===e[u]))return}else if(i===e)return;pt&&pt(t,e,l,s),dt(e)},Te=I.useRef(!1),_=(t,e,l="selectOption",s="options")=>{let c=l,u=e;if(h){u=Array.isArray(i)?i.slice():[];{const B=u.filter(Re=>ee(e,Re));B.length>1&&console.error([`MUI: The \`isOptionEqualToValue\` method of ${j} does not handle the arguments correctly.`,`The component expects a single value to match a given option but found ${B.length} matches.`].join(`
`))}const v=u.findIndex(B=>ee(e,B));v===-1?u.push(e):s!=="freeSolo"&&(u.splice(v,1),c="removeOption")}ye(t,u,c),ne(t,u,c,{option:e}),!de&&(!t||!t.ctrlKey&&!t.metaKey)&&se(t,c),(R===!0||R==="touch"&&Te.current||R==="mouse"&&!Te.current)&&S.current.blur()};function rt(t,e){if(t===-1)return-1;let l=t;for(;;){if(e==="next"&&l===i.length||e==="previous"&&l===-1)return-1;const s=Ae.querySelector(`[data-tag-index="${l}"]`);if(!s||!s.hasAttribute("tabindex")||s.disabled||s.getAttribute("aria-disabled")==="true")l+=e==="next"?1:-1;else return l}}const lt=(t,e)=>{if(!h)return;f===""&&se(t,"toggleInput");let l=D;D===-1?f===""&&e==="previous"&&(l=i.length-1):(l+=e==="next"?1:-1,l<0&&(l=0),l===i.length&&(l=-1)),l=rt(l,e),Ze(l),ie(l)},pe=t=>{we.current=!0,be(""),te&&te(t,"","clear"),ne(t,h?[]:null,"clear")},xt=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(D!==-1&&!["ArrowLeft","ArrowRight"].includes(e.key)&&(Ze(-1),ie(-1)),e.which!==229))switch(e.key){case"Home":L&&st&&(e.preventDefault(),z({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":L&&st&&(e.preventDefault(),z({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),z({diff:-Dt,direction:"previous",reason:"keyboard",event:e}),N(e);break;case"PageDown":e.preventDefault(),z({diff:Dt,direction:"next",reason:"keyboard",event:e}),N(e);break;case"ArrowDown":e.preventDefault(),z({diff:1,direction:"next",reason:"keyboard",event:e}),N(e);break;case"ArrowUp":e.preventDefault(),z({diff:-1,direction:"previous",reason:"keyboard",event:e}),N(e);break;case"ArrowLeft":lt(e,"previous");break;case"ArrowRight":lt(e,"next");break;case"Enter":if(k.current!==-1&&L){const l=T[k.current],s=M?M(l):!1;if(e.preventDefault(),s)return;_(e,l,"selectOption"),y&&S.current.setSelectionRange(S.current.value.length,S.current.value.length)}else Z&&f!==""&&ot===!1&&(h&&e.preventDefault(),_(e,f,"createOption","freeSolo"));break;case"Escape":L?(e.preventDefault(),e.stopPropagation(),se(e,"escape")):K&&(f!==""||h&&i.length>0)&&(e.preventDefault(),e.stopPropagation(),pe(e));break;case"Backspace":if(h&&!ge&&f===""&&i.length>0){const l=D===-1?i.length-1:D,s=i.slice();s.splice(l,1),ne(e,s,"removeOption",{option:i[l]})}break;case"Delete":if(h&&!ge&&f===""&&i.length>0&&D!==-1){const l=D,s=i.slice();s.splice(l,1),ne(e,s,"removeOption",{option:i[l]})}break}},gt=t=>{tt(!0),At&&!we.current&&N(t)},ce=t=>{if(a(E)){S.current.focus();return}tt(!1),Pe.current=!0,we.current=!1,F&&k.current!==-1&&L?_(t,T[k.current],"blur"):F&&Z&&f!==""?_(t,f,"blur","freeSolo"):V&&ye(t,i,"blur"),se(t,"blur")},Be=t=>{const e=t.target.value;f!==e&&(be(e),Se(!1),te&&te(t,e,"input")),e===""?!Q&&!h&&ne(t,null,"clear"):N(t)},Le=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));k.current!==e&&X({event:t,index:e,reason:"mouse"})},bt=t=>{X({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Te.current=!0},yt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));_(t,T[e],"selectOption"),Te.current=!1},St=t=>e=>{const l=i.slice();l.splice(t,1),ne(e,l,"removeOption",{option:i[t]})},Tt=t=>{oe?se(t,"toggleInput"):N(t)},Ve=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==W&&t.preventDefault()},A=t=>{t.currentTarget.contains(t.target)&&(S.current.focus(),Ce&&Pe.current&&S.current.selectionEnd-S.current.selectionStart===0&&S.current.select(),Pe.current=!1)},C=t=>{!$&&(f===""||!oe)&&Tt(t)};let J=Z&&f.length>0;J=J||(h?i.length>0:i!==null);let at=T;if(le){const t=new Map;let e=!1;at=T.reduce((l,s,c)=>{const u=le(s);return l.length>0&&l[l.length-1].group===u?l[l.length-1].options.push(s):(t.get(u)&&!e&&(console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${j} returns duplicated headers.`,"You can solve the issue by sorting the options with the output of `groupBy`."),e=!0),t.set(u,!0),l.push({key:c,index:c,group:u,options:[s]})),l},[])}return $&&ae&&ce(),{getRootProps:(t={})=>({...t,onKeyDown:xt(t),onMouseDown:Ve,onClick:A}),getInputLabelProps:()=>({id:`${W}-label`,htmlFor:W}),getInputProps:()=>({id:W,value:f,onBlur:ce,onFocus:gt,onChange:Be,onMouseDown:C,"aria-activedescendant":L?"":null,"aria-autocomplete":y?"both":"list","aria-controls":nt?`${W}-listbox`:void 0,"aria-expanded":nt,autoComplete:"off",ref:S,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:$}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:pe}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:Tt}),getTagProps:({index:t})=>({key:t,"data-tag-index":t,tabIndex:-1,...!ge&&{onDelete:St(t)}}),getListboxProps:()=>({role:"listbox",id:`${W}-listbox`,"aria-labelledby":`${W}-label`,ref:ht,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const l=(h?i:[i]).some(c=>c!=null&&ee(e,c)),s=M?M(e):!1;return{key:_e?.(e)??w(e),tabIndex:-1,role:"option",id:`${W}-option-${t}`,onMouseMove:Le,onClick:yt,onTouchStart:bt,"data-option-index":t,"aria-disabled":s,"aria-selected":l}},id:W,inputValue:f,value:i,dirty:J,expanded:L&&Ae,popupOpen:L,focused:ae||D!==-1,anchorEl:Ae,setAnchorEl:kt,focusedTag:D,groupedOptions:at}}function xo(r){return Qt("MuiAutocomplete",r)}const p=eo("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var qt,zt;const go=r=>{const{classes:a,disablePortal:O,expanded:y,focused:G,fullWidth:F,hasClearIcon:R,hasPopupIcon:V,inputFocused:K,popupOpen:j,size:P}=r,Q={root:["root",y&&"expanded",G&&"focused",F&&"fullWidth",R&&"hasClearIcon",V&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",K&&"inputFocused"],tag:["tag",`tagSize${Nt(P)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",j&&"popupIndicatorOpen"],popper:["popper",O&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return to(Q,xo,a)},bo=U("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:O}=r,{fullWidth:y,hasClearIcon:G,hasPopupIcon:F,inputFocused:R,size:V}=O;return[{[`& .${p.tag}`]:a.tag},{[`& .${p.tag}`]:a[`tagSize${Nt(V)}`]},{[`& .${p.inputRoot}`]:a.inputRoot},{[`& .${p.input}`]:a.input},{[`& .${p.input}`]:R&&a.inputFocused},a.root,y&&a.fullWidth,F&&a.hasPopupIcon,G&&a.hasClearIcon]}})({[`&.${p.focused} .${p.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${p.clearIndicator}`]:{visibility:"visible"}},[`& .${p.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${p.inputRoot}`]:{[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:30},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:56},[`& .${p.input}`]:{width:0,minWidth:30}},[`& .${It.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${It.root}.${ue.sizeSmall}`]:{[`& .${It.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Mt.root}`]:{padding:9,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${p.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${Mt.root}.${ue.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${p.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Oe.root}`]:{paddingTop:19,paddingLeft:8,[`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]:{paddingRight:39},[`.${p.hasPopupIcon}.${p.hasClearIcon}&`]:{paddingRight:65},[`& .${Oe.input}`]:{padding:"7px 4px"},[`& .${p.endAdornment}`]:{right:9}},[`& .${Oe.root}.${ue.sizeSmall}`]:{paddingBottom:1,[`& .${Oe.input}`]:{padding:"2.5px 4px"}},[`& .${ue.hiddenLabel}`]:{paddingTop:8},[`& .${Oe.root}.${ue.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${p.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Oe.root}.${ue.hiddenLabel}.${ue.sizeSmall}`]:{[`& .${p.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${p.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${p.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${p.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${p.inputRoot}`]:{flexWrap:"wrap"}}}]}),yo=U("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(r,a)=>a.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),So=U(Gt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(r,a)=>a.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),To=U(Gt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:(r,a)=>{const{ownerState:O}=r;return[a.popupIndicator,O.popupOpen&&a.popupIndicatorOpen]}})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),Oo=U(Ut,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(r,a)=>{const{ownerState:O}=r;return[{[`& .${p.option}`]:a.option},a.popper,O.disablePortal&&a.popperDisablePortal]}})(ve(({theme:r})=>({zIndex:(r.vars||r).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]}))),vo=U(Ht,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(r,a)=>a.paper})(ve(({theme:r})=>({...r.typography.body1,overflow:"auto"}))),Io=U("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(r,a)=>a.loading})(ve(({theme:r})=>({color:(r.vars||r).palette.text.secondary,padding:"14px 16px"}))),jo=U("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(r,a)=>a.noOptions})(ve(({theme:r})=>({color:(r.vars||r).palette.text.secondary,padding:"14px 16px"}))),Co=U("ul",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(r,a)=>a.listbox})(ve(({theme:r})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${p.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[r.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${p.focused}`]:{backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(r.vars||r).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${p.focusVisible}`]:{backgroundColor:(r.vars||r).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / ${r.vars.palette.action.selectedOpacity})`:Ot(r.palette.primary.main,r.palette.action.selectedOpacity),[`&.${p.focused}`]:{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / calc(${r.vars.palette.action.selectedOpacity} + ${r.vars.palette.action.hoverOpacity}))`:Ot(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(r.vars||r).palette.action.selected}},[`&.${p.focusVisible}`]:{backgroundColor:r.vars?`rgba(${r.vars.palette.primary.mainChannel} / calc(${r.vars.palette.action.selectedOpacity} + ${r.vars.palette.action.focusOpacity}))`:Ot(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)}}}}))),wo=U(io,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(r,a)=>a.groupLabel})(ve(({theme:r})=>({backgroundColor:(r.vars||r).palette.background.paper,top:-8}))),Po=U("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(r,a)=>a.groupUl})({padding:0,[`& .${p.option}`]:{paddingLeft:24}}),Kt=I.forwardRef(function(a,O){const y=Xt({props:a,name:"MuiAutocomplete"}),{autoComplete:G=!1,autoHighlight:F=!1,autoSelect:R=!1,blurOnSelect:V=!1,ChipProps:K,className:j,clearIcon:P=qt||(qt=o.jsx(no,{fontSize:"small"})),clearOnBlur:Q=!y.freeSolo,clearOnEscape:de=!1,clearText:$="Clear",closeText:me="Close",componentsProps:fe,defaultValue:he=y.multiple?[]:null,disableClearable:xe=!1,disableCloseOnSelect:Z=!1,disabled:M=!1,disabledItemsFocusable:_e=!1,disableListWrap:Ie=!1,disablePortal:le=!1,filterOptions:st,filterSelectedOptions:wt=!1,forcePopupIcon:je="auto",freeSolo:Je=!1,fullWidth:ee=!1,getLimitTagsText:h=d=>`+${d}`,getOptionDisabled:pt,getOptionKey:ct,getOptionLabel:Ye,isOptionEqualToValue:te,groupBy:Qe,handleHomeEndKeys:Pt=!y.freeSolo,id:At,includeInputInList:$t=!1,inputValue:ge,limitTags:Ce=-1,ListboxComponent:Xe,ListboxProps:W,loading:w=!1,loadingText:we="Loading…",multiple:Pe=!1,noOptionsText:S="No options",onChange:E,onClose:Ae,onHighlightChange:kt,onInputChange:D,onOpen:Ze,open:ut,openOnFocus:k=!1,openText:et="Open",options:i,PaperComponent:dt,PopperComponent:f,popupIcon:be=zt||(zt=o.jsx(oo,{})),readOnly:ae=!1,renderGroup:tt,renderInput:ye,renderOption:oe,renderTags:$e,selectOnFocus:Bt=!y.freeSolo,size:Se="medium",slots:ot={},slotProps:L={},value:T,...q}=y,{getRootProps:nt,getInputProps:ie,getInputLabelProps:mt,getPopupIndicatorProps:X,getClearProps:z,getTagProps:ft,getListboxProps:ke,getOptionProps:ht,value:N,dirty:se,expanded:ne,id:Te,popupOpen:_,focused:rt,focusedTag:lt,anchorEl:pe,setAnchorEl:xt,inputValue:gt,groupedOptions:ce}=ho({...y,componentName:"Autocomplete"}),Be=!xe&&!M&&se&&!ae,Le=(!Je||je===!0)&&je!==!1,{onMouseDown:bt}=ie(),{ref:yt,...St}=ke(),Ve=Ye||(d=>d.label??d),A={...y,disablePortal:le,expanded:ne,focused:rt,fullWidth:ee,getOptionLabel:Ve,hasClearIcon:Be,hasPopupIcon:Le,inputFocused:lt===-1,popupOpen:_,size:Se},C=go(A),J={slots:{paper:dt,popper:f,...ot},slotProps:{chip:K,listbox:W,...fe,...L}},[at,t]=jt("listbox",{elementType:Co,externalForwardedProps:J,ownerState:A,className:C.listbox,additionalProps:St,ref:yt}),[e,l]=jt("paper",{elementType:Ht,externalForwardedProps:J,ownerState:A,className:C.paper}),[s,c]=jt("popper",{elementType:Ut,externalForwardedProps:J,ownerState:A,className:C.popper,additionalProps:{disablePortal:le,style:{width:pe?pe.clientWidth:null},role:"presentation",anchorEl:pe,open:_}});let u;if(Pe&&N.length>0){const d=Y=>({className:C.tag,disabled:M,...ft(Y)});$e?u=$e(N,d,A):u=N.map((Y,re)=>{const{key:Me,...Jt}=d({index:re});return o.jsx(ao,{label:Ve(Y),size:Se,...Jt,...J.slotProps.chip},Me)})}if(Ce>-1&&Array.isArray(u)){const d=u.length-Ce;!rt&&d>0&&(u=u.splice(0,Ce),u.push(o.jsx("span",{className:C.tag,children:h(d)},u.length)))}const B=tt||(d=>o.jsxs("li",{children:[o.jsx(wo,{className:C.groupLabel,ownerState:A,component:"div",children:d.group}),o.jsx(Po,{className:C.groupUl,ownerState:A,children:d.children})]},d.key)),_t=oe||((d,Y)=>{const{key:re,...Me}=d;return o.jsx("li",{...Me,children:Ve(Y)},re)}),Lt=(d,Y)=>{const re=ht({option:d,index:Y});return _t({...re,className:C.option},d,{selected:re["aria-selected"],index:Y,inputValue:gt},A)},Vt=J.slotProps.clearIndicator,Rt=J.slotProps.popupIndicator;return o.jsxs(I.Fragment,{children:[o.jsx(bo,{ref:O,className:vt(C.root,j),ownerState:A,...nt(q),children:ye({id:Te,disabled:M,fullWidth:!0,size:Se==="small"?"small":void 0,InputLabelProps:mt(),InputProps:{ref:xt,className:C.inputRoot,startAdornment:u,onMouseDown:d=>{d.target===d.currentTarget&&bt(d)},...(Be||Le)&&{endAdornment:o.jsxs(yo,{className:C.endAdornment,ownerState:A,children:[Be?o.jsx(So,{...z(),"aria-label":$,title:$,ownerState:A,...Vt,className:vt(C.clearIndicator,Vt?.className),children:P}):null,Le?o.jsx(To,{...X(),disabled:M,"aria-label":_?me:et,title:_?me:et,ownerState:A,...Rt,className:vt(C.popupIndicator,Rt?.className),children:be}):null]})}},inputProps:{className:C.input,disabled:M,readOnly:ae,...ie()}})}),pe?o.jsx(Oo,{as:s,...c,children:o.jsxs(vo,{as:e,...l,children:[w&&ce.length===0?o.jsx(Io,{className:C.loading,ownerState:A,children:we}):null,ce.length===0&&!Je&&!w?o.jsx(jo,{className:C.noOptions,ownerState:A,role:"presentation",onMouseDown:d=>{d.preventDefault()},children:S}):null,ce.length>0?o.jsx(at,{as:Xe,...t,children:ce.map((d,Y)=>Qe?B({key:d.key,group:d.group,children:d.options.map((re,Me)=>Lt(re,d.index+Me))}):Lt(d,Y))}):null]})}):null]})});Kt.propTypes={autoComplete:n.bool,autoHighlight:n.bool,autoSelect:n.bool,blurOnSelect:n.oneOfType([n.oneOf(["mouse","touch"]),n.bool]),ChipProps:n.object,classes:n.object,className:n.string,clearIcon:n.node,clearOnBlur:n.bool,clearOnEscape:n.bool,clearText:n.string,closeText:n.string,componentsProps:n.shape({clearIndicator:n.object,paper:n.object,popper:n.object,popupIndicator:n.object}),defaultValue:Wt(n.any,r=>r.multiple&&r.defaultValue!==void 0&&!Array.isArray(r.defaultValue)?new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.",`However, ${r.defaultValue} was provided.`].join(`
`)):null),disableClearable:n.bool,disableCloseOnSelect:n.bool,disabled:n.bool,disabledItemsFocusable:n.bool,disableListWrap:n.bool,disablePortal:n.bool,filterOptions:n.func,filterSelectedOptions:n.bool,forcePopupIcon:n.oneOfType([n.oneOf(["auto"]),n.bool]),freeSolo:n.bool,fullWidth:n.bool,getLimitTagsText:n.func,getOptionDisabled:n.func,getOptionKey:n.func,getOptionLabel:n.func,groupBy:n.func,handleHomeEndKeys:n.bool,id:n.string,includeInputInList:n.bool,inputValue:n.string,isOptionEqualToValue:n.func,limitTags:so,ListboxComponent:n.elementType,ListboxProps:n.object,loading:n.bool,loadingText:n.node,multiple:n.bool,noOptionsText:n.node,onChange:n.func,onClose:n.func,onHighlightChange:n.func,onInputChange:n.func,onKeyDown:n.func,onOpen:n.func,open:n.bool,openOnFocus:n.bool,openText:n.string,options:n.array.isRequired,PaperComponent:n.elementType,PopperComponent:n.elementType,popupIcon:n.node,readOnly:n.bool,renderGroup:n.func,renderInput:n.func.isRequired,renderOption:n.func,renderTags:n.func,selectOnFocus:n.bool,size:n.oneOfType([n.oneOf(["small","medium"]),n.string]),slotProps:n.shape({chip:n.oneOfType([n.func,n.object]),clearIndicator:n.oneOfType([n.func,n.object]),listbox:n.oneOfType([n.func,n.object]),paper:n.oneOfType([n.func,n.object]),popper:n.oneOfType([n.func,n.object]),popupIndicator:n.oneOfType([n.func,n.object])}),slots:n.shape({listbox:n.elementType,paper:n.elementType,popper:n.elementType}),sx:n.oneOfType([n.arrayOf(n.oneOfType([n.func,n.object,n.bool])),n.func,n.object]),value:Wt(n.any,r=>r.multiple&&r.value!==void 0&&!Array.isArray(r.value)?new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.",`However, ${r.value} was provided.`].join(`
`)):null)};const m=r=>{const{options:a,label:O,placeholder:y="Select option",error:G=!1,helperText:F,required:R=!1,disabled:V=!1,readOnly:K=!1,size:j="medium",multiple:P=!1,disableClearable:Q=!1,freeSolo:de=!1,fullWidth:$=!1,sx:me,...fe}=r;return o.jsx(Kt,{...fe,options:a,multiple:P,disableClearable:Q,freeSolo:de,disabled:V,readOnly:K,fullWidth:$,size:j,renderInput:he=>o.jsx(po,{...he,label:O,placeholder:y,error:G,helperText:F,required:R,variant:"outlined"}),renderTags:(he,xe)=>he.map((Z,M)=>{const{key:_e,...Ie}=xe({index:M});return o.jsx(Zt,{label:String(Z),size:"small",...Ie},_e)}),sx:{...me}})};m.displayName="Autocomplete";m.__docgenInfo={description:`Autocomplete component

The autocomplete is a normal text input enhanced by a panel of suggested options.
Supports both single and multiple selection modes.

@param props - Autocomplete component props
@returns Autocomplete component`,methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Array of options to display in the dropdown"},label:{required:!1,tsType:{name:"string"},description:"Label for the input field"},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text when no value is selected
@default "Select option"`},error:{required:!1,tsType:{name:"boolean"},description:"If `true`, the component is in an error state\n@default false"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the input"},required:{required:!1,tsType:{name:"boolean"},description:"If `true`, the component is required\n@default false"},disabled:{required:!1,tsType:{name:"boolean"},description:"If `true`, the autocomplete is disabled\n@default false"},readOnly:{required:!1,tsType:{name:"boolean"},description:"If `true`, the component is read-only\n@default false"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the component
@default 'medium'`},multiple:{required:!1,tsType:{name:"Multiple"},description:"If `true`, the user can select multiple values\n@default false"},disableClearable:{required:!1,tsType:{name:"DisableClearable"},description:"If `true`, the clear button is hidden\n@default false"},freeSolo:{required:!1,tsType:{name:"FreeSolo"},description:"If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options\n@default false"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If `true`, the input will take up the full width of its container\n@default false"}},composes:["Omit"]};const b=["Option 1","Option 2","Option 3","Option 4","Option 5"],Bn={title:"Molecules/Autocomplete",component:m,tags:["autodocs"],argTypes:{options:{control:"object",description:"Array of options to display"},label:{control:"text",description:"Label for the input field"},placeholder:{control:"text",description:"Placeholder text"},size:{control:"select",options:["small","medium"],description:"The size of the component"},multiple:{control:"boolean",description:"If true, user can select multiple values"},disabled:{control:"boolean",description:"If true, the component is disabled"},error:{control:"boolean",description:"If true, the component is in error state"},required:{control:"boolean",description:"If true, the component is required"},fullWidth:{control:"boolean",description:"If true, takes full width of container"}},args:{options:b,label:"Select option",placeholder:"Select option",size:"medium",multiple:!1,disabled:!1,error:!1,required:!1,fullWidth:!1}},We={args:{}},Ee={render:()=>o.jsxs(H,{spacing:3,children:[o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Single Value - Closed"}),o.jsx(m,{options:b,label:"Option",placeholder:"Select option",sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Single Value - With Default Value"}),o.jsx(m,{options:b,label:"Option",defaultValue:"Option 1",sx:{width:300}})]})]})},De={render:()=>o.jsxs(H,{spacing:3,children:[o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Multiple Values - Empty"}),o.jsx(m,{multiple:!0,options:b,label:"Options",placeholder:"Select options",sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Multiple Values - With Chips"}),o.jsx(m,{multiple:!0,options:b,label:"Options",placeholder:"Select options",defaultValue:["Option 1","Option 2"],sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Multiple Values - Many Chips"}),o.jsx(m,{multiple:!0,options:b,label:"Options",placeholder:"Select options",defaultValue:["Option 1","Option 2","Option 3","Option 4"],sx:{width:300}})]})]})},Fe={render:()=>o.jsxs(H,{spacing:3,children:[o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Medium Size (default)"}),o.jsx(m,{options:b,label:"Select option",size:"medium",sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Small Size"}),o.jsx(m,{options:b,label:"Select option",size:"small",sx:{width:300}})]})]})},qe={render:()=>o.jsxs(H,{spacing:3,children:[o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Enabled (default)"}),o.jsx(m,{options:b,label:"Select option",sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"With Value"}),o.jsx(m,{options:b,label:"Select option",defaultValue:"Option 1",sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Disabled"}),o.jsx(m,{options:b,label:"Select option",defaultValue:"Option 1",disabled:!0,sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Read-only"}),o.jsx(m,{options:b,label:"Select option",defaultValue:"Option 1",readOnly:!0,sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Error"}),o.jsx(m,{options:b,label:"Select option",error:!0,helperText:"This field is required",sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Required"}),o.jsx(m,{options:b,label:"Select option",required:!0,sx:{width:300}})]})]})},ze={render:()=>o.jsxs(H,{spacing:3,children:[o.jsx(m,{options:b,label:"Select option",helperText:"Choose your preferred option",sx:{width:300}}),o.jsx(m,{options:b,label:"Select option",error:!0,helperText:"This field is required",sx:{width:300}})]})},Ne={render:()=>o.jsxs(H,{spacing:3,children:[o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"With Clear Button (default)"}),o.jsx(m,{options:b,label:"Select option",defaultValue:"Option 1",sx:{width:300}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Without Clear Button"}),o.jsx(m,{options:b,label:"Select option",defaultValue:"Option 1",disableClearable:!0,sx:{width:300}})]})]})},He={render:()=>o.jsx(H,{spacing:3,children:o.jsxs(x,{children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Free Solo - Type custom value"}),o.jsx(m,{options:b,label:"Enter or select option",freeSolo:!0,sx:{width:300}})]})})},Ue={render:()=>o.jsxs(x,{sx:{width:"100%"},children:[o.jsx(g,{variant:"body2",sx:{mb:1},children:"Full Width"}),o.jsx(m,{options:b,label:"Select option",fullWidth:!0})]})},Ge={render:()=>o.jsx(x,{sx:{p:4},children:o.jsxs(H,{spacing:4,children:[o.jsxs(x,{children:[o.jsx(g,{variant:"h6",sx:{mb:2},children:"Country Selector"}),o.jsx(m,{options:["United States","United Kingdom","Canada","Australia","Germany","France","Spain","Italy"],label:"Country",placeholder:"Select your country",sx:{maxWidth:400}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"h6",sx:{mb:2},children:"Tags/Categories (Multiple Selection)"}),o.jsx(m,{multiple:!0,options:["React","TypeScript","JavaScript","Node.js","Python","CSS","HTML","GraphQL"],label:"Skills",placeholder:"Select your skills",defaultValue:["React","TypeScript"],sx:{maxWidth:600}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"h6",sx:{mb:2},children:"Search with Free Solo"}),o.jsx(m,{freeSolo:!0,options:["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"],label:"Search fruits",placeholder:"Type or select a fruit",helperText:"You can type a custom value or select from the list",sx:{maxWidth:400}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"h6",sx:{mb:2},children:"Required Field with Error"}),o.jsx(m,{options:["Option 1","Option 2","Option 3"],label:"Required field",placeholder:"Please select an option",required:!0,error:!0,helperText:"This field is required",sx:{maxWidth:400}})]}),o.jsxs(x,{children:[o.jsx(g,{variant:"h6",sx:{mb:2},children:"Email Recipients (Multiple, Small)"}),o.jsx(m,{multiple:!0,size:"small",options:["john@example.com","jane@example.com","bob@example.com","alice@example.com"],label:"To",placeholder:"Add recipients",freeSolo:!0,sx:{maxWidth:600}})]})]})}),parameters:{layout:"fullscreen"}},Ke={render:()=>o.jsxs(x,{sx:{p:4},children:[o.jsx(g,{variant:"h6",sx:{mb:3},children:"Single vs Multiple Selection"}),o.jsxs(H,{direction:"row",spacing:4,flexWrap:"wrap",children:[o.jsxs(x,{sx:{flex:"1 1 300px",minWidth:300},children:[o.jsx(g,{variant:"subtitle2",sx:{mb:2},children:"Single Selection"}),o.jsxs(H,{spacing:2,children:[o.jsx(m,{options:b,label:"Option",placeholder:"Select one"}),o.jsx(m,{options:b,label:"Option",placeholder:"Select one",defaultValue:"Option 1"})]})]}),o.jsxs(x,{sx:{flex:"1 1 300px",minWidth:300},children:[o.jsx(g,{variant:"subtitle2",sx:{mb:2},children:"Multiple Selection"}),o.jsxs(H,{spacing:2,children:[o.jsx(m,{multiple:!0,options:b,label:"Options",placeholder:"Select multiple"}),o.jsx(m,{multiple:!0,options:b,label:"Options",placeholder:"Select multiple",defaultValue:["Option 1","Option 2"]})]})]})]})]}),parameters:{layout:"fullscreen"}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...We.parameters?.docs?.source},description:{story:"Default autocomplete with single selection",...We.parameters?.docs?.description}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
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
}`,...Ee.parameters?.docs?.source},description:{story:"Single value selection modes",...Ee.parameters?.docs?.description}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
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
}`,...De.parameters?.docs?.source},description:{story:"Multiple value selection with chips",...De.parameters?.docs?.description}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`{
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
}`,...Fe.parameters?.docs?.source},description:{story:"Different sizes",...Fe.parameters?.docs?.description}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
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
}`,...qe.parameters?.docs?.source},description:{story:"States and variations",...qe.parameters?.docs?.description}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3}>
      <Autocomplete options={options} label="Select option" helperText="Choose your preferred option" sx={{
      width: 300
    }} />
      <Autocomplete options={options} label="Select option" error helperText="This field is required" sx={{
      width: 300
    }} />
    </Stack>
}`,...ze.parameters?.docs?.source},description:{story:"With helper text",...ze.parameters?.docs?.description}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
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
}`,...Ne.parameters?.docs?.source},description:{story:"Clearable options",...Ne.parameters?.docs?.description}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
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
}`,...He.parameters?.docs?.source},description:{story:"Free solo mode (allows custom input)",...He.parameters?.docs?.description}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`{
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
}`,...Ue.parameters?.docs?.source},description:{story:"Full width autocomplete",...Ue.parameters?.docs?.description}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`{
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
}`,...Ge.parameters?.docs?.source},description:{story:"Real-world examples",...Ge.parameters?.docs?.description}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`{
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
}`,...Ke.parameters?.docs?.source},description:{story:"Comparison showcase",...Ke.parameters?.docs?.description}}};const Ln=["Default","SingleValue","MultipleValues","Sizes","States","WithHelperText","Clearable","FreeSolo","FullWidth","RealWorldExamples","Comparison"];export{Ne as Clearable,Ke as Comparison,We as Default,He as FreeSolo,Ue as FullWidth,De as MultipleValues,Ge as RealWorldExamples,Ee as SingleValue,Fe as Sizes,qe as States,ze as WithHelperText,Ln as __namedExportsOrder,Bn as default};
