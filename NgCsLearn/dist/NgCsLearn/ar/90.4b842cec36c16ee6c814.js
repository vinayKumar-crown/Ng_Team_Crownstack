"use strict";(self.webpackChunkng_cs_learn=self.webpackChunkng_cs_learn||[]).push([[90],{3090:(U,u,a)=>{a.r(u),a.d(u,{CsLocaleModule:()=>B});var g=a(8583),o=a(3018),i=a(665);let G=(()=>{class t{constructor(){this.minutes=0,this.gender="male",this.today=new Date,this.number=1e5}ngOnInit(){}increase(){this.minutes+=1}decrease(){this.minutes<0||(this.minutes-=1)}}return t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-cs-locale"]],decls:184,vars:24,consts:function(){let _,l,n,c,r,O,C,f,p,M,L,A,d,S,E,T,b,P,m,F,x,N,v,$,Z,y,R,h,D,q,s,I,k,X;return _="\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0648 i18n",l="\u0644\u062C\u0639\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0623\u0648 \u0645\u0648\u0642\u0639 \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0645\u062A\u0627\u062D\u064B\u0627 \u0628\u0644\u063A\u0627\u062A \u0648\u0644\u063A\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u060C \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0645\u0639\u0631\u0641\u0629 \u0630\u0644\u0643.",n="\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u062A\u062B\u0628\u064A\u062A",c="\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u062C\u0630\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642.",r="\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0623\u0645\u0631",O="\u0645\u062B\u0627\u0644 \u0627\u0644\u062F\u0642\u0627\u0626\u0642",C="{VAR_PLURAL, plural, =0 {\u0627\u0644\u0622\u0646} =1 {\u0642\u0628\u0644 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629} other {{INTERPOLATION} \u062F\u0642\u0627\u0626\u0642 \u0645\u0636\u062A}}",C=o.Zx4(C,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),f="\u0645\u062D\u062F\u062B " + C + "",p="\u0645\u062B\u0627\u0644 \u0627\u0644\u062C\u0646\u0633",M="\u0630\u0643\u0631",L="\u0623\u0646\u062B\u0649",A="\u0622\u062E\u0631",d="{VAR_SELECT, select, male {\u0630\u0643\u0631} female {\u0623\u0646\u062B\u0649} other {\u0622\u062E\u0631}}",d=o.Zx4(d,{VAR_SELECT:"\ufffd0\ufffd"}),S="\u0627\u0644\u0643\u0627\u062A\u0628 \u0647\u0648 " + d + "",E="\u0645\u062B\u0627\u0644 \u0633\u0645\u0629 \u0627\u0644\u0625\u062F\u062E\u0627\u0644",T="\u0627\u0628\u062D\u062B \u0647\u0646\u0627",b="\u0645\u062B\u0627\u0644 \u0639\u0644\u0649 \u0627\u0644\u0623\u0646\u0627\u0628\u064A\u0628 \u0627\u0644\u0632\u0627\u0648\u064A\u0651\u0629 \u0627\u0644\u0645\u062F\u0645\u062C\u0629",P="\u062A\u0627\u0631\u064A\u062E",m="\u0639\u062F\u062F",F="\u0639\u0645\u0644\u0629",x="\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0648\u062A\u062C\u0645\u064A\u0639",N="\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062C\u0644\u062F \u0627\u0644\u062C\u0630\u0631 \u0644\u0644\u062A\u0637\u0628\u064A\u0642 \u0648\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0623\u0645\u0631",v="\u064A\u0645\u0643\u0646\u0643 \u062A\u062D\u062F\u064A\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062B\u0644\u0627\u062B\u0629 \u0641\u064A \u0627\u0644\u0623\u0645\u0631 \u0623\u0639\u0644\u0627\u0647",$="\u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0631\u063A\u0628 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0644\u0644\u063A\u0629 \u0641\u064A \u0645\u0643\u0627\u0646 \u0645\u0639\u064A\u0646 \u0641\u064A \u0627\u0644\u062C\u0630\u0631 \u060C \u0641\u062D\u062F\u062F \u0647\u0630\u0627 \u0627\u0644\u062E\u064A\u0627\u0631.",Z="\u064A\u0633\u0645\u062D \u0627\u0644\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0628\u062A\u0646\u0633\u064A\u0642\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629. \u064A\u062D\u0628",y="\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0630\u064A \u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647 \u0623\u064A\u0636\u064B\u0627.",R="\u0628\u0639\u062F \u0627\u0644\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u060C \u0633\u064A\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641 \u0645\u0635\u062F\u0631 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 \u0641\u064A \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u062D\u064A\u062B \u0642\u0645\u062A \u0628\u0625\u0636\u0627\u0641\u062A\u0647 " + "\ufffd#136\ufffd" + "`i18n`" + "\ufffd/#136\ufffd" + " \u064A\u0646\u0633\u0628.",h="\u0627\u0644\u0622\u0646 \u0642\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0646\u0633\u062E\u0629 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0641\u064A \u0646\u0641\u0633 \u0627\u0644\u0645\u062C\u0644\u062F \u0648\u0642\u0645 \u0628\u062A\u0633\u0645\u064A\u062A\u0647\u0627 \u0648\u0641\u0642\u064B\u0627 \u0644\u0644\u063A\u0627\u062A\u0643. \u0625\u0630\u0627 \u0643\u0627\u0646 \u062A\u0637\u0628\u064A\u0642\u0643 \u064A\u062F\u0639\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0648\u0627\u0644\u0625\u0633\u0628\u0627\u0646\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u060C \u0641\u0633\u062A\u0643\u0648\u0646 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643:",D="\u0623\u0646\u062A \u0627\u0644\u0622\u0646 \u0628\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u0645\u062A\u0631\u062C\u0645 \u062C\u064A\u062F \u064A\u0645\u0643\u0646\u0647 \u062A\u0631\u062C\u0645\u0629 \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0648\u062C\u0648\u062F \u0641\u064A \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u0635\u062F\u0631 \u0647\u0630\u0647 \u0646\u064A\u0627\u0628\u0629 \u0639\u0646\u0643. \u0644\u0643\u0644 \u0634\u0643\u0644 " + "\ufffd#144\ufffd" + "xlf | xlf2 | json | xmb | arb" + "\ufffd/#144\ufffd" + " \u0633\u062A\u0645\u0646\u062D\u0643 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u062A\u0646\u0633\u064A\u0642\u0627\u062A \u0633\u0644\u0633\u0644\u0629 \u0645\u062E\u062A\u0644\u0641\u0629. \u0644\u0630\u0627 \u0627\u0641\u0647\u0645 \u062C\u064A\u062F\u064B\u0627 \u0642\u0628\u0644 \u0625\u0639\u0637\u0627\u0621 \u0627\u0644\u0645\u062A\u0631\u062C\u0645.",q="\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062D\u0644\u064A\u0629",s="\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0644\u063A\u0629 \u062E\u0637\u0648\u0629 \u0645\u0637\u0644\u0648\u0628\u0629. \u0628\u062F\u0648\u0646 \u0647\u0630\u0627 " + "[\ufffd#156\ufffd|\ufffd#157\ufffd|\ufffd#158\ufffd]" + "`number|date|currency`" + "[\ufffd/#156\ufffd|\ufffd/#157\ufffd|\ufffd/#158\ufffd]" + " \u0644\u0646 \u062A\u0642\u0648\u0645 \u0627\u0644\u0623\u0646\u0627\u0628\u064A\u0628 \u0628\u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0635\u062D\u064A\u062D. \u0644\u0644\u0642\u064A\u0627\u0645 \u0628\u0630\u0644\u0643 \u0639\u0644\u064A\u0643 \u0623\u0646 \u062A\u0633\u062A\u062E\u062F\u0645 " + "[\ufffd#156\ufffd|\ufffd#157\ufffd|\ufffd#158\ufffd]" + "`registerLocaleData`" + "[\ufffd/#156\ufffd|\ufffd/#157\ufffd|\ufffd/#158\ufffd]" + " \u0641\u064A " + "[\ufffd#156\ufffd|\ufffd#157\ufffd|\ufffd#158\ufffd]" + "`app.module.ts`" + "[\ufffd/#156\ufffd|\ufffd/#157\ufffd|\ufffd/#158\ufffd]" + "",s=o.Zx4(s),I="\u0644\u0625\u0646\u0634\u0627\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u0644\u063A\u0627\u062A \u060C \u0642\u0645 \u0628\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0641\u064A \u0645\u0644\u0641 \u062A\u0643\u0648\u064A\u0646 \u0645\u0633\u0627\u062D\u0629 \u0639\u0645\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.",k="\u0644\u0644\u062E\u062F\u0645\u0629 \u0628\u0644\u063A\u0629 \u0645\u0639\u064A\u0646\u0629 \u060C \u064A\u062C\u0628 \u0639\u0644\u064A\u0643 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0641\u064A \u062A\u0643\u0648\u064A\u0646 \u0645\u0633\u0627\u062D\u0629 \u0639\u0645\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.",X="\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u0625\u0646\u0634\u0627\u0621 \u0623\u0648\u0627\u0645\u0631 \u0645\u0646\u0641\u0635\u0644\u0629 \u0628\u062A\u0646\u0633\u064A\u0642 " + "\ufffd#174\ufffd" + "`package.json`" + "\ufffd/#174\ufffd" + " \u0623\u064A\u0636\u0627. \u0633\u062A\u0633\u0627\u0639\u062F\u0643 \u0647\u0630\u0647 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0639\u0644\u0649 \u062A\u0634\u063A\u064A\u0644 \u0623\u0634\u064A\u0627\u0621 \u0645\u062D\u062F\u062F\u0629 \u0628\u0634\u0643\u0644 \u0645\u0628\u0627\u0634\u0631.",[[1,"locale-component"],[1,"locale-head"],_,l,[1,"install-step"],n,c,r,[1,"examples"],[1,"time-example"],O,[1,"btn","btn-primary",3,"click"],[1,"count"],[1,"btn","btn-primary",3,"disabled","click"],[1,"count-str"],f,[1,"gender-example"],p,["type","radio","name","gender","value","male",3,"ngModel","ngModelChange"],M,["type","radio","name","gender","value","female",3,"ngModel","ngModelChange"],L,["type","radio","name","gender","value","other",3,"ngModel","ngModelChange"],A,[1,"gender-str"],S,[1,"input-example"],E,["type","text","placeholder",T],[1,"pipes-example"],b,P,m,F,[1,"ex-cm"],x,[1,"steps"],N,v,$,Z,y,R,h,D,q,s,I,k,X]},template:function(l,n){1&l&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o.SDv(3,2),o.qZA(),o.TgZ(4,"p"),o.SDv(5,3),o.qZA(),o._UZ(6,"hr"),o.qZA(),o.TgZ(7,"div",4),o.TgZ(8,"p"),o.TgZ(9,"b"),o.ynx(10),o.SDv(11,5),o.BQk(),o.qZA(),o.qZA(),o.TgZ(12,"ul"),o.TgZ(13,"li"),o.SDv(14,6),o.qZA(),o.TgZ(15,"li"),o.ynx(16),o.SDv(17,7),o.BQk(),o.TgZ(18,"b"),o._uU(19,"`ng add @angular/localize`"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(20,"div",8),o.TgZ(21,"div",9),o.TgZ(22,"p"),o.TgZ(23,"b"),o.ynx(24),o.SDv(25,10),o.BQk(),o._uU(26,":"),o.qZA(),o.qZA(),o.TgZ(27,"button",11),o.NdJ("click",function(){return n.increase()}),o._uU(28,"+"),o.qZA(),o.TgZ(29,"span",12),o._uU(30),o.ALo(31,"number"),o.qZA(),o.TgZ(32,"button",13),o.NdJ("click",function(){return n.decrease()}),o._uU(33,"-"),o.qZA(),o.TgZ(34,"span",14),o.SDv(35,15),o.qZA(),o.qZA(),o.TgZ(36,"div",16),o.TgZ(37,"p"),o.TgZ(38,"b"),o.ynx(39),o.SDv(40,17),o.BQk(),o._uU(41,":"),o.qZA(),o.qZA(),o.TgZ(42,"label"),o.TgZ(43,"input",18),o.NdJ("ngModelChange",function(r){return n.gender=r}),o.qZA(),o.TgZ(44,"span"),o.SDv(45,19),o.qZA(),o.qZA(),o.TgZ(46,"label"),o.TgZ(47,"input",20),o.NdJ("ngModelChange",function(r){return n.gender=r}),o.qZA(),o.TgZ(48,"span"),o.SDv(49,21),o.qZA(),o.qZA(),o.TgZ(50,"label"),o.TgZ(51,"input",22),o.NdJ("ngModelChange",function(r){return n.gender=r}),o.qZA(),o.TgZ(52,"span"),o.SDv(53,23),o.qZA(),o.qZA(),o.TgZ(54,"p",24),o.SDv(55,25),o.qZA(),o.qZA(),o.TgZ(56,"div",26),o.TgZ(57,"p"),o.TgZ(58,"b"),o.ynx(59),o.SDv(60,27),o.BQk(),o.qZA(),o.qZA(),o.TgZ(61,"div"),o._UZ(62,"input",28),o.qZA(),o.qZA(),o.TgZ(63,"div",29),o.TgZ(64,"p"),o.TgZ(65,"b"),o.ynx(66),o.SDv(67,30),o.BQk(),o.qZA(),o.qZA(),o.TgZ(68,"div"),o.TgZ(69,"p"),o.TgZ(70,"b"),o.ynx(71),o.SDv(72,31),o.BQk(),o._uU(73,":"),o.qZA(),o._uU(74),o.ALo(75,"date"),o.qZA(),o.qZA(),o.TgZ(76,"div"),o.TgZ(77,"p"),o.TgZ(78,"b"),o.ynx(79),o.SDv(80,32),o.BQk(),o._uU(81,":"),o.qZA(),o._uU(82),o.ALo(83,"number"),o.qZA(),o.qZA(),o.TgZ(84,"div"),o.TgZ(85,"p"),o.TgZ(86,"b"),o.ynx(87),o.SDv(88,33),o.BQk(),o._uU(89,":"),o.qZA(),o._uU(90),o.ALo(91,"currency"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(92,"div"),o._UZ(93,"hr"),o.qZA(),o.TgZ(94,"div",34),o.TgZ(95,"p"),o.TgZ(96,"b"),o.ynx(97),o.SDv(98,35),o.BQk(),o.qZA(),o.qZA(),o.TgZ(99,"ul",36),o.TgZ(100,"li"),o.ynx(101),o.SDv(102,37),o.BQk(),o.TgZ(103,"b"),o._uU(104,"`ng extract-i18n`"),o.qZA(),o.qZA(),o.TgZ(105,"li"),o.ynx(106),o.SDv(107,38),o.BQk(),o._uU(108,": "),o.TgZ(109,"ul"),o.TgZ(110,"li"),o.TgZ(111,"b"),o._uU(112,"`--output-path`"),o.qZA(),o._uU(113," - "),o.ynx(114),o.SDv(115,39),o.BQk(),o.TgZ(116,"b"),o._uU(117,"`ng extract-i18n --output-path src/locale`"),o.qZA(),o.qZA(),o.TgZ(118,"li"),o.TgZ(119,"b"),o._uU(120,"`--format`"),o.qZA(),o._uU(121," - "),o.ynx(122),o.SDv(123,40),o.BQk(),o.TgZ(124,"b"),o._uU(125,"`ng extract-i18n --format=xlf | xlf2 | json | xmb | arb`"),o.qZA(),o.qZA(),o.TgZ(126,"li"),o.TgZ(127,"b"),o._uU(128,"`--out-file`"),o.qZA(),o._uU(129," - "),o.ynx(130),o.SDv(131,41),o.BQk(),o.TgZ(132,"b"),o._uU(133,"`ng extract-i18n --out-file source.xlf`"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(134,"li"),o.tHW(135,42),o._UZ(136,"b"),o.N_p(),o.qZA(),o.TgZ(137,"li"),o.ynx(138),o.SDv(139,43),o.BQk(),o.TgZ(140,"b"),o._uU(141,"`sourceFile.en.xlf | sourceFile.es.xlf | sourceFile.ar.xlf`"),o.qZA(),o.qZA(),o.TgZ(142,"li"),o.tHW(143,44),o._UZ(144,"b"),o.N_p(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(145,"div"),o._UZ(146,"hr"),o.qZA(),o.TgZ(147,"div",34),o.TgZ(148,"p"),o.TgZ(149,"b"),o.ynx(150),o.SDv(151,45),o.BQk(),o.qZA(),o.qZA(),o.TgZ(152,"ul",36),o.TgZ(153,"li"),o.ynx(154),o.tHW(155,46),o._UZ(156,"b"),o._UZ(157,"b"),o._UZ(158,"b"),o.N_p(),o.BQk(),o.qZA(),o.TgZ(159,"li"),o.ynx(160),o.SDv(161,47),o.BQk(),o.TgZ(162,"div"),o.TgZ(163,"code"),o._uU(164),o.qZA(),o.qZA(),o.qZA(),o.TgZ(165,"li"),o.ynx(166),o.SDv(167,48),o.BQk(),o.TgZ(168,"div"),o.TgZ(169,"code"),o._uU(170),o.qZA(),o.qZA(),o.qZA(),o.TgZ(171,"li"),o.ynx(172),o.tHW(173,49),o._UZ(174,"b"),o.N_p(),o.BQk(),o.TgZ(175,"p"),o.TgZ(176,"b"),o._uU(177,"`ng serve --configuration=en`"),o.qZA(),o.qZA(),o.TgZ(178,"p"),o.TgZ(179,"b"),o._uU(180,"`ng serve --configuration=es`"),o.qZA(),o.qZA(),o.TgZ(181,"p"),o.TgZ(182,"b"),o._uU(183,"`ng build`"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&l&&(o.xp6(30),o.Oqu(o.lcZ(31,13,n.minutes)),o.xp6(2),o.Q6J("disabled",0===n.minutes),o.xp6(3),o.pQV(n.minutes)(n.minutes),o.QtT(35),o.xp6(8),o.Q6J("ngModel",n.gender),o.xp6(4),o.Q6J("ngModel",n.gender),o.xp6(4),o.Q6J("ngModel",n.gender),o.xp6(4),o.pQV(n.gender),o.QtT(55),o.xp6(19),o.hij(" ",o.xi3(75,15,n.today,"medium"),""),o.xp6(8),o.hij(" ",o.Dn7(83,18,n.number,"1.0-0","ar"),""),o.xp6(8),o.hij(" ",o.lcZ(91,22,n.number),""),o.xp6(74),o.hij(" ","{ i18n: { sourceLocale: 'en-US', locales: { es: 'src/i18n/messages.es.json', en: 'src/i18n/messages.en.json', ar: 'src/i18n/messages.ar.json' } }, build: { ... options: { localize: true } } }"," "),o.xp6(6),o.hij(" ","{ configurations: { es: { localize: [ es ] }, en: { localize: [ en ] }, }, serve: { configurations: { en: { browserTarget: 'NgCsLearn:build:en' }, es: { browserTarget: 'NgCsLearn:build:es' } } } }"," "))},directives:[i._,i.Fj,i.JJ,i.On],pipes:[g.JJ,g.uU,g.H9],styles:["button[_ngcontent-%COMP%]{padding:7px 12px;border-width:1px;border-style:solid;font-size:14px;border-radius:4px;cursor:pointer;outline:none;-webkit-user-select:none;user-select:none;font-family:var(--font)}button.small[_ngcontent-%COMP%]{height:20px;font-size:11px;line-height:6px}button.medium[_ngcontent-%COMP%]{height:35px;font-size:14px}button.large[_ngcontent-%COMP%]{height:50px;font-size:17px}button.primary[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--body-color);border-color:var(--body-color)}button.primary[_ngcontent-%COMP%]:hover{background-color:var(--text-color);color:var(--body-color);border-color:var(--text-color);transition:.5s all}button.primary[_ngcontent-%COMP%]:focus{background-color:var(--text-color);color:var(--body-color);border-color:var(--text-color);transition:.5s all}button.primary[_ngcontent-%COMP%]:disabled{color:var(--text-color);background-color:var(--body-color);border-color:var(--body-color);cursor:not-allowed;opacity:.55}button.success[_ngcontent-%COMP%]{color:var(--text-color);background-color:#28a745;border-color:#28a745}button.success[_ngcontent-%COMP%]:hover{background-color:var(--text-color);color:#28a745;border-color:var(--text-color);transition:.5s all}button.success[_ngcontent-%COMP%]:focus{background-color:var(--text-color);color:#28a745;border-color:var(--text-color);transition:.5s all}button.success[_ngcontent-%COMP%]:disabled{color:var(--text-color);background-color:#28a745;border-color:#28a745;cursor:not-allowed;opacity:.55}button.danger[_ngcontent-%COMP%]{color:var(--text-color);background-color:#dc3545;border-color:#dc3545}button.danger[_ngcontent-%COMP%]:hover{background-color:var(--text-color);color:#dc3545;border-color:var(--text-color);transition:.5s all}button.danger[_ngcontent-%COMP%]:focus{background-color:var(--text-color);color:#dc3545;border-color:var(--text-color);transition:.5s all}button.danger[_ngcontent-%COMP%]:disabled{color:var(--text-color);background-color:#dc3545;border-color:#dc3545;cursor:not-allowed;opacity:.55}button.warning[_ngcontent-%COMP%]{color:var(--text-color);background-color:#ffc107;border-color:#ffc107}button.warning[_ngcontent-%COMP%]:hover{background-color:var(--text-color);color:#ffc107;border-color:var(--text-color);transition:.5s all}button.warning[_ngcontent-%COMP%]:focus{background-color:var(--text-color);color:#ffc107;border-color:var(--text-color);transition:.5s all}button.warning[_ngcontent-%COMP%]:disabled{color:var(--text-color);background-color:#ffc107;border-color:#ffc107;cursor:not-allowed;opacity:.55}button.info[_ngcontent-%COMP%]{color:var(--text-color);background-color:#17a2b8;border-color:#17a2b8}button.info[_ngcontent-%COMP%]:hover{background-color:var(--text-color);color:#17a2b8;border-color:var(--text-color);transition:.5s all}button.info[_ngcontent-%COMP%]:focus{background-color:var(--text-color);color:#17a2b8;border-color:var(--text-color);transition:.5s all}button.info[_ngcontent-%COMP%]:disabled{color:var(--text-color);background-color:#17a2b8;border-color:#17a2b8;cursor:not-allowed;opacity:.55}button.primary-outline[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--body-color);border-color:var(--text-color)}button.primary-outline[_ngcontent-%COMP%]:hover{background-color:var(--text-color);color:var(--body-color);border-color:var(--text-color);transition:.5s all}button.primary-outline[_ngcontent-%COMP%]:focus{background-color:var(--text-color);color:var(--body-color);border-color:var(--text-color);transition:.5s all}button.primary-outline[_ngcontent-%COMP%]:disabled{color:var(--text-color);background-color:var(--body-color);border-color:var(--text-color);cursor:not-allowed;opacity:.55}button.success-outline[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--body-color);border-color:#28a745}button.success-outline[_ngcontent-%COMP%]:hover{background-color:#28a745;color:var(--body-color);border-color:#28a745;transition:.5s all}button.success-outline[_ngcontent-%COMP%]:focus{background-color:#28a745;color:var(--body-color);border-color:#28a745;transition:.5s all}button.success-outline[_ngcontent-%COMP%]:disabled{color:#28a745;background-color:var(--body-color);border-color:#28a745;cursor:not-allowed;opacity:.55}button.danger-outline[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--body-color);border-color:#dc3545}button.danger-outline[_ngcontent-%COMP%]:hover{background-color:#dc3545;color:var(--body-color);border-color:#dc3545;transition:.5s all}button.danger-outline[_ngcontent-%COMP%]:focus{background-color:#dc3545;color:var(--body-color);border-color:#dc3545;transition:.5s all}button.danger-outline[_ngcontent-%COMP%]:disabled{color:#dc3545;background-color:var(--body-color);border-color:#dc3545;cursor:not-allowed;opacity:.55}button.warning-outline[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--body-color);border-color:#ffc107}button.warning-outline[_ngcontent-%COMP%]:hover{background-color:#ffc107;color:var(--body-color);border-color:#ffc107;transition:.5s all}button.warning-outline[_ngcontent-%COMP%]:focus{background-color:#ffc107;color:var(--body-color);border-color:#ffc107;transition:.5s all}button.warning-outline[_ngcontent-%COMP%]:disabled{color:#ffc107;background-color:var(--body-color);border-color:#ffc107;cursor:not-allowed;opacity:.55}button.info-outline[_ngcontent-%COMP%]{color:var(--text-color);background-color:var(--body-color);border-color:#17a2b8}button.info-outline[_ngcontent-%COMP%]:hover{background-color:#17a2b8;color:var(--body-color);border-color:#17a2b8;transition:.5s all}button.info-outline[_ngcontent-%COMP%]:focus{background-color:#17a2b8;color:var(--body-color);border-color:#17a2b8;transition:.5s all}button.info-outline[_ngcontent-%COMP%]:disabled{color:#17a2b8;background-color:var(--body-color);border-color:#17a2b8;cursor:not-allowed;opacity:.55}input.invalid[_ngcontent-%COMP%], select.invalid[_ngcontent-%COMP%], textarea.invalid[_ngcontent-%COMP%]{border-color:#dc3545!important}input.valid[_ngcontent-%COMP%], select.valid[_ngcontent-%COMP%], textarea.valid[_ngcontent-%COMP%]{border-color:#28a745!important}input[type=text][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{display:block;width:100%;padding:.375rem .75rem;line-height:1.5;color:var(--text-color);background-color:transparent;background:var(--body-color);height:30px;outline:none;font-size:14px;font-weight:500;border-width:1px;border-style:solid;border-color:var(--border-color);border-radius:4px;font-family:var(--font)}input[type=text][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:active, input[type=number][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:active, select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:active{outline:none!important}select[_ngcontent-%COMP%]{height:44px}textarea[_ngcontent-%COMP%]{resize:none;height:80px!important;display:block;width:100%;padding:.375rem .75rem;line-height:1.5;color:var(--text-color);background-color:transparent;background:var(--body-color);height:30px;outline:none;font-size:14px;font-weight:500;border-width:1px;border-style:solid;border-color:var(--border-color);border-radius:4px;font-family:var(--font)}textarea[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:active{outline:none!important}.locale-component[_ngcontent-%COMP%]{padding:15px}.locale-component[_ngcontent-%COMP%]   .locale-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--font);font-size:22px;text-align:center;margin:8px 0;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .locale-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;text-align:center;margin:0 0 4px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .install-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;margin:0 0 4px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .install-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px;margin:5px}.locale-component[_ngcontent-%COMP%]   .install-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .time-example[_ngcontent-%COMP%]{margin-bottom:10px}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .time-example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;margin:0 0 4px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .time-example[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;color:var(--text-color);margin:0 5px}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .time-example[_ngcontent-%COMP%]   .count-str[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;color:var(--text-color);margin-left:10px}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .gender-example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;margin:0 0 4px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .gender-example[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .gender-example[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(:first-of-type){margin-left:10px}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .gender-example[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{vertical-align:top}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .gender-example[_ngcontent-%COMP%]   .gender-str[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;margin:4px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .pipes-example[_ngcontent-%COMP%], .locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .input-example[_ngcontent-%COMP%]{margin-bottom:10px}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .pipes-example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .input-example[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;margin:0 0 4px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .input-example[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:250px}.locale-component[_ngcontent-%COMP%]   .ex-cm[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;margin:0 0 4px;color:var(--text-color)}.locale-component[_ngcontent-%COMP%]   .ex-cm[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{padding-left:20px;margin:5px}.locale-component[_ngcontent-%COMP%]   .ex-cm[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:var(--font);font-size:14px;color:var(--text-color)}"]}),t})();var w=a(5330);const z=[{path:"",component:G}];let B=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.ez,w.Bz.forChild(z),i.u5]]}),t})()}}]);