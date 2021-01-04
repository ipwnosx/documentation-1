(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{403:function(e,t,a){"use strict";a.r(t);var s=a(46),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading-0-7-series-to-1-0-series"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-0-7-series-to-1-0-series"}},[e._v("#")]),e._v(" Upgrading 0.7 Series to 1.0 Series")]),e._v(" "),a("p",[e._v("This upgrade guide is for "),a("strong",[e._v("upgrading from 0.7.X to 1.1.0")]),e._v(". If you are trying to do an upgrade on a 1.X Panel\nplease "),a("RouterLink",{attrs:{to:"/panel/1.0/upgrade/1.0.html"}},[e._v("use this guide instead")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("No Downgrade Path")]),e._v(" "),a("p",[e._v("There is no officially supported downgrade pathway. "),a("strong",[e._v("DO NOT")]),e._v(" install this release if you are not prepared\nto be fully comitted to it.")])]),e._v(" "),a("h2",{attrs:{id:"enter-maintenance-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enter-maintenance-mode"}},[e._v("#")]),e._v(" Enter Maintenance Mode")]),e._v(" "),a("p",[e._v("You'll want to put your Panel into maintenance mode by running the "),a("code",[e._v("down")]),e._v(" command below before starting. This\nwill prevent users from accessing the Panel during a period where things will be broken or not working correctly. Make sure that you're in the "),a("code",[e._v("/var/www/pterodactyl")]),e._v(" directory when executing the command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Put the Panel into maintenance mode and deny user access")]),e._v("\nphp artisan down\n")])])]),a("h2",{attrs:{id:"update-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies"}},[e._v("#")]),e._v(" Update Dependencies")]),e._v(" "),a("p",[e._v("You'll need to make sure your system dependencies are up to date before performing this upgrade. Please\nreference the list below to ensure you have all of the required versions.")]),e._v(" "),a("ul",[a("li",[e._v("PHP "),a("code",[e._v("7.3+")]),e._v(" ("),a("code",[e._v("7.4")]),e._v(" recommended) with the following extensions: "),a("code",[e._v("cli")]),e._v(", "),a("code",[e._v("openssl")]),e._v(", "),a("code",[e._v("gd")]),e._v(", "),a("code",[e._v("mysql")]),e._v(", "),a("code",[e._v("PDO")]),e._v(", "),a("code",[e._v("mbstring")]),e._v(", "),a("code",[e._v("tokenizer")]),e._v(", "),a("code",[e._v("bcmath")]),e._v(", "),a("code",[e._v("xml")]),e._v(" or "),a("code",[e._v("dom")]),e._v(", "),a("code",[e._v("curl")]),e._v(", "),a("code",[e._v("zip")]),e._v(", and "),a("code",[e._v("fpm")]),e._v(" if you are planning to use nginx")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Nginx")]),e._v(" "),a("p",[e._v("If you upgrade your PHP version and are using nginx as your webserver, you will have to update the\n"),a("code",[e._v("fastcgi_pass")]),e._v(" value in your nginx's "),a("code",[e._v("pterodactyl.conf")]),e._v(" configuration to use the correct "),a("code",[e._v("php-fpm")]),e._v(" socket.")])]),e._v(" "),a("ul",[a("li",[e._v("MySQL "),a("code",[e._v("5.7.22")]),e._v(" or higher (MySQL "),a("code",[e._v("8")]),e._v(" recommended) "),a("strong",[e._v("or")]),e._v(" MariaDB "),a("code",[e._v("10.2")]),e._v(" or higher.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Seriously, Double Check your Database Version")]),e._v(" "),a("p",[e._v("Please make sure you are running the correct version of MariaDB or MySQL listed above! Failure to do so "),a("em",[e._v("will")]),e._v("\nresult in an error when you attempt to run the migrations.")]),e._v(" "),a("p",[e._v("Previous documentation (and just the age of this software) likely had you installing MariaDB 10.1 which "),a("em",[e._v("will not\nwork")]),e._v(" with this version of Pterodactyl.")])]),e._v(" "),a("h2",{attrs:{id:"fetch-updated-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-updated-files"}},[e._v("#")]),e._v(" Fetch Updated Files")]),e._v(" "),a("p",[e._v("The first step in the update process is to download the new panel files from GitHub. The command below will download\nthe release archive for the most recent version of Pterodactyl and save it in the current directory. Now is a good time\nto ensure that you're in the "),a("code",[e._v("/var/www/pterodactyl")]),e._v(" directory as the command below will automatically unpack the archive\ninto your current folder.")]),e._v(" "),a("p",[e._v("We will also be deleting the "),a("code",[e._v("app/")]),e._v(" directory. Because of the way we handle installations and upgrades deleted files\nare not always detected properly, so simply uppacking over this location will result in some confusing behavior.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete the app directory to ensure we start with a clean slate here. This will not affect any")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# of your settings or servers.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L -o panel.tar.gz https://github.com/pterodactyl/panel/releases/download/v1.2.0/panel.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),e._v(" app public resources -depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("head")]),e._v(" -n -1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -Fv "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -tf panel.tar.gz"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Download the updated files and delete the archive file.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xzvf panel.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -f panel.tar.gz\n")])])]),a("p",[e._v("Once all of the files are downloaded we need to set the correct permissions on the cache and storage directories to avoid\nany webserver related errors.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" storage/* bootstrap/cache\n")])])]),a("h2",{attrs:{id:"update-dependencies-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies-2"}},[e._v("#")]),e._v(" Update Dependencies")]),e._v(" "),a("p",[e._v("After you've downloaded all of the new files you will need to upgrade the core components of the panel. To do this,\nsimply run the commands below and follow any prompts.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("composer "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev --optimize-autoloader\n")])])]),a("h2",{attrs:{id:"clear-compiled-template-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-compiled-template-cache"}},[e._v("#")]),e._v(" Clear Compiled Template Cache")]),e._v(" "),a("p",[e._v("You'll also want to clear the compiled template cache to ensure that new and modified templates show up correctly for\nusers.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan view:clear\nphp artisan config:clear\n")])])]),a("h2",{attrs:{id:"database-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-updates"}},[e._v("#")]),e._v(" Database Updates")]),e._v(" "),a("p",[e._v("You'll also need to update your database schema for the newest version of Pterodactyl. Running the two commands below\nwill update the schema and ensure the default eggs we ship are up to date (and add any new ones we might have). Just\nremember, "),a("em",[e._v("never edit core eggs we ship")]),e._v("! They will be overwritten by this update process.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you used a custom plugin that allowed for server transfers on "),a("code",[e._v("0.7")]),e._v(" you "),a("strong",[e._v("MUST")]),e._v(" delete or rename the "),a("code",[e._v("server_transfers")]),e._v(" table\nbefore continuing.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan migrate --force\nphp artisan db:seed --force\n")])])]),a("h2",{attrs:{id:"set-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-permissions"}},[e._v("#")]),e._v(" Set Permissions")]),e._v(" "),a("p",[e._v("The last step is to set the proper owner of the files to be the user that runs your webserver. In most cases this\nis "),a("code",[e._v("www-data")]),e._v(" but can vary from system to system — sometimes being "),a("code",[e._v("nginx")]),e._v(", "),a("code",[e._v("apache")]),e._v(", or even "),a("code",[e._v("nobody")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX or Apache (not on CentOS):")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R www-data:www-data *\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX on CentOS:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R nginx:nginx *\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using Apache on CentOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R apache:apache *\n")])])]),a("h2",{attrs:{id:"restarting-queue-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restarting-queue-workers"}},[e._v("#")]),e._v(" Restarting Queue Workers")]),e._v(" "),a("p",[e._v("After "),a("em",[e._v("every")]),e._v(" update you should restart the queue worker to ensure that the new code is loaded in and used.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan queue:restart\n")])])]),a("h2",{attrs:{id:"exit-maintenance-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exit-maintenance-mode"}},[e._v("#")]),e._v(" Exit Maintenance Mode")]),e._v(" "),a("p",[e._v("Now that the upgrade is complete, exit maintenance mode and your Panel will now be available.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Bring the Panel back up to receive connections.")]),e._v("\nphp artisan up\n")])])]),a("h2",{attrs:{id:"switch-to-wings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-to-wings"}},[e._v("#")]),e._v(" Switch to Wings")]),e._v(" "),a("p",[e._v("We've deprecated the old Node.js daemon in favor of "),a("a",{attrs:{href:"https://github.com/pterodactyl/wings",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wings"),a("OutboundLink")],1),e._v(", our new server\ncontrol plane written in Go. This new system is significantly faster, easier to install, and much smaller. All you\nneed to do is install a single binary on your system and configure it to run on boot.")]),e._v(" "),a("p",[a("strong",[e._v("You cannot use the old daemon to run servers with Pterodactyl Panel 1.0.")])]),e._v(" "),a("p",[e._v("Please see "),a("RouterLink",{attrs:{to:"/wings/1.0/migrating.html"}},[e._v("Migrating to Wings")]),e._v(" for instructions.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);