import React from 'react';
import AppRoutes from './Routes';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import makeApolloClient from './apolloConfigs';
import { ApolloProvider } from 'react-apollo';
import { AppShell, MantineProvider } from '@mantine/core';
import Theme from './theme/index';
import GlobalStyles from './theme/loadFonts';
export const client = makeApolloClient();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <MantineProvider theme={Theme} withGlobalStyles withNormalizeCSS>
          <AppShell
            // padding="md"
            // navbar={
            //   <Navbar width={{ base: 300 }} height={500} p="xs">
            //     {/* Navbar content */}
            //   </Navbar>
            // }
            // header={
            //   <Header height={60} p="xs">
            //     {/* Header content */}
            //   </Header>
            // }

            styles={(theme) => ({
              main: {
                backgroundColor: theme.colors.gray[0],
                padding: 0,
                zIndex: -4,
              },
            })}
          >
            <AppRoutes />
          </AppShell>
        </MantineProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
