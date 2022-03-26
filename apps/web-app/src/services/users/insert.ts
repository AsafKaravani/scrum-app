import { gql } from '@apollo/client';
import { client } from '../apollo-client';
import { UserInput } from '../../models/user.models';

const insertMutation = gql`
  mutation InsertUser($user: users_insert_input!) {
    response: insert_users_one(object: $user) {
      id
      name
      created_at
    }
  }
`;

export const insert = (userInput: UserInput) =>
  client.mutate({
    mutation: insertMutation,
    variables: {
      user: userInput,
    },
  });
