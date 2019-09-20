## Ecosystem File
The object has two properties:
* apps, an array that contains the configuration for each process
* deploy, an object that contains the configuration for the deployments

This will generate and ecosystem.config.js file:
```
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
     name: 'worker',
     script: 'worker.js'
  }]
}
```

有配置文件的情况：
// To start this app in a particular environment, use the --env flag:
// pm2 start ecosystem.config.js                  # uses variables from `env`
// pm2 start ecosystem.config.js --env production # uses variables from `env_production`