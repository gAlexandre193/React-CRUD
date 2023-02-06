import { IconEdit, IconTrash } from "../icons";

function TableBody({ tableData }) {
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
          action={() => alert("Edit Clicker")} 
        />

        <IconTrash 
          isPointer 
          color="#ED6A5A" 
          size={20} 
          action={() => alert("Trash Clicker")} 
        />
      </div>
    </div>
  );
}

export default TableBody;