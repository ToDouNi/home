System.register(["./index-legacy-7bacaf7f.js"],(function(e,n){"use strict";var t,r,i,u,o;return{setters:[e=>{t=e.i,r=e.y,i=e.l,u=e.f,o=e.x}],execute:function(){e("u",(function(e,{defaultSize:o="medium",mergedSize:s,mergedDisabled:d}={}){const l=t(n,null);r(n,null);const a=i(s?()=>s(l):()=>{const{size:n}=e;if(n)return n;if(l){const{mergedSize:e}=l;if(void 0!==e.value)return e.value}return o}),g=i(d?()=>d(l):()=>{const{disabled:n}=e;return void 0!==n?n:!!l&&l.disabled.value}),m=i((()=>{const{status:n}=e;return n||(null==l?void 0:l.mergedValidationStatus.value)}));return u((()=>{l&&l.restoreValidation()})),{mergedSizeRef:a,mergedDisabledRef:g,mergedStatusRef:m,nTriggerFormBlur(){l&&l.handleContentBlur()},nTriggerFormChange(){l&&l.handleContentChange()},nTriggerFormFocus(){l&&l.handleContentFocus()},nTriggerFormInput(){l&&l.handleContentInput()}}}));const n=o("n-form-item")}}}));
