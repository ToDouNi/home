System.register(["./index-legacy-7bacaf7f.js","./use-form-item-legacy-2277d4a6.js"],(function(e,n){"use strict";var o,r,a,t,l,i,s,d,c,u,h,v,p,m,f,b,g,w,x,k,y,C,z,S,R,B,T,$,D,M,F,A,H,j,E,I,N,O,V,P,_,U,L,W,Y,X,K,J,q;return{setters:[e=>{o=e.q,r=e.h,a=e.E,t=e.d,l=e.u,i=e.l,s=e.F,d=e.aQ,c=e.m,u=e.C,h=e.j,v=e.D,p=e.aP,m=e.aW,f=e.aX,b=e.Y,g=e.r,w=e.t,x=e.a7,k=e.e,y=e.f,C=e.aR,z=e.aY,S=e.aZ,R=e.a_,B=e.aU,T=e.a$,$=e.aT,D=e.ae,M=e.b0,F=e.b1,A=e.A,H=e.o,j=e.c,E=e.T,I=e.g,N=e.aN,O=e.Q,V=e.R,P=e.S,_=e.a,U=e.P,L=e.w,W=e.ag,Y=e.ah,X=e.$,K=e.U,J=e.W},e=>{q=e.u}],execute:function(){var Q=document.createElement("style");Q.textContent='@charset "UTF-8";.audio-controller[data-v-4f2323db]{position:absolute;bottom:0;width:100%;height:80px;background:rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center}.audio-controller .logo[data-v-4f2323db]{cursor:pointer}.audio-controller .logo:hover .mask[data-v-4f2323db],.audio-controller .logo:hover .p-icon[data-v-4f2323db]{transition:.4s;opacity:1}.audio-controller .mask[data-v-4f2323db]{opacity:0;position:absolute;background:rgba(0,0,0,.5);z-index:9}.audio-controller .p-icon[data-v-4f2323db]{opacity:0;left:50%;top:50%;z-index:10;transform:translate(-50%,-50%)}.audio-controller .cd-running[data-v-4f2323db]{animation-play-state:running}.audio-controller .cd-paused[data-v-4f2323db]{animation-play-state:paused}.rotate[data-v-4f2323db]{animation:rotate-4f2323db 8s linear infinite}@keyframes rotate-4f2323db{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.music-container{height:100%;position:relative;font-family:微软雅黑}.music-container .mask{background:rgba(0,0,0,.35);z-index:-1}.music-container .singer-logo{background-image:url('+new URL("Jay-5f84adc1.webp",n.meta.url).href+");background-repeat:no-repeat;background-size:cover;z-index:-2;filter:blur(65px)}.music-container .mask,.music-container .singer-logo{position:absolute;top:0;left:0;bottom:0;right:0}.music-container .music-lrc{height:70%;position:absolute;top:50%;width:100%;transform:translateY(-50%);overflow:hidden;text-align:center}.music-container ul{list-style:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.music-container ul li{height:30px;line-height:30px;color:rgba(255,255,255,.5);transition:.2s}.music-container ul li.active{color:#31c27c;transform:scale(1.3);font-weight:700}\n",document.head.appendChild(Q);const Z={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},G={name:"Slider",common:o,self:function(e){const{railColor:n,primaryColor:o,baseColor:r,cardColor:a,modalColor:t,popoverColor:l,borderRadius:i,fontSize:s,opacityDisabled:d}=e;return Object.assign(Object.assign({},Z),{fontSize:s,markFontSize:s,railColor:n,railColorHover:n,fillColor:o,fillColorHover:o,opacityDisabled:d,handleColor:"#FFF",dotColor:a,dotColorModal:t,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:"rgba(0, 0, 0, .85)",indicatorBoxShadow:"0 2px 8px 0 rgba(0, 0, 0, 0.12)",indicatorTextColor:r,indicatorBorderRadius:i,dotBorder:`2px solid ${n}`,dotBorderActive:`2px solid ${o}`,dotBoxShadow:""})}},ee={name:"IconWrapper",common:o,self:function(e){const{primaryColor:n,baseColor:o}=e;return{color:n,iconColor:o}}},ne=r("icon-wrapper","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n display: inline-flex;\n align-items: center;\n justify-content: center;\n color: var(--n-icon-color);\n"),oe=Object.assign(Object.assign({},a.props),{size:{type:Number,default:24},borderRadius:{type:Number,default:6},color:String,iconColor:String}),re=t({name:"IconWrapper",props:oe,setup(e,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=l(e),t=a("IconWrapper","-icon-wrapper",ne,ee,e,o),u=i((()=>{const{common:{cubicBezierEaseInOut:e},self:{color:n,iconColor:o}}=t.value;return{"--n-bezier":e,"--n-color":n,"--n-icon-color":o}})),h=r?s("icon-wrapper",void 0,u,e):void 0;return()=>{const r=d(e.size);return null==h||h.onRender(),c("div",{class:[`${o.value}-icon-wrapper`,null==h?void 0:h.themeClass.value],style:[null==u?void 0:u.value,{height:r,width:r,borderRadius:d(e.borderRadius),backgroundColor:e.color,color:e.iconColor}]},n)}}}),ae=u([r("slider","\n display: block;\n padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;\n position: relative;\n z-index: 0;\n width: 100%;\n cursor: pointer;\n user-select: none;\n -webkit-user-select: none;\n ",[h("reverse",[r("slider-handles",[r("slider-handle-wrapper","\n transform: translate(50%, -50%);\n ")]),r("slider-dots",[r("slider-dot","\n transform: translateX(50%, -50%);\n ")]),h("vertical",[r("slider-handles",[r("slider-handle-wrapper","\n transform: translate(-50%, -50%);\n ")]),r("slider-marks",[r("slider-mark","\n transform: translateY(calc(-50% + var(--n-dot-height) / 2));\n ")]),r("slider-dots",[r("slider-dot","\n transform: translateX(-50%) translateY(0);\n ")])])]),h("vertical","\n box-sizing: content-box;\n padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);\n width: var(--n-rail-width-vertical);\n height: 100%;\n ",[r("slider-handles","\n top: calc(var(--n-handle-size) / 2);\n right: 0;\n bottom: calc(var(--n-handle-size) / 2);\n left: 0;\n ",[r("slider-handle-wrapper","\n top: unset;\n left: 50%;\n transform: translate(-50%, 50%);\n ")]),r("slider-rail","\n height: 100%;\n ",[v("fill","\n top: unset;\n right: 0;\n bottom: unset;\n left: 0;\n ")]),h("with-mark","\n width: var(--n-rail-width-vertical);\n margin: 0 32px 0 8px;\n "),r("slider-marks","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 22px;\n font-size: var(--n-mark-font-size);\n ",[r("slider-mark","\n transform: translateY(50%);\n white-space: nowrap;\n ")]),r("slider-dots","\n top: calc(var(--n-handle-size) / 2);\n right: unset;\n bottom: calc(var(--n-handle-size) / 2);\n left: 50%;\n ",[r("slider-dot","\n transform: translateX(-50%) translateY(50%);\n ")])]),h("disabled","\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ",[r("slider-handle","\n cursor: not-allowed;\n ")]),h("with-mark","\n width: 100%;\n margin: 8px 0 32px 0;\n "),u("&:hover",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[v("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),h("active",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[v("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),r("slider-marks","\n position: absolute;\n top: 18px;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[r("slider-mark","\n position: absolute;\n transform: translateX(-50%);\n white-space: nowrap;\n ")]),r("slider-rail","\n width: 100%;\n position: relative;\n height: var(--n-rail-height);\n background-color: var(--n-rail-color);\n transition: background-color .3s var(--n-bezier);\n border-radius: calc(var(--n-rail-height) / 2);\n ",[v("fill","\n position: absolute;\n top: 0;\n bottom: 0;\n border-radius: calc(var(--n-rail-height) / 2);\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-fill-color);\n ")]),r("slider-handles","\n position: absolute;\n top: 0;\n right: calc(var(--n-handle-size) / 2);\n bottom: 0;\n left: calc(var(--n-handle-size) / 2);\n ",[r("slider-handle-wrapper","\n outline: none;\n position: absolute;\n top: 50%;\n transform: translate(-50%, -50%);\n cursor: pointer;\n display: flex;\n ",[r("slider-handle","\n height: var(--n-handle-size);\n width: var(--n-handle-size);\n border-radius: 50%;\n overflow: hidden;\n transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);\n background-color: var(--n-handle-color);\n box-shadow: var(--n-handle-box-shadow);\n ",[u("&:hover","\n box-shadow: var(--n-handle-box-shadow-hover);\n ")]),u("&:focus",[r("slider-handle","\n box-shadow: var(--n-handle-box-shadow-focus);\n ",[u("&:hover","\n box-shadow: var(--n-handle-box-shadow-active);\n ")])])])]),r("slider-dots","\n position: absolute;\n top: 50%;\n left: calc(var(--n-handle-size) / 2);\n right: calc(var(--n-handle-size) / 2);\n ",[h("transition-disabled",[r("slider-dot","transition: none;")]),r("slider-dot","\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n transform: translate(-50%, -50%);\n height: var(--n-dot-height);\n width: var(--n-dot-width);\n border-radius: var(--n-dot-border-radius);\n overflow: hidden;\n box-sizing: border-box;\n border: var(--n-dot-border);\n background-color: var(--n-dot-color);\n ",[h("active","border: var(--n-dot-border-active);")])])]),r("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[p()]),r("slider-handle-indicator","\n font-size: var(--n-font-size);\n padding: 6px 10px;\n border-radius: var(--n-indicator-border-radius);\n color: var(--n-indicator-text-color);\n background-color: var(--n-indicator-color);\n box-shadow: var(--n-indicator-box-shadow);\n ",[h("top","\n margin-bottom: 12px;\n "),h("right","\n margin-left: 12px;\n "),h("bottom","\n margin-top: 12px;\n "),h("left","\n margin-right: 12px;\n "),p()]),m(r("slider",[r("slider-dot","background-color: var(--n-dot-color-modal);")])),f(r("slider",[r("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function te(e){return window.TouchEvent&&e instanceof window.TouchEvent}function le(){const e=new Map;return b((()=>{e.clear()})),[e,n=>o=>{e.set(n,o)}]}const ie=Object.assign(Object.assign({},a.props),{to:z.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),se=t({name:"Slider",props:ie,setup(e){const{mergedClsPrefixRef:n,namespaceRef:o,inlineThemeDisabled:r}=l(e),t=a("Slider","-slider",ae,G,e,n),d=g(null),[c,u]=le(),[h,v]=le(),p=g(new Set),m=q(e),{mergedDisabledRef:f}=m,b=i((()=>{const{step:n}=e;if(Number(n)<=0||"mark"===n)return 0;const o=n.toString();let r=0;return o.includes(".")&&(r=o.length-o.indexOf(".")-1),r})),S=g(e.defaultValue),R=w(e,"value"),B=x(R,S),T=i((()=>{const{value:n}=B;return(e.range?n:[n]).map(Q)})),$=i((()=>T.value.length>2)),H=i((()=>void 0===e.placement?e.vertical?"right":"top":e.placement)),j=i((()=>{const{marks:n}=e;return n?Object.keys(n).map(Number.parseFloat):null})),E=g(-1),I=g(-1),N=g(-1),O=g(!1),V=g(!1),P=i((()=>{const{vertical:n,reverse:o}=e;return n?o?"top":"bottom":o?"right":"left"})),_=i((()=>{if($.value)return;const n=T.value,o=Z(e.range?Math.min(...n):e.min),r=Z(e.range?Math.max(...n):n[0]),{value:a}=P;return e.vertical?{[a]:`${o}%`,height:r-o+"%"}:{[a]:`${o}%`,width:r-o+"%"}})),U=i((()=>{const n=[],{marks:o}=e;if(o){const r=T.value.slice();r.sort(((e,n)=>e-n));const{value:a}=P,{value:t}=$,{range:l}=e,i=t?()=>!1:e=>l?e>=r[0]&&e<=r[r.length-1]:e<=r[0];for(const e of Object.keys(o)){const r=Number(e);n.push({active:i(r),key:r,label:o[e],style:{[a]:`${Z(r)}%`}})}}return n}));function L(n){return e.showTooltip||N.value===n||E.value===n&&O.value}function W(){h.forEach(((e,n)=>{L(n)&&e.syncPosition()}))}function Y(n){const{"onUpdate:value":o,onUpdateValue:r}=e,{nTriggerFormInput:a,nTriggerFormChange:t}=m;r&&D(r,n),o&&D(o,n),S.value=n,a(),t()}function X(n){const{range:o}=e;if(o){if(Array.isArray(n)){const{value:e}=T;n.join()!==e.join()&&Y(n)}}else Array.isArray(n)||T.value[0]!==n&&Y(n)}function K(n,o){if(e.range){const e=T.value.slice();e.splice(o,1,n),X(e)}else X(n)}function J(n,o,r){const a=void 0!==r;r||(r=n-o>0?1:-1);const t=j.value||[],{step:l}=e;if("mark"===l){const e=ee(n,t.concat(o),a?r:void 0);return e?e.value:o}if(l<=0)return o;const{value:i}=b;let s;if(a){const e=Number((o/l).toFixed(i)),n=Math.floor(e),a=e<n?n:n+1;s=ee(o,[Number(((e>n?n:n-1)*l).toFixed(i)),Number((a*l).toFixed(i)),...t],r)}else{const o=function(n){const{step:o,min:r}=e;if(Number(o)<=0||"mark"===o)return n;const a=Math.round((n-r)/o)*o+r;return Number(a.toFixed(b.value))}(n);s=ee(n,[...t,o])}return s?Q(s.value):o}function Q(n){return Math.min(e.max,Math.max(e.min,n))}function Z(n){const{max:o,min:r}=e;return(n-r)/(o-r)*100}function ee(e,n=j.value,o){if(!(null==n?void 0:n.length))return null;let r=null,a=-1;for(;++a<n.length;){const t=n[a]-e,l=Math.abs(t);(void 0===o||t*o>0)&&(null===r||l<r.distance)&&(r={index:a,distance:l,value:n[a]})}return r}function ne(n){const o=d.value;if(!o)return;const r=te(n)?n.touches[0]:n,a=o.getBoundingClientRect();let t;return t=e.vertical?(a.bottom-r.clientY)/a.height:(r.clientX-a.left)/a.width,e.reverse&&(t=1-t),function(n){const{max:o,min:r}=e;return r+(o-r)*n}(t)}function oe(n){const o=E.value;if(-1===o)return;const{step:r}=e,a=T.value[o];K(J(Number(r)<=0||"mark"===r?a:a+r*n,a,n>0?1:-1),o)}function re(){O.value&&(O.value=!1,e.onDragend&&D(e.onDragend),F("touchend",document,se),F("mouseup",document,se),F("touchmove",document,ie),F("mousemove",document,ie))}function ie(e){const{value:n}=E;if(!O.value||-1===n)return void re();const o=ne(e);void 0!==o&&K(J(o,T.value[n]),n)}function se(){re()}k(E,((e,n)=>{A((()=>I.value=n))})),k(B,(()=>{if(e.marks){if(V.value)return;V.value=!0,A((()=>{V.value=!1}))}A(W)})),y((()=>{re()}));const de=i((()=>{const{self:{markFontSize:e,railColor:n,railColorHover:o,fillColor:r,fillColorHover:a,handleColor:l,opacityDisabled:i,dotColor:s,dotColorModal:d,handleBoxShadow:c,handleBoxShadowHover:u,handleBoxShadowActive:h,handleBoxShadowFocus:v,dotBorder:p,dotBoxShadow:m,railHeight:f,railWidthVertical:b,handleSize:g,dotHeight:w,dotWidth:x,dotBorderRadius:k,fontSize:y,dotBorderActive:C,dotColorPopover:z},common:{cubicBezierEaseInOut:S}}=t.value;return{"--n-bezier":S,"--n-dot-border":p,"--n-dot-border-active":C,"--n-dot-border-radius":k,"--n-dot-box-shadow":m,"--n-dot-color":s,"--n-dot-color-modal":d,"--n-dot-color-popover":z,"--n-dot-height":w,"--n-dot-width":x,"--n-fill-color":r,"--n-fill-color-hover":a,"--n-font-size":y,"--n-handle-box-shadow":c,"--n-handle-box-shadow-active":h,"--n-handle-box-shadow-focus":v,"--n-handle-box-shadow-hover":u,"--n-handle-color":l,"--n-handle-size":g,"--n-opacity-disabled":i,"--n-rail-color":n,"--n-rail-color-hover":o,"--n-rail-height":f,"--n-rail-width-vertical":b,"--n-mark-font-size":e}})),ce=r?s("slider",void 0,de,e):void 0,ue=i((()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:o,indicatorTextColor:r,indicatorBorderRadius:a}}=t.value;return{"--n-font-size":e,"--n-indicator-border-radius":a,"--n-indicator-box-shadow":o,"--n-indicator-color":n,"--n-indicator-text-color":r}})),he=r?s("slider-indicator",void 0,ue,e):void 0;return{mergedClsPrefix:n,namespace:o,uncontrolledValue:S,mergedValue:B,mergedDisabled:f,mergedPlacement:H,isMounted:C(),adjustedTo:z(e),dotTransitionDisabled:V,markInfos:U,isShowTooltip:L,shouldKeepTooltipTransition:function(e){return!O.value||!(E.value===e&&I.value===e)},handleRailRef:d,setHandleRefs:u,setFollowerRefs:v,fillStyle:_,getHandleStyle:function(e,n){const o=Z(e),{value:r}=P;return{[r]:`${o}%`,zIndex:n===E.value?1:0}},activeIndex:E,arrifiedValues:T,followerEnabledIndexSet:p,handleRailMouseDown:function(n){var o,r;if(f.value)return;if(!te(n)&&0!==n.button)return;const a=ne(n);if(void 0===a)return;const t=T.value.slice(),l=e.range?null!==(r=null===(o=ee(a,t))||void 0===o?void 0:o.index)&&void 0!==r?r:-1:0;-1!==l&&(n.preventDefault(),function(e){var n;~e&&(E.value=e,null===(n=c.get(e))||void 0===n||n.focus())}(l),O.value||(O.value=!0,e.onDragstart&&D(e.onDragstart),M("touchend",document,se),M("mouseup",document,se),M("touchmove",document,ie),M("mousemove",document,ie)),K(J(a,T.value[l]),l))},handleHandleFocus:function(e){E.value=e,f.value||(N.value=e)},handleHandleBlur:function(e){E.value===e&&(E.value=-1,re()),N.value===e&&(N.value=-1)},handleHandleMouseEnter:function(e){N.value=e},handleHandleMouseLeave:function(e){N.value===e&&(N.value=-1)},handleRailKeyDown:function(n){if(f.value||!e.keyboard)return;const{vertical:o,reverse:r}=e;switch(n.key){case"ArrowUp":n.preventDefault(),oe(o&&r?-1:1);break;case"ArrowRight":n.preventDefault(),oe(!o&&r?-1:1);break;case"ArrowDown":n.preventDefault(),oe(o&&r?1:-1);break;case"ArrowLeft":n.preventDefault(),oe(!o&&r?1:-1)}},indicatorCssVars:r?void 0:ue,indicatorThemeClass:null==he?void 0:he.themeClass,indicatorOnRender:null==he?void 0:he.onRender,cssVars:r?void 0:de,themeClass:null==ce?void 0:ce.themeClass,onRender:null==ce?void 0:ce.onRender}},render(){var e;const{mergedClsPrefix:n,themeClass:o,formatTooltip:r}=this;return null===(e=this.onRender)||void 0===e||e.call(this),c("div",{class:[`${n}-slider`,o,{[`${n}-slider--disabled`]:this.mergedDisabled,[`${n}-slider--active`]:-1!==this.activeIndex,[`${n}-slider--with-mark`]:this.marks,[`${n}-slider--vertical`]:this.vertical,[`${n}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},c("div",{class:`${n}-slider-rail`},c("div",{class:`${n}-slider-rail__fill`,style:this.fillStyle}),this.marks?c("div",{class:[`${n}-slider-dots`,this.dotTransitionDisabled&&`${n}-slider-dots--transition-disabled`]},this.markInfos.map((e=>c("div",{key:e.key,class:[`${n}-slider-dot`,{[`${n}-slider-dot--active`]:e.active}],style:e.style})))):null,c("div",{ref:"handleRailRef",class:`${n}-slider-handles`},this.arrifiedValues.map(((e,o)=>{const a=this.isShowTooltip(o);return c(S,null,{default:()=>[c(R,null,{default:()=>c("div",{ref:this.setHandleRefs(o),class:`${n}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":e,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(e,o),onFocus:()=>{this.handleHandleFocus(o)},onBlur:()=>{this.handleHandleBlur(o)},onMouseenter:()=>{this.handleHandleMouseEnter(o)},onMouseleave:()=>{this.handleHandleMouseLeave(o)}},B(this.$slots.thumb,(()=>[c("div",{class:`${n}-slider-handle`})])))}),this.tooltip&&c(T,{ref:this.setFollowerRefs(o),show:a,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(o),teleportDisabled:this.adjustedTo===z.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>c($,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(o),onEnter:()=>{this.followerEnabledIndexSet.add(o)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(o)}},{default:()=>{var o;return a?(null===(o=this.indicatorOnRender)||void 0===o||o.call(this),c("div",{class:[`${n}-slider-handle-indicator`,this.indicatorThemeClass,`${n}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},"function"==typeof r?r(e):e)):null}})})]})}))),this.marks?c("div",{class:`${n}-slider-marks`},this.markInfos.map((e=>c("div",{key:e.key,class:`${n}-slider-mark`,style:e.style},"function"==typeof e.label?e.label():e.label)))):null))}}),de=["[00:00:00]反方向的钟","[00:02:00]周杰伦","[00:03:00]Jay","","[00:04.74]词: 方文山 曲: 周杰伦","[00: 45.86]迷迷蒙蒙 你给的梦","[00: 47.94]出现裂缝 隐隐作痛","[00: 50.53]怎么沟通你都没空","[00: 53.04]说我不懂 说了没用","[00: 55.64]他的笑容 有何不同","[00: 58.17]在你心中 我不再受宠","[01:00.64]我的天空 是雨是风 还是彩虹","[01:04.54]你在操纵","[02: 48.08][01:07.13]恨自己真的没用情绪激动","[02: 52.92][01: 11.47]一颗心到现在还在抽痛","[02: 57.80][01: 16.42]还为分手前那句抱歉在感动","[03: 48.46][03:07.80][01: 26.26]穿梭时间的画面的钟","[03: 53.42][03: 12.77][01: 31.31]从反方向 开始移动","[03: 58.36][03: 17.79][01: 36.44]回到当初爱你的时空","[04:03.43][03: 22.85][01: 41.49]停格内容 不忠","[04:08.70][03: 28.06][01: 46.55]所有回忆对着我进攻","[03: 33.13][01: 51.60]我的伤口 被你拆封","[03: 38.19][01: 56.67]誓言太沉重泪被纵容","[03: 43.24][02:01.78]脸上汹涌 失控","[02: 17.12]城市霓虹 不安跳动","[02: 18.77]染红夜空 过去种种","[02: 21.90]像一场梦 不敢去碰","[02: 23.22]一想就痛 心碎内容","[02: 24.65]每一秒钟 都有不同","[02: 25.70]你不懂 连一句珍重","[02: 26.25]也有苦衷 也不想送","[02: 27.51]寒风中 废墟烟囱","[02: 28.61]停止转动 一切落空","[02: 30.10]在人海中盲目跟从","[02: 31.91]别人的梦 全面放纵","[02: 33.51]恨没有用 疗伤止痛","[02: 34.82]不在感动 没有梦","[02: 35.98]痛不知轻重","[02: 36.86]泪水鲜红 全面放纵"],ce=""+new URL("Jay-5f84adc1.webp",n.meta.url).href,ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},he=[E("path",{d:"M421.84 37.37a25.86 25.86 0 0 0-22.6-4.46L199.92 86.49A32.3 32.3 0 0 0 176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05l-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0 0 23.23 45.63A54.78 54.78 0 0 0 135.34 480a55.82 55.82 0 0 0 17.75-2.93l.38-.13l21.84-7.94A47.84 47.84 0 0 0 208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 0 1 5 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09l-50.89 18.11A49.09 49.09 0 0 0 304 375.92a55.67 55.67 0 0 0 23.23 45.8a54.63 54.63 0 0 0 49.88 7.35l.36-.12l21.84-7.95A47.83 47.83 0 0 0 432 375.92V58a25.74 25.74 0 0 0-10.16-20.63z",fill:"currentColor"},null,-1)],ve=t({name:"MusicalNotes",render:function(e,n){return H(),j("svg",ue,he)}}),pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},me=[E("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),E("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 192v128"},null,-1),E("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M304 192v128"},null,-1)],fe=t({name:"PauseCircleOutline",render:function(e,n){return H(),j("svg",pe,me)}}),be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ge=[E("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),E("path",{d:"M216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z",fill:"currentColor"},null,-1)],we=t({name:"PlayCircleOutline",render:function(e,n){return H(),j("svg",be,ge)}}),xe={class:"audio-controller"},ke={class:"relative logo w-14 h-14"},ye={class:"relative w-2/4 px-4"},Ce={class:"absolute top-0 right-4 text-[rgba(255,255,255,.4)] select-none"},ze=X(t({__name:"AudioController",emits:["change"],setup(e,{emit:n}){const o=g(0),r=g(!1),a=g(),t=g(),l=n;I((()=>{a.value?.addEventListener("timeupdate",(()=>{l("change",a.value?.currentTime||0),a.value&&t.value&&(o.value=a.value.currentTime/t.value*100)})),a.value?.addEventListener("canplaythrough",(()=>{t.value=a.value?.duration}))}));const i=e=>{a.value&&(a.value.currentTime=e/100*a.value?.duration)},s=()=>{r.value=!0,a.value?.play()},d=()=>{r.value=!1,a.value?.pause()},c=e=>{let n="";if(e>-1){let o=Math.floor(e/60)%60,r=~~e%60;o<10&&(n+="0"),n+=o+":",r<10&&(n+="0"),n+=r}return n};return(e,n)=>{const t=Y,l=re,u=se;return H(),j("div",xe,[E("audio",{class:"hidden",ref_key:"audio",ref:a,src:"/static/audio/music.mp3",controls:""},null,512),E("div",ke,[E("img",{class:N(["w-full h-full rounded-full",["rotate",O(r)?"cd-running":"cd-paused"]]),src:ce},null,2),n[1]||(n[1]=E("div",{class:"mask w-14 h-14 rounded-full"},null,-1)),V(_(t,{class:"absolute p-icon",color:"#fff",size:"40",component:O(we),onClick:s},null,8,["component"]),[[P,!O(r)]]),V(_(t,{class:"absolute p-icon",color:"#fff",size:"40",component:O(fe),onClick:d},null,8,["component"]),[[P,O(r)]])]),E("div",ye,[n[2]||(n[2]=E("div",{class:"text-[#c4c3c3] select-none"},"周杰伦-反方向的钟",-1)),E("div",Ce,U(c(O(a)?.currentTime||0))+" / "+U(c(O(a)?.duration||0)),1),_(u,{class:"mt-2",value:O(o),"onUpdate:value":n[0]||(n[0]=e=>W(o)?o.value=e:null),tooltip:!1,onUpdateValue:i},{thumb:L((()=>[_(l,{size:20,"border-radius":12},{default:L((()=>[_(t,{size:12,component:O(ve)},null,8,["component"])])),_:1})])),_:1},8,["value"])])])}}}),[["__scopeId","data-v-4f2323db"]]),Se={class:"music-container"};e("default",t({__name:"index",setup(e){const n=g(),o=g(),r=g(),a=g(null);I((()=>{n.value=t(de)}));const t=e=>{const n=[];return e.forEach((e=>{const o=e.split("]"),r=o.pop();o.forEach((e=>{const o=e.substring(1);n.push({time:l(o),words:r})}))})),n.sort(((e,n)=>e.time-n.time))},l=e=>{const n=e.split(":");return 60*+n[0]+ +n[1]},i=e=>{const t=n.value?.findIndex((n=>n.time>e)),l=t?t-1:0;a.value=l;const i=(o.value?.clientHeight||0)/2-45,s=30*l;let d=0;i<=s&&(d=i-s),r.value&&(r.value.style.transform=`translateY(${d}px)`)};return(e,t)=>(H(),j("div",Se,[t[0]||(t[0]=E("div",{class:"mask"},null,-1)),t[1]||(t[1]=E("div",{class:"singer-logo"},null,-1)),E("div",{ref_key:"lrcContainer",ref:o,class:"music-lrc"},[E("ul",{ref_key:"lrcUl",ref:r},[(H(!0),j(K,null,J(O(n),((e,n)=>(H(),j("li",{key:n,class:N(O(a)===n&&"active")},U(e.words),3)))),128))],512)],512),_(ze,{onChange:i})]))}}))}}}));
