import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { STAGING_URI } from './configs';

const makeApolloClient = () => {
  const link = new HttpLink({
    uri: STAGING_URI,
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
    connectToDevTools: true,
  });

  return client;
};

export default makeApolloClient;
