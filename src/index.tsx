import React from 'react';
import { createRoot } from 'react-dom/client';
import ClientProvider from './context/clientContext';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <ClientProvider>
      <App />
    </ClientProvider>
  </React.StrictMode>
);