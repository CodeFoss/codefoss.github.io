"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3984],{10238:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(87462),o=n(28442);function i(e,t={},n){return(0,o.Z)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}},83984:function(e,t,n){n.d(t,{Z:function(){return Je}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(27192),p=n(10238),c=n(41796),l=n(11496),u=n(2734),f=n(71657),d=n(98216),m=n(96514),h=n(30067),v=n(16600),g=n(57094);function y(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function b(e){return e instanceof y(e).Element||e instanceof Element}function w(e){return e instanceof y(e).HTMLElement||e instanceof HTMLElement}function x(e){return"undefined"!==typeof ShadowRoot&&(e instanceof y(e).ShadowRoot||e instanceof ShadowRoot)}var O=Math.max,T=Math.min,Z=Math.round;function R(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(w(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=Z(n.width)/a||1),i>0&&(o=Z(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function E(e){var t=y(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function P(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){return((b(e)?e.ownerDocument:e.document)||window.document).documentElement}function M(e){return R(j(e)).left+E(e).scrollLeft}function k(e){return y(e).getComputedStyle(e)}function D(e){var t=k(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function L(e,t,n){void 0===n&&(n=!1);var r=w(t),o=w(t)&&function(e){var t=e.getBoundingClientRect(),n=Z(t.width)/e.offsetWidth||1,r=Z(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=j(t),a=R(e,o),s={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(r||!r&&!n)&&(("body"!==P(t)||D(i))&&(s=function(e){return e!==y(e)&&w(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:E(e);var t}(t)),w(t)?((p=R(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=M(i))),{x:a.left+s.scrollLeft-p.x,y:a.top+s.scrollTop-p.y,width:a.width,height:a.height}}function A(e){var t=R(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function S(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||j(e)}function C(e){return["html","body","#document"].indexOf(P(e))>=0?e.ownerDocument.body:w(e)&&D(e)?e:C(S(e))}function W(e,t){var n;void 0===t&&(t=[]);var r=C(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=y(r),a=o?[i].concat(i.visualViewport||[],D(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(W(S(a)))}function B(e){return["table","td","th"].indexOf(P(e))>=0}function N(e){return w(e)&&"fixed"!==k(e).position?e.offsetParent:null}function H(e){for(var t=y(e),n=N(e);n&&B(n)&&"static"===k(n).position;)n=N(n);return n&&("html"===P(n)||"body"===P(n)&&"static"===k(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&w(e)&&"fixed"===k(e).position)return null;for(var n=S(e);w(n)&&["html","body"].indexOf(P(n))<0;){var r=k(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var I="top",F="bottom",q="right",V="left",U="auto",$=[I,F,q,V],z="start",_="end",X="viewport",Y="popper",G=$.reduce((function(e,t){return e.concat([t+"-"+z,t+"-"+_])}),[]),J=[].concat($,[U]).reduce((function(e,t){return e.concat([t,t+"-"+z,t+"-"+_])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function ee(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var te={placement:"bottom",modifiers:[],strategy:"absolute"};function ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function re(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?te:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,p={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:b(e)?W(e):e.contextElement?W(e.contextElement):[],popper:W(t)};var l=function(e){var t=Q(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:p,options:r}),c=function(){};a.push(s||c)}})),p.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(ne(t,n)){o.rects={reference:L(t,H(n),"fixed"===o.options.strategy),popper:A(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,l=void 0===c?{}:c,u=i.name;"function"===typeof a&&(o=a({state:o,options:l,name:u,instance:p})||o)}else o.reset=!1,r=-1}}},update:ee((function(){return new Promise((function(e){p.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!ne(e,t))return p;function c(){a.forEach((function(e){return e()})),a=[]}return p.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var oe={passive:!0};function ie(e){return e.split("-")[0]}function ae(e){return e.split("-")[1]}function se(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?ie(o):null,a=o?ae(o):null,s=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(i){case I:t={x:s,y:n.y-r.height};break;case F:t={x:s,y:n.y+n.height};break;case q:t={x:n.x+n.width,y:p};break;case V:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var c=i?se(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case z:t[c]=t[c]-(n[l]/2-r[l]/2);break;case _:t[c]=t[c]+(n[l]/2-r[l]/2)}}return t}var ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function le(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,p=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof l?l({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=V,x=I,O=window;if(c){var T=H(n),R="clientHeight",E="clientWidth";if(T===y(n)&&"static"!==k(T=j(n)).position&&"absolute"===s&&(R="scrollHeight",E="scrollWidth"),T=T,o===I||(o===V||o===q)&&i===_)x=F,h-=(u&&O.visualViewport?O.visualViewport.height:T[R])-r.height,h*=p?1:-1;if(o===V||(o===I||o===F)&&i===_)w=q,d-=(u&&O.visualViewport?O.visualViewport.width:T[E])-r.width,d*=p?1:-1}var P,M=Object.assign({position:s},c&&ce),D=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Z(t*r)/r||0,y:Z(n*r)/r||0}}({x:d,y:h}):{x:d,y:h};return d=D.x,h=D.y,p?Object.assign({},M,((P={})[x]=b?"0":"",P[w]=g?"0":"",P.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",P)):Object.assign({},M,((t={})[x]=b?h+"px":"",t[w]=g?d+"px":"",t.transform="",t))}var ue={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return ue[e]}))}var de={start:"end",end:"start"};function me(e){return e.replace(/start|end/g,(function(e){return de[e]}))}function he(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&x(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ge(e,t){return t===X?ve(function(e){var t=y(e),n=j(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+M(e),y:s}}(e)):b(t)?function(e){var t=R(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ve(function(e){var t,n=j(e),r=E(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=O(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=O(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+M(e),p=-r.scrollTop;return"rtl"===k(o||n).direction&&(s+=O(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:p}}(j(e)))}function ye(e,t,n){var r="clippingParents"===t?function(e){var t=W(S(e)),n=["absolute","fixed"].indexOf(k(e).position)>=0&&w(e)?H(e):e;return b(n)?t.filter((function(e){return b(e)&&he(e,n)&&"body"!==P(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ge(e,n);return t.top=O(r.top,t.top),t.right=T(r.right,t.right),t.bottom=T(r.bottom,t.bottom),t.left=O(r.left,t.left),t}),ge(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function be(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function we(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function xe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,p=void 0===s?X:s,c=n.elementContext,l=void 0===c?Y:c,u=n.altBoundary,f=void 0!==u&&u,d=n.padding,m=void 0===d?0:d,h=be("number"!==typeof m?m:we(m,$)),v=l===Y?"reference":Y,g=e.rects.popper,y=e.elements[f?v:l],w=ye(b(y)?y:y.contextElement||j(e.elements.popper),a,p),x=R(e.elements.reference),O=pe({reference:x,element:g,strategy:"absolute",placement:o}),T=ve(Object.assign({},g,O)),Z=l===Y?T:x,E={top:w.top-Z.top+h.top,bottom:Z.bottom-w.bottom+h.bottom,left:w.left-Z.left+h.left,right:Z.right-w.right+h.right},P=e.modifiersData.offset;if(l===Y&&P){var M=P[o];Object.keys(E).forEach((function(e){var t=[q,F].indexOf(e)>=0?1:-1,n=[I,F].indexOf(e)>=0?"y":"x";E[e]+=M[n]*t}))}return E}function Oe(e,t,n){return O(e,T(t,n))}function Te(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ze(e){return[I,q,F,V].some((function(t){return e[t]>=0}))}var Re=re({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,p=y(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,oe)})),s&&p.addEventListener("resize",n.update,oe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,oe)})),s&&p.removeEventListener("resize",n.update,oe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,p=void 0===s||s,c={placement:ie(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,le(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,le(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];w(o)&&P(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});w(r)&&P(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=J.reduce((function(e,n){return e[n]=function(e,t,n){var r=ie(e),o=[V,I].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[V,q].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],p=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,p=n.fallbackPlacements,c=n.padding,l=n.boundary,u=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=ie(v),y=p||(g===v||!m?[fe(v)]:function(e){if(ie(e)===U)return[];var t=fe(e);return[me(e),t,me(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(ie(n)===U?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,p=n.allowedAutoPlacements,c=void 0===p?J:p,l=ae(r),u=l?s?G:G.filter((function(e){return ae(e)===l})):$,f=u.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,n){return t[n]=xe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[ie(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:l,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,T=!0,Z=b[0],R=0;R<b.length;R++){var E=b[R],P=ie(E),j=ae(E)===z,M=[I,F].indexOf(P)>=0,k=M?"width":"height",D=xe(t,{placement:E,boundary:l,rootBoundary:u,altBoundary:f,padding:c}),L=M?j?q:V:j?F:I;w[k]>x[k]&&(L=fe(L));var A=fe(L),S=[];if(i&&S.push(D[P]<=0),s&&S.push(D[L]<=0,D[A]<=0),S.every((function(e){return e}))){Z=E,T=!1;break}O.set(E,S)}if(T)for(var C=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return Z=t,"break"},W=m?3:1;W>0;W--){if("break"===C(W))break}t.placement!==Z&&(t.modifiersData[r]._skip=!0,t.placement=Z,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,p=n.boundary,c=n.rootBoundary,l=n.altBoundary,u=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=xe(t,{boundary:p,rootBoundary:c,padding:u,altBoundary:l}),g=ie(t.placement),y=ae(t.placement),b=!y,w=se(g),x="x"===w?"y":"x",Z=t.modifiersData.popperOffsets,R=t.rects.reference,E=t.rects.popper,P="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,j="number"===typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(Z){if(i){var D,L="y"===w?I:V,S="y"===w?F:q,C="y"===w?"height":"width",W=Z[w],B=W+v[L],N=W-v[S],U=d?-E[C]/2:0,$=y===z?R[C]:E[C],_=y===z?-E[C]:-R[C],X=t.elements.arrow,Y=d&&X?A(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[L],K=G[S],Q=Oe(0,R[C],Y[C]),ee=b?R[C]/2-U-Q-J-j.mainAxis:$-Q-J-j.mainAxis,te=b?-R[C]/2+U+Q+K+j.mainAxis:_+Q+K+j.mainAxis,ne=t.elements.arrow&&H(t.elements.arrow),re=ne?"y"===w?ne.clientTop||0:ne.clientLeft||0:0,oe=null!=(D=null==M?void 0:M[w])?D:0,pe=W+te-oe,ce=Oe(d?T(B,W+ee-oe-re):B,W,d?O(N,pe):N);Z[w]=ce,k[w]=ce-W}if(s){var le,ue="x"===w?I:V,fe="x"===w?F:q,de=Z[x],me="y"===x?"height":"width",he=de+v[ue],ve=de-v[fe],ge=-1!==[I,V].indexOf(g),ye=null!=(le=null==M?void 0:M[x])?le:0,be=ge?he:de-R[me]-E[me]-ye+j.altAxis,we=ge?de+R[me]+E[me]-ye-j.altAxis:ve,Te=d&&ge?function(e,t,n){var r=Oe(e,t,n);return r>n?n:r}(be,de,we):Oe(d?be:he,de,d?we:ve);Z[x]=Te,k[x]=Te-de}t.modifiersData[r]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ie(n.placement),p=se(s),c=[V,q].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return be("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:we(e,$))}(o.padding,n),u=A(i),f="y"===p?I:V,d="y"===p?F:q,m=n.rects.reference[c]+n.rects.reference[p]-a[p]-n.rects.popper[c],h=a[p]-n.rects.reference[p],v=H(i),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=l[f],w=g-u[c]-l[d],x=g/2-u[c]/2+y,O=Oe(b,x,w),T=p;n.modifiersData[r]=((t={})[T]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&he(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=xe(t,{elementContext:"reference"}),s=xe(t,{altBoundary:!0}),p=Te(a,r),c=Te(s,o,i),l=Ze(p),u=Ze(c);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}),Ee=n(78385),Pe=n(85893);const je=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],Me=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function ke(e){return"function"===typeof e?e():e}const De={},Le=i.forwardRef((function(e,t){const{anchorEl:n,children:a,direction:s,disablePortal:p,modifiers:c,open:l,placement:u,popperOptions:f,popperRef:d,TransitionProps:m}=e,g=(0,r.Z)(e,je),y=i.useRef(null),b=(0,h.Z)(y,t),w=i.useRef(null),x=(0,h.Z)(w,d),O=i.useRef(x);(0,v.Z)((()=>{O.current=x}),[x]),i.useImperativeHandle(d,(()=>w.current),[]);const T=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(u,s),[Z,R]=i.useState(T);i.useEffect((()=>{w.current&&w.current.forceUpdate()})),(0,v.Z)((()=>{if(!n||!l)return;ke(n);let e=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{R(e.placement)}}];null!=c&&(e=e.concat(c)),f&&null!=f.modifiers&&(e=e.concat(f.modifiers));const t=Re(ke(n),y.current,(0,o.Z)({placement:T},f,{modifiers:e}));return O.current(t),()=>{t.destroy(),O.current(null)}}),[n,p,c,l,f,T]);const E={placement:Z};return null!==m&&(E.TransitionProps=m),(0,Pe.jsx)("div",(0,o.Z)({ref:b,role:"tooltip"},g,{children:"function"===typeof a?a(E):a}))}));var Ae=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:p="ltr",disablePortal:c=!1,keepMounted:l=!1,modifiers:u,open:f,placement:d="bottom",popperOptions:m=De,popperRef:h,style:v,transition:y=!1}=e,b=(0,r.Z)(e,Me),[w,x]=i.useState(!0);if(!l&&!f&&(!y||w))return null;const O=s||(n?(0,g.Z)(ke(n)).body:void 0);return(0,Pe.jsx)(Ee.Z,{disablePortal:c,container:O,children:(0,Pe.jsx)(Le,(0,o.Z)({anchorEl:n,direction:p,disablePortal:c,modifiers:u,ref:t,open:y?!w:f,placement:d,popperOptions:m,popperRef:h},b,{style:(0,o.Z)({position:"fixed",top:0,left:0,display:f||!l||y&&!w?null:"none"},v),TransitionProps:y?{in:f,onEnter:()=>{x(!1)},onExited:()=>{x(!0)}}:null,children:a}))})})),Se=n(34168);var Ce=i.forwardRef((function(e,t){const n=(0,Se.Z)();return(0,Pe.jsx)(Ae,(0,o.Z)({direction:null==n?void 0:n.direction},e,{ref:t}))})),We=n(2068),Be=n(51705),Ne=n(27909),He=n(18791),Ie=n(49299),Fe=n(28979);function qe(e){return(0,Fe.Z)("MuiTooltip",e)}var Ve=(0,n(76087).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);const Ue=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];const $e=(0,l.ZP)(Ce,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((({theme:e,ownerState:t,open:n})=>(0,o.Z)({zIndex:e.zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${Ve.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Ve.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Ve.arrow}`]:(0,o.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${Ve.arrow}`]:(0,o.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),ze=(0,l.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,d.Z)(n.placement.split("-")[0])}`]]}})((({theme:e,ownerState:t})=>{return(0,o.Z)({backgroundColor:(0,c.Fq)(e.palette.grey[700],.92),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:(n=16/14,Math.round(1e5*n)/1e5)+"em",fontWeight:e.typography.fontWeightRegular},{[`.${Ve.popper}[data-popper-placement*="left"] &`]:(0,o.Z)({transformOrigin:"right center"},t.isRtl?(0,o.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,o.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${Ve.popper}[data-popper-placement*="right"] &`]:(0,o.Z)({transformOrigin:"left center"},t.isRtl?(0,o.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,o.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${Ve.popper}[data-popper-placement*="top"] &`]:(0,o.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${Ve.popper}[data-popper-placement*="bottom"] &`]:(0,o.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})});var n})),_e=(0,l.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,c.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Xe=!1,Ye=null;function Ge(e,t){return n=>{t&&t(n),e(n)}}var Je=i.forwardRef((function(e,t){var n,c,l,h,v,g;const y=(0,f.Z)({props:e,name:"MuiTooltip"}),{arrow:b=!1,children:w,components:x={},componentsProps:O={},describeChild:T=!1,disableFocusListener:Z=!1,disableHoverListener:R=!1,disableInteractive:E=!1,disableTouchListener:P=!1,enterDelay:j=100,enterNextDelay:M=0,enterTouchDelay:k=700,followCursor:D=!1,id:L,leaveDelay:A=0,leaveTouchDelay:S=1500,onClose:C,onOpen:W,open:B,placement:N="bottom",PopperComponent:H,PopperProps:I={},title:F,TransitionComponent:q=m.Z,TransitionProps:V}=y,U=(0,r.Z)(y,Ue),$=(0,u.Z)(),z="rtl"===$.direction,[_,X]=i.useState(),[Y,G]=i.useState(null),J=i.useRef(!1),K=E||D,Q=i.useRef(),ee=i.useRef(),te=i.useRef(),ne=i.useRef(),[re,oe]=(0,Ie.Z)({controlled:B,default:!1,name:"Tooltip",state:"open"});let ie=re;const ae=(0,Ne.Z)(L),se=i.useRef(),pe=i.useCallback((()=>{void 0!==se.current&&(document.body.style.WebkitUserSelect=se.current,se.current=void 0),clearTimeout(ne.current)}),[]);i.useEffect((()=>()=>{clearTimeout(Q.current),clearTimeout(ee.current),clearTimeout(te.current),pe()}),[pe]);const ce=e=>{clearTimeout(Ye),Xe=!0,oe(!0),W&&!ie&&W(e)},le=(0,We.Z)((e=>{clearTimeout(Ye),Ye=setTimeout((()=>{Xe=!1}),800+A),oe(!1),C&&ie&&C(e),clearTimeout(Q.current),Q.current=setTimeout((()=>{J.current=!1}),$.transitions.duration.shortest)})),ue=e=>{J.current&&"touchstart"!==e.type||(_&&_.removeAttribute("title"),clearTimeout(ee.current),clearTimeout(te.current),j||Xe&&M?ee.current=setTimeout((()=>{ce(e)}),Xe?M:j):ce(e))},fe=e=>{clearTimeout(ee.current),clearTimeout(te.current),te.current=setTimeout((()=>{le(e)}),A)},{isFocusVisibleRef:de,onBlur:me,onFocus:he,ref:ve}=(0,He.Z)(),[,ge]=i.useState(!1),ye=e=>{me(e),!1===de.current&&(ge(!1),fe(e))},be=e=>{_||X(e.currentTarget),he(e),!0===de.current&&(ge(!0),ue(e))},we=e=>{J.current=!0;const t=w.props;t.onTouchStart&&t.onTouchStart(e)},xe=ue,Oe=fe,Te=e=>{we(e),clearTimeout(te.current),clearTimeout(Q.current),pe(),se.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ne.current=setTimeout((()=>{document.body.style.WebkitUserSelect=se.current,ue(e)}),k)},Ze=e=>{w.props.onTouchEnd&&w.props.onTouchEnd(e),pe(),clearTimeout(te.current),te.current=setTimeout((()=>{le(e)}),S)};i.useEffect((()=>{if(ie)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||le(e)}}),[le,ie]);const Re=(0,Be.Z)(X,t),Ee=(0,Be.Z)(ve,Re),je=(0,Be.Z)(w.ref,Ee);""===F&&(ie=!1);const Me=i.useRef({x:0,y:0}),ke=i.useRef(),De={},Le="string"===typeof F;T?(De.title=ie||!Le||R?null:F,De["aria-describedby"]=ie?ae:null):(De["aria-label"]=Le?F:null,De["aria-labelledby"]=ie&&!Le?ae:null);const Ae=(0,o.Z)({},De,U,w.props,{className:(0,a.Z)(U.className,w.props.className),onTouchStart:we,ref:je},D?{onMouseMove:e=>{const t=w.props;t.onMouseMove&&t.onMouseMove(e),Me.current={x:e.clientX,y:e.clientY},ke.current&&ke.current.update()}}:{});const Se={};P||(Ae.onTouchStart=Te,Ae.onTouchEnd=Ze),R||(Ae.onMouseOver=Ge(xe,Ae.onMouseOver),Ae.onMouseLeave=Ge(Oe,Ae.onMouseLeave),K||(Se.onMouseOver=xe,Se.onMouseLeave=Oe)),Z||(Ae.onFocus=Ge(be,Ae.onFocus),Ae.onBlur=Ge(ye,Ae.onBlur),K||(Se.onFocus=be,Se.onBlur=ye));const Fe=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(Y),options:{element:Y,padding:4}}];return null!=(e=I.popperOptions)&&e.modifiers&&(t=t.concat(I.popperOptions.modifiers)),(0,o.Z)({},I.popperOptions,{modifiers:t})}),[Y,I]),Ve=(0,o.Z)({},y,{isRtl:z,arrow:b,disableInteractive:K,placement:N,PopperComponentProp:H,touch:J.current}),Je=(e=>{const{classes:t,disableInteractive:n,arrow:r,touch:o,placement:i}=e,a={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch",`tooltipPlacement${(0,d.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,s.Z)(a,qe,t)})(Ve),Ke=null!=(n=x.Popper)?n:$e,Qe=null!=(c=null!=(l=x.Transition)?l:q)?c:m.Z,et=null!=(h=x.Tooltip)?h:ze,tt=null!=(v=x.Arrow)?v:_e,nt=(0,p.Z)(Ke,(0,o.Z)({},I,O.popper),Ve),rt=(0,p.Z)(Qe,(0,o.Z)({},V,O.transition),Ve),ot=(0,p.Z)(et,(0,o.Z)({},O.tooltip),Ve),it=(0,p.Z)(tt,(0,o.Z)({},O.arrow),Ve);return(0,Pe.jsxs)(i.Fragment,{children:[i.cloneElement(w,Ae),(0,Pe.jsx)(Ke,(0,o.Z)({as:null!=H?H:Ce,placement:N,anchorEl:D?{getBoundingClientRect:()=>({top:Me.current.y,left:Me.current.x,right:Me.current.x,bottom:Me.current.y,width:0,height:0})}:_,popperRef:ke,open:!!_&&ie,id:ae,transition:!0},Se,nt,{className:(0,a.Z)(Je.popper,null==I?void 0:I.className,null==(g=O.popper)?void 0:g.className),popperOptions:Fe,children:({TransitionProps:e})=>{var t,n;return(0,Pe.jsx)(Qe,(0,o.Z)({timeout:$.transitions.duration.shorter},e,rt,{children:(0,Pe.jsxs)(et,(0,o.Z)({},ot,{className:(0,a.Z)(Je.tooltip,null==(t=O.tooltip)?void 0:t.className),children:[F,b?(0,Pe.jsx)(tt,(0,o.Z)({},it,{className:(0,a.Z)(Je.arrow,null==(n=O.arrow)?void 0:n.className),ref:G})):null]}))}))}}))]})}))}}]);