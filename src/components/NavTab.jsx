import React from 'react';
import Text from './Text';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import { useHistory } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10
  }
});

const NavTab = ({ contents, path }) => {
  const history = useHistory();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleLogout = async () => {
    console.log('hols');
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/signin');
  };

  return (
    <View style={styles.container}>
      {(contents === 'Sign Out' && (
        <Pressable onPress={handleLogout}>
          <Text fontWeight="bold" fontSize="subheading" color="white">
            {contents}
          </Text>
        </Pressable>
      )) || (
        <Link exact to={path}>
          <Text fontWeight="bold" fontSize="subheading" color="white">
            {contents}
          </Text>
        </Link>
      )}
    </View>
  );
};

export default NavTab;
