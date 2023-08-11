import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import db from "./db/conn_db.js";
import { ObjectId } from "mongodb";


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
		createdOn: { $dateToString: { date: '$createdOn', format: '%Y-%m-%d' }},
		updatedOn: { $dateToString: { date: '$updatedOn', format: '%Y-%m-%d' } }
	}
 };

app.get("/userList", async (req, res) => {
	console.log(Date.now())
	let collection = await db.collection("users_t");

	// const dateConversionStage = {
	// 	$addFields: {
	// 		createdOn: { $dateToString: { date: '$createdOn', format: '%Y-%m-%d' }},
	// 		updatedOn: { $dateToString: { date: '$updatedOn', format: '%Y-%m-%d' } }
	// 	}
	//  };
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
	let ts = Date.now();
	
	let newDocument = {
	  taskCategories: req.body.taskCategories,
	  dateTime: req.body.dateTime,
	  weekNumber: req.body.weekNumber,
	  orderNumber: req.body.orderNumber,
	  taskDesc: req.body.taskDesc,
	  comments: req.body.comments,
	  projID: req.body.projId,
	  userID: req.body.userId,
	  createdOn: ts,
	  UpdatedOn: ts,
	};
	let collection = await db.collection("records");
	let result = await collection.insertOne(newDocument);
	res.send(result).status(204);
});

app.post("/taskInfo", async (req, res) => {
	let collection = await db.collection("tasks_t");
	let query = {  taskCategoryCode: req.body.taskCategory};
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