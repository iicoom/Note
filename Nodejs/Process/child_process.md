https://nodejs.org/dist/latest-v12.x/docs/api/child_process.html

## child_process.exec(): 
spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.

```
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
