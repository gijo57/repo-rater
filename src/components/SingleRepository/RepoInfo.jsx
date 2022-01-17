import React from 'react';
import RepositoryItem from '../RepositoryItem';

const RepoInfo = ({ repository, isSingleRepo }) => {
  return <RepositoryItem isSingleRepo={isSingleRepo} item={repository} />;
};

export default RepoInfo;
