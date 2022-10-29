import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import colors from '../globalStyles/colors';

export default function FloatButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        tw`absolute bottom-5 right-5 w-15 h-15 rounded-full flex items-center justify-center`,
      ]}
    >
      <AntDesign name='plus' size={38} color={colors.secondary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
