import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import RepositoryItemStats from '../RepositoryItemStats';
import LanguageTag from './LanguageTag';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  statsContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  langContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: 0,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 3,
    backgroundColor: theme.colors.primary
  },
  text: {
    color: 'white'
  },
  description: {
    marginTop: 20,
    marginBottom: 15,
    color: theme.colors.textSecondary,
    width: '80%'
  },
  element: {
    marginVertical: 5,
    marginHorizontal: 5
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 20
  },
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const RepositoryItem = ({
  item: {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl
  }
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.wrapper}>
          <Text fontSize="subheading" fontWeight="bold">
            {fullName}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <LanguageTag styles={styles} language={language} />
        </View>
      </View>
      <View style={[styles.statsContainer, styles.element]}>
        <RepositoryItemStats amount={stargazersCount} statistic="Stars" />
        <RepositoryItemStats amount={forksCount} statistic="Forks" />
        <RepositoryItemStats amount={reviewCount} statistic="Reviews" />
        <RepositoryItemStats amount={ratingAverage} statistic="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
