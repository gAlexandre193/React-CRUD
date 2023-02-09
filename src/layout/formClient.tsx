import React, { useState } from "react";
import { ClientT } from "../assets/types/client";
import { useModApp } from "../assets/hooks/modApp";
import { useClients } from "../assets/hooks/clients";
import Input from "../components/input";
import "../assets/styles/formClient.css";

function FormClient({ formData }: { formData: ClientT }) {
  const [inputName, setInputName] = useState(formData.name);
  const [inputAge, setInputAge] = useState(`${formData.age}`);
  const { handlerChangerToDataRead } = useModApp();
  const { handlerAddClient, handlerClearUpdateDate, handlerUpdateAClient } = useClients();

  const handlerAbort = () => {
    // Reset Data
    if(formData.id !== "") {
      handlerClearUpdateDate();
    } else {
      setInputName("");
      setInputAge("0");
    }

    // Close Form Client
    handlerChangerToDataRead();
  };
  const handlerAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let id = formData.id === "" 
      ? `${new Date().getTime()}`
      : formData.id;

    let dataClient = { id, name: inputName, age: parseInt(inputAge) };

    if(formData.id === "") {
      handlerAddClient(dataClient);
    } else {
      handlerUpdateAClient(dataClient);
    }

    
    setTimeout(() => handlerChangerToDataRead(), 350);
  };

  return (
    <form className="formContainer" onSubmit={(event) => handlerAdd(event)}>
      <Input 
        label="Nome" 
        value={inputName} 
        onChange={setInputName} 
      />
      
      <Input 
        label="Idade" 
        type="number"
        value={inputAge} 
        onChange={setInputAge} 
      />

      <div className="formActionContainer">
        <button 
          type="button"
          className="btnContainer btnAbort"
          onClick={handlerAbort}
        > 
          Cancelar 
        </button>
        
        <button 
          type="submit"
          className="btnContainer btnConfirme"
        > 
          Adicionar 
        </button>
      </div>
    </form>
  );
}

export default FormClient;