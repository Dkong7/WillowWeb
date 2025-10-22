import{R as zt,r as N,u as Wt,j as m,L as Qa}from"./index-CxccSAWK.js";/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function er(e){if(Array.isArray(e))return e}function tr(e){if(Array.isArray(e))return Te(e)}function ar(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ut(r.key),r)}}function nr(e,t,a){return t&&rr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Xe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function h(e,t,a){return(t=Ut(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ir(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function or(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?st(Object(a),!0).forEach(function(r){h(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ye(e,t){return er(e)||or(e,t)||Xe(e,t)||sr()}function _(e){return tr(e)||ir(e)||Xe(e)||lr()}function fr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ut(e){var t=fr(e,"string");return typeof t=="symbol"?t:t+""}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function Xe(e,t){if(e){if(typeof e=="string")return Te(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Te(e,t):void 0}}var lt=function(){},Je={},Yt={},Ht=null,Bt={mark:lt,measure:lt};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(Yt=document),typeof MutationObserver<"u"&&(Ht=MutationObserver),typeof performance<"u"&&(Bt=performance)}catch{}var ur=Je.navigator||{},ft=ur.userAgent,ut=ft===void 0?"":ft,U=Je,A=Yt,ct=Ht,ce=Bt;U.document;var D=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Gt=~ut.indexOf("MSIE")||~ut.indexOf("Trident/"),Ie,cr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,dr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Kt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},mr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Vt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],E="classic",se="duotone",Xt="sharp",Jt="sharp-duotone",qt="chisel",Zt="etch",Qt="jelly",ea="jelly-duo",ta="jelly-fill",aa="notdog",ra="notdog-duo",na="slab",ia="slab-press",oa="thumbprint",sa="utility",la="utility-duo",fa="utility-fill",ua="whiteboard",vr="Classic",pr="Duotone",hr="Sharp",gr="Sharp Duotone",br="Chisel",yr="Etch",xr="Jelly",wr="Jelly Duo",Sr="Jelly Fill",Ar="Notdog",kr="Notdog Duo",Pr="Slab",Ir="Slab Press",Er="Thumbprint",Nr="Utility",jr="Utility Duo",Fr="Utility Fill",Cr="Whiteboard",ca=[E,se,Xt,Jt,qt,Zt,Qt,ea,ta,aa,ra,na,ia,oa,sa,la,fa,ua];Ie={},h(h(h(h(h(h(h(h(h(h(Ie,E,vr),se,pr),Xt,hr),Jt,gr),qt,br),Zt,yr),Qt,xr),ea,wr),ta,Sr),aa,Ar),h(h(h(h(h(h(h(h(Ie,ra,kr),na,Pr),ia,Ir),oa,Er),sa,Nr),la,jr),fa,Fr),ua,Cr);var Or={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},_r={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Tr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Lr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},da=["fak","fa-kit","fakd","fa-kit-duotone"],dt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mr=["kit"],$r="kit",Rr="kit-duotone",Dr="Kit",zr="Kit Duotone";h(h({},$r,Dr),Rr,zr);var Wr={kit:{"fa-kit":"fak"}},Ur={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yr={kit:{fak:"fa-kit"}},mt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ee,de={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Br="classic",Gr="duotone",Kr="sharp",Vr="sharp-duotone",Xr="chisel",Jr="etch",qr="jelly",Zr="jelly-duo",Qr="jelly-fill",en="notdog",tn="notdog-duo",an="slab",rn="slab-press",nn="thumbprint",on="utility",sn="utility-duo",ln="utility-fill",fn="whiteboard",un="Classic",cn="Duotone",dn="Sharp",mn="Sharp Duotone",vn="Chisel",pn="Etch",hn="Jelly",gn="Jelly Duo",bn="Jelly Fill",yn="Notdog",xn="Notdog Duo",wn="Slab",Sn="Slab Press",An="Thumbprint",kn="Utility",Pn="Utility Duo",In="Utility Fill",En="Whiteboard";Ee={},h(h(h(h(h(h(h(h(h(h(Ee,Br,un),Gr,cn),Kr,dn),Vr,mn),Xr,vn),Jr,pn),qr,hn),Zr,gn),Qr,bn),en,yn),h(h(h(h(h(h(h(h(Ee,tn,xn),an,wn),rn,Sn),nn,An),on,kn),sn,Pn),ln,In),fn,En);var Nn="kit",jn="kit-duotone",Fn="Kit",Cn="Kit Duotone";h(h({},Nn,Fn),jn,Cn);var On={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},_n={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Tn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ma=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Hr,Tn),Ln=["solid","regular","light","thin","duotone","brands","semibold"],va=[1,2,3,4,5,6,7,8,9,10],Mn=va.concat([11,12,13,14,15,16,17,18,19,20]),$n=["aw","fw","pull-left","pull-right"],Rn=[].concat(_(Object.keys(_n)),Ln,$n,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",de.GROUP,de.SWAP_OPACITY,de.PRIMARY,de.SECONDARY]).concat(va.map(function(e){return"".concat(e,"x")})).concat(Mn.map(function(e){return"w-".concat(e)})),Dn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",Me=16,pa="fa",ha="svg-inline--fa",G="data-fa-i2svg",$e="data-fa-pseudo-element",zn="data-fa-pseudo-element-pending",qe="data-prefix",Ze="data-icon",vt="fontawesome-i2svg",Wn="async",Un=["HTML","HEAD","STYLE","SCRIPT"],ga=["::before","::after",":before",":after"],ba=(function(){try{return!0}catch{return!1}})();function le(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[E]}})}var ya=f({},Kt);ya[E]=f(f(f(f({},{"fa-duotone":"duotone"}),Kt[E]),dt.kit),dt["kit-duotone"]);var Yn=le(ya),Re=f({},Lr);Re[E]=f(f(f(f({},{duotone:"fad"}),Re[E]),mt.kit),mt["kit-duotone"]);var pt=le(Re),De=f({},Le);De[E]=f(f({},De[E]),Yr.kit);var Qe=le(De),ze=f({},On);ze[E]=f(f({},ze[E]),Wr.kit);le(ze);var Hn=cr,xa="fa-layers-text",Bn=dr,Gn=f({},Or);le(Gn);var Kn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ne=mr,Vn=[].concat(_(Mr),_(Rn)),ae=U.FontAwesomeConfig||{};function Xn(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Jn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var qn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qn.forEach(function(e){var t=ye(e,2),a=t[0],r=t[1],n=Jn(Xn(a));n!=null&&(ae[r]=n)})}var wa={styleDefault:"solid",familyDefault:E,cssPrefix:pa,replacementClass:ha,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ae.familyPrefix&&(ae.cssPrefix=ae.familyPrefix);var Z=f(f({},wa),ae);Z.autoReplaceSvg||(Z.observeMutations=!1);var p={};Object.keys(wa).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){Z[e]=a,re.forEach(function(r){return r(p)})},get:function(){return Z[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,re.forEach(function(a){return a(p)})},get:function(){return Z.cssPrefix}});U.FontAwesomeConfig=p;var re=[];function Zn(e){return re.push(e),function(){re.splice(re.indexOf(e),1)}}var V=Me,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qn(e){if(!(!e||!D)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=A.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(t,r),e}}var ei="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){for(var e=12,t="";e-- >0;)t+=ei[Math.random()*62|0];return t}function Q(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function et(e){return e.classList?Q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Sa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ti(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Sa(e[a]),'" ')},"").trim()}function xe(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function tt(e){return e.size!==T.size||e.x!==T.x||e.y!==T.y||e.rotate!==T.rotate||e.flipX||e.flipY}function ai(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function ri(e){var t=e.transform,a=e.width,r=a===void 0?Me:a,n=e.height,i=n===void 0?Me:n,o="";return Gt?o+="translate(".concat(t.x/V-r/2,"em, ").concat(t.y/V-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "),o+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var ni=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Aa(){var e=pa,t=ha,a=p.cssPrefix,r=p.replacementClass,n=ni;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var gt=!1;function je(){p.autoAddCss&&!gt&&(Qn(Aa()),gt=!0)}var ii={mixout:function(){return{dom:{css:Aa,insertCss:je}}},hooks:function(){return{beforeDOMElementCreation:function(){je()},beforeI2svg:function(){je()}}}},R=U||{};R[$]||(R[$]={});R[$].styles||(R[$].styles={});R[$].hooks||(R[$].hooks={});R[$].shims||(R[$].shims=[]);var O=R[$],ka=[],Pa=function(){A.removeEventListener("DOMContentLoaded",Pa),ge=1,ka.map(function(t){return t()})},ge=!1;D&&(ge=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),ge||A.addEventListener("DOMContentLoaded",Pa));function oi(e){D&&(ge?setTimeout(e,0):ka.push(e))}function fe(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Sa(e):"<".concat(t," ").concat(ti(r),">").concat(i.map(fe).join(""),"</").concat(t,">")}function bt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Fe=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function Ia(e){return _(e).length!==1?null:e.codePointAt(0).toString(16)}function yt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function We(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=yt(t);typeof O.hooks.addPack=="function"&&!n?O.hooks.addPack(e,yt(t)):O.styles[e]=f(f({},O.styles[e]||{}),i),e==="fas"&&We("fa",t)}var ie=O.styles,si=O.shims,Ea=Object.keys(Qe),li=Ea.reduce(function(e,t){return e[t]=Object.keys(Qe[t]),e},{}),at=null,Na={},ja={},Fa={},Ca={},Oa={};function fi(e){return~Vn.indexOf(e)}function ui(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!fi(n)?n:null}var _a=function(){var t=function(i){return Fe(ie,function(o,s,l){return o[l]=Fe(s,i,{}),o},{})};Na=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),ja=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Oa=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ie||p.autoFetchSvg,r=Fe(si,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Fa=r.names,Ca=r.unicodes,at=we(p.styleDefault,{family:p.familyDefault})};Zn(function(e){at=we(e.styleDefault,{family:p.familyDefault})});_a();function rt(e,t){return(Na[e]||{})[t]}function ci(e,t){return(ja[e]||{})[t]}function B(e,t){return(Oa[e]||{})[t]}function Ta(e){return Fa[e]||{prefix:null,iconName:null}}function di(e){var t=Ca[e],a=rt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Y(){return at}var La=function(){return{prefix:null,iconName:null,rest:[]}};function mi(e){var t=E,a=Ea.reduce(function(r,n){return r[n]="".concat(p.cssPrefix,"-").concat(n),r},{});return ca.forEach(function(r){(e.includes(a[r])||e.some(function(n){return li[r].includes(n)}))&&(t=r)}),t}function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?E:a,n=Yn[r][e];if(r===se&&!e)return"fad";var i=pt[r][e]||pt[r][n],o=e in O.styles?e:null,s=i||o||null;return s}function vi(e){var t=[],a=null;return e.forEach(function(r){var n=ui(p.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function xt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var wt=ma.concat(da);function Se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=xt(e.filter(function(v){return wt.includes(v)})),o=xt(e.filter(function(v){return!wt.includes(v)})),s=i.filter(function(v){return n=v,!Vt.includes(v)}),l=ye(s,1),u=l[0],c=u===void 0?null:u,d=mi(i),g=f(f({},vi(o)),{},{prefix:we(c,{family:d})});return f(f(f({},g),bi({values:e,family:d,styles:ie,config:p,canonical:g,givenPrefix:n})),pi(r,n,g))}function pi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Ta(n):{},o=B(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ie.far&&ie.fas&&!p.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var hi=ca.filter(function(e){return e!==E||e!==se}),gi=Object.keys(Le).filter(function(e){return e!==E}).map(function(e){return Object.keys(Le[e])}).flat();function bi(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,c=a===se,d=t.includes("fa-duotone")||t.includes("fad"),g=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(d||g||v)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&hi.includes(a)){var w=Object.keys(s).find(function(S){return gi.includes(S)});if(w||u.autoFetchSvg){var y=Tr.get(a).defaultShortPrefixId;r.prefix=y,r.iconName=B(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Y()||"fas"),r}var yi=(function(){function e(){ar(this,e),this.definitions={}}return nr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),We(s,o[s]);var l=Qe[E][s];l&&We(l,o[s]),_a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}])})(),St=[],J={},q={},xi=Object.keys(q);function wi(e,t){var a=t.mixoutsTo;return St=e,J={},Object.keys(q).forEach(function(r){xi.indexOf(r)===-1&&delete q[r]}),St.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),he(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){J[o]||(J[o]=[]),J[o].push(i[o])})}r.provides&&r.provides(q)}),a}function Ue(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=J[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function K(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=J[e]||[];n.forEach(function(i){i.apply(null,a)})}function H(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function Ye(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||Y();if(t)return t=B(a,t)||t,bt(Ma.definitions,a,t)||bt(O.styles,a,t)}var Ma=new yi,Si=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,K("noAuto")},Ai={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(K("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,oi(function(){Pi({autoReplaceSvgRoot:a}),K("watch",t)})}},ki={icon:function(t){if(t===null)return null;if(he(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:B(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=we(t[0]);return{prefix:r,iconName:B(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Hn))){var n=Se(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||Y(),iconName:B(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=Y();return{prefix:i,iconName:B(i,t)||t}}}},F={noAuto:Si,config:p,dom:Ai,parse:ki,library:Ma,findIconDefinition:Ye,toHtml:fe},Pi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?A:a;(Object.keys(O.styles).length>0||p.autoFetchSvg)&&D&&p.autoReplaceSvg&&F.dom.i2svg({node:r})};function Ae(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return fe(r)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var r=A.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ii(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(tt(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=xe(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Ei(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function Ni(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function nt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,d=c===void 0?!1:c,g=r.found?r:a,v=g.width,w=g.height,y=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(b){return u.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(w)})};!Ni(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[G]="");var k=f(f({},S),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),P=r.found&&a.found?H("generateAbstractMask",k)||{children:[],attributes:{}}:H("generateAbstractIcon",k)||{children:[],attributes:{}},I=P.children,C=P.attributes;return k.children=I,k.attributes=C,s?Ei(k):Ii(k)}function At(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[G]="");var u=f({},i.styles);tt(n)&&(u.transform=ri({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var c=xe(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function ji(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=xe(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ce=O.styles;function He(e){var t=e[0],a=e[1],r=e.slice(4),n=ye(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ne.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ne.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Fi={found:!1,width:512,height:512};function Ci(e,t){!ba&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Be(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=Y()),new Promise(function(r,n){if(a==="fa"){var i=Ta(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ce[t]&&Ce[t][e]){var o=Ce[t][e];return r(He(o))}Ci(e,t),r(f(f({},Fi),{},{icon:p.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}var kt=function(){},Ge=p.measurePerformance&&ce&&ce.mark&&ce.measure?ce:{mark:kt,measure:kt},te='FA "7.1.0"',Oi=function(t){return Ge.mark("".concat(te," ").concat(t," begins")),function(){return $a(t)}},$a=function(t){Ge.mark("".concat(te," ").concat(t," ends")),Ge.measure("".concat(te," ").concat(t),"".concat(te," ").concat(t," begins"),"".concat(te," ").concat(t," ends"))},it={begin:Oi,end:$a},ve=function(){};function Pt(e){var t=e.getAttribute?e.getAttribute(G):null;return typeof t=="string"}function _i(e){var t=e.getAttribute?e.getAttribute(qe):null,a=e.getAttribute?e.getAttribute(Ze):null;return t&&a}function Ti(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Li(){if(p.autoReplaceSvg===!0)return pe.replace;var e=pe[p.autoReplaceSvg];return e||pe.replace}function Mi(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function $i(e){return A.createElement(e)}function Ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Mi:$i:a;if(typeof e=="string")return A.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ra(o,{ceFn:r}))}),n}function Ri(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pe={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ra(n),a)}),a.getAttribute(G)===null&&p.keepOriginalSource){var r=A.createComment(Ri(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~et(a).indexOf(p.replacementClass))return pe.replace(t);var n=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return fe(s)}).join(`
`);a.setAttribute(G,""),a.innerHTML=o}};function It(e){e()}function Da(e,t){var a=typeof t=="function"?t:ve;if(e.length===0)a();else{var r=It;p.mutateApproach===Wn&&(r=U.requestAnimationFrame||It),r(function(){var n=Li(),i=it.begin("mutate");e.map(n),i(),a()})}}var ot=!1;function za(){ot=!0}function Ke(){ot=!1}var be=null;function Et(e){if(ct&&p.observeMutations){var t=e.treeCallback,a=t===void 0?ve:t,r=e.nodeCallback,n=r===void 0?ve:r,i=e.pseudoElementsCallback,o=i===void 0?ve:i,s=e.observeMutationsRoot,l=s===void 0?A:s;be=new ct(function(u){if(!ot){var c=Y();Q(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Pt(d.addedNodes[0])&&(p.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&p.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&Pt(d.target)&&~Kn.indexOf(d.attributeName))if(d.attributeName==="class"&&_i(d.target)){var g=Se(et(d.target)),v=g.prefix,w=g.iconName;d.target.setAttribute(qe,v||c),w&&d.target.setAttribute(Ze,w)}else Ti(d.target)&&n(d.target)})}}),D&&be.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Di(){be&&be.disconnect()}function zi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Wi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Se(et(e));return n.prefix||(n.prefix=Y()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ci(n.prefix,e.innerText)||rt(n.prefix,Ia(e.innerText))),!n.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Ui(e){var t=Q(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Yi(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Nt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Wi(e),r=a.iconName,n=a.prefix,i=a.rest,o=Ui(e),s=Ue("parseNodeAttributes",{},e),l=t.styleParser?zi(e):[];return f({iconName:r,prefix:n,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Hi=O.styles;function Wa(e){var t=p.autoReplaceSvg==="nest"?Nt(e,{styleParser:!1}):Nt(e);return~t.extra.classes.indexOf(xa)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}function Bi(){return[].concat(_(da),_(ma))}function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=A.documentElement.classList,r=function(d){return a.add("".concat(vt,"-").concat(d))},n=function(d){return a.remove("".concat(vt,"-").concat(d))},i=p.autoFetchSvg?Bi():Vt.concat(Object.keys(Hi));i.includes("fa")||i.push("fa");var o=[".".concat(xa,":not([").concat(G,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Q(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=it.begin("onTree"),u=s.reduce(function(c,d){try{var g=Wa(d);g&&c.push(g)}catch(v){ba||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(g){Da(g,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(g){l(),d(g)})})}function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wa(e).then(function(a){a&&Da([a],t)})}function Ki(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ye(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ye(n||{})),e(r,f(f({},a),{},{mask:n}))}}var Vi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?T:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.classes,g=d===void 0?[]:d,v=a.attributes,w=v===void 0?{}:v,y=a.styles,S=y===void 0?{}:y;if(t){var k=t.prefix,P=t.iconName,I=t.icon;return Ae(f({type:"icon"},t),function(){return K("beforeDOMElementCreation",{iconDefinition:t,params:a}),nt({icons:{main:He(I),mask:l?He(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:P,transform:f(f({},T),n),symbol:o,maskId:c,extra:{attributes:w,styles:S,classes:g}})})}},Xi={mixout:function(){return{icon:Ki(Vi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=jt,a.nodeCallback=Gi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?A:r,i=a.callback,o=i===void 0?function(){}:i;return jt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(d,g){Promise.all([Be(n,i),l.iconName?Be(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=ye(v,2),y=w[0],S=w[1];d([a,nt({icons:{main:y,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=xe(s);l.length>0&&(n.style=l);var u;return tt(o)&&(u=H("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},Ji={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return Ae({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(_(i)).join(" ")},children:o}]})}}}},qi={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return Ae({type:"counter",content:a},function(){return K("beforeDOMElementCreation",{content:a,params:r}),ji({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(_(i))}})})}}}},Zi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?T:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ae({type:"text",content:a},function(){return K("beforeDOMElementCreation",{content:a,params:r}),At({content:a,transform:f(f({},T),i),extra:{attributes:u,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(_(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Gt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,At({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Ua=new RegExp('"',"ug"),Ft=[1105920,1112319],Ct=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),_r),Dn),Ur),Ve=Object.keys(Ct).reduce(function(e,t){return e[t.toLowerCase()]=Ct[t],e},{}),Qi=Object.keys(Ve).reduce(function(e,t){var a=Ve[t];return e[t]=a[900]||_(Object.entries(a))[0][1],e},{});function eo(e){var t=e.replace(Ua,"");return Ia(_(t)[0]||"")}function to(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ua,""),n=r.codePointAt(0),i=n>=Ft[0]&&n<=Ft[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function ao(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ve[a]||{})[n]||Qi[a]}function Ot(e,t){var a="".concat(zn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=Q(e.children),o=i.filter(function(z){return z.getAttribute($e)===t})[0],s=U.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(Bn),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&d!=="none"&&d!==""){var g=s.getPropertyValue("content"),v=ao(l,c),w=eo(g),y=u[0].startsWith("FontAwesome"),S=to(s),k=rt(v,w),P=k;if(y){var I=di(w);I.iconName&&I.prefix&&(k=I.iconName,v=I.prefix)}if(k&&!S&&(!o||o.getAttribute(qe)!==v||o.getAttribute(Ze)!==P)){e.setAttribute(a,P),o&&e.removeChild(o);var C=Yi(),b=C.extra;b.attributes[$e]=t,Be(k,v).then(function(z){var ke=nt(f(f({},C),{},{icons:{main:z,mask:La()},prefix:v,iconName:P,extra:b,watchable:!0})),ee=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ee,e.firstChild):e.appendChild(ee),ee.outerHTML=ke.map(function(Pe){return fe(Pe)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function ro(e){return Promise.all([Ot(e,"::before"),Ot(e,"::after")])}function no(e){return e.parentNode!==document.head&&!~Un.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var io=function(t){return!!t&&ga.some(function(a){return t.includes(a)})},oo=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=me(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(io(o)){var s=ga.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var a;if(t)a=e;else if(p.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=me(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=me(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=oo(u.selectorText),d=me(c),g;try{for(d.s();!(g=d.n()).done;){var v=g.value;r.add(v)}}catch(y){d.e(y)}finally{d.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){n.e(y)}finally{n.f()}if(!r.size)return;var w=Array.from(r).join(", ");try{a=e.querySelectorAll(w)}catch{}}return new Promise(function(y,S){var k=Q(a).filter(no).map(ro),P=it.begin("searchPseudoElements");za(),Promise.all(k).then(function(){P(),Ke(),y()}).catch(function(){P(),Ke(),S()})})}}var so={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=_t,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?A:r;p.searchPseudoElements&&_t(n)}}},Tt=!1,lo={mixout:function(){return{dom:{unwatch:function(){za(),Tt=!0}}}},hooks:function(){return{bootstrap:function(){Et(Ue("mutationObserverCallbacks",{}))},noAuto:function(){Di()},watch:function(a){var r=a.observeMutationsRoot;Tt?Ke():Et(Ue("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Lt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},fo={mixout:function(){return{parse:{transform:function(a){return Lt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Lt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:g};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},Oe={x:0,y:0,width:"100%",height:"100%"};function Mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function uo(e){return e.tag==="g"?e.children:[e]}var co={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?Se(n.split(" ").map(function(o){return o.trim()})):La();return i.prefix||(i.prefix=Y()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,c=i.icon,d=o.width,g=o.icon,v=ai({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:f(f({},Oe),{},{fill:"white"})},y=c.children?{children:c.children.map(Mt)}:{},S={tag:"g",attributes:f({},v.inner),children:[Mt(f({tag:c.tag,attributes:f(f({},c.attributes),v.path)},y))]},k={tag:"g",attributes:f({},v.outer),children:[S]},P="mask-".concat(s||ht()),I="clip-".concat(s||ht()),C={tag:"mask",attributes:f(f({},Oe),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,k]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:uo(g)},C]};return r.push(b,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(P,")")},Oe)}),{children:r,attributes:n}}}},mo={provides:function(t){var a=!1;U.matchMedia&&(a=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},vo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},po=[ii,Xi,Ji,qi,Zi,so,lo,fo,co,mo,vo];wi(po,{mixoutsTo:F});F.noAuto;var oe=F.config;F.library;F.dom;var Ya=F.parse;F.findIconDefinition;F.toHtml;var ho=F.icon;F.layer;F.text;F.counter;function go(e){return e=e-0,e===e}function Ha(e){return go(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function bo(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,yo=1e3;function xo(e){if(X.has(e))return X.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),i=n===-1?r:n,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const c=Ha(l);t[c.startsWith("webkit")?bo(c):c]=u}}}a=i+1}if(X.size===yo){const n=X.keys().next().value;n&&X.delete(n)}return X.set(e,t),t}function Ba(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(u=>Ba(e,u)),n=t.attributes||{},i={};for(const[u,c]of Object.entries(n))switch(!0){case u==="class":{i.className=c;break}case u==="style":{i.style=xo(String(c));break}case u.startsWith("aria-"):case u.startsWith("data-"):{i[u.toLowerCase()]=c;break}default:i[Ha(u)]=c}const{style:o,"aria-label":s,...l}=a;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i["aria-label"]=s,i["aria-hidden"]="false"),e(t.tag,{...l,...i},...r)}var wo=Ba.bind(null,zt.createElement),$t=(e,t)=>{const a=N.useId();return e||(t?a:void 0)},So=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Ao="searchPseudoElementsFullScan"in oe?"7.0.0":"6.0.0",ko=Number.parseInt(Ao)>=7,ne="fa",L={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Po={left:"fa-pull-left",right:"fa-pull-right"},Io={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Eo={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},M={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function No(e){const t=oe.cssPrefix||oe.familyPrefix||ne;return t===ne?e:e.replace(new RegExp(`(?<=^|\\s)${ne}-`,"g"),`${t}-`)}function jo(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:c,inverse:d,border:g,flip:v,size:w,rotation:y,pull:S,swapOpacity:k,rotateBy:P,widthAuto:I,className:C}=e,b=[];return C&&b.push(...C.split(" ")),t&&b.push(L.beat),a&&b.push(L.fade),r&&b.push(L.beatFade),n&&b.push(L.bounce),i&&b.push(L.shake),o&&b.push(L.spin),l&&b.push(L.spinReverse),s&&b.push(L.spinPulse),u&&b.push(L.pulse),c&&b.push(M.fixedWidth),d&&b.push(M.inverse),g&&b.push(M.border),v===!0&&b.push(M.flip),(v==="horizontal"||v==="both")&&b.push(M.flipHorizontal),(v==="vertical"||v==="both")&&b.push(M.flipVertical),w!=null&&b.push(Eo[w]),y!=null&&y!==0&&b.push(Io[y]),S!=null&&b.push(Po[S]),k&&b.push(M.swapOpacity),ko?(P&&b.push(M.rotateBy),I&&b.push(M.widthAuto),(oe.cssPrefix||oe.familyPrefix||ne)===ne?b:b.map(No)):b}var Fo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Rt(e){if(e)return Fo(e)?e:Ya.icon(e)}function Co(e){return Object.keys(e)}var Dt=new So("FontAwesomeIcon"),Ga={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Oo=new Set(Object.keys(Ga)),W=zt.forwardRef((e,t)=>{const a={...Ga,...e},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:u}=a,c=$t(l,!!n),d=$t(s,!!o),g=Rt(r);if(!g)return Dt.error("Icon lookup is undefined",r),null;const v=jo(a),w=typeof u=="string"?Ya.transform(u):u,y=Rt(n),S=ho(g,{...v.length>0&&{classes:v},...w&&{transform:w},...y&&{mask:y},symbol:i,title:o,titleId:d,maskId:c});if(!S)return Dt.error("Could not find icon",g),null;const{abstract:k}=S,P={ref:t};for(const I of Co(a))Oo.has(I)||(P[I]=a[I]);return wo(k[0],P)});W.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var _o={prefix:"fas",iconName:"repeat",icon:[512,512,[128257],"f363","M470.6 118.6c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S352 19.1 352 32l0 32-160 0C86 64 0 150 0 256 0 273.7 14.3 288 32 288s32-14.3 32-32c0-70.7 57.3-128 128-128l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64zM41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9S160 492.9 160 480l0-32 160 0c106 0 192-86 192-192 0-17.7-14.3-32-32-32s-32 14.3-32 32c0 70.7-57.3 128-128 128l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64z"]},To={prefix:"fas",iconName:"backward-step",icon:[384,512,["step-backward"],"f048","M363 36.8c-12.9-7-28.7-6.3-41 1.8L64 208.1 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144.1 258 169.6c12.3 8.1 28 8.8 41 1.8s21-20.5 21-35.2l0-368c0-14.7-8.1-28.2-21-35.2z"]},Lo={prefix:"fas",iconName:"play",icon:[448,512,[9654],"f04b","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]},Mo={prefix:"fas",iconName:"forward-step",icon:[384,512,["step-forward"],"f051","M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"]},$o={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Ro={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z"]},Do={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},zo={prefix:"fas",iconName:"pause",icon:[384,512,[9208],"f04c","M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]};const Wo=({content:e})=>{const t=e.split(`
`);return m.jsx("div",{className:"formatted-description",children:t.map((a,r)=>{const n=a.trim();if(n.startsWith("**")&&n.endsWith("**")){const o=n.substring(2,n.length-2);return m.jsx("p",{className:"section-title-body",children:m.jsx("strong",{children:o})},r)}if(n.startsWith("*")){const o=n.substring(1).trim();return m.jsx("li",{className:"detail-list-item",children:o},r)}if(n==="***")return m.jsx("hr",{},r);const i=n.replace("[Antenna]"," [Antenna]").replace("[Three Wise Monkeys]","[Three Wise Monkeys]");return n?m.jsx("p",{children:i},r):null})})},Uo={tidal:"/tidal-color.svg",spotify:"/spoty-color.svg",apple:"/apple-music.svg",youtube:"/yt-color.svg",instagram:"/ig-color.svg",tiktok:"/tiktok-color.svg"},Yo=({artistTitleKey:e,playerColorVar:t,inverted:a=!1,videoUrl:r,songSource:n,albumArt:i,subtitle:o,descriptionKey:s,socialLinksOverride:l,gradientBg:u})=>{const{t:c}=Wt(),d=N.useRef(null),[g,v]=N.useState(!1),[w,y]=N.useState(!1),[S,k]=N.useState(70),[P,I]=N.useState(0),[C,b]=N.useState(!1),z=c(e),ke=c("music_song_title"),ee=c(s)||c("portfolio_audio_prod_desc_body")||"",Pe=c("social_links",{returnObjects:!0}),Ka=l||Pe||{},Va=async()=>{const x=d.current;if(x){if(g){x.pause(),v(!1);return}try{x.load(),await x.play(),v(!0)}catch(j){console.warn("Error al reproducir:",j),v(!1)}}},Xa=()=>{const x=d.current;x&&(x.loop=!w,y(!w))};N.useEffect(()=>{const x=d.current;if(!x)return;const j=()=>{const ue=x.duration||0,Za=x.currentTime||0;I(ue>0?Za/ue*100:0)};return x.volume=S/100,x.addEventListener("timeupdate",j),x.addEventListener("ended",()=>v(!1)),x.addEventListener("pause",()=>v(!1)),x.addEventListener("play",()=>v(!0)),()=>{x.removeEventListener("timeupdate",j),x.removeEventListener("ended",()=>v(!1)),x.removeEventListener("pause",()=>v(!1)),x.removeEventListener("play",()=>v(!0))}},[S,w]);const Ja=x=>{const j=d.current;if(!j||!j.duration){I(parseFloat(x.target.value));return}const ue=parseFloat(x.target.value)/100*j.duration;j.currentTime=ue,I(parseFloat(x.target.value))},qa={"--player-color-base":t,"--modal-bg-gradient":u};return m.jsxs("div",{className:`artist-section ${a?"inverted":""}`,style:qa,children:[m.jsx("h2",{className:`artist-name-title ${a?"right-title":""}`,children:z}),m.jsx("span",{className:"artist-subtitle-genres",children:o}),m.jsxs("div",{className:"artist-layout",children:[m.jsxs("div",{className:"info-column",children:[m.jsx("div",{className:"video-wrapper",children:m.jsxs("div",{className:"video-player-container full-width-video",children:[" ",m.jsx("iframe",{src:r,title:z,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}),m.jsxs("div",{className:"description-container",children:[m.jsx("h4",{className:"description-subtitle",children:c("description")||"Description"}),m.jsx(Wo,{content:ee})]}),m.jsx(Qa,{to:"/contact",className:"modal-cta-button",style:{backgroundColor:t,color:"var(--color-bg)",border:`2px solid ${t}`,width:"100%",textAlign:"center",padding:"0.75rem 1.5rem",marginTop:"2rem"},children:c("modal_pricing_cta")})]}),m.jsxs("div",{className:"player-column",children:[m.jsxs("div",{className:"album-art-wrapper",children:[m.jsx("img",{src:i,alt:"Album Art",className:"album-art"}),m.jsxs("audio",{ref:d,preload:"auto",children:[m.jsx("source",{src:n,type:"audio/mpeg"}),"Tu navegador no soporta el elemento de audio."]})]}),m.jsx("input",{className:"progress-bar",type:"range",min:0,max:100,value:P,onChange:Ja,"aria-label":"barra de progreso"}),m.jsxs("div",{className:"player-controls compact",children:[m.jsxs("div",{className:"volume-inline",children:[m.jsx("button",{className:"control-button volume-toggle",onClick:()=>b(x=>!x),"aria-label":"volumen",title:"Volumen",style:{backgroundColor:t},children:m.jsx(W,{icon:Ro})}),C&&m.jsx("div",{className:"volume-popup",role:"dialog","aria-hidden":!C,children:m.jsx("input",{type:"range",min:0,max:100,value:S,className:"volume-slider-popup",onChange:x=>{const j=parseInt(x.target.value);d.current&&(d.current.volume=j/100)},"aria-label":"control de volumen"})})]}),m.jsx("button",{className:"control-button","aria-label":"Anterior pista",style:{backgroundColor:t},children:m.jsx(W,{icon:To})}),m.jsx("button",{className:"control-button play-pause","aria-label":"Reproducir/Pausar",onClick:Va,style:{backgroundColor:t},children:m.jsx(W,{icon:g?zo:Lo})}),m.jsx("button",{className:"control-button","aria-label":"Siguiente pista",style:{backgroundColor:t},children:m.jsx(W,{icon:Mo})}),m.jsx("button",{className:`control-button repeat ${w?"active":""}`,onClick:Xa,"aria-label":"Repetir",style:{backgroundColor:t},children:m.jsx(W,{icon:_o})})]}),m.jsxs("div",{className:"track-list-container",children:[m.jsx("h4",{className:"track-list-header",style:{color:t},children:c("track_list_header")}),m.jsxs("ul",{className:"track-list",children:[m.jsxs("li",{className:"track-item active",style:{color:t},children:["1. ",ke]}),m.jsxs("li",{className:"track-item",style:{color:t},children:["2. ",z," - Demo Track"]})]})]}),m.jsxs("p",{className:"social-follow-prompt",children:[c("social_follow_prompt"),":"]}),m.jsx("div",{className:"social-links",children:Object.entries(Uo).map(([x,j])=>m.jsx("a",{href:Ka[x]||"#",target:"_blank",rel:"noopener noreferrer","aria-label":x,children:m.jsx("img",{src:j,alt:x,className:"social-icon"})},x))})]})]})]})},_e=[{id:"dkong",artistTitleKey:"music_player_dkong_title",playerColorVar:"#e86c10",inverted:!1,videoUrl:"https://www.youtube.com/embed/zELzLR0-Qj4?autoplay=0&controls=1",songSource:"/lfc-Jazz.mp3",albumArt:"/lfc-art.png",subtitle:"hip-hop, afro beat, experimental",descriptionKey:"description_dkong",gradientBg:"linear-gradient(180deg, rgba(232, 108, 16, 0.4) 0%, var(--color-bg) 80%)",socialLinksOverride:{tidal:"https://tidal.com/artist/63112634",spotify:"https://open.spotify.com/artist/63112634",applemusic:"https://music.apple.com/artist/dkong/63112634",youtube:"https://music.youtube.com/channel/UCtqFZ4xZxuhmvlTgE6y9Zog",instagram:"https://instagram.com/_imdkong_",tiktok:"https://tiktok.com/@_imdkong_"}},{id:"leo",artistTitleKey:"music_player_leo_title",playerColorVar:"#7a4ed4",inverted:!0,videoUrl:"https://www.youtube.com/embed/boPHlpclehY?autoplay=0&controls=1",songSource:"/leo-alto.mp3",albumArt:"/leo-art.png",subtitle:"reggae, dub, hip hop",descriptionKey:"description_leo",gradientBg:"linear-gradient(180deg, rgba(122, 78, 212, 0.4) 0%, var(--color-bg) 80%)",socialLinksOverride:{}}];function Bo(){const{t:e}=Wt(),[t,a]=N.useState(0),[r,n]=N.useState(!1);N.useEffect(()=>{window.scrollTo(0,0)},[]);const i=N.useMemo(()=>_e[t],[t]),o=N.useCallback(()=>{n(!0),a(l=>l===0?_e.length-1:l-1)},[]),s=N.useCallback(()=>{n(!0),a(l=>l===_e.length-1?0:l+1)},[]);return m.jsxs("div",{className:"music-production-page-container modal-view",children:[m.jsx("h1",{className:"music-page-header",children:e("music_player_title")}),m.jsxs("div",{className:"artist-modal-controls-wrapper",children:[m.jsx("button",{className:`modal-nav-button prev-artist ${r?"":"glowing-border"}`,onClick:o,style:{backgroundColor:i.playerColorVar},"aria-label":e("prev")+" artista",children:m.jsx(W,{icon:Do})}),m.jsx("h2",{className:"modal-artist-nav-title",children:e("modal_artists_title")}),m.jsx("button",{className:`modal-nav-button next-artist ${r?"":"glowing-border"}`,onClick:s,style:{backgroundColor:i.playerColorVar},"aria-label":e("next")+" artista",children:m.jsx(W,{icon:$o})})]}),m.jsx(Yo,{artistTitleKey:i.artistTitleKey,playerColorVar:i.playerColorVar,videoUrl:i.videoUrl,songSource:i.songSource,albumArt:i.albumArt,subtitle:i.subtitle,descriptionKey:i.descriptionKey,socialLinksOverride:i.socialLinksOverride,inverted:i.inverted,gradientBg:i.gradientBg},i.id)]})}export{Bo as default};
