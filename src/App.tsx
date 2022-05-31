import React from 'react';
import AppRoutes from './Routes';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import makeApolloClient from './apolloConfigs';
import { ApolloProvider } from 'react-apollo';

export const client = makeApolloClient();

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
