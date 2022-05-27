import { Button, OutlinedInput } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Color from 'color';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_ROOM_BY_NAME, INSERT_ROOM } from '../../gql/rooms.hooks';
import './room-creation-form.css';

export function RoomCreationForm() {
  const theme = useTheme();
  const primaryColorLighten = Color(theme.palette.primary.main).lightness(95).hex();
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate();
  const tryToEnterROom = async () => {
    if (!roomName) {
      alert('No room name!');
      return;
    }
    console.log('fetching room.');

    const { Rooms: rooms } = await GET_ROOM_BY_NAME(roomName);
    console.log(rooms);

    let res;
    if (rooms.length === 0) {
      console.log('creating room.');
      res = await INSERT_ROOM({ name: roomName });
      console.log(res);
    }

    navigate(`/room?id=${res?.insert_Rooms_one?.id || rooms[0].id}`)

  }

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
          style={{ marginTop: 20, borderRadius: 10 }}
          size="large"
          startIcon={<i className="fa fa-screen-users" />}
          onClick={tryToEnterROom}
        >
          <b>Open Room</b>
        </Button>
      </div>
    </form>
  );
}
