import{b as w,I as M,E as A,t as xe,c as n,C as v,a as Y,B as pe,S as fe,T as _e,d as le,P as me}from"./Section-SRdq2qjP.js";import{c as r,i,F as R,b as y,d as l,t as $,g as $e,B as be,f as ie,e as D,a as j,u as ye,h as Ce,j as Se,s as z,S as we,_ as Te,R as Ee,k as ke}from"./index-DJjSCdGW.js";var Ie=$('<div><h1 id=about> About Me</h1><div class="flex flex-wrap md:flex-nowrap gap-x-12 gap-y-6 text-justify"><div class="w-full space-y-6"><p>Hi there! I am a young, aspiring full-stack developer who likes to write <u><em>fast</em>, clean ✨, and <strong>extensible</strong></u> code. I am currently a Penultimate Year Computer Science and Business Administration double-degree student at the <!>.</p><p>Currently the Chief Technology Officer at <!>, I am responsible for full-stack project management, and beyond that, I am also involved in efforts to integrate Large Language Models (LLMs) into the educational platform.</p></div><div class="w-full space-y-6"><p>I am a <strong>very fast learner</strong>, and although primarily a web developer, as a programmer, I have gained many language-agnostic skills.</p><p>These, together with my endless curiosity to create apps and scripts that work together to deliver great User and Developer Experiences. Some of the technologies I am most familiar with include:</p><ul class="columns-2 leading-relaxed">'),Oe=$('<li class="list-disc list-inside"> ');const De=[w.PYTHON,w.TYPESCRIPT,w.REACT,w.R,w.GOLANG,w.JAVASCRIPT,w.POSTGRESQL,w.JEKYLL,w.JAVA,w.TAILWINDCSS],Me=()=>r(Y,{get children(){var g=Ie(),x=g.firstChild,h=x.firstChild,d=x.nextSibling,c=d.firstChild,e=c.firstChild,s=e.firstChild,o=s.nextSibling,t=o.nextSibling,a=t.nextSibling;a.nextSibling;var u=e.nextSibling,C=u.firstChild,p=C.nextSibling;p.nextSibling;var f=c.nextSibling,m=f.firstChild,b=m.nextSibling,E=b.nextSibling;return i(x,r(M,{inline:!0,icon:"fluent-emoji-flat:waving-hand"}),h),i(e,r(A,{to:"https://nus.edu.sg",children:"National University of Singapore"}),a),i(u,r(A,{to:"https://github.com/source-academy",children:"Source Academy"}),p),i(E,r(R,{each:De,children:S=>(()=>{var T=Oe(),k=T.firstChild;return i(T,r(M,{inline:!0,get icon(){return xe[S]}}),k),i(T,S,null),T})()})),y(S=>{var T=n(v.SECTION_BODY_RESPONSIVE,"space-y-10"),k=n("scroll-mt-[--header-height]","text-4xl font-display text-center",v.TEXT_BOLD),L=n("text-md md:text-lg",v.TEXT_MEDIUM);return T!==S.e&&l(g,S.e=T),k!==S.t&&l(x,S.t=k),L!==S.a&&l(e,S.a=L),S},{e:void 0,t:void 0,a:void 0}),g}}),Le=`${be}/message`,Ne=async(g,x,h)=>{const d={email:g,telegram:x,message:h};return(await $e.post(Le,d,{headers:{Accept:"text/plain"}})).data};var Ae=$('<div class="w-full lg:w-2/3 mx-auto"><form><div><div class="flex flex-col gap-y-1"><div><div><label for=email>Your Email<br><span>(optional)</span></label></div><div class=w-full><input type=email name=email id=email placeholder=Email></div></div><div><div><label for=telegram>Telegram ID<br><span>(optional)</span></label></div><div class=w-full><input type=text name=telegram id=telegram placeholder="Telegram ID"></div></div></div><div><div><label for=message>Message<sup class=text-red-500>*</sup></label></div><div class=w-full><textarea required name=message id=message placeholder=Message></textarea></div></div><div class=mx-auto>'),Re=$('<div><p class=text-justify><strong class="text-2xl text-orange-700 dark:text-orange-400">Note:</strong><br>You seem to be sending a message without providing any contact details. Without any contact details, I will not be able to reply to your message!</p><p>Please ensure that either:</p><ul><li class="list-disc list-inside">You <strong>do not require a response</strong> in return, or</li><li class="list-disc list-inside">You have included a <strong>means of contact</strong> in the message body.');const G=n("w-full flex gap-x-6 items-center"),F=n("w-1/5 text-right text-sm leading-tight","hidden md:block",v.TEXT_MEDIUM),J=n("w-full rounded px-3 py-2","bg-white dark:bg-slate-700 dark:bg-opacity-20","shadow-none",[v.TEXT_STATIC_BLACK,"dark:text-stone-300 font-normal"]),Be=()=>{const[g,x]=D(""),[h,d]=D(""),[c,e]=D(""),s=()=>!g()&&!h()&&c(),o=()=>{const t=g()||void 0,a=h()||void 0,u=c();Ne(t,a,u).then(()=>{alert("Your message has been sent!"),e("")}).catch(()=>{alert("Something went wrong, please try again later.")})};return(()=>{var t=Ae(),a=t.firstChild,u=a.firstChild,C=u.firstChild,p=C.firstChild,f=p.firstChild,m=f.firstChild,b=m.firstChild,E=b.nextSibling,S=E.nextSibling,T=f.nextSibling,k=T.firstChild,L=p.nextSibling,V=L.firstChild,ae=V.firstChild,re=ae.firstChild,se=re.nextSibling,oe=se.nextSibling,de=V.nextSibling,H=de.firstChild,K=C.nextSibling,q=K.firstChild,ce=q.nextSibling,W=ce.firstChild,Q=K.nextSibling;return a.addEventListener("submit",_=>{_.preventDefault(),o()}),l(p,G),l(f,F),k.$$input=_=>x(_.currentTarget.value),l(L,G),l(V,F),H.$$input=_=>d(_.currentTarget.value),l(K,G),l(q,F),W.$$input=_=>e(_.currentTarget.value),i(u,(()=>{var _=j(()=>!!s());return()=>_()&&(()=>{var O=Re(),B=O.firstChild,P=B.nextSibling,X=P.nextSibling,N=X.firstChild,U=N.firstChild,ge=U.nextSibling,ue=N.nextSibling,he=ue.firstChild,ve=he.nextSibling;return y(I=>{var Z=n("bg-orange-50 dark:bg-yellow-800 dark:bg-opacity-20","outline outline-orange-600","dark:text-stone-300","px-4 py-3 space-y-2","rounded"),ee=n(v.TEXT_BOLD,"tracking-wide"),te=n(v.TEXT_BOLD,"tracking-wide");return Z!==I.e&&l(O,I.e=Z),ee!==I.t&&l(ge,I.t=ee),te!==I.a&&l(ve,I.a=te),I},{e:void 0,t:void 0,a:void 0}),O})()})(),Q),i(Q,r(pe,{leftIcon:"fluent:send-32-filled",label:()=>s()?"I have checked my message, proceed to send":"Send Message",buttonProps:{type:"submit"}})),y(_=>{var O=n("flex flex-col gap-y-4","px-4 py-4","bg-slate-100 dark:bg-slate-700","bg-opacity-95 shadow-md dark:bg-opacity-20",v.TEXT_DYNAMIC_COLOR,"rounded-lg"),B=n("text-xs",v.TEXT_NORMAL),P=n(J),X=n("text-xs",v.TEXT_NORMAL),N=n(J),U=n(J,"h-64 resize-y");return O!==_.e&&l(u,_.e=O),B!==_.t&&l(S,_.t=B),P!==_.a&&l(k,_.a=P),X!==_.o&&l(oe,_.o=X),N!==_.i&&l(H,_.i=N),U!==_.n&&l(W,_.n=U),_},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),y(()=>k.value=g()),y(()=>H.value=h()),y(()=>W.value=c()),t})()};ie(["input"]);var Pe=$('<div><h1 id=contact> Send Me a Message</h1><div class="w-full space-y-6"><p>I am currently looking for internship opportunities in areas of Software Engineering, Software Development, and/or Technical Product Management. If you are interested in finding out more, or even just to have a chat, please feel free to contact me either via my socials, or send me an instant message below!');const Xe=()=>{const g=ye(),x=()=>g.hash;let h;return Ce(()=>{x()==="#contact"&&setTimeout(()=>{h.scrollIntoView()},300)}),r(Y,{get children(){var d=Pe(),c=d.firstChild,e=c.firstChild,s=c.nextSibling,o=s.firstChild,t=h;return typeof t=="function"?Se(t,c):h=c,i(c,r(M,{inline:!0,icon:"twemoji:left-speech-bubble"}),e),i(d,r(Be,{}),null),y(a=>{var u=n(v.SECTION_BODY_RESPONSIVE,"space-y-10"),C=n("scroll-mt-[--header-height]","text-4xl font-display text-center",v.TEXT_BOLD),p=n("text-md md:text-lg text-justify",v.TEXT_MEDIUM);return u!==a.e&&l(d,a.e=u),C!==a.t&&l(c,a.t=C),p!==a.a&&l(o,a.a=p),a},{e:void 0,t:void 0,a:void 0}),d}})};var Ue=$("<div class=relative><span>"),Ye=$("<div><span>Coming soon!");const je=({disableOverlay:g=!1,children:x})=>{const h=x&&!g;return(()=>{var d=Ue(),c=d.firstChild;return i(c,x??"placeholder content"),i(d,h&&(()=>{var e=Ye(),s=e.firstChild;return y(o=>{var t=n("absolute top-1 right-1 bottom-1 left-1","mx-5",v.BACKGROUND_DYNAMIC_COLOR,"bg-opacity-50 dark:bg-opacity-60"),a=n("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",v.TEXT_BOLD,"font-display tracking-wider text-center text-4xl italic select-none","opacity-30 dark:opacity-60","-rotate-[24deg]");return t!==o.e&&l(e,o.e=t),a!==o.t&&l(s,o.t=a),o},{e:void 0,t:void 0}),e})(),null),y(()=>l(c,n("block mx-5 px-3",{"py-16":!h,"py-3":!!h},"text-center text-neutral-300 border-2 border-dashed","select-none"))),d})()};var Ve=$('<a target=_blank rel="noopener noreferrer">'),He=$('<div class=font-sans><p> - </p><div class="flex flex-wrap items-baseline leading-none gap-x-2 gap-y-1"><h4></h4><p>at '),Ke=$("<div>");const ne=({company:g,position:x,from:h,to:d,description:c,link:e,tech:s})=>{const o=e?(()=>{var t=Ve();return z(t,"href",e),i(t,g),y(()=>l(t,n("hover:text-blue-600 dark:hover:text-white","decoration-zinc-900/30 dark:decoration-stone-400/20","underline hover:decoration-transparent decoration-dotted underline-offset-4"))),t})():g;return(()=>{var t=He(),a=t.firstChild,u=a.firstChild,C=a.nextSibling,p=C.firstChild,f=p.nextSibling;return f.firstChild,i(a,h,u),i(a,d,null),i(p,x),i(f,o,null),i(t,c&&r(fe,{linkTarget:"_blank",get class(){return n("mt-3 space-y-1",v.MARKDOWN_CONTAINER)},children:c}),null),i(t,(()=>{var m=j(()=>!!s?.length);return()=>m()&&(()=>{var b=Ke();return i(b,r(R,{each:s,children:E=>r(_e,{withTooltip:!0,tooltipPosition:"bottom",tech:E})})),y(()=>l(b,n("text-3xl text-center","flex flex-wrap gap-2","mt-4"))),b})()})(),null),y(m=>{var b=n("text-sm","text-stone-600"),E=n(v.TEXT_MEDIUM,"text-xl"),S=n("text-sm","text-stone-600");return b!==m.e&&l(a,m.e=b),E!==m.t&&l(p,m.t=E),S!==m.a&&l(f,m.a=S),m},{e:void 0,t:void 0,a:void 0}),t})()};var We=$("<div class=space-y-4><h2></h2><div class=space-y-1>"),Ge=$('<div class="w-full px-6 py-4 bg-stone-500 bg-opacity-5">');const Fe=({category:g,items:x})=>(()=>{var h=We(),d=h.firstChild,c=d.nextSibling;return i(d,g),i(c,r(R,{each:x,children:(e,s)=>(()=>{var o=Ge();return i(o,r(ne,e)),o})()})),y(()=>l(d,n("text-2xl text-center font-display tracking-wider",v.TEXT_MEDIUM))),h})();var Je=$('<div class="font-display space-y-1"><p class="text-xs text-stone-600">, </p><h4 class=italic>');const ze=({company:g,position:x,from:h,to:d})=>{const c=j(()=>{const e=h.replaceAll(/[^0-9]/g,""),s=d.replaceAll(/[^0-9]/g,"");return d==="Present"?`since ${e}`:e===s?e:`${e}-${s}`});return(()=>{var e=Je(),s=e.firstChild,o=s.firstChild,t=s.nextSibling;return i(s,g,o),i(s,c,null),i(t,x),e})()};var qe=$('<div><div class=w-[100%]><div class=space-y-4><h2></h2><div class=space-y-1></div></div></div><div class="w-[200%] px-6 py-4 bg-stone-500 bg-opacity-5">'),Qe=$("<div>");const Ze=({category:g,items:x,initialIndex:h=0,flipped:d=!1})=>{const[c,e]=D(h),s=j(()=>{const o=x[c()];return r(ne,o)});return(()=>{var o=qe(),t=o.firstChild,a=t.firstChild,u=a.firstChild,C=u.nextSibling,p=t.nextSibling;return i(u,g),i(C,r(R,{each:x,children:(f,m)=>(()=>{var b=Qe();return b.$$click=()=>e(m()),i(b,r(ze,f)),y(()=>l(b,n("py-2 px-3","rounded-lg","transition-all duration-50","cursor-pointer","hover:bg-black/10 dark:hover:bg-white/10",c()===m()&&"bg-black/5 dark:bg-white/5"))),b})()})),i(p,s),y(f=>{var m=n("flex gap-x-8 justify-between",d&&"flex-row-reverse"),b=n("text-2xl text-center font-display tracking-wider",v.TEXT_MEDIUM);return m!==f.e&&l(o,f.e=m),b!==f.t&&l(u,f.t=b),f},{e:void 0,t:void 0}),o})()};ie(["click"]);var et=$('<div><h1 id=experience> My Experiences</h1><div class="w-full space-y-6"><p>Internships, school, projects, and more!'),tt=$("<div>"),lt=$("<div class=lg:hidden>"),it=$('<div class="hidden lg:block">'),nt=$("<h2>Loading <!>&hellip;");const at=()=>Te(()=>import("./index-Cg8eYU4V.js"),[]),rt=()=>{const[g,x]=D(),[h,d]=D(),c=()=>[["Work",g()],["Education",h()]];return at().then(e=>{x(e.workExperiences),d(e.educationExperiences)}),[r(Y,{get children(){var e=et(),s=e.firstChild,o=s.firstChild,t=s.nextSibling,a=t.firstChild;return i(s,r(M,{inline:!0,icon:"fluent-emoji-flat:seedling"}),o),y(u=>{var C=n(v.SECTION_BODY_RESPONSIVE,"space-y-10"),p=n("scroll-mt-[--header-height]","text-4xl font-display text-center",v.TEXT_BOLD),f=n("text-lg md:text-xl text-center italic font-display tracking-wide",v.TEXT_MEDIUM);return C!==u.e&&l(e,u.e=C),p!==u.t&&l(s,u.t=p),f!==u.a&&l(a,u.a=f),u},{e:void 0,t:void 0,a:void 0}),e}}),r(Y,{get children(){var e=tt();return i(e,r(R,{get each(){return c()},children:([s,o])=>r(we,{when:o,get fallback(){return(()=>{var t=nt(),a=t.firstChild,u=a.nextSibling;return u.nextSibling,i(t,s,u),y(()=>l(t,n("text-2xl text-center font-display tracking-wider",v.TEXT_MEDIUM))),t})()},get children(){return[(()=>{var t=lt();return i(t,r(Fe,{category:s,items:o})),t})(),(()=>{var t=it();return i(t,r(Ze,{category:s,items:o,initialIndex:0})),t})()]}})}),null),i(e,r(je,{disableOverlay:!0,children:"Other content coming soon!"}),null),y(()=>l(e,n(v.SECTION_BODY_RESPONSIVE,"space-y-20"))),e}})]};var st=$('<div><p class=select-none><span class="w-full text-sm">Copyright &copy; 2023-2024 Richard Dominick</span><br><span><span class="w-full text-xs">Built with <!> and <!>. View the source code on <!>.');const ot=()=>(()=>{var g=st(),x=g.firstChild,h=x.firstChild,d=h.nextSibling,c=d.nextSibling,e=c.firstChild,s=e.firstChild,o=s.nextSibling,t=o.nextSibling,a=t.nextSibling,u=a.nextSibling,C=u.nextSibling;return C.nextSibling,i(e,r(A,{to:"https://www.solidjs.com",children:"SolidJS"}),o),i(e,r(A,{to:"https://tailwindcss.com",children:"Tailwind"}),a),i(e,r(A,{to:Ee,get children(){return le.GITHUB}}),C),y(()=>l(g,n(v.BACKGROUND_DYNAMIC_COLOR,"text-neutral-400 dark:text-neutral-600","px-10 py-6 text-center"))),g})(),dt="/assets/avatar-D7sNm7Mr.svg";var ct=$('<div><div class="h-full place-items-center flex flex-wrap-reverse md:flex-nowrap gap-x-5 gap-y-6 justify-center px-10 md:px-20"><div class="w-full space-y-10 font-display leading-loose"><h1> Hello World!</h1><p class="text-3xl italic font-light tracking-wide">I am Richard Dominick.</p><p class="text-xl tracking-wide">Year 4 undergraduate @ NUS Computing & Business, Singapore. Loves coding, learning and just exploring new things.</p><div class="flex flex-wrap gap-x-6 gap-y-10 items-center select-none"><a target=_blank rel="noopener noreferrer"><span>Visit me on </span></a><a href=#contact>Contact me</a><span class="italic text-neutral-400">Note: some parts of this website are still under construction.</span></div></div><div class="w-3/4 sm:w-1/2 lg:w-full flex justify-center items-center select-none"><img loading=lazy alt=avatar class="w-full lg:w-3/4 xl:w-2/3">');const gt=()=>(()=>{var g=ct(),x=g.firstChild,h=x.firstChild,d=h.firstChild,c=d.firstChild,e=d.nextSibling,s=e.nextSibling,o=s.nextSibling,t=o.firstChild,a=t.firstChild;a.firstChild;var u=h.nextSibling,C=u.firstChild;return i(d,r(M,{inline:!0,icon:"fluent-emoji-flat:globe-showing-asia-australia"}),c),z(t,"href",ke),i(t,r(M,{inline:!0,icon:"ant-design:linkedin-outlined",class:"text-xl"}),a),i(a,()=>le.LINKEDIN,null),z(C,"src",dt),y(p=>{var f=n(v.BACKGROUND_DYNAMIC_COLOR,v.TEXT_DYNAMIC_COLOR,"min-h-screen px-5 py-6 dark:tracking-wide","flex flex-col justify-center",v.TEXT_NORMAL),m=n("text-4xl",v.TEXT_BOLD),b=n("bg-sky-50 hover:bg-sky-100","dark:bg-sky-800 dark:hover:bg-sky-700","shadow-md dark:shadow hover:shadow","shadow-sky-100 hover:shadow-sky-300","dark:shadow-sky-950 dark:hover:shadow-sky-950","text-sky-600 dark:text-sky-200","w-fit transition tracking-wide px-3 py-2 rounded space-x-2 flex items-center",v.TEXT_MEDIUM);return f!==p.e&&l(g,p.e=f),m!==p.t&&l(d,p.t=m),b!==p.a&&l(t,p.a=b),p},{e:void 0,t:void 0,a:void 0}),g})(),ut=()=>r(me,{withHeader:!0,withSidebar:!0,get children(){return[r(gt,{}),r(Me,{}),r(rt,{}),r(Xe,{}),r(ot,{})]}}),xt=ut;export{xt as default};
