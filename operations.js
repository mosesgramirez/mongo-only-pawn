// insert, find, update, remove docs (note CRUD parallel)

exports.insertDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    // note: we deleted the callback because the Node Driver API natively supports promises. insertOne will return a promise by default.
    return coll.insertOne(document);
};

exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find().toArray();
};

exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
    // $set lets MongoDB know that we want to overwrite
    return coll.updateOne(document, { $set: update }, null);
};

exports.removeDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

