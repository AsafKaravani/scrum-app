import { useTypedQuery, useTypedMutation } from '../../utils/generated/zeus/apollo';
import { ValueTypes } from '../../utils/generated/zeus/index';

export const useQuery_USERS_IN_ROOM_QUERY = (roomId: string) =>
  useTypedQuery({
    rooms_by_pk: [
      {
        id: roomId,
      },
      {
        id: true,
        attendances: [
          {},
          {
            id: true,
            holding: true,
            user: {
              id: true,
              name: true,
            },
          },
        ],
      },
    ],
  });

export const useMutation_INSERT_ROOM = (room: ValueTypes['rooms_insert_input']) =>
  useTypedMutation({
    insert_rooms_one: [
      {
        object: room,
      },
      {
        id: true,
        name: true,
        number: true,
      },
    ],
  });
