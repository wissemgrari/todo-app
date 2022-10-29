import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../globalStyles/colors';
import tw from 'twrnc';
import { Ionicons, Octicons } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View style={styles.nav}>
      <View style={tw`p-4 flex flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center`}>
          <Text style={styles.title}>Todo</Text>
          <Octicons
            style={tw`mt-1`}
            name='tasklist'
            size={26}
            color={colors.secondary}
          />
        </View>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name='sunny-outline' size={34} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: colors.lightBlue,
    paddingTop: StatusBar.currentHeight,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: 30,
    color: colors.secondary,
    marginRight: 10,
  },
  icon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
