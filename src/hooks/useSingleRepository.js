import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id }
  });

  if (!loading) {
    const repository = data.repository;
    return repository;
  }
};

export default useSingleRepository;
