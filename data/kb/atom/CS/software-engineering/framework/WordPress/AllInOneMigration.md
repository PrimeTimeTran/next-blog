# Useful for syncing prod & local apps including DB

Add to `wp-config.php`

```
define('WP_MEMORY_LIMIT', '512M'); // Increase PHP memory limit
define('WP_MAX_MEMORY_LIMIT', '512M'); // Increase maximum PHP memory limit
define('WP_MAX_UPLOAD_FILESIZE', '64M'); // Increase maximum file upload size
define('WP_MAX_MEMORY_LIMIT', '512M'); // Increase maximum PHP memory limit
```

php.ini

```
memory_limit = 512M
max_execution_time = 300
post_max_size = 64M
upload_max_filesize = 64M
```

.htaccess

```
php_value memory_limit 512M
php_value max_execution_time 300
php_value post_max_size 64M
php_value upload_max_filesize 64M
```

/var/www/html/wp-content/ai1wm-backups/35.240.156.96-20240709-170541-466.wpress

/var/www/html/wp-content/ai1wm-backups/35.240.156.96-20240709-170541-466.wpress

scp username@remote_host:/path/to/remote/file /path/to/local/destination
