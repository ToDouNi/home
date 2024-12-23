import{c as Tt,b as Pt,d as zt,e as Rt,f as Lt,g as Bt,h as Et,i as Wt,j as kt,k as At,l as Vt,m as Mt,n as jt,o as Ht,p as It}from"./index-d7227303.js";import{d as C,r as h,ai as Gt,aj as Ot,m as f,ak as Re,q as Dt,x as Ft,i as Ve,I as Nt,l as ee,al as Ut,U as ae,am as Xt,an as qt,ao as Yt,ap as Kt,h as r,j as p,C as P,D as L,B as Jt,u as Qt,E as Me,K as Le,aq as ue,a7 as Zt,e as te,g as ea,y as ta,t as O,z as aa,V as na,F as ra,ab as Be,ar as fe,ae as le,a9 as oa,A as ve,J as D,as as ie,R as sa,S as la,at as ia,au as da,o as $,c as B,T as m,P as g,Q as c,a as k,w as K,b as de,$ as je,O as ne,ag as J,av as ca,a3 as ba}from"./index-d008e0e7.js";import{_ as He}from"./Button-8d2db39f.js";import{_ as xe}from"./index.vue_vue_type_script_setup_true_lang-d881e172.js";import{_ as _e}from"./Input-3f91d0ba.js";import{_ as pa}from"./CodeView.vue_vue_type_script_setup_true_lang-d3341a11.js";import{t as me}from"./throttle-3b069e93.js";import"./browser-ab29423e.js";import"./use-form-item-de0dfa7d.js";import"./unwrap-element-c7988c5b.js";const ua=Re(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Re("&::-webkit-scrollbar",{width:0,height:0})]),fa=C({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=h(null);function t(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const o=Gt();return ua.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ot,ssr:o}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...s){var b;(b=e.value)===null||b===void 0||b.scrollTo(...s)}})},render(){return f("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),va=C({name:"Add",render(){return f("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ma={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function ga(e){const{textColor2:t,primaryColor:o,textColorDisabled:l,closeIconColor:s,closeIconColorHover:b,closeIconColorPressed:d,closeColorHover:v,closeColorPressed:w,tabColor:x,baseColor:_,dividerColor:j,fontWeight:A,textColor1:S,borderRadius:R,fontSize:z,fontWeightStrong:E}=e;return Object.assign(Object.assign({},ma),{colorSegment:x,tabFontSizeCard:z,tabTextColorLine:S,tabTextColorActiveLine:o,tabTextColorHoverLine:o,tabTextColorDisabledLine:l,tabTextColorSegment:S,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:l,tabTextColorBar:S,tabTextColorActiveBar:o,tabTextColorHoverBar:o,tabTextColorDisabledBar:l,tabTextColorCard:S,tabTextColorHoverCard:S,tabTextColorActiveCard:o,tabTextColorDisabledCard:l,barColor:o,closeIconColor:s,closeIconColorHover:b,closeIconColorPressed:d,closeColorHover:v,closeColorPressed:w,closeBorderRadius:R,tabColor:x,tabColorSegment:_,tabBorderColor:j,tabFontWeightActive:A,tabFontWeight:A,tabBorderRadius:R,paneTextColor:t,fontWeightStrong:E})}const ha={name:"Tabs",common:Dt,self:ga},xa=ha,ye=Ft("n-tabs"),Ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},_a=C({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ie,setup(e){const t=Ve(ye,null);return t||Nt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return f("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ya=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Kt(Ie,["displayDirective"])),he=C({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ya,setup(e){const{mergedClsPrefixRef:t,valueRef:o,typeRef:l,closableRef:s,tabStyleRef:b,addTabStyleRef:d,tabClassRef:v,addTabClassRef:w,tabChangeIdRef:x,onBeforeLeaveRef:_,triggerRef:j,handleAdd:A,activateTab:S,handleClose:R}=Ve(ye);return{trigger:j,mergedClosable:ee(()=>{if(e.internalAddable)return!1;const{closable:z}=e;return z===void 0?s.value:z}),style:b,addStyle:d,tabClass:v,addTabClass:w,clsPrefix:t,value:o,type:l,handleClose(z){z.stopPropagation(),!e.disabled&&R(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){A();return}const{name:z}=e,E=++x.id;if(z!==o.value){const{value:G}=_;G?Promise.resolve(G(e.name,o.value)).then(V=>{V&&x.id===E&&S(z)}):S(z)}}}},render(){const{internalAddable:e,clsPrefix:t,name:o,disabled:l,label:s,tab:b,value:d,mergedClosable:v,trigger:w,$slots:{default:x}}=this,_=s??b;return f("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?f("div",{class:`${t}-tabs-tab-pad`}):null,f("div",Object.assign({key:o,"data-name":o,"data-disabled":l?!0:void 0},Ut({class:[`${t}-tabs-tab`,d===o&&`${t}-tabs-tab--active`,l&&`${t}-tabs-tab--disabled`,v&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:w==="click"?this.activateTab:void 0,onMouseenter:w==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),f("span",{class:`${t}-tabs-tab__label`},e?f(ae,null,f("div",{class:`${t}-tabs-tab__height-placeholder`}," "),f(Xt,{clsPrefix:t},{default:()=>f(va,null)})):x?x():typeof _=="object"?_:qt(_??o)),v&&this.type==="card"?f(Yt,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:l}):null))}}),Ca=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[p("segment-type",[r("tabs-rail",[P("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),p("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),p("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),p("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),p("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),p("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[p("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),p("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L("prefix, suffix",`
 display: flex;
 align-items: center;
 `),L("prefix","padding-right: 16px;"),L("suffix","padding-left: 16px;")]),p("top, bottom",[r("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),P("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),p("shadow-start",[P("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),p("shadow-end",[P("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),p("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),p("shadow-start",[P("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),p("shadow-end",[P("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),P("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p("disabled",{cursor:"not-allowed"}),L("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[P("&.transition-disabled",`
 transition: none;
 `),p("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),P("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),P("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),P("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),P("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),p("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P("&:hover",{color:"var(--n-tab-text-color-hover)"}),p("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),p("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[p("line-type",[p("top",[L("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),p("left",[L("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),p("right",[L("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),p("bottom",[L("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),p("card-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[p("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[L("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Jt("disabled",[P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),p("closable","padding-right: 8px;"),p("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),p("disabled","color: var(--n-tab-text-color-disabled);")])]),p("left, right",`
 flex-direction: column; 
 `,[L("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),p("top",[p("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),p("left",[p("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),p("right",[p("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),p("bottom",[p("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),L("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Sa=Object.assign(Object.assign({},Me.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),wa=C({name:"Tabs",props:Sa,setup(e,{slots:t}){var o,l,s,b;const{mergedClsPrefixRef:d,inlineThemeDisabled:v}=Qt(e),w=Me("Tabs","-tabs",Ca,xa,e,d),x=h(null),_=h(null),j=h(null),A=h(null),S=h(null),R=h(null),z=h(!0),E=h(!0),G=Le(e,["labelSize","size"]),V=Le(e,["activeName","value"]),Q=h((l=(o=V.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&l!==void 0?l:t.default?(b=(s=ue(t.default())[0])===null||s===void 0?void 0:s.props)===null||b===void 0?void 0:b.name:null),M=Zt(V,Q),y={id:0},W=ee(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});te(M,()=>{y.id=0,re(),Se()});function F(){var a;const{value:n}=M;return n===null?null:(a=x.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${n}"]`)}function Ge(a){if(e.type==="card")return;const{value:n}=_;if(!n)return;const i=n.style.opacity==="0";if(a){const u=`${d.value}-tabs-bar--disabled`,{barWidth:T,placement:H}=e;if(a.dataset.disabled==="true"?n.classList.add(u):n.classList.remove(u),["top","bottom"].includes(H)){if(Ce(["top","maxHeight","height"]),typeof T=="number"&&a.offsetWidth>=T){const I=Math.floor((a.offsetWidth-T)/2)+a.offsetLeft;n.style.left=`${I}px`,n.style.maxWidth=`${T}px`}else n.style.left=`${a.offsetLeft}px`,n.style.maxWidth=`${a.offsetWidth}px`;n.style.width="8192px",i&&(n.style.transition="none"),n.offsetWidth,i&&(n.style.transition="",n.style.opacity="1")}else{if(Ce(["left","maxWidth","width"]),typeof T=="number"&&a.offsetHeight>=T){const I=Math.floor((a.offsetHeight-T)/2)+a.offsetTop;n.style.top=`${I}px`,n.style.maxHeight=`${T}px`}else n.style.top=`${a.offsetTop}px`,n.style.maxHeight=`${a.offsetHeight}px`;n.style.height="8192px",i&&(n.style.transition="none"),n.offsetHeight,i&&(n.style.transition="",n.style.opacity="1")}}}function Oe(){if(e.type==="card")return;const{value:a}=_;a&&(a.style.opacity="0")}function Ce(a){const{value:n}=_;if(n)for(const i of a)n.style[i]=""}function re(){if(e.type==="card")return;const a=F();a?Ge(a):Oe()}function Se(){var a;const n=(a=S.value)===null||a===void 0?void 0:a.$el;if(!n)return;const i=F();if(!i)return;const{scrollLeft:u,offsetWidth:T}=n,{offsetLeft:H,offsetWidth:I}=i;u>H?n.scrollTo({top:0,left:H,behavior:"smooth"}):H+I>u+T&&n.scrollTo({top:0,left:H+I-T,behavior:"smooth"})}const oe=h(null);let ce=0,N=null;function De(a){const n=oe.value;if(n){ce=a.getBoundingClientRect().height;const i=`${ce}px`,u=()=>{n.style.height=i,n.style.maxHeight=i};N?(u(),N(),N=null):N=u}}function Fe(a){const n=oe.value;if(n){const i=a.getBoundingClientRect().height,u=()=>{document.body.offsetHeight,n.style.maxHeight=`${i}px`,n.style.height=`${Math.max(ce,i)}px`};N?(N(),N=null,u()):N=u}}function Ne(){const a=oe.value;if(a){a.style.maxHeight="",a.style.height="";const{paneWrapperStyle:n}=e;if(typeof n=="string")a.style.cssText=n;else if(n){const{maxHeight:i,height:u}=n;i!==void 0&&(a.style.maxHeight=i),u!==void 0&&(a.style.height=u)}}}const we={value:[]},$e=h("next");function Ue(a){const n=M.value;let i="next";for(const u of we.value){if(u===n)break;if(u===a){i="prev";break}}$e.value=i,Xe(a)}function Xe(a){const{onActiveNameChange:n,onUpdateValue:i,"onUpdate:value":u}=e;n&&le(n,a),i&&le(i,a),u&&le(u,a),Q.value=a}function qe(a){const{onClose:n}=e;n&&le(n,a)}function Te(){const{value:a}=_;if(!a)return;const n="transition-disabled";a.classList.add(n),re(),a.classList.remove(n)}const U=h(null);function be({transitionDisabled:a}){const n=x.value;if(!n)return;a&&n.classList.add("transition-disabled");const i=F();i&&U.value&&(U.value.style.width=`${i.offsetWidth}px`,U.value.style.height=`${i.offsetHeight}px`,U.value.style.transform=`translateX(${i.offsetLeft-oa(getComputedStyle(n).paddingLeft)}px)`,a&&U.value.offsetWidth),a&&n.classList.remove("transition-disabled")}te([M],()=>{e.type==="segment"&&ve(()=>{be({transitionDisabled:!1})})}),ea(()=>{e.type==="segment"&&be({transitionDisabled:!0})});let Pe=0;function Ye(a){var n;if(a.contentRect.width===0&&a.contentRect.height===0||Pe===a.contentRect.width)return;Pe=a.contentRect.width;const{type:i}=e;if((i==="line"||i==="bar")&&Te(),i!=="segment"){const{placement:u}=e;pe((u==="top"||u==="bottom"?(n=S.value)===null||n===void 0?void 0:n.$el:R.value)||null)}}const Ke=me(Ye,64);te([()=>e.justifyContent,()=>e.size],()=>{ve(()=>{const{type:a}=e;(a==="line"||a==="bar")&&Te()})});const X=h(!1);function Je(a){var n;const{target:i,contentRect:{width:u,height:T}}=a,H=i.parentElement.parentElement.offsetWidth,I=i.parentElement.parentElement.offsetHeight,{placement:Y}=e;if(!X.value)Y==="top"||Y==="bottom"?H<u&&(X.value=!0):I<T&&(X.value=!0);else{const{value:Z}=A;if(!Z)return;Y==="top"||Y==="bottom"?H-u>Z.$el.offsetWidth&&(X.value=!1):I-T>Z.$el.offsetHeight&&(X.value=!1)}pe(((n=S.value)===null||n===void 0?void 0:n.$el)||null)}const Qe=me(Je,64);function Ze(){const{onAdd:a}=e;a&&a(),ve(()=>{const n=F(),{value:i}=S;!n||!i||i.scrollTo({left:n.offsetLeft,top:0,behavior:"smooth"})})}function pe(a){if(!a)return;const{placement:n}=e;if(n==="top"||n==="bottom"){const{scrollLeft:i,scrollWidth:u,offsetWidth:T}=a;z.value=i<=0,E.value=i+T>=u}else{const{scrollTop:i,scrollHeight:u,offsetHeight:T}=a;z.value=i<=0,E.value=i+T>=u}}const et=me(a=>{pe(a.target)},64);ta(ye,{triggerRef:O(e,"trigger"),tabStyleRef:O(e,"tabStyle"),tabClassRef:O(e,"tabClass"),addTabStyleRef:O(e,"addTabStyle"),addTabClassRef:O(e,"addTabClass"),paneClassRef:O(e,"paneClass"),paneStyleRef:O(e,"paneStyle"),mergedClsPrefixRef:d,typeRef:O(e,"type"),closableRef:O(e,"closable"),valueRef:M,tabChangeIdRef:y,onBeforeLeaveRef:O(e,"onBeforeLeave"),activateTab:Ue,handleClose:qe,handleAdd:Ze}),aa(()=>{re(),Se()}),na(()=>{const{value:a}=j;if(!a)return;const{value:n}=d,i=`${n}-tabs-nav-scroll-wrapper--shadow-start`,u=`${n}-tabs-nav-scroll-wrapper--shadow-end`;z.value?a.classList.remove(i):a.classList.add(i),E.value?a.classList.remove(u):a.classList.add(u)});const tt={syncBarPosition:()=>{re()}},at=()=>{be({transitionDisabled:!0})},ze=ee(()=>{const{value:a}=G,{type:n}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n],u=`${a}${i}`,{self:{barColor:T,closeIconColor:H,closeIconColorHover:I,closeIconColorPressed:Y,tabColor:Z,tabBorderColor:nt,paneTextColor:rt,tabFontWeight:ot,tabBorderRadius:st,tabFontWeightActive:lt,colorSegment:it,fontWeightStrong:dt,tabColorSegment:ct,closeSize:bt,closeIconSize:pt,closeColorHover:ut,closeColorPressed:ft,closeBorderRadius:vt,[D("panePadding",a)]:se,[D("tabPadding",u)]:mt,[D("tabPaddingVertical",u)]:gt,[D("tabGap",u)]:ht,[D("tabGap",`${u}Vertical`)]:xt,[D("tabTextColor",n)]:_t,[D("tabTextColorActive",n)]:yt,[D("tabTextColorHover",n)]:Ct,[D("tabTextColorDisabled",n)]:St,[D("tabFontSize",a)]:wt},common:{cubicBezierEaseInOut:$t}}=w.value;return{"--n-bezier":$t,"--n-color-segment":it,"--n-bar-color":T,"--n-tab-font-size":wt,"--n-tab-text-color":_t,"--n-tab-text-color-active":yt,"--n-tab-text-color-disabled":St,"--n-tab-text-color-hover":Ct,"--n-pane-text-color":rt,"--n-tab-border-color":nt,"--n-tab-border-radius":st,"--n-close-size":bt,"--n-close-icon-size":pt,"--n-close-color-hover":ut,"--n-close-color-pressed":ft,"--n-close-border-radius":vt,"--n-close-icon-color":H,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":Y,"--n-tab-color":Z,"--n-tab-font-weight":ot,"--n-tab-font-weight-active":lt,"--n-tab-padding":mt,"--n-tab-padding-vertical":gt,"--n-tab-gap":ht,"--n-tab-gap-vertical":xt,"--n-pane-padding-left":ie(se,"left"),"--n-pane-padding-right":ie(se,"right"),"--n-pane-padding-top":ie(se,"top"),"--n-pane-padding-bottom":ie(se,"bottom"),"--n-font-weight-strong":dt,"--n-tab-color-segment":ct}}),q=v?ra("tabs",ee(()=>`${G.value[0]}${e.type[0]}`),ze,e):void 0;return Object.assign({mergedClsPrefix:d,mergedValue:M,renderedNames:new Set,segmentCapsuleElRef:U,tabsPaneWrapperRef:oe,tabsElRef:x,barElRef:_,addTabInstRef:A,xScrollInstRef:S,scrollWrapperElRef:j,addTabFixed:X,tabWrapperStyle:W,handleNavResize:Ke,mergedSize:G,handleScroll:et,handleTabsResize:Qe,cssVars:v?void 0:ze,themeClass:q==null?void 0:q.themeClass,animationDirection:$e,renderNameListRef:we,yScrollElRef:R,handleSegmentResize:at,onAnimationBeforeLeave:De,onAnimationEnter:Fe,onAnimationAfterEnter:Ne,onRender:q==null?void 0:q.onRender},tt)},render(){const{mergedClsPrefix:e,type:t,placement:o,addTabFixed:l,addable:s,mergedSize:b,renderNameListRef:d,onRender:v,paneWrapperClass:w,paneWrapperStyle:x,$slots:{default:_,prefix:j,suffix:A}}=this;v==null||v();const S=_?ue(_()).filter(y=>y.type.__TAB_PANE__===!0):[],R=_?ue(_()).filter(y=>y.type.__TAB__===!0):[],z=!R.length,E=t==="card",G=t==="segment",V=!E&&!G&&this.justifyContent;d.value=[];const Q=()=>{const y=f("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},V?null:f("div",{class:`${e}-tabs-scroll-padding`,style:o==="top"||o==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),z?S.map((W,F)=>(d.value.push(W.props.name),ge(f(he,Object.assign({},W.props,{internalCreatedByPane:!0,internalLeftPadded:F!==0&&(!V||V==="center"||V==="start"||V==="end")}),W.children?{default:W.children.tab}:void 0)))):R.map((W,F)=>(d.value.push(W.props.name),ge(F!==0&&!V?ke(W):W))),!l&&s&&E?We(s,(z?S.length:R.length)!==0):null,V?null:f("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return f("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},E&&s?f(fe,{onResize:this.handleTabsResize},{default:()=>y}):y,E?f("div",{class:`${e}-tabs-pad`}):null,E?null:f("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},M=G?"top":o;return f("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${b}-size`,V&&`${e}-tabs--flex`,`${e}-tabs--${M}`],style:this.cssVars},f("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${M}`,`${e}-tabs-nav`]},Be(j,y=>y&&f("div",{class:`${e}-tabs-nav__prefix`},y)),G?f(fe,{onResize:this.handleSegmentResize},{default:()=>f("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},f("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},f("div",{class:`${e}-tabs-wrapper`},f("div",{class:`${e}-tabs-tab`}))),z?S.map((y,W)=>(d.value.push(y.props.name),f(he,Object.assign({},y.props,{internalCreatedByPane:!0,internalLeftPadded:W!==0}),y.children?{default:y.children.tab}:void 0))):R.map((y,W)=>(d.value.push(y.props.name),W===0?y:ke(y))))}):f(fe,{onResize:this.handleNavResize},{default:()=>f("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(M)?f(fa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:Q}):f("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},Q()))}),l&&s&&E?We(s,!0):null,Be(A,y=>y&&f("div",{class:`${e}-tabs-nav__suffix`},y))),z&&(this.animated&&(M==="top"||M==="bottom")?f("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,w]},Ee(S,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ee(S,this.mergedValue,this.renderedNames)))}});function Ee(e,t,o,l,s,b,d){const v=[];return e.forEach(w=>{const{name:x,displayDirective:_,"display-directive":j}=w.props,A=R=>_===R||j===R,S=t===x;if(w.key!==void 0&&(w.key=x),S||A("show")||A("show:lazy")&&o.has(x)){o.has(x)||o.add(x);const R=!A("if");v.push(R?sa(w,[[la,S]]):w)}}),d?f(ia,{name:`${d}-transition`,onBeforeLeave:l,onEnter:s,onAfterEnter:b},{default:()=>v}):v}function We(e,t){return f(he,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function ke(e){const t=da(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ge(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const $a=Tt(()=>{const e=h(0),t=ee(()=>e.value*2);function o(){e.value++}return{count:e,doubleCount:t,increment:o}}),Ta={class:"mb-2"},Pa=C({__name:"Case1",setup(e){const{count:t,increment:o,doubleCount:l}=$a();return(s,b)=>{const d=He;return $(),B(ae,null,[m("div",Ta,[m("p",null,"count : "+g(c(t)),1),m("p",null,"doubleCount : "+g(c(l)),1)]),k(d,{onClick:c(o),type:"success"},{default:K(()=>b[0]||(b[0]=[de(" count+1 ")])),_:1},8,["onClick"])],64)}}}),za={};function Ra(e,t){return $(),B("div")}const La=je(za,[["render",Ra]]),Ba=C({__name:"State",setup(e){const t=[{title:"createGlobalState",smallTitle:"将状态保存全局作用域中，以便跨Vue实例复用",component:Pa},{title:"createInjectionState",smallTitle:"创建可以注入到组件中的全局状态",component:La}];return(o,l)=>($(),ne(xe,{cases:t}))}}),Ea={class:"mb-2 font-semibold"},Wa={class:"grid lg:grid-cols-4 md:grid-cols-2 gap-4"},ka=C({__name:"Case1",setup(e){const t=h(""),o=h(""),l=Pt();return te(l,s=>{o.value=(s==null?void 0:s.getAttribute("placeholder"))||""}),(s,b)=>{const d=_e;return $(),B(ae,null,[m("div",Ea,"当前选中:"+g(c(o)),1),m("div",Wa,[k(d,{value:c(t),"onUpdate:value":b[0]||(b[0]=v=>J(t)?t.value=v:null),type:"text",placeholder:"基本的 Input1"},null,8,["value"]),k(d,{value:c(t),"onUpdate:value":b[1]||(b[1]=v=>J(t)?t.value=v:null),type:"text",placeholder:"基本的 Input2"},null,8,["value"]),k(d,{value:c(t),"onUpdate:value":b[2]||(b[2]=v=>J(t)?t.value=v:null),type:"text",placeholder:"基本的 Input3"},null,8,["value"]),k(d,{value:c(t),"onUpdate:value":b[3]||(b[3]=v=>J(t)?t.value=v:null),type:"text",placeholder:"基本的 Input4"},null,8,["value"])])],64)}}}),Aa=C({__name:"Case2",setup(e){const t=zt(),o=h("💡最小化，我会变身哦！");return te(t,(l,s)=>{s==="hidden"&&l==="visible"&&(o.value="🎉你回来啦~~")}),(l,s)=>g(c(o))}}),Va=C({__name:"Case3",setup(e){const t=h(null),o=h(null),{x:l,y:s,style:b}=Rt(t,{initialValue:{x:250,y:20}});return(d,v)=>($(),B("div",{ref_key:"case3Wrap",ref:o,class:"relative w-96 h-36 border-solid border border-primary"},[de(g(`x:${c(l)} , y:${c(s)}`)+" ",1),m("div",{ref_key:"case3El",ref:t,style:ca(c(b)),class:"fixed cursor-pointer select-none border-solid border border-info px-2"}," 👋拖动我-useDraggable",4)],512))}}),Ma=C({__name:"Case4",setup(e){const t=h(null),{x:o,y:l,top:s,right:b,bottom:d,left:v,width:w,height:x}=Lt(t);return(_,j)=>($(),B("div",{ref_key:"case4El",ref:t,class:"border-solid w-96 border border-primary p-5 py-0 inline-block box-border"},[m("p",null,"x："+g(c(o)),1),m("p",null,"y："+g(c(l)),1),m("p",null,"top："+g(c(s)),1),m("p",null,"right："+g(c(b)),1),m("p",null,"bottom："+g(c(d)),1),m("p",null,"left："+g(c(v)),1),m("p",null,"width："+g(c(w)),1),m("p",null,"height："+g(c(x)),1)],512))}}),ja={class:"w-96"},Ha=C({__name:"Case5",setup(e){const t=h(null),{width:o,height:l}=Bt(t);return(s,b)=>{const d=_e;return $(),B("div",ja,[k(d,{type:"textarea",value:`width:${c(o)} , height:${c(l)}`,ref_key:"case5El",ref:t,placeholder:"操作来触发事件"},null,8,["value"])])}}}),Ia={key:0,class:"cursor-pointer p-2 border-2 border-dashed border-primary inline-block fixed right-24 bottom-10"},Ga=C({__name:"Case6",setup(e){const t=h(null),o=Et(t);return(l,s)=>($(),B(ae,null,[m("div",{ref_key:"case6El",ref:t}," 💡当屏幕里能看我时，你也能看到右侧的悬浮框 ",512),c(o)?($(),B("div",Ia," 你能够看到useElementVisibility ")):ba("",!0)],64))}}),Oa={class:"w-96 h-40 border-2 p-4 border-dashed border-primary overflow-auto box-border"},Da="💡恭喜呀，找到todou了!",Ae="💡滚动起来，找到todou!",Fa=C({__name:"Case7",setup(e){const t=h(Ae),o=h(null);return Wt(o,([{isIntersecting:l}])=>{t.value=l?Da:Ae}),(l,s)=>($(),B(ae,null,[m("p",null,g(c(t)),1),m("div",Oa,[s[0]||(s[0]=m("div",{class:"h-60"},null,-1)),m("span",{ref_key:"case7El",ref:o},"你好，todou",512),s[1]||(s[1]=m("div",{class:"h-60"},null,-1))])],64))}}),Na={class:"flex"},Ua=C({__name:"Case8",setup(e){const t=h(null),{x:o,y:l,isOutside:s,elementX:b,elementY:d,elementHeight:v,elementWidth:w}=kt(t);return(x,_)=>($(),B("div",Na,[m("div",{ref_key:"case8El",ref:t,class:"w-40 h-40 bg-slate-400 text-center rounded-sm mr-6",style:{"line-height":"160px"}}," Hover me ",512),m("div",null,[m("div",null,"x : "+g(c(o)),1),m("div",null,"y : "+g(c(l)),1),m("div",null,"isOutside : "+g(c(s)),1),m("div",null,"elementX : "+g(c(b)),1),m("div",null,"elementY : "+g(c(d)),1),m("div",null,"elementHeight : "+g(c(v)),1),m("div",null,"elementWidth : "+g(c(w)),1)])]))}}),Xa=`
useResizeObserver(el, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  text.value = 'width:'+ width +', height: ' + height'
})
`,qa=C({__name:"Case9",setup(e){return(t,o)=>{const l=pa;return $(),ne(l,{code:Xa,title:"💡该函数与useElementSize相似，多了个监听"})}}}),Ya="💡 点击窗口外的某个地方取消窗口聚焦。",Ka="💡 你聚焦了窗口",Ja=C({__name:"Case10",setup(e){const t=At();return(o,l)=>($(),B("div",null,g(c(t)?Ya:Ka),1))}}),Qa=C({__name:"Case11",setup(e){const{width:t,height:o}=Vt();return(l,s)=>($(),B("div",null,"当前窗口尺寸:"+g(`${c(t)} * ${c(o)}`),1))}}),Za=C({__name:"Elements",setup(e){const t=[{title:"useActiveElement",smallTitle:"响应式 document.activeElement",component:ka},{title:"useDocumentVisibility",smallTitle:"响应式跟踪 document.visibilityState",component:Aa},{title:"useDraggable",smallTitle:"使元素可拖拽",component:Va},{title:"useElementBounding",smallTitle:"让HTML元素的bounding box 响应式",component:Ma},{title:"useElementSize",smallTitle:"元素尺寸大小响应式",component:Ha},{title:"useElementVisibility",smallTitle:"跟踪元素在视口中的可见性",component:Ga},{title:"useIntersectionObserver",smallTitle:"响应式监听目标元素的可见性",component:Fa},{title:"useMouseInElement",smallTitle:"响应式获取鼠标相对于元素的位置",component:Ua},{title:"useResizeObserver",smallTitle:"监听元素内容和边框尺寸的变化。",component:qa},{title:"useWindowFocus",smallTitle:"使用 window.onfocus 和 window.onblur 事件响应式跟踪窗口焦点。",component:Ja},{title:"useWindowSize",smallTitle:"响应式获取窗口尺寸",component:Qa}];return(o,l)=>($(),ne(xe,{cases:t}))}}),en={key:0,class:"w-96"},tn={key:1},an=C({__name:"Case1",setup(e){const t=h(""),{post:o,data:l}=Mt({name:"browser-case1-demo"}),s=()=>{o(t.value)};return(b,d)=>{const v=_e,w=He;return c(l)?($(),B("div",tn," 💕我收到了消息: "+g(c(l)),1)):($(),B("div",en,[d[2]||(d[2]=de(" 打开另一个Tab页发送消息 ")),k(v,{class:"my-2",value:c(t),"onUpdate:value":d[0]||(d[0]=x=>J(t)?t.value=x:null),type:"text",placeholder:"基本的 Input"},null,8,["value"]),k(w,{type:"primary",onClick:s},{default:K(()=>d[1]||(d[1]=[de(" 发送消息 ")])),_:1})]))}}}),nn={class:"leading-7"},rn=C({__name:"Case2",setup(e){const t=jt(Ht),o=t.greaterOrEqual("sm"),l=t.greater("sm"),s=t.smallerOrEqual("lg"),b=t.smaller("lg");return(d,v)=>($(),B("div",nn,[m("div",null,"smAndLarger : "+g(c(o)),1),m("div",null,"largerThanSm : "+g(c(l)),1),m("div",null,"lgAndSmaller : "+g(c(s)),1),m("div",null,"smallerThanLg : "+g(c(b)),1)]))}}),on={lang:"yaml"},sn=C({__name:"Case3",setup(e){const t=It();return(o,l)=>($(),B("pre",on,g(c(t)),1))}}),ln={};function dn(e,t){return $(),B("div",null,"...")}const cn=je(ln,[["render",dn]]),bn=C({__name:"Browser",setup(e){const t=[{title:"useBroadcastChannel",smallTitle:"响应式 BroadcastChannel API",component:an},{title:"useBreakpoints",smallTitle:"响应式获取视口断点",component:rn},{title:"useBrowserLocation",smallTitle:"响应式获取 Location",component:sn},{title:"useClipboard",smallTitle:"剪贴板 API 提供了响应剪贴板命令",component:cn}];return(o,l)=>($(),ne(xe,{cases:t}))}}),Cn=C({__name:"index",setup(e){const t=h("elements");return(o,l)=>{const s=_a,b=wa;return $(),ne(b,{value:c(t),"onUpdate:value":l[0]||(l[0]=d=>J(t)?t.value=d:null),type:"line",animated:""},{default:K(()=>[k(s,{name:"state",tab:"State"},{default:K(()=>[k(Ba)]),_:1}),k(s,{name:"elements",tab:"Elements"},{default:K(()=>[k(Za)]),_:1}),k(s,{name:"browser",tab:"Browser"},{default:K(()=>[k(bn)]),_:1})]),_:1},8,["value"])}}});export{Cn as default};
