const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

forked.send({ hello: 'world' });


/*
PS E:\Joy\Note\Nodejs\Process\进程间通信> node .\parent.js
Message from parent: { hello: 'world' }
Message from child { counter: 0 }
Message from child { counter: 1 }
Message from child { counter: 2 }
Message from child { counter: 3 }
Message from child { counter: 4 }
Message from child { counter: 5 }
Message from child { counter: 6 }
Message from child { counter: 7 }
Message from child { counter: 8 }
Message from child { counter: 9 }
Message from child { counter: 10 }
Message from child { counter: 11 }
*/

/*
In the parent file above, we fork child.js (which will execute the file with the node command) and then we listen for the message event. 
The message event will be emitted whenever the child uses process.send, which we’re doing every second.

To pass down messages from the parent to the child, we can execute the send function on the forked object itself, 
and then, in the child script, we can listen to the message event on the global process object.
*/