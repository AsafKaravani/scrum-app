import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';
import { Layout } from './features/layout/layout';
import { client } from './services/apollo-client';
import { HomePage } from './pages/home-page';
import { theme } from './theme';
import { RoomPage } from './pages/room-page';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/room" element={<RoomPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
