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
      <BottomNavigationAction
        label="History"
        icon={<i className="fa-solid fa-clock-rotate-left" style={{ marginBottom: 5 }} />}
      />
      <BottomNavigationAction
        label="Invite"
        icon={<i className="fa-solid fa-1x fa-user-plus" style={{ marginBottom: 5, left: 2, position: 'relative' }} />}
      />
    </BottomNavigation>
  );
}
