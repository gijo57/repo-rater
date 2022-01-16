import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorized = () => {
  const { data, loading, error } = useQuery(GET_AUTHORIZED_USER);

  if (!loading) {
    const user = data.authorizedUser;
    return user;
  }
};

export default useAuthorized;
