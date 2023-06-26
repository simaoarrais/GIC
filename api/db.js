import { MongoClient, ObjectId } from "mongodb";

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'GIC';
const client = new MongoClient(url);
const db = client.db(dbName)
export { db, ObjectId };
