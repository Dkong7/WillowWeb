import{R as Wt,r as N,u as Ut,j as m,L as nr}from"./index-CZvH2zzd.js";/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Te(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function ir(e){if(Array.isArray(e))return e}function or(e){if(Array.isArray(e))return Te(e)}function sr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Yt(r.key),r)}}function fr(e,t,a){return t&&lr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ve(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Xe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function g(e,t,a){return(t=Yt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ur(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,f=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){f=!0,n=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw n}}return s}}function dr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(a),!0).forEach(function(r){g(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function xe(e,t){return ir(e)||cr(e,t)||Xe(e,t)||dr()}function O(e){return or(e)||ur(e)||Xe(e)||mr()}function vr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yt(e){var t=vr(e,"string");return typeof t=="symbol"?t:t+""}function ge(e){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function Xe(e,t){if(e){if(typeof e=="string")return Te(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Te(e,t):void 0}}var ft=function(){},Je={},Ht={},Bt=null,Kt={mark:ft,measure:ft};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(Ht=document),typeof MutationObserver<"u"&&(Bt=MutationObserver),typeof performance<"u"&&(Kt=performance)}catch{}var pr=Je.navigator||{},ut=pr.userAgent,ct=ut===void 0?"":ut,W=Je,k=Ht,dt=Bt,de=Kt;W.document;var D=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Gt=~ct.indexOf("MSIE")||~ct.indexOf("Trident/"),Ie,hr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,gr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Vt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},br={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Xt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],E="classic",le="duotone",Jt="sharp",qt="sharp-duotone",Qt="chisel",Zt="etch",ea="jelly",ta="jelly-duo",aa="jelly-fill",ra="notdog",na="notdog-duo",ia="slab",oa="slab-press",sa="thumbprint",la="utility",fa="utility-duo",ua="utility-fill",ca="whiteboard",yr="Classic",xr="Duotone",wr="Sharp",Sr="Sharp Duotone",Ar="Chisel",kr="Etch",Pr="Jelly",Ir="Jelly Duo",Er="Jelly Fill",Nr="Notdog",jr="Notdog Duo",Fr="Slab",Cr="Slab Press",_r="Thumbprint",Or="Utility",Tr="Utility Duo",Lr="Utility Fill",Mr="Whiteboard",da=[E,le,Jt,qt,Qt,Zt,ea,ta,aa,ra,na,ia,oa,sa,la,fa,ua,ca];Ie={},g(g(g(g(g(g(g(g(g(g(Ie,E,yr),le,xr),Jt,wr),qt,Sr),Qt,Ar),Zt,kr),ea,Pr),ta,Ir),aa,Er),ra,Nr),g(g(g(g(g(g(g(g(Ie,na,jr),ia,Fr),oa,Cr),sa,_r),la,Or),fa,Tr),ua,Lr),ca,Mr);var $r={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Rr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Dr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),zr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ma=["fak","fa-kit","fakd","fa-kit-duotone"],mt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Wr=["kit"],Ur="kit",Yr="kit-duotone",Hr="Kit",Br="Kit Duotone";g(g({},Ur,Hr),Yr,Br);var Kr={kit:{"fa-kit":"fak"}},Gr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Vr={kit:{fak:"fa-kit"}},vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ee,me={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Jr="classic",qr="duotone",Qr="sharp",Zr="sharp-duotone",en="chisel",tn="etch",an="jelly",rn="jelly-duo",nn="jelly-fill",on="notdog",sn="notdog-duo",ln="slab",fn="slab-press",un="thumbprint",cn="utility",dn="utility-duo",mn="utility-fill",vn="whiteboard",pn="Classic",hn="Duotone",gn="Sharp",bn="Sharp Duotone",yn="Chisel",xn="Etch",wn="Jelly",Sn="Jelly Duo",An="Jelly Fill",kn="Notdog",Pn="Notdog Duo",In="Slab",En="Slab Press",Nn="Thumbprint",jn="Utility",Fn="Utility Duo",Cn="Utility Fill",_n="Whiteboard";Ee={},g(g(g(g(g(g(g(g(g(g(Ee,Jr,pn),qr,hn),Qr,gn),Zr,bn),en,yn),tn,xn),an,wn),rn,Sn),nn,An),on,kn),g(g(g(g(g(g(g(g(Ee,sn,Pn),ln,In),fn,En),un,Nn),cn,jn),dn,Fn),mn,Cn),vn,_n);var On="kit",Tn="kit-duotone",Ln="Kit",Mn="Kit Duotone";g(g({},On,Ln),Tn,Mn);var $n={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Rn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Le={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Dn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],va=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Xr,Dn),zn=["solid","regular","light","thin","duotone","brands","semibold"],pa=[1,2,3,4,5,6,7,8,9,10],Wn=pa.concat([11,12,13,14,15,16,17,18,19,20]),Un=["aw","fw","pull-left","pull-right"],Yn=[].concat(O(Object.keys(Rn)),zn,Un,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",me.GROUP,me.SWAP_OPACITY,me.PRIMARY,me.SECONDARY]).concat(pa.map(function(e){return"".concat(e,"x")})).concat(Wn.map(function(e){return"w-".concat(e)})),Hn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",Me=16,ha="fa",ga="svg-inline--fa",B="data-fa-i2svg",$e="data-fa-pseudo-element",Bn="data-fa-pseudo-element-pending",qe="data-prefix",Qe="data-icon",pt="fontawesome-i2svg",Kn="async",Gn=["HTML","HEAD","STYLE","SCRIPT"],ba=["::before","::after",":before",":after"],ya=(function(){try{return!0}catch{return!1}})();function fe(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[E]}})}var xa=u({},Vt);xa[E]=u(u(u(u({},{"fa-duotone":"duotone"}),Vt[E]),mt.kit),mt["kit-duotone"]);var Vn=fe(xa),Re=u({},zr);Re[E]=u(u(u(u({},{duotone:"fad"}),Re[E]),vt.kit),vt["kit-duotone"]);var ht=fe(Re),De=u({},Le);De[E]=u(u({},De[E]),Vr.kit);var Ze=fe(De),ze=u({},$n);ze[E]=u(u({},ze[E]),Kr.kit);fe(ze);var Xn=hr,wa="fa-layers-text",Jn=gr,qn=u({},$r);fe(qn);var Qn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ne=br,Zn=[].concat(O(Wr),O(Yn)),re=W.FontAwesomeConfig||{};function ei(e){var t=k.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ti(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(k&&typeof k.querySelector=="function"){var ai=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ai.forEach(function(e){var t=xe(e,2),a=t[0],r=t[1],n=ti(ei(a));n!=null&&(re[r]=n)})}var Sa={styleDefault:"solid",familyDefault:E,cssPrefix:ha,replacementClass:ga,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var Z=u(u({},Sa),re);Z.autoReplaceSvg||(Z.observeMutations=!1);var v={};Object.keys(Sa).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(a){Z[e]=a,ne.forEach(function(r){return r(v)})},get:function(){return Z[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,ne.forEach(function(a){return a(v)})},get:function(){return Z.cssPrefix}});W.FontAwesomeConfig=v;var ne=[];function ri(e){return ne.push(e),function(){ne.splice(ne.indexOf(e),1)}}var X=Me,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ni(e){if(!(!e||!D)){var t=k.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=k.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return k.head.insertBefore(t,r),e}}var ii="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gt(){for(var e=12,t="";e-- >0;)t+=ii[Math.random()*62|0];return t}function ee(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function et(e){return e.classList?ee(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Aa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oi(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Aa(e[a]),'" ')},"").trim()}function we(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function tt(e){return e.size!==T.size||e.x!==T.x||e.y!==T.y||e.rotate!==T.rotate||e.flipX||e.flipY}function si(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:f}}function li(e){var t=e.transform,a=e.width,r=a===void 0?Me:a,n=e.height,i=n===void 0?Me:n,o="";return Gt?o+="translate(".concat(t.x/X-r/2,"em, ").concat(t.y/X-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "),o+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var fi=`:root, :host {
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
}`;function ka(){var e=ha,t=ga,a=v.cssPrefix,r=v.replacementClass,n=fi;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var bt=!1;function je(){v.autoAddCss&&!bt&&(ni(ka()),bt=!0)}var ui={mixout:function(){return{dom:{css:ka,insertCss:je}}},hooks:function(){return{beforeDOMElementCreation:function(){je()},beforeI2svg:function(){je()}}}},R=W||{};R[$]||(R[$]={});R[$].styles||(R[$].styles={});R[$].hooks||(R[$].hooks={});R[$].shims||(R[$].shims=[]);var _=R[$],Pa=[],Ia=function(){k.removeEventListener("DOMContentLoaded",Ia),be=1,Pa.map(function(t){return t()})},be=!1;D&&(be=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),be||k.addEventListener("DOMContentLoaded",Ia));function ci(e){D&&(be?setTimeout(e,0):Pa.push(e))}function ue(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Aa(e):"<".concat(t," ").concat(oi(r),">").concat(i.map(ue).join(""),"</").concat(t,">")}function yt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Fe=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Ea(e){return O(e).length!==1?null:e.codePointAt(0).toString(16)}function xt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function We(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=xt(t);typeof _.hooks.addPack=="function"&&!n?_.hooks.addPack(e,xt(t)):_.styles[e]=u(u({},_.styles[e]||{}),i),e==="fas"&&We("fa",t)}var oe=_.styles,di=_.shims,Na=Object.keys(Ze),mi=Na.reduce(function(e,t){return e[t]=Object.keys(Ze[t]),e},{}),at=null,ja={},Fa={},Ca={},_a={},Oa={};function vi(e){return~Zn.indexOf(e)}function pi(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!vi(n)?n:null}var Ta=function(){var t=function(i){return Fe(oe,function(o,s,l){return o[l]=Fe(s,i,{}),o},{})};ja=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Fa=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Oa=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in oe||v.autoFetchSvg,r=Fe(di,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Ca=r.names,_a=r.unicodes,at=Se(v.styleDefault,{family:v.familyDefault})};ri(function(e){at=Se(e.styleDefault,{family:v.familyDefault})});Ta();function rt(e,t){return(ja[e]||{})[t]}function hi(e,t){return(Fa[e]||{})[t]}function H(e,t){return(Oa[e]||{})[t]}function La(e){return Ca[e]||{prefix:null,iconName:null}}function gi(e){var t=_a[e],a=rt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function U(){return at}var Ma=function(){return{prefix:null,iconName:null,rest:[]}};function bi(e){var t=E,a=Na.reduce(function(r,n){return r[n]="".concat(v.cssPrefix,"-").concat(n),r},{});return da.forEach(function(r){(e.includes(a[r])||e.some(function(n){return mi[r].includes(n)}))&&(t=r)}),t}function Se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?E:a,n=Vn[r][e];if(r===le&&!e)return"fad";var i=ht[r][e]||ht[r][n],o=e in _.styles?e:null,s=i||o||null;return s}function yi(e){var t=[],a=null;return e.forEach(function(r){var n=pi(v.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function wt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var St=va.concat(ma);function Ae(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=wt(e.filter(function(p){return St.includes(p)})),o=wt(e.filter(function(p){return!St.includes(p)})),s=i.filter(function(p){return n=p,!Xt.includes(p)}),l=xe(s,1),f=l[0],c=f===void 0?null:f,d=bi(i),h=u(u({},yi(o)),{},{prefix:Se(c,{family:d})});return u(u(u({},h),Ai({values:e,family:d,styles:oe,config:v,canonical:h,givenPrefix:n})),xi(r,n,h))}function xi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?La(n):{},o=H(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!oe.far&&oe.fas&&!v.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var wi=da.filter(function(e){return e!==E||e!==le}),Si=Object.keys(Le).filter(function(e){return e!==E}).map(function(e){return Object.keys(Le[e])}).flat();function Ai(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,f=l===void 0?{}:l,c=a===le,d=t.includes("fa-duotone")||t.includes("fad"),h=f.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(d||h||p)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&wi.includes(a)){var S=Object.keys(s).find(function(A){return Si.includes(A)});if(S||f.autoFetchSvg){var b=Dr.get(a).defaultShortPrefixId;r.prefix=b,r.iconName=H(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=U()||"fas"),r}var ki=(function(){function e(){sr(this,e),this.definitions={}}return fr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),We(s,o[s]);var l=Ze[E][s];l&&We(l,o[s]),Ta()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=f)}),a[s][l]=f}),a}}])})(),At=[],q={},Q={},Pi=Object.keys(Q);function Ii(e,t){var a=t.mixoutsTo;return At=e,q={},Object.keys(Q).forEach(function(r){Pi.indexOf(r)===-1&&delete Q[r]}),At.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ge(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}r.provides&&r.provides(Q)}),a}function Ue(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=q[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function K(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=q[e]||[];n.forEach(function(i){i.apply(null,a)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Q[e]?Q[e].apply(null,t):void 0}function Ye(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||U();if(t)return t=H(a,t)||t,yt($a.definitions,a,t)||yt(_.styles,a,t)}var $a=new ki,Ei=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,K("noAuto")},Ni={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(K("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ci(function(){Fi({autoReplaceSvgRoot:a}),K("watch",t)})}},ji={icon:function(t){if(t===null)return null;if(ge(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Se(t[0]);return{prefix:r,iconName:H(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Xn))){var n=Ae(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||U(),iconName:H(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=U();return{prefix:i,iconName:H(i,t)||t}}}},C={noAuto:Ei,config:v,dom:Ni,parse:ji,library:$a,findIconDefinition:Ye,toHtml:ue},Fi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?k:a;(Object.keys(_.styles).length>0||v.autoFetchSvg)&&D&&v.autoReplaceSvg&&C.dom.i2svg({node:r})};function ke(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ue(r)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var r=k.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ci(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(tt(o)&&a.found&&!r.found){var s=a.width,l=a.height,f={x:s/l/2,y:.5};n.style=we(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function _i(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},n),{},{id:o}),children:r}]}]}function Oi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function nt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,f=e.extra,c=e.watchable,d=c===void 0?!1:c,h=r.found?r:a,p=h.width,S=h.height,b=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(y){return f.classes.indexOf(y)===-1}).filter(function(y){return y!==""||!!y}).concat(f.classes).join(" "),A={children:[],attributes:u(u({},f.attributes),{},{"data-prefix":n,"data-icon":i,class:b,role:f.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(S)})};!Oi(f.attributes)&&!f.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),d&&(A.attributes[B]="");var w=u(u({},A),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:u({},f.styles)}),P=r.found&&a.found?Y("generateAbstractMask",w)||{children:[],attributes:{}}:Y("generateAbstractIcon",w)||{children:[],attributes:{}},I=P.children,F=P.attributes;return w.children=I,w.attributes=F,s?_i(w):Ci(w)}function kt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=u(u({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[B]="");var f=u({},i.styles);tt(n)&&(f.transform=li({transform:n,width:a,height:r}),f["-webkit-transform"]=f.transform);var c=we(f);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function Ti(e){var t=e.content,a=e.extra,r=u(u({},a.attributes),{},{class:a.classes.join(" ")}),n=we(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ce=_.styles;function He(e){var t=e[0],a=e[1],r=e.slice(4),n=xe(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ne.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ne.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Li={found:!1,width:512,height:512};function Mi(e,t){!ya&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Be(e,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=U()),new Promise(function(r,n){if(a==="fa"){var i=La(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ce[t]&&Ce[t][e]){var o=Ce[t][e];return r(He(o))}Mi(e,t),r(u(u({},Li),{},{icon:v.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var Pt=function(){},Ke=v.measurePerformance&&de&&de.mark&&de.measure?de:{mark:Pt,measure:Pt},ae='FA "7.1.0"',$i=function(t){return Ke.mark("".concat(ae," ").concat(t," begins")),function(){return Ra(t)}},Ra=function(t){Ke.mark("".concat(ae," ").concat(t," ends")),Ke.measure("".concat(ae," ").concat(t),"".concat(ae," ").concat(t," begins"),"".concat(ae," ").concat(t," ends"))},it={begin:$i,end:Ra},pe=function(){};function It(e){var t=e.getAttribute?e.getAttribute(B):null;return typeof t=="string"}function Ri(e){var t=e.getAttribute?e.getAttribute(qe):null,a=e.getAttribute?e.getAttribute(Qe):null;return t&&a}function Di(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function zi(){if(v.autoReplaceSvg===!0)return he.replace;var e=he[v.autoReplaceSvg];return e||he.replace}function Wi(e){return k.createElementNS("http://www.w3.org/2000/svg",e)}function Ui(e){return k.createElement(e)}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Wi:Ui:a;if(typeof e=="string")return k.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Da(o,{ceFn:r}))}),n}function Yi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var he={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Da(n),a)}),a.getAttribute(B)===null&&v.keepOriginalSource){var r=k.createComment(Yi(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~et(a).indexOf(v.replacementClass))return he.replace(t);var n=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ue(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=o}};function Et(e){e()}function za(e,t){var a=typeof t=="function"?t:pe;if(e.length===0)a();else{var r=Et;v.mutateApproach===Kn&&(r=W.requestAnimationFrame||Et),r(function(){var n=zi(),i=it.begin("mutate");e.map(n),i(),a()})}}var ot=!1;function Wa(){ot=!0}function Ge(){ot=!1}var ye=null;function Nt(e){if(dt&&v.observeMutations){var t=e.treeCallback,a=t===void 0?pe:t,r=e.nodeCallback,n=r===void 0?pe:r,i=e.pseudoElementsCallback,o=i===void 0?pe:i,s=e.observeMutationsRoot,l=s===void 0?k:s;ye=new dt(function(f){if(!ot){var c=U();ee(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!It(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&It(d.target)&&~Qn.indexOf(d.attributeName))if(d.attributeName==="class"&&Ri(d.target)){var h=Ae(et(d.target)),p=h.prefix,S=h.iconName;d.target.setAttribute(qe,p||c),S&&d.target.setAttribute(Qe,S)}else Di(d.target)&&n(d.target)})}}),D&&ye.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hi(){ye&&ye.disconnect()}function Bi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function Ki(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Ae(et(e));return n.prefix||(n.prefix=U()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=hi(n.prefix,e.innerText)||rt(n.prefix,Ea(e.innerText))),!n.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Gi(e){var t=ee(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Vi(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ki(e),r=a.iconName,n=a.prefix,i=a.rest,o=Gi(e),s=Ue("parseNodeAttributes",{},e),l=t.styleParser?Bi(e):[];return u({iconName:r,prefix:n,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Xi=_.styles;function Ua(e){var t=v.autoReplaceSvg==="nest"?jt(e,{styleParser:!1}):jt(e);return~t.extra.classes.indexOf(wa)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}function Ji(){return[].concat(O(ma),O(va))}function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=k.documentElement.classList,r=function(d){return a.add("".concat(pt,"-").concat(d))},n=function(d){return a.remove("".concat(pt,"-").concat(d))},i=v.autoFetchSvg?Ji():Xt.concat(Object.keys(Xi));i.includes("fa")||i.push("fa");var o=[".".concat(wa,":not([").concat(B,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ee(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=it.begin("onTree"),f=s.reduce(function(c,d){try{var h=Ua(d);h&&c.push(h)}catch(p){ya||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(h){za(h,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ua(e).then(function(a){a&&za([a],t)})}function Qi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ye(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ye(n||{})),e(r,u(u({},a),{},{mask:n}))}}var Zi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?T:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,f=a.maskId,c=f===void 0?null:f,d=a.classes,h=d===void 0?[]:d,p=a.attributes,S=p===void 0?{}:p,b=a.styles,A=b===void 0?{}:b;if(t){var w=t.prefix,P=t.iconName,I=t.icon;return ke(u({type:"icon"},t),function(){return K("beforeDOMElementCreation",{iconDefinition:t,params:a}),nt({icons:{main:He(I),mask:l?He(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:P,transform:u(u({},T),n),symbol:o,maskId:c,extra:{attributes:S,styles:A,classes:h}})})}},eo={mixout:function(){return{icon:Qi(Zi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ft,a.nodeCallback=qi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?k:r,i=a.callback,o=i===void 0?function(){}:i;return Ft(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,f=r.maskId,c=r.extra;return new Promise(function(d,h){Promise.all([Be(n,i),l.iconName?Be(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var S=xe(p,2),b=S[0],A=S[1];d([a,nt({icons:{main:b,mask:A},prefix:i,iconName:n,transform:o,symbol:s,maskId:f,extra:c,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=we(s);l.length>0&&(n.style=l);var f;return tt(o)&&(f=Y("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:n}}}},to={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return ke({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(O(i)).join(" ")},children:o}]})}}}},ao={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,f=l===void 0?{}:l;return ke({type:"counter",content:a},function(){return K("beforeDOMElementCreation",{content:a,params:r}),Ti({content:a.toString(),extra:{attributes:s,styles:f,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(O(i))}})})}}}},ro={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?T:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return ke({type:"text",content:a},function(){return K("beforeDOMElementCreation",{content:a,params:r}),kt({content:a,transform:u(u({},T),i),extra:{attributes:f,styles:d,classes:["".concat(v.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Gt){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/l,s=f.height/l}return Promise.resolve([a,kt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Ya=new RegExp('"',"ug"),Ct=[1105920,1112319],_t=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Rr),Hn),Gr),Ve=Object.keys(_t).reduce(function(e,t){return e[t.toLowerCase()]=_t[t],e},{}),no=Object.keys(Ve).reduce(function(e,t){var a=Ve[t];return e[t]=a[900]||O(Object.entries(a))[0][1],e},{});function io(e){var t=e.replace(Ya,"");return Ea(O(t)[0]||"")}function oo(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ya,""),n=r.codePointAt(0),i=n>=Ct[0]&&n<=Ct[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function so(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ve[a]||{})[n]||no[a]}function Ot(e,t){var a="".concat(Bn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=ee(e.children),o=i.filter(function(G){return G.getAttribute($e)===t})[0],s=W.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),f=l.match(Jn),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&d!=="none"&&d!==""){var h=s.getPropertyValue("content"),p=so(l,c),S=io(h),b=f[0].startsWith("FontAwesome"),A=oo(s),w=rt(p,S),P=w;if(b){var I=gi(S);I.iconName&&I.prefix&&(w=I.iconName,p=I.prefix)}if(w&&!A&&(!o||o.getAttribute(qe)!==p||o.getAttribute(Qe)!==P)){e.setAttribute(a,P),o&&e.removeChild(o);var F=Vi(),y=F.extra;y.attributes[$e]=t,Be(w,p).then(function(G){var te=nt(u(u({},F),{},{icons:{main:G,mask:Ma()},prefix:p,iconName:P,extra:y,watchable:!0})),V=k.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(V,e.firstChild):e.appendChild(V),V.outerHTML=te.map(function(Pe){return ue(Pe)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function lo(e){return Promise.all([Ot(e,"::before"),Ot(e,"::after")])}function fo(e){return e.parentNode!==document.head&&!~Gn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var uo=function(t){return!!t&&ba.some(function(a){return t.includes(a)})},co=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var n=ve(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(uo(o)){var s=ba.reduce(function(l,f){return l.replace(f,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function Tt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var a;if(t)a=e;else if(v.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=ve(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=ve(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,c=co(f.selectorText),d=ve(c),h;try{for(d.s();!(h=d.n()).done;){var p=h.value;r.add(p)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var S=Array.from(r).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(b,A){var w=ee(a).filter(fo).map(lo),P=it.begin("searchPseudoElements");Wa(),Promise.all(w).then(function(){P(),Ge(),b()}).catch(function(){P(),Ge(),A()})})}}var mo={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Tt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?k:r;v.searchPseudoElements&&Tt(n)}}},Lt=!1,vo={mixout:function(){return{dom:{unwatch:function(){Wa(),Lt=!0}}}},hooks:function(){return{bootstrap:function(){Nt(Ue("mutationObserverCallbacks",{}))},noAuto:function(){Hi()},watch:function(a){var r=a.observeMutationsRoot;Lt?Ge():Nt(Ue("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},po={mixout:function(){return{parse:{transform:function(a){return Mt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Mt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:h};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:u(u({},r.icon.attributes),p.path)}]}]}}}},_e={x:0,y:0,width:"100%",height:"100%"};function $t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ho(e){return e.tag==="g"?e.children:[e]}var go={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?Ae(n.split(" ").map(function(o){return o.trim()})):Ma();return i.prefix||(i.prefix=U()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,f=i.width,c=i.icon,d=o.width,h=o.icon,p=si({transform:l,containerWidth:d,iconWidth:f}),S={tag:"rect",attributes:u(u({},_e),{},{fill:"white"})},b=c.children?{children:c.children.map($t)}:{},A={tag:"g",attributes:u({},p.inner),children:[$t(u({tag:c.tag,attributes:u(u({},c.attributes),p.path)},b))]},w={tag:"g",attributes:u({},p.outer),children:[A]},P="mask-".concat(s||gt()),I="clip-".concat(s||gt()),F={tag:"mask",attributes:u(u({},_e),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,w]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:ho(h)},F]};return r.push(y,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(P,")")},_e)}),{children:r,attributes:n}}}},bo={provides:function(t){var a=!1;W.matchMedia&&(a=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:u(u({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:u(u({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:u(u({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yo={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},xo=[ui,eo,to,ao,ro,mo,vo,po,go,bo,yo];Ii(xo,{mixoutsTo:C});C.noAuto;var se=C.config;C.library;C.dom;var Ha=C.parse;C.findIconDefinition;C.toHtml;var wo=C.icon;C.layer;C.text;C.counter;function So(e){return e=e-0,e===e}function Ba(e){return So(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function Ao(e){return e.charAt(0).toUpperCase()+e.slice(1)}var J=new Map,ko=1e3;function Po(e){if(J.has(e))return J.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),i=n===-1?r:n,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),f=o.slice(s+1).trim();if(l&&f){const c=Ba(l);t[c.startsWith("webkit")?Ao(c):c]=f}}}a=i+1}if(J.size===ko){const n=J.keys().next().value;n&&J.delete(n)}return J.set(e,t),t}function Ka(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(f=>Ka(e,f)),n=t.attributes||{},i={};for(const[f,c]of Object.entries(n))switch(!0){case f==="class":{i.className=c;break}case f==="style":{i.style=Po(String(c));break}case f.startsWith("aria-"):case f.startsWith("data-"):{i[f.toLowerCase()]=c;break}default:i[Ba(f)]=c}const{style:o,"aria-label":s,...l}=a;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i["aria-label"]=s,i["aria-hidden"]="false"),e(t.tag,{...l,...i},...r)}var Io=Ka.bind(null,Wt.createElement),Rt=(e,t)=>{const a=N.useId();return e||(t?a:void 0)},Eo=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},No="searchPseudoElementsFullScan"in se?"7.0.0":"6.0.0",jo=Number.parseInt(No)>=7,ie="fa",L={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Fo={left:"fa-pull-left",right:"fa-pull-right"},Co={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},_o={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},M={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Oo(e){const t=se.cssPrefix||se.familyPrefix||ie;return t===ie?e:e.replace(new RegExp(`(?<=^|\\s)${ie}-`,"g"),`${t}-`)}function To(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:f,fixedWidth:c,inverse:d,border:h,flip:p,size:S,rotation:b,pull:A,swapOpacity:w,rotateBy:P,widthAuto:I,className:F}=e,y=[];return F&&y.push(...F.split(" ")),t&&y.push(L.beat),a&&y.push(L.fade),r&&y.push(L.beatFade),n&&y.push(L.bounce),i&&y.push(L.shake),o&&y.push(L.spin),l&&y.push(L.spinReverse),s&&y.push(L.spinPulse),f&&y.push(L.pulse),c&&y.push(M.fixedWidth),d&&y.push(M.inverse),h&&y.push(M.border),p===!0&&y.push(M.flip),(p==="horizontal"||p==="both")&&y.push(M.flipHorizontal),(p==="vertical"||p==="both")&&y.push(M.flipVertical),S!=null&&y.push(_o[S]),b!=null&&b!==0&&y.push(Co[b]),A!=null&&y.push(Fo[A]),w&&y.push(M.swapOpacity),jo?(P&&y.push(M.rotateBy),I&&y.push(M.widthAuto),(se.cssPrefix||se.familyPrefix||ie)===ie?y:y.map(Oo)):y}var Lo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Dt(e){if(e)return Lo(e)?e:Ha.icon(e)}function Mo(e){return Object.keys(e)}var zt=new Eo("FontAwesomeIcon"),Ga={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},$o=new Set(Object.keys(Ga)),z=Wt.forwardRef((e,t)=>{const a={...Ga,...e},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:f}=a,c=Rt(l,!!n),d=Rt(s,!!o),h=Dt(r);if(!h)return zt.error("Icon lookup is undefined",r),null;const p=To(a),S=typeof f=="string"?Ha.transform(f):f,b=Dt(n),A=wo(h,{...p.length>0&&{classes:p},...S&&{transform:S},...b&&{mask:b},symbol:i,title:o,titleId:d,maskId:c});if(!A)return zt.error("Could not find icon",h),null;const{abstract:w}=A,P={ref:t};for(const I of Mo(a))$o.has(I)||(P[I]=a[I]);return Io(w[0],P)});z.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ro={prefix:"fas",iconName:"repeat",icon:[512,512,[128257],"f363","M470.6 118.6c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S352 19.1 352 32l0 32-160 0C86 64 0 150 0 256 0 273.7 14.3 288 32 288s32-14.3 32-32c0-70.7 57.3-128 128-128l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64zM41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9S160 492.9 160 480l0-32 160 0c106 0 192-86 192-192 0-17.7-14.3-32-32-32s-32 14.3-32 32c0 70.7-57.3 128-128 128l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64z"]},Do={prefix:"fas",iconName:"backward-step",icon:[384,512,["step-backward"],"f048","M363 36.8c-12.9-7-28.7-6.3-41 1.8L64 208.1 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144.1 258 169.6c12.3 8.1 28 8.8 41 1.8s21-20.5 21-35.2l0-368c0-14.7-8.1-28.2-21-35.2z"]},zo={prefix:"fas",iconName:"play",icon:[448,512,[9654],"f04b","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]},Wo={prefix:"fas",iconName:"forward-step",icon:[384,512,["step-forward"],"f051","M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"]},Uo={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Yo={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z"]},Ho={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Bo={prefix:"fas",iconName:"pause",icon:[384,512,[9208],"f04c","M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]};const Ko=({content:e})=>{const t="var(--player-color-base)",a=e.split(`
`);return m.jsx("div",{className:"formatted-description",children:a.map((r,n)=>{const i=r.trim();if(i.startsWith("**")&&i.endsWith("**")){const o=i.substring(2,i.length-2);return m.jsx("p",{className:"section-title-body",children:m.jsx("strong",{style:{fontFamily:"Albertus Medium",color:t},children:o})},n)}if(i.startsWith("*")){const o=i.substring(1).trim();return m.jsx("li",{className:"detail-list-item",style:{"--list-color":t},children:o},n)}return i==="***"?m.jsx("hr",{},n):i?m.jsx("p",{children:i},n):null})})},Go={tidal:"/tidal-color.svg",spotify:"/spoty-color.svg",apple:"/apple-music.svg",youtube:"/yt-color.svg",instagram:"/ig-color.svg",tiktok:"/tiktok-color.svg"},Vo=({artistTitleKey:e,artistSubtitleKey:t,playerColorVar:a,inverted:r=!1,videoUrl:n,videoUrlEn:i,songSource:o,albumArt:s,subtitle:l,descriptionKey:f,socialLinksOverride:c,gradientBg:d,isService:h=!1})=>{const{t:p,i18n:S}=Ut(),b=N.useRef(null),[A,w]=N.useState(!1),[P,I]=N.useState(!1),[F,y]=N.useState(70),[G,te]=N.useState(0),[V,Pe]=N.useState(!1),st=p(e),Va=h?p(t):l,Xa=p("music_song_title"),Ja=S.language.startsWith("es")?n:i||n,qa=p(f)||"",Qa=c,Za=async()=>{const x=b.current;if(!(!x||h)){if(A){x.pause(),w(!1);return}try{x.load(),await x.play(),w(!0)}catch(j){console.warn("Error al reproducir:",j),w(!1)}}},er=()=>{const x=b.current;!x||h||(x.loop=!P,I(!P))};N.useEffect(()=>{const x=b.current;if(!x||h)return;const j=()=>{const ce=x.duration||0,rr=x.currentTime||0;te(ce>0?rr/ce*100:0)};return x.volume=F/100,x.addEventListener("timeupdate",j),x.addEventListener("ended",()=>w(!1)),x.addEventListener("pause",()=>w(!1)),x.addEventListener("play",()=>w(!0)),()=>{x.removeEventListener("timeupdate",j),x.removeEventListener("ended",()=>w(!1)),x.removeEventListener("pause",()=>w(!1)),x.removeEventListener("play",()=>w(!0))}},[F,P,h]);const tr=x=>{const j=b.current;if(!j||!j.duration){te(parseFloat(x.target.value));return}const ce=parseFloat(x.target.value)/100*j.duration;j.currentTime=ce,te(parseFloat(x.target.value))},ar={"--player-color-base":a,"--modal-bg-gradient":d};return m.jsxs("div",{className:`artist-section ${r?"inverted":""}`,style:ar,children:[m.jsx("h2",{className:`artist-name-title ${r?"right-title":""}`,children:st}),m.jsx("span",{className:"artist-subtitle-genres",children:Va}),m.jsxs("div",{className:"artist-layout",children:[m.jsxs("div",{className:`info-column ${h?"service-layout-full":""}`,children:[m.jsx("div",{className:"video-wrapper",children:m.jsx("div",{className:"video-player-container",children:m.jsx("iframe",{src:Ja,title:st,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}),m.jsxs("div",{className:"description-container",children:[m.jsx("h4",{className:"description-subtitle",children:p("description")||"Descripción"}),m.jsx("div",{style:{textAlign:h?"center":"initial"},children:m.jsx(Ko,{content:qa})})]}),m.jsx(nr,{to:"/contact",className:"modal-cta-button",style:{backgroundColor:a,color:"var(--color-bg)",border:`2px solid ${a}`,width:"100%",textAlign:"center",padding:"0.75rem 1.5rem",marginTop:"2rem"},children:p("modal_pricing_cta")})]}),!h&&m.jsxs("div",{className:"player-column",children:[m.jsxs("div",{className:"album-art-wrapper",children:[m.jsx("img",{src:s,alt:"Album Art",className:"album-art"}),m.jsxs("audio",{ref:b,preload:"auto",children:[m.jsx("source",{src:o,type:"audio/mpeg"}),"Tu navegador no soporta el elemento de audio."]})]}),m.jsx("input",{className:"progress-bar",type:"range",min:0,max:100,value:G,onChange:tr,"aria-label":"barra de progreso"}),m.jsxs("div",{className:"player-controls compact",children:[m.jsxs("div",{className:"volume-inline",children:[m.jsx("button",{className:"control-button volume-toggle",onClick:()=>Pe(x=>!x),"aria-label":"volumen",title:"Volumen",style:{backgroundColor:a},children:m.jsx(z,{icon:Yo})}),V&&m.jsx("div",{className:"volume-popup",role:"dialog","aria-hidden":!V,children:m.jsx("input",{type:"range",min:0,max:100,value:F,className:"volume-slider-popup",onChange:x=>{const j=parseInt(x.target.value);b.current&&(b.current.volume=j/100),y(j)},"aria-label":"control de volumen"})})]}),m.jsx("button",{className:"control-button","aria-label":"Anterior pista",style:{backgroundColor:a},children:m.jsx(z,{icon:Do})}),m.jsx("button",{className:"control-button play-pause","aria-label":"Reproducir/Pausar",onClick:Za,style:{backgroundColor:a},children:m.jsx(z,{icon:A?Bo:zo})}),m.jsx("button",{className:"control-button","aria-label":"Siguiente pista",style:{backgroundColor:a},children:m.jsx(z,{icon:Wo})}),m.jsx("button",{className:`control-button repeat ${P?"active":""}`,onClick:er,"aria-label":"Repetir",style:{backgroundColor:a},children:m.jsx(z,{icon:Ro})})]}),m.jsxs("div",{className:"track-list-container",children:[m.jsx("h4",{className:"track-list-header",style:{color:a},children:p("track_list_header")}),m.jsx("ul",{className:"track-list",children:m.jsxs("li",{className:"track-item active",style:{color:a},children:["1. ",Xa]})})]}),m.jsxs("p",{className:"social-follow-prompt",children:[p("social_follow_prompt"),":"]}),m.jsx("div",{className:"social-links",children:Object.entries(Go).map(([x,j])=>m.jsx("a",{href:Qa[x]||"#",target:"_blank",rel:"noopener noreferrer","aria-label":x,children:m.jsx("img",{src:j,alt:x,className:"social-icon"})},x))})]})]})]})},Oe=[{id:"prod-musical",artistTitleKey:"modal_portfolio_title",artistSubtitleKey:"music_prod_title_artists_main_copy",playerColorVar:"#e86c10",inverted:!1,videoUrl:"https://www.youtube.com/embed/KKARwQRbIAs?autoplay=0&controls=1&rel=0&playsinline=1",videoUrlEn:"https://www.youtube.com/embed/KKARwQRbIAs?autoplay=0&controls=1&rel=0&playsinline=1",songSource:"",albumArt:"/icono-prod-musical.svg",subtitle:"",descriptionKey:"portfolio_audio_prod_desc_body",gradientBg:"linear-gradient(180deg, #e86c10 0%, #000000 100%)",socialLinksOverride:{},isService:!0},{id:"cine-tv",artistTitleKey:"modal_reel_title",artistSubtitleKey:"clients_subtitle",playerColorVar:"#7a4ed4",inverted:!0,videoUrl:"https://www.youtube.com/embed/3UoM0YL2Obk?autoplay=0&controls=1&rel=0&playsinline=1",videoUrlEn:"https://www.youtube.com/embed/c-SlQZxOIA8?autoplay=0&controls=1&rel=0&playsinline=1",songSource:"",albumArt:"/icono-film-tv.svg",subtitle:"",descriptionKey:"clients_body",gradientBg:"linear-gradient(180deg, #7a4ed4 0%, #000000 100%)",socialLinksOverride:{},isService:!0}];function qo(){const{t:e}=Ut(),[t,a]=N.useState(0),[r,n]=N.useState(!1);N.useEffect(()=>{window.scrollTo(0,0)},[]);const i=N.useMemo(()=>Oe[t],[t]),o=N.useCallback(()=>{n(!0),a(f=>f===0?Oe.length-1:f-1)},[]),s=N.useCallback(()=>{n(!0),a(f=>f===Oe.length-1?0:f+1)},[]),l=N.useMemo(()=>i.id==="prod-musical"?e("modal_portfolio_title"):i.id==="cine-tv"?e("modal_reel_title"):e("audio_service_banner_title"),[i,e]);return m.jsxs("div",{className:"music-production-page-container modal-view",children:[m.jsx("h1",{className:"music-page-header",style:{fontFamily:"Albertus Medium",fontSize:"1.8rem",letterSpacing:"1px",marginBottom:"2rem"},children:e("audio_service_banner_title")}),m.jsxs("div",{className:"artist-modal-controls-wrapper",children:[m.jsx("button",{className:`modal-nav-button prev-artist ${r?"":"glowing-border"}`,onClick:o,style:{backgroundColor:i.playerColorVar},"aria-label":e("prev")+" artista",children:m.jsx(z,{icon:Ho})}),m.jsx("h2",{className:"modal-artist-nav-title",children:l}),m.jsx("button",{className:`modal-nav-button next-artist ${r?"":"glowing-border"}`,onClick:s,style:{backgroundColor:i.playerColorVar},"aria-label":e("next")+" artista",children:m.jsx(z,{icon:Uo})})]}),m.jsx(Vo,{...i})]})}export{qo as default};
