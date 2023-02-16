import React, { useState } from 'react';
import { IconPlus } from './assets/icons';
// Context
import { useClient } from './assets/hooks/client';
// Layout
import TableClient from './layout/tableClient';
import FormClient from './layout/formClient';
// Style
import './app.css';

function App() {
  const [modApp, setModApp] = useState<'modApp' | 'modAddClient'>('modApp');
  const { clientEdit } = useClient();

  const renderText = () => {
    if(modApp === 'modApp') {
      return 'Clientes';
    };

    if(modApp === 'modAddClient') {
      if(!clientEdit) {
        return 'Cadastro de Cliente';
      };

      if(modApp) {
        return 'Atualizar Cliente';
      };
    };
  };

  // Actions
  const handlerChangerToModAddClient = () => setModApp('modAddClient');
  const handlerChangerToModApp = () => setModApp('modApp');

  return (
    <div className='wrapper'>
      <div className='appContainer dFlex'>

        <div className='headerContainer dFlex dBetween'>
          <h2 className='titleText'> {renderText()} </h2>
          
          {modApp === 'modApp'
            ? <IconPlus classCustom='cPointer' action={handlerChangerToModAddClient}/>
            : null}
        </div>

        <div className='sectionContainer'>
          <div className='scrollContainer'>

            {modApp === 'modApp'
              ? <TableClient handlerChangerToModAddClient={handlerChangerToModAddClient} />
              : <FormClient clientEditData={clientEdit} handlerChangerToModApp={handlerChangerToModApp} />}

          </div>
        </div>  
      
      </div>
    </div>
  );
}

export default App;