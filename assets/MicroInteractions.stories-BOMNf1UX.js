import{r as i,ac as z,ad as P,ae as N,ah as O,j as e,V as H}from"./iframe-m0FcCUbT.js";import{B as C}from"./Button-CJ6MgozL.js";import{s as D}from"./memoTheme-C11nCEJ1.js";import{B as F}from"./Badge-Bm1xbx-A.js";import{B as m}from"./Box-DSq61m1Q.js";import{S as h}from"./Stack-DLDfFx0e.js";import{P as g}from"./Paper-BQ8rpTFt.js";import{T as a}from"./Typography-BAhyjZNg.js";import{I as V}from"./IconButton-BtP768Mt.js";import{G as R}from"./Grid-BTAXzuTF.js";import{C as E,a as L}from"./CardContent-s39Wow6c.js";import{T as U}from"./TextField-CmRpz8i1.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bd5szlVj.js";import"./useForkRef-DeUHlcp-.js";import"./useEventCallback-Cbn4Qfni.js";import"./isFocusVisible-TJLqzInv.js";import"./elementTypeAcceptingRef-Gtb8CsfE.js";import"./chainPropTypes-CPkqCYVL.js";import"./CircularProgress-nywBWFjt.js";import"./usePreviousProps-BhTBul9M.js";import"./useSlot-BPbjla4P.js";import"./resolveComponentProps-hVTJcm9D.js";import"./useThemeProps-OFH6wkZ1.js";import"./useTheme--qrtAMJV.js";import"./integerPropType-DVPNO1YA.js";import"./requirePropFactory-COLy0eTH.js";import"./Select-BLLXmAAY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C69-cJvf.js";import"./FormLabel-sR584vL_.js";import"./isMuiElement-CG90bCKT.js";import"./Menu-Dcsn98hI.js";import"./useSlotProps-RklMYb_o.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-DT4E6Ksq.js";import"./utils-e4gBpPL7.js";import"./index-CMwIBjt_.js";import"./index-DWLUMx4m.js";import"./getReactElementRef-DAzX-jKI.js";import"./mergeSlotProps-Bkt73wcY.js";import"./Modal-DCqzUJ55.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BROk4iQM.js";import"./HTMLElementType-Bpqya3bH.js";import"./Fade-DvsUOEyO.js";import"./List-Ba_CvKvH.js";import"./ListContext-CR7FhADn.js";import"./useControlled-Cm6cFOSH.js";import"./createSvgIcon-DzjuuRaM.js";import"./FormHelperText-C1e4lLm_.js";const Y=()=>{const[t,n]=i.useState([]),r=i.useCallback(s=>{const c=s.currentTarget.getBoundingClientRect(),d=Math.max(c.width,c.height),p=s.clientX-c.left-d/2,G=s.clientY-c.top-d/2,k={x:p,y:G,size:d,id:Date.now()};n(A=>[...A,k]);const w=parseInt(z)*6;setTimeout(()=>{n(A=>A.filter(q=>q.id!==k.id))},w)},[]),o=i.useCallback(()=>{n([])},[]);return{ripples:t,createRipple:r,clearRipples:o}},_=(t={})=>{const{duration:n=1e3,scale:r=1.05,enabled:o=!0}=t,s=i.useRef(null);return i.useEffect(()=>{if(!o||!s.current)return;const l=s.current,c=[{transform:"scale(1)"},{transform:`scale(${r})`},{transform:"scale(1)"}],d=l.animate(c,{duration:n,iterations:1/0,easing:"ease-in-out"});return()=>{d.cancel()}},[n,r,o]),s},X=(t={})=>{const{duration:n=parseInt(P),distance:r=10}=t,o=i.useRef(null),s=i.useCallback(()=>{if(!o.current)return;const l=o.current,c=[{transform:"translateX(0)"},{transform:`translateX(-${r}px)`},{transform:`translateX(${r}px)`},{transform:`translateX(-${r}px)`},{transform:`translateX(${r}px)`},{transform:"translateX(0)"}];l.animate(c,{duration:n,easing:"ease-in-out"})},[n,r]);return{ref:o,shake:s}},W=(t={})=>{const{duration:n=parseInt(N),scale:r=1.2}=t,o=i.useRef(null),s=i.useCallback(()=>{if(!o.current)return;const l=o.current,c=[{transform:"scale(1)"},{transform:`scale(${r})`},{transform:"scale(0.9)"},{transform:`scale(${r*.95})`},{transform:"scale(1)"}];l.animate(c,{duration:n,easing:"ease-out"})},[n,r]);return{ref:o,bounce:s}},M=(t={})=>{const{scale:n=1.05,duration:r=z,easing:o=O}=t,[s,l]=i.useState(!1),c=i.useCallback(()=>l(!0),[]),d=i.useCallback(()=>l(!1),[]),p={transform:s?`scale(${n})`:"scale(1)",transition:`transform ${r} ${o}`,cursor:"pointer"};return{isHovered:s,onMouseEnter:c,onMouseLeave:d,style:p}},J=D("span")({position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none",borderRadius:"inherit"}),K=D("span")(({x:t,y:n,size:r})=>({position:"absolute",left:t,top:n,width:r,height:r,borderRadius:"50%",backgroundColor:"currentColor",opacity:.3,animation:`ripple ${parseInt(z)*6}ms ease-out`,"@keyframes ripple":{"0%":{transform:"scale(0)",opacity:.6},"100%":{transform:"scale(4)",opacity:0}}})),S=i.forwardRef(({children:t,disableRipple:n=!1,onClick:r,...o},s)=>{const{ripples:l,createRipple:c}=Y(),d=p=>{n||c(p),r?.(p)};return e.jsxs(C,{ref:s,onClick:d,sx:{position:"relative"},...o,children:[!n&&e.jsx(J,{children:l.map(p=>e.jsx(K,{x:p.x,y:p.y,size:p.size},p.id))}),t]})});S.displayName="RippleButton";S.__docgenInfo={description:`RippleButton Component

Enhanced Material-UI Button with custom ripple effect

@example
\`\`\`tsx
<RippleButton variant="contained" color="primary">
  Click me for ripple effect
</RippleButton>
\`\`\``,methods:[],displayName:"RippleButton",props:{disableRipple:{required:!1,tsType:{name:"boolean"},description:`If true, ripple effect is disabled
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["ButtonProps"]};const Q=H`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
`,Z=H`
  0% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(244, 67, 54, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
  }
`,ee=D(F)(({animate:t,animationvariant:n})=>t?n==="bounce"?{"& .MuiBadge-badge":{animation:`${Q} ${parseInt(P)*3}ms ease-in-out`}}:n==="pulse"?{"& .MuiBadge-badge":{animation:`${Z} 2s infinite`}}:{}:{}),$=({animationVariant:t="bounce",animateOnChange:n=!0,badgeContent:r,children:o,...s})=>{const[l,c]=i.useState(!1),[d,p]=i.useState(r);i.useEffect(()=>{if(!n||r===d)return;c(!0),p(r);const w=setTimeout(()=>{c(!1)},parseInt(P)*3);return()=>clearTimeout(w)},[r,d,n]);const k=t==="pulse"||l;return e.jsx(ee,{badgeContent:r,animate:k,animationvariant:t==="none"?void 0:t,...s,children:o})};$.__docgenInfo={description:`AnimatedBadge Component

Badge component with entrance animations

@example
\`\`\`tsx
<AnimatedBadge badgeContent={4} color="error" animationVariant="bounce">
  <MailIcon />
</AnimatedBadge>
\`\`\``,methods:[],displayName:"AnimatedBadge",props:{animationVariant:{required:!1,tsType:{name:"union",raw:"'bounce' | 'pulse' | 'none'",elements:[{name:"literal",value:"'bounce'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'none'"}]},description:`Animation variant
@default 'bounce'`,defaultValue:{value:"'bounce'",computed:!1}},animateOnChange:{required:!1,tsType:{name:"boolean"},description:`If true, animation plays once when badge appears
@default true`,defaultValue:{value:"true",computed:!1}}},composes:["BadgeProps"]};const ne=H`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`,I=D("span")(({theme:t,delay:n})=>({width:12,height:12,borderRadius:"50%",backgroundColor:t.palette.primary.main,display:"inline-block",margin:"0 4px",animation:`${ne} ${parseInt(P)*7}ms infinite ease-in-out`,animationDelay:`${n}ms`})),u=({color:t="primary",size:n="medium"})=>{const o={small:8,medium:12,large:16}[n];return e.jsxs(m,{sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:.5},children:[e.jsx(I,{delay:0,sx:{width:o,height:o,bgcolor:`${t}.main`}}),e.jsx(I,{delay:160,sx:{width:o,height:o,bgcolor:`${t}.main`}}),e.jsx(I,{delay:320,sx:{width:o,height:o,bgcolor:`${t}.main`}})]})};u.__docgenInfo={description:`LoadingDots Component

Three-dot loading animation

@example
\`\`\`tsx
<LoadingDots color="primary" size="medium" />
\`\`\``,methods:[],displayName:"LoadingDots",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:`Color of the dots
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Size of the dots
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}}}};const tn={title:"Micro-Interactions/Overview",parameters:{docs:{description:{component:"Complete micro-interactions library with hooks and components for engaging user experiences."}}}},y={render:()=>e.jsxs(g,{elevation:1,sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"💧 Ripple Effect"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Material Design ripple effect for tactile feedback"}),e.jsxs(h,{direction:"row",spacing:2,flexWrap:"wrap",children:[e.jsx(S,{variant:"contained",color:"primary",children:"Click for Ripple"}),e.jsx(S,{variant:"contained",color:"secondary",children:"Secondary Ripple"}),e.jsx(S,{variant:"outlined",color:"error",children:"Outlined Ripple"}),e.jsx(S,{variant:"text",color:"info",children:"Text Ripple"})]})]})},x={render:()=>{const{ref:t,shake:n}=X(),[r,o]=i.useState(""),s=()=>{r.includes("@")||n()};return e.jsxs(g,{elevation:1,sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"🔔 Shake Animation"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Useful for error feedback and invalid inputs"}),e.jsx(m,{ref:t,children:e.jsxs(h,{spacing:2,children:[e.jsx(U,{label:"Email",value:r,onChange:l=>o(l.target.value),helperText:"Enter an invalid email and click submit",fullWidth:!0}),e.jsx(C,{variant:"contained",onClick:s,children:"Submit (Shakes on error)"})]})})]})}},f={render:()=>{const{ref:t,bounce:n}=W();return e.jsxs(g,{elevation:1,sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"⚡ Bounce Animation"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Playful bounce effect for success actions"}),e.jsx(C,{ref:t,variant:"contained",color:"success",onClick:n,children:"Click to Bounce!"})]})}},v={render:()=>{const t=M({scale:1.05}),n=M({scale:1.1}),r=M({scale:1.15});return e.jsxs(g,{elevation:1,sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"🔍 Hover Scale"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Smooth scale transitions on hover"}),e.jsxs(R,{container:!0,spacing:2,children:[e.jsx(R,{item:!0,xs:12,sm:4,children:e.jsx(E,{elevation:2,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,sx:t.style,children:e.jsxs(L,{children:[e.jsx(a,{variant:"h6",children:"Scale 1.05"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Subtle hover effect"})]})})}),e.jsx(R,{item:!0,xs:12,sm:4,children:e.jsx(E,{elevation:2,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,sx:n.style,children:e.jsxs(L,{children:[e.jsx(a,{variant:"h6",children:"Scale 1.1"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Medium hover effect"})]})})}),e.jsx(R,{item:!0,xs:12,sm:4,children:e.jsx(E,{elevation:2,onMouseEnter:r.onMouseEnter,onMouseLeave:r.onMouseLeave,sx:r.style,children:e.jsxs(L,{children:[e.jsx(a,{variant:"h6",children:"Scale 1.15"}),e.jsx(a,{variant:"body2",color:"text.secondary",children:"Strong hover effect"})]})})})]})]})}},b={render:()=>{const t=_({duration:1e3,scale:1.05});return e.jsxs(g,{elevation:1,sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"💓 Pulse Animation"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Continuous pulsing for attention-grabbing elements"}),e.jsx(m,{display:"flex",justifyContent:"center",py:4,children:e.jsx(g,{ref:t,elevation:3,sx:{width:120,height:120,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"primary.main",color:"primary.contrastText"},children:e.jsx(a,{variant:"h5",fontWeight:"bold",children:"Pulse"})})})]})}},B={render:()=>{const[t,n]=i.useState(0),[r,o]=i.useState(5);return e.jsxs(g,{elevation:1,sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"🔔 Animated Badge"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Badge with entrance animations and pulse effect"}),e.jsxs(h,{spacing:3,children:[e.jsxs(m,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Bounce on Change"}),e.jsxs(h,{direction:"row",spacing:4,alignItems:"center",children:[e.jsx($,{badgeContent:t,color:"error",animationVariant:"bounce",children:e.jsx(V,{children:e.jsx("span",{style:{fontSize:24},children:"📧"})})}),e.jsx(C,{variant:"outlined",onClick:()=>n(s=>s+1),children:"Increment (+)"})]})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Continuous Pulse"}),e.jsxs(h,{direction:"row",spacing:4,alignItems:"center",children:[e.jsx($,{badgeContent:r,color:"error",animationVariant:"pulse",children:e.jsx(V,{children:e.jsx("span",{style:{fontSize:24},children:"🔔"})})}),e.jsxs(h,{direction:"row",spacing:1,children:[e.jsx(C,{variant:"outlined",onClick:()=>o(s=>s+1),children:"+"}),e.jsx(C,{variant:"outlined",onClick:()=>o(s=>Math.max(0,s-1)),children:"-"})]})]})]})]})]})}},j={render:()=>e.jsxs(g,{elevation:1,sx:{p:3},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"⏳ Loading Dots"}),e.jsx(a,{variant:"body2",color:"text.secondary",paragraph:!0,children:"Animated three-dot loading indicator"}),e.jsxs(h,{spacing:3,children:[e.jsxs(m,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Sizes"}),e.jsxs(h,{direction:"row",spacing:4,alignItems:"center",children:[e.jsxs(m,{children:[e.jsx(a,{variant:"caption",display:"block",mb:1,children:"Small"}),e.jsx(u,{size:"small"})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"caption",display:"block",mb:1,children:"Medium"}),e.jsx(u,{size:"medium"})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"caption",display:"block",mb:1,children:"Large"}),e.jsx(u,{size:"large"})]})]})]}),e.jsxs(m,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Colors"}),e.jsxs(h,{direction:"row",spacing:4,alignItems:"center",children:[e.jsx(u,{color:"primary"}),e.jsx(u,{color:"secondary"}),e.jsx(u,{color:"error"}),e.jsx(u,{color:"warning"}),e.jsx(u,{color:"info"}),e.jsx(u,{color:"success"})]})]})]})]})},T={render:()=>{X(),W(),_(),M();const[t,n]=i.useState(3);return e.jsxs(h,{spacing:3,children:[e.jsx(y.render,{}),e.jsx(x.render,{}),e.jsx(f.render,{}),e.jsx(v.render,{}),e.jsx(b.render,{}),e.jsx(B.render,{}),e.jsx(j.render,{})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Paper elevation={1} sx={{
    p: 3
  }}>
      <Typography variant="h6" gutterBottom>
        💧 Ripple Effect
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Material Design ripple effect for tactile feedback
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <RippleButton variant="contained" color="primary">
          Click for Ripple
        </RippleButton>
        <RippleButton variant="contained" color="secondary">
          Secondary Ripple
        </RippleButton>
        <RippleButton variant="outlined" color="error">
          Outlined Ripple
        </RippleButton>
        <RippleButton variant="text" color="info">
          Text Ripple
        </RippleButton>
      </Stack>
    </Paper>
}`,...y.parameters?.docs?.source},description:{story:"Ripple Effect Demo",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      ref,
      shake
    } = useShake<HTMLDivElement>();
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
      if (!email.includes('@')) {
        shake();
      }
    };
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          🔔 Shake Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Useful for error feedback and invalid inputs
        </Typography>
        <Box ref={ref}>
          <Stack spacing={2}>
            <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} helperText="Enter an invalid email and click submit" fullWidth />
            <Button variant="contained" onClick={handleSubmit}>
              Submit (Shakes on error)
            </Button>
          </Stack>
        </Box>
      </Paper>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Shake Animation Demo",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      ref,
      bounce
    } = useBounce<HTMLButtonElement>();
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          ⚡ Bounce Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Playful bounce effect for success actions
        </Typography>
        <Button ref={ref} variant="contained" color="success" onClick={bounce}>
          Click to Bounce!
        </Button>
      </Paper>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Bounce Animation Demo",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const card1 = useHoverScale({
      scale: 1.05
    });
    const card2 = useHoverScale({
      scale: 1.1
    });
    const card3 = useHoverScale({
      scale: 1.15
    });
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          🔍 Hover Scale
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Smooth scale transitions on hover
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card elevation={2} onMouseEnter={card1.onMouseEnter} onMouseLeave={card1.onMouseLeave} sx={card1.style}>
              <CardContent>
                <Typography variant="h6">Scale 1.05</Typography>
                <Typography variant="body2" color="text.secondary">
                  Subtle hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card elevation={2} onMouseEnter={card2.onMouseEnter} onMouseLeave={card2.onMouseLeave} sx={card2.style}>
              <CardContent>
                <Typography variant="h6">Scale 1.1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Medium hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card elevation={2} onMouseEnter={card3.onMouseEnter} onMouseLeave={card3.onMouseLeave} sx={card3.style}>
              <CardContent>
                <Typography variant="h6">Scale 1.15</Typography>
                <Typography variant="body2" color="text.secondary">
                  Strong hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Hover Scale Demo",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const pulseRef = usePulse<HTMLDivElement>({
      duration: 1000,
      scale: 1.05
    });
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          💓 Pulse Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Continuous pulsing for attention-grabbing elements
        </Typography>
        <Box display="flex" justifyContent="center" py={4}>
          <Paper ref={pulseRef} elevation={3} sx={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.main',
          color: 'primary.contrastText'
        }}>
            <Typography variant="h5" fontWeight="bold">
              Pulse
            </Typography>
          </Paper>
        </Box>
      </Paper>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Pulse Animation Demo",...b.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [bounceCount, setBounceCount] = useState(0);
    const [pulseCount, setPulseCount] = useState(5);
    return <Paper elevation={1} sx={{
      p: 3
    }}>
        <Typography variant="h6" gutterBottom>
          🔔 Animated Badge
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Badge with entrance animations and pulse effect
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Bounce on Change
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <AnimatedBadge badgeContent={bounceCount} color="error" animationVariant="bounce">
                <IconButton>
                  <span style={{
                  fontSize: 24
                }}>📧</span>
                </IconButton>
              </AnimatedBadge>
              <Button variant="outlined" onClick={() => setBounceCount(c => c + 1)}>
                Increment (+)
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Continuous Pulse
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <AnimatedBadge badgeContent={pulseCount} color="error" animationVariant="pulse">
                <IconButton>
                  <span style={{
                  fontSize: 24
                }}>🔔</span>
                </IconButton>
              </AnimatedBadge>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" onClick={() => setPulseCount(c => c + 1)}>
                  +
                </Button>
                <Button variant="outlined" onClick={() => setPulseCount(c => Math.max(0, c - 1))}>
                  -
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Paper>;
  }
}`,...B.parameters?.docs?.source},description:{story:"Animated Badge Demo",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Paper elevation={1} sx={{
    p: 3
  }}>
      <Typography variant="h6" gutterBottom>
        ⏳ Loading Dots
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Animated three-dot loading indicator
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Sizes
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Small
              </Typography>
              <LoadingDots size="small" />
            </Box>
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Medium
              </Typography>
              <LoadingDots size="medium" />
            </Box>
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Large
              </Typography>
              <LoadingDots size="large" />
            </Box>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Colors
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <LoadingDots color="primary" />
            <LoadingDots color="secondary" />
            <LoadingDots color="error" />
            <LoadingDots color="warning" />
            <LoadingDots color="info" />
            <LoadingDots color="success" />
          </Stack>
        </Box>
      </Stack>
    </Paper>
}`,...j.parameters?.docs?.source},description:{story:"Loading Dots Demo",...j.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      ref: shakeRef,
      shake
    } = useShake<HTMLDivElement>();
    const {
      ref: bounceRef,
      bounce
    } = useBounce<HTMLButtonElement>();
    const pulseRef = usePulse<HTMLDivElement>();
    const hoverScale = useHoverScale();
    const [badgeCount, setBadgeCount] = useState(3);
    return <Stack spacing={3}>
        <RippleEffect.render />
        <ShakeAnimation.render />
        <BounceAnimation.render />
        <HoverScale.render />
        <PulseAnimation.render />
        <AnimatedBadgeDemo.render />
        <LoadingDotsDemo.render />
      </Stack>;
  }
}`,...T.parameters?.docs?.source},description:{story:"All Interactions Demo",...T.parameters?.docs?.description}}};const rn=["RippleEffect","ShakeAnimation","BounceAnimation","HoverScale","PulseAnimation","AnimatedBadgeDemo","LoadingDotsDemo","AllInteractions"];export{T as AllInteractions,B as AnimatedBadgeDemo,f as BounceAnimation,v as HoverScale,j as LoadingDotsDemo,b as PulseAnimation,y as RippleEffect,x as ShakeAnimation,rn as __namedExportsOrder,tn as default};
