import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import "../styles/table.css";

function Table({ tableData = [] }) {
  return (
    <div className="tableContainer">
      <TableHeader />
      {tableData.length > 0
        ? tableData.map((item) => <TableBody key={item.id} tableData={item} />)
        : <h2 className="warningText"> Nenhum dado foi informado </h2>}
    </div>
  );
}

export default Table;