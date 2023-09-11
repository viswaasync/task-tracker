import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./lab.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "name",
    type: "string",
    headerName: "User Name",
    width: 150,
  },
  {
    field: "Category",
    type: "string",
    headerName: "Task Category",
    width: 150,
  },
  {
    field: "order",
    type: "string",
    headerName: "Order Number",
    width: 100,
  },
  {
    field: "description",
    type: "string",
    headerName: "Task Description",
    width: 150,
  },
 
  {
    field: "project",
    headerName: "Comments",
    type: "string",
    width: 200,
  },

  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "boolean",
  },
];

const Lab = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lab">
      <div className="info">
        <h1>Lab Work</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="task" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Lab;
