import React, { useContext, useRef } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { GlobalContext } from '../context/globalContext';
import tw from 'twrnc';
import colors from '../globalStyles/colors';
import { AntDesign } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

const FormModal = () => {
  const { dispatch, modalVisible } = useContext(GlobalContext);
  const textInputRef = useRef(null);
  const handlePress = () => {
    if (!textInputRef.current.value) {
      return Alert.alert('Error', 'Can not add empty field');
    }
    const todo = {
      id: uuid.v4(),
      title: textInputRef.current.value,
    };
    dispatch({ type: 'ADD_TODO', todo });
    dispatch({ type: 'MODAL_VISIBLE' });
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        dispatch({ type: 'MODAL_VISIBLE' });
      }}
    >
      <View style={[styles.modal, tw`relative m-auto`]}>
        <TouchableOpacity
          style={tw`absolute right-3 top-3`}
          onPress={() => dispatch({ type: 'MODAL_VISIBLE' })}
        >
          <AntDesign name='closecircleo' size={28} color='deeppink' />
        </TouchableOpacity>
        <Text style={tw`text-white text-xl self-center mt-0 mb-5`}>
          Create New TODO
        </Text>
        <TextInput
          style={tw`py-2 border-b border-[#B5BAC7] text-lg text-white`}
          placeholder='Description...'
          multiline
          placeholderTextColor={'#B5BAC7'}
          ref={textInputRef}
          onChangeText={(val) => (textInputRef.current.value = val)}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 p-2 mt-5`}
          onPress={handlePress}
        >
          <Text style={tw`text-white font-bold text-center text-lg`}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.lightBlue,
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '95%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default FormModal;
