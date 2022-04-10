import { Button, FormControl, OutlinedInput, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useTheme } from '@mui/material/styles';
import Color from 'color';
import './room-creation-form.css';

Color('#7743CE').lighten(0.5);
export function RoomCreationForm() {
  const theme = useTheme();
  const primaryColorLighten = Color(theme.palette.primary.main).lightness(95).hex();

  const { getValues, control, handleSubmit } = useForm({
    defaultValues: {
      roomName: '',
    },
  });

  return (
    <form className="RoomCreationForm">
      <Controller
        name="roomName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <OutlinedInput
            value={value}
            onChange={onChange}
            style={{ background: primaryColorLighten, border: 'none', width: '100%' }}
            placeholder="Enter room name"
          />
        )}
      />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: 20, borderRadius: 10 }}
          size="large"
          startIcon={<i className="fa fa-screen-users" />}
          onClick={handleSubmit(() => {
            console.log(getValues());
          })}
        >
          <b>Open Room</b>
        </Button>
      </div>
    </form>
  );
}
