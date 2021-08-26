import React from 'react';
import ReactDOM from 'react-dom';
import { UserContextProvider } from './context/UserContext';
import { AppRouter } from './routers/AppRouter'


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

