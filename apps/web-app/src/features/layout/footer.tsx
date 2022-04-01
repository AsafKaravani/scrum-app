import { Favorite, LocationOn, Restore } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

export function Footer() {
  const [value, setValue] = useState();
  const theme = useTheme();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={{ background: theme.palette.primary.main }}
    >
      <BottomNavigationAction label="Recents" icon={<Restore />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
    </BottomNavigation>
  );
}
