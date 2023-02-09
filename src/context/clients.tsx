import React, { createContext, useState, useEffect } from "react";
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
  const [clientList, setClientList] = useState<ClientT[]>(() => {
    const getClient = localStorage.getItem("@client-list");

    if(getClient) {
      return JSON.parse(getClient);
    };

    return [];
  });
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

  useEffect(() => {
    clientList.length > 0
      ? localStorage.setItem("@client-list", JSON.stringify(clientList))
      : localStorage.removeItem("@client-list");
  }, [clientList]);

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