在MongoDB中，对单个文档的操作是原子的。因为您可以使用嵌入的文档和数组来捕获单个文档结构中数据之间的关系，而不是跨多个文档和集合进行规范化，因此在许多实际用例中，这种单文档原子性消除了多文档事务的需要。

对于需要对多个文档(在单个或多个集合中)进行原子性读写的情况，MongoDB支持多文档事务。对于分布式事务，可以跨多个操作、集合、数据库、文档和碎片使用事务。

For situations that require atomicity of reads and writes to multiple documents (in a single or multiple collections), MongoDB supports multi-document transactions:

- In version 4.0, MongoDB supports multi-document transactions on replica sets.

- In version 4.2, MongoDB introduces distributed transactions, which adds support for multi-document transactions on sharded clusters and incorporates the existing support for multi-document transactions on replica sets.
To use transactions on MongoDB 4.2 deployments(replica sets and sharded clusters), clients must use MongoDB drivers updated for MongoDB 4.2.

```js
// For a replica set, include the replica set name and a seedlist of the members in the URI string; e.g.
  // const uri = 'mongodb://mongodb0.example.com:27017,mongodb1.example.com:27017/?replicaSet=myRepl'
  // For a sharded cluster, connect to the mongos instances; e.g.
  // const uri = 'mongodb://mongos0.example.com:27017,mongos1.example.com:27017/'

  const client = new MongoClient(uri);
  await client.connect();

  // Prereq: Create collections.

  await client
    .db('mydb1')
    .collection('foo')
    .insertOne({ abc: 0 }, { w: 'majority' });

  await client
    .db('mydb2')
    .collection('bar')
    .insertOne({ xyz: 0 }, { w: 'majority' });

  // Step 1: Start a Client Session
  const session = client.startSession();

  // Step 2: Optional. Define options to use for the transaction
  const transactionOptions = {
    readPreference: 'primary',
    readConcern: { level: 'local' },
    writeConcern: { w: 'majority' }
  };

  // Step 3: Use withTransaction to start a transaction, execute the callback, and commit (or abort on error)
  // Note: The callback for withTransaction MUST be async and/or return a Promise.
  try {
    await session.withTransaction(async () => {
      const coll1 = client.db('mydb1').collection('foo');
      const coll2 = client.db('mydb2').collection('bar');

      // Important:: You must pass the session to the operations

      await coll1.insertOne({ abc: 1 }, { session });
      await coll2.insertOne({ xyz: 999 }, { session });
    }, transactionOptions);
  } finally {
    await session.endSession();
    await client.close();
	}
	```