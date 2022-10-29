import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';

export default function List() {
  const { todos, modalVisible } = useContext(GlobalContext);
  return (
    <View style={[styles.list, { opacity: modalVisible ? 0.1 : null }]}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
