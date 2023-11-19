// import axios from "axios";
import axios from "axios";
import { columns } from "./Column";
import { DataTable } from "./DataTable";
import { useState } from "react";

import { useEffect } from "react";
import { Button } from "./ui/Button";

import { NavLink } from "react-router-dom";

const getData = async () => {
  const { data } = await axios.get("http://localhost:3000/api/v1/logs");
  console.log(data);
  return data;
};

const LogTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="container flex flex-row justify-center gap-10 mt-4 text-2xl font-bold ">
        <h1>Log Table</h1>
        <NavLink to="/search">
          <Button variant={"secondary"}>Create Log</Button>
        </NavLink>
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
export default LogTable;
