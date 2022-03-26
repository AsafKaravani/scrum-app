import { gql } from '@apollo/client';
import { client } from '../apollo-client';

const updateMutation = gql`
  mutation UpdateAttendance($attendanceId: uuid!, $attendanceSetInput: user_attendances_set_input!) {
    response: update_user_attendances_by_pk(pk_columns: { id: $attendanceId }, _set: $attendanceSetInput) {
      id
    }
  }
`;

export const updateAttendance = (attendanceId: string, attendanceSetInput: { holding: string }) =>
  client.mutate({
    mutation: updateMutation,
    variables: {
      attendanceId,
      attendanceSetInput,
    },
  });
