import{q as ve,s as we,h as Q,D as n,a6 as X,C as K,j as h,B as Y,d as S,u as xe,E as Z,r as D,t as _e,a7 as ye,l as T,J as y,a8 as A,a9 as m,F as ke,aa as E,m as s,ab as k,ac as $e,ad as Be,ae as q,$ as j,o as b,c as w,af as ee,T as c,a as M,w as G,Q as z,ag as Ce,U as te,ah as Se,O as Re}from"./index-a76aa963.js";import{u as Ve,a as ze}from"./index-09b8bb87.js";import{u as Fe}from"./use-form-item-07835162.js";import{_ as He}from"./index.vue_vue_type_script_setup_true_lang-d8938268.js";import"./unwrap-element-c7988c5b.js";const Le={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};function We(e){const{primaryColor:t,opacityDisabled:i,borderRadius:r,textColor3:d}=e,l="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Le),{iconColor:d,textColor:"white",loadingColor:t,opacityDisabled:i,railColor:l,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${we(t,{alpha:.2})}`})}const Te={name:"Switch",common:ve,self:We},Me=Te,De=Q("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),n("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),Q("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[X({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),n("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),K("&:focus",[n("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),h("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),Y("disabled",[Y("icon",[h("rubber-band",[h("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[K("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),h("active",[h("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[K("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),h("active",[n("rail",[n("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),n("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[n("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[X()]),n("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),h("active",[n("rail","background-color: var(--n-rail-color-active);")]),h("loading",[n("rail",`
 cursor: wait;
 `)]),h("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),je=Object.assign(Object.assign({},Z.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let F;const Ne=S({name:"Switch",props:je,setup(e){F===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?F=CSS.supports("width","max(1px)"):F=!1:F=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=xe(e),r=Z("Switch","-switch",De,Me,e,t),d=Fe(e),{mergedSizeRef:l,mergedDisabledRef:u}=d,x=D(e.defaultValue),$=_e(e,"value"),_=ye($,x),R=T(()=>_.value===e.checkedValue),B=D(!1),a=D(!1),f=T(()=>{const{railStyle:o}=e;if(o)return o({focused:a.value,checked:R.value})});function p(o){const{"onUpdate:value":H,onChange:L,onUpdateValue:W}=e,{nTriggerFormInput:N,nTriggerFormChange:P}=d;H&&q(H,o),W&&q(W,o),L&&q(L,o),x.value=o,N(),P()}function ne(){const{nTriggerFormFocus:o}=d;o()}function oe(){const{nTriggerFormBlur:o}=d;o()}function ae(){e.loading||u.value||(_.value!==e.checkedValue?p(e.checkedValue):p(e.uncheckedValue))}function ie(){a.value=!0,ne()}function se(){a.value=!1,oe(),B.value=!1}function re(o){e.loading||u.value||o.key===" "&&(_.value!==e.checkedValue?p(e.checkedValue):p(e.uncheckedValue),B.value=!1)}function le(o){e.loading||u.value||o.key===" "&&(o.preventDefault(),B.value=!0)}const J=T(()=>{const{value:o}=l,{self:{opacityDisabled:H,railColor:L,railColorActive:W,buttonBoxShadow:N,buttonColor:P,boxShadowFocus:ce,loadingColor:de,textColor:ue,iconColor:he,[y("buttonHeight",o)]:g,[y("buttonWidth",o)]:me,[y("buttonWidthPressed",o)]:be,[y("railHeight",o)]:v,[y("railWidth",o)]:V,[y("railBorderRadius",o)]:fe,[y("buttonBorderRadius",o)]:pe},common:{cubicBezierEaseInOut:ge}}=r.value;let O,U,I;return F?(O=`calc((${v} - ${g}) / 2)`,U=`max(${v}, ${g})`,I=`max(${V}, calc(${V} + ${g} - ${v}))`):(O=A((m(v)-m(g))/2),U=A(Math.max(m(v),m(g))),I=m(v)>m(g)?V:A(m(V)+m(g)-m(v))),{"--n-bezier":ge,"--n-button-border-radius":pe,"--n-button-box-shadow":N,"--n-button-color":P,"--n-button-width":me,"--n-button-width-pressed":be,"--n-button-height":g,"--n-height":U,"--n-offset":O,"--n-opacity-disabled":H,"--n-rail-border-radius":fe,"--n-rail-color":L,"--n-rail-color-active":W,"--n-rail-height":v,"--n-rail-width":V,"--n-width":I,"--n-box-shadow-focus":ce,"--n-loading-color":de,"--n-text-color":ue,"--n-icon-color":he}}),C=i?ke("switch",T(()=>l.value[0]),J,e):void 0;return{handleClick:ae,handleBlur:se,handleFocus:ie,handleKeyup:re,handleKeydown:le,mergedRailStyle:f,pressed:B,mergedClsPrefix:t,mergedValue:_,checked:R,mergedDisabled:u,cssVars:i?void 0:J,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:i,mergedRailStyle:r,onRender:d,$slots:l}=this;d==null||d();const{checked:u,unchecked:x,icon:$,"checked-icon":_,"unchecked-icon":R}=l,B=!(E($)&&E(_)&&E(R));return s("div",{role:"switch","aria-checked":i,class:[`${e}-switch`,this.themeClass,B&&`${e}-switch--icon`,i&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},s("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},k(u,a=>k(x,f=>a||f?s("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),a),s("div",{class:`${e}-switch__rail-placeholder`},s("div",{class:`${e}-switch__button-placeholder`}),f)):null)),s("div",{class:`${e}-switch__button`},k($,a=>k(_,f=>k(R,p=>s($e,null,{default:()=>this.loading?s(Be,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(f||a)?s("div",{class:`${e}-switch__button-icon`,key:f?"checked-icon":"icon"},f||a):!this.checked&&(p||a)?s("div",{class:`${e}-switch__button-icon`,key:p?"unchecked-icon":"icon"},p||a):null})))),k(u,a=>a&&s("div",{key:"checked",class:`${e}-switch__checked`},a)),k(x,a=>a&&s("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}}),Pe={},Oe={class:"max-w-md md:max-w-2xl bg-white overflow-hidden rounded-xl shadow-md"};function Ue(e,t){return b(),w("div",Oe,t[0]||(t[0]=[ee('<div class="md:flex"><img src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=404&amp;q=80" class="h-48 w-full md:w-48 object-cover md:shrink-0" alt=""><div class="px-4 py-3 md:flex-1"><p class="capitalize tracking-wide text-sm text-primary font-semibold">todou responsive layout</p><a href="https://blog.csdn.net/qq_39049726?type=blog" class="block my-2 text-sm leading-tight font-medium text-black hover:underline"> this is my Bold onclick enter </a><p class="text-slate-500"> Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that. </p></div></div>',1)]))}const Ie=j(Pe,[["render",Ue]]),Ke={};function Ae(e,t){return b(),w("div",null,t[0]||(t[0]=[ee('<span><span>悬浮：</span><div class="px-2 py-1 rounded-md bg-primary inline-block hover:bg-green-500 text-white">Button</div></span><span class="ml-4"><span>按下：</span><div class="px-2 py-1 rounded-md bg-primary inline-block hover:bg-green-500 text-white active:bg-violet-700"> Button</div></span><span class="ml-4"><span>激活：</span><div class="px-2 py-1 rounded-md bg-primary inline-block hover:bg-green-500 text-white focus:bg-violet-700 focus:text-white"> Button</div></span>',3)]))}const Ee=j(Ke,[["render",Ae]]),qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Je=c("path",{d:"M22.6 11.29L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6c.39-.39.39-1.03 0-1.42zm-4.68 1.69a5.997 5.997 0 0 1-3.88 4.66c-1.21.43-2.41.45-3.5.18c-.41-.1-.48-.65-.13-.9C11.98 15.84 13 14.04 13 12s-1.02-3.84-2.58-4.92c-.35-.24-.29-.79.13-.9c1.09-.27 2.29-.25 3.5.18c2.02.72 3.54 2.54 3.88 4.66c.05.33.07.66.07.98c-.01.32-.03.65-.08.98z",fill:"currentColor"},null,-1),Qe=[Je],Xe=S({name:"Brightness4Round",render:function(t,i){return b(),w("svg",qe,Qe)}}),Ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ge=c("path",{d:"M20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6a.996.996 0 0 0 0-1.41L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4z",fill:"currentColor"},null,-1),Ze=[Ge],et=S({name:"Brightness7Round",render:function(t,i){return b(),w("svg",Ye,Ze)}}),tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},nt=c("path",{d:"M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z",fill:"currentColor"},null,-1),ot=[nt],at=S({name:"LeaderboardOutlined",render:function(t,i){return b(),w("svg",tt,ot)}}),it={class:"bg-white max-w-2xl dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"},st={class:"inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"},rt=S({__name:"Case3",setup(e){const t=Ve(),i=D(t),r=ze(t);return(d,l)=>{const u=Se,x=Ne;return b(),w(te,null,[M(x,{class:"mb-4",value:z(i),"onUpdate:value":[l[0]||(l[0]=$=>Ce(i)?i.value=$:null),z(r)],size:"large"},{"checked-icon":G(()=>[M(u,{component:z(Xe)},null,8,["component"])]),"unchecked-icon":G(()=>[M(u,{component:z(et)},null,8,["component"])]),_:1},8,["value","onUpdate:value"]),c("div",it,[c("div",null,[c("span",st,[M(u,{class:"text-white",size:"20",component:z(at)},null,8,["component"])])]),l[1]||(l[1]=c("h3",{class:"text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"},"Writes Upside-Down",-1)),l[2]||(l[2]=c("p",{class:"text-slate-500 dark:text-slate-400 mt-2 text-sm"}," The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space. ",-1))])],64)}}}),lt={},ct={class:"t-layer-btn-primary"};function dt(e,t){return b(),w("div",ct,"按钮")}const ut=j(lt,[["render",dt]]);const ht={};function mt(e,t){return b(),w(te,null,[t[0]||(t[0]=c("div",{class:"btn bg-primary"},"primary",-1)),t[1]||(t[1]=c("div",{class:"btn bg-info"},"info",-1)),t[2]||(t[2]=c("div",{class:"btn bg-warn"},"warn",-1)),t[3]||(t[3]=c("div",{class:"btn bg-err"},"err",-1))],64)}const bt=j(ht,[["render",mt],["__scopeId","data-v-aead2cba"]]),xt=S({__name:"index",setup(e){const t=[{title:"响应式",smallTitle:"tailwind实现响应式布局",component:Ie},{title:"Hover",smallTitle:"处理悬停、焦点和其他状态",component:Ee},{title:"Theme",smallTitle:"CSS 在深色模式下设置网站的样式",component:rt},{title:"Apply",smallTitle:"使用@apply提取类",component:ut},{title:"自定义的主题",smallTitle:"这个背景色就是您自定义在tailwind.config的主题色",component:bt}];return(i,r)=>(b(),Re(He,{cases:t}))}});export{xt as default};
