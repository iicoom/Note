https://nodejs.org/dist/latest-v12.x/docs/api/child_process.html

![ll](https://cdn-media-1.freecodecamp.org/images/1*I56pPhzO1VQw8SIsv8wYNA.png)

## child_process.exec(): 
spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.

```js
const { exec } = require('child_process');

router.get('/cdkey/rule/cd-key.sql', async (req, res, next) => {
  exec(`mysqldump -h ${userMysqlConfig.host} -P 3306 -u${userMysqlConfig.user} -p'${userMysqlConfig.password}' db_dk_user gm_cdkey_rule gm_cdkey_detail > /doraemon/server/gmtool/cd-key.sql`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const options = {
      root: path.join(__dirname, '../'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      },
    };
    res.sendFile('cd-key.sql', options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log('Sent: dump.sql');
      }
    });
  });
});
```

## 有了child_process 意味着可以在node中执行任何脚本
[How to integrate a Python/Ruby/PHP shell script with Node.js using child_process.spawn](https://www.freecodecamp.org/news/how-to-integrate-a-python-ruby-php-shell-script-with-node-js-using-child-process-spawn-e26ca3268a11/)
```js
const { spawn } = require('child_process')
const logOutput = (name) => (data) => console.log(`[${name}] ${data.toString()}`)
function run() {
  const process = spawn('python', ['./script.py']);
process.stdout.on(
    'data',
    logOutput('stdout')
  );
process.stderr.on(
    'data',
    logOutput('stderr')
  );
}
(() => {
  try {
    run()
    // process.exit(0)
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
})();
```
