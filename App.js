import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './src/components/screen/RegistrationScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your a!!!!&&&</Text>
      <StatusBar style="auto" />
      <RegistrationScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display:"flex",
    // flexDirection:"column",
    backgroundColor: '#fff',
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
