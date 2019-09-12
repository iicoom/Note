https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

## Mac OS 上安装 PostgreSQL

brew install postgresql

==> Summary
🍺  /usr/local/Cellar/readline/8.0.1: 48 files, 1.5MB
==> Installing postgresql
==> Downloading https://homebrew.bintray.com/bottles/postgresql-11.5_1.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/46/463c6a192a0b6a5d1359b68db24003b2dac6895cdb86c827c41bf03fffd856d6?__gda__=exp=1568280677~hmac=c7e63f4df38f254f1f579b8e3f524e8fbe6e7558363d0866511bdc9b3fc5c890&response-content-disposition=
######################################################################## 100.0%
==> Pouring postgresql-11.5_1.mojave.bottle.tar.gz
==> /usr/local/Cellar/postgresql/11.5_1/bin/initdb --locale=C -E UTF-8 /usr/local/var/postgres
==> Caveats
To migrate existing data from a previous major version of PostgreSQL run:
  brew postgresql-upgrade-database

To have launchd start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start

### start Postgres

pg_ctl -D /usr/local/var/postgres start && brew services start postgresql

Let’s check what version is running:
```
postgres -V
```
➜  ~ postgres -V
\postgres (PostgreSQL) 11.5
