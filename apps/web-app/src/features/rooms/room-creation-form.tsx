import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

export function RoomCreationForm() {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">Well never share your email.</FormHelperText>
    </FormControl>
  );
}
