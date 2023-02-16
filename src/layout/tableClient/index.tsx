import React from 'react';
import { IconEdit, IconTrash } from '../../assets/icons';
// Hooks
import { useClient } from '../../assets/hooks/client';
// Style
import './style.tableClient.css';

type TableClientT = {
  handlerChangerToModAddClient: () => void;
};

const TableClient = ({ handlerChangerToModAddClient }: TableClientT) => {
  const { clientList, handlerAddClientEdit, handlerDeletedClient } = useClient();

  return (
    <div className='tableContainer'>
      <div className='tHeaderContainer dFlex dBetween'>
        <h5 className='hItemText'> Id </h5>
        <h5 className='hItemText'> Nome </h5>
        <h5 className='hItemText'> Idade </h5>
        <h5 className='hItemText'> Action </h5>
      </div>

      {clientList.length > 0
        ? clientList.map((item) => (
          <div key={item.id} className='tBodyRowContainer dFlex dBetween'>
            <h6 className='bItemText'> {item.id} </h6>
            <h6 className='bItemText'> {item.name} </h6>
            <h6 className='bItemText'> {item.age} </h6>
            <div className='bItemActionContainer dFlex'>
              <IconEdit 
                color='#07b000' 
                classCustom='cPointer' 
                action={() => handlerAddClientEdit(item, handlerChangerToModAddClient)}
              />

              <IconTrash 
                color='#ED6A5A' 
                classCustom='cPointer' 
                action={() => handlerDeletedClient(item)} 
              />
            </div>
          </div>
        ))
        : <h4 className='warningText dFlex dCenter'> Não temos clientes cadastrados </h4>}
    </div>
  );
}

export default TableClient;