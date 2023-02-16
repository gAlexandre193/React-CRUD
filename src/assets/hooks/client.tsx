import { useContext } from 'react';
import { ClientContext } from '../../context/clientContext';

export const useClient = () => useContext(ClientContext);