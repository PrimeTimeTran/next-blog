## Init New Site

- Create User
  CREATE USER 'loi'@'localhost' IDENTIFIED BY 'asdf!123';

- Create DB
  CREATE DATABASE helloworld;

- Grant privileges
  GRANT ALL PRIVILEGES ON helloworld.\* TO 'loi'@'localhost';

- Flush privileges
  FLUSH PRIVILEGES;

- Start server
  wp server

- Create account
  site:
  demo
  username:
  primetimetran
  pw:
  fu&fh)4&&jpyUajS1&

```sql
CREATE USER 'loi'@'localhost' IDENTIFIED BY 'asdf!123';
CREATE DATABASE helloworld;
GRANT ALL PRIVILEGES ON helloworld.* TO 'loi'@'localhost';
FLUSH PRIVILEGES;
```

## Deploy

- File Manager Plugin

  - To change the maximum size file that can be uploaded

- Install Plugin: All in One WP Migration on local WP site 6.77?
  - https://chinedudigital.com/all-in-one-wp-migration-import-stuck/
  - To export a copy of local site to a file which can be uploaded to remote server
- Export file on local host

- Create GCP Cloud Compute VM Instance
- Install Plugin: All in One WP Migration on GCP Cloud Compute WP site 6.77?
  - https://chinedudigital.com/all-in-one-wp-migration-import-stuck/
- Install the older version of the plugin
- Update Constants.php
  - From WP File Manager(in sidebar, then search constants.php)
    - OR
  - From Plugins > Plugin File Editor
  ***
  - Search Constants.php
  - Change line 282 to bigger value.
- Import/Upload local .wpress file to remote GCP cloud computer WP instance

- Update Storage?
  SSH into
  /var/www/html
  /var/www/html/wp-config.php

## Plugins

- File Manager Plugin
- All in One WP Migration 6.77
- WooCommerce

## Production host

https://35.240.156.96

# Resources

https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
