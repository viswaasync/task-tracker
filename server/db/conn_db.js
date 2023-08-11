import { MongoClient } from "mongodb";

// const connectionString = process.env.ATLAS_URI || "";
const connectionString = "mongodb://localhost:27017";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("task_tracker");

export default db;