import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { RoomCreationForm } from '../features/rooms/room-creation-form';

export function HomePage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flex: 1, background: 'red', flexDirection: 'column' }}>
      <Carousel NavButton={<div />}>
        <div style={{ background: 'blue', width: '100%' }}>asdasd</div>
        <div>13123</div>
        <div>asdas123123d</div>
      </Carousel>
      <Paper style={{ padding: 20, margin: 20, width: 'calc(100% - 40px)', height: 'min-content' }} variant="outlined">
        <RoomCreationForm />
      </Paper>
    </div>
  );
}
