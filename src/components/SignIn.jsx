import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required')
});

const initialValues = {
  username: '',
  password: ''
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
