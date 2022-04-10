import { Paper } from '@mui/material';
import { RoomCreationForm } from '../features/rooms/room-creation-form';

export function HomePage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flex: 1, flexDirection: 'column' }}>
      <Paper style={{ padding: 20, margin: 20, width: 'calc(100% - 40px)', height: 'min-content' }} variant="outlined">
        <RoomCreationForm />
      </Paper>
    </div>
  );
}
