"use strict";(self.webpackChunkNgCsLearn=self.webpackChunkNgCsLearn||[]).push([[688],{688:(v,l,e)=>{e.r(l),e.d(l,{DynamicCmUserModule:()=>x});var u=e(6895),y=e(8929),r=e(1177);class c{constructor(i){this.notifier=i}call(i,o){const s=new g(i),m=(0,r.ft)(this.notifier,new r.IY(s));return m&&!s.seenValue?(s.add(m),o.subscribe(s)):s}}class g extends r.Ds{constructor(i){super(i),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var a=e(1709),n=e(5062);let d=(()=>{class t{constructor(o){this.viewContainerRef=o}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(n.s_b))},t.\u0275dir=n.lG2({type:t,selectors:[["","appDynamicHost",""]]}),t})();var f=e(7399);function C(t,i){}let h=(()=>{class t{constructor(o){this.profileService=o,this.destroySubject=new y.xQ}ngOnInit(){const o=this.profileHost.viewContainerRef;this.profileService.isLoggedIn$.pipe(function p(t){return i=>i.lift(new c(t))}(this.destroySubject),(0,a.zg)(s=>this.profileService.loadComponent(o,s))).subscribe()}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(f.H))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dynamic-cm-user"]],viewQuery:function(o,s){if(1&o&&n.Gf(d,7),2&o){let m;n.iGM(m=n.CRH())&&(s.profileHost=m.first)}},decls:16,vars:0,consts:[[1,"dynamic"],[1,"dynamic-head"],[1,"use-cases"],[1,"dynamic-container"],["appDynamicHost",""]],template:function(o,s){1&o&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h2"),n._uU(3,"Dynamic Components Loading"),n.qZA(),n.TgZ(4,"p"),n._uU(5,"This is the feature with which you can handle multiple cases easily and achieve DRY."),n.qZA(),n._UZ(6,"hr"),n.qZA(),n.TgZ(7,"div",2)(8,"h3"),n._uU(9,"How to find usecae?"),n.qZA(),n.TgZ(10,"p"),n._uU(11," This is just a theory I have. To make usecase of Dynamic Component loading you can check if you need to show multiple templates according to API data or some logics, then you can create components for that and handle with the help of Dynamic Component Loading. "),n.qZA()(),n.TgZ(12,"div",3)(13,"h3"),n._uU(14,"User Example"),n.qZA(),n.YNc(15,C,0,0,"ng-template",4),n.qZA()())},dependencies:[d],styles:[".dynamic[_ngcontent-%COMP%]{padding:15px}.dynamic[_ngcontent-%COMP%]   .dynamic-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--font);font-size:22px;text-align:center;margin:8px 0;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .dynamic-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;text-align:center;margin:0 0 4px;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%]{margin-bottom:15px}.dynamic[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--font);font-size:18px;margin:8px 0;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .use-cases[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:13px;margin:2px 0;color:var(--text-color)}.dynamic[_ngcontent-%COMP%]   .dynamic-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--font);font-size:18px;margin:8px 0;color:var(--text-color)}"]}),t})();var D=e(2679);const M=[{path:"",component:h}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[f.H],imports:[u.ez,D.Bz.forChild(M)]}),t})()},7399:(v,l,e)=>{e.d(l,{H:()=>p});var u=e(5861),y=e(591),r=e(5062);let p=(()=>{class c{constructor(a){this.cfr=a,this.isLoggedIn=new y.X(!1),this.isLoggedIn$=this.isLoggedIn.asObservable()}login(){this.isLoggedIn.next(!0)}logout(){this.isLoggedIn.next(!1)}loadComponent(a,n){var d=this;return(0,u.Z)(function*(){const{GuestCardComponent:f}=yield e.e(382).then(e.bind(e,2382)),{UserCardComponent:C}=yield e.e(373).then(e.bind(e,8373));return a.clear(),a.createComponent(d.cfr.resolveComponentFactory(n?C:f))})()}}return c.\u0275fac=function(a){return new(a||c)(r.LFG(r._Vd))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac}),c})()}}]);