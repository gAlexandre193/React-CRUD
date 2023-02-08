import React from "react";
import { ClientT } from "../assets/types/client";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import "../assets/styles/table.css";

type TableT = {
  tableData: ClientT[];
};

function Table({ tableData }: TableT) {
  return (
    <div className="tableContainer">
      <TableHeader />
      {tableData.length > 0
        ? tableData.map((item) => 
          <TableBody key={item.id} tableData={item} />)
        : <h2 className="warningText"> Nenhum dado foi informado </h2>}
    </div>
  );
}

export default Table;