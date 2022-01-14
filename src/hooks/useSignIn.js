import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const response = await mutate({ variables: { username, password } });
    const token = response.data.authorize.accessToken;

    await authStorage.setAccessToken(token);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
