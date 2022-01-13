import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

console.log(Constants.manifest.extra.apolloURI);

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloURI
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
};

export default createApolloClient;
