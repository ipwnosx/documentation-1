(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{405:function(t,e,n){"use strict";n.r(e);var a=n(46),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"webserver-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webserver-configuration"}},[t._v("#")]),t._v(" Webserver Configuration")]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("This Version is End-of-Life")]),t._v(" "),n("p",[t._v("This documentation is for "),n("strong",[t._v("end-of-life software")]),t._v(" which does not recieve any security updates or support\nfrom the community. This documentation has been left accessible for historial reasons.")]),t._v(" "),n("p",[t._v("You should be installing and using "),n("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[t._v("Pterodactyl Panel 1.0")]),t._v(" in production environments.")],1)]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#nginx"}},[t._v("NGINX")]),n("ul",[n("li",[n("a",{attrs:{href:"#nginx-with-ssl"}},[t._v("NGINX With SSL")])]),n("li",[n("a",{attrs:{href:"#nginx-without-ssl"}},[t._v("NGINX Without SSL")])]),n("li",[n("a",{attrs:{href:"#enabling-configuration"}},[t._v("Enabling Configuration")])])])]),n("li",[n("a",{attrs:{href:"#apache"}},[t._v("Apache")]),n("ul",[n("li",[n("a",{attrs:{href:"#apache-with-ssl"}},[t._v("Apache With SSL")])]),n("li",[n("a",{attrs:{href:"#apache-without-ssl"}},[t._v("Apache Without SSL")])]),n("li",[n("a",{attrs:{href:"#enabling-configuration"}},[t._v("Enabling Configuration")])])])])])]),n("p"),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),n("p",[t._v("You should remove the default Apache or NGINX configuration as it will expose application secrets to malicious\nusers by default.")])]),t._v(" "),n("h2",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" NGINX")]),t._v(" "),n("p",[t._v("You should paste the contents of the file below, replacing "),n("code",[t._v("<domain>")]),t._v(" with your domain name being used in a file called\n"),n("code",[t._v("pterodactyl.conf")]),t._v(" and place it in "),n("code",[t._v("/etc/nginx/sites-available/")]),t._v(", or — if on CentOS, "),n("code",[t._v("/etc/nginx/conf.d/")]),t._v(".")]),t._v(" "),n("h3",{attrs:{id:"nginx-with-ssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-with-ssl"}},[t._v("#")]),t._v(" NGINX With SSL")]),t._v(" "),n("p",[t._v("This configuration assumes that you will be using SSL on both the Panel and Daemons for significantly improved communication\nsecurity between users and the Panel. You will need to get a valid SSL certificate which can be done for free by using\nLet's Encrypt.")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("When using the SSL configuration you MUST create SSL certificates, otherwise your NGINX will fail to start.  See "),n("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("Creating SSL Certificates")]),t._v(" documentation page for how to create these certificates before continuing.")],1)]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php7.2-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),n("p",[t._v("Continue reading to the bottom of this section for the final steps with NGINX!")]),t._v(" "),n("h3",{attrs:{id:"nginx-without-ssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-without-ssl"}},[t._v("#")]),t._v(" NGINX Without SSL")]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('server {\n    listen 80;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.html index.htm index.php;\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location = /favicon.ico { access_log off; log_not_found off; }\n    location = /robots.txt  { access_log off; log_not_found off; }\n\n    access_log off;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php7.2-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),n("h3",{attrs:{id:"enabling-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration"}},[t._v("#")]),t._v(" Enabling Configuration")]),t._v(" "),n("p",[t._v("The final step is to enable your NGINX configuration and restart it.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You do not need to symlink this file if you are using CentOS.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You need to restart nginx regardless of OS.")]),t._v("\nsystemctl restart nginx\n")])])]),n("h2",{attrs:{id:"apache"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),n("p",[t._v("You should paste the contents of the file below, replacing "),n("code",[t._v("<domain>")]),t._v(" with your domain name being used in a file called\n"),n("code",[t._v("pterodactyl.conf")]),t._v(" and place it in "),n("code",[t._v("/etc/apache2/sites-available")]),t._v(", or — if on CentOS, "),n("code",[t._v("/etc/httpd/conf.d/")]),t._v(".")]),t._v(" "),n("p",[t._v("Note: When using Apache, make sure you have the "),n("code",[t._v("libapache2-mod-php")]),t._v(" package installed or else PHP will not display on your webserver.")]),t._v(" "),n("h3",{attrs:{id:"apache-with-ssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache-with-ssl"}},[t._v("#")]),t._v(" Apache With SSL")]),t._v(" "),n("p",[t._v("Like the nginx configuration, this assumes you will be using SSL on both the Panel and Daemons for improved security.")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("When using the SSL configuration you MUST create SSL certificates, otherwise your Apache will fail to start.  See "),n("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("Creating SSL Certificates")]),t._v(" documentation page for how to create these certificates before continuing.")],1)]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<VirtualHost *:80>\n  ServerName <domain>\n  RewriteEngine On\n  RewriteCond %{HTTPS} !=on\n  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n</VirtualHost>\n<VirtualHost *:443>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n  AllowEncodedSlashes On\n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n  <Directory "/var/www/pterodactyl/public">\n    AllowOverride all\n  </Directory>\n  SSLEngine on\n  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem\n  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem\n</VirtualHost> \n')])])]),n("h3",{attrs:{id:"apache-without-ssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apache-without-ssl"}},[t._v("#")]),t._v(" Apache Without SSL")]),t._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<VirtualHost *:80>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n  AllowEncodedSlashes On\n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n  <Directory "/var/www/pterodactyl/public">\n    AllowOverride all\n  </Directory>\n</VirtualHost>\n')])])]),n("h3",{attrs:{id:"enabling-configuration-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-2"}},[t._v("#")]),t._v(" Enabling Configuration")]),t._v(" "),n("p",[t._v("Once you've created the file above, simply run the commands below. If you are on CentOS "),n("em",[t._v("you do not need to run the commands\nbelow!")]),t._v(" You only need to run "),n("code",[t._v("systemctl restart httpd")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You do not need to run any of these commands on CentOS")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" a2enmod rewrite\nsystemctl restart apache2\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);