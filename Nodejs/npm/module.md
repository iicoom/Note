## node-supervisor
Node Supervisor is used to restart programs when they crash.
It can also be used to restart programs when a *.js* file changes.

```
Usage:
  supervisor [options] <program>
  supervisor [options] -- <program> [args ...]

Required:
  <program>
    The program to run.
```

for example:
```
"scripts": {
    "start": "NODE_ENV=development DEBUG=koa-my supervisor -- app.js --harmony  --watch '.'",
    "online": "NODE_ENV=production DEBUG=koa-my supervisor -- app.js --harmony"
  },
```

## jsonwebtoken
An implementation of JSON Web Tokens.