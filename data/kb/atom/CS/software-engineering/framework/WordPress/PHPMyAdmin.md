# PHPMyAdmin Setup Local

- MacOS
- /opt/homebrew/etc/httpd/httpd.conf

Add the following

```
<IfModule ssl_module>
SSLRandomSeed startup builtin
SSLRandomSeed connect builtin
{'</IfModule>'}

Alias /phpmyadmin /opt/homebrew/share/phpmyadmin

<Directory "/opt/homebrew/share/phpmyadmin">
Options Indexes FollowSymLinks MultiViews
AllowOverride All
Order allow,deny
Allow from all
Require all granted
{'</Directory>'}

LoadModule php_module /opt/homebrew/opt/php/lib/httpd/modules/libphp.so
AddType application/x-httpd-php .php
DirectoryIndex index.php index.html
```

Restart apachectl

```
sudo apachectl restart
```

Credentials are MySQL/MariaDB username and password
