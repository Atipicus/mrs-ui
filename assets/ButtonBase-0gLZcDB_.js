import{r as l,R as Y,_ as Ie,j as N,u as ue,E as Q}from"./iframe-Dluh1Z2i.js";import{c as x,b as ce,s as ee,g as we,a as Be}from"./memoTheme-234kV0RJ.js";import{u as ie}from"./useForkRef-ClJ94mF_.js";import{u as H}from"./useEventCallback-Co9Xi1US.js";import{i as se}from"./isFocusVisible-B8k4qzLc.js";const ae={};function pe(e,t){const n=l.useRef(ae);return n.current===ae&&(n.current=e(t)),n}const Se=[];function De(e){l.useEffect(e,Se)}class te{static create(){return new te}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function je(){const e=pe(te.create).current;return De(e.disposeEffect),e}function Le(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Z(e,t)}function Ne(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const le=Y.createContext(null);function Oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){var n=function(r){return t&&l.isValidElement(r)?t(r):r},i=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function ke(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var i=Object.create(null),o=[];for(var r in e)r in t?o.length&&(i[r]=o,o=[]):o.push(r);var s,c={};for(var u in t){if(i[u])for(s=0;s<i[u].length;s++){var p=i[u][s];c[i[u][s]]=n(p)}c[u]=n(u)}for(s=0;s<o.length;s++)c[o[s]]=n(o[s]);return c}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function $e(e,t){return ne(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function Fe(e,t,n){var i=ne(e.children),o=ke(t,i);return Object.keys(o).forEach(function(r){var s=o[r];if(l.isValidElement(s)){var c=r in t,u=r in i,p=t[r],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?o[r]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:L(s,"exit",e),enter:L(s,"enter",e)}):!u&&c&&!d?o[r]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(o[r]=l.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:L(s,"exit",e),enter:L(s,"enter",e)}))}}),o}var Ue=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ze={component:"div",childFactory:function(t){return t}},oe=(function(e){Ne(t,e);function t(i,o){var r;r=e.call(this,i,o)||this;var s=r.handleExited.bind(Oe(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var s=r.children,c=r.handleExited,u=r.firstRender;return{children:u?$e(o,c):Fe(o,s,c),firstRender:!1}},n.handleExited=function(o,r){var s=ne(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var u=Ie({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,c=Le(o,["component","childFactory"]),u=this.state.contextValue,p=Ue(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?Y.createElement(le.Provider,{value:u},p):Y.createElement(le.Provider,{value:u},Y.createElement(r,c,p))},t})(Y.Component);oe.propTypes={};oe.defaultProps=ze;class G{static create(){return new G}static use(){const t=pe(G.create).current,[n,i]=l.useState(!1);return t.shouldMount=n,t.setShouldMount=i,l.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ae(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function _e(){return G.use()}function Ae(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});return n.resolve=e,n.reject=t,n}function Ye(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:c,onExited:u,timeout:p}=e,[d,h]=l.useState(!1),M=x(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),P={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const B=setTimeout(u,p);return()=>{clearTimeout(B)}}},[u,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xe=80,Ke=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,We=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,He=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ge=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),qe=ee(Ye,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ke};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${We};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${He};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ze=l.forwardRef(function(t,n){const i=ue({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...c}=i,[u,p]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=je(),b=l.useRef(null),B=l.useRef(null),C=l.useCallback(f=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:S,cb:F}=f;p(E=>[...E,N.jsx(qe,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:$,rippleSize:S},d.current)]),d.current+=1,h.current=F},[r]),O=l.useCallback((f={},y={},R=()=>{})=>{const{pulsate:$=!1,center:S=o||y.pulsate,fakeElement:F=!1}=y;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const E=F?null:B.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,T,w;if(S||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)I=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:U,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;I=Math.round(U-V.left),T=Math.round(D-V.top)}if(S)w=Math.sqrt((2*V.width**2+V.height**2)/3),w%2===0&&(w+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-I),I)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(U**2+D**2)}f?.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},P.start(Xe,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},[o,C,P]),X=l.useCallback(()=>{O({},{pulsate:!0})},[O]),k=l.useCallback((f,y)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{k(f,y)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=y},[P]);return l.useImperativeHandle(n,()=>({pulsate:X,start:O,stop:k}),[X,O,k]),N.jsx(Ge,{className:x(g.root,r.root,s),ref:B,...c,children:N.jsx(oe,{component:null,exit:!0,children:u})})});function Je(e){return we("MuiButtonBase",e)}const Qe=ce("MuiButtonBase",["root","disabled","focusVisible"]),et=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:o}=e,s=Be({root:["root",t&&"disabled",n&&"focusVisible"]},Je,o);return n&&i&&(s.root+=` ${i}`),s},tt=ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Qe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),at=l.forwardRef(function(t,n){const i=ue({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:B,onClick:C,onContextMenu:O,onDragLeave:X,onFocus:k,onFocusVisible:f,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:S,onMouseUp:F,onTouchEnd:E,onTouchMove:V,onTouchStart:I,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:U,type:D,...z}=i,_=l.useRef(null),m=_e(),fe=ie(m.ref,U),[j,K]=l.useState(!1);p&&j&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),_.current.focus()}}),[]);const de=m.shouldMount&&!d&&!p;l.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const he=v(m,"start",$,h),me=v(m,"stop",O,h),be=v(m,"stop",X,h),ge=v(m,"stop",F,h),Me=v(m,"stop",a=>{j&&a.preventDefault(),S&&S(a)},h),Re=v(m,"start",I,h),ye=v(m,"stop",E,h),Ee=v(m,"stop",V,h),xe=v(m,"stop",a=>{se(a.target)||K(!1),B&&B(a)},!1),Ce=H(a=>{_.current||(_.current=a.currentTarget),se(a.target)&&(K(!0),f&&f(a)),k&&k(a)}),q=()=>{const a=_.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Te=H(a=>{M&&!a.repeat&&j&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),y&&y(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!p&&(a.preventDefault(),C&&C(a))}),ve=H(a=>{M&&a.key===" "&&j&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&C(a)});let W=u;W==="button"&&(z.href||z.to)&&(W=b);const A={};W==="button"?(A.type=D===void 0?"button":D,A.disabled=p):(!z.href&&!z.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Pe=ie(n,_),re={...i,centerRipple:r,component:u,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ve=et(re);return N.jsxs(tt,{as:W,className:x(Ve.root,c),ownerState:re,onBlur:xe,onClick:C,onContextMenu:me,onFocus:Ce,onKeyDown:Te,onKeyUp:ve,onMouseDown:he,onMouseLeave:Me,onMouseUp:ge,onDragLeave:be,onTouchEnd:ye,onTouchMove:Ee,onTouchStart:Re,ref:Pe,tabIndex:p?-1:T,type:D,...A,...z,children:[s,de?N.jsx(Ze,{ref:fe,center:r,...w}):null]})});function v(e,t,n,i=!1){return H(o=>(n&&n(o),i||e[t](o),!0))}export{at as B,le as T,Ne as _,Le as a,te as b,oe as c,je as u};
