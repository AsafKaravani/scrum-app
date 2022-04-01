import { Button, FormControl, OutlinedInput } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Color from 'color';
import './room-creation-form.css';

Color('#7743CE').lighten(0.5);
export function RoomCreationForm() {
  const theme = useTheme();

  const primaryColorLighten = Color(theme.palette.primary.main).lightness(95).hex();

  return (
    <div className="RoomCreationForm">
      <FormControl style={{ width: '100%' }}>
        <OutlinedInput style={{ background: primaryColorLighten, border: 'none' }} placeholder="Enter room name" />
      </FormControl>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: 20, borderRadius: 10 }}
          size="large"
          startIcon={<i className="fa fa-screen-users" />}
        >
          <b>Open Room</b>
        </Button>
      </div>
    </div>
  );
}
