import { useClients } from "./context/clients.tsx";
import Layout from "./layout";
import Table from "./layout/table";

function App() {
  const { clientList } = useClients();

  return (
    <Layout title="Clientes">
      <Table tableData={clientList} />
    </Layout>
  );
}

export default App;