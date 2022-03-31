import { Paper } from '@mui/material';
import { RoomCreationForm } from '../features/rooms/room-creation-form';

export function HomePage() {
  return (
    <div>
      <Paper style={{ padding: 20, margin: 20 }} variant="outlined">
        <RoomCreationForm />
      </Paper>
    </div>
  );
}
