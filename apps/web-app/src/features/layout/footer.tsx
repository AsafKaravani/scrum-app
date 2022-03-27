import { Favorite, LocationOn, Restore } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';

export function Footer() {
  const [value, setValue] = useState();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<Restore />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
    </BottomNavigation>
  );
}
