(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{391:function(e,t,a){"use strict";a.r(t);var s=a(46),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading-0-5-x-to-0-6-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-0-5-x-to-0-6-x"}},[e._v("#")]),e._v(" Upgrading 0.5.X to 0.6.X")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#breaking-changes"}},[e._v("Breaking Changes")])]),a("li",[a("a",{attrs:{href:"#download-files"}},[e._v("Download Files")]),a("ul",[a("li",[a("a",{attrs:{href:"#start-the-daemon"}},[e._v("Start the Daemon")])])])]),a("li",[a("a",{attrs:{href:"#rebuild-containers"}},[e._v("Rebuild Containers")])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Server Restart Required")]),e._v(" "),a("p",[e._v("Your servers will need to be restarted after upgrading the daemon in order to see the expected log output in the Panel.")])]),e._v(" "),a("h2",{attrs:{id:"breaking-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking Changes")]),e._v(" "),a("p",[e._v("This release introduces a few breaking changes to how the Daemon operates, but maintains compatibility with "),a("code",[e._v("v0.7.X")]),e._v(" of\nthe Panel, so you don't need to worry about updating the Panel.")]),e._v(" "),a("p",[e._v("Of notable change in this release is that we've switched from using custom logging functionality to using Docker logging\nfunctionality. This allows us to better output events that happen before we can attach to the container, centralizes logic,\nand allows Docker to manage the logs (which it does very well). Now, when your server refuses to boot, instead of seeing\nan unhelpful \"Server has crashed\" message with nothing before it, you'll see "),a("em",[e._v("everything")]),e._v(" that happened in the container\nleading up to that point, assuming things were output.")]),e._v(" "),a("h2",{attrs:{id:"download-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-files"}},[e._v("#")]),e._v(" Download Files")]),e._v(" "),a("p",[e._v("To upgrade from v0.5.X first switch the directory where you installed your Daemon. If you followed the installation\nguide your Daemon is most likely located in "),a("code",[e._v("/srv/daemon")]),e._v(". Then, download and unpack the archive using the\ncommand below.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),a("p",[e._v("Stop your Daemon process before continuing in order to avoid any issues and ensure everything updates as expected.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl stop wings\n")])])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://github.com/pterodactyl/daemon/releases/download/v0.6.13/daemon.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" --strip-components"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -xzv\n")])])]),a("p",[e._v("Then, update the core dependencies for the Daemon with the following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" update --only"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("production\n")])])]),a("h3",{attrs:{id:"start-the-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-daemon"}},[e._v("#")]),e._v(" Start the Daemon")]),e._v(" "),a("p",[e._v("Finally, start your daemon up, most likely with the command below.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("systemctl start wings\n")])])]),a("h2",{attrs:{id:"rebuild-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebuild-containers"}},[e._v("#")]),e._v(" Rebuild Containers")]),e._v(" "),a("p",[e._v("Because of some changes we made behind the scenes when it comes to displaying server output you'll need to rebuild and\nrestart all of your servers. The rebuild step is required, the restart step is optional, but highly recommended otherwise\nyou will not be able to see any console output.")]),e._v(" "),a("p",[e._v("Run the following commands "),a("em",[e._v("from the Panel server")]),e._v(" in order to perform a mass rebuild and restart. Replace "),a("code",[e._v("###")]),e._v(" with the\nID of the node you just upgraded, or remove the "),a("code",[e._v("--node")]),e._v(" flag entirely to rebuild on all nodes.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan p:server:rebuild --node"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("###")]),e._v("\n")])])]),a("p",[e._v("Then, restart all of the servers using the following command, or by manually restarting them one at a time in the Panel.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan p:server:bulk-power restart --nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("###")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);