import React, { useState } from 'react';
import { ClientT } from '../../assets/types/client';
// Context
import { useClient } from '../../assets/hooks/client';
// Components
import FormInput from '../../components/formInputs';
// Style
import './style.formClient.css';

type FormClientT = {
  clientEditData: ClientT | null;
  handlerChangerToModApp: () => void;
};

const FormClient = ({ clientEditData, handlerChangerToModApp }: FormClientT) => {
  const [inputName, setInputName] = useState<string>(clientEditData?.name ?? '');
  const [inputAge, setInputAge] = useState<number>(clientEditData?.age ?? 0);
  const { handlerAddClient, handlerClientEdit, handlerClearClientEdit } = useClient();

  // Actions
  const handlerFormAction = (e: any) => {
    e.preventDefault();

    const id  = clientEditData?.id ?? `${new Date().getTime()}`;
    const dataClient = { id, name: inputName, age: inputAge };

    if(!clientEditData) {
      handlerAddClient(dataClient);
    };

    if(clientEditData) {
      handlerClientEdit(dataClient);
    };

    handlerCloseForm();
  };
  const handlerCloseForm = () => {
    // Reset Form States
    setInputName('');
    setInputAge(0);

    if(clientEditData) {
      handlerClearClientEdit();
    }

    handlerChangerToModApp();
  };

  return (
    <form className='formContainer dFlex' onSubmit={handlerFormAction}>
      <FormInput label='Nome' autoFocus value={inputName} changerValue={setInputName} />
      <FormInput type='number' label='Idade' value={inputAge} changerValue={setInputAge} />

      <div className='formActionContainer dFlex'>
        <button type='button' value='cancelar' className='btnContainer btnCancel' onClick={handlerCloseForm}>
          Cancelar
        </button>

        <button type='submit' value='adicionar' className='btnContainer btnConfirm'>
          Adicionar
        </button>
      </div>
    </form>
  );
}

export default FormClient;