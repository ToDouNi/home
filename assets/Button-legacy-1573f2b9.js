System.register(["./index-legacy-7bacaf7f.js","./browser-legacy-d999765b.js","./use-form-item-legacy-2277d4a6.js"],(function(o,r){"use strict";var e,t,n,l,i,s,a,d,c,u,b,x,p,h,v,f,C,g,y,m,P,S,$,w,T,H,z,D,F,E,G,B,I,W,k;return{setters:[o=>{e=o.C,t=o.aC,n=o.h,l=o.d,i=o.k,s=o.t,a=o.r,d=o.f,c=o.A,u=o.m,b=o.aD,x=o.x,p=o.q,h=o.j,v=o.D,f=o.B,C=o.a6,g=o.E,y=o.v,m=o.i,P=o.l,S=o.u,$=o.aE,w=o.J,T=o.s,H=o.F,z=o.ab,D=o.aF,F=o.aa,E=o.ac,G=o.ad,B=o.ae},o=>{I=o.i,W=o.a},o=>{k=o.u}],execute:function(){function r(o){return o.replace(/#|\(|\)|,|\s|\./g,"_")}const{cubicBezierEaseInOut:R}=t,O=n("base-wave","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n"),M=l({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){i("-base-wave",O,s(o,"clsPrefix"));const r=a(null),e=a(!1);let t=null;return d((()=>{null!==t&&window.clearTimeout(t)})),{active:e,selfRef:r,play(){null!==t&&(window.clearTimeout(t),e.value=!1,t=null),c((()=>{var o;null===(o=r.value)||void 0===o||o.offsetHeight,e.value=!0,t=window.setTimeout((()=>{e.value=!1,t=null}),1e3)}))}}},render(){const{clsPrefix:o}=this;return u("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}});function j(o){return b(o,[255,255,255,.16])}function _(o){return b(o,[0,0,0,.12])}const L=x("n-button-group"),Q={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},q={name:"Button",common:p,self:function(o){const{heightTiny:r,heightSmall:e,heightMedium:t,heightLarge:n,borderRadius:l,fontSizeTiny:i,fontSizeSmall:s,fontSizeMedium:a,fontSizeLarge:d,opacityDisabled:c,textColor2:u,textColor3:b,primaryColorHover:x,primaryColorPressed:p,borderColor:h,primaryColor:v,baseColor:f,infoColor:C,infoColorHover:g,infoColorPressed:y,successColor:m,successColorHover:P,successColorPressed:S,warningColor:$,warningColorHover:w,warningColorPressed:T,errorColor:H,errorColorHover:z,errorColorPressed:D,fontWeight:F,buttonColor2:E,buttonColor2Hover:G,buttonColor2Pressed:B,fontWeightStrong:I}=o;return Object.assign(Object.assign({},Q),{heightTiny:r,heightSmall:e,heightMedium:t,heightLarge:n,borderRadiusTiny:l,borderRadiusSmall:l,borderRadiusMedium:l,borderRadiusLarge:l,fontSizeTiny:i,fontSizeSmall:s,fontSizeMedium:a,fontSizeLarge:d,opacityDisabled:c,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:E,colorSecondaryHover:G,colorSecondaryPressed:B,colorTertiary:E,colorTertiaryHover:G,colorTertiaryPressed:B,colorQuaternary:"#0000",colorQuaternaryHover:G,colorQuaternaryPressed:B,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:b,textColorHover:x,textColorPressed:p,textColorFocus:x,textColorDisabled:u,textColorText:u,textColorTextHover:x,textColorTextPressed:p,textColorTextFocus:x,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:x,textColorGhostPressed:p,textColorGhostFocus:x,textColorGhostDisabled:u,border:`1px solid ${h}`,borderHover:`1px solid ${x}`,borderPressed:`1px solid ${p}`,borderFocus:`1px solid ${x}`,borderDisabled:`1px solid ${h}`,rippleColor:v,colorPrimary:v,colorHoverPrimary:x,colorPressedPrimary:p,colorFocusPrimary:x,colorDisabledPrimary:v,textColorPrimary:f,textColorHoverPrimary:f,textColorPressedPrimary:f,textColorFocusPrimary:f,textColorDisabledPrimary:f,textColorTextPrimary:v,textColorTextHoverPrimary:x,textColorTextPressedPrimary:p,textColorTextFocusPrimary:x,textColorTextDisabledPrimary:u,textColorGhostPrimary:v,textColorGhostHoverPrimary:x,textColorGhostPressedPrimary:p,textColorGhostFocusPrimary:x,textColorGhostDisabledPrimary:v,borderPrimary:`1px solid ${v}`,borderHoverPrimary:`1px solid ${x}`,borderPressedPrimary:`1px solid ${p}`,borderFocusPrimary:`1px solid ${x}`,borderDisabledPrimary:`1px solid ${v}`,rippleColorPrimary:v,colorInfo:C,colorHoverInfo:g,colorPressedInfo:y,colorFocusInfo:g,colorDisabledInfo:C,textColorInfo:f,textColorHoverInfo:f,textColorPressedInfo:f,textColorFocusInfo:f,textColorDisabledInfo:f,textColorTextInfo:C,textColorTextHoverInfo:g,textColorTextPressedInfo:y,textColorTextFocusInfo:g,textColorTextDisabledInfo:u,textColorGhostInfo:C,textColorGhostHoverInfo:g,textColorGhostPressedInfo:y,textColorGhostFocusInfo:g,textColorGhostDisabledInfo:C,borderInfo:`1px solid ${C}`,borderHoverInfo:`1px solid ${g}`,borderPressedInfo:`1px solid ${y}`,borderFocusInfo:`1px solid ${g}`,borderDisabledInfo:`1px solid ${C}`,rippleColorInfo:C,colorSuccess:m,colorHoverSuccess:P,colorPressedSuccess:S,colorFocusSuccess:P,colorDisabledSuccess:m,textColorSuccess:f,textColorHoverSuccess:f,textColorPressedSuccess:f,textColorFocusSuccess:f,textColorDisabledSuccess:f,textColorTextSuccess:m,textColorTextHoverSuccess:P,textColorTextPressedSuccess:S,textColorTextFocusSuccess:P,textColorTextDisabledSuccess:u,textColorGhostSuccess:m,textColorGhostHoverSuccess:P,textColorGhostPressedSuccess:S,textColorGhostFocusSuccess:P,textColorGhostDisabledSuccess:m,borderSuccess:`1px solid ${m}`,borderHoverSuccess:`1px solid ${P}`,borderPressedSuccess:`1px solid ${S}`,borderFocusSuccess:`1px solid ${P}`,borderDisabledSuccess:`1px solid ${m}`,rippleColorSuccess:m,colorWarning:$,colorHoverWarning:w,colorPressedWarning:T,colorFocusWarning:w,colorDisabledWarning:$,textColorWarning:f,textColorHoverWarning:f,textColorPressedWarning:f,textColorFocusWarning:f,textColorDisabledWarning:f,textColorTextWarning:$,textColorTextHoverWarning:w,textColorTextPressedWarning:T,textColorTextFocusWarning:w,textColorTextDisabledWarning:u,textColorGhostWarning:$,textColorGhostHoverWarning:w,textColorGhostPressedWarning:T,textColorGhostFocusWarning:w,textColorGhostDisabledWarning:$,borderWarning:`1px solid ${$}`,borderHoverWarning:`1px solid ${w}`,borderPressedWarning:`1px solid ${T}`,borderFocusWarning:`1px solid ${w}`,borderDisabledWarning:`1px solid ${$}`,rippleColorWarning:$,colorError:H,colorHoverError:z,colorPressedError:D,colorFocusError:z,colorDisabledError:H,textColorError:f,textColorHoverError:f,textColorPressedError:f,textColorFocusError:f,textColorDisabledError:f,textColorTextError:H,textColorTextHoverError:z,textColorTextPressedError:D,textColorTextFocusError:z,textColorTextDisabledError:u,textColorGhostError:H,textColorGhostHoverError:z,textColorGhostPressedError:D,textColorGhostFocusError:z,textColorGhostDisabledError:H,borderError:`1px solid ${H}`,borderHoverError:`1px solid ${z}`,borderPressedError:`1px solid ${D}`,borderFocusError:`1px solid ${z}`,borderDisabledError:`1px solid ${H}`,rippleColorError:H,waveOpacity:"0.6",fontWeight:F,fontWeightStrong:I})}},K=e([n("button","\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n -webkit-user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[h("color",[v("border",{borderColor:"var(--n-border-color)"}),h("disabled",[v("border",{borderColor:"var(--n-border-color-disabled)"})]),f("disabled",[e("&:focus",[v("state-border",{borderColor:"var(--n-border-color-focus)"})]),e("&:hover",[v("state-border",{borderColor:"var(--n-border-color-hover)"})]),e("&:active",[v("state-border",{borderColor:"var(--n-border-color-pressed)"})]),h("pressed",[v("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),h("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[v("border",{border:"var(--n-border-disabled)"})]),f("disabled",[e("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[v("state-border",{border:"var(--n-border-focus)"})]),e("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[v("state-border",{border:"var(--n-border-hover)"})]),e("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[v("state-border",{border:"var(--n-border-pressed)"})]),h("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[v("state-border",{border:"var(--n-border-pressed)"})])]),h("loading","cursor: wait;"),n("base-wave","\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ",[h("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),I&&"MozBoxSizing"in document.createElement("div").style?e("&::moz-focus-inner",{border:0}):null,v("border, state-border","\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n "),v("border",{border:"var(--n-border)"}),v("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),v("icon","\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ",[n("icon-slot","\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n ",[C({top:"50%",originalTransform:"translateY(-50%)"})]),function({duration:o=".2s",delay:r=".1s"}={}){return[e("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),e("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from","\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n "),e("&.fade-in-width-expand-transition-leave-active",`\n overflow: hidden;\n transition:\n opacity ${o} ${R},\n max-width ${o} ${R} ${r},\n margin-left ${o} ${R} ${r},\n margin-right ${o} ${R} ${r};\n `),e("&.fade-in-width-expand-transition-enter-active",`\n overflow: hidden;\n transition:\n opacity ${o} ${R} ${r},\n max-width ${o} ${R},\n margin-left ${o} ${R},\n margin-right ${o} ${R};\n `)]}()]),v("content","\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n min-width: 0;\n ",[e("~",[v("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),h("block","\n display: flex;\n width: 100%;\n "),h("dashed",[v("border, state-border",{borderStyle:"dashed !important"})]),h("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),e("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),e("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),N=Object.assign(Object.assign({},g.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!W}}),V=l({name:"Button",props:N,setup(o){const e=a(null),t=a(null),n=a(!1),l=y((()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered)),i=m(L,{}),{mergedSizeRef:s}=k({},{defaultSize:"medium",mergedSize:r=>{const{size:e}=o;if(e)return e;const{size:t}=i;if(t)return t;const{mergedSize:n}=r||{};return n?n.value:"medium"}}),d=P((()=>o.focusable&&!o.disabled)),{inlineThemeDisabled:c,mergedClsPrefixRef:u,mergedRtlRef:b}=S(o),x=g("Button","-button",K,q,o,u),p=$("Button",b,u),h=P((()=>{const r=x.value,{common:{cubicBezierEaseInOut:e,cubicBezierEaseOut:t},self:n}=r,{rippleDuration:l,opacityDisabled:i,fontWeight:a,fontWeightStrong:d}=n,c=s.value,{dashed:u,type:b,ghost:p,text:h,color:v,round:f,circle:C,textColor:g,secondary:y,tertiary:m,quaternary:P,strong:S}=o,$={"--n-font-weight":S?d:a};let H={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const z="tertiary"===b,D="default"===b,F=z?"default":b;if(h){const o=g||v;H={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":o||n[w("textColorText",F)],"--n-text-color-hover":o?j(o):n[w("textColorTextHover",F)],"--n-text-color-pressed":o?_(o):n[w("textColorTextPressed",F)],"--n-text-color-focus":o?j(o):n[w("textColorTextHover",F)],"--n-text-color-disabled":o||n[w("textColorTextDisabled",F)]}}else if(p||u){const o=g||v;H={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":v||n[w("rippleColor",F)],"--n-text-color":o||n[w("textColorGhost",F)],"--n-text-color-hover":o?j(o):n[w("textColorGhostHover",F)],"--n-text-color-pressed":o?_(o):n[w("textColorGhostPressed",F)],"--n-text-color-focus":o?j(o):n[w("textColorGhostHover",F)],"--n-text-color-disabled":o||n[w("textColorGhostDisabled",F)]}}else if(y){const o=D?n.textColor:z?n.textColorTertiary:n[w("color",F)],r=v||o,e="default"!==b&&"tertiary"!==b;H={"--n-color":e?T(r,{alpha:Number(n.colorOpacitySecondary)}):n.colorSecondary,"--n-color-hover":e?T(r,{alpha:Number(n.colorOpacitySecondaryHover)}):n.colorSecondaryHover,"--n-color-pressed":e?T(r,{alpha:Number(n.colorOpacitySecondaryPressed)}):n.colorSecondaryPressed,"--n-color-focus":e?T(r,{alpha:Number(n.colorOpacitySecondaryHover)}):n.colorSecondaryHover,"--n-color-disabled":n.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":r,"--n-text-color-hover":r,"--n-text-color-pressed":r,"--n-text-color-focus":r,"--n-text-color-disabled":r}}else if(m||P){const o=D?n.textColor:z?n.textColorTertiary:n[w("color",F)],r=v||o;m?(H["--n-color"]=n.colorTertiary,H["--n-color-hover"]=n.colorTertiaryHover,H["--n-color-pressed"]=n.colorTertiaryPressed,H["--n-color-focus"]=n.colorSecondaryHover,H["--n-color-disabled"]=n.colorTertiary):(H["--n-color"]=n.colorQuaternary,H["--n-color-hover"]=n.colorQuaternaryHover,H["--n-color-pressed"]=n.colorQuaternaryPressed,H["--n-color-focus"]=n.colorQuaternaryHover,H["--n-color-disabled"]=n.colorQuaternary),H["--n-ripple-color"]="#0000",H["--n-text-color"]=r,H["--n-text-color-hover"]=r,H["--n-text-color-pressed"]=r,H["--n-text-color-focus"]=r,H["--n-text-color-disabled"]=r}else H={"--n-color":v||n[w("color",F)],"--n-color-hover":v?j(v):n[w("colorHover",F)],"--n-color-pressed":v?_(v):n[w("colorPressed",F)],"--n-color-focus":v?j(v):n[w("colorFocus",F)],"--n-color-disabled":v||n[w("colorDisabled",F)],"--n-ripple-color":v||n[w("rippleColor",F)],"--n-text-color":g||(v?n.textColorPrimary:z?n.textColorTertiary:n[w("textColor",F)]),"--n-text-color-hover":g||(v?n.textColorHoverPrimary:n[w("textColorHover",F)]),"--n-text-color-pressed":g||(v?n.textColorPressedPrimary:n[w("textColorPressed",F)]),"--n-text-color-focus":g||(v?n.textColorFocusPrimary:n[w("textColorFocus",F)]),"--n-text-color-disabled":g||(v?n.textColorDisabledPrimary:n[w("textColorDisabled",F)])};let E={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};E=h?{"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:{"--n-border":n[w("border",F)],"--n-border-hover":n[w("borderHover",F)],"--n-border-pressed":n[w("borderPressed",F)],"--n-border-focus":n[w("borderFocus",F)],"--n-border-disabled":n[w("borderDisabled",F)]};const{[w("height",c)]:G,[w("fontSize",c)]:B,[w("padding",c)]:I,[w("paddingRound",c)]:W,[w("iconSize",c)]:k,[w("borderRadius",c)]:R,[w("iconMargin",c)]:O,waveOpacity:M}=n,L={"--n-width":C&&!h?G:"initial","--n-height":h?"initial":G,"--n-font-size":B,"--n-padding":C||h?"initial":f?W:I,"--n-icon-size":k,"--n-icon-margin":O,"--n-border-radius":h?"initial":C||f?G:R};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":e,"--n-bezier-ease-out":t,"--n-ripple-duration":l,"--n-opacity-disabled":i,"--n-wave-opacity":M},$),H),E),L)})),v=c?H("button",P((()=>{let e="";const{dashed:t,type:n,ghost:l,text:i,color:a,round:d,circle:c,textColor:u,secondary:b,tertiary:x,quaternary:p,strong:h}=o;t&&(e+="a"),l&&(e+="b"),i&&(e+="c"),d&&(e+="d"),c&&(e+="e"),b&&(e+="f"),x&&(e+="g"),p&&(e+="h"),h&&(e+="i"),a&&(e+=`j${r(a)}`),u&&(e+=`k${r(u)}`);const{value:v}=s;return e+=`l${v[0]}`,e+=`m${n[0]}`,e})),h,o):void 0;return{selfElRef:e,waveElRef:t,mergedClsPrefix:u,mergedFocusable:d,mergedSize:s,showBorder:l,enterPressed:n,rtlEnabled:p,handleMousedown:r=>{var t;d.value||r.preventDefault(),o.nativeFocusBehavior||(r.preventDefault(),o.disabled||d.value&&(null===(t=e.value)||void 0===t||t.focus({preventScroll:!0})))},handleKeydown:r=>{if("Enter"===r.key){if(!o.keyboard||o.loading)return void r.preventDefault();n.value=!0}},handleBlur:()=>{n.value=!1},handleKeyup:r=>{if("Enter"===r.key){if(!o.keyboard)return;n.value=!1}},handleClick:r=>{var e;if(!o.disabled&&!o.loading){const{onClick:n}=o;n&&B(n,r),o.text||null===(e=t.value)||void 0===e||e.play()}},customColorCssVars:P((()=>{const{color:r}=o;if(!r)return null;const e=j(r);return{"--n-border-color":r,"--n-border-color-hover":e,"--n-border-color-pressed":_(r),"--n-border-color-focus":e,"--n-border-color-disabled":r}})),cssVars:c?void 0:h,themeClass:null==v?void 0:v.themeClass,onRender:null==v?void 0:v.onRender}},render(){const{mergedClsPrefix:o,tag:r,onRender:e}=this;null==e||e();const t=z(this.$slots.default,(r=>r&&u("span",{class:`${o}-button__content`},r)));return u(r,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},"right"===this.iconPlacement&&t,u(D,{width:!0},{default:()=>z(this.$slots.icon,(r=>(this.loading||this.renderIcon||r)&&u("span",{class:`${o}-button__icon`,style:{margin:F(this.$slots.default)?"0":""}},u(E,null,{default:()=>this.loading?u(G,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):u("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)}))))}),"left"===this.iconPlacement&&t,this.text?null:u(M,{ref:"waveElRef",clsPrefix:o}),this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}});o("_",V)}}}));