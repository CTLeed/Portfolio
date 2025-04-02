import './polyfills.server.mjs';
import{c as Me}from"./chunk-PLW5CRZ6.mjs";import{a as A,b as v,c as U,d as R,e as G,g as V,h as B,i as z,j as W,l as q,m as P}from"./chunk-TULFXKQA.mjs";import{$ as he,$a as Ie,B as de,F as O,Ga as Se,L as N,M as T,Ma as _e,N as l,Na as ke,O as E,Oa as y,Q as fe,R as ue,Ra as g,T as p,Ta as D,U as s,V as _,W as n,X as o,Y as m,Ya as M,Z as ge,_ as ve,_a as je,aa as x,ba as C,c as re,ca as be,d as ae,da as r,ea as j,eb as Fe,f as le,fa as xe,fb as Ee,gb as Pe,i as S,ib as k,jb as Le,ka as f,kb as De,l as F,la as Ce,m as u,o as d,pa as ye,t as se,u as me,v as ce,w as pe,xa as we}from"./chunk-Z2MNXSGX.mjs";var Y=class t{constructor(i,e,a){this.el=i;this.platformId=e;this.renderer=a}overlay=null;ticking=!1;ngOnInit(){D(this.platformId)&&(this.overlay=this.el.nativeElement.querySelector(".background-overlay"),this.overlay&&this.updateParallax())}onWindowScroll(){this.ticking||(requestAnimationFrame(()=>{this.updateParallax(),this.ticking=!1}),this.ticking=!0)}updateParallax(){if(D(this.platformId)&&this.overlay){let i=window.scrollY;this.renderer.setStyle(this.overlay,"transform",`translateY(${i*.2}px)`)}}ngOnDestroy(){}static \u0275fac=function(e){return new(e||t)(E(de),E(O),E(fe))};static \u0275cmp=d({type:t,selectors:[["app-hero"]],hostBindings:function(e,a){e&1&&x("scroll",function(h){return a.onWindowScroll(h)},!1,T)},standalone:!0,features:[f],decls:12,vars:0,consts:[[1,"hero-container","relative","h-screen","flex","flex-col","items-center","justify-center","text-center","px-6"],[1,"text-3xl","md:text-5xl","font-bold","mt-4","animate-slide-down"],[1,"text-orange-400"],[1,"text-lg","md:text-xl","text-gray-200","mt-2","animate-slide-up","max-w-xl"],[1,"text-blue-500"],["href","#projects",1,"btn","cta-button","mt-6","bg-orange-500","hover:bg-orange-600","text-white","font-bold","py-3","px-6","rounded-lg","text-lg","transition","duration-300","shadow-lg","hover:shadow-xl"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"h1",1),r(2,"Hello, I'm "),n(3,"span",2),r(4,"Colby"),o()(),n(5,"p",3),r(6," A passionate "),n(7,"span",4),r(8,"Software Developer"),o(),r(9," creating impactful digital experiences. "),o(),n(10,"a",5),r(11," View My Work "),o()())},dependencies:[g],styles:["h1[_ngcontent-%COMP%]{font-size:2rem;color:#fff;font-weight:700;animation:slideInDown 1s ease-in-out}p[_ngcontent-%COMP%]{font-size:1.2rem;color:#fffc;animation:slideInUp 1s ease-in-out}.cta-button[_ngcontent-%COMP%]{margin-top:1rem;background-color:#f60;color:#fff;padding:12px 24px;font-size:1.1rem;border-radius:5px;transition:background-color .3s ease,transform .2s ease}.cta-button[_ngcontent-%COMP%]:hover{background-color:#e65c00;transform:translateY(-2px)}"]})};var $=class t{isLoginVisible=ue(!1);showLogin(){this.isLoginVisible.set(!0)}hideLogin(){this.isLoginVisible.set(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ue=t=>({hidden:t});function Re(t,i){if(t&1){let e=he();n(0,"div",20),x("click",function(){se(e);let c=C();return me(c.handleSecretClick())}),o()}}var J=class t{loginVisibility=u($);activeSection="hero";isMenuHidden=!0;secretClickCount=0;lastClickTime=0;router=u(k);onWindowScroll(){let i=["hero","about","projects","contact"];for(let e of i){let a=document.getElementById(e);if(a){let c=a.getBoundingClientRect();c.top>=0&&c.top<=window.innerHeight/2&&(this.activeSection=e)}}}toggleMenu(){this.isMenuHidden=!this.isMenuHidden}handleSecretClick(){let i=Date.now();i-this.lastClickTime<600?(this.secretClickCount++,console.log("Secret click detected! Count:",this.secretClickCount)):this.secretClickCount=1,this.lastClickTime=i,this.secretClickCount>=5&&(this.secretClickCount=0,this.router.navigate(["/login"]))}get isLoginVisible(){return this.loginVisibility.isLoginVisible()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-header"]],hostBindings:function(e,a){e&1&&x("scroll",function(){return a.onWindowScroll()},!1,T)},standalone:!0,features:[f],decls:29,vars:12,consts:[[1,"fixed","bg-bg-black","shadow-sm","top-0","left-0","w-full"],[1,"max-w-7xl","mx-auto","px-4","py-1","sm:px-6","lg:px-8"],[1,"flex","justify-between","items-center","h-16"],["class","absolute top-0 left-0 w-8 h-8 opacity-0 z-10",3,"click",4,"ngIf"],[1,"flex","items-center","space-x-3"],["src","/profile.jpeg","alt","Your Name","loading","lazy",1,"w-12","h-12","rounded-full","object-cover","border-2","border-white"],[1,"text-white","font-bold","text-lg"],[1,"hidden","md:flex","space-x-6"],["href","#hero"],["href","#about"],["href","#projects"],["href","#contact"],["id","mobile-menu-button",1,"md:hidden","text-white","z-10",3,"click"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-8","h-8"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16m-7 6h7"],["id","mobile-menu",1,"md:hidden","bg-purple-700","py-2",3,"ngClass"],["href","#hero",1,"nav-link","block","px-4","py-2","text-white","hover:bg-purple-800"],["href","#about",1,"nav-link","block","px-4","py-2","text-white","hover:bg-purple-800"],["href","#projects",1,"nav-link","block","px-4","py-2","text-white","hover:bg-purple-800"],["href","#contact",1,"nav-link","block","px-4","py-2","text-white","hover:bg-purple-800"],[1,"absolute","top-0","left-0","w-8","h-8","opacity-0","z-10",3,"click"]],template:function(e,a){e&1&&(n(0,"header",0)(1,"div",1)(2,"div",2),p(3,Re,1,0,"div",3),n(4,"div",4),m(5,"img",5),n(6,"span",6),r(7,"Colby Leed"),o()(),n(8,"nav",7)(9,"a",8),r(10,"Home"),o(),n(11,"a",9),r(12,"About"),o(),n(13,"a",10),r(14,"Projects"),o(),n(15,"a",11),r(16,"Contact"),o()(),n(17,"button",12),x("click",function(){return a.toggleMenu()}),ce(),n(18,"svg",13),m(19,"path",14),o()()()(),pe(),n(20,"div",15)(21,"a",16),r(22,"Home"),o(),n(23,"a",17),r(24,"About"),o(),n(25,"a",18),r(26,"Projects"),o(),n(27,"a",19),r(28,"Contact"),o()()()),e&2&&(l(3),s("ngIf",!a.isLoginVisible),l(6),_("active",a.activeSection==="hero"),l(2),_("active",a.activeSection==="about"),l(2),_("active",a.activeSection==="projects"),l(2),_("active",a.activeSection==="contact"),l(5),s("ngClass",Ce(10,Ue,a.isMenuHidden)))},dependencies:[g,_e,y,De],styles:["header[_ngcontent-%COMP%]{width:100%;z-index:50}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;transition:color .3s ease}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:orange;font-weight:700;border-bottom:2px solid orange}"]})};var Z=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-about"]],standalone:!0,features:[f],decls:28,vars:0,consts:[[1,"hidden","md:block","py-20","px-6","md:px-12","text-white","text-center","max-w-4xl","mx-auto"],[1,"text-3xl","md:text-4xl","font-bold","mb-6"],[1,"text-lg","leading-relaxed"],[1,"block","md:hidden","px-4","text-white","text-center","mb-36"],[1,"text-2xl","font-semibold","mb-3"],[1,"text-base"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"h2",1),r(2,"About Me"),o(),n(3,"p",2),r(4," Hi! I'm a full-stack developer with a strong passion for backend systems and clean, scalable code. I graduated from Coding Dojo in 2022 and am currently pursuing a Bachelor of Science in Computer Science at Western Governors University to deepen my technical foundation. "),o(),n(5,"p",2),r(6," My current project is "),n(7,"strong"),r(8,"BloomMap"),o(),r(9,", a tool designed for small and micro flower farmers to track planting and blooming schedules, while also mapping out their gardens for better planning and functionality. It's a passion project that combines my love of technology with real-world problem-solving for growers. "),o(),n(10,"p",2),r(11," I hold certifications in "),n(12,"strong"),r(13,"Linux Essentials"),o(),r(14," and the "),n(15,"strong"),r(16,"ITIL 4 Foundation"),o(),r(17,", and I'm always exploring better ways to build reliable, efficient systems. When I\u2019m not coding, I enjoy learning about open-source tools, automating workflows, and occasionally getting my hands dirty helping in the garden. "),o()(),n(18,"div",3)(19,"h2",4),r(20,"About Me"),o(),n(21,"p",5),r(22," Full-stack developer who loves backend work. I\u2019m currently building "),n(23,"strong"),r(24,"BloomMap"),o(),r(25,", a tool for flower micro farmers to plan and track their gardens. "),o(),n(26,"p",5),r(27," I\u2019m studying CS at WGU, hold Linux & ITIL 4 certs, and enjoy coding tools that solve real-world problems. "),o()())}})};var K=class t{constructor(i){this.http=i}apiUrl=`${P.apiUrl}/contact`;submitForm(i){return this.http.post(this.apiUrl,i)}static \u0275fac=function(e){return new(e||t)(F(M))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};function Ve(t,i){t&1&&(n(0,"p",12),r(1,"Name is required (min 3 characters)."),o())}function Be(t,i){t&1&&(n(0,"p",12),r(1,"Email is required."),o())}function ze(t,i){t&1&&(n(0,"p",12),r(1,"Message is required (min 10 characters)."),o())}var L=class t{contactForm;fb=u(W);contactService=u(K);constructor(){this.contactForm=this.fb.group({name:new G("",[v.required,v.minLength(3)]),email:new G("",[v.required,v.email]),message:new G("",[v.required,v.minLength(10)])})}onSubmit(){this.contactForm.valid?(console.log("Form submitted!",this.contactForm.value),this.contactService.submitForm(this.contactForm.value).subscribe({next:i=>{console.log("Response from server:",i),alert(i.message||"Thank you for your message!"),this.contactForm.reset()},error:()=>{alert("Something went wrong. Please try again later.")}})):alert("Please fill out the form before submitting.")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-contact"]],standalone:!0,features:[f],decls:28,vars:5,consts:[[1,"contact-form-container","w-2/5","mx-auto","px-6","py-6","shadow-lg","rounded-lg","mb-30"],[1,"text-2xl","font-bold","mb-4","text-center"],[1,"space-y-4",3,"ngSubmit","formGroup"],[1,"block","text-gray-700"],["type","text","formControlName","name","placeholder","John Smith",1,"w-full","px-4","py-2","border","rounded-lg","focus:ring","focus:border-blue-700"],["class","text-red-400",4,"ngIf"],["type","email","formControlName","email","placeholder","email@email.com",1,"w-full","px-4","py-2","border","rounded-lg","focus:ring","focus:border-blue-700"],["formControlName","message","placeholder","Let's work together!",1,"w-full","px-4","py-2","border","rounded-lg","focus:ring","focus:border-blue-700"],["type","submit",1,"btn","w-full","bg-blue-600","hover:bg-blue-700","text-white","font-bold","py-3","px-6","rounded-lg","text-lg","transition","duration-300","shadow-lg","hover:shadow-xl",3,"disabled"],[1,"relative","flex","justify-center","items-center","space-x-2","mb-20"],["href","https://www.linkedin.com/in/colby-leed/","target","_blank","rel","noopener noreferrer",1,"flex","items-center","space-x-2","hover:text-blue-400","transition","duration-300"],["src","/logos/linkedin.svg","alt","LinkedIn",1,"w-5","h-5"],[1,"text-red-400"]],template:function(e,a){if(e&1&&(n(0,"div",0)(1,"h2",1),r(2,"Message Me"),o(),n(3,"form",2),x("ngSubmit",function(){return a.onSubmit()}),n(4,"div")(5,"label",3),r(6,"Your Name"),o(),m(7,"input",4),p(8,Ve,2,0,"p",5),o(),n(9,"div")(10,"label",3),r(11,"Your Email"),o(),m(12,"input",6),p(13,Be,2,0,"p",5),o(),n(14,"div")(15,"label",3),r(16,"Your Message"),o(),m(17,"textarea",7),p(18,ze,2,0,"p",5),o(),n(19,"button",8),r(20,"Send Message"),o()()(),n(21,"div",9)(22,"p"),r(23,"Or Connect on"),o(),n(24,"a",10)(25,"span"),r(26,"LinkedIn"),o(),m(27,"img",11),o()()),e&2){let c,h,w;l(3),s("formGroup",a.contactForm),l(5),s("ngIf",((c=a.contactForm.get("name"))==null?null:c.invalid)&&((c=a.contactForm.get("name"))==null?null:c.touched)),l(5),s("ngIf",((h=a.contactForm.get("email"))==null?null:h.invalid)&&((h=a.contactForm.get("email"))==null?null:h.touched)),l(5),s("ngIf",((w=a.contactForm.get("message"))==null?null:w.invalid)&&((w=a.contactForm.get("message"))==null?null:w.touched)),l(),s("disabled",a.contactForm.invalid)}},dependencies:[g,y,q,V,A,U,R,B,z],styles:["contact[_ngcontent-%COMP%]{max-width:800px;padding:2rem}.contact-form-container[_ngcontent-%COMP%]{margin:5rem auto;background:#b9a0fd81;box-shadow:0 4px 10px #0000001a;border-radius:8px;position:relative;z-index:10}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid #ddd;padding:.75rem;color:#1a1414;border-radius:6px;font-size:1rem;width:100%;outline:none;position:relative}"]})};var X=class t{currentYear=new Date().getFullYear();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-footer"]],standalone:!0,features:[f],decls:3,vars:1,consts:[[1,"footer","bg-gray-900","text-white","text-center","py-4"],[1,"mb-2"]],template:function(e,a){e&1&&(n(0,"footer",0)(1,"p",1),r(2),o()()),e&2&&(l(2),xe("\xA9 ",a.currentYear," Colby Leed"))}})};var ee=class t{constructor(i){this.http=i}apiUrl=`${P.apiUrl}/projects`;getProjects(){return this.http.get(this.apiUrl).pipe(ae(i=>i.map(e=>({id:e.id,name:e.name,role:e.role,description:e.description,imageUrl:e.imageUrl,projectUrl:e.projectUrl,technologies:e.technologies}))),le(()=>(console.warn("Backend not available, using fallback data."),re(this.getFallbackProjects()))))}getFallbackProjects(){return[{id:"MW",name:"MustWants",role:"Full Stack Developer",description:"Integration of MLS listings to the MongoDB database, integration of Stripe for payment processing, and integration of Geoapify for location services.",imageUrl:"MW.jpg",projectUrl:"https://mustwants.com",technologies:["React","Node.js","Express","MongoDB","Stripe","Vercel","AWS","Geoapify","Tailwind CSS","Docker","GitLab"]},{id:"portfolio",name:"Portfolio Website",role:"Full Stack Developer",description:"Personal portfolio website showcasing projects and technologies.",imageUrl:"portfolio.jpg",projectUrl:"",technologies:["Angular","Tailwind CSS","Java","Spring Boot","PostgreSQL","GitHub"]},{id:"theater3",name:"Movie Theater Group",role:"Full Stack Developer",description:"A website for a movie theater to allow moviegoers to reserve seats and purchase tickets.",imageUrl:"theater3.jpg",projectUrl:"",technologies:["React","Java","Spring Boot","MySQL","GitHub"]}]}static \u0275fac=function(e){return new(e||t)(F(M))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};function qe(t,i){if(t&1&&m(0,"img",17),t&2){let e=C().$implicit,a=C(2);s("src",a.technologyLogos[e],N)("alt",e)}}function Ye(t,i){if(t&1&&(n(0,"span",18),r(1),o()),t&2){let e=C().$implicit;l(),j(e)}}function $e(t,i){if(t&1&&(n(0,"div",15),p(1,qe,1,2,"img",16)(2,Ye,2,1,"ng-template",null,0,ye),o()),t&2){let e=i.$implicit,a=be(3),c=C(2);l(),s("ngIf",c.technologyLogos[e])("ngIfElse",a)}}function Je(t,i){if(t&1&&(n(0,"a",19),r(1," View Project "),o()),t&2){let e=C().$implicit;s("href",e.projectUrl,N)}}function Qe(t,i){if(t&1&&(n(0,"div",5)(1,"div",6),m(2,"img",7),o(),n(3,"div",8)(4,"h3",9),r(5),o(),n(6,"p",10),r(7),o(),n(8,"p",11),r(9),o(),n(10,"div",12),p(11,$e,4,2,"div",13),o(),p(12,Je,2,1,"a",14),o()()),t&2){let e=i.$implicit;l(2),s("src",e.imageUrl,N)("alt",e.name),l(3),j(e.name),l(2),j(e.role),l(2),j(e.description),l(2),s("ngForOf",e.technologies),l(),s("ngIf",e.projectUrl)}}var te=class t{constructor(i){this.projectService=i}projects=[];technologyLogos={Angular:"/logos/angular-icon.svg",React:"/logos/react.svg","Node.js":"/logos/node-js.svg",Stripe:"/logos/stripe.svg",MongoDB:"/logos/mongodb.svg",Vercel:"/logos/vercel.svg",AWS:"/logos/aws.svg","Tailwind CSS":"/logos/tailwind.svg",Docker:"/logos/docker.svg",Java:"/logos/java.svg","Spring Boot":"/logos/spring-boot.svg",PostgreSQL:"/logos/postgresql.svg",Express:"/logos/express.svg",GitHub:"/logos/github.svg",MySQL:"/logos/mysql.svg",Geoapify:"/logos/geoapify.svg",GitLab:"/logos/gitlab.svg"};ngOnInit(){this.projectService.getProjects().subscribe(i=>{this.projects=i})}static \u0275fac=function(e){return new(e||t)(E(ee))};static \u0275cmp=d({type:t,selectors:[["app-projects"]],standalone:!0,features:[f],decls:5,vars:1,consts:[["textFallback",""],[1,"projects-container","text-center","mt-8","py-12","px-6"],[1,"text-3xl","md:text-4xl","font-bold","mb-6","text-white"],[1,"grid","md:grid-cols-2","lg:grid-cols-3","gap-8"],["class","project-card bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden",4,"ngFor","ngForOf"],[1,"project-card","bg-gray-900","text-white","rounded-lg","shadow-lg","overflow-hidden"],[1,"flex","justify-center","items-center","w-full","mt-4","hover:transform","hover:scale-110","transition","duration-300"],[1,"w-64","h-64","object-cover","object-center",3,"src","alt"],[1,"p-6"],[1,"text-xl","font-semibold"],[1,"text-orange-400","font-semibold","mt-2"],[1,"text-gray-300","mt-2"],[1,"flex","flex-wrap","justify-center","mt-4","space-x-3"],["class","flex items-center space-x-2",4,"ngFor","ngForOf"],["target","_blank","class","btn relative inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300",3,"href",4,"ngIf"],[1,"flex","items-center","space-x-2"],["class","w-10 h-10",3,"src","alt",4,"ngIf","ngIfElse"],[1,"w-10","h-10",3,"src","alt"],[1,"text-gray-300"],["target","_blank",1,"btn","relative","inline-block","mt-4","bg-blue-600","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded","transition","duration-300",3,"href"]],template:function(e,a){e&1&&(n(0,"div",1)(1,"h2",2),r(2,"My Projects"),o(),n(3,"div",3),p(4,Qe,13,7,"div",4),o()()),e&2&&(l(4),s("ngForOf",a.projects))},dependencies:[g,ke,y]})};function Ze(t,i){t&1&&(ge(0),n(1,"div",1),m(2,"div",2),n(3,"section",3),m(4,"app-header"),o(),n(5,"section",4),m(6,"app-hero"),o(),n(7,"section",5),m(8,"app-about"),o(),n(9,"section",6),m(10,"app-projects"),o(),n(11,"section",7),m(12,"app-contact"),o(),n(13,"section",8),m(14,"app-footer"),o()(),ve())}var oe=class t{title="frontend";router=u(k);get isAdminRoute(){return this.router.url.startsWith("/admin")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-root"]],standalone:!0,features:[f],decls:2,vars:1,consts:[[4,"ngIf"],[1,"page-wrapper","relative","bg-gradient-to-r","from-bg-blue","to-bg-black","overflow-hidden"],[1,"absolute","bg-cover","bg-center","inset-0","bg-[url('/abstract-background.jpg')]","opacity-20","overflow-x-clip"],["id","header",1,"nav-header"],["id","hero",1,"section"],["id","about",1,"h-auto","md:h-screen"],["id","projects",1,"section"],["id","contact",1,"h-auto"],["id","footer",1,"footer-component"]],template:function(e,a){e&1&&(p(0,Ze,15,0,"ng-container",0),m(1,"router-outlet")),e&2&&s("ngIf",!a.isAdminRoute)},dependencies:[g,y,Pe,Y,J,Z,L,te,X],styles:[".page-wrapper[_ngcontent-%COMP%]{position:relative;min-height:100vh;width:100vw;display:flex;flex-direction:column;overflow:hidden}"]})};var Oe=(t,i)=>typeof window<"u"&&window.localStorage.getItem("token")?!0:(u(k).navigate(["/login"]),!1);var ne=class t{constructor(i){this.http=i}apiUrl=`${P.apiUrl}/auth/login`;login(i){return this.http.post(this.apiUrl,null,{params:i})}static \u0275fac=function(e){return new(e||t)(F(M))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};function Ke(t,i){t&1&&(n(0,"div",9),r(1," Username must be at least 3 characters long "),o())}function Xe(t,i){t&1&&(n(0,"div",9),r(1," Password must be at least 6 characters long "),o())}function et(t,i){if(t&1&&(n(0,"p",9),r(1),o()),t&2){let e=C();l(),j(e.error)}}var ie=class t{fb=u(W);loginService=u(ne);router=u(k);platformId=u(O);loginForm=this.fb.group({username:["",[v.required,v.minLength(3)]],password:["",[v.required,v.minLength(6)]]});error=null;onSubmit(){this.loginForm.valid&&this.loginService.login(this.loginForm.value).subscribe({next:i=>{localStorage.setItem("token",i.token),this.router.navigate(["/admin"])},error:()=>{this.error="Invalid username or password. Please try again.",console.error("Login failed")}})}ngAfterViewInit(){D(this.platformId)&&setTimeout(()=>{document.getElementById("login")?.scrollIntoView({behavior:"smooth"})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-login"]],standalone:!0,features:[f],decls:15,vars:9,consts:[["id","login"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"form-group"],["for","username",1,"block","text-sm","font-medium","text-gray-700","mb-1"],["id","username","type","text","formControlName","username","placeholder","Enter your username"],["class","error-message",4,"ngIf"],["for","password",1,"block","text-sm","font-medium","text-gray-700","mb-1"],["id","password","type","password","formControlName","password","placeholder","Enter your password"],["type","submit",1,"mt-4",3,"disabled"],[1,"error-message"]],template:function(e,a){if(e&1&&(n(0,"section",0)(1,"form",1),x("ngSubmit",function(){return a.onSubmit()}),n(2,"div",2)(3,"label",3),r(4,"Username"),o(),m(5,"input",4),p(6,Ke,2,0,"div",5),o(),n(7,"div",2)(8,"label",6),r(9,"Password"),o(),m(10,"input",7),p(11,Xe,2,0,"div",5),o(),n(12,"button",8),r(13," Login "),o(),p(14,et,2,1,"p",5),o()()),e&2){let c,h,w,H;l(),s("formGroup",a.loginForm),l(4),_("border-red-500",((c=a.loginForm.get("username"))==null?null:c.invalid)&&((c=a.loginForm.get("username"))==null?null:c.touched)),l(),s("ngIf",((h=a.loginForm.get("username"))==null?null:h.invalid)&&((h=a.loginForm.get("username"))==null?null:h.touched)),l(4),_("border-red-500",((w=a.loginForm.get("password"))==null?null:w.invalid)&&((w=a.loginForm.get("password"))==null?null:w.touched)),l(),s("ngIf",((H=a.loginForm.get("password"))==null?null:H.invalid)&&((H=a.loginForm.get("password"))==null?null:H.touched)),l(),s("disabled",a.loginForm.invalid),l(2),s("ngIf",a.error)}},dependencies:[g,y,q,V,A,U,R,B,z],styles:["#login[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;background:#fffffff2;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a;z-index:1000;max-width:400px;width:90%}input[_ngcontent-%COMP%]{width:100%;padding:12px;margin-bottom:10px;border:2px solid #e2e8f0;border-radius:6px;font-size:16px;transition:all .3s ease;background-color:#fff;color:#1a202c}input[_ngcontent-%COMP%]:focus{outline:none;border-color:#4299e1;box-shadow:0 0 0 3px #4299e133}input[_ngcontent-%COMP%]::placeholder{color:#a0aec0}button[_ngcontent-%COMP%]{width:100%;padding:12px;background-color:#4299e1;color:#fff;border:none;border-radius:6px;font-size:16px;font-weight:600;cursor:pointer;transition:all .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#3182ce}button[_ngcontent-%COMP%]:disabled{background-color:#cbd5e0;cursor:not-allowed}.error-message[_ngcontent-%COMP%]{color:#e53e3e;font-size:14px;margin-top:8px;text-align:center}"]})};var Ne=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"contact",component:L},{path:"login",component:ie},{path:"admin",loadChildren:()=>import("./chunk-DMI2NTOF.mjs").then(t=>t.ADMIN_ROUTES),canActivate:[Oe]}];var Te={providers:[we({eventCoalescing:!0}),Le(Ne),Ee(),je(Ie())]};var tt={providers:[Me()]},Ae=Se(Te,tt);var ot=()=>Fe(oe,Ae),Lo=ot;export{Lo as a};
