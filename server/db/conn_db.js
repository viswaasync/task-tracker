import { MongoClient } from "mongodb";

// const connectionString = process.env.ATLAS_URI || "";
// const connectionString = "mongodb://localhost:27017";
const connectionString = "mongodb+srv://mongo-admin:y7eKoEm0QyDedQKg@cluster-task-tracker.cu3lrsz.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("task_tracker");

export default db;