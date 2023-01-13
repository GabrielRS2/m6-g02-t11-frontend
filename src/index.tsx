import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { OpenModalProvider } from './Providers/OpenModal';

import { TokenProvider } from './Providers/Token';
import { UpdateProductProvider } from './Providers/UpdateProduct';
import { UserIdProvider } from './Providers/UserId';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TokenProvider>
      <OpenModalProvider>
        <UserIdProvider>
          <UpdateProductProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UpdateProductProvider>
        </UserIdProvider>
      </OpenModalProvider>
    </TokenProvider>
  </React.StrictMode>
);
