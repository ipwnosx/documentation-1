(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{369:function(s,t,a){"use strict";a.r(t);var n=a(46),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"building-panel-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-panel-assets"}},[s._v("#")]),s._v(" Building Panel Assets")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Do "),a("strong",[s._v("not")]),s._v(" run the following steps on your production nodes.")])]),s._v(" "),a("p",[s._v("Instructions on how to build the panel are also available in the "),a("a",{attrs:{href:"https://github.com/pterodactyl/panel/blob/develop/BUILDING.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("BUILDING.md"),a("OutboundLink")],1),s._v(" file.")]),s._v(" "),a("p",[s._v("The frontend of the Panel is built with React. Any changes to the source files require to recompile it.\nThis also applies to style sheets. The following sections explain how to do so.")]),s._v(" "),a("h2",{attrs:{id:"install-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[s._v("#")]),s._v(" Install Dependencies")]),s._v(" "),a("p",[s._v("The following commands will install the necessary dependencies for building the Panel assets.")]),s._v(" "),a("p",[s._v("The build tools require NodeJS, yarn is used as the package manager.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ubuntu/Debian")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://deb.nodesource.com/setup_12.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -E "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nodejs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://rpm.nodesource.com/setup_12.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -E "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nodejs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 7")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nodejs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 8")]),s._v("\n")])])]),a("p",[s._v("Install required javascript packages.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/www/pterodactyl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Installs panel build dependencies")]),s._v("\n")])])]),a("h2",{attrs:{id:"build-panel-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-panel-assets"}},[s._v("#")]),s._v(" Build Panel Assets")]),s._v(" "),a("p",[s._v("The following command will rebuild the Panel frontend.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/www/pterodactyl\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build:production "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build panel")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);