const MongoClient = require('mongodb').MongoClient;


// Connection url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'crm';

// Connect using MongoClient
MongoClient.connect(url, async (err, client) => {

    // Create a collection we want to drop later
    const col = client.db(dbName).collection('role');

    // Show that duplicate records got dropped
    col.find({}).toArray(function(err, items) {
        console.log('items.length', items.length)
        client.close();
    });
    // const roleList = await col.find({}).toArray()
    // console.log('roleList:', roleList)
    // client.close();
});