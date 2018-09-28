## Install MongoDB Community Edition on Ubuntu
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Using .deb Packages (Recommended)
1. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

2. echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

3. sudo apt-get update

4. sudo apt-get install -y mongodb-org

## Run MongoDB Community Edition
> The MongoDB instance stores its data files in /var/lib/mongodb and its log files in /var/log/mongodb by default,
and runs using the mongodb user account.
You can specify alternate log and data file directories in /etc/mongod.conf.

1. Start MongoDB.
```
sudo service mongod start
```

2. Verify that MongoDB has started successfully
Verify that the mongod process has started successfully by checking
the contents of the log file at /var/log/mongodb/mongod.log for a line reading

3. Stop MongoDB.
```
sudo service mongod stop
```

4. Restart MongoDB.¶
```
sudo service mongod restart
```

5. Begin using MongoDB.
Start a mongo shell on the same host machine as the mongod. Use the --host command line option to specify the localhost address
(in this case 127.0.0.1) and port that the mongod listens on:
```
mongo --host 127.0.0.1:27017
```
Later, to stop MongoDB, press Control+C in the terminal where the mongod instance is running.

## Uninstall MongoDB Community Edition





