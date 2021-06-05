import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './theme';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Orders from './pages/Orders/Orders';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Sidebar />
        <Content>
          <Orders />
        </Content>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


/**
 *
 * TODO:
 * Breadcrumbs, Tabs, Input, Sidebar, Table, Button, Badge, Chip, Dropdown
 */