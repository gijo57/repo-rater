import React from 'react';
import useRepositories from '../hooks/useRepositories';
import ListContainer from './ListContainer';

const RepositoryList = () => {
  const repositories = useRepositories();

  return (
    <ListContainer
      testID="repositoryListContainer"
      repositories={repositories}
    />
  );
};

export default RepositoryList;
