import React from "react";
import { useModApp } from "./assets/hooks/modApp";
import { useClients } from "./assets/hooks/clients";
import Layout from "./layout";
import Table from "./layout/table";
import FormClient from "./layout/formClient";

function App() {
  const { modApp } = useModApp();
  const { clientList, updateData } = useClients();

  return (
    <Layout 
      title={`
        ${modApp !== "dataRead" ? "Cadastro de" : ''} 
        Clientes
      `} 
    >
      {modApp === 'dataRead' 
        ? <Table tableData={clientList} />
        : <FormClient formData={updateData ? updateData : { id: "", name: "", age: 0 }} />}
    </Layout>
  );
}

export default App;