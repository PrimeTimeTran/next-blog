- To connect run:
  mysql -u root

- To start mysql now and restart at login:
  brew services start mysql

- Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/mysql/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql
