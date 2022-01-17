import React from 'react';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';
import Text from './Text';

const SingleRepository = () => {
  const { id } = useParams();
  const repository = useSingleRepository(id);

  return (
    (repository && <RepositoryItem isSingleRepo item={repository} />) || (
      <Text>Loading...</Text>
    )
  );
};

export default SingleRepository;
