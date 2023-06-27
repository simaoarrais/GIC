import { MongoClient, ObjectId } from "mongodb";
let db;

try {
  // Connection URL and database name
  const url = 'mongodb://mongodb:27017';
  const dbName = process.env.MONGO_DATABASE || 'GIC';
  const client = new MongoClient(url);
  // Connect to MongoDB
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }
  });
  db = client.db(dbName);
} catch (error) {
  // Handle the error
  console.error("Error connecting to MongoDB:", error);
}
export { db, ObjectId };
