import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { RoomCreationForm } from '../features/rooms/room-creation-form';

export function HomePage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flex: 1, background: 'red', flexDirection: 'column' }}>
      <Carousel>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
      </Carousel>
      <Paper style={{ padding: 20, margin: 20, width: 'calc(100% - 40px)', height: 'min-content' }} variant="outlined">
        <RoomCreationForm />
      </Paper>
    </div>
  );
}
