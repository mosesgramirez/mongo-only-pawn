const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;

const url = 'mongodb://localhost:27017/';
const dbname = 'nucampsite';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    // Abrupt error handler, basically if (err === null) then throw error else continue.
    assert.strictEqual(err, null);
    console.log('Connected correctly to db server')

    const db = client.db(dbname);

    db.dropCollection('campsites', (err, result) => {
        assert.strictEqual(err, null);
        console.log('Dropped collection: ', result);

        const collection = db.collection('campsites');

        collection.insertOne({ name: "Breadcrumb Trail Campground", description: "Test" }, (err, result) => {
            assert.strictEqual(err, null);
            console.log('Insert document: ', result.ops);
            // empty param will print all docs; toArray() is mongodb driver method
            collection.find().toArray((err, docs) => {
                assert.strictEqual(err, null);
                console.log('Found Documents: ', docs);
                // will close client session
                client.close();
            });
        });
    });
});