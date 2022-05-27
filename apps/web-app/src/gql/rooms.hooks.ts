import { Gql } from './../../utils/generated/zeus/index';
import { useTypedQuery, useTypedMutation, useTypedSubscription } from '../../utils/generated/zeus/apollo';
import { ValueTypes } from '../../utils/generated/zeus/index';

export const useSubscription_GET_ROOM = (roomId: string) =>
  useTypedSubscription({
    Rooms_by_pk: [
      { id: roomId }, {
        id: true,
        name: true,
        Users: [{}, { name: true, card: true, showingCard: true }]
      }
    ]
  });

export const GET_ROOM_BY_NAME = (name: string) => Gql('query')({
  Rooms: [
    { where: { name: { _eq: name } } }, {
      id: true,
      name: true,
      Users: [{}, { name: true, card: true, showingCard: true }]
    }
  ]
})

export const useQuery_GET_ROOM_BY_NAME = (name: string, options?: Parameters<typeof useTypedQuery>[1]) =>
  useTypedQuery({
    Rooms: [
      { where: { name: { _eq: name } } }, {
        id: true,
        name: true,
        Users: [{}, { name: true, card: true, showingCard: true }]
      }
    ]
  }, options);

export const INSERT_ROOM = (room: ValueTypes['Rooms_insert_input']) => Gql('mutation')({
  insert_Rooms_one: [
    {
      object: room,
    },
    {
      id: true,
      name: true,
    },
  ],
})

export const useMutation_INSERT_ROOM = (room: ValueTypes['Rooms_insert_input']) =>
  useTypedMutation({
    insert_Rooms_one: [
      {
        object: room,
      },
      {
        id: true,
        name: true,
      },
    ],
  });
