(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3257],{83970:function(e,t,s){Promise.resolve().then(s.bind(s,45137))},45137:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Y}});var a=s(57437),r=s(2265),i=function(e){let{active:t,text:s,Icon:r}=e;return(0,a.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),children:[(0,a.jsx)(r,{}),(0,a.jsx)("h2",{children:s})]})},n=s(63432),o=s(93224),c=s(35551),d=s(30894),l=s(46986),p=s(50281),_=s(24591),u=s.n(_),x=s(61396),h=s.n(x),g=function(){return(0,a.jsxs)("div",{className:u().sidebar,children:[(0,a.jsx)(h(),{href:"/Courses",children:(0,a.jsx)(i,{Icon:d.Z,text:"Courses"})}),(0,a.jsx)(h(),{href:"/Explore",children:(0,a.jsx)(i,{Icon:p.Z,text:"Explore"})}),(0,a.jsx)(h(),{href:"/Favorites",children:(0,a.jsx)(i,{Icon:l.Z,text:"Favorites"})}),(0,a.jsx)(h(),{href:"/Bookmarks",children:(0,a.jsx)(i,{Icon:n.Z,text:"Bookmarks"})}),(0,a.jsx)(h(),{href:"/Account",children:(0,a.jsx)(i,{Icon:o.Z,text:"Account"})}),(0,a.jsxs)(h(),{href:"/Ask",children:[(0,a.jsx)(c.Z,{variant:"outlined",className:u().sidebartweet,fullWidth:!0,children:"Ask / Answer"})," "]})]})},m=s(3283),j=s(78199);s(98003),s(24001);let f=j.Z.initializeApp({apiKey:"AIzaSyDDeQqelePMDOwcRq-eifUw6gkfQRUMpyQ",authDomain:"x3267-598e2.firebaseapp.com",projectId:"x3267-598e2",storageBucket:"x3267-598e2.appspot.com",messagingSenderId:"1082285561556",appId:"1:1082285561556:web:7fab449f55d91b5c5f0d41"}),w=f.firestore();var b=s(35843),v=s(52653),S=s(70380),k=s(82749);let A=(0,b.ZP)("input")({display:"none"});var Z=function(){let[e,t]=(0,r.useState)(""),[s,i]=(0,r.useState)(""),{data:n,status:o}=(0,k.useSession)();return(0,a.jsx)("div",{className:u().tweetBox,children:(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{className:u().tweetBox__input,children:[!n&&(0,a.jsx)(m.Z,{}),(0,a.jsx)("input",{class:"border-2 border-blue-600 rounded-lg  ",onChange:e=>t(e.target.value),value:e,placeholder:"  Ask ?",type:"text"})]}),(0,a.jsxs)("div",{className:u().w__i,children:[(0,a.jsx)("input",{className:(u().pick,u().tweetBox__imageInput),value:s,onChange:e=>i(e.target.value),placeholder:"Optional: Enter image URL",type:"text"}),(0,a.jsxs)("label",{className:u().pick2,htmlFor:"icon-button-file",children:[(0,a.jsx)(A,{accept:"image/*",id:"icon-button-file",type:"file"}),(0,a.jsx)(v.Z,{color:"primary","aria-label":"upload picture",component:"span",children:(0,a.jsx)(S.Z,{style:{color:"#1a73e8"}})})]})]}),(0,a.jsx)(c.Z,{onClick:a=>{a.preventDefault(),w.collection("ask").add({displayName:"You",text:e,image:s,avatar:""}),t(""),i("")},type:"submit",className:u().tweetBox__tweetButton,children:"Ask"})]})})},N=s(14565),y=s(40867),C=s(98075),B=s(27760),M=s(7216),E=s(25210);let I={inputProps:{"aria-label":"Checkbox demo"}},P=(0,r.forwardRef)((e,t)=>{let{displayName:s,username:r,verified:i,text:n,image:o,avatar:d,sendTweet:p}=e;return(0,a.jsxs)("div",{className:u().post,ref:t,children:[(0,a.jsx)("div",{className:u().post__avatar,children:(0,a.jsx)(m.Z,{src:d})}),(0,a.jsxs)("div",{className:u().post__body,children:[(0,a.jsxs)("div",{className:u().post__header,children:[(0,a.jsx)("div",{className:u().post__headerText,children:(0,a.jsxs)("h3",{children:[s,(0,a.jsxs)("span",{className:u().post__headerSpecial,children:[i&&(0,a.jsx)(N.Z,{className:u().post__badge}),r]})]})}),(0,a.jsx)("div",{className:u().post__headerDescription,children:(0,a.jsx)("p",{children:n})})]}),(0,a.jsx)("img",{src:o,alt:""}),(0,a.jsxs)("div",{className:u().post__footer,children:[(0,a.jsx)(E.Z,{href:"#",underline:"always",children:"see answers"}),(0,a.jsx)(C.Z,{spacing:1,children:(0,a.jsx)(y.Z,{name:"half-rating",defaultValue:2.5,precision:.5})}),(0,a.jsx)(B.Z,{...I,icon:(0,a.jsx)(l.Z,{}),checkedIcon:(0,a.jsx)(M.Z,{})}),(0,a.jsx)(c.Z,{onClick:p,type:"submit",className:u().t__t,children:"Answer"})]})]})]})});P.displayName="Ask1";var T=s(80346),O=function(){let[e,t]=(0,r.useState)([]);(0,r.useEffect)(()=>{w.collection("ask").onSnapshot(e=>t(e.docs.map(e=>e.data())))},[]);let{data:s,status:i}=(0,k.useSession)();return(0,a.jsx)("div",{className:u().feed,children:(0,a.jsx)(T.Z,{children:e.map(e=>(0,a.jsx)(P,{displayName:e.displayName,text:e.text,avatar:e.avatar,image:e.image},e.text))})})},D=s(74275),F=s.n(D),q=s(49932),R=s(41101),G=s(76500),J=s(19643),L=s(92277),W=s(43226),z=s(80432),H=s(39227);function Q(e){let{children:t,value:s,index:i,...n}=e,[o,c]=(0,r.useState)([]);return(0,r.useEffect)(()=>{w.collection("ask").onSnapshot(e=>c(e.docs.map(e=>e.data())))},[]),(0,a.jsx)(k.SessionProvider,{session:e.t,children:(0,a.jsx)(W.Z,{component:"div",role:"tabpanel",hidden:s!==i,id:"action-tabpanel-".concat(i),"aria-labelledby":"action-tab-".concat(i),...n,children:s===i&&(0,a.jsx)(H.Z,{sx:{p:3},children:t})})})}function V(e){return{id:"action-tab-".concat(e),"aria-controls":"action-tabpanel-".concat(e)}}function K(){let e=(0,R.Z)(),[t,s]=r.useState(0);return e.transitions.duration.enteringScreen,e.transitions.duration.leavingScreen,(0,a.jsxs)("div",{className:u().feed,children:[(0,a.jsx)("div",{className:u().feed__header,children:(0,a.jsx)(G.Z,{position:"static",color:"default",children:(0,a.jsxs)(J.Z,{value:t,onChange:(e,t)=>{s(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example",children:[(0,a.jsx)(L.Z,{label:"ask",...V(0)}),(0,a.jsx)(L.Z,{label:"answer",...V(1)})]})})}),(0,a.jsxs)(q.ZP,{axis:"rtl"===e.direction?"x-reverse":"x",index:t,onChangeIndex:e=>{s(e)},children:[(0,a.jsxs)(Q,{value:t,index:0,dir:e.direction,children:[(0,a.jsx)(Z,{}),(0,a.jsx)(O,{})]}),(0,a.jsx)(Q,{value:t,index:1,dir:e.direction,children:(0,a.jsx)(O,{})})]})]})}Q.propTypes={children:F().node,index:F().number.isRequired,value:F().number.isRequired},z.Z[500],z.Z[600];var U=s(85921),X=function(){return(0,a.jsx)("div",{className:u().widgets,children:(0,a.jsx)("div",{children:(0,a.jsx)(U.default,{})})})};function Y(){return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:u().void,children:[(0,a.jsx)(g,{}),(0,a.jsx)(K,{}),(0,a.jsx)(X,{})]})})}},85921:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var a=s(57437),r=s(2265),i=s(3283),n=s(35843),o=s(29872);s(61396);var c=s(82749),d=s(15133),l=s(26114),p=s(45461),_=s(52653),u=s(4856),x=s(11898),h=s(98075);function g(e){let[t,s]=r.useState(!1),[i,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{n(!0),setTimeout(()=>{n(!1)},1)},[]),(0,a.jsx)(c.SessionProvider,{session:e.t,children:i?(0,a.jsx)(h.Z,{spacing:1,children:(0,a.jsx)(x.Z,{variant:"rectangular",width:345,height:390})}):(0,a.jsxs)(d.Z,{sx:{maxWidth:345},children:[(0,a.jsx)(p.Z,{component:"img",height:"194",image:e.i,alt:e.t,width:100}),(0,a.jsx)(l.Z,{action:(0,a.jsx)(_.Z,{"aria-label":"settings",children:(0,a.jsx)(u.Z,{})}),avatar:e.a,x:e.t,title:e.n,subheader:e.d,subheader2:e.d})]})})}(0,n.ZP)(e=>{let{expand:t,...s}=e;return(0,a.jsx)(_.Z,{...s})})(e=>{let{theme:t,expand:s}=e;return{transform:s?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}});var m=s(60962),j=s.n(m);function f(){let e=e=>Math.floor(Math.random()*Math.floor(e));return Array.from(Array(10)).map(()=>b[e(b.length)])}function w(){let[e,t]=r.useState(0);r.useRef(null);let[s,i]=r.useState(()=>f());return r.useEffect(()=>{i(f())},[e,i]),(0,a.jsx)(a.Fragment,{children:s.map(e=>{let{a:t,url:s,n:r,d:i,i:n,t:o,p:c,pp:d}=e;return(0,a.jsxs)(a.Fragment,{children:["  ",(0,a.jsx)("div",{className:j().grid,children:(0,a.jsx)(g,{a:t,url:s,n:r,d:i,i:n,t:o,p:c,pp:d})})]})})})}(0,n.ZP)(o.Z)(e=>{let{theme:t}=e;return{...t.typography.body2,padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary}});let b=[{a:(0,a.jsx)(i.Z,{src:"https://pbs.twimg.com/media/FGb_8DzUcAU657a?format=png&name=small"}),url:"Code/Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://assets.codepen.io/14089/internal/screenshots/pens/ZEBYEOm.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1613843076&width=960",t:"Making Pizza By Pure CSS.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"/Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://i.ytimg.com/vi/0lynCRmkqqE/maxresdefault.jpg",t:"Making Buttons By Pure CSS.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg",t:"Making Custom Search Engine with JavaScript.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://programmersought.com/images/223/f67c50ffa91f72c2c125f8fea4a85d3f.JPEG",t:"Making Custom Loading Bar.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://codemyui.com/wp-content/uploads/2017/03/menu-button.gif",t:"Simple Hamburger Menu to X Mark Animation.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://i.ytimg.com/vi/68O6eOGAGqA/maxresdefault.jpg",t:"Making Grid.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://www.markuptag.com/wp-content/uploads/Simple-login-form-with-social-login-buttons-using-HTML-and-CSS.jpg",t:"Simple login form with social login buttons using HTML and CSS.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://i.ytimg.com/vi/52ZLjnTPPl4/maxresdefault.jpg",t:"Responsive Footer Design using CSS Flexbox.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg",t:"Making Custom Search Engine with JavaScript.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg",t:"Making Custom Search Engine with JavaScript.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg",t:"Making Custom Search Engine with JavaScript.",p:".",pp:"."},{a:(0,a.jsx)(i.Z,{src:"/img/logo.png"}),url:"Sourcecode",n:"Arrow Nap",d:"September 14, 2020",i:"https://codeastrology.com/wp-content/uploads/2019/04/Search-enginee-1-1200x700.jpg",t:"Making Custom Search Engine with JavaScript.",p:".",pp:"."}]},24591:function(e){e.exports={void:"Ask_void__caad0",sidebar1:"Ask_sidebar1__cLSyu",active:"Ask_active__nXK5s",sidebar__tweet1:"Ask_sidebar__tweet1__GVvNe",cc4:"Ask_cc4__7ChQO",sidebar:"Ask_sidebar__4xMd0",sidebartwitterIcon:"Ask_sidebartwitterIcon__tqVtR",sidebartweet:"Ask_sidebartweet__JhvYj",sidebartweets:"Ask_sidebartweets__oYWnf",feed:"Ask_feed__SVOQO",feed__header:"Ask_feed__header__3uQXw",t__t:"Ask_t__t__DzLNA",tweetBox:"Ask_tweetBox__jAfnW",tweetBox__input:"Ask_tweetBox__input__cS8Kt",tweetBox__imageInput:"Ask_tweetBox__imageInput__Gj99l",tweetBox__tweetButton:"Ask_tweetBox__tweetButton__NOJx5",post:"Ask_post__Vbd1z",post__body:"Ask_post__body__jWdI5",post__footer:"Ask_post__footer__WXbTa",post__headerDescription:"Ask_post__headerDescription__T1TMD",post__headerText:"Ask_post__headerText__5q9vv",post__badge:"Ask_post__badge__wHMTo",post__headerSpecial:"Ask_post__headerSpecial__HFvyT",post__avatar:"Ask_post__avatar__c78fy",w__i:"Ask_w__i__N4jmZ",pick:"Ask_pick__H0CVg",pick2:"Ask_pick2__KsgSd",widgets:"Ask_widgets__5NFAh",widgets__input:"Ask_widgets__input___TFab",widgets__searchIcon:"Ask_widgets__searchIcon___0pMe",widgets__widgetContainer:"Ask_widgets__widgetContainer__EXKbG"}},60962:function(e){e.exports={grid:"Code_grid__WG_79",body:"Code_body__nkeSB",icodev:"Code_icodev___M6Tp"}}},function(e){e.O(0,[4358,4214,8291,526,5476,9032,7479,6685,9622,756,889,5306,2971,596,1744],function(){return e(e.s=83970)}),_N_E=e.O()}]);