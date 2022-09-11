import React from 'react';
import AppRoutes from './Routes';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import makeApolloClient from './apolloConfigs';
import { ApolloProvider } from 'react-apollo';
import { AppShell, MantineProvider } from '@mantine/core';
import Theme from './theme/index';
import GlobalStyles from './theme/loadFonts';
import 'rsuite/styles/index.less';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

export const client = makeApolloClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <ApolloProvider client={client}>
          <MantineProvider theme={Theme} withGlobalStyles withNormalizeCSS>
            <AppShell
              padding="md"
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
                  zIndex: 0,
                },
              })}
            >
              <AppRoutes />
            </AppShell>
          </MantineProvider>
        </ApolloProvider>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
