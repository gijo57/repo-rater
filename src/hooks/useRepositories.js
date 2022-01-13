import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  console.log('Ran');
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  if (!loading) {
    const repositories = data.repositories.edges.map((repo) => repo.node);
    return repositories;
  }
};

export default useRepositories;
