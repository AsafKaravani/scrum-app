import { Button, FormControl, OutlinedInput } from '@mui/material';

export function RoomCreationForm() {
  return (
    <>
      <FormControl style={{ width: '100%' }}>
        <OutlinedInput placeholder="Enter room name" />
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
    </>
  );
}
