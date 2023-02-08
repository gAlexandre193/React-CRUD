import React, { useState } from "react";
import { useClients } from "./context/clients";
import Layout from "./layout";
import Table from "./layout/table";
import FormClient from "./layout/formClient";

function App() {
  const [modApp, setModApp] = useState<"dataRead" | "dataAdd">("dataRead");
  const { clientList } = useClients();

  // Actions
  const handlerToDataAddMod = () => setModApp("dataAdd");
  const handlerToDataReadMod = () => setModApp("dataRead");

  return (
    <Layout 
      title={`
        ${modApp !== "dataRead" ? "Cadastro de" : ''} 
        Clientes
      `} 
      modApp={modApp}
      changeModApp={handlerToDataAddMod}
    >
      {modApp === 'dataRead' 
        ? <Table tableData={clientList} />
        : <FormClient changeModApp={handlerToDataReadMod} />}
    </Layout>
  );
}

export default App;