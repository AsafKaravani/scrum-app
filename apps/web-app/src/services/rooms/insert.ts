import { gql } from '@apollo/client';
import { client } from '../apollo-client';
import { RoomInput } from '../../models/room.models';

const insertMutation = gql`
  mutation InsertRoom($room: rooms_insert_input!) {
    response: insert_rooms_one(object: $room) {
      id
      name
      number
    }
  }
`;

export const insert = (roomInput: RoomInput) =>
  client.mutate({
    mutation: insertMutation,
    variables: {
      user: roomInput,
    },
  });
