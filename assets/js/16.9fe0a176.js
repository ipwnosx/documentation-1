(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{308:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"j",(function(){return u})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"l",(function(){return h})),n.d(e,"m",(function(){return v})),n.d(e,"c",(function(){return g})),n.d(e,"k",(function(){return m}));n(22),n(50),n(176),n(71),n(106),n(47),n(103),n(48),n(312),n(69),n(310),n(51);var r=n(107),i=/#.*$/,a=/\.(md|html)$/,s=/\/$/,u=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function l(t){return u.test(t)}function c(t){return/^mailto:/.test(t)}function p(t){return/^tel:/.test(t)}function d(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function f(t,e){var n=t.hash,r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function h(t,e,n){n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var u=a[s];".."===u?i.pop():"."!==u&&i.push(u)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=o(e),i=0;i<t.length;i++)if(o(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:d(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,n,i){var a=n.pages,s=n.themeConfig,u=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||u.sidebar||s.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=u.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(n))return{base:n,config:e[n]};var r;return{}}(e,o),c=l.base,p=l.config;return p?p.map((function(t){return function t(e,n,i,a){if("string"==typeof e)return h(n,e,i);if(Array.isArray(e))return Object.assign(h(n,e[0],i),{title:e[1]});a&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var s=e.children||[],u=e.versions||[];return Object(r.a)({type:"group"},e,{children:s.map((function(e){return t(e,n,i,!0)})),collapsable:!1!==e.collapsable,versions:u.map((function(a){return Object(r.a)({},a,{status:a.name===e.currentVersion?"current":a.status,children:a.children.map((function(r){return t(e.path+a.name+r,n,i,!0)}))})}))})}(t,a,c)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},310:function(t,e,n){"use strict";var r=n(173),i=n(105),a=n(7),s=n(26),u=n(104),o=n(174),l=n(10),c=n(175),p=n(70),d=n(2),f=[].push,h=Math.min,v=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);for(var u,o,l,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,d+"g");(u=p.call(v,r))&&!((o=v.lastIndex)>h&&(c.push(r.slice(h,u.index)),u.length>1&&u.index<r.length&&f.apply(c,u.slice(1)),l=u[0].length,h=o,c.length>=a));)v.lastIndex===u.index&&v.lastIndex++;return h===r.length?!l&&v.test("")||c.push(""):c.push(r.slice(h)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var s=n(r,t,this,i,r!==e);if(s.done)return s.value;var p=a(t),d=String(this),f=u(p,RegExp),g=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),b=new f(v?p:"^(?:"+p.source+")",m),x=void 0===i?4294967295:i>>>0;if(0===x)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var _=0,$=0,k=[];$<d.length;){b.lastIndex=v?$:0;var C,y=c(b,v?d:d.slice($));if(null===y||(C=h(l(b.lastIndex+(v?0:$)),d.length))===_)$=o(d,$,g);else{if(k.push(d.slice(_,$)),k.length===x)return k;for(var L=1;L<=y.length-1;L++)if(k.push(y[L]),k.length===x)return k;$=_=C}}return k.push(d.slice(_)),k}]}),!v)},312:function(t,e,n){"use strict";var r=n(173),i=n(7),a=n(10),s=n(26),u=n(174),o=n(175);r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=i(t),l=String(this);if(!s.global)return o(s,l);var c=s.unicode;s.lastIndex=0;for(var p,d=[],f=0;null!==(p=o(s,l));){var h=String(p[0]);d[f]=h,""===h&&(s.lastIndex=u(l,a(s.lastIndex),c)),f++}return 0===f?null:d}]}))},343:function(t,e,n){"use strict";n.r(e);n(50),n(75),n(48),n(69),n(51);var r=n(44),i=n(308);function a(t,e,n){var i=[];e.forEach((function(t){"group"===t.type?i.push.apply(i,Object(r.a)(t.children||[])):i.push(t)}));for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===t.path)return i[a+n]}}var s={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,a=void 0===r?"":r,s=t.docsBranch,u=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o,c=Object(i.i)(this.$page.path);return i.a.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,a,u,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){return/bitbucket.org/.test(t)?(i.j.test(e)?e:t).replace(i.a,"")+"/".concat(r)+(n?"/"+n.replace(i.a,""):"")+a+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.j.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit/".concat(r)+(n?"/"+n.replace(i.a,""):"")+a}}},u=n(46),o=Object(u.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"content",attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"}),t._v(" "),n("div",{staticClass:"prev"},[t.prev?n("span",[t._v("\n        ←\n        "),t.prev?n("router-link",{attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e()]),t._v(" "),n("div",{staticClass:"next"},[t.next?n("span",[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports}}]);