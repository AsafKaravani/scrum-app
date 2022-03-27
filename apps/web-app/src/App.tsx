import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { LocationOn, Restore, Home } from '@mui/icons-material';
import './App.css';
import { useState } from 'react';
import { Layout } from './features/layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { client } from './services/apollo-client';

function App() {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<> home page </>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
