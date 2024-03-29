import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { auth } from '../config';

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Home'))
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WorkTime</Text>
      <Text>Login</Text>
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      <TextInput
        style={styles.textInput}
        autoCapitalize='none'
        placeholder='Email'
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize='none'
        placeholder='Password'
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <Button title='Login' onPress={handleLogin} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingLeft: 10
  },
  text: {
    fontSize: 30
  }
});
