System.register(["./three.module-legacy-77891c67.js","./index-legacy-7bacaf7f.js"],(function(e,n){"use strict";var t,s,o,u,w,r,i,d,h,c,p;return{setters:[e=>{t=e.W,s=e.P,o=e.S,u=e.L,w=e.V,r=e.e,i=e.f},e=>{d=e.d,h=e.g,c=e.o,p=e.c}],execute:function(){const n={id:"threeBox"};e("default",d({__name:"case2",setup(e){const d=window.innerWidth-300,l=window.innerHeight-104,a=new t;a.setClearColor(12575709,1),a.setSize(d,l);const m=new s(45,d/l,1,500);m.position.set(0,0,100),m.lookAt(0,0,0);const g=new o,x=new u({color:255}),f=[];f.push(new w(0,0,0)),f.push(new w(0,10,0)),f.push(new w(10,10,0)),f.push(new w(10,0,0)),f.push(new w(20,0,0)),f.push(new w(20,-10,0)),f.push(new w(10,-10,0)),f.push(new w(0,-10,0)),f.push(new w(-10,-10,0)),f.push(new w(-10,0,0)),f.push(new w(0,0,0));const y=(new r).setFromPoints(f),B=new i(y,x);return g.add(B),a.render(g,m),h((()=>{document.getElementById("threeBox")?.appendChild(a.domElement)})),(e,t)=>(c(),p("div",n))}}))}}}));
