import React from 'react';
import ReactDOM from 'react-dom';
import { UserContextProvider } from './context/UserContext';
import { AppRouter } from './routers/AppRouter'


ReactDOM.render(
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  ,
  document.getElementById('root')
);

