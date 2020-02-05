import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { auth } from '../config';

export default Loading = ({ navigation }) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      navigation.navigate(user ? 'Home' : 'Login');
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WorkTime</Text>
      <ActivityIndicator size='large' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
});
