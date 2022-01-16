import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import NavTab from './NavTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

const AppBar = ({ user }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <NavTab contents="Repositories" path="/" />
        {user ? (
          <NavTab contents="Sign Out" path="/signin" />
        ) : (
          <NavTab contents="Sign In" path="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
