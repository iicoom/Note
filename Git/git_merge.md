## git merge --no-ff
```
D:\Work\crm-api>git merge --no-ff b2.1.0
Merge made by the 'recursive' strategy.
 src/controller/flow.js         |  12 ++-
 src/controller/stats.js        |   1 -
 src/controller/student.js      | 205 ++++++++++++++++++++++++++++++++++++++++-
 src/router/student.js          |   3 +
 src/scripts/800/importToCRM.js |  11 ++-
 src/service/payment.js         |   7 ++
 src/service/student.js         |   9 ++
 7 files changed, 238 insertions(+), 10 deletions(-)
```

## git merge (其实根本没有必要加上面的 --no-ff)
```
D:\Work\crm-api>git branch
  b2.0.0
  b2.1.0
  b2.2.0
  b2.2.1
* b2.2.2
  master

D:\Work\crm-api>git merge b2.2.1
Auto-merging src/controller/student.js
Merge made by the 'recursive' strategy.
 src/controller/stats.js   | 19 ++++++++++++++-----
 src/controller/student.js |  1 -
 2 files changed, 14 insertions(+), 6 deletions(-)
```