import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GlobalContextProvider from './context/globalContext';

import colors from './globalStyles/colors';
import List from './components/List';
import Navbar from './components/Navbar';
import FloatButton from './components/FloatButton';
import FormModal from './components/FormModal';

export default function App() {
  return (
    <GlobalContextProvider>
      <View style={styles.container} accessible={false}>
        <Navbar />
        <List />
        <FormModal />
        <FloatButton />
      </View>
      <StatusBar style='light' />
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
