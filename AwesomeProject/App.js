import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

image = require('./image/Photo.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.con}>
        <Text style={styles.text}>Реєстрація</Text>
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
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    color: 'skyblue',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 375,
  },
  con: {
    backgroundColor: 'grey',
    height: 549,
    width: 375,
    borderRadius: 25,
  },
});
