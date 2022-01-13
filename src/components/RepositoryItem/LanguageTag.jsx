import React from 'react';
import { View } from 'react-native';
import Text from '../Text';

const LanguageTag = ({ language, styles }) => {
  return (
    <View style={styles.langContainer}>
      <Text style={styles.text}>{language}</Text>
    </View>
  );
};

export default LanguageTag;
