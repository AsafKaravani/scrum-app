import { gql } from '@apollo/client';
import { client } from '../apollo-client';

const usersInRoom = gql`
  query UsersInRoom($roomId: uuid!) {
    response: rooms_by_pk(id: $roomId) {
      attendances {
        id
        user {
          id
          name
        }
        holding
        roles
      }
    }
  }
`;

export const getUsersInRoom = (roomId: string) =>
  client.mutate({
    mutation: usersInRoom,
    variables: {
      roomId,
    },
  });

const usersInRoomSubscription = gql`
  subscription UsersInRoomSubscription($roomId: uuid!) {
    response: rooms_by_pk(id: $roomId) {
      attendances {
        id
        user {
          id
          name
        }
        holding
        roles
      }
    }
  }
`;

type UsersInRoom = {
  response: {
    attendances: {
      id: string;
      user: {
        id: string;
        name: string;
      };
      holding: string;
      roles: any;
    }[];
  };
};

export const subscribeToUsersInRoom = (roomId: string) =>
  client.subscribe<UsersInRoom>({
    query: usersInRoomSubscription,
    variables: {
      roomId,
    },
  });
