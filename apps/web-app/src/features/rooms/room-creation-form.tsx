import { Button, OutlinedInput } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Color from 'color';
import { useState } from 'react';
import './room-creation-form.css';

Color('#7743CE').lighten(0.5);
export function RoomCreationForm() {
  const theme = useTheme();
  const primaryColorLighten = Color(theme.palette.primary.main).lightness(95).hex();
  const [roomName, setRoomName] = useState(''); 

  return (
    <form className="RoomCreationForm">
      <OutlinedInput
            value={roomName}
            onChange={event => setRoomName(event.target.value)}
            style={{ background: primaryColorLighten, border: 'none', width: '100%' }}
            placeholder="Enter room name"
          />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: 20, borderRadius: 10 }}
          size="large"
          startIcon={<i className="fa fa-screen-users" />}
          onClick={() => {}}
        >
          <b>Open Room</b>
        </Button>
      </div>
    </form>
  );
}
