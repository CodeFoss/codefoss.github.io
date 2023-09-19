(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1368],{3860:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var o=n(56339),r=n(28973),i=n(65403),a=n(33501),s=n(21976),l=n(7811),d=n(56918),c=n(23483),u=n(13606),p=n(56173),h=n(860),m=n(49940),v=n(92905);function g(e){return(0,v.Z)("MuiButton",e)}let x=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=i.createContext({}),Z=i.createContext(void 0);var b=n(7062);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:t,disableElevation:n,fullWidth:o,size:i,variant:a,classes:s}=e,d={root:["root",a,`${a}${(0,h.Z)(t)}`,`size${(0,h.Z)(i)}`,`${a}Size${(0,h.Z)(i)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(i)}`]},c=(0,l.Z)(d,g,s);return(0,r.Z)({},s,c)},z=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,h.Z)(n.color)}`],t[`size${(0,h.Z)(n.size)}`],t[`${n.variant}Size${(0,h.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,o;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],a="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:a,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,r.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(o=e.palette).getContrastText)?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),C=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},z(e))),$=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})(({ownerState:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},z(e))),R=i.forwardRef(function(e,t){let n=i.useContext(f),l=i.useContext(Z),d=(0,s.Z)(n,e),c=(0,u.Z)({props:d,name:"MuiButton"}),{children:p,color:h="primary",component:m="button",className:v,disabled:g=!1,disableElevation:x=!1,disableFocusRipple:z=!1,endIcon:R,focusVisibleClassName:j,fullWidth:k=!1,size:I="medium",startIcon:E,type:M,variant:P="text"}=c,N=(0,o.Z)(c,y),T=(0,r.Z)({},c,{color:h,component:m,disabled:g,disableElevation:x,disableFocusRipple:z,fullWidth:k,size:I,type:M,variant:P}),W=S(T),B=E&&(0,b.jsx)(C,{className:W.startIcon,ownerState:T,children:E}),L=R&&(0,b.jsx)($,{className:W.endIcon,ownerState:T,children:R}),A=l||"";return(0,b.jsxs)(w,(0,r.Z)({ownerState:T,className:(0,a.Z)(n.className,W.root,v,A),component:m,disabled:g,focusRipple:!z,focusVisibleClassName:(0,a.Z)(W.focusVisible,j),ref:t,type:M},N,{classes:W,children:[B,p,L]}))});var j=R},60076:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(56339),r=n(28973),i=n(65403),a=n(33501),s=n(7811),l=n(23483),d=n(13606),c=n(49940),u=n(92905);function p(e){return(0,u.Z)("MuiCardActions",e)}(0,c.Z)("MuiCardActions",["root","spacing"]);var h=n(7062);let m=["disableSpacing","className"],v=e=>{let{classes:t,disableSpacing:n}=e;return(0,s.Z)({root:["root",!n&&"spacing"]},p,t)},g=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),x=i.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:i=!1,className:s}=n,l=(0,o.Z)(n,m),c=(0,r.Z)({},n,{disableSpacing:i}),u=v(c);return(0,h.jsx)(g,(0,r.Z)({className:(0,a.Z)(u.root,s),ownerState:c,ref:t},l))});var f=x},65587:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(28973),r=n(56339),i=n(65403),a=n(33501),s=n(7811),l=n(23483),d=n(13606),c=n(49940),u=n(92905);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var h=n(7062);let m=["className","component"],v=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)},g=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),x=i.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=n,l=(0,r.Z)(n,m),c=(0,o.Z)({},n,{component:s}),u=v(c);return(0,h.jsx)(g,(0,o.Z)({as:s,className:(0,a.Z)(u.root,i),ownerState:c,ref:t},l))});var f=x},62380:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var o=n(56339),r=n(28973),i=n(65403),a=n(33501),s=n(15101),l=n(7811),d=n(23483),c=n(13606),u=n(84589),p=n(81283),h=n(98313),m=n(58804),v=n(49940),g=n(92905);function x(e){return(0,g.Z)("MuiCollapse",e)}(0,v.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var f=n(7062);let Z=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],b=e=>{let{orientation:t,classes:n}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,l.Z)(o,x,n)},y=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})(({theme:e,ownerState:t})=>(0,r.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,r.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})),S=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>(0,r.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),z=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>(0,r.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),w=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCollapse"}),{addEndListener:l,children:d,className:v,collapsedSize:g="0px",component:x,easing:w,in:C,onEnter:$,onEntered:R,onEntering:j,onExit:k,onExited:I,onExiting:E,orientation:M="vertical",style:P,timeout:N=u.x9.standard,TransitionComponent:T=s.ZP}=n,W=(0,o.Z)(n,Z),B=(0,r.Z)({},n,{orientation:M,collapsedSize:g}),L=b(B),A=(0,h.Z)(),O=i.useRef(),D=i.useRef(null),F=i.useRef(),_="number"==typeof g?`${g}px`:g,H="horizontal"===M,V=H?"width":"height";i.useEffect(()=>()=>{clearTimeout(O.current)},[]);let q=i.useRef(null),G=(0,m.Z)(t,q),J=e=>t=>{if(e){let n=q.current;void 0===t?e(n):e(n,t)}},K=()=>D.current?D.current[H?"clientWidth":"clientHeight"]:0,Q=J((e,t)=>{D.current&&H&&(D.current.style.position="absolute"),e.style[V]=_,$&&$(e,t)}),U=J((e,t)=>{let n=K();D.current&&H&&(D.current.style.position="");let{duration:o,easing:r}=(0,p.C)({style:P,timeout:N,easing:w},{mode:"enter"});if("auto"===N){let t=A.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,F.current=t}else e.style.transitionDuration="string"==typeof o?o:`${o}ms`;e.style[V]=`${n}px`,e.style.transitionTimingFunction=r,j&&j(e,t)}),X=J((e,t)=>{e.style[V]="auto",R&&R(e,t)}),Y=J(e=>{e.style[V]=`${K()}px`,k&&k(e)}),ee=J(I),et=J(e=>{let t=K(),{duration:n,easing:o}=(0,p.C)({style:P,timeout:N,easing:w},{mode:"exit"});if("auto"===N){let n=A.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,F.current=n}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[V]=_,e.style.transitionTimingFunction=o,E&&E(e)});return(0,f.jsx)(T,(0,r.Z)({in:C,onEnter:Q,onEntered:X,onEntering:U,onExit:Y,onExited:ee,onExiting:et,addEndListener:e=>{"auto"===N&&(O.current=setTimeout(e,F.current||0)),l&&l(q.current,e)},nodeRef:q,timeout:"auto"===N?null:N},W,{children:(e,t)=>(0,f.jsx)(y,(0,r.Z)({as:x,className:(0,a.Z)(L.root,v,{entered:L.entered,exited:!C&&"0px"===_&&L.hidden}[e]),style:(0,r.Z)({[H?"minWidth":"minHeight"]:_},P),ownerState:(0,r.Z)({},B,{state:e}),ref:G},t,{children:(0,f.jsx)(S,{ownerState:(0,r.Z)({},B,{state:e}),className:L.wrapper,ref:D,children:(0,f.jsx)(z,{ownerState:(0,r.Z)({},B,{state:e}),className:L.wrapperInner,children:d})})}))}))});w.muiSupportAuto=!0;var C=w},88303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(68833).unstable_capitalize;t.default=o},98313:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}}),n(65403);var o=n(26526),r=n(44888),i=n(2323);function a(){let e=(0,o.Z)(r.Z);return e[i.Z]||e}},81283:function(e,t,n){"use strict";n.d(t,{C:function(){return r},n:function(){return o}});let o=e=>e.scrollTop;function r(e,t){var n,o;let{timeout:r,easing:i,style:a={}}=e;return{duration:null!=(n=a.transitionDuration)?n:"number"==typeof r?r:r[t.mode]||0,easing:null!=(o=a.transitionTimingFunction)?o:"object"==typeof i?i[t.mode]:i,delay:a.transitionDelay}}},51148:function(e,t,n){Promise.resolve().then(n.bind(n,92632)),Promise.resolve().then(n.t.bind(n,93712,23)),Promise.resolve().then(n.t.bind(n,89118,23)),Promise.resolve().then(n.t.bind(n,85910,23)),Promise.resolve().then(n.bind(n,42585))},92632:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(7062),r=n(65403),i=n(23483),a=n(27607),s=n(20388),l=n(53687),d=n(65587),c=n(60076),u=n(62380),p=n(48034),h=n(31820),m=n(41090),v=n(92756),g=n(10658),x=n(3860);function f(){let[e,t]=r.useState(!1);return(0,o.jsxs)(a.Z,{sx:{maxWidth:345},children:[(0,o.jsx)(s.Z,{avatar:(0,o.jsx)(p.Z,{sx:{bgcolor:v.Z[500]},"aria-label":"recipe",children:"k"}),action:(0,o.jsx)(h.Z,{"aria-label":"settings",children:(0,o.jsx)(g.Z,{})}),title:"ksingh",subheader:"nextjs developer."}),(0,o.jsx)(l.Z,{component:"img",height:"194",image:"/static/images/cards/paella.jpg",alt:"Paella dish"}),(0,o.jsx)(d.Z,{children:(0,o.jsx)(m.Z,{variant:"body2",color:"text.secondary",children:"Hey i am a nextjs developer, i hav"})}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(x.Z,{size:"small",children:"follow"}),(0,o.jsx)(x.Z,{size:"small",children:"Learn More"})]}),(0,o.jsx)(u.Z,{in:e,timeout:"auto",unmountOnExit:!0,children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(m.Z,{paragraph:!0,children:"Method:"}),(0,o.jsx)(m.Z,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),(0,o.jsx)(m.Z,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),(0,o.jsx)(m.Z,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)"}),(0,o.jsx)(m.Z,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})}(0,i.ZP)(e=>{let{expand:t,...n}=e;return(0,o.jsx)(h.Z,{...n})})(e=>{let{theme:t,expand:n}=e;return{transform:n?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})}},function(e){e.O(0,[8152,7501,8819,5789,8438,2381,5253,7081,4092,3133,5232,7261,1744],function(){return e(e.s=51148)}),_N_E=e.O()}]);