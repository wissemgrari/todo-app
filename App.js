import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import Navbar from './components/Navbar';
import FloatButton from './components/FloatButton';
import colors from './globalStyles/colors';
import GlobalContextProvider from './context/globalContext';

export default function App() {
  return (
    <GlobalContextProvider>
      <View style={styles.container}>
        <Navbar />
        <List />
        <FloatButton />
        <StatusBar style='light' />
      </View>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.darkBlue,
    position: 'relative',
  },
});
