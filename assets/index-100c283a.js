import{q as Me,h as r,E as ne,d as P,u as Ve,l as M,F as ce,aQ as ke,m as k,C as L,j as $,D as G,aP as ye,aW as co,aX as uo,Y as ho,r as y,t as vo,a7 as fo,e as Ce,f as mo,aR as bo,aY as ue,aZ as po,a_ as go,aU as wo,a$ as xo,aT as _o,ae as ee,b0 as oe,b1 as te,A as de,o as H,c as E,T as g,g as Be,aN as De,Q as V,R as Re,S as ze,a as j,P as he,w as Se,ag as ko,ah as yo,$ as Co,U as Ro,W as zo}from"./index-a76aa963.js";import{u as So}from"./use-form-item-07835162.js";const $o={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};function To(t){const l="rgba(0, 0, 0, .85)",v="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:h,primaryColor:a,baseColor:d,cardColor:b,modalColor:w,popoverColor:R,borderRadius:f,fontSize:x,opacityDisabled:s}=t;return Object.assign(Object.assign({},$o),{fontSize:x,markFontSize:x,railColor:h,railColorHover:h,fillColor:a,fillColorHover:a,opacityDisabled:s,handleColor:"#FFF",dotColor:b,dotColorModal:w,dotColorPopover:R,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:l,indicatorBoxShadow:v,indicatorTextColor:d,indicatorBorderRadius:f,dotBorder:`2px solid ${h}`,dotBorderActive:`2px solid ${a}`,dotBoxShadow:""})}const Mo={name:"Slider",common:Me,self:To},Vo=Mo;function Bo(t){const{primaryColor:l,baseColor:v}=t;return{color:l,iconColor:v}}const Do={name:"IconWrapper",common:Me,self:Bo},Io=Do,Ao=r("icon-wrapper",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`),Fo=Object.assign(Object.assign({},ne.props),{size:{type:Number,default:24},borderRadius:{type:Number,default:6},color:String,iconColor:String}),Ho=P({name:"IconWrapper",props:Fo,setup(t,{slots:l}){const{mergedClsPrefixRef:v,inlineThemeDisabled:h}=Ve(t),a=ne("IconWrapper","-icon-wrapper",Ao,Io,t,v),d=M(()=>{const{common:{cubicBezierEaseInOut:w},self:{color:R,iconColor:f}}=a.value;return{"--n-bezier":w,"--n-color":R,"--n-icon-color":f}}),b=h?ce("icon-wrapper",void 0,d,t):void 0;return()=>{const w=ke(t.size);return b==null||b.onRender(),k("div",{class:[`${v.value}-icon-wrapper`,b==null?void 0:b.themeClass.value],style:[d==null?void 0:d.value,{height:w,width:w,borderRadius:ke(t.borderRadius),backgroundColor:t.color,color:t.iconColor}]},l)}}}),Eo=L([r("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[$("reverse",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),$("vertical",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),r("slider-marks",[r("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),$("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[r("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[r("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),r("slider-rail",`
 height: 100%;
 `,[G("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),$("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),r("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[r("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),r("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[r("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),$("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[r("slider-handle",`
 cursor: not-allowed;
 `)]),$("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),L("&:hover",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[G("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),$("active",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[G("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),r("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[r("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),r("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[G("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),r("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[r("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[r("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[L("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),L("&:focus",[r("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[L("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),r("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[$("transition-disabled",[r("slider-dot","transition: none;")]),r("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[$("active","border: var(--n-dot-border-active);")])])]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[ye()]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[$("top",`
 margin-bottom: 12px;
 `),$("right",`
 margin-left: 12px;
 `),$("bottom",`
 margin-top: 12px;
 `),$("left",`
 margin-right: 12px;
 `),ye()]),co(r("slider",[r("slider-dot","background-color: var(--n-dot-color-modal);")])),uo(r("slider",[r("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function $e(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Te(){const t=new Map,l=v=>h=>{t.set(v,h)};return ho(()=>{t.clear()}),[t,l]}const Po=0,No=Object.assign(Object.assign({},ne.props),{to:ue.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Oo=P({name:"Slider",props:No,setup(t){const{mergedClsPrefixRef:l,namespaceRef:v,inlineThemeDisabled:h}=Ve(t),a=ne("Slider","-slider",Eo,Vo,t,l),d=y(null),[b,w]=Te(),[R,f]=Te(),x=y(new Set),s=So(t),{mergedDisabledRef:c}=s,m=M(()=>{const{step:e}=t;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let n=0;return o.includes(".")&&(n=o.length-o.indexOf(".")-1),n}),S=y(t.defaultValue),N=vo(t,"value"),D=fo(N,S),z=M(()=>{const{value:e}=D;return(t.range?e:[e]).map(ge)}),W=M(()=>z.value.length>2),Ie=M(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),ve=M(()=>{const{marks:e}=t;return e?Object.keys(e).map(Number.parseFloat):null}),T=y(-1),fe=y(-1),A=y(-1),F=y(!1),Y=y(!1),ae=M(()=>{const{vertical:e,reverse:o}=t;return e?o?"top":"bottom":o?"right":"left"}),Ae=M(()=>{if(W.value)return;const e=z.value,o=X(t.range?Math.min(...e):t.min),n=X(t.range?Math.max(...e):e[0]),{value:i}=ae;return t.vertical?{[i]:`${o}%`,height:`${n-o}%`}:{[i]:`${o}%`,width:`${n-o}%`}}),Fe=M(()=>{const e=[],{marks:o}=t;if(o){const n=z.value.slice();n.sort((C,_)=>C-_);const{value:i}=ae,{value:u}=W,{range:p}=t,B=u?()=>!1:C=>p?C>=n[0]&&C<=n[n.length-1]:C<=n[0];for(const C of Object.keys(o)){const _=Number(C);e.push({active:B(_),key:_,label:o[C],style:{[i]:`${X(_)}%`}})}}return e});function He(e,o){const n=X(e),{value:i}=ae;return{[i]:`${n}%`,zIndex:o===T.value?1:0}}function me(e){return t.showTooltip||A.value===e||T.value===e&&F.value}function Ee(e){return F.value?!(T.value===e&&fe.value===e):!0}function Pe(e){var o;~e&&(T.value=e,(o=b.get(e))===null||o===void 0||o.focus())}function Ne(){R.forEach((e,o)=>{me(o)&&e.syncPosition()})}function be(e){const{"onUpdate:value":o,onUpdateValue:n}=t,{nTriggerFormInput:i,nTriggerFormChange:u}=s;n&&ee(n,e),o&&ee(o,e),S.value=e,i(),u()}function pe(e){const{range:o}=t;if(o){if(Array.isArray(e)){const{value:n}=z;e.join()!==n.join()&&be(e)}}else Array.isArray(e)||z.value[0]!==e&&be(e)}function re(e,o){if(t.range){const n=z.value.slice();n.splice(o,1,e),pe(n)}else pe(e)}function le(e,o,n){const i=n!==void 0;n||(n=e-o>0?1:-1);const u=ve.value||[],{step:p}=t;if(p==="mark"){const _=K(e,u.concat(o),i?n:void 0);return _?_.value:o}if(p<=0)return o;const{value:B}=m;let C;if(i){const _=Number((o/p).toFixed(B)),I=Math.floor(_),ie=_>I?I:I-1,se=_<I?I:I+1;C=K(o,[Number((ie*p).toFixed(B)),Number((se*p).toFixed(B)),...u],n)}else{const _=Ue(e);C=K(e,[...u,_])}return C?ge(C.value):o}function ge(e){return Math.min(t.max,Math.max(t.min,e))}function X(e){const{max:o,min:n}=t;return(e-n)/(o-n)*100}function Oe(e){const{max:o,min:n}=t;return n+(o-n)*e}function Ue(e){const{step:o,min:n}=t;if(Number(o)<=0||o==="mark")return e;const i=Math.round((e-n)/o)*o+n;return Number(i.toFixed(m.value))}function K(e,o=ve.value,n){if(!(o!=null&&o.length))return null;let i=null,u=-1;for(;++u<o.length;){const p=o[u]-e,B=Math.abs(p);(n===void 0||p*n>0)&&(i===null||B<i.distance)&&(i={index:u,distance:B,value:o[u]})}return i}function we(e){const o=d.value;if(!o)return;const n=$e(e)?e.touches[0]:e,i=o.getBoundingClientRect();let u;return t.vertical?u=(i.bottom-n.clientY)/i.height:u=(n.clientX-i.left)/i.width,t.reverse&&(u=1-u),Oe(u)}function je(e){if(c.value||!t.keyboard)return;const{vertical:o,reverse:n}=t;switch(e.key){case"ArrowUp":e.preventDefault(),J(o&&n?-1:1);break;case"ArrowRight":e.preventDefault(),J(!o&&n?-1:1);break;case"ArrowDown":e.preventDefault(),J(o&&n?1:-1);break;case"ArrowLeft":e.preventDefault(),J(!o&&n?1:-1);break}}function J(e){const o=T.value;if(o===-1)return;const{step:n}=t,i=z.value[o],u=Number(n)<=0||n==="mark"?i:i+n*e;re(le(u,i,e>0?1:-1),o)}function Le(e){var o,n;if(c.value||!$e(e)&&e.button!==Po)return;const i=we(e);if(i===void 0)return;const u=z.value.slice(),p=t.range?(n=(o=K(i,u))===null||o===void 0?void 0:o.index)!==null&&n!==void 0?n:-1:0;p!==-1&&(e.preventDefault(),Pe(p),We(),re(le(i,z.value[p]),p))}function We(){F.value||(F.value=!0,t.onDragstart&&ee(t.onDragstart),oe("touchend",document,Z),oe("mouseup",document,Z),oe("touchmove",document,q),oe("mousemove",document,q))}function Q(){F.value&&(F.value=!1,t.onDragend&&ee(t.onDragend),te("touchend",document,Z),te("mouseup",document,Z),te("touchmove",document,q),te("mousemove",document,q))}function q(e){const{value:o}=T;if(!F.value||o===-1){Q();return}const n=we(e);n!==void 0&&re(le(n,z.value[o]),o)}function Z(){Q()}function Ye(e){T.value=e,c.value||(A.value=e)}function Xe(e){T.value===e&&(T.value=-1,Q()),A.value===e&&(A.value=-1)}function Ke(e){A.value=e}function Je(e){A.value===e&&(A.value=-1)}Ce(T,(e,o)=>void de(()=>fe.value=o)),Ce(D,()=>{if(t.marks){if(Y.value)return;Y.value=!0,de(()=>{Y.value=!1})}de(Ne)}),mo(()=>{Q()});const xe=M(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:n,fillColor:i,fillColorHover:u,handleColor:p,opacityDisabled:B,dotColor:C,dotColorModal:_,handleBoxShadow:I,handleBoxShadowHover:ie,handleBoxShadowActive:se,handleBoxShadowFocus:Qe,dotBorder:qe,dotBoxShadow:Ze,railHeight:Ge,railWidthVertical:eo,handleSize:oo,dotHeight:to,dotWidth:no,dotBorderRadius:ao,fontSize:ro,dotBorderActive:lo,dotColorPopover:io},common:{cubicBezierEaseInOut:so}}=a.value;return{"--n-bezier":so,"--n-dot-border":qe,"--n-dot-border-active":lo,"--n-dot-border-radius":ao,"--n-dot-box-shadow":Ze,"--n-dot-color":C,"--n-dot-color-modal":_,"--n-dot-color-popover":io,"--n-dot-height":to,"--n-dot-width":no,"--n-fill-color":i,"--n-fill-color-hover":u,"--n-font-size":ro,"--n-handle-box-shadow":I,"--n-handle-box-shadow-active":se,"--n-handle-box-shadow-focus":Qe,"--n-handle-box-shadow-hover":ie,"--n-handle-color":p,"--n-handle-size":oo,"--n-opacity-disabled":B,"--n-rail-color":o,"--n-rail-color-hover":n,"--n-rail-height":Ge,"--n-rail-width-vertical":eo,"--n-mark-font-size":e}}),O=h?ce("slider",void 0,xe,t):void 0,_e=M(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:n,indicatorTextColor:i,indicatorBorderRadius:u}}=a.value;return{"--n-font-size":e,"--n-indicator-border-radius":u,"--n-indicator-box-shadow":n,"--n-indicator-color":o,"--n-indicator-text-color":i}}),U=h?ce("slider-indicator",void 0,_e,t):void 0;return{mergedClsPrefix:l,namespace:v,uncontrolledValue:S,mergedValue:D,mergedDisabled:c,mergedPlacement:Ie,isMounted:bo(),adjustedTo:ue(t),dotTransitionDisabled:Y,markInfos:Fe,isShowTooltip:me,shouldKeepTooltipTransition:Ee,handleRailRef:d,setHandleRefs:w,setFollowerRefs:f,fillStyle:Ae,getHandleStyle:He,activeIndex:T,arrifiedValues:z,followerEnabledIndexSet:x,handleRailMouseDown:Le,handleHandleFocus:Ye,handleHandleBlur:Xe,handleHandleMouseEnter:Ke,handleHandleMouseLeave:Je,handleRailKeyDown:je,indicatorCssVars:h?void 0:_e,indicatorThemeClass:U==null?void 0:U.themeClass,indicatorOnRender:U==null?void 0:U.onRender,cssVars:h?void 0:xe,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){var t;const{mergedClsPrefix:l,themeClass:v,formatTooltip:h}=this;return(t=this.onRender)===null||t===void 0||t.call(this),k("div",{class:[`${l}-slider`,v,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},k("div",{class:`${l}-slider-rail`},k("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?k("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(a=>k("div",{key:a.key,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:a.active}],style:a.style}))):null,k("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((a,d)=>{const b=this.isShowTooltip(d);return k(po,null,{default:()=>[k(go,null,{default:()=>k("div",{ref:this.setHandleRefs(d),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":a,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(a,d),onFocus:()=>{this.handleHandleFocus(d)},onBlur:()=>{this.handleHandleBlur(d)},onMouseenter:()=>{this.handleHandleMouseEnter(d)},onMouseleave:()=>{this.handleHandleMouseLeave(d)}},wo(this.$slots.thumb,()=>[k("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&k(xo,{ref:this.setFollowerRefs(d),show:b,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===ue.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>k(_o,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var w;return b?((w=this.indicatorOnRender)===null||w===void 0||w.call(this),k("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof h=="function"?h(a):a)):null}})})]})})),this.marks?k("div",{class:`${l}-slider-marks`},this.markInfos.map(a=>k("div",{key:a.key,class:`${l}-slider-mark`,style:a.style},typeof a.label=="function"?a.label():a.label))):null))}}),Uo=["[00:00:00]反方向的钟","[00:02:00]周杰伦","[00:03:00]Jay","","[00:04.74]词: 方文山 曲: 周杰伦","[00: 45.86]迷迷蒙蒙 你给的梦","[00: 47.94]出现裂缝 隐隐作痛","[00: 50.53]怎么沟通你都没空","[00: 53.04]说我不懂 说了没用","[00: 55.64]他的笑容 有何不同","[00: 58.17]在你心中 我不再受宠","[01:00.64]我的天空 是雨是风 还是彩虹","[01:04.54]你在操纵","[02: 48.08][01:07.13]恨自己真的没用情绪激动","[02: 52.92][01: 11.47]一颗心到现在还在抽痛","[02: 57.80][01: 16.42]还为分手前那句抱歉在感动","[03: 48.46][03:07.80][01: 26.26]穿梭时间的画面的钟","[03: 53.42][03: 12.77][01: 31.31]从反方向 开始移动","[03: 58.36][03: 17.79][01: 36.44]回到当初爱你的时空","[04:03.43][03: 22.85][01: 41.49]停格内容 不忠","[04:08.70][03: 28.06][01: 46.55]所有回忆对着我进攻","[03: 33.13][01: 51.60]我的伤口 被你拆封","[03: 38.19][01: 56.67]誓言太沉重泪被纵容","[03: 43.24][02:01.78]脸上汹涌 失控","[02: 17.12]城市霓虹 不安跳动","[02: 18.77]染红夜空 过去种种","[02: 21.90]像一场梦 不敢去碰","[02: 23.22]一想就痛 心碎内容","[02: 24.65]每一秒钟 都有不同","[02: 25.70]你不懂 连一句珍重","[02: 26.25]也有苦衷 也不想送","[02: 27.51]寒风中 废墟烟囱","[02: 28.61]停止转动 一切落空","[02: 30.10]在人海中盲目跟从","[02: 31.91]别人的梦 全面放纵","[02: 33.51]恨没有用 疗伤止痛","[02: 34.82]不在感动 没有梦","[02: 35.98]痛不知轻重","[02: 36.86]泪水鲜红 全面放纵"],jo=""+new URL("Jay-5f84adc1.webp",import.meta.url).href,Lo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Wo=g("path",{d:"M421.84 37.37a25.86 25.86 0 0 0-22.6-4.46L199.92 86.49A32.3 32.3 0 0 0 176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05l-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0 0 23.23 45.63A54.78 54.78 0 0 0 135.34 480a55.82 55.82 0 0 0 17.75-2.93l.38-.13l21.84-7.94A47.84 47.84 0 0 0 208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 0 1 5 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09l-50.89 18.11A49.09 49.09 0 0 0 304 375.92a55.67 55.67 0 0 0 23.23 45.8a54.63 54.63 0 0 0 49.88 7.35l.36-.12l21.84-7.95A47.83 47.83 0 0 0 432 375.92V58a25.74 25.74 0 0 0-10.16-20.63z",fill:"currentColor"},null,-1),Yo=[Wo],Xo=P({name:"MusicalNotes",render:function(l,v){return H(),E("svg",Lo,Yo)}}),Ko={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Jo=g("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Qo=g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 192v128"},null,-1),qo=g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M304 192v128"},null,-1),Zo=[Jo,Qo,qo],Go=P({name:"PauseCircleOutline",render:function(l,v){return H(),E("svg",Ko,Zo)}}),et={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ot=g("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),tt=g("path",{d:"M216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31z",fill:"currentColor"},null,-1),nt=[ot,tt],at=P({name:"PlayCircleOutline",render:function(l,v){return H(),E("svg",et,nt)}}),rt={class:"audio-controller"},lt={class:"relative logo w-14 h-14"},it={class:"relative w-2/4 px-4"},st={class:"absolute top-0 right-4 text-[rgba(255,255,255,.4)] select-none"},dt=P({__name:"AudioController",emits:["change"],setup(t,{emit:l}){const v=y(0),h=y(!1),a=y(),d=y(),b=l;Be(()=>{var s,c;(s=a.value)==null||s.addEventListener("timeupdate",()=>{var m;b("change",((m=a.value)==null?void 0:m.currentTime)||0),a.value&&d.value&&(v.value=a.value.currentTime/d.value*100)}),(c=a.value)==null||c.addEventListener("canplaythrough",()=>{var m;d.value=(m=a.value)==null?void 0:m.duration})});const w=s=>{var c;a.value&&(a.value.currentTime=s/100*((c=a.value)==null?void 0:c.duration))},R=()=>{var s;h.value=!0,(s=a.value)==null||s.play()},f=()=>{var s;h.value=!1,(s=a.value)==null||s.pause()},x=s=>{let c="";if(s>-1){let m=Math.floor(s/60)%60,S=~~s%60;m<10&&(c+="0"),c+=m+":",S<10&&(c+="0"),c+=S}return c};return(s,c)=>{var D,z;const m=yo,S=Ho,N=Oo;return H(),E("div",rt,[g("audio",{class:"hidden",ref_key:"audio",ref:a,src:"/static/audio/music.mp3",controls:""},null,512),g("div",lt,[g("img",{class:De(["w-full h-full rounded-full",["rotate",V(h)?"cd-running":"cd-paused"]]),src:jo},null,2),c[1]||(c[1]=g("div",{class:"mask w-14 h-14 rounded-full"},null,-1)),Re(j(m,{class:"absolute p-icon",color:"#fff",size:"40",component:V(at),onClick:R},null,8,["component"]),[[ze,!V(h)]]),Re(j(m,{class:"absolute p-icon",color:"#fff",size:"40",component:V(Go),onClick:f},null,8,["component"]),[[ze,V(h)]])]),g("div",it,[c[2]||(c[2]=g("div",{class:"text-[#c4c3c3] select-none"},"周杰伦-反方向的钟",-1)),g("div",st,he(x(((D=V(a))==null?void 0:D.currentTime)||0))+" / "+he(x(((z=V(a))==null?void 0:z.duration)||0)),1),j(N,{class:"mt-2",value:V(v),"onUpdate:value":c[0]||(c[0]=W=>ko(v)?v.value=W:null),tooltip:!1,onUpdateValue:w},{thumb:Se(()=>[j(S,{size:20,"border-radius":12},{default:Se(()=>[j(m,{size:12,component:V(Xo)},null,8,["component"])]),_:1})]),_:1},8,["value"])])])}}});const ct=Co(dt,[["__scopeId","data-v-4f2323db"]]),ut={class:"music-container"},ft=P({__name:"index",setup(t){const l=y(),v=y(),h=y(),a=y(null);Be(()=>{l.value=d(Uo)});const d=R=>{const f=[];return R.forEach(x=>{const s=x.split("]"),c=s.pop();s.forEach(m=>{const S=m.substring(1);f.push({time:b(S),words:c})})}),f.sort((x,s)=>x.time-s.time)},b=R=>{const f=R.split(":");return+f[0]*60+ +f[1]},w=R=>{var S,N;const f=(S=l.value)==null?void 0:S.findIndex(D=>D.time>R),x=f?f-1:0;a.value=x;const s=(((N=v.value)==null?void 0:N.clientHeight)||0)/2-45,c=x*30;let m=0;s<=c&&(m=s-c),h.value&&(h.value.style.transform=`translateY(${m}px)`)};return(R,f)=>(H(),E("div",ut,[f[0]||(f[0]=g("div",{class:"mask"},null,-1)),f[1]||(f[1]=g("div",{class:"singer-logo"},null,-1)),g("div",{ref_key:"lrcContainer",ref:v,class:"music-lrc"},[g("ul",{ref_key:"lrcUl",ref:h},[(H(!0),E(Ro,null,zo(V(l),(x,s)=>(H(),E("li",{key:s,class:De(V(a)===s&&"active")},he(x.words),3))),128))],512)],512),j(ct,{onChange:w})]))}});export{ft as default};
