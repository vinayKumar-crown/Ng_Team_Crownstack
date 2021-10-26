"use strict";(self.webpackChunkng_cs_learn=self.webpackChunkng_cs_learn||[]).push([[858],{1858:(C,m,e)=>{e.r(m),e.d(m,{DynamicCmUserModule:()=>x});var u=e(8583),g=e(9765),r=e(5345);class c{constructor(i){this.notifier=i}call(i,o){const s=new p(i),l=(0,r.ft)(this.notifier,new r.IY(s));return l&&!s.seenValue?(s.add(l),o.subscribe(s)):s}}class p extends r.Ds{constructor(i){super(i),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var a=e(9773),n=e(3018);let d=(()=>{class t{constructor(o){this.viewContainerRef=o}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(n.s_b))},t.\u0275dir=n.lG2({type:t,selectors:[["","appDynamicHost",""]]}),t})();var f=e(7399);function h(t,i){}let v=(()=>{class t{constructor(o){this.profileService=o,this.destroySubject=new g.xQ}ngOnInit(){const o=this.profileHost.viewContainerRef;this.profileService.isLoggedIn$.pipe(function(t){return i=>i.lift(new c(t))}(this.destroySubject),(0,a.zg)(s=>this.profileService.loadComponent(o,s))).subscribe()}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(f.H))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dynamic-cm-user"]],viewQuery:function(o,s){if(1&o&&n.Gf(d,7),2&o){let l;n.iGM(l=n.CRH())&&(s.profileHost=l.first)}},decls:16,vars:0,consts:[[1,"dynamic"],[1,"dynamic-head"],[1,"use-cases"],[1,"dynamic-container"],["appDynamicHost",""]],template:function(o,s){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h2"),n._uU(3,"Dynamic Components Loading"),n.qZA(),n.TgZ(4,"p"),n._uU(5,"This is the feature with which you can handle multiple cases easily and achieve DRY."),n.qZA(),n._UZ(6,"hr"),n.qZA(),n.TgZ(7,"div",2),n.TgZ(8,"h3"),n._uU(9,"How to find usecae?"),n.qZA(),n.TgZ(10,"p"),n._uU(11," This is just a theory I have. To make usecase of Dynamic Component loading you can check if you need to show multiple templates according to API data or some logics, then you can create components for that and handle with the help of Dynamic Component Loading. "),n.qZA(),n.qZA(),n.TgZ(12,"div",3),n.TgZ(13,"h3"),n._uU(14,"User Example"),n.qZA(),n.YNc(15,h,0,0,"ng-template",4),n.qZA(),n.qZA())},directives:[d],styles:[".dynamic[_ngcontent-%COMP%]{padding:15px}.dynamic[_ngcontent-%COMP%]   .dynamic-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--font);font-size:22px;text-align:center;margin:8px 0;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .dynamic-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;text-align:center;margin:0 0 4px;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%]{margin-bottom:15px}.dynamic[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--font);font-size:18px;margin:8px 0;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:13px;margin:2px 0;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .dynamic-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--font);font-size:18px;margin:8px 0;color:var(--text-color)}"]}),t})();var D=e(5330);const M=[{path:"",component:v}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[f.H],imports:[[u.ez,D.Bz.forChild(M)]]}),t})()},7399:(C,m,e)=>{e.d(m,{H:()=>y});var u=e(4762),g=e(6215),r=e(3018);let y=(()=>{class c{constructor(a){this.cfr=a,this.isLoggedIn=new g.X(!1),this.isLoggedIn$=this.isLoggedIn.asObservable()}login(){this.isLoggedIn.next(!0)}logout(){this.isLoggedIn.next(!1)}loadComponent(a,n){return(0,u.mG)(this,void 0,void 0,function*(){const{GuestCardComponent:d}=yield e.e(382).then(e.bind(e,2382)),{UserCardComponent:f}=yield e.e(373).then(e.bind(e,8373));return a.clear(),a.createComponent(this.cfr.resolveComponentFactory(n?f:d))})}}return c.\u0275fac=function(a){return new(a||c)(r.LFG(r._Vd))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac}),c})()}}]);