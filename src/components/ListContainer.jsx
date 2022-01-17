import React from 'react';
import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListContainer = ({ repositories }) => {
  const history = useHistory();
  const handlePress = (id) => {
    history.push(`/repositories/${id}`);
  };

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem key={item.id} item={item} />
        </Pressable>
      )}
    />
  );
};

export default ListContainer;
