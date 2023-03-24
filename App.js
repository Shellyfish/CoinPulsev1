import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import CoinDetailedScreen from './src/Screens/CoinDetailedScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <NavigationContainer theme={{
      colors: {
        backgroundColor:'#121212'
      }
    }}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="light" /> 
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});


