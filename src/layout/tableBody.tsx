import React from "react";
import { ClientT } from "../assets/types/client";
import { useClients } from "../assets/hooks/clients";
import { IconEdit, IconTrash } from "../assets/icons";

function TableBody({ tableData }: { tableData: ClientT }) {
  const { handlerDeleteClient, handlerAddUpdateDate } = useClients();

  return (
    <div className="tBodyRowContainer">
      <h5 className="tBodyItem"> {tableData.id} </h5>
      <h5 className="tBodyItem"> {tableData.name} </h5>
      <h5 className="tBodyItem"> {`${tableData.age}`.padStart(2, "0")} </h5>
      <div className="tBodyItem">
        <IconEdit 
          isPointer 
          color="#84FAC1" 
          size={20} 
          mr="12px" 
          action={() => handlerAddUpdateDate(tableData)} 
        />

        <IconTrash 
          isPointer 
          color="#ED6A5A" 
          size={20} 
          action={() => handlerDeleteClient(tableData.id)} 
        />
      </div>
    </div>
  );
}

export default TableBody;