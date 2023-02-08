import React, { useState } from "react";
import Input from "../components/input";
import "../assets/styles/formClient.css";

function FormClient({ changeModApp }: { changeModApp: any }) {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("0");

  const handlerAbort = () => {
    // Reset Data
    setInputName("");
    setInputAge("0");

    // Close Form Client
    changeModApp();
  };
  const handlerAddClient = () => {
    alert("Client Add");
    
    changeModApp();
  };

  return (
    <form className="formContainer">
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
          className="btnContainer btnAbort"
          onClick={handlerAbort}
        > 
          Cancelar 
        </button>
        
        <button 
          className="btnContainer btnConfirme"
          onClick={handlerAddClient}
        > 
          Adicionar 
        </button>
      </div>
    </form>
  );
}

export default FormClient;