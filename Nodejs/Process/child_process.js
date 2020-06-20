const { spawn, execFile } = require('child_process');
const ls = spawn('ls', ['-lh', '/e/Joy/Note/Nodejs/Process']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});



const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();


/*
window 系统 需要在 git-bash 中执行
Admin@MXJ-PC MINGW64 /e/Joy/Note/Nodejs/Process (master)
$ node child_process.js
stdout: total 19K
-rw-r--r-- 1 Admin 197121  621 6月  20 14:38 child_process.js
-rw-r--r-- 1 Admin 197121  986 3月   7 15:52 child_process.md
drwxr-xr-x 1 Admin 197121    0 3月   7 15:52 Cluster
-rw-r--r-- 1 Admin 197121 1.3K 3月  16 12:02 process.argv.md
-rw-r--r-- 1 Admin 197121  646 6月  20 13:27 process.js
-rw-r--r-- 1 Admin 197121 6.0K 3月   7 15:52 process.md
-rw-r--r-- 1 Admin 197121  194 3月  16 15:06 process.pwd.js
drwxr-xr-x 1 Admin 197121    0 6月  19 21:08 父子进程通信

child process exited with code 0
stdout: child_process.js
child_process.md
Cluster
process.argv.md
process.js
process.md
process.pwd.js
父子进程通信

stderr:
*/


const execFilea = util.promisify(require('child_process').execFile);
async function getVersion() {
  const { stdout } = await execFilea('node', ['--version']);
  console.log(stdout);
}
getVersion();
// child process exited with code 0
// v12.13.1


// The child_process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like child_process.spawn(),
// a ChildProcess object is returned. 
// The returned ChildProcess will have an additional communication channel built-in that allows messages to be passed back and forth between the parent and child. 
// See subprocess.send() for details.

// When an IPC channel has been established between the parent and child ( i.e. when using child_process.fork()), 
// the subprocess.send() method can be used to send messages to the child process. When the child process is a Node.js instance, 
// these messages can be received via the 'message' event.

// The message goes through serialization and parsing. The resulting message might not be the same as what is originally sent.

// For example, in the parent script:
// parent.js
const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

// Causes the child to print: CHILD got message: { hello: 'world' }
n.send({ hello: 'world' });



// 'sub.js'
process.on('message', (m) => {
  console.log('CHILD got message:', m);
});

// Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
process.send({ foo: 'bar', baz: NaN });
// Child Node.js processes will have a process.send() method of their own that allows the child to send messages back to the parent.