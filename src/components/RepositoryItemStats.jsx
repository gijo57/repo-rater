import React from 'react';
import Text from './Text';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  statContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    color: theme.colors.textSecondary
  }
});

const Stat = ({ amount, statistic }) => {
  return (
    <View>
      <Text fontWeight="bold" fontSize="subheading">
        {amount}
      </Text>
      <Text style={styles.text}>{statistic}</Text>
    </View>
  );
};

const RepositoryItemStats = ({ amount, statistic }) => {
  return (
    <View>
      <Stat amount={amount} statistic={statistic} />
    </View>
  );
};

export default RepositoryItemStats;
