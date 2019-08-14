# module

## node-supervisor

Node Supervisor is used to restart programs when they crash. It can also be used to restart programs when a _.js_ file changes.

```text
Usage:
  supervisor [options] <program>
  supervisor [options] -- <program> [args ...]

Required:
  <program>
    The program to run.
```

for example:

```text
"scripts": {
    "start": "NODE_ENV=development DEBUG=koa-my supervisor -- app.js --harmony  --watch '.'",
    "online": "NODE_ENV=production DEBUG=koa-my supervisor -- app.js --harmony"
  },
```

## jsonwebtoken

An implementation of JSON Web Tokens.

## file-size

File-size module for node.js for converting, manipulating, and handling file-sizes.

* Zero Dependencies.
* Supports IEC \(power 1024, default\), SI \(power 1000\), and JEDEC \(Alternative SI Unit Notation\).
* Conversion from bytes to K, M, G, and so forth...
* Customizable human-readable output.

```text
var filesize = require('file-size');
filesize(Number bytes, Object options)

// outputs: 177.82 MiB
filesize(186457865).human();

// outputs: 186.46 MB
filesize(186457865).human('jedec');
```

