import React, { createContext, useState, useEffect } from 'react';
import { ClientT } from '../assets/types/client';

type ClientContextT = {
  clientList: ClientT[];
  clientEdit: ClientT | null;
  handlerAddClient: (dataClient: ClientT) => void;
  handlerClientEdit: (dataClient: ClientT) => void;
  handlerDeletedClient: (dataClient: ClientT) => void;
  handlerAddClientEdit: (dataClient: ClientT, callback: () => void) => void;
  handlerClearClientEdit: () => void;
};

const DEFAULT_VALUES = {
  clientList: [],
  clientEdit: null,
  handlerAddClient: () => {},
  handlerClientEdit: () => {},
  handlerDeletedClient: () => {},
  handlerAddClientEdit: () => {},
  handlerClearClientEdit: () => {},
};

export const ClientContext = createContext<ClientContextT>(DEFAULT_VALUES);

const ClientProvider = ({ children }: { children: any }) => {
  const [clientList, setClientList] = useState<ClientT[]>(() => {
    const getClientLocalStore = localStorage.getItem('@client-list');

    if(getClientLocalStore) {
      return JSON.parse(getClientLocalStore);
    };

    return [];
  });
  const [clientEdit, setClientEdit] = useState<ClientT | null>(null);

  // Actions - ClientList
  const handlerAddClient = (dataClient: ClientT) => setClientList((state) => [...state, dataClient]);
  const handlerClientEdit = (dataClient: ClientT) => {
    const findClientIndex = clientList.findIndex((state) => state.id === dataClient.id);

    clientList[findClientIndex].name = dataClient.name;
    clientList[findClientIndex].age = dataClient.age;
  };
  const handlerDeletedClient = (dataClient: ClientT) => {
    let removeClient = clientList.filter((state) => state.id !== dataClient.id);

    setClientList(removeClient);
  };

  // Actions - ClientEdit
  const handlerAddClientEdit = (dataClient: ClientT, callback: () => void) => {
    setClientEdit(dataClient);

    callback();
  };
  const handlerClearClientEdit = () => setClientEdit(null);

  useEffect(() => {
    clientList.length > 0
      ? localStorage.setItem('@client-list', JSON.stringify(clientList))
      : localStorage.removeItem('@client-list');
  }, [clientList, clientEdit]);

  const CONTEXT_VALUES = { clientList, clientEdit, handlerAddClient, handlerClientEdit, handlerDeletedClient, handlerAddClientEdit, handlerClearClientEdit };

  return (
    <ClientContext.Provider value={CONTEXT_VALUES}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;