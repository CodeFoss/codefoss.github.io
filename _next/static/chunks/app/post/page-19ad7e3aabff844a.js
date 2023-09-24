(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4297],{69987:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(13428),r=n(20791);n(2265);var s=n(65059),o=n(53469),l=n(57437);let a=["theme"];function u(e){let{theme:t}=e,n=(0,r.Z)(e,a),u=t[o.Z];return(0,l.jsx)(s.Z,(0,i.Z)({},n,{themeId:u?o.Z:void 0,theme:u||t}))}},81909:function(e,t,n){"use strict";var i=n(2265);let r=i.createContext(null);t.Z=r},424:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(2265),r=n(81909);function s(){let e=i.useContext(r.Z);return e}},45536:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}}),n(2265);var i=n(99538),r=n(57437);function s(e){let{styles:t,defaultTheme:n={}}=e,s="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t;return(0,r.jsx)(i.xB,{styles:s})}},37014:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(20791),r=n(13428),s=n(2265),o=n(57042),l=n(61380),a=n(25702),u=n(95600),c=n(48153),d=n(39190),m=n(27796),h=n(57437);let x=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,m.Z)(),Z=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),p=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:f}),j=(e,t)=>{let{classes:n,fixed:i,disableGutters:r,maxWidth:s}=e,o={root:["root",s&&`maxWidth${(0,l.Z)(String(s))}`,i&&"fixed",r&&"disableGutters"]};return(0,u.Z)(o,e=>(0,a.Z)(t,e),n)};function v(e={}){let{createStyledComponent:t=Z,useThemeProps:n=p,componentName:l="MuiContainer"}=e,a=t(({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let i=e.breakpoints.values[n];return 0!==i&&(t[e.breakpoints.up(n)]={maxWidth:`${i}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),u=s.forwardRef(function(e,t){let s=n(e),{className:u,component:c="div",disableGutters:d=!1,fixed:m=!1,maxWidth:f="lg"}=s,Z=(0,i.Z)(s,x),p=(0,r.Z)({},s,{component:c,disableGutters:d,fixed:m,maxWidth:f}),v=j(p,l);return(0,h.jsx)(a,(0,r.Z)({as:c,ownerState:p,className:(0,o.Z)(v.root,u),ref:t},Z))});return u}},65474:function(e,t,n){"use strict";n(2265);var i=n(45536),r=n(95270),s=n(57437);t.Z=function({styles:e,themeId:t,defaultTheme:n={}}){let o=(0,r.Z)(n),l="function"==typeof e?e(t&&o[t]||o):e;return(0,s.jsx)(i.Z,{styles:l})}},47878:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var i=n(20791),r=n(13428),s=n(2265),o=n(57042),l=n(15959),a=n(95600),u=n(25702),c=n(39190),d=n(48153),m=n(43381),h=n(27796),x=n(65425),f=n(47508),Z=n(57437);let p=["component","direction","spacing","divider","children","className","useFlexGap"],j=(0,h.Z)(),v=(0,c.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:j})}let g=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],y=({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex",flexDirection:"column"},(0,x.k9)({theme:t},(0,x.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let i=(0,f.hB)(t),r=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),s=(0,x.P$)({values:e.direction,base:r}),o=(0,x.P$)({values:e.spacing,base:r});"object"==typeof s&&Object.keys(s).forEach((e,t,n)=>{let i=s[e];if(!i){let i=t>0?s[n[t-1]]:"column";s[e]=i}}),n=(0,l.Z)(n,(0,x.k9)({theme:t},o,(t,n)=>e.useFlexGap?{gap:(0,f.NA)(i,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${g(n?s[n]:e.direction)}`]:(0,f.NA)(i,t)}}))}return(0,x.dt)(t.breakpoints,n)};function k(e={}){let{createStyledComponent:t=v,useThemeProps:n=b,componentName:l="MuiStack"}=e,c=()=>(0,a.Z)({root:["root"]},e=>(0,u.Z)(l,e),{}),d=t(y),h=s.forwardRef(function(e,t){let l=n(e),a=(0,m.Z)(l),{component:u="div",direction:h="column",spacing:x=0,divider:f,children:j,className:v,useFlexGap:b=!1}=a,g=(0,i.Z)(a,p),y=c();return(0,Z.jsx)(d,(0,r.Z)({as:u,ownerState:{direction:h,spacing:x,useFlexGap:b},ref:t,className:(0,o.Z)(y.root,v)},g,{children:f?function(e,t){let n=s.Children.toArray(e).filter(Boolean);return n.reduce((e,i,r)=>(e.push(i),r<n.length-1&&e.push(s.cloneElement(t,{key:`separator-${r}`})),e),[])}(j,f):j}))});return h}},65059:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(13428),r=n(2265),s=n(424),o=n(81909);let l="function"==typeof Symbol&&Symbol.for;var a=l?Symbol.for("mui.nested"):"__THEME_NESTED__",u=n(57437),c=function(e){let{children:t,theme:n}=e,l=(0,s.Z)(),c=r.useMemo(()=>{let e=null===l?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return(0,i.Z)({},e,t)}(l,n);return null!=e&&(e[a]=null!==l),e},[n,l]);return(0,u.jsx)(o.Z.Provider,{value:c,children:t})},d=n(86375),m=n(44809);let h={};function x(e,t,n,s=!1){return r.useMemo(()=>{let r=e&&t[e]||t;if("function"==typeof n){let o=n(r),l=e?(0,i.Z)({},t,{[e]:o}):o;return s?()=>l:l}return e?(0,i.Z)({},t,{[e]:n}):(0,i.Z)({},t,n)},[e,t,n,s])}var f=function(e){let{children:t,theme:n,themeId:i}=e,r=(0,m.Z)(h),o=(0,s.Z)()||h,l=x(i,r,n),a=x(i,o,n,!0);return(0,u.jsx)(c,{theme:a,children:(0,u.jsx)(d.T.Provider,{value:l,children:t})})}},28480:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(13428),r=n(20791),s=n(2265),o=n(57042),l=n(69613),a=n(87947),u=n(43381),c=n(95270),d=n(57437);let m=["className","component"];function h(e={}){let{themeId:t,defaultTheme:n,defaultClassName:h="MuiBox-root",generateClassName:x}=e,f=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(a.Z),Z=s.forwardRef(function(e,s){let l=(0,c.Z)(n),a=(0,u.Z)(e),{className:Z,component:p="div"}=a,j=(0,r.Z)(a,m);return(0,d.jsx)(f,(0,i.Z)({as:p,ref:s,className:(0,o.Z)(Z,x?x(h):h),theme:t&&l[t]||l},j))});return Z}},39190:function(e,t,n){"use strict";var i=n(61047);let r=(0,i.ZP)();t.Z=r},60878:function(e,t,n){"use strict";function i(e){let t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}n.d(t,{Z:function(){return i}})},79134:function(e,t,n){Promise.resolve().then(n.bind(n,90626))},90626:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(57437),r=n(2265),s=n(3857),o=n(76500),l=n(39227),a=n(63955),u=n(34989),c=n(29872),d=n(326),m=n(17668),h=n(95631),x=n(49050),f=n(25210),Z=n(43226),p=n(60890),j=n(69987),v=n(28874),b=n(66304);function g(){return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(Z.Z,{variant:"h6",gutterBottom:!0,children:"Project"}),(0,i.jsx)(b.Z,{id:"outlined-basic",label:"Outlined",variant:"outlined"}),(0,i.jsxs)(v.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{required:!0,id:"address1",name:"address1",label:"Project Name",autoComplete:"shipping address-line1",variant:"outlined"})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{id:"outlined-multiline-static",label:"Description",multiline:!0,fullWidth:!0,rows:4,defaultValue:"Write something about your project."})})]})]})}var y=n(40182),k=n(27760);function w(){return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(Z.Z,{variant:"h6",gutterBottom:!0,children:"You"}),(0,i.jsxs)(v.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(b.Z,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name",variant:"standard"})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(b.Z,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name",variant:"standard"})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{required:!0,id:"address1",name:"address1",label:"e-mail",fullWidth:!0,autoComplete:"shipping address-line1",variant:"standard"})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(y.Z,{control:(0,i.jsx)(k.Z,{color:"primary",name:"saveCard",value:"yes"}),label:"Send notifications on my email"})})]})]})}function P(){return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(Z.Z,{variant:"h6",gutterBottom:!0,children:"Code"}),(0,i.jsxs)(v.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{id:"outlined-multiline-static",label:"<HTML/>","font-size":"1px",multiline:!0,fullWidth:!0,rows:4,defaultValue:"<html> <head> <title>codnap</title> </head> <body>  </body> </html>    "})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{id:"outlined-multiline-static",label:".CSS",multiline:!0,fullWidth:!0,rows:4,defaultValue:"body { background-color: blue; }"})}),(0,i.jsx)(v.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{id:"outlined-multiline-static",label:"JS",multiline:!0,fullWidth:!0,rows:4,defaultValue:"//JavaScript"})})]})]})}function W(){return(0,i.jsxs)(Z.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,i.jsx)(f.Z,{color:"inherit",href:"/",children:"codnap      "})," ",new Date().getFullYear(),"."]})}let C=["Post Details","Your Details","Write Code"],N=(0,p.Z)();function S(){let[e,t]=r.useState(0);return(0,i.jsxs)(j.Z,{theme:N,children:[(0,i.jsx)(s.ZP,{}),(0,i.jsx)(o.Z,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:(0,i.jsx)(u.Z,{children:(0,i.jsx)(Z.Z,{variant:"h6",color:"inherit",noWrap:!0,children:"Arrow Nap"})})}),(0,i.jsxs)(a.Z,{component:"main",maxWidth:"sm",sx:{mb:4},children:[(0,i.jsxs)(c.Z,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[(0,i.jsx)(Z.Z,{component:"h1",variant:"h4",align:"center",children:"Post"}),(0,i.jsx)(d.Z,{activeStep:e,sx:{pt:3,pb:5},children:C.map(e=>(0,i.jsx)(m.Z,{children:(0,i.jsx)(h.Z,{children:e})},e))}),(0,i.jsx)(r.Fragment,{children:e===C.length?(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(Z.Z,{variant:"h5",gutterBottom:!0,children:"Thank you."}),(0,i.jsx)(Z.Z,{variant:"subtitle1",children:"Your post will be published within 64-100 hours. your post will go through different processes, such as scanning for viruses, any abusive words, etc. Note: if it interferes with any process, your post will not be uploaded."})]}):(0,i.jsxs)(r.Fragment,{children:[function(e){switch(e){case 0:return(0,i.jsx)(g,{});case 1:return(0,i.jsx)(w,{});case 2:return(0,i.jsx)(P,{});default:throw Error("Unknown step")}}(e),(0,i.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:[0!==e&&(0,i.jsx)(x.Z,{onClick:()=>{t(e-1)},sx:{mt:3,ml:1},children:"Back"}),(0,i.jsx)(x.Z,{variant:"contained",onClick:()=>{t(e+1)},sx:{mt:3,ml:1},children:e===C.length-1?"Post":"Next"})]})]})})]}),(0,i.jsx)(W,{})]})]})}}},function(e){e.O(0,[8291,526,2508,9032,5046,3932,8874,6304,7741,2057,2971,7864,1744],function(){return e(e.s=79134)}),_N_E=e.O()}]);