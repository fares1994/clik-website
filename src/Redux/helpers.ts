import { FetchResult } from '@apollo/react-hooks';
import { ApolloQueryResult } from 'apollo-client';
import axios from 'axios';
import { DocumentNode, GraphQLError } from 'graphql';
import { useState, useEffect } from 'react';
// import {t} from 'i18next';
import { client } from '../App';
import { startLoading, stopLoading } from './configsReducer';
import { store } from './store';

interface QueryProps<T, R> {
  query: DocumentNode;
  successCallback?: (data: ApolloQueryResult<R>) => void;
  errorCallback?: (error: GraphQLError) => void;
  errorCallbackNoReturn?: (error: GraphQLError) => void;
  finallyCallback?: () => void;
  refreshToken?: boolean;
  variables?: T;
}
export const Query = async <T, R>({
  query,
  variables,
  successCallback,
  errorCallback,
}: QueryProps<T, R>) => {
  store.dispatch(startLoading());
  try {
    const data = await client.query<R, T>({
      query,
      variables,
      context: {
        headers: {},
      },
      fetchPolicy: 'network-only',
    });
    successCallback && successCallback(data);
    return data;
  } catch (error) {
    if (errorCallback) {
      return errorCallback(error as GraphQLError);
    }
    // eslint-disable-next-line no-console
    console.log(error, 'errorrrrrrrrr');
  } finally {
    store.dispatch(stopLoading());
  }
};

interface MutationProps<T, R> {
  mutation: DocumentNode;
  successCallback?: (
    data: FetchResult<R, Record<string, unknown>, Record<string, unknown>>
  ) => void;
  errorCallback?: (error: GraphQLError) => void;
  errorCallbackNoReturn?: (error: GraphQLError) => void;
  finallyCallback?: () => void;
  refreshToken?: boolean;
  variables?: T;
}

export const Mutation = async <T, R>({
  mutation,
  variables,
  successCallback,
  finallyCallback,
  errorCallback,
}: MutationProps<T, R>) => {
  store.dispatch(startLoading());
  try {
    const data = await client.mutate<R, T>({
      mutation,
      variables,
      context: {
        headers: {},
      },
    });
    successCallback && successCallback(data);
    return data;
  } catch (error) {
    if (errorCallback) {
      return errorCallback(error as GraphQLError);
    }

    // eslint-disable-next-line no-console
    console.log(error, 'error');
  } finally {
    store.dispatch(stopLoading());
    finallyCallback && finallyCallback();
  }
};

export const useAxiosGet = <T>({
  url,
}: {
  url: string;
}): { data: T | null; error: string; loaded: boolean } => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoaded(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, error, loaded };
};
