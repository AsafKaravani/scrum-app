import { Paper } from '@mui/material';
import { RoomCreationForm } from '../features/rooms/room-creation-form';

export function HomePage() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', flex: 1 }}>
      <Paper style={{ padding: 20, margin: 20, width: '100%', height: 'min-content' }} variant="outlined">
        <RoomCreationForm />
      </Paper>
    </div>
  );
}
