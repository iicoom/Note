# process

## Process

> The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require\(\).
>
> The process object is an instance of EventEmitter.

### process.env

The process.env property returns an object containing the user environment. See environ\(7\).

An example of this object looks like:

```text
{
  NODE: '/Users/mxj/.nvm/versions/node/v9.2.0/bin/node',
  INIT_CWD: '/Users/mxj/Work/ucenter_v2',
  npm_package_homepage: 'https://github.com/rusty1s/koa2-rest-api#readme',
  NVM_CD_FLAGS: '-q',
  npm_config_globalignorefile: '/Users/mxj/.nvm/versions/node/v9.2.0/etc/npmignore',
  TERM: 'xterm-256color',
  SHELL: '/bin/zsh',
  npm_config_metrics_registry: 'https://registry.npm.taobao.org/',
  npm_package_dependencies_koa: '2.0.0',
  TMPDIR: '/var/folders/jl/3r2_6sln0qq5y4vyq_1883nh0000gn/T/',
  npm_config_timing: '',
  npm_config_init_license: 'ISC',
  npm_package_devDependencies_supertest: '2.0.0',
  Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.zLgCLlyj4b/Render',
  npm_config_if_present: '',
  npm_package_devDependencies_babel_polyfill: '6.13.0',
  TERM_PROGRAM_VERSION: '3.1.4',
  TERM_SESSION_ID: 'w0t2p0:529A684E-29B9-4085-AAF4-16DBF9B17908',
  ZSH: '/Users/mxj/.oh-my-zsh',
  npm_package_description: 'Starter project for an ES6 RESTFul Koa2 API with Mongoose and OAuth2',
  NVM_DIR: '/Users/mxj/.nvm',
  USER: 'mxj',
  _: '/Users/mxj/.nvm/versions/node/v9.2.0/bin/node',
  PWD: '/Users/mxj/Work/ucenter_v2',
  LANG: 'zh_CN.UTF-8',
  NODE_ENV: 'development',
  SHLVL: '4',
  HOME: '/Users/mxj',
  COLORFGBG: '7;0',
  PORT: '3004',
  DEBUG: 'koa-redis,koa-generic-session',
  npm_package_betterScripts_start_functional_env_NODE_ENV: 'functional',
  COLORTERM: 'truecolor' 
}
```

常用到的参数： process.env.PORT process.env.NODE\_ENV

## process.argv

The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.

```text
[ '/Users/mxj/.nvm/versions/node/v9.2.0/bin/node',
  '/Users/mxj/Work/ucenter_v2/index.js' ]
```

## Event: 'exit'

The 'exit' event is emitted when the Node.js process is about to exit as a result of either:

The process.exit\(\) method being called explicitly; The Node.js event loop no longer having any additional work to perform.

```text
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
```

To exit with a 'failure' code:

```text
process.exit(1);
```

The shell that executed Node.js should see the exit code as 1.

In most situations, it is not actually necessary to call process.exit\(\) explicitly. The Node.js process will exit on its own if there is no additional work pending in the event loop. The process.exitCode property can be set to tell the process which exit code to use when the process exits gracefully.

## Exit Codes

Node.js will normally exit with a 0 status code when no more async operations are pending. The following status codes are used in other cases: 1 Uncaught Fatal Exception - There was an uncaught exception, and it was not handled by a domain or an 'uncaughtException' event handler. 2 - Unused \(reserved by Bash for builtin misuse\) 3 Internal JavaScript Parse Error - The JavaScript source code internal in Node.js's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during development of Node.js itself. 4 Internal JavaScript Evaluation Failure - The JavaScript source code internal in Node.js's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during development of Node.js itself. 5 Fatal Error - There was a fatal unrecoverable error in V8. Typically a message will be printed to stderr with the prefix FATAL ERROR.

## Event: 'rejectionHandled'

The 'rejectionHandled' event is emitted whenever a Promise has been rejected and an error handler was attached to it \(using promise.catch\(\), for example\) later than one turn of the Node.js event loop.

```text
const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, p) => {
  unhandledRejections.set(p, reason);
});
process.on('rejectionHandled', (p) => {
  unhandledRejections.delete(p);
});
```

In this example, the unhandledRejections Map will grow and shrink over time, reflecting rejections that start unhandled and then become handled. It is possible to record such errors in an error log, either periodically \(which is likely best for long-running application\) or upon process exit \(which is likely most convenient for scripts\).

## process.memoryUsage\(\)

The process.memoryUsage\(\) method returns an object describing the memory usage of the Node.js process measured in bytes.

console.log\(process.memoryUsage\(\)\); Will generate:

```text
{
  rss: 4935680,
  heapTotal: 1826816,
  heapUsed: 650472,
  external: 49879
}
```

heapTotal and heapUsed refer to V8's memory usage. external refers to the memory usage of C++ objects bound to JavaScript objects managed by V8. rss, Resident Set Size, is the amount of space occupied in the main memory device \(that is a subset of the total allocated memory\) for the process, which includes the heap, code segment and stack.

## process.nextTick\(callback\[, ...args\]\)

The process.nextTick\(\) method adds the callback to the "next tick queue". Once the current turn of the event loop turn runs to completion, all callbacks currently in the next tick queue will be called.

This is not a simple alias to setTimeout\(fn, 0\). It is much more efficient. It runs before any additional I/O events \(including timers\) fire in subsequent ticks of the event loop.

```text
console.log('start');
process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');
// Output:
// start
// scheduled
// nextTick callback
```

## process.uptime\(\)

The process.uptime\(\) method returns the number of seconds the current Node.js process has been running.

Note: The return value includes fractions of a second. Use Math.floor\(\) to get whole seconds.

