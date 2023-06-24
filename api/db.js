import { MongoClient } from "mongodb";

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'GIC';

const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export default connectToMongoDB;
