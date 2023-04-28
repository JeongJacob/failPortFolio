import { MongoClient } from "mongodb";
const url = process.env.MONGODB_URI;
const options = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo && url) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  if (url) connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
