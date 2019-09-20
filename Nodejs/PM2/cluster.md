http://pm2.keymetrics.io/docs/usage/cluster-mode/

> The cluster mode allows networked Node.js applications (http(s)/tcp/udp server) to be scaled accross all CPUs available, without any code modifications. This greatly increases the performance and reliability of your applications, depending on the number of CPUs available. 

Under the hood, this uses the Node.js cluster module such that the scaled application’s child processes can automatically share server ports.

## Node.js Cluster
https://nodejs.org/api/cluster.html

A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.

The cluster module allows easy creation of child processes that all share server ports.

```
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('hello world\n')
    }).listen(8000)

    console.log(`Worker ${process.pid} started`);
}

$ node server.js
Master 3596 is running
Worker 4324 started
Worker 4520 started
Worker 6056 started
Worker 5644 started
```

## Cluster mode
For Node.js applications, PM2 includes an automatic load balancer that will share all HTTP[s]/Websocket/TCP/UDP connections between each spawned processes.

To start an application in Cluster mode:
```
pm2 start app.js -i max
```
max means that PM2 will auto detect the number of available CPUs and run as many processes as possible

## Reload
As opposed to restart, which kills and restarts the process, reload achieves a 0-second-downtime reload.

To reload an app:
```
pm2 reload <app_name>
```

## Graceful Shutdown
In production environment, you may need to wait for remaining queries to be processed or close all connections before exiting the application. 

To Gracefully Shutdown an application you can catch the SIGINT signal (the first signal sent on exit by PM2) and execute actions to wait/clear all these states:

process.on('SIGINT', function() {
   db.stop(function(err) {
     process.exit(err ? 1 : 0);
   });
});