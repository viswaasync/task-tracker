import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { parse } from 'date-fns';

import db from "./db/conn_db.js";
import { ObjectId, Timestamp } from "mongodb";


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
})) 

app.get("/", async (req, res) => {
	let results = "Welcome to Task Tracker";
	res.send(results).status(200);
});

const dateConversionStage = {
	$addFields: {
		created_on: { $dateToString: { date: '$created_on', format: '%Y-%m-%d' }},
		updated_on: { $dateToString: { date: '$updated_on', format: '%Y-%m-%d' }}
	}
 };

app.get("/userList", async (req, res) => {
	console.log(Date.now())
	let collection = await db.collection("users_t");

	const results = await collection.aggregate([dateConversionStage]).toArray();
	res.json(results).status(200);
});

app.get("/projList", async (req, res) => {
	let collection = await db.collection("projects_t");
	const results = await collection.aggregate([dateConversionStage]).toArray();
	res.send(results).status(200);
});

app.get("/taskList", async (req, res) => {
	let collection = await db.collection("tasks_t");
	const results = await collection.aggregate([dateConversionStage]).toArray();
	res.json(results).status(200);
});

app.get("/user/:id", async (req, res) => {
	let collection = await db.collection("users_t");
	let query = {_id: new ObjectId(req.params.id)};
	// let result = await collection.findOne(query);
	const query_cond = {
		$match: query
	}
	const result = await collection.aggregate([dateConversionStage, query_cond]).toArray();

	if (!result) res.send("User data was not found").status(404);
	else res.send(result).status(200);
});


app.post("/createTask", async (req, res) => {
	// const timeStamp = Date.now(); // timestamp in milliseconds
	// const seconds = Math.floor(timeStamp/1000) // timestamp in seconds
	const bsonTimestamp = new Timestamp();
	// const dateFormat = 'dd-MM-yyyy';
	// const parsedDate = parse(req.body.taskDateTime, dateFormat, new Date());
	
	let newDocument = {
		task_category_code: req.body.taskCategoryCode,
		task_date_time: req.body.taskDateTime,
		week_number: req.body.weekNumber,
		order_name: req.body.orderName,
		task_desc: req.body.taskDesc,
		comments: req.body.comments,
		proj_id: req.body.projId,
		created_by: req.body.userId,
		created_on: bsonTimestamp,
		updated_on: bsonTimestamp
	};
	let collection = await db.collection("tasks_t");
	let result = await collection.insertOne(newDocument);
	res.send(result).status(204);
});
app.get("/lab", async (req, res) => {
	try {
	  let collection = await db.collection("tasks_t");
	  const results = await collection.aggregate([
		dateConversionStage,
		{
		  $match: { task_category_code: "Lab Work" }
		}
	  ]).toArray();
	  res.json(results).status(200);
	} catch (error) {
	  console.error('Error fetching and filtering data:', error);
	  res.status(500).send('Internal Server Error');
	}
  });
  app.get("/analysis", async (req, res) => {
	try {
	  let collection = await db.collection("tasks_t");
	  const results = await collection.aggregate([
		dateConversionStage,
		{
		  $match: { task_category_code: "Data Analysis" }
		}
	  ]).toArray();
	  res.json(results).status(200);
	} catch (error) {
	  console.error('Error fetching and filtering data:', error);
	  res.status(500).send('Internal Server Error');
	}
  });
  
  app.get("/curation", async (req, res) => {
	try {
	  let collection = await db.collection("tasks_t");
	  const results = await collection.aggregate([
		dateConversionStage,
		{
		  $match: { task_category_code: "Data Curation" }
		}
	  ]).toArray();
	  res.json(results).status(200);
	} catch (error) {
	  console.error('Error fetching and filtering data:', error);
	  res.status(500).send('Internal Server Error');
	}
  });
  app.get("/development", async (req, res) => {
	try {
	  let collection = await db.collection("tasks_t");
	  const results = await collection.aggregate([
		dateConversionStage,
		{
		  $match: { task_category_code: "Development" }
		}
	  ]).toArray();
	  res.json(results).status(200);
	} catch (error) {
	  console.error('Error fetching and filtering data:', error);
	  res.status(500).send('Internal Server Error');
	}
  });
  
app.post("/taskInfo", async (req, res) => {
	let collection = await db.collection("tasks_t");
	let query = {  task_category_code: req.body.taskCategoryCode};
	const query_cond = {
		$match: query
	}
	const result = await collection.aggregate([dateConversionStage, query_cond]).toArray();

	if (!result) res.send("Task was not found").status(404);
	else res.send(result).status(200);
});

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});