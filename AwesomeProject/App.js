import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View, Button } from 'react-native';

const image = require('./image/Photo.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.con}>
        <Text style={styles.text}>Реєстрація</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button 
          style={styles.button}
          title="Зареєстуватися"
        />
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 375,
  },
  text: {
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
    textAlign: 'center',
    marginTop: 92,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 375,
  },
  con: {
    backgroundColor: '#fff',
    height: 549,
    width: 375,
    borderRadius: 25,
    marginTop: 219,
  },
  button: {
    backgroundColor: '#FF6C00',
    height: 51,
    width: 200,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 8,
  },
  input: {
    
  },
});
