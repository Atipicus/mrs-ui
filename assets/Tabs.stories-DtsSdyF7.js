import{r as i,u as Re,j as a,c as tt,o as Et,d as at,R as ot}from"./iframe-guHiHJgM.js";import{b as Me,g as Ee,c as N,s as q,a as We,m as ze}from"./createSimplePaletteValueFilter-N-k1R-Q1.js";import{u as Wt}from"./useTheme-Me__gUwA.js";import{d as nt,o as lt}from"./ownerWindow-BN2rbQ_G.js";import{u as U}from"./useSlot-BwZmQJDP.js";import{u as ye}from"./useSlotProps-DhVnmpbI.js";import{u as Ie}from"./useEventCallback-DI0BNUn9.js";import{c as rt}from"./createSvgIcon-C95dJPTr.js";import{B as st}from"./ButtonBase-C6XQz7ud.js";import{o as zt}from"./ownerDocument-DW-IO8s5.js";import{M}from"./MaterialSymbol-BAO3yf_G.js";import{B as T}from"./Box-BbQdT_CQ.js";import{B as Je}from"./Badge-B2SrOBGe.js";import{T as At}from"./Typography-Di50O9to.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveComponentProps-DAy9J68u.js";import"./useForkRef-Uy7NJ8ru.js";import"./isFocusVisible-B8k4qzLc.js";import"./usePreviousProps-DE3d_06R.js";function Dt(e){return Ee("MuiTab",e)}const B=Me("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),Ft=e=>{const{classes:t,textColor:o,fullWidth:n,wrapped:c,icon:b,label:m,selected:h,disabled:p}=e,S={root:["root",b&&m&&"labelIcon",`textColor${tt(o)}`,n&&"fullWidth",c&&"wrapped",h&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return We(S,Dt,t)},Nt=q(st,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${tt(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped,{[`& .${B.iconWrapper}`]:t.iconWrapper},{[`& .${B.icon}`]:t.icon}]}})(ze(({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="top",style:{[`& > .${B.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="bottom",style:{[`& > .${B.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="start",style:{[`& > .${B.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:t,iconPosition:o})=>t.icon&&t.label&&o==="end",style:{[`& > .${B.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${B.selected}`]:{opacity:1},[`&.${B.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${B.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${B.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${B.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${B.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))),kt=i.forwardRef(function(t,o){const n=Re({props:t,name:"MuiTab"}),{className:c,disabled:b=!1,disableFocusRipple:m=!1,fullWidth:h,icon:p,iconPosition:S="top",indicator:w,label:y,onChange:v,onClick:C,onFocus:k,selected:I,selectionFollowsFocus:j,textColor:me="inherit",value:E,wrapped:ge=!1,...W}=n,H={...n,disabled:b,disableFocusRipple:m,selected:I,icon:!!p,iconPosition:S,label:!!y,fullWidth:h,textColor:me,wrapped:ge},Y=Ft(H),_=p&&y&&i.isValidElement(p)?i.cloneElement(p,{className:N(Y.icon,p.props.className)}):p,he=z=>{!I&&v&&v(z,E),C&&C(z)},X=z=>{j&&!I&&v&&v(z,E),k&&k(z)};return a.jsxs(Nt,{focusRipple:!m,className:N(Y.root,c),ref:o,role:"tab","aria-selected":I,disabled:b,onClick:he,onFocus:X,ownerState:H,tabIndex:I?0:-1,...W,children:[S==="top"||S==="start"?a.jsxs(i.Fragment,{children:[_,y]}):a.jsxs(i.Fragment,{children:[y,_]}),w]})}),Ot=rt(a.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Lt=rt(a.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function $t(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function qt(e,t,o,n={},c=()=>{}){const{ease:b=$t,duration:m=300}=n;let h=null;const p=t[e];let S=!1;const w=()=>{S=!0},y=v=>{if(S){c(new Error("Animation cancelled"));return}h===null&&(h=v);const C=Math.min(1,(v-h)/m);if(t[e]=b(C)*(o-p)+p,C>=1){requestAnimationFrame(()=>{c(null)});return}requestAnimationFrame(y)};return p===o?(c(new Error("Element already at target position")),w):(requestAnimationFrame(y),w)}const Ht={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Xt(e){const{onChange:t,...o}=e,n=i.useRef(),c=i.useRef(null),b=()=>{n.current=c.current.offsetHeight-c.current.clientHeight};return Et(()=>{const m=nt(()=>{const p=n.current;b(),p!==n.current&&t(n.current)}),h=lt(c.current);return h.addEventListener("resize",m),()=>{m.clear(),h.removeEventListener("resize",m)}},[t]),i.useEffect(()=>{b(),t(n.current)},[t]),a.jsx("div",{style:Ht,...o,ref:c})}function Kt(e){return Ee("MuiTabScrollButton",e)}const Ut=Me("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),Yt=e=>{const{classes:t,orientation:o,disabled:n}=e;return We({root:["root",o,n&&"disabled"]},Kt,t)},_t=q(st,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${Ut.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),Gt=i.forwardRef(function(t,o){const n=Re({props:t,name:"MuiTabScrollButton"}),{className:c,slots:b={},slotProps:m={},direction:h,orientation:p,disabled:S,...w}=n,y=at(),v={isRtl:y,...n},C=Yt(v),k=b.StartScrollButtonIcon??Ot,I=b.EndScrollButtonIcon??Lt,j=ye({elementType:k,externalSlotProps:m.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v}),me=ye({elementType:I,externalSlotProps:m.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:v});return a.jsx(_t,{component:"div",className:N(C.root,c),ref:o,role:null,ownerState:v,tabIndex:null,...w,style:{...w.style,...p==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${y?-90:90}deg)`}},children:h==="left"?a.jsx(k,{...j}):a.jsx(I,{...me})})});function Jt(e){return Ee("MuiTabs",e)}const Ve=Me("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Qe=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Ze=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,Se=(e,t,o)=>{let n=!1,c=o(e,t);for(;c;){if(c===e.firstChild){if(n)return;n=!0}const b=c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||b)c=o(e,c);else{c.focus();return}}},Qt=e=>{const{vertical:t,fixed:o,hideScrollbar:n,scrollableX:c,scrollableY:b,centered:m,scrollButtonsHideMobile:h,classes:p}=e;return We({root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",n&&"hideScrollbar",c&&"scrollableX",b&&"scrollableY"],list:["list","flexContainer",t&&"flexContainerVertical",t&&"vertical",m&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",h&&"scrollButtonsHideMobile"],scrollableX:[c&&"scrollableX"],hideScrollbar:[n&&"hideScrollbar"]},Jt,p)},Zt=q("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${Ve.scrollButtons}`]:t.scrollButtons},{[`& .${Ve.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})(ze(({theme:e})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${Ve.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}}}]}))),ea=q("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),ta=q("div",{name:"MuiTabs",slot:"List",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.list,t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.centered,style:{justifyContent:"center"}}]}),aa=q("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(ze(({theme:e})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),oa=q(Xt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),et={},na=i.forwardRef(function(t,o){const n=Re({props:t,name:"MuiTabs"}),c=Wt(),b=at(),{"aria-label":m,"aria-labelledby":h,action:p,centered:S=!1,children:w,className:y,component:v="div",allowScrollButtonsMobile:C=!1,indicatorColor:k="primary",onChange:I,orientation:j="horizontal",ScrollButtonComponent:me,scrollButtons:E="auto",selectionFollowsFocus:ge,slots:W={},slotProps:H={},TabIndicatorProps:Y={},TabScrollButtonProps:_={},textColor:he="primary",value:X,variant:z="standard",visibleScrollbar:we=!1,...it}=n,V=z==="scrollable",P=j==="vertical",G=P?"scrollTop":"scrollLeft",fe=P?"top":"left",ve=P?"bottom":"right",Ce=P?"clientHeight":"clientWidth",J=P?"height":"width",A={...n,component:v,allowScrollButtonsMobile:C,indicatorColor:k,orientation:j,vertical:P,scrollButtons:E,textColor:he,variant:z,visibleScrollbar:we,fixed:!V,hideScrollbar:V&&!we,scrollableX:V&&!P,scrollableY:V&&P,centered:S&&!V,scrollButtonsHideMobile:!C},F=Qt(A),ct=ye({elementType:W.StartScrollButtonIcon,externalSlotProps:H.startScrollButtonIcon,ownerState:A}),dt=ye({elementType:W.EndScrollButtonIcon,externalSlotProps:H.endScrollButtonIcon,ownerState:A}),[Ae,ut]=i.useState(!1),[O,De]=i.useState(et),[Fe,bt]=i.useState(!1),[Ne,pt]=i.useState(!1),[ke,mt]=i.useState(!1),[Oe,ht]=i.useState({overflow:"hidden",scrollbarWidth:0}),Le=new Map,D=i.useRef(null),L=i.useRef(null),K={slots:W,slotProps:{indicator:Y,scrollButton:_,...H}},$e=()=>{const l=D.current;let s;if(l){const d=l.getBoundingClientRect();s={clientWidth:l.clientWidth,scrollLeft:l.scrollLeft,scrollTop:l.scrollTop,scrollWidth:l.scrollWidth,top:d.top,bottom:d.bottom,left:d.left,right:d.right}}let u;if(l&&X!==!1){const d=L.current.children;if(d.length>0){const f=d[Le.get(X)];u=f?f.getBoundingClientRect():null}}return{tabsMeta:s,tabMeta:u}},Q=Ie(()=>{const{tabsMeta:l,tabMeta:s}=$e();let u=0,d;P?(d="top",s&&l&&(u=s.top-l.top+l.scrollTop)):(d=b?"right":"left",s&&l&&(u=(b?-1:1)*(s[d]-l[d]+l.scrollLeft)));const f={[d]:u,[J]:s?s[J]:0};if(typeof O[d]!="number"||typeof O[J]!="number")De(f);else{const R=Math.abs(O[d]-f[d]),$=Math.abs(O[J]-f[J]);(R>=1||$>=1)&&De(f)}}),Be=(l,{animation:s=!0}={})=>{s?qt(G,D.current,l,{duration:c.transitions.duration.standard}):D.current[G]=l},qe=l=>{let s=D.current[G];P?s+=l:s+=l*(b?-1:1),Be(s)},He=()=>{const l=D.current[Ce];let s=0;const u=Array.from(L.current.children);for(let d=0;d<u.length;d+=1){const f=u[d];if(s+f[Ce]>l){d===0&&(s=l);break}s+=f[Ce]}return s},ft=()=>{qe(-1*He())},vt=()=>{qe(He())},[xt,{onChange:Xe,...Tt}]=U("scrollbar",{className:N(F.scrollableX,F.hideScrollbar),elementType:oa,shouldForwardComponentProp:!0,externalForwardedProps:K,ownerState:A}),St=i.useCallback(l=>{Xe?.(l),ht({overflow:null,scrollbarWidth:l})},[Xe]),[Ke,Ue]=U("scrollButtons",{className:N(F.scrollButtons,_.className),elementType:Gt,externalForwardedProps:K,ownerState:A,additionalProps:{orientation:j,slots:{StartScrollButtonIcon:W.startScrollButtonIcon||W.StartScrollButtonIcon,EndScrollButtonIcon:W.endScrollButtonIcon||W.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:ct,endScrollButtonIcon:dt}}}),yt=()=>{const l={};l.scrollbarSizeListener=V?a.jsx(xt,{...Tt,onChange:St}):null;const u=V&&(E==="auto"&&(Fe||Ne)||E===!0);return l.scrollButtonStart=u?a.jsx(Ke,{direction:b?"right":"left",onClick:ft,disabled:!Fe,...Ue}):null,l.scrollButtonEnd=u?a.jsx(Ke,{direction:b?"left":"right",onClick:vt,disabled:!Ne,...Ue}):null,l},Ye=Ie(l=>{const{tabsMeta:s,tabMeta:u}=$e();if(!(!u||!s)){if(u[fe]<s[fe]){const d=s[G]+(u[fe]-s[fe]);Be(d,{animation:l})}else if(u[ve]>s[ve]){const d=s[G]+(u[ve]-s[ve]);Be(d,{animation:l})}}}),xe=Ie(()=>{V&&E!==!1&&mt(!ke)});i.useEffect(()=>{const l=nt(()=>{D.current&&Q()});let s;const u=R=>{R.forEach($=>{$.removedNodes.forEach(Z=>{s?.unobserve(Z)}),$.addedNodes.forEach(Z=>{s?.observe(Z)})}),l(),xe()},d=lt(D.current);d.addEventListener("resize",l);let f;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(l),Array.from(L.current.children).forEach(R=>{s.observe(R)})),typeof MutationObserver<"u"&&(f=new MutationObserver(u),f.observe(L.current,{childList:!0})),()=>{l.clear(),d.removeEventListener("resize",l),f?.disconnect(),s?.disconnect()}},[Q,xe]),i.useEffect(()=>{const l=Array.from(L.current.children),s=l.length;if(typeof IntersectionObserver<"u"&&s>0&&V&&E!==!1){const u=l[0],d=l[s-1],f={root:D.current,threshold:.99},R=Pe=>{bt(!Pe[0].isIntersecting)},$=new IntersectionObserver(R,f);$.observe(u);const Z=Pe=>{pt(!Pe[0].isIntersecting)},Ge=new IntersectionObserver(Z,f);return Ge.observe(d),()=>{$.disconnect(),Ge.disconnect()}}},[V,E,ke,w?.length]),i.useEffect(()=>{ut(!0)},[]),i.useEffect(()=>{Q()}),i.useEffect(()=>{Ye(et!==O)},[Ye,O]),i.useImperativeHandle(p,()=>({updateIndicator:Q,updateScrollButtons:xe}),[Q,xe]);const[gt,wt]=U("indicator",{className:N(F.indicator,Y.className),elementType:aa,externalForwardedProps:K,ownerState:A,additionalProps:{style:O}}),_e=a.jsx(gt,{...wt});let Te=0;const Ct=i.Children.map(w,l=>{if(!i.isValidElement(l))return null;const s=l.props.value===void 0?Te:l.props.value;Le.set(s,Te);const u=s===X;return Te+=1,i.cloneElement(l,{fullWidth:z==="fullWidth",indicator:u&&!Ae&&_e,selected:u,selectionFollowsFocus:ge,onChange:I,textColor:he,value:s,...Te===1&&X===!1&&!l.props.tabIndex?{tabIndex:0}:{}})}),Bt=l=>{if(l.altKey||l.shiftKey||l.ctrlKey||l.metaKey)return;const s=L.current,u=zt(s).activeElement;if(u.getAttribute("role")!=="tab")return;let f=j==="horizontal"?"ArrowLeft":"ArrowUp",R=j==="horizontal"?"ArrowRight":"ArrowDown";switch(j==="horizontal"&&b&&(f="ArrowRight",R="ArrowLeft"),l.key){case f:l.preventDefault(),Se(s,u,Ze);break;case R:l.preventDefault(),Se(s,u,Qe);break;case"Home":l.preventDefault(),Se(s,null,Qe);break;case"End":l.preventDefault(),Se(s,null,Ze);break}},je=yt(),[jt,Pt]=U("root",{ref:o,className:N(F.root,y),elementType:Zt,externalForwardedProps:{...K,...it,component:v},ownerState:A}),[It,Vt]=U("scroller",{ref:D,className:F.scroller,elementType:ea,externalForwardedProps:K,ownerState:A,additionalProps:{style:{overflow:Oe.overflow,[P?`margin${b?"Left":"Right"}`:"marginBottom"]:we?void 0:-Oe.scrollbarWidth}}}),[Rt,Mt]=U("list",{ref:L,className:N(F.list,F.flexContainer),elementType:ta,externalForwardedProps:K,ownerState:A,getSlotProps:l=>({...l,onKeyDown:s=>{Bt(s),l.onKeyDown?.(s)}})});return a.jsxs(jt,{...Pt,children:[je.scrollButtonStart,je.scrollbarSizeListener,a.jsxs(It,{...Vt,children:[a.jsx(Rt,{"aria-label":m,"aria-labelledby":h,"aria-orientation":j==="vertical"?"vertical":null,role:"tablist",...Mt,children:Ct}),Ae&&_e]}),je.scrollButtonEnd]})}),x=ot.forwardRef(({value:e,onChange:t,children:o,variant:n="standard",indicatorColor:c="primary",textColor:b="primary",centered:m=!1,scrollButtons:h="auto",allowScrollButtonsMobile:p=!1,orientation:S="horizontal",TabIndicatorProps:w,ScrollButtonComponent:y,...v},C)=>a.jsx(na,{ref:C,value:e,onChange:t,variant:n,indicatorColor:c,textColor:b,centered:m,scrollButtons:h,allowScrollButtonsMobile:p,orientation:S,TabIndicatorProps:w,ScrollButtonComponent:y,...v,children:o}));x.displayName="Tabs";const r=ot.forwardRef(({label:e,value:t,icon:o,disabled:n=!1,wrapped:c=!1,iconPosition:b="top",...m},h)=>a.jsx(kt,{ref:h,label:e,value:t,icon:o,disabled:n,wrapped:c,iconPosition:b,...m}));r.displayName="Tab";x.__docgenInfo={description:"Tabs component for navigation between different views",methods:[],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"union",raw:"number | string | false",elements:[{name:"number"},{name:"string"},{name:"literal",value:"false"}]},description:"The value of the currently selected Tab"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, value: number | string) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:"Callback fired when the value changes"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component (typically Tab elements)"},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'scrollable' | 'fullWidth'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'scrollable'"},{name:"literal",value:"'fullWidth'"}]},description:`The variant of the tabs
@default 'standard'`,defaultValue:{value:"'standard'",computed:!1}},indicatorColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The indicator color
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},textColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'inherit'"}]},description:`The text color
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:`If true, the tabs are centered
@default false`,defaultValue:{value:"false",computed:!1}},scrollButtons:{required:!1,tsType:{name:"union",raw:"'auto' | true | false",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:`Determines the alignment of the scroll buttons
@default 'auto'`,defaultValue:{value:"'auto'",computed:!1}},allowScrollButtonsMobile:{required:!1,tsType:{name:"boolean"},description:`If true, allows scrolling the tabs with mouse wheel
@default false`,defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The component orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},TabIndicatorProps:{required:!1,tsType:{name:"MuiTabsProps['TabIndicatorProps']",raw:"MuiTabsProps['TabIndicatorProps']"},description:"Props applied to the TabIndicator element"},ScrollButtonComponent:{required:!1,tsType:{name:"MuiTabsProps['ScrollButtonComponent']",raw:"MuiTabsProps['ScrollButtonComponent']"},description:"Props applied to the ScrollButtonComponent element"}},composes:["MuiTabsProps"]};r.__docgenInfo={description:"Tab component for individual tab item",methods:[],displayName:"Tab",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label content"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"The value of the tab"},icon:{required:!1,tsType:{name:"union",raw:"React.ReactElement | string",elements:[{name:"ReactReactElement",raw:"React.ReactElement"},{name:"string"}]},description:"The icon element"},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the tab is disabled
@default false`,defaultValue:{value:"false",computed:!1}},wrapped:{required:!1,tsType:{name:"boolean"},description:`If true, the tab is wrapped
@default false`,defaultValue:{value:"false",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'start' | 'end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`The icon position
@default 'top'`,defaultValue:{value:"'top'",computed:!1}}},composes:["Omit"]};const Ca={title:"Molecules/Tabs",component:x,parameters:{layout:"centered",docs:{description:{component:"Tabs make it easy to explore and switch between different views. They organize and allow navigation between groups of content that are related and at the same hierarchical level."}}},tags:["autodocs"],argTypes:{value:{control:"number",description:"The value of the currently selected Tab"},variant:{control:"select",options:["standard","scrollable","fullWidth"],description:"The variant of the tabs"},indicatorColor:{control:"select",options:["primary","secondary"],description:"The indicator color"},textColor:{control:"select",options:["primary","secondary","inherit"],description:"The text color"},centered:{control:"boolean",description:"If true, the tabs are centered"},orientation:{control:"select",options:["horizontal","vertical"],description:"The component orientation"}}};function g(e){const{children:t,value:o,index:n,...c}=e;return a.jsx("div",{role:"tabpanel",hidden:o!==n,id:`tabpanel-${n}`,"aria-labelledby":`tab-${n}`,...c,children:o===n&&a.jsx(T,{sx:{p:3},children:a.jsx(At,{children:t})})})}const ee={args:{centered:!1,indicatorColor:"primary",textColor:"secondary",variant:"fullWidth",value:4,orientation:"vertical"},render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{width:500},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(r,{label:"Tab 1"}),a.jsx(r,{label:"Tab 2"}),a.jsx(r,{label:"Tab 3"})]}),a.jsx(g,{value:e,index:0,children:"Content for Tab 1"}),a.jsx(g,{value:e,index:1,children:"Content for Tab 2"}),a.jsx(g,{value:e,index:2,children:"Content for Tab 3"})]})}},te={render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{width:500},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(r,{icon:a.jsx(M,{icon:"phone"}),label:"Calls"}),a.jsx(r,{icon:a.jsx(M,{icon:"favorite"}),label:"Favorites"}),a.jsx(r,{icon:a.jsx(M,{icon:"person_pin"}),label:"Contacts"})]}),a.jsx(g,{value:e,index:0,children:"Recent calls"}),a.jsx(g,{value:e,index:1,children:"Favorite contacts"}),a.jsx(g,{value:e,index:2,children:"All contacts"})]})}},ae={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(r,{icon:a.jsx(M,{icon:"home"}),"aria-label":"home"}),a.jsx(r,{icon:a.jsx(M,{icon:"favorite"}),"aria-label":"favorites"}),a.jsx(r,{icon:a.jsx(M,{icon:"shopping_cart"}),"aria-label":"cart"})]})})}},oe={render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{width:600},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),variant:"fullWidth",children:[a.jsx(r,{label:"Overview"}),a.jsx(r,{label:"Details"}),a.jsx(r,{label:"Settings"})]}),a.jsx(g,{value:e,index:0,children:"Overview content"}),a.jsx(g,{value:e,index:1,children:"Detailed information"}),a.jsx(g,{value:e,index:2,children:"Settings panel"})]})}},ne={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:600},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),centered:!0,children:[a.jsx(r,{label:"Tab 1"}),a.jsx(r,{label:"Tab 2"}),a.jsx(r,{label:"Tab 3"})]})})}},le={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),variant:"scrollable",scrollButtons:"auto",children:[a.jsx(r,{label:"Item One"}),a.jsx(r,{label:"Item Two"}),a.jsx(r,{label:"Item Three"}),a.jsx(r,{label:"Item Four"}),a.jsx(r,{label:"Item Five"}),a.jsx(r,{label:"Item Six"}),a.jsx(r,{label:"Item Seven"})]})})}},re={args:{value:1},render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[a.jsx(r,{label:"Tab 1"}),a.jsx(r,{label:"Tab 2"}),a.jsx(r,{label:"Tab 3"}),a.jsx(r,{label:"Tab 4"}),a.jsx(r,{label:"Tab 5"}),a.jsx(r,{label:"Tab 6"})]})})}},se={render:()=>{const[e,t]=i.useState(0);return a.jsxs(T,{sx:{display:"flex",height:300},children:[a.jsxs(x,{value:e,onChange:(o,n)=>t(n),orientation:"vertical",sx:{borderRight:1,borderColor:"divider"},children:[a.jsx(r,{label:"Profile"}),a.jsx(r,{label:"Security"}),a.jsx(r,{label:"Notifications"}),a.jsx(r,{label:"Billing"})]}),a.jsx(g,{value:e,index:0,children:"Profile settings"}),a.jsx(g,{value:e,index:1,children:"Security settings"}),a.jsx(g,{value:e,index:2,children:"Notification preferences"}),a.jsx(g,{value:e,index:3,children:"Billing information"})]})}},ie={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),indicatorColor:"secondary",textColor:"secondary",children:[a.jsx(r,{label:"Active"}),a.jsx(r,{label:"Disabled",disabled:!0}),a.jsx(r,{label:"Active"})]})})}},ce={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(r,{label:"Active"}),a.jsx(r,{label:"Disabled",disabled:!0}),a.jsx(r,{label:"Active"}),a.jsx(r,{label:"Disabled",disabled:!0}),a.jsx(r,{label:"Active"})]})})}},de={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(r,{label:"Messages",icon:a.jsx(Je,{badgeContent:4,color:"primary"})}),a.jsx(r,{label:"Notifications",icon:a.jsx(Je,{badgeContent:12,color:"secondary"})}),a.jsx(r,{label:"Updates"})]})})}},ue={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:600},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(r,{icon:a.jsx(M,{icon:"phone"}),label:"Top (default)",iconPosition:"top"}),a.jsx(r,{icon:a.jsx(M,{icon:"phone"}),label:"Bottom",iconPosition:"bottom"}),a.jsx(r,{icon:a.jsx(M,{icon:"phone"}),label:"Start",iconPosition:"start"}),a.jsx(r,{icon:a.jsx(M,{icon:"phone"}),label:"End",iconPosition:"end"})]})})}},be={render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:400},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),children:[a.jsx(r,{label:"Short"}),a.jsx(r,{wrapped:!0,label:"This is a very long tab label that wraps"}),a.jsx(r,{label:"Short"})]})})}},pe={args:{indicatorColor:"primary",variant:"scrollable"},render:()=>{const[e,t]=i.useState(0);return a.jsx(T,{sx:{width:500},children:a.jsxs(x,{value:e,onChange:(o,n)=>t(n),TabIndicatorProps:{style:{backgroundColor:"#ff6b6b",height:4}},sx:{"& .MuiTab-root":{fontWeight:"bold",fontSize:"1rem"}},children:[a.jsx(r,{label:"Dashboard"}),a.jsx(r,{label:"Analytics"}),a.jsx(r,{label:"Reports"})]})})}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source},description:{story:"Default Tabs with panels",...ee.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 500
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<MaterialSymbol icon="phone" />} label="Calls" />
          <Tab icon={<MaterialSymbol icon="favorite" />} label="Favorites" />
          <Tab icon={<MaterialSymbol icon="person_pin" />} label="Contacts" />
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
}`,...te.parameters?.docs?.source},description:{story:"Tabs with icons",...te.parameters?.docs?.description}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 400
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<MaterialSymbol icon="home" />} aria-label="home" />
          <Tab icon={<MaterialSymbol icon="favorite" />} aria-label="favorites" />
          <Tab icon={<MaterialSymbol icon="shopping_cart" />} aria-label="cart" />
        </Tabs>
      </Box>;
  }
}`,...ae.parameters?.docs?.source},description:{story:"Icon-only tabs",...ae.parameters?.docs?.description}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source},description:{story:"Full width tabs",...oe.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source},description:{story:"Centered tabs",...ne.parameters?.docs?.description}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
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
}`,...le.parameters?.docs?.source},description:{story:"Scrollable tabs",...le.parameters?.docs?.description}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source},description:{story:"Scrollable with forced scroll buttons",...re.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source},description:{story:"Vertical tabs",...se.parameters?.docs?.description}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source},description:{story:"Secondary color",...ie.parameters?.docs?.description}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
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
}`,...ce.parameters?.docs?.source},description:{story:"Disabled tabs",...ce.parameters?.docs?.description}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
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
}`,...de.parameters?.docs?.source},description:{story:"Tabs with badge",...de.parameters?.docs?.description}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: 600
    }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<MaterialSymbol icon="phone" />} label="Top (default)" iconPosition="top" />
          <Tab icon={<MaterialSymbol icon="phone" />} label="Bottom" iconPosition="bottom" />
          <Tab icon={<MaterialSymbol icon="phone" />} label="Start" iconPosition="start" />
          <Tab icon={<MaterialSymbol icon="phone" />} label="End" iconPosition="end" />
        </Tabs>
      </Box>;
  }
}`,...ue.parameters?.docs?.source},description:{story:"Icon position variants",...ue.parameters?.docs?.description}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
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
}`,...be.parameters?.docs?.source},description:{story:"Wrapped tab labels",...be.parameters?.docs?.description}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
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
}`,...pe.parameters?.docs?.source},description:{story:"Custom styling",...pe.parameters?.docs?.description}}};const Ba=["Default","WithIcons","IconOnly","FullWidth","Centered","Scrollable","ScrollableForced","Vertical","SecondaryColor","WithDisabled","WithBadge","IconPositions","WrappedLabels","CustomStyling"];export{ne as Centered,pe as CustomStyling,ee as Default,oe as FullWidth,ae as IconOnly,ue as IconPositions,le as Scrollable,re as ScrollableForced,ie as SecondaryColor,se as Vertical,de as WithBadge,ce as WithDisabled,te as WithIcons,be as WrappedLabels,Ba as __namedExportsOrder,Ca as default};
