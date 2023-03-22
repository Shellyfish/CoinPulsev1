import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import CoinDetailedScreen from './src/Screens/CoinDetailedScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailedScreen/>
      <StatusBar style="light" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});

