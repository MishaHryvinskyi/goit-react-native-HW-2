import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

const image = require('../../image/Photo.png');

export function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <View style={styles.con}>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            placeholder="Логін"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableHighlight
            underlayColor="#FFA700"
            style={styles.button}
          >
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableHighlight>
          <Text>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 32,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    width: 375,
  },
  con: {
    backgroundColor: '#fff',
    height: 550,
    width: 375,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 219,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 343,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#E8E8E8',
  },
  button: {
    backgroundColor: '#FF6C00',
    height: 51,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});