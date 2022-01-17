import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepository from '../../hooks/useSingleRepository';
import Text from '../Text';
import RepoInfo from './RepoInfo';
import ReviewList from './ReviewList';

const SingleRepository = () => {
  const { id } = useParams();
  const repository = useSingleRepository(id);

  return (
    (repository && (
      <View>
        <RepoInfo isSingleRepo item={repository} />
        <ReviewList />
      </View>
    )) || <Text>Loading...</Text>
  );
};

export default SingleRepository;
