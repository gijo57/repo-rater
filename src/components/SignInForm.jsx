import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 30,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: theme.colors.textSecondary,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.input} onPress={onSubmit}>
        <Text color="white" fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
