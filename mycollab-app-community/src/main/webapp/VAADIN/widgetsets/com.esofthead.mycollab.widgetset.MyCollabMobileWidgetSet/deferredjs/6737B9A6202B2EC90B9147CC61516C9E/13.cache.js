$wnd.com_esofthead_mycollab_widgetset_MyCollabMobileWidgetSet.runAsyncCallback13("function Fvc(){}\nfunction Hvc(){}\nfunction Jvc(){}\nfunction Aed(){QXb.call(this)}\nfunction V$b(a,b){return QM(a.H.Jm(b),2)}\nfunction W$b(a){return a.e.q+'themes/'+a.Q.b}\nfunction evd(){sXb.call(this);this.I=k2d;this.b=new RFd}\nfunction hJc(c,a){var b=c;a.notifyChildrenOfSizeChange=SId(function(){b.Ok()})}\nfunction pJc(b){try{b!=null&&eval('{ var document = $doc; var window = $wnd; '+b+'}')}catch(a){}}\nfunction eJc(b){if(b&&b.iLayoutJS){try{b.iLayoutJS();return true}catch(a){return false}}else{return false}}\nfunction dJc(a,b){var c,d;for(c=OCd(iBd(a.g));c.b.ih();){d=QM(TCd(c),2);if(WM(a.g.Jm(d))===WM(b)){return d}}return null}\nfunction iJc(a,b){var c,d;d=dJc(a,b);d!=null&&a.g.Mm(d);c=QM(a.b.Jm(b),279);if(c){a.b.Mm(b);return vc(a,c)}else if(b){return vc(a,b)}return false}\nfunction fJc(a){var b,c,d;d=(Lrb(),a.ac).getElementsByTagName('IMG');for(b=0;b<d.length;b++){c=d[b];Jrb.Jg(c,GNd)}}\nfunction jJc(a,b){var c,d,e;if((ft(),b).hasAttribute(b$d)){e=lt(b,b$d);a.f.Lm(e,b);Ss(b,'')}else{d=(Lrb(),Wtb(b));for(c=0;c<d;c++){jJc(a,Vtb(b,c))}}}\nfunction kJc(a,b,c){var d,e;if(!b){return}d=RM(a.f.Jm(c));if(!d&&a.e){throw new _yd('No location '+c+TRd)}e=QM(a.g.Jm(c),18);if(e==b){return}!!e&&iJc(a,e);a.e||(d=(Lrb(),a.ac));lc(a,b,(Lrb(),d));a.g.Lm(c,b)}\nfunction lJc(a,b){var c,d,e;d=b.Xc();e=QM(a.b.Jm(d),279);if(U7b(b.Id())){if(!e){c=dJc(a,d);vc(a,d);e=new $7b(b,a.c);kc(a,e,RM(a.f.Jm(c)));a.b.Lm(d,e)}P7b(e.b)}else{if(e){c=dJc(a,d);vc(a,e);kc(a,d,RM(a.f.Jm(c)));a.b.Mm(d)}}}\nfunction Bvc(c){var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.hk(Cib,g2d,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.hk(Cib,h2d,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.hk(Cib,i2d,d)}\nfunction mJc(){var a;wc.call(this);this.f=new RFd;this.g=new RFd;this.b=new RFd;this.j='';this.e=false;ib(this,(Lrb(),Yu($doc)));a=this.ac.style;Uw(a,TPd,(_w(),bJd));a[QRd]=0+(LA(),nJd);a[iSd]=tKd;(o1b(),!n1b&&(n1b=new F1b),o1b(),n1b).b.i&&Uw(a,lJd,(Nz(),OJd));Qs(this.ac,k2d);Eb(this.ac,NYd,true)}\nfunction zed(a){var b,c;if(QM(qg(a),82).e){return}c=(!a.G&&(a.G=Bf(a)),QM(QM(QM(a.G,5),37),154)).d;b=(!a.G&&(a.G=Bf(a)),QM(QM(QM(a.G,5),37),154)).c;if(c!=null){b=V$b(a.v,'layouts/'+c+'.html');b==null&&(b='<em>Layout file layouts/'+c+'.html is missing. Components will be drawn for debug purposes.<\\/em>')}gJc(QM(qg(a),82),b,W$b(a.v))}\nfunction cJc(a,b){var c,d,e,f,g,i,j,k;b=jAd(b,'_UID_',a.i+'__');a.j='';d=0;f=b.toLowerCase();i='';j=f.indexOf('<script',0);while(j>0){i+=oAd(b,d,j);j=f.indexOf('>',j);e=f.indexOf('<\\/script>',j);a.j+=oAd(b,j+1,e)+';';g=d=e+9;j=f.indexOf('<script',g)}i+=nAd(b,d);f=i.toLowerCase();k=f.indexOf('<body');if(k<0){i=i}else{k=f.indexOf('>',k)+1;c=f.indexOf('<\\/body>',k);c>k?(i=oAd(i,k,c)):(i=nAd(i,k))}return i}\nfunction gJc(a,b,c){var d;b=cJc(a,b);d=c+'/layouts/';b=jAd(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=\"((?![a-z]+:)[^/][^\"]+)\"',j2d+d+'$3\"');b=jAd(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=[^\"]((?![a-z]+:)[^/][^ />]+)[ />]',j2d+d+'$3\"');b=jAd(b,'(<[^>]+style=\"[^\"]*url\\\\()((?![a-z]+:)[^/][^\"]+)(\\\\)[^>]*>)','$1 '+d+'$2 $3');Ss((Lrb(),a.ac),b);a.f.zc();jJc(a,a.ac);fJc(a);a.d=Srb(a.ac);!a.d&&(a.d=a.ac);hJc(a,a.d);a.e=true}\nvar g2d='childLocations',h2d='templateName',i2d='templateContents',j2d='<$1 $2src=\"',k2d='v-customlayout';Jnb(1201,1,mRd);_.Ae=function Evc(){OAc(this.c,Cib,Thb);EAc(this.c,PUd,Seb);HAc(this.c,Y9,aVd,new Fvc);HAc(this.c,Cib,aVd,new Hvc);HAc(this.c,Seb,aVd,new Jvc);MAc(this.c,Seb,iKd,new wAc(Y9));MAc(this.c,Seb,XJd,new wAc(Cib));Bvc(this.c);KAc(this.c,Cib,g2d,new xAc(YVd,FM(Emb,pVd,8,0,[new wAc(Bhb),new wAc(ykb)])));KAc(this.c,Cib,h2d,new wAc(ykb));KAc(this.c,Cib,i2d,new wAc(ykb));Jjc((!Cjc&&(Cjc=new Pjc),Cjc),this.b.e)};Jnb(1355,1,HXd,Fvc);_.bk=function Gvc(a,b){return new mJc};Jnb(810,1,HXd,Hvc);_.bk=function Ivc(a,b){return new evd};Jnb(1491,1,HXd,Jvc);_.bk=function Kvc(a,b){return new Aed};Jnb(82,462,{2210:1,2542:1,837:1,2447:1,122:1,2277:1,2137:1,293:1,327:1,18:1,82:1,191:1},mJc);_.yc=function nJc(a){throw new eBd};_.zc=function oJc(){fc(this);this.g.zc();this.b.zc()};_.Ok=function qJc(){};_.tc=function rJc(a){Rb(this,a);if((Lrb(),Dtb(a))==GNd){k7b(this,true);Ctb(a,true)}};_.uc=function sJc(){Sb(this);!!this.d&&(this.d.notifyChildrenOfSizeChange=null,undefined)};_.Ac=function tJc(a){return iJc(this,a)};_.kc=function uJc(a){Qs((Lrb(),this.ac),a);Eb(this.ac,NYd,true)};_.e=false;Jnb(1919,982,{419:1,7:1,740:1,74:1,426:1,64:1,1062:1,158:1,205:1,80:1,403:1,134:1,3:1},Aed);_.Id=function Bed(){return !this.G&&(this.G=Bf(this)),QM(QM(QM(this.G,5),37),154)};_.rd=function Ced(){return !this.G&&(this.G=Bf(this)),QM(QM(QM(this.G,5),37),154)};_.Ei=function Ded(){return !this.G&&(this.G=Bf(this)),QM(QM(QM(this.G,5),37),154)};_.Xc=function Eed(){return QM(qg(this),82)};_.td=function Fed(){QM(qg(this),82).c=this.v;QM(qg(this),82).i=this.A};_.Pi=function Ged(){eJc((QM(qg(this),82),Srb(Y(QM(qg(this),82)))))};_.ae=function Hed(b){var c,d,e,f,g,i;zed(this);for(d=Xg(this).Gc();d.ih();){c=QM(d.jh(),7);e=QM((!this.G&&(this.G=Bf(this)),QM(QM(QM(this.G,5),37),154)).b.Jm(c),2);try{kJc(QM(qg(this),82),c.Xc(),e)}catch(a){a=Gnb(a);if(!SM(a,291))throw Fnb(a)}}for(g=b.b.Gc();g.ih();){f=QM(g.jh(),7);if(f.pd()==this){continue}i=f.Xc();i.rc()&&iJc(QM(qg(this),82),i)}};_.vd=function Ied(a){sg(this,a);zed(this);pJc(QM(qg(this),82).j);QM(qg(this),82).j=null};_.be=function Jed(a){lJc(QM(qg(this),82),a)};_.pi=function Ked(a,b){};Jnb(154,37,{5:1,367:1,37:1,154:1,3:1},evd);var Cib=zyd('com.vaadin.shared.ui.customlayout.','CustomLayoutState',154),Seb=zyd('com.vaadin.client.ui.customlayout.',SXd,1919),Y9=zyd(T$d,'VCustomLayout',82),s6=zyd(F_d,'ConnectorBundleLoaderImpl$13$1$1',1355),t6=zyd(F_d,'ConnectorBundleLoaderImpl$13$1$2',810),u6=zyd(F_d,'ConnectorBundleLoaderImpl$13$1$3',1491);SId(Vp)(13);\n//# sourceURL=com.esofthead.mycollab.widgetset.MyCollabMobileWidgetSet-13.js\n")