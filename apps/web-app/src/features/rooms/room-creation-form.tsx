import { Button, FormControl, OutlinedInput } from '@mui/material';
import { useState } from 'react';

export function RoomCreationForm() {
  const [formValues, setFormValues] = useState();

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
        >
          Open Room
        </Button>
      </div>
    </>
  );
}
