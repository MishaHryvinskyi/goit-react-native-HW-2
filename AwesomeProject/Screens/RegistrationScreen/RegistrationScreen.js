import React, { useState } from 'react';
import { 
    ImageBackground, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight 
} from 'react-native';
import { 
    text,
    img,
    con,
    input,
    button,
    buttonText 
} from './RegistrationScreen.styled';

const image = require('../../image/Photo.png');

export function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={img}>
        <View style={con}>
          <Text style={text}>Реєстрація</Text>
          <TextInput
            style={input}
            placeholder="Логін"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={input}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={input}
            placeholder="Пароль"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableHighlight
            underlayColor="#FFA700"
            style={button}
          >
            <Text style={buttonText}>Зареєстуватися</Text>
          </TouchableHighlight>
          <Text>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
