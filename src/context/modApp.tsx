import React, { createContext, useState } from "react";

type ModAppContextT = {
  modApp: string;
  handlerChangerToDataAdd: () => void,
  handlerChangerToDataRead: () => void,
};

const DEFAULT_VALUE = {
  modApp: "",
  handlerChangerToDataAdd: () => {},
  handlerChangerToDataRead: () => {},
};

export const ModAppContext = createContext<ModAppContextT>(DEFAULT_VALUE);

function ModAppProvider({ children }: { children: any }) {
  const [modApp, setModApp] = useState<"dataRead" | "dataAdd">("dataRead");

  // Actions
  const handlerChangerToDataAdd = () => setModApp("dataAdd");
  const handlerChangerToDataRead = () => setModApp("dataRead");

  const VALUE = { 
    modApp,
    handlerChangerToDataAdd,
    handlerChangerToDataRead,
  };

  return (
    <ModAppContext.Provider value={VALUE}>
      {children}
    </ModAppContext.Provider>
  );
}

export default ModAppProvider;