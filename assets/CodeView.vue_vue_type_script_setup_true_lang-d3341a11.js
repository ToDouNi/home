import{i as Ze,aw as me,l as A,q as _n,C as ce,h as mn,j as Ce,D as vn,d as Re,u as Rn,r as Sn,g as yn,e as Ee,t as Ie,E as Xe,F as Nn,m as ve,ax as On,v as ke,ay as Le,a4 as Be,az as $e,y as wn,aA as xn,aB as Mn,o as Tn,O as An,w as Cn,T as De,P as In,a as kn,Q as Ln}from"./index-d008e0e7.js";function Bn(e,n){const t=Ze(me,null);return A(()=>e.hljs||(t==null?void 0:t.mergedHljsRef.value))}function $n(e){const{textColor2:n,fontSize:t,fontWeightStrong:r,textColor3:b}=e;return{textColor:n,fontSize:t,fontWeightStrong:r,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:b}}const Dn={name:"Code",common:_n,self:$n},jn=Dn,Pn=ce([mn("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[Ce("show-line-numbers",`
 display: flex;
 `),vn("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),Ce("word-wrap",[ce("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),ce("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),ce("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const n=`${e.bPrefix}code`;return[`${n} .hljs-comment,
 ${n} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${n} .hljs-doctag,
 ${n} .hljs-keyword,
 ${n} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${n} .hljs-section,
 ${n} .hljs-name,
 ${n} .hljs-selector-tag,
 ${n} .hljs-deletion,
 ${n} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${n} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${n} .hljs-string,
 ${n} .hljs-regexp,
 ${n} .hljs-addition,
 ${n} .hljs-attribute,
 ${n} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${n} .hljs-built_in,
 ${n} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${n} .hljs-attr,
 ${n} .hljs-variable,
 ${n} .hljs-template-variable,
 ${n} .hljs-type,
 ${n} .hljs-selector-class,
 ${n} .hljs-selector-attr,
 ${n} .hljs-selector-pseudo,
 ${n} .hljs-number {
 color: var(--n-hue-6);
 }`,`${n} .hljs-symbol,
 ${n} .hljs-bullet,
 ${n} .hljs-link,
 ${n} .hljs-meta,
 ${n} .hljs-selector-id,
 ${n} .hljs-title {
 color: var(--n-hue-2);
 }`,`${n} .hljs-emphasis {
 font-style: italic;
 }`,`${n} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${n} .hljs-link {
 text-decoration: underline;
 }`]}]),Hn=Object.assign(Object.assign({},Xe.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Un=Re({name:"Code",props:Hn,setup(e,{slots:n}){const{internalNoHighlight:t}=e,{mergedClsPrefixRef:r,inlineThemeDisabled:b}=Rn(),p=Sn(null),a=t?{value:void 0}:Bn(e),s=(S,x,c)=>{const{value:v}=a;return!v||!(S&&v.getLanguage(S))?null:v.highlight(c?x.trim():x,{language:S}).value},d=A(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),_=()=>{if(n.default)return;const{value:S}=p;if(!S)return;const{language:x}=e,c=e.uri?window.decodeURIComponent(e.code):e.code;if(x){const O=s(x,c,e.trim);if(O!==null){if(e.inline)S.innerHTML=O;else{const M=S.querySelector(".__code__");M&&S.removeChild(M);const I=document.createElement("pre");I.className="__code__",I.innerHTML=O,S.appendChild(I)}return}}if(e.inline){S.textContent=c;return}const v=S.querySelector(".__code__");if(v)v.textContent=c;else{const O=document.createElement("pre");O.className="__code__",O.textContent=c,S.innerHTML="",S.appendChild(O)}};yn(_),Ee(Ie(e,"language"),_),Ee(Ie(e,"code"),_),t||Ee(a,_);const R=Xe("Code","-code",Pn,jn,e,r),L=A(()=>{const{common:{cubicBezierEaseInOut:S,fontFamilyMono:x},self:{textColor:c,fontSize:v,fontWeightStrong:O,lineNumberTextColor:M,"mono-3":I,"hue-1":H,"hue-2":G,"hue-3":U,"hue-4":ne,"hue-5":X,"hue-5-2":$,"hue-6":V,"hue-6-2":J}}=R.value,{internalFontSize:Y}=e;return{"--n-font-size":Y?`${Y}px`:v,"--n-font-family":x,"--n-font-weight-strong":O,"--n-bezier":S,"--n-text-color":c,"--n-mono-3":I,"--n-hue-1":H,"--n-hue-2":G,"--n-hue-3":U,"--n-hue-4":ne,"--n-hue-5":X,"--n-hue-5-2":$,"--n-hue-6":V,"--n-hue-6-2":J,"--n-line-number-text-color":M}}),w=b?Nn("code",A(()=>`${e.internalFontSize||"a"}`),L,e):void 0;return{mergedClsPrefix:r,codeRef:p,mergedShowLineNumbers:d,lineNumbers:A(()=>{let S=1;const x=[];let c=!1;for(const v of e.code)v===`
`?(c=!0,x.push(S++)):c=!1;return c||x.push(S++),x.join(`
`)}),cssVars:b?void 0:L,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){var e,n;const{mergedClsPrefix:t,wordWrap:r,mergedShowLineNumbers:b,onRender:p}=this;return p==null||p(),ve("code",{class:[`${t}-code`,this.themeClass,r&&`${t}-code--word-wrap`,b&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},b?ve("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),zn={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(xn("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},Fn=Re({name:"ConfigProvider",alias:["App"],props:zn,setup(e){const n=Ze(me,null),t=A(()=>{const{theme:c}=e;if(c===null)return;const v=n==null?void 0:n.mergedThemeRef.value;return c===void 0?v:v===void 0?c:Object.assign({},v,c)}),r=A(()=>{const{themeOverrides:c}=e;if(c!==null){if(c===void 0)return n==null?void 0:n.mergedThemeOverridesRef.value;{const v=n==null?void 0:n.mergedThemeOverridesRef.value;return v===void 0?c:On({},v,c)}}}),b=ke(()=>{const{namespace:c}=e;return c===void 0?n==null?void 0:n.mergedNamespaceRef.value:c}),p=ke(()=>{const{bordered:c}=e;return c===void 0?n==null?void 0:n.mergedBorderedRef.value:c}),a=A(()=>{const{icons:c}=e;return c===void 0?n==null?void 0:n.mergedIconsRef.value:c}),s=A(()=>{const{componentOptions:c}=e;return c!==void 0?c:n==null?void 0:n.mergedComponentPropsRef.value}),d=A(()=>{const{clsPrefix:c}=e;return c!==void 0?c:n?n.mergedClsPrefixRef.value:Le}),_=A(()=>{var c;const{rtl:v}=e;if(v===void 0)return n==null?void 0:n.mergedRtlRef.value;const O={};for(const M of v)O[M.name]=Be(M),(c=M.peers)===null||c===void 0||c.forEach(I=>{I.name in O||(O[I.name]=Be(I))});return O}),R=A(()=>e.breakpoints||(n==null?void 0:n.mergedBreakpointsRef.value)),L=e.inlineThemeDisabled||(n==null?void 0:n.inlineThemeDisabled),w=e.preflightStyleDisabled||(n==null?void 0:n.preflightStyleDisabled),S=e.styleMountTarget||(n==null?void 0:n.styleMountTarget),x=A(()=>{const{value:c}=t,{value:v}=r,O=v&&Object.keys(v).length!==0,M=c==null?void 0:c.name;return M?O?`${M}-${$e(JSON.stringify(r.value))}`:M:O?$e(JSON.stringify(r.value)):""});return wn(me,{mergedThemeHashRef:x,mergedBreakpointsRef:R,mergedRtlRef:_,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:p,mergedNamespaceRef:b,mergedClsPrefixRef:d,mergedLocaleRef:A(()=>{const{locale:c}=e;if(c!==null)return c===void 0?n==null?void 0:n.mergedLocaleRef.value:c}),mergedDateLocaleRef:A(()=>{const{dateLocale:c}=e;if(c!==null)return c===void 0?n==null?void 0:n.mergedDateLocaleRef.value:c}),mergedHljsRef:A(()=>{const{hljs:c}=e;return c===void 0?n==null?void 0:n.mergedHljsRef.value:c}),mergedKatexRef:A(()=>{const{katex:c}=e;return c===void 0?n==null?void 0:n.mergedKatexRef.value:c}),mergedThemeRef:t,mergedThemeOverridesRef:r,inlineThemeDisabled:L||!1,preflightStyleDisabled:w||!1,styleMountTarget:S}),{mergedClsPrefix:d,mergedBordered:p,mergedNamespace:b,mergedTheme:t,mergedThemeOverrides:r}},render(){var e,n,t,r;return this.abstract?(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t):ve(this.as||this.tag,{class:`${this.mergedClsPrefix||Le}-config-provider`},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});function Ve(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],r=typeof t;(r==="object"||r==="function")&&!Object.isFrozen(t)&&Ve(t)}),e}class je{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Je(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function F(e,...n){const t=Object.create(null);for(const r in e)t[r]=e[r];return n.forEach(function(r){for(const b in r)t[b]=r[b]}),t}const Gn="</span>",Pe=e=>!!e.scope,Wn=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((r,b)=>`${r}${"_".repeat(b+1)}`)].join(" ")}return`${n}${e}`};class Kn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Je(n)}openNode(n){if(!Pe(n))return;const t=Wn(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){Pe(n)&&(this.buffer+=Gn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const He=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class Se{constructor(){this.rootNode=He(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=He({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(r=>this._walk(n,r)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Se._collapse(t)}))}}class Zn extends Se{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const r=n.root;t&&(r.scope=`language:${t}`),this.add(r)}toHTML(){return new Kn(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function te(e){return e?typeof e=="string"?e:e.source:null}function Ye(e){return Z("(?=",e,")")}function Xn(e){return Z("(?:",e,")*")}function Vn(e){return Z("(?:",e,")?")}function Z(...e){return e.map(t=>te(t)).join("")}function Jn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function ye(...e){return"("+(Jn(e).capture?"":"?:")+e.map(r=>te(r)).join("|")+")"}function qe(e){return new RegExp(e.toString()+"|").exec("").length-1}function Yn(e,n){const t=e&&e.exec(n);return t&&t.index===0}const qn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ne(e,{joinWith:n}){let t=0;return e.map(r=>{t+=1;const b=t;let p=te(r),a="";for(;p.length>0;){const s=qn.exec(p);if(!s){a+=p;break}a+=p.substring(0,s.index),p=p.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?a+="\\"+String(Number(s[1])+b):(a+=s[0],s[0]==="("&&t++)}return a}).map(r=>`(${r})`).join(n)}const Qn=/\b\B/,Qe="[a-zA-Z]\\w*",Oe="[a-zA-Z_]\\w*",en="\\b\\d+(\\.\\d+)?",nn="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",tn="\\b(0b[01]+)",et="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",nt=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=Z(n,/.*\b/,e.binary,/\b.*/)),F({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,r)=>{t.index!==0&&r.ignoreMatch()}},e)},ie={begin:"\\\\[\\s\\S]",relevance:0},tt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ie]},it={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ie]},rt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},de=function(e,n,t={}){const r=F({scope:"comment",begin:e,end:n,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const b=ye("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:Z(/[ ]+/,"(",b,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},st=de("//","$"),ot=de("/\\*","\\*/"),at=de("#","$"),ct={scope:"number",begin:en,relevance:0},lt={scope:"number",begin:nn,relevance:0},ut={scope:"number",begin:tn,relevance:0},dt={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ie,{begin:/\[/,end:/\]/,relevance:0,contains:[ie]}]}]},ft={scope:"title",begin:Qe,relevance:0},gt={scope:"title",begin:Oe,relevance:0},ht={begin:"\\.\\s*"+Oe,relevance:0},bt=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var le=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Qn,IDENT_RE:Qe,UNDERSCORE_IDENT_RE:Oe,NUMBER_RE:en,C_NUMBER_RE:nn,BINARY_NUMBER_RE:tn,RE_STARTERS_RE:et,SHEBANG:nt,BACKSLASH_ESCAPE:ie,APOS_STRING_MODE:tt,QUOTE_STRING_MODE:it,PHRASAL_WORDS_MODE:rt,COMMENT:de,C_LINE_COMMENT_MODE:st,C_BLOCK_COMMENT_MODE:ot,HASH_COMMENT_MODE:at,NUMBER_MODE:ct,C_NUMBER_MODE:lt,BINARY_NUMBER_MODE:ut,REGEXP_MODE:dt,TITLE_MODE:ft,UNDERSCORE_TITLE_MODE:gt,METHOD_GUARD:ht,END_SAME_AS_BEGIN:bt});function pt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Et(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function _t(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=pt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function mt(e,n){Array.isArray(e.illegal)&&(e.illegal=ye(...e.illegal))}function vt(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Rt(e,n){e.relevance===void 0&&(e.relevance=1)}const St=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=t.keywords,e.begin=Z(t.beforeMatch,Ye(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},yt=["of","and","for","in","not","or","if","then","parent","list","value"],Nt="keyword";function rn(e,n,t=Nt){const r=Object.create(null);return typeof e=="string"?b(t,e.split(" ")):Array.isArray(e)?b(t,e):Object.keys(e).forEach(function(p){Object.assign(r,rn(e[p],n,p))}),r;function b(p,a){n&&(a=a.map(s=>s.toLowerCase())),a.forEach(function(s){const d=s.split("|");r[d[0]]=[p,Ot(d[0],d[1])]})}}function Ot(e,n){return n?Number(n):wt(e)?0:1}function wt(e){return yt.includes(e.toLowerCase())}const Ue={},K=e=>{console.error(e)},ze=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Q=(e,n)=>{Ue[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Ue[`${e}/${n}`]=!0)},ue=new Error;function sn(e,n,{key:t}){let r=0;const b=e[t],p={},a={};for(let s=1;s<=n.length;s++)a[s+r]=b[s],p[s+r]=!0,r+=qe(n[s-1]);e[t]=a,e[t]._emit=p,e[t]._multi=!0}function xt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ue;if(typeof e.beginScope!="object"||e.beginScope===null)throw K("beginScope must be object"),ue;sn(e,e.begin,{key:"beginScope"}),e.begin=Ne(e.begin,{joinWith:""})}}function Mt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ue;if(typeof e.endScope!="object"||e.endScope===null)throw K("endScope must be object"),ue;sn(e,e.end,{key:"endScope"}),e.end=Ne(e.end,{joinWith:""})}}function Tt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function At(e){Tt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),xt(e),Mt(e)}function Ct(e){function n(a,s){return new RegExp(te(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,d){d.position=this.position++,this.matchIndexes[this.matchAt]=d,this.regexes.push([d,s]),this.matchAt+=qe(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(d=>d[1]);this.matcherRe=n(Ne(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const d=this.matcherRe.exec(s);if(!d)return null;const _=d.findIndex((L,w)=>w>0&&L!==void 0),R=this.matchIndexes[_];return d.splice(0,_),Object.assign(d,R)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const d=new t;return this.rules.slice(s).forEach(([_,R])=>d.addRule(_,R)),d.compile(),this.multiRegexes[s]=d,d}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,d){this.rules.push([s,d]),d.type==="begin"&&this.count++}exec(s){const d=this.getMatcher(this.regexIndex);d.lastIndex=this.lastIndex;let _=d.exec(s);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const R=this.getMatcher(0);R.lastIndex=this.lastIndex+1,_=R.exec(s)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function b(a){const s=new r;return a.contains.forEach(d=>s.addRule(d.begin,{rule:d,type:"begin"})),a.terminatorEnd&&s.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&s.addRule(a.illegal,{type:"illegal"}),s}function p(a,s){const d=a;if(a.isCompiled)return d;[Et,vt,At,St].forEach(R=>R(a,s)),e.compilerExtensions.forEach(R=>R(a,s)),a.__beforeBegin=null,[_t,mt,Rt].forEach(R=>R(a,s)),a.isCompiled=!0;let _=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),_=a.keywords.$pattern,delete a.keywords.$pattern),_=_||/\w+/,a.keywords&&(a.keywords=rn(a.keywords,e.case_insensitive)),d.keywordPatternRe=n(_,!0),s&&(a.begin||(a.begin=/\B|\b/),d.beginRe=n(d.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(d.endRe=n(d.end)),d.terminatorEnd=te(d.end)||"",a.endsWithParent&&s.terminatorEnd&&(d.terminatorEnd+=(a.end?"|":"")+s.terminatorEnd)),a.illegal&&(d.illegalRe=n(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(R){return It(R==="self"?a:R)})),a.contains.forEach(function(R){p(R,d)}),a.starts&&p(a.starts,s),d.matcher=b(d),d}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=F(e.classNameAliases||{}),p(e)}function on(e){return e?e.endsWithParent||on(e.starts):!1}function It(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return F(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:on(e)?F(e,{starts:e.starts?F(e.starts):null}):Object.isFrozen(e)?F(e):e}var kt="11.8.0";class Lt extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const _e=Je,Fe=F,Ge=Symbol("nomatch"),Bt=7,an=function(e){const n=Object.create(null),t=Object.create(null),r=[];let b=!0;const p="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Zn};function d(i){return s.noHighlightRe.test(i)}function _(i){let l=i.className+" ";l+=i.parentNode?i.parentNode.className:"";const g=s.languageDetectRe.exec(l);if(g){const E=$(g[1]);return E||(ze(p.replace("{}",g[1])),ze("Falling back to no-highlight mode for this block.",i)),E?g[1]:"no-highlight"}return l.split(/\s+/).find(E=>d(E)||$(E))}function R(i,l,g){let E="",N="";typeof l=="object"?(E=i,g=l.ignoreIllegals,N=l.language):(Q("10.7.0","highlight(lang, code, ...args) has been deprecated."),Q("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),N=i,E=l),g===void 0&&(g=!0);const k={code:E,language:N};q("before:highlight",k);const D=k.result?k.result:L(k.language,k.code,g);return D.code=k.code,q("after:highlight",D),D}function L(i,l,g,E){const N=Object.create(null);function k(o,u){return o.keywords[u]}function D(){if(!f.keywords){T.addText(y);return}let o=0;f.keywordPatternRe.lastIndex=0;let u=f.keywordPatternRe.exec(y),h="";for(;u;){h+=y.substring(o,u.index);const m=P.case_insensitive?u[0].toLowerCase():u[0],C=k(f,m);if(C){const[z,pn]=C;if(T.addText(h),h="",N[m]=(N[m]||0)+1,N[m]<=Bt&&(ae+=pn),z.startsWith("_"))h+=u[0];else{const En=P.classNameAliases[z]||z;j(u[0],En)}}else h+=u[0];o=f.keywordPatternRe.lastIndex,u=f.keywordPatternRe.exec(y)}h+=y.substring(o),T.addText(h)}function se(){if(y==="")return;let o=null;if(typeof f.subLanguage=="string"){if(!n[f.subLanguage]){T.addText(y);return}o=L(f.subLanguage,y,!0,Ae[f.subLanguage]),Ae[f.subLanguage]=o._top}else o=S(y,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(ae+=o.relevance),T.__addSublanguage(o._emitter,o.language)}function B(){f.subLanguage!=null?se():D(),y=""}function j(o,u){o!==""&&(T.startScope(u),T.addText(o),T.endScope())}function we(o,u){let h=1;const m=u.length-1;for(;h<=m;){if(!o._emit[h]){h++;continue}const C=P.classNameAliases[o[h]]||o[h],z=u[h];C?j(z,C):(y=z,D(),y=""),h++}}function xe(o,u){return o.scope&&typeof o.scope=="string"&&T.openNode(P.classNameAliases[o.scope]||o.scope),o.beginScope&&(o.beginScope._wrap?(j(y,P.classNameAliases[o.beginScope._wrap]||o.beginScope._wrap),y=""):o.beginScope._multi&&(we(o.beginScope,u),y="")),f=Object.create(o,{parent:{value:f}}),f}function Me(o,u,h){let m=Yn(o.endRe,h);if(m){if(o["on:end"]){const C=new je(o);o["on:end"](u,C),C.isMatchIgnored&&(m=!1)}if(m){for(;o.endsParent&&o.parent;)o=o.parent;return o}}if(o.endsWithParent)return Me(o.parent,u,h)}function dn(o){return f.matcher.regexIndex===0?(y+=o[0],1):(pe=!0,0)}function fn(o){const u=o[0],h=o.rule,m=new je(h),C=[h.__beforeBegin,h["on:begin"]];for(const z of C)if(z&&(z(o,m),m.isMatchIgnored))return dn(u);return h.skip?y+=u:(h.excludeBegin&&(y+=u),B(),!h.returnBegin&&!h.excludeBegin&&(y=u)),xe(h,o),h.returnBegin?0:u.length}function gn(o){const u=o[0],h=l.substring(o.index),m=Me(f,o,h);if(!m)return Ge;const C=f;f.endScope&&f.endScope._wrap?(B(),j(u,f.endScope._wrap)):f.endScope&&f.endScope._multi?(B(),we(f.endScope,o)):C.skip?y+=u:(C.returnEnd||C.excludeEnd||(y+=u),B(),C.excludeEnd&&(y=u));do f.scope&&T.closeNode(),!f.skip&&!f.subLanguage&&(ae+=f.relevance),f=f.parent;while(f!==m.parent);return m.starts&&xe(m.starts,o),C.returnEnd?0:u.length}function hn(){const o=[];for(let u=f;u!==P;u=u.parent)u.scope&&o.unshift(u.scope);o.forEach(u=>T.openNode(u))}let oe={};function Te(o,u){const h=u&&u[0];if(y+=o,h==null)return B(),0;if(oe.type==="begin"&&u.type==="end"&&oe.index===u.index&&h===""){if(y+=l.slice(u.index,u.index+1),!b){const m=new Error(`0 width match regex (${i})`);throw m.languageName=i,m.badRule=oe.rule,m}return 1}if(oe=u,u.type==="begin")return fn(u);if(u.type==="illegal"&&!g){const m=new Error('Illegal lexeme "'+h+'" for mode "'+(f.scope||"<unnamed>")+'"');throw m.mode=f,m}else if(u.type==="end"){const m=gn(u);if(m!==Ge)return m}if(u.type==="illegal"&&h==="")return 1;if(be>1e5&&be>u.index*3)throw new Error("potential infinite loop, way more iterations than matches");return y+=h,h.length}const P=$(i);if(!P)throw K(p.replace("{}",i)),new Error('Unknown language: "'+i+'"');const bn=Ct(P);let he="",f=E||bn;const Ae={},T=new s.__emitter(s);hn();let y="",ae=0,W=0,be=0,pe=!1;try{if(P.__emitTokens)P.__emitTokens(l,T);else{for(f.matcher.considerAll();;){be++,pe?pe=!1:f.matcher.considerAll(),f.matcher.lastIndex=W;const o=f.matcher.exec(l);if(!o)break;const u=l.substring(W,o.index),h=Te(u,o);W=o.index+h}Te(l.substring(W))}return T.finalize(),he=T.toHTML(),{language:i,value:he,relevance:ae,illegal:!1,_emitter:T,_top:f}}catch(o){if(o.message&&o.message.includes("Illegal"))return{language:i,value:_e(l),illegal:!0,relevance:0,_illegalBy:{message:o.message,index:W,context:l.slice(W-100,W+100),mode:o.mode,resultSoFar:he},_emitter:T};if(b)return{language:i,value:_e(l),illegal:!1,relevance:0,errorRaised:o,_emitter:T,_top:f};throw o}}function w(i){const l={value:_e(i),illegal:!1,relevance:0,_top:a,_emitter:new s.__emitter(s)};return l._emitter.addText(i),l}function S(i,l){l=l||s.languages||Object.keys(n);const g=w(i),E=l.filter($).filter(J).map(B=>L(B,i,!1));E.unshift(g);const N=E.sort((B,j)=>{if(B.relevance!==j.relevance)return j.relevance-B.relevance;if(B.language&&j.language){if($(B.language).supersetOf===j.language)return 1;if($(j.language).supersetOf===B.language)return-1}return 0}),[k,D]=N,se=k;return se.secondBest=D,se}function x(i,l,g){const E=l&&t[l]||g;i.classList.add("hljs"),i.classList.add(`language-${E}`)}function c(i){let l=null;const g=_(i);if(d(g))return;if(q("before:highlightElement",{el:i,language:g}),i.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(i)),s.throwUnescapedHTML))throw new Lt("One of your code blocks includes unescaped HTML.",i.innerHTML);l=i;const E=l.textContent,N=g?R(E,{language:g,ignoreIllegals:!0}):S(E);i.innerHTML=N.value,x(i,g,N.language),i.result={language:N.language,re:N.relevance,relevance:N.relevance},N.secondBest&&(i.secondBest={language:N.secondBest.language,relevance:N.secondBest.relevance}),q("after:highlightElement",{el:i,result:N,text:E})}function v(i){s=Fe(s,i)}const O=()=>{H(),Q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function M(){H(),Q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let I=!1;function H(){if(document.readyState==="loading"){I=!0;return}document.querySelectorAll(s.cssSelector).forEach(c)}function G(){I&&H()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",G,!1);function U(i,l){let g=null;try{g=l(e)}catch(E){if(K("Language definition for '{}' could not be registered.".replace("{}",i)),b)K(E);else throw E;g=a}g.name||(g.name=i),n[i]=g,g.rawDefinition=l.bind(null,e),g.aliases&&V(g.aliases,{languageName:i})}function ne(i){delete n[i];for(const l of Object.keys(t))t[l]===i&&delete t[l]}function X(){return Object.keys(n)}function $(i){return i=(i||"").toLowerCase(),n[i]||n[t[i]]}function V(i,{languageName:l}){typeof i=="string"&&(i=[i]),i.forEach(g=>{t[g.toLowerCase()]=l})}function J(i){const l=$(i);return l&&!l.disableAutodetect}function Y(i){i["before:highlightBlock"]&&!i["before:highlightElement"]&&(i["before:highlightElement"]=l=>{i["before:highlightBlock"](Object.assign({block:l.el},l))}),i["after:highlightBlock"]&&!i["after:highlightElement"]&&(i["after:highlightElement"]=l=>{i["after:highlightBlock"](Object.assign({block:l.el},l))})}function fe(i){Y(i),r.push(i)}function ge(i){const l=r.indexOf(i);l!==-1&&r.splice(l,1)}function q(i,l){const g=i;r.forEach(function(E){E[g]&&E[g](l)})}function re(i){return Q("10.7.0","highlightBlock will be removed entirely in v12.0"),Q("10.7.0","Please use highlightElement now."),c(i)}Object.assign(e,{highlight:R,highlightAuto:S,highlightAll:H,highlightElement:c,highlightBlock:re,configure:v,initHighlighting:O,initHighlightingOnLoad:M,registerLanguage:U,unregisterLanguage:ne,listLanguages:X,getLanguage:$,registerAliases:V,autoDetection:J,inherit:Fe,addPlugin:fe,removePlugin:ge}),e.debugMode=function(){b=!1},e.safeMode=function(){b=!0},e.versionString=kt,e.regex={concat:Z,lookahead:Ye,either:ye,optional:Vn,anyNumberOfTimes:Xn};for(const i in le)typeof le[i]=="object"&&Ve(le[i]);return Object.assign(e,le),e},ee=an({});ee.newInstance=()=>an({});var $t=ee;ee.HighlightJS=ee;ee.default=ee;const We=Mn($t),Ke="[A-Za-z$_][0-9A-Za-z$_]*",Dt=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],jt=["true","false","null","undefined","NaN","Infinity"],cn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ln=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],un=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Pt=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ht=[].concat(un,cn,ln);function Ut(e){const n=e.regex,t=(l,{after:g})=>{const E="</"+l[0].slice(1);return l.input.indexOf(E,g)!==-1},r=Ke,b={begin:"<>",end:"</>"},p=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(l,g)=>{const E=l[0].length+l.index,N=l.input[E];if(N==="<"||N===","){g.ignoreMatch();return}N===">"&&(t(l,{after:E})||g.ignoreMatch());let k;const D=l.input.substring(E);if(k=D.match(/^\s*=/)){g.ignoreMatch();return}if((k=D.match(/^\s+extends\s+/))&&k.index===0){g.ignoreMatch();return}}},s={$pattern:Ke,keyword:Dt,literal:jt,built_in:Ht,"variable.language":Pt},d="[0-9](_?[0-9])*",_=`\\.(${d})`,R="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",L={className:"number",variants:[{begin:`(\\b(${R})((${_})|\\.)?|(${_}))[eE][+-]?(${d})\\b`},{begin:`\\b(${R})\\b((${_})\\b|\\.)?|(${_})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},w={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},S={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"xml"}},x={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"css"}},c={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"graphql"}},v={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,w]},M={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},I=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,S,x,c,v,{match:/\$\d+/},L];w.contains=I.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(I)});const H=[].concat(M,w.contains),G=H.concat([{begin:/\(/,end:/\)/,keywords:s,contains:["self"].concat(H)}]),U={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:G},ne={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,n.concat(r,"(",n.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},X={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...cn,...ln]}},$={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},V={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[U],illegal:/%/},J={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Y(l){return n.concat("(?!",l.join("|"),")")}const fe={match:n.concat(/\b/,Y([...un,"super","import"]),r,n.lookahead(/\(/)),className:"title.function",relevance:0},ge={begin:n.concat(/\./,n.lookahead(n.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},q={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},U]},re="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",i={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(re)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[U]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:G,CLASS_REFERENCE:X},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),$,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,S,x,c,v,M,{match:/\$\d+/},L,X,{className:"attr",begin:r+n.lookahead(":"),relevance:0},i,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[M,e.REGEXP_MODE,{className:"function",begin:re,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:G}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:b.begin,end:b.end},{match:p},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},V,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[U,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},ge,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[U]},fe,J,ne,q,{match:/\$[(.]/}]}}const zt={class:"mb-2"},Ft={class:"border-2 border-dashed border-primary inline-block p-2"},Wt=Re({__name:"CodeView",props:["code","title"],setup(e){return We.registerLanguage("javascript",Ut),(n,t)=>{const r=Un,b=Fn;return Tn(),An(b,{hljs:Ln(We)},{default:Cn(()=>[De("div",zt,In(e.title),1),De("div",Ft,[kn(r,{code:e.code,language:"javascript"},null,8,["code"])])]),_:1},8,["hljs"])}}});export{Wt as _};