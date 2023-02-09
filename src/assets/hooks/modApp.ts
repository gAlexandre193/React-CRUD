import { useContext } from "react";
import { ModAppContext } from "../../context/modApp";

export const useModApp = () => useContext(ModAppContext);