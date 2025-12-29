import{r as i,u as Me,j as a,c as at,o as Wt,d as ot,R as nt}from"./iframe-Ll-6DOMq.js";import{b as Ee,g as We,c as F,s as $,a as ze,m as Ae}from"./createSimplePaletteValueFilter-Cr3O56rL.js";import{u as zt}from"./useTheme-DU8NCu1L.js";import{d as rt,o as lt}from"./ownerWindow-BN2rbQ_G.js";import{u as K}from"./useSlot-CKkKY_MB.js";import{u as ye}from"./useSlotProps-BUL_b5z-.js";import{u as Ve}from"./useEventCallback-CNwJKNkp.js";import{c as ge}from"./createSvgIcon-B--y33RA.js";import{B as st}from"./ButtonBase-Dmk_TwK3.js";import{o as At}from"./ownerDocument-DW-IO8s5.js";import{F as it}from"./Favorite-DpHS2HrG.js";import{H as Dt}from"./Home-KYRiUJD-.js";import{S as Ft}from"./ShoppingCart-CunLtgyg.js";import{B as T}from"./Box-CT6B1tpM.js";import{B as Qe}from"./Badge-C42ngwJU.js";import{T as Nt}from"./Typography-BDVHBFsV.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps--b04hUqz.js";import"./useForkRef-CyvFleoK.js";import"./isFocusVisible-B8k4qzLc.js";import"./usePreviousProps-BzIOzawj.js";function kt(e){return We("MuiTab",e)}const j=Ee("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),Lt=e=>{const{classes:t,textColor:o,fullWidth:n,wrapped:c,icon:b,label:m,selected:h,disabled:p}=e,S={root:["root",b&&m&&"labelIcon",`textColor${at(o)}`,n&&"fullWidth",c&&"wrapped",h&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return ze(S,kt,t)},Ot=$(st,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${at(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped,{[`& .${j.iconWrapper}`]:t.iconWrapper},{[`& .${j.icon}`]:t.icon}]}})(Ae(({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="top",style:{[`& > .${j.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="bottom",style:{[`& > .${j.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="start",style:{[`& > .${j.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="end",style:{[`& > .${j.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${j.selected}`]:{opacity:1},[`&.${j.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${j.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${j.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))),$t=i.forwardRef(function(t,o){const n=Me({props:t,name:"MuiTab"}),{className:c,disabled:b=!1,disableFocusRipple:m=!1,fullWidth:h,icon:p,iconPosition:S="top",indicator:w,label:y,onChange:v,onClick:C,onFocus:N,selected:I,selectionFollowsFocus:B,textColor:me="inherit",value:M,wrapped:we=!1,...E}=n,q={...n,disabled:b,disableFocusRipple:m,selected:I,icon:!!p,iconPosition:S,label:!!y,fullWidth:h,textColor:me,wrapped:we},U=Lt(q),Y=p&&y&&i.isValidElement(p)?i.cloneElement(p,{className:F(U.icon,p.props.className)}):p,he=W=>{!I&&v&&v(W,M),C&&C(W)},H=W=>{B&&!I&&v&&v(W,M),N&&N(W)};return a.jsxs(Ot,{focusRipple:!m,className:F(U.root,c),ref:o,role:"tab","aria-selected":I,disabled:b,onClick:he,onFocus:H,ownerState:q,tabIndex:I?0:-1,...E,children:[S==="top"||S==="start"?a.jsxs(i.Fragment,{children:[Y,y]}):a.jsxs(i.Fragment,{children:[y,Y]}),w]})}),qt=ge(a.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Ht=ge(a.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Xt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function Kt(e,t,o,n={},c=()=>{}){const{ease:b=Xt,duration:m=300}=n;let h=null;const p=t[e];let S=!1;const w=()=>{S=!0},y=v=>{if(S){c(new Error("Animation cancelled"));return}h===null&&(h=v);const C=Math.min(1,(v-h)/m);if(t[e]=b(C)*(o-p)+p,C>=1){requestAnimationFrame(()=>{c(null)});return}requestAnimationFrame(y)};return p===o?(c(new Error("Element already at target position")),w):(requestAnimationFrame(y),w)}const Ut={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Yt(e){const{onChange:t,...o}=e,n=i.useRef(),c=i.useRef(null),b=()=>{n.current=c.current.offsetHeight-c.current.clientHeight};return Wt(()=>{const m=rt(()=>{const p=n.current;b(),p!==n.current&&t(n.current)}),h=lt(c.current);return h.addEventListener("resize",m),()=>{m.clear(),h.removeEventListener("resize",m)}},[t]),i.useEffect(()=>{b(),t(n.current)},[t]),a.jsx("div",{style:Ut,...o,ref:c})}function _t(e){return We("MuiTabScrollButton",e)}const Gt=Ee("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Jt=e=>{const{classes:t,orientation:o,disabled:n}=e;return ze({root:["root",o,n&&"disabled"]},_t,t)},Qt=$(st,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${Gt.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),Zt=i.forwardRef(function(t,o){const n=Me({props:t,name:"MuiTabScrollButton"}),{className:c,slots:b={},slotProps:m={},direction:h,orientation:p,disabled:S,...w}=n,y=ot(),v={isRtl:y,...n},C=Jt(v),N=b.StartScrollButtonIcon??qt,I=b.EndScrollButtonIcon??Ht,B=ye({elementType:N,externalSlotProps:m.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),me=ye({elementType:I,externalSlotProps:m.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return a.jsx(Qt,{component:"div",className:F(C.root,c),ref:o,role:null,ownerState:v,tabIndex:null,...w,style:{...w.style,...p==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${y?-90:90}deg)`}},children:h==="left"?a.jsx(N,{...B}):a.jsx(I,{...me})})});function ea(e){return We("MuiTabs",e)}const Re=Ee("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Ze=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,et=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,Se=(e,t,o)=>{let n=!1,c=o(e,t);for(;c;){if(c===e.firstChild){if(n)return;n=!0}const b=c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||b)c=o(e,c);else{c.focus();return}}},ta=e=>{const{vertical:t,fixed:o,hideScrollbar:n,scrollableX:c,scrollableY:b,centered:m,scrollButtonsHideMobile:h,classes:p}=e;return ze({root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",n&&"hideScrollbar",c&&"scrollableX",b&&"scrollableY"],list:["list","flexContainer",t&&"flexContainerVertical",t&&"vertical",m&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",h&&"scrollButtonsHideMobile"],scrollableX:[c&&"scrollableX"],hideScrollbar:[n&&"hideScrollbar"]},ea,p)},aa=$("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${Re.scrollButtons}`]:t.scrollButtons},{[`& .${Re.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})(Ae(({theme:e})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${Re.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}}}]}))),oa=$("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),na=$("div",{name:"MuiTabs",slot:"List",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.list,t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.centered,style:{justifyContent:"center"}}]}),ra=$("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(Ae(({theme:e})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),la=$(Yt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),tt={},sa=i.forwardRef(function(t,o){const n=Me({props:t,name:"MuiTabs"}),c=zt(),b=ot(),{"aria-label":m,"aria-labelledby":h,action:p,centered:S=!1,children:w,className:y,component:v="div",allowScrollButtonsMobile:C=!1,indicatorColor:N="primary",onChange:I,orientation:B="horizontal",ScrollButtonComponent:me,scrollButtons:M="auto",selectionFollowsFocus:we,slots:E={},slotProps:q={},TabIndicatorProps:U={},TabScrollButtonProps:Y={},textColor:he="primary",value:H,variant:W="standard",visibleScrollbar:Ce=!1,...ct}=n,V=W==="scrollable",P=B==="vertical",_=P?"scrollTop":"scrollLeft",fe=P?"top":"left",ve=P?"bottom":"right",je=P?"clientHeight":"clientWidth",G=P?"height":"width",z={...n,component:v,allowScrollButtonsMobile:C,indicatorColor:N,orientation:B,vertical:P,scrollButtons:M,textColor:he,variant:W,visibleScrollbar:Ce,fixed:!V,hideScrollbar:V&&!Ce,scrollableX:V&&!P,scrollableY:V&&P,centered:S&&!V,scrollButtonsHideMobile:!C},D=ta(z),dt=ye({elementType:E.StartScrollButtonIcon,externalSlotProps:q.startScrollButtonIcon,ownerState:z}),ut=ye({elementType:E.EndScrollButtonIcon,externalSlotProps:q.endScrollButtonIcon,ownerState:z}),[De,bt]=i.useState(!1),[k,Fe]=i.useState(tt),[Ne,pt]=i.useState(!1),[ke,mt]=i.useState(!1),[Le,ht]=i.useState(!1),[Oe,ft]=i.useState({overflow:"hidden",scrollbarWidth:0}),$e=new Map,A=i.useRef(null),L=i.useRef(null),X={slots:E,slotProps:{indicator:U,scrollButton:Y,...q}},qe=()=>{const r=A.current;let s;if(r){const d=r.getBoundingClientRect();s={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:r.scrollWidth,top:d.top,bottom:d.bottom,left:d.left,right:d.right}}let u;if(r&&H!==!1){const d=L.current.children;if(d.length>0){const f=d[$e.get(H)];u=f?f.getBoundingClientRect():null}}return{tabsMeta:s,tabMeta:u}},J=Ve(()=>{const{tabsMeta:r,tabMeta:s}=qe();let u=0,d;P?(d="top",s&&r&&(u=s.top-r.top+r.scrollTop)):(d=b?"right":"left",s&&r&&(u=(b?-1:1)*(s[d]-r[d]+r.scrollLeft)));const f={[d]:u,[G]:s?s[G]:0};if(typeof k[d]!="number"||typeof k[G]!="number")Fe(f);else{const R=Math.abs(k[d]-f[d]),O=Math.abs(k[G]-f[G]);(R>=1||O>=1)&&Fe(f)}}),Be=(r,{animation:s=!0}={})=>{s?Kt(_,A.current,r,{duration:c.transitions.duration.standard}):A.current[_]=r},He=r=>{let s=A.current[_];P?s+=r:s+=r*(b?-1:1),Be(s)},Xe=()=>{const r=A.current[je];let s=0;const u=Array.from(L.current.children);for(let d=0;d<u.length;d+=1){const f=u[d];if(s+f[je]>r){d===0&&(s=r);break}s+=f[je]}return s},vt=()=>{He(-1*Xe())},xt=()=>{He(Xe())},[Tt,{onChange:Ke,...St}]=K("scrollbar",{className:F(D.scrollableX,D.hideScrollbar),elementType:la,shouldForwardComponentProp:!0,externalForwardedProps:X,ownerState:z}),yt=i.useCallback(r=>{Ke?.(r),ft({overflow:null,scrollbarWidth:r})},[Ke]),[Ue,Ye]=K("scrollButtons",{className:F(D.scrollButtons,Y.className),elementType:Zt,externalForwardedProps:X,ownerState:z,additionalProps:{orientation:B,slots:{StartScrollButtonIcon:E.startScrollButtonIcon||E.StartScrollButtonIcon,EndScrollButtonIcon:E.endScrollButtonIcon||E.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:dt,endScrollButtonIcon:ut}}}),gt=()=>{const r={};r.scrollbarSizeListener=V?a.jsx(Tt,{...St,onChange:yt}):null;const u=V&&(M==="auto"&&(Ne||ke)||M===!0);return r.scrollButtonStart=u?a.jsx(Ue,{direction:b?"right":"left",onClick:vt,disabled:!Ne,...Ye}):null,r.scrollButtonEnd=u?a.jsx(Ue,{direction:b?"left":"right",onClick:xt,disabled:!ke,...Ye}):null,r},_e=Ve(r=>{const{tabsMeta:s,tabMeta:u}=qe();if(!(!u||!s)){if(u[fe]<s[fe]){const d=s[_]+(u[fe]-s[fe]);Be(d,{animation:r})}else if(u[ve]>s[ve]){const d=s[_]+(u[ve]-s[ve]);Be(d,{animation:r})}}}),xe=Ve(()=>{V&&M!==!1&&ht(!Le)});i.useEffect(()=>{const r=rt(()=>{A.current&&J()});let s;const u=R=>{R.forEach(O=>{O.removedNodes.forEach(Q=>{s?.unobserve(Q)}),O.addedNodes.forEach(Q=>{s?.observe(Q)})}),r(),xe()},d=lt(A.current);d.addEventListener("resize",r);let f;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(r),Array.from(L.current.children).forEach(R=>{s.observe(R)})),typeof MutationObserver<"u"&&(f=new MutationObserver(u),f.observe(L.current,{childList:!0})),()=>{r.clear(),d.removeEventListener("resize",r),f?.disconnect(),s?.disconnect()}},[J,xe]),i.useEffect(()=>{const r=Array.from(L.current.children),s=r.length;if(typeof IntersectionObserver<"u"&&s>0&&V&&M!==!1){const u=r[0],d=r[s-1],f={root:A.current,threshold:.99},R=Ie=>{pt(!Ie[0].isIntersecting)},O=new IntersectionObserver(R,f);O.observe(u);const Q=Ie=>{mt(!Ie[0].isIntersecting)},Je=new IntersectionObserver(Q,f);return Je.observe(d),()=>{O.disconnect(),Je.disconnect()}}},[V,M,Le,w?.length]),i.useEffect(()=>{bt(!0)},[]),i.useEffect(()=>{J()}),i.useEffect(()=>{_e(tt!==k)},[_e,k]),i.useImperativeHandle(p,()=>({updateIndicator:J,updateScrollButtons:xe}),[J,xe]);const[wt,Ct]=K("indicator",{className:F(D.indicator,U.className),elementType:ra,externalForwardedProps:X,ownerState:z,additionalProps:{style:k}}),Ge=a.jsx(wt,{...Ct});let Te=0;const jt=i.Children.map(w,r=>{if(!i.isValidElement(r))return null;const s=r.props.value===void 0?Te:r.props.value;$e.set(s,Te);const u=s===H;return Te+=1,i.cloneElement(r,{fullWidth:W==="fullWidth",indicator:u&&!De&&Ge,selected:u,selectionFollowsFocus:we,onChange:I,textColor:he,value:s,...Te===1&&H===!1&&!r.props.tabIndex?{tabIndex:0}:{}})}),Bt=r=>{if(r.altKey||r.shiftKey||r.ctrlKey||r.metaKey)return;const s=L.current,u=At(s).activeElement;if(u.getAttribute("role")!=="tab")return;let f=B==="horizontal"?"ArrowLeft":"ArrowUp",R=B==="horizontal"?"ArrowRight":"ArrowDown";switch(B==="horizontal"&&b&&(f="ArrowRight",R="ArrowLeft"),r.key){case f:r.preventDefault(),Se(s,u,et);break;case R:r.preventDefault(),Se(s,u,Ze);break;case"Home":r.preventDefault(),Se(s,null,Ze);break;case"End":r.preventDefault(),Se(s,null,et);break}},Pe=gt(),[Pt,It]=K("root",{ref:o,className:F(D.root,y),elementType:aa,externalForwardedProps:{...X,...ct,component:v},ownerState:z}),[Vt,Rt]=K("scroller",{ref:A,className:D.scroller,elementType:oa,externalForwardedProps:X,ownerState:z,additionalProps:{style:{overflow:Oe.overflow,[P?`margin${b?"Left":"Right"}`:"marginBottom"]:Ce?void 0:-Oe.scrollbarWidth}}}),[Mt,Et]=K("list",{ref:L,className:F(D.list,D.flexContainer),elementType:na,externalForwardedProps:X,ownerState:z,getSlotProps:r=>({...r,onKeyDown:s=>{Bt(s),r.onKeyDown?.(s)}})});return a.jsxs(Pt,{...It,children:[Pe.scrollButtonStart,Pe.scrollbarSizeListener,a.jsxs(Vt,{...Rt,children:[a.jsx(Mt,{"aria-label":m,"aria-labelledby":h,"aria-orientation":B==="vertical"?"vertical":null,role:"tablist",...Et,children:jt}),De&&Ge]}),Pe.scrollButtonEnd]})}),x=nt.forwardRef(({value:e,onChange:t,children:o,variant:n="standard",indicatorColor:c="primary",textColor:b="primary",centered:m=!1,scrollButtons:h="auto",allowScrollButtonsMobile:p=!1,orientation:S="horizontal",TabIndicatorProps:w,ScrollButtonComponent:y,...v},C)=>a.jsx(sa,{ref:C,value:e,onChange:t,variant:n,indicatorColor:c,textColor:b,centered:m,scrollButtons:h,allowScrollButtonsMobile:p,orientation:S,TabIndicatorProps:w,ScrollButtonComponent:y,...v,children:o}));x.displayName="Tabs";const l=nt.forwardRef(({label:e,value:t,icon:o,disabled:n=!1,wrapped:c=!1,iconPosition:b="top",...m},h)=>a.jsx($t,{ref:h,label:e,value:t,icon:o,disabled:n,wrapped:c,iconPosition:b,...m}));l.displayName="Tab";x.__docgenInfo={description:"Tabs component for navigation between different views",methods:[],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"union",raw:"number | string | false",elements:[{name:"number"},{name:"string"},{name:"literal",value:"false"}]},description:"The value of the currently selected Tab"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: number | string) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component (typically Tab elements)"},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'scrollable' | 'fullWidth'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'scrollable'"},{name:"literal",value:"'fullWidth'"}]},description:`The variant of the tabs
@default 'standard'`,defaultValue:{value:"'standard'",computed:!1}},indicatorColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The indicator color
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},textColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'inherit'"}]},description:`The text color
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:`If true, the tabs are centered
@default false`,defaultValue:{value:"false",computed:!1}},scrollButtons:{required:!1,tsType:{name:"union",raw:"'auto' | true | false",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:`Determines the alignment of the scroll buttons
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}},allowScrollButtonsMobile:{required:!1,tsType:{name:"boolean"},description:`If true, allows scrolling the tabs with mouse wheel
@default false`,defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The component orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},TabIndicatorProps:{required:!1,tsType:{name:"MuiTabsProps['TabIndicatorProps']",raw:"MuiTabsProps['TabIndicatorProps']"},description:"Props applied to the TabIndicator element"},ScrollButtonComponent:{required:!1,tsType:{name:"MuiTabsProps['ScrollButtonComponent']",raw:"MuiTabsProps['ScrollButtonComponent']"},description:"Props applied to the ScrollButtonComponent element"}},composes:["MuiTabsProps"]};l.__docgenInfo={description:"Tab component for individual tab item",methods:[],displayName:"Tab",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label content"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The value of the tab"},icon:{required:!1,tsType:{name:"union",raw:"React.ReactElement | string",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"string"}]},description:"The icon element"},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the tab is disabled
@default false`,defaultValue:{value:"false",computed:!1}},wrapped:{required:!1,tsType:{name:"boolean"},description:`If true, the tab is wrapped
@default false`,defaultValue:{value:"false",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'start' | 'end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`The icon position
@default 'top'`,defaultValue:{value:"'top'",computed:!1}}},composes:["Omit"]};const pe=ge(a.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone"),ia=ge(a.jsx("path",{d:"M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9m0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22"}),"PersonPin"),Ra={title:"Molecules/Tabs",component:x,parameters:{layout:"centered",docs:{description:{component:"Tabs make it easy to explore and switch between different views. They organize and allow navigation between groups of content that are related and at the same hierarchical level."}}},tags:["autodocs"],argTypes:{value:{control:"number",description:"The value of the currently selected Tab"},variant:{control:"select",options:["standard","scrollable","fullWidth"],description:"The variant of the tabs"},indicatorColor:{control:"select",options:["primary","secondary"],description:"The indicator color"},textColor:{control:"select",options:["primary","secondary","inherit"],description:"The text color"},centered:{control:"boolean",description:"If true, the tabs are centered"},orientation:{control:"select",options:["horizontal","vertical"],description:"The component orientation"}}};function g(e){const{children:t,value:o,index:n,...c}=e;return a.jsx("div",{role:"tabpanel",hidden:o!==n,id:`tabpanel-${n}`,"aria-labelledby":`tab-${n}`,...c,children:o===n&&a.jsx(T,{sx:{p:3},children:a.jsx(Nt,{children:t})})})}const Z={args:{centered:!1,indicatorColor:"primary",textColor:"secondary",variant:"fullWidth",value:4,orientation:"vertical"},render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{width:500},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(l,{label:"Tab 1"}),a.jsx(l,{label:"Tab 2"}),a.jsx(l,{label:"Tab 3"})]}),a.jsx(g,{value:e,index:0,children:"Content for Tab 1"}),a.jsx(g,{value:e,index:1,children:"Content for Tab 2"}),a.jsx(g,{value:e,index:2,children:"Content for Tab 3"})]})}},ee={render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{width:500},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(l,{icon:a.jsx(pe,{}),label:"Calls"}),a.jsx(l,{icon:a.jsx(it,{}),label:"Favorites"}),a.jsx(l,{icon:a.jsx(ia,{}),label:"Contacts"})]}),a.jsx(g,{value:e,index:0,children:"Recent calls"}),a.jsx(g,{value:e,index:1,children:"Favorite contacts"}),a.jsx(g,{value:e,index:2,children:"All contacts"})]})}},te={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(l,{icon:a.jsx(Dt,{}),"aria-label":"home"}),a.jsx(l,{icon:a.jsx(it,{}),"aria-label":"favorites"}),a.jsx(l,{icon:a.jsx(Ft,{}),"aria-label":"cart"})]})})}},ae={render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{width:600},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),variant:"fullWidth",children:[a.jsx(l,{label:"Overview"}),a.jsx(l,{label:"Details"}),a.jsx(l,{label:"Settings"})]}),a.jsx(g,{value:e,index:0,children:"Overview content"}),a.jsx(g,{value:e,index:1,children:"Detailed information"}),a.jsx(g,{value:e,index:2,children:"Settings panel"})]})}},oe={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:600},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),centered:!0,children:[a.jsx(l,{label:"Tab 1"}),a.jsx(l,{label:"Tab 2"}),a.jsx(l,{label:"Tab 3"})]})})}},ne={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),variant:"scrollable",scrollButtons:"auto",children:[a.jsx(l,{label:"Item One"}),a.jsx(l,{label:"Item Two"}),a.jsx(l,{label:"Item Three"}),a.jsx(l,{label:"Item Four"}),a.jsx(l,{label:"Item Five"}),a.jsx(l,{label:"Item Six"}),a.jsx(l,{label:"Item Seven"})]})})}},re={args:{value:1},render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[a.jsx(l,{label:"Tab 1"}),a.jsx(l,{label:"Tab 2"}),a.jsx(l,{label:"Tab 3"}),a.jsx(l,{label:"Tab 4"}),a.jsx(l,{label:"Tab 5"}),a.jsx(l,{label:"Tab 6"})]})})}},le={render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{display:"flex",height:300},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),orientation:"vertical",sx:{borderRight:1,borderColor:"divider"},children:[a.jsx(l,{label:"Profile"}),a.jsx(l,{label:"Security"}),a.jsx(l,{label:"Notifications"}),a.jsx(l,{label:"Billing"})]}),a.jsx(g,{value:e,index:0,children:"Profile settings"}),a.jsx(g,{value:e,index:1,children:"Security settings"}),a.jsx(g,{value:e,index:2,children:"Notification preferences"}),a.jsx(g,{value:e,index:3,children:"Billing information"})]})}},se={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),indicatorColor:"secondary",textColor:"secondary",children:[a.jsx(l,{label:"Active"}),a.jsx(l,{label:"Disabled",disabled:!0}),a.jsx(l,{label:"Active"})]})})}},ie={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(l,{label:"Active"}),a.jsx(l,{label:"Disabled",disabled:!0}),a.jsx(l,{label:"Active"}),a.jsx(l,{label:"Disabled",disabled:!0}),a.jsx(l,{label:"Active"})]})})}},ce={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(l,{label:"Messages",icon:a.jsx(Qe,{badgeContent:4,color:"primary"})}),a.jsx(l,{label:"Notifications",icon:a.jsx(Qe,{badgeContent:12,color:"secondary"})}),a.jsx(l,{label:"Updates"})]})})}},de={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:600},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(l,{icon:a.jsx(pe,{}),label:"Top (default)",iconPosition:"top"}),a.jsx(l,{icon:a.jsx(pe,{}),label:"Bottom",iconPosition:"bottom"}),a.jsx(l,{icon:a.jsx(pe,{}),label:"Start",iconPosition:"start"}),a.jsx(l,{icon:a.jsx(pe,{}),label:"End",iconPosition:"end"})]})})}},ue={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(l,{label:"Short"}),a.jsx(l,{wrapped:!0,label:"This is a very long tab label that wraps"}),a.jsx(l,{label:"Short"})]})})}},be={args:{indicatorColor:"primary",variant:"scrollable"},render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),TabIndicatorProps:{style:{backgroundColor:"#ff6b6b",height:4}},sx:{"& .MuiTab-root":{fontWeight:"bold",fontSize:"1rem"}},children:[a.jsx(l,{label:"Dashboard"}),a.jsx(l,{label:"Analytics"}),a.jsx(l,{label:"Reports"})]})})}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    centered: false,
    indicatorColor: "primary",
    textColor: "secondary",
    variant: "fullWidth",
    value: 4,
    orientation: "vertical"
  },
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Content for Tab 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content for Tab 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content for Tab 3
        </TabPanel>
      </Box>;
  }
}`,...Z.parameters?.docs?.source},description:{story:"Default Tabs with panels",...Z.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<PhoneIcon />} label="Calls" />
          <Tab icon={<FavoriteIcon />} label="Favorites" />
          <Tab icon={<PersonPinIcon />} label="Contacts" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Recent calls
        </TabPanel>
        <TabPanel value={value} index={1}>
          Favorite contacts
        </TabPanel>
        <TabPanel value={value} index={2}>
          All contacts
        </TabPanel>
      </Box>;
  }
}`,...ee.parameters?.docs?.source},description:{story:"Tabs with icons",...ee.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<HomeIcon />} aria-label="home" />
          <Tab icon={<FavoriteIcon />} aria-label="favorites" />
          <Tab icon={<ShoppingCartIcon />} aria-label="cart" />
        </Tabs>
      </Box>;
  }
}`,...te.parameters?.docs?.source},description:{story:"Icon-only tabs",...te.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 600
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="fullWidth">
          <Tab label="Overview" />
          <Tab label="Details" />
          <Tab label="Settings" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Overview content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Detailed information
        </TabPanel>
        <TabPanel value={value} index={2}>
          Settings panel
        </TabPanel>
      </Box>;
  }
}`,...ae.parameters?.docs?.source},description:{story:"Full width tabs",...ae.parameters?.docs?.description}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 600
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} centered>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Box>;
  }
}`,...oe.parameters?.docs?.source},description:{story:"Centered tabs",...oe.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="scrollable" scrollButtons="auto">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>;
  }
}`,...ne.parameters?.docs?.source},description:{story:"Scrollable tabs",...ne.parameters?.docs?.description}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1
  },
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} variant="scrollable" scrollButtons allowScrollButtonsMobile>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
          <Tab label="Tab 4" />
          <Tab label="Tab 5" />
          <Tab label="Tab 6" />
        </Tabs>
      </Box>;
  }
}`,...re.parameters?.docs?.source},description:{story:"Scrollable with forced scroll buttons",...re.parameters?.docs?.description}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      display: 'flex',
      height: 300
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} orientation="vertical" sx={{
        borderRight: 1,
        borderColor: 'divider'
      }}>
          <Tab label="Profile" />
          <Tab label="Security" />
          <Tab label="Notifications" />
          <Tab label="Billing" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Profile settings
        </TabPanel>
        <TabPanel value={value} index={1}>
          Security settings
        </TabPanel>
        <TabPanel value={value} index={2}>
          Notification preferences
        </TabPanel>
        <TabPanel value={value} index={3}>
          Billing information
        </TabPanel>
      </Box>;
  }
}`,...le.parameters?.docs?.source},description:{story:"Vertical tabs",...le.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} indicatorColor="secondary" textColor="secondary">
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Box>;
  }
}`,...se.parameters?.docs?.source},description:{story:"Secondary color",...se.parameters?.docs?.description}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Box>;
  }
}`,...ie.parameters?.docs?.source},description:{story:"Disabled tabs",...ie.parameters?.docs?.description}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Messages" icon={<Badge badgeContent={4} color="primary" />} />
          <Tab label="Notifications" icon={<Badge badgeContent={12} color="secondary" />} />
          <Tab label="Updates" />
        </Tabs>
      </Box>;
  }
}`,...ce.parameters?.docs?.source},description:{story:"Tabs with badge",...ce.parameters?.docs?.description}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 600
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<PhoneIcon />} label="Top (default)" iconPosition="top" />
          <Tab icon={<PhoneIcon />} label="Bottom" iconPosition="bottom" />
          <Tab icon={<PhoneIcon />} label="Start" iconPosition="start" />
          <Tab icon={<PhoneIcon />} label="End" iconPosition="end" />
        </Tabs>
      </Box>;
  }
}`,...de.parameters?.docs?.source},description:{story:"Icon position variants",...de.parameters?.docs?.description}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Short" />
          <Tab wrapped label="This is a very long tab label that wraps" />
          <Tab label="Short" />
        </Tabs>
      </Box>;
  }
}`,...ue.parameters?.docs?.source},description:{story:"Wrapped tab labels",...ue.parameters?.docs?.description}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  args: {
    indicatorColor: "primary",
    variant: "scrollable"
  },
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} TabIndicatorProps={{
        style: {
          backgroundColor: '#ff6b6b',
          height: 4
        }
      }} sx={{
        '& .MuiTab-root': {
          fontWeight: 'bold',
          fontSize: '1rem'
        }
      }}>
          <Tab label="Dashboard" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
        </Tabs>
      </Box>;
  }
}`,...be.parameters?.docs?.source},description:{story:"Custom styling",...be.parameters?.docs?.description}}};const Ma=["Default","WithIcons","IconOnly","FullWidth","Centered","Scrollable","ScrollableForced","Vertical","SecondaryColor","WithDisabled","WithBadge","IconPositions","WrappedLabels","CustomStyling"];export{oe as Centered,be as CustomStyling,Z as Default,ae as FullWidth,te as IconOnly,de as IconPositions,ne as Scrollable,re as ScrollableForced,se as SecondaryColor,le as Vertical,ce as WithBadge,ie as WithDisabled,ee as WithIcons,ue as WrappedLabels,Ma as __namedExportsOrder,Ra as default};
