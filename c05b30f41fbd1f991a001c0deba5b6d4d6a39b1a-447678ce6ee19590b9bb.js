(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"094J":function(e,t,n){"use strict";(function(e){var a=n("q1tI"),r=n("puqk"),i={},c=function(e,t,n){return i[e]||(i[e]={callbacks:[],value:n}),i[e].callbacks.push(t),{deregister:function(){var n=i[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){i[e].value!==n&&(i[e].value=n,i[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};t.a=function(t,n){if(void 0===n&&(n=e.localStorage),n){var i=(o=n,{get:function(e,t){var n=o.getItem(e);return null===n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){o.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,n){var i=n.get,o=n.set,l=Object(a.useRef)(null),u=Object(a.useState)((function(){return i(t,e)})),s=u[0],d=u[1];return Object(r.a)("storage",(function(e){var n=e.key,a=JSON.parse(e.newValue);n===t&&s!==a&&d(a)})),Object(a.useEffect)((function(){return l.current=c(t,d,e),function(){l.current.deregister()}}),[]),Object(a.useEffect)((function(){o(t,s),l.current.emit(s)}),[s]),[s,d]}(e,t,i)}}var o;return a.useState}}).call(this,n("yLpj"))},"44PY":function(e,t,n){"use strict";var a=n("Wbzz"),r=n("q1tI"),i=n.n(r),c=(n("JLFk"),function(){var e=Object(a.useStaticQuery)("974882295").site,t=[{key:"E-mail",val:e.siteMetadata.email,url:"mailto:"+e.siteMetadata.email},{key:"Twitter",val:"@"+e.siteMetadata.author,url:"https://twitter.com/"+e.siteMetadata.author},{key:"Linkedin",val:"/in/"+e.siteMetadata.author,url:"https://www.linkedin.com/in/"+e.siteMetadata.author+"/"},{key:"Github",val:"/"+e.siteMetadata.author,url:"https://github.com/"+e.siteMetadata.author}];return i.a.createElement("section",{className:"contact"},i.a.createElement("h2",{className:"contact__title"},"Contact"),i.a.createElement("ul",{className:"contact__list"},t.map((function(e){var t=e.key,n=e.val,a=e.url;return i.a.createElement("li",{className:"contact__list-item",key:t},i.a.createElement("div",{className:"contact__key"},t),i.a.createElement("div",{className:"contact__val"},i.a.createElement("a",{href:a},n)))}))))}),o=n("ZMKu"),l=(n("6MIl"),n("zmW6"),function(e){var t=e.isOpen,n=e.setIsOpen,a=Object(r.useState)(t?"open":"closed"),c=a[0],l=a[1];return Object(r.useEffect)((function(){l(t?"open":"closed")}),[t]),Object(r.useEffect)((function(){"closed"===c&&setTimeout((function(){l("waiting")}),1e3)}),[c]),Object(r.useEffect)((function(){l("waiting")}),[]),i.a.createElement(o.b.button,{className:"toggle",onClick:n,animate:c,variants:{open:{opacity:.6},closed:{opacity:1}}},i.a.createElement("div",{className:"toggle__inner"},i.a.createElement(o.b.svg,{viewBox:"0 0 28 12",width:"28",height:"12",initial:"closed"},i.a.createElement(o.b.circle,{cx:"6",cy:"6",r:"1",variants:{open:{cy:6,opacity:.6},closed:{cy:6,opacity:.6},waiting:{cy:[6,5,6],opacity:[.6,1,.6],transition:{duration:.4,loop:1/0,repeatDelay:2}}}}),i.a.createElement(o.b.circle,{cx:"14",cy:"6",r:"1",variants:{open:{cx:6,cy:6,opacity:.6},closed:{cx:14,cy:6,opacity:.6},waiting:{cy:[6,5,6],opacity:[.6,1,.6],transition:{duration:.4,delay:.2,loop:1/0,repeatDelay:2}}},transition:{delay:"open"===c?0:.2}}),i.a.createElement(o.b.circle,{cx:"22",cy:"6",r:"1",variants:{open:{cx:6,cy:6,opacity:.6},closed:{cx:22,cy:6,opacity:.6},waiting:{cy:[6,5,6],opacity:[.6,1,.6],transition:{duration:.4,delay:.4,loop:1/0,repeatDelay:2}}},transition:{delay:"open"===c?.2:.4}}),i.a.createElement(o.b.line,{x1:"6",y1:"6",x2:"22",y2:"6",style:{opacity:"waiting"===c?0:1,strokeWidth:4},strokeLinecap:"round",variants:{open:{x2:22},closed:{x2:6}},transition:{delay:"open"===c?.4:0,type:"tween"}}))))}),u=function(e){var t=e.headline,n=e.subtitle,a=e.html,r=Object(o.c)(!1,!0),c=r[0],u=r[1];return i.a.createElement("header",{className:"header"},i.a.createElement(o.b.h1,{animate:c?{opacity:.5}:{opacity:1},transition:{duration:.3},className:"header__title"},t,i.a.createElement("br",null),function(e,t){void 0===t&&(t=2);var n=e.trim().split(" ");if(n.length>2){var a=n.slice(-t).join(" ");return n.splice(-t,t,a),n.join(" ")}return e}(n)," ",i.a.createElement(l,{isOpen:c,setIsOpen:u})),i.a.createElement(o.b.div,{className:"h2 header__content",style:{overflow:"hidden"},initial:{height:0},animate:{height:c?"auto":0},exit:{height:0},dangerouslySetInnerHTML:{__html:a}}))},s=(n("VTMB"),n("NmYn")),d=n.n(s),m=function(e){var t=e.title,n=e.columnHeaders,a=e.columnData;return i.a.createElement("section",{className:"section"},i.a.createElement("h2",{className:"section__title"},t),i.a.createElement("ul",null,a.map((function(e,a){return i.a.createElement(i.a.Fragment,{key:a},0===a&&i.a.createElement("div",{className:"section__headers section__headers--"+d()(t.toLowerCase())},n.map((function(e){return i.a.createElement("div",{key:t+e},e)}))),i.a.createElement("li",{className:"section__data section__data--"+d()(t.toLowerCase())},e.map((function(e,t){return i.a.createElement(i.a.Fragment,{key:t},1===t?i.a.createElement("h3",{className:"section__data__item",dangerouslySetInnerHTML:{__html:e}}):i.a.createElement("div",{className:"section__data__item",dangerouslySetInnerHTML:{__html:e}}))}))))}))))},f=n("vrFN"),h=n("TEFD"),p=(n("DO+m"),function(){var e=Object(a.useStaticQuery)("3058350769").testimonials;return i.a.createElement("section",{className:"testimonials"},i.a.createElement("h2",{className:"testimonials__title"},"Testimonials"),i.a.createElement("ul",null,i.a.createElement("li",{className:"testimonials__list-headers"},i.a.createElement("div",null,"Testimonial"),i.a.createElement("div",null,"Written by"),i.a.createElement("div",null,"Company")),e.edges.map((function(e){var t=e.node,n=t.id,a=t.childMarkdownRemark,r=a.frontmatter,c=r.name,o=r.role,l=r.company,u=a.html;return i.a.createElement("li",{className:"testimonials__list-item",key:n},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}),i.a.createElement("div",null,i.a.createElement("h3",null,c),o),i.a.createElement("div",null,l))}))))});t.a=function(){var e=Object(a.useStaticQuery)("625226699"),t=e.content,n=e.experiences,r=e.education,o=e.awards,l=t.frontmatter,s=l.title,d=l.description,v=l.headline,E=l.subtitle,y=t.html;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{title:s,description:d}),i.a.createElement(h.a,null,i.a.createElement("div",null,"Input"),"2003—2020"),i.a.createElement(u,{headline:v,subtitle:E,html:y}),i.a.createElement(m,{title:"Experiences",columnHeaders:["Years","Company","Role","Responsibilities","Info"],columnData:n.edges.map((function(e){var t=e.node,n=(t.id,t.childMarkdownRemark),a=n.frontmatter,r=a.start,i=a.end,c=a.company,o=a.link;return[r+" — "+(i||""),o?'<a href="'+o+'">'+c+"</a>":c,a.role,a.responsibilities,n.html]}))}),i.a.createElement(m,{title:"Education",columnHeaders:["Years","School","Degree"],columnData:r.edges.map((function(e){var t=e.node.childMarkdownRemark.frontmatter;return[t.start+" — "+t.end,t.school,t.degree]}))}),i.a.createElement(m,{title:"Honors & Awards",columnHeaders:["Year","Award","Issuer","Info"],columnData:o.edges.map((function(e){var t=e.node.childMarkdownRemark,n=t.frontmatter;return[n.year,n.award,n.issuer,t.html]}))}),i.a.createElement(c,null),i.a.createElement(p,null))}},"6MIl":function(e,t,n){},"7toh":function(e,t,n){"use strict";var a=n("q1tI"),r=n("oXkO"),i=n.n(r);t.a=function(){var e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?i()():void 0}}var n=Object(a.useState)(t),r=n[0],c=n[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){c(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),r}},"DO+m":function(e,t,n){},JLFk:function(e,t,n){},NmYn:function(e,t,n){var a;a=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}');function n(n,a){if("string"!=typeof n)throw new Error("slugify: string argument expected");var r=t[(a="string"==typeof a?{replacement:a}:a||{}).locale]||{},i=void 0===a.replacement?"-":a.replacement,c=n.split("").reduce((function(t,n){return t+(r[n]||e[n]||n).replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+i+"]+","g"),i);return a.lower&&(c=c.toLowerCase()),a.strict&&(c=c.replace(new RegExp("[^a-zA-Z0-9"+i+"]","g"),"").replace(new RegExp("[\\s"+i+"]+","g"),i)),c}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=a(),e.exports.default=a()},TEFD:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("ZMKu"),c=n("g+62"),o=(n("bvMr"),function(){var e=Object(c.a)();return r.a.createElement(i.b.svg,{className:"logo",viewBox:"0 0 70 45",width:"70",height:"45",onClick:e.toggle},r.a.createElement(i.b.rect,{width:"10",height:"45",x:"5",y:"0",animate:{x:e.value?49:0},initial:!1}),r.a.createElement(i.b.circle,{cx:"42",cy:"22",r:"17",animate:{cx:e.value?27:42},initial:!1}))});n("oqko"),t.a=function(e){var t=e.output,n=e.children;return r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"top__logo"},!t&&r.a.createElement(o,{className:"logo"})),r.a.createElement("div",{className:"top__input"},n),r.a.createElement("div",{className:"top__cr"},r.a.createElement("div",null,"©"),"2020"))}},VTMB:function(e,t,n){},bN3s:function(e,t,n){},bvMr:function(e,t,n){},"g+62":function(e,t,n){"use strict";(function(e){var a=n("puqk"),r=n("q1tI"),i=n("094J"),c=function(){},o={classList:{add:c,remove:c}},l=function(t,n,a){void 0===a&&(a=e);var c=t?Object(i.a)(t,n):r.useState,l=a.matchMedia?a.matchMedia("(prefers-color-scheme: dark)"):{},u={addEventListener:function(e,t){return l.addListener&&l.addListener(t)},removeEventListener:function(e,t){return l.removeListener&&l.removeListener(t)}},s="(prefers-color-scheme: dark)"===l.media,d=a.document&&a.document.body||o;return{usePersistedDarkModeState:c,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:u,getInitialValue:function(e){return s?l.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,i=t.classNameDark,c=t.classNameLight,o=t.onChange,u=t.storageKey;void 0===u&&(u="darkMode");var s=t.storageProvider,d=t.global,m=Object(r.useMemo)((function(){return l(u,s,d)}),[u,s,d]),f=m.getDefaultOnChange,h=m.mediaQueryEventTarget,p=(0,m.usePersistedDarkModeState)((0,m.getInitialValue)(e)),v=p[0],E=p[1],y=Object(r.useMemo)((function(){return o||f(n,i,c)}),[o,n,i,c,f]);return Object(r.useEffect)((function(){y(v)}),[y,v]),Object(a.a)("change",(function(e){return E(e.matches)}),h),{value:v,enable:Object(r.useCallback)((function(){return E(!0)}),[E]),disable:Object(r.useCallback)((function(){return E(!1)}),[E]),toggle:Object(r.useCallback)((function(){return E((function(e){return!e}))}),[E])}}}).call(this,n("yLpj"))},oXkO:function(e,t,n){e.exports=function e(t,n,a){function r(c,o){if(!n[c]){if(!t[c]){if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[c]={exports:{}};t[c][0].call(u.exports,(function(e){return r(t[c][1][e]||e)}),u,u.exports,e,t,n,a)}return n[c].exports}for(var i=!1,c=0;c<a.length;c++)r(a[c]);return r}({1:[function(e,t,n){"use strict";t.exports=function(){if("undefined"==typeof window||"undefined"==typeof navigator)return function(){return 0};if(!navigator.userAgent.match(/iphone|ipod|ipad/i))return function(){return window.innerHeight};var e,t=Math.abs(window.orientation),n={w:0,h:0};return(e=document.createElement("div")).style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),n.w=90===t?e.offsetHeight:window.innerWidth,n.h=90===t?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null,function(){return 90!==Math.abs(window.orientation)?n.h:n.w}}()},{}]},{},[1])(1)},oqko:function(e,t,n){},puqk:function(e,t,n){"use strict";(function(e){var a=n("q1tI");t.a=function(t,n,r,i){void 0===r&&(r=e),void 0===i&&(i={});var c=Object(a.useRef)(),o=i.capture,l=i.passive,u=i.once;Object(a.useEffect)((function(){c.current=n}),[n]),Object(a.useEffect)((function(){if(r&&r.addEventListener){var e=function(e){return c.current(e)},n={capture:o,passive:l,once:u};return r.addEventListener(t,e,n),function(){r.removeEventListener(t,e,n)}}}),[t,r,o,l,u])}}).call(this,n("yLpj"))},zmW6:function(e,t,n){}}]);
//# sourceMappingURL=c05b30f41fbd1f991a001c0deba5b6d4d6a39b1a-447678ce6ee19590b9bb.js.map