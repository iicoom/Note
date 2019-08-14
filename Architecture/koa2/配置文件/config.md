
## const env = process.env.NODE_ENV;
会根据不同的env，生成不同的配置文件

## Process
> The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().

> The process object is an instance of EventEmitter.

### process.env
The process.env property returns an object containing the user environment. See environ(7).

An example of this object looks like:
```
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
