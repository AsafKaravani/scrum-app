import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { LocationOn, Restore, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState();
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
      </nav>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Home />} />
        <BottomNavigationAction label="Favorites" icon={<Restore />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
