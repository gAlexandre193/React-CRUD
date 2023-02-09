import { useContext } from "react";
import { ClientsContext } from "../../context/clients";

export const useClients = () => useContext(ClientsContext);