import { StyleSheet } from 'react-native';

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

  export const {
    text,
    img,
    con,
    input,
    button,
    buttonText
    } = styles;