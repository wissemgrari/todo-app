import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import colors from '../globalStyles/colors';
import { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

export default function ListItem({ item }) {
  const { dispatch } = useContext(GlobalContext);

  const handlePress = () => {
    dispatch({ type: 'COMPLETE_TODO', id: item.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_TODO', id: item.id });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        { backgroundColor: colors.lightBlue },
        tw`flex flex-row justify-between items-center p-4 rounded-3xl mb-5`,
      ]}
    >
      <Text
        style={[
          styles.todo,
          item.isCompleted
            ? { textDecorationLine: 'line-through', opacity: 0.4 }
            : null,
        ]}
      >
        {item.title}
      </Text>
      <Pressable style={tw`bg-red-500 p-2 rounded-full`} onPress={handleDelete}>
        <Ionicons name='trash-outline' size={24} color='white' />
      </Pressable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    color: '#fff',
    fontSize: 20,
  },
});
