// insert, find, update, remove docs (note CRUD parallel)

const assert = require('assert').strict;

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insertOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
        // We'll define this callback later.
    });
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find().toArray((err, docs) => {
        assert.strictEqual(err, null);
        callback(docs);
    });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    // $set lets MongoDB know that we want to overwrite
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};

