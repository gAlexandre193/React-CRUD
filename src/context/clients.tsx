import React, { createContext, useState } from "react";
import { ClientT } from "../assets/types/client";
import { useModApp } from "../assets/hooks/modApp";

type ClientsContextT = {
  clientList: ClientT[];
  updateData: ClientT | null;
  handlerAddClient: (dataClient: ClientT) => void;
  handlerUpdateAClient: (dataClient: ClientT) => void;
  handlerDeleteClient: (idClient: string) => void;
  handlerAddUpdateDate: (dataClient: ClientT) => void;
  handlerClearUpdateDate: () => void;
};

const DEFAULT_VALUE = {
  clientList: [],
  updateData: null,
  handlerAddClient: () => {},
  handlerUpdateAClient: () => {},
  handlerDeleteClient: () => {},
  handlerAddUpdateDate: () => {},
  handlerClearUpdateDate: () => {},
};

export const ClientsContext = createContext<ClientsContextT>(DEFAULT_VALUE);

function ClientsProvider({ children }: { children: React.ReactElement }) {
  const [clientList, setClientList] = useState<ClientT[]>([
    { id: "ID&name='Alex'", name: 'Alex', age: 18, actions: [] },
    { id: "ID&name='Lucas'", name: 'Lucas', age: 10, actions: [] },
  ]);
  const [updateData, setUpdateDate] = useState<ClientT | null>(null);
  const { handlerChangerToDataAdd } = useModApp();

  // Actions
  const handlerAddClient = (dataClient: ClientT) => setClientList((state) => [...state, dataClient]);
  const handlerUpdateAClient = (dataClient: ClientT) => {
    let findIndex = clientList.findIndex((item) => item.id === dataClient.id);
    let copyClients = [...clientList];

    copyClients[findIndex].name = dataClient.name;
    copyClients[findIndex].age = dataClient.age;

    setClientList(copyClients);
  };
  const handlerDeleteClient = (idClient: string) => {
    const filterTask = clientList.filter((item) => item.id !== idClient);

    setClientList(filterTask);
  };
  const handlerAddUpdateDate = (dataClient: ClientT) => {
    setUpdateDate(dataClient);

    handlerChangerToDataAdd();
  }; 
  const handlerClearUpdateDate = () => setUpdateDate(null);

  const VALUE = { 
    clientList,
    updateData,
    handlerAddClient,
    handlerUpdateAClient,
    handlerDeleteClient,
    handlerAddUpdateDate,
    handlerClearUpdateDate,
  };

  return (
    <ClientsContext.Provider value={VALUE}>
      {children}
    </ClientsContext.Provider>
  );
}

export default ClientsProvider;