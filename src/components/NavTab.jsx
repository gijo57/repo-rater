import React from 'react';
import Text from './Text';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10
  },
  text: {
    color: 'white'
  }
});

const NavTab = ({ contents, path }) => {
  return (
    <View style={styles.container}>
      <Link exact to={path}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
          {contents}
        </Text>
      </Link>
    </View>
  );
};

export default NavTab;
