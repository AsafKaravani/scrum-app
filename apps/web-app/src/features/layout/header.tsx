import { Box, AppBar, Toolbar } from '@mui/material';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} alt="scrum.bet logo" style={{ height: 18 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
