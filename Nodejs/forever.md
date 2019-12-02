https://github.com/foreversd/forever#readme

## Command Line Usage
You can use forever to run scripts continuously (whether it is written in node.js or not).

```
forever start app.js
```

## $ forever --help
```
usage: forever [action] [options] SCRIPT [script-options]

Monitors the script specified in the current process or as a daemon

actions:
  start               Start SCRIPT as a daemon
  stop                Stop the daemon SCRIPT by Id|Uid|Pid|Index|Script
  stopall             Stop all running forever scripts
  restart             Restart the daemon SCRIPT
  restartall          Restart all running forever scripts
  list                List all running forever scripts
  config              Lists all forever user configuration
  set <key> <val>     Sets the specified forever config <key>
  clear <key>         Clears the specified forever config <key>
  logs                Lists log files for all forever processes
  logs <script|index> Tails the logs for <script|index>
  columns add <col>   Adds the specified column to the output in `forever list`
  columns rm <col>    Removed the specified column from the output in `forever list`
  columns set <cols>  Set all columns for the output in `forever list`
  cleanlogs           [CAREFUL] Deletes all historical forever log files
  
  options:
    -m  MAX          Only run the specified script MAX times
    -l  LOGFILE      Logs the forever output to LOGFILE
    -o  OUTFILE      Logs stdout from child script to OUTFILE
    -e  ERRFILE      Logs stderr from child script to ERRFILE
    -p  PATH         Base path for all forever related files (pid files, etc.)
    -c  COMMAND      COMMAND to execute (defaults to node)
    -a, --append     Append logs
    -f, --fifo       Stream logs to stdout
    -n, --number     Number of log lines to print
    --pidFile        The pid file
    --uid            DEPRECATED. Process uid, useful as a namespace for processes (must wrap in a string)
                     e.g. forever start --uid "production" app.js
                         forever stop production
    --id             DEPRECATED. Process id, similar to uid, useful as a namespace for processes (must wrap in a string)
                     e.g. forever start --id "test" app.js
                         forever stop test
    --sourceDir      The source directory for which SCRIPT is relative to
    --workingDir     The working directory in which SCRIPT will execute
    --minUptime      Minimum uptime (millis) for a script to not be considered "spinning"
    --spinSleepTime  Time to wait (millis) between launches of a spinning script.
    --colors         --no-colors will disable output coloring
    ...
```
例子
```
NODE_ENV=production forever start -m 1 --append --silent --minUptime 1000 --spinSleepTime 500 --uid Keeper --id keeper launcher.js config_file=config.json
```
[doraemon@mxj shell]$ forever list
info:    Forever processes running
data:         uid        command                                             script                                                                                                        forever pid   id       logfile                                uptime
data:    [0]  Keeper     /home/doraemon/.nvm/versions/node/v12.13.0/bin/node launcher.js config_file=config.json                                                                           17176   17190 keeper   /
