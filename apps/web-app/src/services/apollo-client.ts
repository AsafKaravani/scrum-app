import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const GRAPHQL_API_URL = 'assuring-egret-26.hasura.app/v1/graphql';
const GRAPHQL_API_URL_HTTP = `https://${GRAPHQL_API_URL}`;
const GRAPHQL_API_URL_WS = `wss://${GRAPHQL_API_URL}`;

const httpLink = new HttpLink({
  uri: GRAPHQL_API_URL_HTTP,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: GRAPHQL_API_URL_WS,
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
