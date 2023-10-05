import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register';
import { Result } from './src/screens/Result';
import { Routes } from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
   
      <Routes/>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ab2222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
