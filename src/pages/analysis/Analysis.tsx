import React, { useState, useEffect } from "react";
import "./analysis.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 150 },
  { field: "task_category_code", headerName: "Task Category", width: 150 },
  { field: "week_number", headerName: "Week Number", width: 150 },
  { field: "order_name", headerName: "Order Name", width: 150 },
  { field: "task_desc", headerName: "Task Description", width: 200 },
  { field: "comments", headerName: "Comments", width: 150 },
  { field: "proj_id", headerName: "Project ID", width: 150 },
  { field: "created_by", headerName: "Created By", width: 150 },
  { field: "created_on", headerName: "Created On", width: 150 },
  { field: "task_date_time", headerName: "Task Date Time", width: 200 },
];

const apiUrl = "http://localhost:5050/tasklist";

const Analysis = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        const dataWithIds = jsonData.map((row, index) => ({ ...row, id: index }));

        setData(dataWithIds);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="analysis">
      <div className="info">
        <h1>Task List</h1>
        <button onClick={() => setOpen(true)}>Add New Task</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="analysis" columns={columns} rows={data} />
      )}
      {open && <Add slug="task" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Analysis;
