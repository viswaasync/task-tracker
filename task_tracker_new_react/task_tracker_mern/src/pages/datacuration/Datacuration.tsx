import { useState } from "react";
import "./datacuration.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";


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
const Datacuration = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="datacuration">
      <div className="info">
        <h1>Data Curation </h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="datacuration" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="datacuration" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="task" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Datacuration;
