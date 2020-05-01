import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import Menu from './components/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
