const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://anivinderreddy16:u3bU0cogCu2asQq3@cluster0.zskjvtf.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
