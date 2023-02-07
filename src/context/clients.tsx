import React, { createContext, useContext, useState } from "react";

type ClientT = {
  id: string;
  name: string;
  age: number;
  actions?: [];
};

type ClientsContextT = {
  clientList: ClientT[];
};

const DEFAULT_VALUE = {
  clientList: [],
};

const ClientsContext = createContext<ClientsContextT>(DEFAULT_VALUE);

export const useClients = () => useContext(ClientsContext);

function ClientsProvider({ children }) {
  const [clientList, setClientList] = useState<ClientT[]>([
    { id: "ID&name='Alex'", name: 'Alex', age: 18, actions: [] },
    { id: "ID&name='Lucas'", name: 'Lucas', age: 10, actions: [] },
    // { id: "ID&name='Sarah'", name: 'Sarah', age: 6, actions: [] },
    // { id: "ID&name='Luiz'", name: 'Luiz', age: 23, actions: [] },
    // { id: "ID&name='Mateus'", name: 'Mateus', age: 15, actions: [] },
    // { id: "ID&name='Matheus'", name: 'Matheus', age: 18, actions: [] },
    // { id: "ID&name='João'", name: 'João', age: 19, actions: [] },
    // { id: "ID&name='Marcos'", name: 'Marcos', age: 18, actions: [] },
  ]);

  const VALUE = { clientList };

  return (
    <ClientsContext.Provider value={VALUE}>
      {children}
    </ClientsContext.Provider>
  );
}

export default ClientsProvider;