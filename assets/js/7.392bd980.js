(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9,26],{308:function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"a",(function(){return a})),s.d(e,"j",(function(){return o})),s.d(e,"i",(function(){return c})),s.d(e,"f",(function(){return l})),s.d(e,"g",(function(){return u})),s.d(e,"h",(function(){return h})),s.d(e,"b",(function(){return d})),s.d(e,"e",(function(){return p})),s.d(e,"l",(function(){return f})),s.d(e,"m",(function(){return v})),s.d(e,"c",(function(){return g})),s.d(e,"k",(function(){return m}));s(22),s(50),s(176),s(71),s(106),s(47),s(103),s(48),s(312),s(69),s(310),s(51);var n=s(107),i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,o=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function d(t){if(l(t))return t;var e=t.match(i),s=e?e[0]:"",n=c(t);return a.test(n)?t:n+".html"+s}function p(t,e){var s=t.hash,n=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!n||s===n)&&c(t.path)===c(e)}function f(t,e,s){s&&(e=function(t,e,s){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var i=e.split("/");s&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,s));for(var n=c(e),i=0;i<t.length;i++)if(c(t[i].path)===n)return Object.assign({},t[i],{type:"page",path:d(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,s,i){var r=s.pages,a=s.themeConfig,o=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||o.sidebar||a.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var c=o.sidebar||a.sidebar;if(c){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var s in e)if(0===(n=t.path,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(s))return{base:s,config:e[s]};var n;return{}}(e,c),u=l.base,h=l.config;return h?h.map((function(t){return function t(e,s,i,r){if("string"==typeof e)return f(s,e,i);if(Array.isArray(e))return Object.assign(f(s,e[0],i),{title:e[1]});r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=e.children||[],o=e.versions||[];return Object(n.a)({type:"group"},e,{children:a.map((function(e){return t(e,s,i,!0)})),collapsable:!1!==e.collapsable,versions:o.map((function(r){return Object(n.a)({},r,{status:r.name===e.currentVersion?"current":r.status,children:r.children.map((function(n){return t(e.path+r.name+n,s,i,!0)}))})}))})}(t,r,u)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},309:function(t,e,s){"use strict";var n=s(0),i=s(49).some,r=s(52),a=s(20),o=r("some"),c=a("some");n({target:"Array",proto:!0,forced:!o||!c},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},310:function(t,e,s){"use strict";var n=s(173),i=s(105),r=s(7),a=s(26),o=s(104),c=s(174),l=s(10),u=s(175),h=s(70),d=s(2),p=[].push,f=Math.min,v=!d((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(t,e,s){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var n=String(a(this)),r=void 0===s?4294967295:s>>>0;if(0===r)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,r);for(var o,c,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,d+"g");(o=h.call(v,n))&&!((c=v.lastIndex)>f&&(u.push(n.slice(f,o.index)),o.length>1&&o.index<n.length&&p.apply(u,o.slice(1)),l=o[0].length,f=c,u.length>=r));)v.lastIndex===o.index&&v.lastIndex++;return f===n.length?!l&&v.test("")||u.push(""):u.push(n.slice(f)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var i=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,i,s):n.call(String(i),e,s)},function(t,i){var a=s(n,t,this,i,n!==e);if(a.done)return a.value;var h=r(t),d=String(this),p=o(h,RegExp),g=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),y=new p(v?h:"^(?:"+h.source+")",m),_=void 0===i?4294967295:i>>>0;if(0===_)return[];if(0===d.length)return null===u(y,d)?[d]:[];for(var k=0,b=0,C=[];b<d.length;){y.lastIndex=v?b:0;var x,w=u(y,v?d:d.slice(b));if(null===w||(x=f(l(y.lastIndex+(v?0:b)),d.length))===k)b=c(d,b,g);else{if(C.push(d.slice(k,b)),C.length===_)return C;for(var $=1;$<=w.length-1;$++)if(C.push(w[$]),C.length===_)return C;b=k=x}}return C.push(d.slice(k)),C}]}),!v)},312:function(t,e,s){"use strict";var n=s(173),i=s(7),r=s(10),a=s(26),o=s(174),c=s(175);n("match",1,(function(t,e,s){return[function(e){var s=a(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,s):new RegExp(e)[t](String(s))},function(t){var n=s(e,t,this);if(n.done)return n.value;var a=i(t),l=String(this);if(!a.global)return c(a,l);var u=a.unicode;a.lastIndex=0;for(var h,d=[],p=0;null!==(h=c(a,l));){var f=String(h[0]);d[p]=f,""===f&&(a.lastIndex=o(l,r(a.lastIndex),u)),p++}return 0===p?null:d}]}))},316:function(t,e,s){"use strict";s.r(e);s(309),s(72),s(320);var n=s(308),i={props:{item:{required:!0}},computed:{link:function(){return Object(n.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:n.f,isMailto:n.g,isTel:n.h}},r=s(46),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isExternal(t.link)?s("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n    "+t._s(t.item.text)+"\n    "),s("OutboundLink")],1):s("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=a.exports},320:function(t,e,s){"use strict";var n=s(0),i=s(321);n({target:"String",proto:!0,forced:s(322)("link")},{link:function(t){return i(this,"a","href",t)}})},321:function(t,e,s){var n=s(26),i=/"/g;t.exports=function(t,e,s,r){var a=String(n(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+a+"</"+e+">"}},322:function(t,e,s){var n=s(2);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},330:function(t,e,s){"use strict";s.r(e);var n=s(329),i=s.n(n);if("undefined"!=typeof window)s(335);var r={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){i()(this.$el).slick("unslick")},methods:{create:function(){var t=i()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=i()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),i()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){i()(this.$el).slick("slickNext")},prev:function(){i()(this.$el).slick("slickPrev")},pause:function(){i()(this.$el).slick("slickPause")},play:function(){i()(this.$el).slick("slickPlay")},goTo:function(t,e){i()(this.$el).slick("slickGoTo",t,e)},currentSlide:function(){return i()(this.$el).slick("slickCurrentSlide")},add:function(t,e,s){i()(this.$el).slick("slickAdd",t,e,s)},remove:function(t,e){i()(this.$el).slick("slickRemove",t,e)},filter:function(t){i()(this.$el).slick("slickFilter",t)},unfilter:function(){i()(this.$el).slick("slickUnfilter")},getOption:function(t){i()(this.$el).slick("slickGetOption",t)},setOption:function(t,e,s){i()(this.$el).slick("slickSetOption",t,e,s)},setPosition:function(){i()(this.$el).slick("setPosition")},onAfterChange:function(t,e,s){this.$emit("afterChange",t,e,s)},onBeforeChange:function(t,e,s,n){this.$emit("beforeChange",t,e,s,n)},onBreakpoint:function(t,e,s){this.$emit("breakpoint",t,e,s)},onDestroy:function(t,e){this.$emit("destroy",t,e)},onEdge:function(t,e,s){this.$emit("edge",t,e,s)},onInit:function(t,e){this.$emit("init",t,e)},onReInit:function(t,e){this.$emit("reInit",t,e)},onSetPosition:function(t,e){this.$emit("setPosition",t,e)},onSwipe:function(t,e,s){this.$emit("swipe",t,e,s)},onLazyLoaded:function(t,e,s,n){this.$emit("lazyLoaded",t,e,s,n)},onLazyLoadError:function(t,e,s,n){this.$emit("lazyLoadError",t,e,s,n)}}},a=s(46),o=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},341:function(t,e,s){"use strict";s.r(e);var n=s(316),i=s(330),r={components:{NavLink:n.default,Slick:i.default},data:function(){return{slickOptions:{slidesToShow:1,centerMode:!0,centerPadding:"0",speed:1e3,autoplay:!0,variableWidth:!0,arrows:!1,dots:!0,pauseOnHover:!1,pauseOnDotsHover:!0}}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},a=s(46),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"header section bg-blue text-grey-lightest less-padding emphasize"},[s("div",{staticClass:"container z-10"},[s("div",{staticClass:"text-center"},[t._m(0),t._v(" "),s("div",{staticClass:"mt-4"},[s("a",{staticClass:"btn hidden md:inline-block",attrs:{href:"https://demo.pterodactyl.io",target:"_blank",rel:"nofollow noopener"}},[t._v("Demo")]),t._v(" "),s("router-link",{staticClass:"btn inline-block",attrs:{to:"/panel/getting_started.html"}},[t._v("Get started")])],1)])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"section bg-white"},[s("div",{staticClass:"text-center"},[s("h1",[t._v("Screenshots")]),t._v(" "),s("div",{staticClass:"screenshots"},[s("slick",{ref:"slick",attrs:{options:t.slickOptions}},[s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}})])])],1)])]),t._v(" "),s("div",{staticClass:"section bg-blue text-grey-lightest"},[s("div",{staticClass:"container text-center"},[s("h1",[t._v("Get Started")]),t._v(" "),s("p",{staticClass:"m-4"},[t._v("Ready to fly on the Pterodactyl?")]),t._v(" "),s("div",{staticClass:"mt-4"},[s("router-link",{staticClass:"btn inline-block",attrs:{to:"/project/introduction.html"}},[t._v("About the project")]),t._v(" "),s("a",{staticClass:"btn inline-block",attrs:{href:"https://pterodactyl.io/discord"}},[t._v("Discord")])],1)])]),t._v(" "),s("div",{staticClass:"section bg-black text-grey-lighter text-sm less-padding"},[s("div",{staticClass:"container text-center"},[s("div",[s("img",{staticClass:"w-16",attrs:{src:t.$withBase("pterodactyl-flat.svg")}})]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"footer"},[t._v("MIT Licensed | Copyright © 2015 - 2020 Dane Everitt & Contributors.")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"max-w-xl w-full inline-block",attrs:{src:"https://cdn.pterodactyl.io/logos/new/pterodactyl_logo_transparent.png",alt:"Pterodactyl"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section bg-white"},[e("div",{staticClass:"container text-center"},[e("h1",{staticClass:"text-blue mb-4"},[this._v("Pterodactyl Panel")]),this._v(" "),e("h3",{staticClass:"border-0 font-normal leading-normal mx-auto",staticStyle:{"max-width":"50rem"}},[this._v("\n                Pterodactyl is an open-source game server management panel built with PHP 7, React, and Go.\n                Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers\n                while exposing a beautiful and intuitive UI to end users.\n            ")]),this._v(" "),e("h3",{staticClass:"border-0 leading-normal mx-auto mt-4",staticStyle:{"max-width":"50rem"}},[this._v("\n                Stop settling for less. Make game servers a first class citizen on your platform.\n            ")]),this._v(" "),e("img",{staticClass:"max-w-lg w-full m-4 inline-block",attrs:{src:"https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section bg-blue text-grey-lightest"},[s("div",{staticClass:"container text-center"},[s("h1",{staticClass:"mb-4"},[t._v("Why Pterodactyl")]),t._v(" "),s("div",{staticClass:"flex flex-wrap"},[s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-lock"})]),t._v(" "),s("h3",[t._v("Security First")]),t._v(" "),s("p",[t._v("Security is a first-class citizen on this platform with bcrypt hashing, AES-256-CBC encryption, and HTTPS support out of the box.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-beaker"})]),t._v(" "),s("h3",[t._v("Modern Tooling")]),t._v(" "),s("p",[t._v("Built on a modern stack utilizing the best design practices that make it easy to jump in and make modifications.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-anchor"})]),t._v(" "),s("h3",[t._v("Docker to the Core")]),t._v(" "),s("p",[t._v("All servers run in isolated Docker containers that limit attack vectors, provide strict resource limits, and provide environments tailored to each specific game.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-wallet"})]),t._v(" "),s("h3",[t._v("Free & Open Source")]),t._v(" "),s("p",[t._v("Pterodactyl is 100% free and licensed under a MIT license. All of our code is completely open source as well.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-browser"})]),t._v(" "),s("h3",[t._v("User Friendly")]),t._v(" "),s("p",[t._v("Save the furious clicking and screaming for Overwatch. Pterodactyl's interface is designed so well even Hanzo can use it.")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-expand"})]),t._v(" "),s("h3",[t._v("Scalable")]),t._v(" "),s("p",[t._v("Whether you're a hosting company, the next Hyplex, or just some dudes playing video games, we've got you covered.")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left md:flex"},[s("div",{staticClass:"flex-none w-full md:w-1/2 md:pr-12"},[s("p",{staticClass:"my-4"},[t._v("\n                        There are tons of options out there when it comes to self-hosted game management panels. However, you will find no panel that can compete with Pterodactyl in terms of features, customization, stability, and most of all: price.\n                    ")]),t._v(" "),s("p",{staticClass:"my-4"},[t._v("\n                        We're committed to building the best software that we can, and have been working with game management panels for almost five years now. We've seen games change, and are committed to making the most flexible, lightweight, and future proof panel that we can.\n                    ")])]),t._v(" "),s("div",{staticClass:"hidden md:block md:flex-1 md:pr-12"},[s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://blog.pterodactyl.io/"}},[t._v("Blog")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/pterodactyl"}},[t._v("GitHub")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://paypal.me/PterodactylSoftware",target:"_blank"}},[t._v("Support Pterodactyl")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"/panel/troubleshooting.html"}},[t._v("Troubleshooting")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/parkervcp/eggs"}},[t._v("Additional Game Configurations")])])]),t._v(" "),s("div",{staticClass:"text-center mt-8 md:flex-1 md:mt-0"},[s("a",{attrs:{href:"https://pterodactyl.io/discord",target:"_blank",rel:"nofollow noopener"}},[s("img",{staticClass:"w-3/4",attrs:{src:"https://cdn.pterodactyl.io/site-assets/discord.png"}})])])])}],!1,null,null,null);e.default=o.exports}}]);