import React from 'react';
import { BreakpointProvider } from 'react-socks';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './theme';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Orders from './pages/Orders/Orders';
import './App.css';
import PlayGround from './pages/Orders/PlayGround';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <BreakpointProvider>
          <Sidebar />
          <Content>
            <PlayGround />
          </Content>
        </BreakpointProvider>
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