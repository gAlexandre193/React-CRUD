import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import "../styles/table.css";

function Table() {
  const tableData = [
    { id: "ID&name='Alex'", name: 'Alex', age: 18, actions: [] },
    { id: "ID&name='Lucas'", name: 'Lucas', age: 10, actions: [] },
    { id: "ID&name='Sarah'", name: 'Sarah', age: 6, actions: [] },
    { id: "ID&name='Luiz'", name: 'Luiz', age: 23, actions: [] },
    { id: "ID&name='Mateus'", name: 'Mateus', age: 15, actions: [] },
    { id: "ID&name='Matheus'", name: 'Matheus', age: 18, actions: [] },
    { id: "ID&name='João'", name: 'João', age: 19, actions: [] },
    { id: "ID&name='Marcos'", name: 'Marcos', age: 18, actions: [] },
  ];

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