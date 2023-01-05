import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { OpenModalProvider } from './Providers/OpenModal';

import { TokenProvider } from './Providers/Token';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TokenProvider>
      <OpenModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </OpenModalProvider>
    </TokenProvider>
  </React.StrictMode>
);
