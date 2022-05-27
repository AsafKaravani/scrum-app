import { INSERT_ROOM } from './rooms.hooks';
import { Gql } from './../../utils/generated/zeus/index';
import { useTypedMutation, useTypedSubscription } from '../../utils/generated/zeus/apollo';
import { ValueTypes } from '../../utils/generated/zeus/index';

export const useMutation_INSERT_USER = (user: ValueTypes['Users_insert_input']) =>
  useTypedMutation({
    insert_Users_one: [
      {
        object: user,
      },
      {
        id: true,
        name: true,
      },
    ],
  });

export const INSERT_USER = (user: ValueTypes['Users_insert_input']) => Gql('mutation')({
  insert_Users_one: [
    {
      object: user,
    },
    {
      id: true,
      name: true,
    },
  ],
});

export const useSubscription_GET_USER = (userId: string) => useTypedSubscription({
  Users_by_pk: [
    { id: userId },
    {
      id: true,
      name: true,
      card: true,
      roomId: true,
      showingCard: true,
    }
  ]
})

export const UPDATE_CARD = (userId: string, card: string) => Gql('mutation')({
  update_Users_by_pk: [
    {
      pk_columns: {
        id: userId
      },
      _set: {
        card: card
      }
    },
    {
      id: true
    }
  ]
})