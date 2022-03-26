import { useTypedMutation } from '../../utils/generated/zeus/apollo';
import { ValueTypes } from '../../utils/generated/zeus/index';

export const useMutation_updateAttendance = (id: string, input: ValueTypes['user_attendances_set_input']) =>
  useTypedMutation({
    update_user_attendances_by_pk: [
      {
        pk_columns: {
          id,
        },
        _set: input,
      },
      {
        id: true,
      },
    ],
  });

export const useMutation_INSERT_USER = (user: ValueTypes['users_insert_input']) =>
  useTypedMutation({
    insert_users_one: [
      {
        object: user,
      },
      {
        id: true,
        name: true,
        created_at: true,
      },
    ],
  });
