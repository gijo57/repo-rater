import React from 'react';
import ReviewItem from './ReviewItem';
import { View, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem key={item.id} item={item} />}
    />
  );
};

export default ReviewList;
